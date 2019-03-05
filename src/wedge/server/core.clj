(ns wedge.server.core
  (:require [org.httpkit.server :as http :refer [send!]]
            [clojure.data.json :as json]
            [clojure.java.io :as io]
            [environ.core :refer [env]]
            [wedge.server.messages :refer [handle-message]]))

(defn on-message [channel data]
  (println "Handling message" data)
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
