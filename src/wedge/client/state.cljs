(ns wedge.client.state
  (:require [cljs.reader :refer [read-string]]
            [reagent.core :as r]))

(def async-state
  {:last-load nil :value nil :error nil})

(def starting-state
  {:session-id nil
   :transactions async-state})

(defonce state (r/atom starting-state))
(defonce session-id (r/cursor state [:session-id]))
(defonce transactions (r/cursor state [:transactions]))

(defn load-state! []
  (if-let [v (.getItem window.localStorage "wedge")]
    (reset! state (read-string v))))

(defn save-state! []
  (.setItem js/localStorage "wedge" (prn-str @state)))

