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
if(typeof cljs.core.async.t10168 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t10168 = (function (f,fn_handler,meta10169){
this.f = f;
this.fn_handler = fn_handler;
this.meta10169 = meta10169;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10168.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t10168.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t10168.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t10168.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10170){
var self__ = this;
var _10170__$1 = this;
return self__.meta10169;
});

cljs.core.async.t10168.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10170,meta10169__$1){
var self__ = this;
var _10170__$1 = this;
return (new cljs.core.async.t10168(self__.f,self__.fn_handler,meta10169__$1));
});

cljs.core.async.t10168.cljs$lang$type = true;

cljs.core.async.t10168.cljs$lang$ctorStr = "cljs.core.async/t10168";

cljs.core.async.t10168.cljs$lang$ctorPrWriter = (function (this__4384__auto__,writer__4385__auto__,opt__4386__auto__){
return cljs.core._write.call(null,writer__4385__auto__,"cljs.core.async/t10168");
});

cljs.core.async.__GT_t10168 = (function __GT_t10168(f__$1,fn_handler__$1,meta10169){
return (new cljs.core.async.t10168(f__$1,fn_handler__$1,meta10169));
});

}

return (new cljs.core.async.t10168(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/blischalk/node-webkit-apps/hoard/target/base+system+user+dev/cljsbuild-compiler-0/cljs/core/async.cljs"], null)));
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
var G__10172 = buff;
if(G__10172){
var bit__4478__auto__ = null;
if(cljs.core.truth_((function (){var or__3797__auto__ = bit__4478__auto__;
if(cljs.core.truth_(or__3797__auto__)){
return or__3797__auto__;
} else {
return G__10172.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__10172.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10172);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10172);
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
var val_10173 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_10173);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_10173,ret){
return (function (){
return fn1.call(null,val_10173);
});})(val_10173,ret))
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
var n__4684__auto___10174 = n;
var x_10175 = (0);
while(true){
if((x_10175 < n__4684__auto___10174)){
(a[x_10175] = (0));

var G__10176 = (x_10175 + (1));
x_10175 = G__10176;
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

var G__10177 = (i + (1));
i = G__10177;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t10181 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t10181 = (function (flag,alt_flag,meta10182){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta10182 = meta10182;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10181.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t10181.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t10181.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t10181.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_10183){
var self__ = this;
var _10183__$1 = this;
return self__.meta10182;
});})(flag))
;

cljs.core.async.t10181.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_10183,meta10182__$1){
var self__ = this;
var _10183__$1 = this;
return (new cljs.core.async.t10181(self__.flag,self__.alt_flag,meta10182__$1));
});})(flag))
;

cljs.core.async.t10181.cljs$lang$type = true;

cljs.core.async.t10181.cljs$lang$ctorStr = "cljs.core.async/t10181";

cljs.core.async.t10181.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4384__auto__,writer__4385__auto__,opt__4386__auto__){
return cljs.core._write.call(null,writer__4385__auto__,"cljs.core.async/t10181");
});})(flag))
;

cljs.core.async.__GT_t10181 = ((function (flag){
return (function __GT_t10181(flag__$1,alt_flag__$1,meta10182){
return (new cljs.core.async.t10181(flag__$1,alt_flag__$1,meta10182));
});})(flag))
;

}

return (new cljs.core.async.t10181(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/blischalk/node-webkit-apps/hoard/target/base+system+user+dev/cljsbuild-compiler-0/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t10187 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t10187 = (function (cb,flag,alt_handler,meta10188){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta10188 = meta10188;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10187.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t10187.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t10187.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t10187.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10189){
var self__ = this;
var _10189__$1 = this;
return self__.meta10188;
});

cljs.core.async.t10187.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10189,meta10188__$1){
var self__ = this;
var _10189__$1 = this;
return (new cljs.core.async.t10187(self__.cb,self__.flag,self__.alt_handler,meta10188__$1));
});

cljs.core.async.t10187.cljs$lang$type = true;

cljs.core.async.t10187.cljs$lang$ctorStr = "cljs.core.async/t10187";

cljs.core.async.t10187.cljs$lang$ctorPrWriter = (function (this__4384__auto__,writer__4385__auto__,opt__4386__auto__){
return cljs.core._write.call(null,writer__4385__auto__,"cljs.core.async/t10187");
});

cljs.core.async.__GT_t10187 = (function __GT_t10187(cb__$1,flag__$1,alt_handler__$1,meta10188){
return (new cljs.core.async.t10187(cb__$1,flag__$1,alt_handler__$1,meta10188));
});

}

return (new cljs.core.async.t10187(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/blischalk/node-webkit-apps/hoard/target/base+system+user+dev/cljsbuild-compiler-0/cljs/core/async.cljs"], null)));
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
return (function (p1__10190_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10190_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10191_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10191_SHARP_,port], null));
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
var G__10192 = (i + (1));
i = G__10192;
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
var alts_BANG___delegate = function (ports,p__10193){
var map__10195 = p__10193;
var map__10195__$1 = ((cljs.core.seq_QMARK_.call(null,map__10195))?cljs.core.apply.call(null,cljs.core.hash_map,map__10195):map__10195);
var opts = map__10195__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__10193 = null;
if (arguments.length > 1) {
var G__10196__i = 0, G__10196__a = new Array(arguments.length -  1);
while (G__10196__i < G__10196__a.length) {G__10196__a[G__10196__i] = arguments[G__10196__i + 1]; ++G__10196__i;}
  p__10193 = new cljs.core.IndexedSeq(G__10196__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__10193);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__10197){
var ports = cljs.core.first(arglist__10197);
var p__10193 = cljs.core.rest(arglist__10197);
return alts_BANG___delegate(ports,p__10193);
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
var c__7407__auto___10292 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7407__auto___10292){
return (function (){
var f__7408__auto__ = (function (){var switch__7351__auto__ = ((function (c__7407__auto___10292){
return (function (state_10268){
var state_val_10269 = (state_10268[(1)]);
if((state_val_10269 === (7))){
var inst_10264 = (state_10268[(2)]);
var state_10268__$1 = state_10268;
var statearr_10270_10293 = state_10268__$1;
(statearr_10270_10293[(2)] = inst_10264);

(statearr_10270_10293[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10269 === (1))){
var state_10268__$1 = state_10268;
var statearr_10271_10294 = state_10268__$1;
(statearr_10271_10294[(2)] = null);

(statearr_10271_10294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10269 === (4))){
var inst_10247 = (state_10268[(7)]);
var inst_10247__$1 = (state_10268[(2)]);
var inst_10248 = (inst_10247__$1 == null);
var state_10268__$1 = (function (){var statearr_10272 = state_10268;
(statearr_10272[(7)] = inst_10247__$1);

return statearr_10272;
})();
if(cljs.core.truth_(inst_10248)){
var statearr_10273_10295 = state_10268__$1;
(statearr_10273_10295[(1)] = (5));

} else {
var statearr_10274_10296 = state_10268__$1;
(statearr_10274_10296[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10269 === (13))){
var state_10268__$1 = state_10268;
var statearr_10275_10297 = state_10268__$1;
(statearr_10275_10297[(2)] = null);

(statearr_10275_10297[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10269 === (6))){
var inst_10247 = (state_10268[(7)]);
var state_10268__$1 = state_10268;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10268__$1,(11),to,inst_10247);
} else {
if((state_val_10269 === (3))){
var inst_10266 = (state_10268[(2)]);
var state_10268__$1 = state_10268;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10268__$1,inst_10266);
} else {
if((state_val_10269 === (12))){
var state_10268__$1 = state_10268;
var statearr_10276_10298 = state_10268__$1;
(statearr_10276_10298[(2)] = null);

(statearr_10276_10298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10269 === (2))){
var state_10268__$1 = state_10268;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10268__$1,(4),from);
} else {
if((state_val_10269 === (11))){
var inst_10257 = (state_10268[(2)]);
var state_10268__$1 = state_10268;
if(cljs.core.truth_(inst_10257)){
var statearr_10277_10299 = state_10268__$1;
(statearr_10277_10299[(1)] = (12));

} else {
var statearr_10278_10300 = state_10268__$1;
(statearr_10278_10300[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10269 === (9))){
var state_10268__$1 = state_10268;
var statearr_10279_10301 = state_10268__$1;
(statearr_10279_10301[(2)] = null);

(statearr_10279_10301[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10269 === (5))){
var state_10268__$1 = state_10268;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10280_10302 = state_10268__$1;
(statearr_10280_10302[(1)] = (8));

} else {
var statearr_10281_10303 = state_10268__$1;
(statearr_10281_10303[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10269 === (14))){
var inst_10262 = (state_10268[(2)]);
var state_10268__$1 = state_10268;
var statearr_10282_10304 = state_10268__$1;
(statearr_10282_10304[(2)] = inst_10262);

(statearr_10282_10304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10269 === (10))){
var inst_10254 = (state_10268[(2)]);
var state_10268__$1 = state_10268;
var statearr_10283_10305 = state_10268__$1;
(statearr_10283_10305[(2)] = inst_10254);

(statearr_10283_10305[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10269 === (8))){
var inst_10251 = cljs.core.async.close_BANG_.call(null,to);
var state_10268__$1 = state_10268;
var statearr_10284_10306 = state_10268__$1;
(statearr_10284_10306[(2)] = inst_10251);

(statearr_10284_10306[(1)] = (10));


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
});})(c__7407__auto___10292))
;
return ((function (switch__7351__auto__,c__7407__auto___10292){
return (function() {
var state_machine__7352__auto__ = null;
var state_machine__7352__auto____0 = (function (){
var statearr_10288 = [null,null,null,null,null,null,null,null];
(statearr_10288[(0)] = state_machine__7352__auto__);

(statearr_10288[(1)] = (1));

return statearr_10288;
});
var state_machine__7352__auto____1 = (function (state_10268){
while(true){
var ret_value__7353__auto__ = (function (){try{while(true){
var result__7354__auto__ = switch__7351__auto__.call(null,state_10268);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7354__auto__;
}
break;
}
}catch (e10289){if((e10289 instanceof Object)){
var ex__7355__auto__ = e10289;
var statearr_10290_10307 = state_10268;
(statearr_10290_10307[(5)] = ex__7355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10268);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10289;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10308 = state_10268;
state_10268 = G__10308;
continue;
} else {
return ret_value__7353__auto__;
}
break;
}
});
state_machine__7352__auto__ = function(state_10268){
switch(arguments.length){
case 0:
return state_machine__7352__auto____0.call(this);
case 1:
return state_machine__7352__auto____1.call(this,state_10268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7352__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7352__auto____0;
state_machine__7352__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7352__auto____1;
return state_machine__7352__auto__;
})()
;})(switch__7351__auto__,c__7407__auto___10292))
})();
var state__7409__auto__ = (function (){var statearr_10291 = f__7408__auto__.call(null);
(statearr_10291[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7407__auto___10292);

return statearr_10291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7409__auto__);
});})(c__7407__auto___10292))
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
return (function (p__10492){
var vec__10493 = p__10492;
var v = cljs.core.nth.call(null,vec__10493,(0),null);
var p = cljs.core.nth.call(null,vec__10493,(1),null);
var job = vec__10493;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7407__auto___10675 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7407__auto___10675,res,vec__10493,v,p,job,jobs,results){
return (function (){
var f__7408__auto__ = (function (){var switch__7351__auto__ = ((function (c__7407__auto___10675,res,vec__10493,v,p,job,jobs,results){
return (function (state_10498){
var state_val_10499 = (state_10498[(1)]);
if((state_val_10499 === (2))){
var inst_10495 = (state_10498[(2)]);
var inst_10496 = cljs.core.async.close_BANG_.call(null,res);
var state_10498__$1 = (function (){var statearr_10500 = state_10498;
(statearr_10500[(7)] = inst_10495);

return statearr_10500;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10498__$1,inst_10496);
} else {
if((state_val_10499 === (1))){
var state_10498__$1 = state_10498;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10498__$1,(2),res,v);
} else {
return null;
}
}
});})(c__7407__auto___10675,res,vec__10493,v,p,job,jobs,results))
;
return ((function (switch__7351__auto__,c__7407__auto___10675,res,vec__10493,v,p,job,jobs,results){
return (function() {
var state_machine__7352__auto__ = null;
var state_machine__7352__auto____0 = (function (){
var statearr_10504 = [null,null,null,null,null,null,null,null];
(statearr_10504[(0)] = state_machine__7352__auto__);

(statearr_10504[(1)] = (1));

return statearr_10504;
});
var state_machine__7352__auto____1 = (function (state_10498){
while(true){
var ret_value__7353__auto__ = (function (){try{while(true){
var result__7354__auto__ = switch__7351__auto__.call(null,state_10498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7354__auto__;
}
break;
}
}catch (e10505){if((e10505 instanceof Object)){
var ex__7355__auto__ = e10505;
var statearr_10506_10676 = state_10498;
(statearr_10506_10676[(5)] = ex__7355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10505;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10677 = state_10498;
state_10498 = G__10677;
continue;
} else {
return ret_value__7353__auto__;
}
break;
}
});
state_machine__7352__auto__ = function(state_10498){
switch(arguments.length){
case 0:
return state_machine__7352__auto____0.call(this);
case 1:
return state_machine__7352__auto____1.call(this,state_10498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7352__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7352__auto____0;
state_machine__7352__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7352__auto____1;
return state_machine__7352__auto__;
})()
;})(switch__7351__auto__,c__7407__auto___10675,res,vec__10493,v,p,job,jobs,results))
})();
var state__7409__auto__ = (function (){var statearr_10507 = f__7408__auto__.call(null);
(statearr_10507[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7407__auto___10675);

return statearr_10507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7409__auto__);
});})(c__7407__auto___10675,res,vec__10493,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__10508){
var vec__10509 = p__10508;
var v = cljs.core.nth.call(null,vec__10509,(0),null);
var p = cljs.core.nth.call(null,vec__10509,(1),null);
var job = vec__10509;
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
var n__4684__auto___10678 = n;
var __10679 = (0);
while(true){
if((__10679 < n__4684__auto___10678)){
var G__10510_10680 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__10510_10680) {
case "async":
var c__7407__auto___10682 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__10679,c__7407__auto___10682,G__10510_10680,n__4684__auto___10678,jobs,results,process,async){
return (function (){
var f__7408__auto__ = (function (){var switch__7351__auto__ = ((function (__10679,c__7407__auto___10682,G__10510_10680,n__4684__auto___10678,jobs,results,process,async){
return (function (state_10523){
var state_val_10524 = (state_10523[(1)]);
if((state_val_10524 === (7))){
var inst_10519 = (state_10523[(2)]);
var state_10523__$1 = state_10523;
var statearr_10525_10683 = state_10523__$1;
(statearr_10525_10683[(2)] = inst_10519);

(statearr_10525_10683[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10524 === (6))){
var state_10523__$1 = state_10523;
var statearr_10526_10684 = state_10523__$1;
(statearr_10526_10684[(2)] = null);

(statearr_10526_10684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10524 === (5))){
var state_10523__$1 = state_10523;
var statearr_10527_10685 = state_10523__$1;
(statearr_10527_10685[(2)] = null);

(statearr_10527_10685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10524 === (4))){
var inst_10513 = (state_10523[(2)]);
var inst_10514 = async.call(null,inst_10513);
var state_10523__$1 = state_10523;
if(cljs.core.truth_(inst_10514)){
var statearr_10528_10686 = state_10523__$1;
(statearr_10528_10686[(1)] = (5));

} else {
var statearr_10529_10687 = state_10523__$1;
(statearr_10529_10687[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10524 === (3))){
var inst_10521 = (state_10523[(2)]);
var state_10523__$1 = state_10523;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10523__$1,inst_10521);
} else {
if((state_val_10524 === (2))){
var state_10523__$1 = state_10523;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10523__$1,(4),jobs);
} else {
if((state_val_10524 === (1))){
var state_10523__$1 = state_10523;
var statearr_10530_10688 = state_10523__$1;
(statearr_10530_10688[(2)] = null);

(statearr_10530_10688[(1)] = (2));


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
});})(__10679,c__7407__auto___10682,G__10510_10680,n__4684__auto___10678,jobs,results,process,async))
;
return ((function (__10679,switch__7351__auto__,c__7407__auto___10682,G__10510_10680,n__4684__auto___10678,jobs,results,process,async){
return (function() {
var state_machine__7352__auto__ = null;
var state_machine__7352__auto____0 = (function (){
var statearr_10534 = [null,null,null,null,null,null,null];
(statearr_10534[(0)] = state_machine__7352__auto__);

(statearr_10534[(1)] = (1));

return statearr_10534;
});
var state_machine__7352__auto____1 = (function (state_10523){
while(true){
var ret_value__7353__auto__ = (function (){try{while(true){
var result__7354__auto__ = switch__7351__auto__.call(null,state_10523);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7354__auto__;
}
break;
}
}catch (e10535){if((e10535 instanceof Object)){
var ex__7355__auto__ = e10535;
var statearr_10536_10689 = state_10523;
(statearr_10536_10689[(5)] = ex__7355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10523);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10535;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10690 = state_10523;
state_10523 = G__10690;
continue;
} else {
return ret_value__7353__auto__;
}
break;
}
});
state_machine__7352__auto__ = function(state_10523){
switch(arguments.length){
case 0:
return state_machine__7352__auto____0.call(this);
case 1:
return state_machine__7352__auto____1.call(this,state_10523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7352__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7352__auto____0;
state_machine__7352__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7352__auto____1;
return state_machine__7352__auto__;
})()
;})(__10679,switch__7351__auto__,c__7407__auto___10682,G__10510_10680,n__4684__auto___10678,jobs,results,process,async))
})();
var state__7409__auto__ = (function (){var statearr_10537 = f__7408__auto__.call(null);
(statearr_10537[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7407__auto___10682);

return statearr_10537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7409__auto__);
});})(__10679,c__7407__auto___10682,G__10510_10680,n__4684__auto___10678,jobs,results,process,async))
);


break;
case "compute":
var c__7407__auto___10691 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__10679,c__7407__auto___10691,G__10510_10680,n__4684__auto___10678,jobs,results,process,async){
return (function (){
var f__7408__auto__ = (function (){var switch__7351__auto__ = ((function (__10679,c__7407__auto___10691,G__10510_10680,n__4684__auto___10678,jobs,results,process,async){
return (function (state_10550){
var state_val_10551 = (state_10550[(1)]);
if((state_val_10551 === (7))){
var inst_10546 = (state_10550[(2)]);
var state_10550__$1 = state_10550;
var statearr_10552_10692 = state_10550__$1;
(statearr_10552_10692[(2)] = inst_10546);

(statearr_10552_10692[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10551 === (6))){
var state_10550__$1 = state_10550;
var statearr_10553_10693 = state_10550__$1;
(statearr_10553_10693[(2)] = null);

(statearr_10553_10693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10551 === (5))){
var state_10550__$1 = state_10550;
var statearr_10554_10694 = state_10550__$1;
(statearr_10554_10694[(2)] = null);

(statearr_10554_10694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10551 === (4))){
var inst_10540 = (state_10550[(2)]);
var inst_10541 = process.call(null,inst_10540);
var state_10550__$1 = state_10550;
if(cljs.core.truth_(inst_10541)){
var statearr_10555_10695 = state_10550__$1;
(statearr_10555_10695[(1)] = (5));

} else {
var statearr_10556_10696 = state_10550__$1;
(statearr_10556_10696[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10551 === (3))){
var inst_10548 = (state_10550[(2)]);
var state_10550__$1 = state_10550;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10550__$1,inst_10548);
} else {
if((state_val_10551 === (2))){
var state_10550__$1 = state_10550;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10550__$1,(4),jobs);
} else {
if((state_val_10551 === (1))){
var state_10550__$1 = state_10550;
var statearr_10557_10697 = state_10550__$1;
(statearr_10557_10697[(2)] = null);

(statearr_10557_10697[(1)] = (2));


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
});})(__10679,c__7407__auto___10691,G__10510_10680,n__4684__auto___10678,jobs,results,process,async))
;
return ((function (__10679,switch__7351__auto__,c__7407__auto___10691,G__10510_10680,n__4684__auto___10678,jobs,results,process,async){
return (function() {
var state_machine__7352__auto__ = null;
var state_machine__7352__auto____0 = (function (){
var statearr_10561 = [null,null,null,null,null,null,null];
(statearr_10561[(0)] = state_machine__7352__auto__);

(statearr_10561[(1)] = (1));

return statearr_10561;
});
var state_machine__7352__auto____1 = (function (state_10550){
while(true){
var ret_value__7353__auto__ = (function (){try{while(true){
var result__7354__auto__ = switch__7351__auto__.call(null,state_10550);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7354__auto__;
}
break;
}
}catch (e10562){if((e10562 instanceof Object)){
var ex__7355__auto__ = e10562;
var statearr_10563_10698 = state_10550;
(statearr_10563_10698[(5)] = ex__7355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10550);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10562;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10699 = state_10550;
state_10550 = G__10699;
continue;
} else {
return ret_value__7353__auto__;
}
break;
}
});
state_machine__7352__auto__ = function(state_10550){
switch(arguments.length){
case 0:
return state_machine__7352__auto____0.call(this);
case 1:
return state_machine__7352__auto____1.call(this,state_10550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7352__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7352__auto____0;
state_machine__7352__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7352__auto____1;
return state_machine__7352__auto__;
})()
;})(__10679,switch__7351__auto__,c__7407__auto___10691,G__10510_10680,n__4684__auto___10678,jobs,results,process,async))
})();
var state__7409__auto__ = (function (){var statearr_10564 = f__7408__auto__.call(null);
(statearr_10564[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7407__auto___10691);

return statearr_10564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7409__auto__);
});})(__10679,c__7407__auto___10691,G__10510_10680,n__4684__auto___10678,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__10700 = (__10679 + (1));
__10679 = G__10700;
continue;
} else {
}
break;
}

var c__7407__auto___10701 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7407__auto___10701,jobs,results,process,async){
return (function (){
var f__7408__auto__ = (function (){var switch__7351__auto__ = ((function (c__7407__auto___10701,jobs,results,process,async){
return (function (state_10586){
var state_val_10587 = (state_10586[(1)]);
if((state_val_10587 === (9))){
var inst_10579 = (state_10586[(2)]);
var state_10586__$1 = (function (){var statearr_10588 = state_10586;
(statearr_10588[(7)] = inst_10579);

return statearr_10588;
})();
var statearr_10589_10702 = state_10586__$1;
(statearr_10589_10702[(2)] = null);

(statearr_10589_10702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10587 === (8))){
var inst_10572 = (state_10586[(8)]);
var inst_10577 = (state_10586[(2)]);
var state_10586__$1 = (function (){var statearr_10590 = state_10586;
(statearr_10590[(9)] = inst_10577);

return statearr_10590;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10586__$1,(9),results,inst_10572);
} else {
if((state_val_10587 === (7))){
var inst_10582 = (state_10586[(2)]);
var state_10586__$1 = state_10586;
var statearr_10591_10703 = state_10586__$1;
(statearr_10591_10703[(2)] = inst_10582);

(statearr_10591_10703[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10587 === (6))){
var inst_10572 = (state_10586[(8)]);
var inst_10567 = (state_10586[(10)]);
var inst_10572__$1 = cljs.core.async.chan.call(null,(1));
var inst_10573 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10574 = [inst_10567,inst_10572__$1];
var inst_10575 = (new cljs.core.PersistentVector(null,2,(5),inst_10573,inst_10574,null));
var state_10586__$1 = (function (){var statearr_10592 = state_10586;
(statearr_10592[(8)] = inst_10572__$1);

return statearr_10592;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10586__$1,(8),jobs,inst_10575);
} else {
if((state_val_10587 === (5))){
var inst_10570 = cljs.core.async.close_BANG_.call(null,jobs);
var state_10586__$1 = state_10586;
var statearr_10593_10704 = state_10586__$1;
(statearr_10593_10704[(2)] = inst_10570);

(statearr_10593_10704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10587 === (4))){
var inst_10567 = (state_10586[(10)]);
var inst_10567__$1 = (state_10586[(2)]);
var inst_10568 = (inst_10567__$1 == null);
var state_10586__$1 = (function (){var statearr_10594 = state_10586;
(statearr_10594[(10)] = inst_10567__$1);

return statearr_10594;
})();
if(cljs.core.truth_(inst_10568)){
var statearr_10595_10705 = state_10586__$1;
(statearr_10595_10705[(1)] = (5));

} else {
var statearr_10596_10706 = state_10586__$1;
(statearr_10596_10706[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10587 === (3))){
var inst_10584 = (state_10586[(2)]);
var state_10586__$1 = state_10586;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10586__$1,inst_10584);
} else {
if((state_val_10587 === (2))){
var state_10586__$1 = state_10586;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10586__$1,(4),from);
} else {
if((state_val_10587 === (1))){
var state_10586__$1 = state_10586;
var statearr_10597_10707 = state_10586__$1;
(statearr_10597_10707[(2)] = null);

(statearr_10597_10707[(1)] = (2));


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
});})(c__7407__auto___10701,jobs,results,process,async))
;
return ((function (switch__7351__auto__,c__7407__auto___10701,jobs,results,process,async){
return (function() {
var state_machine__7352__auto__ = null;
var state_machine__7352__auto____0 = (function (){
var statearr_10601 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10601[(0)] = state_machine__7352__auto__);

(statearr_10601[(1)] = (1));

return statearr_10601;
});
var state_machine__7352__auto____1 = (function (state_10586){
while(true){
var ret_value__7353__auto__ = (function (){try{while(true){
var result__7354__auto__ = switch__7351__auto__.call(null,state_10586);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7354__auto__;
}
break;
}
}catch (e10602){if((e10602 instanceof Object)){
var ex__7355__auto__ = e10602;
var statearr_10603_10708 = state_10586;
(statearr_10603_10708[(5)] = ex__7355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10586);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10602;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10709 = state_10586;
state_10586 = G__10709;
continue;
} else {
return ret_value__7353__auto__;
}
break;
}
});
state_machine__7352__auto__ = function(state_10586){
switch(arguments.length){
case 0:
return state_machine__7352__auto____0.call(this);
case 1:
return state_machine__7352__auto____1.call(this,state_10586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7352__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7352__auto____0;
state_machine__7352__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7352__auto____1;
return state_machine__7352__auto__;
})()
;})(switch__7351__auto__,c__7407__auto___10701,jobs,results,process,async))
})();
var state__7409__auto__ = (function (){var statearr_10604 = f__7408__auto__.call(null);
(statearr_10604[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7407__auto___10701);

return statearr_10604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7409__auto__);
});})(c__7407__auto___10701,jobs,results,process,async))
);


var c__7407__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7407__auto__,jobs,results,process,async){
return (function (){
var f__7408__auto__ = (function (){var switch__7351__auto__ = ((function (c__7407__auto__,jobs,results,process,async){
return (function (state_10642){
var state_val_10643 = (state_10642[(1)]);
if((state_val_10643 === (7))){
var inst_10638 = (state_10642[(2)]);
var state_10642__$1 = state_10642;
var statearr_10644_10710 = state_10642__$1;
(statearr_10644_10710[(2)] = inst_10638);

(statearr_10644_10710[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10643 === (20))){
var state_10642__$1 = state_10642;
var statearr_10645_10711 = state_10642__$1;
(statearr_10645_10711[(2)] = null);

(statearr_10645_10711[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10643 === (1))){
var state_10642__$1 = state_10642;
var statearr_10646_10712 = state_10642__$1;
(statearr_10646_10712[(2)] = null);

(statearr_10646_10712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10643 === (4))){
var inst_10607 = (state_10642[(7)]);
var inst_10607__$1 = (state_10642[(2)]);
var inst_10608 = (inst_10607__$1 == null);
var state_10642__$1 = (function (){var statearr_10647 = state_10642;
(statearr_10647[(7)] = inst_10607__$1);

return statearr_10647;
})();
if(cljs.core.truth_(inst_10608)){
var statearr_10648_10713 = state_10642__$1;
(statearr_10648_10713[(1)] = (5));

} else {
var statearr_10649_10714 = state_10642__$1;
(statearr_10649_10714[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10643 === (15))){
var inst_10620 = (state_10642[(8)]);
var state_10642__$1 = state_10642;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10642__$1,(18),to,inst_10620);
} else {
if((state_val_10643 === (21))){
var inst_10633 = (state_10642[(2)]);
var state_10642__$1 = state_10642;
var statearr_10650_10715 = state_10642__$1;
(statearr_10650_10715[(2)] = inst_10633);

(statearr_10650_10715[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10643 === (13))){
var inst_10635 = (state_10642[(2)]);
var state_10642__$1 = (function (){var statearr_10651 = state_10642;
(statearr_10651[(9)] = inst_10635);

return statearr_10651;
})();
var statearr_10652_10716 = state_10642__$1;
(statearr_10652_10716[(2)] = null);

(statearr_10652_10716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10643 === (6))){
var inst_10607 = (state_10642[(7)]);
var state_10642__$1 = state_10642;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10642__$1,(11),inst_10607);
} else {
if((state_val_10643 === (17))){
var inst_10628 = (state_10642[(2)]);
var state_10642__$1 = state_10642;
if(cljs.core.truth_(inst_10628)){
var statearr_10653_10717 = state_10642__$1;
(statearr_10653_10717[(1)] = (19));

} else {
var statearr_10654_10718 = state_10642__$1;
(statearr_10654_10718[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10643 === (3))){
var inst_10640 = (state_10642[(2)]);
var state_10642__$1 = state_10642;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10642__$1,inst_10640);
} else {
if((state_val_10643 === (12))){
var inst_10617 = (state_10642[(10)]);
var state_10642__$1 = state_10642;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10642__$1,(14),inst_10617);
} else {
if((state_val_10643 === (2))){
var state_10642__$1 = state_10642;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10642__$1,(4),results);
} else {
if((state_val_10643 === (19))){
var state_10642__$1 = state_10642;
var statearr_10655_10719 = state_10642__$1;
(statearr_10655_10719[(2)] = null);

(statearr_10655_10719[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10643 === (11))){
var inst_10617 = (state_10642[(2)]);
var state_10642__$1 = (function (){var statearr_10656 = state_10642;
(statearr_10656[(10)] = inst_10617);

return statearr_10656;
})();
var statearr_10657_10720 = state_10642__$1;
(statearr_10657_10720[(2)] = null);

(statearr_10657_10720[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10643 === (9))){
var state_10642__$1 = state_10642;
var statearr_10658_10721 = state_10642__$1;
(statearr_10658_10721[(2)] = null);

(statearr_10658_10721[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10643 === (5))){
var state_10642__$1 = state_10642;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10659_10722 = state_10642__$1;
(statearr_10659_10722[(1)] = (8));

} else {
var statearr_10660_10723 = state_10642__$1;
(statearr_10660_10723[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10643 === (14))){
var inst_10620 = (state_10642[(8)]);
var inst_10622 = (state_10642[(11)]);
var inst_10620__$1 = (state_10642[(2)]);
var inst_10621 = (inst_10620__$1 == null);
var inst_10622__$1 = cljs.core.not.call(null,inst_10621);
var state_10642__$1 = (function (){var statearr_10661 = state_10642;
(statearr_10661[(8)] = inst_10620__$1);

(statearr_10661[(11)] = inst_10622__$1);

return statearr_10661;
})();
if(inst_10622__$1){
var statearr_10662_10724 = state_10642__$1;
(statearr_10662_10724[(1)] = (15));

} else {
var statearr_10663_10725 = state_10642__$1;
(statearr_10663_10725[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10643 === (16))){
var inst_10622 = (state_10642[(11)]);
var state_10642__$1 = state_10642;
var statearr_10664_10726 = state_10642__$1;
(statearr_10664_10726[(2)] = inst_10622);

(statearr_10664_10726[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10643 === (10))){
var inst_10614 = (state_10642[(2)]);
var state_10642__$1 = state_10642;
var statearr_10665_10727 = state_10642__$1;
(statearr_10665_10727[(2)] = inst_10614);

(statearr_10665_10727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10643 === (18))){
var inst_10625 = (state_10642[(2)]);
var state_10642__$1 = state_10642;
var statearr_10666_10728 = state_10642__$1;
(statearr_10666_10728[(2)] = inst_10625);

(statearr_10666_10728[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10643 === (8))){
var inst_10611 = cljs.core.async.close_BANG_.call(null,to);
var state_10642__$1 = state_10642;
var statearr_10667_10729 = state_10642__$1;
(statearr_10667_10729[(2)] = inst_10611);

(statearr_10667_10729[(1)] = (10));


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
});})(c__7407__auto__,jobs,results,process,async))
;
return ((function (switch__7351__auto__,c__7407__auto__,jobs,results,process,async){
return (function() {
var state_machine__7352__auto__ = null;
var state_machine__7352__auto____0 = (function (){
var statearr_10671 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10671[(0)] = state_machine__7352__auto__);

(statearr_10671[(1)] = (1));

return statearr_10671;
});
var state_machine__7352__auto____1 = (function (state_10642){
while(true){
var ret_value__7353__auto__ = (function (){try{while(true){
var result__7354__auto__ = switch__7351__auto__.call(null,state_10642);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7354__auto__;
}
break;
}
}catch (e10672){if((e10672 instanceof Object)){
var ex__7355__auto__ = e10672;
var statearr_10673_10730 = state_10642;
(statearr_10673_10730[(5)] = ex__7355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10642);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10672;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10731 = state_10642;
state_10642 = G__10731;
continue;
} else {
return ret_value__7353__auto__;
}
break;
}
});
state_machine__7352__auto__ = function(state_10642){
switch(arguments.length){
case 0:
return state_machine__7352__auto____0.call(this);
case 1:
return state_machine__7352__auto____1.call(this,state_10642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7352__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7352__auto____0;
state_machine__7352__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7352__auto____1;
return state_machine__7352__auto__;
})()
;})(switch__7351__auto__,c__7407__auto__,jobs,results,process,async))
})();
var state__7409__auto__ = (function (){var statearr_10674 = f__7408__auto__.call(null);
(statearr_10674[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7407__auto__);

return statearr_10674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7409__auto__);
});})(c__7407__auto__,jobs,results,process,async))
);

return c__7407__auto__;
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
var c__7407__auto___10832 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7407__auto___10832,tc,fc){
return (function (){
var f__7408__auto__ = (function (){var switch__7351__auto__ = ((function (c__7407__auto___10832,tc,fc){
return (function (state_10807){
var state_val_10808 = (state_10807[(1)]);
if((state_val_10808 === (7))){
var inst_10803 = (state_10807[(2)]);
var state_10807__$1 = state_10807;
var statearr_10809_10833 = state_10807__$1;
(statearr_10809_10833[(2)] = inst_10803);

(statearr_10809_10833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10808 === (1))){
var state_10807__$1 = state_10807;
var statearr_10810_10834 = state_10807__$1;
(statearr_10810_10834[(2)] = null);

(statearr_10810_10834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10808 === (4))){
var inst_10784 = (state_10807[(7)]);
var inst_10784__$1 = (state_10807[(2)]);
var inst_10785 = (inst_10784__$1 == null);
var state_10807__$1 = (function (){var statearr_10811 = state_10807;
(statearr_10811[(7)] = inst_10784__$1);

return statearr_10811;
})();
if(cljs.core.truth_(inst_10785)){
var statearr_10812_10835 = state_10807__$1;
(statearr_10812_10835[(1)] = (5));

} else {
var statearr_10813_10836 = state_10807__$1;
(statearr_10813_10836[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10808 === (13))){
var state_10807__$1 = state_10807;
var statearr_10814_10837 = state_10807__$1;
(statearr_10814_10837[(2)] = null);

(statearr_10814_10837[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10808 === (6))){
var inst_10784 = (state_10807[(7)]);
var inst_10790 = p.call(null,inst_10784);
var state_10807__$1 = state_10807;
if(cljs.core.truth_(inst_10790)){
var statearr_10815_10838 = state_10807__$1;
(statearr_10815_10838[(1)] = (9));

} else {
var statearr_10816_10839 = state_10807__$1;
(statearr_10816_10839[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10808 === (3))){
var inst_10805 = (state_10807[(2)]);
var state_10807__$1 = state_10807;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10807__$1,inst_10805);
} else {
if((state_val_10808 === (12))){
var state_10807__$1 = state_10807;
var statearr_10817_10840 = state_10807__$1;
(statearr_10817_10840[(2)] = null);

(statearr_10817_10840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10808 === (2))){
var state_10807__$1 = state_10807;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10807__$1,(4),ch);
} else {
if((state_val_10808 === (11))){
var inst_10784 = (state_10807[(7)]);
var inst_10794 = (state_10807[(2)]);
var state_10807__$1 = state_10807;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10807__$1,(8),inst_10794,inst_10784);
} else {
if((state_val_10808 === (9))){
var state_10807__$1 = state_10807;
var statearr_10818_10841 = state_10807__$1;
(statearr_10818_10841[(2)] = tc);

(statearr_10818_10841[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10808 === (5))){
var inst_10787 = cljs.core.async.close_BANG_.call(null,tc);
var inst_10788 = cljs.core.async.close_BANG_.call(null,fc);
var state_10807__$1 = (function (){var statearr_10819 = state_10807;
(statearr_10819[(8)] = inst_10787);

return statearr_10819;
})();
var statearr_10820_10842 = state_10807__$1;
(statearr_10820_10842[(2)] = inst_10788);

(statearr_10820_10842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10808 === (14))){
var inst_10801 = (state_10807[(2)]);
var state_10807__$1 = state_10807;
var statearr_10821_10843 = state_10807__$1;
(statearr_10821_10843[(2)] = inst_10801);

(statearr_10821_10843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10808 === (10))){
var state_10807__$1 = state_10807;
var statearr_10822_10844 = state_10807__$1;
(statearr_10822_10844[(2)] = fc);

(statearr_10822_10844[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10808 === (8))){
var inst_10796 = (state_10807[(2)]);
var state_10807__$1 = state_10807;
if(cljs.core.truth_(inst_10796)){
var statearr_10823_10845 = state_10807__$1;
(statearr_10823_10845[(1)] = (12));

} else {
var statearr_10824_10846 = state_10807__$1;
(statearr_10824_10846[(1)] = (13));

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
});})(c__7407__auto___10832,tc,fc))
;
return ((function (switch__7351__auto__,c__7407__auto___10832,tc,fc){
return (function() {
var state_machine__7352__auto__ = null;
var state_machine__7352__auto____0 = (function (){
var statearr_10828 = [null,null,null,null,null,null,null,null,null];
(statearr_10828[(0)] = state_machine__7352__auto__);

(statearr_10828[(1)] = (1));

return statearr_10828;
});
var state_machine__7352__auto____1 = (function (state_10807){
while(true){
var ret_value__7353__auto__ = (function (){try{while(true){
var result__7354__auto__ = switch__7351__auto__.call(null,state_10807);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7354__auto__;
}
break;
}
}catch (e10829){if((e10829 instanceof Object)){
var ex__7355__auto__ = e10829;
var statearr_10830_10847 = state_10807;
(statearr_10830_10847[(5)] = ex__7355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10829;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10848 = state_10807;
state_10807 = G__10848;
continue;
} else {
return ret_value__7353__auto__;
}
break;
}
});
state_machine__7352__auto__ = function(state_10807){
switch(arguments.length){
case 0:
return state_machine__7352__auto____0.call(this);
case 1:
return state_machine__7352__auto____1.call(this,state_10807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7352__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7352__auto____0;
state_machine__7352__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7352__auto____1;
return state_machine__7352__auto__;
})()
;})(switch__7351__auto__,c__7407__auto___10832,tc,fc))
})();
var state__7409__auto__ = (function (){var statearr_10831 = f__7408__auto__.call(null);
(statearr_10831[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7407__auto___10832);

return statearr_10831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7409__auto__);
});})(c__7407__auto___10832,tc,fc))
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
var c__7407__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7407__auto__){
return (function (){
var f__7408__auto__ = (function (){var switch__7351__auto__ = ((function (c__7407__auto__){
return (function (state_10895){
var state_val_10896 = (state_10895[(1)]);
if((state_val_10896 === (7))){
var inst_10891 = (state_10895[(2)]);
var state_10895__$1 = state_10895;
var statearr_10897_10913 = state_10895__$1;
(statearr_10897_10913[(2)] = inst_10891);

(statearr_10897_10913[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10896 === (6))){
var inst_10881 = (state_10895[(7)]);
var inst_10884 = (state_10895[(8)]);
var inst_10888 = f.call(null,inst_10881,inst_10884);
var inst_10881__$1 = inst_10888;
var state_10895__$1 = (function (){var statearr_10898 = state_10895;
(statearr_10898[(7)] = inst_10881__$1);

return statearr_10898;
})();
var statearr_10899_10914 = state_10895__$1;
(statearr_10899_10914[(2)] = null);

(statearr_10899_10914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10896 === (5))){
var inst_10881 = (state_10895[(7)]);
var state_10895__$1 = state_10895;
var statearr_10900_10915 = state_10895__$1;
(statearr_10900_10915[(2)] = inst_10881);

(statearr_10900_10915[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10896 === (4))){
var inst_10884 = (state_10895[(8)]);
var inst_10884__$1 = (state_10895[(2)]);
var inst_10885 = (inst_10884__$1 == null);
var state_10895__$1 = (function (){var statearr_10901 = state_10895;
(statearr_10901[(8)] = inst_10884__$1);

return statearr_10901;
})();
if(cljs.core.truth_(inst_10885)){
var statearr_10902_10916 = state_10895__$1;
(statearr_10902_10916[(1)] = (5));

} else {
var statearr_10903_10917 = state_10895__$1;
(statearr_10903_10917[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10896 === (3))){
var inst_10893 = (state_10895[(2)]);
var state_10895__$1 = state_10895;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10895__$1,inst_10893);
} else {
if((state_val_10896 === (2))){
var state_10895__$1 = state_10895;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10895__$1,(4),ch);
} else {
if((state_val_10896 === (1))){
var inst_10881 = init;
var state_10895__$1 = (function (){var statearr_10904 = state_10895;
(statearr_10904[(7)] = inst_10881);

return statearr_10904;
})();
var statearr_10905_10918 = state_10895__$1;
(statearr_10905_10918[(2)] = null);

(statearr_10905_10918[(1)] = (2));


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
});})(c__7407__auto__))
;
return ((function (switch__7351__auto__,c__7407__auto__){
return (function() {
var state_machine__7352__auto__ = null;
var state_machine__7352__auto____0 = (function (){
var statearr_10909 = [null,null,null,null,null,null,null,null,null];
(statearr_10909[(0)] = state_machine__7352__auto__);

(statearr_10909[(1)] = (1));

return statearr_10909;
});
var state_machine__7352__auto____1 = (function (state_10895){
while(true){
var ret_value__7353__auto__ = (function (){try{while(true){
var result__7354__auto__ = switch__7351__auto__.call(null,state_10895);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7354__auto__;
}
break;
}
}catch (e10910){if((e10910 instanceof Object)){
var ex__7355__auto__ = e10910;
var statearr_10911_10919 = state_10895;
(statearr_10911_10919[(5)] = ex__7355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10895);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10920 = state_10895;
state_10895 = G__10920;
continue;
} else {
return ret_value__7353__auto__;
}
break;
}
});
state_machine__7352__auto__ = function(state_10895){
switch(arguments.length){
case 0:
return state_machine__7352__auto____0.call(this);
case 1:
return state_machine__7352__auto____1.call(this,state_10895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7352__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7352__auto____0;
state_machine__7352__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7352__auto____1;
return state_machine__7352__auto__;
})()
;})(switch__7351__auto__,c__7407__auto__))
})();
var state__7409__auto__ = (function (){var statearr_10912 = f__7408__auto__.call(null);
(statearr_10912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7407__auto__);

return statearr_10912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7409__auto__);
});})(c__7407__auto__))
);

return c__7407__auto__;
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
var c__7407__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7407__auto__){
return (function (){
var f__7408__auto__ = (function (){var switch__7351__auto__ = ((function (c__7407__auto__){
return (function (state_10994){
var state_val_10995 = (state_10994[(1)]);
if((state_val_10995 === (7))){
var inst_10976 = (state_10994[(2)]);
var state_10994__$1 = state_10994;
var statearr_10996_11019 = state_10994__$1;
(statearr_10996_11019[(2)] = inst_10976);

(statearr_10996_11019[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10995 === (1))){
var inst_10970 = cljs.core.seq.call(null,coll);
var inst_10971 = inst_10970;
var state_10994__$1 = (function (){var statearr_10997 = state_10994;
(statearr_10997[(7)] = inst_10971);

return statearr_10997;
})();
var statearr_10998_11020 = state_10994__$1;
(statearr_10998_11020[(2)] = null);

(statearr_10998_11020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10995 === (4))){
var inst_10971 = (state_10994[(7)]);
var inst_10974 = cljs.core.first.call(null,inst_10971);
var state_10994__$1 = state_10994;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10994__$1,(7),ch,inst_10974);
} else {
if((state_val_10995 === (13))){
var inst_10988 = (state_10994[(2)]);
var state_10994__$1 = state_10994;
var statearr_10999_11021 = state_10994__$1;
(statearr_10999_11021[(2)] = inst_10988);

(statearr_10999_11021[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10995 === (6))){
var inst_10979 = (state_10994[(2)]);
var state_10994__$1 = state_10994;
if(cljs.core.truth_(inst_10979)){
var statearr_11000_11022 = state_10994__$1;
(statearr_11000_11022[(1)] = (8));

} else {
var statearr_11001_11023 = state_10994__$1;
(statearr_11001_11023[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10995 === (3))){
var inst_10992 = (state_10994[(2)]);
var state_10994__$1 = state_10994;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10994__$1,inst_10992);
} else {
if((state_val_10995 === (12))){
var state_10994__$1 = state_10994;
var statearr_11002_11024 = state_10994__$1;
(statearr_11002_11024[(2)] = null);

(statearr_11002_11024[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10995 === (2))){
var inst_10971 = (state_10994[(7)]);
var state_10994__$1 = state_10994;
if(cljs.core.truth_(inst_10971)){
var statearr_11003_11025 = state_10994__$1;
(statearr_11003_11025[(1)] = (4));

} else {
var statearr_11004_11026 = state_10994__$1;
(statearr_11004_11026[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10995 === (11))){
var inst_10985 = cljs.core.async.close_BANG_.call(null,ch);
var state_10994__$1 = state_10994;
var statearr_11005_11027 = state_10994__$1;
(statearr_11005_11027[(2)] = inst_10985);

(statearr_11005_11027[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10995 === (9))){
var state_10994__$1 = state_10994;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11006_11028 = state_10994__$1;
(statearr_11006_11028[(1)] = (11));

} else {
var statearr_11007_11029 = state_10994__$1;
(statearr_11007_11029[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10995 === (5))){
var inst_10971 = (state_10994[(7)]);
var state_10994__$1 = state_10994;
var statearr_11008_11030 = state_10994__$1;
(statearr_11008_11030[(2)] = inst_10971);

(statearr_11008_11030[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10995 === (10))){
var inst_10990 = (state_10994[(2)]);
var state_10994__$1 = state_10994;
var statearr_11009_11031 = state_10994__$1;
(statearr_11009_11031[(2)] = inst_10990);

(statearr_11009_11031[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10995 === (8))){
var inst_10971 = (state_10994[(7)]);
var inst_10981 = cljs.core.next.call(null,inst_10971);
var inst_10971__$1 = inst_10981;
var state_10994__$1 = (function (){var statearr_11010 = state_10994;
(statearr_11010[(7)] = inst_10971__$1);

return statearr_11010;
})();
var statearr_11011_11032 = state_10994__$1;
(statearr_11011_11032[(2)] = null);

(statearr_11011_11032[(1)] = (2));


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
});})(c__7407__auto__))
;
return ((function (switch__7351__auto__,c__7407__auto__){
return (function() {
var state_machine__7352__auto__ = null;
var state_machine__7352__auto____0 = (function (){
var statearr_11015 = [null,null,null,null,null,null,null,null];
(statearr_11015[(0)] = state_machine__7352__auto__);

(statearr_11015[(1)] = (1));

return statearr_11015;
});
var state_machine__7352__auto____1 = (function (state_10994){
while(true){
var ret_value__7353__auto__ = (function (){try{while(true){
var result__7354__auto__ = switch__7351__auto__.call(null,state_10994);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7354__auto__;
}
break;
}
}catch (e11016){if((e11016 instanceof Object)){
var ex__7355__auto__ = e11016;
var statearr_11017_11033 = state_10994;
(statearr_11017_11033[(5)] = ex__7355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10994);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11016;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11034 = state_10994;
state_10994 = G__11034;
continue;
} else {
return ret_value__7353__auto__;
}
break;
}
});
state_machine__7352__auto__ = function(state_10994){
switch(arguments.length){
case 0:
return state_machine__7352__auto____0.call(this);
case 1:
return state_machine__7352__auto____1.call(this,state_10994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7352__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7352__auto____0;
state_machine__7352__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7352__auto____1;
return state_machine__7352__auto__;
})()
;})(switch__7351__auto__,c__7407__auto__))
})();
var state__7409__auto__ = (function (){var statearr_11018 = f__7408__auto__.call(null);
(statearr_11018[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7407__auto__);

return statearr_11018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7409__auto__);
});})(c__7407__auto__))
);

return c__7407__auto__;
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

cljs.core.async.Mux = (function (){var obj11036 = {};
return obj11036;
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


cljs.core.async.Mult = (function (){var obj11038 = {};
return obj11038;
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
if(typeof cljs.core.async.t11260 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11260 = (function (cs,ch,mult,meta11261){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11261 = meta11261;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11260.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t11260.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t11260.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t11260.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t11260.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t11260.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t11260.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11262){
var self__ = this;
var _11262__$1 = this;
return self__.meta11261;
});})(cs))
;

cljs.core.async.t11260.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11262,meta11261__$1){
var self__ = this;
var _11262__$1 = this;
return (new cljs.core.async.t11260(self__.cs,self__.ch,self__.mult,meta11261__$1));
});})(cs))
;

cljs.core.async.t11260.cljs$lang$type = true;

cljs.core.async.t11260.cljs$lang$ctorStr = "cljs.core.async/t11260";

cljs.core.async.t11260.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4384__auto__,writer__4385__auto__,opt__4386__auto__){
return cljs.core._write.call(null,writer__4385__auto__,"cljs.core.async/t11260");
});})(cs))
;

cljs.core.async.__GT_t11260 = ((function (cs){
return (function __GT_t11260(cs__$1,ch__$1,mult__$1,meta11261){
return (new cljs.core.async.t11260(cs__$1,ch__$1,mult__$1,meta11261));
});})(cs))
;

}

return (new cljs.core.async.t11260(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/blischalk/node-webkit-apps/hoard/target/base+system+user+dev/cljsbuild-compiler-0/cljs/core/async.cljs"], null)));
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
var c__7407__auto___11481 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7407__auto___11481,cs,m,dchan,dctr,done){
return (function (){
var f__7408__auto__ = (function (){var switch__7351__auto__ = ((function (c__7407__auto___11481,cs,m,dchan,dctr,done){
return (function (state_11393){
var state_val_11394 = (state_11393[(1)]);
if((state_val_11394 === (7))){
var inst_11389 = (state_11393[(2)]);
var state_11393__$1 = state_11393;
var statearr_11395_11482 = state_11393__$1;
(statearr_11395_11482[(2)] = inst_11389);

(statearr_11395_11482[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11394 === (20))){
var inst_11294 = (state_11393[(7)]);
var inst_11304 = cljs.core.first.call(null,inst_11294);
var inst_11305 = cljs.core.nth.call(null,inst_11304,(0),null);
var inst_11306 = cljs.core.nth.call(null,inst_11304,(1),null);
var state_11393__$1 = (function (){var statearr_11396 = state_11393;
(statearr_11396[(8)] = inst_11305);

return statearr_11396;
})();
if(cljs.core.truth_(inst_11306)){
var statearr_11397_11483 = state_11393__$1;
(statearr_11397_11483[(1)] = (22));

} else {
var statearr_11398_11484 = state_11393__$1;
(statearr_11398_11484[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11394 === (27))){
var inst_11265 = (state_11393[(9)]);
var inst_11336 = (state_11393[(10)]);
var inst_11334 = (state_11393[(11)]);
var inst_11341 = (state_11393[(12)]);
var inst_11341__$1 = cljs.core._nth.call(null,inst_11334,inst_11336);
var inst_11342 = cljs.core.async.put_BANG_.call(null,inst_11341__$1,inst_11265,done);
var state_11393__$1 = (function (){var statearr_11399 = state_11393;
(statearr_11399[(12)] = inst_11341__$1);

return statearr_11399;
})();
if(cljs.core.truth_(inst_11342)){
var statearr_11400_11485 = state_11393__$1;
(statearr_11400_11485[(1)] = (30));

} else {
var statearr_11401_11486 = state_11393__$1;
(statearr_11401_11486[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11394 === (1))){
var state_11393__$1 = state_11393;
var statearr_11402_11487 = state_11393__$1;
(statearr_11402_11487[(2)] = null);

(statearr_11402_11487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11394 === (24))){
var inst_11294 = (state_11393[(7)]);
var inst_11311 = (state_11393[(2)]);
var inst_11312 = cljs.core.next.call(null,inst_11294);
var inst_11274 = inst_11312;
var inst_11275 = null;
var inst_11276 = (0);
var inst_11277 = (0);
var state_11393__$1 = (function (){var statearr_11403 = state_11393;
(statearr_11403[(13)] = inst_11275);

(statearr_11403[(14)] = inst_11276);

(statearr_11403[(15)] = inst_11274);

(statearr_11403[(16)] = inst_11311);

(statearr_11403[(17)] = inst_11277);

return statearr_11403;
})();
var statearr_11404_11488 = state_11393__$1;
(statearr_11404_11488[(2)] = null);

(statearr_11404_11488[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11394 === (39))){
var state_11393__$1 = state_11393;
var statearr_11408_11489 = state_11393__$1;
(statearr_11408_11489[(2)] = null);

(statearr_11408_11489[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11394 === (4))){
var inst_11265 = (state_11393[(9)]);
var inst_11265__$1 = (state_11393[(2)]);
var inst_11266 = (inst_11265__$1 == null);
var state_11393__$1 = (function (){var statearr_11409 = state_11393;
(statearr_11409[(9)] = inst_11265__$1);

return statearr_11409;
})();
if(cljs.core.truth_(inst_11266)){
var statearr_11410_11490 = state_11393__$1;
(statearr_11410_11490[(1)] = (5));

} else {
var statearr_11411_11491 = state_11393__$1;
(statearr_11411_11491[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11394 === (15))){
var inst_11275 = (state_11393[(13)]);
var inst_11276 = (state_11393[(14)]);
var inst_11274 = (state_11393[(15)]);
var inst_11277 = (state_11393[(17)]);
var inst_11290 = (state_11393[(2)]);
var inst_11291 = (inst_11277 + (1));
var tmp11405 = inst_11275;
var tmp11406 = inst_11276;
var tmp11407 = inst_11274;
var inst_11274__$1 = tmp11407;
var inst_11275__$1 = tmp11405;
var inst_11276__$1 = tmp11406;
var inst_11277__$1 = inst_11291;
var state_11393__$1 = (function (){var statearr_11412 = state_11393;
(statearr_11412[(13)] = inst_11275__$1);

(statearr_11412[(14)] = inst_11276__$1);

(statearr_11412[(18)] = inst_11290);

(statearr_11412[(15)] = inst_11274__$1);

(statearr_11412[(17)] = inst_11277__$1);

return statearr_11412;
})();
var statearr_11413_11492 = state_11393__$1;
(statearr_11413_11492[(2)] = null);

(statearr_11413_11492[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11394 === (21))){
var inst_11315 = (state_11393[(2)]);
var state_11393__$1 = state_11393;
var statearr_11417_11493 = state_11393__$1;
(statearr_11417_11493[(2)] = inst_11315);

(statearr_11417_11493[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11394 === (31))){
var inst_11341 = (state_11393[(12)]);
var inst_11345 = done.call(null,null);
var inst_11346 = cljs.core.async.untap_STAR_.call(null,m,inst_11341);
var state_11393__$1 = (function (){var statearr_11418 = state_11393;
(statearr_11418[(19)] = inst_11345);

return statearr_11418;
})();
var statearr_11419_11494 = state_11393__$1;
(statearr_11419_11494[(2)] = inst_11346);

(statearr_11419_11494[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11394 === (32))){
var inst_11333 = (state_11393[(20)]);
var inst_11335 = (state_11393[(21)]);
var inst_11336 = (state_11393[(10)]);
var inst_11334 = (state_11393[(11)]);
var inst_11348 = (state_11393[(2)]);
var inst_11349 = (inst_11336 + (1));
var tmp11414 = inst_11333;
var tmp11415 = inst_11335;
var tmp11416 = inst_11334;
var inst_11333__$1 = tmp11414;
var inst_11334__$1 = tmp11416;
var inst_11335__$1 = tmp11415;
var inst_11336__$1 = inst_11349;
var state_11393__$1 = (function (){var statearr_11420 = state_11393;
(statearr_11420[(20)] = inst_11333__$1);

(statearr_11420[(21)] = inst_11335__$1);

(statearr_11420[(10)] = inst_11336__$1);

(statearr_11420[(11)] = inst_11334__$1);

(statearr_11420[(22)] = inst_11348);

return statearr_11420;
})();
var statearr_11421_11495 = state_11393__$1;
(statearr_11421_11495[(2)] = null);

(statearr_11421_11495[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11394 === (40))){
var inst_11361 = (state_11393[(23)]);
var inst_11365 = done.call(null,null);
var inst_11366 = cljs.core.async.untap_STAR_.call(null,m,inst_11361);
var state_11393__$1 = (function (){var statearr_11422 = state_11393;
(statearr_11422[(24)] = inst_11365);

return statearr_11422;
})();
var statearr_11423_11496 = state_11393__$1;
(statearr_11423_11496[(2)] = inst_11366);

(statearr_11423_11496[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11394 === (33))){
var inst_11352 = (state_11393[(25)]);
var inst_11354 = cljs.core.chunked_seq_QMARK_.call(null,inst_11352);
var state_11393__$1 = state_11393;
if(inst_11354){
var statearr_11424_11497 = state_11393__$1;
(statearr_11424_11497[(1)] = (36));

} else {
var statearr_11425_11498 = state_11393__$1;
(statearr_11425_11498[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11394 === (13))){
var inst_11284 = (state_11393[(26)]);
var inst_11287 = cljs.core.async.close_BANG_.call(null,inst_11284);
var state_11393__$1 = state_11393;
var statearr_11426_11499 = state_11393__$1;
(statearr_11426_11499[(2)] = inst_11287);

(statearr_11426_11499[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11394 === (22))){
var inst_11305 = (state_11393[(8)]);
var inst_11308 = cljs.core.async.close_BANG_.call(null,inst_11305);
var state_11393__$1 = state_11393;
var statearr_11427_11500 = state_11393__$1;
(statearr_11427_11500[(2)] = inst_11308);

(statearr_11427_11500[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11394 === (36))){
var inst_11352 = (state_11393[(25)]);
var inst_11356 = cljs.core.chunk_first.call(null,inst_11352);
var inst_11357 = cljs.core.chunk_rest.call(null,inst_11352);
var inst_11358 = cljs.core.count.call(null,inst_11356);
var inst_11333 = inst_11357;
var inst_11334 = inst_11356;
var inst_11335 = inst_11358;
var inst_11336 = (0);
var state_11393__$1 = (function (){var statearr_11428 = state_11393;
(statearr_11428[(20)] = inst_11333);

(statearr_11428[(21)] = inst_11335);

(statearr_11428[(10)] = inst_11336);

(statearr_11428[(11)] = inst_11334);

return statearr_11428;
})();
var statearr_11429_11501 = state_11393__$1;
(statearr_11429_11501[(2)] = null);

(statearr_11429_11501[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11394 === (41))){
var inst_11352 = (state_11393[(25)]);
var inst_11368 = (state_11393[(2)]);
var inst_11369 = cljs.core.next.call(null,inst_11352);
var inst_11333 = inst_11369;
var inst_11334 = null;
var inst_11335 = (0);
var inst_11336 = (0);
var state_11393__$1 = (function (){var statearr_11430 = state_11393;
(statearr_11430[(27)] = inst_11368);

(statearr_11430[(20)] = inst_11333);

(statearr_11430[(21)] = inst_11335);

(statearr_11430[(10)] = inst_11336);

(statearr_11430[(11)] = inst_11334);

return statearr_11430;
})();
var statearr_11431_11502 = state_11393__$1;
(statearr_11431_11502[(2)] = null);

(statearr_11431_11502[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11394 === (43))){
var state_11393__$1 = state_11393;
var statearr_11432_11503 = state_11393__$1;
(statearr_11432_11503[(2)] = null);

(statearr_11432_11503[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11394 === (29))){
var inst_11377 = (state_11393[(2)]);
var state_11393__$1 = state_11393;
var statearr_11433_11504 = state_11393__$1;
(statearr_11433_11504[(2)] = inst_11377);

(statearr_11433_11504[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11394 === (44))){
var inst_11386 = (state_11393[(2)]);
var state_11393__$1 = (function (){var statearr_11434 = state_11393;
(statearr_11434[(28)] = inst_11386);

return statearr_11434;
})();
var statearr_11435_11505 = state_11393__$1;
(statearr_11435_11505[(2)] = null);

(statearr_11435_11505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11394 === (6))){
var inst_11325 = (state_11393[(29)]);
var inst_11324 = cljs.core.deref.call(null,cs);
var inst_11325__$1 = cljs.core.keys.call(null,inst_11324);
var inst_11326 = cljs.core.count.call(null,inst_11325__$1);
var inst_11327 = cljs.core.reset_BANG_.call(null,dctr,inst_11326);
var inst_11332 = cljs.core.seq.call(null,inst_11325__$1);
var inst_11333 = inst_11332;
var inst_11334 = null;
var inst_11335 = (0);
var inst_11336 = (0);
var state_11393__$1 = (function (){var statearr_11436 = state_11393;
(statearr_11436[(20)] = inst_11333);

(statearr_11436[(21)] = inst_11335);

(statearr_11436[(10)] = inst_11336);

(statearr_11436[(29)] = inst_11325__$1);

(statearr_11436[(11)] = inst_11334);

(statearr_11436[(30)] = inst_11327);

return statearr_11436;
})();
var statearr_11437_11506 = state_11393__$1;
(statearr_11437_11506[(2)] = null);

(statearr_11437_11506[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11394 === (28))){
var inst_11352 = (state_11393[(25)]);
var inst_11333 = (state_11393[(20)]);
var inst_11352__$1 = cljs.core.seq.call(null,inst_11333);
var state_11393__$1 = (function (){var statearr_11438 = state_11393;
(statearr_11438[(25)] = inst_11352__$1);

return statearr_11438;
})();
if(inst_11352__$1){
var statearr_11439_11507 = state_11393__$1;
(statearr_11439_11507[(1)] = (33));

} else {
var statearr_11440_11508 = state_11393__$1;
(statearr_11440_11508[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11394 === (25))){
var inst_11335 = (state_11393[(21)]);
var inst_11336 = (state_11393[(10)]);
var inst_11338 = (inst_11336 < inst_11335);
var inst_11339 = inst_11338;
var state_11393__$1 = state_11393;
if(cljs.core.truth_(inst_11339)){
var statearr_11441_11509 = state_11393__$1;
(statearr_11441_11509[(1)] = (27));

} else {
var statearr_11442_11510 = state_11393__$1;
(statearr_11442_11510[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11394 === (34))){
var state_11393__$1 = state_11393;
var statearr_11443_11511 = state_11393__$1;
(statearr_11443_11511[(2)] = null);

(statearr_11443_11511[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11394 === (17))){
var state_11393__$1 = state_11393;
var statearr_11444_11512 = state_11393__$1;
(statearr_11444_11512[(2)] = null);

(statearr_11444_11512[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11394 === (3))){
var inst_11391 = (state_11393[(2)]);
var state_11393__$1 = state_11393;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11393__$1,inst_11391);
} else {
if((state_val_11394 === (12))){
var inst_11320 = (state_11393[(2)]);
var state_11393__$1 = state_11393;
var statearr_11445_11513 = state_11393__$1;
(statearr_11445_11513[(2)] = inst_11320);

(statearr_11445_11513[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11394 === (2))){
var state_11393__$1 = state_11393;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11393__$1,(4),ch);
} else {
if((state_val_11394 === (23))){
var state_11393__$1 = state_11393;
var statearr_11446_11514 = state_11393__$1;
(statearr_11446_11514[(2)] = null);

(statearr_11446_11514[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11394 === (35))){
var inst_11375 = (state_11393[(2)]);
var state_11393__$1 = state_11393;
var statearr_11447_11515 = state_11393__$1;
(statearr_11447_11515[(2)] = inst_11375);

(statearr_11447_11515[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11394 === (19))){
var inst_11294 = (state_11393[(7)]);
var inst_11298 = cljs.core.chunk_first.call(null,inst_11294);
var inst_11299 = cljs.core.chunk_rest.call(null,inst_11294);
var inst_11300 = cljs.core.count.call(null,inst_11298);
var inst_11274 = inst_11299;
var inst_11275 = inst_11298;
var inst_11276 = inst_11300;
var inst_11277 = (0);
var state_11393__$1 = (function (){var statearr_11448 = state_11393;
(statearr_11448[(13)] = inst_11275);

(statearr_11448[(14)] = inst_11276);

(statearr_11448[(15)] = inst_11274);

(statearr_11448[(17)] = inst_11277);

return statearr_11448;
})();
var statearr_11449_11516 = state_11393__$1;
(statearr_11449_11516[(2)] = null);

(statearr_11449_11516[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11394 === (11))){
var inst_11294 = (state_11393[(7)]);
var inst_11274 = (state_11393[(15)]);
var inst_11294__$1 = cljs.core.seq.call(null,inst_11274);
var state_11393__$1 = (function (){var statearr_11450 = state_11393;
(statearr_11450[(7)] = inst_11294__$1);

return statearr_11450;
})();
if(inst_11294__$1){
var statearr_11451_11517 = state_11393__$1;
(statearr_11451_11517[(1)] = (16));

} else {
var statearr_11452_11518 = state_11393__$1;
(statearr_11452_11518[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11394 === (9))){
var inst_11322 = (state_11393[(2)]);
var state_11393__$1 = state_11393;
var statearr_11453_11519 = state_11393__$1;
(statearr_11453_11519[(2)] = inst_11322);

(statearr_11453_11519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11394 === (5))){
var inst_11272 = cljs.core.deref.call(null,cs);
var inst_11273 = cljs.core.seq.call(null,inst_11272);
var inst_11274 = inst_11273;
var inst_11275 = null;
var inst_11276 = (0);
var inst_11277 = (0);
var state_11393__$1 = (function (){var statearr_11454 = state_11393;
(statearr_11454[(13)] = inst_11275);

(statearr_11454[(14)] = inst_11276);

(statearr_11454[(15)] = inst_11274);

(statearr_11454[(17)] = inst_11277);

return statearr_11454;
})();
var statearr_11455_11520 = state_11393__$1;
(statearr_11455_11520[(2)] = null);

(statearr_11455_11520[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11394 === (14))){
var state_11393__$1 = state_11393;
var statearr_11456_11521 = state_11393__$1;
(statearr_11456_11521[(2)] = null);

(statearr_11456_11521[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11394 === (45))){
var inst_11383 = (state_11393[(2)]);
var state_11393__$1 = state_11393;
var statearr_11457_11522 = state_11393__$1;
(statearr_11457_11522[(2)] = inst_11383);

(statearr_11457_11522[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11394 === (26))){
var inst_11325 = (state_11393[(29)]);
var inst_11379 = (state_11393[(2)]);
var inst_11380 = cljs.core.seq.call(null,inst_11325);
var state_11393__$1 = (function (){var statearr_11458 = state_11393;
(statearr_11458[(31)] = inst_11379);

return statearr_11458;
})();
if(inst_11380){
var statearr_11459_11523 = state_11393__$1;
(statearr_11459_11523[(1)] = (42));

} else {
var statearr_11460_11524 = state_11393__$1;
(statearr_11460_11524[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11394 === (16))){
var inst_11294 = (state_11393[(7)]);
var inst_11296 = cljs.core.chunked_seq_QMARK_.call(null,inst_11294);
var state_11393__$1 = state_11393;
if(inst_11296){
var statearr_11461_11525 = state_11393__$1;
(statearr_11461_11525[(1)] = (19));

} else {
var statearr_11462_11526 = state_11393__$1;
(statearr_11462_11526[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11394 === (38))){
var inst_11372 = (state_11393[(2)]);
var state_11393__$1 = state_11393;
var statearr_11463_11527 = state_11393__$1;
(statearr_11463_11527[(2)] = inst_11372);

(statearr_11463_11527[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11394 === (30))){
var state_11393__$1 = state_11393;
var statearr_11464_11528 = state_11393__$1;
(statearr_11464_11528[(2)] = null);

(statearr_11464_11528[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11394 === (10))){
var inst_11275 = (state_11393[(13)]);
var inst_11277 = (state_11393[(17)]);
var inst_11283 = cljs.core._nth.call(null,inst_11275,inst_11277);
var inst_11284 = cljs.core.nth.call(null,inst_11283,(0),null);
var inst_11285 = cljs.core.nth.call(null,inst_11283,(1),null);
var state_11393__$1 = (function (){var statearr_11465 = state_11393;
(statearr_11465[(26)] = inst_11284);

return statearr_11465;
})();
if(cljs.core.truth_(inst_11285)){
var statearr_11466_11529 = state_11393__$1;
(statearr_11466_11529[(1)] = (13));

} else {
var statearr_11467_11530 = state_11393__$1;
(statearr_11467_11530[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11394 === (18))){
var inst_11318 = (state_11393[(2)]);
var state_11393__$1 = state_11393;
var statearr_11468_11531 = state_11393__$1;
(statearr_11468_11531[(2)] = inst_11318);

(statearr_11468_11531[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11394 === (42))){
var state_11393__$1 = state_11393;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11393__$1,(45),dchan);
} else {
if((state_val_11394 === (37))){
var inst_11352 = (state_11393[(25)]);
var inst_11265 = (state_11393[(9)]);
var inst_11361 = (state_11393[(23)]);
var inst_11361__$1 = cljs.core.first.call(null,inst_11352);
var inst_11362 = cljs.core.async.put_BANG_.call(null,inst_11361__$1,inst_11265,done);
var state_11393__$1 = (function (){var statearr_11469 = state_11393;
(statearr_11469[(23)] = inst_11361__$1);

return statearr_11469;
})();
if(cljs.core.truth_(inst_11362)){
var statearr_11470_11532 = state_11393__$1;
(statearr_11470_11532[(1)] = (39));

} else {
var statearr_11471_11533 = state_11393__$1;
(statearr_11471_11533[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11394 === (8))){
var inst_11276 = (state_11393[(14)]);
var inst_11277 = (state_11393[(17)]);
var inst_11279 = (inst_11277 < inst_11276);
var inst_11280 = inst_11279;
var state_11393__$1 = state_11393;
if(cljs.core.truth_(inst_11280)){
var statearr_11472_11534 = state_11393__$1;
(statearr_11472_11534[(1)] = (10));

} else {
var statearr_11473_11535 = state_11393__$1;
(statearr_11473_11535[(1)] = (11));

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
});})(c__7407__auto___11481,cs,m,dchan,dctr,done))
;
return ((function (switch__7351__auto__,c__7407__auto___11481,cs,m,dchan,dctr,done){
return (function() {
var state_machine__7352__auto__ = null;
var state_machine__7352__auto____0 = (function (){
var statearr_11477 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11477[(0)] = state_machine__7352__auto__);

(statearr_11477[(1)] = (1));

return statearr_11477;
});
var state_machine__7352__auto____1 = (function (state_11393){
while(true){
var ret_value__7353__auto__ = (function (){try{while(true){
var result__7354__auto__ = switch__7351__auto__.call(null,state_11393);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7354__auto__;
}
break;
}
}catch (e11478){if((e11478 instanceof Object)){
var ex__7355__auto__ = e11478;
var statearr_11479_11536 = state_11393;
(statearr_11479_11536[(5)] = ex__7355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11393);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11478;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11537 = state_11393;
state_11393 = G__11537;
continue;
} else {
return ret_value__7353__auto__;
}
break;
}
});
state_machine__7352__auto__ = function(state_11393){
switch(arguments.length){
case 0:
return state_machine__7352__auto____0.call(this);
case 1:
return state_machine__7352__auto____1.call(this,state_11393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7352__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7352__auto____0;
state_machine__7352__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7352__auto____1;
return state_machine__7352__auto__;
})()
;})(switch__7351__auto__,c__7407__auto___11481,cs,m,dchan,dctr,done))
})();
var state__7409__auto__ = (function (){var statearr_11480 = f__7408__auto__.call(null);
(statearr_11480[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7407__auto___11481);

return statearr_11480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7409__auto__);
});})(c__7407__auto___11481,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj11539 = {};
return obj11539;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__11540){
var map__11545 = p__11540;
var map__11545__$1 = ((cljs.core.seq_QMARK_.call(null,map__11545))?cljs.core.apply.call(null,cljs.core.hash_map,map__11545):map__11545);
var opts = map__11545__$1;
var statearr_11546_11549 = state;
(statearr_11546_11549[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__11545,map__11545__$1,opts){
return (function (val){
var statearr_11547_11550 = state;
(statearr_11547_11550[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__11545,map__11545__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_11548_11551 = state;
(statearr_11548_11551[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__11540 = null;
if (arguments.length > 3) {
var G__11552__i = 0, G__11552__a = new Array(arguments.length -  3);
while (G__11552__i < G__11552__a.length) {G__11552__a[G__11552__i] = arguments[G__11552__i + 3]; ++G__11552__i;}
  p__11540 = new cljs.core.IndexedSeq(G__11552__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__11540);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__11553){
var state = cljs.core.first(arglist__11553);
arglist__11553 = cljs.core.next(arglist__11553);
var cont_block = cljs.core.first(arglist__11553);
arglist__11553 = cljs.core.next(arglist__11553);
var ports = cljs.core.first(arglist__11553);
var p__11540 = cljs.core.rest(arglist__11553);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__11540);
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
if(typeof cljs.core.async.t11673 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11673 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta11674){
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
this.meta11674 = meta11674;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11673.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t11673.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t11673.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t11673.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t11673.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t11673.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t11673.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t11673.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t11673.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11675){
var self__ = this;
var _11675__$1 = this;
return self__.meta11674;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t11673.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11675,meta11674__$1){
var self__ = this;
var _11675__$1 = this;
return (new cljs.core.async.t11673(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta11674__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t11673.cljs$lang$type = true;

cljs.core.async.t11673.cljs$lang$ctorStr = "cljs.core.async/t11673";

cljs.core.async.t11673.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4384__auto__,writer__4385__auto__,opt__4386__auto__){
return cljs.core._write.call(null,writer__4385__auto__,"cljs.core.async/t11673");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t11673 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t11673(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11674){
return (new cljs.core.async.t11673(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11674));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t11673(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/blischalk/node-webkit-apps/hoard/target/base+system+user+dev/cljsbuild-compiler-0/cljs/core/async.cljs"], null)));
})()
;
var c__7407__auto___11792 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7407__auto___11792,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7408__auto__ = (function (){var switch__7351__auto__ = ((function (c__7407__auto___11792,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_11745){
var state_val_11746 = (state_11745[(1)]);
if((state_val_11746 === (7))){
var inst_11689 = (state_11745[(7)]);
var inst_11694 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11689);
var state_11745__$1 = state_11745;
var statearr_11747_11793 = state_11745__$1;
(statearr_11747_11793[(2)] = inst_11694);

(statearr_11747_11793[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11746 === (20))){
var inst_11704 = (state_11745[(8)]);
var state_11745__$1 = state_11745;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11745__$1,(23),out,inst_11704);
} else {
if((state_val_11746 === (1))){
var inst_11679 = (state_11745[(9)]);
var inst_11679__$1 = calc_state.call(null);
var inst_11680 = cljs.core.seq_QMARK_.call(null,inst_11679__$1);
var state_11745__$1 = (function (){var statearr_11748 = state_11745;
(statearr_11748[(9)] = inst_11679__$1);

return statearr_11748;
})();
if(inst_11680){
var statearr_11749_11794 = state_11745__$1;
(statearr_11749_11794[(1)] = (2));

} else {
var statearr_11750_11795 = state_11745__$1;
(statearr_11750_11795[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11746 === (24))){
var inst_11697 = (state_11745[(10)]);
var inst_11689 = inst_11697;
var state_11745__$1 = (function (){var statearr_11751 = state_11745;
(statearr_11751[(7)] = inst_11689);

return statearr_11751;
})();
var statearr_11752_11796 = state_11745__$1;
(statearr_11752_11796[(2)] = null);

(statearr_11752_11796[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11746 === (4))){
var inst_11679 = (state_11745[(9)]);
var inst_11685 = (state_11745[(2)]);
var inst_11686 = cljs.core.get.call(null,inst_11685,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_11687 = cljs.core.get.call(null,inst_11685,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11688 = cljs.core.get.call(null,inst_11685,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11689 = inst_11679;
var state_11745__$1 = (function (){var statearr_11753 = state_11745;
(statearr_11753[(7)] = inst_11689);

(statearr_11753[(11)] = inst_11688);

(statearr_11753[(12)] = inst_11687);

(statearr_11753[(13)] = inst_11686);

return statearr_11753;
})();
var statearr_11754_11797 = state_11745__$1;
(statearr_11754_11797[(2)] = null);

(statearr_11754_11797[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11746 === (15))){
var state_11745__$1 = state_11745;
var statearr_11755_11798 = state_11745__$1;
(statearr_11755_11798[(2)] = null);

(statearr_11755_11798[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11746 === (21))){
var inst_11697 = (state_11745[(10)]);
var inst_11689 = inst_11697;
var state_11745__$1 = (function (){var statearr_11756 = state_11745;
(statearr_11756[(7)] = inst_11689);

return statearr_11756;
})();
var statearr_11757_11799 = state_11745__$1;
(statearr_11757_11799[(2)] = null);

(statearr_11757_11799[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11746 === (13))){
var inst_11741 = (state_11745[(2)]);
var state_11745__$1 = state_11745;
var statearr_11758_11800 = state_11745__$1;
(statearr_11758_11800[(2)] = inst_11741);

(statearr_11758_11800[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11746 === (22))){
var inst_11739 = (state_11745[(2)]);
var state_11745__$1 = state_11745;
var statearr_11759_11801 = state_11745__$1;
(statearr_11759_11801[(2)] = inst_11739);

(statearr_11759_11801[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11746 === (6))){
var inst_11743 = (state_11745[(2)]);
var state_11745__$1 = state_11745;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11745__$1,inst_11743);
} else {
if((state_val_11746 === (25))){
var state_11745__$1 = state_11745;
var statearr_11760_11802 = state_11745__$1;
(statearr_11760_11802[(2)] = null);

(statearr_11760_11802[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11746 === (17))){
var inst_11719 = (state_11745[(14)]);
var state_11745__$1 = state_11745;
var statearr_11761_11803 = state_11745__$1;
(statearr_11761_11803[(2)] = inst_11719);

(statearr_11761_11803[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11746 === (3))){
var inst_11679 = (state_11745[(9)]);
var state_11745__$1 = state_11745;
var statearr_11762_11804 = state_11745__$1;
(statearr_11762_11804[(2)] = inst_11679);

(statearr_11762_11804[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11746 === (12))){
var inst_11705 = (state_11745[(15)]);
var inst_11719 = (state_11745[(14)]);
var inst_11700 = (state_11745[(16)]);
var inst_11719__$1 = inst_11700.call(null,inst_11705);
var state_11745__$1 = (function (){var statearr_11763 = state_11745;
(statearr_11763[(14)] = inst_11719__$1);

return statearr_11763;
})();
if(cljs.core.truth_(inst_11719__$1)){
var statearr_11764_11805 = state_11745__$1;
(statearr_11764_11805[(1)] = (17));

} else {
var statearr_11765_11806 = state_11745__$1;
(statearr_11765_11806[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11746 === (2))){
var inst_11679 = (state_11745[(9)]);
var inst_11682 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11679);
var state_11745__$1 = state_11745;
var statearr_11766_11807 = state_11745__$1;
(statearr_11766_11807[(2)] = inst_11682);

(statearr_11766_11807[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11746 === (23))){
var inst_11730 = (state_11745[(2)]);
var state_11745__$1 = state_11745;
if(cljs.core.truth_(inst_11730)){
var statearr_11767_11808 = state_11745__$1;
(statearr_11767_11808[(1)] = (24));

} else {
var statearr_11768_11809 = state_11745__$1;
(statearr_11768_11809[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11746 === (19))){
var inst_11727 = (state_11745[(2)]);
var state_11745__$1 = state_11745;
if(cljs.core.truth_(inst_11727)){
var statearr_11769_11810 = state_11745__$1;
(statearr_11769_11810[(1)] = (20));

} else {
var statearr_11770_11811 = state_11745__$1;
(statearr_11770_11811[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11746 === (11))){
var inst_11704 = (state_11745[(8)]);
var inst_11710 = (inst_11704 == null);
var state_11745__$1 = state_11745;
if(cljs.core.truth_(inst_11710)){
var statearr_11771_11812 = state_11745__$1;
(statearr_11771_11812[(1)] = (14));

} else {
var statearr_11772_11813 = state_11745__$1;
(statearr_11772_11813[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11746 === (9))){
var inst_11697 = (state_11745[(10)]);
var inst_11697__$1 = (state_11745[(2)]);
var inst_11698 = cljs.core.get.call(null,inst_11697__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_11699 = cljs.core.get.call(null,inst_11697__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11700 = cljs.core.get.call(null,inst_11697__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_11745__$1 = (function (){var statearr_11773 = state_11745;
(statearr_11773[(17)] = inst_11699);

(statearr_11773[(16)] = inst_11700);

(statearr_11773[(10)] = inst_11697__$1);

return statearr_11773;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_11745__$1,(10),inst_11698);
} else {
if((state_val_11746 === (5))){
var inst_11689 = (state_11745[(7)]);
var inst_11692 = cljs.core.seq_QMARK_.call(null,inst_11689);
var state_11745__$1 = state_11745;
if(inst_11692){
var statearr_11774_11814 = state_11745__$1;
(statearr_11774_11814[(1)] = (7));

} else {
var statearr_11775_11815 = state_11745__$1;
(statearr_11775_11815[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11746 === (14))){
var inst_11705 = (state_11745[(15)]);
var inst_11712 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11705);
var state_11745__$1 = state_11745;
var statearr_11776_11816 = state_11745__$1;
(statearr_11776_11816[(2)] = inst_11712);

(statearr_11776_11816[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11746 === (26))){
var inst_11735 = (state_11745[(2)]);
var state_11745__$1 = state_11745;
var statearr_11777_11817 = state_11745__$1;
(statearr_11777_11817[(2)] = inst_11735);

(statearr_11777_11817[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11746 === (16))){
var inst_11715 = (state_11745[(2)]);
var inst_11716 = calc_state.call(null);
var inst_11689 = inst_11716;
var state_11745__$1 = (function (){var statearr_11778 = state_11745;
(statearr_11778[(7)] = inst_11689);

(statearr_11778[(18)] = inst_11715);

return statearr_11778;
})();
var statearr_11779_11818 = state_11745__$1;
(statearr_11779_11818[(2)] = null);

(statearr_11779_11818[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11746 === (10))){
var inst_11705 = (state_11745[(15)]);
var inst_11704 = (state_11745[(8)]);
var inst_11703 = (state_11745[(2)]);
var inst_11704__$1 = cljs.core.nth.call(null,inst_11703,(0),null);
var inst_11705__$1 = cljs.core.nth.call(null,inst_11703,(1),null);
var inst_11706 = (inst_11704__$1 == null);
var inst_11707 = cljs.core._EQ_.call(null,inst_11705__$1,change);
var inst_11708 = (inst_11706) || (inst_11707);
var state_11745__$1 = (function (){var statearr_11780 = state_11745;
(statearr_11780[(15)] = inst_11705__$1);

(statearr_11780[(8)] = inst_11704__$1);

return statearr_11780;
})();
if(cljs.core.truth_(inst_11708)){
var statearr_11781_11819 = state_11745__$1;
(statearr_11781_11819[(1)] = (11));

} else {
var statearr_11782_11820 = state_11745__$1;
(statearr_11782_11820[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11746 === (18))){
var inst_11705 = (state_11745[(15)]);
var inst_11699 = (state_11745[(17)]);
var inst_11700 = (state_11745[(16)]);
var inst_11722 = cljs.core.empty_QMARK_.call(null,inst_11700);
var inst_11723 = inst_11699.call(null,inst_11705);
var inst_11724 = cljs.core.not.call(null,inst_11723);
var inst_11725 = (inst_11722) && (inst_11724);
var state_11745__$1 = state_11745;
var statearr_11783_11821 = state_11745__$1;
(statearr_11783_11821[(2)] = inst_11725);

(statearr_11783_11821[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11746 === (8))){
var inst_11689 = (state_11745[(7)]);
var state_11745__$1 = state_11745;
var statearr_11784_11822 = state_11745__$1;
(statearr_11784_11822[(2)] = inst_11689);

(statearr_11784_11822[(1)] = (9));


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
});})(c__7407__auto___11792,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7351__auto__,c__7407__auto___11792,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__7352__auto__ = null;
var state_machine__7352__auto____0 = (function (){
var statearr_11788 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11788[(0)] = state_machine__7352__auto__);

(statearr_11788[(1)] = (1));

return statearr_11788;
});
var state_machine__7352__auto____1 = (function (state_11745){
while(true){
var ret_value__7353__auto__ = (function (){try{while(true){
var result__7354__auto__ = switch__7351__auto__.call(null,state_11745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7354__auto__;
}
break;
}
}catch (e11789){if((e11789 instanceof Object)){
var ex__7355__auto__ = e11789;
var statearr_11790_11823 = state_11745;
(statearr_11790_11823[(5)] = ex__7355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11789;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11824 = state_11745;
state_11745 = G__11824;
continue;
} else {
return ret_value__7353__auto__;
}
break;
}
});
state_machine__7352__auto__ = function(state_11745){
switch(arguments.length){
case 0:
return state_machine__7352__auto____0.call(this);
case 1:
return state_machine__7352__auto____1.call(this,state_11745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7352__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7352__auto____0;
state_machine__7352__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7352__auto____1;
return state_machine__7352__auto__;
})()
;})(switch__7351__auto__,c__7407__auto___11792,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7409__auto__ = (function (){var statearr_11791 = f__7408__auto__.call(null);
(statearr_11791[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7407__auto___11792);

return statearr_11791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7409__auto__);
});})(c__7407__auto___11792,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj11826 = {};
return obj11826;
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
return (function (p1__11827_SHARP_){
if(cljs.core.truth_(p1__11827_SHARP_.call(null,topic))){
return p1__11827_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__11827_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3797__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t11950 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11950 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta11951){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta11951 = meta11951;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11950.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t11950.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t11950.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t11950.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t11950.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t11950.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t11950.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t11950.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11952){
var self__ = this;
var _11952__$1 = this;
return self__.meta11951;
});})(mults,ensure_mult))
;

cljs.core.async.t11950.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11952,meta11951__$1){
var self__ = this;
var _11952__$1 = this;
return (new cljs.core.async.t11950(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta11951__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t11950.cljs$lang$type = true;

cljs.core.async.t11950.cljs$lang$ctorStr = "cljs.core.async/t11950";

cljs.core.async.t11950.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4384__auto__,writer__4385__auto__,opt__4386__auto__){
return cljs.core._write.call(null,writer__4385__auto__,"cljs.core.async/t11950");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t11950 = ((function (mults,ensure_mult){
return (function __GT_t11950(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11951){
return (new cljs.core.async.t11950(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11951));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t11950(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/blischalk/node-webkit-apps/hoard/target/base+system+user+dev/cljsbuild-compiler-0/cljs/core/async.cljs"], null)));
})()
;
var c__7407__auto___12072 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7407__auto___12072,mults,ensure_mult,p){
return (function (){
var f__7408__auto__ = (function (){var switch__7351__auto__ = ((function (c__7407__auto___12072,mults,ensure_mult,p){
return (function (state_12024){
var state_val_12025 = (state_12024[(1)]);
if((state_val_12025 === (7))){
var inst_12020 = (state_12024[(2)]);
var state_12024__$1 = state_12024;
var statearr_12026_12073 = state_12024__$1;
(statearr_12026_12073[(2)] = inst_12020);

(statearr_12026_12073[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12025 === (20))){
var state_12024__$1 = state_12024;
var statearr_12027_12074 = state_12024__$1;
(statearr_12027_12074[(2)] = null);

(statearr_12027_12074[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12025 === (1))){
var state_12024__$1 = state_12024;
var statearr_12028_12075 = state_12024__$1;
(statearr_12028_12075[(2)] = null);

(statearr_12028_12075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12025 === (24))){
var inst_12003 = (state_12024[(7)]);
var inst_12012 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12003);
var state_12024__$1 = state_12024;
var statearr_12029_12076 = state_12024__$1;
(statearr_12029_12076[(2)] = inst_12012);

(statearr_12029_12076[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12025 === (4))){
var inst_11955 = (state_12024[(8)]);
var inst_11955__$1 = (state_12024[(2)]);
var inst_11956 = (inst_11955__$1 == null);
var state_12024__$1 = (function (){var statearr_12030 = state_12024;
(statearr_12030[(8)] = inst_11955__$1);

return statearr_12030;
})();
if(cljs.core.truth_(inst_11956)){
var statearr_12031_12077 = state_12024__$1;
(statearr_12031_12077[(1)] = (5));

} else {
var statearr_12032_12078 = state_12024__$1;
(statearr_12032_12078[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12025 === (15))){
var inst_11997 = (state_12024[(2)]);
var state_12024__$1 = state_12024;
var statearr_12033_12079 = state_12024__$1;
(statearr_12033_12079[(2)] = inst_11997);

(statearr_12033_12079[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12025 === (21))){
var inst_12017 = (state_12024[(2)]);
var state_12024__$1 = (function (){var statearr_12034 = state_12024;
(statearr_12034[(9)] = inst_12017);

return statearr_12034;
})();
var statearr_12035_12080 = state_12024__$1;
(statearr_12035_12080[(2)] = null);

(statearr_12035_12080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12025 === (13))){
var inst_11979 = (state_12024[(10)]);
var inst_11981 = cljs.core.chunked_seq_QMARK_.call(null,inst_11979);
var state_12024__$1 = state_12024;
if(inst_11981){
var statearr_12036_12081 = state_12024__$1;
(statearr_12036_12081[(1)] = (16));

} else {
var statearr_12037_12082 = state_12024__$1;
(statearr_12037_12082[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12025 === (22))){
var inst_12009 = (state_12024[(2)]);
var state_12024__$1 = state_12024;
if(cljs.core.truth_(inst_12009)){
var statearr_12038_12083 = state_12024__$1;
(statearr_12038_12083[(1)] = (23));

} else {
var statearr_12039_12084 = state_12024__$1;
(statearr_12039_12084[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12025 === (6))){
var inst_11955 = (state_12024[(8)]);
var inst_12003 = (state_12024[(7)]);
var inst_12005 = (state_12024[(11)]);
var inst_12003__$1 = topic_fn.call(null,inst_11955);
var inst_12004 = cljs.core.deref.call(null,mults);
var inst_12005__$1 = cljs.core.get.call(null,inst_12004,inst_12003__$1);
var state_12024__$1 = (function (){var statearr_12040 = state_12024;
(statearr_12040[(7)] = inst_12003__$1);

(statearr_12040[(11)] = inst_12005__$1);

return statearr_12040;
})();
if(cljs.core.truth_(inst_12005__$1)){
var statearr_12041_12085 = state_12024__$1;
(statearr_12041_12085[(1)] = (19));

} else {
var statearr_12042_12086 = state_12024__$1;
(statearr_12042_12086[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12025 === (25))){
var inst_12014 = (state_12024[(2)]);
var state_12024__$1 = state_12024;
var statearr_12043_12087 = state_12024__$1;
(statearr_12043_12087[(2)] = inst_12014);

(statearr_12043_12087[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12025 === (17))){
var inst_11979 = (state_12024[(10)]);
var inst_11988 = cljs.core.first.call(null,inst_11979);
var inst_11989 = cljs.core.async.muxch_STAR_.call(null,inst_11988);
var inst_11990 = cljs.core.async.close_BANG_.call(null,inst_11989);
var inst_11991 = cljs.core.next.call(null,inst_11979);
var inst_11965 = inst_11991;
var inst_11966 = null;
var inst_11967 = (0);
var inst_11968 = (0);
var state_12024__$1 = (function (){var statearr_12044 = state_12024;
(statearr_12044[(12)] = inst_11968);

(statearr_12044[(13)] = inst_11967);

(statearr_12044[(14)] = inst_11966);

(statearr_12044[(15)] = inst_11990);

(statearr_12044[(16)] = inst_11965);

return statearr_12044;
})();
var statearr_12045_12088 = state_12024__$1;
(statearr_12045_12088[(2)] = null);

(statearr_12045_12088[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12025 === (3))){
var inst_12022 = (state_12024[(2)]);
var state_12024__$1 = state_12024;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12024__$1,inst_12022);
} else {
if((state_val_12025 === (12))){
var inst_11999 = (state_12024[(2)]);
var state_12024__$1 = state_12024;
var statearr_12046_12089 = state_12024__$1;
(statearr_12046_12089[(2)] = inst_11999);

(statearr_12046_12089[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12025 === (2))){
var state_12024__$1 = state_12024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12024__$1,(4),ch);
} else {
if((state_val_12025 === (23))){
var state_12024__$1 = state_12024;
var statearr_12047_12090 = state_12024__$1;
(statearr_12047_12090[(2)] = null);

(statearr_12047_12090[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12025 === (19))){
var inst_11955 = (state_12024[(8)]);
var inst_12005 = (state_12024[(11)]);
var inst_12007 = cljs.core.async.muxch_STAR_.call(null,inst_12005);
var state_12024__$1 = state_12024;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12024__$1,(22),inst_12007,inst_11955);
} else {
if((state_val_12025 === (11))){
var inst_11979 = (state_12024[(10)]);
var inst_11965 = (state_12024[(16)]);
var inst_11979__$1 = cljs.core.seq.call(null,inst_11965);
var state_12024__$1 = (function (){var statearr_12048 = state_12024;
(statearr_12048[(10)] = inst_11979__$1);

return statearr_12048;
})();
if(inst_11979__$1){
var statearr_12049_12091 = state_12024__$1;
(statearr_12049_12091[(1)] = (13));

} else {
var statearr_12050_12092 = state_12024__$1;
(statearr_12050_12092[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12025 === (9))){
var inst_12001 = (state_12024[(2)]);
var state_12024__$1 = state_12024;
var statearr_12051_12093 = state_12024__$1;
(statearr_12051_12093[(2)] = inst_12001);

(statearr_12051_12093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12025 === (5))){
var inst_11962 = cljs.core.deref.call(null,mults);
var inst_11963 = cljs.core.vals.call(null,inst_11962);
var inst_11964 = cljs.core.seq.call(null,inst_11963);
var inst_11965 = inst_11964;
var inst_11966 = null;
var inst_11967 = (0);
var inst_11968 = (0);
var state_12024__$1 = (function (){var statearr_12052 = state_12024;
(statearr_12052[(12)] = inst_11968);

(statearr_12052[(13)] = inst_11967);

(statearr_12052[(14)] = inst_11966);

(statearr_12052[(16)] = inst_11965);

return statearr_12052;
})();
var statearr_12053_12094 = state_12024__$1;
(statearr_12053_12094[(2)] = null);

(statearr_12053_12094[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12025 === (14))){
var state_12024__$1 = state_12024;
var statearr_12057_12095 = state_12024__$1;
(statearr_12057_12095[(2)] = null);

(statearr_12057_12095[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12025 === (16))){
var inst_11979 = (state_12024[(10)]);
var inst_11983 = cljs.core.chunk_first.call(null,inst_11979);
var inst_11984 = cljs.core.chunk_rest.call(null,inst_11979);
var inst_11985 = cljs.core.count.call(null,inst_11983);
var inst_11965 = inst_11984;
var inst_11966 = inst_11983;
var inst_11967 = inst_11985;
var inst_11968 = (0);
var state_12024__$1 = (function (){var statearr_12058 = state_12024;
(statearr_12058[(12)] = inst_11968);

(statearr_12058[(13)] = inst_11967);

(statearr_12058[(14)] = inst_11966);

(statearr_12058[(16)] = inst_11965);

return statearr_12058;
})();
var statearr_12059_12096 = state_12024__$1;
(statearr_12059_12096[(2)] = null);

(statearr_12059_12096[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12025 === (10))){
var inst_11968 = (state_12024[(12)]);
var inst_11967 = (state_12024[(13)]);
var inst_11966 = (state_12024[(14)]);
var inst_11965 = (state_12024[(16)]);
var inst_11973 = cljs.core._nth.call(null,inst_11966,inst_11968);
var inst_11974 = cljs.core.async.muxch_STAR_.call(null,inst_11973);
var inst_11975 = cljs.core.async.close_BANG_.call(null,inst_11974);
var inst_11976 = (inst_11968 + (1));
var tmp12054 = inst_11967;
var tmp12055 = inst_11966;
var tmp12056 = inst_11965;
var inst_11965__$1 = tmp12056;
var inst_11966__$1 = tmp12055;
var inst_11967__$1 = tmp12054;
var inst_11968__$1 = inst_11976;
var state_12024__$1 = (function (){var statearr_12060 = state_12024;
(statearr_12060[(12)] = inst_11968__$1);

(statearr_12060[(17)] = inst_11975);

(statearr_12060[(13)] = inst_11967__$1);

(statearr_12060[(14)] = inst_11966__$1);

(statearr_12060[(16)] = inst_11965__$1);

return statearr_12060;
})();
var statearr_12061_12097 = state_12024__$1;
(statearr_12061_12097[(2)] = null);

(statearr_12061_12097[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12025 === (18))){
var inst_11994 = (state_12024[(2)]);
var state_12024__$1 = state_12024;
var statearr_12062_12098 = state_12024__$1;
(statearr_12062_12098[(2)] = inst_11994);

(statearr_12062_12098[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12025 === (8))){
var inst_11968 = (state_12024[(12)]);
var inst_11967 = (state_12024[(13)]);
var inst_11970 = (inst_11968 < inst_11967);
var inst_11971 = inst_11970;
var state_12024__$1 = state_12024;
if(cljs.core.truth_(inst_11971)){
var statearr_12063_12099 = state_12024__$1;
(statearr_12063_12099[(1)] = (10));

} else {
var statearr_12064_12100 = state_12024__$1;
(statearr_12064_12100[(1)] = (11));

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
});})(c__7407__auto___12072,mults,ensure_mult,p))
;
return ((function (switch__7351__auto__,c__7407__auto___12072,mults,ensure_mult,p){
return (function() {
var state_machine__7352__auto__ = null;
var state_machine__7352__auto____0 = (function (){
var statearr_12068 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12068[(0)] = state_machine__7352__auto__);

(statearr_12068[(1)] = (1));

return statearr_12068;
});
var state_machine__7352__auto____1 = (function (state_12024){
while(true){
var ret_value__7353__auto__ = (function (){try{while(true){
var result__7354__auto__ = switch__7351__auto__.call(null,state_12024);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7354__auto__;
}
break;
}
}catch (e12069){if((e12069 instanceof Object)){
var ex__7355__auto__ = e12069;
var statearr_12070_12101 = state_12024;
(statearr_12070_12101[(5)] = ex__7355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12024);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12069;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12102 = state_12024;
state_12024 = G__12102;
continue;
} else {
return ret_value__7353__auto__;
}
break;
}
});
state_machine__7352__auto__ = function(state_12024){
switch(arguments.length){
case 0:
return state_machine__7352__auto____0.call(this);
case 1:
return state_machine__7352__auto____1.call(this,state_12024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7352__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7352__auto____0;
state_machine__7352__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7352__auto____1;
return state_machine__7352__auto__;
})()
;})(switch__7351__auto__,c__7407__auto___12072,mults,ensure_mult,p))
})();
var state__7409__auto__ = (function (){var statearr_12071 = f__7408__auto__.call(null);
(statearr_12071[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7407__auto___12072);

return statearr_12071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7409__auto__);
});})(c__7407__auto___12072,mults,ensure_mult,p))
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
var c__7407__auto___12239 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7407__auto___12239,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7408__auto__ = (function (){var switch__7351__auto__ = ((function (c__7407__auto___12239,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_12209){
var state_val_12210 = (state_12209[(1)]);
if((state_val_12210 === (7))){
var state_12209__$1 = state_12209;
var statearr_12211_12240 = state_12209__$1;
(statearr_12211_12240[(2)] = null);

(statearr_12211_12240[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12210 === (1))){
var state_12209__$1 = state_12209;
var statearr_12212_12241 = state_12209__$1;
(statearr_12212_12241[(2)] = null);

(statearr_12212_12241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12210 === (4))){
var inst_12173 = (state_12209[(7)]);
var inst_12175 = (inst_12173 < cnt);
var state_12209__$1 = state_12209;
if(cljs.core.truth_(inst_12175)){
var statearr_12213_12242 = state_12209__$1;
(statearr_12213_12242[(1)] = (6));

} else {
var statearr_12214_12243 = state_12209__$1;
(statearr_12214_12243[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12210 === (15))){
var inst_12205 = (state_12209[(2)]);
var state_12209__$1 = state_12209;
var statearr_12215_12244 = state_12209__$1;
(statearr_12215_12244[(2)] = inst_12205);

(statearr_12215_12244[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12210 === (13))){
var inst_12198 = cljs.core.async.close_BANG_.call(null,out);
var state_12209__$1 = state_12209;
var statearr_12216_12245 = state_12209__$1;
(statearr_12216_12245[(2)] = inst_12198);

(statearr_12216_12245[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12210 === (6))){
var state_12209__$1 = state_12209;
var statearr_12217_12246 = state_12209__$1;
(statearr_12217_12246[(2)] = null);

(statearr_12217_12246[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12210 === (3))){
var inst_12207 = (state_12209[(2)]);
var state_12209__$1 = state_12209;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12209__$1,inst_12207);
} else {
if((state_val_12210 === (12))){
var inst_12195 = (state_12209[(8)]);
var inst_12195__$1 = (state_12209[(2)]);
var inst_12196 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12195__$1);
var state_12209__$1 = (function (){var statearr_12218 = state_12209;
(statearr_12218[(8)] = inst_12195__$1);

return statearr_12218;
})();
if(cljs.core.truth_(inst_12196)){
var statearr_12219_12247 = state_12209__$1;
(statearr_12219_12247[(1)] = (13));

} else {
var statearr_12220_12248 = state_12209__$1;
(statearr_12220_12248[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12210 === (2))){
var inst_12172 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_12173 = (0);
var state_12209__$1 = (function (){var statearr_12221 = state_12209;
(statearr_12221[(7)] = inst_12173);

(statearr_12221[(9)] = inst_12172);

return statearr_12221;
})();
var statearr_12222_12249 = state_12209__$1;
(statearr_12222_12249[(2)] = null);

(statearr_12222_12249[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12210 === (11))){
var inst_12173 = (state_12209[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12209,(10),Object,null,(9));
var inst_12182 = chs__$1.call(null,inst_12173);
var inst_12183 = done.call(null,inst_12173);
var inst_12184 = cljs.core.async.take_BANG_.call(null,inst_12182,inst_12183);
var state_12209__$1 = state_12209;
var statearr_12223_12250 = state_12209__$1;
(statearr_12223_12250[(2)] = inst_12184);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12209__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12210 === (9))){
var inst_12173 = (state_12209[(7)]);
var inst_12186 = (state_12209[(2)]);
var inst_12187 = (inst_12173 + (1));
var inst_12173__$1 = inst_12187;
var state_12209__$1 = (function (){var statearr_12224 = state_12209;
(statearr_12224[(10)] = inst_12186);

(statearr_12224[(7)] = inst_12173__$1);

return statearr_12224;
})();
var statearr_12225_12251 = state_12209__$1;
(statearr_12225_12251[(2)] = null);

(statearr_12225_12251[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12210 === (5))){
var inst_12193 = (state_12209[(2)]);
var state_12209__$1 = (function (){var statearr_12226 = state_12209;
(statearr_12226[(11)] = inst_12193);

return statearr_12226;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12209__$1,(12),dchan);
} else {
if((state_val_12210 === (14))){
var inst_12195 = (state_12209[(8)]);
var inst_12200 = cljs.core.apply.call(null,f,inst_12195);
var state_12209__$1 = state_12209;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12209__$1,(16),out,inst_12200);
} else {
if((state_val_12210 === (16))){
var inst_12202 = (state_12209[(2)]);
var state_12209__$1 = (function (){var statearr_12227 = state_12209;
(statearr_12227[(12)] = inst_12202);

return statearr_12227;
})();
var statearr_12228_12252 = state_12209__$1;
(statearr_12228_12252[(2)] = null);

(statearr_12228_12252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12210 === (10))){
var inst_12177 = (state_12209[(2)]);
var inst_12178 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_12209__$1 = (function (){var statearr_12229 = state_12209;
(statearr_12229[(13)] = inst_12177);

return statearr_12229;
})();
var statearr_12230_12253 = state_12209__$1;
(statearr_12230_12253[(2)] = inst_12178);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12209__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12210 === (8))){
var inst_12191 = (state_12209[(2)]);
var state_12209__$1 = state_12209;
var statearr_12231_12254 = state_12209__$1;
(statearr_12231_12254[(2)] = inst_12191);

(statearr_12231_12254[(1)] = (5));


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
});})(c__7407__auto___12239,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7351__auto__,c__7407__auto___12239,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__7352__auto__ = null;
var state_machine__7352__auto____0 = (function (){
var statearr_12235 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12235[(0)] = state_machine__7352__auto__);

(statearr_12235[(1)] = (1));

return statearr_12235;
});
var state_machine__7352__auto____1 = (function (state_12209){
while(true){
var ret_value__7353__auto__ = (function (){try{while(true){
var result__7354__auto__ = switch__7351__auto__.call(null,state_12209);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7354__auto__;
}
break;
}
}catch (e12236){if((e12236 instanceof Object)){
var ex__7355__auto__ = e12236;
var statearr_12237_12255 = state_12209;
(statearr_12237_12255[(5)] = ex__7355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12256 = state_12209;
state_12209 = G__12256;
continue;
} else {
return ret_value__7353__auto__;
}
break;
}
});
state_machine__7352__auto__ = function(state_12209){
switch(arguments.length){
case 0:
return state_machine__7352__auto____0.call(this);
case 1:
return state_machine__7352__auto____1.call(this,state_12209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7352__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7352__auto____0;
state_machine__7352__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7352__auto____1;
return state_machine__7352__auto__;
})()
;})(switch__7351__auto__,c__7407__auto___12239,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7409__auto__ = (function (){var statearr_12238 = f__7408__auto__.call(null);
(statearr_12238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7407__auto___12239);

return statearr_12238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7409__auto__);
});})(c__7407__auto___12239,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__7407__auto___12364 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7407__auto___12364,out){
return (function (){
var f__7408__auto__ = (function (){var switch__7351__auto__ = ((function (c__7407__auto___12364,out){
return (function (state_12340){
var state_val_12341 = (state_12340[(1)]);
if((state_val_12341 === (7))){
var inst_12319 = (state_12340[(7)]);
var inst_12320 = (state_12340[(8)]);
var inst_12319__$1 = (state_12340[(2)]);
var inst_12320__$1 = cljs.core.nth.call(null,inst_12319__$1,(0),null);
var inst_12321 = cljs.core.nth.call(null,inst_12319__$1,(1),null);
var inst_12322 = (inst_12320__$1 == null);
var state_12340__$1 = (function (){var statearr_12342 = state_12340;
(statearr_12342[(7)] = inst_12319__$1);

(statearr_12342[(8)] = inst_12320__$1);

(statearr_12342[(9)] = inst_12321);

return statearr_12342;
})();
if(cljs.core.truth_(inst_12322)){
var statearr_12343_12365 = state_12340__$1;
(statearr_12343_12365[(1)] = (8));

} else {
var statearr_12344_12366 = state_12340__$1;
(statearr_12344_12366[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12341 === (1))){
var inst_12311 = cljs.core.vec.call(null,chs);
var inst_12312 = inst_12311;
var state_12340__$1 = (function (){var statearr_12345 = state_12340;
(statearr_12345[(10)] = inst_12312);

return statearr_12345;
})();
var statearr_12346_12367 = state_12340__$1;
(statearr_12346_12367[(2)] = null);

(statearr_12346_12367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12341 === (4))){
var inst_12312 = (state_12340[(10)]);
var state_12340__$1 = state_12340;
return cljs.core.async.ioc_alts_BANG_.call(null,state_12340__$1,(7),inst_12312);
} else {
if((state_val_12341 === (6))){
var inst_12336 = (state_12340[(2)]);
var state_12340__$1 = state_12340;
var statearr_12347_12368 = state_12340__$1;
(statearr_12347_12368[(2)] = inst_12336);

(statearr_12347_12368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12341 === (3))){
var inst_12338 = (state_12340[(2)]);
var state_12340__$1 = state_12340;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12340__$1,inst_12338);
} else {
if((state_val_12341 === (2))){
var inst_12312 = (state_12340[(10)]);
var inst_12314 = cljs.core.count.call(null,inst_12312);
var inst_12315 = (inst_12314 > (0));
var state_12340__$1 = state_12340;
if(cljs.core.truth_(inst_12315)){
var statearr_12349_12369 = state_12340__$1;
(statearr_12349_12369[(1)] = (4));

} else {
var statearr_12350_12370 = state_12340__$1;
(statearr_12350_12370[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12341 === (11))){
var inst_12312 = (state_12340[(10)]);
var inst_12329 = (state_12340[(2)]);
var tmp12348 = inst_12312;
var inst_12312__$1 = tmp12348;
var state_12340__$1 = (function (){var statearr_12351 = state_12340;
(statearr_12351[(10)] = inst_12312__$1);

(statearr_12351[(11)] = inst_12329);

return statearr_12351;
})();
var statearr_12352_12371 = state_12340__$1;
(statearr_12352_12371[(2)] = null);

(statearr_12352_12371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12341 === (9))){
var inst_12320 = (state_12340[(8)]);
var state_12340__$1 = state_12340;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12340__$1,(11),out,inst_12320);
} else {
if((state_val_12341 === (5))){
var inst_12334 = cljs.core.async.close_BANG_.call(null,out);
var state_12340__$1 = state_12340;
var statearr_12353_12372 = state_12340__$1;
(statearr_12353_12372[(2)] = inst_12334);

(statearr_12353_12372[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12341 === (10))){
var inst_12332 = (state_12340[(2)]);
var state_12340__$1 = state_12340;
var statearr_12354_12373 = state_12340__$1;
(statearr_12354_12373[(2)] = inst_12332);

(statearr_12354_12373[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12341 === (8))){
var inst_12312 = (state_12340[(10)]);
var inst_12319 = (state_12340[(7)]);
var inst_12320 = (state_12340[(8)]);
var inst_12321 = (state_12340[(9)]);
var inst_12324 = (function (){var c = inst_12321;
var v = inst_12320;
var vec__12317 = inst_12319;
var cs = inst_12312;
return ((function (c,v,vec__12317,cs,inst_12312,inst_12319,inst_12320,inst_12321,state_val_12341,c__7407__auto___12364,out){
return (function (p1__12257_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__12257_SHARP_);
});
;})(c,v,vec__12317,cs,inst_12312,inst_12319,inst_12320,inst_12321,state_val_12341,c__7407__auto___12364,out))
})();
var inst_12325 = cljs.core.filterv.call(null,inst_12324,inst_12312);
var inst_12312__$1 = inst_12325;
var state_12340__$1 = (function (){var statearr_12355 = state_12340;
(statearr_12355[(10)] = inst_12312__$1);

return statearr_12355;
})();
var statearr_12356_12374 = state_12340__$1;
(statearr_12356_12374[(2)] = null);

(statearr_12356_12374[(1)] = (2));


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
});})(c__7407__auto___12364,out))
;
return ((function (switch__7351__auto__,c__7407__auto___12364,out){
return (function() {
var state_machine__7352__auto__ = null;
var state_machine__7352__auto____0 = (function (){
var statearr_12360 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12360[(0)] = state_machine__7352__auto__);

(statearr_12360[(1)] = (1));

return statearr_12360;
});
var state_machine__7352__auto____1 = (function (state_12340){
while(true){
var ret_value__7353__auto__ = (function (){try{while(true){
var result__7354__auto__ = switch__7351__auto__.call(null,state_12340);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7354__auto__;
}
break;
}
}catch (e12361){if((e12361 instanceof Object)){
var ex__7355__auto__ = e12361;
var statearr_12362_12375 = state_12340;
(statearr_12362_12375[(5)] = ex__7355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12340);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12361;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12376 = state_12340;
state_12340 = G__12376;
continue;
} else {
return ret_value__7353__auto__;
}
break;
}
});
state_machine__7352__auto__ = function(state_12340){
switch(arguments.length){
case 0:
return state_machine__7352__auto____0.call(this);
case 1:
return state_machine__7352__auto____1.call(this,state_12340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7352__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7352__auto____0;
state_machine__7352__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7352__auto____1;
return state_machine__7352__auto__;
})()
;})(switch__7351__auto__,c__7407__auto___12364,out))
})();
var state__7409__auto__ = (function (){var statearr_12363 = f__7408__auto__.call(null);
(statearr_12363[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7407__auto___12364);

return statearr_12363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7409__auto__);
});})(c__7407__auto___12364,out))
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
var c__7407__auto___12469 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7407__auto___12469,out){
return (function (){
var f__7408__auto__ = (function (){var switch__7351__auto__ = ((function (c__7407__auto___12469,out){
return (function (state_12446){
var state_val_12447 = (state_12446[(1)]);
if((state_val_12447 === (7))){
var inst_12428 = (state_12446[(7)]);
var inst_12428__$1 = (state_12446[(2)]);
var inst_12429 = (inst_12428__$1 == null);
var inst_12430 = cljs.core.not.call(null,inst_12429);
var state_12446__$1 = (function (){var statearr_12448 = state_12446;
(statearr_12448[(7)] = inst_12428__$1);

return statearr_12448;
})();
if(inst_12430){
var statearr_12449_12470 = state_12446__$1;
(statearr_12449_12470[(1)] = (8));

} else {
var statearr_12450_12471 = state_12446__$1;
(statearr_12450_12471[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12447 === (1))){
var inst_12423 = (0);
var state_12446__$1 = (function (){var statearr_12451 = state_12446;
(statearr_12451[(8)] = inst_12423);

return statearr_12451;
})();
var statearr_12452_12472 = state_12446__$1;
(statearr_12452_12472[(2)] = null);

(statearr_12452_12472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12447 === (4))){
var state_12446__$1 = state_12446;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12446__$1,(7),ch);
} else {
if((state_val_12447 === (6))){
var inst_12441 = (state_12446[(2)]);
var state_12446__$1 = state_12446;
var statearr_12453_12473 = state_12446__$1;
(statearr_12453_12473[(2)] = inst_12441);

(statearr_12453_12473[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12447 === (3))){
var inst_12443 = (state_12446[(2)]);
var inst_12444 = cljs.core.async.close_BANG_.call(null,out);
var state_12446__$1 = (function (){var statearr_12454 = state_12446;
(statearr_12454[(9)] = inst_12443);

return statearr_12454;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12446__$1,inst_12444);
} else {
if((state_val_12447 === (2))){
var inst_12423 = (state_12446[(8)]);
var inst_12425 = (inst_12423 < n);
var state_12446__$1 = state_12446;
if(cljs.core.truth_(inst_12425)){
var statearr_12455_12474 = state_12446__$1;
(statearr_12455_12474[(1)] = (4));

} else {
var statearr_12456_12475 = state_12446__$1;
(statearr_12456_12475[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12447 === (11))){
var inst_12423 = (state_12446[(8)]);
var inst_12433 = (state_12446[(2)]);
var inst_12434 = (inst_12423 + (1));
var inst_12423__$1 = inst_12434;
var state_12446__$1 = (function (){var statearr_12457 = state_12446;
(statearr_12457[(10)] = inst_12433);

(statearr_12457[(8)] = inst_12423__$1);

return statearr_12457;
})();
var statearr_12458_12476 = state_12446__$1;
(statearr_12458_12476[(2)] = null);

(statearr_12458_12476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12447 === (9))){
var state_12446__$1 = state_12446;
var statearr_12459_12477 = state_12446__$1;
(statearr_12459_12477[(2)] = null);

(statearr_12459_12477[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12447 === (5))){
var state_12446__$1 = state_12446;
var statearr_12460_12478 = state_12446__$1;
(statearr_12460_12478[(2)] = null);

(statearr_12460_12478[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12447 === (10))){
var inst_12438 = (state_12446[(2)]);
var state_12446__$1 = state_12446;
var statearr_12461_12479 = state_12446__$1;
(statearr_12461_12479[(2)] = inst_12438);

(statearr_12461_12479[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12447 === (8))){
var inst_12428 = (state_12446[(7)]);
var state_12446__$1 = state_12446;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12446__$1,(11),out,inst_12428);
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
});})(c__7407__auto___12469,out))
;
return ((function (switch__7351__auto__,c__7407__auto___12469,out){
return (function() {
var state_machine__7352__auto__ = null;
var state_machine__7352__auto____0 = (function (){
var statearr_12465 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12465[(0)] = state_machine__7352__auto__);

(statearr_12465[(1)] = (1));

return statearr_12465;
});
var state_machine__7352__auto____1 = (function (state_12446){
while(true){
var ret_value__7353__auto__ = (function (){try{while(true){
var result__7354__auto__ = switch__7351__auto__.call(null,state_12446);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7354__auto__;
}
break;
}
}catch (e12466){if((e12466 instanceof Object)){
var ex__7355__auto__ = e12466;
var statearr_12467_12480 = state_12446;
(statearr_12467_12480[(5)] = ex__7355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12466;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12481 = state_12446;
state_12446 = G__12481;
continue;
} else {
return ret_value__7353__auto__;
}
break;
}
});
state_machine__7352__auto__ = function(state_12446){
switch(arguments.length){
case 0:
return state_machine__7352__auto____0.call(this);
case 1:
return state_machine__7352__auto____1.call(this,state_12446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7352__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7352__auto____0;
state_machine__7352__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7352__auto____1;
return state_machine__7352__auto__;
})()
;})(switch__7351__auto__,c__7407__auto___12469,out))
})();
var state__7409__auto__ = (function (){var statearr_12468 = f__7408__auto__.call(null);
(statearr_12468[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7407__auto___12469);

return statearr_12468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7409__auto__);
});})(c__7407__auto___12469,out))
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
if(typeof cljs.core.async.t12489 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12489 = (function (ch,f,map_LT_,meta12490){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12490 = meta12490;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12489.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t12489.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t12489.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t12489.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t12492 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12492 = (function (fn1,_,meta12490,map_LT_,f,ch,meta12493){
this.fn1 = fn1;
this._ = _;
this.meta12490 = meta12490;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta12493 = meta12493;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12492.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t12492.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t12492.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__12482_SHARP_){
return f1.call(null,(((p1__12482_SHARP_ == null))?null:self__.f.call(null,p1__12482_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t12492.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_12494){
var self__ = this;
var _12494__$1 = this;
return self__.meta12493;
});})(___$1))
;

cljs.core.async.t12492.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_12494,meta12493__$1){
var self__ = this;
var _12494__$1 = this;
return (new cljs.core.async.t12492(self__.fn1,self__._,self__.meta12490,self__.map_LT_,self__.f,self__.ch,meta12493__$1));
});})(___$1))
;

cljs.core.async.t12492.cljs$lang$type = true;

cljs.core.async.t12492.cljs$lang$ctorStr = "cljs.core.async/t12492";

cljs.core.async.t12492.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4384__auto__,writer__4385__auto__,opt__4386__auto__){
return cljs.core._write.call(null,writer__4385__auto__,"cljs.core.async/t12492");
});})(___$1))
;

cljs.core.async.__GT_t12492 = ((function (___$1){
return (function __GT_t12492(fn1__$1,___$2,meta12490__$1,map_LT___$1,f__$1,ch__$1,meta12493){
return (new cljs.core.async.t12492(fn1__$1,___$2,meta12490__$1,map_LT___$1,f__$1,ch__$1,meta12493));
});})(___$1))
;

}

return (new cljs.core.async.t12492(fn1,___$1,self__.meta12490,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/blischalk/node-webkit-apps/hoard/target/base+system+user+dev/cljsbuild-compiler-0/cljs/core/async.cljs"], null)));
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

cljs.core.async.t12489.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t12489.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t12489.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t12489.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12491){
var self__ = this;
var _12491__$1 = this;
return self__.meta12490;
});

cljs.core.async.t12489.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12491,meta12490__$1){
var self__ = this;
var _12491__$1 = this;
return (new cljs.core.async.t12489(self__.ch,self__.f,self__.map_LT_,meta12490__$1));
});

cljs.core.async.t12489.cljs$lang$type = true;

cljs.core.async.t12489.cljs$lang$ctorStr = "cljs.core.async/t12489";

cljs.core.async.t12489.cljs$lang$ctorPrWriter = (function (this__4384__auto__,writer__4385__auto__,opt__4386__auto__){
return cljs.core._write.call(null,writer__4385__auto__,"cljs.core.async/t12489");
});

cljs.core.async.__GT_t12489 = (function __GT_t12489(ch__$1,f__$1,map_LT___$1,meta12490){
return (new cljs.core.async.t12489(ch__$1,f__$1,map_LT___$1,meta12490));
});

}

return (new cljs.core.async.t12489(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/blischalk/node-webkit-apps/hoard/target/base+system+user+dev/cljsbuild-compiler-0/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t12498 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12498 = (function (ch,f,map_GT_,meta12499){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta12499 = meta12499;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12498.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t12498.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t12498.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t12498.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t12498.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t12498.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t12498.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12500){
var self__ = this;
var _12500__$1 = this;
return self__.meta12499;
});

cljs.core.async.t12498.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12500,meta12499__$1){
var self__ = this;
var _12500__$1 = this;
return (new cljs.core.async.t12498(self__.ch,self__.f,self__.map_GT_,meta12499__$1));
});

cljs.core.async.t12498.cljs$lang$type = true;

cljs.core.async.t12498.cljs$lang$ctorStr = "cljs.core.async/t12498";

cljs.core.async.t12498.cljs$lang$ctorPrWriter = (function (this__4384__auto__,writer__4385__auto__,opt__4386__auto__){
return cljs.core._write.call(null,writer__4385__auto__,"cljs.core.async/t12498");
});

cljs.core.async.__GT_t12498 = (function __GT_t12498(ch__$1,f__$1,map_GT___$1,meta12499){
return (new cljs.core.async.t12498(ch__$1,f__$1,map_GT___$1,meta12499));
});

}

return (new cljs.core.async.t12498(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/blischalk/node-webkit-apps/hoard/target/base+system+user+dev/cljsbuild-compiler-0/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t12504 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12504 = (function (ch,p,filter_GT_,meta12505){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta12505 = meta12505;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12504.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t12504.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t12504.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t12504.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t12504.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t12504.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t12504.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t12504.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12506){
var self__ = this;
var _12506__$1 = this;
return self__.meta12505;
});

cljs.core.async.t12504.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12506,meta12505__$1){
var self__ = this;
var _12506__$1 = this;
return (new cljs.core.async.t12504(self__.ch,self__.p,self__.filter_GT_,meta12505__$1));
});

cljs.core.async.t12504.cljs$lang$type = true;

cljs.core.async.t12504.cljs$lang$ctorStr = "cljs.core.async/t12504";

cljs.core.async.t12504.cljs$lang$ctorPrWriter = (function (this__4384__auto__,writer__4385__auto__,opt__4386__auto__){
return cljs.core._write.call(null,writer__4385__auto__,"cljs.core.async/t12504");
});

cljs.core.async.__GT_t12504 = (function __GT_t12504(ch__$1,p__$1,filter_GT___$1,meta12505){
return (new cljs.core.async.t12504(ch__$1,p__$1,filter_GT___$1,meta12505));
});

}

return (new cljs.core.async.t12504(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/blischalk/node-webkit-apps/hoard/target/base+system+user+dev/cljsbuild-compiler-0/cljs/core/async.cljs"], null)));
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
var c__7407__auto___12589 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7407__auto___12589,out){
return (function (){
var f__7408__auto__ = (function (){var switch__7351__auto__ = ((function (c__7407__auto___12589,out){
return (function (state_12568){
var state_val_12569 = (state_12568[(1)]);
if((state_val_12569 === (7))){
var inst_12564 = (state_12568[(2)]);
var state_12568__$1 = state_12568;
var statearr_12570_12590 = state_12568__$1;
(statearr_12570_12590[(2)] = inst_12564);

(statearr_12570_12590[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12569 === (1))){
var state_12568__$1 = state_12568;
var statearr_12571_12591 = state_12568__$1;
(statearr_12571_12591[(2)] = null);

(statearr_12571_12591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12569 === (4))){
var inst_12550 = (state_12568[(7)]);
var inst_12550__$1 = (state_12568[(2)]);
var inst_12551 = (inst_12550__$1 == null);
var state_12568__$1 = (function (){var statearr_12572 = state_12568;
(statearr_12572[(7)] = inst_12550__$1);

return statearr_12572;
})();
if(cljs.core.truth_(inst_12551)){
var statearr_12573_12592 = state_12568__$1;
(statearr_12573_12592[(1)] = (5));

} else {
var statearr_12574_12593 = state_12568__$1;
(statearr_12574_12593[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12569 === (6))){
var inst_12550 = (state_12568[(7)]);
var inst_12555 = p.call(null,inst_12550);
var state_12568__$1 = state_12568;
if(cljs.core.truth_(inst_12555)){
var statearr_12575_12594 = state_12568__$1;
(statearr_12575_12594[(1)] = (8));

} else {
var statearr_12576_12595 = state_12568__$1;
(statearr_12576_12595[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12569 === (3))){
var inst_12566 = (state_12568[(2)]);
var state_12568__$1 = state_12568;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12568__$1,inst_12566);
} else {
if((state_val_12569 === (2))){
var state_12568__$1 = state_12568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12568__$1,(4),ch);
} else {
if((state_val_12569 === (11))){
var inst_12558 = (state_12568[(2)]);
var state_12568__$1 = state_12568;
var statearr_12577_12596 = state_12568__$1;
(statearr_12577_12596[(2)] = inst_12558);

(statearr_12577_12596[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12569 === (9))){
var state_12568__$1 = state_12568;
var statearr_12578_12597 = state_12568__$1;
(statearr_12578_12597[(2)] = null);

(statearr_12578_12597[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12569 === (5))){
var inst_12553 = cljs.core.async.close_BANG_.call(null,out);
var state_12568__$1 = state_12568;
var statearr_12579_12598 = state_12568__$1;
(statearr_12579_12598[(2)] = inst_12553);

(statearr_12579_12598[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12569 === (10))){
var inst_12561 = (state_12568[(2)]);
var state_12568__$1 = (function (){var statearr_12580 = state_12568;
(statearr_12580[(8)] = inst_12561);

return statearr_12580;
})();
var statearr_12581_12599 = state_12568__$1;
(statearr_12581_12599[(2)] = null);

(statearr_12581_12599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12569 === (8))){
var inst_12550 = (state_12568[(7)]);
var state_12568__$1 = state_12568;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12568__$1,(11),out,inst_12550);
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
});})(c__7407__auto___12589,out))
;
return ((function (switch__7351__auto__,c__7407__auto___12589,out){
return (function() {
var state_machine__7352__auto__ = null;
var state_machine__7352__auto____0 = (function (){
var statearr_12585 = [null,null,null,null,null,null,null,null,null];
(statearr_12585[(0)] = state_machine__7352__auto__);

(statearr_12585[(1)] = (1));

return statearr_12585;
});
var state_machine__7352__auto____1 = (function (state_12568){
while(true){
var ret_value__7353__auto__ = (function (){try{while(true){
var result__7354__auto__ = switch__7351__auto__.call(null,state_12568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7354__auto__;
}
break;
}
}catch (e12586){if((e12586 instanceof Object)){
var ex__7355__auto__ = e12586;
var statearr_12587_12600 = state_12568;
(statearr_12587_12600[(5)] = ex__7355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12586;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12601 = state_12568;
state_12568 = G__12601;
continue;
} else {
return ret_value__7353__auto__;
}
break;
}
});
state_machine__7352__auto__ = function(state_12568){
switch(arguments.length){
case 0:
return state_machine__7352__auto____0.call(this);
case 1:
return state_machine__7352__auto____1.call(this,state_12568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7352__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7352__auto____0;
state_machine__7352__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7352__auto____1;
return state_machine__7352__auto__;
})()
;})(switch__7351__auto__,c__7407__auto___12589,out))
})();
var state__7409__auto__ = (function (){var statearr_12588 = f__7408__auto__.call(null);
(statearr_12588[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7407__auto___12589);

return statearr_12588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7409__auto__);
});})(c__7407__auto___12589,out))
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
var c__7407__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7407__auto__){
return (function (){
var f__7408__auto__ = (function (){var switch__7351__auto__ = ((function (c__7407__auto__){
return (function (state_12767){
var state_val_12768 = (state_12767[(1)]);
if((state_val_12768 === (7))){
var inst_12763 = (state_12767[(2)]);
var state_12767__$1 = state_12767;
var statearr_12769_12810 = state_12767__$1;
(statearr_12769_12810[(2)] = inst_12763);

(statearr_12769_12810[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (20))){
var inst_12733 = (state_12767[(7)]);
var inst_12744 = (state_12767[(2)]);
var inst_12745 = cljs.core.next.call(null,inst_12733);
var inst_12719 = inst_12745;
var inst_12720 = null;
var inst_12721 = (0);
var inst_12722 = (0);
var state_12767__$1 = (function (){var statearr_12770 = state_12767;
(statearr_12770[(8)] = inst_12722);

(statearr_12770[(9)] = inst_12721);

(statearr_12770[(10)] = inst_12719);

(statearr_12770[(11)] = inst_12720);

(statearr_12770[(12)] = inst_12744);

return statearr_12770;
})();
var statearr_12771_12811 = state_12767__$1;
(statearr_12771_12811[(2)] = null);

(statearr_12771_12811[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (1))){
var state_12767__$1 = state_12767;
var statearr_12772_12812 = state_12767__$1;
(statearr_12772_12812[(2)] = null);

(statearr_12772_12812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (4))){
var inst_12708 = (state_12767[(13)]);
var inst_12708__$1 = (state_12767[(2)]);
var inst_12709 = (inst_12708__$1 == null);
var state_12767__$1 = (function (){var statearr_12773 = state_12767;
(statearr_12773[(13)] = inst_12708__$1);

return statearr_12773;
})();
if(cljs.core.truth_(inst_12709)){
var statearr_12774_12813 = state_12767__$1;
(statearr_12774_12813[(1)] = (5));

} else {
var statearr_12775_12814 = state_12767__$1;
(statearr_12775_12814[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (15))){
var state_12767__$1 = state_12767;
var statearr_12779_12815 = state_12767__$1;
(statearr_12779_12815[(2)] = null);

(statearr_12779_12815[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (21))){
var state_12767__$1 = state_12767;
var statearr_12780_12816 = state_12767__$1;
(statearr_12780_12816[(2)] = null);

(statearr_12780_12816[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (13))){
var inst_12722 = (state_12767[(8)]);
var inst_12721 = (state_12767[(9)]);
var inst_12719 = (state_12767[(10)]);
var inst_12720 = (state_12767[(11)]);
var inst_12729 = (state_12767[(2)]);
var inst_12730 = (inst_12722 + (1));
var tmp12776 = inst_12721;
var tmp12777 = inst_12719;
var tmp12778 = inst_12720;
var inst_12719__$1 = tmp12777;
var inst_12720__$1 = tmp12778;
var inst_12721__$1 = tmp12776;
var inst_12722__$1 = inst_12730;
var state_12767__$1 = (function (){var statearr_12781 = state_12767;
(statearr_12781[(8)] = inst_12722__$1);

(statearr_12781[(9)] = inst_12721__$1);

(statearr_12781[(10)] = inst_12719__$1);

(statearr_12781[(14)] = inst_12729);

(statearr_12781[(11)] = inst_12720__$1);

return statearr_12781;
})();
var statearr_12782_12817 = state_12767__$1;
(statearr_12782_12817[(2)] = null);

(statearr_12782_12817[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (22))){
var state_12767__$1 = state_12767;
var statearr_12783_12818 = state_12767__$1;
(statearr_12783_12818[(2)] = null);

(statearr_12783_12818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (6))){
var inst_12708 = (state_12767[(13)]);
var inst_12717 = f.call(null,inst_12708);
var inst_12718 = cljs.core.seq.call(null,inst_12717);
var inst_12719 = inst_12718;
var inst_12720 = null;
var inst_12721 = (0);
var inst_12722 = (0);
var state_12767__$1 = (function (){var statearr_12784 = state_12767;
(statearr_12784[(8)] = inst_12722);

(statearr_12784[(9)] = inst_12721);

(statearr_12784[(10)] = inst_12719);

(statearr_12784[(11)] = inst_12720);

return statearr_12784;
})();
var statearr_12785_12819 = state_12767__$1;
(statearr_12785_12819[(2)] = null);

(statearr_12785_12819[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (17))){
var inst_12733 = (state_12767[(7)]);
var inst_12737 = cljs.core.chunk_first.call(null,inst_12733);
var inst_12738 = cljs.core.chunk_rest.call(null,inst_12733);
var inst_12739 = cljs.core.count.call(null,inst_12737);
var inst_12719 = inst_12738;
var inst_12720 = inst_12737;
var inst_12721 = inst_12739;
var inst_12722 = (0);
var state_12767__$1 = (function (){var statearr_12786 = state_12767;
(statearr_12786[(8)] = inst_12722);

(statearr_12786[(9)] = inst_12721);

(statearr_12786[(10)] = inst_12719);

(statearr_12786[(11)] = inst_12720);

return statearr_12786;
})();
var statearr_12787_12820 = state_12767__$1;
(statearr_12787_12820[(2)] = null);

(statearr_12787_12820[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (3))){
var inst_12765 = (state_12767[(2)]);
var state_12767__$1 = state_12767;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12767__$1,inst_12765);
} else {
if((state_val_12768 === (12))){
var inst_12753 = (state_12767[(2)]);
var state_12767__$1 = state_12767;
var statearr_12788_12821 = state_12767__$1;
(statearr_12788_12821[(2)] = inst_12753);

(statearr_12788_12821[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (2))){
var state_12767__$1 = state_12767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12767__$1,(4),in$);
} else {
if((state_val_12768 === (23))){
var inst_12761 = (state_12767[(2)]);
var state_12767__$1 = state_12767;
var statearr_12789_12822 = state_12767__$1;
(statearr_12789_12822[(2)] = inst_12761);

(statearr_12789_12822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (19))){
var inst_12748 = (state_12767[(2)]);
var state_12767__$1 = state_12767;
var statearr_12790_12823 = state_12767__$1;
(statearr_12790_12823[(2)] = inst_12748);

(statearr_12790_12823[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (11))){
var inst_12719 = (state_12767[(10)]);
var inst_12733 = (state_12767[(7)]);
var inst_12733__$1 = cljs.core.seq.call(null,inst_12719);
var state_12767__$1 = (function (){var statearr_12791 = state_12767;
(statearr_12791[(7)] = inst_12733__$1);

return statearr_12791;
})();
if(inst_12733__$1){
var statearr_12792_12824 = state_12767__$1;
(statearr_12792_12824[(1)] = (14));

} else {
var statearr_12793_12825 = state_12767__$1;
(statearr_12793_12825[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (9))){
var inst_12755 = (state_12767[(2)]);
var inst_12756 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_12767__$1 = (function (){var statearr_12794 = state_12767;
(statearr_12794[(15)] = inst_12755);

return statearr_12794;
})();
if(cljs.core.truth_(inst_12756)){
var statearr_12795_12826 = state_12767__$1;
(statearr_12795_12826[(1)] = (21));

} else {
var statearr_12796_12827 = state_12767__$1;
(statearr_12796_12827[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (5))){
var inst_12711 = cljs.core.async.close_BANG_.call(null,out);
var state_12767__$1 = state_12767;
var statearr_12797_12828 = state_12767__$1;
(statearr_12797_12828[(2)] = inst_12711);

(statearr_12797_12828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (14))){
var inst_12733 = (state_12767[(7)]);
var inst_12735 = cljs.core.chunked_seq_QMARK_.call(null,inst_12733);
var state_12767__$1 = state_12767;
if(inst_12735){
var statearr_12798_12829 = state_12767__$1;
(statearr_12798_12829[(1)] = (17));

} else {
var statearr_12799_12830 = state_12767__$1;
(statearr_12799_12830[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (16))){
var inst_12751 = (state_12767[(2)]);
var state_12767__$1 = state_12767;
var statearr_12800_12831 = state_12767__$1;
(statearr_12800_12831[(2)] = inst_12751);

(statearr_12800_12831[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12768 === (10))){
var inst_12722 = (state_12767[(8)]);
var inst_12720 = (state_12767[(11)]);
var inst_12727 = cljs.core._nth.call(null,inst_12720,inst_12722);
var state_12767__$1 = state_12767;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12767__$1,(13),out,inst_12727);
} else {
if((state_val_12768 === (18))){
var inst_12733 = (state_12767[(7)]);
var inst_12742 = cljs.core.first.call(null,inst_12733);
var state_12767__$1 = state_12767;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12767__$1,(20),out,inst_12742);
} else {
if((state_val_12768 === (8))){
var inst_12722 = (state_12767[(8)]);
var inst_12721 = (state_12767[(9)]);
var inst_12724 = (inst_12722 < inst_12721);
var inst_12725 = inst_12724;
var state_12767__$1 = state_12767;
if(cljs.core.truth_(inst_12725)){
var statearr_12801_12832 = state_12767__$1;
(statearr_12801_12832[(1)] = (10));

} else {
var statearr_12802_12833 = state_12767__$1;
(statearr_12802_12833[(1)] = (11));

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
});})(c__7407__auto__))
;
return ((function (switch__7351__auto__,c__7407__auto__){
return (function() {
var state_machine__7352__auto__ = null;
var state_machine__7352__auto____0 = (function (){
var statearr_12806 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12806[(0)] = state_machine__7352__auto__);

(statearr_12806[(1)] = (1));

return statearr_12806;
});
var state_machine__7352__auto____1 = (function (state_12767){
while(true){
var ret_value__7353__auto__ = (function (){try{while(true){
var result__7354__auto__ = switch__7351__auto__.call(null,state_12767);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7354__auto__;
}
break;
}
}catch (e12807){if((e12807 instanceof Object)){
var ex__7355__auto__ = e12807;
var statearr_12808_12834 = state_12767;
(statearr_12808_12834[(5)] = ex__7355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12767);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12807;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12835 = state_12767;
state_12767 = G__12835;
continue;
} else {
return ret_value__7353__auto__;
}
break;
}
});
state_machine__7352__auto__ = function(state_12767){
switch(arguments.length){
case 0:
return state_machine__7352__auto____0.call(this);
case 1:
return state_machine__7352__auto____1.call(this,state_12767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7352__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7352__auto____0;
state_machine__7352__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7352__auto____1;
return state_machine__7352__auto__;
})()
;})(switch__7351__auto__,c__7407__auto__))
})();
var state__7409__auto__ = (function (){var statearr_12809 = f__7408__auto__.call(null);
(statearr_12809[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7407__auto__);

return statearr_12809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7409__auto__);
});})(c__7407__auto__))
);

return c__7407__auto__;
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
var c__7407__auto___12932 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7407__auto___12932,out){
return (function (){
var f__7408__auto__ = (function (){var switch__7351__auto__ = ((function (c__7407__auto___12932,out){
return (function (state_12907){
var state_val_12908 = (state_12907[(1)]);
if((state_val_12908 === (7))){
var inst_12902 = (state_12907[(2)]);
var state_12907__$1 = state_12907;
var statearr_12909_12933 = state_12907__$1;
(statearr_12909_12933[(2)] = inst_12902);

(statearr_12909_12933[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12908 === (1))){
var inst_12884 = null;
var state_12907__$1 = (function (){var statearr_12910 = state_12907;
(statearr_12910[(7)] = inst_12884);

return statearr_12910;
})();
var statearr_12911_12934 = state_12907__$1;
(statearr_12911_12934[(2)] = null);

(statearr_12911_12934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12908 === (4))){
var inst_12887 = (state_12907[(8)]);
var inst_12887__$1 = (state_12907[(2)]);
var inst_12888 = (inst_12887__$1 == null);
var inst_12889 = cljs.core.not.call(null,inst_12888);
var state_12907__$1 = (function (){var statearr_12912 = state_12907;
(statearr_12912[(8)] = inst_12887__$1);

return statearr_12912;
})();
if(inst_12889){
var statearr_12913_12935 = state_12907__$1;
(statearr_12913_12935[(1)] = (5));

} else {
var statearr_12914_12936 = state_12907__$1;
(statearr_12914_12936[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12908 === (6))){
var state_12907__$1 = state_12907;
var statearr_12915_12937 = state_12907__$1;
(statearr_12915_12937[(2)] = null);

(statearr_12915_12937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12908 === (3))){
var inst_12904 = (state_12907[(2)]);
var inst_12905 = cljs.core.async.close_BANG_.call(null,out);
var state_12907__$1 = (function (){var statearr_12916 = state_12907;
(statearr_12916[(9)] = inst_12904);

return statearr_12916;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12907__$1,inst_12905);
} else {
if((state_val_12908 === (2))){
var state_12907__$1 = state_12907;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12907__$1,(4),ch);
} else {
if((state_val_12908 === (11))){
var inst_12887 = (state_12907[(8)]);
var inst_12896 = (state_12907[(2)]);
var inst_12884 = inst_12887;
var state_12907__$1 = (function (){var statearr_12917 = state_12907;
(statearr_12917[(7)] = inst_12884);

(statearr_12917[(10)] = inst_12896);

return statearr_12917;
})();
var statearr_12918_12938 = state_12907__$1;
(statearr_12918_12938[(2)] = null);

(statearr_12918_12938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12908 === (9))){
var inst_12887 = (state_12907[(8)]);
var state_12907__$1 = state_12907;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12907__$1,(11),out,inst_12887);
} else {
if((state_val_12908 === (5))){
var inst_12887 = (state_12907[(8)]);
var inst_12884 = (state_12907[(7)]);
var inst_12891 = cljs.core._EQ_.call(null,inst_12887,inst_12884);
var state_12907__$1 = state_12907;
if(inst_12891){
var statearr_12920_12939 = state_12907__$1;
(statearr_12920_12939[(1)] = (8));

} else {
var statearr_12921_12940 = state_12907__$1;
(statearr_12921_12940[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12908 === (10))){
var inst_12899 = (state_12907[(2)]);
var state_12907__$1 = state_12907;
var statearr_12922_12941 = state_12907__$1;
(statearr_12922_12941[(2)] = inst_12899);

(statearr_12922_12941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12908 === (8))){
var inst_12884 = (state_12907[(7)]);
var tmp12919 = inst_12884;
var inst_12884__$1 = tmp12919;
var state_12907__$1 = (function (){var statearr_12923 = state_12907;
(statearr_12923[(7)] = inst_12884__$1);

return statearr_12923;
})();
var statearr_12924_12942 = state_12907__$1;
(statearr_12924_12942[(2)] = null);

(statearr_12924_12942[(1)] = (2));


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
});})(c__7407__auto___12932,out))
;
return ((function (switch__7351__auto__,c__7407__auto___12932,out){
return (function() {
var state_machine__7352__auto__ = null;
var state_machine__7352__auto____0 = (function (){
var statearr_12928 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12928[(0)] = state_machine__7352__auto__);

(statearr_12928[(1)] = (1));

return statearr_12928;
});
var state_machine__7352__auto____1 = (function (state_12907){
while(true){
var ret_value__7353__auto__ = (function (){try{while(true){
var result__7354__auto__ = switch__7351__auto__.call(null,state_12907);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7354__auto__;
}
break;
}
}catch (e12929){if((e12929 instanceof Object)){
var ex__7355__auto__ = e12929;
var statearr_12930_12943 = state_12907;
(statearr_12930_12943[(5)] = ex__7355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12929;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12944 = state_12907;
state_12907 = G__12944;
continue;
} else {
return ret_value__7353__auto__;
}
break;
}
});
state_machine__7352__auto__ = function(state_12907){
switch(arguments.length){
case 0:
return state_machine__7352__auto____0.call(this);
case 1:
return state_machine__7352__auto____1.call(this,state_12907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7352__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7352__auto____0;
state_machine__7352__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7352__auto____1;
return state_machine__7352__auto__;
})()
;})(switch__7351__auto__,c__7407__auto___12932,out))
})();
var state__7409__auto__ = (function (){var statearr_12931 = f__7408__auto__.call(null);
(statearr_12931[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7407__auto___12932);

return statearr_12931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7409__auto__);
});})(c__7407__auto___12932,out))
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
var c__7407__auto___13079 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7407__auto___13079,out){
return (function (){
var f__7408__auto__ = (function (){var switch__7351__auto__ = ((function (c__7407__auto___13079,out){
return (function (state_13049){
var state_val_13050 = (state_13049[(1)]);
if((state_val_13050 === (7))){
var inst_13045 = (state_13049[(2)]);
var state_13049__$1 = state_13049;
var statearr_13051_13080 = state_13049__$1;
(statearr_13051_13080[(2)] = inst_13045);

(statearr_13051_13080[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13050 === (1))){
var inst_13012 = (new Array(n));
var inst_13013 = inst_13012;
var inst_13014 = (0);
var state_13049__$1 = (function (){var statearr_13052 = state_13049;
(statearr_13052[(7)] = inst_13013);

(statearr_13052[(8)] = inst_13014);

return statearr_13052;
})();
var statearr_13053_13081 = state_13049__$1;
(statearr_13053_13081[(2)] = null);

(statearr_13053_13081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13050 === (4))){
var inst_13017 = (state_13049[(9)]);
var inst_13017__$1 = (state_13049[(2)]);
var inst_13018 = (inst_13017__$1 == null);
var inst_13019 = cljs.core.not.call(null,inst_13018);
var state_13049__$1 = (function (){var statearr_13054 = state_13049;
(statearr_13054[(9)] = inst_13017__$1);

return statearr_13054;
})();
if(inst_13019){
var statearr_13055_13082 = state_13049__$1;
(statearr_13055_13082[(1)] = (5));

} else {
var statearr_13056_13083 = state_13049__$1;
(statearr_13056_13083[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13050 === (15))){
var inst_13039 = (state_13049[(2)]);
var state_13049__$1 = state_13049;
var statearr_13057_13084 = state_13049__$1;
(statearr_13057_13084[(2)] = inst_13039);

(statearr_13057_13084[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13050 === (13))){
var state_13049__$1 = state_13049;
var statearr_13058_13085 = state_13049__$1;
(statearr_13058_13085[(2)] = null);

(statearr_13058_13085[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13050 === (6))){
var inst_13014 = (state_13049[(8)]);
var inst_13035 = (inst_13014 > (0));
var state_13049__$1 = state_13049;
if(cljs.core.truth_(inst_13035)){
var statearr_13059_13086 = state_13049__$1;
(statearr_13059_13086[(1)] = (12));

} else {
var statearr_13060_13087 = state_13049__$1;
(statearr_13060_13087[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13050 === (3))){
var inst_13047 = (state_13049[(2)]);
var state_13049__$1 = state_13049;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13049__$1,inst_13047);
} else {
if((state_val_13050 === (12))){
var inst_13013 = (state_13049[(7)]);
var inst_13037 = cljs.core.vec.call(null,inst_13013);
var state_13049__$1 = state_13049;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13049__$1,(15),out,inst_13037);
} else {
if((state_val_13050 === (2))){
var state_13049__$1 = state_13049;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13049__$1,(4),ch);
} else {
if((state_val_13050 === (11))){
var inst_13029 = (state_13049[(2)]);
var inst_13030 = (new Array(n));
var inst_13013 = inst_13030;
var inst_13014 = (0);
var state_13049__$1 = (function (){var statearr_13061 = state_13049;
(statearr_13061[(10)] = inst_13029);

(statearr_13061[(7)] = inst_13013);

(statearr_13061[(8)] = inst_13014);

return statearr_13061;
})();
var statearr_13062_13088 = state_13049__$1;
(statearr_13062_13088[(2)] = null);

(statearr_13062_13088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13050 === (9))){
var inst_13013 = (state_13049[(7)]);
var inst_13027 = cljs.core.vec.call(null,inst_13013);
var state_13049__$1 = state_13049;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13049__$1,(11),out,inst_13027);
} else {
if((state_val_13050 === (5))){
var inst_13017 = (state_13049[(9)]);
var inst_13022 = (state_13049[(11)]);
var inst_13013 = (state_13049[(7)]);
var inst_13014 = (state_13049[(8)]);
var inst_13021 = (inst_13013[inst_13014] = inst_13017);
var inst_13022__$1 = (inst_13014 + (1));
var inst_13023 = (inst_13022__$1 < n);
var state_13049__$1 = (function (){var statearr_13063 = state_13049;
(statearr_13063[(11)] = inst_13022__$1);

(statearr_13063[(12)] = inst_13021);

return statearr_13063;
})();
if(cljs.core.truth_(inst_13023)){
var statearr_13064_13089 = state_13049__$1;
(statearr_13064_13089[(1)] = (8));

} else {
var statearr_13065_13090 = state_13049__$1;
(statearr_13065_13090[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13050 === (14))){
var inst_13042 = (state_13049[(2)]);
var inst_13043 = cljs.core.async.close_BANG_.call(null,out);
var state_13049__$1 = (function (){var statearr_13067 = state_13049;
(statearr_13067[(13)] = inst_13042);

return statearr_13067;
})();
var statearr_13068_13091 = state_13049__$1;
(statearr_13068_13091[(2)] = inst_13043);

(statearr_13068_13091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13050 === (10))){
var inst_13033 = (state_13049[(2)]);
var state_13049__$1 = state_13049;
var statearr_13069_13092 = state_13049__$1;
(statearr_13069_13092[(2)] = inst_13033);

(statearr_13069_13092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13050 === (8))){
var inst_13022 = (state_13049[(11)]);
var inst_13013 = (state_13049[(7)]);
var tmp13066 = inst_13013;
var inst_13013__$1 = tmp13066;
var inst_13014 = inst_13022;
var state_13049__$1 = (function (){var statearr_13070 = state_13049;
(statearr_13070[(7)] = inst_13013__$1);

(statearr_13070[(8)] = inst_13014);

return statearr_13070;
})();
var statearr_13071_13093 = state_13049__$1;
(statearr_13071_13093[(2)] = null);

(statearr_13071_13093[(1)] = (2));


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
});})(c__7407__auto___13079,out))
;
return ((function (switch__7351__auto__,c__7407__auto___13079,out){
return (function() {
var state_machine__7352__auto__ = null;
var state_machine__7352__auto____0 = (function (){
var statearr_13075 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13075[(0)] = state_machine__7352__auto__);

(statearr_13075[(1)] = (1));

return statearr_13075;
});
var state_machine__7352__auto____1 = (function (state_13049){
while(true){
var ret_value__7353__auto__ = (function (){try{while(true){
var result__7354__auto__ = switch__7351__auto__.call(null,state_13049);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7354__auto__;
}
break;
}
}catch (e13076){if((e13076 instanceof Object)){
var ex__7355__auto__ = e13076;
var statearr_13077_13094 = state_13049;
(statearr_13077_13094[(5)] = ex__7355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13049);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13076;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13095 = state_13049;
state_13049 = G__13095;
continue;
} else {
return ret_value__7353__auto__;
}
break;
}
});
state_machine__7352__auto__ = function(state_13049){
switch(arguments.length){
case 0:
return state_machine__7352__auto____0.call(this);
case 1:
return state_machine__7352__auto____1.call(this,state_13049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7352__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7352__auto____0;
state_machine__7352__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7352__auto____1;
return state_machine__7352__auto__;
})()
;})(switch__7351__auto__,c__7407__auto___13079,out))
})();
var state__7409__auto__ = (function (){var statearr_13078 = f__7408__auto__.call(null);
(statearr_13078[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7407__auto___13079);

return statearr_13078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7409__auto__);
});})(c__7407__auto___13079,out))
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
var c__7407__auto___13238 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7407__auto___13238,out){
return (function (){
var f__7408__auto__ = (function (){var switch__7351__auto__ = ((function (c__7407__auto___13238,out){
return (function (state_13208){
var state_val_13209 = (state_13208[(1)]);
if((state_val_13209 === (7))){
var inst_13204 = (state_13208[(2)]);
var state_13208__$1 = state_13208;
var statearr_13210_13239 = state_13208__$1;
(statearr_13210_13239[(2)] = inst_13204);

(statearr_13210_13239[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13209 === (1))){
var inst_13167 = [];
var inst_13168 = inst_13167;
var inst_13169 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_13208__$1 = (function (){var statearr_13211 = state_13208;
(statearr_13211[(7)] = inst_13169);

(statearr_13211[(8)] = inst_13168);

return statearr_13211;
})();
var statearr_13212_13240 = state_13208__$1;
(statearr_13212_13240[(2)] = null);

(statearr_13212_13240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13209 === (4))){
var inst_13172 = (state_13208[(9)]);
var inst_13172__$1 = (state_13208[(2)]);
var inst_13173 = (inst_13172__$1 == null);
var inst_13174 = cljs.core.not.call(null,inst_13173);
var state_13208__$1 = (function (){var statearr_13213 = state_13208;
(statearr_13213[(9)] = inst_13172__$1);

return statearr_13213;
})();
if(inst_13174){
var statearr_13214_13241 = state_13208__$1;
(statearr_13214_13241[(1)] = (5));

} else {
var statearr_13215_13242 = state_13208__$1;
(statearr_13215_13242[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13209 === (15))){
var inst_13198 = (state_13208[(2)]);
var state_13208__$1 = state_13208;
var statearr_13216_13243 = state_13208__$1;
(statearr_13216_13243[(2)] = inst_13198);

(statearr_13216_13243[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13209 === (13))){
var state_13208__$1 = state_13208;
var statearr_13217_13244 = state_13208__$1;
(statearr_13217_13244[(2)] = null);

(statearr_13217_13244[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13209 === (6))){
var inst_13168 = (state_13208[(8)]);
var inst_13193 = inst_13168.length;
var inst_13194 = (inst_13193 > (0));
var state_13208__$1 = state_13208;
if(cljs.core.truth_(inst_13194)){
var statearr_13218_13245 = state_13208__$1;
(statearr_13218_13245[(1)] = (12));

} else {
var statearr_13219_13246 = state_13208__$1;
(statearr_13219_13246[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13209 === (3))){
var inst_13206 = (state_13208[(2)]);
var state_13208__$1 = state_13208;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13208__$1,inst_13206);
} else {
if((state_val_13209 === (12))){
var inst_13168 = (state_13208[(8)]);
var inst_13196 = cljs.core.vec.call(null,inst_13168);
var state_13208__$1 = state_13208;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13208__$1,(15),out,inst_13196);
} else {
if((state_val_13209 === (2))){
var state_13208__$1 = state_13208;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13208__$1,(4),ch);
} else {
if((state_val_13209 === (11))){
var inst_13176 = (state_13208[(10)]);
var inst_13172 = (state_13208[(9)]);
var inst_13186 = (state_13208[(2)]);
var inst_13187 = [];
var inst_13188 = inst_13187.push(inst_13172);
var inst_13168 = inst_13187;
var inst_13169 = inst_13176;
var state_13208__$1 = (function (){var statearr_13220 = state_13208;
(statearr_13220[(11)] = inst_13186);

(statearr_13220[(12)] = inst_13188);

(statearr_13220[(7)] = inst_13169);

(statearr_13220[(8)] = inst_13168);

return statearr_13220;
})();
var statearr_13221_13247 = state_13208__$1;
(statearr_13221_13247[(2)] = null);

(statearr_13221_13247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13209 === (9))){
var inst_13168 = (state_13208[(8)]);
var inst_13184 = cljs.core.vec.call(null,inst_13168);
var state_13208__$1 = state_13208;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13208__$1,(11),out,inst_13184);
} else {
if((state_val_13209 === (5))){
var inst_13176 = (state_13208[(10)]);
var inst_13172 = (state_13208[(9)]);
var inst_13169 = (state_13208[(7)]);
var inst_13176__$1 = f.call(null,inst_13172);
var inst_13177 = cljs.core._EQ_.call(null,inst_13176__$1,inst_13169);
var inst_13178 = cljs.core.keyword_identical_QMARK_.call(null,inst_13169,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_13179 = (inst_13177) || (inst_13178);
var state_13208__$1 = (function (){var statearr_13222 = state_13208;
(statearr_13222[(10)] = inst_13176__$1);

return statearr_13222;
})();
if(cljs.core.truth_(inst_13179)){
var statearr_13223_13248 = state_13208__$1;
(statearr_13223_13248[(1)] = (8));

} else {
var statearr_13224_13249 = state_13208__$1;
(statearr_13224_13249[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13209 === (14))){
var inst_13201 = (state_13208[(2)]);
var inst_13202 = cljs.core.async.close_BANG_.call(null,out);
var state_13208__$1 = (function (){var statearr_13226 = state_13208;
(statearr_13226[(13)] = inst_13201);

return statearr_13226;
})();
var statearr_13227_13250 = state_13208__$1;
(statearr_13227_13250[(2)] = inst_13202);

(statearr_13227_13250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13209 === (10))){
var inst_13191 = (state_13208[(2)]);
var state_13208__$1 = state_13208;
var statearr_13228_13251 = state_13208__$1;
(statearr_13228_13251[(2)] = inst_13191);

(statearr_13228_13251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13209 === (8))){
var inst_13176 = (state_13208[(10)]);
var inst_13172 = (state_13208[(9)]);
var inst_13168 = (state_13208[(8)]);
var inst_13181 = inst_13168.push(inst_13172);
var tmp13225 = inst_13168;
var inst_13168__$1 = tmp13225;
var inst_13169 = inst_13176;
var state_13208__$1 = (function (){var statearr_13229 = state_13208;
(statearr_13229[(14)] = inst_13181);

(statearr_13229[(7)] = inst_13169);

(statearr_13229[(8)] = inst_13168__$1);

return statearr_13229;
})();
var statearr_13230_13252 = state_13208__$1;
(statearr_13230_13252[(2)] = null);

(statearr_13230_13252[(1)] = (2));


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
});})(c__7407__auto___13238,out))
;
return ((function (switch__7351__auto__,c__7407__auto___13238,out){
return (function() {
var state_machine__7352__auto__ = null;
var state_machine__7352__auto____0 = (function (){
var statearr_13234 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13234[(0)] = state_machine__7352__auto__);

(statearr_13234[(1)] = (1));

return statearr_13234;
});
var state_machine__7352__auto____1 = (function (state_13208){
while(true){
var ret_value__7353__auto__ = (function (){try{while(true){
var result__7354__auto__ = switch__7351__auto__.call(null,state_13208);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7354__auto__;
}
break;
}
}catch (e13235){if((e13235 instanceof Object)){
var ex__7355__auto__ = e13235;
var statearr_13236_13253 = state_13208;
(statearr_13236_13253[(5)] = ex__7355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13235;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13254 = state_13208;
state_13208 = G__13254;
continue;
} else {
return ret_value__7353__auto__;
}
break;
}
});
state_machine__7352__auto__ = function(state_13208){
switch(arguments.length){
case 0:
return state_machine__7352__auto____0.call(this);
case 1:
return state_machine__7352__auto____1.call(this,state_13208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7352__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7352__auto____0;
state_machine__7352__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7352__auto____1;
return state_machine__7352__auto__;
})()
;})(switch__7351__auto__,c__7407__auto___13238,out))
})();
var state__7409__auto__ = (function (){var statearr_13237 = f__7408__auto__.call(null);
(statearr_13237[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7407__auto___13238);

return statearr_13237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7409__auto__);
});})(c__7407__auto___13238,out))
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
