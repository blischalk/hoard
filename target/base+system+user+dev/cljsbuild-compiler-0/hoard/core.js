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
hoard.core.get_indexed_users = (function get_indexed_users(app_state){
return hoard.elasticsearch.get_users.call(null,(function (resp){
var tweet_data = cljs.core.array_seq.call(null,(resp["aggregations"]["screen_names"]["buckets"]));
return om.core.update_BANG_.call(null,app_state,new cljs.core.Keyword(null,"indexed-users","indexed-users",-2071128862),tweet_data);
}));
});
hoard.core.user_being_indexed = (function user_being_indexed(user,owner){
if(typeof hoard.core.t49729 !== 'undefined'){
} else {

/**
* @constructor
*/
hoard.core.t49729 = (function (owner,user,user_being_indexed,meta49730){
this.owner = owner;
this.user = user;
this.user_being_indexed = user_being_indexed;
this.meta49730 = meta49730;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hoard.core.t49729.prototype.om$core$IRender$ = true;

hoard.core.t49729.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.tr(null,React.DOM.td(null,self__.user));
});

hoard.core.t49729.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49731){
var self__ = this;
var _49731__$1 = this;
return self__.meta49730;
});

hoard.core.t49729.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49731,meta49730__$1){
var self__ = this;
var _49731__$1 = this;
return (new hoard.core.t49729(self__.owner,self__.user,self__.user_being_indexed,meta49730__$1));
});

hoard.core.t49729.cljs$lang$type = true;

hoard.core.t49729.cljs$lang$ctorStr = "hoard.core/t49729";

hoard.core.t49729.cljs$lang$ctorPrWriter = (function (this__4384__auto__,writer__4385__auto__,opt__4386__auto__){
return cljs.core._write.call(null,writer__4385__auto__,"hoard.core/t49729");
});

hoard.core.__GT_t49729 = (function __GT_t49729(owner__$1,user__$1,user_being_indexed__$1,meta49730){
return (new hoard.core.t49729(owner__$1,user__$1,user_being_indexed__$1,meta49730));
});

}

return (new hoard.core.t49729(owner,user,user_being_indexed,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),39,new cljs.core.Keyword(null,"end-line","end-line",1837326455),38,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),35,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/blischalk/node-webkit-apps/hoard/src/cljs/hoard/core.cljs"], null)));
});
hoard.core.users_being_indexed = (function users_being_indexed(_,p__49732){
var map__49734 = p__49732;
var map__49734__$1 = ((cljs.core.seq_QMARK_.call(null,map__49734))?cljs.core.apply.call(null,cljs.core.hash_map,map__49734):map__49734);
var users = cljs.core.get.call(null,map__49734__$1,new cljs.core.Keyword(null,"users","users",-713552705));
return React.DOM.div({"className": "section", "id": "indexing-users", "style": hoard.util.hidden.call(null,cljs.core.empty_QMARK_.call(null,users))},React.DOM.h2(null,"Indexing Users:"),React.DOM.table({"className": "table table-striped table-bordered"},React.DOM.tr(null,React.DOM.th(null,"Screen Name")),cljs.core.apply.call(null,om.dom.tbody,null,om.core.build_all.call(null,hoard.core.user_being_indexed,users))));
});
hoard.core.handle_screen_name_change = (function handle_screen_name_change(e,owner,p__49735){
var map__49737 = p__49735;
var map__49737__$1 = ((cljs.core.seq_QMARK_.call(null,map__49737))?cljs.core.apply.call(null,cljs.core.hash_map,map__49737):map__49737);
var screen_name = cljs.core.get.call(null,map__49737__$1,new cljs.core.Keyword(null,"screen-name","screen-name",31129652));
var value = e.target.value;
om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"btn-disabled","btn-disabled",540927902),cljs.core._EQ_.call(null,value,""));

return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"screen-name","screen-name",31129652),value);
});
hoard.core.index_user_BANG_ = (function index_user_BANG_(owner,screen_name,comm){
om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"screen-name","screen-name",31129652),"");

om.core.update_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"users","users",-713552705),(function (p1__49738_SHARP_){
return cljs.core.conj.call(null,p1__49738_SHARP_,screen_name);
}));

return hoard.acquire.data.call(null,screen_name,comm);
});
hoard.core.index_complete = (function index_complete(owner,screen_name){
console.log("user ",screen_name,"has been indexed!");

hoard.core.get_indexed_users.call(null,om.core.root_cursor.call(null,hoard.core.app_state));

return om.core.update_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"users","users",-713552705),(function (col){
return cljs.core.vec.call(null,cljs.core.remove.call(null,(function (p1__49739_SHARP_){
return cljs.core._EQ_.call(null,p1__49739_SHARP_,screen_name);
}),col));
}));
});
hoard.core.handle_event = (function handle_event(type,owner,val,comm){
var G__49741 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__49741) {
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
return om.dom.input.call(null,{"onChange": (function (p1__49743_SHARP_){
return hoard.core.handle_screen_name_change.call(null,p1__49743_SHARP_,owner,state);
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
if(typeof hoard.core.t49747 !== 'undefined'){
} else {

/**
* @constructor
*/
hoard.core.t49747 = (function (user,indexed_user,meta49748){
this.user = user;
this.indexed_user = indexed_user;
this.meta49748 = meta49748;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hoard.core.t49747.prototype.om$core$IRender$ = true;

hoard.core.t49747.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.tr(null,React.DOM.td(null,(self__.user["key"])),React.DOM.td(null,(self__.user["doc_count"])));
});

hoard.core.t49747.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49749){
var self__ = this;
var _49749__$1 = this;
return self__.meta49748;
});

hoard.core.t49747.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49749,meta49748__$1){
var self__ = this;
var _49749__$1 = this;
return (new hoard.core.t49747(self__.user,self__.indexed_user,meta49748__$1));
});

hoard.core.t49747.cljs$lang$type = true;

hoard.core.t49747.cljs$lang$ctorStr = "hoard.core/t49747";

hoard.core.t49747.cljs$lang$ctorPrWriter = (function (this__4384__auto__,writer__4385__auto__,opt__4386__auto__){
return cljs.core._write.call(null,writer__4385__auto__,"hoard.core/t49747");
});

hoard.core.__GT_t49747 = (function __GT_t49747(user__$1,indexed_user__$1,meta49748){
return (new hoard.core.t49747(user__$1,indexed_user__$1,meta49748));
});

}

return (new hoard.core.t49747(user,indexed_user,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),64,new cljs.core.Keyword(null,"end-line","end-line",1837326455),119,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),115,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/blischalk/node-webkit-apps/hoard/src/cljs/hoard/core.cljs"], null)));
});
hoard.core.users_in_index = (function users_in_index(app){
if(typeof hoard.core.t49753 !== 'undefined'){
} else {

/**
* @constructor
*/
hoard.core.t49753 = (function (app,users_in_index,meta49754){
this.app = app;
this.users_in_index = users_in_index;
this.meta49754 = meta49754;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hoard.core.t49753.prototype.om$core$IRender$ = true;

hoard.core.t49753.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div({"className": "section", "id": "indexed-users"},React.DOM.h2(null,"Indexed Users:"),console.log(new cljs.core.Keyword(null,"indexed-users","indexed-users",-2071128862).cljs$core$IFn$_invoke$arity$1(self__.app)),React.DOM.table({"className": "table table-striped table-bordered"},React.DOM.tr(null,React.DOM.th(null,"Screen Name"),React.DOM.th(null,"Tweet Count")),cljs.core.apply.call(null,om.dom.tbody,null,om.core.build_all.call(null,hoard.core.indexed_user,new cljs.core.Keyword(null,"indexed-users","indexed-users",-2071128862).cljs$core$IFn$_invoke$arity$1(self__.app)))));
});

hoard.core.t49753.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49755){
var self__ = this;
var _49755__$1 = this;
return self__.meta49754;
});

hoard.core.t49753.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49755,meta49754__$1){
var self__ = this;
var _49755__$1 = this;
return (new hoard.core.t49753(self__.app,self__.users_in_index,meta49754__$1));
});

hoard.core.t49753.cljs$lang$type = true;

hoard.core.t49753.cljs$lang$ctorStr = "hoard.core/t49753";

hoard.core.t49753.cljs$lang$ctorPrWriter = (function (this__4384__auto__,writer__4385__auto__,opt__4386__auto__){
return cljs.core._write.call(null,writer__4385__auto__,"hoard.core/t49753");
});

hoard.core.__GT_t49753 = (function __GT_t49753(app__$1,users_in_index__$1,meta49754){
return (new hoard.core.t49753(app__$1,users_in_index__$1,meta49754));
});

}

return (new hoard.core.t49753(app,users_in_index,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),87,new cljs.core.Keyword(null,"end-line","end-line",1837326455),134,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),122,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/blischalk/node-webkit-apps/hoard/src/cljs/hoard/core.cljs"], null)));
});
hoard.core.main_view = (function main_view(app_state,owner,state,comm){
return React.DOM.div({"className": "container"},React.DOM.h1(null,"Hoard"),hoard.core.user_indexing_form.call(null,owner,state,comm),hoard.core.users_being_indexed.call(null,owner,state),om.core.build.call(null,hoard.core.users_in_index,app_state));
});
hoard.core.indexing_ui = (function indexing_ui(app_state,owner){
if(typeof hoard.core.t49794 !== 'undefined'){
} else {

/**
* @constructor
*/
hoard.core.t49794 = (function (owner,app_state,indexing_ui,meta49795){
this.owner = owner;
this.app_state = app_state;
this.indexing_ui = indexing_ui;
this.meta49795 = meta49795;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hoard.core.t49794.prototype.om$core$IRenderState$ = true;

hoard.core.t49794.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__49797){
var self__ = this;
var map__49798 = p__49797;
var map__49798__$1 = ((cljs.core.seq_QMARK_.call(null,map__49798))?cljs.core.apply.call(null,cljs.core.hash_map,map__49798):map__49798);
var state = map__49798__$1;
var comm = cljs.core.get.call(null,map__49798__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));
var this$__$1 = this;
return hoard.core.main_view.call(null,self__.app_state,self__.owner,state,comm);
});

hoard.core.t49794.prototype.om$core$IInitState$ = true;

hoard.core.t49794.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"screen-name","screen-name",31129652),"",new cljs.core.Keyword(null,"btn-disabled","btn-disabled",540927902),true,new cljs.core.Keyword(null,"users","users",-713552705),cljs.core.PersistentVector.EMPTY], null);
});

hoard.core.t49794.prototype.om$core$IWillMount$ = true;

hoard.core.t49794.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var comm = cljs.core.async.chan.call(null);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"comm","comm",-1689770614),comm);

var c__6581__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6581__auto__,comm,___$1){
return (function (){
var f__6582__auto__ = (function (){var switch__6525__auto__ = ((function (c__6581__auto__,comm,___$1){
return (function (state_49815){
var state_val_49816 = (state_49815[(1)]);
if((state_val_49816 === (7))){
var inst_49804 = (state_49815[(2)]);
var inst_49805 = cljs.core.nth.call(null,inst_49804,(0),null);
var inst_49806 = cljs.core.nth.call(null,inst_49804,(1),null);
var inst_49807 = hoard.core.handle_event.call(null,inst_49805,self__.owner,inst_49806,comm);
var state_49815__$1 = (function (){var statearr_49817 = state_49815;
(statearr_49817[(7)] = inst_49807);

return statearr_49817;
})();
var statearr_49818_49832 = state_49815__$1;
(statearr_49818_49832[(2)] = null);

(statearr_49818_49832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49816 === (6))){
var inst_49811 = (state_49815[(2)]);
var state_49815__$1 = state_49815;
var statearr_49819_49833 = state_49815__$1;
(statearr_49819_49833[(2)] = inst_49811);

(statearr_49819_49833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49816 === (5))){
var state_49815__$1 = state_49815;
var statearr_49820_49834 = state_49815__$1;
(statearr_49820_49834[(2)] = null);

(statearr_49820_49834[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49816 === (4))){
var state_49815__$1 = state_49815;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49815__$1,(7),comm);
} else {
if((state_val_49816 === (3))){
var inst_49813 = (state_49815[(2)]);
var state_49815__$1 = state_49815;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49815__$1,inst_49813);
} else {
if((state_val_49816 === (2))){
var state_49815__$1 = state_49815;
var statearr_49821_49835 = state_49815__$1;
(statearr_49821_49835[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49816 === (1))){
var inst_49799 = hoard.core.get_indexed_users.call(null,self__.app_state);
var state_49815__$1 = (function (){var statearr_49823 = state_49815;
(statearr_49823[(8)] = inst_49799);

return statearr_49823;
})();
var statearr_49824_49836 = state_49815__$1;
(statearr_49824_49836[(2)] = null);

(statearr_49824_49836[(1)] = (2));


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
var statearr_49828 = [null,null,null,null,null,null,null,null,null];
(statearr_49828[(0)] = state_machine__6526__auto__);

(statearr_49828[(1)] = (1));

return statearr_49828;
});
var state_machine__6526__auto____1 = (function (state_49815){
while(true){
var ret_value__6527__auto__ = (function (){try{while(true){
var result__6528__auto__ = switch__6525__auto__.call(null,state_49815);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6528__auto__;
}
break;
}
}catch (e49829){if((e49829 instanceof Object)){
var ex__6529__auto__ = e49829;
var statearr_49830_49837 = state_49815;
(statearr_49830_49837[(5)] = ex__6529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49815);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49829;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49838 = state_49815;
state_49815 = G__49838;
continue;
} else {
return ret_value__6527__auto__;
}
break;
}
});
state_machine__6526__auto__ = function(state_49815){
switch(arguments.length){
case 0:
return state_machine__6526__auto____0.call(this);
case 1:
return state_machine__6526__auto____1.call(this,state_49815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6526__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6526__auto____0;
state_machine__6526__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6526__auto____1;
return state_machine__6526__auto__;
})()
;})(switch__6525__auto__,c__6581__auto__,comm,___$1))
})();
var state__6583__auto__ = (function (){var statearr_49831 = f__6582__auto__.call(null);
(statearr_49831[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6581__auto__);

return statearr_49831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6583__auto__);
});})(c__6581__auto__,comm,___$1))
);

return c__6581__auto__;
});

hoard.core.t49794.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49796){
var self__ = this;
var _49796__$1 = this;
return self__.meta49795;
});

hoard.core.t49794.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49796,meta49795__$1){
var self__ = this;
var _49796__$1 = this;
return (new hoard.core.t49794(self__.owner,self__.app_state,self__.indexing_ui,meta49795__$1));
});

hoard.core.t49794.cljs$lang$type = true;

hoard.core.t49794.cljs$lang$ctorStr = "hoard.core/t49794";

hoard.core.t49794.cljs$lang$ctorPrWriter = (function (this__4384__auto__,writer__4385__auto__,opt__4386__auto__){
return cljs.core._write.call(null,writer__4385__auto__,"hoard.core/t49794");
});

hoard.core.__GT_t49794 = (function __GT_t49794(owner__$1,app_state__$1,indexing_ui__$1,meta49795){
return (new hoard.core.t49794(owner__$1,app_state__$1,indexing_ui__$1,meta49795));
});

}

return (new hoard.core.t49794(owner,app_state,indexing_ui,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),47,new cljs.core.Keyword(null,"end-line","end-line",1837326455),170,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),146,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/blischalk/node-webkit-apps/hoard/src/cljs/hoard/core.cljs"], null)));
});
om.core.root.call(null,hoard.core.indexing_ui,hoard.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("my-app")], null));
