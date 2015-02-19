(ns hoard.core
  (:require [cljs.core.async :as async
             :refer [chan]]
            [hoard.acquire :as acquire]
            [hoard.data-processing :as dp]
            [weasel.repl :as repl]))

#_(when-not (repl/alive?)
  (repl/connect "ws://localhost:9001"))

(def data-channel (chan))

(defn init []
  (.log js/console "Program started!")
  ;; Use es-client in the window for debugging!
  #_(set! (.-client js/window) es/client)
  (dp/init data-channel)
  (acquire/data data-channel))

;; Execute an initializer when app dom loaded
(set! (.-onload js/window) init)
