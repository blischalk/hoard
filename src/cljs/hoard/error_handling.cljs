(ns hoard.error-handling
  (:require [om.core :as om]
            [om.dom :as dom]))

;; Error UI

(defn error-message [error owner]
  (reify
    om/IRender
    (render [_]
      (dom/li nil error))))
