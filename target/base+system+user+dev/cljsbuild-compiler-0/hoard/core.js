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
if(typeof hoard.core.t27187 !== 'undefined'){
} else {

/**
* @constructor
*/
hoard.core.t27187 = (function (owner,user,user_being_indexed,meta27188){
this.owner = owner;
this.user = user;
this.user_being_indexed = user_being_indexed;
this.meta27188 = meta27188;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hoard.core.t27187.prototype.om$core$IRender$ = true;

hoard.core.t27187.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.li(null,self__.user);
});

hoard.core.t27187.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27189){
var self__ = this;
var _27189__$1 = this;
return self__.meta27188;
});

hoard.core.t27187.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27189,meta27188__$1){
var self__ = this;
var _27189__$1 = this;
return (new hoard.core.t27187(self__.owner,self__.user,self__.user_being_indexed,meta27188__$1));
});

hoard.core.t27187.cljs$lang$type = true;

hoard.core.t27187.cljs$lang$ctorStr = "hoard.core/t27187";

hoard.core.t27187.cljs$lang$ctorPrWriter = (function (this__4384__auto__,writer__4385__auto__,opt__4386__auto__){
return cljs.core._write.call(null,writer__4385__auto__,"hoard.core/t27187");
});

hoard.core.__GT_t27187 = (function __GT_t27187(owner__$1,user__$1,user_being_indexed__$1,meta27188){
return (new hoard.core.t27187(owner__$1,user__$1,user_being_indexed__$1,meta27188));
});

}

return (new hoard.core.t27187(owner,user,user_being_indexed,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),26,new cljs.core.Keyword(null,"end-line","end-line",1837326455),28,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),25,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/blischalk/node-webkit-apps/hoard/src/cljs/hoard/core.cljs"], null)));
});
hoard.core.users_being_indexed = (function users_being_indexed(_,p__27190){
var map__27192 = p__27190;
var map__27192__$1 = ((cljs.core.seq_QMARK_.call(null,map__27192))?cljs.core.apply.call(null,cljs.core.hash_map,map__27192):map__27192);
var users = cljs.core.get.call(null,map__27192__$1,new cljs.core.Keyword(null,"users","users",-713552705));
return React.DOM.div({"style": hoard.util.hidden.call(null,cljs.core.empty_QMARK_.call(null,users))},React.DOM.h2(null,"Indexing Users:"),cljs.core.apply.call(null,om.dom.ul,{"id": "indexing-users"},om.core.build_all.call(null,hoard.core.user_being_indexed,users)));
});
hoard.core.handle_screen_name_change = (function handle_screen_name_change(e,owner,p__27193){
var map__27195 = p__27193;
var map__27195__$1 = ((cljs.core.seq_QMARK_.call(null,map__27195))?cljs.core.apply.call(null,cljs.core.hash_map,map__27195):map__27195);
var screen_name = cljs.core.get.call(null,map__27195__$1,new cljs.core.Keyword(null,"screen-name","screen-name",31129652));
var value = e.target.value;
om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"btn-disabled","btn-disabled",540927902),cljs.core._EQ_.call(null,value,""));

return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"screen-name","screen-name",31129652),value);
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
var G__27197 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27197) {
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
hoard.core.user_to_index = (function user_to_index(owner,state){
return om.dom.input.call(null,{"onChange": (function (p1__27199_SHARP_){
return hoard.core.handle_screen_name_change.call(null,p1__27199_SHARP_,owner,state);
}), "value": new cljs.core.Keyword(null,"screen-name","screen-name",31129652).cljs$core$IFn$_invoke$arity$1(state), "ref": "user-to-index", "placeholder": "User to Index", "type": "text"});
});
hoard.core.indexing_submit = (function indexing_submit(owner,state,comm){
return React.DOM.button({"disabled": new cljs.core.Keyword(null,"btn-disabled","btn-disabled",540927902).cljs$core$IFn$_invoke$arity$1(state), "className": "btn btn-submit", "onClick": (function (){
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index-user","index-user",1779303928),om.core.get_node.call(null,owner,"user-to-index").value], null));
})},"Index User");
});
hoard.core.user_indexing_form = (function user_indexing_form(owner,state,comm){
return React.DOM.div({"id": "index-user"},hoard.core.user_to_index.call(null,owner,state),hoard.core.indexing_submit.call(null,owner,state,comm));
});
hoard.core.main_view = (function main_view(owner,state,comm){
return React.DOM.div({"className": "container"},React.DOM.h1(null,"Index User"),hoard.core.users_being_indexed.call(null,owner,state),hoard.core.user_indexing_form.call(null,owner,state,comm));
});
hoard.core.indexing_ui = (function indexing_ui(data,owner){
if(typeof hoard.core.t27236 !== 'undefined'){
} else {

/**
* @constructor
*/
hoard.core.t27236 = (function (owner,data,indexing_ui,meta27237){
this.owner = owner;
this.data = data;
this.indexing_ui = indexing_ui;
this.meta27237 = meta27237;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hoard.core.t27236.prototype.om$core$IRenderState$ = true;

hoard.core.t27236.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__27239){
var self__ = this;
var map__27240 = p__27239;
var map__27240__$1 = ((cljs.core.seq_QMARK_.call(null,map__27240))?cljs.core.apply.call(null,cljs.core.hash_map,map__27240):map__27240);
var state = map__27240__$1;
var comm = cljs.core.get.call(null,map__27240__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));
var this$__$1 = this;
return hoard.core.main_view.call(null,self__.owner,state,comm);
});

hoard.core.t27236.prototype.om$core$IInitState$ = true;

hoard.core.t27236.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"screen-name","screen-name",31129652),"",new cljs.core.Keyword(null,"btn-disabled","btn-disabled",540927902),true,new cljs.core.Keyword(null,"users","users",-713552705),cljs.core.PersistentVector.EMPTY], null);
});

hoard.core.t27236.prototype.om$core$IWillMount$ = true;

hoard.core.t27236.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var comm = cljs.core.async.chan.call(null);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"comm","comm",-1689770614),comm);

var c__6581__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6581__auto__,comm,___$1){
return (function (){
var f__6582__auto__ = (function (){var switch__6525__auto__ = ((function (c__6581__auto__,comm,___$1){
return (function (state_27256){
var state_val_27257 = (state_27256[(1)]);
if((state_val_27257 === (7))){
var inst_27245 = (state_27256[(2)]);
var inst_27246 = cljs.core.nth.call(null,inst_27245,(0),null);
var inst_27247 = cljs.core.nth.call(null,inst_27245,(1),null);
var inst_27248 = hoard.core.handle_event.call(null,inst_27246,self__.owner,inst_27247,comm);
var state_27256__$1 = (function (){var statearr_27258 = state_27256;
(statearr_27258[(7)] = inst_27248);

return statearr_27258;
})();
var statearr_27259_27272 = state_27256__$1;
(statearr_27259_27272[(2)] = null);

(statearr_27259_27272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27257 === (6))){
var inst_27252 = (state_27256[(2)]);
var state_27256__$1 = state_27256;
var statearr_27260_27273 = state_27256__$1;
(statearr_27260_27273[(2)] = inst_27252);

(statearr_27260_27273[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27257 === (5))){
var state_27256__$1 = state_27256;
var statearr_27261_27274 = state_27256__$1;
(statearr_27261_27274[(2)] = null);

(statearr_27261_27274[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27257 === (4))){
var state_27256__$1 = state_27256;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27256__$1,(7),comm);
} else {
if((state_val_27257 === (3))){
var inst_27254 = (state_27256[(2)]);
var state_27256__$1 = state_27256;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27256__$1,inst_27254);
} else {
if((state_val_27257 === (2))){
var state_27256__$1 = state_27256;
var statearr_27262_27275 = state_27256__$1;
(statearr_27262_27275[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27257 === (1))){
var state_27256__$1 = state_27256;
var statearr_27264_27276 = state_27256__$1;
(statearr_27264_27276[(2)] = null);

(statearr_27264_27276[(1)] = (2));


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
var statearr_27268 = [null,null,null,null,null,null,null,null];
(statearr_27268[(0)] = state_machine__6526__auto__);

(statearr_27268[(1)] = (1));

return statearr_27268;
});
var state_machine__6526__auto____1 = (function (state_27256){
while(true){
var ret_value__6527__auto__ = (function (){try{while(true){
var result__6528__auto__ = switch__6525__auto__.call(null,state_27256);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6528__auto__;
}
break;
}
}catch (e27269){if((e27269 instanceof Object)){
var ex__6529__auto__ = e27269;
var statearr_27270_27277 = state_27256;
(statearr_27270_27277[(5)] = ex__6529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27256);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27269;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27278 = state_27256;
state_27256 = G__27278;
continue;
} else {
return ret_value__6527__auto__;
}
break;
}
});
state_machine__6526__auto__ = function(state_27256){
switch(arguments.length){
case 0:
return state_machine__6526__auto____0.call(this);
case 1:
return state_machine__6526__auto____1.call(this,state_27256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6526__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6526__auto____0;
state_machine__6526__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6526__auto____1;
return state_machine__6526__auto__;
})()
;})(switch__6525__auto__,c__6581__auto__,comm,___$1))
})();
var state__6583__auto__ = (function (){var statearr_27271 = f__6582__auto__.call(null);
(statearr_27271[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6581__auto__);

return statearr_27271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6583__auto__);
});})(c__6581__auto__,comm,___$1))
);

return c__6581__auto__;
});

hoard.core.t27236.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27238){
var self__ = this;
var _27238__$1 = this;
return self__.meta27237;
});

hoard.core.t27236.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27238,meta27237__$1){
var self__ = this;
var _27238__$1 = this;
return (new hoard.core.t27236(self__.owner,self__.data,self__.indexing_ui,meta27237__$1));
});

hoard.core.t27236.cljs$lang$type = true;

hoard.core.t27236.cljs$lang$ctorStr = "hoard.core/t27236";

hoard.core.t27236.cljs$lang$ctorPrWriter = (function (this__4384__auto__,writer__4385__auto__,opt__4386__auto__){
return cljs.core._write.call(null,writer__4385__auto__,"hoard.core/t27236");
});

hoard.core.__GT_t27236 = (function __GT_t27236(owner__$1,data__$1,indexing_ui__$1,meta27237){
return (new hoard.core.t27236(owner__$1,data__$1,indexing_ui__$1,meta27237));
});

}

return (new hoard.core.t27236(owner,data,indexing_ui,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),37,new cljs.core.Keyword(null,"end-line","end-line",1837326455),124,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),103,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/blischalk/node-webkit-apps/hoard/src/cljs/hoard/core.cljs"], null)));
});
om.core.root.call(null,hoard.core.indexing_ui,hoard.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("my-app")], null));
