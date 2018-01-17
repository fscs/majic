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

; test for last two remaining (real) players may not be paired

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
