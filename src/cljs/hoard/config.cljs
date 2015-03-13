(ns hoard.config
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :as async
             :refer [put! chan]]
            [hoard.state :as state]
            [om.core :as om]
            [om.dom :as dom]
            [secretary.core :as secretary :refer-macros [defroute]]))

(defroute config-path "/config" []
  (om/root config-ui state/app-state
    {:target (. js/document (getElementById "main-content"))}))

(defn set-input-state [e owner key]
  (om/set-state! owner key (.. e -target -value)))

(defn config-ui [app-state owner]
  (reify
    om/IInitState
    (init-state [_]
      {:consumer-key (:consumer-key (:twitter-credentials app-state))
       :consumer-secret (:consumer-secret (:twitter-credentials app-state))
       :access-token-key (:access-token-key (:twitter-credentials app-state))
       :access-token-secret (:access-token-secret (:twitter-credentials app-state))})
    om/IRenderState
    (render-state [this state]
      (dom/div #js {:id "app-config"
                    :className "section"}
               (dom/div #js {:className ""}
                        (dom/input #js {:type "text"
                                        :ref "consumer-key"
                                        :className "form-control"
                                        :placeholder "Twitter Consumer Key"
                                        :value (:consumer-key state)
                                        :onChange #(set-input-state % owner :consumer-key)})
                        (dom/input #js {:type "text"
                                        :ref "consumer-secret"
                                        :className "form-control"
                                        :placeholder "Twitter Consumer Secret"
                                        :value (:consumer-secret state)
                                        :onChange #(set-input-state % owner :consumer-secret)})
                        (dom/input #js {:type "text"
                                        :ref "access-token-key"
                                        :className "form-control"
                                        :placeholder "Twitter Access Token Key"
                                        :value (:access-token-key state)
                                        :onChange #(set-input-state % owner :access-token-key)})
                        (dom/input #js {:type "text"
                                        :ref "access-token-secret"
                                        :className "form-control"
                                        :placeholder "Twitter Access Token Secret"
                                        :value (:access-token-secret state)
                                        :onChange #(set-input-state % owner :access-token-secret)})
                        (dom/span #js {:className ""}
                                  (dom/button
                                   #js {:onClick (fn []
                                                   (.log js/console "Saving Configuration.")
                                                   (om/update! app-state :twitter-credentials
                                                               {:consumer-key (-> (om/get-node owner
                                                                                                       "consumer-key")
                                                                                          .-value)
                                                                :consumer-secret (-> (om/get-node owner
                                                                                                          "consumer-secret")
                                                                                             .-value)
                                                                :access-token-key (-> (om/get-node owner
                                                                                                           "access-token-key")
                                                                                              .-value)
                                                                :access-token-secret (-> (om/get-node owner
                                                                                                              "access-token-secret")
                                                                                                 .-value)})
                                                   )
                                        :className "btn btn-primary"}
                                   "Save Configuration")))))))
