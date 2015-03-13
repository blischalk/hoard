(ns hoard.config
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :as async
             :refer [put! chan]]
            [hoard.state :as state]
            [hoard.tingo :as tdb]
            [om.core :as om]
            [om.dom :as dom]
            [secretary.core :as secretary :refer-macros [defroute]]))

(defroute config-path "/config" []
  (om/root config-ui state/app-state
    {:target (. js/document (getElementById "main-content"))}))

(defn set-config-state [e app-state key]
  (om/update! app-state [:twitter-credentials key] (.. e -target -value)))

(defn get-twitter-config [app-state]
  (tdb/get-twitter-credentials
   (fn [err result]
     (.log js/console "Found results!!!" result)
     (.log js/console "A result: " (aget result "credentials" "consumer-key"))
     (om/update! app-state
                 [:twitter-credentials]
                 {:consumer-key (aget result "credentials" "consumer-key")
                  :consumer-secret (aget result "credentials" "consumer-secret")
                  :access-token-key (aget result "credentials" "access-token-key")
                  :access-token-secret (aget result "credentials" "access-token-secret")})
     (.log js/console app-state))))

(defn config-ui [app-state owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (get-twitter-config app-state))
    om/IRenderState
    (render-state [this state]
      (dom/div #js {:id "app-config"
                    :className "section"}
               (dom/div #js {:className ""}
                        (dom/input #js {:type "text"
                                        :ref "consumer-key"
                                        :className "form-control"
                                        :placeholder "Twitter Consumer Key"
                                        :value (:consumer-key (:twitter-credentials app-state))
                                        :onChange #(set-config-state % app-state :consumer-key)})
                        (dom/input #js {:type "text"
                                        :ref "consumer-secret"
                                        :className "form-control"
                                        :placeholder "Twitter Consumer Secret"
                                        :value (:consumer-secret (:twitter-credentials app-state))
                                        :onChange #(set-config-state % app-state :consumer-secret)})
                        (dom/input #js {:type "text"
                                        :ref "access-token-key"
                                        :className "form-control"
                                        :placeholder "Twitter Access Token Key"
                                        :value (:access-token-key (:twitter-credentials app-state))
                                        :onChange #(set-config-state % app-state :access-token-key)})
                        (dom/input #js {:type "text"
                                        :ref "access-token-secret"
                                        :className "form-control"
                                        :placeholder "Twitter Access Token Secret"
                                        :value (:access-token-secret (:twitter-credentials app-state))
                                        :onChange #(set-config-state % app-state :access-token-secret)})
                        (dom/span #js {:className ""}
                                  (dom/button
                                   #js {:onClick (fn []
                                                   (.log js/console "Saving Configuration.")
                                                   (let [creds {:consumer-key (-> (om/get-node owner
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
                                                                                         .-value)}]
                                                     (tdb/save-twitter-config
                                                      creds
                                                      (fn [err result]
                                                        (if err
                                                          (.log js/console "Error persisting Twitter config." err)
                                                          (om/update! app-state :twitter-credentials creds)))))
                                                   )
                                        :className "btn btn-primary"}
                                   "Save Configuration")))))))
