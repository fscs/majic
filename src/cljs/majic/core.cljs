(ns majic.core
  (:require [reagent.core :as reagent :refer [atom]]
            [secretary.core :as secretary :include-macros true]
            [accountant.core :as accountant]
            [historian.core :as hist]
            [domina.core :refer [by-id value]]
            [majic.util :refer [new-game-state add-participant pair add-result new-round]]
            [cljs.tools.reader.edn :as edn]))

(defonce data
  (do (hist/replace-library! (atom []))
      (hist/replace-prophecy! (atom []))
      (atom new-game-state)))

(hist/record! data :data)

(defn scoring-item [name points]
  [:li (str name ": " points)])

(defn scoring [participants]
  [:ol.scoring
   (for [participant (reverse (sort-by :points participants))]
     (scoring-item (:name participant) (:points participant)))])

(def add-participant-view
  [:div [:input {:field :text :id :new-name-input}]
        [:button.btn.btn-default
         {:on-click #(let [name-input (by-id "new-name-input")
                           name (value name-input)]
                       (swap! data add-participant name)
                       (set! (.-value name-input) "")
                       (.focus name-input))}
         "Add"]])

(defn participants-manager [participants]
  [:div [:h3 "Participants"]
        [:p (scoring participants)]
        [:p add-participant-view]])

(defn result! [data result player1 player2]
  (swap! data add-result result player1 player2))

(defn result-buttons [player1 player2]
  [:span [:button.result {:on-click #(result! data [3 0] player1 player2)} (str player1 " won")]
         [:button.result {:on-click #(result! data [1 1] player1 player2)} "draw"]
         [:button.result {:on-click #(result! data [0 3] player1 player2)} (str player2 " won")]])

(defn result-view [[points1 points2] player1 player2]
  (cond
    (== points1 points2) [:i "draw"]
    (> points1 points2) [:i (str player1 " won")]
    (< points1 points2) [:i (str player2 " won")]))

(defn pairings-table [pairings]
  [:table.pairings
    (for [{p1 :player1 p2 :player2 result :result} pairings]
      [:tr [:td.p1 p1]
           [:td.p2 p2]
           [:td (if (nil? result) (result-buttons p1 p2) (result-view result p1 p2))]])])

(defn pairings-view [round pairings]
  [:div [:h3 (str "Pairings for round " round)]
        [:button {:on-click #(swap! data new-round)} "New pairings"]
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

(defn contents [data]
  (let [d @data]
    [:div [:h1 "Majic"]
          [:h2 "Magic tournament manager powered by ClojureScript and Reagent"]
          (participants-manager (:participants d))
          (pairings-view (:current-round d) (:current-pairings d))
          state-management-buttons
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
  (mount-root))
