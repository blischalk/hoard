(ns hoard.core
  (:require [cljs.core.async :as async
             :refer [chan]]
            [enfocus.core :as ef]
            [enfocus.events :as events]
            [enfocus.effects :as effects]
            [hoard.acquire :as acquire]
            [hoard.data-processing :as dp]
            [weasel.repl :as repl])
  (:require-macros [enfocus.macros :as em]))

#_(when-not (repl/alive?)
  (repl/connect "ws://localhost:9001"))

(def data-channel (chan))

(defn index-user! [user]
  (acquire/data user data-channel))

(defn attach-event-handlers! []
  (ef/at ["#submit_user"]
         (events/listen :click
                        (fn [evt]
                          (let [sn (ef/from ["#screen_name"]
                                              (ef/get-prop :value))]
                            (index-user! sn)
                            (.log js/console sn))))))

(defn init []
  (.log js/console "Program started!")
  ;; Use es-client in the window for debugging!
  #_(set! (.-client js/window) es/client)
  (attach-event-handlers!)
  (dp/init data-channel))

;; Execute an initializer when app dom loaded
(set! (.-onload js/window) init)
