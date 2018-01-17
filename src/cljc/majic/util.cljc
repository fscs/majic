(ns majic.util)

(defn remove-by-name [participants name]
  (filter #(not= name (:name %)) participants))

(defn add-bye [participants]
  (let [opponents (map :name (filter #(contains? (:played-against %) :bye) participants))]
    (conj participants {:name :bye, :played-against (set opponents), :points 0})))

(defn- generate-pairings-even [participants]
  (case (count participants)
    0 []
    (let [[p & ps] (reverse (sort-by :points (reverse (sort-by #(str :name %) participants))))
          possible-opponents (filter #(not (contains? (:played-against p) %)) (map :name ps))
          rest-pairings (map #(vector [(:name p) %] (generate-pairings-even (remove-by-name ps %))) possible-opponents)
          [pair pairings] (first (filter #(not (nil? (second %))) rest-pairings))]
      (when (not (nil? pairings))
        (cons pair pairings)))))

(defn generate-pairings
  "Sorted by points"
  [participants]
  (if (odd? (count participants))
    (generate-pairings-even (add-bye participants))
    (generate-pairings-even participants)))
