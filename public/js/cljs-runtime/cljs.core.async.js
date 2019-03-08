goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30991 = arguments.length;
switch (G__30991) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30995 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30995 = (function (f,blockable,meta30996){
this.f = f;
this.blockable = blockable;
this.meta30996 = meta30996;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30995.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30997,meta30996__$1){
var self__ = this;
var _30997__$1 = this;
return (new cljs.core.async.t_cljs$core$async30995(self__.f,self__.blockable,meta30996__$1));
});

cljs.core.async.t_cljs$core$async30995.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30997){
var self__ = this;
var _30997__$1 = this;
return self__.meta30996;
});

cljs.core.async.t_cljs$core$async30995.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30995.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30995.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async30995.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async30995.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30996","meta30996",-263680622,null)], null);
});

cljs.core.async.t_cljs$core$async30995.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30995.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30995";

cljs.core.async.t_cljs$core$async30995.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async30995");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30995.
 */
cljs.core.async.__GT_t_cljs$core$async30995 = (function cljs$core$async$__GT_t_cljs$core$async30995(f__$1,blockable__$1,meta30996){
return (new cljs.core.async.t_cljs$core$async30995(f__$1,blockable__$1,meta30996));
});

}

return (new cljs.core.async.t_cljs$core$async30995(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__31009 = arguments.length;
switch (G__31009) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__31018 = arguments.length;
switch (G__31018) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__31029 = arguments.length;
switch (G__31029) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_32973 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32973) : fn1.call(null,val_32973));
} else {
cljs.core.async.impl.dispatch.run(((function (val_32973,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32973) : fn1.call(null,val_32973));
});})(val_32973,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__31080 = arguments.length;
switch (G__31080) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5718__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5718__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___32977 = n;
var x_32978 = (0);
while(true){
if((x_32978 < n__4607__auto___32977)){
(a[x_32978] = (0));

var G__32979 = (x_32978 + (1));
x_32978 = G__32979;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__32980 = (i + (1));
i = G__32980;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31105 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31105 = (function (flag,meta31106){
this.flag = flag;
this.meta31106 = meta31106;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31105.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31107,meta31106__$1){
var self__ = this;
var _31107__$1 = this;
return (new cljs.core.async.t_cljs$core$async31105(self__.flag,meta31106__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async31105.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31107){
var self__ = this;
var _31107__$1 = this;
return self__.meta31106;
});})(flag))
;

cljs.core.async.t_cljs$core$async31105.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31105.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async31105.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31105.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31105.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31106","meta31106",1647797663,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async31105.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31105.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31105";

cljs.core.async.t_cljs$core$async31105.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async31105");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31105.
 */
cljs.core.async.__GT_t_cljs$core$async31105 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31105(flag__$1,meta31106){
return (new cljs.core.async.t_cljs$core$async31105(flag__$1,meta31106));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async31105(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31108 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31108 = (function (flag,cb,meta31109){
this.flag = flag;
this.cb = cb;
this.meta31109 = meta31109;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31108.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31110,meta31109__$1){
var self__ = this;
var _31110__$1 = this;
return (new cljs.core.async.t_cljs$core$async31108(self__.flag,self__.cb,meta31109__$1));
});

cljs.core.async.t_cljs$core$async31108.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31110){
var self__ = this;
var _31110__$1 = this;
return self__.meta31109;
});

cljs.core.async.t_cljs$core$async31108.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31108.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async31108.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31108.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async31108.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31109","meta31109",1411543542,null)], null);
});

cljs.core.async.t_cljs$core$async31108.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31108.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31108";

cljs.core.async.t_cljs$core$async31108.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async31108");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31108.
 */
cljs.core.async.__GT_t_cljs$core$async31108 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31108(flag__$1,cb__$1,meta31109){
return (new cljs.core.async.t_cljs$core$async31108(flag__$1,cb__$1,meta31109));
});

}

return (new cljs.core.async.t_cljs$core$async31108(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31128_SHARP_){
var G__31144 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31128_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31144) : fret.call(null,G__31144));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31129_SHARP_){
var G__31145 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31129_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31145) : fret.call(null,G__31145));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32989 = (i + (1));
i = G__32989;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4120__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4120__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___32994 = arguments.length;
var i__4731__auto___32995 = (0);
while(true){
if((i__4731__auto___32995 < len__4730__auto___32994)){
args__4736__auto__.push((arguments[i__4731__auto___32995]));

var G__32996 = (i__4731__auto___32995 + (1));
i__4731__auto___32995 = G__32996;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31148){
var map__31149 = p__31148;
var map__31149__$1 = (((((!((map__31149 == null))))?(((((map__31149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31149):map__31149);
var opts = map__31149__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31146){
var G__31147 = cljs.core.first(seq31146);
var seq31146__$1 = cljs.core.next(seq31146);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31147,seq31146__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__31152 = arguments.length;
switch (G__31152) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30908__auto___33020 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30908__auto___33020){
return (function (){
var f__30909__auto__ = (function (){var switch__30666__auto__ = ((function (c__30908__auto___33020){
return (function (state_31177){
var state_val_31178 = (state_31177[(1)]);
if((state_val_31178 === (7))){
var inst_31173 = (state_31177[(2)]);
var state_31177__$1 = state_31177;
var statearr_31179_33021 = state_31177__$1;
(statearr_31179_33021[(2)] = inst_31173);

(statearr_31179_33021[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31178 === (1))){
var state_31177__$1 = state_31177;
var statearr_31180_33022 = state_31177__$1;
(statearr_31180_33022[(2)] = null);

(statearr_31180_33022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31178 === (4))){
var inst_31156 = (state_31177[(7)]);
var inst_31156__$1 = (state_31177[(2)]);
var inst_31157 = (inst_31156__$1 == null);
var state_31177__$1 = (function (){var statearr_31181 = state_31177;
(statearr_31181[(7)] = inst_31156__$1);

return statearr_31181;
})();
if(cljs.core.truth_(inst_31157)){
var statearr_31182_33023 = state_31177__$1;
(statearr_31182_33023[(1)] = (5));

} else {
var statearr_31183_33024 = state_31177__$1;
(statearr_31183_33024[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31178 === (13))){
var state_31177__$1 = state_31177;
var statearr_31185_33025 = state_31177__$1;
(statearr_31185_33025[(2)] = null);

(statearr_31185_33025[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31178 === (6))){
var inst_31156 = (state_31177[(7)]);
var state_31177__$1 = state_31177;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31177__$1,(11),to,inst_31156);
} else {
if((state_val_31178 === (3))){
var inst_31175 = (state_31177[(2)]);
var state_31177__$1 = state_31177;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31177__$1,inst_31175);
} else {
if((state_val_31178 === (12))){
var state_31177__$1 = state_31177;
var statearr_31187_33026 = state_31177__$1;
(statearr_31187_33026[(2)] = null);

(statearr_31187_33026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31178 === (2))){
var state_31177__$1 = state_31177;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31177__$1,(4),from);
} else {
if((state_val_31178 === (11))){
var inst_31166 = (state_31177[(2)]);
var state_31177__$1 = state_31177;
if(cljs.core.truth_(inst_31166)){
var statearr_31188_33027 = state_31177__$1;
(statearr_31188_33027[(1)] = (12));

} else {
var statearr_31189_33028 = state_31177__$1;
(statearr_31189_33028[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31178 === (9))){
var state_31177__$1 = state_31177;
var statearr_31190_33029 = state_31177__$1;
(statearr_31190_33029[(2)] = null);

(statearr_31190_33029[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31178 === (5))){
var state_31177__$1 = state_31177;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31191_33038 = state_31177__$1;
(statearr_31191_33038[(1)] = (8));

} else {
var statearr_31192_33039 = state_31177__$1;
(statearr_31192_33039[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31178 === (14))){
var inst_31171 = (state_31177[(2)]);
var state_31177__$1 = state_31177;
var statearr_31193_33041 = state_31177__$1;
(statearr_31193_33041[(2)] = inst_31171);

(statearr_31193_33041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31178 === (10))){
var inst_31163 = (state_31177[(2)]);
var state_31177__$1 = state_31177;
var statearr_31194_33042 = state_31177__$1;
(statearr_31194_33042[(2)] = inst_31163);

(statearr_31194_33042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31178 === (8))){
var inst_31160 = cljs.core.async.close_BANG_(to);
var state_31177__$1 = state_31177;
var statearr_31195_33043 = state_31177__$1;
(statearr_31195_33043[(2)] = inst_31160);

(statearr_31195_33043[(1)] = (10));


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
});})(c__30908__auto___33020))
;
return ((function (switch__30666__auto__,c__30908__auto___33020){
return (function() {
var cljs$core$async$state_machine__30667__auto__ = null;
var cljs$core$async$state_machine__30667__auto____0 = (function (){
var statearr_31196 = [null,null,null,null,null,null,null,null];
(statearr_31196[(0)] = cljs$core$async$state_machine__30667__auto__);

(statearr_31196[(1)] = (1));

return statearr_31196;
});
var cljs$core$async$state_machine__30667__auto____1 = (function (state_31177){
while(true){
var ret_value__30668__auto__ = (function (){try{while(true){
var result__30669__auto__ = switch__30666__auto__(state_31177);
if(cljs.core.keyword_identical_QMARK_(result__30669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30669__auto__;
}
break;
}
}catch (e31197){if((e31197 instanceof Object)){
var ex__30670__auto__ = e31197;
var statearr_31198_33046 = state_31177;
(statearr_31198_33046[(5)] = ex__30670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31177);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31197;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33047 = state_31177;
state_31177 = G__33047;
continue;
} else {
return ret_value__30668__auto__;
}
break;
}
});
cljs$core$async$state_machine__30667__auto__ = function(state_31177){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30667__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30667__auto____1.call(this,state_31177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30667__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30667__auto____0;
cljs$core$async$state_machine__30667__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30667__auto____1;
return cljs$core$async$state_machine__30667__auto__;
})()
;})(switch__30666__auto__,c__30908__auto___33020))
})();
var state__30910__auto__ = (function (){var statearr_31199 = (f__30909__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30909__auto__.cljs$core$IFn$_invoke$arity$0() : f__30909__auto__.call(null));
(statearr_31199[(6)] = c__30908__auto___33020);

return statearr_31199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30910__auto__);
});})(c__30908__auto___33020))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__31200){
var vec__31201 = p__31200;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31201,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31201,(1),null);
var job = vec__31201;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30908__auto___33054 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30908__auto___33054,res,vec__31201,v,p,job,jobs,results){
return (function (){
var f__30909__auto__ = (function (){var switch__30666__auto__ = ((function (c__30908__auto___33054,res,vec__31201,v,p,job,jobs,results){
return (function (state_31208){
var state_val_31209 = (state_31208[(1)]);
if((state_val_31209 === (1))){
var state_31208__$1 = state_31208;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31208__$1,(2),res,v);
} else {
if((state_val_31209 === (2))){
var inst_31205 = (state_31208[(2)]);
var inst_31206 = cljs.core.async.close_BANG_(res);
var state_31208__$1 = (function (){var statearr_31210 = state_31208;
(statearr_31210[(7)] = inst_31205);

return statearr_31210;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31208__$1,inst_31206);
} else {
return null;
}
}
});})(c__30908__auto___33054,res,vec__31201,v,p,job,jobs,results))
;
return ((function (switch__30666__auto__,c__30908__auto___33054,res,vec__31201,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30667__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30667__auto____0 = (function (){
var statearr_31211 = [null,null,null,null,null,null,null,null];
(statearr_31211[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30667__auto__);

(statearr_31211[(1)] = (1));

return statearr_31211;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30667__auto____1 = (function (state_31208){
while(true){
var ret_value__30668__auto__ = (function (){try{while(true){
var result__30669__auto__ = switch__30666__auto__(state_31208);
if(cljs.core.keyword_identical_QMARK_(result__30669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30669__auto__;
}
break;
}
}catch (e31212){if((e31212 instanceof Object)){
var ex__30670__auto__ = e31212;
var statearr_31213_33057 = state_31208;
(statearr_31213_33057[(5)] = ex__30670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31212;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33069 = state_31208;
state_31208 = G__33069;
continue;
} else {
return ret_value__30668__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30667__auto__ = function(state_31208){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30667__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30667__auto____1.call(this,state_31208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30667__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30667__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30667__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30667__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30667__auto__;
})()
;})(switch__30666__auto__,c__30908__auto___33054,res,vec__31201,v,p,job,jobs,results))
})();
var state__30910__auto__ = (function (){var statearr_31214 = (f__30909__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30909__auto__.cljs$core$IFn$_invoke$arity$0() : f__30909__auto__.call(null));
(statearr_31214[(6)] = c__30908__auto___33054);

return statearr_31214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30910__auto__);
});})(c__30908__auto___33054,res,vec__31201,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31215){
var vec__31216 = p__31215;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31216,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31216,(1),null);
var job = vec__31216;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___33076 = n;
var __33083 = (0);
while(true){
if((__33083 < n__4607__auto___33076)){
var G__31220_33084 = type;
var G__31220_33085__$1 = (((G__31220_33084 instanceof cljs.core.Keyword))?G__31220_33084.fqn:null);
switch (G__31220_33085__$1) {
case "compute":
var c__30908__auto___33087 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33083,c__30908__auto___33087,G__31220_33084,G__31220_33085__$1,n__4607__auto___33076,jobs,results,process,async){
return (function (){
var f__30909__auto__ = (function (){var switch__30666__auto__ = ((function (__33083,c__30908__auto___33087,G__31220_33084,G__31220_33085__$1,n__4607__auto___33076,jobs,results,process,async){
return (function (state_31233){
var state_val_31234 = (state_31233[(1)]);
if((state_val_31234 === (1))){
var state_31233__$1 = state_31233;
var statearr_31235_33088 = state_31233__$1;
(statearr_31235_33088[(2)] = null);

(statearr_31235_33088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31234 === (2))){
var state_31233__$1 = state_31233;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31233__$1,(4),jobs);
} else {
if((state_val_31234 === (3))){
var inst_31231 = (state_31233[(2)]);
var state_31233__$1 = state_31233;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31233__$1,inst_31231);
} else {
if((state_val_31234 === (4))){
var inst_31223 = (state_31233[(2)]);
var inst_31224 = process(inst_31223);
var state_31233__$1 = state_31233;
if(cljs.core.truth_(inst_31224)){
var statearr_31236_33091 = state_31233__$1;
(statearr_31236_33091[(1)] = (5));

} else {
var statearr_31237_33092 = state_31233__$1;
(statearr_31237_33092[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31234 === (5))){
var state_31233__$1 = state_31233;
var statearr_31238_33093 = state_31233__$1;
(statearr_31238_33093[(2)] = null);

(statearr_31238_33093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31234 === (6))){
var state_31233__$1 = state_31233;
var statearr_31239_33094 = state_31233__$1;
(statearr_31239_33094[(2)] = null);

(statearr_31239_33094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31234 === (7))){
var inst_31229 = (state_31233[(2)]);
var state_31233__$1 = state_31233;
var statearr_31240_33095 = state_31233__$1;
(statearr_31240_33095[(2)] = inst_31229);

(statearr_31240_33095[(1)] = (3));


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
});})(__33083,c__30908__auto___33087,G__31220_33084,G__31220_33085__$1,n__4607__auto___33076,jobs,results,process,async))
;
return ((function (__33083,switch__30666__auto__,c__30908__auto___33087,G__31220_33084,G__31220_33085__$1,n__4607__auto___33076,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30667__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30667__auto____0 = (function (){
var statearr_31241 = [null,null,null,null,null,null,null];
(statearr_31241[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30667__auto__);

(statearr_31241[(1)] = (1));

return statearr_31241;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30667__auto____1 = (function (state_31233){
while(true){
var ret_value__30668__auto__ = (function (){try{while(true){
var result__30669__auto__ = switch__30666__auto__(state_31233);
if(cljs.core.keyword_identical_QMARK_(result__30669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30669__auto__;
}
break;
}
}catch (e31242){if((e31242 instanceof Object)){
var ex__30670__auto__ = e31242;
var statearr_31243_33102 = state_31233;
(statearr_31243_33102[(5)] = ex__30670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31233);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31242;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33107 = state_31233;
state_31233 = G__33107;
continue;
} else {
return ret_value__30668__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30667__auto__ = function(state_31233){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30667__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30667__auto____1.call(this,state_31233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30667__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30667__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30667__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30667__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30667__auto__;
})()
;})(__33083,switch__30666__auto__,c__30908__auto___33087,G__31220_33084,G__31220_33085__$1,n__4607__auto___33076,jobs,results,process,async))
})();
var state__30910__auto__ = (function (){var statearr_31244 = (f__30909__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30909__auto__.cljs$core$IFn$_invoke$arity$0() : f__30909__auto__.call(null));
(statearr_31244[(6)] = c__30908__auto___33087);

return statearr_31244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30910__auto__);
});})(__33083,c__30908__auto___33087,G__31220_33084,G__31220_33085__$1,n__4607__auto___33076,jobs,results,process,async))
);


break;
case "async":
var c__30908__auto___33111 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33083,c__30908__auto___33111,G__31220_33084,G__31220_33085__$1,n__4607__auto___33076,jobs,results,process,async){
return (function (){
var f__30909__auto__ = (function (){var switch__30666__auto__ = ((function (__33083,c__30908__auto___33111,G__31220_33084,G__31220_33085__$1,n__4607__auto___33076,jobs,results,process,async){
return (function (state_31257){
var state_val_31258 = (state_31257[(1)]);
if((state_val_31258 === (1))){
var state_31257__$1 = state_31257;
var statearr_31259_33118 = state_31257__$1;
(statearr_31259_33118[(2)] = null);

(statearr_31259_33118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31258 === (2))){
var state_31257__$1 = state_31257;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31257__$1,(4),jobs);
} else {
if((state_val_31258 === (3))){
var inst_31255 = (state_31257[(2)]);
var state_31257__$1 = state_31257;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31257__$1,inst_31255);
} else {
if((state_val_31258 === (4))){
var inst_31247 = (state_31257[(2)]);
var inst_31248 = async(inst_31247);
var state_31257__$1 = state_31257;
if(cljs.core.truth_(inst_31248)){
var statearr_31260_33129 = state_31257__$1;
(statearr_31260_33129[(1)] = (5));

} else {
var statearr_31261_33130 = state_31257__$1;
(statearr_31261_33130[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31258 === (5))){
var state_31257__$1 = state_31257;
var statearr_31262_33131 = state_31257__$1;
(statearr_31262_33131[(2)] = null);

(statearr_31262_33131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31258 === (6))){
var state_31257__$1 = state_31257;
var statearr_31264_33141 = state_31257__$1;
(statearr_31264_33141[(2)] = null);

(statearr_31264_33141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31258 === (7))){
var inst_31253 = (state_31257[(2)]);
var state_31257__$1 = state_31257;
var statearr_31265_33154 = state_31257__$1;
(statearr_31265_33154[(2)] = inst_31253);

(statearr_31265_33154[(1)] = (3));


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
});})(__33083,c__30908__auto___33111,G__31220_33084,G__31220_33085__$1,n__4607__auto___33076,jobs,results,process,async))
;
return ((function (__33083,switch__30666__auto__,c__30908__auto___33111,G__31220_33084,G__31220_33085__$1,n__4607__auto___33076,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30667__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30667__auto____0 = (function (){
var statearr_31266 = [null,null,null,null,null,null,null];
(statearr_31266[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30667__auto__);

(statearr_31266[(1)] = (1));

return statearr_31266;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30667__auto____1 = (function (state_31257){
while(true){
var ret_value__30668__auto__ = (function (){try{while(true){
var result__30669__auto__ = switch__30666__auto__(state_31257);
if(cljs.core.keyword_identical_QMARK_(result__30669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30669__auto__;
}
break;
}
}catch (e31267){if((e31267 instanceof Object)){
var ex__30670__auto__ = e31267;
var statearr_31268_33155 = state_31257;
(statearr_31268_33155[(5)] = ex__30670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31267;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33156 = state_31257;
state_31257 = G__33156;
continue;
} else {
return ret_value__30668__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30667__auto__ = function(state_31257){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30667__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30667__auto____1.call(this,state_31257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30667__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30667__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30667__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30667__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30667__auto__;
})()
;})(__33083,switch__30666__auto__,c__30908__auto___33111,G__31220_33084,G__31220_33085__$1,n__4607__auto___33076,jobs,results,process,async))
})();
var state__30910__auto__ = (function (){var statearr_31269 = (f__30909__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30909__auto__.cljs$core$IFn$_invoke$arity$0() : f__30909__auto__.call(null));
(statearr_31269[(6)] = c__30908__auto___33111);

return statearr_31269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30910__auto__);
});})(__33083,c__30908__auto___33111,G__31220_33084,G__31220_33085__$1,n__4607__auto___33076,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31220_33085__$1)].join('')));

}

var G__33157 = (__33083 + (1));
__33083 = G__33157;
continue;
} else {
}
break;
}

var c__30908__auto___33159 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30908__auto___33159,jobs,results,process,async){
return (function (){
var f__30909__auto__ = (function (){var switch__30666__auto__ = ((function (c__30908__auto___33159,jobs,results,process,async){
return (function (state_31291){
var state_val_31292 = (state_31291[(1)]);
if((state_val_31292 === (7))){
var inst_31287 = (state_31291[(2)]);
var state_31291__$1 = state_31291;
var statearr_31293_33160 = state_31291__$1;
(statearr_31293_33160[(2)] = inst_31287);

(statearr_31293_33160[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31292 === (1))){
var state_31291__$1 = state_31291;
var statearr_31294_33161 = state_31291__$1;
(statearr_31294_33161[(2)] = null);

(statearr_31294_33161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31292 === (4))){
var inst_31272 = (state_31291[(7)]);
var inst_31272__$1 = (state_31291[(2)]);
var inst_31273 = (inst_31272__$1 == null);
var state_31291__$1 = (function (){var statearr_31295 = state_31291;
(statearr_31295[(7)] = inst_31272__$1);

return statearr_31295;
})();
if(cljs.core.truth_(inst_31273)){
var statearr_31296_33162 = state_31291__$1;
(statearr_31296_33162[(1)] = (5));

} else {
var statearr_31297_33163 = state_31291__$1;
(statearr_31297_33163[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31292 === (6))){
var inst_31277 = (state_31291[(8)]);
var inst_31272 = (state_31291[(7)]);
var inst_31277__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31278 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31279 = [inst_31272,inst_31277__$1];
var inst_31280 = (new cljs.core.PersistentVector(null,2,(5),inst_31278,inst_31279,null));
var state_31291__$1 = (function (){var statearr_31298 = state_31291;
(statearr_31298[(8)] = inst_31277__$1);

return statearr_31298;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31291__$1,(8),jobs,inst_31280);
} else {
if((state_val_31292 === (3))){
var inst_31289 = (state_31291[(2)]);
var state_31291__$1 = state_31291;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31291__$1,inst_31289);
} else {
if((state_val_31292 === (2))){
var state_31291__$1 = state_31291;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31291__$1,(4),from);
} else {
if((state_val_31292 === (9))){
var inst_31284 = (state_31291[(2)]);
var state_31291__$1 = (function (){var statearr_31299 = state_31291;
(statearr_31299[(9)] = inst_31284);

return statearr_31299;
})();
var statearr_31300_33166 = state_31291__$1;
(statearr_31300_33166[(2)] = null);

(statearr_31300_33166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31292 === (5))){
var inst_31275 = cljs.core.async.close_BANG_(jobs);
var state_31291__$1 = state_31291;
var statearr_31301_33167 = state_31291__$1;
(statearr_31301_33167[(2)] = inst_31275);

(statearr_31301_33167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31292 === (8))){
var inst_31277 = (state_31291[(8)]);
var inst_31282 = (state_31291[(2)]);
var state_31291__$1 = (function (){var statearr_31302 = state_31291;
(statearr_31302[(10)] = inst_31282);

return statearr_31302;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31291__$1,(9),results,inst_31277);
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
});})(c__30908__auto___33159,jobs,results,process,async))
;
return ((function (switch__30666__auto__,c__30908__auto___33159,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30667__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30667__auto____0 = (function (){
var statearr_31303 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31303[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30667__auto__);

(statearr_31303[(1)] = (1));

return statearr_31303;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30667__auto____1 = (function (state_31291){
while(true){
var ret_value__30668__auto__ = (function (){try{while(true){
var result__30669__auto__ = switch__30666__auto__(state_31291);
if(cljs.core.keyword_identical_QMARK_(result__30669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30669__auto__;
}
break;
}
}catch (e31304){if((e31304 instanceof Object)){
var ex__30670__auto__ = e31304;
var statearr_31305_33168 = state_31291;
(statearr_31305_33168[(5)] = ex__30670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31291);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31304;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33169 = state_31291;
state_31291 = G__33169;
continue;
} else {
return ret_value__30668__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30667__auto__ = function(state_31291){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30667__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30667__auto____1.call(this,state_31291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30667__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30667__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30667__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30667__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30667__auto__;
})()
;})(switch__30666__auto__,c__30908__auto___33159,jobs,results,process,async))
})();
var state__30910__auto__ = (function (){var statearr_31306 = (f__30909__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30909__auto__.cljs$core$IFn$_invoke$arity$0() : f__30909__auto__.call(null));
(statearr_31306[(6)] = c__30908__auto___33159);

return statearr_31306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30910__auto__);
});})(c__30908__auto___33159,jobs,results,process,async))
);


var c__30908__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30908__auto__,jobs,results,process,async){
return (function (){
var f__30909__auto__ = (function (){var switch__30666__auto__ = ((function (c__30908__auto__,jobs,results,process,async){
return (function (state_31345){
var state_val_31346 = (state_31345[(1)]);
if((state_val_31346 === (7))){
var inst_31341 = (state_31345[(2)]);
var state_31345__$1 = state_31345;
var statearr_31347_33176 = state_31345__$1;
(statearr_31347_33176[(2)] = inst_31341);

(statearr_31347_33176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (20))){
var state_31345__$1 = state_31345;
var statearr_31348_33178 = state_31345__$1;
(statearr_31348_33178[(2)] = null);

(statearr_31348_33178[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (1))){
var state_31345__$1 = state_31345;
var statearr_31349_33179 = state_31345__$1;
(statearr_31349_33179[(2)] = null);

(statearr_31349_33179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (4))){
var inst_31309 = (state_31345[(7)]);
var inst_31309__$1 = (state_31345[(2)]);
var inst_31310 = (inst_31309__$1 == null);
var state_31345__$1 = (function (){var statearr_31350 = state_31345;
(statearr_31350[(7)] = inst_31309__$1);

return statearr_31350;
})();
if(cljs.core.truth_(inst_31310)){
var statearr_31351_33182 = state_31345__$1;
(statearr_31351_33182[(1)] = (5));

} else {
var statearr_31352_33183 = state_31345__$1;
(statearr_31352_33183[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (15))){
var inst_31323 = (state_31345[(8)]);
var state_31345__$1 = state_31345;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31345__$1,(18),to,inst_31323);
} else {
if((state_val_31346 === (21))){
var inst_31336 = (state_31345[(2)]);
var state_31345__$1 = state_31345;
var statearr_31353_33184 = state_31345__$1;
(statearr_31353_33184[(2)] = inst_31336);

(statearr_31353_33184[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (13))){
var inst_31338 = (state_31345[(2)]);
var state_31345__$1 = (function (){var statearr_31354 = state_31345;
(statearr_31354[(9)] = inst_31338);

return statearr_31354;
})();
var statearr_31355_33185 = state_31345__$1;
(statearr_31355_33185[(2)] = null);

(statearr_31355_33185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (6))){
var inst_31309 = (state_31345[(7)]);
var state_31345__$1 = state_31345;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31345__$1,(11),inst_31309);
} else {
if((state_val_31346 === (17))){
var inst_31331 = (state_31345[(2)]);
var state_31345__$1 = state_31345;
if(cljs.core.truth_(inst_31331)){
var statearr_31356_33186 = state_31345__$1;
(statearr_31356_33186[(1)] = (19));

} else {
var statearr_31357_33187 = state_31345__$1;
(statearr_31357_33187[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (3))){
var inst_31343 = (state_31345[(2)]);
var state_31345__$1 = state_31345;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31345__$1,inst_31343);
} else {
if((state_val_31346 === (12))){
var inst_31319 = (state_31345[(10)]);
var state_31345__$1 = state_31345;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31345__$1,(14),inst_31319);
} else {
if((state_val_31346 === (2))){
var state_31345__$1 = state_31345;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31345__$1,(4),results);
} else {
if((state_val_31346 === (19))){
var state_31345__$1 = state_31345;
var statearr_31358_33209 = state_31345__$1;
(statearr_31358_33209[(2)] = null);

(statearr_31358_33209[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (11))){
var inst_31319 = (state_31345[(2)]);
var state_31345__$1 = (function (){var statearr_31359 = state_31345;
(statearr_31359[(10)] = inst_31319);

return statearr_31359;
})();
var statearr_31360_33210 = state_31345__$1;
(statearr_31360_33210[(2)] = null);

(statearr_31360_33210[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (9))){
var state_31345__$1 = state_31345;
var statearr_31361_33211 = state_31345__$1;
(statearr_31361_33211[(2)] = null);

(statearr_31361_33211[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (5))){
var state_31345__$1 = state_31345;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31362_33212 = state_31345__$1;
(statearr_31362_33212[(1)] = (8));

} else {
var statearr_31363_33213 = state_31345__$1;
(statearr_31363_33213[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (14))){
var inst_31323 = (state_31345[(8)]);
var inst_31325 = (state_31345[(11)]);
var inst_31323__$1 = (state_31345[(2)]);
var inst_31324 = (inst_31323__$1 == null);
var inst_31325__$1 = cljs.core.not(inst_31324);
var state_31345__$1 = (function (){var statearr_31364 = state_31345;
(statearr_31364[(8)] = inst_31323__$1);

(statearr_31364[(11)] = inst_31325__$1);

return statearr_31364;
})();
if(inst_31325__$1){
var statearr_31365_33214 = state_31345__$1;
(statearr_31365_33214[(1)] = (15));

} else {
var statearr_31366_33215 = state_31345__$1;
(statearr_31366_33215[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (16))){
var inst_31325 = (state_31345[(11)]);
var state_31345__$1 = state_31345;
var statearr_31367_33216 = state_31345__$1;
(statearr_31367_33216[(2)] = inst_31325);

(statearr_31367_33216[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (10))){
var inst_31316 = (state_31345[(2)]);
var state_31345__$1 = state_31345;
var statearr_31368_33223 = state_31345__$1;
(statearr_31368_33223[(2)] = inst_31316);

(statearr_31368_33223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (18))){
var inst_31328 = (state_31345[(2)]);
var state_31345__$1 = state_31345;
var statearr_31369_33224 = state_31345__$1;
(statearr_31369_33224[(2)] = inst_31328);

(statearr_31369_33224[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (8))){
var inst_31313 = cljs.core.async.close_BANG_(to);
var state_31345__$1 = state_31345;
var statearr_31370_33225 = state_31345__$1;
(statearr_31370_33225[(2)] = inst_31313);

(statearr_31370_33225[(1)] = (10));


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
});})(c__30908__auto__,jobs,results,process,async))
;
return ((function (switch__30666__auto__,c__30908__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30667__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30667__auto____0 = (function (){
var statearr_31371 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31371[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30667__auto__);

(statearr_31371[(1)] = (1));

return statearr_31371;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30667__auto____1 = (function (state_31345){
while(true){
var ret_value__30668__auto__ = (function (){try{while(true){
var result__30669__auto__ = switch__30666__auto__(state_31345);
if(cljs.core.keyword_identical_QMARK_(result__30669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30669__auto__;
}
break;
}
}catch (e31372){if((e31372 instanceof Object)){
var ex__30670__auto__ = e31372;
var statearr_31373_33226 = state_31345;
(statearr_31373_33226[(5)] = ex__30670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31372;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33227 = state_31345;
state_31345 = G__33227;
continue;
} else {
return ret_value__30668__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30667__auto__ = function(state_31345){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30667__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30667__auto____1.call(this,state_31345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30667__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30667__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30667__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30667__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30667__auto__;
})()
;})(switch__30666__auto__,c__30908__auto__,jobs,results,process,async))
})();
var state__30910__auto__ = (function (){var statearr_31374 = (f__30909__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30909__auto__.cljs$core$IFn$_invoke$arity$0() : f__30909__auto__.call(null));
(statearr_31374[(6)] = c__30908__auto__);

return statearr_31374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30910__auto__);
});})(c__30908__auto__,jobs,results,process,async))
);

return c__30908__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__31377 = arguments.length;
switch (G__31377) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__31379 = arguments.length;
switch (G__31379) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__31381 = arguments.length;
switch (G__31381) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__30908__auto___33237 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30908__auto___33237,tc,fc){
return (function (){
var f__30909__auto__ = (function (){var switch__30666__auto__ = ((function (c__30908__auto___33237,tc,fc){
return (function (state_31407){
var state_val_31408 = (state_31407[(1)]);
if((state_val_31408 === (7))){
var inst_31403 = (state_31407[(2)]);
var state_31407__$1 = state_31407;
var statearr_31409_33238 = state_31407__$1;
(statearr_31409_33238[(2)] = inst_31403);

(statearr_31409_33238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31408 === (1))){
var state_31407__$1 = state_31407;
var statearr_31410_33239 = state_31407__$1;
(statearr_31410_33239[(2)] = null);

(statearr_31410_33239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31408 === (4))){
var inst_31384 = (state_31407[(7)]);
var inst_31384__$1 = (state_31407[(2)]);
var inst_31385 = (inst_31384__$1 == null);
var state_31407__$1 = (function (){var statearr_31411 = state_31407;
(statearr_31411[(7)] = inst_31384__$1);

return statearr_31411;
})();
if(cljs.core.truth_(inst_31385)){
var statearr_31412_33240 = state_31407__$1;
(statearr_31412_33240[(1)] = (5));

} else {
var statearr_31413_33241 = state_31407__$1;
(statearr_31413_33241[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31408 === (13))){
var state_31407__$1 = state_31407;
var statearr_31414_33242 = state_31407__$1;
(statearr_31414_33242[(2)] = null);

(statearr_31414_33242[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31408 === (6))){
var inst_31384 = (state_31407[(7)]);
var inst_31390 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31384) : p.call(null,inst_31384));
var state_31407__$1 = state_31407;
if(cljs.core.truth_(inst_31390)){
var statearr_31415_33249 = state_31407__$1;
(statearr_31415_33249[(1)] = (9));

} else {
var statearr_31416_33250 = state_31407__$1;
(statearr_31416_33250[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31408 === (3))){
var inst_31405 = (state_31407[(2)]);
var state_31407__$1 = state_31407;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31407__$1,inst_31405);
} else {
if((state_val_31408 === (12))){
var state_31407__$1 = state_31407;
var statearr_31417_33251 = state_31407__$1;
(statearr_31417_33251[(2)] = null);

(statearr_31417_33251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31408 === (2))){
var state_31407__$1 = state_31407;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31407__$1,(4),ch);
} else {
if((state_val_31408 === (11))){
var inst_31384 = (state_31407[(7)]);
var inst_31394 = (state_31407[(2)]);
var state_31407__$1 = state_31407;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31407__$1,(8),inst_31394,inst_31384);
} else {
if((state_val_31408 === (9))){
var state_31407__$1 = state_31407;
var statearr_31418_33252 = state_31407__$1;
(statearr_31418_33252[(2)] = tc);

(statearr_31418_33252[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31408 === (5))){
var inst_31387 = cljs.core.async.close_BANG_(tc);
var inst_31388 = cljs.core.async.close_BANG_(fc);
var state_31407__$1 = (function (){var statearr_31419 = state_31407;
(statearr_31419[(8)] = inst_31387);

return statearr_31419;
})();
var statearr_31420_33253 = state_31407__$1;
(statearr_31420_33253[(2)] = inst_31388);

(statearr_31420_33253[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31408 === (14))){
var inst_31401 = (state_31407[(2)]);
var state_31407__$1 = state_31407;
var statearr_31424_33254 = state_31407__$1;
(statearr_31424_33254[(2)] = inst_31401);

(statearr_31424_33254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31408 === (10))){
var state_31407__$1 = state_31407;
var statearr_31430_33255 = state_31407__$1;
(statearr_31430_33255[(2)] = fc);

(statearr_31430_33255[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31408 === (8))){
var inst_31396 = (state_31407[(2)]);
var state_31407__$1 = state_31407;
if(cljs.core.truth_(inst_31396)){
var statearr_31431_33256 = state_31407__$1;
(statearr_31431_33256[(1)] = (12));

} else {
var statearr_31432_33257 = state_31407__$1;
(statearr_31432_33257[(1)] = (13));

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
});})(c__30908__auto___33237,tc,fc))
;
return ((function (switch__30666__auto__,c__30908__auto___33237,tc,fc){
return (function() {
var cljs$core$async$state_machine__30667__auto__ = null;
var cljs$core$async$state_machine__30667__auto____0 = (function (){
var statearr_31433 = [null,null,null,null,null,null,null,null,null];
(statearr_31433[(0)] = cljs$core$async$state_machine__30667__auto__);

(statearr_31433[(1)] = (1));

return statearr_31433;
});
var cljs$core$async$state_machine__30667__auto____1 = (function (state_31407){
while(true){
var ret_value__30668__auto__ = (function (){try{while(true){
var result__30669__auto__ = switch__30666__auto__(state_31407);
if(cljs.core.keyword_identical_QMARK_(result__30669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30669__auto__;
}
break;
}
}catch (e31434){if((e31434 instanceof Object)){
var ex__30670__auto__ = e31434;
var statearr_31435_33258 = state_31407;
(statearr_31435_33258[(5)] = ex__30670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31407);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31434;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33259 = state_31407;
state_31407 = G__33259;
continue;
} else {
return ret_value__30668__auto__;
}
break;
}
});
cljs$core$async$state_machine__30667__auto__ = function(state_31407){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30667__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30667__auto____1.call(this,state_31407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30667__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30667__auto____0;
cljs$core$async$state_machine__30667__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30667__auto____1;
return cljs$core$async$state_machine__30667__auto__;
})()
;})(switch__30666__auto__,c__30908__auto___33237,tc,fc))
})();
var state__30910__auto__ = (function (){var statearr_31436 = (f__30909__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30909__auto__.cljs$core$IFn$_invoke$arity$0() : f__30909__auto__.call(null));
(statearr_31436[(6)] = c__30908__auto___33237);

return statearr_31436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30910__auto__);
});})(c__30908__auto___33237,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30908__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30908__auto__){
return (function (){
var f__30909__auto__ = (function (){var switch__30666__auto__ = ((function (c__30908__auto__){
return (function (state_31457){
var state_val_31458 = (state_31457[(1)]);
if((state_val_31458 === (7))){
var inst_31453 = (state_31457[(2)]);
var state_31457__$1 = state_31457;
var statearr_31459_33266 = state_31457__$1;
(statearr_31459_33266[(2)] = inst_31453);

(statearr_31459_33266[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31458 === (1))){
var inst_31437 = init;
var state_31457__$1 = (function (){var statearr_31460 = state_31457;
(statearr_31460[(7)] = inst_31437);

return statearr_31460;
})();
var statearr_31461_33267 = state_31457__$1;
(statearr_31461_33267[(2)] = null);

(statearr_31461_33267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31458 === (4))){
var inst_31440 = (state_31457[(8)]);
var inst_31440__$1 = (state_31457[(2)]);
var inst_31441 = (inst_31440__$1 == null);
var state_31457__$1 = (function (){var statearr_31462 = state_31457;
(statearr_31462[(8)] = inst_31440__$1);

return statearr_31462;
})();
if(cljs.core.truth_(inst_31441)){
var statearr_31464_33268 = state_31457__$1;
(statearr_31464_33268[(1)] = (5));

} else {
var statearr_31465_33271 = state_31457__$1;
(statearr_31465_33271[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31458 === (6))){
var inst_31444 = (state_31457[(9)]);
var inst_31437 = (state_31457[(7)]);
var inst_31440 = (state_31457[(8)]);
var inst_31444__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31437,inst_31440) : f.call(null,inst_31437,inst_31440));
var inst_31445 = cljs.core.reduced_QMARK_(inst_31444__$1);
var state_31457__$1 = (function (){var statearr_31467 = state_31457;
(statearr_31467[(9)] = inst_31444__$1);

return statearr_31467;
})();
if(inst_31445){
var statearr_31468_33273 = state_31457__$1;
(statearr_31468_33273[(1)] = (8));

} else {
var statearr_31469_33275 = state_31457__$1;
(statearr_31469_33275[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31458 === (3))){
var inst_31455 = (state_31457[(2)]);
var state_31457__$1 = state_31457;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31457__$1,inst_31455);
} else {
if((state_val_31458 === (2))){
var state_31457__$1 = state_31457;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31457__$1,(4),ch);
} else {
if((state_val_31458 === (9))){
var inst_31444 = (state_31457[(9)]);
var inst_31437 = inst_31444;
var state_31457__$1 = (function (){var statearr_31472 = state_31457;
(statearr_31472[(7)] = inst_31437);

return statearr_31472;
})();
var statearr_31473_33276 = state_31457__$1;
(statearr_31473_33276[(2)] = null);

(statearr_31473_33276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31458 === (5))){
var inst_31437 = (state_31457[(7)]);
var state_31457__$1 = state_31457;
var statearr_31474_33277 = state_31457__$1;
(statearr_31474_33277[(2)] = inst_31437);

(statearr_31474_33277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31458 === (10))){
var inst_31451 = (state_31457[(2)]);
var state_31457__$1 = state_31457;
var statearr_31475_33280 = state_31457__$1;
(statearr_31475_33280[(2)] = inst_31451);

(statearr_31475_33280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31458 === (8))){
var inst_31444 = (state_31457[(9)]);
var inst_31447 = cljs.core.deref(inst_31444);
var state_31457__$1 = state_31457;
var statearr_31477_33281 = state_31457__$1;
(statearr_31477_33281[(2)] = inst_31447);

(statearr_31477_33281[(1)] = (10));


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
});})(c__30908__auto__))
;
return ((function (switch__30666__auto__,c__30908__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__30667__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30667__auto____0 = (function (){
var statearr_31482 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31482[(0)] = cljs$core$async$reduce_$_state_machine__30667__auto__);

(statearr_31482[(1)] = (1));

return statearr_31482;
});
var cljs$core$async$reduce_$_state_machine__30667__auto____1 = (function (state_31457){
while(true){
var ret_value__30668__auto__ = (function (){try{while(true){
var result__30669__auto__ = switch__30666__auto__(state_31457);
if(cljs.core.keyword_identical_QMARK_(result__30669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30669__auto__;
}
break;
}
}catch (e31483){if((e31483 instanceof Object)){
var ex__30670__auto__ = e31483;
var statearr_31488_33282 = state_31457;
(statearr_31488_33282[(5)] = ex__30670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31483;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33283 = state_31457;
state_31457 = G__33283;
continue;
} else {
return ret_value__30668__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30667__auto__ = function(state_31457){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30667__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30667__auto____1.call(this,state_31457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30667__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30667__auto____0;
cljs$core$async$reduce_$_state_machine__30667__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30667__auto____1;
return cljs$core$async$reduce_$_state_machine__30667__auto__;
})()
;})(switch__30666__auto__,c__30908__auto__))
})();
var state__30910__auto__ = (function (){var statearr_31491 = (f__30909__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30909__auto__.cljs$core$IFn$_invoke$arity$0() : f__30909__auto__.call(null));
(statearr_31491[(6)] = c__30908__auto__);

return statearr_31491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30910__auto__);
});})(c__30908__auto__))
);

return c__30908__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30908__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30908__auto__,f__$1){
return (function (){
var f__30909__auto__ = (function (){var switch__30666__auto__ = ((function (c__30908__auto__,f__$1){
return (function (state_31502){
var state_val_31503 = (state_31502[(1)]);
if((state_val_31503 === (1))){
var inst_31492 = cljs.core.async.reduce(f__$1,init,ch);
var state_31502__$1 = state_31502;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31502__$1,(2),inst_31492);
} else {
if((state_val_31503 === (2))){
var inst_31494 = (state_31502[(2)]);
var inst_31495 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31494) : f__$1.call(null,inst_31494));
var state_31502__$1 = state_31502;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31502__$1,inst_31495);
} else {
return null;
}
}
});})(c__30908__auto__,f__$1))
;
return ((function (switch__30666__auto__,c__30908__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__30667__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30667__auto____0 = (function (){
var statearr_31504 = [null,null,null,null,null,null,null];
(statearr_31504[(0)] = cljs$core$async$transduce_$_state_machine__30667__auto__);

(statearr_31504[(1)] = (1));

return statearr_31504;
});
var cljs$core$async$transduce_$_state_machine__30667__auto____1 = (function (state_31502){
while(true){
var ret_value__30668__auto__ = (function (){try{while(true){
var result__30669__auto__ = switch__30666__auto__(state_31502);
if(cljs.core.keyword_identical_QMARK_(result__30669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30669__auto__;
}
break;
}
}catch (e31505){if((e31505 instanceof Object)){
var ex__30670__auto__ = e31505;
var statearr_31506_33286 = state_31502;
(statearr_31506_33286[(5)] = ex__30670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31502);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31505;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33287 = state_31502;
state_31502 = G__33287;
continue;
} else {
return ret_value__30668__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30667__auto__ = function(state_31502){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30667__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30667__auto____1.call(this,state_31502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30667__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30667__auto____0;
cljs$core$async$transduce_$_state_machine__30667__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30667__auto____1;
return cljs$core$async$transduce_$_state_machine__30667__auto__;
})()
;})(switch__30666__auto__,c__30908__auto__,f__$1))
})();
var state__30910__auto__ = (function (){var statearr_31507 = (f__30909__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30909__auto__.cljs$core$IFn$_invoke$arity$0() : f__30909__auto__.call(null));
(statearr_31507[(6)] = c__30908__auto__);

return statearr_31507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30910__auto__);
});})(c__30908__auto__,f__$1))
);

return c__30908__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__31509 = arguments.length;
switch (G__31509) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30908__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30908__auto__){
return (function (){
var f__30909__auto__ = (function (){var switch__30666__auto__ = ((function (c__30908__auto__){
return (function (state_31535){
var state_val_31536 = (state_31535[(1)]);
if((state_val_31536 === (7))){
var inst_31517 = (state_31535[(2)]);
var state_31535__$1 = state_31535;
var statearr_31538_33290 = state_31535__$1;
(statearr_31538_33290[(2)] = inst_31517);

(statearr_31538_33290[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31536 === (1))){
var inst_31511 = cljs.core.seq(coll);
var inst_31512 = inst_31511;
var state_31535__$1 = (function (){var statearr_31539 = state_31535;
(statearr_31539[(7)] = inst_31512);

return statearr_31539;
})();
var statearr_31540_33295 = state_31535__$1;
(statearr_31540_33295[(2)] = null);

(statearr_31540_33295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31536 === (4))){
var inst_31512 = (state_31535[(7)]);
var inst_31515 = cljs.core.first(inst_31512);
var state_31535__$1 = state_31535;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31535__$1,(7),ch,inst_31515);
} else {
if((state_val_31536 === (13))){
var inst_31529 = (state_31535[(2)]);
var state_31535__$1 = state_31535;
var statearr_31541_33296 = state_31535__$1;
(statearr_31541_33296[(2)] = inst_31529);

(statearr_31541_33296[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31536 === (6))){
var inst_31520 = (state_31535[(2)]);
var state_31535__$1 = state_31535;
if(cljs.core.truth_(inst_31520)){
var statearr_31542_33297 = state_31535__$1;
(statearr_31542_33297[(1)] = (8));

} else {
var statearr_31543_33298 = state_31535__$1;
(statearr_31543_33298[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31536 === (3))){
var inst_31533 = (state_31535[(2)]);
var state_31535__$1 = state_31535;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31535__$1,inst_31533);
} else {
if((state_val_31536 === (12))){
var state_31535__$1 = state_31535;
var statearr_31544_33299 = state_31535__$1;
(statearr_31544_33299[(2)] = null);

(statearr_31544_33299[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31536 === (2))){
var inst_31512 = (state_31535[(7)]);
var state_31535__$1 = state_31535;
if(cljs.core.truth_(inst_31512)){
var statearr_31546_33300 = state_31535__$1;
(statearr_31546_33300[(1)] = (4));

} else {
var statearr_31547_33301 = state_31535__$1;
(statearr_31547_33301[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31536 === (11))){
var inst_31526 = cljs.core.async.close_BANG_(ch);
var state_31535__$1 = state_31535;
var statearr_31548_33302 = state_31535__$1;
(statearr_31548_33302[(2)] = inst_31526);

(statearr_31548_33302[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31536 === (9))){
var state_31535__$1 = state_31535;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31549_33303 = state_31535__$1;
(statearr_31549_33303[(1)] = (11));

} else {
var statearr_31550_33304 = state_31535__$1;
(statearr_31550_33304[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31536 === (5))){
var inst_31512 = (state_31535[(7)]);
var state_31535__$1 = state_31535;
var statearr_31551_33305 = state_31535__$1;
(statearr_31551_33305[(2)] = inst_31512);

(statearr_31551_33305[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31536 === (10))){
var inst_31531 = (state_31535[(2)]);
var state_31535__$1 = state_31535;
var statearr_31552_33306 = state_31535__$1;
(statearr_31552_33306[(2)] = inst_31531);

(statearr_31552_33306[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31536 === (8))){
var inst_31512 = (state_31535[(7)]);
var inst_31522 = cljs.core.next(inst_31512);
var inst_31512__$1 = inst_31522;
var state_31535__$1 = (function (){var statearr_31555 = state_31535;
(statearr_31555[(7)] = inst_31512__$1);

return statearr_31555;
})();
var statearr_31556_33307 = state_31535__$1;
(statearr_31556_33307[(2)] = null);

(statearr_31556_33307[(1)] = (2));


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
});})(c__30908__auto__))
;
return ((function (switch__30666__auto__,c__30908__auto__){
return (function() {
var cljs$core$async$state_machine__30667__auto__ = null;
var cljs$core$async$state_machine__30667__auto____0 = (function (){
var statearr_31561 = [null,null,null,null,null,null,null,null];
(statearr_31561[(0)] = cljs$core$async$state_machine__30667__auto__);

(statearr_31561[(1)] = (1));

return statearr_31561;
});
var cljs$core$async$state_machine__30667__auto____1 = (function (state_31535){
while(true){
var ret_value__30668__auto__ = (function (){try{while(true){
var result__30669__auto__ = switch__30666__auto__(state_31535);
if(cljs.core.keyword_identical_QMARK_(result__30669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30669__auto__;
}
break;
}
}catch (e31563){if((e31563 instanceof Object)){
var ex__30670__auto__ = e31563;
var statearr_31564_33308 = state_31535;
(statearr_31564_33308[(5)] = ex__30670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31563;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33313 = state_31535;
state_31535 = G__33313;
continue;
} else {
return ret_value__30668__auto__;
}
break;
}
});
cljs$core$async$state_machine__30667__auto__ = function(state_31535){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30667__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30667__auto____1.call(this,state_31535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30667__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30667__auto____0;
cljs$core$async$state_machine__30667__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30667__auto____1;
return cljs$core$async$state_machine__30667__auto__;
})()
;})(switch__30666__auto__,c__30908__auto__))
})();
var state__30910__auto__ = (function (){var statearr_31576 = (f__30909__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30909__auto__.cljs$core$IFn$_invoke$arity$0() : f__30909__auto__.call(null));
(statearr_31576[(6)] = c__30908__auto__);

return statearr_31576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30910__auto__);
});})(c__30908__auto__))
);

return c__30908__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4434__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4431__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31582 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31582 = (function (ch,cs,meta31583){
this.ch = ch;
this.cs = cs;
this.meta31583 = meta31583;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31582.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31584,meta31583__$1){
var self__ = this;
var _31584__$1 = this;
return (new cljs.core.async.t_cljs$core$async31582(self__.ch,self__.cs,meta31583__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31582.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31584){
var self__ = this;
var _31584__$1 = this;
return self__.meta31583;
});})(cs))
;

cljs.core.async.t_cljs$core$async31582.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31582.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31582.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31582.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31582.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31582.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31582.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31583","meta31583",1517025545,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31582.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31582.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31582";

cljs.core.async.t_cljs$core$async31582.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async31582");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31582.
 */
cljs.core.async.__GT_t_cljs$core$async31582 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31582(ch__$1,cs__$1,meta31583){
return (new cljs.core.async.t_cljs$core$async31582(ch__$1,cs__$1,meta31583));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31582(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__30908__auto___33342 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30908__auto___33342,cs,m,dchan,dctr,done){
return (function (){
var f__30909__auto__ = (function (){var switch__30666__auto__ = ((function (c__30908__auto___33342,cs,m,dchan,dctr,done){
return (function (state_31730){
var state_val_31731 = (state_31730[(1)]);
if((state_val_31731 === (7))){
var inst_31726 = (state_31730[(2)]);
var state_31730__$1 = state_31730;
var statearr_31732_33343 = state_31730__$1;
(statearr_31732_33343[(2)] = inst_31726);

(statearr_31732_33343[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (20))){
var inst_31626 = (state_31730[(7)]);
var inst_31638 = cljs.core.first(inst_31626);
var inst_31639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31638,(0),null);
var inst_31640 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31638,(1),null);
var state_31730__$1 = (function (){var statearr_31733 = state_31730;
(statearr_31733[(8)] = inst_31639);

return statearr_31733;
})();
if(cljs.core.truth_(inst_31640)){
var statearr_31734_33348 = state_31730__$1;
(statearr_31734_33348[(1)] = (22));

} else {
var statearr_31735_33349 = state_31730__$1;
(statearr_31735_33349[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (27))){
var inst_31668 = (state_31730[(9)]);
var inst_31590 = (state_31730[(10)]);
var inst_31670 = (state_31730[(11)]);
var inst_31675 = (state_31730[(12)]);
var inst_31675__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31668,inst_31670);
var inst_31676 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31675__$1,inst_31590,done);
var state_31730__$1 = (function (){var statearr_31736 = state_31730;
(statearr_31736[(12)] = inst_31675__$1);

return statearr_31736;
})();
if(cljs.core.truth_(inst_31676)){
var statearr_31739_33350 = state_31730__$1;
(statearr_31739_33350[(1)] = (30));

} else {
var statearr_31742_33351 = state_31730__$1;
(statearr_31742_33351[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (1))){
var state_31730__$1 = state_31730;
var statearr_31743_33352 = state_31730__$1;
(statearr_31743_33352[(2)] = null);

(statearr_31743_33352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (24))){
var inst_31626 = (state_31730[(7)]);
var inst_31645 = (state_31730[(2)]);
var inst_31646 = cljs.core.next(inst_31626);
var inst_31599 = inst_31646;
var inst_31600 = null;
var inst_31601 = (0);
var inst_31602 = (0);
var state_31730__$1 = (function (){var statearr_31746 = state_31730;
(statearr_31746[(13)] = inst_31645);

(statearr_31746[(14)] = inst_31599);

(statearr_31746[(15)] = inst_31601);

(statearr_31746[(16)] = inst_31602);

(statearr_31746[(17)] = inst_31600);

return statearr_31746;
})();
var statearr_31747_33357 = state_31730__$1;
(statearr_31747_33357[(2)] = null);

(statearr_31747_33357[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (39))){
var state_31730__$1 = state_31730;
var statearr_31751_33358 = state_31730__$1;
(statearr_31751_33358[(2)] = null);

(statearr_31751_33358[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (4))){
var inst_31590 = (state_31730[(10)]);
var inst_31590__$1 = (state_31730[(2)]);
var inst_31591 = (inst_31590__$1 == null);
var state_31730__$1 = (function (){var statearr_31752 = state_31730;
(statearr_31752[(10)] = inst_31590__$1);

return statearr_31752;
})();
if(cljs.core.truth_(inst_31591)){
var statearr_31753_33359 = state_31730__$1;
(statearr_31753_33359[(1)] = (5));

} else {
var statearr_31754_33360 = state_31730__$1;
(statearr_31754_33360[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (15))){
var inst_31599 = (state_31730[(14)]);
var inst_31601 = (state_31730[(15)]);
var inst_31602 = (state_31730[(16)]);
var inst_31600 = (state_31730[(17)]);
var inst_31622 = (state_31730[(2)]);
var inst_31623 = (inst_31602 + (1));
var tmp31748 = inst_31599;
var tmp31749 = inst_31601;
var tmp31750 = inst_31600;
var inst_31599__$1 = tmp31748;
var inst_31600__$1 = tmp31750;
var inst_31601__$1 = tmp31749;
var inst_31602__$1 = inst_31623;
var state_31730__$1 = (function (){var statearr_31755 = state_31730;
(statearr_31755[(14)] = inst_31599__$1);

(statearr_31755[(18)] = inst_31622);

(statearr_31755[(15)] = inst_31601__$1);

(statearr_31755[(16)] = inst_31602__$1);

(statearr_31755[(17)] = inst_31600__$1);

return statearr_31755;
})();
var statearr_31756_33361 = state_31730__$1;
(statearr_31756_33361[(2)] = null);

(statearr_31756_33361[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (21))){
var inst_31649 = (state_31730[(2)]);
var state_31730__$1 = state_31730;
var statearr_31760_33363 = state_31730__$1;
(statearr_31760_33363[(2)] = inst_31649);

(statearr_31760_33363[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (31))){
var inst_31675 = (state_31730[(12)]);
var inst_31679 = done(null);
var inst_31680 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31675);
var state_31730__$1 = (function (){var statearr_31761 = state_31730;
(statearr_31761[(19)] = inst_31679);

return statearr_31761;
})();
var statearr_31762_33364 = state_31730__$1;
(statearr_31762_33364[(2)] = inst_31680);

(statearr_31762_33364[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (32))){
var inst_31668 = (state_31730[(9)]);
var inst_31669 = (state_31730[(20)]);
var inst_31667 = (state_31730[(21)]);
var inst_31670 = (state_31730[(11)]);
var inst_31682 = (state_31730[(2)]);
var inst_31683 = (inst_31670 + (1));
var tmp31757 = inst_31668;
var tmp31758 = inst_31669;
var tmp31759 = inst_31667;
var inst_31667__$1 = tmp31759;
var inst_31668__$1 = tmp31757;
var inst_31669__$1 = tmp31758;
var inst_31670__$1 = inst_31683;
var state_31730__$1 = (function (){var statearr_31763 = state_31730;
(statearr_31763[(9)] = inst_31668__$1);

(statearr_31763[(22)] = inst_31682);

(statearr_31763[(20)] = inst_31669__$1);

(statearr_31763[(21)] = inst_31667__$1);

(statearr_31763[(11)] = inst_31670__$1);

return statearr_31763;
})();
var statearr_31764_33366 = state_31730__$1;
(statearr_31764_33366[(2)] = null);

(statearr_31764_33366[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (40))){
var inst_31695 = (state_31730[(23)]);
var inst_31699 = done(null);
var inst_31700 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31695);
var state_31730__$1 = (function (){var statearr_31765 = state_31730;
(statearr_31765[(24)] = inst_31699);

return statearr_31765;
})();
var statearr_31766_33367 = state_31730__$1;
(statearr_31766_33367[(2)] = inst_31700);

(statearr_31766_33367[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (33))){
var inst_31686 = (state_31730[(25)]);
var inst_31688 = cljs.core.chunked_seq_QMARK_(inst_31686);
var state_31730__$1 = state_31730;
if(inst_31688){
var statearr_31767_33368 = state_31730__$1;
(statearr_31767_33368[(1)] = (36));

} else {
var statearr_31768_33369 = state_31730__$1;
(statearr_31768_33369[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (13))){
var inst_31616 = (state_31730[(26)]);
var inst_31619 = cljs.core.async.close_BANG_(inst_31616);
var state_31730__$1 = state_31730;
var statearr_31769_33370 = state_31730__$1;
(statearr_31769_33370[(2)] = inst_31619);

(statearr_31769_33370[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (22))){
var inst_31639 = (state_31730[(8)]);
var inst_31642 = cljs.core.async.close_BANG_(inst_31639);
var state_31730__$1 = state_31730;
var statearr_31770_33371 = state_31730__$1;
(statearr_31770_33371[(2)] = inst_31642);

(statearr_31770_33371[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (36))){
var inst_31686 = (state_31730[(25)]);
var inst_31690 = cljs.core.chunk_first(inst_31686);
var inst_31691 = cljs.core.chunk_rest(inst_31686);
var inst_31692 = cljs.core.count(inst_31690);
var inst_31667 = inst_31691;
var inst_31668 = inst_31690;
var inst_31669 = inst_31692;
var inst_31670 = (0);
var state_31730__$1 = (function (){var statearr_31774 = state_31730;
(statearr_31774[(9)] = inst_31668);

(statearr_31774[(20)] = inst_31669);

(statearr_31774[(21)] = inst_31667);

(statearr_31774[(11)] = inst_31670);

return statearr_31774;
})();
var statearr_31775_33376 = state_31730__$1;
(statearr_31775_33376[(2)] = null);

(statearr_31775_33376[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (41))){
var inst_31686 = (state_31730[(25)]);
var inst_31702 = (state_31730[(2)]);
var inst_31703 = cljs.core.next(inst_31686);
var inst_31667 = inst_31703;
var inst_31668 = null;
var inst_31669 = (0);
var inst_31670 = (0);
var state_31730__$1 = (function (){var statearr_31779 = state_31730;
(statearr_31779[(9)] = inst_31668);

(statearr_31779[(27)] = inst_31702);

(statearr_31779[(20)] = inst_31669);

(statearr_31779[(21)] = inst_31667);

(statearr_31779[(11)] = inst_31670);

return statearr_31779;
})();
var statearr_31780_33377 = state_31730__$1;
(statearr_31780_33377[(2)] = null);

(statearr_31780_33377[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (43))){
var state_31730__$1 = state_31730;
var statearr_31782_33378 = state_31730__$1;
(statearr_31782_33378[(2)] = null);

(statearr_31782_33378[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (29))){
var inst_31711 = (state_31730[(2)]);
var state_31730__$1 = state_31730;
var statearr_31783_33379 = state_31730__$1;
(statearr_31783_33379[(2)] = inst_31711);

(statearr_31783_33379[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (44))){
var inst_31723 = (state_31730[(2)]);
var state_31730__$1 = (function (){var statearr_31784 = state_31730;
(statearr_31784[(28)] = inst_31723);

return statearr_31784;
})();
var statearr_31785_33380 = state_31730__$1;
(statearr_31785_33380[(2)] = null);

(statearr_31785_33380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (6))){
var inst_31659 = (state_31730[(29)]);
var inst_31658 = cljs.core.deref(cs);
var inst_31659__$1 = cljs.core.keys(inst_31658);
var inst_31660 = cljs.core.count(inst_31659__$1);
var inst_31661 = cljs.core.reset_BANG_(dctr,inst_31660);
var inst_31666 = cljs.core.seq(inst_31659__$1);
var inst_31667 = inst_31666;
var inst_31668 = null;
var inst_31669 = (0);
var inst_31670 = (0);
var state_31730__$1 = (function (){var statearr_31786 = state_31730;
(statearr_31786[(9)] = inst_31668);

(statearr_31786[(20)] = inst_31669);

(statearr_31786[(21)] = inst_31667);

(statearr_31786[(29)] = inst_31659__$1);

(statearr_31786[(30)] = inst_31661);

(statearr_31786[(11)] = inst_31670);

return statearr_31786;
})();
var statearr_31787_33381 = state_31730__$1;
(statearr_31787_33381[(2)] = null);

(statearr_31787_33381[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (28))){
var inst_31667 = (state_31730[(21)]);
var inst_31686 = (state_31730[(25)]);
var inst_31686__$1 = cljs.core.seq(inst_31667);
var state_31730__$1 = (function (){var statearr_31788 = state_31730;
(statearr_31788[(25)] = inst_31686__$1);

return statearr_31788;
})();
if(inst_31686__$1){
var statearr_31789_33382 = state_31730__$1;
(statearr_31789_33382[(1)] = (33));

} else {
var statearr_31790_33383 = state_31730__$1;
(statearr_31790_33383[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (25))){
var inst_31669 = (state_31730[(20)]);
var inst_31670 = (state_31730[(11)]);
var inst_31672 = (inst_31670 < inst_31669);
var inst_31673 = inst_31672;
var state_31730__$1 = state_31730;
if(cljs.core.truth_(inst_31673)){
var statearr_31791_33384 = state_31730__$1;
(statearr_31791_33384[(1)] = (27));

} else {
var statearr_31792_33385 = state_31730__$1;
(statearr_31792_33385[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (34))){
var state_31730__$1 = state_31730;
var statearr_31793_33386 = state_31730__$1;
(statearr_31793_33386[(2)] = null);

(statearr_31793_33386[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (17))){
var state_31730__$1 = state_31730;
var statearr_31794_33387 = state_31730__$1;
(statearr_31794_33387[(2)] = null);

(statearr_31794_33387[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (3))){
var inst_31728 = (state_31730[(2)]);
var state_31730__$1 = state_31730;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31730__$1,inst_31728);
} else {
if((state_val_31731 === (12))){
var inst_31654 = (state_31730[(2)]);
var state_31730__$1 = state_31730;
var statearr_31795_33388 = state_31730__$1;
(statearr_31795_33388[(2)] = inst_31654);

(statearr_31795_33388[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (2))){
var state_31730__$1 = state_31730;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31730__$1,(4),ch);
} else {
if((state_val_31731 === (23))){
var state_31730__$1 = state_31730;
var statearr_31796_33389 = state_31730__$1;
(statearr_31796_33389[(2)] = null);

(statearr_31796_33389[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (35))){
var inst_31709 = (state_31730[(2)]);
var state_31730__$1 = state_31730;
var statearr_31797_33390 = state_31730__$1;
(statearr_31797_33390[(2)] = inst_31709);

(statearr_31797_33390[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (19))){
var inst_31626 = (state_31730[(7)]);
var inst_31630 = cljs.core.chunk_first(inst_31626);
var inst_31631 = cljs.core.chunk_rest(inst_31626);
var inst_31632 = cljs.core.count(inst_31630);
var inst_31599 = inst_31631;
var inst_31600 = inst_31630;
var inst_31601 = inst_31632;
var inst_31602 = (0);
var state_31730__$1 = (function (){var statearr_31798 = state_31730;
(statearr_31798[(14)] = inst_31599);

(statearr_31798[(15)] = inst_31601);

(statearr_31798[(16)] = inst_31602);

(statearr_31798[(17)] = inst_31600);

return statearr_31798;
})();
var statearr_31799_33391 = state_31730__$1;
(statearr_31799_33391[(2)] = null);

(statearr_31799_33391[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (11))){
var inst_31599 = (state_31730[(14)]);
var inst_31626 = (state_31730[(7)]);
var inst_31626__$1 = cljs.core.seq(inst_31599);
var state_31730__$1 = (function (){var statearr_31800 = state_31730;
(statearr_31800[(7)] = inst_31626__$1);

return statearr_31800;
})();
if(inst_31626__$1){
var statearr_31801_33392 = state_31730__$1;
(statearr_31801_33392[(1)] = (16));

} else {
var statearr_31802_33393 = state_31730__$1;
(statearr_31802_33393[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (9))){
var inst_31656 = (state_31730[(2)]);
var state_31730__$1 = state_31730;
var statearr_31803_33394 = state_31730__$1;
(statearr_31803_33394[(2)] = inst_31656);

(statearr_31803_33394[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (5))){
var inst_31597 = cljs.core.deref(cs);
var inst_31598 = cljs.core.seq(inst_31597);
var inst_31599 = inst_31598;
var inst_31600 = null;
var inst_31601 = (0);
var inst_31602 = (0);
var state_31730__$1 = (function (){var statearr_31804 = state_31730;
(statearr_31804[(14)] = inst_31599);

(statearr_31804[(15)] = inst_31601);

(statearr_31804[(16)] = inst_31602);

(statearr_31804[(17)] = inst_31600);

return statearr_31804;
})();
var statearr_31805_33395 = state_31730__$1;
(statearr_31805_33395[(2)] = null);

(statearr_31805_33395[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (14))){
var state_31730__$1 = state_31730;
var statearr_31806_33396 = state_31730__$1;
(statearr_31806_33396[(2)] = null);

(statearr_31806_33396[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (45))){
var inst_31717 = (state_31730[(2)]);
var state_31730__$1 = state_31730;
var statearr_31807_33398 = state_31730__$1;
(statearr_31807_33398[(2)] = inst_31717);

(statearr_31807_33398[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (26))){
var inst_31659 = (state_31730[(29)]);
var inst_31713 = (state_31730[(2)]);
var inst_31714 = cljs.core.seq(inst_31659);
var state_31730__$1 = (function (){var statearr_31808 = state_31730;
(statearr_31808[(31)] = inst_31713);

return statearr_31808;
})();
if(inst_31714){
var statearr_31809_33406 = state_31730__$1;
(statearr_31809_33406[(1)] = (42));

} else {
var statearr_31810_33407 = state_31730__$1;
(statearr_31810_33407[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (16))){
var inst_31626 = (state_31730[(7)]);
var inst_31628 = cljs.core.chunked_seq_QMARK_(inst_31626);
var state_31730__$1 = state_31730;
if(inst_31628){
var statearr_31811_33408 = state_31730__$1;
(statearr_31811_33408[(1)] = (19));

} else {
var statearr_31812_33409 = state_31730__$1;
(statearr_31812_33409[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (38))){
var inst_31706 = (state_31730[(2)]);
var state_31730__$1 = state_31730;
var statearr_31813_33410 = state_31730__$1;
(statearr_31813_33410[(2)] = inst_31706);

(statearr_31813_33410[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (30))){
var state_31730__$1 = state_31730;
var statearr_31814_33411 = state_31730__$1;
(statearr_31814_33411[(2)] = null);

(statearr_31814_33411[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (10))){
var inst_31602 = (state_31730[(16)]);
var inst_31600 = (state_31730[(17)]);
var inst_31615 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31600,inst_31602);
var inst_31616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31615,(0),null);
var inst_31617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31615,(1),null);
var state_31730__$1 = (function (){var statearr_31815 = state_31730;
(statearr_31815[(26)] = inst_31616);

return statearr_31815;
})();
if(cljs.core.truth_(inst_31617)){
var statearr_31816_33412 = state_31730__$1;
(statearr_31816_33412[(1)] = (13));

} else {
var statearr_31817_33414 = state_31730__$1;
(statearr_31817_33414[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (18))){
var inst_31652 = (state_31730[(2)]);
var state_31730__$1 = state_31730;
var statearr_31818_33415 = state_31730__$1;
(statearr_31818_33415[(2)] = inst_31652);

(statearr_31818_33415[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (42))){
var state_31730__$1 = state_31730;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31730__$1,(45),dchan);
} else {
if((state_val_31731 === (37))){
var inst_31590 = (state_31730[(10)]);
var inst_31695 = (state_31730[(23)]);
var inst_31686 = (state_31730[(25)]);
var inst_31695__$1 = cljs.core.first(inst_31686);
var inst_31696 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31695__$1,inst_31590,done);
var state_31730__$1 = (function (){var statearr_31819 = state_31730;
(statearr_31819[(23)] = inst_31695__$1);

return statearr_31819;
})();
if(cljs.core.truth_(inst_31696)){
var statearr_31820_33425 = state_31730__$1;
(statearr_31820_33425[(1)] = (39));

} else {
var statearr_31821_33426 = state_31730__$1;
(statearr_31821_33426[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (8))){
var inst_31601 = (state_31730[(15)]);
var inst_31602 = (state_31730[(16)]);
var inst_31604 = (inst_31602 < inst_31601);
var inst_31605 = inst_31604;
var state_31730__$1 = state_31730;
if(cljs.core.truth_(inst_31605)){
var statearr_31822_33427 = state_31730__$1;
(statearr_31822_33427[(1)] = (10));

} else {
var statearr_31823_33429 = state_31730__$1;
(statearr_31823_33429[(1)] = (11));

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
});})(c__30908__auto___33342,cs,m,dchan,dctr,done))
;
return ((function (switch__30666__auto__,c__30908__auto___33342,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__30667__auto__ = null;
var cljs$core$async$mult_$_state_machine__30667__auto____0 = (function (){
var statearr_31825 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31825[(0)] = cljs$core$async$mult_$_state_machine__30667__auto__);

(statearr_31825[(1)] = (1));

return statearr_31825;
});
var cljs$core$async$mult_$_state_machine__30667__auto____1 = (function (state_31730){
while(true){
var ret_value__30668__auto__ = (function (){try{while(true){
var result__30669__auto__ = switch__30666__auto__(state_31730);
if(cljs.core.keyword_identical_QMARK_(result__30669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30669__auto__;
}
break;
}
}catch (e31826){if((e31826 instanceof Object)){
var ex__30670__auto__ = e31826;
var statearr_31827_33433 = state_31730;
(statearr_31827_33433[(5)] = ex__30670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31730);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31826;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33434 = state_31730;
state_31730 = G__33434;
continue;
} else {
return ret_value__30668__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30667__auto__ = function(state_31730){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30667__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30667__auto____1.call(this,state_31730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30667__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30667__auto____0;
cljs$core$async$mult_$_state_machine__30667__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30667__auto____1;
return cljs$core$async$mult_$_state_machine__30667__auto__;
})()
;})(switch__30666__auto__,c__30908__auto___33342,cs,m,dchan,dctr,done))
})();
var state__30910__auto__ = (function (){var statearr_31828 = (f__30909__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30909__auto__.cljs$core$IFn$_invoke$arity$0() : f__30909__auto__.call(null));
(statearr_31828[(6)] = c__30908__auto___33342);

return statearr_31828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30910__auto__);
});})(c__30908__auto___33342,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31830 = arguments.length;
switch (G__31830) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4434__auto__.call(null,m,state_map));
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4431__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4434__auto__.call(null,m,mode));
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4431__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___33444 = arguments.length;
var i__4731__auto___33445 = (0);
while(true){
if((i__4731__auto___33445 < len__4730__auto___33444)){
args__4736__auto__.push((arguments[i__4731__auto___33445]));

var G__33446 = (i__4731__auto___33445 + (1));
i__4731__auto___33445 = G__33446;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31835){
var map__31836 = p__31835;
var map__31836__$1 = (((((!((map__31836 == null))))?(((((map__31836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31836.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31836):map__31836);
var opts = map__31836__$1;
var statearr_31838_33447 = state;
(statearr_31838_33447[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts(((function (map__31836,map__31836__$1,opts){
return (function (val){
var statearr_31839_33448 = state;
(statearr_31839_33448[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__31836,map__31836__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_31840_33450 = state;
(statearr_31840_33450[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31831){
var G__31832 = cljs.core.first(seq31831);
var seq31831__$1 = cljs.core.next(seq31831);
var G__31833 = cljs.core.first(seq31831__$1);
var seq31831__$2 = cljs.core.next(seq31831__$1);
var G__31834 = cljs.core.first(seq31831__$2);
var seq31831__$3 = cljs.core.next(seq31831__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31832,G__31833,G__31834,seq31831__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31847 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31847 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31848){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31848 = meta31848;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31847.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31849,meta31848__$1){
var self__ = this;
var _31849__$1 = this;
return (new cljs.core.async.t_cljs$core$async31847(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31848__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31847.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31849){
var self__ = this;
var _31849__$1 = this;
return self__.meta31848;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31847.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31847.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31847.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31847.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31847.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31847.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31847.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31847.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31847.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31848","meta31848",63543332,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31847.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31847.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31847";

cljs.core.async.t_cljs$core$async31847.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async31847");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31847.
 */
cljs.core.async.__GT_t_cljs$core$async31847 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31847(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31848){
return (new cljs.core.async.t_cljs$core$async31847(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31848));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31847(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30908__auto___33464 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30908__auto___33464,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30909__auto__ = (function (){var switch__30666__auto__ = ((function (c__30908__auto___33464,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31977){
var state_val_31978 = (state_31977[(1)]);
if((state_val_31978 === (7))){
var inst_31879 = (state_31977[(2)]);
var state_31977__$1 = state_31977;
var statearr_31979_33467 = state_31977__$1;
(statearr_31979_33467[(2)] = inst_31879);

(statearr_31979_33467[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31978 === (20))){
var inst_31891 = (state_31977[(7)]);
var state_31977__$1 = state_31977;
var statearr_31980_33468 = state_31977__$1;
(statearr_31980_33468[(2)] = inst_31891);

(statearr_31980_33468[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31978 === (27))){
var state_31977__$1 = state_31977;
var statearr_31981_33469 = state_31977__$1;
(statearr_31981_33469[(2)] = null);

(statearr_31981_33469[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31978 === (1))){
var inst_31863 = (state_31977[(8)]);
var inst_31863__$1 = calc_state();
var inst_31865 = (inst_31863__$1 == null);
var inst_31866 = cljs.core.not(inst_31865);
var state_31977__$1 = (function (){var statearr_31982 = state_31977;
(statearr_31982[(8)] = inst_31863__$1);

return statearr_31982;
})();
if(inst_31866){
var statearr_31983_33470 = state_31977__$1;
(statearr_31983_33470[(1)] = (2));

} else {
var statearr_31984_33471 = state_31977__$1;
(statearr_31984_33471[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31978 === (24))){
var inst_31927 = (state_31977[(9)]);
var inst_31941 = (state_31977[(10)]);
var inst_31918 = (state_31977[(11)]);
var inst_31941__$1 = (inst_31918.cljs$core$IFn$_invoke$arity$1 ? inst_31918.cljs$core$IFn$_invoke$arity$1(inst_31927) : inst_31918.call(null,inst_31927));
var state_31977__$1 = (function (){var statearr_31985 = state_31977;
(statearr_31985[(10)] = inst_31941__$1);

return statearr_31985;
})();
if(cljs.core.truth_(inst_31941__$1)){
var statearr_31986_33473 = state_31977__$1;
(statearr_31986_33473[(1)] = (29));

} else {
var statearr_31987_33474 = state_31977__$1;
(statearr_31987_33474[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31978 === (4))){
var inst_31882 = (state_31977[(2)]);
var state_31977__$1 = state_31977;
if(cljs.core.truth_(inst_31882)){
var statearr_31988_33475 = state_31977__$1;
(statearr_31988_33475[(1)] = (8));

} else {
var statearr_31989_33476 = state_31977__$1;
(statearr_31989_33476[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31978 === (15))){
var inst_31909 = (state_31977[(2)]);
var state_31977__$1 = state_31977;
if(cljs.core.truth_(inst_31909)){
var statearr_31990_33477 = state_31977__$1;
(statearr_31990_33477[(1)] = (19));

} else {
var statearr_31991_33478 = state_31977__$1;
(statearr_31991_33478[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31978 === (21))){
var inst_31914 = (state_31977[(12)]);
var inst_31914__$1 = (state_31977[(2)]);
var inst_31918 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31914__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31919 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31914__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31920 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31914__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31977__$1 = (function (){var statearr_31992 = state_31977;
(statearr_31992[(11)] = inst_31918);

(statearr_31992[(12)] = inst_31914__$1);

(statearr_31992[(13)] = inst_31919);

return statearr_31992;
})();
return cljs.core.async.ioc_alts_BANG_(state_31977__$1,(22),inst_31920);
} else {
if((state_val_31978 === (31))){
var inst_31949 = (state_31977[(2)]);
var state_31977__$1 = state_31977;
if(cljs.core.truth_(inst_31949)){
var statearr_31993_33479 = state_31977__$1;
(statearr_31993_33479[(1)] = (32));

} else {
var statearr_31994_33480 = state_31977__$1;
(statearr_31994_33480[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31978 === (32))){
var inst_31926 = (state_31977[(14)]);
var state_31977__$1 = state_31977;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31977__$1,(35),out,inst_31926);
} else {
if((state_val_31978 === (33))){
var inst_31914 = (state_31977[(12)]);
var inst_31891 = inst_31914;
var state_31977__$1 = (function (){var statearr_31995 = state_31977;
(statearr_31995[(7)] = inst_31891);

return statearr_31995;
})();
var statearr_31996_33481 = state_31977__$1;
(statearr_31996_33481[(2)] = null);

(statearr_31996_33481[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31978 === (13))){
var inst_31891 = (state_31977[(7)]);
var inst_31898 = inst_31891.cljs$lang$protocol_mask$partition0$;
var inst_31899 = (inst_31898 & (64));
var inst_31900 = inst_31891.cljs$core$ISeq$;
var inst_31901 = (cljs.core.PROTOCOL_SENTINEL === inst_31900);
var inst_31902 = ((inst_31899) || (inst_31901));
var state_31977__$1 = state_31977;
if(cljs.core.truth_(inst_31902)){
var statearr_31997_33487 = state_31977__$1;
(statearr_31997_33487[(1)] = (16));

} else {
var statearr_31998_33488 = state_31977__$1;
(statearr_31998_33488[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31978 === (22))){
var inst_31927 = (state_31977[(9)]);
var inst_31926 = (state_31977[(14)]);
var inst_31925 = (state_31977[(2)]);
var inst_31926__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31925,(0),null);
var inst_31927__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31925,(1),null);
var inst_31928 = (inst_31926__$1 == null);
var inst_31929 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31927__$1,change);
var inst_31930 = ((inst_31928) || (inst_31929));
var state_31977__$1 = (function (){var statearr_31999 = state_31977;
(statearr_31999[(9)] = inst_31927__$1);

(statearr_31999[(14)] = inst_31926__$1);

return statearr_31999;
})();
if(cljs.core.truth_(inst_31930)){
var statearr_32000_33496 = state_31977__$1;
(statearr_32000_33496[(1)] = (23));

} else {
var statearr_32001_33497 = state_31977__$1;
(statearr_32001_33497[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31978 === (36))){
var inst_31914 = (state_31977[(12)]);
var inst_31891 = inst_31914;
var state_31977__$1 = (function (){var statearr_32003 = state_31977;
(statearr_32003[(7)] = inst_31891);

return statearr_32003;
})();
var statearr_32004_33498 = state_31977__$1;
(statearr_32004_33498[(2)] = null);

(statearr_32004_33498[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31978 === (29))){
var inst_31941 = (state_31977[(10)]);
var state_31977__$1 = state_31977;
var statearr_32005_33505 = state_31977__$1;
(statearr_32005_33505[(2)] = inst_31941);

(statearr_32005_33505[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31978 === (6))){
var state_31977__$1 = state_31977;
var statearr_32006_33506 = state_31977__$1;
(statearr_32006_33506[(2)] = false);

(statearr_32006_33506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31978 === (28))){
var inst_31937 = (state_31977[(2)]);
var inst_31938 = calc_state();
var inst_31891 = inst_31938;
var state_31977__$1 = (function (){var statearr_32007 = state_31977;
(statearr_32007[(15)] = inst_31937);

(statearr_32007[(7)] = inst_31891);

return statearr_32007;
})();
var statearr_32008_33510 = state_31977__$1;
(statearr_32008_33510[(2)] = null);

(statearr_32008_33510[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31978 === (25))){
var inst_31963 = (state_31977[(2)]);
var state_31977__$1 = state_31977;
var statearr_32009_33511 = state_31977__$1;
(statearr_32009_33511[(2)] = inst_31963);

(statearr_32009_33511[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31978 === (34))){
var inst_31961 = (state_31977[(2)]);
var state_31977__$1 = state_31977;
var statearr_32010_33513 = state_31977__$1;
(statearr_32010_33513[(2)] = inst_31961);

(statearr_32010_33513[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31978 === (17))){
var state_31977__$1 = state_31977;
var statearr_32011_33514 = state_31977__$1;
(statearr_32011_33514[(2)] = false);

(statearr_32011_33514[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31978 === (3))){
var state_31977__$1 = state_31977;
var statearr_32012_33515 = state_31977__$1;
(statearr_32012_33515[(2)] = false);

(statearr_32012_33515[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31978 === (12))){
var inst_31965 = (state_31977[(2)]);
var state_31977__$1 = state_31977;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31977__$1,inst_31965);
} else {
if((state_val_31978 === (2))){
var inst_31863 = (state_31977[(8)]);
var inst_31871 = inst_31863.cljs$lang$protocol_mask$partition0$;
var inst_31872 = (inst_31871 & (64));
var inst_31873 = inst_31863.cljs$core$ISeq$;
var inst_31874 = (cljs.core.PROTOCOL_SENTINEL === inst_31873);
var inst_31875 = ((inst_31872) || (inst_31874));
var state_31977__$1 = state_31977;
if(cljs.core.truth_(inst_31875)){
var statearr_32013_33525 = state_31977__$1;
(statearr_32013_33525[(1)] = (5));

} else {
var statearr_32014_33532 = state_31977__$1;
(statearr_32014_33532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31978 === (23))){
var inst_31926 = (state_31977[(14)]);
var inst_31932 = (inst_31926 == null);
var state_31977__$1 = state_31977;
if(cljs.core.truth_(inst_31932)){
var statearr_32015_33533 = state_31977__$1;
(statearr_32015_33533[(1)] = (26));

} else {
var statearr_32016_33534 = state_31977__$1;
(statearr_32016_33534[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31978 === (35))){
var inst_31952 = (state_31977[(2)]);
var state_31977__$1 = state_31977;
if(cljs.core.truth_(inst_31952)){
var statearr_32017_33535 = state_31977__$1;
(statearr_32017_33535[(1)] = (36));

} else {
var statearr_32018_33536 = state_31977__$1;
(statearr_32018_33536[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31978 === (19))){
var inst_31891 = (state_31977[(7)]);
var inst_31911 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31891);
var state_31977__$1 = state_31977;
var statearr_32019_33537 = state_31977__$1;
(statearr_32019_33537[(2)] = inst_31911);

(statearr_32019_33537[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31978 === (11))){
var inst_31891 = (state_31977[(7)]);
var inst_31895 = (inst_31891 == null);
var inst_31896 = cljs.core.not(inst_31895);
var state_31977__$1 = state_31977;
if(inst_31896){
var statearr_32020_33538 = state_31977__$1;
(statearr_32020_33538[(1)] = (13));

} else {
var statearr_32021_33545 = state_31977__$1;
(statearr_32021_33545[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31978 === (9))){
var inst_31863 = (state_31977[(8)]);
var state_31977__$1 = state_31977;
var statearr_32022_33546 = state_31977__$1;
(statearr_32022_33546[(2)] = inst_31863);

(statearr_32022_33546[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31978 === (5))){
var state_31977__$1 = state_31977;
var statearr_32028_33547 = state_31977__$1;
(statearr_32028_33547[(2)] = true);

(statearr_32028_33547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31978 === (14))){
var state_31977__$1 = state_31977;
var statearr_32029_33548 = state_31977__$1;
(statearr_32029_33548[(2)] = false);

(statearr_32029_33548[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31978 === (26))){
var inst_31927 = (state_31977[(9)]);
var inst_31934 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31927);
var state_31977__$1 = state_31977;
var statearr_32030_33549 = state_31977__$1;
(statearr_32030_33549[(2)] = inst_31934);

(statearr_32030_33549[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31978 === (16))){
var state_31977__$1 = state_31977;
var statearr_32031_33550 = state_31977__$1;
(statearr_32031_33550[(2)] = true);

(statearr_32031_33550[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31978 === (38))){
var inst_31957 = (state_31977[(2)]);
var state_31977__$1 = state_31977;
var statearr_32032_33551 = state_31977__$1;
(statearr_32032_33551[(2)] = inst_31957);

(statearr_32032_33551[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31978 === (30))){
var inst_31927 = (state_31977[(9)]);
var inst_31918 = (state_31977[(11)]);
var inst_31919 = (state_31977[(13)]);
var inst_31944 = cljs.core.empty_QMARK_(inst_31918);
var inst_31945 = (inst_31919.cljs$core$IFn$_invoke$arity$1 ? inst_31919.cljs$core$IFn$_invoke$arity$1(inst_31927) : inst_31919.call(null,inst_31927));
var inst_31946 = cljs.core.not(inst_31945);
var inst_31947 = ((inst_31944) && (inst_31946));
var state_31977__$1 = state_31977;
var statearr_32033_33552 = state_31977__$1;
(statearr_32033_33552[(2)] = inst_31947);

(statearr_32033_33552[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31978 === (10))){
var inst_31863 = (state_31977[(8)]);
var inst_31887 = (state_31977[(2)]);
var inst_31888 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31887,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31889 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31887,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31890 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31887,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31891 = inst_31863;
var state_31977__$1 = (function (){var statearr_32034 = state_31977;
(statearr_32034[(16)] = inst_31889);

(statearr_32034[(17)] = inst_31888);

(statearr_32034[(7)] = inst_31891);

(statearr_32034[(18)] = inst_31890);

return statearr_32034;
})();
var statearr_32035_33559 = state_31977__$1;
(statearr_32035_33559[(2)] = null);

(statearr_32035_33559[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31978 === (18))){
var inst_31906 = (state_31977[(2)]);
var state_31977__$1 = state_31977;
var statearr_32036_33560 = state_31977__$1;
(statearr_32036_33560[(2)] = inst_31906);

(statearr_32036_33560[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31978 === (37))){
var state_31977__$1 = state_31977;
var statearr_32037_33561 = state_31977__$1;
(statearr_32037_33561[(2)] = null);

(statearr_32037_33561[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31978 === (8))){
var inst_31863 = (state_31977[(8)]);
var inst_31884 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31863);
var state_31977__$1 = state_31977;
var statearr_32038_33562 = state_31977__$1;
(statearr_32038_33562[(2)] = inst_31884);

(statearr_32038_33562[(1)] = (10));


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
});})(c__30908__auto___33464,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30666__auto__,c__30908__auto___33464,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__30667__auto__ = null;
var cljs$core$async$mix_$_state_machine__30667__auto____0 = (function (){
var statearr_32039 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32039[(0)] = cljs$core$async$mix_$_state_machine__30667__auto__);

(statearr_32039[(1)] = (1));

return statearr_32039;
});
var cljs$core$async$mix_$_state_machine__30667__auto____1 = (function (state_31977){
while(true){
var ret_value__30668__auto__ = (function (){try{while(true){
var result__30669__auto__ = switch__30666__auto__(state_31977);
if(cljs.core.keyword_identical_QMARK_(result__30669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30669__auto__;
}
break;
}
}catch (e32068){if((e32068 instanceof Object)){
var ex__30670__auto__ = e32068;
var statearr_32069_33563 = state_31977;
(statearr_32069_33563[(5)] = ex__30670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31977);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32068;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33564 = state_31977;
state_31977 = G__33564;
continue;
} else {
return ret_value__30668__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30667__auto__ = function(state_31977){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30667__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30667__auto____1.call(this,state_31977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30667__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30667__auto____0;
cljs$core$async$mix_$_state_machine__30667__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30667__auto____1;
return cljs$core$async$mix_$_state_machine__30667__auto__;
})()
;})(switch__30666__auto__,c__30908__auto___33464,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30910__auto__ = (function (){var statearr_32070 = (f__30909__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30909__auto__.cljs$core$IFn$_invoke$arity$0() : f__30909__auto__.call(null));
(statearr_32070[(6)] = c__30908__auto___33464);

return statearr_32070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30910__auto__);
});})(c__30908__auto___33464,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4434__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4431__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4434__auto__.call(null,p,v,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4431__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32077 = arguments.length;
switch (G__32077) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4434__auto__.call(null,p));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4431__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4434__auto__.call(null,p,v));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4431__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__32081 = arguments.length;
switch (G__32081) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4131__auto__,mults){
return (function (p1__32079_SHARP_){
if(cljs.core.truth_((p1__32079_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32079_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32079_SHARP_.call(null,topic)))){
return p1__32079_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32079_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32082 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32082 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32083){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32083 = meta32083;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32082.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32084,meta32083__$1){
var self__ = this;
var _32084__$1 = this;
return (new cljs.core.async.t_cljs$core$async32082(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32083__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32082.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32084){
var self__ = this;
var _32084__$1 = this;
return self__.meta32083;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32082.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32082.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32082.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32082.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32082.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32082.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32082.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32082.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32083","meta32083",-1684081562,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32082.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32082.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32082";

cljs.core.async.t_cljs$core$async32082.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32082");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32082.
 */
cljs.core.async.__GT_t_cljs$core$async32082 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32082(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32083){
return (new cljs.core.async.t_cljs$core$async32082(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32083));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32082(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30908__auto___33583 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30908__auto___33583,mults,ensure_mult,p){
return (function (){
var f__30909__auto__ = (function (){var switch__30666__auto__ = ((function (c__30908__auto___33583,mults,ensure_mult,p){
return (function (state_32161){
var state_val_32162 = (state_32161[(1)]);
if((state_val_32162 === (7))){
var inst_32157 = (state_32161[(2)]);
var state_32161__$1 = state_32161;
var statearr_32163_33584 = state_32161__$1;
(statearr_32163_33584[(2)] = inst_32157);

(statearr_32163_33584[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32162 === (20))){
var state_32161__$1 = state_32161;
var statearr_32164_33585 = state_32161__$1;
(statearr_32164_33585[(2)] = null);

(statearr_32164_33585[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32162 === (1))){
var state_32161__$1 = state_32161;
var statearr_32165_33589 = state_32161__$1;
(statearr_32165_33589[(2)] = null);

(statearr_32165_33589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32162 === (24))){
var inst_32140 = (state_32161[(7)]);
var inst_32149 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32140);
var state_32161__$1 = state_32161;
var statearr_32166_33596 = state_32161__$1;
(statearr_32166_33596[(2)] = inst_32149);

(statearr_32166_33596[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32162 === (4))){
var inst_32090 = (state_32161[(8)]);
var inst_32090__$1 = (state_32161[(2)]);
var inst_32091 = (inst_32090__$1 == null);
var state_32161__$1 = (function (){var statearr_32172 = state_32161;
(statearr_32172[(8)] = inst_32090__$1);

return statearr_32172;
})();
if(cljs.core.truth_(inst_32091)){
var statearr_32173_33597 = state_32161__$1;
(statearr_32173_33597[(1)] = (5));

} else {
var statearr_32174_33598 = state_32161__$1;
(statearr_32174_33598[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32162 === (15))){
var inst_32134 = (state_32161[(2)]);
var state_32161__$1 = state_32161;
var statearr_32175_33599 = state_32161__$1;
(statearr_32175_33599[(2)] = inst_32134);

(statearr_32175_33599[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32162 === (21))){
var inst_32154 = (state_32161[(2)]);
var state_32161__$1 = (function (){var statearr_32176 = state_32161;
(statearr_32176[(9)] = inst_32154);

return statearr_32176;
})();
var statearr_32177_33602 = state_32161__$1;
(statearr_32177_33602[(2)] = null);

(statearr_32177_33602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32162 === (13))){
var inst_32116 = (state_32161[(10)]);
var inst_32118 = cljs.core.chunked_seq_QMARK_(inst_32116);
var state_32161__$1 = state_32161;
if(inst_32118){
var statearr_32178_33606 = state_32161__$1;
(statearr_32178_33606[(1)] = (16));

} else {
var statearr_32179_33607 = state_32161__$1;
(statearr_32179_33607[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32162 === (22))){
var inst_32146 = (state_32161[(2)]);
var state_32161__$1 = state_32161;
if(cljs.core.truth_(inst_32146)){
var statearr_32182_33608 = state_32161__$1;
(statearr_32182_33608[(1)] = (23));

} else {
var statearr_32184_33609 = state_32161__$1;
(statearr_32184_33609[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32162 === (6))){
var inst_32142 = (state_32161[(11)]);
var inst_32140 = (state_32161[(7)]);
var inst_32090 = (state_32161[(8)]);
var inst_32140__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32090) : topic_fn.call(null,inst_32090));
var inst_32141 = cljs.core.deref(mults);
var inst_32142__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32141,inst_32140__$1);
var state_32161__$1 = (function (){var statearr_32185 = state_32161;
(statearr_32185[(11)] = inst_32142__$1);

(statearr_32185[(7)] = inst_32140__$1);

return statearr_32185;
})();
if(cljs.core.truth_(inst_32142__$1)){
var statearr_32186_33610 = state_32161__$1;
(statearr_32186_33610[(1)] = (19));

} else {
var statearr_32187_33611 = state_32161__$1;
(statearr_32187_33611[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32162 === (25))){
var inst_32151 = (state_32161[(2)]);
var state_32161__$1 = state_32161;
var statearr_32188_33612 = state_32161__$1;
(statearr_32188_33612[(2)] = inst_32151);

(statearr_32188_33612[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32162 === (17))){
var inst_32116 = (state_32161[(10)]);
var inst_32125 = cljs.core.first(inst_32116);
var inst_32126 = cljs.core.async.muxch_STAR_(inst_32125);
var inst_32127 = cljs.core.async.close_BANG_(inst_32126);
var inst_32128 = cljs.core.next(inst_32116);
var inst_32100 = inst_32128;
var inst_32101 = null;
var inst_32102 = (0);
var inst_32103 = (0);
var state_32161__$1 = (function (){var statearr_32189 = state_32161;
(statearr_32189[(12)] = inst_32127);

(statearr_32189[(13)] = inst_32101);

(statearr_32189[(14)] = inst_32100);

(statearr_32189[(15)] = inst_32103);

(statearr_32189[(16)] = inst_32102);

return statearr_32189;
})();
var statearr_32190_33613 = state_32161__$1;
(statearr_32190_33613[(2)] = null);

(statearr_32190_33613[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32162 === (3))){
var inst_32159 = (state_32161[(2)]);
var state_32161__$1 = state_32161;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32161__$1,inst_32159);
} else {
if((state_val_32162 === (12))){
var inst_32136 = (state_32161[(2)]);
var state_32161__$1 = state_32161;
var statearr_32191_33614 = state_32161__$1;
(statearr_32191_33614[(2)] = inst_32136);

(statearr_32191_33614[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32162 === (2))){
var state_32161__$1 = state_32161;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32161__$1,(4),ch);
} else {
if((state_val_32162 === (23))){
var state_32161__$1 = state_32161;
var statearr_32192_33615 = state_32161__$1;
(statearr_32192_33615[(2)] = null);

(statearr_32192_33615[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32162 === (19))){
var inst_32142 = (state_32161[(11)]);
var inst_32090 = (state_32161[(8)]);
var inst_32144 = cljs.core.async.muxch_STAR_(inst_32142);
var state_32161__$1 = state_32161;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32161__$1,(22),inst_32144,inst_32090);
} else {
if((state_val_32162 === (11))){
var inst_32100 = (state_32161[(14)]);
var inst_32116 = (state_32161[(10)]);
var inst_32116__$1 = cljs.core.seq(inst_32100);
var state_32161__$1 = (function (){var statearr_32197 = state_32161;
(statearr_32197[(10)] = inst_32116__$1);

return statearr_32197;
})();
if(inst_32116__$1){
var statearr_32198_33617 = state_32161__$1;
(statearr_32198_33617[(1)] = (13));

} else {
var statearr_32199_33618 = state_32161__$1;
(statearr_32199_33618[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32162 === (9))){
var inst_32138 = (state_32161[(2)]);
var state_32161__$1 = state_32161;
var statearr_32200_33619 = state_32161__$1;
(statearr_32200_33619[(2)] = inst_32138);

(statearr_32200_33619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32162 === (5))){
var inst_32097 = cljs.core.deref(mults);
var inst_32098 = cljs.core.vals(inst_32097);
var inst_32099 = cljs.core.seq(inst_32098);
var inst_32100 = inst_32099;
var inst_32101 = null;
var inst_32102 = (0);
var inst_32103 = (0);
var state_32161__$1 = (function (){var statearr_32205 = state_32161;
(statearr_32205[(13)] = inst_32101);

(statearr_32205[(14)] = inst_32100);

(statearr_32205[(15)] = inst_32103);

(statearr_32205[(16)] = inst_32102);

return statearr_32205;
})();
var statearr_32206_33623 = state_32161__$1;
(statearr_32206_33623[(2)] = null);

(statearr_32206_33623[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32162 === (14))){
var state_32161__$1 = state_32161;
var statearr_32210_33624 = state_32161__$1;
(statearr_32210_33624[(2)] = null);

(statearr_32210_33624[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32162 === (16))){
var inst_32116 = (state_32161[(10)]);
var inst_32120 = cljs.core.chunk_first(inst_32116);
var inst_32121 = cljs.core.chunk_rest(inst_32116);
var inst_32122 = cljs.core.count(inst_32120);
var inst_32100 = inst_32121;
var inst_32101 = inst_32120;
var inst_32102 = inst_32122;
var inst_32103 = (0);
var state_32161__$1 = (function (){var statearr_32211 = state_32161;
(statearr_32211[(13)] = inst_32101);

(statearr_32211[(14)] = inst_32100);

(statearr_32211[(15)] = inst_32103);

(statearr_32211[(16)] = inst_32102);

return statearr_32211;
})();
var statearr_32212_33625 = state_32161__$1;
(statearr_32212_33625[(2)] = null);

(statearr_32212_33625[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32162 === (10))){
var inst_32101 = (state_32161[(13)]);
var inst_32100 = (state_32161[(14)]);
var inst_32103 = (state_32161[(15)]);
var inst_32102 = (state_32161[(16)]);
var inst_32108 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32101,inst_32103);
var inst_32109 = cljs.core.async.muxch_STAR_(inst_32108);
var inst_32110 = cljs.core.async.close_BANG_(inst_32109);
var inst_32113 = (inst_32103 + (1));
var tmp32207 = inst_32101;
var tmp32208 = inst_32100;
var tmp32209 = inst_32102;
var inst_32100__$1 = tmp32208;
var inst_32101__$1 = tmp32207;
var inst_32102__$1 = tmp32209;
var inst_32103__$1 = inst_32113;
var state_32161__$1 = (function (){var statearr_32213 = state_32161;
(statearr_32213[(13)] = inst_32101__$1);

(statearr_32213[(14)] = inst_32100__$1);

(statearr_32213[(15)] = inst_32103__$1);

(statearr_32213[(16)] = inst_32102__$1);

(statearr_32213[(17)] = inst_32110);

return statearr_32213;
})();
var statearr_32214_33626 = state_32161__$1;
(statearr_32214_33626[(2)] = null);

(statearr_32214_33626[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32162 === (18))){
var inst_32131 = (state_32161[(2)]);
var state_32161__$1 = state_32161;
var statearr_32215_33628 = state_32161__$1;
(statearr_32215_33628[(2)] = inst_32131);

(statearr_32215_33628[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32162 === (8))){
var inst_32103 = (state_32161[(15)]);
var inst_32102 = (state_32161[(16)]);
var inst_32105 = (inst_32103 < inst_32102);
var inst_32106 = inst_32105;
var state_32161__$1 = state_32161;
if(cljs.core.truth_(inst_32106)){
var statearr_32216_33629 = state_32161__$1;
(statearr_32216_33629[(1)] = (10));

} else {
var statearr_32217_33630 = state_32161__$1;
(statearr_32217_33630[(1)] = (11));

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
});})(c__30908__auto___33583,mults,ensure_mult,p))
;
return ((function (switch__30666__auto__,c__30908__auto___33583,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__30667__auto__ = null;
var cljs$core$async$state_machine__30667__auto____0 = (function (){
var statearr_32218 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32218[(0)] = cljs$core$async$state_machine__30667__auto__);

(statearr_32218[(1)] = (1));

return statearr_32218;
});
var cljs$core$async$state_machine__30667__auto____1 = (function (state_32161){
while(true){
var ret_value__30668__auto__ = (function (){try{while(true){
var result__30669__auto__ = switch__30666__auto__(state_32161);
if(cljs.core.keyword_identical_QMARK_(result__30669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30669__auto__;
}
break;
}
}catch (e32219){if((e32219 instanceof Object)){
var ex__30670__auto__ = e32219;
var statearr_32220_33632 = state_32161;
(statearr_32220_33632[(5)] = ex__30670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32161);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32219;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33633 = state_32161;
state_32161 = G__33633;
continue;
} else {
return ret_value__30668__auto__;
}
break;
}
});
cljs$core$async$state_machine__30667__auto__ = function(state_32161){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30667__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30667__auto____1.call(this,state_32161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30667__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30667__auto____0;
cljs$core$async$state_machine__30667__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30667__auto____1;
return cljs$core$async$state_machine__30667__auto__;
})()
;})(switch__30666__auto__,c__30908__auto___33583,mults,ensure_mult,p))
})();
var state__30910__auto__ = (function (){var statearr_32221 = (f__30909__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30909__auto__.cljs$core$IFn$_invoke$arity$0() : f__30909__auto__.call(null));
(statearr_32221[(6)] = c__30908__auto___33583);

return statearr_32221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30910__auto__);
});})(c__30908__auto___33583,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__32223 = arguments.length;
switch (G__32223) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__32225 = arguments.length;
switch (G__32225) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__32227 = arguments.length;
switch (G__32227) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__30908__auto___33658 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30908__auto___33658,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30909__auto__ = (function (){var switch__30666__auto__ = ((function (c__30908__auto___33658,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32266){
var state_val_32267 = (state_32266[(1)]);
if((state_val_32267 === (7))){
var state_32266__$1 = state_32266;
var statearr_32268_33671 = state_32266__$1;
(statearr_32268_33671[(2)] = null);

(statearr_32268_33671[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32267 === (1))){
var state_32266__$1 = state_32266;
var statearr_32269_33672 = state_32266__$1;
(statearr_32269_33672[(2)] = null);

(statearr_32269_33672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32267 === (4))){
var inst_32230 = (state_32266[(7)]);
var inst_32232 = (inst_32230 < cnt);
var state_32266__$1 = state_32266;
if(cljs.core.truth_(inst_32232)){
var statearr_32270_33673 = state_32266__$1;
(statearr_32270_33673[(1)] = (6));

} else {
var statearr_32271_33674 = state_32266__$1;
(statearr_32271_33674[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32267 === (15))){
var inst_32262 = (state_32266[(2)]);
var state_32266__$1 = state_32266;
var statearr_32276_33675 = state_32266__$1;
(statearr_32276_33675[(2)] = inst_32262);

(statearr_32276_33675[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32267 === (13))){
var inst_32255 = cljs.core.async.close_BANG_(out);
var state_32266__$1 = state_32266;
var statearr_32277_33676 = state_32266__$1;
(statearr_32277_33676[(2)] = inst_32255);

(statearr_32277_33676[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32267 === (6))){
var state_32266__$1 = state_32266;
var statearr_32283_33677 = state_32266__$1;
(statearr_32283_33677[(2)] = null);

(statearr_32283_33677[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32267 === (3))){
var inst_32264 = (state_32266[(2)]);
var state_32266__$1 = state_32266;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32266__$1,inst_32264);
} else {
if((state_val_32267 === (12))){
var inst_32252 = (state_32266[(8)]);
var inst_32252__$1 = (state_32266[(2)]);
var inst_32253 = cljs.core.some(cljs.core.nil_QMARK_,inst_32252__$1);
var state_32266__$1 = (function (){var statearr_32284 = state_32266;
(statearr_32284[(8)] = inst_32252__$1);

return statearr_32284;
})();
if(cljs.core.truth_(inst_32253)){
var statearr_32285_33678 = state_32266__$1;
(statearr_32285_33678[(1)] = (13));

} else {
var statearr_32286_33679 = state_32266__$1;
(statearr_32286_33679[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32267 === (2))){
var inst_32229 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32230 = (0);
var state_32266__$1 = (function (){var statearr_32291 = state_32266;
(statearr_32291[(9)] = inst_32229);

(statearr_32291[(7)] = inst_32230);

return statearr_32291;
})();
var statearr_32292_33680 = state_32266__$1;
(statearr_32292_33680[(2)] = null);

(statearr_32292_33680[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32267 === (11))){
var inst_32230 = (state_32266[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_32266,(10),Object,null,(9));
var inst_32239 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32230) : chs__$1.call(null,inst_32230));
var inst_32240 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32230) : done.call(null,inst_32230));
var inst_32241 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32239,inst_32240);
var state_32266__$1 = state_32266;
var statearr_32293_33688 = state_32266__$1;
(statearr_32293_33688[(2)] = inst_32241);


cljs.core.async.impl.ioc_helpers.process_exception(state_32266__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32267 === (9))){
var inst_32230 = (state_32266[(7)]);
var inst_32243 = (state_32266[(2)]);
var inst_32244 = (inst_32230 + (1));
var inst_32230__$1 = inst_32244;
var state_32266__$1 = (function (){var statearr_32294 = state_32266;
(statearr_32294[(10)] = inst_32243);

(statearr_32294[(7)] = inst_32230__$1);

return statearr_32294;
})();
var statearr_32295_33693 = state_32266__$1;
(statearr_32295_33693[(2)] = null);

(statearr_32295_33693[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32267 === (5))){
var inst_32250 = (state_32266[(2)]);
var state_32266__$1 = (function (){var statearr_32296 = state_32266;
(statearr_32296[(11)] = inst_32250);

return statearr_32296;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32266__$1,(12),dchan);
} else {
if((state_val_32267 === (14))){
var inst_32252 = (state_32266[(8)]);
var inst_32257 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32252);
var state_32266__$1 = state_32266;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32266__$1,(16),out,inst_32257);
} else {
if((state_val_32267 === (16))){
var inst_32259 = (state_32266[(2)]);
var state_32266__$1 = (function (){var statearr_32297 = state_32266;
(statearr_32297[(12)] = inst_32259);

return statearr_32297;
})();
var statearr_32298_33704 = state_32266__$1;
(statearr_32298_33704[(2)] = null);

(statearr_32298_33704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32267 === (10))){
var inst_32234 = (state_32266[(2)]);
var inst_32235 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32266__$1 = (function (){var statearr_32299 = state_32266;
(statearr_32299[(13)] = inst_32234);

return statearr_32299;
})();
var statearr_32300_33705 = state_32266__$1;
(statearr_32300_33705[(2)] = inst_32235);


cljs.core.async.impl.ioc_helpers.process_exception(state_32266__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32267 === (8))){
var inst_32248 = (state_32266[(2)]);
var state_32266__$1 = state_32266;
var statearr_32301_33706 = state_32266__$1;
(statearr_32301_33706[(2)] = inst_32248);

(statearr_32301_33706[(1)] = (5));


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
});})(c__30908__auto___33658,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30666__auto__,c__30908__auto___33658,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__30667__auto__ = null;
var cljs$core$async$state_machine__30667__auto____0 = (function (){
var statearr_32302 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32302[(0)] = cljs$core$async$state_machine__30667__auto__);

(statearr_32302[(1)] = (1));

return statearr_32302;
});
var cljs$core$async$state_machine__30667__auto____1 = (function (state_32266){
while(true){
var ret_value__30668__auto__ = (function (){try{while(true){
var result__30669__auto__ = switch__30666__auto__(state_32266);
if(cljs.core.keyword_identical_QMARK_(result__30669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30669__auto__;
}
break;
}
}catch (e32303){if((e32303 instanceof Object)){
var ex__30670__auto__ = e32303;
var statearr_32304_33708 = state_32266;
(statearr_32304_33708[(5)] = ex__30670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32266);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32303;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33709 = state_32266;
state_32266 = G__33709;
continue;
} else {
return ret_value__30668__auto__;
}
break;
}
});
cljs$core$async$state_machine__30667__auto__ = function(state_32266){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30667__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30667__auto____1.call(this,state_32266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30667__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30667__auto____0;
cljs$core$async$state_machine__30667__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30667__auto____1;
return cljs$core$async$state_machine__30667__auto__;
})()
;})(switch__30666__auto__,c__30908__auto___33658,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30910__auto__ = (function (){var statearr_32305 = (f__30909__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30909__auto__.cljs$core$IFn$_invoke$arity$0() : f__30909__auto__.call(null));
(statearr_32305[(6)] = c__30908__auto___33658);

return statearr_32305;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30910__auto__);
});})(c__30908__auto___33658,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__32308 = arguments.length;
switch (G__32308) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30908__auto___33711 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30908__auto___33711,out){
return (function (){
var f__30909__auto__ = (function (){var switch__30666__auto__ = ((function (c__30908__auto___33711,out){
return (function (state_32340){
var state_val_32341 = (state_32340[(1)]);
if((state_val_32341 === (7))){
var inst_32320 = (state_32340[(7)]);
var inst_32319 = (state_32340[(8)]);
var inst_32319__$1 = (state_32340[(2)]);
var inst_32320__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32319__$1,(0),null);
var inst_32321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32319__$1,(1),null);
var inst_32322 = (inst_32320__$1 == null);
var state_32340__$1 = (function (){var statearr_32342 = state_32340;
(statearr_32342[(7)] = inst_32320__$1);

(statearr_32342[(8)] = inst_32319__$1);

(statearr_32342[(9)] = inst_32321);

return statearr_32342;
})();
if(cljs.core.truth_(inst_32322)){
var statearr_32343_33712 = state_32340__$1;
(statearr_32343_33712[(1)] = (8));

} else {
var statearr_32344_33713 = state_32340__$1;
(statearr_32344_33713[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32341 === (1))){
var inst_32309 = cljs.core.vec(chs);
var inst_32310 = inst_32309;
var state_32340__$1 = (function (){var statearr_32345 = state_32340;
(statearr_32345[(10)] = inst_32310);

return statearr_32345;
})();
var statearr_32346_33714 = state_32340__$1;
(statearr_32346_33714[(2)] = null);

(statearr_32346_33714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32341 === (4))){
var inst_32310 = (state_32340[(10)]);
var state_32340__$1 = state_32340;
return cljs.core.async.ioc_alts_BANG_(state_32340__$1,(7),inst_32310);
} else {
if((state_val_32341 === (6))){
var inst_32336 = (state_32340[(2)]);
var state_32340__$1 = state_32340;
var statearr_32347_33715 = state_32340__$1;
(statearr_32347_33715[(2)] = inst_32336);

(statearr_32347_33715[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32341 === (3))){
var inst_32338 = (state_32340[(2)]);
var state_32340__$1 = state_32340;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32340__$1,inst_32338);
} else {
if((state_val_32341 === (2))){
var inst_32310 = (state_32340[(10)]);
var inst_32312 = cljs.core.count(inst_32310);
var inst_32313 = (inst_32312 > (0));
var state_32340__$1 = state_32340;
if(cljs.core.truth_(inst_32313)){
var statearr_32349_33716 = state_32340__$1;
(statearr_32349_33716[(1)] = (4));

} else {
var statearr_32350_33717 = state_32340__$1;
(statearr_32350_33717[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32341 === (11))){
var inst_32310 = (state_32340[(10)]);
var inst_32329 = (state_32340[(2)]);
var tmp32348 = inst_32310;
var inst_32310__$1 = tmp32348;
var state_32340__$1 = (function (){var statearr_32351 = state_32340;
(statearr_32351[(10)] = inst_32310__$1);

(statearr_32351[(11)] = inst_32329);

return statearr_32351;
})();
var statearr_32352_33719 = state_32340__$1;
(statearr_32352_33719[(2)] = null);

(statearr_32352_33719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32341 === (9))){
var inst_32320 = (state_32340[(7)]);
var state_32340__$1 = state_32340;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32340__$1,(11),out,inst_32320);
} else {
if((state_val_32341 === (5))){
var inst_32334 = cljs.core.async.close_BANG_(out);
var state_32340__$1 = state_32340;
var statearr_32353_33720 = state_32340__$1;
(statearr_32353_33720[(2)] = inst_32334);

(statearr_32353_33720[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32341 === (10))){
var inst_32332 = (state_32340[(2)]);
var state_32340__$1 = state_32340;
var statearr_32354_33721 = state_32340__$1;
(statearr_32354_33721[(2)] = inst_32332);

(statearr_32354_33721[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32341 === (8))){
var inst_32320 = (state_32340[(7)]);
var inst_32319 = (state_32340[(8)]);
var inst_32310 = (state_32340[(10)]);
var inst_32321 = (state_32340[(9)]);
var inst_32324 = (function (){var cs = inst_32310;
var vec__32315 = inst_32319;
var v = inst_32320;
var c = inst_32321;
return ((function (cs,vec__32315,v,c,inst_32320,inst_32319,inst_32310,inst_32321,state_val_32341,c__30908__auto___33711,out){
return (function (p1__32306_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32306_SHARP_);
});
;})(cs,vec__32315,v,c,inst_32320,inst_32319,inst_32310,inst_32321,state_val_32341,c__30908__auto___33711,out))
})();
var inst_32325 = cljs.core.filterv(inst_32324,inst_32310);
var inst_32310__$1 = inst_32325;
var state_32340__$1 = (function (){var statearr_32358 = state_32340;
(statearr_32358[(10)] = inst_32310__$1);

return statearr_32358;
})();
var statearr_32359_33722 = state_32340__$1;
(statearr_32359_33722[(2)] = null);

(statearr_32359_33722[(1)] = (2));


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
});})(c__30908__auto___33711,out))
;
return ((function (switch__30666__auto__,c__30908__auto___33711,out){
return (function() {
var cljs$core$async$state_machine__30667__auto__ = null;
var cljs$core$async$state_machine__30667__auto____0 = (function (){
var statearr_32366 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32366[(0)] = cljs$core$async$state_machine__30667__auto__);

(statearr_32366[(1)] = (1));

return statearr_32366;
});
var cljs$core$async$state_machine__30667__auto____1 = (function (state_32340){
while(true){
var ret_value__30668__auto__ = (function (){try{while(true){
var result__30669__auto__ = switch__30666__auto__(state_32340);
if(cljs.core.keyword_identical_QMARK_(result__30669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30669__auto__;
}
break;
}
}catch (e32367){if((e32367 instanceof Object)){
var ex__30670__auto__ = e32367;
var statearr_32369_33727 = state_32340;
(statearr_32369_33727[(5)] = ex__30670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32340);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32367;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33734 = state_32340;
state_32340 = G__33734;
continue;
} else {
return ret_value__30668__auto__;
}
break;
}
});
cljs$core$async$state_machine__30667__auto__ = function(state_32340){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30667__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30667__auto____1.call(this,state_32340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30667__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30667__auto____0;
cljs$core$async$state_machine__30667__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30667__auto____1;
return cljs$core$async$state_machine__30667__auto__;
})()
;})(switch__30666__auto__,c__30908__auto___33711,out))
})();
var state__30910__auto__ = (function (){var statearr_32370 = (f__30909__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30909__auto__.cljs$core$IFn$_invoke$arity$0() : f__30909__auto__.call(null));
(statearr_32370[(6)] = c__30908__auto___33711);

return statearr_32370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30910__auto__);
});})(c__30908__auto___33711,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__32372 = arguments.length;
switch (G__32372) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30908__auto___33772 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30908__auto___33772,out){
return (function (){
var f__30909__auto__ = (function (){var switch__30666__auto__ = ((function (c__30908__auto___33772,out){
return (function (state_32396){
var state_val_32397 = (state_32396[(1)]);
if((state_val_32397 === (7))){
var inst_32378 = (state_32396[(7)]);
var inst_32378__$1 = (state_32396[(2)]);
var inst_32379 = (inst_32378__$1 == null);
var inst_32380 = cljs.core.not(inst_32379);
var state_32396__$1 = (function (){var statearr_32398 = state_32396;
(statearr_32398[(7)] = inst_32378__$1);

return statearr_32398;
})();
if(inst_32380){
var statearr_32399_33773 = state_32396__$1;
(statearr_32399_33773[(1)] = (8));

} else {
var statearr_32400_33801 = state_32396__$1;
(statearr_32400_33801[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32397 === (1))){
var inst_32373 = (0);
var state_32396__$1 = (function (){var statearr_32401 = state_32396;
(statearr_32401[(8)] = inst_32373);

return statearr_32401;
})();
var statearr_32402_33810 = state_32396__$1;
(statearr_32402_33810[(2)] = null);

(statearr_32402_33810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32397 === (4))){
var state_32396__$1 = state_32396;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32396__$1,(7),ch);
} else {
if((state_val_32397 === (6))){
var inst_32391 = (state_32396[(2)]);
var state_32396__$1 = state_32396;
var statearr_32403_33824 = state_32396__$1;
(statearr_32403_33824[(2)] = inst_32391);

(statearr_32403_33824[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32397 === (3))){
var inst_32393 = (state_32396[(2)]);
var inst_32394 = cljs.core.async.close_BANG_(out);
var state_32396__$1 = (function (){var statearr_32404 = state_32396;
(statearr_32404[(9)] = inst_32393);

return statearr_32404;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32396__$1,inst_32394);
} else {
if((state_val_32397 === (2))){
var inst_32373 = (state_32396[(8)]);
var inst_32375 = (inst_32373 < n);
var state_32396__$1 = state_32396;
if(cljs.core.truth_(inst_32375)){
var statearr_32405_33825 = state_32396__$1;
(statearr_32405_33825[(1)] = (4));

} else {
var statearr_32406_33826 = state_32396__$1;
(statearr_32406_33826[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32397 === (11))){
var inst_32373 = (state_32396[(8)]);
var inst_32383 = (state_32396[(2)]);
var inst_32384 = (inst_32373 + (1));
var inst_32373__$1 = inst_32384;
var state_32396__$1 = (function (){var statearr_32407 = state_32396;
(statearr_32407[(8)] = inst_32373__$1);

(statearr_32407[(10)] = inst_32383);

return statearr_32407;
})();
var statearr_32408_33827 = state_32396__$1;
(statearr_32408_33827[(2)] = null);

(statearr_32408_33827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32397 === (9))){
var state_32396__$1 = state_32396;
var statearr_32409_33828 = state_32396__$1;
(statearr_32409_33828[(2)] = null);

(statearr_32409_33828[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32397 === (5))){
var state_32396__$1 = state_32396;
var statearr_32410_33829 = state_32396__$1;
(statearr_32410_33829[(2)] = null);

(statearr_32410_33829[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32397 === (10))){
var inst_32388 = (state_32396[(2)]);
var state_32396__$1 = state_32396;
var statearr_32411_33830 = state_32396__$1;
(statearr_32411_33830[(2)] = inst_32388);

(statearr_32411_33830[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32397 === (8))){
var inst_32378 = (state_32396[(7)]);
var state_32396__$1 = state_32396;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32396__$1,(11),out,inst_32378);
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
});})(c__30908__auto___33772,out))
;
return ((function (switch__30666__auto__,c__30908__auto___33772,out){
return (function() {
var cljs$core$async$state_machine__30667__auto__ = null;
var cljs$core$async$state_machine__30667__auto____0 = (function (){
var statearr_32412 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32412[(0)] = cljs$core$async$state_machine__30667__auto__);

(statearr_32412[(1)] = (1));

return statearr_32412;
});
var cljs$core$async$state_machine__30667__auto____1 = (function (state_32396){
while(true){
var ret_value__30668__auto__ = (function (){try{while(true){
var result__30669__auto__ = switch__30666__auto__(state_32396);
if(cljs.core.keyword_identical_QMARK_(result__30669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30669__auto__;
}
break;
}
}catch (e32413){if((e32413 instanceof Object)){
var ex__30670__auto__ = e32413;
var statearr_32414_33832 = state_32396;
(statearr_32414_33832[(5)] = ex__30670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32413;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33833 = state_32396;
state_32396 = G__33833;
continue;
} else {
return ret_value__30668__auto__;
}
break;
}
});
cljs$core$async$state_machine__30667__auto__ = function(state_32396){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30667__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30667__auto____1.call(this,state_32396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30667__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30667__auto____0;
cljs$core$async$state_machine__30667__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30667__auto____1;
return cljs$core$async$state_machine__30667__auto__;
})()
;})(switch__30666__auto__,c__30908__auto___33772,out))
})();
var state__30910__auto__ = (function (){var statearr_32415 = (f__30909__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30909__auto__.cljs$core$IFn$_invoke$arity$0() : f__30909__auto__.call(null));
(statearr_32415[(6)] = c__30908__auto___33772);

return statearr_32415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30910__auto__);
});})(c__30908__auto___33772,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32417 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32417 = (function (f,ch,meta32418){
this.f = f;
this.ch = ch;
this.meta32418 = meta32418;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32417.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32419,meta32418__$1){
var self__ = this;
var _32419__$1 = this;
return (new cljs.core.async.t_cljs$core$async32417(self__.f,self__.ch,meta32418__$1));
});

cljs.core.async.t_cljs$core$async32417.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32419){
var self__ = this;
var _32419__$1 = this;
return self__.meta32418;
});

cljs.core.async.t_cljs$core$async32417.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32417.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async32417.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async32417.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32417.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32420 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32420 = (function (f,ch,meta32418,_,fn1,meta32421){
this.f = f;
this.ch = ch;
this.meta32418 = meta32418;
this._ = _;
this.fn1 = fn1;
this.meta32421 = meta32421;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32420.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32422,meta32421__$1){
var self__ = this;
var _32422__$1 = this;
return (new cljs.core.async.t_cljs$core$async32420(self__.f,self__.ch,self__.meta32418,self__._,self__.fn1,meta32421__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32420.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32422){
var self__ = this;
var _32422__$1 = this;
return self__.meta32421;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32420.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32420.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32420.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32420.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32416_SHARP_){
var G__32423 = (((p1__32416_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32416_SHARP_) : self__.f.call(null,p1__32416_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32423) : f1.call(null,G__32423));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32420.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32418","meta32418",-704777224,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32417","cljs.core.async/t_cljs$core$async32417",258951230,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32421","meta32421",836241054,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32420.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32420.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32420";

cljs.core.async.t_cljs$core$async32420.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32420");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32420.
 */
cljs.core.async.__GT_t_cljs$core$async32420 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32420(f__$1,ch__$1,meta32418__$1,___$2,fn1__$1,meta32421){
return (new cljs.core.async.t_cljs$core$async32420(f__$1,ch__$1,meta32418__$1,___$2,fn1__$1,meta32421));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32420(self__.f,self__.ch,self__.meta32418,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32424 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32424) : self__.f.call(null,G__32424));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32417.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32417.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32417.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32418","meta32418",-704777224,null)], null);
});

cljs.core.async.t_cljs$core$async32417.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32417.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32417";

cljs.core.async.t_cljs$core$async32417.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32417");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32417.
 */
cljs.core.async.__GT_t_cljs$core$async32417 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32417(f__$1,ch__$1,meta32418){
return (new cljs.core.async.t_cljs$core$async32417(f__$1,ch__$1,meta32418));
});

}

return (new cljs.core.async.t_cljs$core$async32417(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32425 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32425 = (function (f,ch,meta32426){
this.f = f;
this.ch = ch;
this.meta32426 = meta32426;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32427,meta32426__$1){
var self__ = this;
var _32427__$1 = this;
return (new cljs.core.async.t_cljs$core$async32425(self__.f,self__.ch,meta32426__$1));
});

cljs.core.async.t_cljs$core$async32425.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32427){
var self__ = this;
var _32427__$1 = this;
return self__.meta32426;
});

cljs.core.async.t_cljs$core$async32425.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32425.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async32425.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32425.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32425.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32425.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async32425.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32426","meta32426",2099204659,null)], null);
});

cljs.core.async.t_cljs$core$async32425.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32425.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32425";

cljs.core.async.t_cljs$core$async32425.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32425");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32425.
 */
cljs.core.async.__GT_t_cljs$core$async32425 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32425(f__$1,ch__$1,meta32426){
return (new cljs.core.async.t_cljs$core$async32425(f__$1,ch__$1,meta32426));
});

}

return (new cljs.core.async.t_cljs$core$async32425(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32429 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32429 = (function (p,ch,meta32430){
this.p = p;
this.ch = ch;
this.meta32430 = meta32430;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32429.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32431,meta32430__$1){
var self__ = this;
var _32431__$1 = this;
return (new cljs.core.async.t_cljs$core$async32429(self__.p,self__.ch,meta32430__$1));
});

cljs.core.async.t_cljs$core$async32429.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32431){
var self__ = this;
var _32431__$1 = this;
return self__.meta32430;
});

cljs.core.async.t_cljs$core$async32429.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32429.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async32429.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async32429.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32429.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32429.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32429.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32429.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32430","meta32430",434683766,null)], null);
});

cljs.core.async.t_cljs$core$async32429.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32429.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32429";

cljs.core.async.t_cljs$core$async32429.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32429");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32429.
 */
cljs.core.async.__GT_t_cljs$core$async32429 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32429(p__$1,ch__$1,meta32430){
return (new cljs.core.async.t_cljs$core$async32429(p__$1,ch__$1,meta32430));
});

}

return (new cljs.core.async.t_cljs$core$async32429(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32433 = arguments.length;
switch (G__32433) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30908__auto___33911 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30908__auto___33911,out){
return (function (){
var f__30909__auto__ = (function (){var switch__30666__auto__ = ((function (c__30908__auto___33911,out){
return (function (state_32454){
var state_val_32455 = (state_32454[(1)]);
if((state_val_32455 === (7))){
var inst_32450 = (state_32454[(2)]);
var state_32454__$1 = state_32454;
var statearr_32456_33912 = state_32454__$1;
(statearr_32456_33912[(2)] = inst_32450);

(statearr_32456_33912[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (1))){
var state_32454__$1 = state_32454;
var statearr_32457_33913 = state_32454__$1;
(statearr_32457_33913[(2)] = null);

(statearr_32457_33913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (4))){
var inst_32436 = (state_32454[(7)]);
var inst_32436__$1 = (state_32454[(2)]);
var inst_32437 = (inst_32436__$1 == null);
var state_32454__$1 = (function (){var statearr_32458 = state_32454;
(statearr_32458[(7)] = inst_32436__$1);

return statearr_32458;
})();
if(cljs.core.truth_(inst_32437)){
var statearr_32459_33919 = state_32454__$1;
(statearr_32459_33919[(1)] = (5));

} else {
var statearr_32460_33920 = state_32454__$1;
(statearr_32460_33920[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (6))){
var inst_32436 = (state_32454[(7)]);
var inst_32441 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32436) : p.call(null,inst_32436));
var state_32454__$1 = state_32454;
if(cljs.core.truth_(inst_32441)){
var statearr_32461_33921 = state_32454__$1;
(statearr_32461_33921[(1)] = (8));

} else {
var statearr_32462_33922 = state_32454__$1;
(statearr_32462_33922[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (3))){
var inst_32452 = (state_32454[(2)]);
var state_32454__$1 = state_32454;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32454__$1,inst_32452);
} else {
if((state_val_32455 === (2))){
var state_32454__$1 = state_32454;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32454__$1,(4),ch);
} else {
if((state_val_32455 === (11))){
var inst_32444 = (state_32454[(2)]);
var state_32454__$1 = state_32454;
var statearr_32463_33923 = state_32454__$1;
(statearr_32463_33923[(2)] = inst_32444);

(statearr_32463_33923[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (9))){
var state_32454__$1 = state_32454;
var statearr_32464_33924 = state_32454__$1;
(statearr_32464_33924[(2)] = null);

(statearr_32464_33924[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (5))){
var inst_32439 = cljs.core.async.close_BANG_(out);
var state_32454__$1 = state_32454;
var statearr_32465_33925 = state_32454__$1;
(statearr_32465_33925[(2)] = inst_32439);

(statearr_32465_33925[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (10))){
var inst_32447 = (state_32454[(2)]);
var state_32454__$1 = (function (){var statearr_32466 = state_32454;
(statearr_32466[(8)] = inst_32447);

return statearr_32466;
})();
var statearr_32467_33926 = state_32454__$1;
(statearr_32467_33926[(2)] = null);

(statearr_32467_33926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (8))){
var inst_32436 = (state_32454[(7)]);
var state_32454__$1 = state_32454;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32454__$1,(11),out,inst_32436);
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
});})(c__30908__auto___33911,out))
;
return ((function (switch__30666__auto__,c__30908__auto___33911,out){
return (function() {
var cljs$core$async$state_machine__30667__auto__ = null;
var cljs$core$async$state_machine__30667__auto____0 = (function (){
var statearr_32468 = [null,null,null,null,null,null,null,null,null];
(statearr_32468[(0)] = cljs$core$async$state_machine__30667__auto__);

(statearr_32468[(1)] = (1));

return statearr_32468;
});
var cljs$core$async$state_machine__30667__auto____1 = (function (state_32454){
while(true){
var ret_value__30668__auto__ = (function (){try{while(true){
var result__30669__auto__ = switch__30666__auto__(state_32454);
if(cljs.core.keyword_identical_QMARK_(result__30669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30669__auto__;
}
break;
}
}catch (e32469){if((e32469 instanceof Object)){
var ex__30670__auto__ = e32469;
var statearr_32470_33929 = state_32454;
(statearr_32470_33929[(5)] = ex__30670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32454);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32469;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33930 = state_32454;
state_32454 = G__33930;
continue;
} else {
return ret_value__30668__auto__;
}
break;
}
});
cljs$core$async$state_machine__30667__auto__ = function(state_32454){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30667__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30667__auto____1.call(this,state_32454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30667__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30667__auto____0;
cljs$core$async$state_machine__30667__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30667__auto____1;
return cljs$core$async$state_machine__30667__auto__;
})()
;})(switch__30666__auto__,c__30908__auto___33911,out))
})();
var state__30910__auto__ = (function (){var statearr_32471 = (f__30909__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30909__auto__.cljs$core$IFn$_invoke$arity$0() : f__30909__auto__.call(null));
(statearr_32471[(6)] = c__30908__auto___33911);

return statearr_32471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30910__auto__);
});})(c__30908__auto___33911,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32473 = arguments.length;
switch (G__32473) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30908__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30908__auto__){
return (function (){
var f__30909__auto__ = (function (){var switch__30666__auto__ = ((function (c__30908__auto__){
return (function (state_32537){
var state_val_32538 = (state_32537[(1)]);
if((state_val_32538 === (7))){
var inst_32533 = (state_32537[(2)]);
var state_32537__$1 = state_32537;
var statearr_32547_33940 = state_32537__$1;
(statearr_32547_33940[(2)] = inst_32533);

(statearr_32547_33940[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32538 === (20))){
var inst_32503 = (state_32537[(7)]);
var inst_32514 = (state_32537[(2)]);
var inst_32515 = cljs.core.next(inst_32503);
var inst_32489 = inst_32515;
var inst_32490 = null;
var inst_32491 = (0);
var inst_32492 = (0);
var state_32537__$1 = (function (){var statearr_32552 = state_32537;
(statearr_32552[(8)] = inst_32514);

(statearr_32552[(9)] = inst_32492);

(statearr_32552[(10)] = inst_32489);

(statearr_32552[(11)] = inst_32490);

(statearr_32552[(12)] = inst_32491);

return statearr_32552;
})();
var statearr_32555_33947 = state_32537__$1;
(statearr_32555_33947[(2)] = null);

(statearr_32555_33947[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32538 === (1))){
var state_32537__$1 = state_32537;
var statearr_32558_33948 = state_32537__$1;
(statearr_32558_33948[(2)] = null);

(statearr_32558_33948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32538 === (4))){
var inst_32478 = (state_32537[(13)]);
var inst_32478__$1 = (state_32537[(2)]);
var inst_32479 = (inst_32478__$1 == null);
var state_32537__$1 = (function (){var statearr_32559 = state_32537;
(statearr_32559[(13)] = inst_32478__$1);

return statearr_32559;
})();
if(cljs.core.truth_(inst_32479)){
var statearr_32560_33958 = state_32537__$1;
(statearr_32560_33958[(1)] = (5));

} else {
var statearr_32561_33959 = state_32537__$1;
(statearr_32561_33959[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32538 === (15))){
var state_32537__$1 = state_32537;
var statearr_32568_33960 = state_32537__$1;
(statearr_32568_33960[(2)] = null);

(statearr_32568_33960[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32538 === (21))){
var state_32537__$1 = state_32537;
var statearr_32569_33961 = state_32537__$1;
(statearr_32569_33961[(2)] = null);

(statearr_32569_33961[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32538 === (13))){
var inst_32492 = (state_32537[(9)]);
var inst_32489 = (state_32537[(10)]);
var inst_32490 = (state_32537[(11)]);
var inst_32491 = (state_32537[(12)]);
var inst_32499 = (state_32537[(2)]);
var inst_32500 = (inst_32492 + (1));
var tmp32563 = inst_32489;
var tmp32564 = inst_32490;
var tmp32565 = inst_32491;
var inst_32489__$1 = tmp32563;
var inst_32490__$1 = tmp32564;
var inst_32491__$1 = tmp32565;
var inst_32492__$1 = inst_32500;
var state_32537__$1 = (function (){var statearr_32570 = state_32537;
(statearr_32570[(9)] = inst_32492__$1);

(statearr_32570[(14)] = inst_32499);

(statearr_32570[(10)] = inst_32489__$1);

(statearr_32570[(11)] = inst_32490__$1);

(statearr_32570[(12)] = inst_32491__$1);

return statearr_32570;
})();
var statearr_32575_33963 = state_32537__$1;
(statearr_32575_33963[(2)] = null);

(statearr_32575_33963[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32538 === (22))){
var state_32537__$1 = state_32537;
var statearr_32576_33964 = state_32537__$1;
(statearr_32576_33964[(2)] = null);

(statearr_32576_33964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32538 === (6))){
var inst_32478 = (state_32537[(13)]);
var inst_32487 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32478) : f.call(null,inst_32478));
var inst_32488 = cljs.core.seq(inst_32487);
var inst_32489 = inst_32488;
var inst_32490 = null;
var inst_32491 = (0);
var inst_32492 = (0);
var state_32537__$1 = (function (){var statearr_32577 = state_32537;
(statearr_32577[(9)] = inst_32492);

(statearr_32577[(10)] = inst_32489);

(statearr_32577[(11)] = inst_32490);

(statearr_32577[(12)] = inst_32491);

return statearr_32577;
})();
var statearr_32578_33965 = state_32537__$1;
(statearr_32578_33965[(2)] = null);

(statearr_32578_33965[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32538 === (17))){
var inst_32503 = (state_32537[(7)]);
var inst_32507 = cljs.core.chunk_first(inst_32503);
var inst_32508 = cljs.core.chunk_rest(inst_32503);
var inst_32509 = cljs.core.count(inst_32507);
var inst_32489 = inst_32508;
var inst_32490 = inst_32507;
var inst_32491 = inst_32509;
var inst_32492 = (0);
var state_32537__$1 = (function (){var statearr_32585 = state_32537;
(statearr_32585[(9)] = inst_32492);

(statearr_32585[(10)] = inst_32489);

(statearr_32585[(11)] = inst_32490);

(statearr_32585[(12)] = inst_32491);

return statearr_32585;
})();
var statearr_32586_33971 = state_32537__$1;
(statearr_32586_33971[(2)] = null);

(statearr_32586_33971[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32538 === (3))){
var inst_32535 = (state_32537[(2)]);
var state_32537__$1 = state_32537;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32537__$1,inst_32535);
} else {
if((state_val_32538 === (12))){
var inst_32523 = (state_32537[(2)]);
var state_32537__$1 = state_32537;
var statearr_32587_33972 = state_32537__$1;
(statearr_32587_33972[(2)] = inst_32523);

(statearr_32587_33972[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32538 === (2))){
var state_32537__$1 = state_32537;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32537__$1,(4),in$);
} else {
if((state_val_32538 === (23))){
var inst_32531 = (state_32537[(2)]);
var state_32537__$1 = state_32537;
var statearr_32590_33973 = state_32537__$1;
(statearr_32590_33973[(2)] = inst_32531);

(statearr_32590_33973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32538 === (19))){
var inst_32518 = (state_32537[(2)]);
var state_32537__$1 = state_32537;
var statearr_32593_33974 = state_32537__$1;
(statearr_32593_33974[(2)] = inst_32518);

(statearr_32593_33974[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32538 === (11))){
var inst_32503 = (state_32537[(7)]);
var inst_32489 = (state_32537[(10)]);
var inst_32503__$1 = cljs.core.seq(inst_32489);
var state_32537__$1 = (function (){var statearr_32595 = state_32537;
(statearr_32595[(7)] = inst_32503__$1);

return statearr_32595;
})();
if(inst_32503__$1){
var statearr_32600_33975 = state_32537__$1;
(statearr_32600_33975[(1)] = (14));

} else {
var statearr_32601_33976 = state_32537__$1;
(statearr_32601_33976[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32538 === (9))){
var inst_32525 = (state_32537[(2)]);
var inst_32526 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32537__$1 = (function (){var statearr_32602 = state_32537;
(statearr_32602[(15)] = inst_32525);

return statearr_32602;
})();
if(cljs.core.truth_(inst_32526)){
var statearr_32603_33977 = state_32537__$1;
(statearr_32603_33977[(1)] = (21));

} else {
var statearr_32604_33978 = state_32537__$1;
(statearr_32604_33978[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32538 === (5))){
var inst_32481 = cljs.core.async.close_BANG_(out);
var state_32537__$1 = state_32537;
var statearr_32605_33979 = state_32537__$1;
(statearr_32605_33979[(2)] = inst_32481);

(statearr_32605_33979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32538 === (14))){
var inst_32503 = (state_32537[(7)]);
var inst_32505 = cljs.core.chunked_seq_QMARK_(inst_32503);
var state_32537__$1 = state_32537;
if(inst_32505){
var statearr_32606_33980 = state_32537__$1;
(statearr_32606_33980[(1)] = (17));

} else {
var statearr_32608_33981 = state_32537__$1;
(statearr_32608_33981[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32538 === (16))){
var inst_32521 = (state_32537[(2)]);
var state_32537__$1 = state_32537;
var statearr_32610_33992 = state_32537__$1;
(statearr_32610_33992[(2)] = inst_32521);

(statearr_32610_33992[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32538 === (10))){
var inst_32492 = (state_32537[(9)]);
var inst_32490 = (state_32537[(11)]);
var inst_32497 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32490,inst_32492);
var state_32537__$1 = state_32537;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32537__$1,(13),out,inst_32497);
} else {
if((state_val_32538 === (18))){
var inst_32503 = (state_32537[(7)]);
var inst_32512 = cljs.core.first(inst_32503);
var state_32537__$1 = state_32537;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32537__$1,(20),out,inst_32512);
} else {
if((state_val_32538 === (8))){
var inst_32492 = (state_32537[(9)]);
var inst_32491 = (state_32537[(12)]);
var inst_32494 = (inst_32492 < inst_32491);
var inst_32495 = inst_32494;
var state_32537__$1 = state_32537;
if(cljs.core.truth_(inst_32495)){
var statearr_32612_33993 = state_32537__$1;
(statearr_32612_33993[(1)] = (10));

} else {
var statearr_32613_33994 = state_32537__$1;
(statearr_32613_33994[(1)] = (11));

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
});})(c__30908__auto__))
;
return ((function (switch__30666__auto__,c__30908__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30667__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30667__auto____0 = (function (){
var statearr_32614 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32614[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30667__auto__);

(statearr_32614[(1)] = (1));

return statearr_32614;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30667__auto____1 = (function (state_32537){
while(true){
var ret_value__30668__auto__ = (function (){try{while(true){
var result__30669__auto__ = switch__30666__auto__(state_32537);
if(cljs.core.keyword_identical_QMARK_(result__30669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30669__auto__;
}
break;
}
}catch (e32615){if((e32615 instanceof Object)){
var ex__30670__auto__ = e32615;
var statearr_32616_33998 = state_32537;
(statearr_32616_33998[(5)] = ex__30670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32615;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33999 = state_32537;
state_32537 = G__33999;
continue;
} else {
return ret_value__30668__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30667__auto__ = function(state_32537){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30667__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30667__auto____1.call(this,state_32537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30667__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30667__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30667__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30667__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30667__auto__;
})()
;})(switch__30666__auto__,c__30908__auto__))
})();
var state__30910__auto__ = (function (){var statearr_32617 = (f__30909__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30909__auto__.cljs$core$IFn$_invoke$arity$0() : f__30909__auto__.call(null));
(statearr_32617[(6)] = c__30908__auto__);

return statearr_32617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30910__auto__);
});})(c__30908__auto__))
);

return c__30908__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32624 = arguments.length;
switch (G__32624) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32628 = arguments.length;
switch (G__32628) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32640 = arguments.length;
switch (G__32640) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30908__auto___34017 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30908__auto___34017,out){
return (function (){
var f__30909__auto__ = (function (){var switch__30666__auto__ = ((function (c__30908__auto___34017,out){
return (function (state_32680){
var state_val_32681 = (state_32680[(1)]);
if((state_val_32681 === (7))){
var inst_32659 = (state_32680[(2)]);
var state_32680__$1 = state_32680;
var statearr_32682_34018 = state_32680__$1;
(statearr_32682_34018[(2)] = inst_32659);

(statearr_32682_34018[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32681 === (1))){
var inst_32641 = null;
var state_32680__$1 = (function (){var statearr_32683 = state_32680;
(statearr_32683[(7)] = inst_32641);

return statearr_32683;
})();
var statearr_32684_34019 = state_32680__$1;
(statearr_32684_34019[(2)] = null);

(statearr_32684_34019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32681 === (4))){
var inst_32644 = (state_32680[(8)]);
var inst_32644__$1 = (state_32680[(2)]);
var inst_32645 = (inst_32644__$1 == null);
var inst_32646 = cljs.core.not(inst_32645);
var state_32680__$1 = (function (){var statearr_32685 = state_32680;
(statearr_32685[(8)] = inst_32644__$1);

return statearr_32685;
})();
if(inst_32646){
var statearr_32686_34020 = state_32680__$1;
(statearr_32686_34020[(1)] = (5));

} else {
var statearr_32687_34025 = state_32680__$1;
(statearr_32687_34025[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32681 === (6))){
var state_32680__$1 = state_32680;
var statearr_32688_34028 = state_32680__$1;
(statearr_32688_34028[(2)] = null);

(statearr_32688_34028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32681 === (3))){
var inst_32661 = (state_32680[(2)]);
var inst_32678 = cljs.core.async.close_BANG_(out);
var state_32680__$1 = (function (){var statearr_32690 = state_32680;
(statearr_32690[(9)] = inst_32661);

return statearr_32690;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32680__$1,inst_32678);
} else {
if((state_val_32681 === (2))){
var state_32680__$1 = state_32680;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32680__$1,(4),ch);
} else {
if((state_val_32681 === (11))){
var inst_32644 = (state_32680[(8)]);
var inst_32653 = (state_32680[(2)]);
var inst_32641 = inst_32644;
var state_32680__$1 = (function (){var statearr_32693 = state_32680;
(statearr_32693[(7)] = inst_32641);

(statearr_32693[(10)] = inst_32653);

return statearr_32693;
})();
var statearr_32694_34077 = state_32680__$1;
(statearr_32694_34077[(2)] = null);

(statearr_32694_34077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32681 === (9))){
var inst_32644 = (state_32680[(8)]);
var state_32680__$1 = state_32680;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32680__$1,(11),out,inst_32644);
} else {
if((state_val_32681 === (5))){
var inst_32641 = (state_32680[(7)]);
var inst_32644 = (state_32680[(8)]);
var inst_32648 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32644,inst_32641);
var state_32680__$1 = state_32680;
if(inst_32648){
var statearr_32698_34078 = state_32680__$1;
(statearr_32698_34078[(1)] = (8));

} else {
var statearr_32699_34079 = state_32680__$1;
(statearr_32699_34079[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32681 === (10))){
var inst_32656 = (state_32680[(2)]);
var state_32680__$1 = state_32680;
var statearr_32702_34080 = state_32680__$1;
(statearr_32702_34080[(2)] = inst_32656);

(statearr_32702_34080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32681 === (8))){
var inst_32641 = (state_32680[(7)]);
var tmp32696 = inst_32641;
var inst_32641__$1 = tmp32696;
var state_32680__$1 = (function (){var statearr_32704 = state_32680;
(statearr_32704[(7)] = inst_32641__$1);

return statearr_32704;
})();
var statearr_32705_34081 = state_32680__$1;
(statearr_32705_34081[(2)] = null);

(statearr_32705_34081[(1)] = (2));


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
});})(c__30908__auto___34017,out))
;
return ((function (switch__30666__auto__,c__30908__auto___34017,out){
return (function() {
var cljs$core$async$state_machine__30667__auto__ = null;
var cljs$core$async$state_machine__30667__auto____0 = (function (){
var statearr_32707 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32707[(0)] = cljs$core$async$state_machine__30667__auto__);

(statearr_32707[(1)] = (1));

return statearr_32707;
});
var cljs$core$async$state_machine__30667__auto____1 = (function (state_32680){
while(true){
var ret_value__30668__auto__ = (function (){try{while(true){
var result__30669__auto__ = switch__30666__auto__(state_32680);
if(cljs.core.keyword_identical_QMARK_(result__30669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30669__auto__;
}
break;
}
}catch (e32709){if((e32709 instanceof Object)){
var ex__30670__auto__ = e32709;
var statearr_32711_34113 = state_32680;
(statearr_32711_34113[(5)] = ex__30670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32680);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32709;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34117 = state_32680;
state_32680 = G__34117;
continue;
} else {
return ret_value__30668__auto__;
}
break;
}
});
cljs$core$async$state_machine__30667__auto__ = function(state_32680){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30667__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30667__auto____1.call(this,state_32680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30667__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30667__auto____0;
cljs$core$async$state_machine__30667__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30667__auto____1;
return cljs$core$async$state_machine__30667__auto__;
})()
;})(switch__30666__auto__,c__30908__auto___34017,out))
})();
var state__30910__auto__ = (function (){var statearr_32712 = (f__30909__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30909__auto__.cljs$core$IFn$_invoke$arity$0() : f__30909__auto__.call(null));
(statearr_32712[(6)] = c__30908__auto___34017);

return statearr_32712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30910__auto__);
});})(c__30908__auto___34017,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32715 = arguments.length;
switch (G__32715) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30908__auto___34143 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30908__auto___34143,out){
return (function (){
var f__30909__auto__ = (function (){var switch__30666__auto__ = ((function (c__30908__auto___34143,out){
return (function (state_32761){
var state_val_32762 = (state_32761[(1)]);
if((state_val_32762 === (7))){
var inst_32757 = (state_32761[(2)]);
var state_32761__$1 = state_32761;
var statearr_32767_34144 = state_32761__$1;
(statearr_32767_34144[(2)] = inst_32757);

(statearr_32767_34144[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32762 === (1))){
var inst_32721 = (new Array(n));
var inst_32722 = inst_32721;
var inst_32723 = (0);
var state_32761__$1 = (function (){var statearr_32771 = state_32761;
(statearr_32771[(7)] = inst_32722);

(statearr_32771[(8)] = inst_32723);

return statearr_32771;
})();
var statearr_32772_34145 = state_32761__$1;
(statearr_32772_34145[(2)] = null);

(statearr_32772_34145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32762 === (4))){
var inst_32726 = (state_32761[(9)]);
var inst_32726__$1 = (state_32761[(2)]);
var inst_32727 = (inst_32726__$1 == null);
var inst_32728 = cljs.core.not(inst_32727);
var state_32761__$1 = (function (){var statearr_32774 = state_32761;
(statearr_32774[(9)] = inst_32726__$1);

return statearr_32774;
})();
if(inst_32728){
var statearr_32777_34146 = state_32761__$1;
(statearr_32777_34146[(1)] = (5));

} else {
var statearr_32778_34147 = state_32761__$1;
(statearr_32778_34147[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32762 === (15))){
var inst_32751 = (state_32761[(2)]);
var state_32761__$1 = state_32761;
var statearr_32781_34148 = state_32761__$1;
(statearr_32781_34148[(2)] = inst_32751);

(statearr_32781_34148[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32762 === (13))){
var state_32761__$1 = state_32761;
var statearr_32784_34149 = state_32761__$1;
(statearr_32784_34149[(2)] = null);

(statearr_32784_34149[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32762 === (6))){
var inst_32723 = (state_32761[(8)]);
var inst_32747 = (inst_32723 > (0));
var state_32761__$1 = state_32761;
if(cljs.core.truth_(inst_32747)){
var statearr_32785_34150 = state_32761__$1;
(statearr_32785_34150[(1)] = (12));

} else {
var statearr_32787_34151 = state_32761__$1;
(statearr_32787_34151[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32762 === (3))){
var inst_32759 = (state_32761[(2)]);
var state_32761__$1 = state_32761;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32761__$1,inst_32759);
} else {
if((state_val_32762 === (12))){
var inst_32722 = (state_32761[(7)]);
var inst_32749 = cljs.core.vec(inst_32722);
var state_32761__$1 = state_32761;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32761__$1,(15),out,inst_32749);
} else {
if((state_val_32762 === (2))){
var state_32761__$1 = state_32761;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32761__$1,(4),ch);
} else {
if((state_val_32762 === (11))){
var inst_32740 = (state_32761[(2)]);
var inst_32742 = (new Array(n));
var inst_32722 = inst_32742;
var inst_32723 = (0);
var state_32761__$1 = (function (){var statearr_32792 = state_32761;
(statearr_32792[(7)] = inst_32722);

(statearr_32792[(10)] = inst_32740);

(statearr_32792[(8)] = inst_32723);

return statearr_32792;
})();
var statearr_32795_34158 = state_32761__$1;
(statearr_32795_34158[(2)] = null);

(statearr_32795_34158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32762 === (9))){
var inst_32722 = (state_32761[(7)]);
var inst_32738 = cljs.core.vec(inst_32722);
var state_32761__$1 = state_32761;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32761__$1,(11),out,inst_32738);
} else {
if((state_val_32762 === (5))){
var inst_32722 = (state_32761[(7)]);
var inst_32723 = (state_32761[(8)]);
var inst_32732 = (state_32761[(11)]);
var inst_32726 = (state_32761[(9)]);
var inst_32731 = (inst_32722[inst_32723] = inst_32726);
var inst_32732__$1 = (inst_32723 + (1));
var inst_32733 = (inst_32732__$1 < n);
var state_32761__$1 = (function (){var statearr_32800 = state_32761;
(statearr_32800[(12)] = inst_32731);

(statearr_32800[(11)] = inst_32732__$1);

return statearr_32800;
})();
if(cljs.core.truth_(inst_32733)){
var statearr_32801_34160 = state_32761__$1;
(statearr_32801_34160[(1)] = (8));

} else {
var statearr_32802_34161 = state_32761__$1;
(statearr_32802_34161[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32762 === (14))){
var inst_32754 = (state_32761[(2)]);
var inst_32755 = cljs.core.async.close_BANG_(out);
var state_32761__$1 = (function (){var statearr_32807 = state_32761;
(statearr_32807[(13)] = inst_32754);

return statearr_32807;
})();
var statearr_32808_34162 = state_32761__$1;
(statearr_32808_34162[(2)] = inst_32755);

(statearr_32808_34162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32762 === (10))){
var inst_32745 = (state_32761[(2)]);
var state_32761__$1 = state_32761;
var statearr_32810_34166 = state_32761__$1;
(statearr_32810_34166[(2)] = inst_32745);

(statearr_32810_34166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32762 === (8))){
var inst_32722 = (state_32761[(7)]);
var inst_32732 = (state_32761[(11)]);
var tmp32806 = inst_32722;
var inst_32722__$1 = tmp32806;
var inst_32723 = inst_32732;
var state_32761__$1 = (function (){var statearr_32813 = state_32761;
(statearr_32813[(7)] = inst_32722__$1);

(statearr_32813[(8)] = inst_32723);

return statearr_32813;
})();
var statearr_32814_34170 = state_32761__$1;
(statearr_32814_34170[(2)] = null);

(statearr_32814_34170[(1)] = (2));


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
});})(c__30908__auto___34143,out))
;
return ((function (switch__30666__auto__,c__30908__auto___34143,out){
return (function() {
var cljs$core$async$state_machine__30667__auto__ = null;
var cljs$core$async$state_machine__30667__auto____0 = (function (){
var statearr_32828 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32828[(0)] = cljs$core$async$state_machine__30667__auto__);

(statearr_32828[(1)] = (1));

return statearr_32828;
});
var cljs$core$async$state_machine__30667__auto____1 = (function (state_32761){
while(true){
var ret_value__30668__auto__ = (function (){try{while(true){
var result__30669__auto__ = switch__30666__auto__(state_32761);
if(cljs.core.keyword_identical_QMARK_(result__30669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30669__auto__;
}
break;
}
}catch (e32829){if((e32829 instanceof Object)){
var ex__30670__auto__ = e32829;
var statearr_32830_34171 = state_32761;
(statearr_32830_34171[(5)] = ex__30670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32761);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32829;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34172 = state_32761;
state_32761 = G__34172;
continue;
} else {
return ret_value__30668__auto__;
}
break;
}
});
cljs$core$async$state_machine__30667__auto__ = function(state_32761){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30667__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30667__auto____1.call(this,state_32761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30667__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30667__auto____0;
cljs$core$async$state_machine__30667__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30667__auto____1;
return cljs$core$async$state_machine__30667__auto__;
})()
;})(switch__30666__auto__,c__30908__auto___34143,out))
})();
var state__30910__auto__ = (function (){var statearr_32831 = (f__30909__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30909__auto__.cljs$core$IFn$_invoke$arity$0() : f__30909__auto__.call(null));
(statearr_32831[(6)] = c__30908__auto___34143);

return statearr_32831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30910__auto__);
});})(c__30908__auto___34143,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32833 = arguments.length;
switch (G__32833) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30908__auto___34174 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30908__auto___34174,out){
return (function (){
var f__30909__auto__ = (function (){var switch__30666__auto__ = ((function (c__30908__auto___34174,out){
return (function (state_32882){
var state_val_32883 = (state_32882[(1)]);
if((state_val_32883 === (7))){
var inst_32874 = (state_32882[(2)]);
var state_32882__$1 = state_32882;
var statearr_32890_34175 = state_32882__$1;
(statearr_32890_34175[(2)] = inst_32874);

(statearr_32890_34175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32883 === (1))){
var inst_32835 = [];
var inst_32836 = inst_32835;
var inst_32837 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32882__$1 = (function (){var statearr_32891 = state_32882;
(statearr_32891[(7)] = inst_32836);

(statearr_32891[(8)] = inst_32837);

return statearr_32891;
})();
var statearr_32892_34176 = state_32882__$1;
(statearr_32892_34176[(2)] = null);

(statearr_32892_34176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32883 === (4))){
var inst_32842 = (state_32882[(9)]);
var inst_32842__$1 = (state_32882[(2)]);
var inst_32843 = (inst_32842__$1 == null);
var inst_32844 = cljs.core.not(inst_32843);
var state_32882__$1 = (function (){var statearr_32895 = state_32882;
(statearr_32895[(9)] = inst_32842__$1);

return statearr_32895;
})();
if(inst_32844){
var statearr_32896_34177 = state_32882__$1;
(statearr_32896_34177[(1)] = (5));

} else {
var statearr_32897_34178 = state_32882__$1;
(statearr_32897_34178[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32883 === (15))){
var inst_32868 = (state_32882[(2)]);
var state_32882__$1 = state_32882;
var statearr_32904_34179 = state_32882__$1;
(statearr_32904_34179[(2)] = inst_32868);

(statearr_32904_34179[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32883 === (13))){
var state_32882__$1 = state_32882;
var statearr_32907_34180 = state_32882__$1;
(statearr_32907_34180[(2)] = null);

(statearr_32907_34180[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32883 === (6))){
var inst_32836 = (state_32882[(7)]);
var inst_32863 = inst_32836.length;
var inst_32864 = (inst_32863 > (0));
var state_32882__$1 = state_32882;
if(cljs.core.truth_(inst_32864)){
var statearr_32910_34181 = state_32882__$1;
(statearr_32910_34181[(1)] = (12));

} else {
var statearr_32912_34182 = state_32882__$1;
(statearr_32912_34182[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32883 === (3))){
var inst_32876 = (state_32882[(2)]);
var state_32882__$1 = state_32882;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32882__$1,inst_32876);
} else {
if((state_val_32883 === (12))){
var inst_32836 = (state_32882[(7)]);
var inst_32866 = cljs.core.vec(inst_32836);
var state_32882__$1 = state_32882;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32882__$1,(15),out,inst_32866);
} else {
if((state_val_32883 === (2))){
var state_32882__$1 = state_32882;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32882__$1,(4),ch);
} else {
if((state_val_32883 === (11))){
var inst_32846 = (state_32882[(10)]);
var inst_32842 = (state_32882[(9)]);
var inst_32856 = (state_32882[(2)]);
var inst_32857 = [];
var inst_32858 = inst_32857.push(inst_32842);
var inst_32836 = inst_32857;
var inst_32837 = inst_32846;
var state_32882__$1 = (function (){var statearr_32928 = state_32882;
(statearr_32928[(7)] = inst_32836);

(statearr_32928[(11)] = inst_32856);

(statearr_32928[(8)] = inst_32837);

(statearr_32928[(12)] = inst_32858);

return statearr_32928;
})();
var statearr_32929_34183 = state_32882__$1;
(statearr_32929_34183[(2)] = null);

(statearr_32929_34183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32883 === (9))){
var inst_32836 = (state_32882[(7)]);
var inst_32854 = cljs.core.vec(inst_32836);
var state_32882__$1 = state_32882;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32882__$1,(11),out,inst_32854);
} else {
if((state_val_32883 === (5))){
var inst_32846 = (state_32882[(10)]);
var inst_32842 = (state_32882[(9)]);
var inst_32837 = (state_32882[(8)]);
var inst_32846__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32842) : f.call(null,inst_32842));
var inst_32847 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32846__$1,inst_32837);
var inst_32848 = cljs.core.keyword_identical_QMARK_(inst_32837,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32849 = ((inst_32847) || (inst_32848));
var state_32882__$1 = (function (){var statearr_32932 = state_32882;
(statearr_32932[(10)] = inst_32846__$1);

return statearr_32932;
})();
if(cljs.core.truth_(inst_32849)){
var statearr_32933_34184 = state_32882__$1;
(statearr_32933_34184[(1)] = (8));

} else {
var statearr_32934_34185 = state_32882__$1;
(statearr_32934_34185[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32883 === (14))){
var inst_32871 = (state_32882[(2)]);
var inst_32872 = cljs.core.async.close_BANG_(out);
var state_32882__$1 = (function (){var statearr_32940 = state_32882;
(statearr_32940[(13)] = inst_32871);

return statearr_32940;
})();
var statearr_32941_34186 = state_32882__$1;
(statearr_32941_34186[(2)] = inst_32872);

(statearr_32941_34186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32883 === (10))){
var inst_32861 = (state_32882[(2)]);
var state_32882__$1 = state_32882;
var statearr_32943_34187 = state_32882__$1;
(statearr_32943_34187[(2)] = inst_32861);

(statearr_32943_34187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32883 === (8))){
var inst_32846 = (state_32882[(10)]);
var inst_32836 = (state_32882[(7)]);
var inst_32842 = (state_32882[(9)]);
var inst_32851 = inst_32836.push(inst_32842);
var tmp32935 = inst_32836;
var inst_32836__$1 = tmp32935;
var inst_32837 = inst_32846;
var state_32882__$1 = (function (){var statearr_32944 = state_32882;
(statearr_32944[(7)] = inst_32836__$1);

(statearr_32944[(8)] = inst_32837);

(statearr_32944[(14)] = inst_32851);

return statearr_32944;
})();
var statearr_32945_34192 = state_32882__$1;
(statearr_32945_34192[(2)] = null);

(statearr_32945_34192[(1)] = (2));


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
});})(c__30908__auto___34174,out))
;
return ((function (switch__30666__auto__,c__30908__auto___34174,out){
return (function() {
var cljs$core$async$state_machine__30667__auto__ = null;
var cljs$core$async$state_machine__30667__auto____0 = (function (){
var statearr_32946 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32946[(0)] = cljs$core$async$state_machine__30667__auto__);

(statearr_32946[(1)] = (1));

return statearr_32946;
});
var cljs$core$async$state_machine__30667__auto____1 = (function (state_32882){
while(true){
var ret_value__30668__auto__ = (function (){try{while(true){
var result__30669__auto__ = switch__30666__auto__(state_32882);
if(cljs.core.keyword_identical_QMARK_(result__30669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30669__auto__;
}
break;
}
}catch (e32947){if((e32947 instanceof Object)){
var ex__30670__auto__ = e32947;
var statearr_32948_34193 = state_32882;
(statearr_32948_34193[(5)] = ex__30670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32882);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32947;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34194 = state_32882;
state_32882 = G__34194;
continue;
} else {
return ret_value__30668__auto__;
}
break;
}
});
cljs$core$async$state_machine__30667__auto__ = function(state_32882){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30667__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30667__auto____1.call(this,state_32882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30667__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30667__auto____0;
cljs$core$async$state_machine__30667__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30667__auto____1;
return cljs$core$async$state_machine__30667__auto__;
})()
;})(switch__30666__auto__,c__30908__auto___34174,out))
})();
var state__30910__auto__ = (function (){var statearr_32949 = (f__30909__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30909__auto__.cljs$core$IFn$_invoke$arity$0() : f__30909__auto__.call(null));
(statearr_32949[(6)] = c__30908__auto___34174);

return statearr_32949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30910__auto__);
});})(c__30908__auto___34174,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
