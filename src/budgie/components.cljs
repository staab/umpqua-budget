(ns budgie.components
  (:require [budgie.state :refer [public-token]]
            [budgie.actions :refer [link-account!]]))

(defn login-page []
  [:button {:on-click link-account!}
    "link account"])

(defn dashboard []
  [:div @public-token])

(defn root []
  [:div (if @public-token [dashboard] [login-page])])
