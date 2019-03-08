(ns wedge.client.components
  (:require [wedge.client.state :refer [session-id transactions]]
            [wedge.client.actions :refer [link-account! load-transactions!]]))

(defn now [] (.valueOf (js/Date.)))

(defn dashboard-loading []
  [:div.dashboard-loading
   "loading"])

(defn dashboard-value []
  [:div
   [:div.sub-header
    [:i.fa.fa-info-circle]
    [:button {:on-click load-transactions!} "reload"]
    [:p (str "Your account has " 1 " in it")]]])

(defn dashboard []
  (let [{:keys [last-load value]} @transactions]
    (load-transactions!)
    (prn last-load value)
    [:div.page.dashboard
     (if last-load [dashboard-loading] [dashboard-value value])]))

(defn add-button []
  [:div.add-button
    "add-button"])

(defn sidebar []
  [:div.sidebar
   "sidebar"])

(defn header []
  [:div.header
    "header"])

(defn footer []
  [:div.footer
    "footer"])

(defn app []
  [:div
   [dashboard]
   [add-button]
   [sidebar]
   [header]
   [footer]])

(defn login-page []
  [:button {:on-click link-account!}
    "link account"])

(defn root []
  [:div (if @session-id [app] [login-page])])
