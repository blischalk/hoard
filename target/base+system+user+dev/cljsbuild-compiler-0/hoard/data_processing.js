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
return (function (state_13370){
var state_val_13371 = (state_13370[(1)]);
if((state_val_13371 === (4))){
var inst_13360 = (state_13370[(2)]);
var inst_13361 = cljs.core.nth.call(null,inst_13360,(0),null);
var inst_13362 = cljs.core.nth.call(null,inst_13360,(1),null);
var inst_13363 = console.log("Received Data");
var inst_13364 = hoard.es_tweet_formatter.format_bulk_data.call(null,inst_13361);
var inst_13365 = hoard.elasticsearch.bulk_insert.call(null,inst_13364);
var state_13370__$1 = (function (){var statearr_13372 = state_13370;
(statearr_13372[(7)] = inst_13365);

(statearr_13372[(8)] = inst_13363);

(statearr_13372[(9)] = inst_13362);

return statearr_13372;
})();
var statearr_13373_13382 = state_13370__$1;
(statearr_13373_13382[(2)] = null);

(statearr_13373_13382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13371 === (3))){
var inst_13368 = (state_13370[(2)]);
var state_13370__$1 = state_13370;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13370__$1,inst_13368);
} else {
if((state_val_13371 === (2))){
var inst_13356 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13357 = [data_channel];
var inst_13358 = (new cljs.core.PersistentVector(null,1,(5),inst_13356,inst_13357,null));
var state_13370__$1 = state_13370;
return cljs.core.async.ioc_alts_BANG_.call(null,state_13370__$1,(4),inst_13358);
} else {
if((state_val_13371 === (1))){
var state_13370__$1 = state_13370;
var statearr_13374_13383 = state_13370__$1;
(statearr_13374_13383[(2)] = null);

(statearr_13374_13383[(1)] = (2));


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
var statearr_13378 = [null,null,null,null,null,null,null,null,null,null];
(statearr_13378[(0)] = state_machine__6526__auto__);

(statearr_13378[(1)] = (1));

return statearr_13378;
});
var state_machine__6526__auto____1 = (function (state_13370){
while(true){
var ret_value__6527__auto__ = (function (){try{while(true){
var result__6528__auto__ = switch__6525__auto__.call(null,state_13370);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6528__auto__;
}
break;
}
}catch (e13379){if((e13379 instanceof Object)){
var ex__6529__auto__ = e13379;
var statearr_13380_13384 = state_13370;
(statearr_13380_13384[(5)] = ex__6529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13370);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13379;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13385 = state_13370;
state_13370 = G__13385;
continue;
} else {
return ret_value__6527__auto__;
}
break;
}
});
state_machine__6526__auto__ = function(state_13370){
switch(arguments.length){
case 0:
return state_machine__6526__auto____0.call(this);
case 1:
return state_machine__6526__auto____1.call(this,state_13370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6526__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6526__auto____0;
state_machine__6526__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6526__auto____1;
return state_machine__6526__auto__;
})()
;})(switch__6525__auto__,c__6581__auto__))
})();
var state__6583__auto__ = (function (){var statearr_13381 = f__6582__auto__.call(null);
(statearr_13381[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6581__auto__);

return statearr_13381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6583__auto__);
});})(c__6581__auto__))
);

return c__6581__auto__;
});
