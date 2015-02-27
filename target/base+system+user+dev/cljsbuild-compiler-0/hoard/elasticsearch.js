// Compiled by ClojureScript 0.0-2814 {}
goog.provide('hoard.elasticsearch');
goog.require('cljs.core');
goog.require('cljs.nodejs');
hoard.elasticsearch.Elasticsearch = cljs.nodejs.require.call(null,"elasticsearch");
hoard.elasticsearch.host = "http://localhost:9250";
hoard.elasticsearch.cfg = (function (){var obj16158 = {"host":hoard.elasticsearch.host,"apiVersion":"1.2"};
return obj16158;
})();
hoard.elasticsearch.client = (new hoard.elasticsearch.Elasticsearch.Client(hoard.elasticsearch.cfg));
hoard.elasticsearch.ping_success = (function ping_success(body){
return console.log("booya baby!  Elasticsearch is up and running!");
});
hoard.elasticsearch.ping_failure = (function ping_failure(error){
return console.log("elasticsearch cluster is down!");
});
hoard.elasticsearch.test_es = (function test_es(){
return hoard.elasticsearch.client.ping((function (){var obj16162 = {"requestTimeout":(1000),"hello":"elasticsearch!"};
return obj16162;
})()).then(hoard.elasticsearch.ping_success,hoard.elasticsearch.ping_failure);
});
hoard.elasticsearch.bulk_data = (function (){var obj16164 = {"body":cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var obj16166 = {"index":(function (){var obj16168 = {"_index":"tweets","_type":"tweets","_id":(1)};
return obj16168;
})()};
return obj16166;
})(),(function (){var obj16170 = {"title":"foobar"};
return obj16170;
})()], null))};
return obj16164;
})();
/**
* Bulk inserts data into Elasticsearch
*/
hoard.elasticsearch.bulk_insert = (function bulk_insert(bulk_body,cb){
return hoard.elasticsearch.client.bulk(bulk_body,cb);
});
hoard.elasticsearch.query_es = (function query_es(){
return hoard.elasticsearch.client.ping((function (){var obj16174 = {"requestTimeout":(1000),"hello":"elasticsearch!"};
return obj16174;
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
