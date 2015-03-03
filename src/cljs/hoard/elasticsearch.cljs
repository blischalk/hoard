(ns hoard.elasticsearch
  (:require [cljs.nodejs :as node]))

;; Elasticsearch code
(def Elasticsearch
  (node/require "elasticsearch"))

(def host "http://localhost:9250")

(def cfg (js-obj "host" host
                 "apiVersion" "1.2"))

(def client
  (new Elasticsearch.Client cfg))

(defn ping-success[body]
  (.log js/console
        "booya baby!  Elasticsearch is up and running!"))

(defn ping-failure [error] (.log js/console "elasticsearch cluster is down!"))

(defn test-es []
  (-> (.ping client
             (js-obj "requestTimeout" 1000
                     "hello" "elasticsearch!"))
      (.then ping-success ping-failure)))

(def bulk-data
  (js-obj "body" (clj->js [(js-obj "index" (js-obj "_index" "tweets"
                                                   "_type" "tweets"
                                                   "_id" 1))
                           (js-obj "title" "foobar")])
          "timeout" 300000))

(defn bulk-insert
  "Bulk inserts data into Elasticsearch"
  [bulk-body cb]
  (.bulk client bulk-body cb))

(defn query-es []
  (-> (.ping client
             (js-obj "requestTimeout" 1000
                     "hello" "elasticsearch!"))
      (.then (fn [body]
               (.log js/console "booya!"))
             (fn [error]
               (if error
                 (.log js/console "elasticsearch cluster is down!")
                 (.log js/console "all is well"))))))


(defn get-users [cb]
  (.search client
           (js-obj "index" "tweets"
                   "searchType" "count"
                   "body" (js-obj "query"
                                  (js-obj "match_all"
                                          (js-obj))
                                  "aggs"
                                  (js-obj "screen_names"
                                          (js-obj "terms"
                                                  (js-obj "field"
                                                          "user.screen_name")))))
           (fn [err resp]
             (cb resp))))
