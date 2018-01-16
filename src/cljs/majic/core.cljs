(ns majic.core
    (:require [reagent.core :as reagent :refer [atom]]
              [secretary.core :as secretary :include-macros true]
              [accountant.core :as accountant]
              [majic.util :refer [generate-pairings]]))

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

(defn result-buttons [player1 player2]
  [:span
    [:button.btn.btn-default {:on-click #(swap! data add-points player1 3 player2 0)} "1:0"]
    [:button.btn.btn-default {:on-click #(swap! data add-points player1 0 player2 3)} "0:1"]])

(defn pairings-view [data]
  [:table.pairings
    (for [[p1 p2] (generate-pairings (:participants @data))]
      [:tr [:td.p1 p1] [:td.p2 p2] [:td (result-buttons p1 p2)]])])

(defn contents [data]
  [:div (participants-manager data)
        (pairings-view data)])

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
