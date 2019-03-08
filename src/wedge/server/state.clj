(ns wedge.server.state
  (:refer-clojure :exclude [load])
  (:require [clojure.data.json :as json]
            [korma.core :as k]
            [wedge.server.model :as model]))

(defn random-uuid [] (.toString (java.util.UUID/randomUUID)))

(defn data->jsonb [data]
  (doto (org.postgresql.util.PGobject.)
        (.setType "jsonb")
        (.setValue (json/write-str data))))

(defn jsonb->data [jsonb] jsonb)

;; Just basic crud

(defn create [entity data]
  (k/insert entity (k/values data)))

(defn load [entity where]
  (k/select entity (k/where where)))

(defn one [entity where]
  (first (k/select entity (k/where where))))

;; Accounts

(defn init-account [{:keys [access-token item-id]}]
  (let [where {:plaid-item-id item-id}
        data {:plaid-item-id item-id
              :plaid-access-token access-token
              :session-id (k/raw "uuid_generate_v4()")}]
    (or
     (one model/account where)
     (do
      (create model/account data)
      (one model/account where)))))

(defn get-account-by-session-id [session-id]
  (one model/account {:session-id session-id}))

;; Transactions

;; This is a better version, but it doesn't work because the query is
;; threaded through the forms, and raw doesn't take a query. Figure out
;; how to append raw sql to a query
;;  (defn save-transactions [transactions]
;;    (k/insert
;;     model/transaction
;;     (k/values transactions)
;;     (k/raw "ON CONFLICT DO NOTHING")))

(defn save-transactions [where transactions]
  (let [txn-ids (set (map :plaid-transaction-id (load model/transaction where)))
        new-transactions (remove #(txn-ids (:plaid-transaction-id %)) transactions)]
    (when-not (empty? new-transactions)
      (create model/transaction new-transactions))))
