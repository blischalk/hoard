(ns hoard.core
  (:require [cljs.core.async :as async
             :refer [chan put! chan <!]]
            [enfocus.core :as ef]
            [enfocus.events :as events]
            [enfocus.effects :as effects]
            [hoard.acquire :as acquire]
            [hoard.data-processing :as dp]
            [hoard.elasticsearch :as es]
            [hoard.util :as util]
            [om.core :as om]
            [om.dom :as dom]
            [weasel.repl :as repl])
  (:require-macros [enfocus.macros :as em]
                   [cljs.core.async.macros :refer [go]]))

#_(when-not (repl/alive?)
  (repl/connect "ws://localhost:9001"))

;; App state

(defonce app-state (atom {:indexed-users []}))

;; Indexing Status UI
(defn user-being-indexed [user owner]
  (reify
    om/IRender
    (render [_]
      (dom/li nil user))))

(defn users-being-indexed [_ {:keys [users]}]
  (dom/div #js {:style (util/hidden (empty? users))}
           (dom/h2 nil "Indexing Users:")
           (apply dom/ul #js {:id "indexing-users"}
                  (om/build-all user-being-indexed users))))

;; Indexing Controls UI

;; Handlers
(defn handle-screen-name-change [e owner {:keys [:screen-name]}]
  (let [value (.. e -target -value)]
    (om/set-state! owner :btn-disabled (= value ""))
    (om/set-state! owner :screen-name value)))

;; Indexing Start

(defn index-user! [owner screen-name comm]
  (.log js/console "the screen name is " screen-name)
  (om/set-state! owner :screen-name "")
  (om/set-state! owner :users [screen-name])
  (acquire/data screen-name comm))

;; Indexing Complete

(defn index-complete [owner val]
  (.log js/console "user " val "has been indexed!")
  (om/set-state! owner :users []))

;; Event Dispatch

;; If ui updates are required we have functions within
;; this namespace that will take care of that and
;; forward any service requests otherwise we can
;; call for service requests directly
(defn handle-event [type owner val comm]
  (case type
    :index-user  (index-user! owner val comm)
    :user-tweets (dp/init val comm)
    :user-indexed (index-complete owner val)
    nil))

;; UI Elements
(defn user-to-index [owner state]
  (dom/input #js {:type "text"
                  :className "form-control"
                  :placeholder "User to Index"
                  :ref "user-to-index"
                  :value (:screen-name state)
                  :onChange #(handle-screen-name-change % owner state)}))

(defn indexing-submit [owner state comm]
  (dom/button
   #js {:onClick #(put! comm
                        [:index-user (-> (om/get-node owner
                                                      "user-to-index")
                                         .-value)])
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

(defn indexed-user [user]
  (reify
    om/IRender
    (render [_] (dom/tr nil
                        (dom/td nil (aget user "key"))
                        (dom/td nil (aget user "doc_count"))))))

(defn users-in-index [app]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:id "indexed-users"
                    :className "section"}
               (dom/h2 nil "Indexed Users:")
               (.log js/console (:indexed-users app))
               (dom/table #js {:className "table"}
                          (dom/tr nil
                                  (dom/th nil "Screen Name")
                                  (dom/th nil "Tweet Count"))
                          (apply dom/tbody nil
                                 (om/build-all indexed-user (:indexed-users app))))))))

(defn main-view [app-state owner state comm]
  (dom/div #js {:className "container"}
           (dom/h1 nil "Hoard")
           ;; Display indexing status view
           (users-being-indexed owner state)
           ;; Display the indexing form view
           (user-indexing-form owner state comm)
           (om/build users-in-index app-state)))

(defn get-indexed-users [app-state]
  (es/get-users
   (fn [resp]
     (let [tweet-data (array-seq (aget resp "aggregations" "screen_names" "buckets"))]
       (.log js/console (aget (first tweet-data) "key"))
       (om/update! app-state
                     :indexed-users
                     tweet-data)))))

(defn indexing-ui [app-state owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (let [comm (chan)]

        ;; When app starts up we setup a communication channel
        ;; for the various stages to give status updates
        (om/set-state! owner :comm comm)

        ;; Listen for updates and dispatch accordingly
        (go
          (get-indexed-users app-state)
          (while true
              (let [[type value] (<! comm)]
                (handle-event type owner value comm))))))
    om/IInitState
    ;; Setup our initial UI state
    (init-state [_]
      {:screen-name ""
       :btn-disabled true
       :users []})
    om/IRenderState
    (render-state [this {:keys [comm] :as state}]
      ;; Display the view
      (main-view app-state owner state comm))))

(om/root indexing-ui app-state
  {:target (. js/document (getElementById "my-app"))})
