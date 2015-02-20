(ns hoard.data-processing
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :as async
             :refer [>! <! put! chan alts!]]
            [hoard.elasticsearch :as es]
            [hoard.es-tweet-formatter :as fmt]))

(defn init [data-channel]
  (.log js/console "Initializing data processing")
  (go
    (loop []
        (let [[v c] (alts! [data-channel])]
          (.log js/console "Received Data")
          (es/bulk-insert (fmt/format-bulk-data v)))
        (recur))))
