(ns hoard.error-handling
  (:require [hoard.util :as util]
            [om.core :as om]
            [om.dom :as dom]))

;; Error UI

(defn error-message [error owner]
  (reify
    om/IRender
    (render [_]
      (dom/li nil error))))

(defn error-flash [app-state]
  (let [errors (:errors app-state)]
    (dom/div #js {:style (util/hidden (empty? errors))
                  :className "section errors"}
             (apply dom/ul #js {:id "errors"}
                    (om/build-all error-message errors)))))
