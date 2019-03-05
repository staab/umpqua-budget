(ns wedge.server.plaid
  (:require [org.httpkit.client :as client]
            [clojure.data.json :as json]
            [environ.core :refer [env]]
            [camel-snake-kebab.core :refer [->kebab-case]]))

(def dt-fmt
  (java.time.format.DateTimeFormatter/ofPattern
    "yyyy-MM-dd"
    java.util.Locale/ENGLISH))

(def client-id (:plaid-client-id env))
(def subdomain (:plaid-subdomain env))
(def secret (:plaid-secret env))

(def url (str "https://" subdomain ".plaid.com"))

(defn wrap [f]
  (fn [& args]
    (let [{:keys [body error]} @(apply f args)]
      (when error (throw error))
      (let [data (json/read-str body :key-fn (comp keyword ->kebab-case))]
        (when-let [message (:error-message data)]
          (throw (Error. message)))
        data))))

(def exchange
  (wrap
   (fn [public-token]
      (client/post
        (str url "/item/public_token/exchange")
        {:headers {"Content-Type" "application/json"}
         :body (json/write-str {"client_id" client-id
                                "secret" secret
                                "public_token" public-token})}))))

(def get-transactions
  (wrap
   (fn [access-token]
      (let [end (java.time.LocalDateTime/now)
            start (.minusMonths end 6)]
        (client/post
          (str url "/transactions/get")
          {:headers {"Content-Type" "application/json"}
           :body (json/write-str {"client_id" client-id
                                  "secret" secret
                                  "access_token" access-token
                                  "start_date" (.format dt-fmt start)
                                  "end_date" (.format dt-fmt end)})})))))
