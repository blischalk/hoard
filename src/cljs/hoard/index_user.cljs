(ns hoard.index-user
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :as async
             :refer [put! chan]]
            [hoard.acquire :as acquire]
            [hoard.data-processing :as dp]
            [hoard.error-handling :as eh]
            [hoard.es-tweet-formatter :as estf]
            [hoard.health-check :as hc]
            [hoard.indexed-users :as ius]
            [hoard.state :as state]
            [hoard.users-being-indexed :as ubi]
            [secretary.core :as secretary :refer-macros [defroute]]
            [om.core :as om]
            [om.dom :as dom]))

;; Indexing Start

(defn index-user! [owner screen-name comm]
  (om/set-state! owner :screen-name "")
  (om/transact! (om/root-cursor state/app-state) :indexing-users #(conj % screen-name))
  (acquire/data screen-name comm))

;; Indexing Complete

(defn index-complete [owner screen_name comm]
  (.log js/console "user " screen_name "has been indexed!")
  (ius/get-indexed-users (om/root-cursor state/app-state))
  (om/transact! (om/root-cursor state/app-state)
                :indexing-users
                (fn [col] (vec (remove #(= % screen_name) col)))))

;; Event Dispatch

;; If ui updates are required we have functions within
;; this namespace that will take care of that and
;; forward any service requests otherwise we can
;; call for service requests directly
(defn handle-event [type owner val comm]
  (case type
    :error       (om/transact! (:errors (om/root-cursor state/app-state)) #(conj % val))
    :index-user  (index-user! owner val comm)
    :user-tweets (dp/init val comm)
    :user-indexed (index-complete owner val comm)
    nil))

;; Handlers

(defn handle-screen-name-change [e owner {:keys [:screen-name]}]
  (let [value (.. e -target -value)]
    (om/set-state! owner :btn-disabled (or (= value "") (not (empty? errors))))
    (om/set-state! owner :screen-name value)))

;; Indexing User UI

(defn user-to-index [owner state]
  (dom/input #js {:type "text"
                  :className "form-control"
                  :placeholder "User to Index"
                  :ref "user-to-index"
                  :value (:screen-name state)
                  :onChange #(handle-screen-name-change % owner state)}))

(defn indexing-submit [owner state comm]
  (dom/button
   #js {:onClick (fn [] (put! comm
                              [:index-user (-> (om/get-node owner
                                                            "user-to-index")
                                               .-value)])
                   (om/set-state! owner :btn-disabled true)
                   (om/set-state! owner :screen-name ""))
        :className "btn btn-primary"
        :disabled (:btn-disabled state)}
   "Index User"))


(defn user-indexing-form [owner state comm]
  (dom/div #js {:id "index-user"
                :className "section"}
           (dom/div #js {:className "input-group"}
                    (user-to-index owner state)
                    (dom/span #js {:className "input-group-btn"}
                              (indexing-submit owner state comm)))))


(defn js->map->js [fnk col]
  (clj->js (vec (map fnk col))))


(defn js->map->field->js [field col]
  (js->map->js #(aget % field) col))


(defn build-graph [rows]
  ;; Place shared info in let bindings
  (let [data (clj->js rows)
        counts (js->map->field->js "doc_count" data)
        names (js->map->field->js "key" data)
        margin {:top 20 :right 30 :bottom 30 :left 40}
        width (- 960 (:left margin) (:right margin))
        width-plus-margins (+ width (:left margin) (:right margin))
        height (- 500 (:top margin) (:bottom margin))
        height-plus-margins (+ height (:top margin) (:bottom margin))
        x (.rangeRoundBands (.ordinal js/d3.scale)  (clj->js [0 width]) 0.1)
        y (.range (.linear js/d3.scale) (clj->js [height 0]))
        _ (.domain y (clj->js [0 (js/d3.max counts)]))
        _ (.domain x names)
        xAxis (.. js/d3.svg axis (scale x) (orient "bottom"))
        yAxis (.. js/d3.svg axis (scale y) (orient "left"))
        chart (.. js/d3
                  (select ".chart")
                  (attr "width" width-plus-margins)
                  (attr "height" height-plus-margins))
        ;; Create main grouping
        grouping (.. chart
                     (append "g")
                     (attr "transform"
                           (str "translate("
                                (:left margin)
                                ","
                                (:top margin)
                                ")")))]

    ;; Add bar chart data inside main grouping
    (-> (-> grouping
            (.selectAll ".bar")
            (.data data)
            .enter
            (.append "rect"))
        (.attr "class" "bar")
        (.attr "x" (fn [d] (x (aget d "key"))))
        (.attr "y" (fn [d] (y (aget d "doc_count"))))
        (.attr "height" (fn [d] (- height (y (aget d "doc_count")))))
        (.attr "width" (.rangeBand x)))

    ;; Create grouping for x axis inside main grouping
    (.. grouping
        (append "g")
        (attr "class" "x axis")
        (attr "transform" (str "translate(0," height ")"))
        (call xAxis))

    ;; Create grouping for y axis inside main grouping
    (.. grouping
        (append "g")
        (attr "class" "y axis")
        (call yAxis))))

(defn user-graph [app-state owner]
  (reify
    om/IRenderState
    (render-state [this state]
      (dom/div #js {:id "user-graph"
                    :className "section"}
               (let [rows (.-value (:indexed-users app-state))
                     graph (dom/svg #js {:className "chart"})]
                 (when (not-empty rows) (build-graph rows))
                 graph)))))

;; Main UI
(defn main-view [app-state owner state comm]
  (dom/div nil
           (eh/error-flash app-state)
           ;; Display the indexing form view
           (user-indexing-form owner state comm)
           ;; Display indexing status view
           (om/build ubi/users-being-indexed (:indexing-users app-state))
           (om/build ius/users-in-index app-state)
           (om/build user-graph app-state)))

(defn indexing-ui [app-state owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (let [comm (chan)]

        ;; When app starts up we setup a communication channel
        ;; for the various stages to give status updates
        (om/set-state! owner :comm comm)

        (hc/analyze comm)

        ;; Listen for updates and dispatch accordingly
        (go
          (ius/get-indexed-users app-state)
          (while true
              (let [[type value] (<! comm)]
                (handle-event type owner value comm))))))
    om/IInitState
    ;; Setup our initial UI state
    (init-state [_]
      {:screen-name ""
       :btn-disabled true})
    om/IRenderState
    (render-state [this {:keys [comm] :as state}]
      ;; Display the view
      (main-view app-state owner state comm))))


(defroute indexing-path "/" []
  (om/root indexing-ui state/app-state
    {:target (. js/document (getElementById "main-content"))}))

(defn init [] (secretary/dispatch! (indexing-path)))
