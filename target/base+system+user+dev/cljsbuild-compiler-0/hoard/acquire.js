// Compiled by ClojureScript 0.0-2814 {}
goog.provide('hoard.acquire');
goog.require('cljs.core');
goog.require('hoard.twitter');
goog.require('hoard.backup');
goog.require('cljs.nodejs');
goog.require('cljs.core.async');
hoard.acquire.load_sample_data_QMARK_ = true;
hoard.acquire.data = (function data(screen_name,channel){
if(cljs.core.truth_(hoard.acquire.load_sample_data_QMARK_)){
return hoard.acquire.from_file.call(null,screen_name,channel);
} else {
return hoard.acquire.from_twitter.call(null,screen_name,channel);
}
});
hoard.acquire.from_file = (function from_file(screen_name,channel){
var tweets = cljs.nodejs.require.call(null,"./tweets.json");
console.log("Placing data on channel");

return cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-tweets","user-tweets",96109777),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [screen_name,tweets,false], null)], null));
});
hoard.acquire.from_twitter = (function() {
var from_twitter = null;
var from_twitter__2 = (function (screen_name,channel){
return from_twitter.call(null,screen_name,channel,null);
});
var from_twitter__3 = (function (screen_name,channel,max_id){
console.log("getting data from twitter");

return hoard.twitter.get_user_tweets.call(null,screen_name,max_id,(function (error,tweets,response){
if(cljs.core.truth_(error)){
return console.log(error);
} else {
var js_data = cljs.core.js__GT_clj.call(null,tweets);
var cnt = js_data.length;
var last_tweet_id = (js_data[(cnt - (1))]["id"]);
if(!(cljs.core._EQ_.call(null,last_tweet_id,max_id))){
cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-tweets","user-tweets",96109777),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [screen_name,tweets,true], null)], null));

return from_twitter.call(null,screen_name,channel,last_tweet_id);
} else {
return cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-tweets","user-tweets",96109777),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [screen_name,tweets,false], null)], null));
}
}
}));
});
from_twitter = function(screen_name,channel,max_id){
switch(arguments.length){
case 2:
return from_twitter__2.call(this,screen_name,channel);
case 3:
return from_twitter__3.call(this,screen_name,channel,max_id);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
from_twitter.cljs$core$IFn$_invoke$arity$2 = from_twitter__2;
from_twitter.cljs$core$IFn$_invoke$arity$3 = from_twitter__3;
return from_twitter;
})()
;
