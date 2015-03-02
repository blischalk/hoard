// Compiled by ClojureScript 0.0-2814 {}
goog.provide('hoard.twitter');
goog.require('cljs.core');
goog.require('cljs.nodejs');
hoard.twitter.Twitter = cljs.nodejs.require.call(null,"twitter");
hoard.twitter.cfg = (function (){var obj24643 = {"consumer_key":(process["env"]["TWITTER_CONSUMER_KEY"]),"consumer_secret":(process["env"]["TWITTER_CONSUMER_SECRET"]),"access_token_key":(process["env"]["TWITTER_ACCESS_TOKEN_KEY"]),"access_token_secret":(process["env"]["TWITTER_ACCESS_TOKEN_SECRET"])};
return obj24643;
})();
hoard.twitter.max_per_request = (100);
hoard.twitter.client = (new hoard.twitter.Twitter(hoard.twitter.cfg));
hoard.twitter.get_user_tweets = (function get_user_tweets(name,max_id,cb){
var params = (function (){var obj24647 = {"screen_name":name,"count":hoard.twitter.max_per_request};
return obj24647;
})();
return hoard.twitter.client.get("statuses/user_timeline",(((cljs.core.js__GT_clj.call(null,max_id) == null))?params:(params["max_id"] = max_id)),cb);
});
