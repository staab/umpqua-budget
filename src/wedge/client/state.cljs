(ns wedge.client.state
  (:require [cljs.reader :refer [read-string]]
            [reagent.core :as r]))

(def async-state
  {:last-load nil :value nil :error nil})

(def starting-state
  {:session-id nil
   :db async-state
   :ui
   {:page :dashboard
    :sidebar :closed
    :picker :closed}})

(defonce state (r/atom starting-state))
(defonce session-id (r/cursor state [:session-id]))
(defonce db (r/cursor state [:db]))
(defonce ui (r/cursor state [:ui]))
(defonce ui-page (r/cursor state [:ui :page]))
(defonce ui-sidebar (r/cursor state [:ui :sidebar]))
(defonce ui-picker (r/cursor state [:ui :picker]))

(defn load-state! []
  (if-let [v (.getItem window.localStorage "wedge")]
    (reset! state (read-string v))))

(defn save-state! []
  (.setItem js/localStorage "wedge" (prn-str @state)))

