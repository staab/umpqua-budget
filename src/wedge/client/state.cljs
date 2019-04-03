(ns wedge.client.state
  (:require [cljs.reader :refer [read-string]]
            [reagent.core :as r]))

(def starting-state
  {:now (.valueOf (js/Date.))
   :session-id nil
   :page :dashboard
   :sidebar {:open? false}
   :picker {:open? false :unit :month}
   :db {:last-load nil :value nil :error nil}})

(defonce state (r/atom starting-state))
(defonce now (r/cursor state [:now]))
(defonce session-id (r/cursor state [:session-id]))
(defonce db (r/cursor state [:db]))
(defonce page (r/cursor state [:page]))
(defonce sidebar (r/cursor state [:sidebar]))
(defonce picker (r/cursor state [:picker]))

(defn reload-now []
  (swap! state assoc :now (.valueOf (js/Date.)))
  (js/requestAnimationFrame reload-now))

(defn load-state! []
  (if-let [v (.getItem js/localStorage "wedge")]
    (reset! state (read-string v)))
  (reload-now))

(defn save-state! []
  (.setItem js/localStorage "wedge" (prn-str @state)))

