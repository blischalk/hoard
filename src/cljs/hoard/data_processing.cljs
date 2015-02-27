(ns hoard.data-processing
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :as async
             :refer [>! <! put! chan alts!]]
            [hoard.elasticsearch :as es]
            [hoard.es-tweet-formatter :as fmt]))

(defn init [[screen_name data] ch]
  (.log js/console "Initializing data processing")
  (es/bulk-insert
   (fmt/format-bulk-data data)
   (fn [err resp]
     (if err
       (.log js/console "Elasticsearch gave an error: " err)
       (do (.log js/console "elastic search resp")
           (.log js/console resp)
         (put! ch [:user-indexed screen_name]))))))
