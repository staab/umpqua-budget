(ns wedge.server.state
  (:require [korma.core :as k]
            [wedge.server.model :as model]))

(defn init-account [{:keys [access-token item-id]}]
  (let [data {:plaid-item-id item-id}]
    (or
     (k/select model/account (k/where data))
     (do
      (k/insert model/account (k/values (assoc data :plaid-access-token access-token)))
      (k/select model/account (k/where data))))))
