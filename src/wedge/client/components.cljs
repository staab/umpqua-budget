(ns wedge.client.components
  (:require [clojure.string :as s]
            [camel-snake-kebab.core :refer [->Camel_Snake_Case]]
            [wedge.client.state :refer [session-id db page]]
            [wedge.client.actions :as actions]))

;; Utils

(def nbsp {:dangerouslySetInnerHTML {:__html "&nbsp;"}})

(defn now [] (.valueOf (js/Date.)))

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

(defn dashboard-circle [stroke]
  [:svg
    [:path {:fill :none
            :stroke stroke
            :stroke-width 20
            :d (describe-arc 50 50 100 0 180)}]])

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
   [dashboard-circle "#EDF5FF"]
   [dashboard-budget-empty]
   [dashboard-budget-empty]
   [dashboard-budget-empty]])

(defn dashboard-value [{:keys [balance]}]
  [:div
   [:div.sub-header
    [:i.fa.fa-info-circle]
    [:p (str "Your account has $" (.toFixed balance 2) " in it")]]
    [dashboard-circle "#EDF5FF"]
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
