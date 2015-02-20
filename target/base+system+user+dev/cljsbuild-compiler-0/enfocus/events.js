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
var seq__13019_13023 = cljs.core.seq.call(null,listeners);
var chunk__13020_13024 = null;
var count__13021_13025 = (0);
var i__13022_13026 = (0);
while(true){
if((i__13022_13026 < count__13021_13025)){
var obj_13027__$1 = cljs.core._nth.call(null,chunk__13020_13024,i__13022_13026);
var listener_13028 = obj_13027__$1.listener;
if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_13028.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_13028.scope,opt_scope)))){
if(cljs.core.truth_(opt_handler)){
opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_13028);
} else {
goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_13028);
}
} else {
}

var G__13029 = seq__13019_13023;
var G__13030 = chunk__13020_13024;
var G__13031 = count__13021_13025;
var G__13032 = (i__13022_13026 + (1));
seq__13019_13023 = G__13029;
chunk__13020_13024 = G__13030;
count__13021_13025 = G__13031;
i__13022_13026 = G__13032;
continue;
} else {
var temp__4126__auto___13033 = cljs.core.seq.call(null,seq__13019_13023);
if(temp__4126__auto___13033){
var seq__13019_13034__$1 = temp__4126__auto___13033;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13019_13034__$1)){
var c__4584__auto___13035 = cljs.core.chunk_first.call(null,seq__13019_13034__$1);
var G__13036 = cljs.core.chunk_rest.call(null,seq__13019_13034__$1);
var G__13037 = c__4584__auto___13035;
var G__13038 = cljs.core.count.call(null,c__4584__auto___13035);
var G__13039 = (0);
seq__13019_13023 = G__13036;
chunk__13020_13024 = G__13037;
count__13021_13025 = G__13038;
i__13022_13026 = G__13039;
continue;
} else {
var obj_13040__$1 = cljs.core.first.call(null,seq__13019_13034__$1);
var listener_13041 = obj_13040__$1.listener;
if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_13041.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_13041.scope,opt_scope)))){
if(cljs.core.truth_(opt_handler)){
opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_13041);
} else {
goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_13041);
}
} else {
}

var G__13042 = cljs.core.next.call(null,seq__13019_13034__$1);
var G__13043 = null;
var G__13044 = (0);
var G__13045 = (0);
seq__13019_13023 = G__13042;
chunk__13020_13024 = G__13043;
count__13021_13025 = G__13044;
i__13022_13026 = G__13045;
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
var get_name = (function (p1__13046_SHARP_){
return cljs.core.name.call(null,((cljs.core._EQ_.call(null,p1__13046_SHARP_,new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560)))?new cljs.core.Keyword(null,"mouseover","mouseover",-484272303):((cljs.core._EQ_.call(null,p1__13046_SHARP_,new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580)))?new cljs.core.Keyword(null,"mouseout","mouseout",2049446890):p1__13046_SHARP_
)));
});
return ((function (get_name){
return (function (pnod){
var seq__13051 = cljs.core.seq.call(null,event_list);
var chunk__13052 = null;
var count__13053 = (0);
var i__13054 = (0);
while(true){
if((i__13054 < count__13053)){
var ev = cljs.core._nth.call(null,chunk__13052,i__13054);
goog.events.removeAll(pnod,get_name.call(null,ev));

var G__13055 = seq__13051;
var G__13056 = chunk__13052;
var G__13057 = count__13053;
var G__13058 = (i__13054 + (1));
seq__13051 = G__13055;
chunk__13052 = G__13056;
count__13053 = G__13057;
i__13054 = G__13058;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__13051);
if(temp__4126__auto__){
var seq__13051__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13051__$1)){
var c__4584__auto__ = cljs.core.chunk_first.call(null,seq__13051__$1);
var G__13059 = cljs.core.chunk_rest.call(null,seq__13051__$1);
var G__13060 = c__4584__auto__;
var G__13061 = cljs.core.count.call(null,c__4584__auto__);
var G__13062 = (0);
seq__13051 = G__13059;
chunk__13052 = G__13060;
count__13053 = G__13061;
i__13054 = G__13062;
continue;
} else {
var ev = cljs.core.first.call(null,seq__13051__$1);
goog.events.removeAll(pnod,get_name.call(null,ev));

var G__13063 = cljs.core.next.call(null,seq__13051__$1);
var G__13064 = null;
var G__13065 = (0);
var G__13066 = (0);
seq__13051 = G__13063;
chunk__13052 = G__13064;
count__13053 = G__13065;
i__13054 = G__13066;
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
var G__13067__i = 0, G__13067__a = new Array(arguments.length -  0);
while (G__13067__i < G__13067__a.length) {G__13067__a[G__13067__i] = arguments[G__13067__i + 0]; ++G__13067__i;}
  event_list = new cljs.core.IndexedSeq(G__13067__a,0);
} 
return remove_listeners__delegate.call(this,event_list);};
remove_listeners.cljs$lang$maxFixedArity = 0;
remove_listeners.cljs$lang$applyTo = (function (arglist__13068){
var event_list = cljs.core.seq(arglist__13068);
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
return enfocus.core.at.call(null,node,enfocus.events.listen.call(null,event,(function (p1__13069_SHARP_){
var seq__13074 = cljs.core.seq.call(null,enfocus.events.get_node_chain.call(null,node,p1__13069_SHARP_.target));
var chunk__13075 = null;
var count__13076 = (0);
var i__13077 = (0);
while(true){
if((i__13077 < count__13076)){
var el = cljs.core._nth.call(null,chunk__13075,i__13077);
enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__13074,chunk__13075,count__13076,i__13077,el){
return (function (node__$1){
var event_copy = enfocus.events.create_event.call(null,el,p1__13069_SHARP_);
func.call(null,event_copy);

if(cljs.core.truth_(event_copy.defaultPrevented)){
p1__13069_SHARP_.preventDefault();
} else {
}

if(cljs.core.truth_(event_copy.propagationStopped)){
return p1__13069_SHARP_.stopPropagation();
} else {
return null;
}
});})(seq__13074,chunk__13075,count__13076,i__13077,el))
));

var G__13078 = seq__13074;
var G__13079 = chunk__13075;
var G__13080 = count__13076;
var G__13081 = (i__13077 + (1));
seq__13074 = G__13078;
chunk__13075 = G__13079;
count__13076 = G__13080;
i__13077 = G__13081;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__13074);
if(temp__4126__auto__){
var seq__13074__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13074__$1)){
var c__4584__auto__ = cljs.core.chunk_first.call(null,seq__13074__$1);
var G__13082 = cljs.core.chunk_rest.call(null,seq__13074__$1);
var G__13083 = c__4584__auto__;
var G__13084 = cljs.core.count.call(null,c__4584__auto__);
var G__13085 = (0);
seq__13074 = G__13082;
chunk__13075 = G__13083;
count__13076 = G__13084;
i__13077 = G__13085;
continue;
} else {
var el = cljs.core.first.call(null,seq__13074__$1);
enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__13074,chunk__13075,count__13076,i__13077,el,seq__13074__$1,temp__4126__auto__){
return (function (node__$1){
var event_copy = enfocus.events.create_event.call(null,el,p1__13069_SHARP_);
func.call(null,event_copy);

if(cljs.core.truth_(event_copy.defaultPrevented)){
p1__13069_SHARP_.preventDefault();
} else {
}

if(cljs.core.truth_(event_copy.propagationStopped)){
return p1__13069_SHARP_.stopPropagation();
} else {
return null;
}
});})(seq__13074,chunk__13075,count__13076,i__13077,el,seq__13074__$1,temp__4126__auto__))
));

var G__13086 = cljs.core.next.call(null,seq__13074__$1);
var G__13087 = null;
var G__13088 = (0);
var G__13089 = (0);
seq__13074 = G__13086;
chunk__13075 = G__13087;
count__13076 = G__13088;
i__13077 = G__13089;
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
var G__13090 = parent;
var G__13091 = child.parentNode;
parent = G__13090;
child = G__13091;
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
