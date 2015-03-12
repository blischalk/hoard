(ns hoard.config
  (:require [om.core :as om]
            [om.dom :as dom]
            [secretary.core :as secretary :refer-macros [defroute]]))

(defroute config-path "/config" []
  (om/root config-ui app-state
    {:target (. js/document (getElementById "main-content"))}))

(defn config-ui [app-state owner]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:id "app-config"
                    :className "section"}
               (dom/div #js {:className ""}
                        (dom/input #js {:type "text"
                                        :className "form-control"
                                        :placeholder "Twitter Consumer Key"})
                        (dom/input #js {:type "text"
                                        :className "form-control"
                                        :placeholder "Twitter Consumer Secret"})
                        (dom/input #js {:type "text"
                                        :className "form-control"
                                        :placeholder "Twitter Access Token Key"})
                        (dom/input #js {:type "text"
                                        :className "form-control"
                                        :placeholder "Twitter Access Token Secret"})
                        (dom/span #js {:className ""}
                                  (dom/button
                                   #js {:onClick (fn []
                                                   (.log js/console "Saving Configuration."))
                                        :className "btn btn-primary"
                                        :disabled (:btn-disabled state)}
                                   "Save Configuration")))))))
