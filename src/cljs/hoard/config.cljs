(ns hoard.config
  (:require [hoard.state :as state]
            [hoard.tingo :as tdb]
            [om.core :as om]
            [om.dom :as dom]
            [secretary.core :as secretary :refer-macros [defroute]]))

(defroute config-path "/config" []
  (om/root config-ui state/app-state
    {:target (. js/document (getElementById "main-content"))}))

(defn set-config-state [e app-state key]
  (om/update! app-state [:twitter-credentials key] (.. e -target -value)))

(defn get-twitter-config [app-state cb]
  (tdb/get-twitter-credentials
   (fn [err result]
     (when result
       (.log js/console "Found results!!!" result)
       (.log js/console "A result: " (aget result "credentials" "consumer_key"))
       (swap! app-state assoc :twitter-credentials
                   {:consumer_key (aget result "credentials" "consumer_key")
                    :consumer_secret (aget result "credentials" "consumer_secret")
                    :access_token_key (aget result "credentials" "access_token_key")
                    :access_token_secret (aget result "credentials" "access_token_secret")})
       (cb)))))

(defn config-ui [app-state owner]
  (reify
    om/IRenderState
    (render-state [this state]
      (dom/div #js {:id "app-config"
                    :className "section"}
               (dom/div #js {:className ""}
                        (dom/input #js {:type "text"
                                        :ref "consumer_key"
                                        :className "form-control"
                                        :placeholder "Twitter Consumer Key"
                                        :value (:consumer_key (:twitter-credentials app-state))
                                        :onChange #(set-config-state % app-state :consumer_key)})
                        (dom/input #js {:type "text"
                                        :ref "consumer_secret"
                                        :className "form-control"
                                        :placeholder "Twitter Consumer Secret"
                                        :value (:consumer_secret (:twitter-credentials app-state))
                                        :onChange #(set-config-state % app-state :consumer_secret)})
                        (dom/input #js {:type "text"
                                        :ref "access_token_key"
                                        :className "form-control"
                                        :placeholder "Twitter Access Token Key"
                                        :value (:access_token_key (:twitter-credentials app-state))
                                        :onChange #(set-config-state % app-state :access_token_key)})
                        (dom/input #js {:type "text"
                                        :ref "access_token_secret"
                                        :className "form-control"
                                        :placeholder "Twitter Access Token Secret"
                                        :value (:access_token_secret (:twitter-credentials app-state))
                                        :onChange #(set-config-state % app-state :access_token_secret)})
                        (dom/span #js {:className ""}
                                  (dom/button
                                   #js {:onClick (fn []
                                                   (.log js/console "Saving Configuration.")
                                                   (let [creds {:consumer_key (-> (om/get-node owner
                                                                                               "consumer_key")
                                                                                  .-value)
                                                                :consumer_secret (-> (om/get-node owner
                                                                                                  "consumer_secret")
                                                                                     .-value)
                                                                :access_token_key (-> (om/get-node owner
                                                                                                   "access_token_key")
                                                                                      .-value)
                                                                :access_token_secret (-> (om/get-node owner
                                                                                                      "access_token_secret")
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

(defn init [cb]
  (get-twitter-config state/app-state cb))
