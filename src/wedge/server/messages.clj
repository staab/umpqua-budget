(ns wedge.server.messages
  (:require [org.httpkit.server :as http :refer [send!]]
            [wedge.server.plaid :as p]
            [wedge.server.state :as s]
            [wedge.server.model :as model]))

;; Utils

(defn msg [type payload]
  (pr-str {:type type :payload payload}))

(defn get-balance [{:keys [balances]}]
  (or (:available balances) (:current balances) 0))

(defn convert-transaction
  [account-id {:keys [transaction-id name date amount category]}]
  {:account account-id
   :plaid-name name
   :plaid-date date
   :plaid-amount amount
   :plaid-category category
   :plaid-transaction-id transaction-id})

;; Handlers

(defn create-session [chan {:keys [public-token]}]
  (let [{:keys [session-id]} (s/init-account (p/exchange public-token))]
    (send! chan (msg :session-created {:session-id session-id}))))

(defn initialize [chan {:keys [session-id]}]
  (let [account (s/get-account-by-session-id session-id)
        {account-id :id :keys [plaid-access-token]} account
        {:keys [transactions accounts]} (p/get-transactions plaid-access-token)
        transactions (map (partial convert-transaction account-id) transactions)]
    (s/save-transactions {:account account-id} transactions)
    (send!
     chan
     (msg
      :initialized
      {:balance (apply + (map get-balance accounts))
       :account (select-keys account [:phone :notification-pref])
       :transactions (s/load model/transaction {:account account-id})
       :budgets (s/load model/budget {:account account-id})
       :categories (s/load model/category {:account account-id})
       :tags (s/load model/tag {:account account-id})
       :entries (s/load model/entry {:account account-id})}))))

;; Top-level handler; introspects this namespace to find a matching var

(defn handle-message [chan {:keys [type payload]}]
  (let [handler (get (ns-publics 'wedge.server.messages) (symbol (name type)))]
    (handler chan payload)))

