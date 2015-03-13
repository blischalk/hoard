(ns hoard.state)

;; App state

(defonce app-state (atom {:indexed-users []
                          :indexing-users []
                          :errors        []
                          :twitter-credentials {:consumer-key "asdf"
                                                :consumer-secret ""
                                                :access-token-key ""
                                                :access-token-secret ""}}))
