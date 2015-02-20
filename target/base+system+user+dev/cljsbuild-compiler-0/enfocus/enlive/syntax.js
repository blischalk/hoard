// Compiled by ClojureScript 0.0-2814 {}
goog.provide('enfocus.enlive.syntax');
goog.require('cljs.core');
enfocus.enlive.syntax.sel_to_str = (function sel_to_str(input){
var item = cljs.core.first.call(null,input);
var rest = cljs.core.rest.call(null,input);
var end = ((cljs.core.empty_QMARK_.call(null,rest))?cljs.core.list(cljs.core.List.EMPTY):sel_to_str.call(null,rest));
if((item instanceof cljs.core.Keyword)){
return cljs.core.map.call(null,((function (item,rest,end){
return (function (p1__12473_SHARP_){
return cljs.core.conj.call(null,p1__12473_SHARP_,cljs.core.name.call(null,item));
});})(item,rest,end))
,end);
} else {
if(typeof item === 'string'){
return cljs.core.map.call(null,((function (item,rest,end){
return (function (p1__12474_SHARP_){
return cljs.core.conj.call(null,p1__12474_SHARP_,item);
});})(item,rest,end))
,end);
} else {
if(cljs.core.set_QMARK_.call(null,item)){
return cljs.core.reduce.call(null,((function (item,rest,end){
return (function (r1,it){
return cljs.core.concat.call(null,r1,cljs.core.map.call(null,((function (item,rest,end){
return (function (p1__12475_SHARP_){
return cljs.core.conj.call(null,p1__12475_SHARP_,it);
});})(item,rest,end))
,end));
});})(item,rest,end))
,cljs.core.PersistentVector.EMPTY,cljs.core.flatten.call(null,sel_to_str.call(null,item)));
} else {
if(cljs.core.coll_QMARK_.call(null,item)){
var x1 = sel_to_str.call(null,item);
var sub = cljs.core.map.call(null,((function (x1,item,rest,end){
return (function (p1__12476_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,p1__12476_SHARP_);
});})(x1,item,rest,end))
,sel_to_str.call(null,item));
var iter__4553__auto__ = ((function (x1,sub,item,rest,end){
return (function iter__12483(s__12484){
return (new cljs.core.LazySeq(null,((function (x1,sub,item,rest,end){
return (function (){
var s__12484__$1 = s__12484;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12484__$1);
if(temp__4126__auto__){
var xs__4624__auto__ = temp__4126__auto__;
var s = cljs.core.first.call(null,xs__4624__auto__);
var iterys__4549__auto__ = ((function (s__12484__$1,s,xs__4624__auto__,temp__4126__auto__,x1,sub,item,rest,end){
return (function iter__12485(s__12486){
return (new cljs.core.LazySeq(null,((function (s__12484__$1,s,xs__4624__auto__,temp__4126__auto__,x1,sub,item,rest,end){
return (function (){
var s__12486__$1 = s__12486;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__12486__$1);
if(temp__4126__auto____$1){
var s__12486__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12486__$2)){
var c__4551__auto__ = cljs.core.chunk_first.call(null,s__12486__$2);
var size__4552__auto__ = cljs.core.count.call(null,c__4551__auto__);
var b__12488 = cljs.core.chunk_buffer.call(null,size__4552__auto__);
if((function (){var i__12487 = (0);
while(true){
if((i__12487 < size__4552__auto__)){
var e = cljs.core._nth.call(null,c__4551__auto__,i__12487);
cljs.core.chunk_append.call(null,b__12488,(function (){
cljs.core.println.call(null,s,e);

return cljs.core.conj.call(null,e,s);
})()
);

var G__12489 = (i__12487 + (1));
i__12487 = G__12489;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12488),iter__12485.call(null,cljs.core.chunk_rest.call(null,s__12486__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12488),null);
}
} else {
var e = cljs.core.first.call(null,s__12486__$2);
return cljs.core.cons.call(null,(function (){
cljs.core.println.call(null,s,e);

return cljs.core.conj.call(null,e,s);
})()
,iter__12485.call(null,cljs.core.rest.call(null,s__12486__$2)));
}
} else {
return null;
}
break;
}
});})(s__12484__$1,s,xs__4624__auto__,temp__4126__auto__,x1,sub,item,rest,end))
,null,null));
});})(s__12484__$1,s,xs__4624__auto__,temp__4126__auto__,x1,sub,item,rest,end))
;
var fs__4550__auto__ = cljs.core.seq.call(null,iterys__4549__auto__.call(null,end));
if(fs__4550__auto__){
return cljs.core.concat.call(null,fs__4550__auto__,iter__12483.call(null,cljs.core.rest.call(null,s__12484__$1)));
} else {
var G__12490 = cljs.core.rest.call(null,s__12484__$1);
s__12484__$1 = G__12490;
continue;
}
} else {
return null;
}
break;
}
});})(x1,sub,item,rest,end))
,null,null));
});})(x1,sub,item,rest,end))
;
return iter__4553__auto__.call(null,sub);
} else {
return input;

}
}
}
}
});
enfocus.enlive.syntax.convert = (function convert(sel){
if(typeof sel === 'string'){
return sel;
} else {
var temp__4124__auto__ = enfocus.enlive.syntax.sel_to_str.call(null,sel);
if(cljs.core.truth_(temp__4124__auto__)){
var ors = temp__4124__auto__;
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core.apply.call(null,cljs.core.concat,cljs.core.interpose.call(null,",",ors))));
} else {
return null;
}
}
});
enfocus.enlive.syntax.attr_pairs = (function attr_pairs(op,elms){
var ts = (function (p__12493){
var vec__12494 = p__12493;
var x = cljs.core.nth.call(null,vec__12494,(0),null);
var y = cljs.core.nth.call(null,vec__12494,(1),null);
return [cljs.core.str("["),cljs.core.str(cljs.core.name.call(null,x)),cljs.core.str(op),cljs.core.str("='"),cljs.core.str(y),cljs.core.str("']")].join('');
});
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,ts,cljs.core.partition.call(null,(2),elms)));
});
/**
* @param {...*} var_args
*/
enfocus.enlive.syntax.attr_QMARK_ = (function() { 
var attr_QMARK___delegate = function (elms){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__12495_SHARP_){
return [cljs.core.str("["),cljs.core.str(cljs.core.name.call(null,p1__12495_SHARP_)),cljs.core.str("]")].join('');
}),elms));
};
var attr_QMARK_ = function (var_args){
var elms = null;
if (arguments.length > 0) {
var G__12496__i = 0, G__12496__a = new Array(arguments.length -  0);
while (G__12496__i < G__12496__a.length) {G__12496__a[G__12496__i] = arguments[G__12496__i + 0]; ++G__12496__i;}
  elms = new cljs.core.IndexedSeq(G__12496__a,0);
} 
return attr_QMARK___delegate.call(this,elms);};
attr_QMARK_.cljs$lang$maxFixedArity = 0;
attr_QMARK_.cljs$lang$applyTo = (function (arglist__12497){
var elms = cljs.core.seq(arglist__12497);
return attr_QMARK___delegate(elms);
});
attr_QMARK_.cljs$core$IFn$_invoke$arity$variadic = attr_QMARK___delegate;
return attr_QMARK_;
})()
;
/**
* @param {...*} var_args
*/
enfocus.enlive.syntax.attr_EQ_ = (function() { 
var attr_EQ___delegate = function (elms){
return enfocus.enlive.syntax.attr_pairs.call(null,"",elms);
};
var attr_EQ_ = function (var_args){
var elms = null;
if (arguments.length > 0) {
var G__12498__i = 0, G__12498__a = new Array(arguments.length -  0);
while (G__12498__i < G__12498__a.length) {G__12498__a[G__12498__i] = arguments[G__12498__i + 0]; ++G__12498__i;}
  elms = new cljs.core.IndexedSeq(G__12498__a,0);
} 
return attr_EQ___delegate.call(this,elms);};
attr_EQ_.cljs$lang$maxFixedArity = 0;
attr_EQ_.cljs$lang$applyTo = (function (arglist__12499){
var elms = cljs.core.seq(arglist__12499);
return attr_EQ___delegate(elms);
});
attr_EQ_.cljs$core$IFn$_invoke$arity$variadic = attr_EQ___delegate;
return attr_EQ_;
})()
;
/**
* @param {...*} var_args
*/
enfocus.enlive.syntax.attr_has = (function() { 
var attr_has__delegate = function (x,vals){
var ts = (function (y){
return [cljs.core.str("["),cljs.core.str(cljs.core.name.call(null,x)),cljs.core.str("~='"),cljs.core.str(y),cljs.core.str("']")].join('');
});
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,ts,vals));
};
var attr_has = function (x,var_args){
var vals = null;
if (arguments.length > 1) {
var G__12500__i = 0, G__12500__a = new Array(arguments.length -  1);
while (G__12500__i < G__12500__a.length) {G__12500__a[G__12500__i] = arguments[G__12500__i + 1]; ++G__12500__i;}
  vals = new cljs.core.IndexedSeq(G__12500__a,0);
} 
return attr_has__delegate.call(this,x,vals);};
attr_has.cljs$lang$maxFixedArity = 1;
attr_has.cljs$lang$applyTo = (function (arglist__12501){
var x = cljs.core.first(arglist__12501);
var vals = cljs.core.rest(arglist__12501);
return attr_has__delegate(x,vals);
});
attr_has.cljs$core$IFn$_invoke$arity$variadic = attr_has__delegate;
return attr_has;
})()
;
/**
* @param {...*} var_args
*/
enfocus.enlive.syntax.attr_starts = (function() { 
var attr_starts__delegate = function (elms){
return enfocus.enlive.syntax.attr_pairs.call(null,"^",elms);
};
var attr_starts = function (var_args){
var elms = null;
if (arguments.length > 0) {
var G__12502__i = 0, G__12502__a = new Array(arguments.length -  0);
while (G__12502__i < G__12502__a.length) {G__12502__a[G__12502__i] = arguments[G__12502__i + 0]; ++G__12502__i;}
  elms = new cljs.core.IndexedSeq(G__12502__a,0);
} 
return attr_starts__delegate.call(this,elms);};
attr_starts.cljs$lang$maxFixedArity = 0;
attr_starts.cljs$lang$applyTo = (function (arglist__12503){
var elms = cljs.core.seq(arglist__12503);
return attr_starts__delegate(elms);
});
attr_starts.cljs$core$IFn$_invoke$arity$variadic = attr_starts__delegate;
return attr_starts;
})()
;
/**
* @param {...*} var_args
*/
enfocus.enlive.syntax.attr_ends = (function() { 
var attr_ends__delegate = function (elms){
return enfocus.enlive.syntax.attr_pairs.call(null,"$",elms);
};
var attr_ends = function (var_args){
var elms = null;
if (arguments.length > 0) {
var G__12504__i = 0, G__12504__a = new Array(arguments.length -  0);
while (G__12504__i < G__12504__a.length) {G__12504__a[G__12504__i] = arguments[G__12504__i + 0]; ++G__12504__i;}
  elms = new cljs.core.IndexedSeq(G__12504__a,0);
} 
return attr_ends__delegate.call(this,elms);};
attr_ends.cljs$lang$maxFixedArity = 0;
attr_ends.cljs$lang$applyTo = (function (arglist__12505){
var elms = cljs.core.seq(arglist__12505);
return attr_ends__delegate(elms);
});
attr_ends.cljs$core$IFn$_invoke$arity$variadic = attr_ends__delegate;
return attr_ends;
})()
;
/**
* @param {...*} var_args
*/
enfocus.enlive.syntax.attr_contains = (function() { 
var attr_contains__delegate = function (elms){
return enfocus.enlive.syntax.attr_pairs.call(null,"*",elms);
};
var attr_contains = function (var_args){
var elms = null;
if (arguments.length > 0) {
var G__12506__i = 0, G__12506__a = new Array(arguments.length -  0);
while (G__12506__i < G__12506__a.length) {G__12506__a[G__12506__i] = arguments[G__12506__i + 0]; ++G__12506__i;}
  elms = new cljs.core.IndexedSeq(G__12506__a,0);
} 
return attr_contains__delegate.call(this,elms);};
attr_contains.cljs$lang$maxFixedArity = 0;
attr_contains.cljs$lang$applyTo = (function (arglist__12507){
var elms = cljs.core.seq(arglist__12507);
return attr_contains__delegate(elms);
});
attr_contains.cljs$core$IFn$_invoke$arity$variadic = attr_contains__delegate;
return attr_contains;
})()
;
/**
* @param {...*} var_args
*/
enfocus.enlive.syntax.attr_BAR__EQ_ = (function() { 
var attr_BAR__EQ___delegate = function (elms){
return enfocus.enlive.syntax.attr_pairs.call(null,"|",elms);
};
var attr_BAR__EQ_ = function (var_args){
var elms = null;
if (arguments.length > 0) {
var G__12508__i = 0, G__12508__a = new Array(arguments.length -  0);
while (G__12508__i < G__12508__a.length) {G__12508__a[G__12508__i] = arguments[G__12508__i + 0]; ++G__12508__i;}
  elms = new cljs.core.IndexedSeq(G__12508__a,0);
} 
return attr_BAR__EQ___delegate.call(this,elms);};
attr_BAR__EQ_.cljs$lang$maxFixedArity = 0;
attr_BAR__EQ_.cljs$lang$applyTo = (function (arglist__12509){
var elms = cljs.core.seq(arglist__12509);
return attr_BAR__EQ___delegate(elms);
});
attr_BAR__EQ_.cljs$core$IFn$_invoke$arity$variadic = attr_BAR__EQ___delegate;
return attr_BAR__EQ_;
})()
;
enfocus.enlive.syntax.nth_op = (function() {
var nth_op = null;
var nth_op__2 = (function (op,x){
return [cljs.core.str(":nth-"),cljs.core.str(op),cljs.core.str("("),cljs.core.str(x),cljs.core.str(")")].join('');
});
var nth_op__3 = (function (op,x,y){
return [cljs.core.str(":nth-"),cljs.core.str(op),cljs.core.str("("),cljs.core.str(x),cljs.core.str("n"),cljs.core.str((((y > (0)))?"+":null)),cljs.core.str(y)].join('');
});
nth_op = function(op,x,y){
switch(arguments.length){
case 2:
return nth_op__2.call(this,op,x);
case 3:
return nth_op__3.call(this,op,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nth_op.cljs$core$IFn$_invoke$arity$2 = nth_op__2;
nth_op.cljs$core$IFn$_invoke$arity$3 = nth_op__3;
return nth_op;
})()
;
enfocus.enlive.syntax.nth_child = (function() {
var nth_child = null;
var nth_child__1 = (function (x){
return enfocus.enlive.syntax.nth_op.call(null,"child",x);
});
var nth_child__2 = (function (x,y){
return enfocus.enlive.syntax.nth_op.call(null,"child",x,y);
});
nth_child = function(x,y){
switch(arguments.length){
case 1:
return nth_child__1.call(this,x);
case 2:
return nth_child__2.call(this,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nth_child.cljs$core$IFn$_invoke$arity$1 = nth_child__1;
nth_child.cljs$core$IFn$_invoke$arity$2 = nth_child__2;
return nth_child;
})()
;
enfocus.enlive.syntax.nth_last_child = (function() {
var nth_last_child = null;
var nth_last_child__1 = (function (x){
return enfocus.enlive.syntax.nth_op.call(null,"last-child",x);
});
var nth_last_child__2 = (function (x,y){
return enfocus.enlive.syntax.nth_op.call(null,"last-child",x,y);
});
nth_last_child = function(x,y){
switch(arguments.length){
case 1:
return nth_last_child__1.call(this,x);
case 2:
return nth_last_child__2.call(this,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nth_last_child.cljs$core$IFn$_invoke$arity$1 = nth_last_child__1;
nth_last_child.cljs$core$IFn$_invoke$arity$2 = nth_last_child__2;
return nth_last_child;
})()
;
enfocus.enlive.syntax.nth_of_type = (function() {
var nth_of_type = null;
var nth_of_type__1 = (function (x){
return enfocus.enlive.syntax.nth_op.call(null,"of-type",x);
});
var nth_of_type__2 = (function (x,y){
return enfocus.enlive.syntax.nth_op.call(null,"of-type",x,y);
});
nth_of_type = function(x,y){
switch(arguments.length){
case 1:
return nth_of_type__1.call(this,x);
case 2:
return nth_of_type__2.call(this,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nth_of_type.cljs$core$IFn$_invoke$arity$1 = nth_of_type__1;
nth_of_type.cljs$core$IFn$_invoke$arity$2 = nth_of_type__2;
return nth_of_type;
})()
;
enfocus.enlive.syntax.nth_last_of_type = (function() {
var nth_last_of_type = null;
var nth_last_of_type__1 = (function (x){
return enfocus.enlive.syntax.nth_op.call(null,"last-of-type",x);
});
var nth_last_of_type__2 = (function (x,y){
return enfocus.enlive.syntax.nth_op.call(null,"last-of-type",x,y);
});
nth_last_of_type = function(x,y){
switch(arguments.length){
case 1:
return nth_last_of_type__1.call(this,x);
case 2:
return nth_last_of_type__2.call(this,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nth_last_of_type.cljs$core$IFn$_invoke$arity$1 = nth_last_of_type__1;
nth_last_of_type.cljs$core$IFn$_invoke$arity$2 = nth_last_of_type__2;
return nth_last_of_type;
})()
;
/**
* @param {...*} var_args
*/
enfocus.enlive.syntax.but = (function() { 
var but__delegate = function (sel){
return [cljs.core.str("not("),cljs.core.str(enfocus.enlive.syntax.convert.call(null,sel)),cljs.core.str(")")].join('');
};
var but = function (var_args){
var sel = null;
if (arguments.length > 0) {
var G__12510__i = 0, G__12510__a = new Array(arguments.length -  0);
while (G__12510__i < G__12510__a.length) {G__12510__a[G__12510__i] = arguments[G__12510__i + 0]; ++G__12510__i;}
  sel = new cljs.core.IndexedSeq(G__12510__a,0);
} 
return but__delegate.call(this,sel);};
but.cljs$lang$maxFixedArity = 0;
but.cljs$lang$applyTo = (function (arglist__12511){
var sel = cljs.core.seq(arglist__12511);
return but__delegate(sel);
});
but.cljs$core$IFn$_invoke$arity$variadic = but__delegate;
return but;
})()
;
