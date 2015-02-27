// Compiled by ClojureScript 0.0-2814 {}
goog.provide('hoard.data_processing');
goog.require('cljs.core');
goog.require('hoard.es_tweet_formatter');
goog.require('hoard.elasticsearch');
goog.require('cljs.core.async');
hoard.data_processing.init = (function init(p__20333,ch){
var vec__20335 = p__20333;
var screen_name = cljs.core.nth.call(null,vec__20335,(0),null);
var data = cljs.core.nth.call(null,vec__20335,(1),null);
console.log("Initializing data processing");

return hoard.elasticsearch.bulk_insert.call(null,hoard.es_tweet_formatter.format_bulk_data.call(null,data),((function (vec__20335,screen_name,data){
return (function (err,resp){
if(cljs.core.truth_(err)){
return console.log("Elasticsearch gave an error: ",err);
} else {
console.log("elastic search resp");

console.log(resp);

return cljs.core.async.put_BANG_.call(null,ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-indexed","user-indexed",1494954281),screen_name], null));
}
});})(vec__20335,screen_name,data))
);
});
