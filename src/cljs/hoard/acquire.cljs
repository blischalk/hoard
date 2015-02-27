(ns hoard.acquire
  (:require [cljs.core.async :as async
             :refer [>! <! put! chan alts!]]
            [cljs.nodejs :as node]
            [hoard.backup :as bkup]
            [hoard.twitter :as t]))

(def load-sample-data? true)

(defn data [screen_name channel]
  (if load-sample-data?
    (from-file screen_name channel)
    (from-twitter screen_name channel)))

(defn from-file [screen_name channel]
  (let [data (node/require "./tweets.json")]
    (.log js/console "Placing data on channel")
    (put! channel [:user-tweets [screen_name data]])))

(defn from-twitter [screen_name channel]
  (.log js/console "getting data from twitter")
  (t/get-user-tweets
   screen_name
   (fn [error tweets response]
     (if error
       (.log js/console error)
       (do #_(bkup/to-file "tweets.json" tweets)
           (.log js/console "Placing data on channel")
           (put! channel
                 [:user-tweets [screen_name tweets]]))))))
