(ns wedge.client.components
  (:require [wedge.client.state :refer [session-id transactions]]
            [wedge.client.actions :refer [link-account! load-transactions!]]))

(defn now [] (.valueOf (js/Date.)))

(defn transaction-list []
  (let [{:keys [loaded value error]} @transactions]
    (load-transactions!)
    (if loaded "Loading..." [:button {:on-click load-transactions!} "reload"])))

(defn login-page []
  [:button {:on-click link-account!}
    "link account"])

(defn dashboard []
  [transaction-list])

(defn root []
  [:div (if @session-id [dashboard] [login-page])])
