(ns budgie.server
  (:import (com.plaid.client PlaidClient))
  (:require [org.httpkit.server :as http]
            [environ.core :refer [env]]
            [clojure.java.io :as io]))

;; State

(def channels (atom {}))
(def tokens (atom {}))

;; Plaid client

(def plaid
  (-> (PlaidClient/newBuilder)
    (.clientIdAndSecret (:plaid-client-id env) (:plaid-secret env))
    (.publicKey (:plaid-public-key env))
    (.sandboxBaseUrl)
    (.build)
    (.service)))

(defn get-access-token [public-token]
  (-> plaid (.itemPublicTokenExchangeRequest public-token) (.execute) (.body)))


;; Utils

(defn msg [type payload]
  (pr-str {:type type :payload payload}))

;; Handle message

(defmulti handle-message (fn [channel {:keys [type]}] type))

(defmethod handle-message :add-public-token [channel {:keys [payload]}]
  (let [{:keys [public-token]} payload
        resp (get-access-token public-token)
        result {:access-token (.getAccessToken resp)
                :item-id (.getItemId resp)}]
    (swap! tokens assoc public-token result)))

(defmethod handle-message :load-transactions [channel {:keys [payload]}]
  (plaid))

;; Websocket management

(defn on-message [channel data]
  (prn "Handling message" data)
  (handle-message channel (if (string? data) (read-string data) data)))

(defn handle-websocket [req channel]
  (http/on-close channel (fn [_]))
  (http/on-receive channel (partial on-message channel)))

(defn file-res [path content-type]
  {:headers {"Content-Type" content-type}
   :body (io/file (str "public/" path))})

(defn handle-http [{:keys [uri]} channel]
  (http/send! channel
    (case uri
      "/" (file-res "index.html" "text/html")
      "/img/favicon.png" (file-res "img/favicon.png" "image/png")
      "/css/main.css" (file-res "css/main.css" "text/css")
      "/js/main.js" (file-res "js/main.js" "application/javascript")
      {:status 404 :body (format "%s not found" uri)})))

(defn handler [req]
  (http/with-channel req channel
    (if (http/websocket? channel)
      (handle-websocket req channel)
      (handle-http req channel))))

(defn -main [& [port]]
  (let [port (Integer. (or port (env :port) 5000))]
    (http/run-server handler {:port port})))
