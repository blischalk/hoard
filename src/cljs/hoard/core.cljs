(ns hoard.core
  (:require [hoard.global-ui :as gui]
            [hoard.index-user :as iu]
            [weasel.repl :as repl]))

#_(when-not (repl/alive?)
  (repl/connect "ws://localhost:9001"))

;; App state

(defonce app-state (atom {:indexed-users []
                          :errors        []}))

;; Initialize UI

;; Add global UI
(gui/init)

;; Initialize the indexing UI
(iu/init)
