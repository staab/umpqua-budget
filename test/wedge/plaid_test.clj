(ns wedge.plaid-test
  (:require [wedge.server.plaid :as p]
            [clojure.test :refer [deftest is]]))

(def pt "public-sandbox-8dd8bf6d-9805-4dc0-8226-36131fe775b1")

(deftest test-exchange
  (let [data (p/call p/exchange pt)]
    (is (not (nil? (:access-token data))))))

(deftest test-exchange
  (let [{:keys [access-token]} (p/call p/exchange pt)
        data (p/call p/get-transactions access-token)]
    (is (not (nil? (:accounts data))))))
