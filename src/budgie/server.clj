(ns budgie.server
  (:require [org.httpkit.server :as http :refer [send!]]
            [org.httpkit.client :as client]
            [clojure.data.json :as json]
            [clojure.java.io :as io]
            [environ.core :refer [env]]))

;; Utils

(def dt-fmt
  (java.time.format.DateTimeFormatter/ofPattern
    "yyyy-MM-dd"
    java.util.Locale/ENGLISH))

(defn msg [type payload]
  (pr-str {:type type :payload payload}))

;; State

(def channels (atom {}))
(def sessions (atom {}))

;; Plaid client

(def plaid-client-id (:plaid-client-id env))
(def plaid-public-key (:plaid-public-key env))
(def plaid-secret (:plaid-secret env))
(def plaid-url (:plaid-url env))

(defn plaid-get-access-token [public-token]
  (client/post
    {:url (str plaid-url "/item/public_token/exchange")
     :headers {"Content-Type" "application/json"}
     :body (json/write-str {"client_id" plaid-client-id
                            "secret" plaid-secret
                            "public_token" public-token})}))

(defn plaid-get-transactions [session-id]
  (let [{:keys [access-token]} (get @sessions session-id)
        end (java.time.LocalDateTime/now)
        start (.minusMonths end 6)]
    (client/post
      {:url (str plaid-url "/transactions/get")
       :headers {"Content-Type" "application/json"}
       :body (json/write-str {"client_id" plaid-client-id
                              "secret" plaid-secret
                              "access_token" access-token
                              "start_date" (.format dt-fmt start)
                              "end_date" (.format dt-fmt end)})})))

;; Handle message

(defmulti handle-message (fn [channel {:keys [type]}] type))

(defmethod handle-message :create-session [channel {:keys [payload]}]
  (let [{:keys [public-token]} payload
        session-id (rand)]
    (swap! sessions assoc session-id @(plaid-get-access-token public-token))
    (send! channel (msg :session-created {:session-id session-id}))))

(defmethod handle-message :load-transactions [channel {:keys [payload]}]
  (send! channel (msg :transactions-loaded @(plaid-get-transactions (:session-id payload)))))

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
  (send! channel
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
