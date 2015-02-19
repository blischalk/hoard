// Compiled by ClojureScript 0.0-2814 {}
goog.provide('hoard.twitter');
goog.require('cljs.core');
goog.require('cljs.nodejs');
hoard.twitter.Twitter = cljs.nodejs.require.call(null,"twitter");
hoard.twitter.cfg = (function (){var obj5419 = {"consumer_key":(process["env"]["TWITTER_CONSUMER_KEY"]),"consumer_secret":(process["env"]["TWITTER_CONSUMER_SECRET"]),"access_token_key":(process["env"]["TWITTER_ACCESS_TOKEN_KEY"]),"access_token_secret":(process["env"]["TWITTER_ACCESS_TOKEN_SECRET"])};
return obj5419;
})();
hoard.twitter.max_per_request = (3000);
hoard.twitter.client = (new hoard.twitter.Twitter(hoard.twitter.cfg));
hoard.twitter.get_user_tweets = (function get_user_tweets(name,cb){
var params = (function (){var obj5423 = {"screen_name":name,"count":hoard.twitter.max_per_request};
return obj5423;
})();
return hoard.twitter.client.get("statuses/user_timeline",params,cb);
});
