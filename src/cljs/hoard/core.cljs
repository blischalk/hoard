(ns hoard.core
  (:require [cljs.core.async :as async
             :refer [chan put! chan <!]]
            [enfocus.core :as ef]
            [enfocus.events :as events]
            [enfocus.effects :as effects]
            [hoard.acquire :as acquire]
            [hoard.data-processing :as dp]
            [om.core :as om]
            [om.dom :as dom]
            [weasel.repl :as repl])
  (:require-macros [enfocus.macros :as em]
                   [cljs.core.async.macros :refer [go]]))

#_(when-not (repl/alive?)
  (repl/connect "ws://localhost:9001"))

;; Util Methods

(defn hidden [is-hidden]
  (if is-hidden
    #js {:display "none"}
    #js {}))

;; App state

(defonce app-state (atom {}))

(defn index-user! [owner screen-name comm]
  (.log js/console "the screen name is " screen-name)
  (om/set-state! owner :screen-name "")
  (om/set-state! owner :users [screen-name])
  (acquire/data screen-name comm))

(defn handle-change [e owner {:keys [:screen-name]}]
  (let [value (.. e -target -value)]
    (om/set-state! owner :btn-disabled (= value ""))
    (om/set-state! owner :screen-name value)))

(defn user-being-indexed [user owner]
  (reify
    om/IRender
    (render [_]
      (dom/li nil user))))

(defn users-being-indexed [_ {:keys [users]}]
  (apply dom/ul #js {:id "indexing-users" :style (hidden (empty? users))}
         (om/build-all user-being-indexed users)))

(defn user-to-index [owner state]
  (dom/input #js {:type "text"
                  :placeholder "User to Index"
                  :ref "user-to-index"
                  :value (:screen-name state)
                  :onChange #(handle-change % owner state)}))

(defn indexing-submit [owner state comm]
  (dom/button
   #js {:onClick #(put! comm
                        [:index-user (-> (om/get-node owner
                                                      "user-to-index")
                                         .-value)])
        :className "btn btn-submit"
        :disabled (:btn-disabled state)}
   "Index User"))

(defn indexing-ui [data owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (let [comm (chan)
            complete (chan)]
        (om/set-state! owner :comm comm)
        (go (while true
              (let [[type value] (<! comm)]
                (index-user! owner value complete))))))
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
