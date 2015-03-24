(ns hoard.twitter
  (:require [cljs.nodejs :as node]
            [om.core :as om]
            [om.dom :as dom]
            [hoard.state :as state]))

;; Twitter code
(def Twitter
  (node/require "twitter"))


(def max-per-request 3000)


(defn get-user-tweets [name max_id cb]
  (.log js/console "The twitter config is: " cfg)
  (let [cfg (clj->js (:twitter-credentials (om/root-cursor state/app-state)))
        _ (.log js/console "The config is................: " cfg)
        client (Twitter. cfg)
        params (js-obj "screen_name" name
                       "count" max-per-request)]

  (if (nil? (js->clj max_id))
              params
              (aset params "max_id" max_id))

    (.get client
          "statuses/user_timeline"
          params
          cb)))
