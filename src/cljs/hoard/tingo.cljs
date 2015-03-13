(ns hoard.tingo
  (:require [cljs.nodejs :as node]))

(def Engine
  ((node/require "tingodb")))

(def db
  (Engine.Db. "./", {}))

(defn save-twitter-config [config cb]
  (.log js/console "Saving Twitter config...")
  (let [collection (.collection db "twitter-credentials")]
    (.update collection
             (clj->js {:_uid "twitter-credentials"})
             (clj->js {:_uid "twitter-credentials" :credentials config})
             (clj->js {:upsert true})
             cb)))

(defn get-twitter-credentials [cb]
  (.log js/console "Getting Twitter config...")
  (let [collection (.collection db "twitter-credentials")]
    (.findOne collection (clj->js {:_uid "twitter-credentials"})
              cb)))
