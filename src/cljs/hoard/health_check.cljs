(ns hoard.health-check
  (:require [cljs.core.async :as async
             :refer [put!]]
            [hoard.elasticsearch :as es]))

(defn check-es-status [comm]
  (es/status comm (fn [_]
                    (put! comm [:error (str "Can't connect to Elasticsearch.  "
                                            "Is the server Running?")]))))

(defn analyze [comm]
  (-> comm
      check-es-status))
