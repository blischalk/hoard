(ns hoard.index-user
  (:require [cljs.core.async :as async
             :refer [chan put! chan <!]]
            [om.core :as om]
            [om.dom :as dom]))

;; Handlers

(defn handle-screen-name-change [e owner {:keys [:screen-name]}]
  (let [value (.. e -target -value)]
    (om/set-state! owner :btn-disabled (or (= value "") (not (empty? errors))))
    (om/set-state! owner :screen-name value)))

;; Indexing User UI

(defn user-to-index [owner state]
  (dom/input #js {:type "text"
                  :className "form-control"
                  :placeholder "User to Index"
                  :ref "user-to-index"
                  :value (:screen-name state)
                  :onChange #(handle-screen-name-change % owner state)}))

(defn indexing-submit [owner state comm]
  (dom/button
   #js {:onClick #(put! comm
                        [:index-user (-> (om/get-node owner
                                                      "user-to-index")
                                         .-value)])
        :className "btn btn-primary"
        :disabled (:btn-disabled state)}
   "Index User"))

(defn user-indexing-form [owner state comm]
  (dom/div #js {:id "index-user"
                :className "section"}
           (dom/div #js {:className "input-group"}
                    (user-to-index owner state)
                    (dom/span #js {:className "input-group-btn"}
                              (indexing-submit owner state comm)))))
