// Compiled by ClojureScript 0.0-2814 {}
goog.provide('hoard.core');
goog.require('cljs.core');
goog.require('hoard.acquire');
goog.require('enfocus.core');
goog.require('hoard.elasticsearch');
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
hoard.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"indexed-users","indexed-users",-2071128862),cljs.core.PersistentVector.EMPTY], null));
}
hoard.core.user_being_indexed = (function user_being_indexed(user,owner){
if(typeof hoard.core.t46491 !== 'undefined'){
} else {

/**
* @constructor
*/
hoard.core.t46491 = (function (owner,user,user_being_indexed,meta46492){
this.owner = owner;
this.user = user;
this.user_being_indexed = user_being_indexed;
this.meta46492 = meta46492;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hoard.core.t46491.prototype.om$core$IRender$ = true;

hoard.core.t46491.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.li(null,self__.user);
});

hoard.core.t46491.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46493){
var self__ = this;
var _46493__$1 = this;
return self__.meta46492;
});

hoard.core.t46491.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46493,meta46492__$1){
var self__ = this;
var _46493__$1 = this;
return (new hoard.core.t46491(self__.owner,self__.user,self__.user_being_indexed,meta46492__$1));
});

hoard.core.t46491.cljs$lang$type = true;

hoard.core.t46491.cljs$lang$ctorStr = "hoard.core/t46491";

hoard.core.t46491.cljs$lang$ctorPrWriter = (function (this__4384__auto__,writer__4385__auto__,opt__4386__auto__){
return cljs.core._write.call(null,writer__4385__auto__,"hoard.core/t46491");
});

hoard.core.__GT_t46491 = (function __GT_t46491(owner__$1,user__$1,user_being_indexed__$1,meta46492){
return (new hoard.core.t46491(owner__$1,user__$1,user_being_indexed__$1,meta46492));
});

}

return (new hoard.core.t46491(owner,user,user_being_indexed,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),26,new cljs.core.Keyword(null,"end-line","end-line",1837326455),29,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),26,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/blischalk/node-webkit-apps/hoard/src/cljs/hoard/core.cljs"], null)));
});
hoard.core.users_being_indexed = (function users_being_indexed(_,p__46494){
var map__46496 = p__46494;
var map__46496__$1 = ((cljs.core.seq_QMARK_.call(null,map__46496))?cljs.core.apply.call(null,cljs.core.hash_map,map__46496):map__46496);
var users = cljs.core.get.call(null,map__46496__$1,new cljs.core.Keyword(null,"users","users",-713552705));
return React.DOM.div({"style": hoard.util.hidden.call(null,cljs.core.empty_QMARK_.call(null,users))},React.DOM.h2(null,"Indexing Users:"),cljs.core.apply.call(null,om.dom.ul,{"id": "indexing-users"},om.core.build_all.call(null,hoard.core.user_being_indexed,users)));
});
hoard.core.handle_screen_name_change = (function handle_screen_name_change(e,owner,p__46497){
var map__46499 = p__46497;
var map__46499__$1 = ((cljs.core.seq_QMARK_.call(null,map__46499))?cljs.core.apply.call(null,cljs.core.hash_map,map__46499):map__46499);
var screen_name = cljs.core.get.call(null,map__46499__$1,new cljs.core.Keyword(null,"screen-name","screen-name",31129652));
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
var G__46501 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__46501) {
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
return om.dom.input.call(null,{"onChange": (function (p1__46503_SHARP_){
return hoard.core.handle_screen_name_change.call(null,p1__46503_SHARP_,owner,state);
}), "value": new cljs.core.Keyword(null,"screen-name","screen-name",31129652).cljs$core$IFn$_invoke$arity$1(state), "ref": "user-to-index", "placeholder": "User to Index", "className": "form-control", "type": "text"});
});
hoard.core.indexing_submit = (function indexing_submit(owner,state,comm){
return React.DOM.button({"disabled": new cljs.core.Keyword(null,"btn-disabled","btn-disabled",540927902).cljs$core$IFn$_invoke$arity$1(state), "className": "btn btn-primary", "onClick": (function (){
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index-user","index-user",1779303928),om.core.get_node.call(null,owner,"user-to-index").value], null));
})},"Index User");
});
hoard.core.user_indexing_form = (function user_indexing_form(owner,state,comm){
return React.DOM.div({"className": "section", "id": "index-user"},React.DOM.div({"className": "input-group"},hoard.core.user_to_index.call(null,owner,state),React.DOM.span({"className": "input-group-btn"},hoard.core.indexing_submit.call(null,owner,state,comm))));
});
hoard.core.indexed_user = (function indexed_user(user){
if(typeof hoard.core.t46507 !== 'undefined'){
} else {

/**
* @constructor
*/
hoard.core.t46507 = (function (user,indexed_user,meta46508){
this.user = user;
this.indexed_user = indexed_user;
this.meta46508 = meta46508;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hoard.core.t46507.prototype.om$core$IRender$ = true;

hoard.core.t46507.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.tr(null,React.DOM.td(null,(self__.user["key"])),React.DOM.td(null,(self__.user["doc_count"])));
});

hoard.core.t46507.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46509){
var self__ = this;
var _46509__$1 = this;
return self__.meta46508;
});

hoard.core.t46507.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46509,meta46508__$1){
var self__ = this;
var _46509__$1 = this;
return (new hoard.core.t46507(self__.user,self__.indexed_user,meta46508__$1));
});

hoard.core.t46507.cljs$lang$type = true;

hoard.core.t46507.cljs$lang$ctorStr = "hoard.core/t46507";

hoard.core.t46507.cljs$lang$ctorPrWriter = (function (this__4384__auto__,writer__4385__auto__,opt__4386__auto__){
return cljs.core._write.call(null,writer__4385__auto__,"hoard.core/t46507");
});

hoard.core.__GT_t46507 = (function __GT_t46507(user__$1,indexed_user__$1,meta46508){
return (new hoard.core.t46507(user__$1,indexed_user__$1,meta46508));
});

}

return (new hoard.core.t46507(user,indexed_user,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),64,new cljs.core.Keyword(null,"end-line","end-line",1837326455),104,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),100,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/blischalk/node-webkit-apps/hoard/src/cljs/hoard/core.cljs"], null)));
});
hoard.core.users_in_index = (function users_in_index(app){
if(typeof hoard.core.t46513 !== 'undefined'){
} else {

/**
* @constructor
*/
hoard.core.t46513 = (function (app,users_in_index,meta46514){
this.app = app;
this.users_in_index = users_in_index;
this.meta46514 = meta46514;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hoard.core.t46513.prototype.om$core$IRender$ = true;

hoard.core.t46513.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div({"className": "section", "id": "indexed-users"},React.DOM.h2(null,"Indexed Users:"),console.log(new cljs.core.Keyword(null,"indexed-users","indexed-users",-2071128862).cljs$core$IFn$_invoke$arity$1(self__.app)),React.DOM.table({"className": "table table-striped table-bordered"},React.DOM.tr(null,React.DOM.th(null,"Screen Name"),React.DOM.th(null,"Tweet Count")),cljs.core.apply.call(null,om.dom.tbody,null,om.core.build_all.call(null,hoard.core.indexed_user,new cljs.core.Keyword(null,"indexed-users","indexed-users",-2071128862).cljs$core$IFn$_invoke$arity$1(self__.app)))));
});

hoard.core.t46513.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46515){
var self__ = this;
var _46515__$1 = this;
return self__.meta46514;
});

hoard.core.t46513.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46515,meta46514__$1){
var self__ = this;
var _46515__$1 = this;
return (new hoard.core.t46513(self__.app,self__.users_in_index,meta46514__$1));
});

hoard.core.t46513.cljs$lang$type = true;

hoard.core.t46513.cljs$lang$ctorStr = "hoard.core/t46513";

hoard.core.t46513.cljs$lang$ctorPrWriter = (function (this__4384__auto__,writer__4385__auto__,opt__4386__auto__){
return cljs.core._write.call(null,writer__4385__auto__,"hoard.core/t46513");
});

hoard.core.__GT_t46513 = (function __GT_t46513(app__$1,users_in_index__$1,meta46514){
return (new hoard.core.t46513(app__$1,users_in_index__$1,meta46514));
});

}

return (new hoard.core.t46513(app,users_in_index,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),87,new cljs.core.Keyword(null,"end-line","end-line",1837326455),119,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),107,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/blischalk/node-webkit-apps/hoard/src/cljs/hoard/core.cljs"], null)));
});
hoard.core.main_view = (function main_view(app_state,owner,state,comm){
return React.DOM.div({"className": "container"},React.DOM.h1(null,"Hoard"),hoard.core.users_being_indexed.call(null,owner,state),hoard.core.user_indexing_form.call(null,owner,state,comm),om.core.build.call(null,hoard.core.users_in_index,app_state));
});
hoard.core.get_indexed_users = (function get_indexed_users(app_state){
return hoard.elasticsearch.get_users.call(null,(function (resp){
var tweet_data = cljs.core.array_seq.call(null,(resp["aggregations"]["screen_names"]["buckets"]));
console.log((cljs.core.first.call(null,tweet_data)["key"]));

return om.core.update_BANG_.call(null,app_state,new cljs.core.Keyword(null,"indexed-users","indexed-users",-2071128862),tweet_data);
}));
});
hoard.core.indexing_ui = (function indexing_ui(app_state,owner){
if(typeof hoard.core.t46554 !== 'undefined'){
} else {

/**
* @constructor
*/
hoard.core.t46554 = (function (owner,app_state,indexing_ui,meta46555){
this.owner = owner;
this.app_state = app_state;
this.indexing_ui = indexing_ui;
this.meta46555 = meta46555;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hoard.core.t46554.prototype.om$core$IRenderState$ = true;

hoard.core.t46554.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__46557){
var self__ = this;
var map__46558 = p__46557;
var map__46558__$1 = ((cljs.core.seq_QMARK_.call(null,map__46558))?cljs.core.apply.call(null,cljs.core.hash_map,map__46558):map__46558);
var state = map__46558__$1;
var comm = cljs.core.get.call(null,map__46558__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));
var this$__$1 = this;
return hoard.core.main_view.call(null,self__.app_state,self__.owner,state,comm);
});

hoard.core.t46554.prototype.om$core$IInitState$ = true;

hoard.core.t46554.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"screen-name","screen-name",31129652),"",new cljs.core.Keyword(null,"btn-disabled","btn-disabled",540927902),true,new cljs.core.Keyword(null,"users","users",-713552705),cljs.core.PersistentVector.EMPTY], null);
});

hoard.core.t46554.prototype.om$core$IWillMount$ = true;

hoard.core.t46554.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var comm = cljs.core.async.chan.call(null);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"comm","comm",-1689770614),comm);

var c__6581__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6581__auto__,comm,___$1){
return (function (){
var f__6582__auto__ = (function (){var switch__6525__auto__ = ((function (c__6581__auto__,comm,___$1){
return (function (state_46575){
var state_val_46576 = (state_46575[(1)]);
if((state_val_46576 === (7))){
var inst_46564 = (state_46575[(2)]);
var inst_46565 = cljs.core.nth.call(null,inst_46564,(0),null);
var inst_46566 = cljs.core.nth.call(null,inst_46564,(1),null);
var inst_46567 = hoard.core.handle_event.call(null,inst_46565,self__.owner,inst_46566,comm);
var state_46575__$1 = (function (){var statearr_46577 = state_46575;
(statearr_46577[(7)] = inst_46567);

return statearr_46577;
})();
var statearr_46578_46592 = state_46575__$1;
(statearr_46578_46592[(2)] = null);

(statearr_46578_46592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46576 === (6))){
var inst_46571 = (state_46575[(2)]);
var state_46575__$1 = state_46575;
var statearr_46579_46593 = state_46575__$1;
(statearr_46579_46593[(2)] = inst_46571);

(statearr_46579_46593[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46576 === (5))){
var state_46575__$1 = state_46575;
var statearr_46580_46594 = state_46575__$1;
(statearr_46580_46594[(2)] = null);

(statearr_46580_46594[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46576 === (4))){
var state_46575__$1 = state_46575;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46575__$1,(7),comm);
} else {
if((state_val_46576 === (3))){
var inst_46573 = (state_46575[(2)]);
var state_46575__$1 = state_46575;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46575__$1,inst_46573);
} else {
if((state_val_46576 === (2))){
var state_46575__$1 = state_46575;
var statearr_46581_46595 = state_46575__$1;
(statearr_46581_46595[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46576 === (1))){
var inst_46559 = hoard.core.get_indexed_users.call(null,self__.app_state);
var state_46575__$1 = (function (){var statearr_46583 = state_46575;
(statearr_46583[(8)] = inst_46559);

return statearr_46583;
})();
var statearr_46584_46596 = state_46575__$1;
(statearr_46584_46596[(2)] = null);

(statearr_46584_46596[(1)] = (2));


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
var statearr_46588 = [null,null,null,null,null,null,null,null,null];
(statearr_46588[(0)] = state_machine__6526__auto__);

(statearr_46588[(1)] = (1));

return statearr_46588;
});
var state_machine__6526__auto____1 = (function (state_46575){
while(true){
var ret_value__6527__auto__ = (function (){try{while(true){
var result__6528__auto__ = switch__6525__auto__.call(null,state_46575);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6528__auto__;
}
break;
}
}catch (e46589){if((e46589 instanceof Object)){
var ex__6529__auto__ = e46589;
var statearr_46590_46597 = state_46575;
(statearr_46590_46597[(5)] = ex__6529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46575);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46589;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46598 = state_46575;
state_46575 = G__46598;
continue;
} else {
return ret_value__6527__auto__;
}
break;
}
});
state_machine__6526__auto__ = function(state_46575){
switch(arguments.length){
case 0:
return state_machine__6526__auto____0.call(this);
case 1:
return state_machine__6526__auto____1.call(this,state_46575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6526__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6526__auto____0;
state_machine__6526__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6526__auto____1;
return state_machine__6526__auto__;
})()
;})(switch__6525__auto__,c__6581__auto__,comm,___$1))
})();
var state__6583__auto__ = (function (){var statearr_46591 = f__6582__auto__.call(null);
(statearr_46591[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6581__auto__);

return statearr_46591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6583__auto__);
});})(c__6581__auto__,comm,___$1))
);

return c__6581__auto__;
});

hoard.core.t46554.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46556){
var self__ = this;
var _46556__$1 = this;
return self__.meta46555;
});

hoard.core.t46554.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46556,meta46555__$1){
var self__ = this;
var _46556__$1 = this;
return (new hoard.core.t46554(self__.owner,self__.app_state,self__.indexing_ui,meta46555__$1));
});

hoard.core.t46554.cljs$lang$type = true;

hoard.core.t46554.cljs$lang$ctorStr = "hoard.core/t46554";

hoard.core.t46554.cljs$lang$ctorPrWriter = (function (this__4384__auto__,writer__4385__auto__,opt__4386__auto__){
return cljs.core._write.call(null,writer__4385__auto__,"hoard.core/t46554");
});

hoard.core.__GT_t46554 = (function __GT_t46554(owner__$1,app_state__$1,indexing_ui__$1,meta46555){
return (new hoard.core.t46554(owner__$1,app_state__$1,indexing_ui__$1,meta46555));
});

}

return (new hoard.core.t46554(owner,app_state,indexing_ui,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),47,new cljs.core.Keyword(null,"end-line","end-line",1837326455),164,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),140,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/blischalk/node-webkit-apps/hoard/src/cljs/hoard/core.cljs"], null)));
});
om.core.root.call(null,hoard.core.indexing_ui,hoard.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("my-app")], null));
