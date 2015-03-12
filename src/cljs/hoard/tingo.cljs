(ns cljs.hoard.tingo
  (:require [cljs.nodejs :as node]))

(def TingoDB
  (node/require "tingodb"))
