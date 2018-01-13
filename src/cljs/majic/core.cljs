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
  (atom [{:author "Pete Hunt", :text "This is one comment"}
         {:author "Jordan Walke", :text "This is *another* comment"}]))


(defn comment-item [author & children]
  (into [:div.comment
         [:h2.commentAuthor author]]
        (map #(vector :p %) children)))

(defn comment-form []
  [:div.commentForm
   "Hello, world! I am a CommentForm"])

(defn comment-list [data]
  [:div.commentList
   (for [comment @data]
     [comment-item (:author comment) (:text comment)])])

(defn comment-box []
    ;; you can add ajax callback here
    (fn []
      [:div.commentBox
       [:h1 "Comments"]
       [comment-list data]
       [comment-form]]))

(defn mount-root []
  (reagent/render [comment-box data] (.getElementById js/document "app")))

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
