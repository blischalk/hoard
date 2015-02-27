// Compiled by ClojureScript 0.0-2814 {}
goog.provide('hoard.util');
goog.require('cljs.core');
hoard.util.hidden = (function hidden(is_hidden){
if(cljs.core.truth_(is_hidden)){
return {"display": "none"};
} else {
return {};
}
});
