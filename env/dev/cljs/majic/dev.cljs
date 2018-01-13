(ns ^:figwheel-no-load majic.dev
  (:require
    [majic.core :as core]
    [devtools.core :as devtools]))

(devtools/install!)

(enable-console-print!)

(core/init!)
