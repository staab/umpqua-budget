(defproject budgie "1.0.0-SNAPSHOT"
  :description "A programming game for kids"
  :url "http://budgie.herokuapp.com"
  :license {:name "MIT"}
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/data.json "0.2.6"]
                 [camel-snake-kebab "0.4.0"]
                 [http-kit "2.3.0"]
                 [environ "1.0.0"]]
  :min-lein-version "2.0.0"
  :main budgie.server
  :plugins [[lein-environ "1.1.0"]]
  :uberjar-name "budgie-standalone.jar"
  :profiles
  {:production
   {:env {:production true}}
   :dev
   {:env {:plaid-client-id "5c4692077ef0a70012161453"
          :plaid-secret "5e4972399bbb26e66ec268bc244c28"
          :plaid-public-key "10e3761c1655ff33ff9c5f410122ba"
          :plaid-url "https://sandbox.plaid.com"}}})
