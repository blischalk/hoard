// Compiled by ClojureScript 0.0-2814 {}
goog.provide('hoard.elasticsearch');
goog.require('cljs.core');
goog.require('cljs.nodejs');
hoard.elasticsearch.Elasticsearch = cljs.nodejs.require.call(null,"elasticsearch");
hoard.elasticsearch.host = "http://localhost:9250";
hoard.elasticsearch.cfg = (function (){var obj38215 = {"host":hoard.elasticsearch.host,"apiVersion":"1.2"};
return obj38215;
})();
hoard.elasticsearch.client = (new hoard.elasticsearch.Elasticsearch.Client(hoard.elasticsearch.cfg));
hoard.elasticsearch.ping_success = (function ping_success(body){
return console.log("booya baby!  Elasticsearch is up and running!");
});
hoard.elasticsearch.ping_failure = (function ping_failure(error){
return console.log("elasticsearch cluster is down!");
});
hoard.elasticsearch.test_es = (function test_es(){
return hoard.elasticsearch.client.ping((function (){var obj38219 = {"requestTimeout":(1000),"hello":"elasticsearch!"};
return obj38219;
})()).then(hoard.elasticsearch.ping_success,hoard.elasticsearch.ping_failure);
});
hoard.elasticsearch.bulk_data = (function (){var obj38221 = {"body":cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var obj38223 = {"index":(function (){var obj38225 = {"_index":"tweets","_type":"tweets","_id":(1)};
return obj38225;
})()};
return obj38223;
})(),(function (){var obj38227 = {"title":"foobar"};
return obj38227;
})()], null)),"timeout":(300000)};
return obj38221;
})();
/**
* Bulk inserts data into Elasticsearch
*/
hoard.elasticsearch.bulk_insert = (function bulk_insert(bulk_body,cb){
return hoard.elasticsearch.client.bulk(bulk_body,cb);
});
hoard.elasticsearch.query_es = (function query_es(){
return hoard.elasticsearch.client.ping((function (){var obj38231 = {"requestTimeout":(1000),"hello":"elasticsearch!"};
return obj38231;
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
hoard.elasticsearch.get_users = (function get_users(cb){
return hoard.elasticsearch.client.search((function (){var obj38247 = {"index":"tweets","searchType":"count","body":(function (){var obj38249 = {"query":(function (){var obj38251 = {"match_all":(function (){var obj38253 = {};
return obj38253;
})()};
return obj38251;
})(),"aggs":(function (){var obj38255 = {"screen_names":(function (){var obj38257 = {"terms":(function (){var obj38259 = {"field":"user.screen_name"};
return obj38259;
})()};
return obj38257;
})()};
return obj38255;
})()};
return obj38249;
})()};
return obj38247;
})(),(function (err,resp){
return cb.call(null,resp);
}));
});
