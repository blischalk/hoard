// Compiled by ClojureScript 0.0-2814 {}
goog.provide('hoard.core');
goog.require('cljs.core');
goog.require('hoard.twitter');
goog.require('hoard.elasticsearch');
goog.require('weasel.repl');
goog.require('hoard.backup');
goog.require('cljs.nodejs');
hoard.core.tweets_to_file = (function tweets_to_file(file_name,tweets){
var tweets_as_json = JSON.stringify(tweets);
return fs.writeFile.call(null,file_name,tweets_as_json,((function (tweets_as_json){
return (function (err){
if(cljs.core.truth_(err)){
throw err;
} else {
return console.log("Tweets written to file!");
}
});})(tweets_as_json))
);
});
hoard.core.init = (function init(){
hoard.twitter.get_user_tweets.call(null,"blischalk",(function (error,tweets,response){
if(cljs.core.not.call(null,error)){
return hoard.backup.to_file.call(null,"tweets.json",tweets);
} else {
return console.log(error);
}
}));

return hoard.elasticsearch.bulk_insert.call(null,hoard.elasticsearch.bulk_data);
});
window.onload = hoard.core.init;
