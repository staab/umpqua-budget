(ns budgie.actions
  (:require [budgie.state :refer [public-token save-state!]]
            [budgie.ws :refer [send! handle-message]]))

(declare plaid-handler)

;; App actions

(defn load-transactions! []
  (send! :load-transactions {:public-token @public-token}))

(defn set-public-token! [v]
  (reset! public-token v)
  (save-state!)
  (send! :add-public-token {:public-token v})
  (load-transactions!))

(defn link-account! []
  (.open plaid-handler))

;; Websocket handlers

(defmethod handle-message :send-transactions [type {:keys [payload]}]
  (prn payload))

;; Plaid

(def plaid-config
  {:clientName "Budgie"
   :env "sandbox"
   :key "10e3761c1655ff33ff9c5f410122ba"
   :product ["transactions"]
   :webhook "https://budgie.herokuapp.com"
   :onSuccess set-public-token!})

(def plaid-handler (.create window.Plaid (clj->js plaid-config)))

