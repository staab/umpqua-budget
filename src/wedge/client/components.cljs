(ns wedge.client.components
  (:require [clojure.string :as s]
            [camel-snake-kebab.core :refer [->Camel_Snake_Case]]
            [wedge.client.state :refer [session-id db ui-page]]
            [wedge.client.actions :as actions]))

(defn now [] (.valueOf (js/Date.)))

(defn dashboard-loading []
  [:div.dashboard-loading
   "loading"])

(defn dashboard-value [{:keys [balance]}]
  [:div
   [:div.sub-header
    [:i.fa.fa-info-circle]
    [:p (str "Your account has $" (.toFixed balance 2) " in it")]]
    [:button {:on-click actions/initialize!} "reload"]])

(defn dashboard []
  (let [{:keys [last-load value]} @db]
    (when-not value (actions/initialize!))
    [:div.page.dashboard
     (if (or last-load (not value))
       [dashboard-loading]
       [dashboard-value value])]))

(defn add-button []
  [:div.add-button
    "add-button"])

(defn sidebar []
  [:div.sidebar
   "sidebar"])

(defn header []
  [:div.header
   [:i.fa.fa-menu {:on-click actions/toggle-sidebar!}]
   (-> @ui-page name ->Camel_Snake_Case (s/replace #"_" " "))
   [:i.fa.fa-calendar {:on-click actions/toggle-picker!}]])

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
  [:button {:on-click actions/link-account!}
    "link account"])

(defn root []
  [:div (if @session-id [app] [login-page])])
