(ns majic.core
    (:require [reagent.core :as reagent :refer [atom]]
              [secretary.core :as secretary :include-macros true]
              [accountant.core :as accountant]
              [historian.core :as hist]
              [majic.util :refer [generate-pairings]]))

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
  (atom {:participants [{:name "Cyborg", :points 3},
                        {:name "Sigma", :points 4},
                        {:name "Käsebrot", :points 1}]}))

(hist/record! data :data)

(defn new-participant [name]
  {:name name, :points 0})

(defn scoring-item [name points]
  [:li (str name ": " points)])

(defn scoring [data]
  [:ol.scoring
   (for [participant (reverse (sort-by :points (:participants @data)))]
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

(defn participants-manager [data]
  [:div [:p (scoring data)]
        [:p add-participant-view]])

(defn update-participant [participants name k f]
  (map #(if (= name (:name %)) (update % k f) %) participants))

(defn add-points [data p1 p1-points p2 p2-points]
  (print (update data :participants #(update-participant % p1 :points (partial + p1-points))))
  (-> data
      (update :participants #(update-participant % p1 :points (partial + p1-points)))
      (update :participants #(update-participant % p2 :points (partial + p2-points)))))

(defn win-against [data winner loser]
  (add-points data winner 3 loser 0))

(defn draw [data winner loser]
  (add-points data winner 1 loser 1))

(defn result! [button data f player1 player2]
  (swap! data f player1 player2))

(defn result-buttons [player1 player2]
  [[:td [:button.result {:on-click #(this-as btn (result! btn data win-against player1 player2))} (str player1 " won")]]
   [:td [:button.result {:on-click #(this-as btn (result! btn data draw player1 player2))} "draw"]]
   [:td [:button.result {:on-click #(this-as btn (result! btn data win-against player2 player1))} (str player2 " won")]]])

(defn pairings-table [data]
  [:table.pairings
    (for [[p1 p2] (generate-pairings (:participants @data))]
      (vec (concat [:tr [:td.p1 p1] [:td.p2 p2]] (result-buttons p1 p2))))])

(defn pairings-view [data]
  [:div (pairings-table data)
        [:button #_"TODO deref data earlier, save pairing + track where result entered (grey out those), enable end round once results complete" "end round"]])

(def history-view
  [:div [:button {:on-click #(hist/undo!)} "undo"]
        [:button {:on-click #(hist/redo!)} "redo"]])

(defn contents [data]
  [:div (participants-manager data)
        (pairings-view data)
        history-view])

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
