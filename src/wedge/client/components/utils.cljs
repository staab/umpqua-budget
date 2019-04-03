(ns wedge.client.components.utils
  (:require [clojure.string :as s]
            ["history" :refer [createBrowserHistory]]))

(def PRIMARY "#479AFF")
(def PRIMARY-LIGHT "#EDF5FF")
(def SUCCESS "#6DFF6A")
(def DANGER "#FF7373")

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

(def history (createBrowserHistory))

(defn link
  ([to children] (link to {} children))
  ([to attrs children]
    [:a
     (assoc attrs :on-click #(.push history (str "/" (subs (str to) 1))))
     children]))
