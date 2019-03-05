(ns wedge.server.model
  (:require [clojure.data.json :as json]
            [environ.core :refer [env]]
            [korma.core :refer [defentity belongs-to prepare transform]]
            [korma.db :refer [postgres defdb]]))

;; Utils

(defn data->jsonb [data]
  (doto (org.postgresql.util.PGobject.)
        (.setType "jsonb")
        (.setValue (json/write-str data))))

(defn jsonb->data [jsonb]
  (json/read-str (.getValue jsonb) :key-fn keyword))

(defn str->date [s]
  (java.sql.Date/valueOf s))

(defn date->str [d]
  (.toString d))

;; Db

(defdb db (:database-url env))

;; Model

(declare account budget category tag transaction entry)

(defentity account)

(defentity budget
  (belongs-to account {:fk :account}))

(defentity category
  (belongs-to budget))

(defentity tag
  (belongs-to category))

(defentity transaction
  (belongs-to account)
  (prepare
   (fn [transaction]
     (-> transaction
       (update :plaid-category data->jsonb)
       (update :plaid-date str->date))))
  (transform
   (fn [transaction]
     (-> transaction
       (update :plaid-category jsonb->data)
       (update :plaid-date date->str)))))

(defentity entry
  (belongs-to transaction))
