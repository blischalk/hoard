(ns hoard.core
  (:require [cljs.core.async :as async
             :refer [chan put! chan <!]]
            [enfocus.core :as ef]
            [enfocus.events :as events]
            [enfocus.effects :as effects]
            [hoard.acquire :as acquire]
            [hoard.data-processing :as dp]
            [hoard.elasticsearch :as es]
            [hoard.index-user :as iu]
            [hoard.indexed-users :as ius]
            [hoard.users-being-indexed :as ubi]
            [hoard.util :as util]
            [om.core :as om]
            [om.dom :as dom]
            [weasel.repl :as repl])
  (:require-macros [enfocus.macros :as em]
                   [cljs.core.async.macros :refer [go]]))

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


;; Error UI

(defn error-message [error owner]
  (reify
    om/IRender
    (render [_]
      (dom/li nil error))))

(defn check-es-status [comm]
  (es/status comm (fn [_]
                    (put! comm [:error (str "Can't connect to Elasticsearch.  "
                                            "Is the server Running?")]))))

;; Main UI
(defn main-view [app-state owner state comm]
  (let [errors (:errors app-state)]
    (dom/div #js {:className "container"}
             (dom/h1 nil "Hoard")
             (dom/div #js {:style (util/hidden (empty? errors))
                           :className "section errors"}
                      (apply dom/ul #js {:id "errors"}
                             (om/build-all error-message errors)))
             ;; Display the indexing form view
             (iu/user-indexing-form owner state comm)
             ;; Display indexing status view
             (ubi/users-being-indexed owner state)
             (om/build ius/users-in-index app-state))))

(defn indexing-ui [app-state owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (let [comm (chan)]

        ;; When app starts up we setup a communication channel
        ;; for the various stages to give status updates
        (om/set-state! owner :comm comm)

        (check-es-status comm)

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

(om/root indexing-ui app-state
  {:target (. js/document (getElementById "my-app"))})
