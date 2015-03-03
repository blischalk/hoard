// Compiled by ClojureScript 0.0-2814 {}
goog.provide('enfocus.events');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('enfocus.core');
goog.require('goog.dom');
goog.require('goog.events');

enfocus.events.view_port_monitor = cljs.core.atom.call(null,null);
/**
* needed to support window :resize
*/
enfocus.events.get_vp_monitor = (function get_vp_monitor(){
if(cljs.core.truth_(cljs.core.deref.call(null,enfocus.events.view_port_monitor))){
return cljs.core.deref.call(null,enfocus.events.view_port_monitor);
} else {
cljs.core.swap_BANG_.call(null,enfocus.events.view_port_monitor,(function (){
return (new goog.dom.ViewportSizeMonitor());
}));

return cljs.core.deref.call(null,enfocus.events.view_port_monitor);
}
});
enfocus.events.gen_enter_leave_wrapper = (function gen_enter_leave_wrapper(event){
var obj = (new Object());
obj.listen = ((function (obj){
return (function (elm,func,opt_cap,opt_scope,opt_handler){
var callback = enfocus.events.mouse_enter_leave.call(null,func);
callback.listen = func;

callback.scope = opt_scope;

if(cljs.core.truth_(opt_handler)){
return opt_handler.listen(elm,cljs.core.name.call(null,event),callback);
} else {
return goog.events.listen(elm,cljs.core.name.call(null,event),callback);
}
});})(obj))
;

obj.unlisten = ((function (obj){
return (function (elm,func,opt_cap,opt_scope,opt_handler){
var listeners = goog.events.getListeners(elm,cljs.core.name.call(null,event),false);
var seq__37310_37314 = cljs.core.seq.call(null,listeners);
var chunk__37311_37315 = null;
var count__37312_37316 = (0);
var i__37313_37317 = (0);
while(true){
if((i__37313_37317 < count__37312_37316)){
var obj_37318__$1 = cljs.core._nth.call(null,chunk__37311_37315,i__37313_37317);
var listener_37319 = obj_37318__$1.listener;
if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_37319.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_37319.scope,opt_scope)))){
if(cljs.core.truth_(opt_handler)){
opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_37319);
} else {
goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_37319);
}
} else {
}

var G__37320 = seq__37310_37314;
var G__37321 = chunk__37311_37315;
var G__37322 = count__37312_37316;
var G__37323 = (i__37313_37317 + (1));
seq__37310_37314 = G__37320;
chunk__37311_37315 = G__37321;
count__37312_37316 = G__37322;
i__37313_37317 = G__37323;
continue;
} else {
var temp__4126__auto___37324 = cljs.core.seq.call(null,seq__37310_37314);
if(temp__4126__auto___37324){
var seq__37310_37325__$1 = temp__4126__auto___37324;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37310_37325__$1)){
var c__4584__auto___37326 = cljs.core.chunk_first.call(null,seq__37310_37325__$1);
var G__37327 = cljs.core.chunk_rest.call(null,seq__37310_37325__$1);
var G__37328 = c__4584__auto___37326;
var G__37329 = cljs.core.count.call(null,c__4584__auto___37326);
var G__37330 = (0);
seq__37310_37314 = G__37327;
chunk__37311_37315 = G__37328;
count__37312_37316 = G__37329;
i__37313_37317 = G__37330;
continue;
} else {
var obj_37331__$1 = cljs.core.first.call(null,seq__37310_37325__$1);
var listener_37332 = obj_37331__$1.listener;
if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_37332.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_37332.scope,opt_scope)))){
if(cljs.core.truth_(opt_handler)){
opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_37332);
} else {
goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_37332);
}
} else {
}

var G__37333 = cljs.core.next.call(null,seq__37310_37325__$1);
var G__37334 = null;
var G__37335 = (0);
var G__37336 = (0);
seq__37310_37314 = G__37333;
chunk__37311_37315 = G__37334;
count__37312_37316 = G__37335;
i__37313_37317 = G__37336;
continue;
}
} else {
}
}
break;
}

return listeners;
});})(obj))
;

return obj;
});
enfocus.events.wrapper_register = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),enfocus.events.gen_enter_leave_wrapper.call(null,new cljs.core.Keyword(null,"mouseover","mouseover",-484272303)),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),enfocus.events.gen_enter_leave_wrapper.call(null,new cljs.core.Keyword(null,"mouseout","mouseout",2049446890))], null);
/**
* adding an event to the selected nodes
*/
enfocus.events.listen = (function listen(event,func){
var wrapper = enfocus.events.wrapper_register.call(null,event);
return ((function (wrapper){
return (function (pnod){
if((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"resize","resize",297367086),event)) && ((window === pnod))){
return goog.events.listen(enfocus.events.get_vp_monitor.call(null),"resize",func);
} else {
if((wrapper == null)){
return goog.events.listen(pnod,cljs.core.name.call(null,event),func);
} else {
return goog.events.listenWithWrapper(pnod,wrapper,func);
}
}
});
;})(wrapper))
});
/**
* removing all listeners of a given event type from the selected nodes
* @param {...*} var_args
*/
enfocus.events.remove_listeners = (function() { 
var remove_listeners__delegate = function (event_list){
var get_name = (function (p1__37337_SHARP_){
return cljs.core.name.call(null,((cljs.core._EQ_.call(null,p1__37337_SHARP_,new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560)))?new cljs.core.Keyword(null,"mouseover","mouseover",-484272303):((cljs.core._EQ_.call(null,p1__37337_SHARP_,new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580)))?new cljs.core.Keyword(null,"mouseout","mouseout",2049446890):p1__37337_SHARP_
)));
});
return ((function (get_name){
return (function (pnod){
var seq__37342 = cljs.core.seq.call(null,event_list);
var chunk__37343 = null;
var count__37344 = (0);
var i__37345 = (0);
while(true){
if((i__37345 < count__37344)){
var ev = cljs.core._nth.call(null,chunk__37343,i__37345);
goog.events.removeAll(pnod,get_name.call(null,ev));

var G__37346 = seq__37342;
var G__37347 = chunk__37343;
var G__37348 = count__37344;
var G__37349 = (i__37345 + (1));
seq__37342 = G__37346;
chunk__37343 = G__37347;
count__37344 = G__37348;
i__37345 = G__37349;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__37342);
if(temp__4126__auto__){
var seq__37342__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37342__$1)){
var c__4584__auto__ = cljs.core.chunk_first.call(null,seq__37342__$1);
var G__37350 = cljs.core.chunk_rest.call(null,seq__37342__$1);
var G__37351 = c__4584__auto__;
var G__37352 = cljs.core.count.call(null,c__4584__auto__);
var G__37353 = (0);
seq__37342 = G__37350;
chunk__37343 = G__37351;
count__37344 = G__37352;
i__37345 = G__37353;
continue;
} else {
var ev = cljs.core.first.call(null,seq__37342__$1);
goog.events.removeAll(pnod,get_name.call(null,ev));

var G__37354 = cljs.core.next.call(null,seq__37342__$1);
var G__37355 = null;
var G__37356 = (0);
var G__37357 = (0);
seq__37342 = G__37354;
chunk__37343 = G__37355;
count__37344 = G__37356;
i__37345 = G__37357;
continue;
}
} else {
return null;
}
}
break;
}
});
;})(get_name))
};
var remove_listeners = function (var_args){
var event_list = null;
if (arguments.length > 0) {
var G__37358__i = 0, G__37358__a = new Array(arguments.length -  0);
while (G__37358__i < G__37358__a.length) {G__37358__a[G__37358__i] = arguments[G__37358__i + 0]; ++G__37358__i;}
  event_list = new cljs.core.IndexedSeq(G__37358__a,0);
} 
return remove_listeners__delegate.call(this,event_list);};
remove_listeners.cljs$lang$maxFixedArity = 0;
remove_listeners.cljs$lang$applyTo = (function (arglist__37359){
var event_list = cljs.core.seq(arglist__37359);
return remove_listeners__delegate(event_list);
});
remove_listeners.cljs$core$IFn$_invoke$arity$variadic = remove_listeners__delegate;
return remove_listeners;
})()
;
/**
* removing a specific event from the selected nodes
*/
enfocus.events.unlisten = (function() {
var unlisten = null;
var unlisten__1 = (function (event){
return enfocus.events.remove_listeners.call(null,event);
});
var unlisten__2 = (function (event,func){
var wrapper = enfocus.events.wrapper_register.call(null,event);
return ((function (wrapper){
return (function (pnod){
if((wrapper == null)){
return goog.events.unlisten(pnod,cljs.core.name.call(null,event),func);
} else {
return goog.events.unlistenWithWrapper(pnod,wrapper,func);
}
});
;})(wrapper))
});
unlisten = function(event,func){
switch(arguments.length){
case 1:
return unlisten__1.call(this,event);
case 2:
return unlisten__2.call(this,event,func);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unlisten.cljs$core$IFn$_invoke$arity$1 = unlisten__1;
unlisten.cljs$core$IFn$_invoke$arity$2 = unlisten__2;
return unlisten;
})()
;
enfocus.events.get_node_chain = (function get_node_chain(top,node){
if(((node == null)) || (cljs.core._EQ_.call(null,node,top))){
return cljs.core.List.EMPTY;
} else {
return cljs.core.conj.call(null,get_node_chain.call(null,top,node.parentNode),node);
}
});
enfocus.events.create_event = (function create_event(cur,cur_event){
var event = goog.object.clone(cur_event);
event.currentTarget = cur;

return event;
});
enfocus.events.listen_live = (function listen_live(event,selector,func){
return (function (node){
return enfocus.core.at.call(null,node,enfocus.events.listen.call(null,event,(function (p1__37360_SHARP_){
var seq__37365 = cljs.core.seq.call(null,enfocus.events.get_node_chain.call(null,node,p1__37360_SHARP_.target));
var chunk__37366 = null;
var count__37367 = (0);
var i__37368 = (0);
while(true){
if((i__37368 < count__37367)){
var el = cljs.core._nth.call(null,chunk__37366,i__37368);
enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__37365,chunk__37366,count__37367,i__37368,el){
return (function (node__$1){
var event_copy = enfocus.events.create_event.call(null,el,p1__37360_SHARP_);
func.call(null,event_copy);

if(cljs.core.truth_(event_copy.defaultPrevented)){
p1__37360_SHARP_.preventDefault();
} else {
}

if(cljs.core.truth_(event_copy.propagationStopped)){
return p1__37360_SHARP_.stopPropagation();
} else {
return null;
}
});})(seq__37365,chunk__37366,count__37367,i__37368,el))
));

var G__37369 = seq__37365;
var G__37370 = chunk__37366;
var G__37371 = count__37367;
var G__37372 = (i__37368 + (1));
seq__37365 = G__37369;
chunk__37366 = G__37370;
count__37367 = G__37371;
i__37368 = G__37372;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__37365);
if(temp__4126__auto__){
var seq__37365__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37365__$1)){
var c__4584__auto__ = cljs.core.chunk_first.call(null,seq__37365__$1);
var G__37373 = cljs.core.chunk_rest.call(null,seq__37365__$1);
var G__37374 = c__4584__auto__;
var G__37375 = cljs.core.count.call(null,c__4584__auto__);
var G__37376 = (0);
seq__37365 = G__37373;
chunk__37366 = G__37374;
count__37367 = G__37375;
i__37368 = G__37376;
continue;
} else {
var el = cljs.core.first.call(null,seq__37365__$1);
enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__37365,chunk__37366,count__37367,i__37368,el,seq__37365__$1,temp__4126__auto__){
return (function (node__$1){
var event_copy = enfocus.events.create_event.call(null,el,p1__37360_SHARP_);
func.call(null,event_copy);

if(cljs.core.truth_(event_copy.defaultPrevented)){
p1__37360_SHARP_.preventDefault();
} else {
}

if(cljs.core.truth_(event_copy.propagationStopped)){
return p1__37360_SHARP_.stopPropagation();
} else {
return null;
}
});})(seq__37365,chunk__37366,count__37367,i__37368,el,seq__37365__$1,temp__4126__auto__))
));

var G__37377 = cljs.core.next.call(null,seq__37365__$1);
var G__37378 = null;
var G__37379 = (0);
var G__37380 = (0);
seq__37365 = G__37377;
chunk__37366 = G__37378;
count__37367 = G__37379;
i__37368 = G__37380;
continue;
}
} else {
return null;
}
}
break;
}
})));
});
});
/**
* returns true if the node(child) is a child of parent
*/
enfocus.events.child_of_QMARK_ = (function child_of_QMARK_(parent,child){
while(true){
if(cljs.core.not.call(null,child)){
return false;
} else {
if((parent === child)){
return false;
} else {
if((child.parentNode === parent)){
return true;
} else {
var G__37381 = parent;
var G__37382 = child.parentNode;
parent = G__37381;
child = G__37382;
continue;

}
}
}
break;
}
});
/**
* this is used to build cross browser versions of :mouseenter and :mouseleave events
*/
enfocus.events.mouse_enter_leave = (function mouse_enter_leave(func){
return (function (e){
var re = e.relatedTarget;
var this$ = e.currentTarget;
if((!((re === this$))) && (!(enfocus.events.child_of_QMARK_.call(null,this$,re)))){
return func.call(null,e);
} else {
return null;
}
});
});
