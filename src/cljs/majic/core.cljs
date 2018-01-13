(ns majic.core
    (:require [reagent.core :as reagent :refer [atom]]
              [secretary.core :as secretary :include-macros true]
              [accountant.core :as accountant]))

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


(defn scoring-item [name points]
  [:li (str name ": " points)])

(defn scoring [data]
  [:ol.scoring
   (for [participant (reverse (sort-by :points (:participants @data)))]
     [scoring-item (:name participant) (:points participant)])])

(defn mount-root []
  (reagent/render [scoring data] (.getElementById js/document "app")))

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
