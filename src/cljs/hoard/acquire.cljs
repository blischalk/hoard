(ns hoard.acquire
  (:require [cljs.core.async :as async
             :refer [>! <! put! chan alts!]]
            [cljs.nodejs :as node]
            [hoard.backup :as bkup]
            [hoard.twitter :as t]))

(def load-sample-data? false)

(defn data [channel]
  (if load-sample-data?
    (from-file channel)
    (from-twitter channel)))

(defn from-file [channel]
  (let [data (node/require "./tweets.json")]
    (.log js/console "Placing data on channel")
    (put! channel data)))

(defn from-twitter [channel]
  (t/get-user-tweets "blischalk"
                     (fn [error tweets response]
                       (if error
                         (.log js/console error)
                         (do #_(bkup/to-file "tweets.json" tweets)
                             (.log js/console "Placing data on channel")
                             (put! channel tweets))))))
