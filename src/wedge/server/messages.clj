(ns wedge.server.messages
  (:require [org.httpkit.server :as http :refer [send!]]
            [wedge.server.plaid :as p]
            [wedge.server.state :refer [init-account]]))

(defn msg [type payload]
  (pr-str {:type type :payload payload}))

(def sessions (atom {}))

(defn handle-message [chan {:keys [type payload]}]
  (prn (ns-publics *ns*))
  (prn (symbol (name type)))
  (prn (get (ns-publics *ns*) (symbol (name type))))
  ((get (ns-publics *ns*) (symbol (name type))) chan payload))

(defn create-session [chan {:keys [public-token]}]
  (let [session-id (rand)
        account (init-account (p/exchange public-token))]
    (swap! sessions assoc session-id account)
    (send! chan (msg :session-created {:session-id session-id}))))

(defn load-transactions [chan payload]
  (let [access-token (->> payload :session-id (get @sessions) :access-token)]
    (send! chan (msg :transactions-loaded (p/get-transactions access-token)))))
