(ns hoard.indexed-users
  (:require [cljs.core.async :as async
             :refer [put!]]
            [hoard.elasticsearch :as es]
            [om.dom :as dom]
            [om.core :as om]))

;; Get the indexed users from es
(defn get-indexed-users [app-state cb]
  (es/get-users
    (fn [_])
    (fn [resp]
      (let [tweet-data (array-seq (aget resp
                                        "aggregations"
                                        "screen_names"
                                        "buckets"))]
        (when tweet-data
          (om/update! app-state
                      :indexed-users
                      tweet-data))
        (cb)))))

;; Indexed users UI

(defn indexed-user [user]
  (reify
    om/IRender
    (render [_] (dom/tr nil
                        (dom/td nil (aget user "key"))
                        (dom/td nil (aget user "doc_count"))))))

(defn users-in-index [app]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:id "indexed-users"
                    :className "section"}
               (dom/h2 nil "Indexed Users:")
               (dom/table #js {:className "table table-striped table-bordered"}
                          (dom/tr nil
                                  (dom/th nil "Screen Name")
                                  (dom/th nil "Tweet Count"))
                          (apply dom/tbody nil
                                 (om/build-all indexed-user (:indexed-users app))))))))
