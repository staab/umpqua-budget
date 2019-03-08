(ns wedge.server.state
  (:require [clojure.data.json :as json]
            [korma.core :as k]
            [wedge.server.model :as model]))

(defn random-uuid [] (.toString (java.util.UUID/randomUUID)))

(defn data->jsonb [data]
  (doto (org.postgresql.util.PGobject.)
        (.setType "jsonb")
        (.setValue (json/write-str data))))

(defn jsonb->data [jsonb] jsonb)

;; Accounts

(defn init-account [{:keys [access-token item-id]}]
  (let [where {:plaid-item-id item-id}
        data {:plaid-item-id item-id
              :plaid-access-token access-token
              :session-id (k/raw "uuid_generate_v4()")}]
    (or
     (first (k/select model/account (k/where where)))
     (do
      (k/insert model/account (k/values data))
      (first (k/select model/account (k/where where)))))))

(defn get-account-by-session-id [session-id]
  (first (k/select model/account (k/where {:session-id session-id}))))

;; Transactions

(defn load-transactions [account-id]
  (k/select model/transaction (k/where {:account account-id})))

(defn save-transactions [account-id transactions]
  (let [txn-ids (set (map :plaid-transaction-id (load-transactions account-id)))
        new-transactions (remove #(txn-ids (:plaid-transaction-id %)) transactions)]
    (when-not (empty? new-transactions)
      (k/insert model/transaction (k/values new-transactions)))))
