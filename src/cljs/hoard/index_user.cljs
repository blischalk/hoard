(ns hoard.index-user
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :as async
             :refer [put! chan]]
            [hoard.acquire :as acquire]
            [hoard.data-processing :as dp]
            [hoard.error-handling :as eh]
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
  (om/update-state! owner :users #(conj % screen-name))
  (acquire/data screen-name comm))

;; Indexing Complete

(defn index-complete [owner screen_name]
  (.log js/console "user " screen_name "has been indexed!")
  (ius/get-indexed-users (om/root-cursor state/app-state))
  (om/update-state! owner :users (fn [col] (vec (remove #(= % screen_name) col)))))

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
    :user-indexed (index-complete owner val)
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

;; Main UI
(defn main-view [app-state owner state comm]
  (dom/div nil
           (eh/error-flash app-state)
           ;; Display the indexing form view
           (user-indexing-form owner state comm)
           ;; Display indexing status view
           (ubi/users-being-indexed owner state)
           (om/build ius/users-in-index app-state)))

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
       :btn-disabled true
       :users []})
    om/IRenderState
    (render-state [this {:keys [comm] :as state}]
      ;; Display the view
      (main-view app-state owner state comm))))


(defroute indexing-path "/" []
  (om/root indexing-ui state/app-state
    {:target (. js/document (getElementById "main-content"))}))

(defn init [] (secretary/dispatch! (indexing-path)))
