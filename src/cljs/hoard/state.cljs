(ns hoard.state)

;; App state

(defonce app-state (atom {:indexed-users []
                          :indexing-users []
                          :errors        []
                          :twitter-credentials {:consumer_key ""
                                                :consumer_secret ""
                                                :access_token_key ""
                                                :access_token_secret ""}}))
