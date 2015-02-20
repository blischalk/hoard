// Compiled by ClojureScript 0.0-2814 {}
goog.provide('enfocus.core');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom.query');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('domina.css');
goog.require('goog.Timer');
goog.require('goog.net.XhrIo');
goog.require('goog.dom.ViewportSizeMonitor');
goog.require('domina');
goog.require('goog.async.Delay');
goog.require('goog.events');
goog.require('domina.xpath');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('enfocus.enlive.syntax');







enfocus.core.ISelector = (function (){var obj11893 = {};
return obj11893;
})();

enfocus.core.select = (function() {
var select = null;
var select__1 = (function (this$){
if((function (){var and__3785__auto__ = this$;
if(and__3785__auto__){
return this$.enfocus$core$ISelector$select$arity$1;
} else {
return and__3785__auto__;
}
})()){
return this$.enfocus$core$ISelector$select$arity$1(this$);
} else {
var x__4441__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3797__auto__ = (enfocus.core.select[goog.typeOf(x__4441__auto__)]);
if(or__3797__auto__){
return or__3797__auto__;
} else {
var or__3797__auto____$1 = (enfocus.core.select["_"]);
if(or__3797__auto____$1){
return or__3797__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
})().call(null,this$);
}
});
var select__2 = (function (this$,root){
if((function (){var and__3785__auto__ = this$;
if(and__3785__auto__){
return this$.enfocus$core$ISelector$select$arity$2;
} else {
return and__3785__auto__;
}
})()){
return this$.enfocus$core$ISelector$select$arity$2(this$,root);
} else {
var x__4441__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3797__auto__ = (enfocus.core.select[goog.typeOf(x__4441__auto__)]);
if(or__3797__auto__){
return or__3797__auto__;
} else {
var or__3797__auto____$1 = (enfocus.core.select["_"]);
if(or__3797__auto____$1){
return or__3797__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
})().call(null,this$,root);
}
});
var select__3 = (function (this$,root,id_mask){
if((function (){var and__3785__auto__ = this$;
if(and__3785__auto__){
return this$.enfocus$core$ISelector$select$arity$3;
} else {
return and__3785__auto__;
}
})()){
return this$.enfocus$core$ISelector$select$arity$3(this$,root,id_mask);
} else {
var x__4441__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3797__auto__ = (enfocus.core.select[goog.typeOf(x__4441__auto__)]);
if(or__3797__auto__){
return or__3797__auto__;
} else {
var or__3797__auto____$1 = (enfocus.core.select["_"]);
if(or__3797__auto____$1){
return or__3797__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
})().call(null,this$,root,id_mask);
}
});
select = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return select__1.call(this,this$);
case 2:
return select__2.call(this,this$,root);
case 3:
return select__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select.cljs$core$IFn$_invoke$arity$1 = select__1;
select.cljs$core$IFn$_invoke$arity$2 = select__2;
select.cljs$core$IFn$_invoke$arity$3 = select__3;
return select;
})()
;


enfocus.core.ITransform = (function (){var obj11895 = {};
return obj11895;
})();

enfocus.core.apply_transform = (function() {
var apply_transform = null;
var apply_transform__2 = (function (this$,nodes){
if((function (){var and__3785__auto__ = this$;
if(and__3785__auto__){
return this$.enfocus$core$ITransform$apply_transform$arity$2;
} else {
return and__3785__auto__;
}
})()){
return this$.enfocus$core$ITransform$apply_transform$arity$2(this$,nodes);
} else {
var x__4441__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3797__auto__ = (enfocus.core.apply_transform[goog.typeOf(x__4441__auto__)]);
if(or__3797__auto__){
return or__3797__auto__;
} else {
var or__3797__auto____$1 = (enfocus.core.apply_transform["_"]);
if(or__3797__auto____$1){
return or__3797__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ITransform.apply-transform",this$);
}
}
})().call(null,this$,nodes);
}
});
var apply_transform__3 = (function (this$,nodes,callback){
if((function (){var and__3785__auto__ = this$;
if(and__3785__auto__){
return this$.enfocus$core$ITransform$apply_transform$arity$3;
} else {
return and__3785__auto__;
}
})()){
return this$.enfocus$core$ITransform$apply_transform$arity$3(this$,nodes,callback);
} else {
var x__4441__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3797__auto__ = (enfocus.core.apply_transform[goog.typeOf(x__4441__auto__)]);
if(or__3797__auto__){
return or__3797__auto__;
} else {
var or__3797__auto____$1 = (enfocus.core.apply_transform["_"]);
if(or__3797__auto____$1){
return or__3797__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ITransform.apply-transform",this$);
}
}
})().call(null,this$,nodes,callback);
}
});
apply_transform = function(this$,nodes,callback){
switch(arguments.length){
case 2:
return apply_transform__2.call(this,this$,nodes);
case 3:
return apply_transform__3.call(this,this$,nodes,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
apply_transform.cljs$core$IFn$_invoke$arity$2 = apply_transform__2;
apply_transform.cljs$core$IFn$_invoke$arity$3 = apply_transform__3;
return apply_transform;
})()
;

enfocus.core.debug = false;
enfocus.core.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3785__auto__ = enfocus.core.debug;
if(cljs.core.truth_(and__3785__auto__)){
return !(cljs.core._EQ_.call(null,window.console,undefined));
} else {
return and__3785__auto__;
}
})())){
return console.log(mesg);
} else {
return null;
}
});
enfocus.core.setTimeout = (function setTimeout(func,ttime){
return goog.Timer.callOnce(func,ttime);
});
enfocus.core.node_QMARK_ = (function node_QMARK_(tst){
return goog.dom.isNodeLike(tst);
});
enfocus.core.nodelist_QMARK_ = (function nodelist_QMARK_(tst){
return (tst instanceof NodeList);
});
/**
* coverts a nodelist, node into a collection
*/
enfocus.core.nodes__GT_coll = (function nodes__GT_coll(nl){
if((nl === window)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nl], null);
} else {
return domina.nodes.call(null,nl);
}
});
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){

return cljs.core.mapcat.call(null,(function (p1__11896_SHARP_){
if(typeof p1__11896_SHARP_ === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.dom.createTextNode(p1__11896_SHARP_)], null);
} else {
return enfocus.core.nodes__GT_coll.call(null,p1__11896_SHARP_);

}
}),values);
});
/**
* Sets property name to a value on a element and	Returns the original object
*/
enfocus.core.style_set = (function style_set(obj,values){
var seq__11903_11909 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));
var chunk__11904_11910 = null;
var count__11905_11911 = (0);
var i__11906_11912 = (0);
while(true){
if((i__11906_11912 < count__11905_11911)){
var vec__11907_11913 = cljs.core._nth.call(null,chunk__11904_11910,i__11906_11912);
var attr_11914 = cljs.core.nth.call(null,vec__11907_11913,(0),null);
var value_11915 = cljs.core.nth.call(null,vec__11907_11913,(1),null);
goog.style.setStyle(obj,cljs.core.name.call(null,attr_11914),value_11915);

var G__11916 = seq__11903_11909;
var G__11917 = chunk__11904_11910;
var G__11918 = count__11905_11911;
var G__11919 = (i__11906_11912 + (1));
seq__11903_11909 = G__11916;
chunk__11904_11910 = G__11917;
count__11905_11911 = G__11918;
i__11906_11912 = G__11919;
continue;
} else {
var temp__4126__auto___11920 = cljs.core.seq.call(null,seq__11903_11909);
if(temp__4126__auto___11920){
var seq__11903_11921__$1 = temp__4126__auto___11920;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11903_11921__$1)){
var c__4584__auto___11922 = cljs.core.chunk_first.call(null,seq__11903_11921__$1);
var G__11923 = cljs.core.chunk_rest.call(null,seq__11903_11921__$1);
var G__11924 = c__4584__auto___11922;
var G__11925 = cljs.core.count.call(null,c__4584__auto___11922);
var G__11926 = (0);
seq__11903_11909 = G__11923;
chunk__11904_11910 = G__11924;
count__11905_11911 = G__11925;
i__11906_11912 = G__11926;
continue;
} else {
var vec__11908_11927 = cljs.core.first.call(null,seq__11903_11921__$1);
var attr_11928 = cljs.core.nth.call(null,vec__11908_11927,(0),null);
var value_11929 = cljs.core.nth.call(null,vec__11908_11927,(1),null);
goog.style.setStyle(obj,cljs.core.name.call(null,attr_11928),value_11929);

var G__11930 = cljs.core.next.call(null,seq__11903_11921__$1);
var G__11931 = null;
var G__11932 = (0);
var G__11933 = (0);
seq__11903_11909 = G__11930;
chunk__11904_11910 = G__11931;
count__11905_11911 = G__11932;
i__11906_11912 = G__11933;
continue;
}
} else {
}
}
break;
}

return obj;
});
/**
* removes the property value from an elements style obj.
*/
enfocus.core.style_remove = (function style_remove(obj,values){
var seq__11938 = cljs.core.seq.call(null,values);
var chunk__11939 = null;
var count__11940 = (0);
var i__11941 = (0);
while(true){
if((i__11941 < count__11940)){
var attr = cljs.core._nth.call(null,chunk__11939,i__11941);
if(cljs.core.truth_(goog.userAgent.IE)){
goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else {
obj.style.removeProperty(cljs.core.name.call(null,attr));
}

var G__11942 = seq__11938;
var G__11943 = chunk__11939;
var G__11944 = count__11940;
var G__11945 = (i__11941 + (1));
seq__11938 = G__11942;
chunk__11939 = G__11943;
count__11940 = G__11944;
i__11941 = G__11945;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__11938);
if(temp__4126__auto__){
var seq__11938__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11938__$1)){
var c__4584__auto__ = cljs.core.chunk_first.call(null,seq__11938__$1);
var G__11946 = cljs.core.chunk_rest.call(null,seq__11938__$1);
var G__11947 = c__4584__auto__;
var G__11948 = cljs.core.count.call(null,c__4584__auto__);
var G__11949 = (0);
seq__11938 = G__11946;
chunk__11939 = G__11947;
count__11940 = G__11948;
i__11941 = G__11949;
continue;
} else {
var attr = cljs.core.first.call(null,seq__11938__$1);
if(cljs.core.truth_(goog.userAgent.IE)){
goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else {
obj.style.removeProperty(cljs.core.name.call(null,attr));
}

var G__11950 = cljs.core.next.call(null,seq__11938__$1);
var G__11951 = null;
var G__11952 = (0);
var G__11953 = (0);
seq__11938 = G__11950;
chunk__11939 = G__11951;
count__11940 = G__11952;
i__11941 = G__11953;
continue;
}
} else {
return null;
}
}
break;
}
});
enfocus.core.get_eff_prop_name = (function get_eff_prop_name(etype){
return [cljs.core.str("__ef_effect_"),cljs.core.str(etype)].join('');
});
enfocus.core.get_mills = (function get_mills(){
return (new Date()).getMilliseconds();
});
enfocus.core.pix_round = (function pix_round(step){
if((step < (0))){
return Math.floor.call(null,step);
} else {
return Math.ceil.call(null,step);
}
});
enfocus.core.add_map_attrs = (function() {
var add_map_attrs = null;
var add_map_attrs__2 = (function (elem,ats){
if(cljs.core.truth_(elem)){
if(cljs.core.map_QMARK_.call(null,ats)){
var seq__11960_11966 = cljs.core.seq.call(null,ats);
var chunk__11961_11967 = null;
var count__11962_11968 = (0);
var i__11963_11969 = (0);
while(true){
if((i__11963_11969 < count__11962_11968)){
var vec__11964_11970 = cljs.core._nth.call(null,chunk__11961_11967,i__11963_11969);
var k_11971 = cljs.core.nth.call(null,vec__11964_11970,(0),null);
var v_11972 = cljs.core.nth.call(null,vec__11964_11970,(1),null);
add_map_attrs.call(null,elem,k_11971,v_11972);

var G__11973 = seq__11960_11966;
var G__11974 = chunk__11961_11967;
var G__11975 = count__11962_11968;
var G__11976 = (i__11963_11969 + (1));
seq__11960_11966 = G__11973;
chunk__11961_11967 = G__11974;
count__11962_11968 = G__11975;
i__11963_11969 = G__11976;
continue;
} else {
var temp__4126__auto___11977 = cljs.core.seq.call(null,seq__11960_11966);
if(temp__4126__auto___11977){
var seq__11960_11978__$1 = temp__4126__auto___11977;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11960_11978__$1)){
var c__4584__auto___11979 = cljs.core.chunk_first.call(null,seq__11960_11978__$1);
var G__11980 = cljs.core.chunk_rest.call(null,seq__11960_11978__$1);
var G__11981 = c__4584__auto___11979;
var G__11982 = cljs.core.count.call(null,c__4584__auto___11979);
var G__11983 = (0);
seq__11960_11966 = G__11980;
chunk__11961_11967 = G__11981;
count__11962_11968 = G__11982;
i__11963_11969 = G__11983;
continue;
} else {
var vec__11965_11984 = cljs.core.first.call(null,seq__11960_11978__$1);
var k_11985 = cljs.core.nth.call(null,vec__11965_11984,(0),null);
var v_11986 = cljs.core.nth.call(null,vec__11965_11984,(1),null);
add_map_attrs.call(null,elem,k_11985,v_11986);

var G__11987 = cljs.core.next.call(null,seq__11960_11978__$1);
var G__11988 = null;
var G__11989 = (0);
var G__11990 = (0);
seq__11960_11966 = G__11987;
chunk__11961_11967 = G__11988;
count__11962_11968 = G__11989;
i__11963_11969 = G__11990;
continue;
}
} else {
}
}
break;
}

return elem;
} else {
return null;
}
} else {
return null;
}
});
var add_map_attrs__3 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);

return elem;
});
add_map_attrs = function(elem,k,v){
switch(arguments.length){
case 2:
return add_map_attrs__2.call(this,elem,k);
case 3:
return add_map_attrs__3.call(this,elem,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_map_attrs.cljs$core$IFn$_invoke$arity$2 = add_map_attrs__2;
add_map_attrs.cljs$core$IFn$_invoke$arity$3 = add_map_attrs__3;
return add_map_attrs;
})()
;
/**
* this is incremented everytime a remote template is loaded and decremented when
* it is added to the dom cache
*/
enfocus.core.tpl_load_cnt = cljs.core.atom.call(null,(0));
/**
* cache for the remote templates
*/
enfocus.core.tpl_cache = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
enfocus.core.hide_style = new cljs.core.PersistentArrayMap(null, 1, ["style","display: none; width: 0px; height: 0px"], null).strobj;
/**
* Add a hidden div to hold the dom as we are transforming it this has to be done
* because css selectors do not work unless we have it in the main dom
*/
enfocus.core.create_hidden_dom = (function create_hidden_dom(child){
var div = goog.dom.createDom("div",enfocus.core.hide_style);
if(cljs.core._EQ_.call(null,child.nodeType,(11))){
goog.dom.appendChild(div,child);
} else {
enfocus.core.log_debug.call(null,cljs.core.count.call(null,domina.nodes.call(null,child)));

var seq__11995_11999 = cljs.core.seq.call(null,domina.nodes.call(null,child));
var chunk__11996_12000 = null;
var count__11997_12001 = (0);
var i__11998_12002 = (0);
while(true){
if((i__11998_12002 < count__11997_12001)){
var node_12003 = cljs.core._nth.call(null,chunk__11996_12000,i__11998_12002);
goog.dom.appendChild(div,node_12003);

var G__12004 = seq__11995_11999;
var G__12005 = chunk__11996_12000;
var G__12006 = count__11997_12001;
var G__12007 = (i__11998_12002 + (1));
seq__11995_11999 = G__12004;
chunk__11996_12000 = G__12005;
count__11997_12001 = G__12006;
i__11998_12002 = G__12007;
continue;
} else {
var temp__4126__auto___12008 = cljs.core.seq.call(null,seq__11995_11999);
if(temp__4126__auto___12008){
var seq__11995_12009__$1 = temp__4126__auto___12008;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11995_12009__$1)){
var c__4584__auto___12010 = cljs.core.chunk_first.call(null,seq__11995_12009__$1);
var G__12011 = cljs.core.chunk_rest.call(null,seq__11995_12009__$1);
var G__12012 = c__4584__auto___12010;
var G__12013 = cljs.core.count.call(null,c__4584__auto___12010);
var G__12014 = (0);
seq__11995_11999 = G__12011;
chunk__11996_12000 = G__12012;
count__11997_12001 = G__12013;
i__11998_12002 = G__12014;
continue;
} else {
var node_12015 = cljs.core.first.call(null,seq__11995_12009__$1);
goog.dom.appendChild(div,node_12015);

var G__12016 = cljs.core.next.call(null,seq__11995_12009__$1);
var G__12017 = null;
var G__12018 = (0);
var G__12019 = (0);
seq__11995_11999 = G__12016;
chunk__11996_12000 = G__12017;
count__11997_12001 = G__12018;
i__11998_12002 = G__12019;
continue;
}
} else {
}
}
break;
}
}

goog.dom.appendChild(goog.dom.getDocument().documentElement,div);

return div;
});
/**
* removes the hidden div and returns the children
*/
enfocus.core.remove_node_return_child = (function remove_node_return_child(div){
var child = div.childNodes;
var frag = document.createDocumentFragment();
goog.dom.append(frag,child);

goog.dom.removeNode(div);

return frag;
});
enfocus.core.last_element_child = (function last_element_child(node){

return goog.dom.getLastElementChild(node);
});
/**
* replaces all the ids in a string html fragement/template with a generated
* symbol appended on to a existing id this is done to make sure we don't have
* id colisions during the transformation process
*/
enfocus.core.replace_ids = (function() {
var replace_ids = null;
var replace_ids__1 = (function (text){
return replace_ids.call(null,[cljs.core.str(cljs.core.name.call(null,cljs.core.gensym.call(null,"id"))),cljs.core.str("_")].join(''),text);
});
var replace_ids__2 = (function (id_mask,text){
var re = (new RegExp("(<.*?\\sid=['\"])(.*?)(['\"].*?>)","g"));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_mask,text.replace(re,((function (re){
return (function (a,b,c,d){
return [cljs.core.str(b),cljs.core.str(id_mask),cljs.core.str(c),cljs.core.str(d)].join('');
});})(re))
)], null);
});
replace_ids = function(id_mask,text){
switch(arguments.length){
case 1:
return replace_ids__1.call(this,id_mask);
case 2:
return replace_ids__2.call(this,id_mask,text);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
replace_ids.cljs$core$IFn$_invoke$arity$1 = replace_ids__1;
replace_ids.cljs$core$IFn$_invoke$arity$2 = replace_ids__2;
return replace_ids;
})()
;
/**
* before adding the dom back into the live dom we reset the masked ids to orig vals
*/
enfocus.core.reset_ids = (function reset_ids(sym,nod){
var id_nodes = enfocus.core.css_select.call(null,nod,"*[id]");
var nod_col = enfocus.core.nodes__GT_coll.call(null,id_nodes);
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (id_nodes,nod_col){
return (function (p1__12020_SHARP_){
var id = p1__12020_SHARP_.getAttribute("id");
var rid = id.replace(sym,"");
return p1__12020_SHARP_.setAttribute("id",rid);
});})(id_nodes,nod_col))
,nod_col));
});
/**
* loads a remote file into the cache, and masks the ids to avoid collisions
*/
enfocus.core.load_remote_dom = (function load_remote_dom(uri,dom_key,id_mask){
if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,dom_key) == null)){
cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.inc);

var req = (new goog.net.XhrIo());
var callback = ((function (req){
return (function (req__$1){
var text = req__$1.getResponseText();
var vec__12022 = enfocus.core.replace_ids.call(null,id_mask,text);
var sym = cljs.core.nth.call(null,vec__12022,(0),null);
var txt = cljs.core.nth.call(null,vec__12022,(1),null);
return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,dom_key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,txt], null));
});})(req))
;
goog.events.listen(req,goog.net.EventType.COMPLETE,((function (req,callback){
return (function (){
callback.call(null,req);

return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.dec);
});})(req,callback))
);

return req.send(uri,"GET");
} else {
return null;
}
});
enfocus.core.html_to_dom = (function html_to_dom(html){
var dfa = enfocus.core.nodes__GT_coll.call(null,domina.html_to_dom.call(null,html));
var frag = document.createDocumentFragment();
enfocus.core.log_debug.call(null,cljs.core.count.call(null,dfa));

var seq__12027_12031 = cljs.core.seq.call(null,dfa);
var chunk__12028_12032 = null;
var count__12029_12033 = (0);
var i__12030_12034 = (0);
while(true){
if((i__12030_12034 < count__12029_12033)){
var df_12035 = cljs.core._nth.call(null,chunk__12028_12032,i__12030_12034);
goog.dom.append(frag,df_12035);

var G__12036 = seq__12027_12031;
var G__12037 = chunk__12028_12032;
var G__12038 = count__12029_12033;
var G__12039 = (i__12030_12034 + (1));
seq__12027_12031 = G__12036;
chunk__12028_12032 = G__12037;
count__12029_12033 = G__12038;
i__12030_12034 = G__12039;
continue;
} else {
var temp__4126__auto___12040 = cljs.core.seq.call(null,seq__12027_12031);
if(temp__4126__auto___12040){
var seq__12027_12041__$1 = temp__4126__auto___12040;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12027_12041__$1)){
var c__4584__auto___12042 = cljs.core.chunk_first.call(null,seq__12027_12041__$1);
var G__12043 = cljs.core.chunk_rest.call(null,seq__12027_12041__$1);
var G__12044 = c__4584__auto___12042;
var G__12045 = cljs.core.count.call(null,c__4584__auto___12042);
var G__12046 = (0);
seq__12027_12031 = G__12043;
chunk__12028_12032 = G__12044;
count__12029_12033 = G__12045;
i__12030_12034 = G__12046;
continue;
} else {
var df_12047 = cljs.core.first.call(null,seq__12027_12041__$1);
goog.dom.append(frag,df_12047);

var G__12048 = cljs.core.next.call(null,seq__12027_12041__$1);
var G__12049 = null;
var G__12050 = (0);
var G__12051 = (0);
seq__12027_12031 = G__12048;
chunk__12028_12032 = G__12049;
count__12029_12033 = G__12050;
i__12030_12034 = G__12051;
continue;
}
} else {
}
}
break;
}

return frag;
});
/**
* returns and dom from the cache and symbol used to scope the ids
*/
enfocus.core.get_cached_dom = (function get_cached_dom(uri){
var nod = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,uri);
if(cljs.core.truth_(nod)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,nod),enfocus.core.html_to_dom.call(null,cljs.core.second.call(null,nod))], null);
} else {
return null;
}
});
/**
* returns the cached snippet or creates one and adds it to the cache if needed
*/
enfocus.core.get_cached_snippet = (function get_cached_snippet(uri,sel){
var sel_str = enfocus.core.create_sel_str.call(null,sel);
var cache = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,[cljs.core.str(uri),cljs.core.str(sel_str)].join(''));
if(cljs.core.truth_(cache)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,cache),enfocus.core.html_to_dom.call(null,cljs.core.second.call(null,cache))], null);
} else {
var vec__12054 = enfocus.core.get_cached_dom.call(null,uri);
var sym = cljs.core.nth.call(null,vec__12054,(0),null);
var tdom = cljs.core.nth.call(null,vec__12054,(1),null);
var dom = enfocus.core.create_hidden_dom.call(null,tdom);
var tsnip = domina.nodes.call(null,enfocus.core.css_select.call(null,sym,dom,sel));
var html_snip = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__12054,sym,tdom,dom,tsnip,sel_str,cache){
return (function (p1__12052_SHARP_){
return p1__12052_SHARP_.outerHTML;
});})(vec__12054,sym,tdom,dom,tsnip,sel_str,cache))
,tsnip));
enfocus.core.remove_node_return_child.call(null,dom);

cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,[cljs.core.str(uri),cljs.core.str(sel_str)].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,html_snip], null));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,enfocus.core.html_to_dom.call(null,html_snip)], null);
}
});
/**
* wrapper function for extractors that maps the extraction to
* all nodes returned by the selector
*/
enfocus.core.extr_multi_node = (function() {
var extr_multi_node = null;
var extr_multi_node__1 = (function (func){
return extr_multi_node.call(null,func,null);
});
var extr_multi_node__2 = (function (func,filt){
var trans = (function trans(pnodes,chain){
var pnod_col = enfocus.core.nodes__GT_coll.call(null,pnodes);
var result = cljs.core.map.call(null,func,pnod_col);
var result__$1 = (cljs.core.truth_(filt)?cljs.core.filter.call(null,filt,result):result);
if((cljs.core.count.call(null,result__$1) <= (1))){
return cljs.core.first.call(null,result__$1);
} else {
return result__$1;
}
});
if(typeof enfocus.core.t12059 !== 'undefined'){
} else {

/**
* @constructor
*/
enfocus.core.t12059 = (function (trans,filt,func,extr_multi_node,meta12060){
this.trans = trans;
this.filt = filt;
this.func = func;
this.extr_multi_node = extr_multi_node;
this.meta12060 = meta12060;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t12059.prototype.call = ((function (trans){
return (function() {
var G__12063 = null;
var G__12063__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,null);
});
var G__12063__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,chain);
});
G__12063 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__12063__2.call(this,self__,nodes);
case 3:
return G__12063__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12063.cljs$core$IFn$_invoke$arity$2 = G__12063__2;
G__12063.cljs$core$IFn$_invoke$arity$3 = G__12063__3;
return G__12063;
})()
;})(trans))
;

enfocus.core.t12059.prototype.apply = ((function (trans){
return (function (self__,args12062){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args12062)));
});})(trans))
;

enfocus.core.t12059.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t12059.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t12059.prototype.enfocus$core$ITransform$ = true;

enfocus.core.t12059.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t12059.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t12059.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_12061){
var self__ = this;
var _12061__$1 = this;
return self__.meta12060;
});})(trans))
;

enfocus.core.t12059.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_12061,meta12060__$1){
var self__ = this;
var _12061__$1 = this;
return (new enfocus.core.t12059(self__.trans,self__.filt,self__.func,self__.extr_multi_node,meta12060__$1));
});})(trans))
;

enfocus.core.t12059.cljs$lang$type = true;

enfocus.core.t12059.cljs$lang$ctorStr = "enfocus.core/t12059";

enfocus.core.t12059.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__4384__auto__,writer__4385__auto__,opt__4386__auto__){
return cljs.core._write.call(null,writer__4385__auto__,"enfocus.core/t12059");
});})(trans))
;

enfocus.core.__GT_t12059 = ((function (trans){
return (function __GT_t12059(trans__$1,filt__$1,func__$1,extr_multi_node__$1,meta12060){
return (new enfocus.core.t12059(trans__$1,filt__$1,func__$1,extr_multi_node__$1,meta12060));
});})(trans))
;

}

return (new enfocus.core.t12059(trans,filt,func,extr_multi_node,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),56,new cljs.core.Keyword(null,"end-line","end-line",1837326455),237,new cljs.core.Keyword(null,"column","column",2078222095),8,new cljs.core.Keyword(null,"line","line",212345235),231,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/blischalk/node-webkit-apps/hoard/target/base+system+user+dev/cljsbuild-compiler-0/enfocus/core.cljs"], null)));
});
extr_multi_node = function(func,filt){
switch(arguments.length){
case 1:
return extr_multi_node__1.call(this,func);
case 2:
return extr_multi_node__2.call(this,func,filt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
extr_multi_node.cljs$core$IFn$_invoke$arity$1 = extr_multi_node__1;
extr_multi_node.cljs$core$IFn$_invoke$arity$2 = extr_multi_node__2;
return extr_multi_node;
})()
;
/**
* Allows standard domina functions to be chainable
*/
enfocus.core.multi_node_chain = (function() {
var multi_node_chain = null;
var multi_node_chain__1 = (function (func){
var trans = (function (nodes,chain){
var val = func.call(null,nodes);
if(cljs.core.truth_(chain)){
return enfocus.core.apply_transform.call(null,chain,nodes);
} else {
return val;
}
});
if(typeof enfocus.core.t12073 !== 'undefined'){
} else {

/**
* @constructor
*/
enfocus.core.t12073 = (function (trans,func,multi_node_chain,meta12074){
this.trans = trans;
this.func = func;
this.multi_node_chain = multi_node_chain;
this.meta12074 = meta12074;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t12073.prototype.call = ((function (trans){
return (function() {
var G__12081 = null;
var G__12081__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,null);
});
var G__12081__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,chain);
});
G__12081 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__12081__2.call(this,self__,nodes);
case 3:
return G__12081__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12081.cljs$core$IFn$_invoke$arity$2 = G__12081__2;
G__12081.cljs$core$IFn$_invoke$arity$3 = G__12081__3;
return G__12081;
})()
;})(trans))
;

enfocus.core.t12073.prototype.apply = ((function (trans){
return (function (self__,args12076){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args12076)));
});})(trans))
;

enfocus.core.t12073.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t12073.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t12073.prototype.enfocus$core$ITransform$ = true;

enfocus.core.t12073.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t12073.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t12073.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_12075){
var self__ = this;
var _12075__$1 = this;
return self__.meta12074;
});})(trans))
;

enfocus.core.t12073.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_12075,meta12074__$1){
var self__ = this;
var _12075__$1 = this;
return (new enfocus.core.t12073(self__.trans,self__.func,self__.multi_node_chain,meta12074__$1));
});})(trans))
;

enfocus.core.t12073.cljs$lang$type = true;

enfocus.core.t12073.cljs$lang$ctorStr = "enfocus.core/t12073";

enfocus.core.t12073.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__4384__auto__,writer__4385__auto__,opt__4386__auto__){
return cljs.core._write.call(null,writer__4385__auto__,"enfocus.core/t12073");
});})(trans))
;

enfocus.core.__GT_t12073 = ((function (trans){
return (function __GT_t12073(trans__$1,func__$1,multi_node_chain__$1,meta12074){
return (new enfocus.core.t12073(trans__$1,func__$1,multi_node_chain__$1,meta12074));
});})(trans))
;

}

return (new enfocus.core.t12073(trans,func,multi_node_chain,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),56,new cljs.core.Keyword(null,"end-line","end-line",1837326455),252,new cljs.core.Keyword(null,"column","column",2078222095),8,new cljs.core.Keyword(null,"line","line",212345235),246,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/blischalk/node-webkit-apps/hoard/target/base+system+user+dev/cljsbuild-compiler-0/enfocus/core.cljs"], null)));
});
var multi_node_chain__2 = (function (values,func){
var trans = (function (nodes,chain){
var vnodes = cljs.core.mapcat.call(null,(function (p1__12064_SHARP_){
return domina.nodes.call(null,p1__12064_SHARP_);
}),values);
var val = func.call(null,nodes,vnodes);
if(cljs.core.truth_(chain)){
return enfocus.core.apply_transform.call(null,chain,nodes);
} else {
return val;
}
});
if(typeof enfocus.core.t12077 !== 'undefined'){
} else {

/**
* @constructor
*/
enfocus.core.t12077 = (function (trans,func,values,multi_node_chain,meta12078){
this.trans = trans;
this.func = func;
this.values = values;
this.multi_node_chain = multi_node_chain;
this.meta12078 = meta12078;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t12077.prototype.call = ((function (trans){
return (function() {
var G__12082 = null;
var G__12082__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,null);
});
var G__12082__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,chain);
});
G__12082 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__12082__2.call(this,self__,nodes);
case 3:
return G__12082__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12082.cljs$core$IFn$_invoke$arity$2 = G__12082__2;
G__12082.cljs$core$IFn$_invoke$arity$3 = G__12082__3;
return G__12082;
})()
;})(trans))
;

enfocus.core.t12077.prototype.apply = ((function (trans){
return (function (self__,args12080){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args12080)));
});})(trans))
;

enfocus.core.t12077.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t12077.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t12077.prototype.enfocus$core$ITransform$ = true;

enfocus.core.t12077.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t12077.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t12077.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_12079){
var self__ = this;
var _12079__$1 = this;
return self__.meta12078;
});})(trans))
;

enfocus.core.t12077.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_12079,meta12078__$1){
var self__ = this;
var _12079__$1 = this;
return (new enfocus.core.t12077(self__.trans,self__.func,self__.values,self__.multi_node_chain,meta12078__$1));
});})(trans))
;

enfocus.core.t12077.cljs$lang$type = true;

enfocus.core.t12077.cljs$lang$ctorStr = "enfocus.core/t12077";

enfocus.core.t12077.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__4384__auto__,writer__4385__auto__,opt__4386__auto__){
return cljs.core._write.call(null,writer__4385__auto__,"enfocus.core/t12077");
});})(trans))
;

enfocus.core.__GT_t12077 = ((function (trans){
return (function __GT_t12077(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta12078){
return (new enfocus.core.t12077(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta12078));
});})(trans))
;

}

return (new enfocus.core.t12077(trans,func,values,multi_node_chain,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),56,new cljs.core.Keyword(null,"end-line","end-line",1837326455),264,new cljs.core.Keyword(null,"column","column",2078222095),8,new cljs.core.Keyword(null,"line","line",212345235),258,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/blischalk/node-webkit-apps/hoard/target/base+system+user+dev/cljsbuild-compiler-0/enfocus/core.cljs"], null)));
});
multi_node_chain = function(values,func){
switch(arguments.length){
case 1:
return multi_node_chain__1.call(this,values);
case 2:
return multi_node_chain__2.call(this,values,func);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
multi_node_chain.cljs$core$IFn$_invoke$arity$1 = multi_node_chain__1;
multi_node_chain.cljs$core$IFn$_invoke$arity$2 = multi_node_chain__2;
return multi_node_chain;
})()
;
/**
* Replaces the content of the element. Values can be nodes or collection of nodes.
* @param {...*} var_args
*/
enfocus.core.content = (function() { 
var content__delegate = function (values){
return enfocus.core.multi_node_chain.call(null,values,(function (p1__12083_SHARP_,p2__12084_SHARP_){
domina.destroy_children_BANG_.call(null,p1__12083_SHARP_);

return domina.append_BANG_.call(null,p1__12083_SHARP_,p2__12084_SHARP_);
}));
};
var content = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__12085__i = 0, G__12085__a = new Array(arguments.length -  0);
while (G__12085__i < G__12085__a.length) {G__12085__a[G__12085__i] = arguments[G__12085__i + 0]; ++G__12085__i;}
  values = new cljs.core.IndexedSeq(G__12085__a,0);
} 
return content__delegate.call(this,values);};
content.cljs$lang$maxFixedArity = 0;
content.cljs$lang$applyTo = (function (arglist__12086){
var values = cljs.core.seq(arglist__12086);
return content__delegate(values);
});
content.cljs$core$IFn$_invoke$arity$variadic = content__delegate;
return content;
})()
;
/**
* Replaces the content of the element with the dom structure represented by the html string passed
*/
enfocus.core.html_content = (function html_content(txt){
return enfocus.core.multi_node_chain.call(null,(function (p1__12087_SHARP_){
return domina.set_html_BANG_.call(null,p1__12087_SHARP_,txt);
}));
});
/**
* Assocs attributes and values on the selected element.
* @param {...*} var_args
*/
enfocus.core.set_attr = (function() { 
var set_attr__delegate = function (values){
var pairs = cljs.core.partition.call(null,(2),values);
return enfocus.core.multi_node_chain.call(null,((function (pairs){
return (function (p1__12088_SHARP_){
var seq__12095 = cljs.core.seq.call(null,pairs);
var chunk__12096 = null;
var count__12097 = (0);
var i__12098 = (0);
while(true){
if((i__12098 < count__12097)){
var vec__12099 = cljs.core._nth.call(null,chunk__12096,i__12098);
var name = cljs.core.nth.call(null,vec__12099,(0),null);
var value = cljs.core.nth.call(null,vec__12099,(1),null);
domina.set_attr_BANG_.call(null,p1__12088_SHARP_,name,value);

var G__12101 = seq__12095;
var G__12102 = chunk__12096;
var G__12103 = count__12097;
var G__12104 = (i__12098 + (1));
seq__12095 = G__12101;
chunk__12096 = G__12102;
count__12097 = G__12103;
i__12098 = G__12104;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12095);
if(temp__4126__auto__){
var seq__12095__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12095__$1)){
var c__4584__auto__ = cljs.core.chunk_first.call(null,seq__12095__$1);
var G__12105 = cljs.core.chunk_rest.call(null,seq__12095__$1);
var G__12106 = c__4584__auto__;
var G__12107 = cljs.core.count.call(null,c__4584__auto__);
var G__12108 = (0);
seq__12095 = G__12105;
chunk__12096 = G__12106;
count__12097 = G__12107;
i__12098 = G__12108;
continue;
} else {
var vec__12100 = cljs.core.first.call(null,seq__12095__$1);
var name = cljs.core.nth.call(null,vec__12100,(0),null);
var value = cljs.core.nth.call(null,vec__12100,(1),null);
domina.set_attr_BANG_.call(null,p1__12088_SHARP_,name,value);

var G__12109 = cljs.core.next.call(null,seq__12095__$1);
var G__12110 = null;
var G__12111 = (0);
var G__12112 = (0);
seq__12095 = G__12109;
chunk__12096 = G__12110;
count__12097 = G__12111;
i__12098 = G__12112;
continue;
}
} else {
return null;
}
}
break;
}
});})(pairs))
);
};
var set_attr = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__12113__i = 0, G__12113__a = new Array(arguments.length -  0);
while (G__12113__i < G__12113__a.length) {G__12113__a[G__12113__i] = arguments[G__12113__i + 0]; ++G__12113__i;}
  values = new cljs.core.IndexedSeq(G__12113__a,0);
} 
return set_attr__delegate.call(this,values);};
set_attr.cljs$lang$maxFixedArity = 0;
set_attr.cljs$lang$applyTo = (function (arglist__12114){
var values = cljs.core.seq(arglist__12114);
return set_attr__delegate(values);
});
set_attr.cljs$core$IFn$_invoke$arity$variadic = set_attr__delegate;
return set_attr;
})()
;
/**
* Dissocs attributes on the selected element.
* @param {...*} var_args
*/
enfocus.core.remove_attr = (function() { 
var remove_attr__delegate = function (values){
return enfocus.core.multi_node_chain.call(null,(function (p1__12115_SHARP_){
var seq__12120 = cljs.core.seq.call(null,values);
var chunk__12121 = null;
var count__12122 = (0);
var i__12123 = (0);
while(true){
if((i__12123 < count__12122)){
var name = cljs.core._nth.call(null,chunk__12121,i__12123);
domina.remove_attr_BANG_.call(null,p1__12115_SHARP_,name);

var G__12124 = seq__12120;
var G__12125 = chunk__12121;
var G__12126 = count__12122;
var G__12127 = (i__12123 + (1));
seq__12120 = G__12124;
chunk__12121 = G__12125;
count__12122 = G__12126;
i__12123 = G__12127;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12120);
if(temp__4126__auto__){
var seq__12120__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12120__$1)){
var c__4584__auto__ = cljs.core.chunk_first.call(null,seq__12120__$1);
var G__12128 = cljs.core.chunk_rest.call(null,seq__12120__$1);
var G__12129 = c__4584__auto__;
var G__12130 = cljs.core.count.call(null,c__4584__auto__);
var G__12131 = (0);
seq__12120 = G__12128;
chunk__12121 = G__12129;
count__12122 = G__12130;
i__12123 = G__12131;
continue;
} else {
var name = cljs.core.first.call(null,seq__12120__$1);
domina.remove_attr_BANG_.call(null,p1__12115_SHARP_,name);

var G__12132 = cljs.core.next.call(null,seq__12120__$1);
var G__12133 = null;
var G__12134 = (0);
var G__12135 = (0);
seq__12120 = G__12132;
chunk__12121 = G__12133;
count__12122 = G__12134;
i__12123 = G__12135;
continue;
}
} else {
return null;
}
}
break;
}
}));
};
var remove_attr = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__12136__i = 0, G__12136__a = new Array(arguments.length -  0);
while (G__12136__i < G__12136__a.length) {G__12136__a[G__12136__i] = arguments[G__12136__i + 0]; ++G__12136__i;}
  values = new cljs.core.IndexedSeq(G__12136__a,0);
} 
return remove_attr__delegate.call(this,values);};
remove_attr.cljs$lang$maxFixedArity = 0;
remove_attr.cljs$lang$applyTo = (function (arglist__12137){
var values = cljs.core.seq(arglist__12137);
return remove_attr__delegate(values);
});
remove_attr.cljs$core$IFn$_invoke$arity$variadic = remove_attr__delegate;
return remove_attr;
})()
;
/**
* @param {...*} var_args
*/
enfocus.core.set_prop = (function() { 
var set_prop__delegate = function (forms){
return (function (node){
var h = cljs.core.mapcat.call(null,(function (p__12140){
var vec__12141 = p__12140;
var n = cljs.core.nth.call(null,vec__12141,(0),null);
var v = cljs.core.nth.call(null,vec__12141,(1),null);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,v),cljs.core.name.call(null,n));
}),cljs.core.partition.call(null,(2),forms));
return goog.dom.setProperties(node,cljs.core.apply.call(null,cljs.core.js_obj,h));
});
};
var set_prop = function (var_args){
var forms = null;
if (arguments.length > 0) {
var G__12142__i = 0, G__12142__a = new Array(arguments.length -  0);
while (G__12142__i < G__12142__a.length) {G__12142__a[G__12142__i] = arguments[G__12142__i + 0]; ++G__12142__i;}
  forms = new cljs.core.IndexedSeq(G__12142__a,0);
} 
return set_prop__delegate.call(this,forms);};
set_prop.cljs$lang$maxFixedArity = 0;
set_prop.cljs$lang$applyTo = (function (arglist__12143){
var forms = cljs.core.seq(arglist__12143);
return set_prop__delegate(forms);
});
set_prop.cljs$core$IFn$_invoke$arity$variadic = set_prop__delegate;
return set_prop;
})()
;
/**
* returns true if the element has a given class
*/
enfocus.core.has_class = (function has_class(el,cls){
return goog.dom.classes.hasClass(el,cls);
});
/**
* Adds the specified classes to the selected element.
* @param {...*} var_args
*/
enfocus.core.add_class = (function() { 
var add_class__delegate = function (values){
return enfocus.core.multi_node_chain.call(null,(function (p1__12144_SHARP_){
var seq__12149 = cljs.core.seq.call(null,values);
var chunk__12150 = null;
var count__12151 = (0);
var i__12152 = (0);
while(true){
if((i__12152 < count__12151)){
var val = cljs.core._nth.call(null,chunk__12150,i__12152);
domina.add_class_BANG_.call(null,p1__12144_SHARP_,val);

var G__12153 = seq__12149;
var G__12154 = chunk__12150;
var G__12155 = count__12151;
var G__12156 = (i__12152 + (1));
seq__12149 = G__12153;
chunk__12150 = G__12154;
count__12151 = G__12155;
i__12152 = G__12156;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12149);
if(temp__4126__auto__){
var seq__12149__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12149__$1)){
var c__4584__auto__ = cljs.core.chunk_first.call(null,seq__12149__$1);
var G__12157 = cljs.core.chunk_rest.call(null,seq__12149__$1);
var G__12158 = c__4584__auto__;
var G__12159 = cljs.core.count.call(null,c__4584__auto__);
var G__12160 = (0);
seq__12149 = G__12157;
chunk__12150 = G__12158;
count__12151 = G__12159;
i__12152 = G__12160;
continue;
} else {
var val = cljs.core.first.call(null,seq__12149__$1);
domina.add_class_BANG_.call(null,p1__12144_SHARP_,val);

var G__12161 = cljs.core.next.call(null,seq__12149__$1);
var G__12162 = null;
var G__12163 = (0);
var G__12164 = (0);
seq__12149 = G__12161;
chunk__12150 = G__12162;
count__12151 = G__12163;
i__12152 = G__12164;
continue;
}
} else {
return null;
}
}
break;
}
}));
};
var add_class = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__12165__i = 0, G__12165__a = new Array(arguments.length -  0);
while (G__12165__i < G__12165__a.length) {G__12165__a[G__12165__i] = arguments[G__12165__i + 0]; ++G__12165__i;}
  values = new cljs.core.IndexedSeq(G__12165__a,0);
} 
return add_class__delegate.call(this,values);};
add_class.cljs$lang$maxFixedArity = 0;
add_class.cljs$lang$applyTo = (function (arglist__12166){
var values = cljs.core.seq(arglist__12166);
return add_class__delegate(values);
});
add_class.cljs$core$IFn$_invoke$arity$variadic = add_class__delegate;
return add_class;
})()
;
/**
* Removes the specified classes from the selected element.
* @param {...*} var_args
*/
enfocus.core.remove_class = (function() { 
var remove_class__delegate = function (values){
return enfocus.core.multi_node_chain.call(null,(function (p1__12167_SHARP_){
var seq__12172 = cljs.core.seq.call(null,values);
var chunk__12173 = null;
var count__12174 = (0);
var i__12175 = (0);
while(true){
if((i__12175 < count__12174)){
var val = cljs.core._nth.call(null,chunk__12173,i__12175);
domina.remove_class_BANG_.call(null,p1__12167_SHARP_,val);

var G__12176 = seq__12172;
var G__12177 = chunk__12173;
var G__12178 = count__12174;
var G__12179 = (i__12175 + (1));
seq__12172 = G__12176;
chunk__12173 = G__12177;
count__12174 = G__12178;
i__12175 = G__12179;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12172);
if(temp__4126__auto__){
var seq__12172__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12172__$1)){
var c__4584__auto__ = cljs.core.chunk_first.call(null,seq__12172__$1);
var G__12180 = cljs.core.chunk_rest.call(null,seq__12172__$1);
var G__12181 = c__4584__auto__;
var G__12182 = cljs.core.count.call(null,c__4584__auto__);
var G__12183 = (0);
seq__12172 = G__12180;
chunk__12173 = G__12181;
count__12174 = G__12182;
i__12175 = G__12183;
continue;
} else {
var val = cljs.core.first.call(null,seq__12172__$1);
domina.remove_class_BANG_.call(null,p1__12167_SHARP_,val);

var G__12184 = cljs.core.next.call(null,seq__12172__$1);
var G__12185 = null;
var G__12186 = (0);
var G__12187 = (0);
seq__12172 = G__12184;
chunk__12173 = G__12185;
count__12174 = G__12186;
i__12175 = G__12187;
continue;
}
} else {
return null;
}
}
break;
}
}));
};
var remove_class = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__12188__i = 0, G__12188__a = new Array(arguments.length -  0);
while (G__12188__i < G__12188__a.length) {G__12188__a[G__12188__i] = arguments[G__12188__i + 0]; ++G__12188__i;}
  values = new cljs.core.IndexedSeq(G__12188__a,0);
} 
return remove_class__delegate.call(this,values);};
remove_class.cljs$lang$maxFixedArity = 0;
remove_class.cljs$lang$applyTo = (function (arglist__12189){
var values = cljs.core.seq(arglist__12189);
return remove_class__delegate(values);
});
remove_class.cljs$core$IFn$_invoke$arity$variadic = remove_class__delegate;
return remove_class;
})()
;
/**
* Sets the specified classes on the selected element
* @param {...*} var_args
*/
enfocus.core.set_class = (function() { 
var set_class__delegate = function (values){
return enfocus.core.multi_node_chain.call(null,(function (p1__12190_SHARP_){
return domina.set_classes_BANG_.call(null,p1__12190_SHARP_,values);
}));
};
var set_class = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__12191__i = 0, G__12191__a = new Array(arguments.length -  0);
while (G__12191__i < G__12191__a.length) {G__12191__a[G__12191__i] = arguments[G__12191__i + 0]; ++G__12191__i;}
  values = new cljs.core.IndexedSeq(G__12191__a,0);
} 
return set_class__delegate.call(this,values);};
set_class.cljs$lang$maxFixedArity = 0;
set_class.cljs$lang$applyTo = (function (arglist__12192){
var values = cljs.core.seq(arglist__12192);
return set_class__delegate(values);
});
set_class.cljs$core$IFn$_invoke$arity$variadic = set_class__delegate;
return set_class;
})()
;
/**
* @param {...*} var_args
*/
enfocus.core.do__GT_ = (function() { 
var do__GT___delegate = function (forms){

return (function (pnod){
var seq__12197 = cljs.core.seq.call(null,forms);
var chunk__12198 = null;
var count__12199 = (0);
var i__12200 = (0);
while(true){
if((i__12200 < count__12199)){
var fun = cljs.core._nth.call(null,chunk__12198,i__12200);
enfocus.core.apply_transform.call(null,fun,pnod);

var G__12201 = seq__12197;
var G__12202 = chunk__12198;
var G__12203 = count__12199;
var G__12204 = (i__12200 + (1));
seq__12197 = G__12201;
chunk__12198 = G__12202;
count__12199 = G__12203;
i__12200 = G__12204;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12197);
if(temp__4126__auto__){
var seq__12197__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12197__$1)){
var c__4584__auto__ = cljs.core.chunk_first.call(null,seq__12197__$1);
var G__12205 = cljs.core.chunk_rest.call(null,seq__12197__$1);
var G__12206 = c__4584__auto__;
var G__12207 = cljs.core.count.call(null,c__4584__auto__);
var G__12208 = (0);
seq__12197 = G__12205;
chunk__12198 = G__12206;
count__12199 = G__12207;
i__12200 = G__12208;
continue;
} else {
var fun = cljs.core.first.call(null,seq__12197__$1);
enfocus.core.apply_transform.call(null,fun,pnod);

var G__12209 = cljs.core.next.call(null,seq__12197__$1);
var G__12210 = null;
var G__12211 = (0);
var G__12212 = (0);
seq__12197 = G__12209;
chunk__12198 = G__12210;
count__12199 = G__12211;
i__12200 = G__12212;
continue;
}
} else {
return null;
}
}
break;
}
});
};
var do__GT_ = function (var_args){
var forms = null;
if (arguments.length > 0) {
var G__12213__i = 0, G__12213__a = new Array(arguments.length -  0);
while (G__12213__i < G__12213__a.length) {G__12213__a[G__12213__i] = arguments[G__12213__i + 0]; ++G__12213__i;}
  forms = new cljs.core.IndexedSeq(G__12213__a,0);
} 
return do__GT___delegate.call(this,forms);};
do__GT_.cljs$lang$maxFixedArity = 0;
do__GT_.cljs$lang$applyTo = (function (arglist__12214){
var forms = cljs.core.seq(arglist__12214);
return do__GT___delegate(forms);
});
do__GT_.cljs$core$IFn$_invoke$arity$variadic = do__GT___delegate;
return do__GT_;
})()
;
/**
* Appends the content of the element. Values can be nodes or collection of nodes.
* @param {...*} var_args
*/
enfocus.core.append = (function() { 
var append__delegate = function (values){
return enfocus.core.multi_node_chain.call(null,values,(function (p1__12215_SHARP_,p2__12216_SHARP_){
return domina.append_BANG_.call(null,p1__12215_SHARP_,p2__12216_SHARP_);
}));
};
var append = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__12217__i = 0, G__12217__a = new Array(arguments.length -  0);
while (G__12217__i < G__12217__a.length) {G__12217__a[G__12217__i] = arguments[G__12217__i + 0]; ++G__12217__i;}
  values = new cljs.core.IndexedSeq(G__12217__a,0);
} 
return append__delegate.call(this,values);};
append.cljs$lang$maxFixedArity = 0;
append.cljs$lang$applyTo = (function (arglist__12218){
var values = cljs.core.seq(arglist__12218);
return append__delegate(values);
});
append.cljs$core$IFn$_invoke$arity$variadic = append__delegate;
return append;
})()
;
/**
* Prepends the content of the element. Values can be nodes or collection of nodes.
* @param {...*} var_args
*/
enfocus.core.prepend = (function() { 
var prepend__delegate = function (values){
return enfocus.core.multi_node_chain.call(null,values,(function (p1__12219_SHARP_,p2__12220_SHARP_){
return domina.prepend_BANG_.call(null,p1__12219_SHARP_,p2__12220_SHARP_);
}));
};
var prepend = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__12221__i = 0, G__12221__a = new Array(arguments.length -  0);
while (G__12221__i < G__12221__a.length) {G__12221__a[G__12221__i] = arguments[G__12221__i + 0]; ++G__12221__i;}
  values = new cljs.core.IndexedSeq(G__12221__a,0);
} 
return prepend__delegate.call(this,values);};
prepend.cljs$lang$maxFixedArity = 0;
prepend.cljs$lang$applyTo = (function (arglist__12222){
var values = cljs.core.seq(arglist__12222);
return prepend__delegate(values);
});
prepend.cljs$core$IFn$_invoke$arity$variadic = prepend__delegate;
return prepend;
})()
;
/**
* inserts the content before the selected node. Values can be nodes or collection of nodes
* @param {...*} var_args
*/
enfocus.core.before = (function() { 
var before__delegate = function (values){
return enfocus.core.multi_node_chain.call(null,values,(function (p1__12223_SHARP_,p2__12224_SHARP_){
return domina.insert_before_BANG_.call(null,p1__12223_SHARP_,p2__12224_SHARP_);
}));
};
var before = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__12225__i = 0, G__12225__a = new Array(arguments.length -  0);
while (G__12225__i < G__12225__a.length) {G__12225__a[G__12225__i] = arguments[G__12225__i + 0]; ++G__12225__i;}
  values = new cljs.core.IndexedSeq(G__12225__a,0);
} 
return before__delegate.call(this,values);};
before.cljs$lang$maxFixedArity = 0;
before.cljs$lang$applyTo = (function (arglist__12226){
var values = cljs.core.seq(arglist__12226);
return before__delegate(values);
});
before.cljs$core$IFn$_invoke$arity$variadic = before__delegate;
return before;
})()
;
/**
* inserts the content after the selected node. Values can be nodes or collection of nodes
* @param {...*} var_args
*/
enfocus.core.after = (function() { 
var after__delegate = function (values){
return enfocus.core.multi_node_chain.call(null,values,(function (p1__12227_SHARP_,p2__12228_SHARP_){
return domina.insert_after_BANG_.call(null,p1__12227_SHARP_,p2__12228_SHARP_);
}));
};
var after = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__12229__i = 0, G__12229__a = new Array(arguments.length -  0);
while (G__12229__i < G__12229__a.length) {G__12229__a[G__12229__i] = arguments[G__12229__i + 0]; ++G__12229__i;}
  values = new cljs.core.IndexedSeq(G__12229__a,0);
} 
return after__delegate.call(this,values);};
after.cljs$lang$maxFixedArity = 0;
after.cljs$lang$applyTo = (function (arglist__12230){
var values = cljs.core.seq(arglist__12230);
return after__delegate(values);
});
after.cljs$core$IFn$_invoke$arity$variadic = after__delegate;
return after;
})()
;
/**
* substitutes the content for the selected node. Values can be nodes or collection of nodes
* @param {...*} var_args
*/
enfocus.core.substitute = (function() { 
var substitute__delegate = function (values){
return enfocus.core.multi_node_chain.call(null,values,(function (p1__12231_SHARP_,p2__12232_SHARP_){
return domina.swap_content_BANG_.call(null,p1__12231_SHARP_,p2__12232_SHARP_);
}));
};
var substitute = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__12233__i = 0, G__12233__a = new Array(arguments.length -  0);
while (G__12233__i < G__12233__a.length) {G__12233__a[G__12233__i] = arguments[G__12233__i + 0]; ++G__12233__i;}
  values = new cljs.core.IndexedSeq(G__12233__a,0);
} 
return substitute__delegate.call(this,values);};
substitute.cljs$lang$maxFixedArity = 0;
substitute.cljs$lang$applyTo = (function (arglist__12234){
var values = cljs.core.seq(arglist__12234);
return substitute__delegate(values);
});
substitute.cljs$core$IFn$_invoke$arity$variadic = substitute__delegate;
return substitute;
})()
;
/**
* removes the selected nodes from the dom
*/
enfocus.core.remove_node = (function remove_node(){
return enfocus.core.multi_node_chain.call(null,(function (p1__12235_SHARP_){
return domina.detach_BANG_.call(null,p1__12235_SHARP_);
}));
});
/**
* wrap and element in a new element defined as :div {:class 'temp'}
*/
enfocus.core.wrap = (function wrap(elm,mattr){
return (function (pnod){
var elem = goog.dom.createElement(cljs.core.name.call(null,elm));
enfocus.core.add_map_attrs.call(null,elem,mattr);

enfocus.core.at.call(null,elem,enfocus.core.content.call(null,pnod.cloneNode(true)));

return enfocus.core.at.call(null,pnod,enfocus.core.do__GT_.call(null,enfocus.core.after.call(null,elem),enfocus.core.remove_node.call(null)));
});
});
/**
* replaces a node with all its children
*/
enfocus.core.unwrap = (function unwrap(){
return (function (pnod){
var frag = document.createDocumentFragment();
goog.dom.append(frag,pnod.childNodes);

return goog.dom.replaceNode(frag,pnod);
});
});
/**
* set a list of style elements from the selected nodes
* @param {...*} var_args
*/
enfocus.core.set_style = (function() { 
var set_style__delegate = function (values){
var pairs = cljs.core.partition.call(null,(2),values);
return enfocus.core.multi_node_chain.call(null,((function (pairs){
return (function (p1__12236_SHARP_){
var seq__12243 = cljs.core.seq.call(null,pairs);
var chunk__12244 = null;
var count__12245 = (0);
var i__12246 = (0);
while(true){
if((i__12246 < count__12245)){
var vec__12247 = cljs.core._nth.call(null,chunk__12244,i__12246);
var name = cljs.core.nth.call(null,vec__12247,(0),null);
var value = cljs.core.nth.call(null,vec__12247,(1),null);
domina.set_style_BANG_.call(null,p1__12236_SHARP_,name,value);

var G__12249 = seq__12243;
var G__12250 = chunk__12244;
var G__12251 = count__12245;
var G__12252 = (i__12246 + (1));
seq__12243 = G__12249;
chunk__12244 = G__12250;
count__12245 = G__12251;
i__12246 = G__12252;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12243);
if(temp__4126__auto__){
var seq__12243__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12243__$1)){
var c__4584__auto__ = cljs.core.chunk_first.call(null,seq__12243__$1);
var G__12253 = cljs.core.chunk_rest.call(null,seq__12243__$1);
var G__12254 = c__4584__auto__;
var G__12255 = cljs.core.count.call(null,c__4584__auto__);
var G__12256 = (0);
seq__12243 = G__12253;
chunk__12244 = G__12254;
count__12245 = G__12255;
i__12246 = G__12256;
continue;
} else {
var vec__12248 = cljs.core.first.call(null,seq__12243__$1);
var name = cljs.core.nth.call(null,vec__12248,(0),null);
var value = cljs.core.nth.call(null,vec__12248,(1),null);
domina.set_style_BANG_.call(null,p1__12236_SHARP_,name,value);

var G__12257 = cljs.core.next.call(null,seq__12243__$1);
var G__12258 = null;
var G__12259 = (0);
var G__12260 = (0);
seq__12243 = G__12257;
chunk__12244 = G__12258;
count__12245 = G__12259;
i__12246 = G__12260;
continue;
}
} else {
return null;
}
}
break;
}
});})(pairs))
);
};
var set_style = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__12261__i = 0, G__12261__a = new Array(arguments.length -  0);
while (G__12261__i < G__12261__a.length) {G__12261__a[G__12261__i] = arguments[G__12261__i + 0]; ++G__12261__i;}
  values = new cljs.core.IndexedSeq(G__12261__a,0);
} 
return set_style__delegate.call(this,values);};
set_style.cljs$lang$maxFixedArity = 0;
set_style.cljs$lang$applyTo = (function (arglist__12262){
var values = cljs.core.seq(arglist__12262);
return set_style__delegate(values);
});
set_style.cljs$core$IFn$_invoke$arity$variadic = set_style__delegate;
return set_style;
})()
;
/**
* remove a list style elements from the selected nodes. note: you can only remove styles that are inline
* @param {...*} var_args
*/
enfocus.core.remove_style = (function() { 
var remove_style__delegate = function (values){
return (function (pnod){
return enfocus.core.style_remove.call(null,pnod,values);
});
};
var remove_style = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__12263__i = 0, G__12263__a = new Array(arguments.length -  0);
while (G__12263__i < G__12263__a.length) {G__12263__a[G__12263__i] = arguments[G__12263__i + 0]; ++G__12263__i;}
  values = new cljs.core.IndexedSeq(G__12263__a,0);
} 
return remove_style__delegate.call(this,values);};
remove_style.cljs$lang$maxFixedArity = 0;
remove_style.cljs$lang$applyTo = (function (arglist__12264){
var values = cljs.core.seq(arglist__12264);
return remove_style__delegate(values);
});
remove_style.cljs$core$IFn$_invoke$arity$variadic = remove_style__delegate;
return remove_style;
})()
;
/**
* calls the focus function on the selected node
*/
enfocus.core.focus = (function focus(){
return (function (node){
return node.focus();
});
});
/**
* calls the blur function on the selected node
*/
enfocus.core.blur = (function blur(){
return (function (node){
return node.blur();
});
});
/**
* addes key value pair of data to the selected nodes. Only use clojure data structures when setting
*/
enfocus.core.set_data = (function set_data(ky,val){
return enfocus.core.multi_node_chain.call(null,(function (p1__12265_SHARP_){
return domina.set_data_BANG_.call(null,p1__12265_SHARP_,ky,val);
}));
});
/**
* delays and action by a set timeout, note this is an async operations
* @param {...*} var_args
*/
enfocus.core.delay = (function() { 
var delay__delegate = function (ttime,funcs){
return (function (pnod){
return enfocus.core.setTimeout.call(null,(function (){
return cljs.core.apply.call(null,enfocus.core.at,pnod,funcs);
}),ttime);
});
};
var delay = function (ttime,var_args){
var funcs = null;
if (arguments.length > 1) {
var G__12266__i = 0, G__12266__a = new Array(arguments.length -  1);
while (G__12266__i < G__12266__a.length) {G__12266__a[G__12266__i] = arguments[G__12266__i + 1]; ++G__12266__i;}
  funcs = new cljs.core.IndexedSeq(G__12266__a,0);
} 
return delay__delegate.call(this,ttime,funcs);};
delay.cljs$lang$maxFixedArity = 1;
delay.cljs$lang$applyTo = (function (arglist__12267){
var ttime = cljs.core.first(arglist__12267);
var funcs = cljs.core.rest(arglist__12267);
return delay__delegate(ttime,funcs);
});
delay.cljs$core$IFn$_invoke$arity$variadic = delay__delegate;
return delay;
})()
;
/**
* replaces entries like the following ${var1} in attributes and text
*/
enfocus.core.replace_vars = (function replace_vars(vars){
var rep_str = (function rep_str(text){
return clojure.string.replace.call(null,text,/\$\{\s*(\S+)\s*}/,(function (p1__12269_SHARP_,p2__12268_SHARP_){
return vars.call(null,cljs.core.keyword.call(null,p2__12268_SHARP_));
}));
});
return (function rep_node(pnod){
if(cljs.core.truth_(pnod.attributes)){
var seq__12294_12302 = cljs.core.seq.call(null,cljs.core.range.call(null,pnod.attributes.length));
var chunk__12295_12303 = null;
var count__12296_12304 = (0);
var i__12297_12305 = (0);
while(true){
if((i__12297_12305 < count__12296_12304)){
var idx_12306 = cljs.core._nth.call(null,chunk__12295_12303,i__12297_12305);
var attr_12307 = pnod.attributes.item(idx_12306);
if(cljs.core.truth_(attr_12307.specified)){
attr_12307.value = rep_str.call(null,attr_12307.value);
} else {
}

var G__12308 = seq__12294_12302;
var G__12309 = chunk__12295_12303;
var G__12310 = count__12296_12304;
var G__12311 = (i__12297_12305 + (1));
seq__12294_12302 = G__12308;
chunk__12295_12303 = G__12309;
count__12296_12304 = G__12310;
i__12297_12305 = G__12311;
continue;
} else {
var temp__4126__auto___12312 = cljs.core.seq.call(null,seq__12294_12302);
if(temp__4126__auto___12312){
var seq__12294_12313__$1 = temp__4126__auto___12312;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12294_12313__$1)){
var c__4584__auto___12314 = cljs.core.chunk_first.call(null,seq__12294_12313__$1);
var G__12315 = cljs.core.chunk_rest.call(null,seq__12294_12313__$1);
var G__12316 = c__4584__auto___12314;
var G__12317 = cljs.core.count.call(null,c__4584__auto___12314);
var G__12318 = (0);
seq__12294_12302 = G__12315;
chunk__12295_12303 = G__12316;
count__12296_12304 = G__12317;
i__12297_12305 = G__12318;
continue;
} else {
var idx_12319 = cljs.core.first.call(null,seq__12294_12313__$1);
var attr_12320 = pnod.attributes.item(idx_12319);
if(cljs.core.truth_(attr_12320.specified)){
attr_12320.value = rep_str.call(null,attr_12320.value);
} else {
}

var G__12321 = cljs.core.next.call(null,seq__12294_12313__$1);
var G__12322 = null;
var G__12323 = (0);
var G__12324 = (0);
seq__12294_12302 = G__12321;
chunk__12295_12303 = G__12322;
count__12296_12304 = G__12323;
i__12297_12305 = G__12324;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core._EQ_.call(null,pnod.nodeType,(3))){
return pnod.nodeValue = rep_str.call(null,pnod.nodeValue);
} else {
var seq__12298 = cljs.core.seq.call(null,enfocus.core.nodes__GT_coll.call(null,pnod.childNodes));
var chunk__12299 = null;
var count__12300 = (0);
var i__12301 = (0);
while(true){
if((i__12301 < count__12300)){
var cnode = cljs.core._nth.call(null,chunk__12299,i__12301);
rep_node.call(null,cnode);

var G__12325 = seq__12298;
var G__12326 = chunk__12299;
var G__12327 = count__12300;
var G__12328 = (i__12301 + (1));
seq__12298 = G__12325;
chunk__12299 = G__12326;
count__12300 = G__12327;
i__12301 = G__12328;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12298);
if(temp__4126__auto__){
var seq__12298__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12298__$1)){
var c__4584__auto__ = cljs.core.chunk_first.call(null,seq__12298__$1);
var G__12329 = cljs.core.chunk_rest.call(null,seq__12298__$1);
var G__12330 = c__4584__auto__;
var G__12331 = cljs.core.count.call(null,c__4584__auto__);
var G__12332 = (0);
seq__12298 = G__12329;
chunk__12299 = G__12330;
count__12300 = G__12331;
i__12301 = G__12332;
continue;
} else {
var cnode = cljs.core.first.call(null,seq__12298__$1);
rep_node.call(null,cnode);

var G__12333 = cljs.core.next.call(null,seq__12298__$1);
var G__12334 = null;
var G__12335 = (0);
var G__12336 = (0);
seq__12298 = G__12333;
chunk__12299 = G__12334;
count__12300 = G__12335;
i__12301 = G__12336;
continue;
}
} else {
return null;
}
}
break;
}
}
});
});
enfocus.core.exists_in_QMARK_ = (function exists_in_QMARK_(col_or_val,val){
if(cljs.core.coll_QMARK_.call(null,col_or_val)){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([val], true),col_or_val);
} else {
return cljs.core._EQ_.call(null,col_or_val,val);
}
});
/**
* sets the value of a form input (text,select,checkbox,etc...)
* format (at node (set-form-input value))
*/
enfocus.core.set_form_input = (function set_form_input(val){
return (function (el){
if((cljs.core._EQ_.call(null,el.type,"checkbox")) || (cljs.core._EQ_.call(null,el.type,"radio"))){
return el.checked = enfocus.core.exists_in_QMARK_.call(null,val,el.value);
} else {
var nval = (((cljs.core.coll_QMARK_.call(null,val)) && (!(typeof val === 'string')))?cljs.core.vec.call(null,val):((cljs.core._EQ_.call(null,el.type,"select-multiple"))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [val], null):val));
return goog.dom.forms.setValue(el,cljs.core.clj__GT_js.call(null,nval));
}
});
});
/**
* sets the values of a form based on a map
* (set-form {:val1 'val' :val2 'val'})
*/
enfocus.core.set_form = (function set_form(value_map){
return (function (form_node){
if(cljs.core._EQ_.call(null,form_node.nodeName,"FORM")){
var seq__12341 = cljs.core.seq.call(null,cljs.core.range.call(null,form_node.length));
var chunk__12342 = null;
var count__12343 = (0);
var i__12344 = (0);
while(true){
if((i__12344 < count__12343)){
var idx = cljs.core._nth.call(null,chunk__12342,i__12344);
var el_12345 = (form_node.elements[idx]);
var ky_12346 = cljs.core.keyword.call(null,el_12345.name);
var val_12347 = ky_12346.call(null,value_map);
if(cljs.core.contains_QMARK_.call(null,value_map,ky_12346)){
var val_12348__$1 = (cljs.core.truth_(val_12347)?val_12347:"");
enfocus.core.set_form_input.call(null,val_12348__$1).call(null,el_12345);
} else {
}

var G__12349 = seq__12341;
var G__12350 = chunk__12342;
var G__12351 = count__12343;
var G__12352 = (i__12344 + (1));
seq__12341 = G__12349;
chunk__12342 = G__12350;
count__12343 = G__12351;
i__12344 = G__12352;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12341);
if(temp__4126__auto__){
var seq__12341__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12341__$1)){
var c__4584__auto__ = cljs.core.chunk_first.call(null,seq__12341__$1);
var G__12353 = cljs.core.chunk_rest.call(null,seq__12341__$1);
var G__12354 = c__4584__auto__;
var G__12355 = cljs.core.count.call(null,c__4584__auto__);
var G__12356 = (0);
seq__12341 = G__12353;
chunk__12342 = G__12354;
count__12343 = G__12355;
i__12344 = G__12356;
continue;
} else {
var idx = cljs.core.first.call(null,seq__12341__$1);
var el_12357 = (form_node.elements[idx]);
var ky_12358 = cljs.core.keyword.call(null,el_12357.name);
var val_12359 = ky_12358.call(null,value_map);
if(cljs.core.contains_QMARK_.call(null,value_map,ky_12358)){
var val_12360__$1 = (cljs.core.truth_(val_12359)?val_12359:"");
enfocus.core.set_form_input.call(null,val_12360__$1).call(null,el_12357);
} else {
}

var G__12361 = cljs.core.next.call(null,seq__12341__$1);
var G__12362 = null;
var G__12363 = (0);
var G__12364 = (0);
seq__12341 = G__12361;
chunk__12342 = G__12362;
count__12343 = G__12363;
i__12344 = G__12364;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
});
/**
* takes clojure data structure and emits a document element
*/
enfocus.core.html = (function html(node_spec){
if(typeof node_spec === 'string'){
return document.createTextNode(node_spec);
} else {
if(cljs.core.vector_QMARK_.call(null,node_spec)){
var vec__12374 = node_spec;
var tag = cljs.core.nth.call(null,vec__12374,(0),null);
var vec__12375 = cljs.core.nthnext.call(null,vec__12374,(1));
var m = cljs.core.nth.call(null,vec__12375,(0),null);
var ms = cljs.core.nthnext.call(null,vec__12375,(1));
var more = vec__12375;
var vec__12376 = cljs.core.name.call(null,tag).split(/(?=[#.])/);
var tag_name = cljs.core.nth.call(null,vec__12376,(0),null);
var segments = cljs.core.nthnext.call(null,vec__12376,(1));
var id = cljs.core.some.call(null,((function (vec__12374,tag,vec__12375,m,ms,more,vec__12376,tag_name,segments){
return (function (seg){
if(cljs.core._EQ_.call(null,"#",seg.charAt((0)))){
return cljs.core.subs.call(null,seg,(1));
} else {
return null;
}
});})(vec__12374,tag,vec__12375,m,ms,more,vec__12376,tag_name,segments))
,segments);
var classes = cljs.core.keep.call(null,((function (vec__12374,tag,vec__12375,m,ms,more,vec__12376,tag_name,segments,id){
return (function (seg){
if(cljs.core._EQ_.call(null,".",seg.charAt((0)))){
return cljs.core.subs.call(null,seg,(1));
} else {
return null;
}
});})(vec__12374,tag,vec__12375,m,ms,more,vec__12376,tag_name,segments,id))
,segments);
var attrs = ((cljs.core.map_QMARK_.call(null,m))?m:cljs.core.PersistentArrayMap.EMPTY);
var attrs__$1 = (cljs.core.truth_(id)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"id","id",-1388402092),id):attrs);
var attrs__$2 = ((!(cljs.core.empty_QMARK_.call(null,classes)))?cljs.core.assoc.call(null,attrs__$1,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",classes))):attrs__$1);
var content = cljs.core.flatten.call(null,cljs.core.map.call(null,html,((cljs.core.map_QMARK_.call(null,m))?ms:more)));
var node = document.createElement(tag_name);
var seq__12377_12383 = cljs.core.seq.call(null,attrs__$2);
var chunk__12378_12384 = null;
var count__12379_12385 = (0);
var i__12380_12386 = (0);
while(true){
if((i__12380_12386 < count__12379_12385)){
var vec__12381_12387 = cljs.core._nth.call(null,chunk__12378_12384,i__12380_12386);
var key_12388 = cljs.core.nth.call(null,vec__12381_12387,(0),null);
var val_12389 = cljs.core.nth.call(null,vec__12381_12387,(1),null);
node.setAttribute(cljs.core.name.call(null,key_12388),val_12389);

var G__12390 = seq__12377_12383;
var G__12391 = chunk__12378_12384;
var G__12392 = count__12379_12385;
var G__12393 = (i__12380_12386 + (1));
seq__12377_12383 = G__12390;
chunk__12378_12384 = G__12391;
count__12379_12385 = G__12392;
i__12380_12386 = G__12393;
continue;
} else {
var temp__4126__auto___12394 = cljs.core.seq.call(null,seq__12377_12383);
if(temp__4126__auto___12394){
var seq__12377_12395__$1 = temp__4126__auto___12394;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12377_12395__$1)){
var c__4584__auto___12396 = cljs.core.chunk_first.call(null,seq__12377_12395__$1);
var G__12397 = cljs.core.chunk_rest.call(null,seq__12377_12395__$1);
var G__12398 = c__4584__auto___12396;
var G__12399 = cljs.core.count.call(null,c__4584__auto___12396);
var G__12400 = (0);
seq__12377_12383 = G__12397;
chunk__12378_12384 = G__12398;
count__12379_12385 = G__12399;
i__12380_12386 = G__12400;
continue;
} else {
var vec__12382_12401 = cljs.core.first.call(null,seq__12377_12395__$1);
var key_12402 = cljs.core.nth.call(null,vec__12382_12401,(0),null);
var val_12403 = cljs.core.nth.call(null,vec__12382_12401,(1),null);
node.setAttribute(cljs.core.name.call(null,key_12402),val_12403);

var G__12404 = cljs.core.next.call(null,seq__12377_12395__$1);
var G__12405 = null;
var G__12406 = (0);
var G__12407 = (0);
seq__12377_12383 = G__12404;
chunk__12378_12384 = G__12405;
count__12379_12385 = G__12406;
i__12380_12386 = G__12407;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(content)){
return domina.append_BANG_.call(null,node,content);
} else {
return null;
}
} else {
if(cljs.core.sequential_QMARK_.call(null,node_spec)){
return cljs.core.flatten.call(null,cljs.core.map.call(null,html,node_spec));
} else {
return document.createTextNode([cljs.core.str(node_spec)].join(''));

}
}
}
});
/**
* returns the attribute on the selected element or elements.
* in cases where more than one element is selected you will
* receive a list of values
*/
enfocus.core.get_attr = (function get_attr(attr){
return enfocus.core.extr_multi_node.call(null,(function (pnod){
return pnod.getAttribute(cljs.core.name.call(null,attr));
}));
});
/**
* returns the text value of the selected element or elements.
* in cases where more than one element is selected you will
* receive a list of values
*/
enfocus.core.get_text = (function get_text(){
return enfocus.core.extr_multi_node.call(null,(function (pnod){
return goog.dom.getTextContent(pnod);
}));
});
/**
* returns the data on a selected node for a given key. If bubble is set will look at parent
*/
enfocus.core.get_data = (function() {
var get_data = null;
var get_data__1 = (function (ky){
return get_data.call(null,ky,false);
});
var get_data__2 = (function (ky,bubble){
return enfocus.core.extr_multi_node.call(null,(function (node){
return domina.get_data.call(null,node,ky,bubble);
}));
});
get_data = function(ky,bubble){
switch(arguments.length){
case 1:
return get_data__1.call(this,ky);
case 2:
return get_data__2.call(this,ky,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$1 = get_data__1;
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
return get_data;
})()
;
/**
* returns the property on the selected element or elements.
* in cases where more than one element is selected you will
* receive a list of values
*/
enfocus.core.get_prop = (function get_prop(prop){
return enfocus.core.extr_multi_node.call(null,(function (pnod){
return (pnod[cljs.core.name.call(null,prop)]);
}));
});
/**
* this function takes a map, key and value.  It will check if
* the value exists and create a seq of values if one exits.
*/
enfocus.core.merge_form_val = (function merge_form_val(form_map,ky,val){
var mval = form_map.call(null,ky);
if(cljs.core.truth_(val)){
if((cljs.core.coll_QMARK_.call(null,mval)) && (cljs.core.coll_QMARK_.call(null,val))){
return cljs.core.assoc.call(null,form_map,ky,cljs.core.into.call(null,mval,val));
} else {
if(cljs.core.coll_QMARK_.call(null,mval)){
return cljs.core.assoc.call(null,form_map,ky,cljs.core.conj.call(null,mval,val));
} else {
if(cljs.core.truth_(mval)){
return cljs.core.assoc.call(null,form_map,ky,cljs.core.PersistentHashSet.fromArray([mval,val], true));
} else {
return cljs.core.assoc.call(null,form_map,ky,val);

}
}
}
} else {
return form_map;
}
});
/**
* returns the value of a given form input (text,select,checkbox,etc...)    If more than  one value exists it will return a set of values.
*/
enfocus.core.read_form_input = (function read_form_input(){
var trans = (function (nodes,chain){
var nod_col = enfocus.core.nodes__GT_coll.call(null,nodes);
var result = cljs.core.reduce.call(null,((function (nod_col){
return (function (p1__12409_SHARP_,p2__12408_SHARP_){
var vals = cljs.core.js__GT_clj.call(null,goog.dom.forms.getValue(p2__12408_SHARP_));
if((!(typeof vals === 'string')) && (cljs.core.coll_QMARK_.call(null,vals))){
return cljs.core.into.call(null,p1__12409_SHARP_,vals);
} else {
if(cljs.core.truth_(vals)){
return cljs.core.conj.call(null,p1__12409_SHARP_,vals);
} else {
return p1__12409_SHARP_;
}
}
});})(nod_col))
,cljs.core.PersistentHashSet.EMPTY,nod_col);
if(cljs.core.empty_QMARK_.call(null,result)){
return null;
} else {
if((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,result))) && (cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["checkbox",null,"select-multiple",null], null), null).call(null,cljs.core.first.call(null,nod_col).type)))){
return cljs.core.first.call(null,result);
} else {
return result;

}
}
});
if(typeof enfocus.core.t12414 !== 'undefined'){
} else {

/**
* @constructor
*/
enfocus.core.t12414 = (function (trans,read_form_input,meta12415){
this.trans = trans;
this.read_form_input = read_form_input;
this.meta12415 = meta12415;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t12414.prototype.call = ((function (trans){
return (function() {
var G__12418 = null;
var G__12418__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,null);
});
var G__12418__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,chain);
});
G__12418 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__12418__2.call(this,self__,nodes);
case 3:
return G__12418__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12418.cljs$core$IFn$_invoke$arity$2 = G__12418__2;
G__12418.cljs$core$IFn$_invoke$arity$3 = G__12418__3;
return G__12418;
})()
;})(trans))
;

enfocus.core.t12414.prototype.apply = ((function (trans){
return (function (self__,args12417){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args12417)));
});})(trans))
;

enfocus.core.t12414.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t12414.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t12414.prototype.enfocus$core$ITransform$ = true;

enfocus.core.t12414.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t12414.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t12414.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_12416){
var self__ = this;
var _12416__$1 = this;
return self__.meta12415;
});})(trans))
;

enfocus.core.t12414.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_12416,meta12415__$1){
var self__ = this;
var _12416__$1 = this;
return (new enfocus.core.t12414(self__.trans,self__.read_form_input,meta12415__$1));
});})(trans))
;

enfocus.core.t12414.cljs$lang$type = true;

enfocus.core.t12414.cljs$lang$ctorStr = "enfocus.core/t12414";

enfocus.core.t12414.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__4384__auto__,writer__4385__auto__,opt__4386__auto__){
return cljs.core._write.call(null,writer__4385__auto__,"enfocus.core/t12414");
});})(trans))
;

enfocus.core.__GT_t12414 = ((function (trans){
return (function __GT_t12414(trans__$1,read_form_input__$1,meta12415){
return (new enfocus.core.t12414(trans__$1,read_form_input__$1,meta12415));
});})(trans))
;

}

return (new enfocus.core.t12414(trans,read_form_input,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),53,new cljs.core.Keyword(null,"end-line","end-line",1837326455),590,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),584,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/blischalk/node-webkit-apps/hoard/target/base+system+user+dev/cljsbuild-compiler-0/enfocus/core.cljs"], null)));
});
/**
* returns a map of the form values tied to name of input fields.
* {:name1 'value1' name2 #{'select1' 'select2'}}
*/
enfocus.core.read_form = (function read_form(){
return enfocus.core.extr_multi_node.call(null,(function (node){
var inputs = node.elements;
return cljs.core.reduce.call(null,((function (inputs){
return (function (p1__12420_SHARP_,p2__12419_SHARP_){
if(!(cljs.core.empty_QMARK_.call(null,inputs.item(p2__12419_SHARP_).name))){
return enfocus.core.merge_form_val.call(null,p1__12420_SHARP_,cljs.core.keyword.call(null,inputs.item(p2__12419_SHARP_).name),enfocus.core.read_form_input.call(null).call(null,inputs.item(p2__12419_SHARP_)));
} else {
return p1__12420_SHARP_;
}
});})(inputs))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.range.call(null,inputs.length));
}));
});
enfocus.core.reg_filt = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
* filter allows you to apply function to futhur scope down what is returned by a selector
*/
enfocus.core.filter = (function filter(tst,trans){
return enfocus.core.multi_node_chain.call(null,(function() {
var filt = null;
var filt__1 = (function (pnodes){
return filt.call(null,pnodes,null);
});
var filt__2 = (function (pnodes,chain){
var pnod_col = enfocus.core.nodes__GT_coll.call(null,pnodes);
var ttest = (((tst instanceof cljs.core.Keyword))?cljs.core.deref.call(null,enfocus.core.reg_filt).call(null,tst):tst);
var res = cljs.core.filter.call(null,ttest,pnod_col);
if((chain == null)){
return enfocus.core.apply_transform.call(null,trans,res);
} else {
return enfocus.core.apply_transform.call(null,trans,res,chain);
}
});
filt = function(pnodes,chain){
switch(arguments.length){
case 1:
return filt__1.call(this,pnodes);
case 2:
return filt__2.call(this,pnodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filt.cljs$core$IFn$_invoke$arity$1 = filt__1;
filt.cljs$core$IFn$_invoke$arity$2 = filt__2;
return filt;
})()
);
});
/**
* registers a filter for a given keyword
*/
enfocus.core.register_filter = (function register_filter(ky,func){
return cljs.core.swap_BANG_.call(null,enfocus.core.reg_filt,cljs.core.assoc,ky,func);
});
/**
* takes a list of options and returns the selected ones.
*/
enfocus.core.selected_options = (function selected_options(pnod){
return pnod.selected;
});
/**
* takes a list of radio or checkboxes and returns the checked ones
*/
enfocus.core.checked_radio_checkbox = (function checked_radio_checkbox(pnod){
return pnod.checked;
});
enfocus.core.register_filter.call(null,new cljs.core.Keyword(null,"selected","selected",574897764),enfocus.core.selected_options);
enfocus.core.register_filter.call(null,new cljs.core.Keyword(null,"checked","checked",-50955819),enfocus.core.checked_radio_checkbox);
enfocus.core.match_QMARK_ = (function match_QMARK_(selector){
return (function (node){
if(cljs.core.truth_((node["matches"]))){
return node.matches(selector);
} else {
if(cljs.core.truth_((node["matchesSelector"]))){
return node.matchesSelector(selector);
} else {
if(cljs.core.truth_((node["msMatchesSelector"]))){
return node.msMatchesSelector(selector);
} else {
if(cljs.core.truth_((node["mozMatchesSelector"]))){
return node.mozMatchesSelector(selector);
} else {
if(cljs.core.truth_((node["webkitMatchesSelector"]))){
return node.webkitMatchesSelector(selector);
} else {
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([node], true),enfocus.core.nodes__GT_coll.call(null,enfocus.core.select.call(null,node)));

}
}
}
}
}
});
});
/**
* converts keywords, symbols and strings used in the enlive selector
* syntax to a string representing a standard css selector.  It also
* applys id masking if mask provided
*/
enfocus.core.create_sel_str = (function() {
var create_sel_str = null;
var create_sel_str__1 = (function (css_sel){
return create_sel_str.call(null,"",css_sel);
});
var create_sel_str__2 = (function (id_mask_sym,css_sel){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__12421_SHARP_){
if((p1__12421_SHARP_ instanceof cljs.core.Symbol)){
return enfocus.core.css_syms.call(null,p1__12421_SHARP_);
} else {
if((p1__12421_SHARP_ instanceof cljs.core.Keyword)){
return [cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,p1__12421_SHARP_).replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join('')))].join('');
} else {
if(cljs.core.vector_QMARK_.call(null,p1__12421_SHARP_)){
return create_sel_str.call(null,p1__12421_SHARP_);
} else {
if(typeof p1__12421_SHARP_ === 'string'){
return p1__12421_SHARP_.replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join(''));
} else {
return null;
}
}
}
}
}),css_sel));
});
create_sel_str = function(id_mask_sym,css_sel){
switch(arguments.length){
case 1:
return create_sel_str__1.call(this,id_mask_sym);
case 2:
return create_sel_str__2.call(this,id_mask_sym,css_sel);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_sel_str.cljs$core$IFn$_invoke$arity$1 = create_sel_str__1;
create_sel_str.cljs$core$IFn$_invoke$arity$2 = create_sel_str__2;
return create_sel_str;
})()
;
/**
* takes either an enlive selector or a css3 selector and returns a set of nodes that match the selector
*/
enfocus.core.css_select = (function() {
var css_select = null;
var css_select__1 = (function (css_sel){
return css_select.call(null,"",document,css_sel);
});
var css_select__2 = (function (dom_node,css_sel){
return css_select.call(null,"",dom_node,css_sel);
});
var css_select__3 = (function (id_mask_sym,dom_node,css_sel){
var sel = clojure.string.trim.call(null,enfocus.enlive.syntax.convert.call(null,enfocus.core.create_sel_str.call(null,id_mask_sym,css_sel)));
var ret = domina.css.sel.call(null,dom_node,sel);
return ret;
});
css_select = function(id_mask_sym,dom_node,css_sel){
switch(arguments.length){
case 1:
return css_select__1.call(this,id_mask_sym);
case 2:
return css_select__2.call(this,id_mask_sym,dom_node);
case 3:
return css_select__3.call(this,id_mask_sym,dom_node,css_sel);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
css_select.cljs$core$IFn$_invoke$arity$1 = css_select__1;
css_select.cljs$core$IFn$_invoke$arity$2 = css_select__2;
css_select.cljs$core$IFn$_invoke$arity$3 = css_select__3;
return css_select;
})()
;
enfocus.core.nil_t = (function nil_t(func){
var or__3797__auto__ = func;
if(cljs.core.truth_(or__3797__auto__)){
return or__3797__auto__;
} else {
return enfocus.core.remove_node;
}
});
/**
* @param {...*} var_args
*/
enfocus.core.i_at = (function() { 
var i_at__delegate = function (id_mask,node,trans){
var cnt = cljs.core.count.call(null,trans);
var sel_QMARK_ = (function (){var and__3785__auto__ = !((node == null));
if(and__3785__auto__){
var G__12432 = node;
if(G__12432){
var bit__4478__auto__ = null;
if(cljs.core.truth_((function (){var or__3797__auto__ = bit__4478__auto__;
if(cljs.core.truth_(or__3797__auto__)){
return or__3797__auto__;
} else {
return G__12432.enfocus$core$ISelector$;
}
})())){
return true;
} else {
if((!G__12432.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__12432);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__12432);
}
} else {
return and__3785__auto__;
}
})();
if((!(sel_QMARK_)) && (cljs.core._EQ_.call(null,(1),cnt))){
return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else {
var vec__12433 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));
var node__$1 = cljs.core.nth.call(null,vec__12433,(0),null);
var trans__$1 = cljs.core.nth.call(null,vec__12433,(1),null);
var seq__12434 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),trans__$1));
var chunk__12435 = null;
var count__12436 = (0);
var i__12437 = (0);
while(true){
if((i__12437 < count__12436)){
var vec__12438 = cljs.core._nth.call(null,chunk__12435,i__12437);
var sel = cljs.core.nth.call(null,vec__12438,(0),null);
var t = cljs.core.nth.call(null,vec__12438,(1),null);
enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));

var G__12440 = seq__12434;
var G__12441 = chunk__12435;
var G__12442 = count__12436;
var G__12443 = (i__12437 + (1));
seq__12434 = G__12440;
chunk__12435 = G__12441;
count__12436 = G__12442;
i__12437 = G__12443;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12434);
if(temp__4126__auto__){
var seq__12434__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12434__$1)){
var c__4584__auto__ = cljs.core.chunk_first.call(null,seq__12434__$1);
var G__12444 = cljs.core.chunk_rest.call(null,seq__12434__$1);
var G__12445 = c__4584__auto__;
var G__12446 = cljs.core.count.call(null,c__4584__auto__);
var G__12447 = (0);
seq__12434 = G__12444;
chunk__12435 = G__12445;
count__12436 = G__12446;
i__12437 = G__12447;
continue;
} else {
var vec__12439 = cljs.core.first.call(null,seq__12434__$1);
var sel = cljs.core.nth.call(null,vec__12439,(0),null);
var t = cljs.core.nth.call(null,vec__12439,(1),null);
enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));

var G__12448 = cljs.core.next.call(null,seq__12434__$1);
var G__12449 = null;
var G__12450 = (0);
var G__12451 = (0);
seq__12434 = G__12448;
chunk__12435 = G__12449;
count__12436 = G__12450;
i__12437 = G__12451;
continue;
}
} else {
return null;
}
}
break;
}
}
};
var i_at = function (id_mask,node,var_args){
var trans = null;
if (arguments.length > 2) {
var G__12452__i = 0, G__12452__a = new Array(arguments.length -  2);
while (G__12452__i < G__12452__a.length) {G__12452__a[G__12452__i] = arguments[G__12452__i + 2]; ++G__12452__i;}
  trans = new cljs.core.IndexedSeq(G__12452__a,0);
} 
return i_at__delegate.call(this,id_mask,node,trans);};
i_at.cljs$lang$maxFixedArity = 2;
i_at.cljs$lang$applyTo = (function (arglist__12453){
var id_mask = cljs.core.first(arglist__12453);
arglist__12453 = cljs.core.next(arglist__12453);
var node = cljs.core.first(arglist__12453);
var trans = cljs.core.rest(arglist__12453);
return i_at__delegate(id_mask,node,trans);
});
i_at.cljs$core$IFn$_invoke$arity$variadic = i_at__delegate;
return i_at;
})()
;
/**
* @param {...*} var_args
*/
enfocus.core.at = (function() { 
var at__delegate = function (node,trans){
return cljs.core.apply.call(null,enfocus.core.i_at,"",node,trans);
};
var at = function (node,var_args){
var trans = null;
if (arguments.length > 1) {
var G__12454__i = 0, G__12454__a = new Array(arguments.length -  1);
while (G__12454__i < G__12454__a.length) {G__12454__a[G__12454__i] = arguments[G__12454__i + 1]; ++G__12454__i;}
  trans = new cljs.core.IndexedSeq(G__12454__a,0);
} 
return at__delegate.call(this,node,trans);};
at.cljs$lang$maxFixedArity = 1;
at.cljs$lang$applyTo = (function (arglist__12455){
var node = cljs.core.first(arglist__12455);
var trans = cljs.core.rest(arglist__12455);
return at__delegate(node,trans);
});
at.cljs$core$IFn$_invoke$arity$variadic = at__delegate;
return at;
})()
;
/**
* @param {...*} var_args
*/
enfocus.core.from = (function() { 
var from__delegate = function (node,trans){
var cnt = cljs.core.count.call(null,trans);
var sel_QMARK_ = (function (){var G__12460 = node;
if(G__12460){
var bit__4478__auto__ = null;
if(cljs.core.truth_((function (){var or__3797__auto__ = bit__4478__auto__;
if(cljs.core.truth_(or__3797__auto__)){
return or__3797__auto__;
} else {
return G__12460.enfocus$core$ISelector$;
}
})())){
return true;
} else {
if((!G__12460.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__12460);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__12460);
}
})();
if((sel_QMARK_) && (cljs.core._EQ_.call(null,(1),cnt))){
return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),enfocus.core.select.call(null,node));
} else {
if(cljs.core._EQ_.call(null,(1),cnt)){
return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else {
var vec__12461 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));
var node__$1 = cljs.core.nth.call(null,vec__12461,(0),null);
var trans__$1 = cljs.core.nth.call(null,vec__12461,(1),null);
return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,((function (vec__12461,node__$1,trans__$1,cnt,sel_QMARK_){
return (function (p__12462){
var vec__12463 = p__12462;
var ky = cljs.core.nth.call(null,vec__12463,(0),null);
var sel = cljs.core.nth.call(null,vec__12463,(1),null);
var ext = cljs.core.nth.call(null,vec__12463,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ky,enfocus.core.apply_transform.call(null,ext,enfocus.core.select.call(null,sel,node__$1,""))], null);
});})(vec__12461,node__$1,trans__$1,cnt,sel_QMARK_))
,cljs.core.partition.call(null,(3),trans__$1)));

}
}
};
var from = function (node,var_args){
var trans = null;
if (arguments.length > 1) {
var G__12464__i = 0, G__12464__a = new Array(arguments.length -  1);
while (G__12464__i < G__12464__a.length) {G__12464__a[G__12464__i] = arguments[G__12464__i + 1]; ++G__12464__i;}
  trans = new cljs.core.IndexedSeq(G__12464__a,0);
} 
return from__delegate.call(this,node,trans);};
from.cljs$lang$maxFixedArity = 1;
from.cljs$lang$applyTo = (function (arglist__12465){
var node = cljs.core.first(arglist__12465);
var trans = cljs.core.rest(arglist__12465);
return from__delegate(node,trans);
});
from.cljs$core$IFn$_invoke$arity$variadic = from__delegate;
return from;
})()
;
enfocus.core.xpath = (function xpath(path){
return (function (root,id_mask){
if(cljs.core.empty_QMARK_.call(null,id_mask)){
return domina.xpath.xpath.call(null,root,path);
} else {
var tmp = path.replace("@ID='",[cljs.core.str("@ID='"),cljs.core.str(id_mask)].join(''));
var mpath = path.replace("@id='",[cljs.core.str("@id='"),cljs.core.str(id_mask)].join(''));
return domina.xpath.xpath.call(null,root,mpath);
}
});
});
enfocus.core.this_node = (function this_node(root,id_mask){
return root;
});
if(cljs.core.truth_((typeof Text != 'undefined'))){
Text.prototype.domina$DomContent$ = true;

Text.prototype.domina$DomContent$nodes$arity$1 = (function (content){
var content__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content__$1], null);
});

Text.prototype.domina$DomContent$single_node$arity$1 = (function (content){
var content__$1 = this;
return content__$1;
});
} else {
}
(enfocus.core.ISelector["null"] = true);

(enfocus.core.select["null"] = (function() {
var G__12466 = null;
var G__12466__1 = (function (this$){
return cljs.core.List.EMPTY;
});
var G__12466__2 = (function (this$,root){
return cljs.core.List.EMPTY;
});
var G__12466__3 = (function (this$,root,id_mask){
return cljs.core.List.EMPTY;
});
G__12466 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__12466__1.call(this,this$);
case 2:
return G__12466__2.call(this,this$,root);
case 3:
return G__12466__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12466.cljs$core$IFn$_invoke$arity$1 = G__12466__1;
G__12466.cljs$core$IFn$_invoke$arity$2 = G__12466__2;
G__12466.cljs$core$IFn$_invoke$arity$3 = G__12466__3;
return G__12466;
})()
);

(enfocus.core.ISelector["string"] = true);

(enfocus.core.select["string"] = (function() {
var G__12467 = null;
var G__12467__1 = (function (this$){
return enfocus.core.select.call(null,this$,document,"");
});
var G__12467__2 = (function (this$,root){
return enfocus.core.select.call(null,this$,root,"");
});
var G__12467__3 = (function (this$,root,id_mask){
return enfocus.core.css_select.call(null,id_mask,root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
});
G__12467 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__12467__1.call(this,this$);
case 2:
return G__12467__2.call(this,this$,root);
case 3:
return G__12467__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12467.cljs$core$IFn$_invoke$arity$1 = G__12467__1;
G__12467.cljs$core$IFn$_invoke$arity$2 = G__12467__2;
G__12467.cljs$core$IFn$_invoke$arity$3 = G__12467__3;
return G__12467;
})()
);

cljs.core.PersistentVector.prototype.enfocus$core$ISelector$ = true;

cljs.core.PersistentVector.prototype.enfocus$core$ISelector$select$arity$1 = (function (this$){
var this$__$1 = this;
return enfocus.core.select.call(null,this$__$1,document,"");
});

cljs.core.PersistentVector.prototype.enfocus$core$ISelector$select$arity$2 = (function (this$,root){
var this$__$1 = this;
return enfocus.core.select.call(null,this$__$1,root,"");
});

cljs.core.PersistentVector.prototype.enfocus$core$ISelector$select$arity$3 = (function (this$,root,id_mask){
var this$__$1 = this;
return enfocus.core.css_select.call(null,id_mask,root,this$__$1);
});

(enfocus.core.ISelector["function"] = true);

(enfocus.core.select["function"] = (function() {
var G__12468 = null;
var G__12468__1 = (function (this$){
return enfocus.core.select.call(null,this$,document,"");
});
var G__12468__2 = (function (this$,root){
return enfocus.core.select.call(null,this$,root,"");
});
var G__12468__3 = (function (this$,root,id_mask){
return this$.call(null,root,id_mask);
});
G__12468 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__12468__1.call(this,this$);
case 2:
return G__12468__2.call(this,this$,root);
case 3:
return G__12468__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12468.cljs$core$IFn$_invoke$arity$1 = G__12468__1;
G__12468.cljs$core$IFn$_invoke$arity$2 = G__12468__2;
G__12468.cljs$core$IFn$_invoke$arity$3 = G__12468__3;
return G__12468;
})()
);
(enfocus.core.ITransform["null"] = true);

(enfocus.core.apply_transform["null"] = (function() {
var G__12469 = null;
var G__12469__2 = (function (trans,nodes){
return nodes;
});
var G__12469__3 = (function (trans,nodes,chain){
return nodes;
});
G__12469 = function(trans,nodes,chain){
switch(arguments.length){
case 2:
return G__12469__2.call(this,trans,nodes);
case 3:
return G__12469__3.call(this,trans,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12469.cljs$core$IFn$_invoke$arity$2 = G__12469__2;
G__12469.cljs$core$IFn$_invoke$arity$3 = G__12469__3;
return G__12469;
})()
);

(enfocus.core.ITransform["function"] = true);

(enfocus.core.apply_transform["function"] = (function() {
var G__12470 = null;
var G__12470__2 = (function (trans,nodes){
return cljs.core.doall.call(null,cljs.core.map.call(null,trans,enfocus.core.nodes__GT_coll.call(null,nodes)));
});
var G__12470__3 = (function (trans,nodes,chain){
var pnod_col = enfocus.core.nodes__GT_coll.call(null,nodes);
var val = cljs.core.doall.call(null,cljs.core.map.call(null,trans,pnod_col));
if(cljs.core.truth_(chain)){
return enfocus.core.apply_transform.call(null,chain,nodes);
} else {
return val;
}
});
G__12470 = function(trans,nodes,chain){
switch(arguments.length){
case 2:
return G__12470__2.call(this,trans,nodes);
case 3:
return G__12470__3.call(this,trans,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12470.cljs$core$IFn$_invoke$arity$2 = G__12470__2;
G__12470.cljs$core$IFn$_invoke$arity$3 = G__12470__3;
return G__12470;
})()
);
