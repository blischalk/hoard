(ns hoard.twitter
  (:require [cljs.nodejs :as node]))

;; Twitter code
(def Twitter
  (node/require "twitter"))

(def cfg
  (js-obj "consumer_key" (aget js/process
                               "env"
                               "TWITTER_CONSUMER_KEY")
          "consumer_secret" (aget js/process
                                  "env"
                                  "TWITTER_CONSUMER_SECRET")
          "access_token_key" (aget js/process
                                   "env"
                                   "TWITTER_ACCESS_TOKEN_KEY")
          "access_token_secret" (aget js/process
                                      "env"
                                      "TWITTER_ACCESS_TOKEN_SECRET")))

(def max-per-request 3000)

(def client
  (Twitter. cfg))

(defn get-user-tweets [name cb]
  (let [params (js-obj "screen_name" name
                       "count" max-per-request)]
    (.log js/console (str "Getting tweets for user" name))
    (.get client
          "statuses/user_timeline"
          params
          cb)))
