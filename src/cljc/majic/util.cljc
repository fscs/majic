(ns majic.util)

(defn remove-by-name [participants name]
  (filter #(not= name (:name %)) participants))

(defn generate-pairings
  "Sorted by points"
  [participants]
  (case (count participants)
    0 []
    1 (let [p (first participants)]
        (if (contains? (:played-against p) :bye)
           nil
           [[(:name p) :bye]]))
    (let [[p & ps] (reverse (sort-by :points (reverse (sort-by :name participants))))
           opponent (as-> ps <>)
                    (map :name <>)
                    (concat <> [:bye])
                    (filter #(not (contains? (:played-against p) %)) <>)
                    (first <>)]
      (cons [(:name p) opponent] (generate-pairings (remove-by-name ps opponent))))))
