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
      (dom/div nil
               "Config UI Here!"))))
