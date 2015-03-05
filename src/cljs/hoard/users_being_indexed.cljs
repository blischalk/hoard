(ns hoard.users-being-indexed
  (:require [hoard.util :as util]
            [om.core :as om]
            [om.dom :as dom]))

;; Indexing Status UI
(defn user-being-indexed [user owner]
  (reify
    om/IRender
    (render [_]
      (dom/tr nil (dom/td nil user)))))

(defn users-being-indexed [_ {:keys [users]}]
  (dom/div #js {:style (util/hidden (empty? users))
                :id "indexing-users"
                :className "section"}
           (dom/h2 nil "Indexing Users:")
           (dom/table #js {:className "table table-striped table-bordered"}
                      (dom/tr nil
                              (dom/th nil "Screen Name"))
                      (apply dom/tbody nil
                             (om/build-all user-being-indexed users)))))
