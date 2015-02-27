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

(defn handle-event [type owner val comm]
  (case type
    :index-user  (index-user! owner val comm)
    :user-tweets (dp/init val comm)
    :user-indexed (index-complete owner val)
    nil))

(defn indexing-ui [data owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (let [comm (chan)]
        (om/set-state! owner :comm comm)
        (go (while true
              (let [[type value] (<! comm)]
                (handle-event type owner value comm))))))
    om/IInitState
    (init-state [_]
      {:screen-name ""
       :btn-disabled true
       :users []})
    om/IRenderState
    (render-state [this {:keys [comm] :as state}]
      (dom/div #js {:className "container"}
               (dom/h2 nil "Index User")
               (users-being-indexed owner state)
               (dom/div #js {:id "index-user"}
                        (user-to-index owner state)
                        (indexing-submit owner state comm))))))

(om/root indexing-ui app-state
  {:target (. js/document (getElementById "my-app"))})
