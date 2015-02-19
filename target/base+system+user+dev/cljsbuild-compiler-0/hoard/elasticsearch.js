// Compiled by ClojureScript 0.0-2814 {}
goog.provide('hoard.elasticsearch');
goog.require('cljs.core');
goog.require('cljs.nodejs');
hoard.elasticsearch.Elasticsearch = cljs.nodejs.require.call(null,"elasticsearch");
hoard.elasticsearch.host = "http://localhost:9250";
hoard.elasticsearch.cfg = (function (){var obj5917 = {"host":hoard.elasticsearch.host,"apiVersion":"1.2"};
return obj5917;
})();
hoard.elasticsearch.client = (new hoard.elasticsearch.Elasticsearch.Client(hoard.elasticsearch.cfg));
hoard.elasticsearch.ping_success = (function ping_success(body){
return console.log("booya baby!  Elasticsearch is up and running!");
});
hoard.elasticsearch.ping_failure = (function ping_failure(error){
return console.log("elasticsearch cluster is down!");
});
hoard.elasticsearch.test_es = (function test_es(){
return hoard.elasticsearch.client.ping((function (){var obj5921 = {"requestTimeout":(1000),"hello":"elasticsearch!"};
return obj5921;
})()).then(hoard.elasticsearch.ping_success,hoard.elasticsearch.ping_failure);
});
hoard.elasticsearch.bulk_data = (function (){var obj5923 = {"body":cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var obj5925 = {"index":(function (){var obj5927 = {"_index":"tweets","_type":"tweets","_id":(1)};
return obj5927;
})()};
return obj5925;
})(),(function (){var obj5929 = {"title":"foobar"};
return obj5929;
})()], null))};
return obj5923;
})();
/**
* Bulk inserts data into Elasticsearch
*/
hoard.elasticsearch.bulk_insert = (function bulk_insert(bulk_body){
return hoard.elasticsearch.client.bulk(bulk_body,(function (err,resp){
if(cljs.core.truth_(err)){
return console.log(err);
} else {
return console.log(resp);
}
}));
});
hoard.elasticsearch.query_es = (function query_es(){
return hoard.elasticsearch.client.ping((function (){var obj5933 = {"requestTimeout":(1000),"hello":"elasticsearch!"};
return obj5933;
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
