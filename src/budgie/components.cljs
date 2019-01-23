(ns budgie.components
  (:require [budgie.state :refer [session-id transactions]]
            [budgie.actions :refer [link-account! load-transactions!]]))

(defn now [] (.valueOf (js/Date.)))

(defn transaction-list []
  (let [{:keys [loaded value error]} @transactions]
    (when (or (not loaded) (< loaded (- (now) 5000)))
      (load-transactions!))
    (if loaded "Loading..." (do (prn value) "good!"))))

(defn login-page []
  [:button {:on-click link-account!}
    "link account"])

(defn dashboard []
  [transaction-list])

(defn root []
  [:div (if @session-id [dashboard] [login-page])])
