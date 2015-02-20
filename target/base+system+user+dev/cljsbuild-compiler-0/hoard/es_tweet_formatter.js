// Compiled by ClojureScript 0.0-2814 {}
goog.provide('hoard.es_tweet_formatter');
goog.require('cljs.core');
/**
* For some reason the array of data that comes back
* from the twitter node package or twitter api is not Iseqable.
* To deal with this we conver to a string and then back to JSON.
* This seems to do the trick.
*/
hoard.es_tweet_formatter.fix_array = (function fix_array(data){
return JSON.parse(JSON.stringify(data));
});
hoard.es_tweet_formatter.tweet_formatter = (function tweet_formatter(tweet){
var idx = (function (){var obj13317 = {"index":(function (){var obj13319 = {"_index":"tweets","_type":"tweets","_id":(tweet["id"])};
return obj13319;
})()};
return obj13317;
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,tweet], null);
});
hoard.es_tweet_formatter.format_bulk_data = (function format_bulk_data(data){
var inserts = cljs.core.doall.call(null,cljs.core.map.call(null,hoard.es_tweet_formatter.tweet_formatter,hoard.es_tweet_formatter.fix_array.call(null,data)));
var obj13323 = {"body":cljs.core.clj__GT_js.call(null,cljs.core.flatten.call(null,inserts))};
return obj13323;
});
