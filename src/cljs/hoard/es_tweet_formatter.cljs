(ns hoard.es-tweet-formatter)

;; TODO: Look into why we need to use this fix-array function
(defn fix-array
  "For some reason the array of data that comes back
  from the twitter node package or twitter api is not Iseqable.
  To deal with this we conver to a string and then back to JSON.
  This seems to do the trick."
  [data]
  (js/JSON.parse (js/JSON.stringify data)))

(defn tweet-formatter [tweet]
  (let [idx (js-obj "index" (js-obj "_index" "tweets"
                                    "_type" "tweets"
                                    "_id" (aget tweet "id")))
        data (js-obj "text" (aget tweet "text")
                     "name" (aget tweet "user" "name")
                     "screen_name" (aget tweet "user" "screen_name"))]
    [idx data]))

(defn format-bulk-data [data]
  (let [inserts (doall (map tweet-formatter (fix-array data)))]
    (js-obj "body" (clj->js (flatten inserts)))))
