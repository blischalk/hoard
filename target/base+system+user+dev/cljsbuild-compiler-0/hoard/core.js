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
hoard.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"indexed-users","indexed-users",-2071128862),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.PersistentVector.EMPTY], null));
}
hoard.core.get_indexed_users = (function get_indexed_users(app_state){
return hoard.elasticsearch.get_users.call(null,(function (resp){
var tweet_data = cljs.core.array_seq.call(null,(resp["aggregations"]["screen_names"]["buckets"]));
return om.core.update_BANG_.call(null,app_state,new cljs.core.Keyword(null,"indexed-users","indexed-users",-2071128862),tweet_data);
}));
});
hoard.core.handle_screen_name_change = (function handle_screen_name_change(e,owner,p__12043){
var map__12045 = p__12043;
var map__12045__$1 = ((cljs.core.seq_QMARK_.call(null,map__12045))?cljs.core.apply.call(null,cljs.core.hash_map,map__12045):map__12045);
var screen_name = cljs.core.get.call(null,map__12045__$1,new cljs.core.Keyword(null,"screen-name","screen-name",31129652));
var value = e.target.value;
om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"btn-disabled","btn-disabled",540927902),(cljs.core._EQ_.call(null,value,"")) || (!(cljs.core.empty_QMARK_.call(null,hoard.core.errors))));

return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"screen-name","screen-name",31129652),value);
});
hoard.core.index_user_BANG_ = (function index_user_BANG_(owner,screen_name,comm){
om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"screen-name","screen-name",31129652),"");

om.core.update_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"users","users",-713552705),(function (p1__12046_SHARP_){
return cljs.core.conj.call(null,p1__12046_SHARP_,screen_name);
}));

return hoard.acquire.data.call(null,screen_name,comm);
});
hoard.core.index_complete = (function index_complete(owner,screen_name){
console.log("user ",screen_name,"has been indexed!");

hoard.core.get_indexed_users.call(null,om.core.root_cursor.call(null,hoard.core.app_state));

return om.core.update_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"users","users",-713552705),(function (col){
return cljs.core.vec.call(null,cljs.core.remove.call(null,(function (p1__12047_SHARP_){
return cljs.core._EQ_.call(null,p1__12047_SHARP_,screen_name);
}),col));
}));
});
hoard.core.handle_event = (function handle_event(type,owner,val,comm){
var G__12050 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__12050) {
case "user-indexed":
return hoard.core.index_complete.call(null,owner,val);

break;
case "user-tweets":
return hoard.data_processing.init.call(null,val,comm);

break;
case "index-user":
return hoard.core.index_user_BANG_.call(null,owner,val,comm);

break;
case "error":
return om.core.transact_BANG_.call(null,new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(om.core.root_cursor.call(null,hoard.core.app_state)),((function (G__12050){
return (function (p1__12048_SHARP_){
return cljs.core.conj.call(null,p1__12048_SHARP_,val);
});})(G__12050))
);

break;
default:
return null;

}
});
hoard.core.user_being_indexed = (function user_being_indexed(user,owner){
if(typeof hoard.core.t12055 !== 'undefined'){
} else {

/**
* @constructor
*/
hoard.core.t12055 = (function (owner,user,user_being_indexed,meta12056){
this.owner = owner;
this.user = user;
this.user_being_indexed = user_being_indexed;
this.meta12056 = meta12056;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hoard.core.t12055.prototype.om$core$IRender$ = true;

hoard.core.t12055.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.tr(null,React.DOM.td(null,self__.user));
});

hoard.core.t12055.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12057){
var self__ = this;
var _12057__$1 = this;
return self__.meta12056;
});

hoard.core.t12055.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12057,meta12056__$1){
var self__ = this;
var _12057__$1 = this;
return (new hoard.core.t12055(self__.owner,self__.user,self__.user_being_indexed,meta12056__$1));
});

hoard.core.t12055.cljs$lang$type = true;

hoard.core.t12055.cljs$lang$ctorStr = "hoard.core/t12055";

hoard.core.t12055.cljs$lang$ctorPrWriter = (function (this__4384__auto__,writer__4385__auto__,opt__4386__auto__){
return cljs.core._write.call(null,writer__4385__auto__,"hoard.core/t12055");
});

hoard.core.__GT_t12055 = (function __GT_t12055(owner__$1,user__$1,user_being_indexed__$1,meta12056){
return (new hoard.core.t12055(owner__$1,user__$1,user_being_indexed__$1,meta12056));
});

}

return (new hoard.core.t12055(owner,user,user_being_indexed,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),39,new cljs.core.Keyword(null,"end-line","end-line",1837326455),79,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),76,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/blischalk/node-webkit-apps/hoard/src/cljs/hoard/core.cljs"], null)));
});
hoard.core.users_being_indexed = (function users_being_indexed(_,p__12058){
var map__12060 = p__12058;
var map__12060__$1 = ((cljs.core.seq_QMARK_.call(null,map__12060))?cljs.core.apply.call(null,cljs.core.hash_map,map__12060):map__12060);
var users = cljs.core.get.call(null,map__12060__$1,new cljs.core.Keyword(null,"users","users",-713552705));
return React.DOM.div({"className": "section", "id": "indexing-users", "style": hoard.util.hidden.call(null,cljs.core.empty_QMARK_.call(null,users))},React.DOM.h2(null,"Indexing Users:"),React.DOM.table({"className": "table table-striped table-bordered"},React.DOM.tr(null,React.DOM.th(null,"Screen Name")),cljs.core.apply.call(null,om.dom.tbody,null,om.core.build_all.call(null,hoard.core.user_being_indexed,users))));
});
hoard.core.user_to_index = (function user_to_index(owner,state){
return om.dom.input.call(null,{"onChange": (function (p1__12061_SHARP_){
return hoard.core.handle_screen_name_change.call(null,p1__12061_SHARP_,owner,state);
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
if(typeof hoard.core.t12065 !== 'undefined'){
} else {

/**
* @constructor
*/
hoard.core.t12065 = (function (user,indexed_user,meta12066){
this.user = user;
this.indexed_user = indexed_user;
this.meta12066 = meta12066;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hoard.core.t12065.prototype.om$core$IRender$ = true;

hoard.core.t12065.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.tr(null,React.DOM.td(null,(self__.user["key"])),React.DOM.td(null,(self__.user["doc_count"])));
});

hoard.core.t12065.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12067){
var self__ = this;
var _12067__$1 = this;
return self__.meta12066;
});

hoard.core.t12065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12067,meta12066__$1){
var self__ = this;
var _12067__$1 = this;
return (new hoard.core.t12065(self__.user,self__.indexed_user,meta12066__$1));
});

hoard.core.t12065.cljs$lang$type = true;

hoard.core.t12065.cljs$lang$ctorStr = "hoard.core/t12065";

hoard.core.t12065.cljs$lang$ctorPrWriter = (function (this__4384__auto__,writer__4385__auto__,opt__4386__auto__){
return cljs.core._write.call(null,writer__4385__auto__,"hoard.core/t12065");
});

hoard.core.__GT_t12065 = (function __GT_t12065(user__$1,indexed_user__$1,meta12066){
return (new hoard.core.t12065(user__$1,indexed_user__$1,meta12066));
});

}

return (new hoard.core.t12065(user,indexed_user,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),64,new cljs.core.Keyword(null,"end-line","end-line",1837326455),129,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),125,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/blischalk/node-webkit-apps/hoard/src/cljs/hoard/core.cljs"], null)));
});
hoard.core.users_in_index = (function users_in_index(app){
if(typeof hoard.core.t12071 !== 'undefined'){
} else {

/**
* @constructor
*/
hoard.core.t12071 = (function (app,users_in_index,meta12072){
this.app = app;
this.users_in_index = users_in_index;
this.meta12072 = meta12072;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hoard.core.t12071.prototype.om$core$IRender$ = true;

hoard.core.t12071.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div({"className": "section", "id": "indexed-users"},React.DOM.h2(null,"Indexed Users:"),console.log(new cljs.core.Keyword(null,"indexed-users","indexed-users",-2071128862).cljs$core$IFn$_invoke$arity$1(self__.app)),React.DOM.table({"className": "table table-striped table-bordered"},React.DOM.tr(null,React.DOM.th(null,"Screen Name"),React.DOM.th(null,"Tweet Count")),cljs.core.apply.call(null,om.dom.tbody,null,om.core.build_all.call(null,hoard.core.indexed_user,new cljs.core.Keyword(null,"indexed-users","indexed-users",-2071128862).cljs$core$IFn$_invoke$arity$1(self__.app)))));
});

hoard.core.t12071.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12073){
var self__ = this;
var _12073__$1 = this;
return self__.meta12072;
});

hoard.core.t12071.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12073,meta12072__$1){
var self__ = this;
var _12073__$1 = this;
return (new hoard.core.t12071(self__.app,self__.users_in_index,meta12072__$1));
});

hoard.core.t12071.cljs$lang$type = true;

hoard.core.t12071.cljs$lang$ctorStr = "hoard.core/t12071";

hoard.core.t12071.cljs$lang$ctorPrWriter = (function (this__4384__auto__,writer__4385__auto__,opt__4386__auto__){
return cljs.core._write.call(null,writer__4385__auto__,"hoard.core/t12071");
});

hoard.core.__GT_t12071 = (function __GT_t12071(app__$1,users_in_index__$1,meta12072){
return (new hoard.core.t12071(app__$1,users_in_index__$1,meta12072));
});

}

return (new hoard.core.t12071(app,users_in_index,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),87,new cljs.core.Keyword(null,"end-line","end-line",1837326455),144,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),132,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/blischalk/node-webkit-apps/hoard/src/cljs/hoard/core.cljs"], null)));
});
hoard.core.error_message = (function error_message(error,owner){
if(typeof hoard.core.t12077 !== 'undefined'){
} else {

/**
* @constructor
*/
hoard.core.t12077 = (function (owner,error,error_message,meta12078){
this.owner = owner;
this.error = error;
this.error_message = error_message;
this.meta12078 = meta12078;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hoard.core.t12077.prototype.om$core$IRender$ = true;

hoard.core.t12077.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.li(null,self__.error);
});

hoard.core.t12077.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12079){
var self__ = this;
var _12079__$1 = this;
return self__.meta12078;
});

hoard.core.t12077.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12079,meta12078__$1){
var self__ = this;
var _12079__$1 = this;
return (new hoard.core.t12077(self__.owner,self__.error,self__.error_message,meta12078__$1));
});

hoard.core.t12077.cljs$lang$type = true;

hoard.core.t12077.cljs$lang$ctorStr = "hoard.core/t12077";

hoard.core.t12077.cljs$lang$ctorPrWriter = (function (this__4384__auto__,writer__4385__auto__,opt__4386__auto__){
return cljs.core._write.call(null,writer__4385__auto__,"hoard.core/t12077");
});

hoard.core.__GT_t12077 = (function __GT_t12077(owner__$1,error__$1,error_message__$1,meta12078){
return (new hoard.core.t12077(owner__$1,error__$1,error_message__$1,meta12078));
});

}

return (new hoard.core.t12077(owner,error,error_message,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),27,new cljs.core.Keyword(null,"end-line","end-line",1837326455),152,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/blischalk/node-webkit-apps/hoard/src/cljs/hoard/core.cljs"], null)));
});
hoard.core.check_es_status = (function check_es_status(comm){
return hoard.elasticsearch.status.call(null,comm,(function (_){
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Can't connect to Elasticsearch.  "),cljs.core.str("Is the server Running?")].join('')], null));
}));
});
hoard.core.main_view = (function main_view(app_state,owner,state,comm){
var errors = new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(app_state);
return React.DOM.div({"className": "container"},React.DOM.h1(null,"Hoard"),React.DOM.div({"className": "section errors", "style": hoard.util.hidden.call(null,cljs.core.empty_QMARK_.call(null,errors))},cljs.core.apply.call(null,om.dom.ul,{"id": "errors"},om.core.build_all.call(null,hoard.core.error_message,errors))),hoard.core.user_indexing_form.call(null,owner,state,comm),hoard.core.users_being_indexed.call(null,owner,state),om.core.build.call(null,hoard.core.users_in_index,app_state));
});
hoard.core.indexing_ui = (function indexing_ui(app_state,owner){
if(typeof hoard.core.t12118 !== 'undefined'){
} else {

/**
* @constructor
*/
hoard.core.t12118 = (function (owner,app_state,indexing_ui,meta12119){
this.owner = owner;
this.app_state = app_state;
this.indexing_ui = indexing_ui;
this.meta12119 = meta12119;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hoard.core.t12118.prototype.om$core$IRenderState$ = true;

hoard.core.t12118.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__12121){
var self__ = this;
var map__12122 = p__12121;
var map__12122__$1 = ((cljs.core.seq_QMARK_.call(null,map__12122))?cljs.core.apply.call(null,cljs.core.hash_map,map__12122):map__12122);
var state = map__12122__$1;
var comm = cljs.core.get.call(null,map__12122__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));
var this$__$1 = this;
return hoard.core.main_view.call(null,self__.app_state,self__.owner,state,comm);
});

hoard.core.t12118.prototype.om$core$IInitState$ = true;

hoard.core.t12118.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"screen-name","screen-name",31129652),"",new cljs.core.Keyword(null,"btn-disabled","btn-disabled",540927902),true,new cljs.core.Keyword(null,"users","users",-713552705),cljs.core.PersistentVector.EMPTY], null);
});

hoard.core.t12118.prototype.om$core$IWillMount$ = true;

hoard.core.t12118.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var comm = cljs.core.async.chan.call(null);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"comm","comm",-1689770614),comm);

hoard.core.check_es_status.call(null,comm);

var c__6581__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6581__auto__,comm,___$1){
return (function (){
var f__6582__auto__ = (function (){var switch__6525__auto__ = ((function (c__6581__auto__,comm,___$1){
return (function (state_12139){
var state_val_12140 = (state_12139[(1)]);
if((state_val_12140 === (7))){
var inst_12128 = (state_12139[(2)]);
var inst_12129 = cljs.core.nth.call(null,inst_12128,(0),null);
var inst_12130 = cljs.core.nth.call(null,inst_12128,(1),null);
var inst_12131 = hoard.core.handle_event.call(null,inst_12129,self__.owner,inst_12130,comm);
var state_12139__$1 = (function (){var statearr_12141 = state_12139;
(statearr_12141[(7)] = inst_12131);

return statearr_12141;
})();
var statearr_12142_12156 = state_12139__$1;
(statearr_12142_12156[(2)] = null);

(statearr_12142_12156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12140 === (6))){
var inst_12135 = (state_12139[(2)]);
var state_12139__$1 = state_12139;
var statearr_12143_12157 = state_12139__$1;
(statearr_12143_12157[(2)] = inst_12135);

(statearr_12143_12157[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12140 === (5))){
var state_12139__$1 = state_12139;
var statearr_12144_12158 = state_12139__$1;
(statearr_12144_12158[(2)] = null);

(statearr_12144_12158[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12140 === (4))){
var state_12139__$1 = state_12139;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12139__$1,(7),comm);
} else {
if((state_val_12140 === (3))){
var inst_12137 = (state_12139[(2)]);
var state_12139__$1 = state_12139;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12139__$1,inst_12137);
} else {
if((state_val_12140 === (2))){
var state_12139__$1 = state_12139;
var statearr_12145_12159 = state_12139__$1;
(statearr_12145_12159[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12140 === (1))){
var inst_12123 = hoard.core.get_indexed_users.call(null,self__.app_state);
var state_12139__$1 = (function (){var statearr_12147 = state_12139;
(statearr_12147[(8)] = inst_12123);

return statearr_12147;
})();
var statearr_12148_12160 = state_12139__$1;
(statearr_12148_12160[(2)] = null);

(statearr_12148_12160[(1)] = (2));


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
var statearr_12152 = [null,null,null,null,null,null,null,null,null];
(statearr_12152[(0)] = state_machine__6526__auto__);

(statearr_12152[(1)] = (1));

return statearr_12152;
});
var state_machine__6526__auto____1 = (function (state_12139){
while(true){
var ret_value__6527__auto__ = (function (){try{while(true){
var result__6528__auto__ = switch__6525__auto__.call(null,state_12139);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6528__auto__;
}
break;
}
}catch (e12153){if((e12153 instanceof Object)){
var ex__6529__auto__ = e12153;
var statearr_12154_12161 = state_12139;
(statearr_12154_12161[(5)] = ex__6529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12153;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12162 = state_12139;
state_12139 = G__12162;
continue;
} else {
return ret_value__6527__auto__;
}
break;
}
});
state_machine__6526__auto__ = function(state_12139){
switch(arguments.length){
case 0:
return state_machine__6526__auto____0.call(this);
case 1:
return state_machine__6526__auto____1.call(this,state_12139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6526__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6526__auto____0;
state_machine__6526__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6526__auto____1;
return state_machine__6526__auto__;
})()
;})(switch__6525__auto__,c__6581__auto__,comm,___$1))
})();
var state__6583__auto__ = (function (){var statearr_12155 = f__6582__auto__.call(null);
(statearr_12155[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6581__auto__);

return statearr_12155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6583__auto__);
});})(c__6581__auto__,comm,___$1))
);

return c__6581__auto__;
});

hoard.core.t12118.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12120){
var self__ = this;
var _12120__$1 = this;
return self__.meta12119;
});

hoard.core.t12118.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12120,meta12119__$1){
var self__ = this;
var _12120__$1 = this;
return (new hoard.core.t12118(self__.owner,self__.app_state,self__.indexing_ui,meta12119__$1));
});

hoard.core.t12118.cljs$lang$type = true;

hoard.core.t12118.cljs$lang$ctorStr = "hoard.core/t12118";

hoard.core.t12118.cljs$lang$ctorPrWriter = (function (this__4384__auto__,writer__4385__auto__,opt__4386__auto__){
return cljs.core._write.call(null,writer__4385__auto__,"hoard.core/t12118");
});

hoard.core.__GT_t12118 = (function __GT_t12118(owner__$1,app_state__$1,indexing_ui__$1,meta12119){
return (new hoard.core.t12118(owner__$1,app_state__$1,indexing_ui__$1,meta12119));
});

}

return (new hoard.core.t12118(owner,app_state,indexing_ui,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),47,new cljs.core.Keyword(null,"end-line","end-line",1837326455),201,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),175,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/blischalk/node-webkit-apps/hoard/src/cljs/hoard/core.cljs"], null)));
});
om.core.root.call(null,hoard.core.indexing_ui,hoard.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("my-app")], null));
