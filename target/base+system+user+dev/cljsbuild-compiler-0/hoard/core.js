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
goog.require('hoard.util');
goog.require('om.core');
goog.require('hoard.data_processing');
if(typeof hoard.core.app_state !== 'undefined'){
} else {
hoard.core.app_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
hoard.core.user_being_indexed = (function user_being_indexed(user,owner){
if(typeof hoard.core.t19236 !== 'undefined'){
} else {

/**
* @constructor
*/
hoard.core.t19236 = (function (owner,user,user_being_indexed,meta19237){
this.owner = owner;
this.user = user;
this.user_being_indexed = user_being_indexed;
this.meta19237 = meta19237;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hoard.core.t19236.prototype.om$core$IRender$ = true;

hoard.core.t19236.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.li(null,self__.user);
});

hoard.core.t19236.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19238){
var self__ = this;
var _19238__$1 = this;
return self__.meta19237;
});

hoard.core.t19236.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19238,meta19237__$1){
var self__ = this;
var _19238__$1 = this;
return (new hoard.core.t19236(self__.owner,self__.user,self__.user_being_indexed,meta19237__$1));
});

hoard.core.t19236.cljs$lang$type = true;

hoard.core.t19236.cljs$lang$ctorStr = "hoard.core/t19236";

hoard.core.t19236.cljs$lang$ctorPrWriter = (function (this__4384__auto__,writer__4385__auto__,opt__4386__auto__){
return cljs.core._write.call(null,writer__4385__auto__,"hoard.core/t19236");
});

hoard.core.__GT_t19236 = (function __GT_t19236(owner__$1,user__$1,user_being_indexed__$1,meta19237){
return (new hoard.core.t19236(owner__$1,user__$1,user_being_indexed__$1,meta19237));
});

}

return (new hoard.core.t19236(owner,user,user_being_indexed,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),26,new cljs.core.Keyword(null,"end-line","end-line",1837326455),28,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),25,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/blischalk/node-webkit-apps/hoard/src/cljs/hoard/core.cljs"], null)));
});
hoard.core.users_being_indexed = (function users_being_indexed(_,p__19239){
var map__19241 = p__19239;
var map__19241__$1 = ((cljs.core.seq_QMARK_.call(null,map__19241))?cljs.core.apply.call(null,cljs.core.hash_map,map__19241):map__19241);
var users = cljs.core.get.call(null,map__19241__$1,new cljs.core.Keyword(null,"users","users",-713552705));
return React.DOM.div({"style": hoard.util.hidden.call(null,cljs.core.empty_QMARK_.call(null,users))},React.DOM.h2(null,"Indexing Users:"),cljs.core.apply.call(null,om.dom.ul,{"id": "indexing-users"},om.core.build_all.call(null,hoard.core.user_being_indexed,users)));
});
hoard.core.handle_screen_name_change = (function handle_screen_name_change(e,owner,p__19242){
var map__19244 = p__19242;
var map__19244__$1 = ((cljs.core.seq_QMARK_.call(null,map__19244))?cljs.core.apply.call(null,cljs.core.hash_map,map__19244):map__19244);
var screen_name = cljs.core.get.call(null,map__19244__$1,new cljs.core.Keyword(null,"screen-name","screen-name",31129652));
var value = e.target.value;
om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"btn-disabled","btn-disabled",540927902),cljs.core._EQ_.call(null,value,""));

return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"screen-name","screen-name",31129652),value);
});
hoard.core.user_to_index = (function user_to_index(owner,state){
return om.dom.input.call(null,{"onChange": (function (p1__19245_SHARP_){
return hoard.core.handle_screen_name_change.call(null,p1__19245_SHARP_,owner,state);
}), "value": new cljs.core.Keyword(null,"screen-name","screen-name",31129652).cljs$core$IFn$_invoke$arity$1(state), "ref": "user-to-index", "placeholder": "User to Index", "type": "text"});
});
hoard.core.indexing_submit = (function indexing_submit(owner,state,comm){
return React.DOM.button({"disabled": new cljs.core.Keyword(null,"btn-disabled","btn-disabled",540927902).cljs$core$IFn$_invoke$arity$1(state), "className": "btn btn-submit", "onClick": (function (){
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index-user","index-user",1779303928),om.core.get_node.call(null,owner,"user-to-index").value], null));
})},"Index User");
});
hoard.core.index_user_BANG_ = (function index_user_BANG_(owner,screen_name,comm){
console.log("the screen name is ",screen_name);

om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"screen-name","screen-name",31129652),"");

om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"users","users",-713552705),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [screen_name], null));

return hoard.acquire.data.call(null,screen_name,comm);
});
hoard.core.index_complete = (function index_complete(owner,val){
console.log("user ",val,"has been indexed!");

return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"users","users",-713552705),cljs.core.PersistentVector.EMPTY);
});
hoard.core.handle_event = (function handle_event(type,owner,val,comm){
var G__19247 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__19247) {
case "user-indexed":
return hoard.core.index_complete.call(null,owner,val);

break;
case "user-tweets":
return hoard.data_processing.init.call(null,val,comm);

break;
case "index-user":
return hoard.core.index_user_BANG_.call(null,owner,val,comm);

break;
default:
return null;

}
});
hoard.core.indexing_ui = (function indexing_ui(data,owner){
if(typeof hoard.core.t19285 !== 'undefined'){
} else {

/**
* @constructor
*/
hoard.core.t19285 = (function (owner,data,indexing_ui,meta19286){
this.owner = owner;
this.data = data;
this.indexing_ui = indexing_ui;
this.meta19286 = meta19286;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hoard.core.t19285.prototype.om$core$IRenderState$ = true;

hoard.core.t19285.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__19288){
var self__ = this;
var map__19289 = p__19288;
var map__19289__$1 = ((cljs.core.seq_QMARK_.call(null,map__19289))?cljs.core.apply.call(null,cljs.core.hash_map,map__19289):map__19289);
var state = map__19289__$1;
var comm = cljs.core.get.call(null,map__19289__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));
var this$__$1 = this;
return React.DOM.div({"className": "container"},React.DOM.h2(null,"Index User"),hoard.core.users_being_indexed.call(null,self__.owner,state),React.DOM.div({"id": "index-user"},hoard.core.user_to_index.call(null,self__.owner,state),hoard.core.indexing_submit.call(null,self__.owner,state,comm)));
});

hoard.core.t19285.prototype.om$core$IInitState$ = true;

hoard.core.t19285.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"screen-name","screen-name",31129652),"",new cljs.core.Keyword(null,"btn-disabled","btn-disabled",540927902),true,new cljs.core.Keyword(null,"users","users",-713552705),cljs.core.PersistentVector.EMPTY], null);
});

hoard.core.t19285.prototype.om$core$IWillMount$ = true;

hoard.core.t19285.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var comm = cljs.core.async.chan.call(null);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"comm","comm",-1689770614),comm);

var c__6581__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6581__auto__,comm,___$1){
return (function (){
var f__6582__auto__ = (function (){var switch__6525__auto__ = ((function (c__6581__auto__,comm,___$1){
return (function (state_19305){
var state_val_19306 = (state_19305[(1)]);
if((state_val_19306 === (7))){
var inst_19294 = (state_19305[(2)]);
var inst_19295 = cljs.core.nth.call(null,inst_19294,(0),null);
var inst_19296 = cljs.core.nth.call(null,inst_19294,(1),null);
var inst_19297 = hoard.core.handle_event.call(null,inst_19295,self__.owner,inst_19296,comm);
var state_19305__$1 = (function (){var statearr_19307 = state_19305;
(statearr_19307[(7)] = inst_19297);

return statearr_19307;
})();
var statearr_19308_19321 = state_19305__$1;
(statearr_19308_19321[(2)] = null);

(statearr_19308_19321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19306 === (6))){
var inst_19301 = (state_19305[(2)]);
var state_19305__$1 = state_19305;
var statearr_19309_19322 = state_19305__$1;
(statearr_19309_19322[(2)] = inst_19301);

(statearr_19309_19322[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19306 === (5))){
var state_19305__$1 = state_19305;
var statearr_19310_19323 = state_19305__$1;
(statearr_19310_19323[(2)] = null);

(statearr_19310_19323[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19306 === (4))){
var state_19305__$1 = state_19305;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19305__$1,(7),comm);
} else {
if((state_val_19306 === (3))){
var inst_19303 = (state_19305[(2)]);
var state_19305__$1 = state_19305;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19305__$1,inst_19303);
} else {
if((state_val_19306 === (2))){
var state_19305__$1 = state_19305;
var statearr_19311_19324 = state_19305__$1;
(statearr_19311_19324[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19306 === (1))){
var state_19305__$1 = state_19305;
var statearr_19313_19325 = state_19305__$1;
(statearr_19313_19325[(2)] = null);

(statearr_19313_19325[(1)] = (2));


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
});})(c__6581__auto__,comm,___$1))
;
return ((function (switch__6525__auto__,c__6581__auto__,comm,___$1){
return (function() {
var state_machine__6526__auto__ = null;
var state_machine__6526__auto____0 = (function (){
var statearr_19317 = [null,null,null,null,null,null,null,null];
(statearr_19317[(0)] = state_machine__6526__auto__);

(statearr_19317[(1)] = (1));

return statearr_19317;
});
var state_machine__6526__auto____1 = (function (state_19305){
while(true){
var ret_value__6527__auto__ = (function (){try{while(true){
var result__6528__auto__ = switch__6525__auto__.call(null,state_19305);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6528__auto__;
}
break;
}
}catch (e19318){if((e19318 instanceof Object)){
var ex__6529__auto__ = e19318;
var statearr_19319_19326 = state_19305;
(statearr_19319_19326[(5)] = ex__6529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19318;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19327 = state_19305;
state_19305 = G__19327;
continue;
} else {
return ret_value__6527__auto__;
}
break;
}
});
state_machine__6526__auto__ = function(state_19305){
switch(arguments.length){
case 0:
return state_machine__6526__auto____0.call(this);
case 1:
return state_machine__6526__auto____1.call(this,state_19305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6526__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6526__auto____0;
state_machine__6526__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6526__auto____1;
return state_machine__6526__auto__;
})()
;})(switch__6525__auto__,c__6581__auto__,comm,___$1))
})();
var state__6583__auto__ = (function (){var statearr_19320 = f__6582__auto__.call(null);
(statearr_19320[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6581__auto__);

return statearr_19320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6583__auto__);
});})(c__6581__auto__,comm,___$1))
);

return c__6581__auto__;
});

hoard.core.t19285.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19287){
var self__ = this;
var _19287__$1 = this;
return self__.meta19286;
});

hoard.core.t19285.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19287,meta19286__$1){
var self__ = this;
var _19287__$1 = this;
return (new hoard.core.t19285(self__.owner,self__.data,self__.indexing_ui,meta19286__$1));
});

hoard.core.t19285.cljs$lang$type = true;

hoard.core.t19285.cljs$lang$ctorStr = "hoard.core/t19285";

hoard.core.t19285.cljs$lang$ctorPrWriter = (function (this__4384__auto__,writer__4385__auto__,opt__4386__auto__){
return cljs.core._write.call(null,writer__4385__auto__,"hoard.core/t19285");
});

hoard.core.__GT_t19285 = (function __GT_t19285(owner__$1,data__$1,indexing_ui__$1,meta19286){
return (new hoard.core.t19285(owner__$1,data__$1,indexing_ui__$1,meta19286));
});

}

return (new hoard.core.t19285(owner,data,indexing_ui,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),63,new cljs.core.Keyword(null,"end-line","end-line",1837326455),107,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),87,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/blischalk/node-webkit-apps/hoard/src/cljs/hoard/core.cljs"], null)));
});
om.core.root.call(null,hoard.core.indexing_ui,hoard.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("my-app")], null));
