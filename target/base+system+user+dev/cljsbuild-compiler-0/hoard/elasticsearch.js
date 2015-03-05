// Compiled by ClojureScript 0.0-2814 {}
goog.provide('hoard.elasticsearch');
goog.require('cljs.core');
goog.require('cljs.nodejs');
hoard.elasticsearch.Elasticsearch = cljs.nodejs.require.call(null,"elasticsearch");
hoard.elasticsearch.host = "http://localhost:9250";
hoard.elasticsearch.cfg = (function (){var obj58732 = {"host":hoard.elasticsearch.host,"apiVersion":"1.2"};
return obj58732;
})();
hoard.elasticsearch.client = (new hoard.elasticsearch.Elasticsearch.Client(hoard.elasticsearch.cfg));
hoard.elasticsearch.ping_success = (function ping_success(body){
return console.log("booya baby!  Elasticsearch is up and running!");
});
hoard.elasticsearch.ping_failure = (function ping_failure(error){
return console.log("elasticsearch cluster is down!");
});
hoard.elasticsearch.test_es = (function test_es(){
return hoard.elasticsearch.client.ping((function (){var obj58736 = {"requestTimeout":(1000),"hello":"elasticsearch!"};
return obj58736;
})()).then(hoard.elasticsearch.ping_success,hoard.elasticsearch.ping_failure);
});
hoard.elasticsearch.bulk_data = (function (){var obj58738 = {"body":cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var obj58740 = {"index":(function (){var obj58742 = {"_index":"tweets","_type":"tweets","_id":(1)};
return obj58742;
})()};
return obj58740;
})(),(function (){var obj58744 = {"title":"foobar"};
return obj58744;
})()], null)),"timeout":(300000)};
return obj58738;
})();
/**
* Bulk inserts data into Elasticsearch
*/
hoard.elasticsearch.bulk_insert = (function bulk_insert(bulk_body,cb){
return hoard.elasticsearch.client.bulk(bulk_body,cb);
});
hoard.elasticsearch.status = (function status(comm,err_fn){
return hoard.elasticsearch.client.ping((function (){var obj58748 = {"requestTimeout":(1000),"hello":"elasticsearch!"};
return obj58748;
})()).then((function (body){
return console.log("booya!");
}),(function (error){
if(cljs.core.truth_(error)){
err_fn.call(null,error);

return console.log("Can't connect to Elasticsearch");
} else {
return console.log("all is well");
}
}));
});
hoard.elasticsearch.get_users = (function get_users(cb){
return hoard.elasticsearch.client.search((function (){var obj58764 = {"index":"tweets","searchType":"count","body":(function (){var obj58766 = {"query":(function (){var obj58768 = {"match_all":(function (){var obj58770 = {};
return obj58770;
})()};
return obj58768;
})(),"aggs":(function (){var obj58772 = {"screen_names":(function (){var obj58774 = {"terms":(function (){var obj58776 = {"field":"user.screen_name"};
return obj58776;
})()};
return obj58774;
})()};
return obj58772;
})()};
return obj58766;
})()};
return obj58764;
})(),(function (err,resp){
if(cljs.core.truth_(err)){
return console.log(err);
} else {
return cb.call(null,resp);
}
}));
});
