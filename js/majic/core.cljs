(ns majic.core
  (:require-macros [cljs.core.async.macros :refer [go-loop]])
  (:require [reagent.core :as reagent :refer [atom force-update-all]]
            [secretary.core :as secretary :include-macros true]
            [accountant.core :as accountant]
            [historian.core :as hist]
            [domina.core :refer [by-id value]]
            [majic.util :refer [new-game-state add-participant add-result new-round]]
            [cljs-time.core :refer [now plus minus minutes interval in-seconds before?]]
            [cljs.core.async :refer [<! timeout]]
            [cljs.tools.reader.edn :as edn]
            [goog.string :as gstring]
            [goog.string.format]))

(defonce data
  (do (hist/replace-library! (atom []))
      (hist/replace-prophecy! (atom []))
      (atom new-game-state)))

(hist/record! data :data)

(defn reset-countdown [data m]
  (assoc data :countdown-end (plus (now) (minutes m))))

(defn scoring-item [name points]
  ^{:key name} [:li (str name ": " points)])

(defn scoring [participants]
  [:ol.scoring
   (for [participant (reverse (sort-by :points participants))]
     (scoring-item (:name participant) (:points participant)))])

(def add-participant-view
  [:div [:input {:type :text :id :new-name-input}]
        [:button.btn.btn-default
         {:on-click #(let [name-input (by-id :new-name-input)
                           name (value name-input)]
                       (swap! data add-participant name)
                       (set! (.-value name-input) "")
                       (.focus name-input))}
         "Add"]])

(defn participants-manager [participants]
  [:section.participantsContainer
    [:h3 "Participants"]
    [:div (scoring participants)]
    [:div add-participant-view]])

(defn result! [data result player1 player2]
  (swap! data add-result result player1 player2))

(defn result-buttons [player1 player2]
  ^{:key player1} [:span ^{:key :win1} [:button.result {:on-click #(result! data [3 0] player1 player2)} (str player1 " won")]
                         ^{:key :draw} [:button.result {:on-click #(result! data [1 1] player1 player2)} "draw"]
                         ^{:key :win2} [:button.result {:on-click #(result! data [0 3] player1 player2)} (str player2 " won")]])

(defn result-view [[points1 points2] player1 player2]
  (cond
    (== points1 points2) [:i "draw"]
    (> points1 points2) [:i (str player1 " won")]
    (< points1 points2) [:i (str player2 " won")]))

(defn pairings-table [pairings]
  [:table.pairings
    (for [{p1 :player1 p2 :player2 result :result} pairings]
      ^{:key p1} [:tr ^{:key :player1} [:td.p1 p1]
                      ^{:key :player2} [:td.p2 p2]
                      ^{:key :result} [:td (if (nil? result) (result-buttons p1 p2) (result-view result p1 p2))]])])

(defn new-pairings! []
  (if-let [round-limit (js/parseInt (.-value (by-id :round-limit)))]
    (swap! data #(as-> % <>
                       (new-round <>)
                       (reset-countdown <> round-limit)))))

(defn pairings-view [round pairings]
  [:section.pairingsContainer
    [:h3 (str "Pairings for round " round)]
    [:button {:on-click #(new-pairings!)} "New pairings"]
    (pairings-table pairings)])

(defn save-load!
  "Displays an input dialog with the current game state and the option to load
  an older game state."
  []
  (if-let [saved-state (.prompt js/window
                                "Copy the following text to save the current tournament state. Insert a copied state and click on OK to continue a saved tournament."
                                (pr-str @data))]
    (reset! data (edn/read-string saved-state))))

(def state-management-buttons
  [:div.stateManagement
    [:button {:on-click hist/undo!} "undo"]
    [:button {:on-click hist/redo!} "redo"]
    [:button {:on-click save-load!} "save/restore"]])

(defn random-participants [data]
  (clojure.string/join \newline (map :name (shuffle (:participants data)))))

(def tools-buttons
  [:div.tools
    [:input {:type :number :id :round-limit :defaultValue 55 :title "Round Limit" :style {"width" "40px"}}]
    [:button {:on-click #(js/alert (random-participants @data))} "Random Participants"]])

(defn countdown-view [countdown-end]
  (when (and (not (nil? countdown-end)) (before? (now) countdown-end))
    (let [seconds-left (in-seconds (interval (now) countdown-end))]
      [:div#countdown
         {:class ["countdown" (when (<= seconds-left 0) "zero") (when (< seconds-left (* 60 5)) "low")]}
         (quot seconds-left 60)
         ":"
         (gstring/format "%02d" (mod seconds-left 60))])))

(defn countdown-redrawer! []
  (go-loop []
    (<! (timeout 1000))
    (force-update-all)
    (recur)))

(defn contents [data]
  (let [d @data]
    [:div [:h1 "Majic"]
          (countdown-view (:countdown-end d))
          [:h2 "Tournament manager powered by ClojureScript and Reagent"]
          (participants-manager (:participants d))
          (pairings-view (:current-round d) (:current-pairings d))
          state-management-buttons
          tools-buttons
          [:div.copyright "© 2018 Markus Brenneis — This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version."]]))

(defn mount-root []
  (reagent/render [contents data] (by-id "app")))

(defn init! []
  (accountant/configure-navigation!
    {:nav-handler
     (fn [path]
       (secretary/dispatch! path))
     :path-exists?
     (fn [path]
       (secretary/locate-route path))})
  (accountant/dispatch-current!)
  (mount-root)
  (countdown-redrawer!))
