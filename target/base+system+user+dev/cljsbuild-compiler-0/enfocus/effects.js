// Compiled by ClojureScript 0.0-2814 {}
goog.provide('enfocus.effects');
goog.require('cljs.core');
goog.require('goog.dom.query');
goog.require('enfocus.core');
goog.require('goog.fx');
goog.require('goog.fx.dom');
goog.require('goog.events');
goog.require('goog.style');
/**
* wrapper function for effects, maps the effect to all nodes returned by the
* selector and provides chaining and callback functionality
*/
enfocus.effects.chainable_effect = (function chainable_effect(func,callback){
var trans = (function (pnodes,chain){
var pnod_col = enfocus.core.nodes__GT_coll.call(null,pnodes);
var cnt = cljs.core.atom.call(null,cljs.core.count.call(null,pnod_col));
var partial_cback = ((function (pnod_col,cnt){
return (function (){
cljs.core.swap_BANG_.call(null,cnt,cljs.core.dec);

if(cljs.core._EQ_.call(null,(0),cljs.core.deref.call(null,cnt))){
if(cljs.core.truth_(callback)){
enfocus.core.apply_transform.call(null,callback,pnodes);
} else {
}

if(cljs.core.truth_(chain)){
return enfocus.core.apply_transform.call(null,chain,pnodes);
} else {
return null;
}
} else {
return null;
}
});})(pnod_col,cnt))
;
var seq__11869 = cljs.core.seq.call(null,pnod_col);
var chunk__11870 = null;
var count__11871 = (0);
var i__11872 = (0);
while(true){
if((i__11872 < count__11871)){
var pnod = cljs.core._nth.call(null,chunk__11870,i__11872);
func.call(null,pnod,partial_cback);

var G__11876 = seq__11869;
var G__11877 = chunk__11870;
var G__11878 = count__11871;
var G__11879 = (i__11872 + (1));
seq__11869 = G__11876;
chunk__11870 = G__11877;
count__11871 = G__11878;
i__11872 = G__11879;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__11869);
if(temp__4126__auto__){
var seq__11869__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11869__$1)){
var c__4584__auto__ = cljs.core.chunk_first.call(null,seq__11869__$1);
var G__11880 = cljs.core.chunk_rest.call(null,seq__11869__$1);
var G__11881 = c__4584__auto__;
var G__11882 = cljs.core.count.call(null,c__4584__auto__);
var G__11883 = (0);
seq__11869 = G__11880;
chunk__11870 = G__11881;
count__11871 = G__11882;
i__11872 = G__11883;
continue;
} else {
var pnod = cljs.core.first.call(null,seq__11869__$1);
func.call(null,pnod,partial_cback);

var G__11884 = cljs.core.next.call(null,seq__11869__$1);
var G__11885 = null;
var G__11886 = (0);
var G__11887 = (0);
seq__11869 = G__11884;
chunk__11870 = G__11885;
count__11871 = G__11886;
i__11872 = G__11887;
continue;
}
} else {
return null;
}
}
break;
}
});
if(typeof enfocus.effects.t11873 !== 'undefined'){
} else {

/**
* @constructor
*/
enfocus.effects.t11873 = (function (trans,callback,func,chainable_effect,meta11874){
this.trans = trans;
this.callback = callback;
this.func = func;
this.chainable_effect = chainable_effect;
this.meta11874 = meta11874;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.effects.t11873.prototype.enfocus$core$ITransform$ = true;

enfocus.effects.t11873.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.effects.t11873.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.effects.t11873.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_11875){
var self__ = this;
var _11875__$1 = this;
return self__.meta11874;
});})(trans))
;

enfocus.effects.t11873.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_11875,meta11874__$1){
var self__ = this;
var _11875__$1 = this;
return (new enfocus.effects.t11873(self__.trans,self__.callback,self__.func,self__.chainable_effect,meta11874__$1));
});})(trans))
;

enfocus.effects.t11873.cljs$lang$type = true;

enfocus.effects.t11873.cljs$lang$ctorStr = "enfocus.effects/t11873";

enfocus.effects.t11873.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__4384__auto__,writer__4385__auto__,opt__4386__auto__){
return cljs.core._write.call(null,writer__4385__auto__,"enfocus.effects/t11873");
});})(trans))
;

enfocus.effects.__GT_t11873 = ((function (trans){
return (function __GT_t11873(trans__$1,callback__$1,func__$1,chainable_effect__$1,meta11874){
return (new enfocus.effects.t11873(trans__$1,callback__$1,func__$1,chainable_effect__$1,meta11874));
});})(trans))
;

}

return (new enfocus.effects.t11873(trans,callback,func,chainable_effect,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),61,new cljs.core.Keyword(null,"end-line","end-line",1837326455),26,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),24,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/blischalk/node-webkit-apps/hoard/target/base+system+user+dev/cljsbuild-compiler-0/enfocus/effects.cljs"], null)));
});
/**
* chains a series of effects and trasforms in sequences
* @param {...*} var_args
*/
enfocus.effects.chain = (function() { 
var chain__delegate = function (func,chains){
if(cljs.core.empty_QMARK_.call(null,chains)){
return (function (pnod){
return enfocus.core.apply_transform.call(null,func,pnod);
});
} else {
return (function (pnod){
return enfocus.core.apply_transform.call(null,func,pnod,cljs.core.apply.call(null,chain,chains));
});
}
};
var chain = function (func,var_args){
var chains = null;
if (arguments.length > 1) {
var G__11888__i = 0, G__11888__a = new Array(arguments.length -  1);
while (G__11888__i < G__11888__a.length) {G__11888__a[G__11888__i] = arguments[G__11888__i + 1]; ++G__11888__i;}
  chains = new cljs.core.IndexedSeq(G__11888__a,0);
} 
return chain__delegate.call(this,func,chains);};
chain.cljs$lang$maxFixedArity = 1;
chain.cljs$lang$applyTo = (function (arglist__11889){
var func = cljs.core.first(arglist__11889);
var chains = cljs.core.rest(arglist__11889);
return chain__delegate(func,chains);
});
chain.cljs$core$IFn$_invoke$arity$variadic = chain__delegate;
return chain;
})()
;
/**
* fade the selected nodes over a set of steps
*/
enfocus.effects.fade_out = (function() {
var fade_out = null;
var fade_out__1 = (function (ttime){
return fade_out.call(null,ttime,null,null);
});
var fade_out__2 = (function (ttime,callback){
return fade_out.call(null,ttime,callback,null);
});
var fade_out__3 = (function (ttime,callback,accel){
return enfocus.effects.chainable_effect.call(null,(function (pnod,pcallback){
var anim = (new goog.fx.dom.FadeOut(pnod,ttime,accel));
if(cljs.core.truth_(pcallback)){
goog.events.listen(anim,goog.fx.Animation.EventType.END,pcallback);
} else {
}

return anim.play();
}),callback);
});
fade_out = function(ttime,callback,accel){
switch(arguments.length){
case 1:
return fade_out__1.call(this,ttime);
case 2:
return fade_out__2.call(this,ttime,callback);
case 3:
return fade_out__3.call(this,ttime,callback,accel);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fade_out.cljs$core$IFn$_invoke$arity$1 = fade_out__1;
fade_out.cljs$core$IFn$_invoke$arity$2 = fade_out__2;
fade_out.cljs$core$IFn$_invoke$arity$3 = fade_out__3;
return fade_out;
})()
;
/**
* fade the selected nodes over a set of steps
*/
enfocus.effects.fade_in = (function() {
var fade_in = null;
var fade_in__1 = (function (ttime){
return fade_in.call(null,ttime,null,null);
});
var fade_in__2 = (function (ttime,callback){
return fade_in.call(null,ttime,callback,null);
});
var fade_in__3 = (function (ttime,callback,accel){
return enfocus.effects.chainable_effect.call(null,(function (pnod,pcallback){
var anim = (new goog.fx.dom.FadeIn(pnod,ttime,accel));
if(cljs.core.truth_(pcallback)){
goog.events.listen(anim,goog.fx.Animation.EventType.END,pcallback);
} else {
}

return anim.play();
}),callback);
});
fade_in = function(ttime,callback,accel){
switch(arguments.length){
case 1:
return fade_in__1.call(this,ttime);
case 2:
return fade_in__2.call(this,ttime,callback);
case 3:
return fade_in__3.call(this,ttime,callback,accel);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fade_in.cljs$core$IFn$_invoke$arity$1 = fade_in__1;
fade_in.cljs$core$IFn$_invoke$arity$2 = fade_in__2;
fade_in.cljs$core$IFn$_invoke$arity$3 = fade_in__3;
return fade_in;
})()
;
/**
* resizes the selected elements to a width and height in px optional time series data
*/
enfocus.effects.resize = (function() {
var resize = null;
var resize__2 = (function (wth,hgt){
return resize.call(null,wth,hgt,(0),null,null);
});
var resize__3 = (function (wth,hgt,ttime){
return resize.call(null,wth,hgt,ttime,null,null);
});
var resize__4 = (function (wth,hgt,ttime,callback){
return resize.call(null,wth,hgt,ttime,callback,null);
});
var resize__5 = (function (wth,hgt,ttime,callback,accel){
return enfocus.effects.chainable_effect.call(null,(function (pnod,pcallback){
var csize = goog.style.getContentBoxSize(pnod);
var start = [csize.width,csize.height];
var wth__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"curwidth","curwidth",1831107733),wth))?csize.width:wth);
var hgt__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"curheight","curheight",-119931765),hgt))?csize.height:hgt);
var end = [wth__$1,hgt__$1];
var anim = (new goog.fx.dom.Resize(pnod,start,end,ttime,accel));
if(cljs.core.truth_(pcallback)){
goog.events.listen(anim,goog.fx.Animation.EventType.END,pcallback);
} else {
}

return anim.play();
}),callback);
});
resize = function(wth,hgt,ttime,callback,accel){
switch(arguments.length){
case 2:
return resize__2.call(this,wth,hgt);
case 3:
return resize__3.call(this,wth,hgt,ttime);
case 4:
return resize__4.call(this,wth,hgt,ttime,callback);
case 5:
return resize__5.call(this,wth,hgt,ttime,callback,accel);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
resize.cljs$core$IFn$_invoke$arity$2 = resize__2;
resize.cljs$core$IFn$_invoke$arity$3 = resize__3;
resize.cljs$core$IFn$_invoke$arity$4 = resize__4;
resize.cljs$core$IFn$_invoke$arity$5 = resize__5;
return resize;
})()
;
/**
* moves the selected elements to a x and y in px optional time series data
*/
enfocus.effects.move = (function() {
var move = null;
var move__2 = (function (xpos,ypos){
return move.call(null,xpos,ypos,(0),null,null);
});
var move__3 = (function (xpos,ypos,ttime){
return move.call(null,xpos,ypos,ttime,null,null);
});
var move__4 = (function (xpos,ypos,ttime,callback){
return move.call(null,xpos,ypos,ttime,callback,null);
});
var move__5 = (function (xpos,ypos,ttime,callback,accel){
return enfocus.effects.chainable_effect.call(null,(function (pnod,pcallback){
var cpos = goog.style.getPosition(pnod);
var start = [cpos.x,cpos.y];
var xpos__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"curx","curx",-1922579418),xpos))?cpos.x:xpos);
var ypos__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cury","cury",-230854218),ypos))?cpos.y:ypos);
var end = [xpos__$1,ypos__$1];
var anim = (new goog.fx.dom.Slide(pnod,start,end,ttime,accel));
if(cljs.core.truth_(pcallback)){
goog.events.listen(anim,goog.fx.Animation.EventType.END,pcallback);
} else {
}

return anim.play();
}),callback);
});
move = function(xpos,ypos,ttime,callback,accel){
switch(arguments.length){
case 2:
return move__2.call(this,xpos,ypos);
case 3:
return move__3.call(this,xpos,ypos,ttime);
case 4:
return move__4.call(this,xpos,ypos,ttime,callback);
case 5:
return move__5.call(this,xpos,ypos,ttime,callback,accel);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
move.cljs$core$IFn$_invoke$arity$2 = move__2;
move.cljs$core$IFn$_invoke$arity$3 = move__3;
move.cljs$core$IFn$_invoke$arity$4 = move__4;
move.cljs$core$IFn$_invoke$arity$5 = move__5;
return move;
})()
;
/**
* scrolls selected elements to a x and y in px optional time series data
*/
enfocus.effects.scroll = (function() {
var scroll = null;
var scroll__2 = (function (xpos,ypos){
return scroll.call(null,xpos,ypos,(0),null,null);
});
var scroll__3 = (function (xpos,ypos,ttime){
return scroll.call(null,xpos,ypos,ttime,null,null);
});
var scroll__4 = (function (xpos,ypos,ttime,callback){
return scroll.call(null,xpos,ypos,ttime,callback,null);
});
var scroll__5 = (function (xpos,ypos,ttime,callback,accel){
return enfocus.effects.chainable_effect.call(null,(function (pnod,pcallback){
var start = [pnod.scrollLeft,pnod.scrollTop];
var xpos__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"curx","curx",-1922579418),xpos))?pnod.scrollLeft:xpos);
var ypos__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cury","cury",-230854218),ypos))?pnod.scrollTop:ypos);
var end = [xpos__$1,ypos__$1];
var anim = (new goog.fx.dom.Scroll(pnod,start,end,ttime,accel));
if(cljs.core.truth_(pcallback)){
goog.events.listen(anim,goog.fx.Animation.EventType.END,pcallback);
} else {
}

return anim.play();
}),callback);
});
scroll = function(xpos,ypos,ttime,callback,accel){
switch(arguments.length){
case 2:
return scroll__2.call(this,xpos,ypos);
case 3:
return scroll__3.call(this,xpos,ypos,ttime);
case 4:
return scroll__4.call(this,xpos,ypos,ttime,callback);
case 5:
return scroll__5.call(this,xpos,ypos,ttime,callback,accel);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
scroll.cljs$core$IFn$_invoke$arity$2 = scroll__2;
scroll.cljs$core$IFn$_invoke$arity$3 = scroll__3;
scroll.cljs$core$IFn$_invoke$arity$4 = scroll__4;
scroll.cljs$core$IFn$_invoke$arity$5 = scroll__5;
return scroll;
})()
;
enfocus.effects.liner = (function liner(t){
return t;
});
enfocus.effects.ease_in_quad = (function ease_in_quad(t){
return (t * t);
});
enfocus.effects.ease_out_quad = (function ease_out_quad(t){
return ((-1) * (t * (t - (2))));
});
enfocus.effects.ease_in_out_quad = (function ease_in_out_quad(t){
var nt = (t * (2));
if((nt < (1))){
return ((.5 * nt) * nt);
} else {
return (-0.5 * (((nt - (1)) * (nt - (2))) - (1)));
}
});
enfocus.effects.ease_in_cubic = (function ease_in_cubic(t){
return ((t * t) * t);
});
enfocus.effects.ease_out_cubic = (function ease_out_cubic(t){
var nt = (t - (1));
return (((nt * nt) * nt) + (1));
});
enfocus.effects.ease_in_out_cubic = (function ease_in_out_cubic(t){
var nt = (t * (2));
if((nt < (1))){
return (((.5 * nt) * nt) * nt);
} else {
var mt = (nt - (2));
return (.5 * ((2) + ((mt * mt) * mt)));
}
});
enfocus.effects.ease_in_quart = (function ease_in_quart(t){
return (((t * t) * t) * t);
});
enfocus.effects.ease_out_quart = (function ease_out_quart(t){
var nt = (t - (1));
return ((-1) * ((((nt * nt) * nt) * nt) - (1)));
});
enfocus.effects.ease_in_out_quart = (function ease_in_out_quart(t){
var nt = (t * (2));
if((nt < (1))){
return ((((.5 * nt) * nt) * nt) * nt);
} else {
var mt = (nt - (2));
return (.5 * ((2) + (((mt * mt) * mt) * mt)));
}
});
enfocus.effects.ease_in_quint = (function ease_in_quint(t){
return (((t * t) * t) * t);
});
enfocus.effects.ease_out_quint = (function ease_out_quint(t){
var nt = (t - (1));
return ((((nt * nt) * nt) * nt) + (1));
});
enfocus.effects.ease_in_out_quint = (function ease_in_out_quint(t){
var nt = (t * (2));
if((nt < (1))){
return (((((.5 * nt) * nt) * nt) * nt) * nt);
} else {
var mt = (nt - (2));
return (.5 * ((2) + ((((mt * mt) * mt) * mt) * mt)));
}
});
enfocus.effects.sign_in = (function sign_in(t){
return (((-1) * Math.cos(((0.5 * Math.PI) * t))) + (1));
});
enfocus.effects.sign_out = (function sign_out(t){
return Math.sin(((t * Math.PI) * 0.5));
});
enfocus.effects.sign_in_out = (function sign_in_out(t){
return (-0.5 * (Math.cos((Math.PI * t)) - (1)));
});
enfocus.effects.expo_in = (function expo_in(t){
if(cljs.core._EQ_.call(null,t,(0))){
return (0);
} else {
return Math.pow((2),((10) * (t - (1))));
}
});
enfocus.effects.expo_out = (function expo_out(t){
if(cljs.core._EQ_.call(null,t,(0))){
return (1);
} else {
return (((-1) * Math.pow((2),((-10) * t))) + (1));
}
});
enfocus.effects.expo_in_out = (function expo_in_out(t){
if(cljs.core._EQ_.call(null,t,(0))){
return (0);
} else {
if(cljs.core._EQ_.call(null,t,(1))){
return (1);
} else {
if((t < (1))){
return (0.5 * Math.pow((2),((10) * (t - (1)))));
} else {
return (0.5 * (((-1) * Math.pow((2),((-10) * (t - (1))))) + (2)));

}
}
}
});
enfocus.effects.circular_in = (function circular_in(t){
return ((-1) * (Math.sqrt(((1) - Math.pow(t,(2)))) - (1)));
});
enfocus.effects.circular_out = (function circular_out(t){
var nt = (t - (1));
return Math.sqrt(((1) - Math.pow(nt,(2))));
});
enfocus.effects.circular_in_out = (function circular_in_out(t){
var nt = (t * (2));
if((t < (1))){
return (-0.5 * (Math.sqrt(((1) - Math.pow(nt,(2)))) - (1)));
} else {
var mt = (nt - (2));
return (-0.5 * (Math.sqrt(((1) - Math.pow(nt,(2)))) + (1)));
}
});
