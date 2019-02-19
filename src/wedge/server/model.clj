(ns wedge.server.model
  (:require [environ.core :refer [env]]
            [korma.core :refer [defentity belongs-to]]
            [korma.db :refer [postgres defdb]]))

(defdb db (postgres (:database-url env)))

(declare account budget category tag transaction entry)

(defentity account)

(defentity budget
  (belongs-to account {:fk :account}))

(defentity category
  (belongs-to budget))

(defentity tag
  (belongs-to category))

(defentity transaction
  (belongs-to account))

(defentity entry
  (belongs-to transaction))
