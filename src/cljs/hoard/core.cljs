(ns hoard.core
  (:require [cljs.nodejs :as node]
            [hoard.backup :as bkup]
            [hoard.elasticsearch :as es]
            [hoard.es-tweet-formatter :as estf]
            [hoard.twitter :as t]
            [weasel.repl :as repl]))

#_(when-not (repl/alive?)
  (repl/connect "ws://localhost:9001"))


(defn init []

  (let [data (node/require "./tweets.json")]
    (.log js/console "The data is................")
    (.log js/console (first data)))
  ;; Use es-client in the window for debugging!
  #_(set! (.-client js/window) es/client)

  (.log js/console "Program started!")
  #_(t/get-user-tweets "blischalk"
                     (fn [error tweets response]
                       (if (not error)
                         #_(bkup/to-file "tweets.json" tweets)
                         (estf/format-bulk-data tweets)
                         (.log js/console error))))

  #_(es/bulk-insert es/bulk-data))

;; Execute an initializer when app dom loaded
(set! (.-onload js/window) init)
