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
hoard.es_tweet_formatter.format_bulk_data = (function format_bulk_data(data){
var seq__6091_6103 = cljs.core.seq.call(null,hoard.es_tweet_formatter.fix_array.call(null,data));
var chunk__6092_6104 = null;
var count__6093_6105 = (0);
var i__6094_6106 = (0);
while(true){
if((i__6094_6106 < count__6093_6105)){
var t_6107 = cljs.core._nth.call(null,chunk__6092_6104,i__6094_6106);
console.log(t_6107);

var G__6108 = seq__6091_6103;
var G__6109 = chunk__6092_6104;
var G__6110 = count__6093_6105;
var G__6111 = (i__6094_6106 + (1));
seq__6091_6103 = G__6108;
chunk__6092_6104 = G__6109;
count__6093_6105 = G__6110;
i__6094_6106 = G__6111;
continue;
} else {
var temp__4126__auto___6112 = cljs.core.seq.call(null,seq__6091_6103);
if(temp__4126__auto___6112){
var seq__6091_6113__$1 = temp__4126__auto___6112;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6091_6113__$1)){
var c__4584__auto___6114 = cljs.core.chunk_first.call(null,seq__6091_6113__$1);
var G__6115 = cljs.core.chunk_rest.call(null,seq__6091_6113__$1);
var G__6116 = c__4584__auto___6114;
var G__6117 = cljs.core.count.call(null,c__4584__auto___6114);
var G__6118 = (0);
seq__6091_6103 = G__6115;
chunk__6092_6104 = G__6116;
count__6093_6105 = G__6117;
i__6094_6106 = G__6118;
continue;
} else {
var t_6119 = cljs.core.first.call(null,seq__6091_6113__$1);
console.log(t_6119);

var G__6120 = cljs.core.next.call(null,seq__6091_6113__$1);
var G__6121 = null;
var G__6122 = (0);
var G__6123 = (0);
seq__6091_6103 = G__6120;
chunk__6092_6104 = G__6121;
count__6093_6105 = G__6122;
i__6094_6106 = G__6123;
continue;
}
} else {
}
}
break;
}

var obj6096 = {"body":cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var obj6098 = {"index":(function (){var obj6100 = {"_index":"tweets","_type":"tweets","_id":(1)};
return obj6100;
})()};
return obj6098;
})(),(function (){var obj6102 = {"title":"foobar"};
return obj6102;
})()], null))};
return obj6096;
});
