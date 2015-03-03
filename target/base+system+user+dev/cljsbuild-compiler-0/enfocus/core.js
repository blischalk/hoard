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







enfocus.core.ISelector = (function (){var obj35685 = {};
return obj35685;
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


enfocus.core.ITransform = (function (){var obj35687 = {};
return obj35687;
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

return cljs.core.mapcat.call(null,(function (p1__35688_SHARP_){
if(typeof p1__35688_SHARP_ === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.dom.createTextNode(p1__35688_SHARP_)], null);
} else {
return enfocus.core.nodes__GT_coll.call(null,p1__35688_SHARP_);

}
}),values);
});
/**
* Sets property name to a value on a element and	Returns the original object
*/
enfocus.core.style_set = (function style_set(obj,values){
var seq__35695_35701 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));
var chunk__35696_35702 = null;
var count__35697_35703 = (0);
var i__35698_35704 = (0);
while(true){
if((i__35698_35704 < count__35697_35703)){
var vec__35699_35705 = cljs.core._nth.call(null,chunk__35696_35702,i__35698_35704);
var attr_35706 = cljs.core.nth.call(null,vec__35699_35705,(0),null);
var value_35707 = cljs.core.nth.call(null,vec__35699_35705,(1),null);
goog.style.setStyle(obj,cljs.core.name.call(null,attr_35706),value_35707);

var G__35708 = seq__35695_35701;
var G__35709 = chunk__35696_35702;
var G__35710 = count__35697_35703;
var G__35711 = (i__35698_35704 + (1));
seq__35695_35701 = G__35708;
chunk__35696_35702 = G__35709;
count__35697_35703 = G__35710;
i__35698_35704 = G__35711;
continue;
} else {
var temp__4126__auto___35712 = cljs.core.seq.call(null,seq__35695_35701);
if(temp__4126__auto___35712){
var seq__35695_35713__$1 = temp__4126__auto___35712;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35695_35713__$1)){
var c__4584__auto___35714 = cljs.core.chunk_first.call(null,seq__35695_35713__$1);
var G__35715 = cljs.core.chunk_rest.call(null,seq__35695_35713__$1);
var G__35716 = c__4584__auto___35714;
var G__35717 = cljs.core.count.call(null,c__4584__auto___35714);
var G__35718 = (0);
seq__35695_35701 = G__35715;
chunk__35696_35702 = G__35716;
count__35697_35703 = G__35717;
i__35698_35704 = G__35718;
continue;
} else {
var vec__35700_35719 = cljs.core.first.call(null,seq__35695_35713__$1);
var attr_35720 = cljs.core.nth.call(null,vec__35700_35719,(0),null);
var value_35721 = cljs.core.nth.call(null,vec__35700_35719,(1),null);
goog.style.setStyle(obj,cljs.core.name.call(null,attr_35720),value_35721);

var G__35722 = cljs.core.next.call(null,seq__35695_35713__$1);
var G__35723 = null;
var G__35724 = (0);
var G__35725 = (0);
seq__35695_35701 = G__35722;
chunk__35696_35702 = G__35723;
count__35697_35703 = G__35724;
i__35698_35704 = G__35725;
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
var seq__35730 = cljs.core.seq.call(null,values);
var chunk__35731 = null;
var count__35732 = (0);
var i__35733 = (0);
while(true){
if((i__35733 < count__35732)){
var attr = cljs.core._nth.call(null,chunk__35731,i__35733);
if(cljs.core.truth_(goog.userAgent.IE)){
goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else {
obj.style.removeProperty(cljs.core.name.call(null,attr));
}

var G__35734 = seq__35730;
var G__35735 = chunk__35731;
var G__35736 = count__35732;
var G__35737 = (i__35733 + (1));
seq__35730 = G__35734;
chunk__35731 = G__35735;
count__35732 = G__35736;
i__35733 = G__35737;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__35730);
if(temp__4126__auto__){
var seq__35730__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35730__$1)){
var c__4584__auto__ = cljs.core.chunk_first.call(null,seq__35730__$1);
var G__35738 = cljs.core.chunk_rest.call(null,seq__35730__$1);
var G__35739 = c__4584__auto__;
var G__35740 = cljs.core.count.call(null,c__4584__auto__);
var G__35741 = (0);
seq__35730 = G__35738;
chunk__35731 = G__35739;
count__35732 = G__35740;
i__35733 = G__35741;
continue;
} else {
var attr = cljs.core.first.call(null,seq__35730__$1);
if(cljs.core.truth_(goog.userAgent.IE)){
goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else {
obj.style.removeProperty(cljs.core.name.call(null,attr));
}

var G__35742 = cljs.core.next.call(null,seq__35730__$1);
var G__35743 = null;
var G__35744 = (0);
var G__35745 = (0);
seq__35730 = G__35742;
chunk__35731 = G__35743;
count__35732 = G__35744;
i__35733 = G__35745;
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
var seq__35752_35758 = cljs.core.seq.call(null,ats);
var chunk__35753_35759 = null;
var count__35754_35760 = (0);
var i__35755_35761 = (0);
while(true){
if((i__35755_35761 < count__35754_35760)){
var vec__35756_35762 = cljs.core._nth.call(null,chunk__35753_35759,i__35755_35761);
var k_35763 = cljs.core.nth.call(null,vec__35756_35762,(0),null);
var v_35764 = cljs.core.nth.call(null,vec__35756_35762,(1),null);
add_map_attrs.call(null,elem,k_35763,v_35764);

var G__35765 = seq__35752_35758;
var G__35766 = chunk__35753_35759;
var G__35767 = count__35754_35760;
var G__35768 = (i__35755_35761 + (1));
seq__35752_35758 = G__35765;
chunk__35753_35759 = G__35766;
count__35754_35760 = G__35767;
i__35755_35761 = G__35768;
continue;
} else {
var temp__4126__auto___35769 = cljs.core.seq.call(null,seq__35752_35758);
if(temp__4126__auto___35769){
var seq__35752_35770__$1 = temp__4126__auto___35769;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35752_35770__$1)){
var c__4584__auto___35771 = cljs.core.chunk_first.call(null,seq__35752_35770__$1);
var G__35772 = cljs.core.chunk_rest.call(null,seq__35752_35770__$1);
var G__35773 = c__4584__auto___35771;
var G__35774 = cljs.core.count.call(null,c__4584__auto___35771);
var G__35775 = (0);
seq__35752_35758 = G__35772;
chunk__35753_35759 = G__35773;
count__35754_35760 = G__35774;
i__35755_35761 = G__35775;
continue;
} else {
var vec__35757_35776 = cljs.core.first.call(null,seq__35752_35770__$1);
var k_35777 = cljs.core.nth.call(null,vec__35757_35776,(0),null);
var v_35778 = cljs.core.nth.call(null,vec__35757_35776,(1),null);
add_map_attrs.call(null,elem,k_35777,v_35778);

var G__35779 = cljs.core.next.call(null,seq__35752_35770__$1);
var G__35780 = null;
var G__35781 = (0);
var G__35782 = (0);
seq__35752_35758 = G__35779;
chunk__35753_35759 = G__35780;
count__35754_35760 = G__35781;
i__35755_35761 = G__35782;
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

var seq__35787_35791 = cljs.core.seq.call(null,domina.nodes.call(null,child));
var chunk__35788_35792 = null;
var count__35789_35793 = (0);
var i__35790_35794 = (0);
while(true){
if((i__35790_35794 < count__35789_35793)){
var node_35795 = cljs.core._nth.call(null,chunk__35788_35792,i__35790_35794);
goog.dom.appendChild(div,node_35795);

var G__35796 = seq__35787_35791;
var G__35797 = chunk__35788_35792;
var G__35798 = count__35789_35793;
var G__35799 = (i__35790_35794 + (1));
seq__35787_35791 = G__35796;
chunk__35788_35792 = G__35797;
count__35789_35793 = G__35798;
i__35790_35794 = G__35799;
continue;
} else {
var temp__4126__auto___35800 = cljs.core.seq.call(null,seq__35787_35791);
if(temp__4126__auto___35800){
var seq__35787_35801__$1 = temp__4126__auto___35800;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35787_35801__$1)){
var c__4584__auto___35802 = cljs.core.chunk_first.call(null,seq__35787_35801__$1);
var G__35803 = cljs.core.chunk_rest.call(null,seq__35787_35801__$1);
var G__35804 = c__4584__auto___35802;
var G__35805 = cljs.core.count.call(null,c__4584__auto___35802);
var G__35806 = (0);
seq__35787_35791 = G__35803;
chunk__35788_35792 = G__35804;
count__35789_35793 = G__35805;
i__35790_35794 = G__35806;
continue;
} else {
var node_35807 = cljs.core.first.call(null,seq__35787_35801__$1);
goog.dom.appendChild(div,node_35807);

var G__35808 = cljs.core.next.call(null,seq__35787_35801__$1);
var G__35809 = null;
var G__35810 = (0);
var G__35811 = (0);
seq__35787_35791 = G__35808;
chunk__35788_35792 = G__35809;
count__35789_35793 = G__35810;
i__35790_35794 = G__35811;
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
return (function (p1__35812_SHARP_){
var id = p1__35812_SHARP_.getAttribute("id");
var rid = id.replace(sym,"");
return p1__35812_SHARP_.setAttribute("id",rid);
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
var vec__35814 = enfocus.core.replace_ids.call(null,id_mask,text);
var sym = cljs.core.nth.call(null,vec__35814,(0),null);
var txt = cljs.core.nth.call(null,vec__35814,(1),null);
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

var seq__35819_35823 = cljs.core.seq.call(null,dfa);
var chunk__35820_35824 = null;
var count__35821_35825 = (0);
var i__35822_35826 = (0);
while(true){
if((i__35822_35826 < count__35821_35825)){
var df_35827 = cljs.core._nth.call(null,chunk__35820_35824,i__35822_35826);
goog.dom.append(frag,df_35827);

var G__35828 = seq__35819_35823;
var G__35829 = chunk__35820_35824;
var G__35830 = count__35821_35825;
var G__35831 = (i__35822_35826 + (1));
seq__35819_35823 = G__35828;
chunk__35820_35824 = G__35829;
count__35821_35825 = G__35830;
i__35822_35826 = G__35831;
continue;
} else {
var temp__4126__auto___35832 = cljs.core.seq.call(null,seq__35819_35823);
if(temp__4126__auto___35832){
var seq__35819_35833__$1 = temp__4126__auto___35832;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35819_35833__$1)){
var c__4584__auto___35834 = cljs.core.chunk_first.call(null,seq__35819_35833__$1);
var G__35835 = cljs.core.chunk_rest.call(null,seq__35819_35833__$1);
var G__35836 = c__4584__auto___35834;
var G__35837 = cljs.core.count.call(null,c__4584__auto___35834);
var G__35838 = (0);
seq__35819_35823 = G__35835;
chunk__35820_35824 = G__35836;
count__35821_35825 = G__35837;
i__35822_35826 = G__35838;
continue;
} else {
var df_35839 = cljs.core.first.call(null,seq__35819_35833__$1);
goog.dom.append(frag,df_35839);

var G__35840 = cljs.core.next.call(null,seq__35819_35833__$1);
var G__35841 = null;
var G__35842 = (0);
var G__35843 = (0);
seq__35819_35823 = G__35840;
chunk__35820_35824 = G__35841;
count__35821_35825 = G__35842;
i__35822_35826 = G__35843;
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
var vec__35846 = enfocus.core.get_cached_dom.call(null,uri);
var sym = cljs.core.nth.call(null,vec__35846,(0),null);
var tdom = cljs.core.nth.call(null,vec__35846,(1),null);
var dom = enfocus.core.create_hidden_dom.call(null,tdom);
var tsnip = domina.nodes.call(null,enfocus.core.css_select.call(null,sym,dom,sel));
var html_snip = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__35846,sym,tdom,dom,tsnip,sel_str,cache){
return (function (p1__35844_SHARP_){
return p1__35844_SHARP_.outerHTML;
});})(vec__35846,sym,tdom,dom,tsnip,sel_str,cache))
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
if(typeof enfocus.core.t35851 !== 'undefined'){
} else {

/**
* @constructor
*/
enfocus.core.t35851 = (function (trans,filt,func,extr_multi_node,meta35852){
this.trans = trans;
this.filt = filt;
this.func = func;
this.extr_multi_node = extr_multi_node;
this.meta35852 = meta35852;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t35851.prototype.call = ((function (trans){
return (function() {
var G__35855 = null;
var G__35855__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,null);
});
var G__35855__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,chain);
});
G__35855 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__35855__2.call(this,self__,nodes);
case 3:
return G__35855__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35855.cljs$core$IFn$_invoke$arity$2 = G__35855__2;
G__35855.cljs$core$IFn$_invoke$arity$3 = G__35855__3;
return G__35855;
})()
;})(trans))
;

enfocus.core.t35851.prototype.apply = ((function (trans){
return (function (self__,args35854){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args35854)));
});})(trans))
;

enfocus.core.t35851.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t35851.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t35851.prototype.enfocus$core$ITransform$ = true;

enfocus.core.t35851.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t35851.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t35851.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_35853){
var self__ = this;
var _35853__$1 = this;
return self__.meta35852;
});})(trans))
;

enfocus.core.t35851.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_35853,meta35852__$1){
var self__ = this;
var _35853__$1 = this;
return (new enfocus.core.t35851(self__.trans,self__.filt,self__.func,self__.extr_multi_node,meta35852__$1));
});})(trans))
;

enfocus.core.t35851.cljs$lang$type = true;

enfocus.core.t35851.cljs$lang$ctorStr = "enfocus.core/t35851";

enfocus.core.t35851.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__4384__auto__,writer__4385__auto__,opt__4386__auto__){
return cljs.core._write.call(null,writer__4385__auto__,"enfocus.core/t35851");
});})(trans))
;

enfocus.core.__GT_t35851 = ((function (trans){
return (function __GT_t35851(trans__$1,filt__$1,func__$1,extr_multi_node__$1,meta35852){
return (new enfocus.core.t35851(trans__$1,filt__$1,func__$1,extr_multi_node__$1,meta35852));
});})(trans))
;

}

return (new enfocus.core.t35851(trans,filt,func,extr_multi_node,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),56,new cljs.core.Keyword(null,"end-line","end-line",1837326455),237,new cljs.core.Keyword(null,"column","column",2078222095),8,new cljs.core.Keyword(null,"line","line",212345235),231,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/blischalk/node-webkit-apps/hoard/target/base+system+user+dev/cljsbuild-compiler-0/enfocus/core.cljs"], null)));
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
if(typeof enfocus.core.t35865 !== 'undefined'){
} else {

/**
* @constructor
*/
enfocus.core.t35865 = (function (trans,func,multi_node_chain,meta35866){
this.trans = trans;
this.func = func;
this.multi_node_chain = multi_node_chain;
this.meta35866 = meta35866;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t35865.prototype.call = ((function (trans){
return (function() {
var G__35873 = null;
var G__35873__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,null);
});
var G__35873__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,chain);
});
G__35873 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__35873__2.call(this,self__,nodes);
case 3:
return G__35873__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35873.cljs$core$IFn$_invoke$arity$2 = G__35873__2;
G__35873.cljs$core$IFn$_invoke$arity$3 = G__35873__3;
return G__35873;
})()
;})(trans))
;

enfocus.core.t35865.prototype.apply = ((function (trans){
return (function (self__,args35868){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args35868)));
});})(trans))
;

enfocus.core.t35865.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t35865.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t35865.prototype.enfocus$core$ITransform$ = true;

enfocus.core.t35865.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t35865.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t35865.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_35867){
var self__ = this;
var _35867__$1 = this;
return self__.meta35866;
});})(trans))
;

enfocus.core.t35865.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_35867,meta35866__$1){
var self__ = this;
var _35867__$1 = this;
return (new enfocus.core.t35865(self__.trans,self__.func,self__.multi_node_chain,meta35866__$1));
});})(trans))
;

enfocus.core.t35865.cljs$lang$type = true;

enfocus.core.t35865.cljs$lang$ctorStr = "enfocus.core/t35865";

enfocus.core.t35865.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__4384__auto__,writer__4385__auto__,opt__4386__auto__){
return cljs.core._write.call(null,writer__4385__auto__,"enfocus.core/t35865");
});})(trans))
;

enfocus.core.__GT_t35865 = ((function (trans){
return (function __GT_t35865(trans__$1,func__$1,multi_node_chain__$1,meta35866){
return (new enfocus.core.t35865(trans__$1,func__$1,multi_node_chain__$1,meta35866));
});})(trans))
;

}

return (new enfocus.core.t35865(trans,func,multi_node_chain,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),56,new cljs.core.Keyword(null,"end-line","end-line",1837326455),252,new cljs.core.Keyword(null,"column","column",2078222095),8,new cljs.core.Keyword(null,"line","line",212345235),246,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/blischalk/node-webkit-apps/hoard/target/base+system+user+dev/cljsbuild-compiler-0/enfocus/core.cljs"], null)));
});
var multi_node_chain__2 = (function (values,func){
var trans = (function (nodes,chain){
var vnodes = cljs.core.mapcat.call(null,(function (p1__35856_SHARP_){
return domina.nodes.call(null,p1__35856_SHARP_);
}),values);
var val = func.call(null,nodes,vnodes);
if(cljs.core.truth_(chain)){
return enfocus.core.apply_transform.call(null,chain,nodes);
} else {
return val;
}
});
if(typeof enfocus.core.t35869 !== 'undefined'){
} else {

/**
* @constructor
*/
enfocus.core.t35869 = (function (trans,func,values,multi_node_chain,meta35870){
this.trans = trans;
this.func = func;
this.values = values;
this.multi_node_chain = multi_node_chain;
this.meta35870 = meta35870;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t35869.prototype.call = ((function (trans){
return (function() {
var G__35874 = null;
var G__35874__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,null);
});
var G__35874__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,chain);
});
G__35874 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__35874__2.call(this,self__,nodes);
case 3:
return G__35874__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35874.cljs$core$IFn$_invoke$arity$2 = G__35874__2;
G__35874.cljs$core$IFn$_invoke$arity$3 = G__35874__3;
return G__35874;
})()
;})(trans))
;

enfocus.core.t35869.prototype.apply = ((function (trans){
return (function (self__,args35872){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args35872)));
});})(trans))
;

enfocus.core.t35869.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t35869.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t35869.prototype.enfocus$core$ITransform$ = true;

enfocus.core.t35869.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t35869.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t35869.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_35871){
var self__ = this;
var _35871__$1 = this;
return self__.meta35870;
});})(trans))
;

enfocus.core.t35869.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_35871,meta35870__$1){
var self__ = this;
var _35871__$1 = this;
return (new enfocus.core.t35869(self__.trans,self__.func,self__.values,self__.multi_node_chain,meta35870__$1));
});})(trans))
;

enfocus.core.t35869.cljs$lang$type = true;

enfocus.core.t35869.cljs$lang$ctorStr = "enfocus.core/t35869";

enfocus.core.t35869.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__4384__auto__,writer__4385__auto__,opt__4386__auto__){
return cljs.core._write.call(null,writer__4385__auto__,"enfocus.core/t35869");
});})(trans))
;

enfocus.core.__GT_t35869 = ((function (trans){
return (function __GT_t35869(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta35870){
return (new enfocus.core.t35869(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta35870));
});})(trans))
;

}

return (new enfocus.core.t35869(trans,func,values,multi_node_chain,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),56,new cljs.core.Keyword(null,"end-line","end-line",1837326455),264,new cljs.core.Keyword(null,"column","column",2078222095),8,new cljs.core.Keyword(null,"line","line",212345235),258,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/blischalk/node-webkit-apps/hoard/target/base+system+user+dev/cljsbuild-compiler-0/enfocus/core.cljs"], null)));
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
return enfocus.core.multi_node_chain.call(null,values,(function (p1__35875_SHARP_,p2__35876_SHARP_){
domina.destroy_children_BANG_.call(null,p1__35875_SHARP_);

return domina.append_BANG_.call(null,p1__35875_SHARP_,p2__35876_SHARP_);
}));
};
var content = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__35877__i = 0, G__35877__a = new Array(arguments.length -  0);
while (G__35877__i < G__35877__a.length) {G__35877__a[G__35877__i] = arguments[G__35877__i + 0]; ++G__35877__i;}
  values = new cljs.core.IndexedSeq(G__35877__a,0);
} 
return content__delegate.call(this,values);};
content.cljs$lang$maxFixedArity = 0;
content.cljs$lang$applyTo = (function (arglist__35878){
var values = cljs.core.seq(arglist__35878);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__35879_SHARP_){
return domina.set_html_BANG_.call(null,p1__35879_SHARP_,txt);
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
return (function (p1__35880_SHARP_){
var seq__35887 = cljs.core.seq.call(null,pairs);
var chunk__35888 = null;
var count__35889 = (0);
var i__35890 = (0);
while(true){
if((i__35890 < count__35889)){
var vec__35891 = cljs.core._nth.call(null,chunk__35888,i__35890);
var name = cljs.core.nth.call(null,vec__35891,(0),null);
var value = cljs.core.nth.call(null,vec__35891,(1),null);
domina.set_attr_BANG_.call(null,p1__35880_SHARP_,name,value);

var G__35893 = seq__35887;
var G__35894 = chunk__35888;
var G__35895 = count__35889;
var G__35896 = (i__35890 + (1));
seq__35887 = G__35893;
chunk__35888 = G__35894;
count__35889 = G__35895;
i__35890 = G__35896;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__35887);
if(temp__4126__auto__){
var seq__35887__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35887__$1)){
var c__4584__auto__ = cljs.core.chunk_first.call(null,seq__35887__$1);
var G__35897 = cljs.core.chunk_rest.call(null,seq__35887__$1);
var G__35898 = c__4584__auto__;
var G__35899 = cljs.core.count.call(null,c__4584__auto__);
var G__35900 = (0);
seq__35887 = G__35897;
chunk__35888 = G__35898;
count__35889 = G__35899;
i__35890 = G__35900;
continue;
} else {
var vec__35892 = cljs.core.first.call(null,seq__35887__$1);
var name = cljs.core.nth.call(null,vec__35892,(0),null);
var value = cljs.core.nth.call(null,vec__35892,(1),null);
domina.set_attr_BANG_.call(null,p1__35880_SHARP_,name,value);

var G__35901 = cljs.core.next.call(null,seq__35887__$1);
var G__35902 = null;
var G__35903 = (0);
var G__35904 = (0);
seq__35887 = G__35901;
chunk__35888 = G__35902;
count__35889 = G__35903;
i__35890 = G__35904;
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
var G__35905__i = 0, G__35905__a = new Array(arguments.length -  0);
while (G__35905__i < G__35905__a.length) {G__35905__a[G__35905__i] = arguments[G__35905__i + 0]; ++G__35905__i;}
  values = new cljs.core.IndexedSeq(G__35905__a,0);
} 
return set_attr__delegate.call(this,values);};
set_attr.cljs$lang$maxFixedArity = 0;
set_attr.cljs$lang$applyTo = (function (arglist__35906){
var values = cljs.core.seq(arglist__35906);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__35907_SHARP_){
var seq__35912 = cljs.core.seq.call(null,values);
var chunk__35913 = null;
var count__35914 = (0);
var i__35915 = (0);
while(true){
if((i__35915 < count__35914)){
var name = cljs.core._nth.call(null,chunk__35913,i__35915);
domina.remove_attr_BANG_.call(null,p1__35907_SHARP_,name);

var G__35916 = seq__35912;
var G__35917 = chunk__35913;
var G__35918 = count__35914;
var G__35919 = (i__35915 + (1));
seq__35912 = G__35916;
chunk__35913 = G__35917;
count__35914 = G__35918;
i__35915 = G__35919;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__35912);
if(temp__4126__auto__){
var seq__35912__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35912__$1)){
var c__4584__auto__ = cljs.core.chunk_first.call(null,seq__35912__$1);
var G__35920 = cljs.core.chunk_rest.call(null,seq__35912__$1);
var G__35921 = c__4584__auto__;
var G__35922 = cljs.core.count.call(null,c__4584__auto__);
var G__35923 = (0);
seq__35912 = G__35920;
chunk__35913 = G__35921;
count__35914 = G__35922;
i__35915 = G__35923;
continue;
} else {
var name = cljs.core.first.call(null,seq__35912__$1);
domina.remove_attr_BANG_.call(null,p1__35907_SHARP_,name);

var G__35924 = cljs.core.next.call(null,seq__35912__$1);
var G__35925 = null;
var G__35926 = (0);
var G__35927 = (0);
seq__35912 = G__35924;
chunk__35913 = G__35925;
count__35914 = G__35926;
i__35915 = G__35927;
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
var G__35928__i = 0, G__35928__a = new Array(arguments.length -  0);
while (G__35928__i < G__35928__a.length) {G__35928__a[G__35928__i] = arguments[G__35928__i + 0]; ++G__35928__i;}
  values = new cljs.core.IndexedSeq(G__35928__a,0);
} 
return remove_attr__delegate.call(this,values);};
remove_attr.cljs$lang$maxFixedArity = 0;
remove_attr.cljs$lang$applyTo = (function (arglist__35929){
var values = cljs.core.seq(arglist__35929);
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
var h = cljs.core.mapcat.call(null,(function (p__35932){
var vec__35933 = p__35932;
var n = cljs.core.nth.call(null,vec__35933,(0),null);
var v = cljs.core.nth.call(null,vec__35933,(1),null);
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,v),cljs.core.name.call(null,n));
}),cljs.core.partition.call(null,(2),forms));
return goog.dom.setProperties(node,cljs.core.apply.call(null,cljs.core.js_obj,h));
});
};
var set_prop = function (var_args){
var forms = null;
if (arguments.length > 0) {
var G__35934__i = 0, G__35934__a = new Array(arguments.length -  0);
while (G__35934__i < G__35934__a.length) {G__35934__a[G__35934__i] = arguments[G__35934__i + 0]; ++G__35934__i;}
  forms = new cljs.core.IndexedSeq(G__35934__a,0);
} 
return set_prop__delegate.call(this,forms);};
set_prop.cljs$lang$maxFixedArity = 0;
set_prop.cljs$lang$applyTo = (function (arglist__35935){
var forms = cljs.core.seq(arglist__35935);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__35936_SHARP_){
var seq__35941 = cljs.core.seq.call(null,values);
var chunk__35942 = null;
var count__35943 = (0);
var i__35944 = (0);
while(true){
if((i__35944 < count__35943)){
var val = cljs.core._nth.call(null,chunk__35942,i__35944);
domina.add_class_BANG_.call(null,p1__35936_SHARP_,val);

var G__35945 = seq__35941;
var G__35946 = chunk__35942;
var G__35947 = count__35943;
var G__35948 = (i__35944 + (1));
seq__35941 = G__35945;
chunk__35942 = G__35946;
count__35943 = G__35947;
i__35944 = G__35948;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__35941);
if(temp__4126__auto__){
var seq__35941__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35941__$1)){
var c__4584__auto__ = cljs.core.chunk_first.call(null,seq__35941__$1);
var G__35949 = cljs.core.chunk_rest.call(null,seq__35941__$1);
var G__35950 = c__4584__auto__;
var G__35951 = cljs.core.count.call(null,c__4584__auto__);
var G__35952 = (0);
seq__35941 = G__35949;
chunk__35942 = G__35950;
count__35943 = G__35951;
i__35944 = G__35952;
continue;
} else {
var val = cljs.core.first.call(null,seq__35941__$1);
domina.add_class_BANG_.call(null,p1__35936_SHARP_,val);

var G__35953 = cljs.core.next.call(null,seq__35941__$1);
var G__35954 = null;
var G__35955 = (0);
var G__35956 = (0);
seq__35941 = G__35953;
chunk__35942 = G__35954;
count__35943 = G__35955;
i__35944 = G__35956;
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
var G__35957__i = 0, G__35957__a = new Array(arguments.length -  0);
while (G__35957__i < G__35957__a.length) {G__35957__a[G__35957__i] = arguments[G__35957__i + 0]; ++G__35957__i;}
  values = new cljs.core.IndexedSeq(G__35957__a,0);
} 
return add_class__delegate.call(this,values);};
add_class.cljs$lang$maxFixedArity = 0;
add_class.cljs$lang$applyTo = (function (arglist__35958){
var values = cljs.core.seq(arglist__35958);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__35959_SHARP_){
var seq__35964 = cljs.core.seq.call(null,values);
var chunk__35965 = null;
var count__35966 = (0);
var i__35967 = (0);
while(true){
if((i__35967 < count__35966)){
var val = cljs.core._nth.call(null,chunk__35965,i__35967);
domina.remove_class_BANG_.call(null,p1__35959_SHARP_,val);

var G__35968 = seq__35964;
var G__35969 = chunk__35965;
var G__35970 = count__35966;
var G__35971 = (i__35967 + (1));
seq__35964 = G__35968;
chunk__35965 = G__35969;
count__35966 = G__35970;
i__35967 = G__35971;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__35964);
if(temp__4126__auto__){
var seq__35964__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35964__$1)){
var c__4584__auto__ = cljs.core.chunk_first.call(null,seq__35964__$1);
var G__35972 = cljs.core.chunk_rest.call(null,seq__35964__$1);
var G__35973 = c__4584__auto__;
var G__35974 = cljs.core.count.call(null,c__4584__auto__);
var G__35975 = (0);
seq__35964 = G__35972;
chunk__35965 = G__35973;
count__35966 = G__35974;
i__35967 = G__35975;
continue;
} else {
var val = cljs.core.first.call(null,seq__35964__$1);
domina.remove_class_BANG_.call(null,p1__35959_SHARP_,val);

var G__35976 = cljs.core.next.call(null,seq__35964__$1);
var G__35977 = null;
var G__35978 = (0);
var G__35979 = (0);
seq__35964 = G__35976;
chunk__35965 = G__35977;
count__35966 = G__35978;
i__35967 = G__35979;
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
var G__35980__i = 0, G__35980__a = new Array(arguments.length -  0);
while (G__35980__i < G__35980__a.length) {G__35980__a[G__35980__i] = arguments[G__35980__i + 0]; ++G__35980__i;}
  values = new cljs.core.IndexedSeq(G__35980__a,0);
} 
return remove_class__delegate.call(this,values);};
remove_class.cljs$lang$maxFixedArity = 0;
remove_class.cljs$lang$applyTo = (function (arglist__35981){
var values = cljs.core.seq(arglist__35981);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__35982_SHARP_){
return domina.set_classes_BANG_.call(null,p1__35982_SHARP_,values);
}));
};
var set_class = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__35983__i = 0, G__35983__a = new Array(arguments.length -  0);
while (G__35983__i < G__35983__a.length) {G__35983__a[G__35983__i] = arguments[G__35983__i + 0]; ++G__35983__i;}
  values = new cljs.core.IndexedSeq(G__35983__a,0);
} 
return set_class__delegate.call(this,values);};
set_class.cljs$lang$maxFixedArity = 0;
set_class.cljs$lang$applyTo = (function (arglist__35984){
var values = cljs.core.seq(arglist__35984);
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
var seq__35989 = cljs.core.seq.call(null,forms);
var chunk__35990 = null;
var count__35991 = (0);
var i__35992 = (0);
while(true){
if((i__35992 < count__35991)){
var fun = cljs.core._nth.call(null,chunk__35990,i__35992);
enfocus.core.apply_transform.call(null,fun,pnod);

var G__35993 = seq__35989;
var G__35994 = chunk__35990;
var G__35995 = count__35991;
var G__35996 = (i__35992 + (1));
seq__35989 = G__35993;
chunk__35990 = G__35994;
count__35991 = G__35995;
i__35992 = G__35996;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__35989);
if(temp__4126__auto__){
var seq__35989__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35989__$1)){
var c__4584__auto__ = cljs.core.chunk_first.call(null,seq__35989__$1);
var G__35997 = cljs.core.chunk_rest.call(null,seq__35989__$1);
var G__35998 = c__4584__auto__;
var G__35999 = cljs.core.count.call(null,c__4584__auto__);
var G__36000 = (0);
seq__35989 = G__35997;
chunk__35990 = G__35998;
count__35991 = G__35999;
i__35992 = G__36000;
continue;
} else {
var fun = cljs.core.first.call(null,seq__35989__$1);
enfocus.core.apply_transform.call(null,fun,pnod);

var G__36001 = cljs.core.next.call(null,seq__35989__$1);
var G__36002 = null;
var G__36003 = (0);
var G__36004 = (0);
seq__35989 = G__36001;
chunk__35990 = G__36002;
count__35991 = G__36003;
i__35992 = G__36004;
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
var G__36005__i = 0, G__36005__a = new Array(arguments.length -  0);
while (G__36005__i < G__36005__a.length) {G__36005__a[G__36005__i] = arguments[G__36005__i + 0]; ++G__36005__i;}
  forms = new cljs.core.IndexedSeq(G__36005__a,0);
} 
return do__GT___delegate.call(this,forms);};
do__GT_.cljs$lang$maxFixedArity = 0;
do__GT_.cljs$lang$applyTo = (function (arglist__36006){
var forms = cljs.core.seq(arglist__36006);
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
return enfocus.core.multi_node_chain.call(null,values,(function (p1__36007_SHARP_,p2__36008_SHARP_){
return domina.append_BANG_.call(null,p1__36007_SHARP_,p2__36008_SHARP_);
}));
};
var append = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__36009__i = 0, G__36009__a = new Array(arguments.length -  0);
while (G__36009__i < G__36009__a.length) {G__36009__a[G__36009__i] = arguments[G__36009__i + 0]; ++G__36009__i;}
  values = new cljs.core.IndexedSeq(G__36009__a,0);
} 
return append__delegate.call(this,values);};
append.cljs$lang$maxFixedArity = 0;
append.cljs$lang$applyTo = (function (arglist__36010){
var values = cljs.core.seq(arglist__36010);
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
return enfocus.core.multi_node_chain.call(null,values,(function (p1__36011_SHARP_,p2__36012_SHARP_){
return domina.prepend_BANG_.call(null,p1__36011_SHARP_,p2__36012_SHARP_);
}));
};
var prepend = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__36013__i = 0, G__36013__a = new Array(arguments.length -  0);
while (G__36013__i < G__36013__a.length) {G__36013__a[G__36013__i] = arguments[G__36013__i + 0]; ++G__36013__i;}
  values = new cljs.core.IndexedSeq(G__36013__a,0);
} 
return prepend__delegate.call(this,values);};
prepend.cljs$lang$maxFixedArity = 0;
prepend.cljs$lang$applyTo = (function (arglist__36014){
var values = cljs.core.seq(arglist__36014);
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
return enfocus.core.multi_node_chain.call(null,values,(function (p1__36015_SHARP_,p2__36016_SHARP_){
return domina.insert_before_BANG_.call(null,p1__36015_SHARP_,p2__36016_SHARP_);
}));
};
var before = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__36017__i = 0, G__36017__a = new Array(arguments.length -  0);
while (G__36017__i < G__36017__a.length) {G__36017__a[G__36017__i] = arguments[G__36017__i + 0]; ++G__36017__i;}
  values = new cljs.core.IndexedSeq(G__36017__a,0);
} 
return before__delegate.call(this,values);};
before.cljs$lang$maxFixedArity = 0;
before.cljs$lang$applyTo = (function (arglist__36018){
var values = cljs.core.seq(arglist__36018);
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
return enfocus.core.multi_node_chain.call(null,values,(function (p1__36019_SHARP_,p2__36020_SHARP_){
return domina.insert_after_BANG_.call(null,p1__36019_SHARP_,p2__36020_SHARP_);
}));
};
var after = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__36021__i = 0, G__36021__a = new Array(arguments.length -  0);
while (G__36021__i < G__36021__a.length) {G__36021__a[G__36021__i] = arguments[G__36021__i + 0]; ++G__36021__i;}
  values = new cljs.core.IndexedSeq(G__36021__a,0);
} 
return after__delegate.call(this,values);};
after.cljs$lang$maxFixedArity = 0;
after.cljs$lang$applyTo = (function (arglist__36022){
var values = cljs.core.seq(arglist__36022);
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
return enfocus.core.multi_node_chain.call(null,values,(function (p1__36023_SHARP_,p2__36024_SHARP_){
return domina.swap_content_BANG_.call(null,p1__36023_SHARP_,p2__36024_SHARP_);
}));
};
var substitute = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__36025__i = 0, G__36025__a = new Array(arguments.length -  0);
while (G__36025__i < G__36025__a.length) {G__36025__a[G__36025__i] = arguments[G__36025__i + 0]; ++G__36025__i;}
  values = new cljs.core.IndexedSeq(G__36025__a,0);
} 
return substitute__delegate.call(this,values);};
substitute.cljs$lang$maxFixedArity = 0;
substitute.cljs$lang$applyTo = (function (arglist__36026){
var values = cljs.core.seq(arglist__36026);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__36027_SHARP_){
return domina.detach_BANG_.call(null,p1__36027_SHARP_);
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
return (function (p1__36028_SHARP_){
var seq__36035 = cljs.core.seq.call(null,pairs);
var chunk__36036 = null;
var count__36037 = (0);
var i__36038 = (0);
while(true){
if((i__36038 < count__36037)){
var vec__36039 = cljs.core._nth.call(null,chunk__36036,i__36038);
var name = cljs.core.nth.call(null,vec__36039,(0),null);
var value = cljs.core.nth.call(null,vec__36039,(1),null);
domina.set_style_BANG_.call(null,p1__36028_SHARP_,name,value);

var G__36041 = seq__36035;
var G__36042 = chunk__36036;
var G__36043 = count__36037;
var G__36044 = (i__36038 + (1));
seq__36035 = G__36041;
chunk__36036 = G__36042;
count__36037 = G__36043;
i__36038 = G__36044;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__36035);
if(temp__4126__auto__){
var seq__36035__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36035__$1)){
var c__4584__auto__ = cljs.core.chunk_first.call(null,seq__36035__$1);
var G__36045 = cljs.core.chunk_rest.call(null,seq__36035__$1);
var G__36046 = c__4584__auto__;
var G__36047 = cljs.core.count.call(null,c__4584__auto__);
var G__36048 = (0);
seq__36035 = G__36045;
chunk__36036 = G__36046;
count__36037 = G__36047;
i__36038 = G__36048;
continue;
} else {
var vec__36040 = cljs.core.first.call(null,seq__36035__$1);
var name = cljs.core.nth.call(null,vec__36040,(0),null);
var value = cljs.core.nth.call(null,vec__36040,(1),null);
domina.set_style_BANG_.call(null,p1__36028_SHARP_,name,value);

var G__36049 = cljs.core.next.call(null,seq__36035__$1);
var G__36050 = null;
var G__36051 = (0);
var G__36052 = (0);
seq__36035 = G__36049;
chunk__36036 = G__36050;
count__36037 = G__36051;
i__36038 = G__36052;
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
var G__36053__i = 0, G__36053__a = new Array(arguments.length -  0);
while (G__36053__i < G__36053__a.length) {G__36053__a[G__36053__i] = arguments[G__36053__i + 0]; ++G__36053__i;}
  values = new cljs.core.IndexedSeq(G__36053__a,0);
} 
return set_style__delegate.call(this,values);};
set_style.cljs$lang$maxFixedArity = 0;
set_style.cljs$lang$applyTo = (function (arglist__36054){
var values = cljs.core.seq(arglist__36054);
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
var G__36055__i = 0, G__36055__a = new Array(arguments.length -  0);
while (G__36055__i < G__36055__a.length) {G__36055__a[G__36055__i] = arguments[G__36055__i + 0]; ++G__36055__i;}
  values = new cljs.core.IndexedSeq(G__36055__a,0);
} 
return remove_style__delegate.call(this,values);};
remove_style.cljs$lang$maxFixedArity = 0;
remove_style.cljs$lang$applyTo = (function (arglist__36056){
var values = cljs.core.seq(arglist__36056);
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
return enfocus.core.multi_node_chain.call(null,(function (p1__36057_SHARP_){
return domina.set_data_BANG_.call(null,p1__36057_SHARP_,ky,val);
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
var G__36058__i = 0, G__36058__a = new Array(arguments.length -  1);
while (G__36058__i < G__36058__a.length) {G__36058__a[G__36058__i] = arguments[G__36058__i + 1]; ++G__36058__i;}
  funcs = new cljs.core.IndexedSeq(G__36058__a,0);
} 
return delay__delegate.call(this,ttime,funcs);};
delay.cljs$lang$maxFixedArity = 1;
delay.cljs$lang$applyTo = (function (arglist__36059){
var ttime = cljs.core.first(arglist__36059);
var funcs = cljs.core.rest(arglist__36059);
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
return clojure.string.replace.call(null,text,/\$\{\s*(\S+)\s*}/,(function (p1__36061_SHARP_,p2__36060_SHARP_){
return vars.call(null,cljs.core.keyword.call(null,p2__36060_SHARP_));
}));
});
return (function rep_node(pnod){
if(cljs.core.truth_(pnod.attributes)){
var seq__36086_36094 = cljs.core.seq.call(null,cljs.core.range.call(null,pnod.attributes.length));
var chunk__36087_36095 = null;
var count__36088_36096 = (0);
var i__36089_36097 = (0);
while(true){
if((i__36089_36097 < count__36088_36096)){
var idx_36098 = cljs.core._nth.call(null,chunk__36087_36095,i__36089_36097);
var attr_36099 = pnod.attributes.item(idx_36098);
if(cljs.core.truth_(attr_36099.specified)){
attr_36099.value = rep_str.call(null,attr_36099.value);
} else {
}

var G__36100 = seq__36086_36094;
var G__36101 = chunk__36087_36095;
var G__36102 = count__36088_36096;
var G__36103 = (i__36089_36097 + (1));
seq__36086_36094 = G__36100;
chunk__36087_36095 = G__36101;
count__36088_36096 = G__36102;
i__36089_36097 = G__36103;
continue;
} else {
var temp__4126__auto___36104 = cljs.core.seq.call(null,seq__36086_36094);
if(temp__4126__auto___36104){
var seq__36086_36105__$1 = temp__4126__auto___36104;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36086_36105__$1)){
var c__4584__auto___36106 = cljs.core.chunk_first.call(null,seq__36086_36105__$1);
var G__36107 = cljs.core.chunk_rest.call(null,seq__36086_36105__$1);
var G__36108 = c__4584__auto___36106;
var G__36109 = cljs.core.count.call(null,c__4584__auto___36106);
var G__36110 = (0);
seq__36086_36094 = G__36107;
chunk__36087_36095 = G__36108;
count__36088_36096 = G__36109;
i__36089_36097 = G__36110;
continue;
} else {
var idx_36111 = cljs.core.first.call(null,seq__36086_36105__$1);
var attr_36112 = pnod.attributes.item(idx_36111);
if(cljs.core.truth_(attr_36112.specified)){
attr_36112.value = rep_str.call(null,attr_36112.value);
} else {
}

var G__36113 = cljs.core.next.call(null,seq__36086_36105__$1);
var G__36114 = null;
var G__36115 = (0);
var G__36116 = (0);
seq__36086_36094 = G__36113;
chunk__36087_36095 = G__36114;
count__36088_36096 = G__36115;
i__36089_36097 = G__36116;
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
var seq__36090 = cljs.core.seq.call(null,enfocus.core.nodes__GT_coll.call(null,pnod.childNodes));
var chunk__36091 = null;
var count__36092 = (0);
var i__36093 = (0);
while(true){
if((i__36093 < count__36092)){
var cnode = cljs.core._nth.call(null,chunk__36091,i__36093);
rep_node.call(null,cnode);

var G__36117 = seq__36090;
var G__36118 = chunk__36091;
var G__36119 = count__36092;
var G__36120 = (i__36093 + (1));
seq__36090 = G__36117;
chunk__36091 = G__36118;
count__36092 = G__36119;
i__36093 = G__36120;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__36090);
if(temp__4126__auto__){
var seq__36090__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36090__$1)){
var c__4584__auto__ = cljs.core.chunk_first.call(null,seq__36090__$1);
var G__36121 = cljs.core.chunk_rest.call(null,seq__36090__$1);
var G__36122 = c__4584__auto__;
var G__36123 = cljs.core.count.call(null,c__4584__auto__);
var G__36124 = (0);
seq__36090 = G__36121;
chunk__36091 = G__36122;
count__36092 = G__36123;
i__36093 = G__36124;
continue;
} else {
var cnode = cljs.core.first.call(null,seq__36090__$1);
rep_node.call(null,cnode);

var G__36125 = cljs.core.next.call(null,seq__36090__$1);
var G__36126 = null;
var G__36127 = (0);
var G__36128 = (0);
seq__36090 = G__36125;
chunk__36091 = G__36126;
count__36092 = G__36127;
i__36093 = G__36128;
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
var seq__36133 = cljs.core.seq.call(null,cljs.core.range.call(null,form_node.length));
var chunk__36134 = null;
var count__36135 = (0);
var i__36136 = (0);
while(true){
if((i__36136 < count__36135)){
var idx = cljs.core._nth.call(null,chunk__36134,i__36136);
var el_36137 = (form_node.elements[idx]);
var ky_36138 = cljs.core.keyword.call(null,el_36137.name);
var val_36139 = ky_36138.call(null,value_map);
if(cljs.core.contains_QMARK_.call(null,value_map,ky_36138)){
var val_36140__$1 = (cljs.core.truth_(val_36139)?val_36139:"");
enfocus.core.set_form_input.call(null,val_36140__$1).call(null,el_36137);
} else {
}

var G__36141 = seq__36133;
var G__36142 = chunk__36134;
var G__36143 = count__36135;
var G__36144 = (i__36136 + (1));
seq__36133 = G__36141;
chunk__36134 = G__36142;
count__36135 = G__36143;
i__36136 = G__36144;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__36133);
if(temp__4126__auto__){
var seq__36133__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36133__$1)){
var c__4584__auto__ = cljs.core.chunk_first.call(null,seq__36133__$1);
var G__36145 = cljs.core.chunk_rest.call(null,seq__36133__$1);
var G__36146 = c__4584__auto__;
var G__36147 = cljs.core.count.call(null,c__4584__auto__);
var G__36148 = (0);
seq__36133 = G__36145;
chunk__36134 = G__36146;
count__36135 = G__36147;
i__36136 = G__36148;
continue;
} else {
var idx = cljs.core.first.call(null,seq__36133__$1);
var el_36149 = (form_node.elements[idx]);
var ky_36150 = cljs.core.keyword.call(null,el_36149.name);
var val_36151 = ky_36150.call(null,value_map);
if(cljs.core.contains_QMARK_.call(null,value_map,ky_36150)){
var val_36152__$1 = (cljs.core.truth_(val_36151)?val_36151:"");
enfocus.core.set_form_input.call(null,val_36152__$1).call(null,el_36149);
} else {
}

var G__36153 = cljs.core.next.call(null,seq__36133__$1);
var G__36154 = null;
var G__36155 = (0);
var G__36156 = (0);
seq__36133 = G__36153;
chunk__36134 = G__36154;
count__36135 = G__36155;
i__36136 = G__36156;
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
var vec__36166 = node_spec;
var tag = cljs.core.nth.call(null,vec__36166,(0),null);
var vec__36167 = cljs.core.nthnext.call(null,vec__36166,(1));
var m = cljs.core.nth.call(null,vec__36167,(0),null);
var ms = cljs.core.nthnext.call(null,vec__36167,(1));
var more = vec__36167;
var vec__36168 = cljs.core.name.call(null,tag).split(/(?=[#.])/);
var tag_name = cljs.core.nth.call(null,vec__36168,(0),null);
var segments = cljs.core.nthnext.call(null,vec__36168,(1));
var id = cljs.core.some.call(null,((function (vec__36166,tag,vec__36167,m,ms,more,vec__36168,tag_name,segments){
return (function (seg){
if(cljs.core._EQ_.call(null,"#",seg.charAt((0)))){
return cljs.core.subs.call(null,seg,(1));
} else {
return null;
}
});})(vec__36166,tag,vec__36167,m,ms,more,vec__36168,tag_name,segments))
,segments);
var classes = cljs.core.keep.call(null,((function (vec__36166,tag,vec__36167,m,ms,more,vec__36168,tag_name,segments,id){
return (function (seg){
if(cljs.core._EQ_.call(null,".",seg.charAt((0)))){
return cljs.core.subs.call(null,seg,(1));
} else {
return null;
}
});})(vec__36166,tag,vec__36167,m,ms,more,vec__36168,tag_name,segments,id))
,segments);
var attrs = ((cljs.core.map_QMARK_.call(null,m))?m:cljs.core.PersistentArrayMap.EMPTY);
var attrs__$1 = (cljs.core.truth_(id)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"id","id",-1388402092),id):attrs);
var attrs__$2 = ((!(cljs.core.empty_QMARK_.call(null,classes)))?cljs.core.assoc.call(null,attrs__$1,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",classes))):attrs__$1);
var content = cljs.core.flatten.call(null,cljs.core.map.call(null,html,((cljs.core.map_QMARK_.call(null,m))?ms:more)));
var node = document.createElement(tag_name);
var seq__36169_36175 = cljs.core.seq.call(null,attrs__$2);
var chunk__36170_36176 = null;
var count__36171_36177 = (0);
var i__36172_36178 = (0);
while(true){
if((i__36172_36178 < count__36171_36177)){
var vec__36173_36179 = cljs.core._nth.call(null,chunk__36170_36176,i__36172_36178);
var key_36180 = cljs.core.nth.call(null,vec__36173_36179,(0),null);
var val_36181 = cljs.core.nth.call(null,vec__36173_36179,(1),null);
node.setAttribute(cljs.core.name.call(null,key_36180),val_36181);

var G__36182 = seq__36169_36175;
var G__36183 = chunk__36170_36176;
var G__36184 = count__36171_36177;
var G__36185 = (i__36172_36178 + (1));
seq__36169_36175 = G__36182;
chunk__36170_36176 = G__36183;
count__36171_36177 = G__36184;
i__36172_36178 = G__36185;
continue;
} else {
var temp__4126__auto___36186 = cljs.core.seq.call(null,seq__36169_36175);
if(temp__4126__auto___36186){
var seq__36169_36187__$1 = temp__4126__auto___36186;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36169_36187__$1)){
var c__4584__auto___36188 = cljs.core.chunk_first.call(null,seq__36169_36187__$1);
var G__36189 = cljs.core.chunk_rest.call(null,seq__36169_36187__$1);
var G__36190 = c__4584__auto___36188;
var G__36191 = cljs.core.count.call(null,c__4584__auto___36188);
var G__36192 = (0);
seq__36169_36175 = G__36189;
chunk__36170_36176 = G__36190;
count__36171_36177 = G__36191;
i__36172_36178 = G__36192;
continue;
} else {
var vec__36174_36193 = cljs.core.first.call(null,seq__36169_36187__$1);
var key_36194 = cljs.core.nth.call(null,vec__36174_36193,(0),null);
var val_36195 = cljs.core.nth.call(null,vec__36174_36193,(1),null);
node.setAttribute(cljs.core.name.call(null,key_36194),val_36195);

var G__36196 = cljs.core.next.call(null,seq__36169_36187__$1);
var G__36197 = null;
var G__36198 = (0);
var G__36199 = (0);
seq__36169_36175 = G__36196;
chunk__36170_36176 = G__36197;
count__36171_36177 = G__36198;
i__36172_36178 = G__36199;
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
return (function (p1__36201_SHARP_,p2__36200_SHARP_){
var vals = cljs.core.js__GT_clj.call(null,goog.dom.forms.getValue(p2__36200_SHARP_));
if((!(typeof vals === 'string')) && (cljs.core.coll_QMARK_.call(null,vals))){
return cljs.core.into.call(null,p1__36201_SHARP_,vals);
} else {
if(cljs.core.truth_(vals)){
return cljs.core.conj.call(null,p1__36201_SHARP_,vals);
} else {
return p1__36201_SHARP_;
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
if(typeof enfocus.core.t36206 !== 'undefined'){
} else {

/**
* @constructor
*/
enfocus.core.t36206 = (function (trans,read_form_input,meta36207){
this.trans = trans;
this.read_form_input = read_form_input;
this.meta36207 = meta36207;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
enfocus.core.t36206.prototype.call = ((function (trans){
return (function() {
var G__36210 = null;
var G__36210__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,null);
});
var G__36210__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,chain);
});
G__36210 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__36210__2.call(this,self__,nodes);
case 3:
return G__36210__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__36210.cljs$core$IFn$_invoke$arity$2 = G__36210__2;
G__36210.cljs$core$IFn$_invoke$arity$3 = G__36210__3;
return G__36210;
})()
;})(trans))
;

enfocus.core.t36206.prototype.apply = ((function (trans){
return (function (self__,args36209){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args36209)));
});})(trans))
;

enfocus.core.t36206.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t36206.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t36206.prototype.enfocus$core$ITransform$ = true;

enfocus.core.t36206.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t36206.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t36206.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_36208){
var self__ = this;
var _36208__$1 = this;
return self__.meta36207;
});})(trans))
;

enfocus.core.t36206.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_36208,meta36207__$1){
var self__ = this;
var _36208__$1 = this;
return (new enfocus.core.t36206(self__.trans,self__.read_form_input,meta36207__$1));
});})(trans))
;

enfocus.core.t36206.cljs$lang$type = true;

enfocus.core.t36206.cljs$lang$ctorStr = "enfocus.core/t36206";

enfocus.core.t36206.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__4384__auto__,writer__4385__auto__,opt__4386__auto__){
return cljs.core._write.call(null,writer__4385__auto__,"enfocus.core/t36206");
});})(trans))
;

enfocus.core.__GT_t36206 = ((function (trans){
return (function __GT_t36206(trans__$1,read_form_input__$1,meta36207){
return (new enfocus.core.t36206(trans__$1,read_form_input__$1,meta36207));
});})(trans))
;

}

return (new enfocus.core.t36206(trans,read_form_input,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),53,new cljs.core.Keyword(null,"end-line","end-line",1837326455),590,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),584,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/blischalk/node-webkit-apps/hoard/target/base+system+user+dev/cljsbuild-compiler-0/enfocus/core.cljs"], null)));
});
/**
* returns a map of the form values tied to name of input fields.
* {:name1 'value1' name2 #{'select1' 'select2'}}
*/
enfocus.core.read_form = (function read_form(){
return enfocus.core.extr_multi_node.call(null,(function (node){
var inputs = node.elements;
return cljs.core.reduce.call(null,((function (inputs){
return (function (p1__36212_SHARP_,p2__36211_SHARP_){
if(!(cljs.core.empty_QMARK_.call(null,inputs.item(p2__36211_SHARP_).name))){
return enfocus.core.merge_form_val.call(null,p1__36212_SHARP_,cljs.core.keyword.call(null,inputs.item(p2__36211_SHARP_).name),enfocus.core.read_form_input.call(null).call(null,inputs.item(p2__36211_SHARP_)));
} else {
return p1__36212_SHARP_;
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
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__36213_SHARP_){
if((p1__36213_SHARP_ instanceof cljs.core.Symbol)){
return enfocus.core.css_syms.call(null,p1__36213_SHARP_);
} else {
if((p1__36213_SHARP_ instanceof cljs.core.Keyword)){
return [cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,p1__36213_SHARP_).replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join('')))].join('');
} else {
if(cljs.core.vector_QMARK_.call(null,p1__36213_SHARP_)){
return create_sel_str.call(null,p1__36213_SHARP_);
} else {
if(typeof p1__36213_SHARP_ === 'string'){
return p1__36213_SHARP_.replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join(''));
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
var G__36224 = node;
if(G__36224){
var bit__4478__auto__ = null;
if(cljs.core.truth_((function (){var or__3797__auto__ = bit__4478__auto__;
if(cljs.core.truth_(or__3797__auto__)){
return or__3797__auto__;
} else {
return G__36224.enfocus$core$ISelector$;
}
})())){
return true;
} else {
if((!G__36224.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__36224);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__36224);
}
} else {
return and__3785__auto__;
}
})();
if((!(sel_QMARK_)) && (cljs.core._EQ_.call(null,(1),cnt))){
return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else {
var vec__36225 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));
var node__$1 = cljs.core.nth.call(null,vec__36225,(0),null);
var trans__$1 = cljs.core.nth.call(null,vec__36225,(1),null);
var seq__36226 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),trans__$1));
var chunk__36227 = null;
var count__36228 = (0);
var i__36229 = (0);
while(true){
if((i__36229 < count__36228)){
var vec__36230 = cljs.core._nth.call(null,chunk__36227,i__36229);
var sel = cljs.core.nth.call(null,vec__36230,(0),null);
var t = cljs.core.nth.call(null,vec__36230,(1),null);
enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));

var G__36232 = seq__36226;
var G__36233 = chunk__36227;
var G__36234 = count__36228;
var G__36235 = (i__36229 + (1));
seq__36226 = G__36232;
chunk__36227 = G__36233;
count__36228 = G__36234;
i__36229 = G__36235;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__36226);
if(temp__4126__auto__){
var seq__36226__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36226__$1)){
var c__4584__auto__ = cljs.core.chunk_first.call(null,seq__36226__$1);
var G__36236 = cljs.core.chunk_rest.call(null,seq__36226__$1);
var G__36237 = c__4584__auto__;
var G__36238 = cljs.core.count.call(null,c__4584__auto__);
var G__36239 = (0);
seq__36226 = G__36236;
chunk__36227 = G__36237;
count__36228 = G__36238;
i__36229 = G__36239;
continue;
} else {
var vec__36231 = cljs.core.first.call(null,seq__36226__$1);
var sel = cljs.core.nth.call(null,vec__36231,(0),null);
var t = cljs.core.nth.call(null,vec__36231,(1),null);
enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));

var G__36240 = cljs.core.next.call(null,seq__36226__$1);
var G__36241 = null;
var G__36242 = (0);
var G__36243 = (0);
seq__36226 = G__36240;
chunk__36227 = G__36241;
count__36228 = G__36242;
i__36229 = G__36243;
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
var G__36244__i = 0, G__36244__a = new Array(arguments.length -  2);
while (G__36244__i < G__36244__a.length) {G__36244__a[G__36244__i] = arguments[G__36244__i + 2]; ++G__36244__i;}
  trans = new cljs.core.IndexedSeq(G__36244__a,0);
} 
return i_at__delegate.call(this,id_mask,node,trans);};
i_at.cljs$lang$maxFixedArity = 2;
i_at.cljs$lang$applyTo = (function (arglist__36245){
var id_mask = cljs.core.first(arglist__36245);
arglist__36245 = cljs.core.next(arglist__36245);
var node = cljs.core.first(arglist__36245);
var trans = cljs.core.rest(arglist__36245);
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
var G__36246__i = 0, G__36246__a = new Array(arguments.length -  1);
while (G__36246__i < G__36246__a.length) {G__36246__a[G__36246__i] = arguments[G__36246__i + 1]; ++G__36246__i;}
  trans = new cljs.core.IndexedSeq(G__36246__a,0);
} 
return at__delegate.call(this,node,trans);};
at.cljs$lang$maxFixedArity = 1;
at.cljs$lang$applyTo = (function (arglist__36247){
var node = cljs.core.first(arglist__36247);
var trans = cljs.core.rest(arglist__36247);
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
var sel_QMARK_ = (function (){var G__36252 = node;
if(G__36252){
var bit__4478__auto__ = null;
if(cljs.core.truth_((function (){var or__3797__auto__ = bit__4478__auto__;
if(cljs.core.truth_(or__3797__auto__)){
return or__3797__auto__;
} else {
return G__36252.enfocus$core$ISelector$;
}
})())){
return true;
} else {
if((!G__36252.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__36252);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__36252);
}
})();
if((sel_QMARK_) && (cljs.core._EQ_.call(null,(1),cnt))){
return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),enfocus.core.select.call(null,node));
} else {
if(cljs.core._EQ_.call(null,(1),cnt)){
return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else {
var vec__36253 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));
var node__$1 = cljs.core.nth.call(null,vec__36253,(0),null);
var trans__$1 = cljs.core.nth.call(null,vec__36253,(1),null);
return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,((function (vec__36253,node__$1,trans__$1,cnt,sel_QMARK_){
return (function (p__36254){
var vec__36255 = p__36254;
var ky = cljs.core.nth.call(null,vec__36255,(0),null);
var sel = cljs.core.nth.call(null,vec__36255,(1),null);
var ext = cljs.core.nth.call(null,vec__36255,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ky,enfocus.core.apply_transform.call(null,ext,enfocus.core.select.call(null,sel,node__$1,""))], null);
});})(vec__36253,node__$1,trans__$1,cnt,sel_QMARK_))
,cljs.core.partition.call(null,(3),trans__$1)));

}
}
};
var from = function (node,var_args){
var trans = null;
if (arguments.length > 1) {
var G__36256__i = 0, G__36256__a = new Array(arguments.length -  1);
while (G__36256__i < G__36256__a.length) {G__36256__a[G__36256__i] = arguments[G__36256__i + 1]; ++G__36256__i;}
  trans = new cljs.core.IndexedSeq(G__36256__a,0);
} 
return from__delegate.call(this,node,trans);};
from.cljs$lang$maxFixedArity = 1;
from.cljs$lang$applyTo = (function (arglist__36257){
var node = cljs.core.first(arglist__36257);
var trans = cljs.core.rest(arglist__36257);
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
var G__36258 = null;
var G__36258__1 = (function (this$){
return cljs.core.List.EMPTY;
});
var G__36258__2 = (function (this$,root){
return cljs.core.List.EMPTY;
});
var G__36258__3 = (function (this$,root,id_mask){
return cljs.core.List.EMPTY;
});
G__36258 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__36258__1.call(this,this$);
case 2:
return G__36258__2.call(this,this$,root);
case 3:
return G__36258__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__36258.cljs$core$IFn$_invoke$arity$1 = G__36258__1;
G__36258.cljs$core$IFn$_invoke$arity$2 = G__36258__2;
G__36258.cljs$core$IFn$_invoke$arity$3 = G__36258__3;
return G__36258;
})()
);

(enfocus.core.ISelector["string"] = true);

(enfocus.core.select["string"] = (function() {
var G__36259 = null;
var G__36259__1 = (function (this$){
return enfocus.core.select.call(null,this$,document,"");
});
var G__36259__2 = (function (this$,root){
return enfocus.core.select.call(null,this$,root,"");
});
var G__36259__3 = (function (this$,root,id_mask){
return enfocus.core.css_select.call(null,id_mask,root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
});
G__36259 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__36259__1.call(this,this$);
case 2:
return G__36259__2.call(this,this$,root);
case 3:
return G__36259__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__36259.cljs$core$IFn$_invoke$arity$1 = G__36259__1;
G__36259.cljs$core$IFn$_invoke$arity$2 = G__36259__2;
G__36259.cljs$core$IFn$_invoke$arity$3 = G__36259__3;
return G__36259;
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
var G__36260 = null;
var G__36260__1 = (function (this$){
return enfocus.core.select.call(null,this$,document,"");
});
var G__36260__2 = (function (this$,root){
return enfocus.core.select.call(null,this$,root,"");
});
var G__36260__3 = (function (this$,root,id_mask){
return this$.call(null,root,id_mask);
});
G__36260 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__36260__1.call(this,this$);
case 2:
return G__36260__2.call(this,this$,root);
case 3:
return G__36260__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__36260.cljs$core$IFn$_invoke$arity$1 = G__36260__1;
G__36260.cljs$core$IFn$_invoke$arity$2 = G__36260__2;
G__36260.cljs$core$IFn$_invoke$arity$3 = G__36260__3;
return G__36260;
})()
);
(enfocus.core.ITransform["null"] = true);

(enfocus.core.apply_transform["null"] = (function() {
var G__36261 = null;
var G__36261__2 = (function (trans,nodes){
return nodes;
});
var G__36261__3 = (function (trans,nodes,chain){
return nodes;
});
G__36261 = function(trans,nodes,chain){
switch(arguments.length){
case 2:
return G__36261__2.call(this,trans,nodes);
case 3:
return G__36261__3.call(this,trans,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__36261.cljs$core$IFn$_invoke$arity$2 = G__36261__2;
G__36261.cljs$core$IFn$_invoke$arity$3 = G__36261__3;
return G__36261;
})()
);

(enfocus.core.ITransform["function"] = true);

(enfocus.core.apply_transform["function"] = (function() {
var G__36262 = null;
var G__36262__2 = (function (trans,nodes){
return cljs.core.doall.call(null,cljs.core.map.call(null,trans,enfocus.core.nodes__GT_coll.call(null,nodes)));
});
var G__36262__3 = (function (trans,nodes,chain){
var pnod_col = enfocus.core.nodes__GT_coll.call(null,nodes);
var val = cljs.core.doall.call(null,cljs.core.map.call(null,trans,pnod_col));
if(cljs.core.truth_(chain)){
return enfocus.core.apply_transform.call(null,chain,nodes);
} else {
return val;
}
});
G__36262 = function(trans,nodes,chain){
switch(arguments.length){
case 2:
return G__36262__2.call(this,trans,nodes);
case 3:
return G__36262__3.call(this,trans,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__36262.cljs$core$IFn$_invoke$arity$2 = G__36262__2;
G__36262.cljs$core$IFn$_invoke$arity$3 = G__36262__3;
return G__36262;
})()
);
