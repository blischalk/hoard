(ns hoard.core
  (:require [secretary.core :as secretary :refer-macros [defroute]]
            [hoard.global-ui :as gui]
            [hoard.index-user :as iu]
            [weasel.repl :as repl]))

#_(when-not (repl/alive?)
  (repl/connect "ws://localhost:9001"))

;; App state

(defonce app-state (atom {:indexed-users []
                          :errors        []}))


(gui/init)
(iu/init)
