(ns wedge.client.components.core
  (:require [clojure.string :as s]
            [camel-snake-kebab.core :refer [->Camel_Snake_Case]]
            [wedge.client.state :as state]
            [wedge.client.actions :as actions]
            [wedge.client.components.pages.core :refer [page]]))

(defn add-button []
  [:div.add-button
    "add-button"])

(defn sidebar []
  [:div.sidebar
   "sidebar"])

(defn header []
  [:div.header
   [:i.fa.fa-menu {:on-click actions/toggle-sidebar!}]
   (-> @state/page name ->Camel_Snake_Case (s/replace #"_" " "))
   [:i.fa.fa-calendar {:on-click actions/toggle-picker!}]])

(defn footer []
  [:div.footer
    "footer"])

(defn app []
  [:div
   [page]
   [footer]
   [add-button]
   [sidebar]
   [header]])

(defn login-page []
  [:button {:on-click actions/link-account!}
    "link account"])

(defn root []
  [:div (if @state/session-id [app] [login-page])])
