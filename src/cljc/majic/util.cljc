(ns majic.util)

(defn generate-pairings [participants]
  (partition 2 (concat (map :name participants) ["FREILOS"])))

