(ns majic.core
    (:require [reagent.core :as reagent :refer [atom]]
              [secretary.core :as secretary :include-macros true]
              [accountant.core :as accountant]
              [historian.core :as hist]
              [majic.util :refer [pair add-result new-round]]))

(hist/replace-library! (atom []))
(hist/replace-prophecy! (atom []))

;; -------------------------
;; Views

(defn home-page []
  [:div [:h2 "Welcome to majic"]
   [:div [:a {:href "/about"} "go to about page"]]])

(defn about-page []
  [:div [:h2 "About majic"]
   [:div [:a {:href "/"} "go to the home page"]]])

;; -------------------------
;; Routes

(defonce page (atom #'home-page))

(defn current-page []
  [:div [@page]])

(secretary/defroute "/" []
  (reset! page #'home-page))

(secretary/defroute "/about" []
  (reset! page #'about-page))

;; -------------------------
;; Initialize app

(def data
  (atom {:participants [{:name "Cyborg", :points 3, :played-against #{}}
                        {:name "Sigma", :points 4, :played-against #{}},
                        {:name "Käsebrot", :points 1, :played-against #{}}]
         :current-round 0
         :current-pairings []}))

(hist/record! data :data)

(defn new-participant [name]
  {:name name, :points 0, :played-against #{}})

(defn scoring-item [name points]
  [:li (str name ": " points)])

(defn scoring [participants]
  [:ol.scoring
   (for [participant (reverse (sort-by :points participants))]
     (scoring-item (:name participant) (:points participant)))])

(defn add-participant [data name]
  (if (not-empty name)
    (update data :participants #(conj % (new-participant name)))
    data))

(def add-participant-view
  [:div [:input {:field :text :id :new-name-input}]
        [:button.btn.btn-default
          {:on-click #(let [name (.-value (.getElementById js/document "new-name-input"))]
                        (swap! data add-participant name))}
          "Add"]])

(defn participants-manager [participants]
  [:div [:h3 "Participants"]
        [:p (scoring participants)]
        [:p add-participant-view]])

(defn update-participant [participants name k f]
  (map #(if (= name (:name %)) (update % k f) %) participants))

(defn add-points [data p1 p1-points p2 p2-points]
  (print (update data :participants #(update-participant % p1 :points (partial + p1-points))))
  (-> data
      (update :participants #(update-participant % p1 :points (partial + p1-points)))
      (update :participants #(update-participant % p2 :points (partial + p2-points)))))

(defn result! [data result player1 player2]
  (swap! data add-result result player1 player2))

(defn result-buttons [player1 player2]
  [[:td [:button.result {:on-click #(result! data [3 0] player1 player2)} (str player1 " won")]]
   [:td [:button.result {:on-click #(result! data [1 1] player1 player2)} "draw"]]
   [:td [:button.result {:on-click #(result! data [0 3] player1 player2)} (str player2 " won")]]])

(defn result-view [[points1 points2] player1 player2]
  [(cond
    (== points1 points2) [:td [:i "draw"]]
    (> points1 points2) [:td [:i (str player1 " won")]]
    (< points1 points2) [:td [:i (str player2 " won")]])])

(defn pairings-table [pairings]
  [:table.pairings
    (for [{p1 :player1 p2 :player2 result :result} pairings]
      (vec (concat [:tr [:td.p1 p1] [:td.p2 p2]]
                   (if (nil? result) (result-buttons p1 p2) (result-view result p1 p2)))))])

(defn pairings-view [round pairings]
  [:div [:h3 (str "Pairings for round " round)]
        (pairings-table pairings)
        [:button {:on-click #(swap! data new-round)} "New pairings"]])

(def history-view
  [:div [:button {:on-click #(hist/undo!)} "undo"]
        [:button {:on-click #(hist/redo!)} "redo"]])

(defn contents [data]
  (let [d @data]
    [:div (participants-manager (:participants d))
          (pairings-view (:current-round d) (:current-pairings d))
          history-view]))

(defn mount-root []
  (reagent/render [contents data] (.getElementById js/document "app")))

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
