// Compiled by ClojureScript 0.0-2814 {}
goog.provide('hoard.core');
goog.require('cljs.core');
goog.require('weasel.repl');
goog.require('hoard.data_processing');
goog.require('hoard.acquire');
goog.require('cljs.core.async');
hoard.core.data_channel = cljs.core.async.chan.call(null);
hoard.core.init = (function init(){
console.log("Program started!");

hoard.data_processing.init.call(null,hoard.core.data_channel);

return hoard.acquire.data.call(null,hoard.core.data_channel);
});
window.onload = hoard.core.init;
