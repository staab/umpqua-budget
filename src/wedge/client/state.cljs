(ns wedge.client.state
  (:require [cljs.reader :refer [read-string]]
            [reagent.core :as r]))

(def starting-state
  {:session-id nil
   :page :dashboard
   :sidebar {:open? false}
   :picker {:open? false}
   :db {:last-load nil :value nil :error nil}})

(defonce state (r/atom starting-state))
(defonce session-id (r/cursor state [:session-id]))
(defonce db (r/cursor state [:db]))
(defonce page (r/cursor state [:page]))
(defonce sidebar (r/cursor state [:sidebar]))
(defonce picker (r/cursor state [:picker]))

(defn load-state! []
  (if-let [v (.getItem js/localStorage "wedge")]
    (reset! state (read-string v))))

(defn save-state! []
  (.setItem js/localStorage "wedge" (prn-str @state)))

