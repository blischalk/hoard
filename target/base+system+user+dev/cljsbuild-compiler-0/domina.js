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
var opt_wrapper_36336 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_36337 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_36338 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_36338,opt_wrapper_36336,table_section_wrapper_36337,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_36336,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_36337,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_36337,cell_wrapper_36338,table_section_wrapper_36337,table_section_wrapper_36337]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3785__auto__ = div.firstChild;
if(cljs.core.truth_(and__3785__auto__)){
return div.firstChild.childNodes;
} else {
return and__3785__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__36343 = cljs.core.seq.call(null,tbody);
var chunk__36344 = null;
var count__36345 = (0);
var i__36346 = (0);
while(true){
if((i__36346 < count__36345)){
var child = cljs.core._nth.call(null,chunk__36344,i__36346);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__36347 = seq__36343;
var G__36348 = chunk__36344;
var G__36349 = count__36345;
var G__36350 = (i__36346 + (1));
seq__36343 = G__36347;
chunk__36344 = G__36348;
count__36345 = G__36349;
i__36346 = G__36350;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__36343);
if(temp__4126__auto__){
var seq__36343__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36343__$1)){
var c__4584__auto__ = cljs.core.chunk_first.call(null,seq__36343__$1);
var G__36351 = cljs.core.chunk_rest.call(null,seq__36343__$1);
var G__36352 = c__4584__auto__;
var G__36353 = cljs.core.count.call(null,c__4584__auto__);
var G__36354 = (0);
seq__36343 = G__36351;
chunk__36344 = G__36352;
count__36345 = G__36353;
i__36346 = G__36354;
continue;
} else {
var child = cljs.core.first.call(null,seq__36343__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__36355 = cljs.core.next.call(null,seq__36343__$1);
var G__36356 = null;
var G__36357 = (0);
var G__36358 = (0);
seq__36343 = G__36355;
chunk__36344 = G__36356;
count__36345 = G__36357;
i__36346 = G__36358;
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
var vec__36360 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__36360,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__36360,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__36360,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__36361 = wrapper.lastChild;
var G__36362 = (level - (1));
wrapper = G__36361;
level = G__36362;
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

domina.DomContent = (function (){var obj36364 = {};
return obj36364;
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
var G__36365__i = 0, G__36365__a = new Array(arguments.length -  0);
while (G__36365__i < G__36365__a.length) {G__36365__a[G__36365__i] = arguments[G__36365__i + 0]; ++G__36365__i;}
  mesg = new cljs.core.IndexedSeq(G__36365__a,0);
} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__36366){
var mesg = cljs.core.seq(arglist__36366);
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
var G__36367__i = 0, G__36367__a = new Array(arguments.length -  0);
while (G__36367__i < G__36367__a.length) {G__36367__a[G__36367__i] = arguments[G__36367__i + 0]; ++G__36367__i;}
  mesg = new cljs.core.IndexedSeq(G__36367__a,0);
} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__36368){
var mesg = cljs.core.seq(arglist__36368);
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
var G__36369__i = 0, G__36369__a = new Array(arguments.length -  0);
while (G__36369__i < G__36369__a.length) {G__36369__a[G__36369__i] = arguments[G__36369__i + 0]; ++G__36369__i;}
  contents = new cljs.core.IndexedSeq(G__36369__a,0);
} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__36370){
var contents = cljs.core.seq(arglist__36370);
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
return cljs.core.map.call(null,(function (p1__36371_SHARP_){
return p1__36371_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__36372_SHARP_,p2__36373_SHARP_){
return goog.dom.insertChildAt(p1__36372_SHARP_,p2__36373_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__36375_SHARP_,p2__36374_SHARP_){
return goog.dom.insertSiblingBefore(p2__36374_SHARP_,p1__36375_SHARP_);
}),content,new_content);

return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__36377_SHARP_,p2__36376_SHARP_){
return goog.dom.insertSiblingAfter(p2__36376_SHARP_,p1__36377_SHARP_);
}),content,new_content);

return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__36379_SHARP_,p2__36378_SHARP_){
return goog.dom.replaceNode(p2__36378_SHARP_,p1__36379_SHARP_);
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
var seq__36384_36388 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__36385_36389 = null;
var count__36386_36390 = (0);
var i__36387_36391 = (0);
while(true){
if((i__36387_36391 < count__36386_36390)){
var n_36392 = cljs.core._nth.call(null,chunk__36385_36389,i__36387_36391);
goog.style.setStyle(n_36392,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__36393 = seq__36384_36388;
var G__36394 = chunk__36385_36389;
var G__36395 = count__36386_36390;
var G__36396 = (i__36387_36391 + (1));
seq__36384_36388 = G__36393;
chunk__36385_36389 = G__36394;
count__36386_36390 = G__36395;
i__36387_36391 = G__36396;
continue;
} else {
var temp__4126__auto___36397 = cljs.core.seq.call(null,seq__36384_36388);
if(temp__4126__auto___36397){
var seq__36384_36398__$1 = temp__4126__auto___36397;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36384_36398__$1)){
var c__4584__auto___36399 = cljs.core.chunk_first.call(null,seq__36384_36398__$1);
var G__36400 = cljs.core.chunk_rest.call(null,seq__36384_36398__$1);
var G__36401 = c__4584__auto___36399;
var G__36402 = cljs.core.count.call(null,c__4584__auto___36399);
var G__36403 = (0);
seq__36384_36388 = G__36400;
chunk__36385_36389 = G__36401;
count__36386_36390 = G__36402;
i__36387_36391 = G__36403;
continue;
} else {
var n_36404 = cljs.core.first.call(null,seq__36384_36398__$1);
goog.style.setStyle(n_36404,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__36405 = cljs.core.next.call(null,seq__36384_36398__$1);
var G__36406 = null;
var G__36407 = (0);
var G__36408 = (0);
seq__36384_36388 = G__36405;
chunk__36385_36389 = G__36406;
count__36386_36390 = G__36407;
i__36387_36391 = G__36408;
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
var G__36409__i = 0, G__36409__a = new Array(arguments.length -  2);
while (G__36409__i < G__36409__a.length) {G__36409__a[G__36409__i] = arguments[G__36409__i + 2]; ++G__36409__i;}
  value = new cljs.core.IndexedSeq(G__36409__a,0);
} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__36410){
var content = cljs.core.first(arglist__36410);
arglist__36410 = cljs.core.next(arglist__36410);
var name = cljs.core.first(arglist__36410);
var value = cljs.core.rest(arglist__36410);
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
var seq__36415_36419 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__36416_36420 = null;
var count__36417_36421 = (0);
var i__36418_36422 = (0);
while(true){
if((i__36418_36422 < count__36417_36421)){
var n_36423 = cljs.core._nth.call(null,chunk__36416_36420,i__36418_36422);
n_36423.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__36424 = seq__36415_36419;
var G__36425 = chunk__36416_36420;
var G__36426 = count__36417_36421;
var G__36427 = (i__36418_36422 + (1));
seq__36415_36419 = G__36424;
chunk__36416_36420 = G__36425;
count__36417_36421 = G__36426;
i__36418_36422 = G__36427;
continue;
} else {
var temp__4126__auto___36428 = cljs.core.seq.call(null,seq__36415_36419);
if(temp__4126__auto___36428){
var seq__36415_36429__$1 = temp__4126__auto___36428;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36415_36429__$1)){
var c__4584__auto___36430 = cljs.core.chunk_first.call(null,seq__36415_36429__$1);
var G__36431 = cljs.core.chunk_rest.call(null,seq__36415_36429__$1);
var G__36432 = c__4584__auto___36430;
var G__36433 = cljs.core.count.call(null,c__4584__auto___36430);
var G__36434 = (0);
seq__36415_36419 = G__36431;
chunk__36416_36420 = G__36432;
count__36417_36421 = G__36433;
i__36418_36422 = G__36434;
continue;
} else {
var n_36435 = cljs.core.first.call(null,seq__36415_36429__$1);
n_36435.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__36436 = cljs.core.next.call(null,seq__36415_36429__$1);
var G__36437 = null;
var G__36438 = (0);
var G__36439 = (0);
seq__36415_36419 = G__36436;
chunk__36416_36420 = G__36437;
count__36417_36421 = G__36438;
i__36418_36422 = G__36439;
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
var G__36440__i = 0, G__36440__a = new Array(arguments.length -  2);
while (G__36440__i < G__36440__a.length) {G__36440__a[G__36440__i] = arguments[G__36440__i + 2]; ++G__36440__i;}
  value = new cljs.core.IndexedSeq(G__36440__a,0);
} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__36441){
var content = cljs.core.first(arglist__36441);
arglist__36441 = cljs.core.next(arglist__36441);
var name = cljs.core.first(arglist__36441);
var value = cljs.core.rest(arglist__36441);
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
var seq__36446_36450 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__36447_36451 = null;
var count__36448_36452 = (0);
var i__36449_36453 = (0);
while(true){
if((i__36449_36453 < count__36448_36452)){
var n_36454 = cljs.core._nth.call(null,chunk__36447_36451,i__36449_36453);
n_36454.removeAttribute(cljs.core.name.call(null,name));

var G__36455 = seq__36446_36450;
var G__36456 = chunk__36447_36451;
var G__36457 = count__36448_36452;
var G__36458 = (i__36449_36453 + (1));
seq__36446_36450 = G__36455;
chunk__36447_36451 = G__36456;
count__36448_36452 = G__36457;
i__36449_36453 = G__36458;
continue;
} else {
var temp__4126__auto___36459 = cljs.core.seq.call(null,seq__36446_36450);
if(temp__4126__auto___36459){
var seq__36446_36460__$1 = temp__4126__auto___36459;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36446_36460__$1)){
var c__4584__auto___36461 = cljs.core.chunk_first.call(null,seq__36446_36460__$1);
var G__36462 = cljs.core.chunk_rest.call(null,seq__36446_36460__$1);
var G__36463 = c__4584__auto___36461;
var G__36464 = cljs.core.count.call(null,c__4584__auto___36461);
var G__36465 = (0);
seq__36446_36450 = G__36462;
chunk__36447_36451 = G__36463;
count__36448_36452 = G__36464;
i__36449_36453 = G__36465;
continue;
} else {
var n_36466 = cljs.core.first.call(null,seq__36446_36460__$1);
n_36466.removeAttribute(cljs.core.name.call(null,name));

var G__36467 = cljs.core.next.call(null,seq__36446_36460__$1);
var G__36468 = null;
var G__36469 = (0);
var G__36470 = (0);
seq__36446_36450 = G__36467;
chunk__36447_36451 = G__36468;
count__36448_36452 = G__36469;
i__36449_36453 = G__36470;
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
var vec__36472 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__36472,(0),null);
var v = cljs.core.nth.call(null,vec__36472,(1),null);
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
return (function (p1__36473_SHARP_){
var attr = attrs__$1.item(p1__36473_SHARP_);
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
var seq__36480_36486 = cljs.core.seq.call(null,styles);
var chunk__36481_36487 = null;
var count__36482_36488 = (0);
var i__36483_36489 = (0);
while(true){
if((i__36483_36489 < count__36482_36488)){
var vec__36484_36490 = cljs.core._nth.call(null,chunk__36481_36487,i__36483_36489);
var name_36491 = cljs.core.nth.call(null,vec__36484_36490,(0),null);
var value_36492 = cljs.core.nth.call(null,vec__36484_36490,(1),null);
domina.set_style_BANG_.call(null,content,name_36491,value_36492);

var G__36493 = seq__36480_36486;
var G__36494 = chunk__36481_36487;
var G__36495 = count__36482_36488;
var G__36496 = (i__36483_36489 + (1));
seq__36480_36486 = G__36493;
chunk__36481_36487 = G__36494;
count__36482_36488 = G__36495;
i__36483_36489 = G__36496;
continue;
} else {
var temp__4126__auto___36497 = cljs.core.seq.call(null,seq__36480_36486);
if(temp__4126__auto___36497){
var seq__36480_36498__$1 = temp__4126__auto___36497;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36480_36498__$1)){
var c__4584__auto___36499 = cljs.core.chunk_first.call(null,seq__36480_36498__$1);
var G__36500 = cljs.core.chunk_rest.call(null,seq__36480_36498__$1);
var G__36501 = c__4584__auto___36499;
var G__36502 = cljs.core.count.call(null,c__4584__auto___36499);
var G__36503 = (0);
seq__36480_36486 = G__36500;
chunk__36481_36487 = G__36501;
count__36482_36488 = G__36502;
i__36483_36489 = G__36503;
continue;
} else {
var vec__36485_36504 = cljs.core.first.call(null,seq__36480_36498__$1);
var name_36505 = cljs.core.nth.call(null,vec__36485_36504,(0),null);
var value_36506 = cljs.core.nth.call(null,vec__36485_36504,(1),null);
domina.set_style_BANG_.call(null,content,name_36505,value_36506);

var G__36507 = cljs.core.next.call(null,seq__36480_36498__$1);
var G__36508 = null;
var G__36509 = (0);
var G__36510 = (0);
seq__36480_36486 = G__36507;
chunk__36481_36487 = G__36508;
count__36482_36488 = G__36509;
i__36483_36489 = G__36510;
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
var seq__36517_36523 = cljs.core.seq.call(null,attrs);
var chunk__36518_36524 = null;
var count__36519_36525 = (0);
var i__36520_36526 = (0);
while(true){
if((i__36520_36526 < count__36519_36525)){
var vec__36521_36527 = cljs.core._nth.call(null,chunk__36518_36524,i__36520_36526);
var name_36528 = cljs.core.nth.call(null,vec__36521_36527,(0),null);
var value_36529 = cljs.core.nth.call(null,vec__36521_36527,(1),null);
domina.set_attr_BANG_.call(null,content,name_36528,value_36529);

var G__36530 = seq__36517_36523;
var G__36531 = chunk__36518_36524;
var G__36532 = count__36519_36525;
var G__36533 = (i__36520_36526 + (1));
seq__36517_36523 = G__36530;
chunk__36518_36524 = G__36531;
count__36519_36525 = G__36532;
i__36520_36526 = G__36533;
continue;
} else {
var temp__4126__auto___36534 = cljs.core.seq.call(null,seq__36517_36523);
if(temp__4126__auto___36534){
var seq__36517_36535__$1 = temp__4126__auto___36534;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36517_36535__$1)){
var c__4584__auto___36536 = cljs.core.chunk_first.call(null,seq__36517_36535__$1);
var G__36537 = cljs.core.chunk_rest.call(null,seq__36517_36535__$1);
var G__36538 = c__4584__auto___36536;
var G__36539 = cljs.core.count.call(null,c__4584__auto___36536);
var G__36540 = (0);
seq__36517_36523 = G__36537;
chunk__36518_36524 = G__36538;
count__36519_36525 = G__36539;
i__36520_36526 = G__36540;
continue;
} else {
var vec__36522_36541 = cljs.core.first.call(null,seq__36517_36535__$1);
var name_36542 = cljs.core.nth.call(null,vec__36522_36541,(0),null);
var value_36543 = cljs.core.nth.call(null,vec__36522_36541,(1),null);
domina.set_attr_BANG_.call(null,content,name_36542,value_36543);

var G__36544 = cljs.core.next.call(null,seq__36517_36535__$1);
var G__36545 = null;
var G__36546 = (0);
var G__36547 = (0);
seq__36517_36523 = G__36544;
chunk__36518_36524 = G__36545;
count__36519_36525 = G__36546;
i__36520_36526 = G__36547;
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
var seq__36552_36556 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__36553_36557 = null;
var count__36554_36558 = (0);
var i__36555_36559 = (0);
while(true){
if((i__36555_36559 < count__36554_36558)){
var node_36560 = cljs.core._nth.call(null,chunk__36553_36557,i__36555_36559);
goog.dom.classes.add(node_36560,class$);

var G__36561 = seq__36552_36556;
var G__36562 = chunk__36553_36557;
var G__36563 = count__36554_36558;
var G__36564 = (i__36555_36559 + (1));
seq__36552_36556 = G__36561;
chunk__36553_36557 = G__36562;
count__36554_36558 = G__36563;
i__36555_36559 = G__36564;
continue;
} else {
var temp__4126__auto___36565 = cljs.core.seq.call(null,seq__36552_36556);
if(temp__4126__auto___36565){
var seq__36552_36566__$1 = temp__4126__auto___36565;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36552_36566__$1)){
var c__4584__auto___36567 = cljs.core.chunk_first.call(null,seq__36552_36566__$1);
var G__36568 = cljs.core.chunk_rest.call(null,seq__36552_36566__$1);
var G__36569 = c__4584__auto___36567;
var G__36570 = cljs.core.count.call(null,c__4584__auto___36567);
var G__36571 = (0);
seq__36552_36556 = G__36568;
chunk__36553_36557 = G__36569;
count__36554_36558 = G__36570;
i__36555_36559 = G__36571;
continue;
} else {
var node_36572 = cljs.core.first.call(null,seq__36552_36566__$1);
goog.dom.classes.add(node_36572,class$);

var G__36573 = cljs.core.next.call(null,seq__36552_36566__$1);
var G__36574 = null;
var G__36575 = (0);
var G__36576 = (0);
seq__36552_36556 = G__36573;
chunk__36553_36557 = G__36574;
count__36554_36558 = G__36575;
i__36555_36559 = G__36576;
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
var seq__36581_36585 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__36582_36586 = null;
var count__36583_36587 = (0);
var i__36584_36588 = (0);
while(true){
if((i__36584_36588 < count__36583_36587)){
var node_36589 = cljs.core._nth.call(null,chunk__36582_36586,i__36584_36588);
goog.dom.classes.remove(node_36589,class$);

var G__36590 = seq__36581_36585;
var G__36591 = chunk__36582_36586;
var G__36592 = count__36583_36587;
var G__36593 = (i__36584_36588 + (1));
seq__36581_36585 = G__36590;
chunk__36582_36586 = G__36591;
count__36583_36587 = G__36592;
i__36584_36588 = G__36593;
continue;
} else {
var temp__4126__auto___36594 = cljs.core.seq.call(null,seq__36581_36585);
if(temp__4126__auto___36594){
var seq__36581_36595__$1 = temp__4126__auto___36594;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36581_36595__$1)){
var c__4584__auto___36596 = cljs.core.chunk_first.call(null,seq__36581_36595__$1);
var G__36597 = cljs.core.chunk_rest.call(null,seq__36581_36595__$1);
var G__36598 = c__4584__auto___36596;
var G__36599 = cljs.core.count.call(null,c__4584__auto___36596);
var G__36600 = (0);
seq__36581_36585 = G__36597;
chunk__36582_36586 = G__36598;
count__36583_36587 = G__36599;
i__36584_36588 = G__36600;
continue;
} else {
var node_36601 = cljs.core.first.call(null,seq__36581_36595__$1);
goog.dom.classes.remove(node_36601,class$);

var G__36602 = cljs.core.next.call(null,seq__36581_36595__$1);
var G__36603 = null;
var G__36604 = (0);
var G__36605 = (0);
seq__36581_36585 = G__36602;
chunk__36582_36586 = G__36603;
count__36583_36587 = G__36604;
i__36584_36588 = G__36605;
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
var seq__36610_36614 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__36611_36615 = null;
var count__36612_36616 = (0);
var i__36613_36617 = (0);
while(true){
if((i__36613_36617 < count__36612_36616)){
var node_36618 = cljs.core._nth.call(null,chunk__36611_36615,i__36613_36617);
goog.dom.classes.toggle(node_36618,class$);

var G__36619 = seq__36610_36614;
var G__36620 = chunk__36611_36615;
var G__36621 = count__36612_36616;
var G__36622 = (i__36613_36617 + (1));
seq__36610_36614 = G__36619;
chunk__36611_36615 = G__36620;
count__36612_36616 = G__36621;
i__36613_36617 = G__36622;
continue;
} else {
var temp__4126__auto___36623 = cljs.core.seq.call(null,seq__36610_36614);
if(temp__4126__auto___36623){
var seq__36610_36624__$1 = temp__4126__auto___36623;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36610_36624__$1)){
var c__4584__auto___36625 = cljs.core.chunk_first.call(null,seq__36610_36624__$1);
var G__36626 = cljs.core.chunk_rest.call(null,seq__36610_36624__$1);
var G__36627 = c__4584__auto___36625;
var G__36628 = cljs.core.count.call(null,c__4584__auto___36625);
var G__36629 = (0);
seq__36610_36614 = G__36626;
chunk__36611_36615 = G__36627;
count__36612_36616 = G__36628;
i__36613_36617 = G__36629;
continue;
} else {
var node_36630 = cljs.core.first.call(null,seq__36610_36624__$1);
goog.dom.classes.toggle(node_36630,class$);

var G__36631 = cljs.core.next.call(null,seq__36610_36624__$1);
var G__36632 = null;
var G__36633 = (0);
var G__36634 = (0);
seq__36610_36614 = G__36631;
chunk__36611_36615 = G__36632;
count__36612_36616 = G__36633;
i__36613_36617 = G__36634;
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
var classes_36643__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__36639_36644 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__36640_36645 = null;
var count__36641_36646 = (0);
var i__36642_36647 = (0);
while(true){
if((i__36642_36647 < count__36641_36646)){
var node_36648 = cljs.core._nth.call(null,chunk__36640_36645,i__36642_36647);
goog.dom.classes.set(node_36648,classes_36643__$1);

var G__36649 = seq__36639_36644;
var G__36650 = chunk__36640_36645;
var G__36651 = count__36641_36646;
var G__36652 = (i__36642_36647 + (1));
seq__36639_36644 = G__36649;
chunk__36640_36645 = G__36650;
count__36641_36646 = G__36651;
i__36642_36647 = G__36652;
continue;
} else {
var temp__4126__auto___36653 = cljs.core.seq.call(null,seq__36639_36644);
if(temp__4126__auto___36653){
var seq__36639_36654__$1 = temp__4126__auto___36653;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36639_36654__$1)){
var c__4584__auto___36655 = cljs.core.chunk_first.call(null,seq__36639_36654__$1);
var G__36656 = cljs.core.chunk_rest.call(null,seq__36639_36654__$1);
var G__36657 = c__4584__auto___36655;
var G__36658 = cljs.core.count.call(null,c__4584__auto___36655);
var G__36659 = (0);
seq__36639_36644 = G__36656;
chunk__36640_36645 = G__36657;
count__36641_36646 = G__36658;
i__36642_36647 = G__36659;
continue;
} else {
var node_36660 = cljs.core.first.call(null,seq__36639_36654__$1);
goog.dom.classes.set(node_36660,classes_36643__$1);

var G__36661 = cljs.core.next.call(null,seq__36639_36654__$1);
var G__36662 = null;
var G__36663 = (0);
var G__36664 = (0);
seq__36639_36644 = G__36661;
chunk__36640_36645 = G__36662;
count__36641_36646 = G__36663;
i__36642_36647 = G__36664;
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
var seq__36669_36673 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__36670_36674 = null;
var count__36671_36675 = (0);
var i__36672_36676 = (0);
while(true){
if((i__36672_36676 < count__36671_36675)){
var node_36677 = cljs.core._nth.call(null,chunk__36670_36674,i__36672_36676);
goog.dom.setTextContent(node_36677,value);

var G__36678 = seq__36669_36673;
var G__36679 = chunk__36670_36674;
var G__36680 = count__36671_36675;
var G__36681 = (i__36672_36676 + (1));
seq__36669_36673 = G__36678;
chunk__36670_36674 = G__36679;
count__36671_36675 = G__36680;
i__36672_36676 = G__36681;
continue;
} else {
var temp__4126__auto___36682 = cljs.core.seq.call(null,seq__36669_36673);
if(temp__4126__auto___36682){
var seq__36669_36683__$1 = temp__4126__auto___36682;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36669_36683__$1)){
var c__4584__auto___36684 = cljs.core.chunk_first.call(null,seq__36669_36683__$1);
var G__36685 = cljs.core.chunk_rest.call(null,seq__36669_36683__$1);
var G__36686 = c__4584__auto___36684;
var G__36687 = cljs.core.count.call(null,c__4584__auto___36684);
var G__36688 = (0);
seq__36669_36673 = G__36685;
chunk__36670_36674 = G__36686;
count__36671_36675 = G__36687;
i__36672_36676 = G__36688;
continue;
} else {
var node_36689 = cljs.core.first.call(null,seq__36669_36683__$1);
goog.dom.setTextContent(node_36689,value);

var G__36690 = cljs.core.next.call(null,seq__36669_36683__$1);
var G__36691 = null;
var G__36692 = (0);
var G__36693 = (0);
seq__36669_36673 = G__36690;
chunk__36670_36674 = G__36691;
count__36671_36675 = G__36692;
i__36672_36676 = G__36693;
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
var seq__36698_36702 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__36699_36703 = null;
var count__36700_36704 = (0);
var i__36701_36705 = (0);
while(true){
if((i__36701_36705 < count__36700_36704)){
var node_36706 = cljs.core._nth.call(null,chunk__36699_36703,i__36701_36705);
goog.dom.forms.setValue(node_36706,value);

var G__36707 = seq__36698_36702;
var G__36708 = chunk__36699_36703;
var G__36709 = count__36700_36704;
var G__36710 = (i__36701_36705 + (1));
seq__36698_36702 = G__36707;
chunk__36699_36703 = G__36708;
count__36700_36704 = G__36709;
i__36701_36705 = G__36710;
continue;
} else {
var temp__4126__auto___36711 = cljs.core.seq.call(null,seq__36698_36702);
if(temp__4126__auto___36711){
var seq__36698_36712__$1 = temp__4126__auto___36711;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36698_36712__$1)){
var c__4584__auto___36713 = cljs.core.chunk_first.call(null,seq__36698_36712__$1);
var G__36714 = cljs.core.chunk_rest.call(null,seq__36698_36712__$1);
var G__36715 = c__4584__auto___36713;
var G__36716 = cljs.core.count.call(null,c__4584__auto___36713);
var G__36717 = (0);
seq__36698_36702 = G__36714;
chunk__36699_36703 = G__36715;
count__36700_36704 = G__36716;
i__36701_36705 = G__36717;
continue;
} else {
var node_36718 = cljs.core.first.call(null,seq__36698_36712__$1);
goog.dom.forms.setValue(node_36718,value);

var G__36719 = cljs.core.next.call(null,seq__36698_36712__$1);
var G__36720 = null;
var G__36721 = (0);
var G__36722 = (0);
seq__36698_36702 = G__36719;
chunk__36699_36703 = G__36720;
count__36700_36704 = G__36721;
i__36701_36705 = G__36722;
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
var value_36733 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__36729_36734 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__36730_36735 = null;
var count__36731_36736 = (0);
var i__36732_36737 = (0);
while(true){
if((i__36732_36737 < count__36731_36736)){
var node_36738 = cljs.core._nth.call(null,chunk__36730_36735,i__36732_36737);
node_36738.innerHTML = value_36733;

var G__36739 = seq__36729_36734;
var G__36740 = chunk__36730_36735;
var G__36741 = count__36731_36736;
var G__36742 = (i__36732_36737 + (1));
seq__36729_36734 = G__36739;
chunk__36730_36735 = G__36740;
count__36731_36736 = G__36741;
i__36732_36737 = G__36742;
continue;
} else {
var temp__4126__auto___36743 = cljs.core.seq.call(null,seq__36729_36734);
if(temp__4126__auto___36743){
var seq__36729_36744__$1 = temp__4126__auto___36743;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36729_36744__$1)){
var c__4584__auto___36745 = cljs.core.chunk_first.call(null,seq__36729_36744__$1);
var G__36746 = cljs.core.chunk_rest.call(null,seq__36729_36744__$1);
var G__36747 = c__4584__auto___36745;
var G__36748 = cljs.core.count.call(null,c__4584__auto___36745);
var G__36749 = (0);
seq__36729_36734 = G__36746;
chunk__36730_36735 = G__36747;
count__36731_36736 = G__36748;
i__36732_36737 = G__36749;
continue;
} else {
var node_36750 = cljs.core.first.call(null,seq__36729_36744__$1);
node_36750.innerHTML = value_36733;

var G__36751 = cljs.core.next.call(null,seq__36729_36744__$1);
var G__36752 = null;
var G__36753 = (0);
var G__36754 = (0);
seq__36729_36734 = G__36751;
chunk__36730_36735 = G__36752;
count__36731_36736 = G__36753;
i__36732_36737 = G__36754;
continue;
}
} else {
}
}
break;
}
}catch (e36728){if((e36728 instanceof Error)){
var e_36755 = e36728;
domina.replace_children_BANG_.call(null,content,value_36733);
} else {
throw e36728;

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
var seq__36762_36766 = cljs.core.seq.call(null,children);
var chunk__36763_36767 = null;
var count__36764_36768 = (0);
var i__36765_36769 = (0);
while(true){
if((i__36765_36769 < count__36764_36768)){
var child_36770 = cljs.core._nth.call(null,chunk__36763_36767,i__36765_36769);
frag.appendChild(child_36770);

var G__36771 = seq__36762_36766;
var G__36772 = chunk__36763_36767;
var G__36773 = count__36764_36768;
var G__36774 = (i__36765_36769 + (1));
seq__36762_36766 = G__36771;
chunk__36763_36767 = G__36772;
count__36764_36768 = G__36773;
i__36765_36769 = G__36774;
continue;
} else {
var temp__4126__auto___36775 = cljs.core.seq.call(null,seq__36762_36766);
if(temp__4126__auto___36775){
var seq__36762_36776__$1 = temp__4126__auto___36775;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36762_36776__$1)){
var c__4584__auto___36777 = cljs.core.chunk_first.call(null,seq__36762_36776__$1);
var G__36778 = cljs.core.chunk_rest.call(null,seq__36762_36776__$1);
var G__36779 = c__4584__auto___36777;
var G__36780 = cljs.core.count.call(null,c__4584__auto___36777);
var G__36781 = (0);
seq__36762_36766 = G__36778;
chunk__36763_36767 = G__36779;
count__36764_36768 = G__36780;
i__36765_36769 = G__36781;
continue;
} else {
var child_36782 = cljs.core.first.call(null,seq__36762_36776__$1);
frag.appendChild(child_36782);

var G__36783 = cljs.core.next.call(null,seq__36762_36776__$1);
var G__36784 = null;
var G__36785 = (0);
var G__36786 = (0);
seq__36762_36766 = G__36783;
chunk__36763_36767 = G__36784;
count__36764_36768 = G__36785;
i__36765_36769 = G__36786;
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
return (function (p1__36756_SHARP_,p2__36757_SHARP_){
return f.call(null,p1__36756_SHARP_,p2__36757_SHARP_);
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
if((function (){var G__36788 = list_thing;
if(G__36788){
var bit__4478__auto__ = (G__36788.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4478__auto__) || (G__36788.cljs$core$ISeqable$)){
return true;
} else {
if((!G__36788.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36788);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36788);
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
if((function (){var G__36789 = content;
if(G__36789){
var bit__4478__auto__ = (G__36789.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4478__auto__) || (G__36789.cljs$core$ISeqable$)){
return true;
} else {
if((!G__36789.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36789);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36789);
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
if((function (){var G__36790 = content;
if(G__36790){
var bit__4478__auto__ = (G__36790.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4478__auto__) || (G__36790.cljs$core$ISeqable$)){
return true;
} else {
if((!G__36790.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36790);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36790);
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
