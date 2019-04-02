(ns wedge.client.actions
  (:require [wedge.client.state :refer [state db session-id save-state! now]]
            [wedge.client.ws :refer [send! handle-message]]))

(declare plaid-handler)

(defn start! [cur & args]
  (let [{:keys [last-load]} @cur]
    (when (< (or last-load 0) (- @now 5000))
      (swap! cur assoc :last-load @now)
      (apply send! args))))

(defn resolve! [cur value]
  (swap! cur assoc :last-load nil :value value :error nil))

(defn reject! [cur error]
  (swap! cur assoc :last-load nil :value nil :error error))

;; UI actions

(defn set-page! [page]
  (swap! db assoc :page page))

(defn toggle-sidebar! []
  (swap! db update-in [:sidebar :open?] not))

(defn toggle-picker! []
  (swap! db update-in [:picker :open?] not))

;; Data actions

(defn initialize! []
  (start! db :initialize {:session-id @session-id}))

(defn create-session! [v]
  (send! :create-session {:public-token v}))

(defn link-account! []
  (.open plaid-handler))

;; Websocket handlers

(defmethod handle-message :session-created [{:keys [payload]}]
  (swap! state merge payload)
  (save-state!))

(defmethod handle-message :initialized [{:keys [payload]}]
  (resolve! db payload))

;; Plaid

(def plaid-config
  {:clientName "Budgie"
   :env "sandbox"
   :key "10e3761c1655ff33ff9c5f410122ba"
   :product ["transactions"]
   :webhook "https://wedge.herokuapp.com"
   :onSuccess create-session!})

(def plaid-handler (.create js/Plaid (clj->js plaid-config)))

