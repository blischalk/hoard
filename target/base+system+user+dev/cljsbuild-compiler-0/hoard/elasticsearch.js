// Compiled by ClojureScript 0.0-2814 {}
goog.provide('hoard.elasticsearch');
goog.require('cljs.core');
goog.require('cljs.nodejs');
hoard.elasticsearch.Elasticsearch = cljs.nodejs.require.call(null,"elasticsearch");
hoard.elasticsearch.host = "http://localhost:9250";
hoard.elasticsearch.cfg = (function (){var obj20314 = {"host":hoard.elasticsearch.host,"apiVersion":"1.2"};
return obj20314;
})();
hoard.elasticsearch.client = (new hoard.elasticsearch.Elasticsearch.Client(hoard.elasticsearch.cfg));
hoard.elasticsearch.ping_success = (function ping_success(body){
return console.log("booya baby!  Elasticsearch is up and running!");
});
hoard.elasticsearch.ping_failure = (function ping_failure(error){
return console.log("elasticsearch cluster is down!");
});
hoard.elasticsearch.test_es = (function test_es(){
return hoard.elasticsearch.client.ping((function (){var obj20318 = {"requestTimeout":(1000),"hello":"elasticsearch!"};
return obj20318;
})()).then(hoard.elasticsearch.ping_success,hoard.elasticsearch.ping_failure);
});
hoard.elasticsearch.bulk_data = (function (){var obj20320 = {"body":cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var obj20322 = {"index":(function (){var obj20324 = {"_index":"tweets","_type":"tweets","_id":(1)};
return obj20324;
})()};
return obj20322;
})(),(function (){var obj20326 = {"title":"foobar"};
return obj20326;
})()], null)),"timeout":(300000)};
return obj20320;
})();
/**
* Bulk inserts data into Elasticsearch
*/
hoard.elasticsearch.bulk_insert = (function bulk_insert(bulk_body,cb){
return hoard.elasticsearch.client.bulk(bulk_body,cb);
});
hoard.elasticsearch.query_es = (function query_es(){
return hoard.elasticsearch.client.ping((function (){var obj20330 = {"requestTimeout":(1000),"hello":"elasticsearch!"};
return obj20330;
})()).then((function (body){
return console.log("booya!");
}),(function (error){
if(cljs.core.truth_(error)){
return console.log("elasticsearch cluster is down!");
} else {
return console.log("all is well");
}
}));
});
