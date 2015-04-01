(ns hoard.core
  (:require [cljs.nodejs :as node]
            [hoard.config :as cfg]
            [hoard.elasticsearch :as es]
            [hoard.global-ui :as gui]
            [hoard.index-user :as iu]))

;; Enable Edit menu so copy and paste work

(def gui (js/require "nw.gui"))
(when (= process.platform "darwin")
  (let [mb (gui.Menu. (clj->js {:type "menubar"}))]
    (.createMacBuiltin mb "Hoard" (clj->js {:hideEdit false}))
    (set! (.-menu (.get gui.Window)) mb)))


;; Initialize UI

(cfg/init
  (fn []
    ;; Bootstrap es index
    (es/init
      (fn []

        ;; Add global UI

        (gui/init)

        ;; Initialize the indexing UI


        (iu/init)))))

