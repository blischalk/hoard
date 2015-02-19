(ns hoard.core
  (:require [cljs.nodejs :as node]
            [hoard.backup :as bkup]
            [hoard.elasticsearch :as es]
            [hoard.twitter :as t]
            [weasel.repl :as repl]))

#_(when-not (repl/alive?)
  (repl/connect "ws://localhost:9001"))

(defn tweets-to-file [file-name tweets]
  (let [tweets-as-json (js/JSON.stringify tweets)]
    (fs.writeFile file-name
                  tweets-as-json
                  (fn [err]
                    (if err
                      (throw err)
                      (.log js/console "Tweets written to file!"))))))

(defn init []
  ;; Use es-client in the window for debugging!
  #_(set! (.-client js/window) es/client)

  (t/get-user-tweets "blischalk"
                     (fn [error tweets response]
                       (if (not error)
                         (bkup/to-file "tweets.json" tweets)
                         (.log js/console error))))

  (es/bulk-insert es/bulk-data))

;; Execute an initializer when app dom loaded
(set! (.-onload js/window) init)
