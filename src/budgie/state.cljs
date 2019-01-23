(ns budgie.state
  (:require [cljs.reader :refer [read-string]]
            [reagent.core :as r]))

(def async-state
  {:loaded nil :value nil :error nil})

(def starting-state
  {:session-id nil
   :transactions async-state})

(defonce state (r/atom starting-state))
(defonce session-id (r/cursor state [:session-id]))
(defonce transactions (r/cursor state [:transactions]))

(defn load-state! []
  (if-let [v (.getItem window.localStorage "budgie")]
    (reset! state (read-string v))))

(defn save-state! []
  (.setItem window.localStorage "budgie" (prn-str @state)))
