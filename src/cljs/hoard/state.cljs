(ns hoard.state)

;; App state

(defonce app-state (atom {:indexed-users []
                          :errors        []}))
