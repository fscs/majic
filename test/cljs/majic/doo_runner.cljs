(ns majic.doo-runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [majic.core-test]))

(doo-tests 'majic.core-test)
