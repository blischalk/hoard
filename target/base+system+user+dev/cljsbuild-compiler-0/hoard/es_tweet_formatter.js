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
var idx = (function (){var obj11112 = {"index":(function (){var obj11114 = {"_index":"tweets","_type":"tweets","_id":(tweet["id"])};
return obj11114;
})()};
return obj11112;
})();
var data = (function (){var obj11116 = {"text":(tweet["text"]),"name":(tweet["user"]["name"]),"screen_name":(tweet["user"]["screen_name"])};
return obj11116;
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,data], null);
});
hoard.es_tweet_formatter.format_bulk_data = (function format_bulk_data(data){
var inserts = cljs.core.doall.call(null,cljs.core.map.call(null,hoard.es_tweet_formatter.tweet_formatter,hoard.es_tweet_formatter.fix_array.call(null,data)));
var obj11120 = {"body":cljs.core.clj__GT_js.call(null,cljs.core.flatten.call(null,inserts))};
return obj11120;
});
