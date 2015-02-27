(ns hoard.util)

(defn hidden [is-hidden]
  (if is-hidden
    #js {:display "none"}
    #js {}))
