(ns wedge.client.core
  (:require [reagent.core :as r]
            [wedge.client.ws :refer [start-ws!]]
            [wedge.client.state :refer [load-state!]]
            [wedge.client.actions :refer [set-page!]]
            [wedge.client.components.core :refer [root]]
            [wedge.client.components.utils :refer [history]]))

(enable-console-print!)

;; No need for a packaged for history, use
;; https://read.reduxbook.com/markdown/part2/09-routing.html
(defn set-page-from-location! [location]
  (-> location .-pathname (subs 1) keyword set-page!))

;; start is called by init and after code reloading finishes
(defn ^:dev/after-load start []
  (r/render [root] (.getElementById js/document "app")))

(defn ^:export init []
  ;; init is called ONCE when the page loads
  ;; this is called in the index.html and must be exported
  ;; so it is available even in :advanced release builds
  (start-ws!
   (fn []
     (load-state!)
     (set-page-from-location! js/location)
     (.listen history set-page-from-location!)
     (start))))

;; this is called before any code is reloaded
(defn ^:dev/before-load stop []
  (println "stop"))
