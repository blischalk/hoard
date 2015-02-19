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
var idx = (function (){var obj10300 = {"index":(function (){var obj10302 = {"_index":"tweets","_type":"tweets","_id":(tweet["id"])};
return obj10302;
})()};
return obj10300;
})();
var text = (function (){var obj10304 = {"text":(tweet["text"])};
return obj10304;
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,text], null);
});
hoard.es_tweet_formatter.format_bulk_data = (function format_bulk_data(data){
var inserts = cljs.core.doall.call(null,cljs.core.map.call(null,hoard.es_tweet_formatter.tweet_formatter,hoard.es_tweet_formatter.fix_array.call(null,data)));
var obj10308 = {"body":cljs.core.clj__GT_js.call(null,cljs.core.flatten.call(null,inserts))};
return obj10308;
});
