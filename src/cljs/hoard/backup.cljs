(ns hoard.backup
  (:require [cljs.nodejs :as node]))

(def fs
  (node/require "fs"))

(defn to-file [file-name data]
  (let [data-as-json (js/JSON.stringify data)]
    (fs.writeFile file-name
                  data-as-json
                  (fn [err]
                    (if err
                      (throw err)
                      (.log js/console "Data written to file!"))))))
