// Compiled by ClojureScript 0.0-2814 {}
goog.provide('hoard.core');
goog.require('cljs.core');
goog.require('hoard.twitter');
goog.require('hoard.es_tweet_formatter');
goog.require('hoard.elasticsearch');
goog.require('weasel.repl');
goog.require('hoard.backup');
goog.require('cljs.nodejs');
hoard.core.init = (function init(){
var data_6076 = cljs.nodejs.require.call(null,"./tweets.json");
console.log("The data is................");

console.log(cljs.core.first.call(null,data_6076));

return console.log("Program started!");
});
window.onload = hoard.core.init;
