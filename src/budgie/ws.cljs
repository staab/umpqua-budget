(ns budgie.ws
  (:require [cljs.reader :refer [read-string]]))

;; Outgoing

(defn send! [type payload]
  (.send ws (pr-str {:type type :payload payload})))

;; Incoming

(defmulti handle-message :type)

;; Websocket setup

(defn on-message [evt]
  (prn "Handling message" (.-data evt))
  (handle-message (cljs.reader/read-string (.-data evt))))

(def ws (js/WebSocket. "ws://localhost:5000"))
;; (def ws (js/WebSocket. "wss://budgie.herokuapp.com"))

(.addEventListener ws "message" on-message)
