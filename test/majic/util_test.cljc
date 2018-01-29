(ns majic.util-test
  (:require [clojure.test :refer [deftest is]]
            [majic.util :refer [pair add-bye add-result points-from-pairings apply-results pairs-from-pairings
                                remember-opponents new-game-state add-participant new-round]]))

(deftest pairing-two-participants
  (is (= [["Foo" "Bar"]]
         (pair [{:name "Foo" :points 0 :played-against #{}}
                {:name "Bar" :points 0 :played-against #{}}]))))

(deftest pairing-four-participants
  (is (= [["B" "C"] ["A" "D"]]
         (pair [{:name "A" :points 0 :played-against #{"C"}}
                {:name "B" :points 3 :played-against #{"D"}}
                {:name "C" :points 3 :played-against #{"A"}}
                {:name "D" :points 0 :played-against #{"B"}}]))))

(deftest pairings-not-completely-deterministic
  (is (not=
        (pair [{:name "A" :points 0 :played-against #{}}
               {:name "B" :points 0 :played-against #{}}
               {:name "D" :points 0 :played-against #{}}
               {:name "C" :points 0 :played-against #{}}])
        (pair [{:name "A" :points 0 :played-against #{}}
               {:name "B" :points 0 :played-against #{}}
               {:name "C" :points 0 :played-against #{}}
               {:name "D" :points 0 :played-against #{}}]))))

(deftest bye-not-twice
  (is (= [["A" "D"] ["E" "B"] ["C" :bye]]
         (pair [{:name "A" :points 6 :played-against #{"E" "C"}}
                {:name "B" :points 3 :played-against #{:bye "D"}}
                {:name "C" :points 3 :played-against #{"D" "A"}}
                {:name "D" :points 3 :played-against #{"C" "B"}}
                {:name "E" :points 3 :played-against #{"A" :bye}}]))))

(deftest bye-not-twice-backtracked
  (is (= [["A" "D"] ["B" "E"] ["C" :bye]]
         (pair [{:name "A" :points 6 :played-against #{"B" "C"}}
                {:name "B" :points 3 :played-against #{"A" :bye}}
                {:name "C" :points 3 :played-against #{"D" "A"}}
                {:name "D" :points 3 :played-against #{"C" "E"}}
                {:name "E" :points 3 :played-against #{:bye "D"}}]))))

(deftest impossible-pairing-is-nil
  (is (= nil
         (pair [{:name "A" :points 3 :played-against #{"B"}}
                {:name "B" :points 0 :played-against #{"A"}}]))))

(deftest worst-players-may-not-be-paired
  (is (= [["C" "A"] ["B" "F"] ["D" "E"]]
         (pair [{:name "A" :points 4 :played-against #{"D" "B"}}
                {:name "B" :points 4 :played-against #{"E" "A"}}
                {:name "C" :points 6 :played-against #{"F" "D"}}
                {:name "D" :points 3 :played-against #{"A" "C"}}
                {:name "E" :points 1 :played-against #{"B" "F"}}
                {:name "F" :points 1 :played-against #{"C" "E"}}]))))

(deftest add-bye-test
  (is (= [{:name "A" :points 6 :played-against #{"E" "C"}}
          {:name "B" :points 3 :played-against #{:bye "D"}}
          {:name "C" :points 3 :played-against #{"D" "A"}}
          {:name "D" :points 3 :played-against #{"C" "B"}}
          {:name "E" :points 3 :played-against #{"A" :bye}}
          {:name :bye :points 0 :played-against #{"B" "E"}}]
         (add-bye [{:name "A" :points 6 :played-against #{"E" "C"}}
                   {:name "B" :points 3 :played-against #{:bye "D"}}
                   {:name "C" :points 3 :played-against #{"D" "A"}}
                   {:name "D" :points 3 :played-against #{"C" "B"}}
                   {:name "E" :points 3 :played-against #{"A" :bye}}]))))

(deftest add-result-test
  (is (= {:current-pairings [{:player1 "Foo" :player2 "Bar" :result [3 0]}]}
         (add-result {:current-pairings [{:player1 "Foo" :player2 "Bar" :result nil}]}
                     [3 0] "Foo" "Bar"))))

(deftest points-for-with-result-test
  (is (= {"Foo" 3 "Bar" 0}
         (points-from-pairings [{:player1 "Foo" :player2 "Bar" :result [3 0]}]))))

(deftest apply-results-test
  (is (= [{:name "Foo" :points 3} {:name "Bar" :points 0}]
         (apply-results [{:name "Foo" :points 0} {:name "Bar" :points 0}]
                        [{:player1 "Foo" :player2 "Bar" :result [3 0]}]))))

(deftest pairs-from-pairings-test
  (is (= {"Foo" "Bar" "Bar" "Foo"}
         (pairs-from-pairings [{:player1 "Foo" :player2 "Bar" :result [3 0]}]))))

(deftest remember-opponents-test
  (is (= [{:name "Foo" :played-against #{"Bar"}} {:name "Bar" :played-against #{"Foo"}}]
         (remember-opponents [{:name "Foo" :played-against #{}} {:name "Bar" :played-against #{}}]
                             [{:player1 "Foo" :player2 "Bar" :result [3 0]}]))))

(deftest play-round-test
  (is (= {:participants [{:name "A" :points 3 :played-against #{"B"}}
                         {:name "B" :points 0 :played-against #{"A"}}
                         {:name "D" :points 1 :played-against #{"C"}}
                         {:name "C" :points 1 :played-against #{"D"}}]
          :current-round 2
          :current-pairings [{:player1 "A" :player2 "D" :result nil}
                             {:player1 "C" :player2 "B" :result nil}]}
         (-> new-game-state
             (add-participant "A")
             (add-participant "B")
             (add-participant "D")
             (add-participant "C")
             (new-round)
             (add-result [3 0] "A" "B")
             (add-result [1 1] "C" "D")
             (new-round)))))
