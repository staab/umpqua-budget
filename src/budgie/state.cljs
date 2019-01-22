(ns budgie.state
  (:require [cljs.reader :refer [read-string]]
            [reagent.core :as r]))

(defonce state (r/atom {}))
(defonce public-token (r/cursor state [:public-token]))

(defn load-state! []
  (if-let [v (.getItem window.localStorage "budgie")]
    (reset! state (read-string v))))

(defn save-state! []
  (.setItem window.localStorage "budgie" (prn-str @state)))
