(ns hoard.global-ui
(:require [hoard.main-nav :as mn]
          [hoard.state :as state]
          [om.core :as om]
          [om.dom :as dom]))

(defn global-ui [app-state owner]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:className "container"}

               (dom/h1 nil "Hoard")
               (mn/build main-nav app-state)
               (dom/div #js {:id "main-content"})))))

(defn init []
  (om/root global-ui state/app-state
           {:target (. js/document (getElementById "app"))}))
