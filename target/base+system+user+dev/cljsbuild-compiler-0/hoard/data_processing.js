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
return (function (state_11165){
var state_val_11166 = (state_11165[(1)]);
if((state_val_11166 === (4))){
var inst_11156 = (state_11165[(2)]);
var inst_11157 = cljs.core.nth.call(null,inst_11156,(0),null);
var inst_11158 = cljs.core.nth.call(null,inst_11156,(1),null);
var inst_11159 = console.log("Received Data");
var inst_11160 = hoard.es_tweet_formatter.format_bulk_data.call(null,inst_11157);
var inst_11161 = hoard.elasticsearch.bulk_insert.call(null,inst_11160);
var state_11165__$1 = (function (){var statearr_11167 = state_11165;
(statearr_11167[(7)] = inst_11159);

(statearr_11167[(8)] = inst_11158);

return statearr_11167;
})();
var statearr_11168_11177 = state_11165__$1;
(statearr_11168_11177[(2)] = inst_11161);

(statearr_11168_11177[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11166 === (3))){
var inst_11163 = (state_11165[(2)]);
var state_11165__$1 = state_11165;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11165__$1,inst_11163);
} else {
if((state_val_11166 === (2))){
var inst_11152 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11153 = [data_channel];
var inst_11154 = (new cljs.core.PersistentVector(null,1,(5),inst_11152,inst_11153,null));
var state_11165__$1 = state_11165;
return cljs.core.async.ioc_alts_BANG_.call(null,state_11165__$1,(4),inst_11154);
} else {
if((state_val_11166 === (1))){
var state_11165__$1 = state_11165;
var statearr_11169_11178 = state_11165__$1;
(statearr_11169_11178[(2)] = null);

(statearr_11169_11178[(1)] = (2));


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
var statearr_11173 = [null,null,null,null,null,null,null,null,null];
(statearr_11173[(0)] = state_machine__6526__auto__);

(statearr_11173[(1)] = (1));

return statearr_11173;
});
var state_machine__6526__auto____1 = (function (state_11165){
while(true){
var ret_value__6527__auto__ = (function (){try{while(true){
var result__6528__auto__ = switch__6525__auto__.call(null,state_11165);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6528__auto__;
}
break;
}
}catch (e11174){if((e11174 instanceof Object)){
var ex__6529__auto__ = e11174;
var statearr_11175_11179 = state_11165;
(statearr_11175_11179[(5)] = ex__6529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11165);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11174;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11180 = state_11165;
state_11165 = G__11180;
continue;
} else {
return ret_value__6527__auto__;
}
break;
}
});
state_machine__6526__auto__ = function(state_11165){
switch(arguments.length){
case 0:
return state_machine__6526__auto____0.call(this);
case 1:
return state_machine__6526__auto____1.call(this,state_11165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6526__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6526__auto____0;
state_machine__6526__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6526__auto____1;
return state_machine__6526__auto__;
})()
;})(switch__6525__auto__,c__6581__auto__))
})();
var state__6583__auto__ = (function (){var statearr_11176 = f__6582__auto__.call(null);
(statearr_11176[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6581__auto__);

return statearr_11176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6583__auto__);
});})(c__6581__auto__))
);

return c__6581__auto__;
});
