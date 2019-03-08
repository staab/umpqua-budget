(ns wedge.client.components
  (:require [wedge.client.state :refer [session-id transactions]]
            [wedge.client.actions :refer [link-account! load-transactions!]]))

(defn now [] (.valueOf (js/Date.)))

(defn transaction-list []
  (let [{:keys [loaded value error]} @transactions]
    (load-transactions!)
    (if loaded "Loading..." [:button {:on-click load-transactions!} "reload"])))

(defn dashboard []
  [transaction-list])

(defn sidebar []
  [:div {:class "sidebar"}])

(defn header []
  [:div {:class "header"}])

(defn footer []
  [:div {:class "footer"}])

(defn add-button []
  [:div {:class "add-button"}])

(defn app []
  [dashboard sidebar header footer add-button])

(defn login-page []
  [:button {:on-click link-account!}
    "link account"])

(defn root []
  [:div (if @session-id [app] [login-page])])
