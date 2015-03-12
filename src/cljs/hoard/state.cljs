(ns hoard.state)

;; App state

(defonce app-state (atom {:indexed-users []
                          :indexing-users []
                          :errors        []}))
