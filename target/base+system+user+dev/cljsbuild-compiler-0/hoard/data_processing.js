// Compiled by ClojureScript 0.0-2814 {}
goog.provide('hoard.data_processing');
goog.require('cljs.core');
goog.require('hoard.es_tweet_formatter');
goog.require('hoard.elasticsearch');
goog.require('cljs.core.async');
hoard.data_processing.init = (function init(data_channel){
console.log("Initializing data processing");

var c__6581__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6581__auto__){
return (function (){
var f__6582__auto__ = (function (){var switch__6525__auto__ = ((function (c__6581__auto__){
return (function (state_10353){
var state_val_10354 = (state_10353[(1)]);
if((state_val_10354 === (4))){
var inst_10344 = (state_10353[(2)]);
var inst_10345 = cljs.core.nth.call(null,inst_10344,(0),null);
var inst_10346 = cljs.core.nth.call(null,inst_10344,(1),null);
var inst_10347 = console.log("Received Data");
var inst_10348 = hoard.es_tweet_formatter.format_bulk_data.call(null,inst_10345);
var inst_10349 = hoard.elasticsearch.bulk_insert.call(null,inst_10348);
var state_10353__$1 = (function (){var statearr_10355 = state_10353;
(statearr_10355[(7)] = inst_10347);

(statearr_10355[(8)] = inst_10346);

return statearr_10355;
})();
var statearr_10356_10365 = state_10353__$1;
(statearr_10356_10365[(2)] = inst_10349);

(statearr_10356_10365[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10354 === (3))){
var inst_10351 = (state_10353[(2)]);
var state_10353__$1 = state_10353;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10353__$1,inst_10351);
} else {
if((state_val_10354 === (2))){
var inst_10340 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10341 = [data_channel];
var inst_10342 = (new cljs.core.PersistentVector(null,1,(5),inst_10340,inst_10341,null));
var state_10353__$1 = state_10353;
return cljs.core.async.ioc_alts_BANG_.call(null,state_10353__$1,(4),inst_10342);
} else {
if((state_val_10354 === (1))){
var state_10353__$1 = state_10353;
var statearr_10357_10366 = state_10353__$1;
(statearr_10357_10366[(2)] = null);

(statearr_10357_10366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__6581__auto__))
;
return ((function (switch__6525__auto__,c__6581__auto__){
return (function() {
var state_machine__6526__auto__ = null;
var state_machine__6526__auto____0 = (function (){
var statearr_10361 = [null,null,null,null,null,null,null,null,null];
(statearr_10361[(0)] = state_machine__6526__auto__);

(statearr_10361[(1)] = (1));

return statearr_10361;
});
var state_machine__6526__auto____1 = (function (state_10353){
while(true){
var ret_value__6527__auto__ = (function (){try{while(true){
var result__6528__auto__ = switch__6525__auto__.call(null,state_10353);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6528__auto__;
}
break;
}
}catch (e10362){if((e10362 instanceof Object)){
var ex__6529__auto__ = e10362;
var statearr_10363_10367 = state_10353;
(statearr_10363_10367[(5)] = ex__6529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10353);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10362;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10368 = state_10353;
state_10353 = G__10368;
continue;
} else {
return ret_value__6527__auto__;
}
break;
}
});
state_machine__6526__auto__ = function(state_10353){
switch(arguments.length){
case 0:
return state_machine__6526__auto____0.call(this);
case 1:
return state_machine__6526__auto____1.call(this,state_10353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6526__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6526__auto____0;
state_machine__6526__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6526__auto____1;
return state_machine__6526__auto__;
})()
;})(switch__6525__auto__,c__6581__auto__))
})();
var state__6583__auto__ = (function (){var statearr_10364 = f__6582__auto__.call(null);
(statearr_10364[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6581__auto__);

return statearr_10364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6583__auto__);
});})(c__6581__auto__))
);

return c__6581__auto__;
});
