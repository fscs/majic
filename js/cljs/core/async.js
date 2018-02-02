// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__17966 = arguments.length;
switch (G__17966) {
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
if(typeof cljs.core.async.t_cljs$core$async17967 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17967 = (function (f,blockable,meta17968){
this.f = f;
this.blockable = blockable;
this.meta17968 = meta17968;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17967.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17969,meta17968__$1){
var self__ = this;
var _17969__$1 = this;
return (new cljs.core.async.t_cljs$core$async17967(self__.f,self__.blockable,meta17968__$1));
});

cljs.core.async.t_cljs$core$async17967.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17969){
var self__ = this;
var _17969__$1 = this;
return self__.meta17968;
});

cljs.core.async.t_cljs$core$async17967.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17967.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17967.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async17967.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async17967.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta17968], null);
});

cljs.core.async.t_cljs$core$async17967.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17967.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17967";

cljs.core.async.t_cljs$core$async17967.cljs$lang$ctorPrWriter = (function (this__9537__auto__,writer__9538__auto__,opt__9539__auto__){
return cljs.core._write(writer__9538__auto__,"cljs.core.async/t_cljs$core$async17967");
});

cljs.core.async.__GT_t_cljs$core$async17967 = (function cljs$core$async$__GT_t_cljs$core$async17967(f__$1,blockable__$1,meta17968){
return (new cljs.core.async.t_cljs$core$async17967(f__$1,blockable__$1,meta17968));
});

}

return (new cljs.core.async.t_cljs$core$async17967(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
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
var G__17973 = arguments.length;
switch (G__17973) {
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
var G__17976 = arguments.length;
switch (G__17976) {
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
var G__17979 = arguments.length;
switch (G__17979) {
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
var val_17981 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17981) : fn1.call(null,val_17981));
} else {
cljs.core.async.impl.dispatch.run(((function (val_17981,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17981) : fn1.call(null,val_17981));
});})(val_17981,ret))
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
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__17983 = arguments.length;
switch (G__17983) {
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
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5455__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5455__auto__))
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
var n__9911__auto___17985 = n;
var x_17986 = (0);
while(true){
if((x_17986 < n__9911__auto___17985)){
(a[x_17986] = (0));

var G__17987 = (x_17986 + (1));
x_17986 = G__17987;
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

var G__17988 = (i + (1));
i = G__17988;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if(typeof cljs.core.async.t_cljs$core$async17989 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17989 = (function (flag,meta17990){
this.flag = flag;
this.meta17990 = meta17990;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17989.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17991,meta17990__$1){
var self__ = this;
var _17991__$1 = this;
return (new cljs.core.async.t_cljs$core$async17989(self__.flag,meta17990__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async17989.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17991){
var self__ = this;
var _17991__$1 = this;
return self__.meta17990;
});})(flag))
;

cljs.core.async.t_cljs$core$async17989.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17989.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async17989.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17989.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17989.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta17990], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async17989.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17989.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17989";

cljs.core.async.t_cljs$core$async17989.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__9537__auto__,writer__9538__auto__,opt__9539__auto__){
return cljs.core._write(writer__9538__auto__,"cljs.core.async/t_cljs$core$async17989");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async17989 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17989(flag__$1,meta17990){
return (new cljs.core.async.t_cljs$core$async17989(flag__$1,meta17990));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async17989(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async17992 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17992 = (function (flag,cb,meta17993){
this.flag = flag;
this.cb = cb;
this.meta17993 = meta17993;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17992.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17994,meta17993__$1){
var self__ = this;
var _17994__$1 = this;
return (new cljs.core.async.t_cljs$core$async17992(self__.flag,self__.cb,meta17993__$1));
});

cljs.core.async.t_cljs$core$async17992.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17994){
var self__ = this;
var _17994__$1 = this;
return self__.meta17993;
});

cljs.core.async.t_cljs$core$async17992.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17992.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async17992.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17992.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async17992.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta17993], null);
});

cljs.core.async.t_cljs$core$async17992.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17992.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17992";

cljs.core.async.t_cljs$core$async17992.cljs$lang$ctorPrWriter = (function (this__9537__auto__,writer__9538__auto__,opt__9539__auto__){
return cljs.core._write(writer__9538__auto__,"cljs.core.async/t_cljs$core$async17992");
});

cljs.core.async.__GT_t_cljs$core$async17992 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17992(flag__$1,cb__$1,meta17993){
return (new cljs.core.async.t_cljs$core$async17992(flag__$1,cb__$1,meta17993));
});

}

return (new cljs.core.async.t_cljs$core$async17992(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17995_SHARP_){
var G__17997 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17995_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17997) : fret.call(null,G__17997));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17996_SHARP_){
var G__17998 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17996_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17998) : fret.call(null,G__17998));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__8866__auto__ = wport;
if(cljs.core.truth_(or__8866__auto__)){
return or__8866__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17999 = (i + (1));
i = G__17999;
continue;
}
} else {
return null;
}
break;
}
})();
var or__8866__auto__ = ret;
if(cljs.core.truth_(or__8866__auto__)){
return or__8866__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__5457__auto__ = (function (){var and__8854__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__8854__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__8854__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
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
var args__10152__auto__ = [];
var len__10145__auto___18005 = arguments.length;
var i__10146__auto___18006 = (0);
while(true){
if((i__10146__auto___18006 < len__10145__auto___18005)){
args__10152__auto__.push((arguments[i__10146__auto___18006]));

var G__18007 = (i__10146__auto___18006 + (1));
i__10146__auto___18006 = G__18007;
continue;
} else {
}
break;
}

var argseq__10153__auto__ = ((((1) < args__10152__auto__.length))?(new cljs.core.IndexedSeq(args__10152__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10153__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__18002){
var map__18003 = p__18002;
var map__18003__$1 = ((((!((map__18003 == null)))?((((map__18003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18003.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18003):map__18003);
var opts = map__18003__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq18000){
var G__18001 = cljs.core.first(seq18000);
var seq18000__$1 = cljs.core.next(seq18000);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18001,seq18000__$1);
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
var G__18009 = arguments.length;
switch (G__18009) {
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
var c__17906__auto___18055 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17906__auto___18055){
return (function (){
var f__17907__auto__ = (function (){var switch__17804__auto__ = ((function (c__17906__auto___18055){
return (function (state_18033){
var state_val_18034 = (state_18033[(1)]);
if((state_val_18034 === (7))){
var inst_18029 = (state_18033[(2)]);
var state_18033__$1 = state_18033;
var statearr_18035_18056 = state_18033__$1;
(statearr_18035_18056[(2)] = inst_18029);

(statearr_18035_18056[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18034 === (1))){
var state_18033__$1 = state_18033;
var statearr_18036_18057 = state_18033__$1;
(statearr_18036_18057[(2)] = null);

(statearr_18036_18057[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18034 === (4))){
var inst_18012 = (state_18033[(7)]);
var inst_18012__$1 = (state_18033[(2)]);
var inst_18013 = (inst_18012__$1 == null);
var state_18033__$1 = (function (){var statearr_18037 = state_18033;
(statearr_18037[(7)] = inst_18012__$1);

return statearr_18037;
})();
if(cljs.core.truth_(inst_18013)){
var statearr_18038_18058 = state_18033__$1;
(statearr_18038_18058[(1)] = (5));

} else {
var statearr_18039_18059 = state_18033__$1;
(statearr_18039_18059[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18034 === (13))){
var state_18033__$1 = state_18033;
var statearr_18040_18060 = state_18033__$1;
(statearr_18040_18060[(2)] = null);

(statearr_18040_18060[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18034 === (6))){
var inst_18012 = (state_18033[(7)]);
var state_18033__$1 = state_18033;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18033__$1,(11),to,inst_18012);
} else {
if((state_val_18034 === (3))){
var inst_18031 = (state_18033[(2)]);
var state_18033__$1 = state_18033;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18033__$1,inst_18031);
} else {
if((state_val_18034 === (12))){
var state_18033__$1 = state_18033;
var statearr_18041_18061 = state_18033__$1;
(statearr_18041_18061[(2)] = null);

(statearr_18041_18061[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18034 === (2))){
var state_18033__$1 = state_18033;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18033__$1,(4),from);
} else {
if((state_val_18034 === (11))){
var inst_18022 = (state_18033[(2)]);
var state_18033__$1 = state_18033;
if(cljs.core.truth_(inst_18022)){
var statearr_18042_18062 = state_18033__$1;
(statearr_18042_18062[(1)] = (12));

} else {
var statearr_18043_18063 = state_18033__$1;
(statearr_18043_18063[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18034 === (9))){
var state_18033__$1 = state_18033;
var statearr_18044_18064 = state_18033__$1;
(statearr_18044_18064[(2)] = null);

(statearr_18044_18064[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18034 === (5))){
var state_18033__$1 = state_18033;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18045_18065 = state_18033__$1;
(statearr_18045_18065[(1)] = (8));

} else {
var statearr_18046_18066 = state_18033__$1;
(statearr_18046_18066[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18034 === (14))){
var inst_18027 = (state_18033[(2)]);
var state_18033__$1 = state_18033;
var statearr_18047_18067 = state_18033__$1;
(statearr_18047_18067[(2)] = inst_18027);

(statearr_18047_18067[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18034 === (10))){
var inst_18019 = (state_18033[(2)]);
var state_18033__$1 = state_18033;
var statearr_18048_18068 = state_18033__$1;
(statearr_18048_18068[(2)] = inst_18019);

(statearr_18048_18068[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18034 === (8))){
var inst_18016 = cljs.core.async.close_BANG_(to);
var state_18033__$1 = state_18033;
var statearr_18049_18069 = state_18033__$1;
(statearr_18049_18069[(2)] = inst_18016);

(statearr_18049_18069[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__17906__auto___18055))
;
return ((function (switch__17804__auto__,c__17906__auto___18055){
return (function() {
var cljs$core$async$state_machine__17805__auto__ = null;
var cljs$core$async$state_machine__17805__auto____0 = (function (){
var statearr_18050 = [null,null,null,null,null,null,null,null];
(statearr_18050[(0)] = cljs$core$async$state_machine__17805__auto__);

(statearr_18050[(1)] = (1));

return statearr_18050;
});
var cljs$core$async$state_machine__17805__auto____1 = (function (state_18033){
while(true){
var ret_value__17806__auto__ = (function (){try{while(true){
var result__17807__auto__ = switch__17804__auto__(state_18033);
if(cljs.core.keyword_identical_QMARK_(result__17807__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17807__auto__;
}
break;
}
}catch (e18051){if((e18051 instanceof Object)){
var ex__17808__auto__ = e18051;
var statearr_18052_18070 = state_18033;
(statearr_18052_18070[(5)] = ex__17808__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18033);

return cljs.core.cst$kw$recur;
} else {
throw e18051;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17806__auto__,cljs.core.cst$kw$recur)){
var G__18071 = state_18033;
state_18033 = G__18071;
continue;
} else {
return ret_value__17806__auto__;
}
break;
}
});
cljs$core$async$state_machine__17805__auto__ = function(state_18033){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17805__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17805__auto____1.call(this,state_18033);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17805__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17805__auto____0;
cljs$core$async$state_machine__17805__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17805__auto____1;
return cljs$core$async$state_machine__17805__auto__;
})()
;})(switch__17804__auto__,c__17906__auto___18055))
})();
var state__17908__auto__ = (function (){var statearr_18053 = (f__17907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17907__auto__.cljs$core$IFn$_invoke$arity$0() : f__17907__auto__.call(null));
(statearr_18053[(6)] = c__17906__auto___18055);

return statearr_18053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17908__auto__);
});})(c__17906__auto___18055))
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
return (function (p__18072){
var vec__18073 = p__18072;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18073,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18073,(1),null);
var job = vec__18073;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__17906__auto___18244 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17906__auto___18244,res,vec__18073,v,p,job,jobs,results){
return (function (){
var f__17907__auto__ = (function (){var switch__17804__auto__ = ((function (c__17906__auto___18244,res,vec__18073,v,p,job,jobs,results){
return (function (state_18080){
var state_val_18081 = (state_18080[(1)]);
if((state_val_18081 === (1))){
var state_18080__$1 = state_18080;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18080__$1,(2),res,v);
} else {
if((state_val_18081 === (2))){
var inst_18077 = (state_18080[(2)]);
var inst_18078 = cljs.core.async.close_BANG_(res);
var state_18080__$1 = (function (){var statearr_18082 = state_18080;
(statearr_18082[(7)] = inst_18077);

return statearr_18082;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18080__$1,inst_18078);
} else {
return null;
}
}
});})(c__17906__auto___18244,res,vec__18073,v,p,job,jobs,results))
;
return ((function (switch__17804__auto__,c__17906__auto___18244,res,vec__18073,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17805__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17805__auto____0 = (function (){
var statearr_18083 = [null,null,null,null,null,null,null,null];
(statearr_18083[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17805__auto__);

(statearr_18083[(1)] = (1));

return statearr_18083;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17805__auto____1 = (function (state_18080){
while(true){
var ret_value__17806__auto__ = (function (){try{while(true){
var result__17807__auto__ = switch__17804__auto__(state_18080);
if(cljs.core.keyword_identical_QMARK_(result__17807__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17807__auto__;
}
break;
}
}catch (e18084){if((e18084 instanceof Object)){
var ex__17808__auto__ = e18084;
var statearr_18085_18245 = state_18080;
(statearr_18085_18245[(5)] = ex__17808__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18080);

return cljs.core.cst$kw$recur;
} else {
throw e18084;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17806__auto__,cljs.core.cst$kw$recur)){
var G__18246 = state_18080;
state_18080 = G__18246;
continue;
} else {
return ret_value__17806__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17805__auto__ = function(state_18080){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17805__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17805__auto____1.call(this,state_18080);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__17805__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17805__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17805__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17805__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17805__auto__;
})()
;})(switch__17804__auto__,c__17906__auto___18244,res,vec__18073,v,p,job,jobs,results))
})();
var state__17908__auto__ = (function (){var statearr_18086 = (f__17907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17907__auto__.cljs$core$IFn$_invoke$arity$0() : f__17907__auto__.call(null));
(statearr_18086[(6)] = c__17906__auto___18244);

return statearr_18086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17908__auto__);
});})(c__17906__auto___18244,res,vec__18073,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__18087){
var vec__18088 = p__18087;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18088,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18088,(1),null);
var job = vec__18088;
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
var n__9911__auto___18247 = n;
var __18248 = (0);
while(true){
if((__18248 < n__9911__auto___18247)){
var G__18091_18249 = type;
var G__18091_18250__$1 = (((G__18091_18249 instanceof cljs.core.Keyword))?G__18091_18249.fqn:null);
switch (G__18091_18250__$1) {
case "compute":
var c__17906__auto___18252 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18248,c__17906__auto___18252,G__18091_18249,G__18091_18250__$1,n__9911__auto___18247,jobs,results,process,async){
return (function (){
var f__17907__auto__ = (function (){var switch__17804__auto__ = ((function (__18248,c__17906__auto___18252,G__18091_18249,G__18091_18250__$1,n__9911__auto___18247,jobs,results,process,async){
return (function (state_18104){
var state_val_18105 = (state_18104[(1)]);
if((state_val_18105 === (1))){
var state_18104__$1 = state_18104;
var statearr_18106_18253 = state_18104__$1;
(statearr_18106_18253[(2)] = null);

(statearr_18106_18253[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18105 === (2))){
var state_18104__$1 = state_18104;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18104__$1,(4),jobs);
} else {
if((state_val_18105 === (3))){
var inst_18102 = (state_18104[(2)]);
var state_18104__$1 = state_18104;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18104__$1,inst_18102);
} else {
if((state_val_18105 === (4))){
var inst_18094 = (state_18104[(2)]);
var inst_18095 = process(inst_18094);
var state_18104__$1 = state_18104;
if(cljs.core.truth_(inst_18095)){
var statearr_18107_18254 = state_18104__$1;
(statearr_18107_18254[(1)] = (5));

} else {
var statearr_18108_18255 = state_18104__$1;
(statearr_18108_18255[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18105 === (5))){
var state_18104__$1 = state_18104;
var statearr_18109_18256 = state_18104__$1;
(statearr_18109_18256[(2)] = null);

(statearr_18109_18256[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18105 === (6))){
var state_18104__$1 = state_18104;
var statearr_18110_18257 = state_18104__$1;
(statearr_18110_18257[(2)] = null);

(statearr_18110_18257[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18105 === (7))){
var inst_18100 = (state_18104[(2)]);
var state_18104__$1 = state_18104;
var statearr_18111_18258 = state_18104__$1;
(statearr_18111_18258[(2)] = inst_18100);

(statearr_18111_18258[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__18248,c__17906__auto___18252,G__18091_18249,G__18091_18250__$1,n__9911__auto___18247,jobs,results,process,async))
;
return ((function (__18248,switch__17804__auto__,c__17906__auto___18252,G__18091_18249,G__18091_18250__$1,n__9911__auto___18247,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17805__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17805__auto____0 = (function (){
var statearr_18112 = [null,null,null,null,null,null,null];
(statearr_18112[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17805__auto__);

(statearr_18112[(1)] = (1));

return statearr_18112;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17805__auto____1 = (function (state_18104){
while(true){
var ret_value__17806__auto__ = (function (){try{while(true){
var result__17807__auto__ = switch__17804__auto__(state_18104);
if(cljs.core.keyword_identical_QMARK_(result__17807__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17807__auto__;
}
break;
}
}catch (e18113){if((e18113 instanceof Object)){
var ex__17808__auto__ = e18113;
var statearr_18114_18259 = state_18104;
(statearr_18114_18259[(5)] = ex__17808__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18104);

return cljs.core.cst$kw$recur;
} else {
throw e18113;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17806__auto__,cljs.core.cst$kw$recur)){
var G__18260 = state_18104;
state_18104 = G__18260;
continue;
} else {
return ret_value__17806__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17805__auto__ = function(state_18104){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17805__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17805__auto____1.call(this,state_18104);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__17805__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17805__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17805__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17805__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17805__auto__;
})()
;})(__18248,switch__17804__auto__,c__17906__auto___18252,G__18091_18249,G__18091_18250__$1,n__9911__auto___18247,jobs,results,process,async))
})();
var state__17908__auto__ = (function (){var statearr_18115 = (f__17907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17907__auto__.cljs$core$IFn$_invoke$arity$0() : f__17907__auto__.call(null));
(statearr_18115[(6)] = c__17906__auto___18252);

return statearr_18115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17908__auto__);
});})(__18248,c__17906__auto___18252,G__18091_18249,G__18091_18250__$1,n__9911__auto___18247,jobs,results,process,async))
);


break;
case "async":
var c__17906__auto___18261 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18248,c__17906__auto___18261,G__18091_18249,G__18091_18250__$1,n__9911__auto___18247,jobs,results,process,async){
return (function (){
var f__17907__auto__ = (function (){var switch__17804__auto__ = ((function (__18248,c__17906__auto___18261,G__18091_18249,G__18091_18250__$1,n__9911__auto___18247,jobs,results,process,async){
return (function (state_18128){
var state_val_18129 = (state_18128[(1)]);
if((state_val_18129 === (1))){
var state_18128__$1 = state_18128;
var statearr_18130_18262 = state_18128__$1;
(statearr_18130_18262[(2)] = null);

(statearr_18130_18262[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18129 === (2))){
var state_18128__$1 = state_18128;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18128__$1,(4),jobs);
} else {
if((state_val_18129 === (3))){
var inst_18126 = (state_18128[(2)]);
var state_18128__$1 = state_18128;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18128__$1,inst_18126);
} else {
if((state_val_18129 === (4))){
var inst_18118 = (state_18128[(2)]);
var inst_18119 = async(inst_18118);
var state_18128__$1 = state_18128;
if(cljs.core.truth_(inst_18119)){
var statearr_18131_18263 = state_18128__$1;
(statearr_18131_18263[(1)] = (5));

} else {
var statearr_18132_18264 = state_18128__$1;
(statearr_18132_18264[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18129 === (5))){
var state_18128__$1 = state_18128;
var statearr_18133_18265 = state_18128__$1;
(statearr_18133_18265[(2)] = null);

(statearr_18133_18265[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18129 === (6))){
var state_18128__$1 = state_18128;
var statearr_18134_18266 = state_18128__$1;
(statearr_18134_18266[(2)] = null);

(statearr_18134_18266[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18129 === (7))){
var inst_18124 = (state_18128[(2)]);
var state_18128__$1 = state_18128;
var statearr_18135_18267 = state_18128__$1;
(statearr_18135_18267[(2)] = inst_18124);

(statearr_18135_18267[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__18248,c__17906__auto___18261,G__18091_18249,G__18091_18250__$1,n__9911__auto___18247,jobs,results,process,async))
;
return ((function (__18248,switch__17804__auto__,c__17906__auto___18261,G__18091_18249,G__18091_18250__$1,n__9911__auto___18247,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17805__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17805__auto____0 = (function (){
var statearr_18136 = [null,null,null,null,null,null,null];
(statearr_18136[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17805__auto__);

(statearr_18136[(1)] = (1));

return statearr_18136;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17805__auto____1 = (function (state_18128){
while(true){
var ret_value__17806__auto__ = (function (){try{while(true){
var result__17807__auto__ = switch__17804__auto__(state_18128);
if(cljs.core.keyword_identical_QMARK_(result__17807__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17807__auto__;
}
break;
}
}catch (e18137){if((e18137 instanceof Object)){
var ex__17808__auto__ = e18137;
var statearr_18138_18268 = state_18128;
(statearr_18138_18268[(5)] = ex__17808__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18128);

return cljs.core.cst$kw$recur;
} else {
throw e18137;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17806__auto__,cljs.core.cst$kw$recur)){
var G__18269 = state_18128;
state_18128 = G__18269;
continue;
} else {
return ret_value__17806__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17805__auto__ = function(state_18128){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17805__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17805__auto____1.call(this,state_18128);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__17805__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17805__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17805__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17805__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17805__auto__;
})()
;})(__18248,switch__17804__auto__,c__17906__auto___18261,G__18091_18249,G__18091_18250__$1,n__9911__auto___18247,jobs,results,process,async))
})();
var state__17908__auto__ = (function (){var statearr_18139 = (f__17907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17907__auto__.cljs$core$IFn$_invoke$arity$0() : f__17907__auto__.call(null));
(statearr_18139[(6)] = c__17906__auto___18261);

return statearr_18139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17908__auto__);
});})(__18248,c__17906__auto___18261,G__18091_18249,G__18091_18250__$1,n__9911__auto___18247,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18091_18250__$1)].join('')));

}

var G__18270 = (__18248 + (1));
__18248 = G__18270;
continue;
} else {
}
break;
}

var c__17906__auto___18271 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17906__auto___18271,jobs,results,process,async){
return (function (){
var f__17907__auto__ = (function (){var switch__17804__auto__ = ((function (c__17906__auto___18271,jobs,results,process,async){
return (function (state_18161){
var state_val_18162 = (state_18161[(1)]);
if((state_val_18162 === (1))){
var state_18161__$1 = state_18161;
var statearr_18163_18272 = state_18161__$1;
(statearr_18163_18272[(2)] = null);

(statearr_18163_18272[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18162 === (2))){
var state_18161__$1 = state_18161;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18161__$1,(4),from);
} else {
if((state_val_18162 === (3))){
var inst_18159 = (state_18161[(2)]);
var state_18161__$1 = state_18161;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18161__$1,inst_18159);
} else {
if((state_val_18162 === (4))){
var inst_18142 = (state_18161[(7)]);
var inst_18142__$1 = (state_18161[(2)]);
var inst_18143 = (inst_18142__$1 == null);
var state_18161__$1 = (function (){var statearr_18164 = state_18161;
(statearr_18164[(7)] = inst_18142__$1);

return statearr_18164;
})();
if(cljs.core.truth_(inst_18143)){
var statearr_18165_18273 = state_18161__$1;
(statearr_18165_18273[(1)] = (5));

} else {
var statearr_18166_18274 = state_18161__$1;
(statearr_18166_18274[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18162 === (5))){
var inst_18145 = cljs.core.async.close_BANG_(jobs);
var state_18161__$1 = state_18161;
var statearr_18167_18275 = state_18161__$1;
(statearr_18167_18275[(2)] = inst_18145);

(statearr_18167_18275[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18162 === (6))){
var inst_18142 = (state_18161[(7)]);
var inst_18147 = (state_18161[(8)]);
var inst_18147__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_18148 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18149 = [inst_18142,inst_18147__$1];
var inst_18150 = (new cljs.core.PersistentVector(null,2,(5),inst_18148,inst_18149,null));
var state_18161__$1 = (function (){var statearr_18168 = state_18161;
(statearr_18168[(8)] = inst_18147__$1);

return statearr_18168;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18161__$1,(8),jobs,inst_18150);
} else {
if((state_val_18162 === (7))){
var inst_18157 = (state_18161[(2)]);
var state_18161__$1 = state_18161;
var statearr_18169_18276 = state_18161__$1;
(statearr_18169_18276[(2)] = inst_18157);

(statearr_18169_18276[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18162 === (8))){
var inst_18147 = (state_18161[(8)]);
var inst_18152 = (state_18161[(2)]);
var state_18161__$1 = (function (){var statearr_18170 = state_18161;
(statearr_18170[(9)] = inst_18152);

return statearr_18170;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18161__$1,(9),results,inst_18147);
} else {
if((state_val_18162 === (9))){
var inst_18154 = (state_18161[(2)]);
var state_18161__$1 = (function (){var statearr_18171 = state_18161;
(statearr_18171[(10)] = inst_18154);

return statearr_18171;
})();
var statearr_18172_18277 = state_18161__$1;
(statearr_18172_18277[(2)] = null);

(statearr_18172_18277[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__17906__auto___18271,jobs,results,process,async))
;
return ((function (switch__17804__auto__,c__17906__auto___18271,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17805__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17805__auto____0 = (function (){
var statearr_18173 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18173[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17805__auto__);

(statearr_18173[(1)] = (1));

return statearr_18173;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17805__auto____1 = (function (state_18161){
while(true){
var ret_value__17806__auto__ = (function (){try{while(true){
var result__17807__auto__ = switch__17804__auto__(state_18161);
if(cljs.core.keyword_identical_QMARK_(result__17807__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17807__auto__;
}
break;
}
}catch (e18174){if((e18174 instanceof Object)){
var ex__17808__auto__ = e18174;
var statearr_18175_18278 = state_18161;
(statearr_18175_18278[(5)] = ex__17808__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18161);

return cljs.core.cst$kw$recur;
} else {
throw e18174;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17806__auto__,cljs.core.cst$kw$recur)){
var G__18279 = state_18161;
state_18161 = G__18279;
continue;
} else {
return ret_value__17806__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17805__auto__ = function(state_18161){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17805__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17805__auto____1.call(this,state_18161);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__17805__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17805__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17805__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17805__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17805__auto__;
})()
;})(switch__17804__auto__,c__17906__auto___18271,jobs,results,process,async))
})();
var state__17908__auto__ = (function (){var statearr_18176 = (f__17907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17907__auto__.cljs$core$IFn$_invoke$arity$0() : f__17907__auto__.call(null));
(statearr_18176[(6)] = c__17906__auto___18271);

return statearr_18176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17908__auto__);
});})(c__17906__auto___18271,jobs,results,process,async))
);


var c__17906__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17906__auto__,jobs,results,process,async){
return (function (){
var f__17907__auto__ = (function (){var switch__17804__auto__ = ((function (c__17906__auto__,jobs,results,process,async){
return (function (state_18214){
var state_val_18215 = (state_18214[(1)]);
if((state_val_18215 === (7))){
var inst_18210 = (state_18214[(2)]);
var state_18214__$1 = state_18214;
var statearr_18216_18280 = state_18214__$1;
(statearr_18216_18280[(2)] = inst_18210);

(statearr_18216_18280[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18215 === (20))){
var state_18214__$1 = state_18214;
var statearr_18217_18281 = state_18214__$1;
(statearr_18217_18281[(2)] = null);

(statearr_18217_18281[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18215 === (1))){
var state_18214__$1 = state_18214;
var statearr_18218_18282 = state_18214__$1;
(statearr_18218_18282[(2)] = null);

(statearr_18218_18282[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18215 === (4))){
var inst_18179 = (state_18214[(7)]);
var inst_18179__$1 = (state_18214[(2)]);
var inst_18180 = (inst_18179__$1 == null);
var state_18214__$1 = (function (){var statearr_18219 = state_18214;
(statearr_18219[(7)] = inst_18179__$1);

return statearr_18219;
})();
if(cljs.core.truth_(inst_18180)){
var statearr_18220_18283 = state_18214__$1;
(statearr_18220_18283[(1)] = (5));

} else {
var statearr_18221_18284 = state_18214__$1;
(statearr_18221_18284[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18215 === (15))){
var inst_18192 = (state_18214[(8)]);
var state_18214__$1 = state_18214;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18214__$1,(18),to,inst_18192);
} else {
if((state_val_18215 === (21))){
var inst_18205 = (state_18214[(2)]);
var state_18214__$1 = state_18214;
var statearr_18222_18285 = state_18214__$1;
(statearr_18222_18285[(2)] = inst_18205);

(statearr_18222_18285[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18215 === (13))){
var inst_18207 = (state_18214[(2)]);
var state_18214__$1 = (function (){var statearr_18223 = state_18214;
(statearr_18223[(9)] = inst_18207);

return statearr_18223;
})();
var statearr_18224_18286 = state_18214__$1;
(statearr_18224_18286[(2)] = null);

(statearr_18224_18286[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18215 === (6))){
var inst_18179 = (state_18214[(7)]);
var state_18214__$1 = state_18214;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18214__$1,(11),inst_18179);
} else {
if((state_val_18215 === (17))){
var inst_18200 = (state_18214[(2)]);
var state_18214__$1 = state_18214;
if(cljs.core.truth_(inst_18200)){
var statearr_18225_18287 = state_18214__$1;
(statearr_18225_18287[(1)] = (19));

} else {
var statearr_18226_18288 = state_18214__$1;
(statearr_18226_18288[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18215 === (3))){
var inst_18212 = (state_18214[(2)]);
var state_18214__$1 = state_18214;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18214__$1,inst_18212);
} else {
if((state_val_18215 === (12))){
var inst_18189 = (state_18214[(10)]);
var state_18214__$1 = state_18214;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18214__$1,(14),inst_18189);
} else {
if((state_val_18215 === (2))){
var state_18214__$1 = state_18214;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18214__$1,(4),results);
} else {
if((state_val_18215 === (19))){
var state_18214__$1 = state_18214;
var statearr_18227_18289 = state_18214__$1;
(statearr_18227_18289[(2)] = null);

(statearr_18227_18289[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18215 === (11))){
var inst_18189 = (state_18214[(2)]);
var state_18214__$1 = (function (){var statearr_18228 = state_18214;
(statearr_18228[(10)] = inst_18189);

return statearr_18228;
})();
var statearr_18229_18290 = state_18214__$1;
(statearr_18229_18290[(2)] = null);

(statearr_18229_18290[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18215 === (9))){
var state_18214__$1 = state_18214;
var statearr_18230_18291 = state_18214__$1;
(statearr_18230_18291[(2)] = null);

(statearr_18230_18291[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18215 === (5))){
var state_18214__$1 = state_18214;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18231_18292 = state_18214__$1;
(statearr_18231_18292[(1)] = (8));

} else {
var statearr_18232_18293 = state_18214__$1;
(statearr_18232_18293[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18215 === (14))){
var inst_18194 = (state_18214[(11)]);
var inst_18192 = (state_18214[(8)]);
var inst_18192__$1 = (state_18214[(2)]);
var inst_18193 = (inst_18192__$1 == null);
var inst_18194__$1 = cljs.core.not(inst_18193);
var state_18214__$1 = (function (){var statearr_18233 = state_18214;
(statearr_18233[(11)] = inst_18194__$1);

(statearr_18233[(8)] = inst_18192__$1);

return statearr_18233;
})();
if(inst_18194__$1){
var statearr_18234_18294 = state_18214__$1;
(statearr_18234_18294[(1)] = (15));

} else {
var statearr_18235_18295 = state_18214__$1;
(statearr_18235_18295[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18215 === (16))){
var inst_18194 = (state_18214[(11)]);
var state_18214__$1 = state_18214;
var statearr_18236_18296 = state_18214__$1;
(statearr_18236_18296[(2)] = inst_18194);

(statearr_18236_18296[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18215 === (10))){
var inst_18186 = (state_18214[(2)]);
var state_18214__$1 = state_18214;
var statearr_18237_18297 = state_18214__$1;
(statearr_18237_18297[(2)] = inst_18186);

(statearr_18237_18297[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18215 === (18))){
var inst_18197 = (state_18214[(2)]);
var state_18214__$1 = state_18214;
var statearr_18238_18298 = state_18214__$1;
(statearr_18238_18298[(2)] = inst_18197);

(statearr_18238_18298[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18215 === (8))){
var inst_18183 = cljs.core.async.close_BANG_(to);
var state_18214__$1 = state_18214;
var statearr_18239_18299 = state_18214__$1;
(statearr_18239_18299[(2)] = inst_18183);

(statearr_18239_18299[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__17906__auto__,jobs,results,process,async))
;
return ((function (switch__17804__auto__,c__17906__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17805__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17805__auto____0 = (function (){
var statearr_18240 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18240[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17805__auto__);

(statearr_18240[(1)] = (1));

return statearr_18240;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17805__auto____1 = (function (state_18214){
while(true){
var ret_value__17806__auto__ = (function (){try{while(true){
var result__17807__auto__ = switch__17804__auto__(state_18214);
if(cljs.core.keyword_identical_QMARK_(result__17807__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17807__auto__;
}
break;
}
}catch (e18241){if((e18241 instanceof Object)){
var ex__17808__auto__ = e18241;
var statearr_18242_18300 = state_18214;
(statearr_18242_18300[(5)] = ex__17808__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18214);

return cljs.core.cst$kw$recur;
} else {
throw e18241;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17806__auto__,cljs.core.cst$kw$recur)){
var G__18301 = state_18214;
state_18214 = G__18301;
continue;
} else {
return ret_value__17806__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17805__auto__ = function(state_18214){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17805__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17805__auto____1.call(this,state_18214);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__17805__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17805__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17805__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17805__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17805__auto__;
})()
;})(switch__17804__auto__,c__17906__auto__,jobs,results,process,async))
})();
var state__17908__auto__ = (function (){var statearr_18243 = (f__17907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17907__auto__.cljs$core$IFn$_invoke$arity$0() : f__17907__auto__.call(null));
(statearr_18243[(6)] = c__17906__auto__);

return statearr_18243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17908__auto__);
});})(c__17906__auto__,jobs,results,process,async))
);

return c__17906__auto__;
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
var G__18303 = arguments.length;
switch (G__18303) {
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
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
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
var G__18306 = arguments.length;
switch (G__18306) {
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
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
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
var G__18309 = arguments.length;
switch (G__18309) {
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
var c__17906__auto___18358 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17906__auto___18358,tc,fc){
return (function (){
var f__17907__auto__ = (function (){var switch__17804__auto__ = ((function (c__17906__auto___18358,tc,fc){
return (function (state_18335){
var state_val_18336 = (state_18335[(1)]);
if((state_val_18336 === (7))){
var inst_18331 = (state_18335[(2)]);
var state_18335__$1 = state_18335;
var statearr_18337_18359 = state_18335__$1;
(statearr_18337_18359[(2)] = inst_18331);

(statearr_18337_18359[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18336 === (1))){
var state_18335__$1 = state_18335;
var statearr_18338_18360 = state_18335__$1;
(statearr_18338_18360[(2)] = null);

(statearr_18338_18360[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18336 === (4))){
var inst_18312 = (state_18335[(7)]);
var inst_18312__$1 = (state_18335[(2)]);
var inst_18313 = (inst_18312__$1 == null);
var state_18335__$1 = (function (){var statearr_18339 = state_18335;
(statearr_18339[(7)] = inst_18312__$1);

return statearr_18339;
})();
if(cljs.core.truth_(inst_18313)){
var statearr_18340_18361 = state_18335__$1;
(statearr_18340_18361[(1)] = (5));

} else {
var statearr_18341_18362 = state_18335__$1;
(statearr_18341_18362[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18336 === (13))){
var state_18335__$1 = state_18335;
var statearr_18342_18363 = state_18335__$1;
(statearr_18342_18363[(2)] = null);

(statearr_18342_18363[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18336 === (6))){
var inst_18312 = (state_18335[(7)]);
var inst_18318 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18312) : p.call(null,inst_18312));
var state_18335__$1 = state_18335;
if(cljs.core.truth_(inst_18318)){
var statearr_18343_18364 = state_18335__$1;
(statearr_18343_18364[(1)] = (9));

} else {
var statearr_18344_18365 = state_18335__$1;
(statearr_18344_18365[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18336 === (3))){
var inst_18333 = (state_18335[(2)]);
var state_18335__$1 = state_18335;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18335__$1,inst_18333);
} else {
if((state_val_18336 === (12))){
var state_18335__$1 = state_18335;
var statearr_18345_18366 = state_18335__$1;
(statearr_18345_18366[(2)] = null);

(statearr_18345_18366[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18336 === (2))){
var state_18335__$1 = state_18335;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18335__$1,(4),ch);
} else {
if((state_val_18336 === (11))){
var inst_18312 = (state_18335[(7)]);
var inst_18322 = (state_18335[(2)]);
var state_18335__$1 = state_18335;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18335__$1,(8),inst_18322,inst_18312);
} else {
if((state_val_18336 === (9))){
var state_18335__$1 = state_18335;
var statearr_18346_18367 = state_18335__$1;
(statearr_18346_18367[(2)] = tc);

(statearr_18346_18367[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18336 === (5))){
var inst_18315 = cljs.core.async.close_BANG_(tc);
var inst_18316 = cljs.core.async.close_BANG_(fc);
var state_18335__$1 = (function (){var statearr_18347 = state_18335;
(statearr_18347[(8)] = inst_18315);

return statearr_18347;
})();
var statearr_18348_18368 = state_18335__$1;
(statearr_18348_18368[(2)] = inst_18316);

(statearr_18348_18368[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18336 === (14))){
var inst_18329 = (state_18335[(2)]);
var state_18335__$1 = state_18335;
var statearr_18349_18369 = state_18335__$1;
(statearr_18349_18369[(2)] = inst_18329);

(statearr_18349_18369[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18336 === (10))){
var state_18335__$1 = state_18335;
var statearr_18350_18370 = state_18335__$1;
(statearr_18350_18370[(2)] = fc);

(statearr_18350_18370[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18336 === (8))){
var inst_18324 = (state_18335[(2)]);
var state_18335__$1 = state_18335;
if(cljs.core.truth_(inst_18324)){
var statearr_18351_18371 = state_18335__$1;
(statearr_18351_18371[(1)] = (12));

} else {
var statearr_18352_18372 = state_18335__$1;
(statearr_18352_18372[(1)] = (13));

}

return cljs.core.cst$kw$recur;
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
});})(c__17906__auto___18358,tc,fc))
;
return ((function (switch__17804__auto__,c__17906__auto___18358,tc,fc){
return (function() {
var cljs$core$async$state_machine__17805__auto__ = null;
var cljs$core$async$state_machine__17805__auto____0 = (function (){
var statearr_18353 = [null,null,null,null,null,null,null,null,null];
(statearr_18353[(0)] = cljs$core$async$state_machine__17805__auto__);

(statearr_18353[(1)] = (1));

return statearr_18353;
});
var cljs$core$async$state_machine__17805__auto____1 = (function (state_18335){
while(true){
var ret_value__17806__auto__ = (function (){try{while(true){
var result__17807__auto__ = switch__17804__auto__(state_18335);
if(cljs.core.keyword_identical_QMARK_(result__17807__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17807__auto__;
}
break;
}
}catch (e18354){if((e18354 instanceof Object)){
var ex__17808__auto__ = e18354;
var statearr_18355_18373 = state_18335;
(statearr_18355_18373[(5)] = ex__17808__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18335);

return cljs.core.cst$kw$recur;
} else {
throw e18354;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17806__auto__,cljs.core.cst$kw$recur)){
var G__18374 = state_18335;
state_18335 = G__18374;
continue;
} else {
return ret_value__17806__auto__;
}
break;
}
});
cljs$core$async$state_machine__17805__auto__ = function(state_18335){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17805__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17805__auto____1.call(this,state_18335);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17805__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17805__auto____0;
cljs$core$async$state_machine__17805__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17805__auto____1;
return cljs$core$async$state_machine__17805__auto__;
})()
;})(switch__17804__auto__,c__17906__auto___18358,tc,fc))
})();
var state__17908__auto__ = (function (){var statearr_18356 = (f__17907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17907__auto__.cljs$core$IFn$_invoke$arity$0() : f__17907__auto__.call(null));
(statearr_18356[(6)] = c__17906__auto___18358);

return statearr_18356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17908__auto__);
});})(c__17906__auto___18358,tc,fc))
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
var c__17906__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17906__auto__){
return (function (){
var f__17907__auto__ = (function (){var switch__17804__auto__ = ((function (c__17906__auto__){
return (function (state_18395){
var state_val_18396 = (state_18395[(1)]);
if((state_val_18396 === (7))){
var inst_18391 = (state_18395[(2)]);
var state_18395__$1 = state_18395;
var statearr_18397_18415 = state_18395__$1;
(statearr_18397_18415[(2)] = inst_18391);

(statearr_18397_18415[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18396 === (1))){
var inst_18375 = init;
var state_18395__$1 = (function (){var statearr_18398 = state_18395;
(statearr_18398[(7)] = inst_18375);

return statearr_18398;
})();
var statearr_18399_18416 = state_18395__$1;
(statearr_18399_18416[(2)] = null);

(statearr_18399_18416[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18396 === (4))){
var inst_18378 = (state_18395[(8)]);
var inst_18378__$1 = (state_18395[(2)]);
var inst_18379 = (inst_18378__$1 == null);
var state_18395__$1 = (function (){var statearr_18400 = state_18395;
(statearr_18400[(8)] = inst_18378__$1);

return statearr_18400;
})();
if(cljs.core.truth_(inst_18379)){
var statearr_18401_18417 = state_18395__$1;
(statearr_18401_18417[(1)] = (5));

} else {
var statearr_18402_18418 = state_18395__$1;
(statearr_18402_18418[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18396 === (6))){
var inst_18382 = (state_18395[(9)]);
var inst_18375 = (state_18395[(7)]);
var inst_18378 = (state_18395[(8)]);
var inst_18382__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_18375,inst_18378) : f.call(null,inst_18375,inst_18378));
var inst_18383 = cljs.core.reduced_QMARK_(inst_18382__$1);
var state_18395__$1 = (function (){var statearr_18403 = state_18395;
(statearr_18403[(9)] = inst_18382__$1);

return statearr_18403;
})();
if(inst_18383){
var statearr_18404_18419 = state_18395__$1;
(statearr_18404_18419[(1)] = (8));

} else {
var statearr_18405_18420 = state_18395__$1;
(statearr_18405_18420[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18396 === (3))){
var inst_18393 = (state_18395[(2)]);
var state_18395__$1 = state_18395;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18395__$1,inst_18393);
} else {
if((state_val_18396 === (2))){
var state_18395__$1 = state_18395;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18395__$1,(4),ch);
} else {
if((state_val_18396 === (9))){
var inst_18382 = (state_18395[(9)]);
var inst_18375 = inst_18382;
var state_18395__$1 = (function (){var statearr_18406 = state_18395;
(statearr_18406[(7)] = inst_18375);

return statearr_18406;
})();
var statearr_18407_18421 = state_18395__$1;
(statearr_18407_18421[(2)] = null);

(statearr_18407_18421[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18396 === (5))){
var inst_18375 = (state_18395[(7)]);
var state_18395__$1 = state_18395;
var statearr_18408_18422 = state_18395__$1;
(statearr_18408_18422[(2)] = inst_18375);

(statearr_18408_18422[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18396 === (10))){
var inst_18389 = (state_18395[(2)]);
var state_18395__$1 = state_18395;
var statearr_18409_18423 = state_18395__$1;
(statearr_18409_18423[(2)] = inst_18389);

(statearr_18409_18423[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18396 === (8))){
var inst_18382 = (state_18395[(9)]);
var inst_18385 = cljs.core.deref(inst_18382);
var state_18395__$1 = state_18395;
var statearr_18410_18424 = state_18395__$1;
(statearr_18410_18424[(2)] = inst_18385);

(statearr_18410_18424[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__17906__auto__))
;
return ((function (switch__17804__auto__,c__17906__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__17805__auto__ = null;
var cljs$core$async$reduce_$_state_machine__17805__auto____0 = (function (){
var statearr_18411 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18411[(0)] = cljs$core$async$reduce_$_state_machine__17805__auto__);

(statearr_18411[(1)] = (1));

return statearr_18411;
});
var cljs$core$async$reduce_$_state_machine__17805__auto____1 = (function (state_18395){
while(true){
var ret_value__17806__auto__ = (function (){try{while(true){
var result__17807__auto__ = switch__17804__auto__(state_18395);
if(cljs.core.keyword_identical_QMARK_(result__17807__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17807__auto__;
}
break;
}
}catch (e18412){if((e18412 instanceof Object)){
var ex__17808__auto__ = e18412;
var statearr_18413_18425 = state_18395;
(statearr_18413_18425[(5)] = ex__17808__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18395);

return cljs.core.cst$kw$recur;
} else {
throw e18412;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17806__auto__,cljs.core.cst$kw$recur)){
var G__18426 = state_18395;
state_18395 = G__18426;
continue;
} else {
return ret_value__17806__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__17805__auto__ = function(state_18395){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__17805__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__17805__auto____1.call(this,state_18395);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__17805__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__17805__auto____0;
cljs$core$async$reduce_$_state_machine__17805__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__17805__auto____1;
return cljs$core$async$reduce_$_state_machine__17805__auto__;
})()
;})(switch__17804__auto__,c__17906__auto__))
})();
var state__17908__auto__ = (function (){var statearr_18414 = (f__17907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17907__auto__.cljs$core$IFn$_invoke$arity$0() : f__17907__auto__.call(null));
(statearr_18414[(6)] = c__17906__auto__);

return statearr_18414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17908__auto__);
});})(c__17906__auto__))
);

return c__17906__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__17906__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17906__auto__,f__$1){
return (function (){
var f__17907__auto__ = (function (){var switch__17804__auto__ = ((function (c__17906__auto__,f__$1){
return (function (state_18432){
var state_val_18433 = (state_18432[(1)]);
if((state_val_18433 === (1))){
var inst_18427 = cljs.core.async.reduce(f__$1,init,ch);
var state_18432__$1 = state_18432;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18432__$1,(2),inst_18427);
} else {
if((state_val_18433 === (2))){
var inst_18429 = (state_18432[(2)]);
var inst_18430 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_18429) : f__$1.call(null,inst_18429));
var state_18432__$1 = state_18432;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18432__$1,inst_18430);
} else {
return null;
}
}
});})(c__17906__auto__,f__$1))
;
return ((function (switch__17804__auto__,c__17906__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__17805__auto__ = null;
var cljs$core$async$transduce_$_state_machine__17805__auto____0 = (function (){
var statearr_18434 = [null,null,null,null,null,null,null];
(statearr_18434[(0)] = cljs$core$async$transduce_$_state_machine__17805__auto__);

(statearr_18434[(1)] = (1));

return statearr_18434;
});
var cljs$core$async$transduce_$_state_machine__17805__auto____1 = (function (state_18432){
while(true){
var ret_value__17806__auto__ = (function (){try{while(true){
var result__17807__auto__ = switch__17804__auto__(state_18432);
if(cljs.core.keyword_identical_QMARK_(result__17807__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17807__auto__;
}
break;
}
}catch (e18435){if((e18435 instanceof Object)){
var ex__17808__auto__ = e18435;
var statearr_18436_18438 = state_18432;
(statearr_18436_18438[(5)] = ex__17808__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18432);

return cljs.core.cst$kw$recur;
} else {
throw e18435;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17806__auto__,cljs.core.cst$kw$recur)){
var G__18439 = state_18432;
state_18432 = G__18439;
continue;
} else {
return ret_value__17806__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__17805__auto__ = function(state_18432){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__17805__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__17805__auto____1.call(this,state_18432);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__17805__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__17805__auto____0;
cljs$core$async$transduce_$_state_machine__17805__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__17805__auto____1;
return cljs$core$async$transduce_$_state_machine__17805__auto__;
})()
;})(switch__17804__auto__,c__17906__auto__,f__$1))
})();
var state__17908__auto__ = (function (){var statearr_18437 = (f__17907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17907__auto__.cljs$core$IFn$_invoke$arity$0() : f__17907__auto__.call(null));
(statearr_18437[(6)] = c__17906__auto__);

return statearr_18437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17908__auto__);
});})(c__17906__auto__,f__$1))
);

return c__17906__auto__;
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
var G__18441 = arguments.length;
switch (G__18441) {
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
var c__17906__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17906__auto__){
return (function (){
var f__17907__auto__ = (function (){var switch__17804__auto__ = ((function (c__17906__auto__){
return (function (state_18466){
var state_val_18467 = (state_18466[(1)]);
if((state_val_18467 === (7))){
var inst_18448 = (state_18466[(2)]);
var state_18466__$1 = state_18466;
var statearr_18468_18489 = state_18466__$1;
(statearr_18468_18489[(2)] = inst_18448);

(statearr_18468_18489[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18467 === (1))){
var inst_18442 = cljs.core.seq(coll);
var inst_18443 = inst_18442;
var state_18466__$1 = (function (){var statearr_18469 = state_18466;
(statearr_18469[(7)] = inst_18443);

return statearr_18469;
})();
var statearr_18470_18490 = state_18466__$1;
(statearr_18470_18490[(2)] = null);

(statearr_18470_18490[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18467 === (4))){
var inst_18443 = (state_18466[(7)]);
var inst_18446 = cljs.core.first(inst_18443);
var state_18466__$1 = state_18466;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18466__$1,(7),ch,inst_18446);
} else {
if((state_val_18467 === (13))){
var inst_18460 = (state_18466[(2)]);
var state_18466__$1 = state_18466;
var statearr_18471_18491 = state_18466__$1;
(statearr_18471_18491[(2)] = inst_18460);

(statearr_18471_18491[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18467 === (6))){
var inst_18451 = (state_18466[(2)]);
var state_18466__$1 = state_18466;
if(cljs.core.truth_(inst_18451)){
var statearr_18472_18492 = state_18466__$1;
(statearr_18472_18492[(1)] = (8));

} else {
var statearr_18473_18493 = state_18466__$1;
(statearr_18473_18493[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18467 === (3))){
var inst_18464 = (state_18466[(2)]);
var state_18466__$1 = state_18466;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18466__$1,inst_18464);
} else {
if((state_val_18467 === (12))){
var state_18466__$1 = state_18466;
var statearr_18474_18494 = state_18466__$1;
(statearr_18474_18494[(2)] = null);

(statearr_18474_18494[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18467 === (2))){
var inst_18443 = (state_18466[(7)]);
var state_18466__$1 = state_18466;
if(cljs.core.truth_(inst_18443)){
var statearr_18475_18495 = state_18466__$1;
(statearr_18475_18495[(1)] = (4));

} else {
var statearr_18476_18496 = state_18466__$1;
(statearr_18476_18496[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18467 === (11))){
var inst_18457 = cljs.core.async.close_BANG_(ch);
var state_18466__$1 = state_18466;
var statearr_18477_18497 = state_18466__$1;
(statearr_18477_18497[(2)] = inst_18457);

(statearr_18477_18497[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18467 === (9))){
var state_18466__$1 = state_18466;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18478_18498 = state_18466__$1;
(statearr_18478_18498[(1)] = (11));

} else {
var statearr_18479_18499 = state_18466__$1;
(statearr_18479_18499[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18467 === (5))){
var inst_18443 = (state_18466[(7)]);
var state_18466__$1 = state_18466;
var statearr_18480_18500 = state_18466__$1;
(statearr_18480_18500[(2)] = inst_18443);

(statearr_18480_18500[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18467 === (10))){
var inst_18462 = (state_18466[(2)]);
var state_18466__$1 = state_18466;
var statearr_18481_18501 = state_18466__$1;
(statearr_18481_18501[(2)] = inst_18462);

(statearr_18481_18501[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18467 === (8))){
var inst_18443 = (state_18466[(7)]);
var inst_18453 = cljs.core.next(inst_18443);
var inst_18443__$1 = inst_18453;
var state_18466__$1 = (function (){var statearr_18482 = state_18466;
(statearr_18482[(7)] = inst_18443__$1);

return statearr_18482;
})();
var statearr_18483_18502 = state_18466__$1;
(statearr_18483_18502[(2)] = null);

(statearr_18483_18502[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__17906__auto__))
;
return ((function (switch__17804__auto__,c__17906__auto__){
return (function() {
var cljs$core$async$state_machine__17805__auto__ = null;
var cljs$core$async$state_machine__17805__auto____0 = (function (){
var statearr_18484 = [null,null,null,null,null,null,null,null];
(statearr_18484[(0)] = cljs$core$async$state_machine__17805__auto__);

(statearr_18484[(1)] = (1));

return statearr_18484;
});
var cljs$core$async$state_machine__17805__auto____1 = (function (state_18466){
while(true){
var ret_value__17806__auto__ = (function (){try{while(true){
var result__17807__auto__ = switch__17804__auto__(state_18466);
if(cljs.core.keyword_identical_QMARK_(result__17807__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17807__auto__;
}
break;
}
}catch (e18485){if((e18485 instanceof Object)){
var ex__17808__auto__ = e18485;
var statearr_18486_18503 = state_18466;
(statearr_18486_18503[(5)] = ex__17808__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18466);

return cljs.core.cst$kw$recur;
} else {
throw e18485;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17806__auto__,cljs.core.cst$kw$recur)){
var G__18504 = state_18466;
state_18466 = G__18504;
continue;
} else {
return ret_value__17806__auto__;
}
break;
}
});
cljs$core$async$state_machine__17805__auto__ = function(state_18466){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17805__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17805__auto____1.call(this,state_18466);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17805__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17805__auto____0;
cljs$core$async$state_machine__17805__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17805__auto____1;
return cljs$core$async$state_machine__17805__auto__;
})()
;})(switch__17804__auto__,c__17906__auto__))
})();
var state__17908__auto__ = (function (){var statearr_18487 = (f__17907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17907__auto__.cljs$core$IFn$_invoke$arity$0() : f__17907__auto__.call(null));
(statearr_18487[(6)] = c__17906__auto__);

return statearr_18487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17908__auto__);
});})(c__17906__auto__))
);

return c__17906__auto__;
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
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__9599__auto__ = (((_ == null))?null:_);
var m__9600__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__9599__auto__)]);
if(!((m__9600__auto__ == null))){
return (m__9600__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9600__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__9600__auto__.call(null,_));
} else {
var m__9600__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__9600__auto____$1 == null))){
return (m__9600__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9600__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__9600__auto____$1.call(null,_));
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
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__9599__auto__ = (((m == null))?null:m);
var m__9600__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__9599__auto__)]);
if(!((m__9600__auto__ == null))){
return (m__9600__auto__.cljs$core$IFn$_invoke$arity$3 ? m__9600__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__9600__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__9600__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__9600__auto____$1 == null))){
return (m__9600__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__9600__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__9600__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__9599__auto__ = (((m == null))?null:m);
var m__9600__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__9599__auto__)]);
if(!((m__9600__auto__ == null))){
return (m__9600__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9600__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__9600__auto__.call(null,m,ch));
} else {
var m__9600__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__9600__auto____$1 == null))){
return (m__9600__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9600__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__9600__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__9599__auto__ = (((m == null))?null:m);
var m__9600__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__9599__auto__)]);
if(!((m__9600__auto__ == null))){
return (m__9600__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9600__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__9600__auto__.call(null,m));
} else {
var m__9600__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__9600__auto____$1 == null))){
return (m__9600__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9600__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__9600__auto____$1.call(null,m));
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
if(typeof cljs.core.async.t_cljs$core$async18505 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18505 = (function (ch,cs,meta18506){
this.ch = ch;
this.cs = cs;
this.meta18506 = meta18506;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18505.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18507,meta18506__$1){
var self__ = this;
var _18507__$1 = this;
return (new cljs.core.async.t_cljs$core$async18505(self__.ch,self__.cs,meta18506__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async18505.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18507){
var self__ = this;
var _18507__$1 = this;
return self__.meta18506;
});})(cs))
;

cljs.core.async.t_cljs$core$async18505.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18505.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async18505.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18505.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18505.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18505.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18505.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta18506], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async18505.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18505.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18505";

cljs.core.async.t_cljs$core$async18505.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__9537__auto__,writer__9538__auto__,opt__9539__auto__){
return cljs.core._write(writer__9538__auto__,"cljs.core.async/t_cljs$core$async18505");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async18505 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async18505(ch__$1,cs__$1,meta18506){
return (new cljs.core.async.t_cljs$core$async18505(ch__$1,cs__$1,meta18506));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async18505(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__17906__auto___18727 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17906__auto___18727,cs,m,dchan,dctr,done){
return (function (){
var f__17907__auto__ = (function (){var switch__17804__auto__ = ((function (c__17906__auto___18727,cs,m,dchan,dctr,done){
return (function (state_18642){
var state_val_18643 = (state_18642[(1)]);
if((state_val_18643 === (7))){
var inst_18638 = (state_18642[(2)]);
var state_18642__$1 = state_18642;
var statearr_18644_18728 = state_18642__$1;
(statearr_18644_18728[(2)] = inst_18638);

(statearr_18644_18728[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18643 === (20))){
var inst_18541 = (state_18642[(7)]);
var inst_18553 = cljs.core.first(inst_18541);
var inst_18554 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18553,(0),null);
var inst_18555 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18553,(1),null);
var state_18642__$1 = (function (){var statearr_18645 = state_18642;
(statearr_18645[(8)] = inst_18554);

return statearr_18645;
})();
if(cljs.core.truth_(inst_18555)){
var statearr_18646_18729 = state_18642__$1;
(statearr_18646_18729[(1)] = (22));

} else {
var statearr_18647_18730 = state_18642__$1;
(statearr_18647_18730[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18643 === (27))){
var inst_18583 = (state_18642[(9)]);
var inst_18585 = (state_18642[(10)]);
var inst_18510 = (state_18642[(11)]);
var inst_18590 = (state_18642[(12)]);
var inst_18590__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18583,inst_18585);
var inst_18591 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18590__$1,inst_18510,done);
var state_18642__$1 = (function (){var statearr_18648 = state_18642;
(statearr_18648[(12)] = inst_18590__$1);

return statearr_18648;
})();
if(cljs.core.truth_(inst_18591)){
var statearr_18649_18731 = state_18642__$1;
(statearr_18649_18731[(1)] = (30));

} else {
var statearr_18650_18732 = state_18642__$1;
(statearr_18650_18732[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18643 === (1))){
var state_18642__$1 = state_18642;
var statearr_18651_18733 = state_18642__$1;
(statearr_18651_18733[(2)] = null);

(statearr_18651_18733[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18643 === (24))){
var inst_18541 = (state_18642[(7)]);
var inst_18560 = (state_18642[(2)]);
var inst_18561 = cljs.core.next(inst_18541);
var inst_18519 = inst_18561;
var inst_18520 = null;
var inst_18521 = (0);
var inst_18522 = (0);
var state_18642__$1 = (function (){var statearr_18652 = state_18642;
(statearr_18652[(13)] = inst_18521);

(statearr_18652[(14)] = inst_18520);

(statearr_18652[(15)] = inst_18519);

(statearr_18652[(16)] = inst_18522);

(statearr_18652[(17)] = inst_18560);

return statearr_18652;
})();
var statearr_18653_18734 = state_18642__$1;
(statearr_18653_18734[(2)] = null);

(statearr_18653_18734[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18643 === (39))){
var state_18642__$1 = state_18642;
var statearr_18657_18735 = state_18642__$1;
(statearr_18657_18735[(2)] = null);

(statearr_18657_18735[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18643 === (4))){
var inst_18510 = (state_18642[(11)]);
var inst_18510__$1 = (state_18642[(2)]);
var inst_18511 = (inst_18510__$1 == null);
var state_18642__$1 = (function (){var statearr_18658 = state_18642;
(statearr_18658[(11)] = inst_18510__$1);

return statearr_18658;
})();
if(cljs.core.truth_(inst_18511)){
var statearr_18659_18736 = state_18642__$1;
(statearr_18659_18736[(1)] = (5));

} else {
var statearr_18660_18737 = state_18642__$1;
(statearr_18660_18737[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18643 === (15))){
var inst_18521 = (state_18642[(13)]);
var inst_18520 = (state_18642[(14)]);
var inst_18519 = (state_18642[(15)]);
var inst_18522 = (state_18642[(16)]);
var inst_18537 = (state_18642[(2)]);
var inst_18538 = (inst_18522 + (1));
var tmp18654 = inst_18521;
var tmp18655 = inst_18520;
var tmp18656 = inst_18519;
var inst_18519__$1 = tmp18656;
var inst_18520__$1 = tmp18655;
var inst_18521__$1 = tmp18654;
var inst_18522__$1 = inst_18538;
var state_18642__$1 = (function (){var statearr_18661 = state_18642;
(statearr_18661[(13)] = inst_18521__$1);

(statearr_18661[(18)] = inst_18537);

(statearr_18661[(14)] = inst_18520__$1);

(statearr_18661[(15)] = inst_18519__$1);

(statearr_18661[(16)] = inst_18522__$1);

return statearr_18661;
})();
var statearr_18662_18738 = state_18642__$1;
(statearr_18662_18738[(2)] = null);

(statearr_18662_18738[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18643 === (21))){
var inst_18564 = (state_18642[(2)]);
var state_18642__$1 = state_18642;
var statearr_18666_18739 = state_18642__$1;
(statearr_18666_18739[(2)] = inst_18564);

(statearr_18666_18739[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18643 === (31))){
var inst_18590 = (state_18642[(12)]);
var inst_18594 = done(null);
var inst_18595 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18590);
var state_18642__$1 = (function (){var statearr_18667 = state_18642;
(statearr_18667[(19)] = inst_18594);

return statearr_18667;
})();
var statearr_18668_18740 = state_18642__$1;
(statearr_18668_18740[(2)] = inst_18595);

(statearr_18668_18740[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18643 === (32))){
var inst_18584 = (state_18642[(20)]);
var inst_18582 = (state_18642[(21)]);
var inst_18583 = (state_18642[(9)]);
var inst_18585 = (state_18642[(10)]);
var inst_18597 = (state_18642[(2)]);
var inst_18598 = (inst_18585 + (1));
var tmp18663 = inst_18584;
var tmp18664 = inst_18582;
var tmp18665 = inst_18583;
var inst_18582__$1 = tmp18664;
var inst_18583__$1 = tmp18665;
var inst_18584__$1 = tmp18663;
var inst_18585__$1 = inst_18598;
var state_18642__$1 = (function (){var statearr_18669 = state_18642;
(statearr_18669[(20)] = inst_18584__$1);

(statearr_18669[(21)] = inst_18582__$1);

(statearr_18669[(9)] = inst_18583__$1);

(statearr_18669[(22)] = inst_18597);

(statearr_18669[(10)] = inst_18585__$1);

return statearr_18669;
})();
var statearr_18670_18741 = state_18642__$1;
(statearr_18670_18741[(2)] = null);

(statearr_18670_18741[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18643 === (40))){
var inst_18610 = (state_18642[(23)]);
var inst_18614 = done(null);
var inst_18615 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18610);
var state_18642__$1 = (function (){var statearr_18671 = state_18642;
(statearr_18671[(24)] = inst_18614);

return statearr_18671;
})();
var statearr_18672_18742 = state_18642__$1;
(statearr_18672_18742[(2)] = inst_18615);

(statearr_18672_18742[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18643 === (33))){
var inst_18601 = (state_18642[(25)]);
var inst_18603 = cljs.core.chunked_seq_QMARK_(inst_18601);
var state_18642__$1 = state_18642;
if(inst_18603){
var statearr_18673_18743 = state_18642__$1;
(statearr_18673_18743[(1)] = (36));

} else {
var statearr_18674_18744 = state_18642__$1;
(statearr_18674_18744[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18643 === (13))){
var inst_18531 = (state_18642[(26)]);
var inst_18534 = cljs.core.async.close_BANG_(inst_18531);
var state_18642__$1 = state_18642;
var statearr_18675_18745 = state_18642__$1;
(statearr_18675_18745[(2)] = inst_18534);

(statearr_18675_18745[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18643 === (22))){
var inst_18554 = (state_18642[(8)]);
var inst_18557 = cljs.core.async.close_BANG_(inst_18554);
var state_18642__$1 = state_18642;
var statearr_18676_18746 = state_18642__$1;
(statearr_18676_18746[(2)] = inst_18557);

(statearr_18676_18746[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18643 === (36))){
var inst_18601 = (state_18642[(25)]);
var inst_18605 = cljs.core.chunk_first(inst_18601);
var inst_18606 = cljs.core.chunk_rest(inst_18601);
var inst_18607 = cljs.core.count(inst_18605);
var inst_18582 = inst_18606;
var inst_18583 = inst_18605;
var inst_18584 = inst_18607;
var inst_18585 = (0);
var state_18642__$1 = (function (){var statearr_18677 = state_18642;
(statearr_18677[(20)] = inst_18584);

(statearr_18677[(21)] = inst_18582);

(statearr_18677[(9)] = inst_18583);

(statearr_18677[(10)] = inst_18585);

return statearr_18677;
})();
var statearr_18678_18747 = state_18642__$1;
(statearr_18678_18747[(2)] = null);

(statearr_18678_18747[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18643 === (41))){
var inst_18601 = (state_18642[(25)]);
var inst_18617 = (state_18642[(2)]);
var inst_18618 = cljs.core.next(inst_18601);
var inst_18582 = inst_18618;
var inst_18583 = null;
var inst_18584 = (0);
var inst_18585 = (0);
var state_18642__$1 = (function (){var statearr_18679 = state_18642;
(statearr_18679[(20)] = inst_18584);

(statearr_18679[(21)] = inst_18582);

(statearr_18679[(9)] = inst_18583);

(statearr_18679[(10)] = inst_18585);

(statearr_18679[(27)] = inst_18617);

return statearr_18679;
})();
var statearr_18680_18748 = state_18642__$1;
(statearr_18680_18748[(2)] = null);

(statearr_18680_18748[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18643 === (43))){
var state_18642__$1 = state_18642;
var statearr_18681_18749 = state_18642__$1;
(statearr_18681_18749[(2)] = null);

(statearr_18681_18749[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18643 === (29))){
var inst_18626 = (state_18642[(2)]);
var state_18642__$1 = state_18642;
var statearr_18682_18750 = state_18642__$1;
(statearr_18682_18750[(2)] = inst_18626);

(statearr_18682_18750[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18643 === (44))){
var inst_18635 = (state_18642[(2)]);
var state_18642__$1 = (function (){var statearr_18683 = state_18642;
(statearr_18683[(28)] = inst_18635);

return statearr_18683;
})();
var statearr_18684_18751 = state_18642__$1;
(statearr_18684_18751[(2)] = null);

(statearr_18684_18751[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18643 === (6))){
var inst_18574 = (state_18642[(29)]);
var inst_18573 = cljs.core.deref(cs);
var inst_18574__$1 = cljs.core.keys(inst_18573);
var inst_18575 = cljs.core.count(inst_18574__$1);
var inst_18576 = cljs.core.reset_BANG_(dctr,inst_18575);
var inst_18581 = cljs.core.seq(inst_18574__$1);
var inst_18582 = inst_18581;
var inst_18583 = null;
var inst_18584 = (0);
var inst_18585 = (0);
var state_18642__$1 = (function (){var statearr_18685 = state_18642;
(statearr_18685[(20)] = inst_18584);

(statearr_18685[(21)] = inst_18582);

(statearr_18685[(9)] = inst_18583);

(statearr_18685[(29)] = inst_18574__$1);

(statearr_18685[(10)] = inst_18585);

(statearr_18685[(30)] = inst_18576);

return statearr_18685;
})();
var statearr_18686_18752 = state_18642__$1;
(statearr_18686_18752[(2)] = null);

(statearr_18686_18752[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18643 === (28))){
var inst_18582 = (state_18642[(21)]);
var inst_18601 = (state_18642[(25)]);
var inst_18601__$1 = cljs.core.seq(inst_18582);
var state_18642__$1 = (function (){var statearr_18687 = state_18642;
(statearr_18687[(25)] = inst_18601__$1);

return statearr_18687;
})();
if(inst_18601__$1){
var statearr_18688_18753 = state_18642__$1;
(statearr_18688_18753[(1)] = (33));

} else {
var statearr_18689_18754 = state_18642__$1;
(statearr_18689_18754[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18643 === (25))){
var inst_18584 = (state_18642[(20)]);
var inst_18585 = (state_18642[(10)]);
var inst_18587 = (inst_18585 < inst_18584);
var inst_18588 = inst_18587;
var state_18642__$1 = state_18642;
if(cljs.core.truth_(inst_18588)){
var statearr_18690_18755 = state_18642__$1;
(statearr_18690_18755[(1)] = (27));

} else {
var statearr_18691_18756 = state_18642__$1;
(statearr_18691_18756[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18643 === (34))){
var state_18642__$1 = state_18642;
var statearr_18692_18757 = state_18642__$1;
(statearr_18692_18757[(2)] = null);

(statearr_18692_18757[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18643 === (17))){
var state_18642__$1 = state_18642;
var statearr_18693_18758 = state_18642__$1;
(statearr_18693_18758[(2)] = null);

(statearr_18693_18758[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18643 === (3))){
var inst_18640 = (state_18642[(2)]);
var state_18642__$1 = state_18642;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18642__$1,inst_18640);
} else {
if((state_val_18643 === (12))){
var inst_18569 = (state_18642[(2)]);
var state_18642__$1 = state_18642;
var statearr_18694_18759 = state_18642__$1;
(statearr_18694_18759[(2)] = inst_18569);

(statearr_18694_18759[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18643 === (2))){
var state_18642__$1 = state_18642;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18642__$1,(4),ch);
} else {
if((state_val_18643 === (23))){
var state_18642__$1 = state_18642;
var statearr_18695_18760 = state_18642__$1;
(statearr_18695_18760[(2)] = null);

(statearr_18695_18760[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18643 === (35))){
var inst_18624 = (state_18642[(2)]);
var state_18642__$1 = state_18642;
var statearr_18696_18761 = state_18642__$1;
(statearr_18696_18761[(2)] = inst_18624);

(statearr_18696_18761[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18643 === (19))){
var inst_18541 = (state_18642[(7)]);
var inst_18545 = cljs.core.chunk_first(inst_18541);
var inst_18546 = cljs.core.chunk_rest(inst_18541);
var inst_18547 = cljs.core.count(inst_18545);
var inst_18519 = inst_18546;
var inst_18520 = inst_18545;
var inst_18521 = inst_18547;
var inst_18522 = (0);
var state_18642__$1 = (function (){var statearr_18697 = state_18642;
(statearr_18697[(13)] = inst_18521);

(statearr_18697[(14)] = inst_18520);

(statearr_18697[(15)] = inst_18519);

(statearr_18697[(16)] = inst_18522);

return statearr_18697;
})();
var statearr_18698_18762 = state_18642__$1;
(statearr_18698_18762[(2)] = null);

(statearr_18698_18762[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18643 === (11))){
var inst_18519 = (state_18642[(15)]);
var inst_18541 = (state_18642[(7)]);
var inst_18541__$1 = cljs.core.seq(inst_18519);
var state_18642__$1 = (function (){var statearr_18699 = state_18642;
(statearr_18699[(7)] = inst_18541__$1);

return statearr_18699;
})();
if(inst_18541__$1){
var statearr_18700_18763 = state_18642__$1;
(statearr_18700_18763[(1)] = (16));

} else {
var statearr_18701_18764 = state_18642__$1;
(statearr_18701_18764[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18643 === (9))){
var inst_18571 = (state_18642[(2)]);
var state_18642__$1 = state_18642;
var statearr_18702_18765 = state_18642__$1;
(statearr_18702_18765[(2)] = inst_18571);

(statearr_18702_18765[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18643 === (5))){
var inst_18517 = cljs.core.deref(cs);
var inst_18518 = cljs.core.seq(inst_18517);
var inst_18519 = inst_18518;
var inst_18520 = null;
var inst_18521 = (0);
var inst_18522 = (0);
var state_18642__$1 = (function (){var statearr_18703 = state_18642;
(statearr_18703[(13)] = inst_18521);

(statearr_18703[(14)] = inst_18520);

(statearr_18703[(15)] = inst_18519);

(statearr_18703[(16)] = inst_18522);

return statearr_18703;
})();
var statearr_18704_18766 = state_18642__$1;
(statearr_18704_18766[(2)] = null);

(statearr_18704_18766[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18643 === (14))){
var state_18642__$1 = state_18642;
var statearr_18705_18767 = state_18642__$1;
(statearr_18705_18767[(2)] = null);

(statearr_18705_18767[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18643 === (45))){
var inst_18632 = (state_18642[(2)]);
var state_18642__$1 = state_18642;
var statearr_18706_18768 = state_18642__$1;
(statearr_18706_18768[(2)] = inst_18632);

(statearr_18706_18768[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18643 === (26))){
var inst_18574 = (state_18642[(29)]);
var inst_18628 = (state_18642[(2)]);
var inst_18629 = cljs.core.seq(inst_18574);
var state_18642__$1 = (function (){var statearr_18707 = state_18642;
(statearr_18707[(31)] = inst_18628);

return statearr_18707;
})();
if(inst_18629){
var statearr_18708_18769 = state_18642__$1;
(statearr_18708_18769[(1)] = (42));

} else {
var statearr_18709_18770 = state_18642__$1;
(statearr_18709_18770[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18643 === (16))){
var inst_18541 = (state_18642[(7)]);
var inst_18543 = cljs.core.chunked_seq_QMARK_(inst_18541);
var state_18642__$1 = state_18642;
if(inst_18543){
var statearr_18710_18771 = state_18642__$1;
(statearr_18710_18771[(1)] = (19));

} else {
var statearr_18711_18772 = state_18642__$1;
(statearr_18711_18772[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18643 === (38))){
var inst_18621 = (state_18642[(2)]);
var state_18642__$1 = state_18642;
var statearr_18712_18773 = state_18642__$1;
(statearr_18712_18773[(2)] = inst_18621);

(statearr_18712_18773[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18643 === (30))){
var state_18642__$1 = state_18642;
var statearr_18713_18774 = state_18642__$1;
(statearr_18713_18774[(2)] = null);

(statearr_18713_18774[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18643 === (10))){
var inst_18520 = (state_18642[(14)]);
var inst_18522 = (state_18642[(16)]);
var inst_18530 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18520,inst_18522);
var inst_18531 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18530,(0),null);
var inst_18532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18530,(1),null);
var state_18642__$1 = (function (){var statearr_18714 = state_18642;
(statearr_18714[(26)] = inst_18531);

return statearr_18714;
})();
if(cljs.core.truth_(inst_18532)){
var statearr_18715_18775 = state_18642__$1;
(statearr_18715_18775[(1)] = (13));

} else {
var statearr_18716_18776 = state_18642__$1;
(statearr_18716_18776[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18643 === (18))){
var inst_18567 = (state_18642[(2)]);
var state_18642__$1 = state_18642;
var statearr_18717_18777 = state_18642__$1;
(statearr_18717_18777[(2)] = inst_18567);

(statearr_18717_18777[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18643 === (42))){
var state_18642__$1 = state_18642;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18642__$1,(45),dchan);
} else {
if((state_val_18643 === (37))){
var inst_18610 = (state_18642[(23)]);
var inst_18601 = (state_18642[(25)]);
var inst_18510 = (state_18642[(11)]);
var inst_18610__$1 = cljs.core.first(inst_18601);
var inst_18611 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18610__$1,inst_18510,done);
var state_18642__$1 = (function (){var statearr_18718 = state_18642;
(statearr_18718[(23)] = inst_18610__$1);

return statearr_18718;
})();
if(cljs.core.truth_(inst_18611)){
var statearr_18719_18778 = state_18642__$1;
(statearr_18719_18778[(1)] = (39));

} else {
var statearr_18720_18779 = state_18642__$1;
(statearr_18720_18779[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18643 === (8))){
var inst_18521 = (state_18642[(13)]);
var inst_18522 = (state_18642[(16)]);
var inst_18524 = (inst_18522 < inst_18521);
var inst_18525 = inst_18524;
var state_18642__$1 = state_18642;
if(cljs.core.truth_(inst_18525)){
var statearr_18721_18780 = state_18642__$1;
(statearr_18721_18780[(1)] = (10));

} else {
var statearr_18722_18781 = state_18642__$1;
(statearr_18722_18781[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__17906__auto___18727,cs,m,dchan,dctr,done))
;
return ((function (switch__17804__auto__,c__17906__auto___18727,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__17805__auto__ = null;
var cljs$core$async$mult_$_state_machine__17805__auto____0 = (function (){
var statearr_18723 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18723[(0)] = cljs$core$async$mult_$_state_machine__17805__auto__);

(statearr_18723[(1)] = (1));

return statearr_18723;
});
var cljs$core$async$mult_$_state_machine__17805__auto____1 = (function (state_18642){
while(true){
var ret_value__17806__auto__ = (function (){try{while(true){
var result__17807__auto__ = switch__17804__auto__(state_18642);
if(cljs.core.keyword_identical_QMARK_(result__17807__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17807__auto__;
}
break;
}
}catch (e18724){if((e18724 instanceof Object)){
var ex__17808__auto__ = e18724;
var statearr_18725_18782 = state_18642;
(statearr_18725_18782[(5)] = ex__17808__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18642);

return cljs.core.cst$kw$recur;
} else {
throw e18724;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17806__auto__,cljs.core.cst$kw$recur)){
var G__18783 = state_18642;
state_18642 = G__18783;
continue;
} else {
return ret_value__17806__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__17805__auto__ = function(state_18642){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__17805__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__17805__auto____1.call(this,state_18642);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__17805__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__17805__auto____0;
cljs$core$async$mult_$_state_machine__17805__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__17805__auto____1;
return cljs$core$async$mult_$_state_machine__17805__auto__;
})()
;})(switch__17804__auto__,c__17906__auto___18727,cs,m,dchan,dctr,done))
})();
var state__17908__auto__ = (function (){var statearr_18726 = (f__17907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17907__auto__.cljs$core$IFn$_invoke$arity$0() : f__17907__auto__.call(null));
(statearr_18726[(6)] = c__17906__auto___18727);

return statearr_18726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17908__auto__);
});})(c__17906__auto___18727,cs,m,dchan,dctr,done))
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
var G__18785 = arguments.length;
switch (G__18785) {
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
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__9599__auto__ = (((m == null))?null:m);
var m__9600__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__9599__auto__)]);
if(!((m__9600__auto__ == null))){
return (m__9600__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9600__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__9600__auto__.call(null,m,ch));
} else {
var m__9600__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__9600__auto____$1 == null))){
return (m__9600__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9600__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__9600__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__9599__auto__ = (((m == null))?null:m);
var m__9600__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__9599__auto__)]);
if(!((m__9600__auto__ == null))){
return (m__9600__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9600__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__9600__auto__.call(null,m,ch));
} else {
var m__9600__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__9600__auto____$1 == null))){
return (m__9600__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9600__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__9600__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__9599__auto__ = (((m == null))?null:m);
var m__9600__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__9599__auto__)]);
if(!((m__9600__auto__ == null))){
return (m__9600__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9600__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__9600__auto__.call(null,m));
} else {
var m__9600__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__9600__auto____$1 == null))){
return (m__9600__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9600__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__9600__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__9599__auto__ = (((m == null))?null:m);
var m__9600__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__9599__auto__)]);
if(!((m__9600__auto__ == null))){
return (m__9600__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9600__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__9600__auto__.call(null,m,state_map));
} else {
var m__9600__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__9600__auto____$1 == null))){
return (m__9600__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9600__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__9600__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__9599__auto__ = (((m == null))?null:m);
var m__9600__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__9599__auto__)]);
if(!((m__9600__auto__ == null))){
return (m__9600__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9600__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__9600__auto__.call(null,m,mode));
} else {
var m__9600__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__9600__auto____$1 == null))){
return (m__9600__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9600__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__9600__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__10152__auto__ = [];
var len__10145__auto___18797 = arguments.length;
var i__10146__auto___18798 = (0);
while(true){
if((i__10146__auto___18798 < len__10145__auto___18797)){
args__10152__auto__.push((arguments[i__10146__auto___18798]));

var G__18799 = (i__10146__auto___18798 + (1));
i__10146__auto___18798 = G__18799;
continue;
} else {
}
break;
}

var argseq__10153__auto__ = ((((3) < args__10152__auto__.length))?(new cljs.core.IndexedSeq(args__10152__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10153__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18791){
var map__18792 = p__18791;
var map__18792__$1 = ((((!((map__18792 == null)))?((((map__18792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18792.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18792):map__18792);
var opts = map__18792__$1;
var statearr_18794_18800 = state;
(statearr_18794_18800[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__18792,map__18792__$1,opts){
return (function (val){
var statearr_18795_18801 = state;
(statearr_18795_18801[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__18792,map__18792__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_18796_18802 = state;
(statearr_18796_18802[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18787){
var G__18788 = cljs.core.first(seq18787);
var seq18787__$1 = cljs.core.next(seq18787);
var G__18789 = cljs.core.first(seq18787__$1);
var seq18787__$2 = cljs.core.next(seq18787__$1);
var G__18790 = cljs.core.first(seq18787__$2);
var seq18787__$3 = cljs.core.next(seq18787__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18788,G__18789,G__18790,seq18787__$3);
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
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute);
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
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async18803 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18803 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta18804){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta18804 = meta18804;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18803.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18805,meta18804__$1){
var self__ = this;
var _18805__$1 = this;
return (new cljs.core.async.t_cljs$core$async18803(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta18804__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18803.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18805){
var self__ = this;
var _18805__$1 = this;
return self__.meta18804;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18803.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18803.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18803.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18803.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18803.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18803.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18803.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18803.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18803.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta18804], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18803.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18803.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18803";

cljs.core.async.t_cljs$core$async18803.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__9537__auto__,writer__9538__auto__,opt__9539__auto__){
return cljs.core._write(writer__9538__auto__,"cljs.core.async/t_cljs$core$async18803");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async18803 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async18803(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta18804){
return (new cljs.core.async.t_cljs$core$async18803(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta18804));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async18803(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17906__auto___18967 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17906__auto___18967,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__17907__auto__ = (function (){var switch__17804__auto__ = ((function (c__17906__auto___18967,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18907){
var state_val_18908 = (state_18907[(1)]);
if((state_val_18908 === (7))){
var inst_18822 = (state_18907[(2)]);
var state_18907__$1 = state_18907;
var statearr_18909_18968 = state_18907__$1;
(statearr_18909_18968[(2)] = inst_18822);

(statearr_18909_18968[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18908 === (20))){
var inst_18834 = (state_18907[(7)]);
var state_18907__$1 = state_18907;
var statearr_18910_18969 = state_18907__$1;
(statearr_18910_18969[(2)] = inst_18834);

(statearr_18910_18969[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18908 === (27))){
var state_18907__$1 = state_18907;
var statearr_18911_18970 = state_18907__$1;
(statearr_18911_18970[(2)] = null);

(statearr_18911_18970[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18908 === (1))){
var inst_18809 = (state_18907[(8)]);
var inst_18809__$1 = calc_state();
var inst_18811 = (inst_18809__$1 == null);
var inst_18812 = cljs.core.not(inst_18811);
var state_18907__$1 = (function (){var statearr_18912 = state_18907;
(statearr_18912[(8)] = inst_18809__$1);

return statearr_18912;
})();
if(inst_18812){
var statearr_18913_18971 = state_18907__$1;
(statearr_18913_18971[(1)] = (2));

} else {
var statearr_18914_18972 = state_18907__$1;
(statearr_18914_18972[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18908 === (24))){
var inst_18858 = (state_18907[(9)]);
var inst_18867 = (state_18907[(10)]);
var inst_18881 = (state_18907[(11)]);
var inst_18881__$1 = (inst_18858.cljs$core$IFn$_invoke$arity$1 ? inst_18858.cljs$core$IFn$_invoke$arity$1(inst_18867) : inst_18858.call(null,inst_18867));
var state_18907__$1 = (function (){var statearr_18915 = state_18907;
(statearr_18915[(11)] = inst_18881__$1);

return statearr_18915;
})();
if(cljs.core.truth_(inst_18881__$1)){
var statearr_18916_18973 = state_18907__$1;
(statearr_18916_18973[(1)] = (29));

} else {
var statearr_18917_18974 = state_18907__$1;
(statearr_18917_18974[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18908 === (4))){
var inst_18825 = (state_18907[(2)]);
var state_18907__$1 = state_18907;
if(cljs.core.truth_(inst_18825)){
var statearr_18918_18975 = state_18907__$1;
(statearr_18918_18975[(1)] = (8));

} else {
var statearr_18919_18976 = state_18907__$1;
(statearr_18919_18976[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18908 === (15))){
var inst_18852 = (state_18907[(2)]);
var state_18907__$1 = state_18907;
if(cljs.core.truth_(inst_18852)){
var statearr_18920_18977 = state_18907__$1;
(statearr_18920_18977[(1)] = (19));

} else {
var statearr_18921_18978 = state_18907__$1;
(statearr_18921_18978[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18908 === (21))){
var inst_18857 = (state_18907[(12)]);
var inst_18857__$1 = (state_18907[(2)]);
var inst_18858 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18857__$1,cljs.core.cst$kw$solos);
var inst_18859 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18857__$1,cljs.core.cst$kw$mutes);
var inst_18860 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18857__$1,cljs.core.cst$kw$reads);
var state_18907__$1 = (function (){var statearr_18922 = state_18907;
(statearr_18922[(9)] = inst_18858);

(statearr_18922[(12)] = inst_18857__$1);

(statearr_18922[(13)] = inst_18859);

return statearr_18922;
})();
return cljs.core.async.ioc_alts_BANG_(state_18907__$1,(22),inst_18860);
} else {
if((state_val_18908 === (31))){
var inst_18889 = (state_18907[(2)]);
var state_18907__$1 = state_18907;
if(cljs.core.truth_(inst_18889)){
var statearr_18923_18979 = state_18907__$1;
(statearr_18923_18979[(1)] = (32));

} else {
var statearr_18924_18980 = state_18907__$1;
(statearr_18924_18980[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18908 === (32))){
var inst_18866 = (state_18907[(14)]);
var state_18907__$1 = state_18907;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18907__$1,(35),out,inst_18866);
} else {
if((state_val_18908 === (33))){
var inst_18857 = (state_18907[(12)]);
var inst_18834 = inst_18857;
var state_18907__$1 = (function (){var statearr_18925 = state_18907;
(statearr_18925[(7)] = inst_18834);

return statearr_18925;
})();
var statearr_18926_18981 = state_18907__$1;
(statearr_18926_18981[(2)] = null);

(statearr_18926_18981[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18908 === (13))){
var inst_18834 = (state_18907[(7)]);
var inst_18841 = inst_18834.cljs$lang$protocol_mask$partition0$;
var inst_18842 = (inst_18841 & (64));
var inst_18843 = inst_18834.cljs$core$ISeq$;
var inst_18844 = (cljs.core.PROTOCOL_SENTINEL === inst_18843);
var inst_18845 = (inst_18842) || (inst_18844);
var state_18907__$1 = state_18907;
if(cljs.core.truth_(inst_18845)){
var statearr_18927_18982 = state_18907__$1;
(statearr_18927_18982[(1)] = (16));

} else {
var statearr_18928_18983 = state_18907__$1;
(statearr_18928_18983[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18908 === (22))){
var inst_18867 = (state_18907[(10)]);
var inst_18866 = (state_18907[(14)]);
var inst_18865 = (state_18907[(2)]);
var inst_18866__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18865,(0),null);
var inst_18867__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18865,(1),null);
var inst_18868 = (inst_18866__$1 == null);
var inst_18869 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18867__$1,change);
var inst_18870 = (inst_18868) || (inst_18869);
var state_18907__$1 = (function (){var statearr_18929 = state_18907;
(statearr_18929[(10)] = inst_18867__$1);

(statearr_18929[(14)] = inst_18866__$1);

return statearr_18929;
})();
if(cljs.core.truth_(inst_18870)){
var statearr_18930_18984 = state_18907__$1;
(statearr_18930_18984[(1)] = (23));

} else {
var statearr_18931_18985 = state_18907__$1;
(statearr_18931_18985[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18908 === (36))){
var inst_18857 = (state_18907[(12)]);
var inst_18834 = inst_18857;
var state_18907__$1 = (function (){var statearr_18932 = state_18907;
(statearr_18932[(7)] = inst_18834);

return statearr_18932;
})();
var statearr_18933_18986 = state_18907__$1;
(statearr_18933_18986[(2)] = null);

(statearr_18933_18986[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18908 === (29))){
var inst_18881 = (state_18907[(11)]);
var state_18907__$1 = state_18907;
var statearr_18934_18987 = state_18907__$1;
(statearr_18934_18987[(2)] = inst_18881);

(statearr_18934_18987[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18908 === (6))){
var state_18907__$1 = state_18907;
var statearr_18935_18988 = state_18907__$1;
(statearr_18935_18988[(2)] = false);

(statearr_18935_18988[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18908 === (28))){
var inst_18877 = (state_18907[(2)]);
var inst_18878 = calc_state();
var inst_18834 = inst_18878;
var state_18907__$1 = (function (){var statearr_18936 = state_18907;
(statearr_18936[(7)] = inst_18834);

(statearr_18936[(15)] = inst_18877);

return statearr_18936;
})();
var statearr_18937_18989 = state_18907__$1;
(statearr_18937_18989[(2)] = null);

(statearr_18937_18989[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18908 === (25))){
var inst_18903 = (state_18907[(2)]);
var state_18907__$1 = state_18907;
var statearr_18938_18990 = state_18907__$1;
(statearr_18938_18990[(2)] = inst_18903);

(statearr_18938_18990[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18908 === (34))){
var inst_18901 = (state_18907[(2)]);
var state_18907__$1 = state_18907;
var statearr_18939_18991 = state_18907__$1;
(statearr_18939_18991[(2)] = inst_18901);

(statearr_18939_18991[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18908 === (17))){
var state_18907__$1 = state_18907;
var statearr_18940_18992 = state_18907__$1;
(statearr_18940_18992[(2)] = false);

(statearr_18940_18992[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18908 === (3))){
var state_18907__$1 = state_18907;
var statearr_18941_18993 = state_18907__$1;
(statearr_18941_18993[(2)] = false);

(statearr_18941_18993[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18908 === (12))){
var inst_18905 = (state_18907[(2)]);
var state_18907__$1 = state_18907;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18907__$1,inst_18905);
} else {
if((state_val_18908 === (2))){
var inst_18809 = (state_18907[(8)]);
var inst_18814 = inst_18809.cljs$lang$protocol_mask$partition0$;
var inst_18815 = (inst_18814 & (64));
var inst_18816 = inst_18809.cljs$core$ISeq$;
var inst_18817 = (cljs.core.PROTOCOL_SENTINEL === inst_18816);
var inst_18818 = (inst_18815) || (inst_18817);
var state_18907__$1 = state_18907;
if(cljs.core.truth_(inst_18818)){
var statearr_18942_18994 = state_18907__$1;
(statearr_18942_18994[(1)] = (5));

} else {
var statearr_18943_18995 = state_18907__$1;
(statearr_18943_18995[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18908 === (23))){
var inst_18866 = (state_18907[(14)]);
var inst_18872 = (inst_18866 == null);
var state_18907__$1 = state_18907;
if(cljs.core.truth_(inst_18872)){
var statearr_18944_18996 = state_18907__$1;
(statearr_18944_18996[(1)] = (26));

} else {
var statearr_18945_18997 = state_18907__$1;
(statearr_18945_18997[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18908 === (35))){
var inst_18892 = (state_18907[(2)]);
var state_18907__$1 = state_18907;
if(cljs.core.truth_(inst_18892)){
var statearr_18946_18998 = state_18907__$1;
(statearr_18946_18998[(1)] = (36));

} else {
var statearr_18947_18999 = state_18907__$1;
(statearr_18947_18999[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18908 === (19))){
var inst_18834 = (state_18907[(7)]);
var inst_18854 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_18834);
var state_18907__$1 = state_18907;
var statearr_18948_19000 = state_18907__$1;
(statearr_18948_19000[(2)] = inst_18854);

(statearr_18948_19000[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18908 === (11))){
var inst_18834 = (state_18907[(7)]);
var inst_18838 = (inst_18834 == null);
var inst_18839 = cljs.core.not(inst_18838);
var state_18907__$1 = state_18907;
if(inst_18839){
var statearr_18949_19001 = state_18907__$1;
(statearr_18949_19001[(1)] = (13));

} else {
var statearr_18950_19002 = state_18907__$1;
(statearr_18950_19002[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18908 === (9))){
var inst_18809 = (state_18907[(8)]);
var state_18907__$1 = state_18907;
var statearr_18951_19003 = state_18907__$1;
(statearr_18951_19003[(2)] = inst_18809);

(statearr_18951_19003[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18908 === (5))){
var state_18907__$1 = state_18907;
var statearr_18952_19004 = state_18907__$1;
(statearr_18952_19004[(2)] = true);

(statearr_18952_19004[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18908 === (14))){
var state_18907__$1 = state_18907;
var statearr_18953_19005 = state_18907__$1;
(statearr_18953_19005[(2)] = false);

(statearr_18953_19005[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18908 === (26))){
var inst_18867 = (state_18907[(10)]);
var inst_18874 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_18867);
var state_18907__$1 = state_18907;
var statearr_18954_19006 = state_18907__$1;
(statearr_18954_19006[(2)] = inst_18874);

(statearr_18954_19006[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18908 === (16))){
var state_18907__$1 = state_18907;
var statearr_18955_19007 = state_18907__$1;
(statearr_18955_19007[(2)] = true);

(statearr_18955_19007[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18908 === (38))){
var inst_18897 = (state_18907[(2)]);
var state_18907__$1 = state_18907;
var statearr_18956_19008 = state_18907__$1;
(statearr_18956_19008[(2)] = inst_18897);

(statearr_18956_19008[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18908 === (30))){
var inst_18858 = (state_18907[(9)]);
var inst_18859 = (state_18907[(13)]);
var inst_18867 = (state_18907[(10)]);
var inst_18884 = cljs.core.empty_QMARK_(inst_18858);
var inst_18885 = (inst_18859.cljs$core$IFn$_invoke$arity$1 ? inst_18859.cljs$core$IFn$_invoke$arity$1(inst_18867) : inst_18859.call(null,inst_18867));
var inst_18886 = cljs.core.not(inst_18885);
var inst_18887 = (inst_18884) && (inst_18886);
var state_18907__$1 = state_18907;
var statearr_18957_19009 = state_18907__$1;
(statearr_18957_19009[(2)] = inst_18887);

(statearr_18957_19009[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18908 === (10))){
var inst_18809 = (state_18907[(8)]);
var inst_18830 = (state_18907[(2)]);
var inst_18831 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18830,cljs.core.cst$kw$solos);
var inst_18832 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18830,cljs.core.cst$kw$mutes);
var inst_18833 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18830,cljs.core.cst$kw$reads);
var inst_18834 = inst_18809;
var state_18907__$1 = (function (){var statearr_18958 = state_18907;
(statearr_18958[(7)] = inst_18834);

(statearr_18958[(16)] = inst_18833);

(statearr_18958[(17)] = inst_18831);

(statearr_18958[(18)] = inst_18832);

return statearr_18958;
})();
var statearr_18959_19010 = state_18907__$1;
(statearr_18959_19010[(2)] = null);

(statearr_18959_19010[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18908 === (18))){
var inst_18849 = (state_18907[(2)]);
var state_18907__$1 = state_18907;
var statearr_18960_19011 = state_18907__$1;
(statearr_18960_19011[(2)] = inst_18849);

(statearr_18960_19011[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18908 === (37))){
var state_18907__$1 = state_18907;
var statearr_18961_19012 = state_18907__$1;
(statearr_18961_19012[(2)] = null);

(statearr_18961_19012[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18908 === (8))){
var inst_18809 = (state_18907[(8)]);
var inst_18827 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_18809);
var state_18907__$1 = state_18907;
var statearr_18962_19013 = state_18907__$1;
(statearr_18962_19013[(2)] = inst_18827);

(statearr_18962_19013[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__17906__auto___18967,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__17804__auto__,c__17906__auto___18967,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__17805__auto__ = null;
var cljs$core$async$mix_$_state_machine__17805__auto____0 = (function (){
var statearr_18963 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18963[(0)] = cljs$core$async$mix_$_state_machine__17805__auto__);

(statearr_18963[(1)] = (1));

return statearr_18963;
});
var cljs$core$async$mix_$_state_machine__17805__auto____1 = (function (state_18907){
while(true){
var ret_value__17806__auto__ = (function (){try{while(true){
var result__17807__auto__ = switch__17804__auto__(state_18907);
if(cljs.core.keyword_identical_QMARK_(result__17807__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17807__auto__;
}
break;
}
}catch (e18964){if((e18964 instanceof Object)){
var ex__17808__auto__ = e18964;
var statearr_18965_19014 = state_18907;
(statearr_18965_19014[(5)] = ex__17808__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18907);

return cljs.core.cst$kw$recur;
} else {
throw e18964;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17806__auto__,cljs.core.cst$kw$recur)){
var G__19015 = state_18907;
state_18907 = G__19015;
continue;
} else {
return ret_value__17806__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__17805__auto__ = function(state_18907){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__17805__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__17805__auto____1.call(this,state_18907);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__17805__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__17805__auto____0;
cljs$core$async$mix_$_state_machine__17805__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__17805__auto____1;
return cljs$core$async$mix_$_state_machine__17805__auto__;
})()
;})(switch__17804__auto__,c__17906__auto___18967,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__17908__auto__ = (function (){var statearr_18966 = (f__17907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17907__auto__.cljs$core$IFn$_invoke$arity$0() : f__17907__auto__.call(null));
(statearr_18966[(6)] = c__17906__auto___18967);

return statearr_18966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17908__auto__);
});})(c__17906__auto___18967,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__9599__auto__ = (((p == null))?null:p);
var m__9600__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__9599__auto__)]);
if(!((m__9600__auto__ == null))){
return (m__9600__auto__.cljs$core$IFn$_invoke$arity$4 ? m__9600__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__9600__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__9600__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__9600__auto____$1 == null))){
return (m__9600__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__9600__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__9600__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__9599__auto__ = (((p == null))?null:p);
var m__9600__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__9599__auto__)]);
if(!((m__9600__auto__ == null))){
return (m__9600__auto__.cljs$core$IFn$_invoke$arity$3 ? m__9600__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__9600__auto__.call(null,p,v,ch));
} else {
var m__9600__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__9600__auto____$1 == null))){
return (m__9600__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__9600__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__9600__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__19017 = arguments.length;
switch (G__19017) {
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
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__9599__auto__ = (((p == null))?null:p);
var m__9600__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__9599__auto__)]);
if(!((m__9600__auto__ == null))){
return (m__9600__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9600__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__9600__auto__.call(null,p));
} else {
var m__9600__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__9600__auto____$1 == null))){
return (m__9600__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9600__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__9600__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__9599__auto__ = (((p == null))?null:p);
var m__9600__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__9599__auto__)]);
if(!((m__9600__auto__ == null))){
return (m__9600__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9600__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__9600__auto__.call(null,p,v));
} else {
var m__9600__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__9600__auto____$1 == null))){
return (m__9600__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9600__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__9600__auto____$1.call(null,p,v));
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
var G__19021 = arguments.length;
switch (G__19021) {
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
var or__8866__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__8866__auto__)){
return or__8866__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__8866__auto__,mults){
return (function (p1__19019_SHARP_){
if(cljs.core.truth_((p1__19019_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__19019_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__19019_SHARP_.call(null,topic)))){
return p1__19019_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__19019_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__8866__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async19022 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19022 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19023){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19023 = meta19023;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19022.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19024,meta19023__$1){
var self__ = this;
var _19024__$1 = this;
return (new cljs.core.async.t_cljs$core$async19022(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19023__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19022.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19024){
var self__ = this;
var _19024__$1 = this;
return self__.meta19023;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19022.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19022.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19022.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19022.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19022.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19022.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19022.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19022.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta19023], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19022.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19022.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19022";

cljs.core.async.t_cljs$core$async19022.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__9537__auto__,writer__9538__auto__,opt__9539__auto__){
return cljs.core._write(writer__9538__auto__,"cljs.core.async/t_cljs$core$async19022");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async19022 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async19022(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19023){
return (new cljs.core.async.t_cljs$core$async19022(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19023));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async19022(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17906__auto___19142 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17906__auto___19142,mults,ensure_mult,p){
return (function (){
var f__17907__auto__ = (function (){var switch__17804__auto__ = ((function (c__17906__auto___19142,mults,ensure_mult,p){
return (function (state_19096){
var state_val_19097 = (state_19096[(1)]);
if((state_val_19097 === (7))){
var inst_19092 = (state_19096[(2)]);
var state_19096__$1 = state_19096;
var statearr_19098_19143 = state_19096__$1;
(statearr_19098_19143[(2)] = inst_19092);

(statearr_19098_19143[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19097 === (20))){
var state_19096__$1 = state_19096;
var statearr_19099_19144 = state_19096__$1;
(statearr_19099_19144[(2)] = null);

(statearr_19099_19144[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19097 === (1))){
var state_19096__$1 = state_19096;
var statearr_19100_19145 = state_19096__$1;
(statearr_19100_19145[(2)] = null);

(statearr_19100_19145[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19097 === (24))){
var inst_19075 = (state_19096[(7)]);
var inst_19084 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_19075);
var state_19096__$1 = state_19096;
var statearr_19101_19146 = state_19096__$1;
(statearr_19101_19146[(2)] = inst_19084);

(statearr_19101_19146[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19097 === (4))){
var inst_19027 = (state_19096[(8)]);
var inst_19027__$1 = (state_19096[(2)]);
var inst_19028 = (inst_19027__$1 == null);
var state_19096__$1 = (function (){var statearr_19102 = state_19096;
(statearr_19102[(8)] = inst_19027__$1);

return statearr_19102;
})();
if(cljs.core.truth_(inst_19028)){
var statearr_19103_19147 = state_19096__$1;
(statearr_19103_19147[(1)] = (5));

} else {
var statearr_19104_19148 = state_19096__$1;
(statearr_19104_19148[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19097 === (15))){
var inst_19069 = (state_19096[(2)]);
var state_19096__$1 = state_19096;
var statearr_19105_19149 = state_19096__$1;
(statearr_19105_19149[(2)] = inst_19069);

(statearr_19105_19149[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19097 === (21))){
var inst_19089 = (state_19096[(2)]);
var state_19096__$1 = (function (){var statearr_19106 = state_19096;
(statearr_19106[(9)] = inst_19089);

return statearr_19106;
})();
var statearr_19107_19150 = state_19096__$1;
(statearr_19107_19150[(2)] = null);

(statearr_19107_19150[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19097 === (13))){
var inst_19051 = (state_19096[(10)]);
var inst_19053 = cljs.core.chunked_seq_QMARK_(inst_19051);
var state_19096__$1 = state_19096;
if(inst_19053){
var statearr_19108_19151 = state_19096__$1;
(statearr_19108_19151[(1)] = (16));

} else {
var statearr_19109_19152 = state_19096__$1;
(statearr_19109_19152[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19097 === (22))){
var inst_19081 = (state_19096[(2)]);
var state_19096__$1 = state_19096;
if(cljs.core.truth_(inst_19081)){
var statearr_19110_19153 = state_19096__$1;
(statearr_19110_19153[(1)] = (23));

} else {
var statearr_19111_19154 = state_19096__$1;
(statearr_19111_19154[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19097 === (6))){
var inst_19077 = (state_19096[(11)]);
var inst_19075 = (state_19096[(7)]);
var inst_19027 = (state_19096[(8)]);
var inst_19075__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_19027) : topic_fn.call(null,inst_19027));
var inst_19076 = cljs.core.deref(mults);
var inst_19077__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19076,inst_19075__$1);
var state_19096__$1 = (function (){var statearr_19112 = state_19096;
(statearr_19112[(11)] = inst_19077__$1);

(statearr_19112[(7)] = inst_19075__$1);

return statearr_19112;
})();
if(cljs.core.truth_(inst_19077__$1)){
var statearr_19113_19155 = state_19096__$1;
(statearr_19113_19155[(1)] = (19));

} else {
var statearr_19114_19156 = state_19096__$1;
(statearr_19114_19156[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19097 === (25))){
var inst_19086 = (state_19096[(2)]);
var state_19096__$1 = state_19096;
var statearr_19115_19157 = state_19096__$1;
(statearr_19115_19157[(2)] = inst_19086);

(statearr_19115_19157[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19097 === (17))){
var inst_19051 = (state_19096[(10)]);
var inst_19060 = cljs.core.first(inst_19051);
var inst_19061 = cljs.core.async.muxch_STAR_(inst_19060);
var inst_19062 = cljs.core.async.close_BANG_(inst_19061);
var inst_19063 = cljs.core.next(inst_19051);
var inst_19037 = inst_19063;
var inst_19038 = null;
var inst_19039 = (0);
var inst_19040 = (0);
var state_19096__$1 = (function (){var statearr_19116 = state_19096;
(statearr_19116[(12)] = inst_19039);

(statearr_19116[(13)] = inst_19038);

(statearr_19116[(14)] = inst_19037);

(statearr_19116[(15)] = inst_19062);

(statearr_19116[(16)] = inst_19040);

return statearr_19116;
})();
var statearr_19117_19158 = state_19096__$1;
(statearr_19117_19158[(2)] = null);

(statearr_19117_19158[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19097 === (3))){
var inst_19094 = (state_19096[(2)]);
var state_19096__$1 = state_19096;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19096__$1,inst_19094);
} else {
if((state_val_19097 === (12))){
var inst_19071 = (state_19096[(2)]);
var state_19096__$1 = state_19096;
var statearr_19118_19159 = state_19096__$1;
(statearr_19118_19159[(2)] = inst_19071);

(statearr_19118_19159[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19097 === (2))){
var state_19096__$1 = state_19096;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19096__$1,(4),ch);
} else {
if((state_val_19097 === (23))){
var state_19096__$1 = state_19096;
var statearr_19119_19160 = state_19096__$1;
(statearr_19119_19160[(2)] = null);

(statearr_19119_19160[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19097 === (19))){
var inst_19077 = (state_19096[(11)]);
var inst_19027 = (state_19096[(8)]);
var inst_19079 = cljs.core.async.muxch_STAR_(inst_19077);
var state_19096__$1 = state_19096;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19096__$1,(22),inst_19079,inst_19027);
} else {
if((state_val_19097 === (11))){
var inst_19037 = (state_19096[(14)]);
var inst_19051 = (state_19096[(10)]);
var inst_19051__$1 = cljs.core.seq(inst_19037);
var state_19096__$1 = (function (){var statearr_19120 = state_19096;
(statearr_19120[(10)] = inst_19051__$1);

return statearr_19120;
})();
if(inst_19051__$1){
var statearr_19121_19161 = state_19096__$1;
(statearr_19121_19161[(1)] = (13));

} else {
var statearr_19122_19162 = state_19096__$1;
(statearr_19122_19162[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19097 === (9))){
var inst_19073 = (state_19096[(2)]);
var state_19096__$1 = state_19096;
var statearr_19123_19163 = state_19096__$1;
(statearr_19123_19163[(2)] = inst_19073);

(statearr_19123_19163[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19097 === (5))){
var inst_19034 = cljs.core.deref(mults);
var inst_19035 = cljs.core.vals(inst_19034);
var inst_19036 = cljs.core.seq(inst_19035);
var inst_19037 = inst_19036;
var inst_19038 = null;
var inst_19039 = (0);
var inst_19040 = (0);
var state_19096__$1 = (function (){var statearr_19124 = state_19096;
(statearr_19124[(12)] = inst_19039);

(statearr_19124[(13)] = inst_19038);

(statearr_19124[(14)] = inst_19037);

(statearr_19124[(16)] = inst_19040);

return statearr_19124;
})();
var statearr_19125_19164 = state_19096__$1;
(statearr_19125_19164[(2)] = null);

(statearr_19125_19164[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19097 === (14))){
var state_19096__$1 = state_19096;
var statearr_19129_19165 = state_19096__$1;
(statearr_19129_19165[(2)] = null);

(statearr_19129_19165[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19097 === (16))){
var inst_19051 = (state_19096[(10)]);
var inst_19055 = cljs.core.chunk_first(inst_19051);
var inst_19056 = cljs.core.chunk_rest(inst_19051);
var inst_19057 = cljs.core.count(inst_19055);
var inst_19037 = inst_19056;
var inst_19038 = inst_19055;
var inst_19039 = inst_19057;
var inst_19040 = (0);
var state_19096__$1 = (function (){var statearr_19130 = state_19096;
(statearr_19130[(12)] = inst_19039);

(statearr_19130[(13)] = inst_19038);

(statearr_19130[(14)] = inst_19037);

(statearr_19130[(16)] = inst_19040);

return statearr_19130;
})();
var statearr_19131_19166 = state_19096__$1;
(statearr_19131_19166[(2)] = null);

(statearr_19131_19166[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19097 === (10))){
var inst_19039 = (state_19096[(12)]);
var inst_19038 = (state_19096[(13)]);
var inst_19037 = (state_19096[(14)]);
var inst_19040 = (state_19096[(16)]);
var inst_19045 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_19038,inst_19040);
var inst_19046 = cljs.core.async.muxch_STAR_(inst_19045);
var inst_19047 = cljs.core.async.close_BANG_(inst_19046);
var inst_19048 = (inst_19040 + (1));
var tmp19126 = inst_19039;
var tmp19127 = inst_19038;
var tmp19128 = inst_19037;
var inst_19037__$1 = tmp19128;
var inst_19038__$1 = tmp19127;
var inst_19039__$1 = tmp19126;
var inst_19040__$1 = inst_19048;
var state_19096__$1 = (function (){var statearr_19132 = state_19096;
(statearr_19132[(17)] = inst_19047);

(statearr_19132[(12)] = inst_19039__$1);

(statearr_19132[(13)] = inst_19038__$1);

(statearr_19132[(14)] = inst_19037__$1);

(statearr_19132[(16)] = inst_19040__$1);

return statearr_19132;
})();
var statearr_19133_19167 = state_19096__$1;
(statearr_19133_19167[(2)] = null);

(statearr_19133_19167[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19097 === (18))){
var inst_19066 = (state_19096[(2)]);
var state_19096__$1 = state_19096;
var statearr_19134_19168 = state_19096__$1;
(statearr_19134_19168[(2)] = inst_19066);

(statearr_19134_19168[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19097 === (8))){
var inst_19039 = (state_19096[(12)]);
var inst_19040 = (state_19096[(16)]);
var inst_19042 = (inst_19040 < inst_19039);
var inst_19043 = inst_19042;
var state_19096__$1 = state_19096;
if(cljs.core.truth_(inst_19043)){
var statearr_19135_19169 = state_19096__$1;
(statearr_19135_19169[(1)] = (10));

} else {
var statearr_19136_19170 = state_19096__$1;
(statearr_19136_19170[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__17906__auto___19142,mults,ensure_mult,p))
;
return ((function (switch__17804__auto__,c__17906__auto___19142,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__17805__auto__ = null;
var cljs$core$async$state_machine__17805__auto____0 = (function (){
var statearr_19137 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19137[(0)] = cljs$core$async$state_machine__17805__auto__);

(statearr_19137[(1)] = (1));

return statearr_19137;
});
var cljs$core$async$state_machine__17805__auto____1 = (function (state_19096){
while(true){
var ret_value__17806__auto__ = (function (){try{while(true){
var result__17807__auto__ = switch__17804__auto__(state_19096);
if(cljs.core.keyword_identical_QMARK_(result__17807__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17807__auto__;
}
break;
}
}catch (e19138){if((e19138 instanceof Object)){
var ex__17808__auto__ = e19138;
var statearr_19139_19171 = state_19096;
(statearr_19139_19171[(5)] = ex__17808__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19096);

return cljs.core.cst$kw$recur;
} else {
throw e19138;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17806__auto__,cljs.core.cst$kw$recur)){
var G__19172 = state_19096;
state_19096 = G__19172;
continue;
} else {
return ret_value__17806__auto__;
}
break;
}
});
cljs$core$async$state_machine__17805__auto__ = function(state_19096){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17805__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17805__auto____1.call(this,state_19096);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17805__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17805__auto____0;
cljs$core$async$state_machine__17805__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17805__auto____1;
return cljs$core$async$state_machine__17805__auto__;
})()
;})(switch__17804__auto__,c__17906__auto___19142,mults,ensure_mult,p))
})();
var state__17908__auto__ = (function (){var statearr_19140 = (f__17907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17907__auto__.cljs$core$IFn$_invoke$arity$0() : f__17907__auto__.call(null));
(statearr_19140[(6)] = c__17906__auto___19142);

return statearr_19140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17908__auto__);
});})(c__17906__auto___19142,mults,ensure_mult,p))
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
var G__19174 = arguments.length;
switch (G__19174) {
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
var G__19177 = arguments.length;
switch (G__19177) {
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
var G__19180 = arguments.length;
switch (G__19180) {
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
var c__17906__auto___19247 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17906__auto___19247,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__17907__auto__ = (function (){var switch__17804__auto__ = ((function (c__17906__auto___19247,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19219){
var state_val_19220 = (state_19219[(1)]);
if((state_val_19220 === (7))){
var state_19219__$1 = state_19219;
var statearr_19221_19248 = state_19219__$1;
(statearr_19221_19248[(2)] = null);

(statearr_19221_19248[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19220 === (1))){
var state_19219__$1 = state_19219;
var statearr_19222_19249 = state_19219__$1;
(statearr_19222_19249[(2)] = null);

(statearr_19222_19249[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19220 === (4))){
var inst_19183 = (state_19219[(7)]);
var inst_19185 = (inst_19183 < cnt);
var state_19219__$1 = state_19219;
if(cljs.core.truth_(inst_19185)){
var statearr_19223_19250 = state_19219__$1;
(statearr_19223_19250[(1)] = (6));

} else {
var statearr_19224_19251 = state_19219__$1;
(statearr_19224_19251[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19220 === (15))){
var inst_19215 = (state_19219[(2)]);
var state_19219__$1 = state_19219;
var statearr_19225_19252 = state_19219__$1;
(statearr_19225_19252[(2)] = inst_19215);

(statearr_19225_19252[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19220 === (13))){
var inst_19208 = cljs.core.async.close_BANG_(out);
var state_19219__$1 = state_19219;
var statearr_19226_19253 = state_19219__$1;
(statearr_19226_19253[(2)] = inst_19208);

(statearr_19226_19253[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19220 === (6))){
var state_19219__$1 = state_19219;
var statearr_19227_19254 = state_19219__$1;
(statearr_19227_19254[(2)] = null);

(statearr_19227_19254[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19220 === (3))){
var inst_19217 = (state_19219[(2)]);
var state_19219__$1 = state_19219;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19219__$1,inst_19217);
} else {
if((state_val_19220 === (12))){
var inst_19205 = (state_19219[(8)]);
var inst_19205__$1 = (state_19219[(2)]);
var inst_19206 = cljs.core.some(cljs.core.nil_QMARK_,inst_19205__$1);
var state_19219__$1 = (function (){var statearr_19228 = state_19219;
(statearr_19228[(8)] = inst_19205__$1);

return statearr_19228;
})();
if(cljs.core.truth_(inst_19206)){
var statearr_19229_19255 = state_19219__$1;
(statearr_19229_19255[(1)] = (13));

} else {
var statearr_19230_19256 = state_19219__$1;
(statearr_19230_19256[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19220 === (2))){
var inst_19182 = cljs.core.reset_BANG_(dctr,cnt);
var inst_19183 = (0);
var state_19219__$1 = (function (){var statearr_19231 = state_19219;
(statearr_19231[(9)] = inst_19182);

(statearr_19231[(7)] = inst_19183);

return statearr_19231;
})();
var statearr_19232_19257 = state_19219__$1;
(statearr_19232_19257[(2)] = null);

(statearr_19232_19257[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19220 === (11))){
var inst_19183 = (state_19219[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_19219,(10),Object,null,(9));
var inst_19192 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_19183) : chs__$1.call(null,inst_19183));
var inst_19193 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_19183) : done.call(null,inst_19183));
var inst_19194 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_19192,inst_19193);
var state_19219__$1 = state_19219;
var statearr_19233_19258 = state_19219__$1;
(statearr_19233_19258[(2)] = inst_19194);


cljs.core.async.impl.ioc_helpers.process_exception(state_19219__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_19220 === (9))){
var inst_19183 = (state_19219[(7)]);
var inst_19196 = (state_19219[(2)]);
var inst_19197 = (inst_19183 + (1));
var inst_19183__$1 = inst_19197;
var state_19219__$1 = (function (){var statearr_19234 = state_19219;
(statearr_19234[(7)] = inst_19183__$1);

(statearr_19234[(10)] = inst_19196);

return statearr_19234;
})();
var statearr_19235_19259 = state_19219__$1;
(statearr_19235_19259[(2)] = null);

(statearr_19235_19259[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19220 === (5))){
var inst_19203 = (state_19219[(2)]);
var state_19219__$1 = (function (){var statearr_19236 = state_19219;
(statearr_19236[(11)] = inst_19203);

return statearr_19236;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19219__$1,(12),dchan);
} else {
if((state_val_19220 === (14))){
var inst_19205 = (state_19219[(8)]);
var inst_19210 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_19205);
var state_19219__$1 = state_19219;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19219__$1,(16),out,inst_19210);
} else {
if((state_val_19220 === (16))){
var inst_19212 = (state_19219[(2)]);
var state_19219__$1 = (function (){var statearr_19237 = state_19219;
(statearr_19237[(12)] = inst_19212);

return statearr_19237;
})();
var statearr_19238_19260 = state_19219__$1;
(statearr_19238_19260[(2)] = null);

(statearr_19238_19260[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19220 === (10))){
var inst_19187 = (state_19219[(2)]);
var inst_19188 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_19219__$1 = (function (){var statearr_19239 = state_19219;
(statearr_19239[(13)] = inst_19187);

return statearr_19239;
})();
var statearr_19240_19261 = state_19219__$1;
(statearr_19240_19261[(2)] = inst_19188);


cljs.core.async.impl.ioc_helpers.process_exception(state_19219__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_19220 === (8))){
var inst_19201 = (state_19219[(2)]);
var state_19219__$1 = state_19219;
var statearr_19241_19262 = state_19219__$1;
(statearr_19241_19262[(2)] = inst_19201);

(statearr_19241_19262[(1)] = (5));


return cljs.core.cst$kw$recur;
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
});})(c__17906__auto___19247,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__17804__auto__,c__17906__auto___19247,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__17805__auto__ = null;
var cljs$core$async$state_machine__17805__auto____0 = (function (){
var statearr_19242 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19242[(0)] = cljs$core$async$state_machine__17805__auto__);

(statearr_19242[(1)] = (1));

return statearr_19242;
});
var cljs$core$async$state_machine__17805__auto____1 = (function (state_19219){
while(true){
var ret_value__17806__auto__ = (function (){try{while(true){
var result__17807__auto__ = switch__17804__auto__(state_19219);
if(cljs.core.keyword_identical_QMARK_(result__17807__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17807__auto__;
}
break;
}
}catch (e19243){if((e19243 instanceof Object)){
var ex__17808__auto__ = e19243;
var statearr_19244_19263 = state_19219;
(statearr_19244_19263[(5)] = ex__17808__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19219);

return cljs.core.cst$kw$recur;
} else {
throw e19243;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17806__auto__,cljs.core.cst$kw$recur)){
var G__19264 = state_19219;
state_19219 = G__19264;
continue;
} else {
return ret_value__17806__auto__;
}
break;
}
});
cljs$core$async$state_machine__17805__auto__ = function(state_19219){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17805__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17805__auto____1.call(this,state_19219);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17805__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17805__auto____0;
cljs$core$async$state_machine__17805__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17805__auto____1;
return cljs$core$async$state_machine__17805__auto__;
})()
;})(switch__17804__auto__,c__17906__auto___19247,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__17908__auto__ = (function (){var statearr_19245 = (f__17907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17907__auto__.cljs$core$IFn$_invoke$arity$0() : f__17907__auto__.call(null));
(statearr_19245[(6)] = c__17906__auto___19247);

return statearr_19245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17908__auto__);
});})(c__17906__auto___19247,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__19267 = arguments.length;
switch (G__19267) {
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
var c__17906__auto___19321 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17906__auto___19321,out){
return (function (){
var f__17907__auto__ = (function (){var switch__17804__auto__ = ((function (c__17906__auto___19321,out){
return (function (state_19299){
var state_val_19300 = (state_19299[(1)]);
if((state_val_19300 === (7))){
var inst_19279 = (state_19299[(7)]);
var inst_19278 = (state_19299[(8)]);
var inst_19278__$1 = (state_19299[(2)]);
var inst_19279__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19278__$1,(0),null);
var inst_19280 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19278__$1,(1),null);
var inst_19281 = (inst_19279__$1 == null);
var state_19299__$1 = (function (){var statearr_19301 = state_19299;
(statearr_19301[(7)] = inst_19279__$1);

(statearr_19301[(9)] = inst_19280);

(statearr_19301[(8)] = inst_19278__$1);

return statearr_19301;
})();
if(cljs.core.truth_(inst_19281)){
var statearr_19302_19322 = state_19299__$1;
(statearr_19302_19322[(1)] = (8));

} else {
var statearr_19303_19323 = state_19299__$1;
(statearr_19303_19323[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19300 === (1))){
var inst_19268 = cljs.core.vec(chs);
var inst_19269 = inst_19268;
var state_19299__$1 = (function (){var statearr_19304 = state_19299;
(statearr_19304[(10)] = inst_19269);

return statearr_19304;
})();
var statearr_19305_19324 = state_19299__$1;
(statearr_19305_19324[(2)] = null);

(statearr_19305_19324[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19300 === (4))){
var inst_19269 = (state_19299[(10)]);
var state_19299__$1 = state_19299;
return cljs.core.async.ioc_alts_BANG_(state_19299__$1,(7),inst_19269);
} else {
if((state_val_19300 === (6))){
var inst_19295 = (state_19299[(2)]);
var state_19299__$1 = state_19299;
var statearr_19306_19325 = state_19299__$1;
(statearr_19306_19325[(2)] = inst_19295);

(statearr_19306_19325[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19300 === (3))){
var inst_19297 = (state_19299[(2)]);
var state_19299__$1 = state_19299;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19299__$1,inst_19297);
} else {
if((state_val_19300 === (2))){
var inst_19269 = (state_19299[(10)]);
var inst_19271 = cljs.core.count(inst_19269);
var inst_19272 = (inst_19271 > (0));
var state_19299__$1 = state_19299;
if(cljs.core.truth_(inst_19272)){
var statearr_19308_19326 = state_19299__$1;
(statearr_19308_19326[(1)] = (4));

} else {
var statearr_19309_19327 = state_19299__$1;
(statearr_19309_19327[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19300 === (11))){
var inst_19269 = (state_19299[(10)]);
var inst_19288 = (state_19299[(2)]);
var tmp19307 = inst_19269;
var inst_19269__$1 = tmp19307;
var state_19299__$1 = (function (){var statearr_19310 = state_19299;
(statearr_19310[(10)] = inst_19269__$1);

(statearr_19310[(11)] = inst_19288);

return statearr_19310;
})();
var statearr_19311_19328 = state_19299__$1;
(statearr_19311_19328[(2)] = null);

(statearr_19311_19328[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19300 === (9))){
var inst_19279 = (state_19299[(7)]);
var state_19299__$1 = state_19299;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19299__$1,(11),out,inst_19279);
} else {
if((state_val_19300 === (5))){
var inst_19293 = cljs.core.async.close_BANG_(out);
var state_19299__$1 = state_19299;
var statearr_19312_19329 = state_19299__$1;
(statearr_19312_19329[(2)] = inst_19293);

(statearr_19312_19329[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19300 === (10))){
var inst_19291 = (state_19299[(2)]);
var state_19299__$1 = state_19299;
var statearr_19313_19330 = state_19299__$1;
(statearr_19313_19330[(2)] = inst_19291);

(statearr_19313_19330[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19300 === (8))){
var inst_19279 = (state_19299[(7)]);
var inst_19269 = (state_19299[(10)]);
var inst_19280 = (state_19299[(9)]);
var inst_19278 = (state_19299[(8)]);
var inst_19283 = (function (){var cs = inst_19269;
var vec__19274 = inst_19278;
var v = inst_19279;
var c = inst_19280;
return ((function (cs,vec__19274,v,c,inst_19279,inst_19269,inst_19280,inst_19278,state_val_19300,c__17906__auto___19321,out){
return (function (p1__19265_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__19265_SHARP_);
});
;})(cs,vec__19274,v,c,inst_19279,inst_19269,inst_19280,inst_19278,state_val_19300,c__17906__auto___19321,out))
})();
var inst_19284 = cljs.core.filterv(inst_19283,inst_19269);
var inst_19269__$1 = inst_19284;
var state_19299__$1 = (function (){var statearr_19314 = state_19299;
(statearr_19314[(10)] = inst_19269__$1);

return statearr_19314;
})();
var statearr_19315_19331 = state_19299__$1;
(statearr_19315_19331[(2)] = null);

(statearr_19315_19331[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__17906__auto___19321,out))
;
return ((function (switch__17804__auto__,c__17906__auto___19321,out){
return (function() {
var cljs$core$async$state_machine__17805__auto__ = null;
var cljs$core$async$state_machine__17805__auto____0 = (function (){
var statearr_19316 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19316[(0)] = cljs$core$async$state_machine__17805__auto__);

(statearr_19316[(1)] = (1));

return statearr_19316;
});
var cljs$core$async$state_machine__17805__auto____1 = (function (state_19299){
while(true){
var ret_value__17806__auto__ = (function (){try{while(true){
var result__17807__auto__ = switch__17804__auto__(state_19299);
if(cljs.core.keyword_identical_QMARK_(result__17807__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17807__auto__;
}
break;
}
}catch (e19317){if((e19317 instanceof Object)){
var ex__17808__auto__ = e19317;
var statearr_19318_19332 = state_19299;
(statearr_19318_19332[(5)] = ex__17808__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19299);

return cljs.core.cst$kw$recur;
} else {
throw e19317;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17806__auto__,cljs.core.cst$kw$recur)){
var G__19333 = state_19299;
state_19299 = G__19333;
continue;
} else {
return ret_value__17806__auto__;
}
break;
}
});
cljs$core$async$state_machine__17805__auto__ = function(state_19299){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17805__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17805__auto____1.call(this,state_19299);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17805__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17805__auto____0;
cljs$core$async$state_machine__17805__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17805__auto____1;
return cljs$core$async$state_machine__17805__auto__;
})()
;})(switch__17804__auto__,c__17906__auto___19321,out))
})();
var state__17908__auto__ = (function (){var statearr_19319 = (f__17907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17907__auto__.cljs$core$IFn$_invoke$arity$0() : f__17907__auto__.call(null));
(statearr_19319[(6)] = c__17906__auto___19321);

return statearr_19319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17908__auto__);
});})(c__17906__auto___19321,out))
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
var G__19335 = arguments.length;
switch (G__19335) {
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
var c__17906__auto___19380 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17906__auto___19380,out){
return (function (){
var f__17907__auto__ = (function (){var switch__17804__auto__ = ((function (c__17906__auto___19380,out){
return (function (state_19359){
var state_val_19360 = (state_19359[(1)]);
if((state_val_19360 === (7))){
var inst_19341 = (state_19359[(7)]);
var inst_19341__$1 = (state_19359[(2)]);
var inst_19342 = (inst_19341__$1 == null);
var inst_19343 = cljs.core.not(inst_19342);
var state_19359__$1 = (function (){var statearr_19361 = state_19359;
(statearr_19361[(7)] = inst_19341__$1);

return statearr_19361;
})();
if(inst_19343){
var statearr_19362_19381 = state_19359__$1;
(statearr_19362_19381[(1)] = (8));

} else {
var statearr_19363_19382 = state_19359__$1;
(statearr_19363_19382[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19360 === (1))){
var inst_19336 = (0);
var state_19359__$1 = (function (){var statearr_19364 = state_19359;
(statearr_19364[(8)] = inst_19336);

return statearr_19364;
})();
var statearr_19365_19383 = state_19359__$1;
(statearr_19365_19383[(2)] = null);

(statearr_19365_19383[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19360 === (4))){
var state_19359__$1 = state_19359;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19359__$1,(7),ch);
} else {
if((state_val_19360 === (6))){
var inst_19354 = (state_19359[(2)]);
var state_19359__$1 = state_19359;
var statearr_19366_19384 = state_19359__$1;
(statearr_19366_19384[(2)] = inst_19354);

(statearr_19366_19384[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19360 === (3))){
var inst_19356 = (state_19359[(2)]);
var inst_19357 = cljs.core.async.close_BANG_(out);
var state_19359__$1 = (function (){var statearr_19367 = state_19359;
(statearr_19367[(9)] = inst_19356);

return statearr_19367;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19359__$1,inst_19357);
} else {
if((state_val_19360 === (2))){
var inst_19336 = (state_19359[(8)]);
var inst_19338 = (inst_19336 < n);
var state_19359__$1 = state_19359;
if(cljs.core.truth_(inst_19338)){
var statearr_19368_19385 = state_19359__$1;
(statearr_19368_19385[(1)] = (4));

} else {
var statearr_19369_19386 = state_19359__$1;
(statearr_19369_19386[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19360 === (11))){
var inst_19336 = (state_19359[(8)]);
var inst_19346 = (state_19359[(2)]);
var inst_19347 = (inst_19336 + (1));
var inst_19336__$1 = inst_19347;
var state_19359__$1 = (function (){var statearr_19370 = state_19359;
(statearr_19370[(8)] = inst_19336__$1);

(statearr_19370[(10)] = inst_19346);

return statearr_19370;
})();
var statearr_19371_19387 = state_19359__$1;
(statearr_19371_19387[(2)] = null);

(statearr_19371_19387[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19360 === (9))){
var state_19359__$1 = state_19359;
var statearr_19372_19388 = state_19359__$1;
(statearr_19372_19388[(2)] = null);

(statearr_19372_19388[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19360 === (5))){
var state_19359__$1 = state_19359;
var statearr_19373_19389 = state_19359__$1;
(statearr_19373_19389[(2)] = null);

(statearr_19373_19389[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19360 === (10))){
var inst_19351 = (state_19359[(2)]);
var state_19359__$1 = state_19359;
var statearr_19374_19390 = state_19359__$1;
(statearr_19374_19390[(2)] = inst_19351);

(statearr_19374_19390[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19360 === (8))){
var inst_19341 = (state_19359[(7)]);
var state_19359__$1 = state_19359;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19359__$1,(11),out,inst_19341);
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
});})(c__17906__auto___19380,out))
;
return ((function (switch__17804__auto__,c__17906__auto___19380,out){
return (function() {
var cljs$core$async$state_machine__17805__auto__ = null;
var cljs$core$async$state_machine__17805__auto____0 = (function (){
var statearr_19375 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19375[(0)] = cljs$core$async$state_machine__17805__auto__);

(statearr_19375[(1)] = (1));

return statearr_19375;
});
var cljs$core$async$state_machine__17805__auto____1 = (function (state_19359){
while(true){
var ret_value__17806__auto__ = (function (){try{while(true){
var result__17807__auto__ = switch__17804__auto__(state_19359);
if(cljs.core.keyword_identical_QMARK_(result__17807__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17807__auto__;
}
break;
}
}catch (e19376){if((e19376 instanceof Object)){
var ex__17808__auto__ = e19376;
var statearr_19377_19391 = state_19359;
(statearr_19377_19391[(5)] = ex__17808__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19359);

return cljs.core.cst$kw$recur;
} else {
throw e19376;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17806__auto__,cljs.core.cst$kw$recur)){
var G__19392 = state_19359;
state_19359 = G__19392;
continue;
} else {
return ret_value__17806__auto__;
}
break;
}
});
cljs$core$async$state_machine__17805__auto__ = function(state_19359){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17805__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17805__auto____1.call(this,state_19359);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17805__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17805__auto____0;
cljs$core$async$state_machine__17805__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17805__auto____1;
return cljs$core$async$state_machine__17805__auto__;
})()
;})(switch__17804__auto__,c__17906__auto___19380,out))
})();
var state__17908__auto__ = (function (){var statearr_19378 = (f__17907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17907__auto__.cljs$core$IFn$_invoke$arity$0() : f__17907__auto__.call(null));
(statearr_19378[(6)] = c__17906__auto___19380);

return statearr_19378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17908__auto__);
});})(c__17906__auto___19380,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19394 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19394 = (function (f,ch,meta19395){
this.f = f;
this.ch = ch;
this.meta19395 = meta19395;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19394.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19396,meta19395__$1){
var self__ = this;
var _19396__$1 = this;
return (new cljs.core.async.t_cljs$core$async19394(self__.f,self__.ch,meta19395__$1));
});

cljs.core.async.t_cljs$core$async19394.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19396){
var self__ = this;
var _19396__$1 = this;
return self__.meta19395;
});

cljs.core.async.t_cljs$core$async19394.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19394.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async19394.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async19394.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19394.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async19397 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19397 = (function (f,ch,meta19395,_,fn1,meta19398){
this.f = f;
this.ch = ch;
this.meta19395 = meta19395;
this._ = _;
this.fn1 = fn1;
this.meta19398 = meta19398;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19397.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19399,meta19398__$1){
var self__ = this;
var _19399__$1 = this;
return (new cljs.core.async.t_cljs$core$async19397(self__.f,self__.ch,self__.meta19395,self__._,self__.fn1,meta19398__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async19397.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19399){
var self__ = this;
var _19399__$1 = this;
return self__.meta19398;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19397.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19397.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19397.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19397.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19393_SHARP_){
var G__19400 = (((p1__19393_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__19393_SHARP_) : self__.f.call(null,p1__19393_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__19400) : f1.call(null,G__19400));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async19397.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19395,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async19394], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta19398], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19397.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19397.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19397";

cljs.core.async.t_cljs$core$async19397.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__9537__auto__,writer__9538__auto__,opt__9539__auto__){
return cljs.core._write(writer__9538__auto__,"cljs.core.async/t_cljs$core$async19397");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async19397 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19397(f__$1,ch__$1,meta19395__$1,___$2,fn1__$1,meta19398){
return (new cljs.core.async.t_cljs$core$async19397(f__$1,ch__$1,meta19395__$1,___$2,fn1__$1,meta19398));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async19397(self__.f,self__.ch,self__.meta19395,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__8854__auto__ = ret;
if(cljs.core.truth_(and__8854__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__8854__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__19401 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__19401) : self__.f.call(null,G__19401));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async19394.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19394.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async19394.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19395], null);
});

cljs.core.async.t_cljs$core$async19394.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19394.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19394";

cljs.core.async.t_cljs$core$async19394.cljs$lang$ctorPrWriter = (function (this__9537__auto__,writer__9538__auto__,opt__9539__auto__){
return cljs.core._write(writer__9538__auto__,"cljs.core.async/t_cljs$core$async19394");
});

cljs.core.async.__GT_t_cljs$core$async19394 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19394(f__$1,ch__$1,meta19395){
return (new cljs.core.async.t_cljs$core$async19394(f__$1,ch__$1,meta19395));
});

}

return (new cljs.core.async.t_cljs$core$async19394(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19402 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19402 = (function (f,ch,meta19403){
this.f = f;
this.ch = ch;
this.meta19403 = meta19403;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19402.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19404,meta19403__$1){
var self__ = this;
var _19404__$1 = this;
return (new cljs.core.async.t_cljs$core$async19402(self__.f,self__.ch,meta19403__$1));
});

cljs.core.async.t_cljs$core$async19402.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19404){
var self__ = this;
var _19404__$1 = this;
return self__.meta19403;
});

cljs.core.async.t_cljs$core$async19402.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19402.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async19402.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19402.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19402.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19402.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async19402.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19403], null);
});

cljs.core.async.t_cljs$core$async19402.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19402.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19402";

cljs.core.async.t_cljs$core$async19402.cljs$lang$ctorPrWriter = (function (this__9537__auto__,writer__9538__auto__,opt__9539__auto__){
return cljs.core._write(writer__9538__auto__,"cljs.core.async/t_cljs$core$async19402");
});

cljs.core.async.__GT_t_cljs$core$async19402 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19402(f__$1,ch__$1,meta19403){
return (new cljs.core.async.t_cljs$core$async19402(f__$1,ch__$1,meta19403));
});

}

return (new cljs.core.async.t_cljs$core$async19402(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async19405 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19405 = (function (p,ch,meta19406){
this.p = p;
this.ch = ch;
this.meta19406 = meta19406;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19405.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19407,meta19406__$1){
var self__ = this;
var _19407__$1 = this;
return (new cljs.core.async.t_cljs$core$async19405(self__.p,self__.ch,meta19406__$1));
});

cljs.core.async.t_cljs$core$async19405.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19407){
var self__ = this;
var _19407__$1 = this;
return self__.meta19406;
});

cljs.core.async.t_cljs$core$async19405.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19405.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async19405.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async19405.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19405.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19405.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19405.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async19405.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19406], null);
});

cljs.core.async.t_cljs$core$async19405.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19405.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19405";

cljs.core.async.t_cljs$core$async19405.cljs$lang$ctorPrWriter = (function (this__9537__auto__,writer__9538__auto__,opt__9539__auto__){
return cljs.core._write(writer__9538__auto__,"cljs.core.async/t_cljs$core$async19405");
});

cljs.core.async.__GT_t_cljs$core$async19405 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19405(p__$1,ch__$1,meta19406){
return (new cljs.core.async.t_cljs$core$async19405(p__$1,ch__$1,meta19406));
});

}

return (new cljs.core.async.t_cljs$core$async19405(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__19409 = arguments.length;
switch (G__19409) {
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
var c__17906__auto___19449 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17906__auto___19449,out){
return (function (){
var f__17907__auto__ = (function (){var switch__17804__auto__ = ((function (c__17906__auto___19449,out){
return (function (state_19430){
var state_val_19431 = (state_19430[(1)]);
if((state_val_19431 === (7))){
var inst_19426 = (state_19430[(2)]);
var state_19430__$1 = state_19430;
var statearr_19432_19450 = state_19430__$1;
(statearr_19432_19450[(2)] = inst_19426);

(statearr_19432_19450[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19431 === (1))){
var state_19430__$1 = state_19430;
var statearr_19433_19451 = state_19430__$1;
(statearr_19433_19451[(2)] = null);

(statearr_19433_19451[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19431 === (4))){
var inst_19412 = (state_19430[(7)]);
var inst_19412__$1 = (state_19430[(2)]);
var inst_19413 = (inst_19412__$1 == null);
var state_19430__$1 = (function (){var statearr_19434 = state_19430;
(statearr_19434[(7)] = inst_19412__$1);

return statearr_19434;
})();
if(cljs.core.truth_(inst_19413)){
var statearr_19435_19452 = state_19430__$1;
(statearr_19435_19452[(1)] = (5));

} else {
var statearr_19436_19453 = state_19430__$1;
(statearr_19436_19453[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19431 === (6))){
var inst_19412 = (state_19430[(7)]);
var inst_19417 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_19412) : p.call(null,inst_19412));
var state_19430__$1 = state_19430;
if(cljs.core.truth_(inst_19417)){
var statearr_19437_19454 = state_19430__$1;
(statearr_19437_19454[(1)] = (8));

} else {
var statearr_19438_19455 = state_19430__$1;
(statearr_19438_19455[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19431 === (3))){
var inst_19428 = (state_19430[(2)]);
var state_19430__$1 = state_19430;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19430__$1,inst_19428);
} else {
if((state_val_19431 === (2))){
var state_19430__$1 = state_19430;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19430__$1,(4),ch);
} else {
if((state_val_19431 === (11))){
var inst_19420 = (state_19430[(2)]);
var state_19430__$1 = state_19430;
var statearr_19439_19456 = state_19430__$1;
(statearr_19439_19456[(2)] = inst_19420);

(statearr_19439_19456[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19431 === (9))){
var state_19430__$1 = state_19430;
var statearr_19440_19457 = state_19430__$1;
(statearr_19440_19457[(2)] = null);

(statearr_19440_19457[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19431 === (5))){
var inst_19415 = cljs.core.async.close_BANG_(out);
var state_19430__$1 = state_19430;
var statearr_19441_19458 = state_19430__$1;
(statearr_19441_19458[(2)] = inst_19415);

(statearr_19441_19458[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19431 === (10))){
var inst_19423 = (state_19430[(2)]);
var state_19430__$1 = (function (){var statearr_19442 = state_19430;
(statearr_19442[(8)] = inst_19423);

return statearr_19442;
})();
var statearr_19443_19459 = state_19430__$1;
(statearr_19443_19459[(2)] = null);

(statearr_19443_19459[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19431 === (8))){
var inst_19412 = (state_19430[(7)]);
var state_19430__$1 = state_19430;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19430__$1,(11),out,inst_19412);
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
});})(c__17906__auto___19449,out))
;
return ((function (switch__17804__auto__,c__17906__auto___19449,out){
return (function() {
var cljs$core$async$state_machine__17805__auto__ = null;
var cljs$core$async$state_machine__17805__auto____0 = (function (){
var statearr_19444 = [null,null,null,null,null,null,null,null,null];
(statearr_19444[(0)] = cljs$core$async$state_machine__17805__auto__);

(statearr_19444[(1)] = (1));

return statearr_19444;
});
var cljs$core$async$state_machine__17805__auto____1 = (function (state_19430){
while(true){
var ret_value__17806__auto__ = (function (){try{while(true){
var result__17807__auto__ = switch__17804__auto__(state_19430);
if(cljs.core.keyword_identical_QMARK_(result__17807__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17807__auto__;
}
break;
}
}catch (e19445){if((e19445 instanceof Object)){
var ex__17808__auto__ = e19445;
var statearr_19446_19460 = state_19430;
(statearr_19446_19460[(5)] = ex__17808__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19430);

return cljs.core.cst$kw$recur;
} else {
throw e19445;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17806__auto__,cljs.core.cst$kw$recur)){
var G__19461 = state_19430;
state_19430 = G__19461;
continue;
} else {
return ret_value__17806__auto__;
}
break;
}
});
cljs$core$async$state_machine__17805__auto__ = function(state_19430){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17805__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17805__auto____1.call(this,state_19430);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17805__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17805__auto____0;
cljs$core$async$state_machine__17805__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17805__auto____1;
return cljs$core$async$state_machine__17805__auto__;
})()
;})(switch__17804__auto__,c__17906__auto___19449,out))
})();
var state__17908__auto__ = (function (){var statearr_19447 = (f__17907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17907__auto__.cljs$core$IFn$_invoke$arity$0() : f__17907__auto__.call(null));
(statearr_19447[(6)] = c__17906__auto___19449);

return statearr_19447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17908__auto__);
});})(c__17906__auto___19449,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__19463 = arguments.length;
switch (G__19463) {
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
var c__17906__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17906__auto__){
return (function (){
var f__17907__auto__ = (function (){var switch__17804__auto__ = ((function (c__17906__auto__){
return (function (state_19526){
var state_val_19527 = (state_19526[(1)]);
if((state_val_19527 === (7))){
var inst_19522 = (state_19526[(2)]);
var state_19526__$1 = state_19526;
var statearr_19528_19566 = state_19526__$1;
(statearr_19528_19566[(2)] = inst_19522);

(statearr_19528_19566[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19527 === (20))){
var inst_19492 = (state_19526[(7)]);
var inst_19503 = (state_19526[(2)]);
var inst_19504 = cljs.core.next(inst_19492);
var inst_19478 = inst_19504;
var inst_19479 = null;
var inst_19480 = (0);
var inst_19481 = (0);
var state_19526__$1 = (function (){var statearr_19529 = state_19526;
(statearr_19529[(8)] = inst_19478);

(statearr_19529[(9)] = inst_19480);

(statearr_19529[(10)] = inst_19481);

(statearr_19529[(11)] = inst_19503);

(statearr_19529[(12)] = inst_19479);

return statearr_19529;
})();
var statearr_19530_19567 = state_19526__$1;
(statearr_19530_19567[(2)] = null);

(statearr_19530_19567[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19527 === (1))){
var state_19526__$1 = state_19526;
var statearr_19531_19568 = state_19526__$1;
(statearr_19531_19568[(2)] = null);

(statearr_19531_19568[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19527 === (4))){
var inst_19467 = (state_19526[(13)]);
var inst_19467__$1 = (state_19526[(2)]);
var inst_19468 = (inst_19467__$1 == null);
var state_19526__$1 = (function (){var statearr_19532 = state_19526;
(statearr_19532[(13)] = inst_19467__$1);

return statearr_19532;
})();
if(cljs.core.truth_(inst_19468)){
var statearr_19533_19569 = state_19526__$1;
(statearr_19533_19569[(1)] = (5));

} else {
var statearr_19534_19570 = state_19526__$1;
(statearr_19534_19570[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19527 === (15))){
var state_19526__$1 = state_19526;
var statearr_19538_19571 = state_19526__$1;
(statearr_19538_19571[(2)] = null);

(statearr_19538_19571[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19527 === (21))){
var state_19526__$1 = state_19526;
var statearr_19539_19572 = state_19526__$1;
(statearr_19539_19572[(2)] = null);

(statearr_19539_19572[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19527 === (13))){
var inst_19478 = (state_19526[(8)]);
var inst_19480 = (state_19526[(9)]);
var inst_19481 = (state_19526[(10)]);
var inst_19479 = (state_19526[(12)]);
var inst_19488 = (state_19526[(2)]);
var inst_19489 = (inst_19481 + (1));
var tmp19535 = inst_19478;
var tmp19536 = inst_19480;
var tmp19537 = inst_19479;
var inst_19478__$1 = tmp19535;
var inst_19479__$1 = tmp19537;
var inst_19480__$1 = tmp19536;
var inst_19481__$1 = inst_19489;
var state_19526__$1 = (function (){var statearr_19540 = state_19526;
(statearr_19540[(8)] = inst_19478__$1);

(statearr_19540[(14)] = inst_19488);

(statearr_19540[(9)] = inst_19480__$1);

(statearr_19540[(10)] = inst_19481__$1);

(statearr_19540[(12)] = inst_19479__$1);

return statearr_19540;
})();
var statearr_19541_19573 = state_19526__$1;
(statearr_19541_19573[(2)] = null);

(statearr_19541_19573[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19527 === (22))){
var state_19526__$1 = state_19526;
var statearr_19542_19574 = state_19526__$1;
(statearr_19542_19574[(2)] = null);

(statearr_19542_19574[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19527 === (6))){
var inst_19467 = (state_19526[(13)]);
var inst_19476 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19467) : f.call(null,inst_19467));
var inst_19477 = cljs.core.seq(inst_19476);
var inst_19478 = inst_19477;
var inst_19479 = null;
var inst_19480 = (0);
var inst_19481 = (0);
var state_19526__$1 = (function (){var statearr_19543 = state_19526;
(statearr_19543[(8)] = inst_19478);

(statearr_19543[(9)] = inst_19480);

(statearr_19543[(10)] = inst_19481);

(statearr_19543[(12)] = inst_19479);

return statearr_19543;
})();
var statearr_19544_19575 = state_19526__$1;
(statearr_19544_19575[(2)] = null);

(statearr_19544_19575[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19527 === (17))){
var inst_19492 = (state_19526[(7)]);
var inst_19496 = cljs.core.chunk_first(inst_19492);
var inst_19497 = cljs.core.chunk_rest(inst_19492);
var inst_19498 = cljs.core.count(inst_19496);
var inst_19478 = inst_19497;
var inst_19479 = inst_19496;
var inst_19480 = inst_19498;
var inst_19481 = (0);
var state_19526__$1 = (function (){var statearr_19545 = state_19526;
(statearr_19545[(8)] = inst_19478);

(statearr_19545[(9)] = inst_19480);

(statearr_19545[(10)] = inst_19481);

(statearr_19545[(12)] = inst_19479);

return statearr_19545;
})();
var statearr_19546_19576 = state_19526__$1;
(statearr_19546_19576[(2)] = null);

(statearr_19546_19576[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19527 === (3))){
var inst_19524 = (state_19526[(2)]);
var state_19526__$1 = state_19526;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19526__$1,inst_19524);
} else {
if((state_val_19527 === (12))){
var inst_19512 = (state_19526[(2)]);
var state_19526__$1 = state_19526;
var statearr_19547_19577 = state_19526__$1;
(statearr_19547_19577[(2)] = inst_19512);

(statearr_19547_19577[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19527 === (2))){
var state_19526__$1 = state_19526;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19526__$1,(4),in$);
} else {
if((state_val_19527 === (23))){
var inst_19520 = (state_19526[(2)]);
var state_19526__$1 = state_19526;
var statearr_19548_19578 = state_19526__$1;
(statearr_19548_19578[(2)] = inst_19520);

(statearr_19548_19578[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19527 === (19))){
var inst_19507 = (state_19526[(2)]);
var state_19526__$1 = state_19526;
var statearr_19549_19579 = state_19526__$1;
(statearr_19549_19579[(2)] = inst_19507);

(statearr_19549_19579[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19527 === (11))){
var inst_19478 = (state_19526[(8)]);
var inst_19492 = (state_19526[(7)]);
var inst_19492__$1 = cljs.core.seq(inst_19478);
var state_19526__$1 = (function (){var statearr_19550 = state_19526;
(statearr_19550[(7)] = inst_19492__$1);

return statearr_19550;
})();
if(inst_19492__$1){
var statearr_19551_19580 = state_19526__$1;
(statearr_19551_19580[(1)] = (14));

} else {
var statearr_19552_19581 = state_19526__$1;
(statearr_19552_19581[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19527 === (9))){
var inst_19514 = (state_19526[(2)]);
var inst_19515 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_19526__$1 = (function (){var statearr_19553 = state_19526;
(statearr_19553[(15)] = inst_19514);

return statearr_19553;
})();
if(cljs.core.truth_(inst_19515)){
var statearr_19554_19582 = state_19526__$1;
(statearr_19554_19582[(1)] = (21));

} else {
var statearr_19555_19583 = state_19526__$1;
(statearr_19555_19583[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19527 === (5))){
var inst_19470 = cljs.core.async.close_BANG_(out);
var state_19526__$1 = state_19526;
var statearr_19556_19584 = state_19526__$1;
(statearr_19556_19584[(2)] = inst_19470);

(statearr_19556_19584[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19527 === (14))){
var inst_19492 = (state_19526[(7)]);
var inst_19494 = cljs.core.chunked_seq_QMARK_(inst_19492);
var state_19526__$1 = state_19526;
if(inst_19494){
var statearr_19557_19585 = state_19526__$1;
(statearr_19557_19585[(1)] = (17));

} else {
var statearr_19558_19586 = state_19526__$1;
(statearr_19558_19586[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19527 === (16))){
var inst_19510 = (state_19526[(2)]);
var state_19526__$1 = state_19526;
var statearr_19559_19587 = state_19526__$1;
(statearr_19559_19587[(2)] = inst_19510);

(statearr_19559_19587[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19527 === (10))){
var inst_19481 = (state_19526[(10)]);
var inst_19479 = (state_19526[(12)]);
var inst_19486 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_19479,inst_19481);
var state_19526__$1 = state_19526;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19526__$1,(13),out,inst_19486);
} else {
if((state_val_19527 === (18))){
var inst_19492 = (state_19526[(7)]);
var inst_19501 = cljs.core.first(inst_19492);
var state_19526__$1 = state_19526;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19526__$1,(20),out,inst_19501);
} else {
if((state_val_19527 === (8))){
var inst_19480 = (state_19526[(9)]);
var inst_19481 = (state_19526[(10)]);
var inst_19483 = (inst_19481 < inst_19480);
var inst_19484 = inst_19483;
var state_19526__$1 = state_19526;
if(cljs.core.truth_(inst_19484)){
var statearr_19560_19588 = state_19526__$1;
(statearr_19560_19588[(1)] = (10));

} else {
var statearr_19561_19589 = state_19526__$1;
(statearr_19561_19589[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__17906__auto__))
;
return ((function (switch__17804__auto__,c__17906__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__17805__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__17805__auto____0 = (function (){
var statearr_19562 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19562[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__17805__auto__);

(statearr_19562[(1)] = (1));

return statearr_19562;
});
var cljs$core$async$mapcat_STAR__$_state_machine__17805__auto____1 = (function (state_19526){
while(true){
var ret_value__17806__auto__ = (function (){try{while(true){
var result__17807__auto__ = switch__17804__auto__(state_19526);
if(cljs.core.keyword_identical_QMARK_(result__17807__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17807__auto__;
}
break;
}
}catch (e19563){if((e19563 instanceof Object)){
var ex__17808__auto__ = e19563;
var statearr_19564_19590 = state_19526;
(statearr_19564_19590[(5)] = ex__17808__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19526);

return cljs.core.cst$kw$recur;
} else {
throw e19563;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17806__auto__,cljs.core.cst$kw$recur)){
var G__19591 = state_19526;
state_19526 = G__19591;
continue;
} else {
return ret_value__17806__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__17805__auto__ = function(state_19526){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__17805__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__17805__auto____1.call(this,state_19526);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__17805__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__17805__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__17805__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__17805__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__17805__auto__;
})()
;})(switch__17804__auto__,c__17906__auto__))
})();
var state__17908__auto__ = (function (){var statearr_19565 = (f__17907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17907__auto__.cljs$core$IFn$_invoke$arity$0() : f__17907__auto__.call(null));
(statearr_19565[(6)] = c__17906__auto__);

return statearr_19565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17908__auto__);
});})(c__17906__auto__))
);

return c__17906__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__19593 = arguments.length;
switch (G__19593) {
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
var G__19596 = arguments.length;
switch (G__19596) {
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
var G__19599 = arguments.length;
switch (G__19599) {
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
var c__17906__auto___19646 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17906__auto___19646,out){
return (function (){
var f__17907__auto__ = (function (){var switch__17804__auto__ = ((function (c__17906__auto___19646,out){
return (function (state_19623){
var state_val_19624 = (state_19623[(1)]);
if((state_val_19624 === (7))){
var inst_19618 = (state_19623[(2)]);
var state_19623__$1 = state_19623;
var statearr_19625_19647 = state_19623__$1;
(statearr_19625_19647[(2)] = inst_19618);

(statearr_19625_19647[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19624 === (1))){
var inst_19600 = null;
var state_19623__$1 = (function (){var statearr_19626 = state_19623;
(statearr_19626[(7)] = inst_19600);

return statearr_19626;
})();
var statearr_19627_19648 = state_19623__$1;
(statearr_19627_19648[(2)] = null);

(statearr_19627_19648[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19624 === (4))){
var inst_19603 = (state_19623[(8)]);
var inst_19603__$1 = (state_19623[(2)]);
var inst_19604 = (inst_19603__$1 == null);
var inst_19605 = cljs.core.not(inst_19604);
var state_19623__$1 = (function (){var statearr_19628 = state_19623;
(statearr_19628[(8)] = inst_19603__$1);

return statearr_19628;
})();
if(inst_19605){
var statearr_19629_19649 = state_19623__$1;
(statearr_19629_19649[(1)] = (5));

} else {
var statearr_19630_19650 = state_19623__$1;
(statearr_19630_19650[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19624 === (6))){
var state_19623__$1 = state_19623;
var statearr_19631_19651 = state_19623__$1;
(statearr_19631_19651[(2)] = null);

(statearr_19631_19651[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19624 === (3))){
var inst_19620 = (state_19623[(2)]);
var inst_19621 = cljs.core.async.close_BANG_(out);
var state_19623__$1 = (function (){var statearr_19632 = state_19623;
(statearr_19632[(9)] = inst_19620);

return statearr_19632;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19623__$1,inst_19621);
} else {
if((state_val_19624 === (2))){
var state_19623__$1 = state_19623;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19623__$1,(4),ch);
} else {
if((state_val_19624 === (11))){
var inst_19603 = (state_19623[(8)]);
var inst_19612 = (state_19623[(2)]);
var inst_19600 = inst_19603;
var state_19623__$1 = (function (){var statearr_19633 = state_19623;
(statearr_19633[(10)] = inst_19612);

(statearr_19633[(7)] = inst_19600);

return statearr_19633;
})();
var statearr_19634_19652 = state_19623__$1;
(statearr_19634_19652[(2)] = null);

(statearr_19634_19652[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19624 === (9))){
var inst_19603 = (state_19623[(8)]);
var state_19623__$1 = state_19623;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19623__$1,(11),out,inst_19603);
} else {
if((state_val_19624 === (5))){
var inst_19603 = (state_19623[(8)]);
var inst_19600 = (state_19623[(7)]);
var inst_19607 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19603,inst_19600);
var state_19623__$1 = state_19623;
if(inst_19607){
var statearr_19636_19653 = state_19623__$1;
(statearr_19636_19653[(1)] = (8));

} else {
var statearr_19637_19654 = state_19623__$1;
(statearr_19637_19654[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19624 === (10))){
var inst_19615 = (state_19623[(2)]);
var state_19623__$1 = state_19623;
var statearr_19638_19655 = state_19623__$1;
(statearr_19638_19655[(2)] = inst_19615);

(statearr_19638_19655[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19624 === (8))){
var inst_19600 = (state_19623[(7)]);
var tmp19635 = inst_19600;
var inst_19600__$1 = tmp19635;
var state_19623__$1 = (function (){var statearr_19639 = state_19623;
(statearr_19639[(7)] = inst_19600__$1);

return statearr_19639;
})();
var statearr_19640_19656 = state_19623__$1;
(statearr_19640_19656[(2)] = null);

(statearr_19640_19656[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__17906__auto___19646,out))
;
return ((function (switch__17804__auto__,c__17906__auto___19646,out){
return (function() {
var cljs$core$async$state_machine__17805__auto__ = null;
var cljs$core$async$state_machine__17805__auto____0 = (function (){
var statearr_19641 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19641[(0)] = cljs$core$async$state_machine__17805__auto__);

(statearr_19641[(1)] = (1));

return statearr_19641;
});
var cljs$core$async$state_machine__17805__auto____1 = (function (state_19623){
while(true){
var ret_value__17806__auto__ = (function (){try{while(true){
var result__17807__auto__ = switch__17804__auto__(state_19623);
if(cljs.core.keyword_identical_QMARK_(result__17807__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17807__auto__;
}
break;
}
}catch (e19642){if((e19642 instanceof Object)){
var ex__17808__auto__ = e19642;
var statearr_19643_19657 = state_19623;
(statearr_19643_19657[(5)] = ex__17808__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19623);

return cljs.core.cst$kw$recur;
} else {
throw e19642;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17806__auto__,cljs.core.cst$kw$recur)){
var G__19658 = state_19623;
state_19623 = G__19658;
continue;
} else {
return ret_value__17806__auto__;
}
break;
}
});
cljs$core$async$state_machine__17805__auto__ = function(state_19623){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17805__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17805__auto____1.call(this,state_19623);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17805__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17805__auto____0;
cljs$core$async$state_machine__17805__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17805__auto____1;
return cljs$core$async$state_machine__17805__auto__;
})()
;})(switch__17804__auto__,c__17906__auto___19646,out))
})();
var state__17908__auto__ = (function (){var statearr_19644 = (f__17907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17907__auto__.cljs$core$IFn$_invoke$arity$0() : f__17907__auto__.call(null));
(statearr_19644[(6)] = c__17906__auto___19646);

return statearr_19644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17908__auto__);
});})(c__17906__auto___19646,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__19660 = arguments.length;
switch (G__19660) {
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
var c__17906__auto___19726 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17906__auto___19726,out){
return (function (){
var f__17907__auto__ = (function (){var switch__17804__auto__ = ((function (c__17906__auto___19726,out){
return (function (state_19698){
var state_val_19699 = (state_19698[(1)]);
if((state_val_19699 === (7))){
var inst_19694 = (state_19698[(2)]);
var state_19698__$1 = state_19698;
var statearr_19700_19727 = state_19698__$1;
(statearr_19700_19727[(2)] = inst_19694);

(statearr_19700_19727[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19699 === (1))){
var inst_19661 = (new Array(n));
var inst_19662 = inst_19661;
var inst_19663 = (0);
var state_19698__$1 = (function (){var statearr_19701 = state_19698;
(statearr_19701[(7)] = inst_19663);

(statearr_19701[(8)] = inst_19662);

return statearr_19701;
})();
var statearr_19702_19728 = state_19698__$1;
(statearr_19702_19728[(2)] = null);

(statearr_19702_19728[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19699 === (4))){
var inst_19666 = (state_19698[(9)]);
var inst_19666__$1 = (state_19698[(2)]);
var inst_19667 = (inst_19666__$1 == null);
var inst_19668 = cljs.core.not(inst_19667);
var state_19698__$1 = (function (){var statearr_19703 = state_19698;
(statearr_19703[(9)] = inst_19666__$1);

return statearr_19703;
})();
if(inst_19668){
var statearr_19704_19729 = state_19698__$1;
(statearr_19704_19729[(1)] = (5));

} else {
var statearr_19705_19730 = state_19698__$1;
(statearr_19705_19730[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19699 === (15))){
var inst_19688 = (state_19698[(2)]);
var state_19698__$1 = state_19698;
var statearr_19706_19731 = state_19698__$1;
(statearr_19706_19731[(2)] = inst_19688);

(statearr_19706_19731[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19699 === (13))){
var state_19698__$1 = state_19698;
var statearr_19707_19732 = state_19698__$1;
(statearr_19707_19732[(2)] = null);

(statearr_19707_19732[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19699 === (6))){
var inst_19663 = (state_19698[(7)]);
var inst_19684 = (inst_19663 > (0));
var state_19698__$1 = state_19698;
if(cljs.core.truth_(inst_19684)){
var statearr_19708_19733 = state_19698__$1;
(statearr_19708_19733[(1)] = (12));

} else {
var statearr_19709_19734 = state_19698__$1;
(statearr_19709_19734[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19699 === (3))){
var inst_19696 = (state_19698[(2)]);
var state_19698__$1 = state_19698;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19698__$1,inst_19696);
} else {
if((state_val_19699 === (12))){
var inst_19662 = (state_19698[(8)]);
var inst_19686 = cljs.core.vec(inst_19662);
var state_19698__$1 = state_19698;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19698__$1,(15),out,inst_19686);
} else {
if((state_val_19699 === (2))){
var state_19698__$1 = state_19698;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19698__$1,(4),ch);
} else {
if((state_val_19699 === (11))){
var inst_19678 = (state_19698[(2)]);
var inst_19679 = (new Array(n));
var inst_19662 = inst_19679;
var inst_19663 = (0);
var state_19698__$1 = (function (){var statearr_19710 = state_19698;
(statearr_19710[(7)] = inst_19663);

(statearr_19710[(8)] = inst_19662);

(statearr_19710[(10)] = inst_19678);

return statearr_19710;
})();
var statearr_19711_19735 = state_19698__$1;
(statearr_19711_19735[(2)] = null);

(statearr_19711_19735[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19699 === (9))){
var inst_19662 = (state_19698[(8)]);
var inst_19676 = cljs.core.vec(inst_19662);
var state_19698__$1 = state_19698;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19698__$1,(11),out,inst_19676);
} else {
if((state_val_19699 === (5))){
var inst_19663 = (state_19698[(7)]);
var inst_19662 = (state_19698[(8)]);
var inst_19671 = (state_19698[(11)]);
var inst_19666 = (state_19698[(9)]);
var inst_19670 = (inst_19662[inst_19663] = inst_19666);
var inst_19671__$1 = (inst_19663 + (1));
var inst_19672 = (inst_19671__$1 < n);
var state_19698__$1 = (function (){var statearr_19712 = state_19698;
(statearr_19712[(11)] = inst_19671__$1);

(statearr_19712[(12)] = inst_19670);

return statearr_19712;
})();
if(cljs.core.truth_(inst_19672)){
var statearr_19713_19736 = state_19698__$1;
(statearr_19713_19736[(1)] = (8));

} else {
var statearr_19714_19737 = state_19698__$1;
(statearr_19714_19737[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19699 === (14))){
var inst_19691 = (state_19698[(2)]);
var inst_19692 = cljs.core.async.close_BANG_(out);
var state_19698__$1 = (function (){var statearr_19716 = state_19698;
(statearr_19716[(13)] = inst_19691);

return statearr_19716;
})();
var statearr_19717_19738 = state_19698__$1;
(statearr_19717_19738[(2)] = inst_19692);

(statearr_19717_19738[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19699 === (10))){
var inst_19682 = (state_19698[(2)]);
var state_19698__$1 = state_19698;
var statearr_19718_19739 = state_19698__$1;
(statearr_19718_19739[(2)] = inst_19682);

(statearr_19718_19739[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19699 === (8))){
var inst_19662 = (state_19698[(8)]);
var inst_19671 = (state_19698[(11)]);
var tmp19715 = inst_19662;
var inst_19662__$1 = tmp19715;
var inst_19663 = inst_19671;
var state_19698__$1 = (function (){var statearr_19719 = state_19698;
(statearr_19719[(7)] = inst_19663);

(statearr_19719[(8)] = inst_19662__$1);

return statearr_19719;
})();
var statearr_19720_19740 = state_19698__$1;
(statearr_19720_19740[(2)] = null);

(statearr_19720_19740[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__17906__auto___19726,out))
;
return ((function (switch__17804__auto__,c__17906__auto___19726,out){
return (function() {
var cljs$core$async$state_machine__17805__auto__ = null;
var cljs$core$async$state_machine__17805__auto____0 = (function (){
var statearr_19721 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19721[(0)] = cljs$core$async$state_machine__17805__auto__);

(statearr_19721[(1)] = (1));

return statearr_19721;
});
var cljs$core$async$state_machine__17805__auto____1 = (function (state_19698){
while(true){
var ret_value__17806__auto__ = (function (){try{while(true){
var result__17807__auto__ = switch__17804__auto__(state_19698);
if(cljs.core.keyword_identical_QMARK_(result__17807__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17807__auto__;
}
break;
}
}catch (e19722){if((e19722 instanceof Object)){
var ex__17808__auto__ = e19722;
var statearr_19723_19741 = state_19698;
(statearr_19723_19741[(5)] = ex__17808__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19698);

return cljs.core.cst$kw$recur;
} else {
throw e19722;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17806__auto__,cljs.core.cst$kw$recur)){
var G__19742 = state_19698;
state_19698 = G__19742;
continue;
} else {
return ret_value__17806__auto__;
}
break;
}
});
cljs$core$async$state_machine__17805__auto__ = function(state_19698){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17805__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17805__auto____1.call(this,state_19698);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17805__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17805__auto____0;
cljs$core$async$state_machine__17805__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17805__auto____1;
return cljs$core$async$state_machine__17805__auto__;
})()
;})(switch__17804__auto__,c__17906__auto___19726,out))
})();
var state__17908__auto__ = (function (){var statearr_19724 = (f__17907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17907__auto__.cljs$core$IFn$_invoke$arity$0() : f__17907__auto__.call(null));
(statearr_19724[(6)] = c__17906__auto___19726);

return statearr_19724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17908__auto__);
});})(c__17906__auto___19726,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19744 = arguments.length;
switch (G__19744) {
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
var c__17906__auto___19814 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17906__auto___19814,out){
return (function (){
var f__17907__auto__ = (function (){var switch__17804__auto__ = ((function (c__17906__auto___19814,out){
return (function (state_19786){
var state_val_19787 = (state_19786[(1)]);
if((state_val_19787 === (7))){
var inst_19782 = (state_19786[(2)]);
var state_19786__$1 = state_19786;
var statearr_19788_19815 = state_19786__$1;
(statearr_19788_19815[(2)] = inst_19782);

(statearr_19788_19815[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19787 === (1))){
var inst_19745 = [];
var inst_19746 = inst_19745;
var inst_19747 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_19786__$1 = (function (){var statearr_19789 = state_19786;
(statearr_19789[(7)] = inst_19747);

(statearr_19789[(8)] = inst_19746);

return statearr_19789;
})();
var statearr_19790_19816 = state_19786__$1;
(statearr_19790_19816[(2)] = null);

(statearr_19790_19816[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19787 === (4))){
var inst_19750 = (state_19786[(9)]);
var inst_19750__$1 = (state_19786[(2)]);
var inst_19751 = (inst_19750__$1 == null);
var inst_19752 = cljs.core.not(inst_19751);
var state_19786__$1 = (function (){var statearr_19791 = state_19786;
(statearr_19791[(9)] = inst_19750__$1);

return statearr_19791;
})();
if(inst_19752){
var statearr_19792_19817 = state_19786__$1;
(statearr_19792_19817[(1)] = (5));

} else {
var statearr_19793_19818 = state_19786__$1;
(statearr_19793_19818[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19787 === (15))){
var inst_19776 = (state_19786[(2)]);
var state_19786__$1 = state_19786;
var statearr_19794_19819 = state_19786__$1;
(statearr_19794_19819[(2)] = inst_19776);

(statearr_19794_19819[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19787 === (13))){
var state_19786__$1 = state_19786;
var statearr_19795_19820 = state_19786__$1;
(statearr_19795_19820[(2)] = null);

(statearr_19795_19820[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19787 === (6))){
var inst_19746 = (state_19786[(8)]);
var inst_19771 = inst_19746.length;
var inst_19772 = (inst_19771 > (0));
var state_19786__$1 = state_19786;
if(cljs.core.truth_(inst_19772)){
var statearr_19796_19821 = state_19786__$1;
(statearr_19796_19821[(1)] = (12));

} else {
var statearr_19797_19822 = state_19786__$1;
(statearr_19797_19822[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19787 === (3))){
var inst_19784 = (state_19786[(2)]);
var state_19786__$1 = state_19786;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19786__$1,inst_19784);
} else {
if((state_val_19787 === (12))){
var inst_19746 = (state_19786[(8)]);
var inst_19774 = cljs.core.vec(inst_19746);
var state_19786__$1 = state_19786;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19786__$1,(15),out,inst_19774);
} else {
if((state_val_19787 === (2))){
var state_19786__$1 = state_19786;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19786__$1,(4),ch);
} else {
if((state_val_19787 === (11))){
var inst_19754 = (state_19786[(10)]);
var inst_19750 = (state_19786[(9)]);
var inst_19764 = (state_19786[(2)]);
var inst_19765 = [];
var inst_19766 = inst_19765.push(inst_19750);
var inst_19746 = inst_19765;
var inst_19747 = inst_19754;
var state_19786__$1 = (function (){var statearr_19798 = state_19786;
(statearr_19798[(11)] = inst_19764);

(statearr_19798[(12)] = inst_19766);

(statearr_19798[(7)] = inst_19747);

(statearr_19798[(8)] = inst_19746);

return statearr_19798;
})();
var statearr_19799_19823 = state_19786__$1;
(statearr_19799_19823[(2)] = null);

(statearr_19799_19823[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19787 === (9))){
var inst_19746 = (state_19786[(8)]);
var inst_19762 = cljs.core.vec(inst_19746);
var state_19786__$1 = state_19786;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19786__$1,(11),out,inst_19762);
} else {
if((state_val_19787 === (5))){
var inst_19747 = (state_19786[(7)]);
var inst_19754 = (state_19786[(10)]);
var inst_19750 = (state_19786[(9)]);
var inst_19754__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19750) : f.call(null,inst_19750));
var inst_19755 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19754__$1,inst_19747);
var inst_19756 = cljs.core.keyword_identical_QMARK_(inst_19747,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_19757 = (inst_19755) || (inst_19756);
var state_19786__$1 = (function (){var statearr_19800 = state_19786;
(statearr_19800[(10)] = inst_19754__$1);

return statearr_19800;
})();
if(cljs.core.truth_(inst_19757)){
var statearr_19801_19824 = state_19786__$1;
(statearr_19801_19824[(1)] = (8));

} else {
var statearr_19802_19825 = state_19786__$1;
(statearr_19802_19825[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19787 === (14))){
var inst_19779 = (state_19786[(2)]);
var inst_19780 = cljs.core.async.close_BANG_(out);
var state_19786__$1 = (function (){var statearr_19804 = state_19786;
(statearr_19804[(13)] = inst_19779);

return statearr_19804;
})();
var statearr_19805_19826 = state_19786__$1;
(statearr_19805_19826[(2)] = inst_19780);

(statearr_19805_19826[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19787 === (10))){
var inst_19769 = (state_19786[(2)]);
var state_19786__$1 = state_19786;
var statearr_19806_19827 = state_19786__$1;
(statearr_19806_19827[(2)] = inst_19769);

(statearr_19806_19827[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19787 === (8))){
var inst_19754 = (state_19786[(10)]);
var inst_19750 = (state_19786[(9)]);
var inst_19746 = (state_19786[(8)]);
var inst_19759 = inst_19746.push(inst_19750);
var tmp19803 = inst_19746;
var inst_19746__$1 = tmp19803;
var inst_19747 = inst_19754;
var state_19786__$1 = (function (){var statearr_19807 = state_19786;
(statearr_19807[(14)] = inst_19759);

(statearr_19807[(7)] = inst_19747);

(statearr_19807[(8)] = inst_19746__$1);

return statearr_19807;
})();
var statearr_19808_19828 = state_19786__$1;
(statearr_19808_19828[(2)] = null);

(statearr_19808_19828[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__17906__auto___19814,out))
;
return ((function (switch__17804__auto__,c__17906__auto___19814,out){
return (function() {
var cljs$core$async$state_machine__17805__auto__ = null;
var cljs$core$async$state_machine__17805__auto____0 = (function (){
var statearr_19809 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19809[(0)] = cljs$core$async$state_machine__17805__auto__);

(statearr_19809[(1)] = (1));

return statearr_19809;
});
var cljs$core$async$state_machine__17805__auto____1 = (function (state_19786){
while(true){
var ret_value__17806__auto__ = (function (){try{while(true){
var result__17807__auto__ = switch__17804__auto__(state_19786);
if(cljs.core.keyword_identical_QMARK_(result__17807__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17807__auto__;
}
break;
}
}catch (e19810){if((e19810 instanceof Object)){
var ex__17808__auto__ = e19810;
var statearr_19811_19829 = state_19786;
(statearr_19811_19829[(5)] = ex__17808__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19786);

return cljs.core.cst$kw$recur;
} else {
throw e19810;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17806__auto__,cljs.core.cst$kw$recur)){
var G__19830 = state_19786;
state_19786 = G__19830;
continue;
} else {
return ret_value__17806__auto__;
}
break;
}
});
cljs$core$async$state_machine__17805__auto__ = function(state_19786){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17805__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17805__auto____1.call(this,state_19786);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17805__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17805__auto____0;
cljs$core$async$state_machine__17805__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17805__auto____1;
return cljs$core$async$state_machine__17805__auto__;
})()
;})(switch__17804__auto__,c__17906__auto___19814,out))
})();
var state__17908__auto__ = (function (){var statearr_19812 = (f__17907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17907__auto__.cljs$core$IFn$_invoke$arity$0() : f__17907__auto__.call(null));
(statearr_19812[(6)] = c__17906__auto___19814);

return statearr_19812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17908__auto__);
});})(c__17906__auto___19814,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

