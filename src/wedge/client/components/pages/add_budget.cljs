(ns wedge.client.components.pages.add-budget
  (:require [reagent.core :as r]
            [wedge.client.state :refer [db now picker]]
            [wedge.client.actions :as actions]
            [wedge.client.components.utils
             :refer [PRIMARY PRIMARY-LIGHT SUCCESS DANGER
                     nbsp pct describe-arc link]]))

(defn add-budget []
  (let [form (r/atom {:name "" :type :credit :amount 0})]
    (fn []
      [:div.page
       [:div.form-row.section
        [:label "Name"]
        [:input {:name :name
                 :type :string
                 :default-value (:name @form)}]]
       [:div.form-row.section
        [:label "Type"]
        [:select {:name :type :default-value (:name @form)}
         [:option {:value :credit} "Credit"]
         [:option {:value :expense} "Expense"]]
        [:div {:class (if (= :credit (:type @form)) :dot-green :dot-red)}]]
       [:div.form-row.section
        [:label "Amount"]
        [:input {:name :type
                 :type :number
                 :step 1
                 :min 0
                 :default-value (:amount @form)}]
        [:p nbsp (str " / " (name (:unit @picker)))]]])))
