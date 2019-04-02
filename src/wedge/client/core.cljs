(ns wedge.client.core
  (:require-macros [secretary.core :refer [defroute]])
  (:require [goog.events :as events]
            [reagent.core :as r]
            [secretary.core :as secretary]
            [wedge.client.ws :refer [start-ws!]]
            [wedge.client.state :refer [load-state!]]
            [wedge.client.actions :refer [set-page!]]
            [wedge.client.components :refer [root]])
  (:import [goog History]
           [goog.history EventType]))

(enable-console-print!)

(defroute "/" [] (set-page! :dashboard))

;; start is called by init and after code reloading finishes
(defn ^:dev/after-load start []
  (r/render [root] (.getElementById js/document "app")))

(defn ^:export init []
  ;; init is called ONCE when the page loads
  ;; this is called in the index.html and must be exported
  ;; so it is available even in :advanced release builds
  ;;  (doto (History.)
  ;;        (events/listen EventType.NAVIGATE #(secretary/dispatch! (.-token %)))
  ;;        (.setEnabled true))
  (start-ws!
   (fn []
    (load-state!)
    (start))))

;; this is called before any code is reloaded
(defn ^:dev/before-load stop []
  (println "stop"))
