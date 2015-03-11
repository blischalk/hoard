(ns hoard.main-nav
  (:require [cljs.core.async :as async
             :refer [put! chan <!]]
            [hoard.config :as config]
            [hoard.index-user :as iu]
            [om.core :as om]
            [om.dom :as dom]
            [secretary.core :as secretary :refer-macros [defroute]])
  (:require-macros [cljs.core.async.macros :refer [go]]))


(defn nav-item [item owner]
  (reify
    om/IRenderState
    (render-state [this state]
      (dom/li #js {:className (if (= (:route item) (:current-path state))
                                "active"
                                "")}
              (dom/a #js {:href "#"
                          :onClick (fn [e]
                                     (.preventDefault e)
                                     (put! (:comm state)
                                           [:page-change (:route item)])
                                     (secretary/dispatch! (:route item)))}
                     (:text item))))))

(defn nav-items [state]
  (apply dom/ul #js {:className "nav nav-pills"}
         (om/build-all nav-item
                       (:pages state)
                       {:state {:comm (:comm state)
                                :current-path (:current-path state)}})))

(defn main-nav [app-state owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (let [comm (chan)]
        (om/set-state! owner :comm comm)

        (go
          (while true
              (let [[type value] (<! comm)]
                (when (= type :page-change)
                  (om/set-state! owner :current-path value)))))))
    om/IInitState
    ;; Setup our initial UI state
    (init-state [_]
      {:pages [{:text "Index User" :route (iu/indexing-path)}
               {:text "Config" :route (config/config-path)}]
       :current-path (iu/indexing-path)})
    om/IRenderState
    (render-state [this state]
      (dom/nav #js {:role "navigation"
                    :className "navbar navbar-default section"}
               (nav-items state)))))

(defn build [app-state]
  (om/build main-nav app-state))
