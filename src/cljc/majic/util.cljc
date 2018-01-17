(ns majic.util)

(defn remove-by-name [participants name]
  (filter #(not= name (:name %)) participants))

(defn add-bye [participants]
  (let [opponents (map :name (filter #(contains? (:played-against %) :bye) participants))]
    (conj participants {:name :bye, :played-against (set opponents), :points 0})))

(defn generate-pairings
  "Sorted by points"
  [participants]
  (if (odd? (count participants))
    (generate-pairings (add-bye participants))
    (case (count participants)
      0 []
      (let [[p & ps] (reverse (sort-by :points (reverse (sort-by #(str :name %) participants))))
             possible-opponents (as-> ps <>
                                 (map :name <>)
                                 (filter #(not (contains? (:played-against p) %)) <>))]
        (if (empty? possible-opponents)
          nil
          (let [pairing (first (filter #(not (nil? (second %))) (map #(vector [(:name p) %] (generate-pairings (remove-by-name ps %))) possible-opponents)))]
            (if (nil? pairing)
              nil
              (cons (first pairing) (second pairing)))))))))
