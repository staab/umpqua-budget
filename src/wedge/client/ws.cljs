(ns wedge.client.ws
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

(def ws-interval (atom nil))

(defn on-message [evt]
  (prn "Handling message" (.-data evt))
  (handle-message (cljs.reader/read-string (.-data evt))))

(defn start-ws! [f]
  (when-let [old-ws @ws] (.close old-ws))
  (js/clearInterval @ws-interval)
  (reset! ws-interval (js/setInterval #(when (nil? @ws) (start-ws! identity)) 1000))
  (let [socket (js/WebSocket. "ws://localhost:5000")]
    (.addEventListener socket "open" (fn [] (reset! ws socket) (f)))
    (.addEventListener socket "message" on-message)
    (.addEventListener socket "error" #(reset! ws nil))
    (.addEventListener socket "close" #(reset! ws nil))))


