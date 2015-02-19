// Compiled by ClojureScript 0.0-2814 {}
goog.provide('hoard.acquire');
goog.require('cljs.core');
goog.require('hoard.twitter');
goog.require('hoard.backup');
goog.require('cljs.nodejs');
goog.require('cljs.core.async');
hoard.acquire.load_sample_data_QMARK_ = false;
hoard.acquire.data = (function data(channel){
if(cljs.core.truth_(hoard.acquire.load_sample_data_QMARK_)){
return hoard.acquire.from_file.call(null,channel);
} else {
return hoard.acquire.from_twitter.call(null,channel);
}
});
hoard.acquire.from_file = (function from_file(channel){
var data = cljs.nodejs.require.call(null,"./tweets.json");
console.log("Placing data on channel");

return cljs.core.async.put_BANG_.call(null,channel,data);
});
hoard.acquire.from_twitter = (function from_twitter(channel){
return hoard.twitter.get_user_tweets.call(null,"blischalk",(function (error,tweets,response){
if(cljs.core.truth_(error)){
return console.log(error);
} else {
console.log("Placing data on channel");

return cljs.core.async.put_BANG_.call(null,channel,tweets);
}
}));
});
