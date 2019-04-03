(ns wedge.client.components.pages.dashboard
  (:require [reagent.core :as r]
            [wedge.client.state :refer [db now]]
            [wedge.client.actions :as actions]
            [wedge.client.components.utils
             :refer [PRIMARY PRIMARY-LIGHT SUCCESS DANGER
                     nbsp pct describe-arc link]]
            ))

(defn dashboard-circle [degrees stroke delay-by]
  (let [deg (r/atom 0)
        start-time (+ @now delay-by)
        attrs {:fill :none :stroke stroke :stroke-width "3%"}]
    (fn []
      (if (> start-time @now)
        [:span]
        [:svg.dashboard-circle {:view-box "0 0 100 100"}
          (cond
           (> degrees @deg)
           (do
             (js/requestAnimationFrame
              (fn [] (reset! deg (.min js/Math degrees (* 360 (/ (- @now start-time) 400))))))
             [:path (assoc attrs :d (describe-arc 50 50 35 0 @deg))])
           (< degrees 360) [:path (assoc attrs :d (describe-arc 50 50 35 0 @deg))]
           :else [:circle (assoc attrs :cx 50 :cy 50 :r 35)])]))))

(defn dashboard-budget [title total budgeted]
  [:div.dashboard-budget
   [:h3 title]
   [:div.dashboard-budget-bar]
   [:div.dashboard-budget-settings]
   [:h4 (str total "/" budgeted " - " (pct total budgeted) "%")]])

(defn dashboard-budget-empty []
  [:div.dashboard-budget
   [:h3 nbsp]
   [:div.dashboard-budget-bar]
   [:div.dashboard-budget-settings]
   [:h4 nbsp]])

(defn dashboard-loading []
  [:div.dashboard-loading
   [:div.sub-header {:dangerouslySetInnerHTML {:__html "&nbsp;"}}]
   [:div.dashboard-circles
    [dashboard-circle 360 PRIMARY-LIGHT 0]]
   [dashboard-budget-empty]
   [dashboard-budget-empty]
   [dashboard-budget-empty]])

(defn dashboard-value [{:keys [balance budgets] :as data}]
  (let [spent 1989
        budget 1490]
    [:div
     [:div.sub-header
      [:i.fa.fa-info-circle]
      [:p (str "Your account has $" (.toFixed balance 2) " in it")]]
    [:div.dashboard-content
     (if (> spent budget)
      [:div.dashboard-circles
       [dashboard-circle 360 PRIMARY 0]
       [dashboard-circle (-> spent (/ budget) (* 360) (- 360)) DANGER 400]]
      [:div.dashboard-circles
       [dashboard-circle 360 SUCCESS 0]
       [dashboard-circle (-> spent (/ budget) (* 360)) PRIMARY 0]])
      [:div.dashboard-budgets.section
       (if (empty? budgets)
         [:p "No budgets yet! Click " [link :budgets/new "here"] " to add one."]
         "hi")]]]))

(defn dashboard []
  (let [{:keys [last-load value]} @db]
    (when-not value (actions/initialize!))
    [:div.page.dashboard
     (if value
       [dashboard-value value]
       [dashboard-loading])]))
