(ns wedge.client.components.pages.core
  (:require [wedge.client.state :as state]
            [wedge.client.components.pages.dashboard :refer [dashboard]]
            [wedge.client.components.pages.add-budget :refer [add-budget]]))

(defn page []
  (prn @state/page)
  (case @state/page
        :budgets/new (add-budget)
        (dashboard)))
