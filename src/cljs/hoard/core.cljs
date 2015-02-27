(ns hoard.core
  (:require [cljs.core.async :as async
             :refer [chan put! chan <!]]
            [enfocus.core :as ef]
            [enfocus.events :as events]
            [enfocus.effects :as effects]
            [hoard.acquire :as acquire]
            [hoard.data-processing :as dp]
            [hoard.util :as util]
            [om.core :as om]
            [om.dom :as dom]
            [weasel.repl :as repl])
  (:require-macros [enfocus.macros :as em]
                   [cljs.core.async.macros :refer [go]]))

#_(when-not (repl/alive?)
  (repl/connect "ws://localhost:9001"))

;; App state

(defonce app-state (atom {}))

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
        :className "btn btn-submit"
        :disabled (:btn-disabled state)}
   "Index User"))

(defn user-indexing-form [owner state comm]
  (dom/div #js {:id "index-user"}
           (user-to-index owner state)
           (indexing-submit owner state comm)))

(defn main-view [owner state comm]
  (dom/div #js {:className "container"}
           (dom/h1 nil "Index User")
           ;; Display indexing status view
           (users-being-indexed owner state)
           ;; Display the indexing form view
           (user-indexing-form owner state comm)))

(defn indexing-ui [data owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (let [comm (chan)]
        ;; When app starts up we setup a communication channel
        ;; for the various stages to give status updates
        (om/set-state! owner :comm comm)

        ;; Listen for updates and dispatch accordingly
        (go (while true
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
      (main-view owner state comm))))

(om/root indexing-ui app-state
  {:target (. js/document (getElementById "my-app"))})
