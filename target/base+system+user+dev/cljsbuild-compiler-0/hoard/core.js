// Compiled by ClojureScript 0.0-2814 {}
goog.provide('hoard.core');
goog.require('cljs.core');
goog.require('hoard.acquire');
goog.require('enfocus.core');
goog.require('weasel.repl');
goog.require('cljs.core.async');
goog.require('enfocus.effects');
goog.require('enfocus.events');
goog.require('hoard.data_processing');
hoard.core.data_channel = cljs.core.async.chan.call(null);
hoard.core.index_user_BANG_ = (function index_user_BANG_(user){
return hoard.acquire.data.call(null,user,hoard.core.data_channel);
});
hoard.core.attach_event_handlers_BANG_ = (function attach_event_handlers_BANG_(){
return enfocus.core.at.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#submit_user"], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1912301393),(function (evt){
var sn = enfocus.core.from.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#screen_name"], null),enfocus.core.get_prop.call(null,new cljs.core.Keyword(null,"value","value",305978217)));
hoard.core.index_user_BANG_.call(null,sn);

return console.log(sn);
})));
});
hoard.core.init = (function init(){
console.log("Program started!");

hoard.core.attach_event_handlers_BANG_.call(null);

return hoard.data_processing.init.call(null,hoard.core.data_channel);
});
window.onload = hoard.core.init;
