(ns hoard.acquire
  (:require [cljs.core.async :as async
             :refer [>! <! put! chan alts!]]
            [cljs.nodejs :as node]
            [hoard.backup :as bkup]
            [hoard.twitter :as t]))

(def load-sample-data? false)

(defn data [screen_name channel]
  (if load-sample-data?
    (from-file screen_name channel)
    (from-twitter screen_name channel)))

(defn from-file [screen_name channel]
  (let [data (node/require "./tweets.json")]
    (.log js/console "Placing data on channel")
    (put! channel [:user-tweets [screen_name data]])))

(defn from-twitter
  ([screen_name channel]
   (from-twitter screen_name channel nil))
  ([screen_name channel max_id]
   (.log js/console "getting data from twitter")
   (t/get-user-tweets
    screen_name
    max_id
    (fn [error tweets response]
      (if error
        (.log js/console error)
        (let [js-data (js->clj tweets)
              cnt (.-length js-data)
              last-tweet-id (aget js-data (- cnt 1) "id")]
          ;; Keep recursively calling for more tweets until we get them all
          (if (not (= last-tweet-id max_id))
            (do (put! channel [:user-tweets [screen_name tweets true]])
              (from-twitter screen_name channel last-tweet-id))
            (put! channel [:user-tweets [screen_name tweets false]]))))))))
