(ns wedge.client.components
  (:require [clojure.string :as s]
            [reagent.core :as r]
            [camel-snake-kebab.core :refer [->Camel_Snake_Case]]
            [wedge.client.state :refer [session-id db page now]]
            [wedge.client.actions :as actions]))

;; Utils

(def PRIMARY "#479AFF")
(def PRIMARY-LIGHT "#EDF5FF")
(def SUCCESS "#6DFF6A")
(def ERROR "#FF7373")

(def nbsp {:dangerouslySetInnerHTML {:__html "&nbsp;"}})

(defn pct [n d] (if (= 0 d) 0 (* 100 (/ n d))))

(defn polar->cartesian [cx cy r deg]
  (let [rad (/ (* (- deg 90) js/Math.PI) 180.0)]
    {:x (+ cx (* r (.cos js/Math rad)))
     :y (+ cy (* r (.sin js/Math rad)))}))

(defn describe-arc [x y r start end]
  (let [{start-x :x start-y :y} (polar->cartesian x y r end)
        {end-x :x end-y :y} (polar->cartesian x y r start)
        large-arc-flag (if (<= (- end start) 180.0) 0 1)
        m (s/join " " ["M" start-x start-y])
        a (s/join " " ["A" r r 0 large-arc-flag 0 end-x end-y])]
    (str m " " a)))

;; Dashboard

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
       [dashboard-circle (-> spent (/ budget) (* 360) (- 360)) ERROR 400]]
      [:div.dashboard-circles
       [dashboard-circle 360 SUCCESS 0]
       [dashboard-circle (-> spent (/ budget) (* 360)) PRIMARY 0]])
      [:div.dashboard-budgets.section
       (if (empty? budgets)
         [:p
          "No budgets yet! Click "
          [:a {:href "/budgets/new"} "here"]
          " to add one."]
         "hi")]]]))

(defn dashboard []
  (let [{:keys [last-load value]} @db]
    (when-not value (actions/initialize!))
    [:div.page.dashboard
     (if value
       [dashboard-value value]
       [dashboard-loading])]))

(defn add-button []
  [:div.add-button
    "add-button"])

(defn sidebar []
  [:div.sidebar
   "sidebar"])

(defn header []
  [:div.header
   [:i.fa.fa-menu {:on-click actions/toggle-sidebar!}]
   (-> @page name ->Camel_Snake_Case (s/replace #"_" " "))
   [:i.fa.fa-calendar {:on-click actions/toggle-picker!}]])

(defn footer []
  [:div.footer
    "footer"])

(defn app []
  [:div
   [dashboard]
   [footer]
   [add-button]
   [sidebar]
   [header]])

(defn login-page []
  [:button {:on-click actions/link-account!}
    "link account"])

(defn root []
  [:div (if @session-id [app] [login-page])])
