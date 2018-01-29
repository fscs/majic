(ns majic.util)

(def new-game-state
  {:participants []
   :current-round 0
   :current-pairings []})

(defn new-participant [name]
  {:name name, :points 0, :played-against #{}})

(defn add-participant [data name]
  (if (not-empty name)
    (update data :participants #(conj % (new-participant name)))
    data))

(defn remove-by-name [participants name]
  (filter #(not= name (:name %)) participants))

(defn add-bye [participants]
  (let [opponents (map :name (filter #(contains? (:played-against %) :bye) participants))]
    (conj participants {:name :bye, :played-against (set opponents), :points 0})))

(defn- deterministic-shuffle
  "Return a 'random' permutation of coll in a deterministic way."
  [coll]
  (sort-by #(hash [coll %]) coll))

(defn- pair-even [participants]
  (case (count participants)
    0 []
    (let [[p & ps] (reverse (sort-by :points (deterministic-shuffle participants)))
          possible-opponents (filter #(not (contains? (:played-against p) %)) (map :name ps))
          rest-pairings (map #(vector [(:name p) %] (pair-even (remove-by-name ps %))) possible-opponents)
          [pair pairings] (first (filter #(not (nil? (second %))) rest-pairings))]
      (when (not (nil? pairings))
        (cons pair pairings)))))

(defn pair
  "Sorted by points"
  [participants]
  (if (odd? (count participants))
    (pair-even (add-bye participants))
    (pair-even participants)))

(defn generate-pairings [participants]
  (for [[p1 p2] (pair participants)]
    {:player1 p1 :player2 p2 :result nil}))

(defn add-result-to-pairings [pairings result player1 player2]
  (map #(if (and (= player1 (:player1 %)) (= player2 (:player2 %)))
          (assoc % :result result) %) pairings))

(defn add-result [data result player1 player2]
  (update data :current-pairings add-result-to-pairings result player1 player2))

(defn points-from-pairings [pairings]
  (apply merge (map #(hash-map (:player1 %) (first (:result %)) (:player2 %) (second (:result %))) pairings)))

(defn apply-results [participants pairings]
  (let [points (points-from-pairings pairings)]
    (for [participant participants]
      (update participant :points #(+ % (get points (:name participant) 0))))))

(defn pairs-from-pairings [pairings]
  (apply merge (map #(hash-map (:player1 %) (:player2 %) (:player2 %) (:player1 %)) pairings)))

(defn remember-opponents [participants pairings]
  (let [pairs (pairs-from-pairings pairings)]
    (for [participant participants]
      (update participant :played-against #(if (contains? pairs (:name participant))
                                             (conj % (get pairs (:name participant)))
                                             %)))))

(defn new-round [data]
  (as-> data <>
      (update <> :participants apply-results (:current-pairings <>))
      (update <> :participants remember-opponents (:current-pairings <>))
      (assoc <> :current-pairings (generate-pairings (:participants <>)))
      (update <> :current-round inc)))
