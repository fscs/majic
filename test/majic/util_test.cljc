(ns majic.util-test
  (:require [clojure.test :refer :all])
  (:require [majic.util :refer [generate-pairings add-bye]]))

(deftest pairing-two-participants
  (is (= [["Bar" "Foo"]]
         (generate-pairings [{:name "Foo" :points 0 :played-against #{}}
                             {:name "Bar" :points 0 :played-against #{}}]))))

(deftest pairing-four-participants
  (is (= [["B" "C"] ["A" "D"]]
         (generate-pairings [{:name "A" :points 0 :played-against #{"C"}}
                             {:name "B" :points 3 :played-against #{"D"}}
                             {:name "C" :points 3 :played-against #{"A"}}
                             {:name "D" :points 0 :played-against #{"B"}}]))))

(deftest bye-not-twice
  (is (= [["A" "B"] ["C" "E"] ["D" :bye]]
         (generate-pairings [{:name "A" :points 6 :played-against #{"E" "C"}}
                             {:name "B" :points 3 :played-against #{:bye "D"}}
                             {:name "C" :points 3 :played-against #{"D" "A"}}
                             {:name "D" :points 3 :played-against #{"C" "B"}}
                             {:name "E" :points 3 :played-against #{"A" :bye}}]))))

(deftest bye-not-twice-backtracked
  (is (= [["A" "D"] ["B" "E"] ["C" :bye]]
         (generate-pairings [{:name "A" :points 6 :played-against #{"B" "C"}}
                             {:name "B" :points 3 :played-against #{"A" :bye}}
                             {:name "C" :points 3 :played-against #{"D" "A"}}
                             {:name "D" :points 3 :played-against #{"C" "E"}}
                             {:name "E" :points 3 :played-against #{:bye "D"}}]))))

(deftest impossible-pairing-is-nil
  (is (= nil
         (generate-pairings [{:name "A" :points 3 :played-against #{"B"}}
                             {:name "B" :points 0 :played-against #{"A"}}]))))

(deftest worst-players-may-not-be-paired
  (is (= [["C" "A"] ["B" "F"] ["D" "E"]]
         (generate-pairings [{:name "A" :points 4 :played-against #{"D" "B"}}
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
