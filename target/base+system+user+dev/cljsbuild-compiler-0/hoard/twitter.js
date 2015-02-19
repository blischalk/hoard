// Compiled by ClojureScript 0.0-2814 {}
goog.provide('hoard.twitter');
goog.require('cljs.core');
goog.require('cljs.nodejs');
hoard.twitter.Twitter = cljs.nodejs.require.call(null,"twitter");
hoard.twitter.cfg = (function (){var obj11184 = {"consumer_key":(process["env"]["TWITTER_CONSUMER_KEY"]),"consumer_secret":(process["env"]["TWITTER_CONSUMER_SECRET"]),"access_token_key":(process["env"]["TWITTER_ACCESS_TOKEN_KEY"]),"access_token_secret":(process["env"]["TWITTER_ACCESS_TOKEN_SECRET"])};
return obj11184;
})();
hoard.twitter.max_per_request = (3000);
hoard.twitter.client = (new hoard.twitter.Twitter(hoard.twitter.cfg));
hoard.twitter.get_user_tweets = (function get_user_tweets(name,cb){
var params = (function (){var obj11188 = {"screen_name":name,"count":hoard.twitter.max_per_request};
return obj11188;
})();
console.log([cljs.core.str("Getting tweets for user "),cljs.core.str(name)].join(''));

return hoard.twitter.client.get("statuses/user_timeline",params,cb);
});
