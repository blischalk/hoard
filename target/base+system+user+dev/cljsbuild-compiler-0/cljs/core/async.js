// Compiled by ClojureScript 0.0-2814 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t32027 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32027 = (function (f,fn_handler,meta32028){
this.f = f;
this.fn_handler = fn_handler;
this.meta32028 = meta32028;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32027.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t32027.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t32027.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t32027.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32029){
var self__ = this;
var _32029__$1 = this;
return self__.meta32028;
});

cljs.core.async.t32027.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32029,meta32028__$1){
var self__ = this;
var _32029__$1 = this;
return (new cljs.core.async.t32027(self__.f,self__.fn_handler,meta32028__$1));
});

cljs.core.async.t32027.cljs$lang$type = true;

cljs.core.async.t32027.cljs$lang$ctorStr = "cljs.core.async/t32027";

cljs.core.async.t32027.cljs$lang$ctorPrWriter = (function (this__4384__auto__,writer__4385__auto__,opt__4386__auto__){
return cljs.core._write.call(null,writer__4385__auto__,"cljs.core.async/t32027");
});

cljs.core.async.__GT_t32027 = (function __GT_t32027(f__$1,fn_handler__$1,meta32028){
return (new cljs.core.async.t32027(f__$1,fn_handler__$1,meta32028));
});

}

return (new cljs.core.async.t32027(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/blischalk/node-webkit-apps/hoard/target/base+system+user+dev/cljsbuild-compiler-0/cljs/core/async.cljs"], null)));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__32031 = buff;
if(G__32031){
var bit__4478__auto__ = null;
if(cljs.core.truth_((function (){var or__3797__auto__ = bit__4478__auto__;
if(cljs.core.truth_(or__3797__auto__)){
return or__3797__auto__;
} else {
return G__32031.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__32031.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__32031);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__32031);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){
return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){
return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_32032 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_32032);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_32032,ret){
return (function (){
return fn1.call(null,val_32032);
});})(val_32032,ret))
);
}
} else {
}

return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__4684__auto___32033 = n;
var x_32034 = (0);
while(true){
if((x_32034 < n__4684__auto___32033)){
(a[x_32034] = (0));

var G__32035 = (x_32034 + (1));
x_32034 = G__32035;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__32036 = (i + (1));
i = G__32036;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t32040 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32040 = (function (flag,alt_flag,meta32041){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta32041 = meta32041;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32040.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t32040.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t32040.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t32040.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_32042){
var self__ = this;
var _32042__$1 = this;
return self__.meta32041;
});})(flag))
;

cljs.core.async.t32040.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_32042,meta32041__$1){
var self__ = this;
var _32042__$1 = this;
return (new cljs.core.async.t32040(self__.flag,self__.alt_flag,meta32041__$1));
});})(flag))
;

cljs.core.async.t32040.cljs$lang$type = true;

cljs.core.async.t32040.cljs$lang$ctorStr = "cljs.core.async/t32040";

cljs.core.async.t32040.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4384__auto__,writer__4385__auto__,opt__4386__auto__){
return cljs.core._write.call(null,writer__4385__auto__,"cljs.core.async/t32040");
});})(flag))
;

cljs.core.async.__GT_t32040 = ((function (flag){
return (function __GT_t32040(flag__$1,alt_flag__$1,meta32041){
return (new cljs.core.async.t32040(flag__$1,alt_flag__$1,meta32041));
});})(flag))
;

}

return (new cljs.core.async.t32040(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/blischalk/node-webkit-apps/hoard/target/base+system+user+dev/cljsbuild-compiler-0/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t32046 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32046 = (function (cb,flag,alt_handler,meta32047){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta32047 = meta32047;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32046.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t32046.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t32046.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t32046.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32048){
var self__ = this;
var _32048__$1 = this;
return self__.meta32047;
});

cljs.core.async.t32046.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32048,meta32047__$1){
var self__ = this;
var _32048__$1 = this;
return (new cljs.core.async.t32046(self__.cb,self__.flag,self__.alt_handler,meta32047__$1));
});

cljs.core.async.t32046.cljs$lang$type = true;

cljs.core.async.t32046.cljs$lang$ctorStr = "cljs.core.async/t32046";

cljs.core.async.t32046.cljs$lang$ctorPrWriter = (function (this__4384__auto__,writer__4385__auto__,opt__4386__auto__){
return cljs.core._write.call(null,writer__4385__auto__,"cljs.core.async/t32046");
});

cljs.core.async.__GT_t32046 = (function __GT_t32046(cb__$1,flag__$1,alt_handler__$1,meta32047){
return (new cljs.core.async.t32046(cb__$1,flag__$1,alt_handler__$1,meta32047));
});

}

return (new cljs.core.async.t32046(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/blischalk/node-webkit-apps/hoard/target/base+system+user+dev/cljsbuild-compiler-0/cljs/core/async.cljs"], null)));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32049_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32049_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32050_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32050_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3797__auto__ = wport;
if(cljs.core.truth_(or__3797__auto__)){
return or__3797__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32051 = (i + (1));
i = G__32051;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3797__auto__ = ret;
if(cljs.core.truth_(or__3797__auto__)){
return or__3797__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__3785__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3785__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3785__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__32052){
var map__32054 = p__32052;
var map__32054__$1 = ((cljs.core.seq_QMARK_.call(null,map__32054))?cljs.core.apply.call(null,cljs.core.hash_map,map__32054):map__32054);
var opts = map__32054__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__32052 = null;
if (arguments.length > 1) {
var G__32055__i = 0, G__32055__a = new Array(arguments.length -  1);
while (G__32055__i < G__32055__a.length) {G__32055__a[G__32055__i] = arguments[G__32055__i + 1]; ++G__32055__i;}
  p__32052 = new cljs.core.IndexedSeq(G__32055__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__32052);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__32056){
var ports = cljs.core.first(arglist__32056);
var p__32052 = cljs.core.rest(arglist__32056);
return alts_BANG___delegate(ports,p__32052);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){
return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__6581__auto___32151 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6581__auto___32151){
return (function (){
var f__6582__auto__ = (function (){var switch__6525__auto__ = ((function (c__6581__auto___32151){
return (function (state_32127){
var state_val_32128 = (state_32127[(1)]);
if((state_val_32128 === (7))){
var inst_32123 = (state_32127[(2)]);
var state_32127__$1 = state_32127;
var statearr_32129_32152 = state_32127__$1;
(statearr_32129_32152[(2)] = inst_32123);

(statearr_32129_32152[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32128 === (1))){
var state_32127__$1 = state_32127;
var statearr_32130_32153 = state_32127__$1;
(statearr_32130_32153[(2)] = null);

(statearr_32130_32153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32128 === (4))){
var inst_32106 = (state_32127[(7)]);
var inst_32106__$1 = (state_32127[(2)]);
var inst_32107 = (inst_32106__$1 == null);
var state_32127__$1 = (function (){var statearr_32131 = state_32127;
(statearr_32131[(7)] = inst_32106__$1);

return statearr_32131;
})();
if(cljs.core.truth_(inst_32107)){
var statearr_32132_32154 = state_32127__$1;
(statearr_32132_32154[(1)] = (5));

} else {
var statearr_32133_32155 = state_32127__$1;
(statearr_32133_32155[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32128 === (13))){
var state_32127__$1 = state_32127;
var statearr_32134_32156 = state_32127__$1;
(statearr_32134_32156[(2)] = null);

(statearr_32134_32156[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32128 === (6))){
var inst_32106 = (state_32127[(7)]);
var state_32127__$1 = state_32127;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32127__$1,(11),to,inst_32106);
} else {
if((state_val_32128 === (3))){
var inst_32125 = (state_32127[(2)]);
var state_32127__$1 = state_32127;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32127__$1,inst_32125);
} else {
if((state_val_32128 === (12))){
var state_32127__$1 = state_32127;
var statearr_32135_32157 = state_32127__$1;
(statearr_32135_32157[(2)] = null);

(statearr_32135_32157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32128 === (2))){
var state_32127__$1 = state_32127;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32127__$1,(4),from);
} else {
if((state_val_32128 === (11))){
var inst_32116 = (state_32127[(2)]);
var state_32127__$1 = state_32127;
if(cljs.core.truth_(inst_32116)){
var statearr_32136_32158 = state_32127__$1;
(statearr_32136_32158[(1)] = (12));

} else {
var statearr_32137_32159 = state_32127__$1;
(statearr_32137_32159[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32128 === (9))){
var state_32127__$1 = state_32127;
var statearr_32138_32160 = state_32127__$1;
(statearr_32138_32160[(2)] = null);

(statearr_32138_32160[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32128 === (5))){
var state_32127__$1 = state_32127;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32139_32161 = state_32127__$1;
(statearr_32139_32161[(1)] = (8));

} else {
var statearr_32140_32162 = state_32127__$1;
(statearr_32140_32162[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32128 === (14))){
var inst_32121 = (state_32127[(2)]);
var state_32127__$1 = state_32127;
var statearr_32141_32163 = state_32127__$1;
(statearr_32141_32163[(2)] = inst_32121);

(statearr_32141_32163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32128 === (10))){
var inst_32113 = (state_32127[(2)]);
var state_32127__$1 = state_32127;
var statearr_32142_32164 = state_32127__$1;
(statearr_32142_32164[(2)] = inst_32113);

(statearr_32142_32164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32128 === (8))){
var inst_32110 = cljs.core.async.close_BANG_.call(null,to);
var state_32127__$1 = state_32127;
var statearr_32143_32165 = state_32127__$1;
(statearr_32143_32165[(2)] = inst_32110);

(statearr_32143_32165[(1)] = (10));


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
}
}
}
}
}
}
}
});})(c__6581__auto___32151))
;
return ((function (switch__6525__auto__,c__6581__auto___32151){
return (function() {
var state_machine__6526__auto__ = null;
var state_machine__6526__auto____0 = (function (){
var statearr_32147 = [null,null,null,null,null,null,null,null];
(statearr_32147[(0)] = state_machine__6526__auto__);

(statearr_32147[(1)] = (1));

return statearr_32147;
});
var state_machine__6526__auto____1 = (function (state_32127){
while(true){
var ret_value__6527__auto__ = (function (){try{while(true){
var result__6528__auto__ = switch__6525__auto__.call(null,state_32127);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6528__auto__;
}
break;
}
}catch (e32148){if((e32148 instanceof Object)){
var ex__6529__auto__ = e32148;
var statearr_32149_32166 = state_32127;
(statearr_32149_32166[(5)] = ex__6529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32148;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32167 = state_32127;
state_32127 = G__32167;
continue;
} else {
return ret_value__6527__auto__;
}
break;
}
});
state_machine__6526__auto__ = function(state_32127){
switch(arguments.length){
case 0:
return state_machine__6526__auto____0.call(this);
case 1:
return state_machine__6526__auto____1.call(this,state_32127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6526__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6526__auto____0;
state_machine__6526__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6526__auto____1;
return state_machine__6526__auto__;
})()
;})(switch__6525__auto__,c__6581__auto___32151))
})();
var state__6583__auto__ = (function (){var statearr_32150 = f__6582__auto__.call(null);
(statearr_32150[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6581__auto___32151);

return statearr_32150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6583__auto__);
});})(c__6581__auto___32151))
);


return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__32351){
var vec__32352 = p__32351;
var v = cljs.core.nth.call(null,vec__32352,(0),null);
var p = cljs.core.nth.call(null,vec__32352,(1),null);
var job = vec__32352;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6581__auto___32534 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6581__auto___32534,res,vec__32352,v,p,job,jobs,results){
return (function (){
var f__6582__auto__ = (function (){var switch__6525__auto__ = ((function (c__6581__auto___32534,res,vec__32352,v,p,job,jobs,results){
return (function (state_32357){
var state_val_32358 = (state_32357[(1)]);
if((state_val_32358 === (2))){
var inst_32354 = (state_32357[(2)]);
var inst_32355 = cljs.core.async.close_BANG_.call(null,res);
var state_32357__$1 = (function (){var statearr_32359 = state_32357;
(statearr_32359[(7)] = inst_32354);

return statearr_32359;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32357__$1,inst_32355);
} else {
if((state_val_32358 === (1))){
var state_32357__$1 = state_32357;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32357__$1,(2),res,v);
} else {
return null;
}
}
});})(c__6581__auto___32534,res,vec__32352,v,p,job,jobs,results))
;
return ((function (switch__6525__auto__,c__6581__auto___32534,res,vec__32352,v,p,job,jobs,results){
return (function() {
var state_machine__6526__auto__ = null;
var state_machine__6526__auto____0 = (function (){
var statearr_32363 = [null,null,null,null,null,null,null,null];
(statearr_32363[(0)] = state_machine__6526__auto__);

(statearr_32363[(1)] = (1));

return statearr_32363;
});
var state_machine__6526__auto____1 = (function (state_32357){
while(true){
var ret_value__6527__auto__ = (function (){try{while(true){
var result__6528__auto__ = switch__6525__auto__.call(null,state_32357);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6528__auto__;
}
break;
}
}catch (e32364){if((e32364 instanceof Object)){
var ex__6529__auto__ = e32364;
var statearr_32365_32535 = state_32357;
(statearr_32365_32535[(5)] = ex__6529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32357);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32536 = state_32357;
state_32357 = G__32536;
continue;
} else {
return ret_value__6527__auto__;
}
break;
}
});
state_machine__6526__auto__ = function(state_32357){
switch(arguments.length){
case 0:
return state_machine__6526__auto____0.call(this);
case 1:
return state_machine__6526__auto____1.call(this,state_32357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6526__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6526__auto____0;
state_machine__6526__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6526__auto____1;
return state_machine__6526__auto__;
})()
;})(switch__6525__auto__,c__6581__auto___32534,res,vec__32352,v,p,job,jobs,results))
})();
var state__6583__auto__ = (function (){var statearr_32366 = f__6582__auto__.call(null);
(statearr_32366[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6581__auto___32534);

return statearr_32366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6583__auto__);
});})(c__6581__auto___32534,res,vec__32352,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__32367){
var vec__32368 = p__32367;
var v = cljs.core.nth.call(null,vec__32368,(0),null);
var p = cljs.core.nth.call(null,vec__32368,(1),null);
var job = vec__32368;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4684__auto___32537 = n;
var __32538 = (0);
while(true){
if((__32538 < n__4684__auto___32537)){
var G__32369_32539 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__32369_32539) {
case "async":
var c__6581__auto___32541 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32538,c__6581__auto___32541,G__32369_32539,n__4684__auto___32537,jobs,results,process,async){
return (function (){
var f__6582__auto__ = (function (){var switch__6525__auto__ = ((function (__32538,c__6581__auto___32541,G__32369_32539,n__4684__auto___32537,jobs,results,process,async){
return (function (state_32382){
var state_val_32383 = (state_32382[(1)]);
if((state_val_32383 === (7))){
var inst_32378 = (state_32382[(2)]);
var state_32382__$1 = state_32382;
var statearr_32384_32542 = state_32382__$1;
(statearr_32384_32542[(2)] = inst_32378);

(statearr_32384_32542[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (6))){
var state_32382__$1 = state_32382;
var statearr_32385_32543 = state_32382__$1;
(statearr_32385_32543[(2)] = null);

(statearr_32385_32543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (5))){
var state_32382__$1 = state_32382;
var statearr_32386_32544 = state_32382__$1;
(statearr_32386_32544[(2)] = null);

(statearr_32386_32544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (4))){
var inst_32372 = (state_32382[(2)]);
var inst_32373 = async.call(null,inst_32372);
var state_32382__$1 = state_32382;
if(cljs.core.truth_(inst_32373)){
var statearr_32387_32545 = state_32382__$1;
(statearr_32387_32545[(1)] = (5));

} else {
var statearr_32388_32546 = state_32382__$1;
(statearr_32388_32546[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (3))){
var inst_32380 = (state_32382[(2)]);
var state_32382__$1 = state_32382;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32382__$1,inst_32380);
} else {
if((state_val_32383 === (2))){
var state_32382__$1 = state_32382;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32382__$1,(4),jobs);
} else {
if((state_val_32383 === (1))){
var state_32382__$1 = state_32382;
var statearr_32389_32547 = state_32382__$1;
(statearr_32389_32547[(2)] = null);

(statearr_32389_32547[(1)] = (2));


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
});})(__32538,c__6581__auto___32541,G__32369_32539,n__4684__auto___32537,jobs,results,process,async))
;
return ((function (__32538,switch__6525__auto__,c__6581__auto___32541,G__32369_32539,n__4684__auto___32537,jobs,results,process,async){
return (function() {
var state_machine__6526__auto__ = null;
var state_machine__6526__auto____0 = (function (){
var statearr_32393 = [null,null,null,null,null,null,null];
(statearr_32393[(0)] = state_machine__6526__auto__);

(statearr_32393[(1)] = (1));

return statearr_32393;
});
var state_machine__6526__auto____1 = (function (state_32382){
while(true){
var ret_value__6527__auto__ = (function (){try{while(true){
var result__6528__auto__ = switch__6525__auto__.call(null,state_32382);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6528__auto__;
}
break;
}
}catch (e32394){if((e32394 instanceof Object)){
var ex__6529__auto__ = e32394;
var statearr_32395_32548 = state_32382;
(statearr_32395_32548[(5)] = ex__6529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32382);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32394;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32549 = state_32382;
state_32382 = G__32549;
continue;
} else {
return ret_value__6527__auto__;
}
break;
}
});
state_machine__6526__auto__ = function(state_32382){
switch(arguments.length){
case 0:
return state_machine__6526__auto____0.call(this);
case 1:
return state_machine__6526__auto____1.call(this,state_32382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6526__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6526__auto____0;
state_machine__6526__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6526__auto____1;
return state_machine__6526__auto__;
})()
;})(__32538,switch__6525__auto__,c__6581__auto___32541,G__32369_32539,n__4684__auto___32537,jobs,results,process,async))
})();
var state__6583__auto__ = (function (){var statearr_32396 = f__6582__auto__.call(null);
(statearr_32396[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6581__auto___32541);

return statearr_32396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6583__auto__);
});})(__32538,c__6581__auto___32541,G__32369_32539,n__4684__auto___32537,jobs,results,process,async))
);


break;
case "compute":
var c__6581__auto___32550 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32538,c__6581__auto___32550,G__32369_32539,n__4684__auto___32537,jobs,results,process,async){
return (function (){
var f__6582__auto__ = (function (){var switch__6525__auto__ = ((function (__32538,c__6581__auto___32550,G__32369_32539,n__4684__auto___32537,jobs,results,process,async){
return (function (state_32409){
var state_val_32410 = (state_32409[(1)]);
if((state_val_32410 === (7))){
var inst_32405 = (state_32409[(2)]);
var state_32409__$1 = state_32409;
var statearr_32411_32551 = state_32409__$1;
(statearr_32411_32551[(2)] = inst_32405);

(statearr_32411_32551[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32410 === (6))){
var state_32409__$1 = state_32409;
var statearr_32412_32552 = state_32409__$1;
(statearr_32412_32552[(2)] = null);

(statearr_32412_32552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32410 === (5))){
var state_32409__$1 = state_32409;
var statearr_32413_32553 = state_32409__$1;
(statearr_32413_32553[(2)] = null);

(statearr_32413_32553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32410 === (4))){
var inst_32399 = (state_32409[(2)]);
var inst_32400 = process.call(null,inst_32399);
var state_32409__$1 = state_32409;
if(cljs.core.truth_(inst_32400)){
var statearr_32414_32554 = state_32409__$1;
(statearr_32414_32554[(1)] = (5));

} else {
var statearr_32415_32555 = state_32409__$1;
(statearr_32415_32555[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32410 === (3))){
var inst_32407 = (state_32409[(2)]);
var state_32409__$1 = state_32409;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32409__$1,inst_32407);
} else {
if((state_val_32410 === (2))){
var state_32409__$1 = state_32409;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32409__$1,(4),jobs);
} else {
if((state_val_32410 === (1))){
var state_32409__$1 = state_32409;
var statearr_32416_32556 = state_32409__$1;
(statearr_32416_32556[(2)] = null);

(statearr_32416_32556[(1)] = (2));


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
});})(__32538,c__6581__auto___32550,G__32369_32539,n__4684__auto___32537,jobs,results,process,async))
;
return ((function (__32538,switch__6525__auto__,c__6581__auto___32550,G__32369_32539,n__4684__auto___32537,jobs,results,process,async){
return (function() {
var state_machine__6526__auto__ = null;
var state_machine__6526__auto____0 = (function (){
var statearr_32420 = [null,null,null,null,null,null,null];
(statearr_32420[(0)] = state_machine__6526__auto__);

(statearr_32420[(1)] = (1));

return statearr_32420;
});
var state_machine__6526__auto____1 = (function (state_32409){
while(true){
var ret_value__6527__auto__ = (function (){try{while(true){
var result__6528__auto__ = switch__6525__auto__.call(null,state_32409);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6528__auto__;
}
break;
}
}catch (e32421){if((e32421 instanceof Object)){
var ex__6529__auto__ = e32421;
var statearr_32422_32557 = state_32409;
(statearr_32422_32557[(5)] = ex__6529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32409);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32421;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32558 = state_32409;
state_32409 = G__32558;
continue;
} else {
return ret_value__6527__auto__;
}
break;
}
});
state_machine__6526__auto__ = function(state_32409){
switch(arguments.length){
case 0:
return state_machine__6526__auto____0.call(this);
case 1:
return state_machine__6526__auto____1.call(this,state_32409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6526__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6526__auto____0;
state_machine__6526__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6526__auto____1;
return state_machine__6526__auto__;
})()
;})(__32538,switch__6525__auto__,c__6581__auto___32550,G__32369_32539,n__4684__auto___32537,jobs,results,process,async))
})();
var state__6583__auto__ = (function (){var statearr_32423 = f__6582__auto__.call(null);
(statearr_32423[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6581__auto___32550);

return statearr_32423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6583__auto__);
});})(__32538,c__6581__auto___32550,G__32369_32539,n__4684__auto___32537,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__32559 = (__32538 + (1));
__32538 = G__32559;
continue;
} else {
}
break;
}

var c__6581__auto___32560 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6581__auto___32560,jobs,results,process,async){
return (function (){
var f__6582__auto__ = (function (){var switch__6525__auto__ = ((function (c__6581__auto___32560,jobs,results,process,async){
return (function (state_32445){
var state_val_32446 = (state_32445[(1)]);
if((state_val_32446 === (9))){
var inst_32438 = (state_32445[(2)]);
var state_32445__$1 = (function (){var statearr_32447 = state_32445;
(statearr_32447[(7)] = inst_32438);

return statearr_32447;
})();
var statearr_32448_32561 = state_32445__$1;
(statearr_32448_32561[(2)] = null);

(statearr_32448_32561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32446 === (8))){
var inst_32431 = (state_32445[(8)]);
var inst_32436 = (state_32445[(2)]);
var state_32445__$1 = (function (){var statearr_32449 = state_32445;
(statearr_32449[(9)] = inst_32436);

return statearr_32449;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32445__$1,(9),results,inst_32431);
} else {
if((state_val_32446 === (7))){
var inst_32441 = (state_32445[(2)]);
var state_32445__$1 = state_32445;
var statearr_32450_32562 = state_32445__$1;
(statearr_32450_32562[(2)] = inst_32441);

(statearr_32450_32562[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32446 === (6))){
var inst_32426 = (state_32445[(10)]);
var inst_32431 = (state_32445[(8)]);
var inst_32431__$1 = cljs.core.async.chan.call(null,(1));
var inst_32432 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32433 = [inst_32426,inst_32431__$1];
var inst_32434 = (new cljs.core.PersistentVector(null,2,(5),inst_32432,inst_32433,null));
var state_32445__$1 = (function (){var statearr_32451 = state_32445;
(statearr_32451[(8)] = inst_32431__$1);

return statearr_32451;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32445__$1,(8),jobs,inst_32434);
} else {
if((state_val_32446 === (5))){
var inst_32429 = cljs.core.async.close_BANG_.call(null,jobs);
var state_32445__$1 = state_32445;
var statearr_32452_32563 = state_32445__$1;
(statearr_32452_32563[(2)] = inst_32429);

(statearr_32452_32563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32446 === (4))){
var inst_32426 = (state_32445[(10)]);
var inst_32426__$1 = (state_32445[(2)]);
var inst_32427 = (inst_32426__$1 == null);
var state_32445__$1 = (function (){var statearr_32453 = state_32445;
(statearr_32453[(10)] = inst_32426__$1);

return statearr_32453;
})();
if(cljs.core.truth_(inst_32427)){
var statearr_32454_32564 = state_32445__$1;
(statearr_32454_32564[(1)] = (5));

} else {
var statearr_32455_32565 = state_32445__$1;
(statearr_32455_32565[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32446 === (3))){
var inst_32443 = (state_32445[(2)]);
var state_32445__$1 = state_32445;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32445__$1,inst_32443);
} else {
if((state_val_32446 === (2))){
var state_32445__$1 = state_32445;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32445__$1,(4),from);
} else {
if((state_val_32446 === (1))){
var state_32445__$1 = state_32445;
var statearr_32456_32566 = state_32445__$1;
(statearr_32456_32566[(2)] = null);

(statearr_32456_32566[(1)] = (2));


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
}
}
});})(c__6581__auto___32560,jobs,results,process,async))
;
return ((function (switch__6525__auto__,c__6581__auto___32560,jobs,results,process,async){
return (function() {
var state_machine__6526__auto__ = null;
var state_machine__6526__auto____0 = (function (){
var statearr_32460 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32460[(0)] = state_machine__6526__auto__);

(statearr_32460[(1)] = (1));

return statearr_32460;
});
var state_machine__6526__auto____1 = (function (state_32445){
while(true){
var ret_value__6527__auto__ = (function (){try{while(true){
var result__6528__auto__ = switch__6525__auto__.call(null,state_32445);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6528__auto__;
}
break;
}
}catch (e32461){if((e32461 instanceof Object)){
var ex__6529__auto__ = e32461;
var statearr_32462_32567 = state_32445;
(statearr_32462_32567[(5)] = ex__6529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32445);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32461;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32568 = state_32445;
state_32445 = G__32568;
continue;
} else {
return ret_value__6527__auto__;
}
break;
}
});
state_machine__6526__auto__ = function(state_32445){
switch(arguments.length){
case 0:
return state_machine__6526__auto____0.call(this);
case 1:
return state_machine__6526__auto____1.call(this,state_32445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6526__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6526__auto____0;
state_machine__6526__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6526__auto____1;
return state_machine__6526__auto__;
})()
;})(switch__6525__auto__,c__6581__auto___32560,jobs,results,process,async))
})();
var state__6583__auto__ = (function (){var statearr_32463 = f__6582__auto__.call(null);
(statearr_32463[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6581__auto___32560);

return statearr_32463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6583__auto__);
});})(c__6581__auto___32560,jobs,results,process,async))
);


var c__6581__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6581__auto__,jobs,results,process,async){
return (function (){
var f__6582__auto__ = (function (){var switch__6525__auto__ = ((function (c__6581__auto__,jobs,results,process,async){
return (function (state_32501){
var state_val_32502 = (state_32501[(1)]);
if((state_val_32502 === (7))){
var inst_32497 = (state_32501[(2)]);
var state_32501__$1 = state_32501;
var statearr_32503_32569 = state_32501__$1;
(statearr_32503_32569[(2)] = inst_32497);

(statearr_32503_32569[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32502 === (20))){
var state_32501__$1 = state_32501;
var statearr_32504_32570 = state_32501__$1;
(statearr_32504_32570[(2)] = null);

(statearr_32504_32570[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32502 === (1))){
var state_32501__$1 = state_32501;
var statearr_32505_32571 = state_32501__$1;
(statearr_32505_32571[(2)] = null);

(statearr_32505_32571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32502 === (4))){
var inst_32466 = (state_32501[(7)]);
var inst_32466__$1 = (state_32501[(2)]);
var inst_32467 = (inst_32466__$1 == null);
var state_32501__$1 = (function (){var statearr_32506 = state_32501;
(statearr_32506[(7)] = inst_32466__$1);

return statearr_32506;
})();
if(cljs.core.truth_(inst_32467)){
var statearr_32507_32572 = state_32501__$1;
(statearr_32507_32572[(1)] = (5));

} else {
var statearr_32508_32573 = state_32501__$1;
(statearr_32508_32573[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32502 === (15))){
var inst_32479 = (state_32501[(8)]);
var state_32501__$1 = state_32501;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32501__$1,(18),to,inst_32479);
} else {
if((state_val_32502 === (21))){
var inst_32492 = (state_32501[(2)]);
var state_32501__$1 = state_32501;
var statearr_32509_32574 = state_32501__$1;
(statearr_32509_32574[(2)] = inst_32492);

(statearr_32509_32574[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32502 === (13))){
var inst_32494 = (state_32501[(2)]);
var state_32501__$1 = (function (){var statearr_32510 = state_32501;
(statearr_32510[(9)] = inst_32494);

return statearr_32510;
})();
var statearr_32511_32575 = state_32501__$1;
(statearr_32511_32575[(2)] = null);

(statearr_32511_32575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32502 === (6))){
var inst_32466 = (state_32501[(7)]);
var state_32501__$1 = state_32501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32501__$1,(11),inst_32466);
} else {
if((state_val_32502 === (17))){
var inst_32487 = (state_32501[(2)]);
var state_32501__$1 = state_32501;
if(cljs.core.truth_(inst_32487)){
var statearr_32512_32576 = state_32501__$1;
(statearr_32512_32576[(1)] = (19));

} else {
var statearr_32513_32577 = state_32501__$1;
(statearr_32513_32577[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32502 === (3))){
var inst_32499 = (state_32501[(2)]);
var state_32501__$1 = state_32501;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32501__$1,inst_32499);
} else {
if((state_val_32502 === (12))){
var inst_32476 = (state_32501[(10)]);
var state_32501__$1 = state_32501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32501__$1,(14),inst_32476);
} else {
if((state_val_32502 === (2))){
var state_32501__$1 = state_32501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32501__$1,(4),results);
} else {
if((state_val_32502 === (19))){
var state_32501__$1 = state_32501;
var statearr_32514_32578 = state_32501__$1;
(statearr_32514_32578[(2)] = null);

(statearr_32514_32578[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32502 === (11))){
var inst_32476 = (state_32501[(2)]);
var state_32501__$1 = (function (){var statearr_32515 = state_32501;
(statearr_32515[(10)] = inst_32476);

return statearr_32515;
})();
var statearr_32516_32579 = state_32501__$1;
(statearr_32516_32579[(2)] = null);

(statearr_32516_32579[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32502 === (9))){
var state_32501__$1 = state_32501;
var statearr_32517_32580 = state_32501__$1;
(statearr_32517_32580[(2)] = null);

(statearr_32517_32580[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32502 === (5))){
var state_32501__$1 = state_32501;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32518_32581 = state_32501__$1;
(statearr_32518_32581[(1)] = (8));

} else {
var statearr_32519_32582 = state_32501__$1;
(statearr_32519_32582[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32502 === (14))){
var inst_32479 = (state_32501[(8)]);
var inst_32481 = (state_32501[(11)]);
var inst_32479__$1 = (state_32501[(2)]);
var inst_32480 = (inst_32479__$1 == null);
var inst_32481__$1 = cljs.core.not.call(null,inst_32480);
var state_32501__$1 = (function (){var statearr_32520 = state_32501;
(statearr_32520[(8)] = inst_32479__$1);

(statearr_32520[(11)] = inst_32481__$1);

return statearr_32520;
})();
if(inst_32481__$1){
var statearr_32521_32583 = state_32501__$1;
(statearr_32521_32583[(1)] = (15));

} else {
var statearr_32522_32584 = state_32501__$1;
(statearr_32522_32584[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32502 === (16))){
var inst_32481 = (state_32501[(11)]);
var state_32501__$1 = state_32501;
var statearr_32523_32585 = state_32501__$1;
(statearr_32523_32585[(2)] = inst_32481);

(statearr_32523_32585[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32502 === (10))){
var inst_32473 = (state_32501[(2)]);
var state_32501__$1 = state_32501;
var statearr_32524_32586 = state_32501__$1;
(statearr_32524_32586[(2)] = inst_32473);

(statearr_32524_32586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32502 === (18))){
var inst_32484 = (state_32501[(2)]);
var state_32501__$1 = state_32501;
var statearr_32525_32587 = state_32501__$1;
(statearr_32525_32587[(2)] = inst_32484);

(statearr_32525_32587[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32502 === (8))){
var inst_32470 = cljs.core.async.close_BANG_.call(null,to);
var state_32501__$1 = state_32501;
var statearr_32526_32588 = state_32501__$1;
(statearr_32526_32588[(2)] = inst_32470);

(statearr_32526_32588[(1)] = (10));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6581__auto__,jobs,results,process,async))
;
return ((function (switch__6525__auto__,c__6581__auto__,jobs,results,process,async){
return (function() {
var state_machine__6526__auto__ = null;
var state_machine__6526__auto____0 = (function (){
var statearr_32530 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32530[(0)] = state_machine__6526__auto__);

(statearr_32530[(1)] = (1));

return statearr_32530;
});
var state_machine__6526__auto____1 = (function (state_32501){
while(true){
var ret_value__6527__auto__ = (function (){try{while(true){
var result__6528__auto__ = switch__6525__auto__.call(null,state_32501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6528__auto__;
}
break;
}
}catch (e32531){if((e32531 instanceof Object)){
var ex__6529__auto__ = e32531;
var statearr_32532_32589 = state_32501;
(statearr_32532_32589[(5)] = ex__6529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32590 = state_32501;
state_32501 = G__32590;
continue;
} else {
return ret_value__6527__auto__;
}
break;
}
});
state_machine__6526__auto__ = function(state_32501){
switch(arguments.length){
case 0:
return state_machine__6526__auto____0.call(this);
case 1:
return state_machine__6526__auto____1.call(this,state_32501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6526__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6526__auto____0;
state_machine__6526__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6526__auto____1;
return state_machine__6526__auto__;
})()
;})(switch__6525__auto__,c__6581__auto__,jobs,results,process,async))
})();
var state__6583__auto__ = (function (){var statearr_32533 = f__6582__auto__.call(null);
(statearr_32533[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6581__auto__);

return statearr_32533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6583__auto__);
});})(c__6581__auto__,jobs,results,process,async))
);

return c__6581__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){
return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){
return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){
return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__6581__auto___32691 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6581__auto___32691,tc,fc){
return (function (){
var f__6582__auto__ = (function (){var switch__6525__auto__ = ((function (c__6581__auto___32691,tc,fc){
return (function (state_32666){
var state_val_32667 = (state_32666[(1)]);
if((state_val_32667 === (7))){
var inst_32662 = (state_32666[(2)]);
var state_32666__$1 = state_32666;
var statearr_32668_32692 = state_32666__$1;
(statearr_32668_32692[(2)] = inst_32662);

(statearr_32668_32692[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32667 === (1))){
var state_32666__$1 = state_32666;
var statearr_32669_32693 = state_32666__$1;
(statearr_32669_32693[(2)] = null);

(statearr_32669_32693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32667 === (4))){
var inst_32643 = (state_32666[(7)]);
var inst_32643__$1 = (state_32666[(2)]);
var inst_32644 = (inst_32643__$1 == null);
var state_32666__$1 = (function (){var statearr_32670 = state_32666;
(statearr_32670[(7)] = inst_32643__$1);

return statearr_32670;
})();
if(cljs.core.truth_(inst_32644)){
var statearr_32671_32694 = state_32666__$1;
(statearr_32671_32694[(1)] = (5));

} else {
var statearr_32672_32695 = state_32666__$1;
(statearr_32672_32695[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32667 === (13))){
var state_32666__$1 = state_32666;
var statearr_32673_32696 = state_32666__$1;
(statearr_32673_32696[(2)] = null);

(statearr_32673_32696[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32667 === (6))){
var inst_32643 = (state_32666[(7)]);
var inst_32649 = p.call(null,inst_32643);
var state_32666__$1 = state_32666;
if(cljs.core.truth_(inst_32649)){
var statearr_32674_32697 = state_32666__$1;
(statearr_32674_32697[(1)] = (9));

} else {
var statearr_32675_32698 = state_32666__$1;
(statearr_32675_32698[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32667 === (3))){
var inst_32664 = (state_32666[(2)]);
var state_32666__$1 = state_32666;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32666__$1,inst_32664);
} else {
if((state_val_32667 === (12))){
var state_32666__$1 = state_32666;
var statearr_32676_32699 = state_32666__$1;
(statearr_32676_32699[(2)] = null);

(statearr_32676_32699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32667 === (2))){
var state_32666__$1 = state_32666;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32666__$1,(4),ch);
} else {
if((state_val_32667 === (11))){
var inst_32643 = (state_32666[(7)]);
var inst_32653 = (state_32666[(2)]);
var state_32666__$1 = state_32666;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32666__$1,(8),inst_32653,inst_32643);
} else {
if((state_val_32667 === (9))){
var state_32666__$1 = state_32666;
var statearr_32677_32700 = state_32666__$1;
(statearr_32677_32700[(2)] = tc);

(statearr_32677_32700[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32667 === (5))){
var inst_32646 = cljs.core.async.close_BANG_.call(null,tc);
var inst_32647 = cljs.core.async.close_BANG_.call(null,fc);
var state_32666__$1 = (function (){var statearr_32678 = state_32666;
(statearr_32678[(8)] = inst_32646);

return statearr_32678;
})();
var statearr_32679_32701 = state_32666__$1;
(statearr_32679_32701[(2)] = inst_32647);

(statearr_32679_32701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32667 === (14))){
var inst_32660 = (state_32666[(2)]);
var state_32666__$1 = state_32666;
var statearr_32680_32702 = state_32666__$1;
(statearr_32680_32702[(2)] = inst_32660);

(statearr_32680_32702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32667 === (10))){
var state_32666__$1 = state_32666;
var statearr_32681_32703 = state_32666__$1;
(statearr_32681_32703[(2)] = fc);

(statearr_32681_32703[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32667 === (8))){
var inst_32655 = (state_32666[(2)]);
var state_32666__$1 = state_32666;
if(cljs.core.truth_(inst_32655)){
var statearr_32682_32704 = state_32666__$1;
(statearr_32682_32704[(1)] = (12));

} else {
var statearr_32683_32705 = state_32666__$1;
(statearr_32683_32705[(1)] = (13));

}

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
}
}
}
}
}
}
}
});})(c__6581__auto___32691,tc,fc))
;
return ((function (switch__6525__auto__,c__6581__auto___32691,tc,fc){
return (function() {
var state_machine__6526__auto__ = null;
var state_machine__6526__auto____0 = (function (){
var statearr_32687 = [null,null,null,null,null,null,null,null,null];
(statearr_32687[(0)] = state_machine__6526__auto__);

(statearr_32687[(1)] = (1));

return statearr_32687;
});
var state_machine__6526__auto____1 = (function (state_32666){
while(true){
var ret_value__6527__auto__ = (function (){try{while(true){
var result__6528__auto__ = switch__6525__auto__.call(null,state_32666);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6528__auto__;
}
break;
}
}catch (e32688){if((e32688 instanceof Object)){
var ex__6529__auto__ = e32688;
var statearr_32689_32706 = state_32666;
(statearr_32689_32706[(5)] = ex__6529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32666);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32688;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32707 = state_32666;
state_32666 = G__32707;
continue;
} else {
return ret_value__6527__auto__;
}
break;
}
});
state_machine__6526__auto__ = function(state_32666){
switch(arguments.length){
case 0:
return state_machine__6526__auto____0.call(this);
case 1:
return state_machine__6526__auto____1.call(this,state_32666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6526__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6526__auto____0;
state_machine__6526__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6526__auto____1;
return state_machine__6526__auto__;
})()
;})(switch__6525__auto__,c__6581__auto___32691,tc,fc))
})();
var state__6583__auto__ = (function (){var statearr_32690 = f__6582__auto__.call(null);
(statearr_32690[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6581__auto___32691);

return statearr_32690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6583__auto__);
});})(c__6581__auto___32691,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__6581__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6581__auto__){
return (function (){
var f__6582__auto__ = (function (){var switch__6525__auto__ = ((function (c__6581__auto__){
return (function (state_32754){
var state_val_32755 = (state_32754[(1)]);
if((state_val_32755 === (7))){
var inst_32750 = (state_32754[(2)]);
var state_32754__$1 = state_32754;
var statearr_32756_32772 = state_32754__$1;
(statearr_32756_32772[(2)] = inst_32750);

(statearr_32756_32772[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32755 === (6))){
var inst_32740 = (state_32754[(7)]);
var inst_32743 = (state_32754[(8)]);
var inst_32747 = f.call(null,inst_32740,inst_32743);
var inst_32740__$1 = inst_32747;
var state_32754__$1 = (function (){var statearr_32757 = state_32754;
(statearr_32757[(7)] = inst_32740__$1);

return statearr_32757;
})();
var statearr_32758_32773 = state_32754__$1;
(statearr_32758_32773[(2)] = null);

(statearr_32758_32773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32755 === (5))){
var inst_32740 = (state_32754[(7)]);
var state_32754__$1 = state_32754;
var statearr_32759_32774 = state_32754__$1;
(statearr_32759_32774[(2)] = inst_32740);

(statearr_32759_32774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32755 === (4))){
var inst_32743 = (state_32754[(8)]);
var inst_32743__$1 = (state_32754[(2)]);
var inst_32744 = (inst_32743__$1 == null);
var state_32754__$1 = (function (){var statearr_32760 = state_32754;
(statearr_32760[(8)] = inst_32743__$1);

return statearr_32760;
})();
if(cljs.core.truth_(inst_32744)){
var statearr_32761_32775 = state_32754__$1;
(statearr_32761_32775[(1)] = (5));

} else {
var statearr_32762_32776 = state_32754__$1;
(statearr_32762_32776[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32755 === (3))){
var inst_32752 = (state_32754[(2)]);
var state_32754__$1 = state_32754;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32754__$1,inst_32752);
} else {
if((state_val_32755 === (2))){
var state_32754__$1 = state_32754;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32754__$1,(4),ch);
} else {
if((state_val_32755 === (1))){
var inst_32740 = init;
var state_32754__$1 = (function (){var statearr_32763 = state_32754;
(statearr_32763[(7)] = inst_32740);

return statearr_32763;
})();
var statearr_32764_32777 = state_32754__$1;
(statearr_32764_32777[(2)] = null);

(statearr_32764_32777[(1)] = (2));


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
});})(c__6581__auto__))
;
return ((function (switch__6525__auto__,c__6581__auto__){
return (function() {
var state_machine__6526__auto__ = null;
var state_machine__6526__auto____0 = (function (){
var statearr_32768 = [null,null,null,null,null,null,null,null,null];
(statearr_32768[(0)] = state_machine__6526__auto__);

(statearr_32768[(1)] = (1));

return statearr_32768;
});
var state_machine__6526__auto____1 = (function (state_32754){
while(true){
var ret_value__6527__auto__ = (function (){try{while(true){
var result__6528__auto__ = switch__6525__auto__.call(null,state_32754);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6528__auto__;
}
break;
}
}catch (e32769){if((e32769 instanceof Object)){
var ex__6529__auto__ = e32769;
var statearr_32770_32778 = state_32754;
(statearr_32770_32778[(5)] = ex__6529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32754);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32769;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32779 = state_32754;
state_32754 = G__32779;
continue;
} else {
return ret_value__6527__auto__;
}
break;
}
});
state_machine__6526__auto__ = function(state_32754){
switch(arguments.length){
case 0:
return state_machine__6526__auto____0.call(this);
case 1:
return state_machine__6526__auto____1.call(this,state_32754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6526__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6526__auto____0;
state_machine__6526__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6526__auto____1;
return state_machine__6526__auto__;
})()
;})(switch__6525__auto__,c__6581__auto__))
})();
var state__6583__auto__ = (function (){var statearr_32771 = f__6582__auto__.call(null);
(statearr_32771[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6581__auto__);

return statearr_32771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6583__auto__);
});})(c__6581__auto__))
);

return c__6581__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){
return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__6581__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6581__auto__){
return (function (){
var f__6582__auto__ = (function (){var switch__6525__auto__ = ((function (c__6581__auto__){
return (function (state_32853){
var state_val_32854 = (state_32853[(1)]);
if((state_val_32854 === (7))){
var inst_32835 = (state_32853[(2)]);
var state_32853__$1 = state_32853;
var statearr_32855_32878 = state_32853__$1;
(statearr_32855_32878[(2)] = inst_32835);

(statearr_32855_32878[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32854 === (1))){
var inst_32829 = cljs.core.seq.call(null,coll);
var inst_32830 = inst_32829;
var state_32853__$1 = (function (){var statearr_32856 = state_32853;
(statearr_32856[(7)] = inst_32830);

return statearr_32856;
})();
var statearr_32857_32879 = state_32853__$1;
(statearr_32857_32879[(2)] = null);

(statearr_32857_32879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32854 === (4))){
var inst_32830 = (state_32853[(7)]);
var inst_32833 = cljs.core.first.call(null,inst_32830);
var state_32853__$1 = state_32853;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32853__$1,(7),ch,inst_32833);
} else {
if((state_val_32854 === (13))){
var inst_32847 = (state_32853[(2)]);
var state_32853__$1 = state_32853;
var statearr_32858_32880 = state_32853__$1;
(statearr_32858_32880[(2)] = inst_32847);

(statearr_32858_32880[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32854 === (6))){
var inst_32838 = (state_32853[(2)]);
var state_32853__$1 = state_32853;
if(cljs.core.truth_(inst_32838)){
var statearr_32859_32881 = state_32853__$1;
(statearr_32859_32881[(1)] = (8));

} else {
var statearr_32860_32882 = state_32853__$1;
(statearr_32860_32882[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32854 === (3))){
var inst_32851 = (state_32853[(2)]);
var state_32853__$1 = state_32853;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32853__$1,inst_32851);
} else {
if((state_val_32854 === (12))){
var state_32853__$1 = state_32853;
var statearr_32861_32883 = state_32853__$1;
(statearr_32861_32883[(2)] = null);

(statearr_32861_32883[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32854 === (2))){
var inst_32830 = (state_32853[(7)]);
var state_32853__$1 = state_32853;
if(cljs.core.truth_(inst_32830)){
var statearr_32862_32884 = state_32853__$1;
(statearr_32862_32884[(1)] = (4));

} else {
var statearr_32863_32885 = state_32853__$1;
(statearr_32863_32885[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32854 === (11))){
var inst_32844 = cljs.core.async.close_BANG_.call(null,ch);
var state_32853__$1 = state_32853;
var statearr_32864_32886 = state_32853__$1;
(statearr_32864_32886[(2)] = inst_32844);

(statearr_32864_32886[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32854 === (9))){
var state_32853__$1 = state_32853;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32865_32887 = state_32853__$1;
(statearr_32865_32887[(1)] = (11));

} else {
var statearr_32866_32888 = state_32853__$1;
(statearr_32866_32888[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32854 === (5))){
var inst_32830 = (state_32853[(7)]);
var state_32853__$1 = state_32853;
var statearr_32867_32889 = state_32853__$1;
(statearr_32867_32889[(2)] = inst_32830);

(statearr_32867_32889[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32854 === (10))){
var inst_32849 = (state_32853[(2)]);
var state_32853__$1 = state_32853;
var statearr_32868_32890 = state_32853__$1;
(statearr_32868_32890[(2)] = inst_32849);

(statearr_32868_32890[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32854 === (8))){
var inst_32830 = (state_32853[(7)]);
var inst_32840 = cljs.core.next.call(null,inst_32830);
var inst_32830__$1 = inst_32840;
var state_32853__$1 = (function (){var statearr_32869 = state_32853;
(statearr_32869[(7)] = inst_32830__$1);

return statearr_32869;
})();
var statearr_32870_32891 = state_32853__$1;
(statearr_32870_32891[(2)] = null);

(statearr_32870_32891[(1)] = (2));


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
}
}
}
}
}
}
});})(c__6581__auto__))
;
return ((function (switch__6525__auto__,c__6581__auto__){
return (function() {
var state_machine__6526__auto__ = null;
var state_machine__6526__auto____0 = (function (){
var statearr_32874 = [null,null,null,null,null,null,null,null];
(statearr_32874[(0)] = state_machine__6526__auto__);

(statearr_32874[(1)] = (1));

return statearr_32874;
});
var state_machine__6526__auto____1 = (function (state_32853){
while(true){
var ret_value__6527__auto__ = (function (){try{while(true){
var result__6528__auto__ = switch__6525__auto__.call(null,state_32853);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6528__auto__;
}
break;
}
}catch (e32875){if((e32875 instanceof Object)){
var ex__6529__auto__ = e32875;
var statearr_32876_32892 = state_32853;
(statearr_32876_32892[(5)] = ex__6529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32875;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32893 = state_32853;
state_32853 = G__32893;
continue;
} else {
return ret_value__6527__auto__;
}
break;
}
});
state_machine__6526__auto__ = function(state_32853){
switch(arguments.length){
case 0:
return state_machine__6526__auto____0.call(this);
case 1:
return state_machine__6526__auto____1.call(this,state_32853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6526__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6526__auto____0;
state_machine__6526__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6526__auto____1;
return state_machine__6526__auto__;
})()
;})(switch__6525__auto__,c__6581__auto__))
})();
var state__6583__auto__ = (function (){var statearr_32877 = f__6582__auto__.call(null);
(statearr_32877[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6581__auto__);

return statearr_32877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6583__auto__);
});})(c__6581__auto__))
);

return c__6581__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj32895 = {};
return obj32895;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__3785__auto__ = _;
if(and__3785__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__3785__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4441__auto__ = (((_ == null))?null:_);
return (function (){var or__3797__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4441__auto__)]);
if(or__3797__auto__){
return or__3797__auto__;
} else {
var or__3797__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__3797__auto____$1){
return or__3797__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj32897 = {};
return obj32897;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__3785__auto__ = m;
if(and__3785__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__3785__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4441__auto__ = (((m == null))?null:m);
return (function (){var or__3797__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4441__auto__)]);
if(or__3797__auto__){
return or__3797__auto__;
} else {
var or__3797__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__3797__auto____$1){
return or__3797__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__3785__auto__ = m;
if(and__3785__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__3785__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4441__auto__ = (((m == null))?null:m);
return (function (){var or__3797__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4441__auto__)]);
if(or__3797__auto__){
return or__3797__auto__;
} else {
var or__3797__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__3797__auto____$1){
return or__3797__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__3785__auto__ = m;
if(and__3785__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__3785__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4441__auto__ = (((m == null))?null:m);
return (function (){var or__3797__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4441__auto__)]);
if(or__3797__auto__){
return or__3797__auto__;
} else {
var or__3797__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__3797__auto____$1){
return or__3797__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t33119 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33119 = (function (cs,ch,mult,meta33120){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta33120 = meta33120;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33119.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t33119.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t33119.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t33119.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t33119.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t33119.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t33119.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33121){
var self__ = this;
var _33121__$1 = this;
return self__.meta33120;
});})(cs))
;

cljs.core.async.t33119.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33121,meta33120__$1){
var self__ = this;
var _33121__$1 = this;
return (new cljs.core.async.t33119(self__.cs,self__.ch,self__.mult,meta33120__$1));
});})(cs))
;

cljs.core.async.t33119.cljs$lang$type = true;

cljs.core.async.t33119.cljs$lang$ctorStr = "cljs.core.async/t33119";

cljs.core.async.t33119.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4384__auto__,writer__4385__auto__,opt__4386__auto__){
return cljs.core._write.call(null,writer__4385__auto__,"cljs.core.async/t33119");
});})(cs))
;

cljs.core.async.__GT_t33119 = ((function (cs){
return (function __GT_t33119(cs__$1,ch__$1,mult__$1,meta33120){
return (new cljs.core.async.t33119(cs__$1,ch__$1,mult__$1,meta33120));
});})(cs))
;

}

return (new cljs.core.async.t33119(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/blischalk/node-webkit-apps/hoard/target/base+system+user+dev/cljsbuild-compiler-0/cljs/core/async.cljs"], null)));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__6581__auto___33340 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6581__auto___33340,cs,m,dchan,dctr,done){
return (function (){
var f__6582__auto__ = (function (){var switch__6525__auto__ = ((function (c__6581__auto___33340,cs,m,dchan,dctr,done){
return (function (state_33252){
var state_val_33253 = (state_33252[(1)]);
if((state_val_33253 === (7))){
var inst_33248 = (state_33252[(2)]);
var state_33252__$1 = state_33252;
var statearr_33254_33341 = state_33252__$1;
(statearr_33254_33341[(2)] = inst_33248);

(statearr_33254_33341[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33253 === (20))){
var inst_33153 = (state_33252[(7)]);
var inst_33163 = cljs.core.first.call(null,inst_33153);
var inst_33164 = cljs.core.nth.call(null,inst_33163,(0),null);
var inst_33165 = cljs.core.nth.call(null,inst_33163,(1),null);
var state_33252__$1 = (function (){var statearr_33255 = state_33252;
(statearr_33255[(8)] = inst_33164);

return statearr_33255;
})();
if(cljs.core.truth_(inst_33165)){
var statearr_33256_33342 = state_33252__$1;
(statearr_33256_33342[(1)] = (22));

} else {
var statearr_33257_33343 = state_33252__$1;
(statearr_33257_33343[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33253 === (27))){
var inst_33124 = (state_33252[(9)]);
var inst_33193 = (state_33252[(10)]);
var inst_33200 = (state_33252[(11)]);
var inst_33195 = (state_33252[(12)]);
var inst_33200__$1 = cljs.core._nth.call(null,inst_33193,inst_33195);
var inst_33201 = cljs.core.async.put_BANG_.call(null,inst_33200__$1,inst_33124,done);
var state_33252__$1 = (function (){var statearr_33258 = state_33252;
(statearr_33258[(11)] = inst_33200__$1);

return statearr_33258;
})();
if(cljs.core.truth_(inst_33201)){
var statearr_33259_33344 = state_33252__$1;
(statearr_33259_33344[(1)] = (30));

} else {
var statearr_33260_33345 = state_33252__$1;
(statearr_33260_33345[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33253 === (1))){
var state_33252__$1 = state_33252;
var statearr_33261_33346 = state_33252__$1;
(statearr_33261_33346[(2)] = null);

(statearr_33261_33346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33253 === (24))){
var inst_33153 = (state_33252[(7)]);
var inst_33170 = (state_33252[(2)]);
var inst_33171 = cljs.core.next.call(null,inst_33153);
var inst_33133 = inst_33171;
var inst_33134 = null;
var inst_33135 = (0);
var inst_33136 = (0);
var state_33252__$1 = (function (){var statearr_33262 = state_33252;
(statearr_33262[(13)] = inst_33136);

(statearr_33262[(14)] = inst_33133);

(statearr_33262[(15)] = inst_33134);

(statearr_33262[(16)] = inst_33170);

(statearr_33262[(17)] = inst_33135);

return statearr_33262;
})();
var statearr_33263_33347 = state_33252__$1;
(statearr_33263_33347[(2)] = null);

(statearr_33263_33347[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33253 === (39))){
var state_33252__$1 = state_33252;
var statearr_33267_33348 = state_33252__$1;
(statearr_33267_33348[(2)] = null);

(statearr_33267_33348[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33253 === (4))){
var inst_33124 = (state_33252[(9)]);
var inst_33124__$1 = (state_33252[(2)]);
var inst_33125 = (inst_33124__$1 == null);
var state_33252__$1 = (function (){var statearr_33268 = state_33252;
(statearr_33268[(9)] = inst_33124__$1);

return statearr_33268;
})();
if(cljs.core.truth_(inst_33125)){
var statearr_33269_33349 = state_33252__$1;
(statearr_33269_33349[(1)] = (5));

} else {
var statearr_33270_33350 = state_33252__$1;
(statearr_33270_33350[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33253 === (15))){
var inst_33136 = (state_33252[(13)]);
var inst_33133 = (state_33252[(14)]);
var inst_33134 = (state_33252[(15)]);
var inst_33135 = (state_33252[(17)]);
var inst_33149 = (state_33252[(2)]);
var inst_33150 = (inst_33136 + (1));
var tmp33264 = inst_33133;
var tmp33265 = inst_33134;
var tmp33266 = inst_33135;
var inst_33133__$1 = tmp33264;
var inst_33134__$1 = tmp33265;
var inst_33135__$1 = tmp33266;
var inst_33136__$1 = inst_33150;
var state_33252__$1 = (function (){var statearr_33271 = state_33252;
(statearr_33271[(13)] = inst_33136__$1);

(statearr_33271[(18)] = inst_33149);

(statearr_33271[(14)] = inst_33133__$1);

(statearr_33271[(15)] = inst_33134__$1);

(statearr_33271[(17)] = inst_33135__$1);

return statearr_33271;
})();
var statearr_33272_33351 = state_33252__$1;
(statearr_33272_33351[(2)] = null);

(statearr_33272_33351[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33253 === (21))){
var inst_33174 = (state_33252[(2)]);
var state_33252__$1 = state_33252;
var statearr_33276_33352 = state_33252__$1;
(statearr_33276_33352[(2)] = inst_33174);

(statearr_33276_33352[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33253 === (31))){
var inst_33200 = (state_33252[(11)]);
var inst_33204 = done.call(null,null);
var inst_33205 = cljs.core.async.untap_STAR_.call(null,m,inst_33200);
var state_33252__$1 = (function (){var statearr_33277 = state_33252;
(statearr_33277[(19)] = inst_33204);

return statearr_33277;
})();
var statearr_33278_33353 = state_33252__$1;
(statearr_33278_33353[(2)] = inst_33205);

(statearr_33278_33353[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33253 === (32))){
var inst_33192 = (state_33252[(20)]);
var inst_33193 = (state_33252[(10)]);
var inst_33195 = (state_33252[(12)]);
var inst_33194 = (state_33252[(21)]);
var inst_33207 = (state_33252[(2)]);
var inst_33208 = (inst_33195 + (1));
var tmp33273 = inst_33192;
var tmp33274 = inst_33193;
var tmp33275 = inst_33194;
var inst_33192__$1 = tmp33273;
var inst_33193__$1 = tmp33274;
var inst_33194__$1 = tmp33275;
var inst_33195__$1 = inst_33208;
var state_33252__$1 = (function (){var statearr_33279 = state_33252;
(statearr_33279[(20)] = inst_33192__$1);

(statearr_33279[(10)] = inst_33193__$1);

(statearr_33279[(12)] = inst_33195__$1);

(statearr_33279[(22)] = inst_33207);

(statearr_33279[(21)] = inst_33194__$1);

return statearr_33279;
})();
var statearr_33280_33354 = state_33252__$1;
(statearr_33280_33354[(2)] = null);

(statearr_33280_33354[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33253 === (40))){
var inst_33220 = (state_33252[(23)]);
var inst_33224 = done.call(null,null);
var inst_33225 = cljs.core.async.untap_STAR_.call(null,m,inst_33220);
var state_33252__$1 = (function (){var statearr_33281 = state_33252;
(statearr_33281[(24)] = inst_33224);

return statearr_33281;
})();
var statearr_33282_33355 = state_33252__$1;
(statearr_33282_33355[(2)] = inst_33225);

(statearr_33282_33355[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33253 === (33))){
var inst_33211 = (state_33252[(25)]);
var inst_33213 = cljs.core.chunked_seq_QMARK_.call(null,inst_33211);
var state_33252__$1 = state_33252;
if(inst_33213){
var statearr_33283_33356 = state_33252__$1;
(statearr_33283_33356[(1)] = (36));

} else {
var statearr_33284_33357 = state_33252__$1;
(statearr_33284_33357[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33253 === (13))){
var inst_33143 = (state_33252[(26)]);
var inst_33146 = cljs.core.async.close_BANG_.call(null,inst_33143);
var state_33252__$1 = state_33252;
var statearr_33285_33358 = state_33252__$1;
(statearr_33285_33358[(2)] = inst_33146);

(statearr_33285_33358[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33253 === (22))){
var inst_33164 = (state_33252[(8)]);
var inst_33167 = cljs.core.async.close_BANG_.call(null,inst_33164);
var state_33252__$1 = state_33252;
var statearr_33286_33359 = state_33252__$1;
(statearr_33286_33359[(2)] = inst_33167);

(statearr_33286_33359[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33253 === (36))){
var inst_33211 = (state_33252[(25)]);
var inst_33215 = cljs.core.chunk_first.call(null,inst_33211);
var inst_33216 = cljs.core.chunk_rest.call(null,inst_33211);
var inst_33217 = cljs.core.count.call(null,inst_33215);
var inst_33192 = inst_33216;
var inst_33193 = inst_33215;
var inst_33194 = inst_33217;
var inst_33195 = (0);
var state_33252__$1 = (function (){var statearr_33287 = state_33252;
(statearr_33287[(20)] = inst_33192);

(statearr_33287[(10)] = inst_33193);

(statearr_33287[(12)] = inst_33195);

(statearr_33287[(21)] = inst_33194);

return statearr_33287;
})();
var statearr_33288_33360 = state_33252__$1;
(statearr_33288_33360[(2)] = null);

(statearr_33288_33360[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33253 === (41))){
var inst_33211 = (state_33252[(25)]);
var inst_33227 = (state_33252[(2)]);
var inst_33228 = cljs.core.next.call(null,inst_33211);
var inst_33192 = inst_33228;
var inst_33193 = null;
var inst_33194 = (0);
var inst_33195 = (0);
var state_33252__$1 = (function (){var statearr_33289 = state_33252;
(statearr_33289[(20)] = inst_33192);

(statearr_33289[(27)] = inst_33227);

(statearr_33289[(10)] = inst_33193);

(statearr_33289[(12)] = inst_33195);

(statearr_33289[(21)] = inst_33194);

return statearr_33289;
})();
var statearr_33290_33361 = state_33252__$1;
(statearr_33290_33361[(2)] = null);

(statearr_33290_33361[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33253 === (43))){
var state_33252__$1 = state_33252;
var statearr_33291_33362 = state_33252__$1;
(statearr_33291_33362[(2)] = null);

(statearr_33291_33362[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33253 === (29))){
var inst_33236 = (state_33252[(2)]);
var state_33252__$1 = state_33252;
var statearr_33292_33363 = state_33252__$1;
(statearr_33292_33363[(2)] = inst_33236);

(statearr_33292_33363[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33253 === (44))){
var inst_33245 = (state_33252[(2)]);
var state_33252__$1 = (function (){var statearr_33293 = state_33252;
(statearr_33293[(28)] = inst_33245);

return statearr_33293;
})();
var statearr_33294_33364 = state_33252__$1;
(statearr_33294_33364[(2)] = null);

(statearr_33294_33364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33253 === (6))){
var inst_33184 = (state_33252[(29)]);
var inst_33183 = cljs.core.deref.call(null,cs);
var inst_33184__$1 = cljs.core.keys.call(null,inst_33183);
var inst_33185 = cljs.core.count.call(null,inst_33184__$1);
var inst_33186 = cljs.core.reset_BANG_.call(null,dctr,inst_33185);
var inst_33191 = cljs.core.seq.call(null,inst_33184__$1);
var inst_33192 = inst_33191;
var inst_33193 = null;
var inst_33194 = (0);
var inst_33195 = (0);
var state_33252__$1 = (function (){var statearr_33295 = state_33252;
(statearr_33295[(20)] = inst_33192);

(statearr_33295[(30)] = inst_33186);

(statearr_33295[(10)] = inst_33193);

(statearr_33295[(29)] = inst_33184__$1);

(statearr_33295[(12)] = inst_33195);

(statearr_33295[(21)] = inst_33194);

return statearr_33295;
})();
var statearr_33296_33365 = state_33252__$1;
(statearr_33296_33365[(2)] = null);

(statearr_33296_33365[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33253 === (28))){
var inst_33192 = (state_33252[(20)]);
var inst_33211 = (state_33252[(25)]);
var inst_33211__$1 = cljs.core.seq.call(null,inst_33192);
var state_33252__$1 = (function (){var statearr_33297 = state_33252;
(statearr_33297[(25)] = inst_33211__$1);

return statearr_33297;
})();
if(inst_33211__$1){
var statearr_33298_33366 = state_33252__$1;
(statearr_33298_33366[(1)] = (33));

} else {
var statearr_33299_33367 = state_33252__$1;
(statearr_33299_33367[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33253 === (25))){
var inst_33195 = (state_33252[(12)]);
var inst_33194 = (state_33252[(21)]);
var inst_33197 = (inst_33195 < inst_33194);
var inst_33198 = inst_33197;
var state_33252__$1 = state_33252;
if(cljs.core.truth_(inst_33198)){
var statearr_33300_33368 = state_33252__$1;
(statearr_33300_33368[(1)] = (27));

} else {
var statearr_33301_33369 = state_33252__$1;
(statearr_33301_33369[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33253 === (34))){
var state_33252__$1 = state_33252;
var statearr_33302_33370 = state_33252__$1;
(statearr_33302_33370[(2)] = null);

(statearr_33302_33370[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33253 === (17))){
var state_33252__$1 = state_33252;
var statearr_33303_33371 = state_33252__$1;
(statearr_33303_33371[(2)] = null);

(statearr_33303_33371[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33253 === (3))){
var inst_33250 = (state_33252[(2)]);
var state_33252__$1 = state_33252;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33252__$1,inst_33250);
} else {
if((state_val_33253 === (12))){
var inst_33179 = (state_33252[(2)]);
var state_33252__$1 = state_33252;
var statearr_33304_33372 = state_33252__$1;
(statearr_33304_33372[(2)] = inst_33179);

(statearr_33304_33372[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33253 === (2))){
var state_33252__$1 = state_33252;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33252__$1,(4),ch);
} else {
if((state_val_33253 === (23))){
var state_33252__$1 = state_33252;
var statearr_33305_33373 = state_33252__$1;
(statearr_33305_33373[(2)] = null);

(statearr_33305_33373[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33253 === (35))){
var inst_33234 = (state_33252[(2)]);
var state_33252__$1 = state_33252;
var statearr_33306_33374 = state_33252__$1;
(statearr_33306_33374[(2)] = inst_33234);

(statearr_33306_33374[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33253 === (19))){
var inst_33153 = (state_33252[(7)]);
var inst_33157 = cljs.core.chunk_first.call(null,inst_33153);
var inst_33158 = cljs.core.chunk_rest.call(null,inst_33153);
var inst_33159 = cljs.core.count.call(null,inst_33157);
var inst_33133 = inst_33158;
var inst_33134 = inst_33157;
var inst_33135 = inst_33159;
var inst_33136 = (0);
var state_33252__$1 = (function (){var statearr_33307 = state_33252;
(statearr_33307[(13)] = inst_33136);

(statearr_33307[(14)] = inst_33133);

(statearr_33307[(15)] = inst_33134);

(statearr_33307[(17)] = inst_33135);

return statearr_33307;
})();
var statearr_33308_33375 = state_33252__$1;
(statearr_33308_33375[(2)] = null);

(statearr_33308_33375[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33253 === (11))){
var inst_33153 = (state_33252[(7)]);
var inst_33133 = (state_33252[(14)]);
var inst_33153__$1 = cljs.core.seq.call(null,inst_33133);
var state_33252__$1 = (function (){var statearr_33309 = state_33252;
(statearr_33309[(7)] = inst_33153__$1);

return statearr_33309;
})();
if(inst_33153__$1){
var statearr_33310_33376 = state_33252__$1;
(statearr_33310_33376[(1)] = (16));

} else {
var statearr_33311_33377 = state_33252__$1;
(statearr_33311_33377[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33253 === (9))){
var inst_33181 = (state_33252[(2)]);
var state_33252__$1 = state_33252;
var statearr_33312_33378 = state_33252__$1;
(statearr_33312_33378[(2)] = inst_33181);

(statearr_33312_33378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33253 === (5))){
var inst_33131 = cljs.core.deref.call(null,cs);
var inst_33132 = cljs.core.seq.call(null,inst_33131);
var inst_33133 = inst_33132;
var inst_33134 = null;
var inst_33135 = (0);
var inst_33136 = (0);
var state_33252__$1 = (function (){var statearr_33313 = state_33252;
(statearr_33313[(13)] = inst_33136);

(statearr_33313[(14)] = inst_33133);

(statearr_33313[(15)] = inst_33134);

(statearr_33313[(17)] = inst_33135);

return statearr_33313;
})();
var statearr_33314_33379 = state_33252__$1;
(statearr_33314_33379[(2)] = null);

(statearr_33314_33379[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33253 === (14))){
var state_33252__$1 = state_33252;
var statearr_33315_33380 = state_33252__$1;
(statearr_33315_33380[(2)] = null);

(statearr_33315_33380[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33253 === (45))){
var inst_33242 = (state_33252[(2)]);
var state_33252__$1 = state_33252;
var statearr_33316_33381 = state_33252__$1;
(statearr_33316_33381[(2)] = inst_33242);

(statearr_33316_33381[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33253 === (26))){
var inst_33184 = (state_33252[(29)]);
var inst_33238 = (state_33252[(2)]);
var inst_33239 = cljs.core.seq.call(null,inst_33184);
var state_33252__$1 = (function (){var statearr_33317 = state_33252;
(statearr_33317[(31)] = inst_33238);

return statearr_33317;
})();
if(inst_33239){
var statearr_33318_33382 = state_33252__$1;
(statearr_33318_33382[(1)] = (42));

} else {
var statearr_33319_33383 = state_33252__$1;
(statearr_33319_33383[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33253 === (16))){
var inst_33153 = (state_33252[(7)]);
var inst_33155 = cljs.core.chunked_seq_QMARK_.call(null,inst_33153);
var state_33252__$1 = state_33252;
if(inst_33155){
var statearr_33320_33384 = state_33252__$1;
(statearr_33320_33384[(1)] = (19));

} else {
var statearr_33321_33385 = state_33252__$1;
(statearr_33321_33385[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33253 === (38))){
var inst_33231 = (state_33252[(2)]);
var state_33252__$1 = state_33252;
var statearr_33322_33386 = state_33252__$1;
(statearr_33322_33386[(2)] = inst_33231);

(statearr_33322_33386[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33253 === (30))){
var state_33252__$1 = state_33252;
var statearr_33323_33387 = state_33252__$1;
(statearr_33323_33387[(2)] = null);

(statearr_33323_33387[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33253 === (10))){
var inst_33136 = (state_33252[(13)]);
var inst_33134 = (state_33252[(15)]);
var inst_33142 = cljs.core._nth.call(null,inst_33134,inst_33136);
var inst_33143 = cljs.core.nth.call(null,inst_33142,(0),null);
var inst_33144 = cljs.core.nth.call(null,inst_33142,(1),null);
var state_33252__$1 = (function (){var statearr_33324 = state_33252;
(statearr_33324[(26)] = inst_33143);

return statearr_33324;
})();
if(cljs.core.truth_(inst_33144)){
var statearr_33325_33388 = state_33252__$1;
(statearr_33325_33388[(1)] = (13));

} else {
var statearr_33326_33389 = state_33252__$1;
(statearr_33326_33389[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33253 === (18))){
var inst_33177 = (state_33252[(2)]);
var state_33252__$1 = state_33252;
var statearr_33327_33390 = state_33252__$1;
(statearr_33327_33390[(2)] = inst_33177);

(statearr_33327_33390[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33253 === (42))){
var state_33252__$1 = state_33252;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33252__$1,(45),dchan);
} else {
if((state_val_33253 === (37))){
var inst_33211 = (state_33252[(25)]);
var inst_33124 = (state_33252[(9)]);
var inst_33220 = (state_33252[(23)]);
var inst_33220__$1 = cljs.core.first.call(null,inst_33211);
var inst_33221 = cljs.core.async.put_BANG_.call(null,inst_33220__$1,inst_33124,done);
var state_33252__$1 = (function (){var statearr_33328 = state_33252;
(statearr_33328[(23)] = inst_33220__$1);

return statearr_33328;
})();
if(cljs.core.truth_(inst_33221)){
var statearr_33329_33391 = state_33252__$1;
(statearr_33329_33391[(1)] = (39));

} else {
var statearr_33330_33392 = state_33252__$1;
(statearr_33330_33392[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33253 === (8))){
var inst_33136 = (state_33252[(13)]);
var inst_33135 = (state_33252[(17)]);
var inst_33138 = (inst_33136 < inst_33135);
var inst_33139 = inst_33138;
var state_33252__$1 = state_33252;
if(cljs.core.truth_(inst_33139)){
var statearr_33331_33393 = state_33252__$1;
(statearr_33331_33393[(1)] = (10));

} else {
var statearr_33332_33394 = state_33252__$1;
(statearr_33332_33394[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6581__auto___33340,cs,m,dchan,dctr,done))
;
return ((function (switch__6525__auto__,c__6581__auto___33340,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6526__auto__ = null;
var state_machine__6526__auto____0 = (function (){
var statearr_33336 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33336[(0)] = state_machine__6526__auto__);

(statearr_33336[(1)] = (1));

return statearr_33336;
});
var state_machine__6526__auto____1 = (function (state_33252){
while(true){
var ret_value__6527__auto__ = (function (){try{while(true){
var result__6528__auto__ = switch__6525__auto__.call(null,state_33252);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6528__auto__;
}
break;
}
}catch (e33337){if((e33337 instanceof Object)){
var ex__6529__auto__ = e33337;
var statearr_33338_33395 = state_33252;
(statearr_33338_33395[(5)] = ex__6529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33252);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33337;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33396 = state_33252;
state_33252 = G__33396;
continue;
} else {
return ret_value__6527__auto__;
}
break;
}
});
state_machine__6526__auto__ = function(state_33252){
switch(arguments.length){
case 0:
return state_machine__6526__auto____0.call(this);
case 1:
return state_machine__6526__auto____1.call(this,state_33252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6526__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6526__auto____0;
state_machine__6526__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6526__auto____1;
return state_machine__6526__auto__;
})()
;})(switch__6525__auto__,c__6581__auto___33340,cs,m,dchan,dctr,done))
})();
var state__6583__auto__ = (function (){var statearr_33339 = f__6582__auto__.call(null);
(statearr_33339[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6581__auto___33340);

return statearr_33339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6583__auto__);
});})(c__6581__auto___33340,cs,m,dchan,dctr,done))
);


return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){
return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj33398 = {};
return obj33398;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__3785__auto__ = m;
if(and__3785__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__3785__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4441__auto__ = (((m == null))?null:m);
return (function (){var or__3797__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4441__auto__)]);
if(or__3797__auto__){
return or__3797__auto__;
} else {
var or__3797__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__3797__auto____$1){
return or__3797__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__3785__auto__ = m;
if(and__3785__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__3785__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4441__auto__ = (((m == null))?null:m);
return (function (){var or__3797__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4441__auto__)]);
if(or__3797__auto__){
return or__3797__auto__;
} else {
var or__3797__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__3797__auto____$1){
return or__3797__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__3785__auto__ = m;
if(and__3785__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__3785__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4441__auto__ = (((m == null))?null:m);
return (function (){var or__3797__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4441__auto__)]);
if(or__3797__auto__){
return or__3797__auto__;
} else {
var or__3797__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__3797__auto____$1){
return or__3797__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__3785__auto__ = m;
if(and__3785__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__3785__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4441__auto__ = (((m == null))?null:m);
return (function (){var or__3797__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4441__auto__)]);
if(or__3797__auto__){
return or__3797__auto__;
} else {
var or__3797__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__3797__auto____$1){
return or__3797__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__3785__auto__ = m;
if(and__3785__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__3785__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4441__auto__ = (((m == null))?null:m);
return (function (){var or__3797__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4441__auto__)]);
if(or__3797__auto__){
return or__3797__auto__;
} else {
var or__3797__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__3797__auto____$1){
return or__3797__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__33399){
var map__33404 = p__33399;
var map__33404__$1 = ((cljs.core.seq_QMARK_.call(null,map__33404))?cljs.core.apply.call(null,cljs.core.hash_map,map__33404):map__33404);
var opts = map__33404__$1;
var statearr_33405_33408 = state;
(statearr_33405_33408[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__33404,map__33404__$1,opts){
return (function (val){
var statearr_33406_33409 = state;
(statearr_33406_33409[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__33404,map__33404__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_33407_33410 = state;
(statearr_33407_33410[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__33399 = null;
if (arguments.length > 3) {
var G__33411__i = 0, G__33411__a = new Array(arguments.length -  3);
while (G__33411__i < G__33411__a.length) {G__33411__a[G__33411__i] = arguments[G__33411__i + 3]; ++G__33411__i;}
  p__33399 = new cljs.core.IndexedSeq(G__33411__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__33399);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__33412){
var state = cljs.core.first(arglist__33412);
arglist__33412 = cljs.core.next(arglist__33412);
var cont_block = cljs.core.first(arglist__33412);
arglist__33412 = cljs.core.next(arglist__33412);
var ports = cljs.core.first(arglist__33412);
var p__33399 = cljs.core.rest(arglist__33412);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__33399);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t33532 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33532 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33533){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33533 = meta33533;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33532.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t33532.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t33532.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t33532.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t33532.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t33532.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t33532.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t33532.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t33532.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33534){
var self__ = this;
var _33534__$1 = this;
return self__.meta33533;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t33532.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33534,meta33533__$1){
var self__ = this;
var _33534__$1 = this;
return (new cljs.core.async.t33532(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33533__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t33532.cljs$lang$type = true;

cljs.core.async.t33532.cljs$lang$ctorStr = "cljs.core.async/t33532";

cljs.core.async.t33532.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4384__auto__,writer__4385__auto__,opt__4386__auto__){
return cljs.core._write.call(null,writer__4385__auto__,"cljs.core.async/t33532");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t33532 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t33532(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33533){
return (new cljs.core.async.t33532(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33533));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t33532(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/blischalk/node-webkit-apps/hoard/target/base+system+user+dev/cljsbuild-compiler-0/cljs/core/async.cljs"], null)));
})()
;
var c__6581__auto___33651 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6581__auto___33651,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6582__auto__ = (function (){var switch__6525__auto__ = ((function (c__6581__auto___33651,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_33604){
var state_val_33605 = (state_33604[(1)]);
if((state_val_33605 === (7))){
var inst_33548 = (state_33604[(7)]);
var inst_33553 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33548);
var state_33604__$1 = state_33604;
var statearr_33606_33652 = state_33604__$1;
(statearr_33606_33652[(2)] = inst_33553);

(statearr_33606_33652[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33605 === (20))){
var inst_33563 = (state_33604[(8)]);
var state_33604__$1 = state_33604;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33604__$1,(23),out,inst_33563);
} else {
if((state_val_33605 === (1))){
var inst_33538 = (state_33604[(9)]);
var inst_33538__$1 = calc_state.call(null);
var inst_33539 = cljs.core.seq_QMARK_.call(null,inst_33538__$1);
var state_33604__$1 = (function (){var statearr_33607 = state_33604;
(statearr_33607[(9)] = inst_33538__$1);

return statearr_33607;
})();
if(inst_33539){
var statearr_33608_33653 = state_33604__$1;
(statearr_33608_33653[(1)] = (2));

} else {
var statearr_33609_33654 = state_33604__$1;
(statearr_33609_33654[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33605 === (24))){
var inst_33556 = (state_33604[(10)]);
var inst_33548 = inst_33556;
var state_33604__$1 = (function (){var statearr_33610 = state_33604;
(statearr_33610[(7)] = inst_33548);

return statearr_33610;
})();
var statearr_33611_33655 = state_33604__$1;
(statearr_33611_33655[(2)] = null);

(statearr_33611_33655[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33605 === (4))){
var inst_33538 = (state_33604[(9)]);
var inst_33544 = (state_33604[(2)]);
var inst_33545 = cljs.core.get.call(null,inst_33544,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33546 = cljs.core.get.call(null,inst_33544,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33547 = cljs.core.get.call(null,inst_33544,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33548 = inst_33538;
var state_33604__$1 = (function (){var statearr_33612 = state_33604;
(statearr_33612[(11)] = inst_33545);

(statearr_33612[(7)] = inst_33548);

(statearr_33612[(12)] = inst_33546);

(statearr_33612[(13)] = inst_33547);

return statearr_33612;
})();
var statearr_33613_33656 = state_33604__$1;
(statearr_33613_33656[(2)] = null);

(statearr_33613_33656[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33605 === (15))){
var state_33604__$1 = state_33604;
var statearr_33614_33657 = state_33604__$1;
(statearr_33614_33657[(2)] = null);

(statearr_33614_33657[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33605 === (21))){
var inst_33556 = (state_33604[(10)]);
var inst_33548 = inst_33556;
var state_33604__$1 = (function (){var statearr_33615 = state_33604;
(statearr_33615[(7)] = inst_33548);

return statearr_33615;
})();
var statearr_33616_33658 = state_33604__$1;
(statearr_33616_33658[(2)] = null);

(statearr_33616_33658[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33605 === (13))){
var inst_33600 = (state_33604[(2)]);
var state_33604__$1 = state_33604;
var statearr_33617_33659 = state_33604__$1;
(statearr_33617_33659[(2)] = inst_33600);

(statearr_33617_33659[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33605 === (22))){
var inst_33598 = (state_33604[(2)]);
var state_33604__$1 = state_33604;
var statearr_33618_33660 = state_33604__$1;
(statearr_33618_33660[(2)] = inst_33598);

(statearr_33618_33660[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33605 === (6))){
var inst_33602 = (state_33604[(2)]);
var state_33604__$1 = state_33604;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33604__$1,inst_33602);
} else {
if((state_val_33605 === (25))){
var state_33604__$1 = state_33604;
var statearr_33619_33661 = state_33604__$1;
(statearr_33619_33661[(2)] = null);

(statearr_33619_33661[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33605 === (17))){
var inst_33578 = (state_33604[(14)]);
var state_33604__$1 = state_33604;
var statearr_33620_33662 = state_33604__$1;
(statearr_33620_33662[(2)] = inst_33578);

(statearr_33620_33662[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33605 === (3))){
var inst_33538 = (state_33604[(9)]);
var state_33604__$1 = state_33604;
var statearr_33621_33663 = state_33604__$1;
(statearr_33621_33663[(2)] = inst_33538);

(statearr_33621_33663[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33605 === (12))){
var inst_33578 = (state_33604[(14)]);
var inst_33564 = (state_33604[(15)]);
var inst_33559 = (state_33604[(16)]);
var inst_33578__$1 = inst_33559.call(null,inst_33564);
var state_33604__$1 = (function (){var statearr_33622 = state_33604;
(statearr_33622[(14)] = inst_33578__$1);

return statearr_33622;
})();
if(cljs.core.truth_(inst_33578__$1)){
var statearr_33623_33664 = state_33604__$1;
(statearr_33623_33664[(1)] = (17));

} else {
var statearr_33624_33665 = state_33604__$1;
(statearr_33624_33665[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33605 === (2))){
var inst_33538 = (state_33604[(9)]);
var inst_33541 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33538);
var state_33604__$1 = state_33604;
var statearr_33625_33666 = state_33604__$1;
(statearr_33625_33666[(2)] = inst_33541);

(statearr_33625_33666[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33605 === (23))){
var inst_33589 = (state_33604[(2)]);
var state_33604__$1 = state_33604;
if(cljs.core.truth_(inst_33589)){
var statearr_33626_33667 = state_33604__$1;
(statearr_33626_33667[(1)] = (24));

} else {
var statearr_33627_33668 = state_33604__$1;
(statearr_33627_33668[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33605 === (19))){
var inst_33586 = (state_33604[(2)]);
var state_33604__$1 = state_33604;
if(cljs.core.truth_(inst_33586)){
var statearr_33628_33669 = state_33604__$1;
(statearr_33628_33669[(1)] = (20));

} else {
var statearr_33629_33670 = state_33604__$1;
(statearr_33629_33670[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33605 === (11))){
var inst_33563 = (state_33604[(8)]);
var inst_33569 = (inst_33563 == null);
var state_33604__$1 = state_33604;
if(cljs.core.truth_(inst_33569)){
var statearr_33630_33671 = state_33604__$1;
(statearr_33630_33671[(1)] = (14));

} else {
var statearr_33631_33672 = state_33604__$1;
(statearr_33631_33672[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33605 === (9))){
var inst_33556 = (state_33604[(10)]);
var inst_33556__$1 = (state_33604[(2)]);
var inst_33557 = cljs.core.get.call(null,inst_33556__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33558 = cljs.core.get.call(null,inst_33556__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33559 = cljs.core.get.call(null,inst_33556__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_33604__$1 = (function (){var statearr_33632 = state_33604;
(statearr_33632[(17)] = inst_33558);

(statearr_33632[(16)] = inst_33559);

(statearr_33632[(10)] = inst_33556__$1);

return statearr_33632;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_33604__$1,(10),inst_33557);
} else {
if((state_val_33605 === (5))){
var inst_33548 = (state_33604[(7)]);
var inst_33551 = cljs.core.seq_QMARK_.call(null,inst_33548);
var state_33604__$1 = state_33604;
if(inst_33551){
var statearr_33633_33673 = state_33604__$1;
(statearr_33633_33673[(1)] = (7));

} else {
var statearr_33634_33674 = state_33604__$1;
(statearr_33634_33674[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33605 === (14))){
var inst_33564 = (state_33604[(15)]);
var inst_33571 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_33564);
var state_33604__$1 = state_33604;
var statearr_33635_33675 = state_33604__$1;
(statearr_33635_33675[(2)] = inst_33571);

(statearr_33635_33675[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33605 === (26))){
var inst_33594 = (state_33604[(2)]);
var state_33604__$1 = state_33604;
var statearr_33636_33676 = state_33604__$1;
(statearr_33636_33676[(2)] = inst_33594);

(statearr_33636_33676[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33605 === (16))){
var inst_33574 = (state_33604[(2)]);
var inst_33575 = calc_state.call(null);
var inst_33548 = inst_33575;
var state_33604__$1 = (function (){var statearr_33637 = state_33604;
(statearr_33637[(7)] = inst_33548);

(statearr_33637[(18)] = inst_33574);

return statearr_33637;
})();
var statearr_33638_33677 = state_33604__$1;
(statearr_33638_33677[(2)] = null);

(statearr_33638_33677[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33605 === (10))){
var inst_33563 = (state_33604[(8)]);
var inst_33564 = (state_33604[(15)]);
var inst_33562 = (state_33604[(2)]);
var inst_33563__$1 = cljs.core.nth.call(null,inst_33562,(0),null);
var inst_33564__$1 = cljs.core.nth.call(null,inst_33562,(1),null);
var inst_33565 = (inst_33563__$1 == null);
var inst_33566 = cljs.core._EQ_.call(null,inst_33564__$1,change);
var inst_33567 = (inst_33565) || (inst_33566);
var state_33604__$1 = (function (){var statearr_33639 = state_33604;
(statearr_33639[(8)] = inst_33563__$1);

(statearr_33639[(15)] = inst_33564__$1);

return statearr_33639;
})();
if(cljs.core.truth_(inst_33567)){
var statearr_33640_33678 = state_33604__$1;
(statearr_33640_33678[(1)] = (11));

} else {
var statearr_33641_33679 = state_33604__$1;
(statearr_33641_33679[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33605 === (18))){
var inst_33564 = (state_33604[(15)]);
var inst_33558 = (state_33604[(17)]);
var inst_33559 = (state_33604[(16)]);
var inst_33581 = cljs.core.empty_QMARK_.call(null,inst_33559);
var inst_33582 = inst_33558.call(null,inst_33564);
var inst_33583 = cljs.core.not.call(null,inst_33582);
var inst_33584 = (inst_33581) && (inst_33583);
var state_33604__$1 = state_33604;
var statearr_33642_33680 = state_33604__$1;
(statearr_33642_33680[(2)] = inst_33584);

(statearr_33642_33680[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33605 === (8))){
var inst_33548 = (state_33604[(7)]);
var state_33604__$1 = state_33604;
var statearr_33643_33681 = state_33604__$1;
(statearr_33643_33681[(2)] = inst_33548);

(statearr_33643_33681[(1)] = (9));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6581__auto___33651,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6525__auto__,c__6581__auto___33651,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6526__auto__ = null;
var state_machine__6526__auto____0 = (function (){
var statearr_33647 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33647[(0)] = state_machine__6526__auto__);

(statearr_33647[(1)] = (1));

return statearr_33647;
});
var state_machine__6526__auto____1 = (function (state_33604){
while(true){
var ret_value__6527__auto__ = (function (){try{while(true){
var result__6528__auto__ = switch__6525__auto__.call(null,state_33604);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6528__auto__;
}
break;
}
}catch (e33648){if((e33648 instanceof Object)){
var ex__6529__auto__ = e33648;
var statearr_33649_33682 = state_33604;
(statearr_33649_33682[(5)] = ex__6529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33604);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33648;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33683 = state_33604;
state_33604 = G__33683;
continue;
} else {
return ret_value__6527__auto__;
}
break;
}
});
state_machine__6526__auto__ = function(state_33604){
switch(arguments.length){
case 0:
return state_machine__6526__auto____0.call(this);
case 1:
return state_machine__6526__auto____1.call(this,state_33604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6526__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6526__auto____0;
state_machine__6526__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6526__auto____1;
return state_machine__6526__auto__;
})()
;})(switch__6525__auto__,c__6581__auto___33651,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6583__auto__ = (function (){var statearr_33650 = f__6582__auto__.call(null);
(statearr_33650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6581__auto___33651);

return statearr_33650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6583__auto__);
});})(c__6581__auto___33651,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj33685 = {};
return obj33685;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__3785__auto__ = p;
if(and__3785__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__3785__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4441__auto__ = (((p == null))?null:p);
return (function (){var or__3797__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4441__auto__)]);
if(or__3797__auto__){
return or__3797__auto__;
} else {
var or__3797__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__3797__auto____$1){
return or__3797__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__3785__auto__ = p;
if(and__3785__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__3785__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4441__auto__ = (((p == null))?null:p);
return (function (){var or__3797__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4441__auto__)]);
if(or__3797__auto__){
return or__3797__auto__;
} else {
var or__3797__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__3797__auto____$1){
return or__3797__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__3785__auto__ = p;
if(and__3785__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__3785__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4441__auto__ = (((p == null))?null:p);
return (function (){var or__3797__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4441__auto__)]);
if(or__3797__auto__){
return or__3797__auto__;
} else {
var or__3797__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3797__auto____$1){
return or__3797__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__3785__auto__ = p;
if(and__3785__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__3785__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4441__auto__ = (((p == null))?null:p);
return (function (){var or__3797__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4441__auto__)]);
if(or__3797__auto__){
return or__3797__auto__;
} else {
var or__3797__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3797__auto____$1){
return or__3797__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;

/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){
return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3797__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3797__auto__)){
return or__3797__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3797__auto__,mults){
return (function (p1__33686_SHARP_){
if(cljs.core.truth_(p1__33686_SHARP_.call(null,topic))){
return p1__33686_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__33686_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3797__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t33809 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33809 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta33810){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta33810 = meta33810;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33809.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t33809.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t33809.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t33809.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t33809.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t33809.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t33809.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t33809.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33811){
var self__ = this;
var _33811__$1 = this;
return self__.meta33810;
});})(mults,ensure_mult))
;

cljs.core.async.t33809.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33811,meta33810__$1){
var self__ = this;
var _33811__$1 = this;
return (new cljs.core.async.t33809(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta33810__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t33809.cljs$lang$type = true;

cljs.core.async.t33809.cljs$lang$ctorStr = "cljs.core.async/t33809";

cljs.core.async.t33809.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4384__auto__,writer__4385__auto__,opt__4386__auto__){
return cljs.core._write.call(null,writer__4385__auto__,"cljs.core.async/t33809");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t33809 = ((function (mults,ensure_mult){
return (function __GT_t33809(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta33810){
return (new cljs.core.async.t33809(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta33810));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t33809(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/blischalk/node-webkit-apps/hoard/target/base+system+user+dev/cljsbuild-compiler-0/cljs/core/async.cljs"], null)));
})()
;
var c__6581__auto___33931 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6581__auto___33931,mults,ensure_mult,p){
return (function (){
var f__6582__auto__ = (function (){var switch__6525__auto__ = ((function (c__6581__auto___33931,mults,ensure_mult,p){
return (function (state_33883){
var state_val_33884 = (state_33883[(1)]);
if((state_val_33884 === (7))){
var inst_33879 = (state_33883[(2)]);
var state_33883__$1 = state_33883;
var statearr_33885_33932 = state_33883__$1;
(statearr_33885_33932[(2)] = inst_33879);

(statearr_33885_33932[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33884 === (20))){
var state_33883__$1 = state_33883;
var statearr_33886_33933 = state_33883__$1;
(statearr_33886_33933[(2)] = null);

(statearr_33886_33933[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33884 === (1))){
var state_33883__$1 = state_33883;
var statearr_33887_33934 = state_33883__$1;
(statearr_33887_33934[(2)] = null);

(statearr_33887_33934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33884 === (24))){
var inst_33862 = (state_33883[(7)]);
var inst_33871 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_33862);
var state_33883__$1 = state_33883;
var statearr_33888_33935 = state_33883__$1;
(statearr_33888_33935[(2)] = inst_33871);

(statearr_33888_33935[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33884 === (4))){
var inst_33814 = (state_33883[(8)]);
var inst_33814__$1 = (state_33883[(2)]);
var inst_33815 = (inst_33814__$1 == null);
var state_33883__$1 = (function (){var statearr_33889 = state_33883;
(statearr_33889[(8)] = inst_33814__$1);

return statearr_33889;
})();
if(cljs.core.truth_(inst_33815)){
var statearr_33890_33936 = state_33883__$1;
(statearr_33890_33936[(1)] = (5));

} else {
var statearr_33891_33937 = state_33883__$1;
(statearr_33891_33937[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33884 === (15))){
var inst_33856 = (state_33883[(2)]);
var state_33883__$1 = state_33883;
var statearr_33892_33938 = state_33883__$1;
(statearr_33892_33938[(2)] = inst_33856);

(statearr_33892_33938[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33884 === (21))){
var inst_33876 = (state_33883[(2)]);
var state_33883__$1 = (function (){var statearr_33893 = state_33883;
(statearr_33893[(9)] = inst_33876);

return statearr_33893;
})();
var statearr_33894_33939 = state_33883__$1;
(statearr_33894_33939[(2)] = null);

(statearr_33894_33939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33884 === (13))){
var inst_33838 = (state_33883[(10)]);
var inst_33840 = cljs.core.chunked_seq_QMARK_.call(null,inst_33838);
var state_33883__$1 = state_33883;
if(inst_33840){
var statearr_33895_33940 = state_33883__$1;
(statearr_33895_33940[(1)] = (16));

} else {
var statearr_33896_33941 = state_33883__$1;
(statearr_33896_33941[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33884 === (22))){
var inst_33868 = (state_33883[(2)]);
var state_33883__$1 = state_33883;
if(cljs.core.truth_(inst_33868)){
var statearr_33897_33942 = state_33883__$1;
(statearr_33897_33942[(1)] = (23));

} else {
var statearr_33898_33943 = state_33883__$1;
(statearr_33898_33943[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33884 === (6))){
var inst_33864 = (state_33883[(11)]);
var inst_33862 = (state_33883[(7)]);
var inst_33814 = (state_33883[(8)]);
var inst_33862__$1 = topic_fn.call(null,inst_33814);
var inst_33863 = cljs.core.deref.call(null,mults);
var inst_33864__$1 = cljs.core.get.call(null,inst_33863,inst_33862__$1);
var state_33883__$1 = (function (){var statearr_33899 = state_33883;
(statearr_33899[(11)] = inst_33864__$1);

(statearr_33899[(7)] = inst_33862__$1);

return statearr_33899;
})();
if(cljs.core.truth_(inst_33864__$1)){
var statearr_33900_33944 = state_33883__$1;
(statearr_33900_33944[(1)] = (19));

} else {
var statearr_33901_33945 = state_33883__$1;
(statearr_33901_33945[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33884 === (25))){
var inst_33873 = (state_33883[(2)]);
var state_33883__$1 = state_33883;
var statearr_33902_33946 = state_33883__$1;
(statearr_33902_33946[(2)] = inst_33873);

(statearr_33902_33946[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33884 === (17))){
var inst_33838 = (state_33883[(10)]);
var inst_33847 = cljs.core.first.call(null,inst_33838);
var inst_33848 = cljs.core.async.muxch_STAR_.call(null,inst_33847);
var inst_33849 = cljs.core.async.close_BANG_.call(null,inst_33848);
var inst_33850 = cljs.core.next.call(null,inst_33838);
var inst_33824 = inst_33850;
var inst_33825 = null;
var inst_33826 = (0);
var inst_33827 = (0);
var state_33883__$1 = (function (){var statearr_33903 = state_33883;
(statearr_33903[(12)] = inst_33824);

(statearr_33903[(13)] = inst_33826);

(statearr_33903[(14)] = inst_33827);

(statearr_33903[(15)] = inst_33849);

(statearr_33903[(16)] = inst_33825);

return statearr_33903;
})();
var statearr_33904_33947 = state_33883__$1;
(statearr_33904_33947[(2)] = null);

(statearr_33904_33947[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33884 === (3))){
var inst_33881 = (state_33883[(2)]);
var state_33883__$1 = state_33883;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33883__$1,inst_33881);
} else {
if((state_val_33884 === (12))){
var inst_33858 = (state_33883[(2)]);
var state_33883__$1 = state_33883;
var statearr_33905_33948 = state_33883__$1;
(statearr_33905_33948[(2)] = inst_33858);

(statearr_33905_33948[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33884 === (2))){
var state_33883__$1 = state_33883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33883__$1,(4),ch);
} else {
if((state_val_33884 === (23))){
var state_33883__$1 = state_33883;
var statearr_33906_33949 = state_33883__$1;
(statearr_33906_33949[(2)] = null);

(statearr_33906_33949[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33884 === (19))){
var inst_33864 = (state_33883[(11)]);
var inst_33814 = (state_33883[(8)]);
var inst_33866 = cljs.core.async.muxch_STAR_.call(null,inst_33864);
var state_33883__$1 = state_33883;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33883__$1,(22),inst_33866,inst_33814);
} else {
if((state_val_33884 === (11))){
var inst_33824 = (state_33883[(12)]);
var inst_33838 = (state_33883[(10)]);
var inst_33838__$1 = cljs.core.seq.call(null,inst_33824);
var state_33883__$1 = (function (){var statearr_33907 = state_33883;
(statearr_33907[(10)] = inst_33838__$1);

return statearr_33907;
})();
if(inst_33838__$1){
var statearr_33908_33950 = state_33883__$1;
(statearr_33908_33950[(1)] = (13));

} else {
var statearr_33909_33951 = state_33883__$1;
(statearr_33909_33951[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33884 === (9))){
var inst_33860 = (state_33883[(2)]);
var state_33883__$1 = state_33883;
var statearr_33910_33952 = state_33883__$1;
(statearr_33910_33952[(2)] = inst_33860);

(statearr_33910_33952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33884 === (5))){
var inst_33821 = cljs.core.deref.call(null,mults);
var inst_33822 = cljs.core.vals.call(null,inst_33821);
var inst_33823 = cljs.core.seq.call(null,inst_33822);
var inst_33824 = inst_33823;
var inst_33825 = null;
var inst_33826 = (0);
var inst_33827 = (0);
var state_33883__$1 = (function (){var statearr_33911 = state_33883;
(statearr_33911[(12)] = inst_33824);

(statearr_33911[(13)] = inst_33826);

(statearr_33911[(14)] = inst_33827);

(statearr_33911[(16)] = inst_33825);

return statearr_33911;
})();
var statearr_33912_33953 = state_33883__$1;
(statearr_33912_33953[(2)] = null);

(statearr_33912_33953[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33884 === (14))){
var state_33883__$1 = state_33883;
var statearr_33916_33954 = state_33883__$1;
(statearr_33916_33954[(2)] = null);

(statearr_33916_33954[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33884 === (16))){
var inst_33838 = (state_33883[(10)]);
var inst_33842 = cljs.core.chunk_first.call(null,inst_33838);
var inst_33843 = cljs.core.chunk_rest.call(null,inst_33838);
var inst_33844 = cljs.core.count.call(null,inst_33842);
var inst_33824 = inst_33843;
var inst_33825 = inst_33842;
var inst_33826 = inst_33844;
var inst_33827 = (0);
var state_33883__$1 = (function (){var statearr_33917 = state_33883;
(statearr_33917[(12)] = inst_33824);

(statearr_33917[(13)] = inst_33826);

(statearr_33917[(14)] = inst_33827);

(statearr_33917[(16)] = inst_33825);

return statearr_33917;
})();
var statearr_33918_33955 = state_33883__$1;
(statearr_33918_33955[(2)] = null);

(statearr_33918_33955[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33884 === (10))){
var inst_33824 = (state_33883[(12)]);
var inst_33826 = (state_33883[(13)]);
var inst_33827 = (state_33883[(14)]);
var inst_33825 = (state_33883[(16)]);
var inst_33832 = cljs.core._nth.call(null,inst_33825,inst_33827);
var inst_33833 = cljs.core.async.muxch_STAR_.call(null,inst_33832);
var inst_33834 = cljs.core.async.close_BANG_.call(null,inst_33833);
var inst_33835 = (inst_33827 + (1));
var tmp33913 = inst_33824;
var tmp33914 = inst_33826;
var tmp33915 = inst_33825;
var inst_33824__$1 = tmp33913;
var inst_33825__$1 = tmp33915;
var inst_33826__$1 = tmp33914;
var inst_33827__$1 = inst_33835;
var state_33883__$1 = (function (){var statearr_33919 = state_33883;
(statearr_33919[(12)] = inst_33824__$1);

(statearr_33919[(13)] = inst_33826__$1);

(statearr_33919[(14)] = inst_33827__$1);

(statearr_33919[(17)] = inst_33834);

(statearr_33919[(16)] = inst_33825__$1);

return statearr_33919;
})();
var statearr_33920_33956 = state_33883__$1;
(statearr_33920_33956[(2)] = null);

(statearr_33920_33956[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33884 === (18))){
var inst_33853 = (state_33883[(2)]);
var state_33883__$1 = state_33883;
var statearr_33921_33957 = state_33883__$1;
(statearr_33921_33957[(2)] = inst_33853);

(statearr_33921_33957[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33884 === (8))){
var inst_33826 = (state_33883[(13)]);
var inst_33827 = (state_33883[(14)]);
var inst_33829 = (inst_33827 < inst_33826);
var inst_33830 = inst_33829;
var state_33883__$1 = state_33883;
if(cljs.core.truth_(inst_33830)){
var statearr_33922_33958 = state_33883__$1;
(statearr_33922_33958[(1)] = (10));

} else {
var statearr_33923_33959 = state_33883__$1;
(statearr_33923_33959[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6581__auto___33931,mults,ensure_mult,p))
;
return ((function (switch__6525__auto__,c__6581__auto___33931,mults,ensure_mult,p){
return (function() {
var state_machine__6526__auto__ = null;
var state_machine__6526__auto____0 = (function (){
var statearr_33927 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33927[(0)] = state_machine__6526__auto__);

(statearr_33927[(1)] = (1));

return statearr_33927;
});
var state_machine__6526__auto____1 = (function (state_33883){
while(true){
var ret_value__6527__auto__ = (function (){try{while(true){
var result__6528__auto__ = switch__6525__auto__.call(null,state_33883);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6528__auto__;
}
break;
}
}catch (e33928){if((e33928 instanceof Object)){
var ex__6529__auto__ = e33928;
var statearr_33929_33960 = state_33883;
(statearr_33929_33960[(5)] = ex__6529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33928;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33961 = state_33883;
state_33883 = G__33961;
continue;
} else {
return ret_value__6527__auto__;
}
break;
}
});
state_machine__6526__auto__ = function(state_33883){
switch(arguments.length){
case 0:
return state_machine__6526__auto____0.call(this);
case 1:
return state_machine__6526__auto____1.call(this,state_33883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6526__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6526__auto____0;
state_machine__6526__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6526__auto____1;
return state_machine__6526__auto__;
})()
;})(switch__6525__auto__,c__6581__auto___33931,mults,ensure_mult,p))
})();
var state__6583__auto__ = (function (){var statearr_33930 = f__6582__auto__.call(null);
(statearr_33930[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6581__auto___33931);

return statearr_33930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6583__auto__);
});})(c__6581__auto___33931,mults,ensure_mult,p))
);


return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){
return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){
return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__6581__auto___34098 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6581__auto___34098,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6582__auto__ = (function (){var switch__6525__auto__ = ((function (c__6581__auto___34098,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_34068){
var state_val_34069 = (state_34068[(1)]);
if((state_val_34069 === (7))){
var state_34068__$1 = state_34068;
var statearr_34070_34099 = state_34068__$1;
(statearr_34070_34099[(2)] = null);

(statearr_34070_34099[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34069 === (1))){
var state_34068__$1 = state_34068;
var statearr_34071_34100 = state_34068__$1;
(statearr_34071_34100[(2)] = null);

(statearr_34071_34100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34069 === (4))){
var inst_34032 = (state_34068[(7)]);
var inst_34034 = (inst_34032 < cnt);
var state_34068__$1 = state_34068;
if(cljs.core.truth_(inst_34034)){
var statearr_34072_34101 = state_34068__$1;
(statearr_34072_34101[(1)] = (6));

} else {
var statearr_34073_34102 = state_34068__$1;
(statearr_34073_34102[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34069 === (15))){
var inst_34064 = (state_34068[(2)]);
var state_34068__$1 = state_34068;
var statearr_34074_34103 = state_34068__$1;
(statearr_34074_34103[(2)] = inst_34064);

(statearr_34074_34103[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34069 === (13))){
var inst_34057 = cljs.core.async.close_BANG_.call(null,out);
var state_34068__$1 = state_34068;
var statearr_34075_34104 = state_34068__$1;
(statearr_34075_34104[(2)] = inst_34057);

(statearr_34075_34104[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34069 === (6))){
var state_34068__$1 = state_34068;
var statearr_34076_34105 = state_34068__$1;
(statearr_34076_34105[(2)] = null);

(statearr_34076_34105[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34069 === (3))){
var inst_34066 = (state_34068[(2)]);
var state_34068__$1 = state_34068;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34068__$1,inst_34066);
} else {
if((state_val_34069 === (12))){
var inst_34054 = (state_34068[(8)]);
var inst_34054__$1 = (state_34068[(2)]);
var inst_34055 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_34054__$1);
var state_34068__$1 = (function (){var statearr_34077 = state_34068;
(statearr_34077[(8)] = inst_34054__$1);

return statearr_34077;
})();
if(cljs.core.truth_(inst_34055)){
var statearr_34078_34106 = state_34068__$1;
(statearr_34078_34106[(1)] = (13));

} else {
var statearr_34079_34107 = state_34068__$1;
(statearr_34079_34107[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34069 === (2))){
var inst_34031 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_34032 = (0);
var state_34068__$1 = (function (){var statearr_34080 = state_34068;
(statearr_34080[(7)] = inst_34032);

(statearr_34080[(9)] = inst_34031);

return statearr_34080;
})();
var statearr_34081_34108 = state_34068__$1;
(statearr_34081_34108[(2)] = null);

(statearr_34081_34108[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34069 === (11))){
var inst_34032 = (state_34068[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34068,(10),Object,null,(9));
var inst_34041 = chs__$1.call(null,inst_34032);
var inst_34042 = done.call(null,inst_34032);
var inst_34043 = cljs.core.async.take_BANG_.call(null,inst_34041,inst_34042);
var state_34068__$1 = state_34068;
var statearr_34082_34109 = state_34068__$1;
(statearr_34082_34109[(2)] = inst_34043);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34068__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34069 === (9))){
var inst_34032 = (state_34068[(7)]);
var inst_34045 = (state_34068[(2)]);
var inst_34046 = (inst_34032 + (1));
var inst_34032__$1 = inst_34046;
var state_34068__$1 = (function (){var statearr_34083 = state_34068;
(statearr_34083[(7)] = inst_34032__$1);

(statearr_34083[(10)] = inst_34045);

return statearr_34083;
})();
var statearr_34084_34110 = state_34068__$1;
(statearr_34084_34110[(2)] = null);

(statearr_34084_34110[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34069 === (5))){
var inst_34052 = (state_34068[(2)]);
var state_34068__$1 = (function (){var statearr_34085 = state_34068;
(statearr_34085[(11)] = inst_34052);

return statearr_34085;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34068__$1,(12),dchan);
} else {
if((state_val_34069 === (14))){
var inst_34054 = (state_34068[(8)]);
var inst_34059 = cljs.core.apply.call(null,f,inst_34054);
var state_34068__$1 = state_34068;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34068__$1,(16),out,inst_34059);
} else {
if((state_val_34069 === (16))){
var inst_34061 = (state_34068[(2)]);
var state_34068__$1 = (function (){var statearr_34086 = state_34068;
(statearr_34086[(12)] = inst_34061);

return statearr_34086;
})();
var statearr_34087_34111 = state_34068__$1;
(statearr_34087_34111[(2)] = null);

(statearr_34087_34111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34069 === (10))){
var inst_34036 = (state_34068[(2)]);
var inst_34037 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_34068__$1 = (function (){var statearr_34088 = state_34068;
(statearr_34088[(13)] = inst_34036);

return statearr_34088;
})();
var statearr_34089_34112 = state_34068__$1;
(statearr_34089_34112[(2)] = inst_34037);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34068__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34069 === (8))){
var inst_34050 = (state_34068[(2)]);
var state_34068__$1 = state_34068;
var statearr_34090_34113 = state_34068__$1;
(statearr_34090_34113[(2)] = inst_34050);

(statearr_34090_34113[(1)] = (5));


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
}
}
}
}
}
}
}
}
}
});})(c__6581__auto___34098,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6525__auto__,c__6581__auto___34098,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6526__auto__ = null;
var state_machine__6526__auto____0 = (function (){
var statearr_34094 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34094[(0)] = state_machine__6526__auto__);

(statearr_34094[(1)] = (1));

return statearr_34094;
});
var state_machine__6526__auto____1 = (function (state_34068){
while(true){
var ret_value__6527__auto__ = (function (){try{while(true){
var result__6528__auto__ = switch__6525__auto__.call(null,state_34068);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6528__auto__;
}
break;
}
}catch (e34095){if((e34095 instanceof Object)){
var ex__6529__auto__ = e34095;
var statearr_34096_34114 = state_34068;
(statearr_34096_34114[(5)] = ex__6529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34068);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34095;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34115 = state_34068;
state_34068 = G__34115;
continue;
} else {
return ret_value__6527__auto__;
}
break;
}
});
state_machine__6526__auto__ = function(state_34068){
switch(arguments.length){
case 0:
return state_machine__6526__auto____0.call(this);
case 1:
return state_machine__6526__auto____1.call(this,state_34068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6526__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6526__auto____0;
state_machine__6526__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6526__auto____1;
return state_machine__6526__auto__;
})()
;})(switch__6525__auto__,c__6581__auto___34098,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6583__auto__ = (function (){var statearr_34097 = f__6582__auto__.call(null);
(statearr_34097[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6581__auto___34098);

return statearr_34097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6583__auto__);
});})(c__6581__auto___34098,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){
return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6581__auto___34223 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6581__auto___34223,out){
return (function (){
var f__6582__auto__ = (function (){var switch__6525__auto__ = ((function (c__6581__auto___34223,out){
return (function (state_34199){
var state_val_34200 = (state_34199[(1)]);
if((state_val_34200 === (7))){
var inst_34178 = (state_34199[(7)]);
var inst_34179 = (state_34199[(8)]);
var inst_34178__$1 = (state_34199[(2)]);
var inst_34179__$1 = cljs.core.nth.call(null,inst_34178__$1,(0),null);
var inst_34180 = cljs.core.nth.call(null,inst_34178__$1,(1),null);
var inst_34181 = (inst_34179__$1 == null);
var state_34199__$1 = (function (){var statearr_34201 = state_34199;
(statearr_34201[(9)] = inst_34180);

(statearr_34201[(7)] = inst_34178__$1);

(statearr_34201[(8)] = inst_34179__$1);

return statearr_34201;
})();
if(cljs.core.truth_(inst_34181)){
var statearr_34202_34224 = state_34199__$1;
(statearr_34202_34224[(1)] = (8));

} else {
var statearr_34203_34225 = state_34199__$1;
(statearr_34203_34225[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34200 === (1))){
var inst_34170 = cljs.core.vec.call(null,chs);
var inst_34171 = inst_34170;
var state_34199__$1 = (function (){var statearr_34204 = state_34199;
(statearr_34204[(10)] = inst_34171);

return statearr_34204;
})();
var statearr_34205_34226 = state_34199__$1;
(statearr_34205_34226[(2)] = null);

(statearr_34205_34226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34200 === (4))){
var inst_34171 = (state_34199[(10)]);
var state_34199__$1 = state_34199;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34199__$1,(7),inst_34171);
} else {
if((state_val_34200 === (6))){
var inst_34195 = (state_34199[(2)]);
var state_34199__$1 = state_34199;
var statearr_34206_34227 = state_34199__$1;
(statearr_34206_34227[(2)] = inst_34195);

(statearr_34206_34227[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34200 === (3))){
var inst_34197 = (state_34199[(2)]);
var state_34199__$1 = state_34199;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34199__$1,inst_34197);
} else {
if((state_val_34200 === (2))){
var inst_34171 = (state_34199[(10)]);
var inst_34173 = cljs.core.count.call(null,inst_34171);
var inst_34174 = (inst_34173 > (0));
var state_34199__$1 = state_34199;
if(cljs.core.truth_(inst_34174)){
var statearr_34208_34228 = state_34199__$1;
(statearr_34208_34228[(1)] = (4));

} else {
var statearr_34209_34229 = state_34199__$1;
(statearr_34209_34229[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34200 === (11))){
var inst_34171 = (state_34199[(10)]);
var inst_34188 = (state_34199[(2)]);
var tmp34207 = inst_34171;
var inst_34171__$1 = tmp34207;
var state_34199__$1 = (function (){var statearr_34210 = state_34199;
(statearr_34210[(10)] = inst_34171__$1);

(statearr_34210[(11)] = inst_34188);

return statearr_34210;
})();
var statearr_34211_34230 = state_34199__$1;
(statearr_34211_34230[(2)] = null);

(statearr_34211_34230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34200 === (9))){
var inst_34179 = (state_34199[(8)]);
var state_34199__$1 = state_34199;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34199__$1,(11),out,inst_34179);
} else {
if((state_val_34200 === (5))){
var inst_34193 = cljs.core.async.close_BANG_.call(null,out);
var state_34199__$1 = state_34199;
var statearr_34212_34231 = state_34199__$1;
(statearr_34212_34231[(2)] = inst_34193);

(statearr_34212_34231[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34200 === (10))){
var inst_34191 = (state_34199[(2)]);
var state_34199__$1 = state_34199;
var statearr_34213_34232 = state_34199__$1;
(statearr_34213_34232[(2)] = inst_34191);

(statearr_34213_34232[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34200 === (8))){
var inst_34171 = (state_34199[(10)]);
var inst_34180 = (state_34199[(9)]);
var inst_34178 = (state_34199[(7)]);
var inst_34179 = (state_34199[(8)]);
var inst_34183 = (function (){var c = inst_34180;
var v = inst_34179;
var vec__34176 = inst_34178;
var cs = inst_34171;
return ((function (c,v,vec__34176,cs,inst_34171,inst_34180,inst_34178,inst_34179,state_val_34200,c__6581__auto___34223,out){
return (function (p1__34116_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__34116_SHARP_);
});
;})(c,v,vec__34176,cs,inst_34171,inst_34180,inst_34178,inst_34179,state_val_34200,c__6581__auto___34223,out))
})();
var inst_34184 = cljs.core.filterv.call(null,inst_34183,inst_34171);
var inst_34171__$1 = inst_34184;
var state_34199__$1 = (function (){var statearr_34214 = state_34199;
(statearr_34214[(10)] = inst_34171__$1);

return statearr_34214;
})();
var statearr_34215_34233 = state_34199__$1;
(statearr_34215_34233[(2)] = null);

(statearr_34215_34233[(1)] = (2));


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
}
}
}
}
});})(c__6581__auto___34223,out))
;
return ((function (switch__6525__auto__,c__6581__auto___34223,out){
return (function() {
var state_machine__6526__auto__ = null;
var state_machine__6526__auto____0 = (function (){
var statearr_34219 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34219[(0)] = state_machine__6526__auto__);

(statearr_34219[(1)] = (1));

return statearr_34219;
});
var state_machine__6526__auto____1 = (function (state_34199){
while(true){
var ret_value__6527__auto__ = (function (){try{while(true){
var result__6528__auto__ = switch__6525__auto__.call(null,state_34199);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6528__auto__;
}
break;
}
}catch (e34220){if((e34220 instanceof Object)){
var ex__6529__auto__ = e34220;
var statearr_34221_34234 = state_34199;
(statearr_34221_34234[(5)] = ex__6529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34199);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34220;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34235 = state_34199;
state_34199 = G__34235;
continue;
} else {
return ret_value__6527__auto__;
}
break;
}
});
state_machine__6526__auto__ = function(state_34199){
switch(arguments.length){
case 0:
return state_machine__6526__auto____0.call(this);
case 1:
return state_machine__6526__auto____1.call(this,state_34199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6526__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6526__auto____0;
state_machine__6526__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6526__auto____1;
return state_machine__6526__auto__;
})()
;})(switch__6525__auto__,c__6581__auto___34223,out))
})();
var state__6583__auto__ = (function (){var statearr_34222 = f__6582__auto__.call(null);
(statearr_34222[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6581__auto___34223);

return statearr_34222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6583__auto__);
});})(c__6581__auto___34223,out))
);


return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6581__auto___34328 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6581__auto___34328,out){
return (function (){
var f__6582__auto__ = (function (){var switch__6525__auto__ = ((function (c__6581__auto___34328,out){
return (function (state_34305){
var state_val_34306 = (state_34305[(1)]);
if((state_val_34306 === (7))){
var inst_34287 = (state_34305[(7)]);
var inst_34287__$1 = (state_34305[(2)]);
var inst_34288 = (inst_34287__$1 == null);
var inst_34289 = cljs.core.not.call(null,inst_34288);
var state_34305__$1 = (function (){var statearr_34307 = state_34305;
(statearr_34307[(7)] = inst_34287__$1);

return statearr_34307;
})();
if(inst_34289){
var statearr_34308_34329 = state_34305__$1;
(statearr_34308_34329[(1)] = (8));

} else {
var statearr_34309_34330 = state_34305__$1;
(statearr_34309_34330[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34306 === (1))){
var inst_34282 = (0);
var state_34305__$1 = (function (){var statearr_34310 = state_34305;
(statearr_34310[(8)] = inst_34282);

return statearr_34310;
})();
var statearr_34311_34331 = state_34305__$1;
(statearr_34311_34331[(2)] = null);

(statearr_34311_34331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34306 === (4))){
var state_34305__$1 = state_34305;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34305__$1,(7),ch);
} else {
if((state_val_34306 === (6))){
var inst_34300 = (state_34305[(2)]);
var state_34305__$1 = state_34305;
var statearr_34312_34332 = state_34305__$1;
(statearr_34312_34332[(2)] = inst_34300);

(statearr_34312_34332[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34306 === (3))){
var inst_34302 = (state_34305[(2)]);
var inst_34303 = cljs.core.async.close_BANG_.call(null,out);
var state_34305__$1 = (function (){var statearr_34313 = state_34305;
(statearr_34313[(9)] = inst_34302);

return statearr_34313;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34305__$1,inst_34303);
} else {
if((state_val_34306 === (2))){
var inst_34282 = (state_34305[(8)]);
var inst_34284 = (inst_34282 < n);
var state_34305__$1 = state_34305;
if(cljs.core.truth_(inst_34284)){
var statearr_34314_34333 = state_34305__$1;
(statearr_34314_34333[(1)] = (4));

} else {
var statearr_34315_34334 = state_34305__$1;
(statearr_34315_34334[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34306 === (11))){
var inst_34282 = (state_34305[(8)]);
var inst_34292 = (state_34305[(2)]);
var inst_34293 = (inst_34282 + (1));
var inst_34282__$1 = inst_34293;
var state_34305__$1 = (function (){var statearr_34316 = state_34305;
(statearr_34316[(10)] = inst_34292);

(statearr_34316[(8)] = inst_34282__$1);

return statearr_34316;
})();
var statearr_34317_34335 = state_34305__$1;
(statearr_34317_34335[(2)] = null);

(statearr_34317_34335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34306 === (9))){
var state_34305__$1 = state_34305;
var statearr_34318_34336 = state_34305__$1;
(statearr_34318_34336[(2)] = null);

(statearr_34318_34336[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34306 === (5))){
var state_34305__$1 = state_34305;
var statearr_34319_34337 = state_34305__$1;
(statearr_34319_34337[(2)] = null);

(statearr_34319_34337[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34306 === (10))){
var inst_34297 = (state_34305[(2)]);
var state_34305__$1 = state_34305;
var statearr_34320_34338 = state_34305__$1;
(statearr_34320_34338[(2)] = inst_34297);

(statearr_34320_34338[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34306 === (8))){
var inst_34287 = (state_34305[(7)]);
var state_34305__$1 = state_34305;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34305__$1,(11),out,inst_34287);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6581__auto___34328,out))
;
return ((function (switch__6525__auto__,c__6581__auto___34328,out){
return (function() {
var state_machine__6526__auto__ = null;
var state_machine__6526__auto____0 = (function (){
var statearr_34324 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34324[(0)] = state_machine__6526__auto__);

(statearr_34324[(1)] = (1));

return statearr_34324;
});
var state_machine__6526__auto____1 = (function (state_34305){
while(true){
var ret_value__6527__auto__ = (function (){try{while(true){
var result__6528__auto__ = switch__6525__auto__.call(null,state_34305);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6528__auto__;
}
break;
}
}catch (e34325){if((e34325 instanceof Object)){
var ex__6529__auto__ = e34325;
var statearr_34326_34339 = state_34305;
(statearr_34326_34339[(5)] = ex__6529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34325;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34340 = state_34305;
state_34305 = G__34340;
continue;
} else {
return ret_value__6527__auto__;
}
break;
}
});
state_machine__6526__auto__ = function(state_34305){
switch(arguments.length){
case 0:
return state_machine__6526__auto____0.call(this);
case 1:
return state_machine__6526__auto____1.call(this,state_34305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6526__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6526__auto____0;
state_machine__6526__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6526__auto____1;
return state_machine__6526__auto__;
})()
;})(switch__6525__auto__,c__6581__auto___34328,out))
})();
var state__6583__auto__ = (function (){var statearr_34327 = f__6582__auto__.call(null);
(statearr_34327[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6581__auto___34328);

return statearr_34327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6583__auto__);
});})(c__6581__auto___34328,out))
);


return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t34348 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t34348 = (function (ch,f,map_LT_,meta34349){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta34349 = meta34349;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34348.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t34348.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t34348.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t34348.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t34351 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t34351 = (function (fn1,_,meta34349,map_LT_,f,ch,meta34352){
this.fn1 = fn1;
this._ = _;
this.meta34349 = meta34349;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta34352 = meta34352;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34351.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t34351.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t34351.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34341_SHARP_){
return f1.call(null,(((p1__34341_SHARP_ == null))?null:self__.f.call(null,p1__34341_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t34351.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34353){
var self__ = this;
var _34353__$1 = this;
return self__.meta34352;
});})(___$1))
;

cljs.core.async.t34351.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34353,meta34352__$1){
var self__ = this;
var _34353__$1 = this;
return (new cljs.core.async.t34351(self__.fn1,self__._,self__.meta34349,self__.map_LT_,self__.f,self__.ch,meta34352__$1));
});})(___$1))
;

cljs.core.async.t34351.cljs$lang$type = true;

cljs.core.async.t34351.cljs$lang$ctorStr = "cljs.core.async/t34351";

cljs.core.async.t34351.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4384__auto__,writer__4385__auto__,opt__4386__auto__){
return cljs.core._write.call(null,writer__4385__auto__,"cljs.core.async/t34351");
});})(___$1))
;

cljs.core.async.__GT_t34351 = ((function (___$1){
return (function __GT_t34351(fn1__$1,___$2,meta34349__$1,map_LT___$1,f__$1,ch__$1,meta34352){
return (new cljs.core.async.t34351(fn1__$1,___$2,meta34349__$1,map_LT___$1,f__$1,ch__$1,meta34352));
});})(___$1))
;

}

return (new cljs.core.async.t34351(fn1,___$1,self__.meta34349,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/blischalk/node-webkit-apps/hoard/target/base+system+user+dev/cljsbuild-compiler-0/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__3785__auto__ = ret;
if(cljs.core.truth_(and__3785__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3785__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t34348.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t34348.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t34348.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t34348.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34350){
var self__ = this;
var _34350__$1 = this;
return self__.meta34349;
});

cljs.core.async.t34348.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34350,meta34349__$1){
var self__ = this;
var _34350__$1 = this;
return (new cljs.core.async.t34348(self__.ch,self__.f,self__.map_LT_,meta34349__$1));
});

cljs.core.async.t34348.cljs$lang$type = true;

cljs.core.async.t34348.cljs$lang$ctorStr = "cljs.core.async/t34348";

cljs.core.async.t34348.cljs$lang$ctorPrWriter = (function (this__4384__auto__,writer__4385__auto__,opt__4386__auto__){
return cljs.core._write.call(null,writer__4385__auto__,"cljs.core.async/t34348");
});

cljs.core.async.__GT_t34348 = (function __GT_t34348(ch__$1,f__$1,map_LT___$1,meta34349){
return (new cljs.core.async.t34348(ch__$1,f__$1,map_LT___$1,meta34349));
});

}

return (new cljs.core.async.t34348(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/blischalk/node-webkit-apps/hoard/target/base+system+user+dev/cljsbuild-compiler-0/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t34357 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t34357 = (function (ch,f,map_GT_,meta34358){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta34358 = meta34358;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34357.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t34357.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t34357.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t34357.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t34357.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t34357.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t34357.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34359){
var self__ = this;
var _34359__$1 = this;
return self__.meta34358;
});

cljs.core.async.t34357.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34359,meta34358__$1){
var self__ = this;
var _34359__$1 = this;
return (new cljs.core.async.t34357(self__.ch,self__.f,self__.map_GT_,meta34358__$1));
});

cljs.core.async.t34357.cljs$lang$type = true;

cljs.core.async.t34357.cljs$lang$ctorStr = "cljs.core.async/t34357";

cljs.core.async.t34357.cljs$lang$ctorPrWriter = (function (this__4384__auto__,writer__4385__auto__,opt__4386__auto__){
return cljs.core._write.call(null,writer__4385__auto__,"cljs.core.async/t34357");
});

cljs.core.async.__GT_t34357 = (function __GT_t34357(ch__$1,f__$1,map_GT___$1,meta34358){
return (new cljs.core.async.t34357(ch__$1,f__$1,map_GT___$1,meta34358));
});

}

return (new cljs.core.async.t34357(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/blischalk/node-webkit-apps/hoard/target/base+system+user+dev/cljsbuild-compiler-0/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t34363 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t34363 = (function (ch,p,filter_GT_,meta34364){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta34364 = meta34364;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34363.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t34363.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t34363.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t34363.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t34363.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t34363.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t34363.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t34363.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34365){
var self__ = this;
var _34365__$1 = this;
return self__.meta34364;
});

cljs.core.async.t34363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34365,meta34364__$1){
var self__ = this;
var _34365__$1 = this;
return (new cljs.core.async.t34363(self__.ch,self__.p,self__.filter_GT_,meta34364__$1));
});

cljs.core.async.t34363.cljs$lang$type = true;

cljs.core.async.t34363.cljs$lang$ctorStr = "cljs.core.async/t34363";

cljs.core.async.t34363.cljs$lang$ctorPrWriter = (function (this__4384__auto__,writer__4385__auto__,opt__4386__auto__){
return cljs.core._write.call(null,writer__4385__auto__,"cljs.core.async/t34363");
});

cljs.core.async.__GT_t34363 = (function __GT_t34363(ch__$1,p__$1,filter_GT___$1,meta34364){
return (new cljs.core.async.t34363(ch__$1,p__$1,filter_GT___$1,meta34364));
});

}

return (new cljs.core.async.t34363(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/blischalk/node-webkit-apps/hoard/target/base+system+user+dev/cljsbuild-compiler-0/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6581__auto___34448 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6581__auto___34448,out){
return (function (){
var f__6582__auto__ = (function (){var switch__6525__auto__ = ((function (c__6581__auto___34448,out){
return (function (state_34427){
var state_val_34428 = (state_34427[(1)]);
if((state_val_34428 === (7))){
var inst_34423 = (state_34427[(2)]);
var state_34427__$1 = state_34427;
var statearr_34429_34449 = state_34427__$1;
(statearr_34429_34449[(2)] = inst_34423);

(statearr_34429_34449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34428 === (1))){
var state_34427__$1 = state_34427;
var statearr_34430_34450 = state_34427__$1;
(statearr_34430_34450[(2)] = null);

(statearr_34430_34450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34428 === (4))){
var inst_34409 = (state_34427[(7)]);
var inst_34409__$1 = (state_34427[(2)]);
var inst_34410 = (inst_34409__$1 == null);
var state_34427__$1 = (function (){var statearr_34431 = state_34427;
(statearr_34431[(7)] = inst_34409__$1);

return statearr_34431;
})();
if(cljs.core.truth_(inst_34410)){
var statearr_34432_34451 = state_34427__$1;
(statearr_34432_34451[(1)] = (5));

} else {
var statearr_34433_34452 = state_34427__$1;
(statearr_34433_34452[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34428 === (6))){
var inst_34409 = (state_34427[(7)]);
var inst_34414 = p.call(null,inst_34409);
var state_34427__$1 = state_34427;
if(cljs.core.truth_(inst_34414)){
var statearr_34434_34453 = state_34427__$1;
(statearr_34434_34453[(1)] = (8));

} else {
var statearr_34435_34454 = state_34427__$1;
(statearr_34435_34454[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34428 === (3))){
var inst_34425 = (state_34427[(2)]);
var state_34427__$1 = state_34427;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34427__$1,inst_34425);
} else {
if((state_val_34428 === (2))){
var state_34427__$1 = state_34427;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34427__$1,(4),ch);
} else {
if((state_val_34428 === (11))){
var inst_34417 = (state_34427[(2)]);
var state_34427__$1 = state_34427;
var statearr_34436_34455 = state_34427__$1;
(statearr_34436_34455[(2)] = inst_34417);

(statearr_34436_34455[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34428 === (9))){
var state_34427__$1 = state_34427;
var statearr_34437_34456 = state_34427__$1;
(statearr_34437_34456[(2)] = null);

(statearr_34437_34456[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34428 === (5))){
var inst_34412 = cljs.core.async.close_BANG_.call(null,out);
var state_34427__$1 = state_34427;
var statearr_34438_34457 = state_34427__$1;
(statearr_34438_34457[(2)] = inst_34412);

(statearr_34438_34457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34428 === (10))){
var inst_34420 = (state_34427[(2)]);
var state_34427__$1 = (function (){var statearr_34439 = state_34427;
(statearr_34439[(8)] = inst_34420);

return statearr_34439;
})();
var statearr_34440_34458 = state_34427__$1;
(statearr_34440_34458[(2)] = null);

(statearr_34440_34458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34428 === (8))){
var inst_34409 = (state_34427[(7)]);
var state_34427__$1 = state_34427;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34427__$1,(11),out,inst_34409);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6581__auto___34448,out))
;
return ((function (switch__6525__auto__,c__6581__auto___34448,out){
return (function() {
var state_machine__6526__auto__ = null;
var state_machine__6526__auto____0 = (function (){
var statearr_34444 = [null,null,null,null,null,null,null,null,null];
(statearr_34444[(0)] = state_machine__6526__auto__);

(statearr_34444[(1)] = (1));

return statearr_34444;
});
var state_machine__6526__auto____1 = (function (state_34427){
while(true){
var ret_value__6527__auto__ = (function (){try{while(true){
var result__6528__auto__ = switch__6525__auto__.call(null,state_34427);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6528__auto__;
}
break;
}
}catch (e34445){if((e34445 instanceof Object)){
var ex__6529__auto__ = e34445;
var statearr_34446_34459 = state_34427;
(statearr_34446_34459[(5)] = ex__6529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34427);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34445;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34460 = state_34427;
state_34427 = G__34460;
continue;
} else {
return ret_value__6527__auto__;
}
break;
}
});
state_machine__6526__auto__ = function(state_34427){
switch(arguments.length){
case 0:
return state_machine__6526__auto____0.call(this);
case 1:
return state_machine__6526__auto____1.call(this,state_34427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6526__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6526__auto____0;
state_machine__6526__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6526__auto____1;
return state_machine__6526__auto__;
})()
;})(switch__6525__auto__,c__6581__auto___34448,out))
})();
var state__6583__auto__ = (function (){var statearr_34447 = f__6582__auto__.call(null);
(statearr_34447[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6581__auto___34448);

return statearr_34447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6583__auto__);
});})(c__6581__auto___34448,out))
);


return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){
return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__6581__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6581__auto__){
return (function (){
var f__6582__auto__ = (function (){var switch__6525__auto__ = ((function (c__6581__auto__){
return (function (state_34626){
var state_val_34627 = (state_34626[(1)]);
if((state_val_34627 === (7))){
var inst_34622 = (state_34626[(2)]);
var state_34626__$1 = state_34626;
var statearr_34628_34669 = state_34626__$1;
(statearr_34628_34669[(2)] = inst_34622);

(statearr_34628_34669[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34627 === (20))){
var inst_34592 = (state_34626[(7)]);
var inst_34603 = (state_34626[(2)]);
var inst_34604 = cljs.core.next.call(null,inst_34592);
var inst_34578 = inst_34604;
var inst_34579 = null;
var inst_34580 = (0);
var inst_34581 = (0);
var state_34626__$1 = (function (){var statearr_34629 = state_34626;
(statearr_34629[(8)] = inst_34579);

(statearr_34629[(9)] = inst_34603);

(statearr_34629[(10)] = inst_34581);

(statearr_34629[(11)] = inst_34578);

(statearr_34629[(12)] = inst_34580);

return statearr_34629;
})();
var statearr_34630_34670 = state_34626__$1;
(statearr_34630_34670[(2)] = null);

(statearr_34630_34670[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34627 === (1))){
var state_34626__$1 = state_34626;
var statearr_34631_34671 = state_34626__$1;
(statearr_34631_34671[(2)] = null);

(statearr_34631_34671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34627 === (4))){
var inst_34567 = (state_34626[(13)]);
var inst_34567__$1 = (state_34626[(2)]);
var inst_34568 = (inst_34567__$1 == null);
var state_34626__$1 = (function (){var statearr_34632 = state_34626;
(statearr_34632[(13)] = inst_34567__$1);

return statearr_34632;
})();
if(cljs.core.truth_(inst_34568)){
var statearr_34633_34672 = state_34626__$1;
(statearr_34633_34672[(1)] = (5));

} else {
var statearr_34634_34673 = state_34626__$1;
(statearr_34634_34673[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34627 === (15))){
var state_34626__$1 = state_34626;
var statearr_34638_34674 = state_34626__$1;
(statearr_34638_34674[(2)] = null);

(statearr_34638_34674[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34627 === (21))){
var state_34626__$1 = state_34626;
var statearr_34639_34675 = state_34626__$1;
(statearr_34639_34675[(2)] = null);

(statearr_34639_34675[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34627 === (13))){
var inst_34579 = (state_34626[(8)]);
var inst_34581 = (state_34626[(10)]);
var inst_34578 = (state_34626[(11)]);
var inst_34580 = (state_34626[(12)]);
var inst_34588 = (state_34626[(2)]);
var inst_34589 = (inst_34581 + (1));
var tmp34635 = inst_34579;
var tmp34636 = inst_34578;
var tmp34637 = inst_34580;
var inst_34578__$1 = tmp34636;
var inst_34579__$1 = tmp34635;
var inst_34580__$1 = tmp34637;
var inst_34581__$1 = inst_34589;
var state_34626__$1 = (function (){var statearr_34640 = state_34626;
(statearr_34640[(14)] = inst_34588);

(statearr_34640[(8)] = inst_34579__$1);

(statearr_34640[(10)] = inst_34581__$1);

(statearr_34640[(11)] = inst_34578__$1);

(statearr_34640[(12)] = inst_34580__$1);

return statearr_34640;
})();
var statearr_34641_34676 = state_34626__$1;
(statearr_34641_34676[(2)] = null);

(statearr_34641_34676[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34627 === (22))){
var state_34626__$1 = state_34626;
var statearr_34642_34677 = state_34626__$1;
(statearr_34642_34677[(2)] = null);

(statearr_34642_34677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34627 === (6))){
var inst_34567 = (state_34626[(13)]);
var inst_34576 = f.call(null,inst_34567);
var inst_34577 = cljs.core.seq.call(null,inst_34576);
var inst_34578 = inst_34577;
var inst_34579 = null;
var inst_34580 = (0);
var inst_34581 = (0);
var state_34626__$1 = (function (){var statearr_34643 = state_34626;
(statearr_34643[(8)] = inst_34579);

(statearr_34643[(10)] = inst_34581);

(statearr_34643[(11)] = inst_34578);

(statearr_34643[(12)] = inst_34580);

return statearr_34643;
})();
var statearr_34644_34678 = state_34626__$1;
(statearr_34644_34678[(2)] = null);

(statearr_34644_34678[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34627 === (17))){
var inst_34592 = (state_34626[(7)]);
var inst_34596 = cljs.core.chunk_first.call(null,inst_34592);
var inst_34597 = cljs.core.chunk_rest.call(null,inst_34592);
var inst_34598 = cljs.core.count.call(null,inst_34596);
var inst_34578 = inst_34597;
var inst_34579 = inst_34596;
var inst_34580 = inst_34598;
var inst_34581 = (0);
var state_34626__$1 = (function (){var statearr_34645 = state_34626;
(statearr_34645[(8)] = inst_34579);

(statearr_34645[(10)] = inst_34581);

(statearr_34645[(11)] = inst_34578);

(statearr_34645[(12)] = inst_34580);

return statearr_34645;
})();
var statearr_34646_34679 = state_34626__$1;
(statearr_34646_34679[(2)] = null);

(statearr_34646_34679[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34627 === (3))){
var inst_34624 = (state_34626[(2)]);
var state_34626__$1 = state_34626;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34626__$1,inst_34624);
} else {
if((state_val_34627 === (12))){
var inst_34612 = (state_34626[(2)]);
var state_34626__$1 = state_34626;
var statearr_34647_34680 = state_34626__$1;
(statearr_34647_34680[(2)] = inst_34612);

(statearr_34647_34680[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34627 === (2))){
var state_34626__$1 = state_34626;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34626__$1,(4),in$);
} else {
if((state_val_34627 === (23))){
var inst_34620 = (state_34626[(2)]);
var state_34626__$1 = state_34626;
var statearr_34648_34681 = state_34626__$1;
(statearr_34648_34681[(2)] = inst_34620);

(statearr_34648_34681[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34627 === (19))){
var inst_34607 = (state_34626[(2)]);
var state_34626__$1 = state_34626;
var statearr_34649_34682 = state_34626__$1;
(statearr_34649_34682[(2)] = inst_34607);

(statearr_34649_34682[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34627 === (11))){
var inst_34578 = (state_34626[(11)]);
var inst_34592 = (state_34626[(7)]);
var inst_34592__$1 = cljs.core.seq.call(null,inst_34578);
var state_34626__$1 = (function (){var statearr_34650 = state_34626;
(statearr_34650[(7)] = inst_34592__$1);

return statearr_34650;
})();
if(inst_34592__$1){
var statearr_34651_34683 = state_34626__$1;
(statearr_34651_34683[(1)] = (14));

} else {
var statearr_34652_34684 = state_34626__$1;
(statearr_34652_34684[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34627 === (9))){
var inst_34614 = (state_34626[(2)]);
var inst_34615 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_34626__$1 = (function (){var statearr_34653 = state_34626;
(statearr_34653[(15)] = inst_34614);

return statearr_34653;
})();
if(cljs.core.truth_(inst_34615)){
var statearr_34654_34685 = state_34626__$1;
(statearr_34654_34685[(1)] = (21));

} else {
var statearr_34655_34686 = state_34626__$1;
(statearr_34655_34686[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34627 === (5))){
var inst_34570 = cljs.core.async.close_BANG_.call(null,out);
var state_34626__$1 = state_34626;
var statearr_34656_34687 = state_34626__$1;
(statearr_34656_34687[(2)] = inst_34570);

(statearr_34656_34687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34627 === (14))){
var inst_34592 = (state_34626[(7)]);
var inst_34594 = cljs.core.chunked_seq_QMARK_.call(null,inst_34592);
var state_34626__$1 = state_34626;
if(inst_34594){
var statearr_34657_34688 = state_34626__$1;
(statearr_34657_34688[(1)] = (17));

} else {
var statearr_34658_34689 = state_34626__$1;
(statearr_34658_34689[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34627 === (16))){
var inst_34610 = (state_34626[(2)]);
var state_34626__$1 = state_34626;
var statearr_34659_34690 = state_34626__$1;
(statearr_34659_34690[(2)] = inst_34610);

(statearr_34659_34690[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34627 === (10))){
var inst_34579 = (state_34626[(8)]);
var inst_34581 = (state_34626[(10)]);
var inst_34586 = cljs.core._nth.call(null,inst_34579,inst_34581);
var state_34626__$1 = state_34626;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34626__$1,(13),out,inst_34586);
} else {
if((state_val_34627 === (18))){
var inst_34592 = (state_34626[(7)]);
var inst_34601 = cljs.core.first.call(null,inst_34592);
var state_34626__$1 = state_34626;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34626__$1,(20),out,inst_34601);
} else {
if((state_val_34627 === (8))){
var inst_34581 = (state_34626[(10)]);
var inst_34580 = (state_34626[(12)]);
var inst_34583 = (inst_34581 < inst_34580);
var inst_34584 = inst_34583;
var state_34626__$1 = state_34626;
if(cljs.core.truth_(inst_34584)){
var statearr_34660_34691 = state_34626__$1;
(statearr_34660_34691[(1)] = (10));

} else {
var statearr_34661_34692 = state_34626__$1;
(statearr_34661_34692[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6581__auto__))
;
return ((function (switch__6525__auto__,c__6581__auto__){
return (function() {
var state_machine__6526__auto__ = null;
var state_machine__6526__auto____0 = (function (){
var statearr_34665 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34665[(0)] = state_machine__6526__auto__);

(statearr_34665[(1)] = (1));

return statearr_34665;
});
var state_machine__6526__auto____1 = (function (state_34626){
while(true){
var ret_value__6527__auto__ = (function (){try{while(true){
var result__6528__auto__ = switch__6525__auto__.call(null,state_34626);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6528__auto__;
}
break;
}
}catch (e34666){if((e34666 instanceof Object)){
var ex__6529__auto__ = e34666;
var statearr_34667_34693 = state_34626;
(statearr_34667_34693[(5)] = ex__6529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34626);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34666;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34694 = state_34626;
state_34626 = G__34694;
continue;
} else {
return ret_value__6527__auto__;
}
break;
}
});
state_machine__6526__auto__ = function(state_34626){
switch(arguments.length){
case 0:
return state_machine__6526__auto____0.call(this);
case 1:
return state_machine__6526__auto____1.call(this,state_34626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6526__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6526__auto____0;
state_machine__6526__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6526__auto____1;
return state_machine__6526__auto__;
})()
;})(switch__6525__auto__,c__6581__auto__))
})();
var state__6583__auto__ = (function (){var statearr_34668 = f__6582__auto__.call(null);
(statearr_34668[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6581__auto__);

return statearr_34668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6583__auto__);
});})(c__6581__auto__))
);

return c__6581__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){
return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6581__auto___34791 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6581__auto___34791,out){
return (function (){
var f__6582__auto__ = (function (){var switch__6525__auto__ = ((function (c__6581__auto___34791,out){
return (function (state_34766){
var state_val_34767 = (state_34766[(1)]);
if((state_val_34767 === (7))){
var inst_34761 = (state_34766[(2)]);
var state_34766__$1 = state_34766;
var statearr_34768_34792 = state_34766__$1;
(statearr_34768_34792[(2)] = inst_34761);

(statearr_34768_34792[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34767 === (1))){
var inst_34743 = null;
var state_34766__$1 = (function (){var statearr_34769 = state_34766;
(statearr_34769[(7)] = inst_34743);

return statearr_34769;
})();
var statearr_34770_34793 = state_34766__$1;
(statearr_34770_34793[(2)] = null);

(statearr_34770_34793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34767 === (4))){
var inst_34746 = (state_34766[(8)]);
var inst_34746__$1 = (state_34766[(2)]);
var inst_34747 = (inst_34746__$1 == null);
var inst_34748 = cljs.core.not.call(null,inst_34747);
var state_34766__$1 = (function (){var statearr_34771 = state_34766;
(statearr_34771[(8)] = inst_34746__$1);

return statearr_34771;
})();
if(inst_34748){
var statearr_34772_34794 = state_34766__$1;
(statearr_34772_34794[(1)] = (5));

} else {
var statearr_34773_34795 = state_34766__$1;
(statearr_34773_34795[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34767 === (6))){
var state_34766__$1 = state_34766;
var statearr_34774_34796 = state_34766__$1;
(statearr_34774_34796[(2)] = null);

(statearr_34774_34796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34767 === (3))){
var inst_34763 = (state_34766[(2)]);
var inst_34764 = cljs.core.async.close_BANG_.call(null,out);
var state_34766__$1 = (function (){var statearr_34775 = state_34766;
(statearr_34775[(9)] = inst_34763);

return statearr_34775;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34766__$1,inst_34764);
} else {
if((state_val_34767 === (2))){
var state_34766__$1 = state_34766;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34766__$1,(4),ch);
} else {
if((state_val_34767 === (11))){
var inst_34746 = (state_34766[(8)]);
var inst_34755 = (state_34766[(2)]);
var inst_34743 = inst_34746;
var state_34766__$1 = (function (){var statearr_34776 = state_34766;
(statearr_34776[(7)] = inst_34743);

(statearr_34776[(10)] = inst_34755);

return statearr_34776;
})();
var statearr_34777_34797 = state_34766__$1;
(statearr_34777_34797[(2)] = null);

(statearr_34777_34797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34767 === (9))){
var inst_34746 = (state_34766[(8)]);
var state_34766__$1 = state_34766;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34766__$1,(11),out,inst_34746);
} else {
if((state_val_34767 === (5))){
var inst_34743 = (state_34766[(7)]);
var inst_34746 = (state_34766[(8)]);
var inst_34750 = cljs.core._EQ_.call(null,inst_34746,inst_34743);
var state_34766__$1 = state_34766;
if(inst_34750){
var statearr_34779_34798 = state_34766__$1;
(statearr_34779_34798[(1)] = (8));

} else {
var statearr_34780_34799 = state_34766__$1;
(statearr_34780_34799[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34767 === (10))){
var inst_34758 = (state_34766[(2)]);
var state_34766__$1 = state_34766;
var statearr_34781_34800 = state_34766__$1;
(statearr_34781_34800[(2)] = inst_34758);

(statearr_34781_34800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34767 === (8))){
var inst_34743 = (state_34766[(7)]);
var tmp34778 = inst_34743;
var inst_34743__$1 = tmp34778;
var state_34766__$1 = (function (){var statearr_34782 = state_34766;
(statearr_34782[(7)] = inst_34743__$1);

return statearr_34782;
})();
var statearr_34783_34801 = state_34766__$1;
(statearr_34783_34801[(2)] = null);

(statearr_34783_34801[(1)] = (2));


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
}
}
}
}
});})(c__6581__auto___34791,out))
;
return ((function (switch__6525__auto__,c__6581__auto___34791,out){
return (function() {
var state_machine__6526__auto__ = null;
var state_machine__6526__auto____0 = (function (){
var statearr_34787 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34787[(0)] = state_machine__6526__auto__);

(statearr_34787[(1)] = (1));

return statearr_34787;
});
var state_machine__6526__auto____1 = (function (state_34766){
while(true){
var ret_value__6527__auto__ = (function (){try{while(true){
var result__6528__auto__ = switch__6525__auto__.call(null,state_34766);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6528__auto__;
}
break;
}
}catch (e34788){if((e34788 instanceof Object)){
var ex__6529__auto__ = e34788;
var statearr_34789_34802 = state_34766;
(statearr_34789_34802[(5)] = ex__6529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34766);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34788;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34803 = state_34766;
state_34766 = G__34803;
continue;
} else {
return ret_value__6527__auto__;
}
break;
}
});
state_machine__6526__auto__ = function(state_34766){
switch(arguments.length){
case 0:
return state_machine__6526__auto____0.call(this);
case 1:
return state_machine__6526__auto____1.call(this,state_34766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6526__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6526__auto____0;
state_machine__6526__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6526__auto____1;
return state_machine__6526__auto__;
})()
;})(switch__6525__auto__,c__6581__auto___34791,out))
})();
var state__6583__auto__ = (function (){var statearr_34790 = f__6582__auto__.call(null);
(statearr_34790[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6581__auto___34791);

return statearr_34790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6583__auto__);
});})(c__6581__auto___34791,out))
);


return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){
return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6581__auto___34938 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6581__auto___34938,out){
return (function (){
var f__6582__auto__ = (function (){var switch__6525__auto__ = ((function (c__6581__auto___34938,out){
return (function (state_34908){
var state_val_34909 = (state_34908[(1)]);
if((state_val_34909 === (7))){
var inst_34904 = (state_34908[(2)]);
var state_34908__$1 = state_34908;
var statearr_34910_34939 = state_34908__$1;
(statearr_34910_34939[(2)] = inst_34904);

(statearr_34910_34939[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (1))){
var inst_34871 = (new Array(n));
var inst_34872 = inst_34871;
var inst_34873 = (0);
var state_34908__$1 = (function (){var statearr_34911 = state_34908;
(statearr_34911[(7)] = inst_34873);

(statearr_34911[(8)] = inst_34872);

return statearr_34911;
})();
var statearr_34912_34940 = state_34908__$1;
(statearr_34912_34940[(2)] = null);

(statearr_34912_34940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (4))){
var inst_34876 = (state_34908[(9)]);
var inst_34876__$1 = (state_34908[(2)]);
var inst_34877 = (inst_34876__$1 == null);
var inst_34878 = cljs.core.not.call(null,inst_34877);
var state_34908__$1 = (function (){var statearr_34913 = state_34908;
(statearr_34913[(9)] = inst_34876__$1);

return statearr_34913;
})();
if(inst_34878){
var statearr_34914_34941 = state_34908__$1;
(statearr_34914_34941[(1)] = (5));

} else {
var statearr_34915_34942 = state_34908__$1;
(statearr_34915_34942[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (15))){
var inst_34898 = (state_34908[(2)]);
var state_34908__$1 = state_34908;
var statearr_34916_34943 = state_34908__$1;
(statearr_34916_34943[(2)] = inst_34898);

(statearr_34916_34943[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (13))){
var state_34908__$1 = state_34908;
var statearr_34917_34944 = state_34908__$1;
(statearr_34917_34944[(2)] = null);

(statearr_34917_34944[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (6))){
var inst_34873 = (state_34908[(7)]);
var inst_34894 = (inst_34873 > (0));
var state_34908__$1 = state_34908;
if(cljs.core.truth_(inst_34894)){
var statearr_34918_34945 = state_34908__$1;
(statearr_34918_34945[(1)] = (12));

} else {
var statearr_34919_34946 = state_34908__$1;
(statearr_34919_34946[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (3))){
var inst_34906 = (state_34908[(2)]);
var state_34908__$1 = state_34908;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34908__$1,inst_34906);
} else {
if((state_val_34909 === (12))){
var inst_34872 = (state_34908[(8)]);
var inst_34896 = cljs.core.vec.call(null,inst_34872);
var state_34908__$1 = state_34908;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34908__$1,(15),out,inst_34896);
} else {
if((state_val_34909 === (2))){
var state_34908__$1 = state_34908;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34908__$1,(4),ch);
} else {
if((state_val_34909 === (11))){
var inst_34888 = (state_34908[(2)]);
var inst_34889 = (new Array(n));
var inst_34872 = inst_34889;
var inst_34873 = (0);
var state_34908__$1 = (function (){var statearr_34920 = state_34908;
(statearr_34920[(7)] = inst_34873);

(statearr_34920[(8)] = inst_34872);

(statearr_34920[(10)] = inst_34888);

return statearr_34920;
})();
var statearr_34921_34947 = state_34908__$1;
(statearr_34921_34947[(2)] = null);

(statearr_34921_34947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (9))){
var inst_34872 = (state_34908[(8)]);
var inst_34886 = cljs.core.vec.call(null,inst_34872);
var state_34908__$1 = state_34908;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34908__$1,(11),out,inst_34886);
} else {
if((state_val_34909 === (5))){
var inst_34873 = (state_34908[(7)]);
var inst_34876 = (state_34908[(9)]);
var inst_34872 = (state_34908[(8)]);
var inst_34881 = (state_34908[(11)]);
var inst_34880 = (inst_34872[inst_34873] = inst_34876);
var inst_34881__$1 = (inst_34873 + (1));
var inst_34882 = (inst_34881__$1 < n);
var state_34908__$1 = (function (){var statearr_34922 = state_34908;
(statearr_34922[(11)] = inst_34881__$1);

(statearr_34922[(12)] = inst_34880);

return statearr_34922;
})();
if(cljs.core.truth_(inst_34882)){
var statearr_34923_34948 = state_34908__$1;
(statearr_34923_34948[(1)] = (8));

} else {
var statearr_34924_34949 = state_34908__$1;
(statearr_34924_34949[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (14))){
var inst_34901 = (state_34908[(2)]);
var inst_34902 = cljs.core.async.close_BANG_.call(null,out);
var state_34908__$1 = (function (){var statearr_34926 = state_34908;
(statearr_34926[(13)] = inst_34901);

return statearr_34926;
})();
var statearr_34927_34950 = state_34908__$1;
(statearr_34927_34950[(2)] = inst_34902);

(statearr_34927_34950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (10))){
var inst_34892 = (state_34908[(2)]);
var state_34908__$1 = state_34908;
var statearr_34928_34951 = state_34908__$1;
(statearr_34928_34951[(2)] = inst_34892);

(statearr_34928_34951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (8))){
var inst_34872 = (state_34908[(8)]);
var inst_34881 = (state_34908[(11)]);
var tmp34925 = inst_34872;
var inst_34872__$1 = tmp34925;
var inst_34873 = inst_34881;
var state_34908__$1 = (function (){var statearr_34929 = state_34908;
(statearr_34929[(7)] = inst_34873);

(statearr_34929[(8)] = inst_34872__$1);

return statearr_34929;
})();
var statearr_34930_34952 = state_34908__$1;
(statearr_34930_34952[(2)] = null);

(statearr_34930_34952[(1)] = (2));


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
}
}
}
}
}
}
}
}
});})(c__6581__auto___34938,out))
;
return ((function (switch__6525__auto__,c__6581__auto___34938,out){
return (function() {
var state_machine__6526__auto__ = null;
var state_machine__6526__auto____0 = (function (){
var statearr_34934 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34934[(0)] = state_machine__6526__auto__);

(statearr_34934[(1)] = (1));

return statearr_34934;
});
var state_machine__6526__auto____1 = (function (state_34908){
while(true){
var ret_value__6527__auto__ = (function (){try{while(true){
var result__6528__auto__ = switch__6525__auto__.call(null,state_34908);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6528__auto__;
}
break;
}
}catch (e34935){if((e34935 instanceof Object)){
var ex__6529__auto__ = e34935;
var statearr_34936_34953 = state_34908;
(statearr_34936_34953[(5)] = ex__6529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34908);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34935;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34954 = state_34908;
state_34908 = G__34954;
continue;
} else {
return ret_value__6527__auto__;
}
break;
}
});
state_machine__6526__auto__ = function(state_34908){
switch(arguments.length){
case 0:
return state_machine__6526__auto____0.call(this);
case 1:
return state_machine__6526__auto____1.call(this,state_34908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6526__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6526__auto____0;
state_machine__6526__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6526__auto____1;
return state_machine__6526__auto__;
})()
;})(switch__6525__auto__,c__6581__auto___34938,out))
})();
var state__6583__auto__ = (function (){var statearr_34937 = f__6582__auto__.call(null);
(statearr_34937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6581__auto___34938);

return statearr_34937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6583__auto__);
});})(c__6581__auto___34938,out))
);


return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){
return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6581__auto___35097 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6581__auto___35097,out){
return (function (){
var f__6582__auto__ = (function (){var switch__6525__auto__ = ((function (c__6581__auto___35097,out){
return (function (state_35067){
var state_val_35068 = (state_35067[(1)]);
if((state_val_35068 === (7))){
var inst_35063 = (state_35067[(2)]);
var state_35067__$1 = state_35067;
var statearr_35069_35098 = state_35067__$1;
(statearr_35069_35098[(2)] = inst_35063);

(statearr_35069_35098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35068 === (1))){
var inst_35026 = [];
var inst_35027 = inst_35026;
var inst_35028 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35067__$1 = (function (){var statearr_35070 = state_35067;
(statearr_35070[(7)] = inst_35027);

(statearr_35070[(8)] = inst_35028);

return statearr_35070;
})();
var statearr_35071_35099 = state_35067__$1;
(statearr_35071_35099[(2)] = null);

(statearr_35071_35099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35068 === (4))){
var inst_35031 = (state_35067[(9)]);
var inst_35031__$1 = (state_35067[(2)]);
var inst_35032 = (inst_35031__$1 == null);
var inst_35033 = cljs.core.not.call(null,inst_35032);
var state_35067__$1 = (function (){var statearr_35072 = state_35067;
(statearr_35072[(9)] = inst_35031__$1);

return statearr_35072;
})();
if(inst_35033){
var statearr_35073_35100 = state_35067__$1;
(statearr_35073_35100[(1)] = (5));

} else {
var statearr_35074_35101 = state_35067__$1;
(statearr_35074_35101[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35068 === (15))){
var inst_35057 = (state_35067[(2)]);
var state_35067__$1 = state_35067;
var statearr_35075_35102 = state_35067__$1;
(statearr_35075_35102[(2)] = inst_35057);

(statearr_35075_35102[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35068 === (13))){
var state_35067__$1 = state_35067;
var statearr_35076_35103 = state_35067__$1;
(statearr_35076_35103[(2)] = null);

(statearr_35076_35103[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35068 === (6))){
var inst_35027 = (state_35067[(7)]);
var inst_35052 = inst_35027.length;
var inst_35053 = (inst_35052 > (0));
var state_35067__$1 = state_35067;
if(cljs.core.truth_(inst_35053)){
var statearr_35077_35104 = state_35067__$1;
(statearr_35077_35104[(1)] = (12));

} else {
var statearr_35078_35105 = state_35067__$1;
(statearr_35078_35105[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35068 === (3))){
var inst_35065 = (state_35067[(2)]);
var state_35067__$1 = state_35067;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35067__$1,inst_35065);
} else {
if((state_val_35068 === (12))){
var inst_35027 = (state_35067[(7)]);
var inst_35055 = cljs.core.vec.call(null,inst_35027);
var state_35067__$1 = state_35067;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35067__$1,(15),out,inst_35055);
} else {
if((state_val_35068 === (2))){
var state_35067__$1 = state_35067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35067__$1,(4),ch);
} else {
if((state_val_35068 === (11))){
var inst_35035 = (state_35067[(10)]);
var inst_35031 = (state_35067[(9)]);
var inst_35045 = (state_35067[(2)]);
var inst_35046 = [];
var inst_35047 = inst_35046.push(inst_35031);
var inst_35027 = inst_35046;
var inst_35028 = inst_35035;
var state_35067__$1 = (function (){var statearr_35079 = state_35067;
(statearr_35079[(11)] = inst_35047);

(statearr_35079[(7)] = inst_35027);

(statearr_35079[(8)] = inst_35028);

(statearr_35079[(12)] = inst_35045);

return statearr_35079;
})();
var statearr_35080_35106 = state_35067__$1;
(statearr_35080_35106[(2)] = null);

(statearr_35080_35106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35068 === (9))){
var inst_35027 = (state_35067[(7)]);
var inst_35043 = cljs.core.vec.call(null,inst_35027);
var state_35067__$1 = state_35067;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35067__$1,(11),out,inst_35043);
} else {
if((state_val_35068 === (5))){
var inst_35035 = (state_35067[(10)]);
var inst_35031 = (state_35067[(9)]);
var inst_35028 = (state_35067[(8)]);
var inst_35035__$1 = f.call(null,inst_35031);
var inst_35036 = cljs.core._EQ_.call(null,inst_35035__$1,inst_35028);
var inst_35037 = cljs.core.keyword_identical_QMARK_.call(null,inst_35028,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_35038 = (inst_35036) || (inst_35037);
var state_35067__$1 = (function (){var statearr_35081 = state_35067;
(statearr_35081[(10)] = inst_35035__$1);

return statearr_35081;
})();
if(cljs.core.truth_(inst_35038)){
var statearr_35082_35107 = state_35067__$1;
(statearr_35082_35107[(1)] = (8));

} else {
var statearr_35083_35108 = state_35067__$1;
(statearr_35083_35108[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35068 === (14))){
var inst_35060 = (state_35067[(2)]);
var inst_35061 = cljs.core.async.close_BANG_.call(null,out);
var state_35067__$1 = (function (){var statearr_35085 = state_35067;
(statearr_35085[(13)] = inst_35060);

return statearr_35085;
})();
var statearr_35086_35109 = state_35067__$1;
(statearr_35086_35109[(2)] = inst_35061);

(statearr_35086_35109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35068 === (10))){
var inst_35050 = (state_35067[(2)]);
var state_35067__$1 = state_35067;
var statearr_35087_35110 = state_35067__$1;
(statearr_35087_35110[(2)] = inst_35050);

(statearr_35087_35110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35068 === (8))){
var inst_35027 = (state_35067[(7)]);
var inst_35035 = (state_35067[(10)]);
var inst_35031 = (state_35067[(9)]);
var inst_35040 = inst_35027.push(inst_35031);
var tmp35084 = inst_35027;
var inst_35027__$1 = tmp35084;
var inst_35028 = inst_35035;
var state_35067__$1 = (function (){var statearr_35088 = state_35067;
(statearr_35088[(7)] = inst_35027__$1);

(statearr_35088[(14)] = inst_35040);

(statearr_35088[(8)] = inst_35028);

return statearr_35088;
})();
var statearr_35089_35111 = state_35067__$1;
(statearr_35089_35111[(2)] = null);

(statearr_35089_35111[(1)] = (2));


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
}
}
}
}
}
}
}
}
});})(c__6581__auto___35097,out))
;
return ((function (switch__6525__auto__,c__6581__auto___35097,out){
return (function() {
var state_machine__6526__auto__ = null;
var state_machine__6526__auto____0 = (function (){
var statearr_35093 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35093[(0)] = state_machine__6526__auto__);

(statearr_35093[(1)] = (1));

return statearr_35093;
});
var state_machine__6526__auto____1 = (function (state_35067){
while(true){
var ret_value__6527__auto__ = (function (){try{while(true){
var result__6528__auto__ = switch__6525__auto__.call(null,state_35067);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6528__auto__;
}
break;
}
}catch (e35094){if((e35094 instanceof Object)){
var ex__6529__auto__ = e35094;
var statearr_35095_35112 = state_35067;
(statearr_35095_35112[(5)] = ex__6529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35094;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35113 = state_35067;
state_35067 = G__35113;
continue;
} else {
return ret_value__6527__auto__;
}
break;
}
});
state_machine__6526__auto__ = function(state_35067){
switch(arguments.length){
case 0:
return state_machine__6526__auto____0.call(this);
case 1:
return state_machine__6526__auto____1.call(this,state_35067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6526__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6526__auto____0;
state_machine__6526__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6526__auto____1;
return state_machine__6526__auto__;
})()
;})(switch__6525__auto__,c__6581__auto___35097,out))
})();
var state__6583__auto__ = (function (){var statearr_35096 = f__6582__auto__.call(null);
(statearr_35096[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6581__auto___35097);

return statearr_35096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6583__auto__);
});})(c__6581__auto___35097,out))
);


return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
