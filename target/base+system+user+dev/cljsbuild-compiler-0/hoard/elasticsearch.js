// Compiled by ClojureScript 0.0-2814 {}
goog.provide('hoard.elasticsearch');
goog.require('cljs.core');
goog.require('cljs.nodejs');
hoard.elasticsearch.Elasticsearch = cljs.nodejs.require.call(null,"elasticsearch");
hoard.elasticsearch.host = "http://localhost:9250";
hoard.elasticsearch.cfg = (function (){var obj46717 = {"host":hoard.elasticsearch.host,"apiVersion":"1.2"};
return obj46717;
})();
hoard.elasticsearch.client = (new hoard.elasticsearch.Elasticsearch.Client(hoard.elasticsearch.cfg));
hoard.elasticsearch.ping_success = (function ping_success(body){
return console.log("booya baby!  Elasticsearch is up and running!");
});
hoard.elasticsearch.ping_failure = (function ping_failure(error){
return console.log("elasticsearch cluster is down!");
});
hoard.elasticsearch.test_es = (function test_es(){
return hoard.elasticsearch.client.ping((function (){var obj46721 = {"requestTimeout":(1000),"hello":"elasticsearch!"};
return obj46721;
})()).then(hoard.elasticsearch.ping_success,hoard.elasticsearch.ping_failure);
});
hoard.elasticsearch.bulk_data = (function (){var obj46723 = {"body":cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var obj46725 = {"index":(function (){var obj46727 = {"_index":"tweets","_type":"tweets","_id":(1)};
return obj46727;
})()};
return obj46725;
})(),(function (){var obj46729 = {"title":"foobar"};
return obj46729;
})()], null)),"timeout":(300000)};
return obj46723;
})();
/**
* Bulk inserts data into Elasticsearch
*/
hoard.elasticsearch.bulk_insert = (function bulk_insert(bulk_body,cb){
return hoard.elasticsearch.client.bulk(bulk_body,cb);
});
hoard.elasticsearch.query_es = (function query_es(){
return hoard.elasticsearch.client.ping((function (){var obj46733 = {"requestTimeout":(1000),"hello":"elasticsearch!"};
return obj46733;
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
return hoard.elasticsearch.client.search((function (){var obj46749 = {"index":"tweets","searchType":"count","body":(function (){var obj46751 = {"query":(function (){var obj46753 = {"match_all":(function (){var obj46755 = {};
return obj46755;
})()};
return obj46753;
})(),"aggs":(function (){var obj46757 = {"screen_names":(function (){var obj46759 = {"terms":(function (){var obj46761 = {"field":"user.screen_name"};
return obj46761;
})()};
return obj46759;
})()};
return obj46757;
})()};
return obj46751;
})()};
return obj46749;
})(),(function (err,resp){
if(cljs.core.truth_(err)){
return console.log(err);
} else {
return cb.call(null,resp);
}
}));
});
