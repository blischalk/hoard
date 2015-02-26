// Compiled by ClojureScript 0.0-2814 {}
goog.provide('hoard.core');
goog.require('cljs.core');
goog.require('hoard.acquire');
goog.require('enfocus.core');
goog.require('om.dom');
goog.require('weasel.repl');
goog.require('cljs.core.async');
goog.require('enfocus.effects');
goog.require('enfocus.events');
goog.require('om.core');
goog.require('hoard.data_processing');
hoard.core.hidden = (function hidden(is_hidden){
if(cljs.core.truth_(is_hidden)){
return {"display": "none"};
} else {
return {};
}
});
if(typeof hoard.core.app_state !== 'undefined'){
} else {
hoard.core.app_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
hoard.core.index_user_BANG_ = (function index_user_BANG_(owner,screen_name,comm){
console.log("the screen name is ",screen_name);

om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"screen-name","screen-name",31129652),"");

om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"users","users",-713552705),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [screen_name], null));

return hoard.acquire.data.call(null,screen_name,comm);
});
hoard.core.handle_change = (function handle_change(e,owner,p__13133){
var map__13135 = p__13133;
var map__13135__$1 = ((cljs.core.seq_QMARK_.call(null,map__13135))?cljs.core.apply.call(null,cljs.core.hash_map,map__13135):map__13135);
var screen_name = cljs.core.get.call(null,map__13135__$1,new cljs.core.Keyword(null,"screen-name","screen-name",31129652));
var value = e.target.value;
om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"btn-disabled","btn-disabled",540927902),cljs.core._EQ_.call(null,value,""));

return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"screen-name","screen-name",31129652),value);
});
hoard.core.user_being_indexed = (function user_being_indexed(user,owner){
if(typeof hoard.core.t13139 !== 'undefined'){
} else {

/**
* @constructor
*/
hoard.core.t13139 = (function (owner,user,user_being_indexed,meta13140){
this.owner = owner;
this.user = user;
this.user_being_indexed = user_being_indexed;
this.meta13140 = meta13140;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hoard.core.t13139.prototype.om$core$IRender$ = true;

hoard.core.t13139.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.li(null,self__.user);
});

hoard.core.t13139.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13141){
var self__ = this;
var _13141__$1 = this;
return self__.meta13140;
});

hoard.core.t13139.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13141,meta13140__$1){
var self__ = this;
var _13141__$1 = this;
return (new hoard.core.t13139(self__.owner,self__.user,self__.user_being_indexed,meta13140__$1));
});

hoard.core.t13139.cljs$lang$type = true;

hoard.core.t13139.cljs$lang$ctorStr = "hoard.core/t13139";

hoard.core.t13139.cljs$lang$ctorPrWriter = (function (this__4384__auto__,writer__4385__auto__,opt__4386__auto__){
return cljs.core._write.call(null,writer__4385__auto__,"hoard.core/t13139");
});

hoard.core.__GT_t13139 = (function __GT_t13139(owner__$1,user__$1,user_being_indexed__$1,meta13140){
return (new hoard.core.t13139(owner__$1,user__$1,user_being_indexed__$1,meta13140));
});

}

return (new hoard.core.t13139(owner,user,user_being_indexed,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),26,new cljs.core.Keyword(null,"end-line","end-line",1837326455),44,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),41,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/blischalk/node-webkit-apps/hoard/src/cljs/hoard/core.cljs"], null)));
});
hoard.core.users_being_indexed = (function users_being_indexed(_,p__13142){
var map__13144 = p__13142;
var map__13144__$1 = ((cljs.core.seq_QMARK_.call(null,map__13144))?cljs.core.apply.call(null,cljs.core.hash_map,map__13144):map__13144);
var users = cljs.core.get.call(null,map__13144__$1,new cljs.core.Keyword(null,"users","users",-713552705));
return cljs.core.apply.call(null,om.dom.ul,{"style": hoard.core.hidden.call(null,cljs.core.empty_QMARK_.call(null,users)), "id": "indexing-users"},om.core.build_all.call(null,hoard.core.user_being_indexed,users));
});
hoard.core.user_to_index = (function user_to_index(owner,state){
return om.dom.input.call(null,{"onChange": (function (p1__13145_SHARP_){
return hoard.core.handle_change.call(null,p1__13145_SHARP_,owner,state);
}), "value": new cljs.core.Keyword(null,"screen-name","screen-name",31129652).cljs$core$IFn$_invoke$arity$1(state), "ref": "user-to-index", "placeholder": "User to Index", "type": "text"});
});
hoard.core.indexing_submit = (function indexing_submit(owner,state,comm){
return React.DOM.button({"disabled": new cljs.core.Keyword(null,"btn-disabled","btn-disabled",540927902).cljs$core$IFn$_invoke$arity$1(state), "className": "btn btn-submit", "onClick": (function (){
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index-user","index-user",1779303928),om.core.get_node.call(null,owner,"user-to-index").value], null));
})},"Index User");
});
hoard.core.indexing_ui = (function indexing_ui(data,owner){
if(typeof hoard.core.t13182 !== 'undefined'){
} else {

/**
* @constructor
*/
hoard.core.t13182 = (function (owner,data,indexing_ui,meta13183){
this.owner = owner;
this.data = data;
this.indexing_ui = indexing_ui;
this.meta13183 = meta13183;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hoard.core.t13182.prototype.om$core$IRenderState$ = true;

hoard.core.t13182.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__13185){
var self__ = this;
var map__13186 = p__13185;
var map__13186__$1 = ((cljs.core.seq_QMARK_.call(null,map__13186))?cljs.core.apply.call(null,cljs.core.hash_map,map__13186):map__13186);
var state = map__13186__$1;
var comm = cljs.core.get.call(null,map__13186__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));
var this$__$1 = this;
return React.DOM.div({"className": "container"},React.DOM.h2(null,"Index User"),hoard.core.users_being_indexed.call(null,self__.owner,state),React.DOM.div({"id": "index-user"},hoard.core.user_to_index.call(null,self__.owner,state),hoard.core.indexing_submit.call(null,self__.owner,state,comm)));
});

hoard.core.t13182.prototype.om$core$IInitState$ = true;

hoard.core.t13182.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"screen-name","screen-name",31129652),"",new cljs.core.Keyword(null,"btn-disabled","btn-disabled",540927902),true,new cljs.core.Keyword(null,"users","users",-713552705),cljs.core.PersistentVector.EMPTY], null);
});

hoard.core.t13182.prototype.om$core$IWillMount$ = true;

hoard.core.t13182.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var comm = cljs.core.async.chan.call(null);
var complete = cljs.core.async.chan.call(null);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"comm","comm",-1689770614),comm);

var c__6581__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6581__auto__,comm,complete,___$1){
return (function (){
var f__6582__auto__ = (function (){var switch__6525__auto__ = ((function (c__6581__auto__,comm,complete,___$1){
return (function (state_13202){
var state_val_13203 = (state_13202[(1)]);
if((state_val_13203 === (7))){
var inst_13191 = (state_13202[(2)]);
var inst_13192 = cljs.core.nth.call(null,inst_13191,(0),null);
var inst_13193 = cljs.core.nth.call(null,inst_13191,(1),null);
var inst_13194 = hoard.core.index_user_BANG_.call(null,self__.owner,inst_13193,complete);
var state_13202__$1 = (function (){var statearr_13204 = state_13202;
(statearr_13204[(7)] = inst_13192);

(statearr_13204[(8)] = inst_13194);

return statearr_13204;
})();
var statearr_13205_13218 = state_13202__$1;
(statearr_13205_13218[(2)] = null);

(statearr_13205_13218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13203 === (6))){
var inst_13198 = (state_13202[(2)]);
var state_13202__$1 = state_13202;
var statearr_13206_13219 = state_13202__$1;
(statearr_13206_13219[(2)] = inst_13198);

(statearr_13206_13219[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13203 === (5))){
var state_13202__$1 = state_13202;
var statearr_13207_13220 = state_13202__$1;
(statearr_13207_13220[(2)] = null);

(statearr_13207_13220[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13203 === (4))){
var state_13202__$1 = state_13202;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13202__$1,(7),comm);
} else {
if((state_val_13203 === (3))){
var inst_13200 = (state_13202[(2)]);
var state_13202__$1 = state_13202;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13202__$1,inst_13200);
} else {
if((state_val_13203 === (2))){
var state_13202__$1 = state_13202;
var statearr_13208_13221 = state_13202__$1;
(statearr_13208_13221[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13203 === (1))){
var state_13202__$1 = state_13202;
var statearr_13210_13222 = state_13202__$1;
(statearr_13210_13222[(2)] = null);

(statearr_13210_13222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__6581__auto__,comm,complete,___$1))
;
return ((function (switch__6525__auto__,c__6581__auto__,comm,complete,___$1){
return (function() {
var state_machine__6526__auto__ = null;
var state_machine__6526__auto____0 = (function (){
var statearr_13214 = [null,null,null,null,null,null,null,null,null];
(statearr_13214[(0)] = state_machine__6526__auto__);

(statearr_13214[(1)] = (1));

return statearr_13214;
});
var state_machine__6526__auto____1 = (function (state_13202){
while(true){
var ret_value__6527__auto__ = (function (){try{while(true){
var result__6528__auto__ = switch__6525__auto__.call(null,state_13202);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6528__auto__;
}
break;
}
}catch (e13215){if((e13215 instanceof Object)){
var ex__6529__auto__ = e13215;
var statearr_13216_13223 = state_13202;
(statearr_13216_13223[(5)] = ex__6529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13202);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13215;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13224 = state_13202;
state_13202 = G__13224;
continue;
} else {
return ret_value__6527__auto__;
}
break;
}
});
state_machine__6526__auto__ = function(state_13202){
switch(arguments.length){
case 0:
return state_machine__6526__auto____0.call(this);
case 1:
return state_machine__6526__auto____1.call(this,state_13202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6526__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6526__auto____0;
state_machine__6526__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6526__auto____1;
return state_machine__6526__auto__;
})()
;})(switch__6525__auto__,c__6581__auto__,comm,complete,___$1))
})();
var state__6583__auto__ = (function (){var statearr_13217 = f__6582__auto__.call(null);
(statearr_13217[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6581__auto__);

return statearr_13217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6583__auto__);
});})(c__6581__auto__,comm,complete,___$1))
);

return c__6581__auto__;
});

hoard.core.t13182.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13184){
var self__ = this;
var _13184__$1 = this;
return self__.meta13183;
});

hoard.core.t13182.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13184,meta13183__$1){
var self__ = this;
var _13184__$1 = this;
return (new hoard.core.t13182(self__.owner,self__.data,self__.indexing_ui,meta13183__$1));
});

hoard.core.t13182.cljs$lang$type = true;

hoard.core.t13182.cljs$lang$ctorStr = "hoard.core/t13182";

hoard.core.t13182.cljs$lang$ctorPrWriter = (function (this__4384__auto__,writer__4385__auto__,opt__4386__auto__){
return cljs.core._write.call(null,writer__4385__auto__,"hoard.core/t13182");
});

hoard.core.__GT_t13182 = (function __GT_t13182(owner__$1,data__$1,indexing_ui__$1,meta13183){
return (new hoard.core.t13182(owner__$1,data__$1,indexing_ui__$1,meta13183));
});

}

return (new hoard.core.t13182(owner,data,indexing_ui,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),63,new cljs.core.Keyword(null,"end-line","end-line",1837326455),89,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),68,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/blischalk/node-webkit-apps/hoard/src/cljs/hoard/core.cljs"], null)));
});
om.core.root.call(null,hoard.core.indexing_ui,hoard.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("my-app")], null));
