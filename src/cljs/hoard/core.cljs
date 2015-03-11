(ns hoard.core
  (:require [cljs.core.async :as async
             :refer [put! chan <!]]
            [goog.events :as events]
            [goog.history.EventType :as EventType]
            [hoard.acquire :as acquire]
            [hoard.config :as config]
            [hoard.data-processing :as dp]
            [hoard.elasticsearch :as es]
            [hoard.error-handling :as eh]
            [hoard.health-check :as hc]
            [hoard.index-user :as iu]
            [hoard.indexed-users :as ius]
            [hoard.users-being-indexed :as ubi]
            [hoard.util :as util]
            [om.core :as om]
            [om.dom :as dom]
            [secretary.core :as secretary :refer-macros [defroute]]
            [weasel.repl :as repl])
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:import goog.History))

#_(when-not (repl/alive?)
  (repl/connect "ws://localhost:9001"))


;; App state

(defonce app-state (atom {:indexed-users []
                          :errors        []}))

;; Indexing Start

(defn index-user! [owner screen-name comm]
  (om/set-state! owner :screen-name "")
  (om/update-state! owner :users #(conj % screen-name))
  (acquire/data screen-name comm))

;; Indexing Complete

(defn index-complete [owner screen_name]
  (.log js/console "user " screen_name "has been indexed!")
  (ius/get-indexed-users (om/root-cursor app-state))
  (om/update-state! owner :users (fn [col] (vec (remove #(= % screen_name) col)))))

;; Event Dispatch

;; If ui updates are required we have functions within
;; this namespace that will take care of that and
;; forward any service requests otherwise we can
;; call for service requests directly
(defn handle-event [type owner val comm]
  (case type
    :error       (om/transact! (:errors (om/root-cursor app-state)) #(conj % val))
    :index-user  (index-user! owner val comm)
    :user-tweets (dp/init val comm)
    :user-indexed (index-complete owner val)
    nil))

;; Main UI
(defn main-view [app-state owner state comm]
  (dom/div nil
           (eh/error-flash app-state)
           ;; Display the indexing form view
           (iu/user-indexing-form owner state comm)
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
  (om/root indexing-ui app-state
    {:target (. js/document (getElementById "main-content"))}))


(defn nav-item [item owner]
  (reify
    om/IRenderState
    (render-state [this state]
      (dom/li #js {:className (if (= (:route item) (:current-path state))
                                "active"
                                "")}
              (dom/a #js {:href "#"
                          :onClick (fn [e]
                                     (.preventDefault e)
                                     (put! (:comm state)
                                           [:page-change (:route item)])
                                     (secretary/dispatch! (:route item)))}
                     (:text item))))))

(defn nav-items [state]
  (apply dom/ul #js {:className "nav nav-pills"}
         (om/build-all nav-item
                       (:pages state)
                       {:state {:comm (:comm state)
                                :current-path (:current-path state)}})))

(defn main-nav [app-state owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (let [comm (chan)]
        (om/set-state! owner :comm comm)

        (go
          (while true
              (let [[type value] (<! comm)]
                (when (= type :page-change)
                  (om/set-state! owner :current-path value)))))))
    om/IInitState
    ;; Setup our initial UI state
    (init-state [_]
      {:pages [{:text "Index User" :route (indexing-path)}
               {:text "Config" :route (config/config-path)}]
       :current-path (indexing-path)})
    om/IRenderState
    (render-state [this state]
      (dom/nav #js {:role "navigation"
                    :className "navbar navbar-default section"}
               (nav-items state)))))


(defn global-ui [app-state owner]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:className "container"}

               (dom/h1 nil "Hoard")
               (om/build main-nav app-state)
               (dom/div #js {:id "main-content"})))))

(om/root global-ui app-state
    {:target (. js/document (getElementById "app"))})


;; Routing



(secretary/set-config! :prefix "#")
(let [h (History.)]
  (goog.events/listen h EventType/NAVIGATE #(secretary/dispatch! (.-token %)))
  (doto h (.setEnabled true)))
(secretary/dispatch! (indexing-path))
