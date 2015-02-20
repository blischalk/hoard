// Compiled by ClojureScript 0.0-2814 {}
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.xml');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.events');
goog.require('goog.style');
goog.require('clojure.string');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_12544 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_12545 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_12546 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_12546,opt_wrapper_12544,table_section_wrapper_12545,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_12544,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_12545,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_12545,cell_wrapper_12546,table_section_wrapper_12545,table_section_wrapper_12545]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3785__auto__ = div.firstChild;
if(cljs.core.truth_(and__3785__auto__)){
return div.firstChild.childNodes;
} else {
return and__3785__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__12551 = cljs.core.seq.call(null,tbody);
var chunk__12552 = null;
var count__12553 = (0);
var i__12554 = (0);
while(true){
if((i__12554 < count__12553)){
var child = cljs.core._nth.call(null,chunk__12552,i__12554);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__12555 = seq__12551;
var G__12556 = chunk__12552;
var G__12557 = count__12553;
var G__12558 = (i__12554 + (1));
seq__12551 = G__12555;
chunk__12552 = G__12556;
count__12553 = G__12557;
i__12554 = G__12558;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12551);
if(temp__4126__auto__){
var seq__12551__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12551__$1)){
var c__4584__auto__ = cljs.core.chunk_first.call(null,seq__12551__$1);
var G__12559 = cljs.core.chunk_rest.call(null,seq__12551__$1);
var G__12560 = c__4584__auto__;
var G__12561 = cljs.core.count.call(null,c__4584__auto__);
var G__12562 = (0);
seq__12551 = G__12559;
chunk__12552 = G__12560;
count__12553 = G__12561;
i__12554 = G__12562;
continue;
} else {
var child = cljs.core.first.call(null,seq__12551__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__12563 = cljs.core.next.call(null,seq__12551__$1);
var G__12564 = null;
var G__12565 = (0);
var G__12566 = (0);
seq__12551 = G__12563;
chunk__12552 = G__12564;
count__12553 = G__12565;
i__12554 = G__12566;
continue;
}
} else {
return null;
}
}
break;
}
});
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){
return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){
var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();
var vec__12568 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__12568,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__12568,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__12568,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__12569 = wrapper.lastChild;
var G__12570 = (level - (1));
wrapper = G__12569;
level = G__12570;
continue;
} else {
return wrapper;
}
break;
}
})();
if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_)){
domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else {
}

if(cljs.core.truth_((function (){var and__3785__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);
if(and__3785__auto__){
return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else {
return and__3785__auto__;
}
})())){
domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else {
}

return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){
if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s))){
return domina.html_to_dom.call(null,s);
} else {
return document.createTextNode(s);
}
});

domina.DomContent = (function (){var obj12572 = {};
return obj12572;
})();

domina.nodes = (function nodes(content){
if((function (){var and__3785__auto__ = content;
if(and__3785__auto__){
return content.domina$DomContent$nodes$arity$1;
} else {
return and__3785__auto__;
}
})()){
return content.domina$DomContent$nodes$arity$1(content);
} else {
var x__4441__auto__ = (((content == null))?null:content);
return (function (){var or__3797__auto__ = (domina.nodes[goog.typeOf(x__4441__auto__)]);
if(or__3797__auto__){
return or__3797__auto__;
} else {
var or__3797__auto____$1 = (domina.nodes["_"]);
if(or__3797__auto____$1){
return or__3797__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});

domina.single_node = (function single_node(nodeseq){
if((function (){var and__3785__auto__ = nodeseq;
if(and__3785__auto__){
return nodeseq.domina$DomContent$single_node$arity$1;
} else {
return and__3785__auto__;
}
})()){
return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else {
var x__4441__auto__ = (((nodeseq == null))?null:nodeseq);
return (function (){var or__3797__auto__ = (domina.single_node[goog.typeOf(x__4441__auto__)]);
if(or__3797__auto__){
return or__3797__auto__;
} else {
var or__3797__auto____$1 = (domina.single_node["_"]);
if(or__3797__auto____$1){
return or__3797__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});

domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){
if(cljs.core.truth_((function (){var and__3785__auto__ = domina._STAR_debug_STAR_;
if(cljs.core.truth_(and__3785__auto__)){
return !(cljs.core._EQ_.call(null,window.console,undefined));
} else {
return and__3785__auto__;
}
})())){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
};
var log_debug = function (var_args){
var mesg = null;
if (arguments.length > 0) {
var G__12573__i = 0, G__12573__a = new Array(arguments.length -  0);
while (G__12573__i < G__12573__a.length) {G__12573__a[G__12573__i] = arguments[G__12573__i + 0]; ++G__12573__i;}
  mesg = new cljs.core.IndexedSeq(G__12573__a,0);
} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__12574){
var mesg = cljs.core.seq(arglist__12574);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){
if(cljs.core.truth_(window.console)){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
};
var log = function (var_args){
var mesg = null;
if (arguments.length > 0) {
var G__12575__i = 0, G__12575__a = new Array(arguments.length -  0);
while (G__12575__i < G__12575__a.length) {G__12575__a[G__12575__i] = arguments[G__12575__i + 0]; ++G__12575__i;}
  mesg = new cljs.core.IndexedSeq(G__12575__a,0);
} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__12576){
var mesg = cljs.core.seq(arglist__12576);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){
return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){
return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){
return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;
if (arguments.length > 0) {
var G__12577__i = 0, G__12577__a = new Array(arguments.length -  0);
while (G__12577__i < G__12577__a.length) {G__12577__a[G__12577__i] = arguments[G__12577__i + 0]; ++G__12577__i;}
  contents = new cljs.core.IndexedSeq(G__12577__a,0);
} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__12578){
var contents = cljs.core.seq(arglist__12578);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){
return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){
return cljs.core.map.call(null,(function (p1__12579_SHARP_){
return p1__12579_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){
domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);

return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){
domina.apply_with_cloning.call(null,(function (p1__12580_SHARP_,p2__12581_SHARP_){
return goog.dom.insertChildAt(p1__12580_SHARP_,p2__12581_SHARP_,idx);
}),parent_content,child_content);

return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){
domina.insert_BANG_.call(null,parent_content,child_content,(0));

return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__12583_SHARP_,p2__12582_SHARP_){
return goog.dom.insertSiblingBefore(p2__12582_SHARP_,p1__12583_SHARP_);
}),content,new_content);

return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__12585_SHARP_,p2__12584_SHARP_){
return goog.dom.insertSiblingAfter(p2__12584_SHARP_,p1__12585_SHARP_);
}),content,new_content);

return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__12587_SHARP_,p2__12586_SHARP_){
return goog.dom.replaceNode(p2__12586_SHARP_,p1__12587_SHARP_);
}),old_content,new_content);

return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){
return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){
return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){
cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));

return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){
var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s))){
return null;
} else {
return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){
return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){
var seq__12592_12596 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__12593_12597 = null;
var count__12594_12598 = (0);
var i__12595_12599 = (0);
while(true){
if((i__12595_12599 < count__12594_12598)){
var n_12600 = cljs.core._nth.call(null,chunk__12593_12597,i__12595_12599);
goog.style.setStyle(n_12600,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__12601 = seq__12592_12596;
var G__12602 = chunk__12593_12597;
var G__12603 = count__12594_12598;
var G__12604 = (i__12595_12599 + (1));
seq__12592_12596 = G__12601;
chunk__12593_12597 = G__12602;
count__12594_12598 = G__12603;
i__12595_12599 = G__12604;
continue;
} else {
var temp__4126__auto___12605 = cljs.core.seq.call(null,seq__12592_12596);
if(temp__4126__auto___12605){
var seq__12592_12606__$1 = temp__4126__auto___12605;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12592_12606__$1)){
var c__4584__auto___12607 = cljs.core.chunk_first.call(null,seq__12592_12606__$1);
var G__12608 = cljs.core.chunk_rest.call(null,seq__12592_12606__$1);
var G__12609 = c__4584__auto___12607;
var G__12610 = cljs.core.count.call(null,c__4584__auto___12607);
var G__12611 = (0);
seq__12592_12596 = G__12608;
chunk__12593_12597 = G__12609;
count__12594_12598 = G__12610;
i__12595_12599 = G__12611;
continue;
} else {
var n_12612 = cljs.core.first.call(null,seq__12592_12606__$1);
goog.style.setStyle(n_12612,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__12613 = cljs.core.next.call(null,seq__12592_12606__$1);
var G__12614 = null;
var G__12615 = (0);
var G__12616 = (0);
seq__12592_12596 = G__12613;
chunk__12593_12597 = G__12614;
count__12594_12598 = G__12615;
i__12595_12599 = G__12616;
continue;
}
} else {
}
}
break;
}

return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;
if (arguments.length > 2) {
var G__12617__i = 0, G__12617__a = new Array(arguments.length -  2);
while (G__12617__i < G__12617__a.length) {G__12617__a[G__12617__i] = arguments[G__12617__i + 2]; ++G__12617__i;}
  value = new cljs.core.IndexedSeq(G__12617__a,0);
} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__12618){
var content = cljs.core.first(arglist__12618);
arglist__12618 = cljs.core.next(arglist__12618);
var name = cljs.core.first(arglist__12618);
var value = cljs.core.rest(arglist__12618);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){
var seq__12623_12627 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__12624_12628 = null;
var count__12625_12629 = (0);
var i__12626_12630 = (0);
while(true){
if((i__12626_12630 < count__12625_12629)){
var n_12631 = cljs.core._nth.call(null,chunk__12624_12628,i__12626_12630);
n_12631.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__12632 = seq__12623_12627;
var G__12633 = chunk__12624_12628;
var G__12634 = count__12625_12629;
var G__12635 = (i__12626_12630 + (1));
seq__12623_12627 = G__12632;
chunk__12624_12628 = G__12633;
count__12625_12629 = G__12634;
i__12626_12630 = G__12635;
continue;
} else {
var temp__4126__auto___12636 = cljs.core.seq.call(null,seq__12623_12627);
if(temp__4126__auto___12636){
var seq__12623_12637__$1 = temp__4126__auto___12636;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12623_12637__$1)){
var c__4584__auto___12638 = cljs.core.chunk_first.call(null,seq__12623_12637__$1);
var G__12639 = cljs.core.chunk_rest.call(null,seq__12623_12637__$1);
var G__12640 = c__4584__auto___12638;
var G__12641 = cljs.core.count.call(null,c__4584__auto___12638);
var G__12642 = (0);
seq__12623_12627 = G__12639;
chunk__12624_12628 = G__12640;
count__12625_12629 = G__12641;
i__12626_12630 = G__12642;
continue;
} else {
var n_12643 = cljs.core.first.call(null,seq__12623_12637__$1);
n_12643.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__12644 = cljs.core.next.call(null,seq__12623_12637__$1);
var G__12645 = null;
var G__12646 = (0);
var G__12647 = (0);
seq__12623_12627 = G__12644;
chunk__12624_12628 = G__12645;
count__12625_12629 = G__12646;
i__12626_12630 = G__12647;
continue;
}
} else {
}
}
break;
}

return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;
if (arguments.length > 2) {
var G__12648__i = 0, G__12648__a = new Array(arguments.length -  2);
while (G__12648__i < G__12648__a.length) {G__12648__a[G__12648__i] = arguments[G__12648__i + 2]; ++G__12648__i;}
  value = new cljs.core.IndexedSeq(G__12648__a,0);
} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__12649){
var content = cljs.core.first(arglist__12649);
arglist__12649 = cljs.core.next(arglist__12649);
var name = cljs.core.first(arglist__12649);
var value = cljs.core.rest(arglist__12649);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){
var seq__12654_12658 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__12655_12659 = null;
var count__12656_12660 = (0);
var i__12657_12661 = (0);
while(true){
if((i__12657_12661 < count__12656_12660)){
var n_12662 = cljs.core._nth.call(null,chunk__12655_12659,i__12657_12661);
n_12662.removeAttribute(cljs.core.name.call(null,name));

var G__12663 = seq__12654_12658;
var G__12664 = chunk__12655_12659;
var G__12665 = count__12656_12660;
var G__12666 = (i__12657_12661 + (1));
seq__12654_12658 = G__12663;
chunk__12655_12659 = G__12664;
count__12656_12660 = G__12665;
i__12657_12661 = G__12666;
continue;
} else {
var temp__4126__auto___12667 = cljs.core.seq.call(null,seq__12654_12658);
if(temp__4126__auto___12667){
var seq__12654_12668__$1 = temp__4126__auto___12667;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12654_12668__$1)){
var c__4584__auto___12669 = cljs.core.chunk_first.call(null,seq__12654_12668__$1);
var G__12670 = cljs.core.chunk_rest.call(null,seq__12654_12668__$1);
var G__12671 = c__4584__auto___12669;
var G__12672 = cljs.core.count.call(null,c__4584__auto___12669);
var G__12673 = (0);
seq__12654_12658 = G__12670;
chunk__12655_12659 = G__12671;
count__12656_12660 = G__12672;
i__12657_12661 = G__12673;
continue;
} else {
var n_12674 = cljs.core.first.call(null,seq__12654_12668__$1);
n_12674.removeAttribute(cljs.core.name.call(null,name));

var G__12675 = cljs.core.next.call(null,seq__12654_12668__$1);
var G__12676 = null;
var G__12677 = (0);
var G__12678 = (0);
seq__12654_12658 = G__12675;
chunk__12655_12659 = G__12676;
count__12656_12660 = G__12677;
i__12657_12661 = G__12678;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){
return cljs.core.reduce.call(null,(function (acc,pair){
var vec__12680 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__12680,(0),null);
var v = cljs.core.nth.call(null,vec__12680,(1),null);
if(cljs.core.truth_((function (){var and__3785__auto__ = k;
if(cljs.core.truth_(and__3785__auto__)){
return v;
} else {
return and__3785__auto__;
}
})())){
return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else {
return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
var style = domina.attr.call(null,content,"style");
if(typeof style === 'string'){
return domina.parse_style_attributes.call(null,style);
} else {
if((style == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.truth_(style.cssText)){
return domina.parse_style_attributes.call(null,style.cssText);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node = domina.single_node.call(null,content);
var attrs__$1 = node.attributes;
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__12681_SHARP_){
var attr = attrs__$1.item(p1__12681_SHARP_);
var value = attr.nodeValue;
if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value))){
return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else {
return null;
}
});})(node,attrs__$1))
,cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var seq__12688_12694 = cljs.core.seq.call(null,styles);
var chunk__12689_12695 = null;
var count__12690_12696 = (0);
var i__12691_12697 = (0);
while(true){
if((i__12691_12697 < count__12690_12696)){
var vec__12692_12698 = cljs.core._nth.call(null,chunk__12689_12695,i__12691_12697);
var name_12699 = cljs.core.nth.call(null,vec__12692_12698,(0),null);
var value_12700 = cljs.core.nth.call(null,vec__12692_12698,(1),null);
domina.set_style_BANG_.call(null,content,name_12699,value_12700);

var G__12701 = seq__12688_12694;
var G__12702 = chunk__12689_12695;
var G__12703 = count__12690_12696;
var G__12704 = (i__12691_12697 + (1));
seq__12688_12694 = G__12701;
chunk__12689_12695 = G__12702;
count__12690_12696 = G__12703;
i__12691_12697 = G__12704;
continue;
} else {
var temp__4126__auto___12705 = cljs.core.seq.call(null,seq__12688_12694);
if(temp__4126__auto___12705){
var seq__12688_12706__$1 = temp__4126__auto___12705;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12688_12706__$1)){
var c__4584__auto___12707 = cljs.core.chunk_first.call(null,seq__12688_12706__$1);
var G__12708 = cljs.core.chunk_rest.call(null,seq__12688_12706__$1);
var G__12709 = c__4584__auto___12707;
var G__12710 = cljs.core.count.call(null,c__4584__auto___12707);
var G__12711 = (0);
seq__12688_12694 = G__12708;
chunk__12689_12695 = G__12709;
count__12690_12696 = G__12710;
i__12691_12697 = G__12711;
continue;
} else {
var vec__12693_12712 = cljs.core.first.call(null,seq__12688_12706__$1);
var name_12713 = cljs.core.nth.call(null,vec__12693_12712,(0),null);
var value_12714 = cljs.core.nth.call(null,vec__12693_12712,(1),null);
domina.set_style_BANG_.call(null,content,name_12713,value_12714);

var G__12715 = cljs.core.next.call(null,seq__12688_12706__$1);
var G__12716 = null;
var G__12717 = (0);
var G__12718 = (0);
seq__12688_12694 = G__12715;
chunk__12689_12695 = G__12716;
count__12690_12696 = G__12717;
i__12691_12697 = G__12718;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){
var seq__12725_12731 = cljs.core.seq.call(null,attrs);
var chunk__12726_12732 = null;
var count__12727_12733 = (0);
var i__12728_12734 = (0);
while(true){
if((i__12728_12734 < count__12727_12733)){
var vec__12729_12735 = cljs.core._nth.call(null,chunk__12726_12732,i__12728_12734);
var name_12736 = cljs.core.nth.call(null,vec__12729_12735,(0),null);
var value_12737 = cljs.core.nth.call(null,vec__12729_12735,(1),null);
domina.set_attr_BANG_.call(null,content,name_12736,value_12737);

var G__12738 = seq__12725_12731;
var G__12739 = chunk__12726_12732;
var G__12740 = count__12727_12733;
var G__12741 = (i__12728_12734 + (1));
seq__12725_12731 = G__12738;
chunk__12726_12732 = G__12739;
count__12727_12733 = G__12740;
i__12728_12734 = G__12741;
continue;
} else {
var temp__4126__auto___12742 = cljs.core.seq.call(null,seq__12725_12731);
if(temp__4126__auto___12742){
var seq__12725_12743__$1 = temp__4126__auto___12742;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12725_12743__$1)){
var c__4584__auto___12744 = cljs.core.chunk_first.call(null,seq__12725_12743__$1);
var G__12745 = cljs.core.chunk_rest.call(null,seq__12725_12743__$1);
var G__12746 = c__4584__auto___12744;
var G__12747 = cljs.core.count.call(null,c__4584__auto___12744);
var G__12748 = (0);
seq__12725_12731 = G__12745;
chunk__12726_12732 = G__12746;
count__12727_12733 = G__12747;
i__12728_12734 = G__12748;
continue;
} else {
var vec__12730_12749 = cljs.core.first.call(null,seq__12725_12743__$1);
var name_12750 = cljs.core.nth.call(null,vec__12730_12749,(0),null);
var value_12751 = cljs.core.nth.call(null,vec__12730_12749,(1),null);
domina.set_attr_BANG_.call(null,content,name_12750,value_12751);

var G__12752 = cljs.core.next.call(null,seq__12725_12743__$1);
var G__12753 = null;
var G__12754 = (0);
var G__12755 = (0);
seq__12725_12731 = G__12752;
chunk__12726_12732 = G__12753;
count__12727_12733 = G__12754;
i__12728_12734 = G__12755;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){
return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){
var seq__12760_12764 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__12761_12765 = null;
var count__12762_12766 = (0);
var i__12763_12767 = (0);
while(true){
if((i__12763_12767 < count__12762_12766)){
var node_12768 = cljs.core._nth.call(null,chunk__12761_12765,i__12763_12767);
goog.dom.classes.add(node_12768,class$);

var G__12769 = seq__12760_12764;
var G__12770 = chunk__12761_12765;
var G__12771 = count__12762_12766;
var G__12772 = (i__12763_12767 + (1));
seq__12760_12764 = G__12769;
chunk__12761_12765 = G__12770;
count__12762_12766 = G__12771;
i__12763_12767 = G__12772;
continue;
} else {
var temp__4126__auto___12773 = cljs.core.seq.call(null,seq__12760_12764);
if(temp__4126__auto___12773){
var seq__12760_12774__$1 = temp__4126__auto___12773;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12760_12774__$1)){
var c__4584__auto___12775 = cljs.core.chunk_first.call(null,seq__12760_12774__$1);
var G__12776 = cljs.core.chunk_rest.call(null,seq__12760_12774__$1);
var G__12777 = c__4584__auto___12775;
var G__12778 = cljs.core.count.call(null,c__4584__auto___12775);
var G__12779 = (0);
seq__12760_12764 = G__12776;
chunk__12761_12765 = G__12777;
count__12762_12766 = G__12778;
i__12763_12767 = G__12779;
continue;
} else {
var node_12780 = cljs.core.first.call(null,seq__12760_12774__$1);
goog.dom.classes.add(node_12780,class$);

var G__12781 = cljs.core.next.call(null,seq__12760_12774__$1);
var G__12782 = null;
var G__12783 = (0);
var G__12784 = (0);
seq__12760_12764 = G__12781;
chunk__12761_12765 = G__12782;
count__12762_12766 = G__12783;
i__12763_12767 = G__12784;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){
var seq__12789_12793 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__12790_12794 = null;
var count__12791_12795 = (0);
var i__12792_12796 = (0);
while(true){
if((i__12792_12796 < count__12791_12795)){
var node_12797 = cljs.core._nth.call(null,chunk__12790_12794,i__12792_12796);
goog.dom.classes.remove(node_12797,class$);

var G__12798 = seq__12789_12793;
var G__12799 = chunk__12790_12794;
var G__12800 = count__12791_12795;
var G__12801 = (i__12792_12796 + (1));
seq__12789_12793 = G__12798;
chunk__12790_12794 = G__12799;
count__12791_12795 = G__12800;
i__12792_12796 = G__12801;
continue;
} else {
var temp__4126__auto___12802 = cljs.core.seq.call(null,seq__12789_12793);
if(temp__4126__auto___12802){
var seq__12789_12803__$1 = temp__4126__auto___12802;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12789_12803__$1)){
var c__4584__auto___12804 = cljs.core.chunk_first.call(null,seq__12789_12803__$1);
var G__12805 = cljs.core.chunk_rest.call(null,seq__12789_12803__$1);
var G__12806 = c__4584__auto___12804;
var G__12807 = cljs.core.count.call(null,c__4584__auto___12804);
var G__12808 = (0);
seq__12789_12793 = G__12805;
chunk__12790_12794 = G__12806;
count__12791_12795 = G__12807;
i__12792_12796 = G__12808;
continue;
} else {
var node_12809 = cljs.core.first.call(null,seq__12789_12803__$1);
goog.dom.classes.remove(node_12809,class$);

var G__12810 = cljs.core.next.call(null,seq__12789_12803__$1);
var G__12811 = null;
var G__12812 = (0);
var G__12813 = (0);
seq__12789_12793 = G__12810;
chunk__12790_12794 = G__12811;
count__12791_12795 = G__12812;
i__12792_12796 = G__12813;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){
var seq__12818_12822 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__12819_12823 = null;
var count__12820_12824 = (0);
var i__12821_12825 = (0);
while(true){
if((i__12821_12825 < count__12820_12824)){
var node_12826 = cljs.core._nth.call(null,chunk__12819_12823,i__12821_12825);
goog.dom.classes.toggle(node_12826,class$);

var G__12827 = seq__12818_12822;
var G__12828 = chunk__12819_12823;
var G__12829 = count__12820_12824;
var G__12830 = (i__12821_12825 + (1));
seq__12818_12822 = G__12827;
chunk__12819_12823 = G__12828;
count__12820_12824 = G__12829;
i__12821_12825 = G__12830;
continue;
} else {
var temp__4126__auto___12831 = cljs.core.seq.call(null,seq__12818_12822);
if(temp__4126__auto___12831){
var seq__12818_12832__$1 = temp__4126__auto___12831;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12818_12832__$1)){
var c__4584__auto___12833 = cljs.core.chunk_first.call(null,seq__12818_12832__$1);
var G__12834 = cljs.core.chunk_rest.call(null,seq__12818_12832__$1);
var G__12835 = c__4584__auto___12833;
var G__12836 = cljs.core.count.call(null,c__4584__auto___12833);
var G__12837 = (0);
seq__12818_12822 = G__12834;
chunk__12819_12823 = G__12835;
count__12820_12824 = G__12836;
i__12821_12825 = G__12837;
continue;
} else {
var node_12838 = cljs.core.first.call(null,seq__12818_12832__$1);
goog.dom.classes.toggle(node_12838,class$);

var G__12839 = cljs.core.next.call(null,seq__12818_12832__$1);
var G__12840 = null;
var G__12841 = (0);
var G__12842 = (0);
seq__12818_12822 = G__12839;
chunk__12819_12823 = G__12840;
count__12820_12824 = G__12841;
i__12821_12825 = G__12842;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){
return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){
var classes_12851__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__12847_12852 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__12848_12853 = null;
var count__12849_12854 = (0);
var i__12850_12855 = (0);
while(true){
if((i__12850_12855 < count__12849_12854)){
var node_12856 = cljs.core._nth.call(null,chunk__12848_12853,i__12850_12855);
goog.dom.classes.set(node_12856,classes_12851__$1);

var G__12857 = seq__12847_12852;
var G__12858 = chunk__12848_12853;
var G__12859 = count__12849_12854;
var G__12860 = (i__12850_12855 + (1));
seq__12847_12852 = G__12857;
chunk__12848_12853 = G__12858;
count__12849_12854 = G__12859;
i__12850_12855 = G__12860;
continue;
} else {
var temp__4126__auto___12861 = cljs.core.seq.call(null,seq__12847_12852);
if(temp__4126__auto___12861){
var seq__12847_12862__$1 = temp__4126__auto___12861;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12847_12862__$1)){
var c__4584__auto___12863 = cljs.core.chunk_first.call(null,seq__12847_12862__$1);
var G__12864 = cljs.core.chunk_rest.call(null,seq__12847_12862__$1);
var G__12865 = c__4584__auto___12863;
var G__12866 = cljs.core.count.call(null,c__4584__auto___12863);
var G__12867 = (0);
seq__12847_12852 = G__12864;
chunk__12848_12853 = G__12865;
count__12849_12854 = G__12866;
i__12850_12855 = G__12867;
continue;
} else {
var node_12868 = cljs.core.first.call(null,seq__12847_12862__$1);
goog.dom.classes.set(node_12868,classes_12851__$1);

var G__12869 = cljs.core.next.call(null,seq__12847_12862__$1);
var G__12870 = null;
var G__12871 = (0);
var G__12872 = (0);
seq__12847_12852 = G__12869;
chunk__12848_12853 = G__12870;
count__12849_12854 = G__12871;
i__12850_12855 = G__12872;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){
return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){
var seq__12877_12881 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__12878_12882 = null;
var count__12879_12883 = (0);
var i__12880_12884 = (0);
while(true){
if((i__12880_12884 < count__12879_12883)){
var node_12885 = cljs.core._nth.call(null,chunk__12878_12882,i__12880_12884);
goog.dom.setTextContent(node_12885,value);

var G__12886 = seq__12877_12881;
var G__12887 = chunk__12878_12882;
var G__12888 = count__12879_12883;
var G__12889 = (i__12880_12884 + (1));
seq__12877_12881 = G__12886;
chunk__12878_12882 = G__12887;
count__12879_12883 = G__12888;
i__12880_12884 = G__12889;
continue;
} else {
var temp__4126__auto___12890 = cljs.core.seq.call(null,seq__12877_12881);
if(temp__4126__auto___12890){
var seq__12877_12891__$1 = temp__4126__auto___12890;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12877_12891__$1)){
var c__4584__auto___12892 = cljs.core.chunk_first.call(null,seq__12877_12891__$1);
var G__12893 = cljs.core.chunk_rest.call(null,seq__12877_12891__$1);
var G__12894 = c__4584__auto___12892;
var G__12895 = cljs.core.count.call(null,c__4584__auto___12892);
var G__12896 = (0);
seq__12877_12881 = G__12893;
chunk__12878_12882 = G__12894;
count__12879_12883 = G__12895;
i__12880_12884 = G__12896;
continue;
} else {
var node_12897 = cljs.core.first.call(null,seq__12877_12891__$1);
goog.dom.setTextContent(node_12897,value);

var G__12898 = cljs.core.next.call(null,seq__12877_12891__$1);
var G__12899 = null;
var G__12900 = (0);
var G__12901 = (0);
seq__12877_12881 = G__12898;
chunk__12878_12882 = G__12899;
count__12879_12883 = G__12900;
i__12880_12884 = G__12901;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){
return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){
var seq__12906_12910 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__12907_12911 = null;
var count__12908_12912 = (0);
var i__12909_12913 = (0);
while(true){
if((i__12909_12913 < count__12908_12912)){
var node_12914 = cljs.core._nth.call(null,chunk__12907_12911,i__12909_12913);
goog.dom.forms.setValue(node_12914,value);

var G__12915 = seq__12906_12910;
var G__12916 = chunk__12907_12911;
var G__12917 = count__12908_12912;
var G__12918 = (i__12909_12913 + (1));
seq__12906_12910 = G__12915;
chunk__12907_12911 = G__12916;
count__12908_12912 = G__12917;
i__12909_12913 = G__12918;
continue;
} else {
var temp__4126__auto___12919 = cljs.core.seq.call(null,seq__12906_12910);
if(temp__4126__auto___12919){
var seq__12906_12920__$1 = temp__4126__auto___12919;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12906_12920__$1)){
var c__4584__auto___12921 = cljs.core.chunk_first.call(null,seq__12906_12920__$1);
var G__12922 = cljs.core.chunk_rest.call(null,seq__12906_12920__$1);
var G__12923 = c__4584__auto___12921;
var G__12924 = cljs.core.count.call(null,c__4584__auto___12921);
var G__12925 = (0);
seq__12906_12910 = G__12922;
chunk__12907_12911 = G__12923;
count__12908_12912 = G__12924;
i__12909_12913 = G__12925;
continue;
} else {
var node_12926 = cljs.core.first.call(null,seq__12906_12920__$1);
goog.dom.forms.setValue(node_12926,value);

var G__12927 = cljs.core.next.call(null,seq__12906_12920__$1);
var G__12928 = null;
var G__12929 = (0);
var G__12930 = (0);
seq__12906_12910 = G__12927;
chunk__12907_12911 = G__12928;
count__12908_12912 = G__12929;
i__12909_12913 = G__12930;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){
return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){
return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){
var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);
var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();
var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);
if(cljs.core.truth_((function (){var and__3785__auto__ = allows_inner_html_QMARK_;
if(and__3785__auto__){
var and__3785__auto____$1 = (function (){var or__3797__auto__ = domina.support.leading_whitespace_QMARK_;
if(cljs.core.truth_(or__3797__auto__)){
return or__3797__auto__;
} else {
return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();
if(cljs.core.truth_(and__3785__auto____$1)){
return !(special_tag_QMARK_);
} else {
return and__3785__auto____$1;
}
} else {
return and__3785__auto__;
}
})())){
var value_12941 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__12937_12942 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__12938_12943 = null;
var count__12939_12944 = (0);
var i__12940_12945 = (0);
while(true){
if((i__12940_12945 < count__12939_12944)){
var node_12946 = cljs.core._nth.call(null,chunk__12938_12943,i__12940_12945);
node_12946.innerHTML = value_12941;

var G__12947 = seq__12937_12942;
var G__12948 = chunk__12938_12943;
var G__12949 = count__12939_12944;
var G__12950 = (i__12940_12945 + (1));
seq__12937_12942 = G__12947;
chunk__12938_12943 = G__12948;
count__12939_12944 = G__12949;
i__12940_12945 = G__12950;
continue;
} else {
var temp__4126__auto___12951 = cljs.core.seq.call(null,seq__12937_12942);
if(temp__4126__auto___12951){
var seq__12937_12952__$1 = temp__4126__auto___12951;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12937_12952__$1)){
var c__4584__auto___12953 = cljs.core.chunk_first.call(null,seq__12937_12952__$1);
var G__12954 = cljs.core.chunk_rest.call(null,seq__12937_12952__$1);
var G__12955 = c__4584__auto___12953;
var G__12956 = cljs.core.count.call(null,c__4584__auto___12953);
var G__12957 = (0);
seq__12937_12942 = G__12954;
chunk__12938_12943 = G__12955;
count__12939_12944 = G__12956;
i__12940_12945 = G__12957;
continue;
} else {
var node_12958 = cljs.core.first.call(null,seq__12937_12952__$1);
node_12958.innerHTML = value_12941;

var G__12959 = cljs.core.next.call(null,seq__12937_12952__$1);
var G__12960 = null;
var G__12961 = (0);
var G__12962 = (0);
seq__12937_12942 = G__12959;
chunk__12938_12943 = G__12960;
count__12939_12944 = G__12961;
i__12940_12945 = G__12962;
continue;
}
} else {
}
}
break;
}
}catch (e12936){if((e12936 instanceof Error)){
var e_12963 = e12936;
domina.replace_children_BANG_.call(null,content,value_12941);
} else {
throw e12936;

}
}} else {
domina.replace_children_BANG_.call(null,content,html_string);
}

return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){
if(typeof inner_content === 'string'){
return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else {
return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){
return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){
var m = domina.single_node.call(null,node).__domina_data;
var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);
if(cljs.core.truth_((function (){var and__3785__auto__ = bubble;
if(cljs.core.truth_(and__3785__auto__)){
return (value == null);
} else {
return and__3785__auto__;
}
})())){
var temp__4126__auto__ = domina.single_node.call(null,node).parentNode;
if(cljs.core.truth_(temp__4126__auto__)){
var parent = temp__4126__auto__;
return get_data.call(null,parent,key,true);
} else {
return null;
}
} else {
return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){
var m = (function (){var or__3797__auto__ = domina.single_node.call(null,node).__domina_data;
if(cljs.core.truth_(or__3797__auto__)){
return or__3797__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){
var parents = domina.nodes.call(null,parent_content);
var children = domina.nodes.call(null,child_content);
var first_child = (function (){var frag = document.createDocumentFragment();
var seq__12970_12974 = cljs.core.seq.call(null,children);
var chunk__12971_12975 = null;
var count__12972_12976 = (0);
var i__12973_12977 = (0);
while(true){
if((i__12973_12977 < count__12972_12976)){
var child_12978 = cljs.core._nth.call(null,chunk__12971_12975,i__12973_12977);
frag.appendChild(child_12978);

var G__12979 = seq__12970_12974;
var G__12980 = chunk__12971_12975;
var G__12981 = count__12972_12976;
var G__12982 = (i__12973_12977 + (1));
seq__12970_12974 = G__12979;
chunk__12971_12975 = G__12980;
count__12972_12976 = G__12981;
i__12973_12977 = G__12982;
continue;
} else {
var temp__4126__auto___12983 = cljs.core.seq.call(null,seq__12970_12974);
if(temp__4126__auto___12983){
var seq__12970_12984__$1 = temp__4126__auto___12983;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12970_12984__$1)){
var c__4584__auto___12985 = cljs.core.chunk_first.call(null,seq__12970_12984__$1);
var G__12986 = cljs.core.chunk_rest.call(null,seq__12970_12984__$1);
var G__12987 = c__4584__auto___12985;
var G__12988 = cljs.core.count.call(null,c__4584__auto___12985);
var G__12989 = (0);
seq__12970_12974 = G__12986;
chunk__12971_12975 = G__12987;
count__12972_12976 = G__12988;
i__12973_12977 = G__12989;
continue;
} else {
var child_12990 = cljs.core.first.call(null,seq__12970_12984__$1);
frag.appendChild(child_12990);

var G__12991 = cljs.core.next.call(null,seq__12970_12984__$1);
var G__12992 = null;
var G__12993 = (0);
var G__12994 = (0);
seq__12970_12974 = G__12991;
chunk__12971_12975 = G__12992;
count__12972_12976 = G__12993;
i__12973_12977 = G__12994;
continue;
}
} else {
}
}
break;
}

return frag;
})();
var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - (1)),((function (parents,children,first_child){
return (function (){
return first_child.cloneNode(true);
});})(parents,children,first_child))
));
if(cljs.core.seq.call(null,parents)){
f.call(null,cljs.core.first.call(null,parents),first_child);

return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__12964_SHARP_,p2__12965_SHARP_){
return f.call(null,p1__12964_SHARP_,p2__12965_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else {
return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){
return lazy_nl_via_item.call(null,nl,(0));
});
var lazy_nl_via_item__2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + (1))));
}),null,null));
} else {
return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){
return lazy_nl_via_array_ref.call(null,nl,(0));
});
var lazy_nl_via_array_ref__2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + (1))));
}),null,null));
} else {
return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){
if(cljs.core.truth_(nl.item)){
return domina.lazy_nl_via_item.call(null,nl);
} else {
return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){
var and__3785__auto__ = obj;
if(cljs.core.truth_(and__3785__auto__)){
var and__3785__auto____$1 = cljs.core.not.call(null,obj.nodeName);
if(and__3785__auto____$1){
return obj.length;
} else {
return and__3785__auto____$1;
}
} else {
return and__3785__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){
if((list_thing == null)){
return cljs.core.List.EMPTY;
} else {
if((function (){var G__12996 = list_thing;
if(G__12996){
var bit__4478__auto__ = (G__12996.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4478__auto__) || (G__12996.cljs$core$ISeqable$)){
return true;
} else {
if((!G__12996.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__12996);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__12996);
}
})()){
return cljs.core.seq.call(null,list_thing);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing))){
return domina.lazy_nodelist.call(null,list_thing);
} else {
return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
(domina.DomContent["_"] = true);

(domina.nodes["_"] = (function (content){
if((content == null)){
return cljs.core.List.EMPTY;
} else {
if((function (){var G__12997 = content;
if(G__12997){
var bit__4478__auto__ = (G__12997.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4478__auto__) || (G__12997.cljs$core$ISeqable$)){
return true;
} else {
if((!G__12997.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__12997);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__12997);
}
})()){
return cljs.core.seq.call(null,content);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content))){
return domina.lazy_nodelist.call(null,content);
} else {
return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));

(domina.single_node["_"] = (function (content){
if((content == null)){
return null;
} else {
if((function (){var G__12998 = content;
if(G__12998){
var bit__4478__auto__ = (G__12998.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4478__auto__) || (G__12998.cljs$core$ISeqable$)){
return true;
} else {
if((!G__12998.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__12998);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__12998);
}
})()){
return cljs.core.first.call(null,content);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content))){
return content.item((0));
} else {
return content;

}
}
}
}));

(domina.DomContent["string"] = true);

(domina.nodes["string"] = (function (s){
return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));

(domina.single_node["string"] = (function (s){
return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined'))){
NodeList.prototype.cljs$core$ISeqable$ = true;

NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.lazy_nodelist.call(null,nodelist__$1);
});

NodeList.prototype.cljs$core$IIndexed$ = true;

NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
var nodelist__$1 = this;
return nodelist__$1.item(n);
});

NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
var nodelist__$1 = this;
if((nodelist__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,nodelist__$1,n);
}
});

NodeList.prototype.cljs$core$ICounted$ = true;

NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return nodelist__$1.length;
});
} else {
}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined'))){
StaticNodeList.prototype.cljs$core$ISeqable$ = true;

StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.lazy_nodelist.call(null,nodelist__$1);
});

StaticNodeList.prototype.cljs$core$IIndexed$ = true;

StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
var nodelist__$1 = this;
return nodelist__$1.item(n);
});

StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
var nodelist__$1 = this;
if((nodelist__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,nodelist__$1,n);
}
});

StaticNodeList.prototype.cljs$core$ICounted$ = true;

StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return nodelist__$1.length;
});
} else {
}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined'))){
HTMLCollection.prototype.cljs$core$ISeqable$ = true;

HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var coll__$1 = this;
return domina.lazy_nodelist.call(null,coll__$1);
});

HTMLCollection.prototype.cljs$core$IIndexed$ = true;

HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var coll__$1 = this;
return coll__$1.item(n);
});

HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var coll__$1 = this;
if((coll__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,coll__$1,n);
}
});

HTMLCollection.prototype.cljs$core$ICounted$ = true;

HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var coll__$1 = this;
return coll__$1.length;
});
} else {
}
