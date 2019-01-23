(ns budgie.core
  (:require [reagent.core :as r]
            [budgie.ws :refer [start-ws!]]
            [budgie.state :refer [load-state!]]
            [budgie.components :refer [root]]))

(enable-console-print!)

;; start is called by init and after code reloading finishes
(defn ^:dev/after-load start []
  (r/render [root] (.getElementById js/document "app")))

(defn ^:export init []
  ;; init is called ONCE when the page loads
  ;; this is called in the index.html and must be exported
  ;; so it is available even in :advanced release builds
  (start-ws!)
  (load-state!)
  (start))

;; this is called before any code is reloaded
(defn ^:dev/before-load stop []
  (println "stop"))
