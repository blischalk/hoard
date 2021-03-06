(defproject hoard "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [org.clojure/clojurescript "0.0-2814"]
                 [com.cemerick/piggieback "0.1.5"]
                 [org.omcljs/om "0.8.8"]
                 [racehub/om-bootstrap "0.4.0"]
                 [secretary "1.2.1"]
                 [weasel "0.5.0"]]
  :source-paths ["src/clj"]
  :main ^:skip-aot hoard.core
  :target-path "target/%s"
  :plugins [[lein-node-webkit-build "0.1.6"]
            [lein-cljsbuild "1.0.3"]
            [com.cemerick/clojurescript.test "0.3.3"]]
  :cljsbuild {:builds [{:source-paths ["src/cljs"]
                        :compiler {:output-to "resources/public/client.js"
                                   :optimizations :whitespace
                                   :pretty-print true } }] }
  :node-webkit-build {:root "resources/public"
                      :name "hoard"
                      :nw-version "0.11.6"}
  :profiles {:uberjar {:aot :all}})
