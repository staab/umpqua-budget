(ns budgie.ws
  (:require [cljs.reader :refer [read-string]]))

(def ws (atom nil))
(def queue (atom []))

;; Outgoing

(defn send! [type payload]
  (swap!
    queue
    (fn [messages]
      (let [all-messages (conj messages (pr-str {:type type :payload payload}))]
        (if @ws
          (do (run! #(.send @ws %) all-messages) [])
          messages)))))

;; Incoming

(defmulti handle-message :type)

;; Websocket setup

(defn on-message [evt]
  (prn "Handling message" (.-data evt))
  (handle-message (cljs.reader/read-string (.-data evt))))

(defn start-ws! []
  (when-let [old-ws @ws] (.close old-ws))
  (let [socket (js/WebSocket. "ws://localhost:5000")]
    (.addEventListener socket "open" #(reset! ws socket))
    (.addEventListener socket "message" on-message)
    (.addEventListener socket "close" #(reset! ws nil))))

(js/setInterval #(when (nil? @ws) (start-ws!)) 1000)
