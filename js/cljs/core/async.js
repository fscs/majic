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
var G__17981 = arguments.length;
switch (G__17981) {
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
if(typeof cljs.core.async.t_cljs$core$async17982 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17982 = (function (f,blockable,meta17983){
this.f = f;
this.blockable = blockable;
this.meta17983 = meta17983;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17982.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17984,meta17983__$1){
var self__ = this;
var _17984__$1 = this;
return (new cljs.core.async.t_cljs$core$async17982(self__.f,self__.blockable,meta17983__$1));
});

cljs.core.async.t_cljs$core$async17982.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17984){
var self__ = this;
var _17984__$1 = this;
return self__.meta17983;
});

cljs.core.async.t_cljs$core$async17982.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17982.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17982.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async17982.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async17982.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta17983], null);
});

cljs.core.async.t_cljs$core$async17982.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17982.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17982";

cljs.core.async.t_cljs$core$async17982.cljs$lang$ctorPrWriter = (function (this__9537__auto__,writer__9538__auto__,opt__9539__auto__){
return cljs.core._write(writer__9538__auto__,"cljs.core.async/t_cljs$core$async17982");
});

cljs.core.async.__GT_t_cljs$core$async17982 = (function cljs$core$async$__GT_t_cljs$core$async17982(f__$1,blockable__$1,meta17983){
return (new cljs.core.async.t_cljs$core$async17982(f__$1,blockable__$1,meta17983));
});

}

return (new cljs.core.async.t_cljs$core$async17982(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__17988 = arguments.length;
switch (G__17988) {
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
var G__17991 = arguments.length;
switch (G__17991) {
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
var G__17994 = arguments.length;
switch (G__17994) {
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
var val_17996 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17996) : fn1.call(null,val_17996));
} else {
cljs.core.async.impl.dispatch.run(((function (val_17996,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17996) : fn1.call(null,val_17996));
});})(val_17996,ret))
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
var G__17998 = arguments.length;
switch (G__17998) {
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
var n__9911__auto___18000 = n;
var x_18001 = (0);
while(true){
if((x_18001 < n__9911__auto___18000)){
(a[x_18001] = (0));

var G__18002 = (x_18001 + (1));
x_18001 = G__18002;
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

var G__18003 = (i + (1));
i = G__18003;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if(typeof cljs.core.async.t_cljs$core$async18004 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18004 = (function (flag,meta18005){
this.flag = flag;
this.meta18005 = meta18005;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18004.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_18006,meta18005__$1){
var self__ = this;
var _18006__$1 = this;
return (new cljs.core.async.t_cljs$core$async18004(self__.flag,meta18005__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async18004.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_18006){
var self__ = this;
var _18006__$1 = this;
return self__.meta18005;
});})(flag))
;

cljs.core.async.t_cljs$core$async18004.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18004.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async18004.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async18004.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async18004.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta18005], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async18004.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18004.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18004";

cljs.core.async.t_cljs$core$async18004.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__9537__auto__,writer__9538__auto__,opt__9539__auto__){
return cljs.core._write(writer__9538__auto__,"cljs.core.async/t_cljs$core$async18004");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async18004 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async18004(flag__$1,meta18005){
return (new cljs.core.async.t_cljs$core$async18004(flag__$1,meta18005));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async18004(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async18007 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18007 = (function (flag,cb,meta18008){
this.flag = flag;
this.cb = cb;
this.meta18008 = meta18008;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18007.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18009,meta18008__$1){
var self__ = this;
var _18009__$1 = this;
return (new cljs.core.async.t_cljs$core$async18007(self__.flag,self__.cb,meta18008__$1));
});

cljs.core.async.t_cljs$core$async18007.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18009){
var self__ = this;
var _18009__$1 = this;
return self__.meta18008;
});

cljs.core.async.t_cljs$core$async18007.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18007.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async18007.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async18007.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async18007.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta18008], null);
});

cljs.core.async.t_cljs$core$async18007.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18007.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18007";

cljs.core.async.t_cljs$core$async18007.cljs$lang$ctorPrWriter = (function (this__9537__auto__,writer__9538__auto__,opt__9539__auto__){
return cljs.core._write(writer__9538__auto__,"cljs.core.async/t_cljs$core$async18007");
});

cljs.core.async.__GT_t_cljs$core$async18007 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async18007(flag__$1,cb__$1,meta18008){
return (new cljs.core.async.t_cljs$core$async18007(flag__$1,cb__$1,meta18008));
});

}

return (new cljs.core.async.t_cljs$core$async18007(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__18010_SHARP_){
var G__18012 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18010_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__18012) : fret.call(null,G__18012));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18011_SHARP_){
var G__18013 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18011_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__18013) : fret.call(null,G__18013));
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
var G__18014 = (i + (1));
i = G__18014;
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
var len__10145__auto___18020 = arguments.length;
var i__10146__auto___18021 = (0);
while(true){
if((i__10146__auto___18021 < len__10145__auto___18020)){
args__10152__auto__.push((arguments[i__10146__auto___18021]));

var G__18022 = (i__10146__auto___18021 + (1));
i__10146__auto___18021 = G__18022;
continue;
} else {
}
break;
}

var argseq__10153__auto__ = ((((1) < args__10152__auto__.length))?(new cljs.core.IndexedSeq(args__10152__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10153__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__18017){
var map__18018 = p__18017;
var map__18018__$1 = ((((!((map__18018 == null)))?((((map__18018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18018.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18018):map__18018);
var opts = map__18018__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq18015){
var G__18016 = cljs.core.first(seq18015);
var seq18015__$1 = cljs.core.next(seq18015);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18016,seq18015__$1);
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
var G__18024 = arguments.length;
switch (G__18024) {
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
var c__17921__auto___18070 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17921__auto___18070){
return (function (){
var f__17922__auto__ = (function (){var switch__17819__auto__ = ((function (c__17921__auto___18070){
return (function (state_18048){
var state_val_18049 = (state_18048[(1)]);
if((state_val_18049 === (7))){
var inst_18044 = (state_18048[(2)]);
var state_18048__$1 = state_18048;
var statearr_18050_18071 = state_18048__$1;
(statearr_18050_18071[(2)] = inst_18044);

(statearr_18050_18071[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18049 === (1))){
var state_18048__$1 = state_18048;
var statearr_18051_18072 = state_18048__$1;
(statearr_18051_18072[(2)] = null);

(statearr_18051_18072[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18049 === (4))){
var inst_18027 = (state_18048[(7)]);
var inst_18027__$1 = (state_18048[(2)]);
var inst_18028 = (inst_18027__$1 == null);
var state_18048__$1 = (function (){var statearr_18052 = state_18048;
(statearr_18052[(7)] = inst_18027__$1);

return statearr_18052;
})();
if(cljs.core.truth_(inst_18028)){
var statearr_18053_18073 = state_18048__$1;
(statearr_18053_18073[(1)] = (5));

} else {
var statearr_18054_18074 = state_18048__$1;
(statearr_18054_18074[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18049 === (13))){
var state_18048__$1 = state_18048;
var statearr_18055_18075 = state_18048__$1;
(statearr_18055_18075[(2)] = null);

(statearr_18055_18075[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18049 === (6))){
var inst_18027 = (state_18048[(7)]);
var state_18048__$1 = state_18048;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18048__$1,(11),to,inst_18027);
} else {
if((state_val_18049 === (3))){
var inst_18046 = (state_18048[(2)]);
var state_18048__$1 = state_18048;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18048__$1,inst_18046);
} else {
if((state_val_18049 === (12))){
var state_18048__$1 = state_18048;
var statearr_18056_18076 = state_18048__$1;
(statearr_18056_18076[(2)] = null);

(statearr_18056_18076[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18049 === (2))){
var state_18048__$1 = state_18048;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18048__$1,(4),from);
} else {
if((state_val_18049 === (11))){
var inst_18037 = (state_18048[(2)]);
var state_18048__$1 = state_18048;
if(cljs.core.truth_(inst_18037)){
var statearr_18057_18077 = state_18048__$1;
(statearr_18057_18077[(1)] = (12));

} else {
var statearr_18058_18078 = state_18048__$1;
(statearr_18058_18078[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18049 === (9))){
var state_18048__$1 = state_18048;
var statearr_18059_18079 = state_18048__$1;
(statearr_18059_18079[(2)] = null);

(statearr_18059_18079[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18049 === (5))){
var state_18048__$1 = state_18048;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18060_18080 = state_18048__$1;
(statearr_18060_18080[(1)] = (8));

} else {
var statearr_18061_18081 = state_18048__$1;
(statearr_18061_18081[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18049 === (14))){
var inst_18042 = (state_18048[(2)]);
var state_18048__$1 = state_18048;
var statearr_18062_18082 = state_18048__$1;
(statearr_18062_18082[(2)] = inst_18042);

(statearr_18062_18082[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18049 === (10))){
var inst_18034 = (state_18048[(2)]);
var state_18048__$1 = state_18048;
var statearr_18063_18083 = state_18048__$1;
(statearr_18063_18083[(2)] = inst_18034);

(statearr_18063_18083[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18049 === (8))){
var inst_18031 = cljs.core.async.close_BANG_(to);
var state_18048__$1 = state_18048;
var statearr_18064_18084 = state_18048__$1;
(statearr_18064_18084[(2)] = inst_18031);

(statearr_18064_18084[(1)] = (10));


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
});})(c__17921__auto___18070))
;
return ((function (switch__17819__auto__,c__17921__auto___18070){
return (function() {
var cljs$core$async$state_machine__17820__auto__ = null;
var cljs$core$async$state_machine__17820__auto____0 = (function (){
var statearr_18065 = [null,null,null,null,null,null,null,null];
(statearr_18065[(0)] = cljs$core$async$state_machine__17820__auto__);

(statearr_18065[(1)] = (1));

return statearr_18065;
});
var cljs$core$async$state_machine__17820__auto____1 = (function (state_18048){
while(true){
var ret_value__17821__auto__ = (function (){try{while(true){
var result__17822__auto__ = switch__17819__auto__(state_18048);
if(cljs.core.keyword_identical_QMARK_(result__17822__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17822__auto__;
}
break;
}
}catch (e18066){if((e18066 instanceof Object)){
var ex__17823__auto__ = e18066;
var statearr_18067_18085 = state_18048;
(statearr_18067_18085[(5)] = ex__17823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18048);

return cljs.core.cst$kw$recur;
} else {
throw e18066;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17821__auto__,cljs.core.cst$kw$recur)){
var G__18086 = state_18048;
state_18048 = G__18086;
continue;
} else {
return ret_value__17821__auto__;
}
break;
}
});
cljs$core$async$state_machine__17820__auto__ = function(state_18048){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17820__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17820__auto____1.call(this,state_18048);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17820__auto____0;
cljs$core$async$state_machine__17820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17820__auto____1;
return cljs$core$async$state_machine__17820__auto__;
})()
;})(switch__17819__auto__,c__17921__auto___18070))
})();
var state__17923__auto__ = (function (){var statearr_18068 = (f__17922__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17922__auto__.cljs$core$IFn$_invoke$arity$0() : f__17922__auto__.call(null));
(statearr_18068[(6)] = c__17921__auto___18070);

return statearr_18068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17923__auto__);
});})(c__17921__auto___18070))
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
return (function (p__18087){
var vec__18088 = p__18087;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18088,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18088,(1),null);
var job = vec__18088;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__17921__auto___18259 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17921__auto___18259,res,vec__18088,v,p,job,jobs,results){
return (function (){
var f__17922__auto__ = (function (){var switch__17819__auto__ = ((function (c__17921__auto___18259,res,vec__18088,v,p,job,jobs,results){
return (function (state_18095){
var state_val_18096 = (state_18095[(1)]);
if((state_val_18096 === (1))){
var state_18095__$1 = state_18095;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18095__$1,(2),res,v);
} else {
if((state_val_18096 === (2))){
var inst_18092 = (state_18095[(2)]);
var inst_18093 = cljs.core.async.close_BANG_(res);
var state_18095__$1 = (function (){var statearr_18097 = state_18095;
(statearr_18097[(7)] = inst_18092);

return statearr_18097;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18095__$1,inst_18093);
} else {
return null;
}
}
});})(c__17921__auto___18259,res,vec__18088,v,p,job,jobs,results))
;
return ((function (switch__17819__auto__,c__17921__auto___18259,res,vec__18088,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17820__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17820__auto____0 = (function (){
var statearr_18098 = [null,null,null,null,null,null,null,null];
(statearr_18098[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17820__auto__);

(statearr_18098[(1)] = (1));

return statearr_18098;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17820__auto____1 = (function (state_18095){
while(true){
var ret_value__17821__auto__ = (function (){try{while(true){
var result__17822__auto__ = switch__17819__auto__(state_18095);
if(cljs.core.keyword_identical_QMARK_(result__17822__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17822__auto__;
}
break;
}
}catch (e18099){if((e18099 instanceof Object)){
var ex__17823__auto__ = e18099;
var statearr_18100_18260 = state_18095;
(statearr_18100_18260[(5)] = ex__17823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18095);

return cljs.core.cst$kw$recur;
} else {
throw e18099;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17821__auto__,cljs.core.cst$kw$recur)){
var G__18261 = state_18095;
state_18095 = G__18261;
continue;
} else {
return ret_value__17821__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17820__auto__ = function(state_18095){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17820__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17820__auto____1.call(this,state_18095);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__17820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17820__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17820__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17820__auto__;
})()
;})(switch__17819__auto__,c__17921__auto___18259,res,vec__18088,v,p,job,jobs,results))
})();
var state__17923__auto__ = (function (){var statearr_18101 = (f__17922__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17922__auto__.cljs$core$IFn$_invoke$arity$0() : f__17922__auto__.call(null));
(statearr_18101[(6)] = c__17921__auto___18259);

return statearr_18101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17923__auto__);
});})(c__17921__auto___18259,res,vec__18088,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__18102){
var vec__18103 = p__18102;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18103,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18103,(1),null);
var job = vec__18103;
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
var n__9911__auto___18262 = n;
var __18263 = (0);
while(true){
if((__18263 < n__9911__auto___18262)){
var G__18106_18264 = type;
var G__18106_18265__$1 = (((G__18106_18264 instanceof cljs.core.Keyword))?G__18106_18264.fqn:null);
switch (G__18106_18265__$1) {
case "compute":
var c__17921__auto___18267 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18263,c__17921__auto___18267,G__18106_18264,G__18106_18265__$1,n__9911__auto___18262,jobs,results,process,async){
return (function (){
var f__17922__auto__ = (function (){var switch__17819__auto__ = ((function (__18263,c__17921__auto___18267,G__18106_18264,G__18106_18265__$1,n__9911__auto___18262,jobs,results,process,async){
return (function (state_18119){
var state_val_18120 = (state_18119[(1)]);
if((state_val_18120 === (1))){
var state_18119__$1 = state_18119;
var statearr_18121_18268 = state_18119__$1;
(statearr_18121_18268[(2)] = null);

(statearr_18121_18268[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18120 === (2))){
var state_18119__$1 = state_18119;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18119__$1,(4),jobs);
} else {
if((state_val_18120 === (3))){
var inst_18117 = (state_18119[(2)]);
var state_18119__$1 = state_18119;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18119__$1,inst_18117);
} else {
if((state_val_18120 === (4))){
var inst_18109 = (state_18119[(2)]);
var inst_18110 = process(inst_18109);
var state_18119__$1 = state_18119;
if(cljs.core.truth_(inst_18110)){
var statearr_18122_18269 = state_18119__$1;
(statearr_18122_18269[(1)] = (5));

} else {
var statearr_18123_18270 = state_18119__$1;
(statearr_18123_18270[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18120 === (5))){
var state_18119__$1 = state_18119;
var statearr_18124_18271 = state_18119__$1;
(statearr_18124_18271[(2)] = null);

(statearr_18124_18271[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18120 === (6))){
var state_18119__$1 = state_18119;
var statearr_18125_18272 = state_18119__$1;
(statearr_18125_18272[(2)] = null);

(statearr_18125_18272[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18120 === (7))){
var inst_18115 = (state_18119[(2)]);
var state_18119__$1 = state_18119;
var statearr_18126_18273 = state_18119__$1;
(statearr_18126_18273[(2)] = inst_18115);

(statearr_18126_18273[(1)] = (3));


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
});})(__18263,c__17921__auto___18267,G__18106_18264,G__18106_18265__$1,n__9911__auto___18262,jobs,results,process,async))
;
return ((function (__18263,switch__17819__auto__,c__17921__auto___18267,G__18106_18264,G__18106_18265__$1,n__9911__auto___18262,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17820__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17820__auto____0 = (function (){
var statearr_18127 = [null,null,null,null,null,null,null];
(statearr_18127[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17820__auto__);

(statearr_18127[(1)] = (1));

return statearr_18127;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17820__auto____1 = (function (state_18119){
while(true){
var ret_value__17821__auto__ = (function (){try{while(true){
var result__17822__auto__ = switch__17819__auto__(state_18119);
if(cljs.core.keyword_identical_QMARK_(result__17822__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17822__auto__;
}
break;
}
}catch (e18128){if((e18128 instanceof Object)){
var ex__17823__auto__ = e18128;
var statearr_18129_18274 = state_18119;
(statearr_18129_18274[(5)] = ex__17823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18119);

return cljs.core.cst$kw$recur;
} else {
throw e18128;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17821__auto__,cljs.core.cst$kw$recur)){
var G__18275 = state_18119;
state_18119 = G__18275;
continue;
} else {
return ret_value__17821__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17820__auto__ = function(state_18119){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17820__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17820__auto____1.call(this,state_18119);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__17820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17820__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17820__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17820__auto__;
})()
;})(__18263,switch__17819__auto__,c__17921__auto___18267,G__18106_18264,G__18106_18265__$1,n__9911__auto___18262,jobs,results,process,async))
})();
var state__17923__auto__ = (function (){var statearr_18130 = (f__17922__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17922__auto__.cljs$core$IFn$_invoke$arity$0() : f__17922__auto__.call(null));
(statearr_18130[(6)] = c__17921__auto___18267);

return statearr_18130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17923__auto__);
});})(__18263,c__17921__auto___18267,G__18106_18264,G__18106_18265__$1,n__9911__auto___18262,jobs,results,process,async))
);


break;
case "async":
var c__17921__auto___18276 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18263,c__17921__auto___18276,G__18106_18264,G__18106_18265__$1,n__9911__auto___18262,jobs,results,process,async){
return (function (){
var f__17922__auto__ = (function (){var switch__17819__auto__ = ((function (__18263,c__17921__auto___18276,G__18106_18264,G__18106_18265__$1,n__9911__auto___18262,jobs,results,process,async){
return (function (state_18143){
var state_val_18144 = (state_18143[(1)]);
if((state_val_18144 === (1))){
var state_18143__$1 = state_18143;
var statearr_18145_18277 = state_18143__$1;
(statearr_18145_18277[(2)] = null);

(statearr_18145_18277[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18144 === (2))){
var state_18143__$1 = state_18143;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18143__$1,(4),jobs);
} else {
if((state_val_18144 === (3))){
var inst_18141 = (state_18143[(2)]);
var state_18143__$1 = state_18143;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18143__$1,inst_18141);
} else {
if((state_val_18144 === (4))){
var inst_18133 = (state_18143[(2)]);
var inst_18134 = async(inst_18133);
var state_18143__$1 = state_18143;
if(cljs.core.truth_(inst_18134)){
var statearr_18146_18278 = state_18143__$1;
(statearr_18146_18278[(1)] = (5));

} else {
var statearr_18147_18279 = state_18143__$1;
(statearr_18147_18279[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18144 === (5))){
var state_18143__$1 = state_18143;
var statearr_18148_18280 = state_18143__$1;
(statearr_18148_18280[(2)] = null);

(statearr_18148_18280[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18144 === (6))){
var state_18143__$1 = state_18143;
var statearr_18149_18281 = state_18143__$1;
(statearr_18149_18281[(2)] = null);

(statearr_18149_18281[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18144 === (7))){
var inst_18139 = (state_18143[(2)]);
var state_18143__$1 = state_18143;
var statearr_18150_18282 = state_18143__$1;
(statearr_18150_18282[(2)] = inst_18139);

(statearr_18150_18282[(1)] = (3));


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
});})(__18263,c__17921__auto___18276,G__18106_18264,G__18106_18265__$1,n__9911__auto___18262,jobs,results,process,async))
;
return ((function (__18263,switch__17819__auto__,c__17921__auto___18276,G__18106_18264,G__18106_18265__$1,n__9911__auto___18262,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17820__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17820__auto____0 = (function (){
var statearr_18151 = [null,null,null,null,null,null,null];
(statearr_18151[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17820__auto__);

(statearr_18151[(1)] = (1));

return statearr_18151;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17820__auto____1 = (function (state_18143){
while(true){
var ret_value__17821__auto__ = (function (){try{while(true){
var result__17822__auto__ = switch__17819__auto__(state_18143);
if(cljs.core.keyword_identical_QMARK_(result__17822__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17822__auto__;
}
break;
}
}catch (e18152){if((e18152 instanceof Object)){
var ex__17823__auto__ = e18152;
var statearr_18153_18283 = state_18143;
(statearr_18153_18283[(5)] = ex__17823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18143);

return cljs.core.cst$kw$recur;
} else {
throw e18152;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17821__auto__,cljs.core.cst$kw$recur)){
var G__18284 = state_18143;
state_18143 = G__18284;
continue;
} else {
return ret_value__17821__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17820__auto__ = function(state_18143){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17820__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17820__auto____1.call(this,state_18143);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__17820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17820__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17820__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17820__auto__;
})()
;})(__18263,switch__17819__auto__,c__17921__auto___18276,G__18106_18264,G__18106_18265__$1,n__9911__auto___18262,jobs,results,process,async))
})();
var state__17923__auto__ = (function (){var statearr_18154 = (f__17922__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17922__auto__.cljs$core$IFn$_invoke$arity$0() : f__17922__auto__.call(null));
(statearr_18154[(6)] = c__17921__auto___18276);

return statearr_18154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17923__auto__);
});})(__18263,c__17921__auto___18276,G__18106_18264,G__18106_18265__$1,n__9911__auto___18262,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18106_18265__$1)].join('')));

}

var G__18285 = (__18263 + (1));
__18263 = G__18285;
continue;
} else {
}
break;
}

var c__17921__auto___18286 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17921__auto___18286,jobs,results,process,async){
return (function (){
var f__17922__auto__ = (function (){var switch__17819__auto__ = ((function (c__17921__auto___18286,jobs,results,process,async){
return (function (state_18176){
var state_val_18177 = (state_18176[(1)]);
if((state_val_18177 === (1))){
var state_18176__$1 = state_18176;
var statearr_18178_18287 = state_18176__$1;
(statearr_18178_18287[(2)] = null);

(statearr_18178_18287[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18177 === (2))){
var state_18176__$1 = state_18176;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18176__$1,(4),from);
} else {
if((state_val_18177 === (3))){
var inst_18174 = (state_18176[(2)]);
var state_18176__$1 = state_18176;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18176__$1,inst_18174);
} else {
if((state_val_18177 === (4))){
var inst_18157 = (state_18176[(7)]);
var inst_18157__$1 = (state_18176[(2)]);
var inst_18158 = (inst_18157__$1 == null);
var state_18176__$1 = (function (){var statearr_18179 = state_18176;
(statearr_18179[(7)] = inst_18157__$1);

return statearr_18179;
})();
if(cljs.core.truth_(inst_18158)){
var statearr_18180_18288 = state_18176__$1;
(statearr_18180_18288[(1)] = (5));

} else {
var statearr_18181_18289 = state_18176__$1;
(statearr_18181_18289[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18177 === (5))){
var inst_18160 = cljs.core.async.close_BANG_(jobs);
var state_18176__$1 = state_18176;
var statearr_18182_18290 = state_18176__$1;
(statearr_18182_18290[(2)] = inst_18160);

(statearr_18182_18290[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18177 === (6))){
var inst_18157 = (state_18176[(7)]);
var inst_18162 = (state_18176[(8)]);
var inst_18162__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_18163 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18164 = [inst_18157,inst_18162__$1];
var inst_18165 = (new cljs.core.PersistentVector(null,2,(5),inst_18163,inst_18164,null));
var state_18176__$1 = (function (){var statearr_18183 = state_18176;
(statearr_18183[(8)] = inst_18162__$1);

return statearr_18183;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18176__$1,(8),jobs,inst_18165);
} else {
if((state_val_18177 === (7))){
var inst_18172 = (state_18176[(2)]);
var state_18176__$1 = state_18176;
var statearr_18184_18291 = state_18176__$1;
(statearr_18184_18291[(2)] = inst_18172);

(statearr_18184_18291[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18177 === (8))){
var inst_18162 = (state_18176[(8)]);
var inst_18167 = (state_18176[(2)]);
var state_18176__$1 = (function (){var statearr_18185 = state_18176;
(statearr_18185[(9)] = inst_18167);

return statearr_18185;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18176__$1,(9),results,inst_18162);
} else {
if((state_val_18177 === (9))){
var inst_18169 = (state_18176[(2)]);
var state_18176__$1 = (function (){var statearr_18186 = state_18176;
(statearr_18186[(10)] = inst_18169);

return statearr_18186;
})();
var statearr_18187_18292 = state_18176__$1;
(statearr_18187_18292[(2)] = null);

(statearr_18187_18292[(1)] = (2));


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
});})(c__17921__auto___18286,jobs,results,process,async))
;
return ((function (switch__17819__auto__,c__17921__auto___18286,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17820__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17820__auto____0 = (function (){
var statearr_18188 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18188[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17820__auto__);

(statearr_18188[(1)] = (1));

return statearr_18188;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17820__auto____1 = (function (state_18176){
while(true){
var ret_value__17821__auto__ = (function (){try{while(true){
var result__17822__auto__ = switch__17819__auto__(state_18176);
if(cljs.core.keyword_identical_QMARK_(result__17822__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17822__auto__;
}
break;
}
}catch (e18189){if((e18189 instanceof Object)){
var ex__17823__auto__ = e18189;
var statearr_18190_18293 = state_18176;
(statearr_18190_18293[(5)] = ex__17823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18176);

return cljs.core.cst$kw$recur;
} else {
throw e18189;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17821__auto__,cljs.core.cst$kw$recur)){
var G__18294 = state_18176;
state_18176 = G__18294;
continue;
} else {
return ret_value__17821__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17820__auto__ = function(state_18176){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17820__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17820__auto____1.call(this,state_18176);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__17820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17820__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17820__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17820__auto__;
})()
;})(switch__17819__auto__,c__17921__auto___18286,jobs,results,process,async))
})();
var state__17923__auto__ = (function (){var statearr_18191 = (f__17922__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17922__auto__.cljs$core$IFn$_invoke$arity$0() : f__17922__auto__.call(null));
(statearr_18191[(6)] = c__17921__auto___18286);

return statearr_18191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17923__auto__);
});})(c__17921__auto___18286,jobs,results,process,async))
);


var c__17921__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17921__auto__,jobs,results,process,async){
return (function (){
var f__17922__auto__ = (function (){var switch__17819__auto__ = ((function (c__17921__auto__,jobs,results,process,async){
return (function (state_18229){
var state_val_18230 = (state_18229[(1)]);
if((state_val_18230 === (7))){
var inst_18225 = (state_18229[(2)]);
var state_18229__$1 = state_18229;
var statearr_18231_18295 = state_18229__$1;
(statearr_18231_18295[(2)] = inst_18225);

(statearr_18231_18295[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18230 === (20))){
var state_18229__$1 = state_18229;
var statearr_18232_18296 = state_18229__$1;
(statearr_18232_18296[(2)] = null);

(statearr_18232_18296[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18230 === (1))){
var state_18229__$1 = state_18229;
var statearr_18233_18297 = state_18229__$1;
(statearr_18233_18297[(2)] = null);

(statearr_18233_18297[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18230 === (4))){
var inst_18194 = (state_18229[(7)]);
var inst_18194__$1 = (state_18229[(2)]);
var inst_18195 = (inst_18194__$1 == null);
var state_18229__$1 = (function (){var statearr_18234 = state_18229;
(statearr_18234[(7)] = inst_18194__$1);

return statearr_18234;
})();
if(cljs.core.truth_(inst_18195)){
var statearr_18235_18298 = state_18229__$1;
(statearr_18235_18298[(1)] = (5));

} else {
var statearr_18236_18299 = state_18229__$1;
(statearr_18236_18299[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18230 === (15))){
var inst_18207 = (state_18229[(8)]);
var state_18229__$1 = state_18229;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18229__$1,(18),to,inst_18207);
} else {
if((state_val_18230 === (21))){
var inst_18220 = (state_18229[(2)]);
var state_18229__$1 = state_18229;
var statearr_18237_18300 = state_18229__$1;
(statearr_18237_18300[(2)] = inst_18220);

(statearr_18237_18300[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18230 === (13))){
var inst_18222 = (state_18229[(2)]);
var state_18229__$1 = (function (){var statearr_18238 = state_18229;
(statearr_18238[(9)] = inst_18222);

return statearr_18238;
})();
var statearr_18239_18301 = state_18229__$1;
(statearr_18239_18301[(2)] = null);

(statearr_18239_18301[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18230 === (6))){
var inst_18194 = (state_18229[(7)]);
var state_18229__$1 = state_18229;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18229__$1,(11),inst_18194);
} else {
if((state_val_18230 === (17))){
var inst_18215 = (state_18229[(2)]);
var state_18229__$1 = state_18229;
if(cljs.core.truth_(inst_18215)){
var statearr_18240_18302 = state_18229__$1;
(statearr_18240_18302[(1)] = (19));

} else {
var statearr_18241_18303 = state_18229__$1;
(statearr_18241_18303[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18230 === (3))){
var inst_18227 = (state_18229[(2)]);
var state_18229__$1 = state_18229;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18229__$1,inst_18227);
} else {
if((state_val_18230 === (12))){
var inst_18204 = (state_18229[(10)]);
var state_18229__$1 = state_18229;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18229__$1,(14),inst_18204);
} else {
if((state_val_18230 === (2))){
var state_18229__$1 = state_18229;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18229__$1,(4),results);
} else {
if((state_val_18230 === (19))){
var state_18229__$1 = state_18229;
var statearr_18242_18304 = state_18229__$1;
(statearr_18242_18304[(2)] = null);

(statearr_18242_18304[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18230 === (11))){
var inst_18204 = (state_18229[(2)]);
var state_18229__$1 = (function (){var statearr_18243 = state_18229;
(statearr_18243[(10)] = inst_18204);

return statearr_18243;
})();
var statearr_18244_18305 = state_18229__$1;
(statearr_18244_18305[(2)] = null);

(statearr_18244_18305[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18230 === (9))){
var state_18229__$1 = state_18229;
var statearr_18245_18306 = state_18229__$1;
(statearr_18245_18306[(2)] = null);

(statearr_18245_18306[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18230 === (5))){
var state_18229__$1 = state_18229;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18246_18307 = state_18229__$1;
(statearr_18246_18307[(1)] = (8));

} else {
var statearr_18247_18308 = state_18229__$1;
(statearr_18247_18308[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18230 === (14))){
var inst_18209 = (state_18229[(11)]);
var inst_18207 = (state_18229[(8)]);
var inst_18207__$1 = (state_18229[(2)]);
var inst_18208 = (inst_18207__$1 == null);
var inst_18209__$1 = cljs.core.not(inst_18208);
var state_18229__$1 = (function (){var statearr_18248 = state_18229;
(statearr_18248[(11)] = inst_18209__$1);

(statearr_18248[(8)] = inst_18207__$1);

return statearr_18248;
})();
if(inst_18209__$1){
var statearr_18249_18309 = state_18229__$1;
(statearr_18249_18309[(1)] = (15));

} else {
var statearr_18250_18310 = state_18229__$1;
(statearr_18250_18310[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18230 === (16))){
var inst_18209 = (state_18229[(11)]);
var state_18229__$1 = state_18229;
var statearr_18251_18311 = state_18229__$1;
(statearr_18251_18311[(2)] = inst_18209);

(statearr_18251_18311[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18230 === (10))){
var inst_18201 = (state_18229[(2)]);
var state_18229__$1 = state_18229;
var statearr_18252_18312 = state_18229__$1;
(statearr_18252_18312[(2)] = inst_18201);

(statearr_18252_18312[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18230 === (18))){
var inst_18212 = (state_18229[(2)]);
var state_18229__$1 = state_18229;
var statearr_18253_18313 = state_18229__$1;
(statearr_18253_18313[(2)] = inst_18212);

(statearr_18253_18313[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18230 === (8))){
var inst_18198 = cljs.core.async.close_BANG_(to);
var state_18229__$1 = state_18229;
var statearr_18254_18314 = state_18229__$1;
(statearr_18254_18314[(2)] = inst_18198);

(statearr_18254_18314[(1)] = (10));


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
});})(c__17921__auto__,jobs,results,process,async))
;
return ((function (switch__17819__auto__,c__17921__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17820__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17820__auto____0 = (function (){
var statearr_18255 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18255[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17820__auto__);

(statearr_18255[(1)] = (1));

return statearr_18255;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17820__auto____1 = (function (state_18229){
while(true){
var ret_value__17821__auto__ = (function (){try{while(true){
var result__17822__auto__ = switch__17819__auto__(state_18229);
if(cljs.core.keyword_identical_QMARK_(result__17822__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17822__auto__;
}
break;
}
}catch (e18256){if((e18256 instanceof Object)){
var ex__17823__auto__ = e18256;
var statearr_18257_18315 = state_18229;
(statearr_18257_18315[(5)] = ex__17823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18229);

return cljs.core.cst$kw$recur;
} else {
throw e18256;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17821__auto__,cljs.core.cst$kw$recur)){
var G__18316 = state_18229;
state_18229 = G__18316;
continue;
} else {
return ret_value__17821__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17820__auto__ = function(state_18229){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17820__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17820__auto____1.call(this,state_18229);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__17820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17820__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17820__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17820__auto__;
})()
;})(switch__17819__auto__,c__17921__auto__,jobs,results,process,async))
})();
var state__17923__auto__ = (function (){var statearr_18258 = (f__17922__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17922__auto__.cljs$core$IFn$_invoke$arity$0() : f__17922__auto__.call(null));
(statearr_18258[(6)] = c__17921__auto__);

return statearr_18258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17923__auto__);
});})(c__17921__auto__,jobs,results,process,async))
);

return c__17921__auto__;
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
var G__18318 = arguments.length;
switch (G__18318) {
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
var G__18321 = arguments.length;
switch (G__18321) {
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
var G__18324 = arguments.length;
switch (G__18324) {
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
var c__17921__auto___18373 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17921__auto___18373,tc,fc){
return (function (){
var f__17922__auto__ = (function (){var switch__17819__auto__ = ((function (c__17921__auto___18373,tc,fc){
return (function (state_18350){
var state_val_18351 = (state_18350[(1)]);
if((state_val_18351 === (7))){
var inst_18346 = (state_18350[(2)]);
var state_18350__$1 = state_18350;
var statearr_18352_18374 = state_18350__$1;
(statearr_18352_18374[(2)] = inst_18346);

(statearr_18352_18374[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18351 === (1))){
var state_18350__$1 = state_18350;
var statearr_18353_18375 = state_18350__$1;
(statearr_18353_18375[(2)] = null);

(statearr_18353_18375[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18351 === (4))){
var inst_18327 = (state_18350[(7)]);
var inst_18327__$1 = (state_18350[(2)]);
var inst_18328 = (inst_18327__$1 == null);
var state_18350__$1 = (function (){var statearr_18354 = state_18350;
(statearr_18354[(7)] = inst_18327__$1);

return statearr_18354;
})();
if(cljs.core.truth_(inst_18328)){
var statearr_18355_18376 = state_18350__$1;
(statearr_18355_18376[(1)] = (5));

} else {
var statearr_18356_18377 = state_18350__$1;
(statearr_18356_18377[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18351 === (13))){
var state_18350__$1 = state_18350;
var statearr_18357_18378 = state_18350__$1;
(statearr_18357_18378[(2)] = null);

(statearr_18357_18378[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18351 === (6))){
var inst_18327 = (state_18350[(7)]);
var inst_18333 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18327) : p.call(null,inst_18327));
var state_18350__$1 = state_18350;
if(cljs.core.truth_(inst_18333)){
var statearr_18358_18379 = state_18350__$1;
(statearr_18358_18379[(1)] = (9));

} else {
var statearr_18359_18380 = state_18350__$1;
(statearr_18359_18380[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18351 === (3))){
var inst_18348 = (state_18350[(2)]);
var state_18350__$1 = state_18350;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18350__$1,inst_18348);
} else {
if((state_val_18351 === (12))){
var state_18350__$1 = state_18350;
var statearr_18360_18381 = state_18350__$1;
(statearr_18360_18381[(2)] = null);

(statearr_18360_18381[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18351 === (2))){
var state_18350__$1 = state_18350;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18350__$1,(4),ch);
} else {
if((state_val_18351 === (11))){
var inst_18327 = (state_18350[(7)]);
var inst_18337 = (state_18350[(2)]);
var state_18350__$1 = state_18350;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18350__$1,(8),inst_18337,inst_18327);
} else {
if((state_val_18351 === (9))){
var state_18350__$1 = state_18350;
var statearr_18361_18382 = state_18350__$1;
(statearr_18361_18382[(2)] = tc);

(statearr_18361_18382[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18351 === (5))){
var inst_18330 = cljs.core.async.close_BANG_(tc);
var inst_18331 = cljs.core.async.close_BANG_(fc);
var state_18350__$1 = (function (){var statearr_18362 = state_18350;
(statearr_18362[(8)] = inst_18330);

return statearr_18362;
})();
var statearr_18363_18383 = state_18350__$1;
(statearr_18363_18383[(2)] = inst_18331);

(statearr_18363_18383[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18351 === (14))){
var inst_18344 = (state_18350[(2)]);
var state_18350__$1 = state_18350;
var statearr_18364_18384 = state_18350__$1;
(statearr_18364_18384[(2)] = inst_18344);

(statearr_18364_18384[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18351 === (10))){
var state_18350__$1 = state_18350;
var statearr_18365_18385 = state_18350__$1;
(statearr_18365_18385[(2)] = fc);

(statearr_18365_18385[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18351 === (8))){
var inst_18339 = (state_18350[(2)]);
var state_18350__$1 = state_18350;
if(cljs.core.truth_(inst_18339)){
var statearr_18366_18386 = state_18350__$1;
(statearr_18366_18386[(1)] = (12));

} else {
var statearr_18367_18387 = state_18350__$1;
(statearr_18367_18387[(1)] = (13));

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
});})(c__17921__auto___18373,tc,fc))
;
return ((function (switch__17819__auto__,c__17921__auto___18373,tc,fc){
return (function() {
var cljs$core$async$state_machine__17820__auto__ = null;
var cljs$core$async$state_machine__17820__auto____0 = (function (){
var statearr_18368 = [null,null,null,null,null,null,null,null,null];
(statearr_18368[(0)] = cljs$core$async$state_machine__17820__auto__);

(statearr_18368[(1)] = (1));

return statearr_18368;
});
var cljs$core$async$state_machine__17820__auto____1 = (function (state_18350){
while(true){
var ret_value__17821__auto__ = (function (){try{while(true){
var result__17822__auto__ = switch__17819__auto__(state_18350);
if(cljs.core.keyword_identical_QMARK_(result__17822__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17822__auto__;
}
break;
}
}catch (e18369){if((e18369 instanceof Object)){
var ex__17823__auto__ = e18369;
var statearr_18370_18388 = state_18350;
(statearr_18370_18388[(5)] = ex__17823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18350);

return cljs.core.cst$kw$recur;
} else {
throw e18369;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17821__auto__,cljs.core.cst$kw$recur)){
var G__18389 = state_18350;
state_18350 = G__18389;
continue;
} else {
return ret_value__17821__auto__;
}
break;
}
});
cljs$core$async$state_machine__17820__auto__ = function(state_18350){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17820__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17820__auto____1.call(this,state_18350);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17820__auto____0;
cljs$core$async$state_machine__17820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17820__auto____1;
return cljs$core$async$state_machine__17820__auto__;
})()
;})(switch__17819__auto__,c__17921__auto___18373,tc,fc))
})();
var state__17923__auto__ = (function (){var statearr_18371 = (f__17922__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17922__auto__.cljs$core$IFn$_invoke$arity$0() : f__17922__auto__.call(null));
(statearr_18371[(6)] = c__17921__auto___18373);

return statearr_18371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17923__auto__);
});})(c__17921__auto___18373,tc,fc))
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
var c__17921__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17921__auto__){
return (function (){
var f__17922__auto__ = (function (){var switch__17819__auto__ = ((function (c__17921__auto__){
return (function (state_18410){
var state_val_18411 = (state_18410[(1)]);
if((state_val_18411 === (7))){
var inst_18406 = (state_18410[(2)]);
var state_18410__$1 = state_18410;
var statearr_18412_18430 = state_18410__$1;
(statearr_18412_18430[(2)] = inst_18406);

(statearr_18412_18430[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18411 === (1))){
var inst_18390 = init;
var state_18410__$1 = (function (){var statearr_18413 = state_18410;
(statearr_18413[(7)] = inst_18390);

return statearr_18413;
})();
var statearr_18414_18431 = state_18410__$1;
(statearr_18414_18431[(2)] = null);

(statearr_18414_18431[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18411 === (4))){
var inst_18393 = (state_18410[(8)]);
var inst_18393__$1 = (state_18410[(2)]);
var inst_18394 = (inst_18393__$1 == null);
var state_18410__$1 = (function (){var statearr_18415 = state_18410;
(statearr_18415[(8)] = inst_18393__$1);

return statearr_18415;
})();
if(cljs.core.truth_(inst_18394)){
var statearr_18416_18432 = state_18410__$1;
(statearr_18416_18432[(1)] = (5));

} else {
var statearr_18417_18433 = state_18410__$1;
(statearr_18417_18433[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18411 === (6))){
var inst_18393 = (state_18410[(8)]);
var inst_18397 = (state_18410[(9)]);
var inst_18390 = (state_18410[(7)]);
var inst_18397__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_18390,inst_18393) : f.call(null,inst_18390,inst_18393));
var inst_18398 = cljs.core.reduced_QMARK_(inst_18397__$1);
var state_18410__$1 = (function (){var statearr_18418 = state_18410;
(statearr_18418[(9)] = inst_18397__$1);

return statearr_18418;
})();
if(inst_18398){
var statearr_18419_18434 = state_18410__$1;
(statearr_18419_18434[(1)] = (8));

} else {
var statearr_18420_18435 = state_18410__$1;
(statearr_18420_18435[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18411 === (3))){
var inst_18408 = (state_18410[(2)]);
var state_18410__$1 = state_18410;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18410__$1,inst_18408);
} else {
if((state_val_18411 === (2))){
var state_18410__$1 = state_18410;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18410__$1,(4),ch);
} else {
if((state_val_18411 === (9))){
var inst_18397 = (state_18410[(9)]);
var inst_18390 = inst_18397;
var state_18410__$1 = (function (){var statearr_18421 = state_18410;
(statearr_18421[(7)] = inst_18390);

return statearr_18421;
})();
var statearr_18422_18436 = state_18410__$1;
(statearr_18422_18436[(2)] = null);

(statearr_18422_18436[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18411 === (5))){
var inst_18390 = (state_18410[(7)]);
var state_18410__$1 = state_18410;
var statearr_18423_18437 = state_18410__$1;
(statearr_18423_18437[(2)] = inst_18390);

(statearr_18423_18437[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18411 === (10))){
var inst_18404 = (state_18410[(2)]);
var state_18410__$1 = state_18410;
var statearr_18424_18438 = state_18410__$1;
(statearr_18424_18438[(2)] = inst_18404);

(statearr_18424_18438[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18411 === (8))){
var inst_18397 = (state_18410[(9)]);
var inst_18400 = cljs.core.deref(inst_18397);
var state_18410__$1 = state_18410;
var statearr_18425_18439 = state_18410__$1;
(statearr_18425_18439[(2)] = inst_18400);

(statearr_18425_18439[(1)] = (10));


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
});})(c__17921__auto__))
;
return ((function (switch__17819__auto__,c__17921__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__17820__auto__ = null;
var cljs$core$async$reduce_$_state_machine__17820__auto____0 = (function (){
var statearr_18426 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18426[(0)] = cljs$core$async$reduce_$_state_machine__17820__auto__);

(statearr_18426[(1)] = (1));

return statearr_18426;
});
var cljs$core$async$reduce_$_state_machine__17820__auto____1 = (function (state_18410){
while(true){
var ret_value__17821__auto__ = (function (){try{while(true){
var result__17822__auto__ = switch__17819__auto__(state_18410);
if(cljs.core.keyword_identical_QMARK_(result__17822__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17822__auto__;
}
break;
}
}catch (e18427){if((e18427 instanceof Object)){
var ex__17823__auto__ = e18427;
var statearr_18428_18440 = state_18410;
(statearr_18428_18440[(5)] = ex__17823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18410);

return cljs.core.cst$kw$recur;
} else {
throw e18427;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17821__auto__,cljs.core.cst$kw$recur)){
var G__18441 = state_18410;
state_18410 = G__18441;
continue;
} else {
return ret_value__17821__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__17820__auto__ = function(state_18410){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__17820__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__17820__auto____1.call(this,state_18410);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__17820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__17820__auto____0;
cljs$core$async$reduce_$_state_machine__17820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__17820__auto____1;
return cljs$core$async$reduce_$_state_machine__17820__auto__;
})()
;})(switch__17819__auto__,c__17921__auto__))
})();
var state__17923__auto__ = (function (){var statearr_18429 = (f__17922__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17922__auto__.cljs$core$IFn$_invoke$arity$0() : f__17922__auto__.call(null));
(statearr_18429[(6)] = c__17921__auto__);

return statearr_18429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17923__auto__);
});})(c__17921__auto__))
);

return c__17921__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__17921__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17921__auto__,f__$1){
return (function (){
var f__17922__auto__ = (function (){var switch__17819__auto__ = ((function (c__17921__auto__,f__$1){
return (function (state_18447){
var state_val_18448 = (state_18447[(1)]);
if((state_val_18448 === (1))){
var inst_18442 = cljs.core.async.reduce(f__$1,init,ch);
var state_18447__$1 = state_18447;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18447__$1,(2),inst_18442);
} else {
if((state_val_18448 === (2))){
var inst_18444 = (state_18447[(2)]);
var inst_18445 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_18444) : f__$1.call(null,inst_18444));
var state_18447__$1 = state_18447;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18447__$1,inst_18445);
} else {
return null;
}
}
});})(c__17921__auto__,f__$1))
;
return ((function (switch__17819__auto__,c__17921__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__17820__auto__ = null;
var cljs$core$async$transduce_$_state_machine__17820__auto____0 = (function (){
var statearr_18449 = [null,null,null,null,null,null,null];
(statearr_18449[(0)] = cljs$core$async$transduce_$_state_machine__17820__auto__);

(statearr_18449[(1)] = (1));

return statearr_18449;
});
var cljs$core$async$transduce_$_state_machine__17820__auto____1 = (function (state_18447){
while(true){
var ret_value__17821__auto__ = (function (){try{while(true){
var result__17822__auto__ = switch__17819__auto__(state_18447);
if(cljs.core.keyword_identical_QMARK_(result__17822__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17822__auto__;
}
break;
}
}catch (e18450){if((e18450 instanceof Object)){
var ex__17823__auto__ = e18450;
var statearr_18451_18453 = state_18447;
(statearr_18451_18453[(5)] = ex__17823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18447);

return cljs.core.cst$kw$recur;
} else {
throw e18450;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17821__auto__,cljs.core.cst$kw$recur)){
var G__18454 = state_18447;
state_18447 = G__18454;
continue;
} else {
return ret_value__17821__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__17820__auto__ = function(state_18447){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__17820__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__17820__auto____1.call(this,state_18447);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__17820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__17820__auto____0;
cljs$core$async$transduce_$_state_machine__17820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__17820__auto____1;
return cljs$core$async$transduce_$_state_machine__17820__auto__;
})()
;})(switch__17819__auto__,c__17921__auto__,f__$1))
})();
var state__17923__auto__ = (function (){var statearr_18452 = (f__17922__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17922__auto__.cljs$core$IFn$_invoke$arity$0() : f__17922__auto__.call(null));
(statearr_18452[(6)] = c__17921__auto__);

return statearr_18452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17923__auto__);
});})(c__17921__auto__,f__$1))
);

return c__17921__auto__;
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
var G__18456 = arguments.length;
switch (G__18456) {
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
var c__17921__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17921__auto__){
return (function (){
var f__17922__auto__ = (function (){var switch__17819__auto__ = ((function (c__17921__auto__){
return (function (state_18481){
var state_val_18482 = (state_18481[(1)]);
if((state_val_18482 === (7))){
var inst_18463 = (state_18481[(2)]);
var state_18481__$1 = state_18481;
var statearr_18483_18504 = state_18481__$1;
(statearr_18483_18504[(2)] = inst_18463);

(statearr_18483_18504[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18482 === (1))){
var inst_18457 = cljs.core.seq(coll);
var inst_18458 = inst_18457;
var state_18481__$1 = (function (){var statearr_18484 = state_18481;
(statearr_18484[(7)] = inst_18458);

return statearr_18484;
})();
var statearr_18485_18505 = state_18481__$1;
(statearr_18485_18505[(2)] = null);

(statearr_18485_18505[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18482 === (4))){
var inst_18458 = (state_18481[(7)]);
var inst_18461 = cljs.core.first(inst_18458);
var state_18481__$1 = state_18481;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18481__$1,(7),ch,inst_18461);
} else {
if((state_val_18482 === (13))){
var inst_18475 = (state_18481[(2)]);
var state_18481__$1 = state_18481;
var statearr_18486_18506 = state_18481__$1;
(statearr_18486_18506[(2)] = inst_18475);

(statearr_18486_18506[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18482 === (6))){
var inst_18466 = (state_18481[(2)]);
var state_18481__$1 = state_18481;
if(cljs.core.truth_(inst_18466)){
var statearr_18487_18507 = state_18481__$1;
(statearr_18487_18507[(1)] = (8));

} else {
var statearr_18488_18508 = state_18481__$1;
(statearr_18488_18508[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18482 === (3))){
var inst_18479 = (state_18481[(2)]);
var state_18481__$1 = state_18481;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18481__$1,inst_18479);
} else {
if((state_val_18482 === (12))){
var state_18481__$1 = state_18481;
var statearr_18489_18509 = state_18481__$1;
(statearr_18489_18509[(2)] = null);

(statearr_18489_18509[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18482 === (2))){
var inst_18458 = (state_18481[(7)]);
var state_18481__$1 = state_18481;
if(cljs.core.truth_(inst_18458)){
var statearr_18490_18510 = state_18481__$1;
(statearr_18490_18510[(1)] = (4));

} else {
var statearr_18491_18511 = state_18481__$1;
(statearr_18491_18511[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18482 === (11))){
var inst_18472 = cljs.core.async.close_BANG_(ch);
var state_18481__$1 = state_18481;
var statearr_18492_18512 = state_18481__$1;
(statearr_18492_18512[(2)] = inst_18472);

(statearr_18492_18512[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18482 === (9))){
var state_18481__$1 = state_18481;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18493_18513 = state_18481__$1;
(statearr_18493_18513[(1)] = (11));

} else {
var statearr_18494_18514 = state_18481__$1;
(statearr_18494_18514[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18482 === (5))){
var inst_18458 = (state_18481[(7)]);
var state_18481__$1 = state_18481;
var statearr_18495_18515 = state_18481__$1;
(statearr_18495_18515[(2)] = inst_18458);

(statearr_18495_18515[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18482 === (10))){
var inst_18477 = (state_18481[(2)]);
var state_18481__$1 = state_18481;
var statearr_18496_18516 = state_18481__$1;
(statearr_18496_18516[(2)] = inst_18477);

(statearr_18496_18516[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18482 === (8))){
var inst_18458 = (state_18481[(7)]);
var inst_18468 = cljs.core.next(inst_18458);
var inst_18458__$1 = inst_18468;
var state_18481__$1 = (function (){var statearr_18497 = state_18481;
(statearr_18497[(7)] = inst_18458__$1);

return statearr_18497;
})();
var statearr_18498_18517 = state_18481__$1;
(statearr_18498_18517[(2)] = null);

(statearr_18498_18517[(1)] = (2));


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
});})(c__17921__auto__))
;
return ((function (switch__17819__auto__,c__17921__auto__){
return (function() {
var cljs$core$async$state_machine__17820__auto__ = null;
var cljs$core$async$state_machine__17820__auto____0 = (function (){
var statearr_18499 = [null,null,null,null,null,null,null,null];
(statearr_18499[(0)] = cljs$core$async$state_machine__17820__auto__);

(statearr_18499[(1)] = (1));

return statearr_18499;
});
var cljs$core$async$state_machine__17820__auto____1 = (function (state_18481){
while(true){
var ret_value__17821__auto__ = (function (){try{while(true){
var result__17822__auto__ = switch__17819__auto__(state_18481);
if(cljs.core.keyword_identical_QMARK_(result__17822__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17822__auto__;
}
break;
}
}catch (e18500){if((e18500 instanceof Object)){
var ex__17823__auto__ = e18500;
var statearr_18501_18518 = state_18481;
(statearr_18501_18518[(5)] = ex__17823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18481);

return cljs.core.cst$kw$recur;
} else {
throw e18500;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17821__auto__,cljs.core.cst$kw$recur)){
var G__18519 = state_18481;
state_18481 = G__18519;
continue;
} else {
return ret_value__17821__auto__;
}
break;
}
});
cljs$core$async$state_machine__17820__auto__ = function(state_18481){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17820__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17820__auto____1.call(this,state_18481);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17820__auto____0;
cljs$core$async$state_machine__17820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17820__auto____1;
return cljs$core$async$state_machine__17820__auto__;
})()
;})(switch__17819__auto__,c__17921__auto__))
})();
var state__17923__auto__ = (function (){var statearr_18502 = (f__17922__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17922__auto__.cljs$core$IFn$_invoke$arity$0() : f__17922__auto__.call(null));
(statearr_18502[(6)] = c__17921__auto__);

return statearr_18502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17923__auto__);
});})(c__17921__auto__))
);

return c__17921__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async18520 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18520 = (function (ch,cs,meta18521){
this.ch = ch;
this.cs = cs;
this.meta18521 = meta18521;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18520.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18522,meta18521__$1){
var self__ = this;
var _18522__$1 = this;
return (new cljs.core.async.t_cljs$core$async18520(self__.ch,self__.cs,meta18521__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async18520.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18522){
var self__ = this;
var _18522__$1 = this;
return self__.meta18521;
});})(cs))
;

cljs.core.async.t_cljs$core$async18520.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18520.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async18520.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18520.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18520.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18520.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18520.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta18521], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async18520.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18520.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18520";

cljs.core.async.t_cljs$core$async18520.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__9537__auto__,writer__9538__auto__,opt__9539__auto__){
return cljs.core._write(writer__9538__auto__,"cljs.core.async/t_cljs$core$async18520");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async18520 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async18520(ch__$1,cs__$1,meta18521){
return (new cljs.core.async.t_cljs$core$async18520(ch__$1,cs__$1,meta18521));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async18520(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__17921__auto___18742 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17921__auto___18742,cs,m,dchan,dctr,done){
return (function (){
var f__17922__auto__ = (function (){var switch__17819__auto__ = ((function (c__17921__auto___18742,cs,m,dchan,dctr,done){
return (function (state_18657){
var state_val_18658 = (state_18657[(1)]);
if((state_val_18658 === (7))){
var inst_18653 = (state_18657[(2)]);
var state_18657__$1 = state_18657;
var statearr_18659_18743 = state_18657__$1;
(statearr_18659_18743[(2)] = inst_18653);

(statearr_18659_18743[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18658 === (20))){
var inst_18556 = (state_18657[(7)]);
var inst_18568 = cljs.core.first(inst_18556);
var inst_18569 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18568,(0),null);
var inst_18570 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18568,(1),null);
var state_18657__$1 = (function (){var statearr_18660 = state_18657;
(statearr_18660[(8)] = inst_18569);

return statearr_18660;
})();
if(cljs.core.truth_(inst_18570)){
var statearr_18661_18744 = state_18657__$1;
(statearr_18661_18744[(1)] = (22));

} else {
var statearr_18662_18745 = state_18657__$1;
(statearr_18662_18745[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18658 === (27))){
var inst_18600 = (state_18657[(9)]);
var inst_18598 = (state_18657[(10)]);
var inst_18525 = (state_18657[(11)]);
var inst_18605 = (state_18657[(12)]);
var inst_18605__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18598,inst_18600);
var inst_18606 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18605__$1,inst_18525,done);
var state_18657__$1 = (function (){var statearr_18663 = state_18657;
(statearr_18663[(12)] = inst_18605__$1);

return statearr_18663;
})();
if(cljs.core.truth_(inst_18606)){
var statearr_18664_18746 = state_18657__$1;
(statearr_18664_18746[(1)] = (30));

} else {
var statearr_18665_18747 = state_18657__$1;
(statearr_18665_18747[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18658 === (1))){
var state_18657__$1 = state_18657;
var statearr_18666_18748 = state_18657__$1;
(statearr_18666_18748[(2)] = null);

(statearr_18666_18748[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18658 === (24))){
var inst_18556 = (state_18657[(7)]);
var inst_18575 = (state_18657[(2)]);
var inst_18576 = cljs.core.next(inst_18556);
var inst_18534 = inst_18576;
var inst_18535 = null;
var inst_18536 = (0);
var inst_18537 = (0);
var state_18657__$1 = (function (){var statearr_18667 = state_18657;
(statearr_18667[(13)] = inst_18534);

(statearr_18667[(14)] = inst_18537);

(statearr_18667[(15)] = inst_18536);

(statearr_18667[(16)] = inst_18575);

(statearr_18667[(17)] = inst_18535);

return statearr_18667;
})();
var statearr_18668_18749 = state_18657__$1;
(statearr_18668_18749[(2)] = null);

(statearr_18668_18749[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18658 === (39))){
var state_18657__$1 = state_18657;
var statearr_18672_18750 = state_18657__$1;
(statearr_18672_18750[(2)] = null);

(statearr_18672_18750[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18658 === (4))){
var inst_18525 = (state_18657[(11)]);
var inst_18525__$1 = (state_18657[(2)]);
var inst_18526 = (inst_18525__$1 == null);
var state_18657__$1 = (function (){var statearr_18673 = state_18657;
(statearr_18673[(11)] = inst_18525__$1);

return statearr_18673;
})();
if(cljs.core.truth_(inst_18526)){
var statearr_18674_18751 = state_18657__$1;
(statearr_18674_18751[(1)] = (5));

} else {
var statearr_18675_18752 = state_18657__$1;
(statearr_18675_18752[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18658 === (15))){
var inst_18534 = (state_18657[(13)]);
var inst_18537 = (state_18657[(14)]);
var inst_18536 = (state_18657[(15)]);
var inst_18535 = (state_18657[(17)]);
var inst_18552 = (state_18657[(2)]);
var inst_18553 = (inst_18537 + (1));
var tmp18669 = inst_18534;
var tmp18670 = inst_18536;
var tmp18671 = inst_18535;
var inst_18534__$1 = tmp18669;
var inst_18535__$1 = tmp18671;
var inst_18536__$1 = tmp18670;
var inst_18537__$1 = inst_18553;
var state_18657__$1 = (function (){var statearr_18676 = state_18657;
(statearr_18676[(13)] = inst_18534__$1);

(statearr_18676[(14)] = inst_18537__$1);

(statearr_18676[(15)] = inst_18536__$1);

(statearr_18676[(18)] = inst_18552);

(statearr_18676[(17)] = inst_18535__$1);

return statearr_18676;
})();
var statearr_18677_18753 = state_18657__$1;
(statearr_18677_18753[(2)] = null);

(statearr_18677_18753[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18658 === (21))){
var inst_18579 = (state_18657[(2)]);
var state_18657__$1 = state_18657;
var statearr_18681_18754 = state_18657__$1;
(statearr_18681_18754[(2)] = inst_18579);

(statearr_18681_18754[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18658 === (31))){
var inst_18605 = (state_18657[(12)]);
var inst_18609 = done(null);
var inst_18610 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18605);
var state_18657__$1 = (function (){var statearr_18682 = state_18657;
(statearr_18682[(19)] = inst_18609);

return statearr_18682;
})();
var statearr_18683_18755 = state_18657__$1;
(statearr_18683_18755[(2)] = inst_18610);

(statearr_18683_18755[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18658 === (32))){
var inst_18600 = (state_18657[(9)]);
var inst_18598 = (state_18657[(10)]);
var inst_18599 = (state_18657[(20)]);
var inst_18597 = (state_18657[(21)]);
var inst_18612 = (state_18657[(2)]);
var inst_18613 = (inst_18600 + (1));
var tmp18678 = inst_18598;
var tmp18679 = inst_18599;
var tmp18680 = inst_18597;
var inst_18597__$1 = tmp18680;
var inst_18598__$1 = tmp18678;
var inst_18599__$1 = tmp18679;
var inst_18600__$1 = inst_18613;
var state_18657__$1 = (function (){var statearr_18684 = state_18657;
(statearr_18684[(9)] = inst_18600__$1);

(statearr_18684[(10)] = inst_18598__$1);

(statearr_18684[(22)] = inst_18612);

(statearr_18684[(20)] = inst_18599__$1);

(statearr_18684[(21)] = inst_18597__$1);

return statearr_18684;
})();
var statearr_18685_18756 = state_18657__$1;
(statearr_18685_18756[(2)] = null);

(statearr_18685_18756[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18658 === (40))){
var inst_18625 = (state_18657[(23)]);
var inst_18629 = done(null);
var inst_18630 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18625);
var state_18657__$1 = (function (){var statearr_18686 = state_18657;
(statearr_18686[(24)] = inst_18629);

return statearr_18686;
})();
var statearr_18687_18757 = state_18657__$1;
(statearr_18687_18757[(2)] = inst_18630);

(statearr_18687_18757[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18658 === (33))){
var inst_18616 = (state_18657[(25)]);
var inst_18618 = cljs.core.chunked_seq_QMARK_(inst_18616);
var state_18657__$1 = state_18657;
if(inst_18618){
var statearr_18688_18758 = state_18657__$1;
(statearr_18688_18758[(1)] = (36));

} else {
var statearr_18689_18759 = state_18657__$1;
(statearr_18689_18759[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18658 === (13))){
var inst_18546 = (state_18657[(26)]);
var inst_18549 = cljs.core.async.close_BANG_(inst_18546);
var state_18657__$1 = state_18657;
var statearr_18690_18760 = state_18657__$1;
(statearr_18690_18760[(2)] = inst_18549);

(statearr_18690_18760[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18658 === (22))){
var inst_18569 = (state_18657[(8)]);
var inst_18572 = cljs.core.async.close_BANG_(inst_18569);
var state_18657__$1 = state_18657;
var statearr_18691_18761 = state_18657__$1;
(statearr_18691_18761[(2)] = inst_18572);

(statearr_18691_18761[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18658 === (36))){
var inst_18616 = (state_18657[(25)]);
var inst_18620 = cljs.core.chunk_first(inst_18616);
var inst_18621 = cljs.core.chunk_rest(inst_18616);
var inst_18622 = cljs.core.count(inst_18620);
var inst_18597 = inst_18621;
var inst_18598 = inst_18620;
var inst_18599 = inst_18622;
var inst_18600 = (0);
var state_18657__$1 = (function (){var statearr_18692 = state_18657;
(statearr_18692[(9)] = inst_18600);

(statearr_18692[(10)] = inst_18598);

(statearr_18692[(20)] = inst_18599);

(statearr_18692[(21)] = inst_18597);

return statearr_18692;
})();
var statearr_18693_18762 = state_18657__$1;
(statearr_18693_18762[(2)] = null);

(statearr_18693_18762[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18658 === (41))){
var inst_18616 = (state_18657[(25)]);
var inst_18632 = (state_18657[(2)]);
var inst_18633 = cljs.core.next(inst_18616);
var inst_18597 = inst_18633;
var inst_18598 = null;
var inst_18599 = (0);
var inst_18600 = (0);
var state_18657__$1 = (function (){var statearr_18694 = state_18657;
(statearr_18694[(9)] = inst_18600);

(statearr_18694[(10)] = inst_18598);

(statearr_18694[(20)] = inst_18599);

(statearr_18694[(27)] = inst_18632);

(statearr_18694[(21)] = inst_18597);

return statearr_18694;
})();
var statearr_18695_18763 = state_18657__$1;
(statearr_18695_18763[(2)] = null);

(statearr_18695_18763[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18658 === (43))){
var state_18657__$1 = state_18657;
var statearr_18696_18764 = state_18657__$1;
(statearr_18696_18764[(2)] = null);

(statearr_18696_18764[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18658 === (29))){
var inst_18641 = (state_18657[(2)]);
var state_18657__$1 = state_18657;
var statearr_18697_18765 = state_18657__$1;
(statearr_18697_18765[(2)] = inst_18641);

(statearr_18697_18765[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18658 === (44))){
var inst_18650 = (state_18657[(2)]);
var state_18657__$1 = (function (){var statearr_18698 = state_18657;
(statearr_18698[(28)] = inst_18650);

return statearr_18698;
})();
var statearr_18699_18766 = state_18657__$1;
(statearr_18699_18766[(2)] = null);

(statearr_18699_18766[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18658 === (6))){
var inst_18589 = (state_18657[(29)]);
var inst_18588 = cljs.core.deref(cs);
var inst_18589__$1 = cljs.core.keys(inst_18588);
var inst_18590 = cljs.core.count(inst_18589__$1);
var inst_18591 = cljs.core.reset_BANG_(dctr,inst_18590);
var inst_18596 = cljs.core.seq(inst_18589__$1);
var inst_18597 = inst_18596;
var inst_18598 = null;
var inst_18599 = (0);
var inst_18600 = (0);
var state_18657__$1 = (function (){var statearr_18700 = state_18657;
(statearr_18700[(9)] = inst_18600);

(statearr_18700[(29)] = inst_18589__$1);

(statearr_18700[(10)] = inst_18598);

(statearr_18700[(30)] = inst_18591);

(statearr_18700[(20)] = inst_18599);

(statearr_18700[(21)] = inst_18597);

return statearr_18700;
})();
var statearr_18701_18767 = state_18657__$1;
(statearr_18701_18767[(2)] = null);

(statearr_18701_18767[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18658 === (28))){
var inst_18616 = (state_18657[(25)]);
var inst_18597 = (state_18657[(21)]);
var inst_18616__$1 = cljs.core.seq(inst_18597);
var state_18657__$1 = (function (){var statearr_18702 = state_18657;
(statearr_18702[(25)] = inst_18616__$1);

return statearr_18702;
})();
if(inst_18616__$1){
var statearr_18703_18768 = state_18657__$1;
(statearr_18703_18768[(1)] = (33));

} else {
var statearr_18704_18769 = state_18657__$1;
(statearr_18704_18769[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18658 === (25))){
var inst_18600 = (state_18657[(9)]);
var inst_18599 = (state_18657[(20)]);
var inst_18602 = (inst_18600 < inst_18599);
var inst_18603 = inst_18602;
var state_18657__$1 = state_18657;
if(cljs.core.truth_(inst_18603)){
var statearr_18705_18770 = state_18657__$1;
(statearr_18705_18770[(1)] = (27));

} else {
var statearr_18706_18771 = state_18657__$1;
(statearr_18706_18771[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18658 === (34))){
var state_18657__$1 = state_18657;
var statearr_18707_18772 = state_18657__$1;
(statearr_18707_18772[(2)] = null);

(statearr_18707_18772[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18658 === (17))){
var state_18657__$1 = state_18657;
var statearr_18708_18773 = state_18657__$1;
(statearr_18708_18773[(2)] = null);

(statearr_18708_18773[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18658 === (3))){
var inst_18655 = (state_18657[(2)]);
var state_18657__$1 = state_18657;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18657__$1,inst_18655);
} else {
if((state_val_18658 === (12))){
var inst_18584 = (state_18657[(2)]);
var state_18657__$1 = state_18657;
var statearr_18709_18774 = state_18657__$1;
(statearr_18709_18774[(2)] = inst_18584);

(statearr_18709_18774[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18658 === (2))){
var state_18657__$1 = state_18657;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18657__$1,(4),ch);
} else {
if((state_val_18658 === (23))){
var state_18657__$1 = state_18657;
var statearr_18710_18775 = state_18657__$1;
(statearr_18710_18775[(2)] = null);

(statearr_18710_18775[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18658 === (35))){
var inst_18639 = (state_18657[(2)]);
var state_18657__$1 = state_18657;
var statearr_18711_18776 = state_18657__$1;
(statearr_18711_18776[(2)] = inst_18639);

(statearr_18711_18776[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18658 === (19))){
var inst_18556 = (state_18657[(7)]);
var inst_18560 = cljs.core.chunk_first(inst_18556);
var inst_18561 = cljs.core.chunk_rest(inst_18556);
var inst_18562 = cljs.core.count(inst_18560);
var inst_18534 = inst_18561;
var inst_18535 = inst_18560;
var inst_18536 = inst_18562;
var inst_18537 = (0);
var state_18657__$1 = (function (){var statearr_18712 = state_18657;
(statearr_18712[(13)] = inst_18534);

(statearr_18712[(14)] = inst_18537);

(statearr_18712[(15)] = inst_18536);

(statearr_18712[(17)] = inst_18535);

return statearr_18712;
})();
var statearr_18713_18777 = state_18657__$1;
(statearr_18713_18777[(2)] = null);

(statearr_18713_18777[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18658 === (11))){
var inst_18534 = (state_18657[(13)]);
var inst_18556 = (state_18657[(7)]);
var inst_18556__$1 = cljs.core.seq(inst_18534);
var state_18657__$1 = (function (){var statearr_18714 = state_18657;
(statearr_18714[(7)] = inst_18556__$1);

return statearr_18714;
})();
if(inst_18556__$1){
var statearr_18715_18778 = state_18657__$1;
(statearr_18715_18778[(1)] = (16));

} else {
var statearr_18716_18779 = state_18657__$1;
(statearr_18716_18779[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18658 === (9))){
var inst_18586 = (state_18657[(2)]);
var state_18657__$1 = state_18657;
var statearr_18717_18780 = state_18657__$1;
(statearr_18717_18780[(2)] = inst_18586);

(statearr_18717_18780[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18658 === (5))){
var inst_18532 = cljs.core.deref(cs);
var inst_18533 = cljs.core.seq(inst_18532);
var inst_18534 = inst_18533;
var inst_18535 = null;
var inst_18536 = (0);
var inst_18537 = (0);
var state_18657__$1 = (function (){var statearr_18718 = state_18657;
(statearr_18718[(13)] = inst_18534);

(statearr_18718[(14)] = inst_18537);

(statearr_18718[(15)] = inst_18536);

(statearr_18718[(17)] = inst_18535);

return statearr_18718;
})();
var statearr_18719_18781 = state_18657__$1;
(statearr_18719_18781[(2)] = null);

(statearr_18719_18781[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18658 === (14))){
var state_18657__$1 = state_18657;
var statearr_18720_18782 = state_18657__$1;
(statearr_18720_18782[(2)] = null);

(statearr_18720_18782[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18658 === (45))){
var inst_18647 = (state_18657[(2)]);
var state_18657__$1 = state_18657;
var statearr_18721_18783 = state_18657__$1;
(statearr_18721_18783[(2)] = inst_18647);

(statearr_18721_18783[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18658 === (26))){
var inst_18589 = (state_18657[(29)]);
var inst_18643 = (state_18657[(2)]);
var inst_18644 = cljs.core.seq(inst_18589);
var state_18657__$1 = (function (){var statearr_18722 = state_18657;
(statearr_18722[(31)] = inst_18643);

return statearr_18722;
})();
if(inst_18644){
var statearr_18723_18784 = state_18657__$1;
(statearr_18723_18784[(1)] = (42));

} else {
var statearr_18724_18785 = state_18657__$1;
(statearr_18724_18785[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18658 === (16))){
var inst_18556 = (state_18657[(7)]);
var inst_18558 = cljs.core.chunked_seq_QMARK_(inst_18556);
var state_18657__$1 = state_18657;
if(inst_18558){
var statearr_18725_18786 = state_18657__$1;
(statearr_18725_18786[(1)] = (19));

} else {
var statearr_18726_18787 = state_18657__$1;
(statearr_18726_18787[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18658 === (38))){
var inst_18636 = (state_18657[(2)]);
var state_18657__$1 = state_18657;
var statearr_18727_18788 = state_18657__$1;
(statearr_18727_18788[(2)] = inst_18636);

(statearr_18727_18788[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18658 === (30))){
var state_18657__$1 = state_18657;
var statearr_18728_18789 = state_18657__$1;
(statearr_18728_18789[(2)] = null);

(statearr_18728_18789[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18658 === (10))){
var inst_18537 = (state_18657[(14)]);
var inst_18535 = (state_18657[(17)]);
var inst_18545 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18535,inst_18537);
var inst_18546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18545,(0),null);
var inst_18547 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18545,(1),null);
var state_18657__$1 = (function (){var statearr_18729 = state_18657;
(statearr_18729[(26)] = inst_18546);

return statearr_18729;
})();
if(cljs.core.truth_(inst_18547)){
var statearr_18730_18790 = state_18657__$1;
(statearr_18730_18790[(1)] = (13));

} else {
var statearr_18731_18791 = state_18657__$1;
(statearr_18731_18791[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18658 === (18))){
var inst_18582 = (state_18657[(2)]);
var state_18657__$1 = state_18657;
var statearr_18732_18792 = state_18657__$1;
(statearr_18732_18792[(2)] = inst_18582);

(statearr_18732_18792[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18658 === (42))){
var state_18657__$1 = state_18657;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18657__$1,(45),dchan);
} else {
if((state_val_18658 === (37))){
var inst_18525 = (state_18657[(11)]);
var inst_18625 = (state_18657[(23)]);
var inst_18616 = (state_18657[(25)]);
var inst_18625__$1 = cljs.core.first(inst_18616);
var inst_18626 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18625__$1,inst_18525,done);
var state_18657__$1 = (function (){var statearr_18733 = state_18657;
(statearr_18733[(23)] = inst_18625__$1);

return statearr_18733;
})();
if(cljs.core.truth_(inst_18626)){
var statearr_18734_18793 = state_18657__$1;
(statearr_18734_18793[(1)] = (39));

} else {
var statearr_18735_18794 = state_18657__$1;
(statearr_18735_18794[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18658 === (8))){
var inst_18537 = (state_18657[(14)]);
var inst_18536 = (state_18657[(15)]);
var inst_18539 = (inst_18537 < inst_18536);
var inst_18540 = inst_18539;
var state_18657__$1 = state_18657;
if(cljs.core.truth_(inst_18540)){
var statearr_18736_18795 = state_18657__$1;
(statearr_18736_18795[(1)] = (10));

} else {
var statearr_18737_18796 = state_18657__$1;
(statearr_18737_18796[(1)] = (11));

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
});})(c__17921__auto___18742,cs,m,dchan,dctr,done))
;
return ((function (switch__17819__auto__,c__17921__auto___18742,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__17820__auto__ = null;
var cljs$core$async$mult_$_state_machine__17820__auto____0 = (function (){
var statearr_18738 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18738[(0)] = cljs$core$async$mult_$_state_machine__17820__auto__);

(statearr_18738[(1)] = (1));

return statearr_18738;
});
var cljs$core$async$mult_$_state_machine__17820__auto____1 = (function (state_18657){
while(true){
var ret_value__17821__auto__ = (function (){try{while(true){
var result__17822__auto__ = switch__17819__auto__(state_18657);
if(cljs.core.keyword_identical_QMARK_(result__17822__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17822__auto__;
}
break;
}
}catch (e18739){if((e18739 instanceof Object)){
var ex__17823__auto__ = e18739;
var statearr_18740_18797 = state_18657;
(statearr_18740_18797[(5)] = ex__17823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18657);

return cljs.core.cst$kw$recur;
} else {
throw e18739;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17821__auto__,cljs.core.cst$kw$recur)){
var G__18798 = state_18657;
state_18657 = G__18798;
continue;
} else {
return ret_value__17821__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__17820__auto__ = function(state_18657){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__17820__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__17820__auto____1.call(this,state_18657);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__17820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__17820__auto____0;
cljs$core$async$mult_$_state_machine__17820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__17820__auto____1;
return cljs$core$async$mult_$_state_machine__17820__auto__;
})()
;})(switch__17819__auto__,c__17921__auto___18742,cs,m,dchan,dctr,done))
})();
var state__17923__auto__ = (function (){var statearr_18741 = (f__17922__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17922__auto__.cljs$core$IFn$_invoke$arity$0() : f__17922__auto__.call(null));
(statearr_18741[(6)] = c__17921__auto___18742);

return statearr_18741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17923__auto__);
});})(c__17921__auto___18742,cs,m,dchan,dctr,done))
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
var G__18800 = arguments.length;
switch (G__18800) {
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
var len__10145__auto___18812 = arguments.length;
var i__10146__auto___18813 = (0);
while(true){
if((i__10146__auto___18813 < len__10145__auto___18812)){
args__10152__auto__.push((arguments[i__10146__auto___18813]));

var G__18814 = (i__10146__auto___18813 + (1));
i__10146__auto___18813 = G__18814;
continue;
} else {
}
break;
}

var argseq__10153__auto__ = ((((3) < args__10152__auto__.length))?(new cljs.core.IndexedSeq(args__10152__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10153__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18806){
var map__18807 = p__18806;
var map__18807__$1 = ((((!((map__18807 == null)))?((((map__18807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18807.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18807):map__18807);
var opts = map__18807__$1;
var statearr_18809_18815 = state;
(statearr_18809_18815[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__18807,map__18807__$1,opts){
return (function (val){
var statearr_18810_18816 = state;
(statearr_18810_18816[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__18807,map__18807__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_18811_18817 = state;
(statearr_18811_18817[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18802){
var G__18803 = cljs.core.first(seq18802);
var seq18802__$1 = cljs.core.next(seq18802);
var G__18804 = cljs.core.first(seq18802__$1);
var seq18802__$2 = cljs.core.next(seq18802__$1);
var G__18805 = cljs.core.first(seq18802__$2);
var seq18802__$3 = cljs.core.next(seq18802__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18803,G__18804,G__18805,seq18802__$3);
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
if(typeof cljs.core.async.t_cljs$core$async18818 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18818 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta18819){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta18819 = meta18819;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18818.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18820,meta18819__$1){
var self__ = this;
var _18820__$1 = this;
return (new cljs.core.async.t_cljs$core$async18818(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta18819__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18818.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18820){
var self__ = this;
var _18820__$1 = this;
return self__.meta18819;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18818.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18818.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18818.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18818.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18818.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18818.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18818.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18818.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async18818.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta18819], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18818.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18818.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18818";

cljs.core.async.t_cljs$core$async18818.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__9537__auto__,writer__9538__auto__,opt__9539__auto__){
return cljs.core._write(writer__9538__auto__,"cljs.core.async/t_cljs$core$async18818");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async18818 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async18818(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta18819){
return (new cljs.core.async.t_cljs$core$async18818(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta18819));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async18818(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17921__auto___18982 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17921__auto___18982,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__17922__auto__ = (function (){var switch__17819__auto__ = ((function (c__17921__auto___18982,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18922){
var state_val_18923 = (state_18922[(1)]);
if((state_val_18923 === (7))){
var inst_18837 = (state_18922[(2)]);
var state_18922__$1 = state_18922;
var statearr_18924_18983 = state_18922__$1;
(statearr_18924_18983[(2)] = inst_18837);

(statearr_18924_18983[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18923 === (20))){
var inst_18849 = (state_18922[(7)]);
var state_18922__$1 = state_18922;
var statearr_18925_18984 = state_18922__$1;
(statearr_18925_18984[(2)] = inst_18849);

(statearr_18925_18984[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18923 === (27))){
var state_18922__$1 = state_18922;
var statearr_18926_18985 = state_18922__$1;
(statearr_18926_18985[(2)] = null);

(statearr_18926_18985[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18923 === (1))){
var inst_18824 = (state_18922[(8)]);
var inst_18824__$1 = calc_state();
var inst_18826 = (inst_18824__$1 == null);
var inst_18827 = cljs.core.not(inst_18826);
var state_18922__$1 = (function (){var statearr_18927 = state_18922;
(statearr_18927[(8)] = inst_18824__$1);

return statearr_18927;
})();
if(inst_18827){
var statearr_18928_18986 = state_18922__$1;
(statearr_18928_18986[(1)] = (2));

} else {
var statearr_18929_18987 = state_18922__$1;
(statearr_18929_18987[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18923 === (24))){
var inst_18896 = (state_18922[(9)]);
var inst_18882 = (state_18922[(10)]);
var inst_18873 = (state_18922[(11)]);
var inst_18896__$1 = (inst_18873.cljs$core$IFn$_invoke$arity$1 ? inst_18873.cljs$core$IFn$_invoke$arity$1(inst_18882) : inst_18873.call(null,inst_18882));
var state_18922__$1 = (function (){var statearr_18930 = state_18922;
(statearr_18930[(9)] = inst_18896__$1);

return statearr_18930;
})();
if(cljs.core.truth_(inst_18896__$1)){
var statearr_18931_18988 = state_18922__$1;
(statearr_18931_18988[(1)] = (29));

} else {
var statearr_18932_18989 = state_18922__$1;
(statearr_18932_18989[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18923 === (4))){
var inst_18840 = (state_18922[(2)]);
var state_18922__$1 = state_18922;
if(cljs.core.truth_(inst_18840)){
var statearr_18933_18990 = state_18922__$1;
(statearr_18933_18990[(1)] = (8));

} else {
var statearr_18934_18991 = state_18922__$1;
(statearr_18934_18991[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18923 === (15))){
var inst_18867 = (state_18922[(2)]);
var state_18922__$1 = state_18922;
if(cljs.core.truth_(inst_18867)){
var statearr_18935_18992 = state_18922__$1;
(statearr_18935_18992[(1)] = (19));

} else {
var statearr_18936_18993 = state_18922__$1;
(statearr_18936_18993[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18923 === (21))){
var inst_18872 = (state_18922[(12)]);
var inst_18872__$1 = (state_18922[(2)]);
var inst_18873 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18872__$1,cljs.core.cst$kw$solos);
var inst_18874 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18872__$1,cljs.core.cst$kw$mutes);
var inst_18875 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18872__$1,cljs.core.cst$kw$reads);
var state_18922__$1 = (function (){var statearr_18937 = state_18922;
(statearr_18937[(13)] = inst_18874);

(statearr_18937[(12)] = inst_18872__$1);

(statearr_18937[(11)] = inst_18873);

return statearr_18937;
})();
return cljs.core.async.ioc_alts_BANG_(state_18922__$1,(22),inst_18875);
} else {
if((state_val_18923 === (31))){
var inst_18904 = (state_18922[(2)]);
var state_18922__$1 = state_18922;
if(cljs.core.truth_(inst_18904)){
var statearr_18938_18994 = state_18922__$1;
(statearr_18938_18994[(1)] = (32));

} else {
var statearr_18939_18995 = state_18922__$1;
(statearr_18939_18995[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18923 === (32))){
var inst_18881 = (state_18922[(14)]);
var state_18922__$1 = state_18922;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18922__$1,(35),out,inst_18881);
} else {
if((state_val_18923 === (33))){
var inst_18872 = (state_18922[(12)]);
var inst_18849 = inst_18872;
var state_18922__$1 = (function (){var statearr_18940 = state_18922;
(statearr_18940[(7)] = inst_18849);

return statearr_18940;
})();
var statearr_18941_18996 = state_18922__$1;
(statearr_18941_18996[(2)] = null);

(statearr_18941_18996[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18923 === (13))){
var inst_18849 = (state_18922[(7)]);
var inst_18856 = inst_18849.cljs$lang$protocol_mask$partition0$;
var inst_18857 = (inst_18856 & (64));
var inst_18858 = inst_18849.cljs$core$ISeq$;
var inst_18859 = (cljs.core.PROTOCOL_SENTINEL === inst_18858);
var inst_18860 = (inst_18857) || (inst_18859);
var state_18922__$1 = state_18922;
if(cljs.core.truth_(inst_18860)){
var statearr_18942_18997 = state_18922__$1;
(statearr_18942_18997[(1)] = (16));

} else {
var statearr_18943_18998 = state_18922__$1;
(statearr_18943_18998[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18923 === (22))){
var inst_18882 = (state_18922[(10)]);
var inst_18881 = (state_18922[(14)]);
var inst_18880 = (state_18922[(2)]);
var inst_18881__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18880,(0),null);
var inst_18882__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18880,(1),null);
var inst_18883 = (inst_18881__$1 == null);
var inst_18884 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18882__$1,change);
var inst_18885 = (inst_18883) || (inst_18884);
var state_18922__$1 = (function (){var statearr_18944 = state_18922;
(statearr_18944[(10)] = inst_18882__$1);

(statearr_18944[(14)] = inst_18881__$1);

return statearr_18944;
})();
if(cljs.core.truth_(inst_18885)){
var statearr_18945_18999 = state_18922__$1;
(statearr_18945_18999[(1)] = (23));

} else {
var statearr_18946_19000 = state_18922__$1;
(statearr_18946_19000[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18923 === (36))){
var inst_18872 = (state_18922[(12)]);
var inst_18849 = inst_18872;
var state_18922__$1 = (function (){var statearr_18947 = state_18922;
(statearr_18947[(7)] = inst_18849);

return statearr_18947;
})();
var statearr_18948_19001 = state_18922__$1;
(statearr_18948_19001[(2)] = null);

(statearr_18948_19001[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18923 === (29))){
var inst_18896 = (state_18922[(9)]);
var state_18922__$1 = state_18922;
var statearr_18949_19002 = state_18922__$1;
(statearr_18949_19002[(2)] = inst_18896);

(statearr_18949_19002[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18923 === (6))){
var state_18922__$1 = state_18922;
var statearr_18950_19003 = state_18922__$1;
(statearr_18950_19003[(2)] = false);

(statearr_18950_19003[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18923 === (28))){
var inst_18892 = (state_18922[(2)]);
var inst_18893 = calc_state();
var inst_18849 = inst_18893;
var state_18922__$1 = (function (){var statearr_18951 = state_18922;
(statearr_18951[(15)] = inst_18892);

(statearr_18951[(7)] = inst_18849);

return statearr_18951;
})();
var statearr_18952_19004 = state_18922__$1;
(statearr_18952_19004[(2)] = null);

(statearr_18952_19004[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18923 === (25))){
var inst_18918 = (state_18922[(2)]);
var state_18922__$1 = state_18922;
var statearr_18953_19005 = state_18922__$1;
(statearr_18953_19005[(2)] = inst_18918);

(statearr_18953_19005[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18923 === (34))){
var inst_18916 = (state_18922[(2)]);
var state_18922__$1 = state_18922;
var statearr_18954_19006 = state_18922__$1;
(statearr_18954_19006[(2)] = inst_18916);

(statearr_18954_19006[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18923 === (17))){
var state_18922__$1 = state_18922;
var statearr_18955_19007 = state_18922__$1;
(statearr_18955_19007[(2)] = false);

(statearr_18955_19007[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18923 === (3))){
var state_18922__$1 = state_18922;
var statearr_18956_19008 = state_18922__$1;
(statearr_18956_19008[(2)] = false);

(statearr_18956_19008[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18923 === (12))){
var inst_18920 = (state_18922[(2)]);
var state_18922__$1 = state_18922;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18922__$1,inst_18920);
} else {
if((state_val_18923 === (2))){
var inst_18824 = (state_18922[(8)]);
var inst_18829 = inst_18824.cljs$lang$protocol_mask$partition0$;
var inst_18830 = (inst_18829 & (64));
var inst_18831 = inst_18824.cljs$core$ISeq$;
var inst_18832 = (cljs.core.PROTOCOL_SENTINEL === inst_18831);
var inst_18833 = (inst_18830) || (inst_18832);
var state_18922__$1 = state_18922;
if(cljs.core.truth_(inst_18833)){
var statearr_18957_19009 = state_18922__$1;
(statearr_18957_19009[(1)] = (5));

} else {
var statearr_18958_19010 = state_18922__$1;
(statearr_18958_19010[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18923 === (23))){
var inst_18881 = (state_18922[(14)]);
var inst_18887 = (inst_18881 == null);
var state_18922__$1 = state_18922;
if(cljs.core.truth_(inst_18887)){
var statearr_18959_19011 = state_18922__$1;
(statearr_18959_19011[(1)] = (26));

} else {
var statearr_18960_19012 = state_18922__$1;
(statearr_18960_19012[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18923 === (35))){
var inst_18907 = (state_18922[(2)]);
var state_18922__$1 = state_18922;
if(cljs.core.truth_(inst_18907)){
var statearr_18961_19013 = state_18922__$1;
(statearr_18961_19013[(1)] = (36));

} else {
var statearr_18962_19014 = state_18922__$1;
(statearr_18962_19014[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18923 === (19))){
var inst_18849 = (state_18922[(7)]);
var inst_18869 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_18849);
var state_18922__$1 = state_18922;
var statearr_18963_19015 = state_18922__$1;
(statearr_18963_19015[(2)] = inst_18869);

(statearr_18963_19015[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18923 === (11))){
var inst_18849 = (state_18922[(7)]);
var inst_18853 = (inst_18849 == null);
var inst_18854 = cljs.core.not(inst_18853);
var state_18922__$1 = state_18922;
if(inst_18854){
var statearr_18964_19016 = state_18922__$1;
(statearr_18964_19016[(1)] = (13));

} else {
var statearr_18965_19017 = state_18922__$1;
(statearr_18965_19017[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18923 === (9))){
var inst_18824 = (state_18922[(8)]);
var state_18922__$1 = state_18922;
var statearr_18966_19018 = state_18922__$1;
(statearr_18966_19018[(2)] = inst_18824);

(statearr_18966_19018[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18923 === (5))){
var state_18922__$1 = state_18922;
var statearr_18967_19019 = state_18922__$1;
(statearr_18967_19019[(2)] = true);

(statearr_18967_19019[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18923 === (14))){
var state_18922__$1 = state_18922;
var statearr_18968_19020 = state_18922__$1;
(statearr_18968_19020[(2)] = false);

(statearr_18968_19020[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18923 === (26))){
var inst_18882 = (state_18922[(10)]);
var inst_18889 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_18882);
var state_18922__$1 = state_18922;
var statearr_18969_19021 = state_18922__$1;
(statearr_18969_19021[(2)] = inst_18889);

(statearr_18969_19021[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18923 === (16))){
var state_18922__$1 = state_18922;
var statearr_18970_19022 = state_18922__$1;
(statearr_18970_19022[(2)] = true);

(statearr_18970_19022[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18923 === (38))){
var inst_18912 = (state_18922[(2)]);
var state_18922__$1 = state_18922;
var statearr_18971_19023 = state_18922__$1;
(statearr_18971_19023[(2)] = inst_18912);

(statearr_18971_19023[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18923 === (30))){
var inst_18874 = (state_18922[(13)]);
var inst_18882 = (state_18922[(10)]);
var inst_18873 = (state_18922[(11)]);
var inst_18899 = cljs.core.empty_QMARK_(inst_18873);
var inst_18900 = (inst_18874.cljs$core$IFn$_invoke$arity$1 ? inst_18874.cljs$core$IFn$_invoke$arity$1(inst_18882) : inst_18874.call(null,inst_18882));
var inst_18901 = cljs.core.not(inst_18900);
var inst_18902 = (inst_18899) && (inst_18901);
var state_18922__$1 = state_18922;
var statearr_18972_19024 = state_18922__$1;
(statearr_18972_19024[(2)] = inst_18902);

(statearr_18972_19024[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18923 === (10))){
var inst_18824 = (state_18922[(8)]);
var inst_18845 = (state_18922[(2)]);
var inst_18846 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18845,cljs.core.cst$kw$solos);
var inst_18847 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18845,cljs.core.cst$kw$mutes);
var inst_18848 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18845,cljs.core.cst$kw$reads);
var inst_18849 = inst_18824;
var state_18922__$1 = (function (){var statearr_18973 = state_18922;
(statearr_18973[(16)] = inst_18846);

(statearr_18973[(17)] = inst_18848);

(statearr_18973[(7)] = inst_18849);

(statearr_18973[(18)] = inst_18847);

return statearr_18973;
})();
var statearr_18974_19025 = state_18922__$1;
(statearr_18974_19025[(2)] = null);

(statearr_18974_19025[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18923 === (18))){
var inst_18864 = (state_18922[(2)]);
var state_18922__$1 = state_18922;
var statearr_18975_19026 = state_18922__$1;
(statearr_18975_19026[(2)] = inst_18864);

(statearr_18975_19026[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18923 === (37))){
var state_18922__$1 = state_18922;
var statearr_18976_19027 = state_18922__$1;
(statearr_18976_19027[(2)] = null);

(statearr_18976_19027[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18923 === (8))){
var inst_18824 = (state_18922[(8)]);
var inst_18842 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_18824);
var state_18922__$1 = state_18922;
var statearr_18977_19028 = state_18922__$1;
(statearr_18977_19028[(2)] = inst_18842);

(statearr_18977_19028[(1)] = (10));


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
});})(c__17921__auto___18982,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__17819__auto__,c__17921__auto___18982,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__17820__auto__ = null;
var cljs$core$async$mix_$_state_machine__17820__auto____0 = (function (){
var statearr_18978 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18978[(0)] = cljs$core$async$mix_$_state_machine__17820__auto__);

(statearr_18978[(1)] = (1));

return statearr_18978;
});
var cljs$core$async$mix_$_state_machine__17820__auto____1 = (function (state_18922){
while(true){
var ret_value__17821__auto__ = (function (){try{while(true){
var result__17822__auto__ = switch__17819__auto__(state_18922);
if(cljs.core.keyword_identical_QMARK_(result__17822__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17822__auto__;
}
break;
}
}catch (e18979){if((e18979 instanceof Object)){
var ex__17823__auto__ = e18979;
var statearr_18980_19029 = state_18922;
(statearr_18980_19029[(5)] = ex__17823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18922);

return cljs.core.cst$kw$recur;
} else {
throw e18979;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17821__auto__,cljs.core.cst$kw$recur)){
var G__19030 = state_18922;
state_18922 = G__19030;
continue;
} else {
return ret_value__17821__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__17820__auto__ = function(state_18922){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__17820__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__17820__auto____1.call(this,state_18922);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__17820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__17820__auto____0;
cljs$core$async$mix_$_state_machine__17820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__17820__auto____1;
return cljs$core$async$mix_$_state_machine__17820__auto__;
})()
;})(switch__17819__auto__,c__17921__auto___18982,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__17923__auto__ = (function (){var statearr_18981 = (f__17922__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17922__auto__.cljs$core$IFn$_invoke$arity$0() : f__17922__auto__.call(null));
(statearr_18981[(6)] = c__17921__auto___18982);

return statearr_18981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17923__auto__);
});})(c__17921__auto___18982,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__19032 = arguments.length;
switch (G__19032) {
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
var G__19036 = arguments.length;
switch (G__19036) {
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
return (function (p1__19034_SHARP_){
if(cljs.core.truth_((p1__19034_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__19034_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__19034_SHARP_.call(null,topic)))){
return p1__19034_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__19034_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__8866__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async19037 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19037 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19038){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19038 = meta19038;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19037.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19039,meta19038__$1){
var self__ = this;
var _19039__$1 = this;
return (new cljs.core.async.t_cljs$core$async19037(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19038__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19037.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19039){
var self__ = this;
var _19039__$1 = this;
return self__.meta19038;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19037.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19037.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19037.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19037.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19037.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async19037.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19037.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19037.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta19038], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19037.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19037.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19037";

cljs.core.async.t_cljs$core$async19037.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__9537__auto__,writer__9538__auto__,opt__9539__auto__){
return cljs.core._write(writer__9538__auto__,"cljs.core.async/t_cljs$core$async19037");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async19037 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async19037(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19038){
return (new cljs.core.async.t_cljs$core$async19037(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19038));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async19037(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17921__auto___19157 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17921__auto___19157,mults,ensure_mult,p){
return (function (){
var f__17922__auto__ = (function (){var switch__17819__auto__ = ((function (c__17921__auto___19157,mults,ensure_mult,p){
return (function (state_19111){
var state_val_19112 = (state_19111[(1)]);
if((state_val_19112 === (7))){
var inst_19107 = (state_19111[(2)]);
var state_19111__$1 = state_19111;
var statearr_19113_19158 = state_19111__$1;
(statearr_19113_19158[(2)] = inst_19107);

(statearr_19113_19158[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19112 === (20))){
var state_19111__$1 = state_19111;
var statearr_19114_19159 = state_19111__$1;
(statearr_19114_19159[(2)] = null);

(statearr_19114_19159[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19112 === (1))){
var state_19111__$1 = state_19111;
var statearr_19115_19160 = state_19111__$1;
(statearr_19115_19160[(2)] = null);

(statearr_19115_19160[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19112 === (24))){
var inst_19090 = (state_19111[(7)]);
var inst_19099 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_19090);
var state_19111__$1 = state_19111;
var statearr_19116_19161 = state_19111__$1;
(statearr_19116_19161[(2)] = inst_19099);

(statearr_19116_19161[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19112 === (4))){
var inst_19042 = (state_19111[(8)]);
var inst_19042__$1 = (state_19111[(2)]);
var inst_19043 = (inst_19042__$1 == null);
var state_19111__$1 = (function (){var statearr_19117 = state_19111;
(statearr_19117[(8)] = inst_19042__$1);

return statearr_19117;
})();
if(cljs.core.truth_(inst_19043)){
var statearr_19118_19162 = state_19111__$1;
(statearr_19118_19162[(1)] = (5));

} else {
var statearr_19119_19163 = state_19111__$1;
(statearr_19119_19163[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19112 === (15))){
var inst_19084 = (state_19111[(2)]);
var state_19111__$1 = state_19111;
var statearr_19120_19164 = state_19111__$1;
(statearr_19120_19164[(2)] = inst_19084);

(statearr_19120_19164[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19112 === (21))){
var inst_19104 = (state_19111[(2)]);
var state_19111__$1 = (function (){var statearr_19121 = state_19111;
(statearr_19121[(9)] = inst_19104);

return statearr_19121;
})();
var statearr_19122_19165 = state_19111__$1;
(statearr_19122_19165[(2)] = null);

(statearr_19122_19165[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19112 === (13))){
var inst_19066 = (state_19111[(10)]);
var inst_19068 = cljs.core.chunked_seq_QMARK_(inst_19066);
var state_19111__$1 = state_19111;
if(inst_19068){
var statearr_19123_19166 = state_19111__$1;
(statearr_19123_19166[(1)] = (16));

} else {
var statearr_19124_19167 = state_19111__$1;
(statearr_19124_19167[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19112 === (22))){
var inst_19096 = (state_19111[(2)]);
var state_19111__$1 = state_19111;
if(cljs.core.truth_(inst_19096)){
var statearr_19125_19168 = state_19111__$1;
(statearr_19125_19168[(1)] = (23));

} else {
var statearr_19126_19169 = state_19111__$1;
(statearr_19126_19169[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19112 === (6))){
var inst_19092 = (state_19111[(11)]);
var inst_19042 = (state_19111[(8)]);
var inst_19090 = (state_19111[(7)]);
var inst_19090__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_19042) : topic_fn.call(null,inst_19042));
var inst_19091 = cljs.core.deref(mults);
var inst_19092__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19091,inst_19090__$1);
var state_19111__$1 = (function (){var statearr_19127 = state_19111;
(statearr_19127[(11)] = inst_19092__$1);

(statearr_19127[(7)] = inst_19090__$1);

return statearr_19127;
})();
if(cljs.core.truth_(inst_19092__$1)){
var statearr_19128_19170 = state_19111__$1;
(statearr_19128_19170[(1)] = (19));

} else {
var statearr_19129_19171 = state_19111__$1;
(statearr_19129_19171[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19112 === (25))){
var inst_19101 = (state_19111[(2)]);
var state_19111__$1 = state_19111;
var statearr_19130_19172 = state_19111__$1;
(statearr_19130_19172[(2)] = inst_19101);

(statearr_19130_19172[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19112 === (17))){
var inst_19066 = (state_19111[(10)]);
var inst_19075 = cljs.core.first(inst_19066);
var inst_19076 = cljs.core.async.muxch_STAR_(inst_19075);
var inst_19077 = cljs.core.async.close_BANG_(inst_19076);
var inst_19078 = cljs.core.next(inst_19066);
var inst_19052 = inst_19078;
var inst_19053 = null;
var inst_19054 = (0);
var inst_19055 = (0);
var state_19111__$1 = (function (){var statearr_19131 = state_19111;
(statearr_19131[(12)] = inst_19053);

(statearr_19131[(13)] = inst_19054);

(statearr_19131[(14)] = inst_19052);

(statearr_19131[(15)] = inst_19077);

(statearr_19131[(16)] = inst_19055);

return statearr_19131;
})();
var statearr_19132_19173 = state_19111__$1;
(statearr_19132_19173[(2)] = null);

(statearr_19132_19173[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19112 === (3))){
var inst_19109 = (state_19111[(2)]);
var state_19111__$1 = state_19111;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19111__$1,inst_19109);
} else {
if((state_val_19112 === (12))){
var inst_19086 = (state_19111[(2)]);
var state_19111__$1 = state_19111;
var statearr_19133_19174 = state_19111__$1;
(statearr_19133_19174[(2)] = inst_19086);

(statearr_19133_19174[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19112 === (2))){
var state_19111__$1 = state_19111;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19111__$1,(4),ch);
} else {
if((state_val_19112 === (23))){
var state_19111__$1 = state_19111;
var statearr_19134_19175 = state_19111__$1;
(statearr_19134_19175[(2)] = null);

(statearr_19134_19175[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19112 === (19))){
var inst_19092 = (state_19111[(11)]);
var inst_19042 = (state_19111[(8)]);
var inst_19094 = cljs.core.async.muxch_STAR_(inst_19092);
var state_19111__$1 = state_19111;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19111__$1,(22),inst_19094,inst_19042);
} else {
if((state_val_19112 === (11))){
var inst_19052 = (state_19111[(14)]);
var inst_19066 = (state_19111[(10)]);
var inst_19066__$1 = cljs.core.seq(inst_19052);
var state_19111__$1 = (function (){var statearr_19135 = state_19111;
(statearr_19135[(10)] = inst_19066__$1);

return statearr_19135;
})();
if(inst_19066__$1){
var statearr_19136_19176 = state_19111__$1;
(statearr_19136_19176[(1)] = (13));

} else {
var statearr_19137_19177 = state_19111__$1;
(statearr_19137_19177[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19112 === (9))){
var inst_19088 = (state_19111[(2)]);
var state_19111__$1 = state_19111;
var statearr_19138_19178 = state_19111__$1;
(statearr_19138_19178[(2)] = inst_19088);

(statearr_19138_19178[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19112 === (5))){
var inst_19049 = cljs.core.deref(mults);
var inst_19050 = cljs.core.vals(inst_19049);
var inst_19051 = cljs.core.seq(inst_19050);
var inst_19052 = inst_19051;
var inst_19053 = null;
var inst_19054 = (0);
var inst_19055 = (0);
var state_19111__$1 = (function (){var statearr_19139 = state_19111;
(statearr_19139[(12)] = inst_19053);

(statearr_19139[(13)] = inst_19054);

(statearr_19139[(14)] = inst_19052);

(statearr_19139[(16)] = inst_19055);

return statearr_19139;
})();
var statearr_19140_19179 = state_19111__$1;
(statearr_19140_19179[(2)] = null);

(statearr_19140_19179[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19112 === (14))){
var state_19111__$1 = state_19111;
var statearr_19144_19180 = state_19111__$1;
(statearr_19144_19180[(2)] = null);

(statearr_19144_19180[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19112 === (16))){
var inst_19066 = (state_19111[(10)]);
var inst_19070 = cljs.core.chunk_first(inst_19066);
var inst_19071 = cljs.core.chunk_rest(inst_19066);
var inst_19072 = cljs.core.count(inst_19070);
var inst_19052 = inst_19071;
var inst_19053 = inst_19070;
var inst_19054 = inst_19072;
var inst_19055 = (0);
var state_19111__$1 = (function (){var statearr_19145 = state_19111;
(statearr_19145[(12)] = inst_19053);

(statearr_19145[(13)] = inst_19054);

(statearr_19145[(14)] = inst_19052);

(statearr_19145[(16)] = inst_19055);

return statearr_19145;
})();
var statearr_19146_19181 = state_19111__$1;
(statearr_19146_19181[(2)] = null);

(statearr_19146_19181[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19112 === (10))){
var inst_19053 = (state_19111[(12)]);
var inst_19054 = (state_19111[(13)]);
var inst_19052 = (state_19111[(14)]);
var inst_19055 = (state_19111[(16)]);
var inst_19060 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_19053,inst_19055);
var inst_19061 = cljs.core.async.muxch_STAR_(inst_19060);
var inst_19062 = cljs.core.async.close_BANG_(inst_19061);
var inst_19063 = (inst_19055 + (1));
var tmp19141 = inst_19053;
var tmp19142 = inst_19054;
var tmp19143 = inst_19052;
var inst_19052__$1 = tmp19143;
var inst_19053__$1 = tmp19141;
var inst_19054__$1 = tmp19142;
var inst_19055__$1 = inst_19063;
var state_19111__$1 = (function (){var statearr_19147 = state_19111;
(statearr_19147[(12)] = inst_19053__$1);

(statearr_19147[(13)] = inst_19054__$1);

(statearr_19147[(14)] = inst_19052__$1);

(statearr_19147[(17)] = inst_19062);

(statearr_19147[(16)] = inst_19055__$1);

return statearr_19147;
})();
var statearr_19148_19182 = state_19111__$1;
(statearr_19148_19182[(2)] = null);

(statearr_19148_19182[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19112 === (18))){
var inst_19081 = (state_19111[(2)]);
var state_19111__$1 = state_19111;
var statearr_19149_19183 = state_19111__$1;
(statearr_19149_19183[(2)] = inst_19081);

(statearr_19149_19183[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19112 === (8))){
var inst_19054 = (state_19111[(13)]);
var inst_19055 = (state_19111[(16)]);
var inst_19057 = (inst_19055 < inst_19054);
var inst_19058 = inst_19057;
var state_19111__$1 = state_19111;
if(cljs.core.truth_(inst_19058)){
var statearr_19150_19184 = state_19111__$1;
(statearr_19150_19184[(1)] = (10));

} else {
var statearr_19151_19185 = state_19111__$1;
(statearr_19151_19185[(1)] = (11));

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
});})(c__17921__auto___19157,mults,ensure_mult,p))
;
return ((function (switch__17819__auto__,c__17921__auto___19157,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__17820__auto__ = null;
var cljs$core$async$state_machine__17820__auto____0 = (function (){
var statearr_19152 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19152[(0)] = cljs$core$async$state_machine__17820__auto__);

(statearr_19152[(1)] = (1));

return statearr_19152;
});
var cljs$core$async$state_machine__17820__auto____1 = (function (state_19111){
while(true){
var ret_value__17821__auto__ = (function (){try{while(true){
var result__17822__auto__ = switch__17819__auto__(state_19111);
if(cljs.core.keyword_identical_QMARK_(result__17822__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17822__auto__;
}
break;
}
}catch (e19153){if((e19153 instanceof Object)){
var ex__17823__auto__ = e19153;
var statearr_19154_19186 = state_19111;
(statearr_19154_19186[(5)] = ex__17823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19111);

return cljs.core.cst$kw$recur;
} else {
throw e19153;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17821__auto__,cljs.core.cst$kw$recur)){
var G__19187 = state_19111;
state_19111 = G__19187;
continue;
} else {
return ret_value__17821__auto__;
}
break;
}
});
cljs$core$async$state_machine__17820__auto__ = function(state_19111){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17820__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17820__auto____1.call(this,state_19111);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17820__auto____0;
cljs$core$async$state_machine__17820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17820__auto____1;
return cljs$core$async$state_machine__17820__auto__;
})()
;})(switch__17819__auto__,c__17921__auto___19157,mults,ensure_mult,p))
})();
var state__17923__auto__ = (function (){var statearr_19155 = (f__17922__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17922__auto__.cljs$core$IFn$_invoke$arity$0() : f__17922__auto__.call(null));
(statearr_19155[(6)] = c__17921__auto___19157);

return statearr_19155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17923__auto__);
});})(c__17921__auto___19157,mults,ensure_mult,p))
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
var G__19189 = arguments.length;
switch (G__19189) {
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
var G__19192 = arguments.length;
switch (G__19192) {
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
var G__19195 = arguments.length;
switch (G__19195) {
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
var c__17921__auto___19262 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17921__auto___19262,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__17922__auto__ = (function (){var switch__17819__auto__ = ((function (c__17921__auto___19262,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19234){
var state_val_19235 = (state_19234[(1)]);
if((state_val_19235 === (7))){
var state_19234__$1 = state_19234;
var statearr_19236_19263 = state_19234__$1;
(statearr_19236_19263[(2)] = null);

(statearr_19236_19263[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19235 === (1))){
var state_19234__$1 = state_19234;
var statearr_19237_19264 = state_19234__$1;
(statearr_19237_19264[(2)] = null);

(statearr_19237_19264[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19235 === (4))){
var inst_19198 = (state_19234[(7)]);
var inst_19200 = (inst_19198 < cnt);
var state_19234__$1 = state_19234;
if(cljs.core.truth_(inst_19200)){
var statearr_19238_19265 = state_19234__$1;
(statearr_19238_19265[(1)] = (6));

} else {
var statearr_19239_19266 = state_19234__$1;
(statearr_19239_19266[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19235 === (15))){
var inst_19230 = (state_19234[(2)]);
var state_19234__$1 = state_19234;
var statearr_19240_19267 = state_19234__$1;
(statearr_19240_19267[(2)] = inst_19230);

(statearr_19240_19267[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19235 === (13))){
var inst_19223 = cljs.core.async.close_BANG_(out);
var state_19234__$1 = state_19234;
var statearr_19241_19268 = state_19234__$1;
(statearr_19241_19268[(2)] = inst_19223);

(statearr_19241_19268[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19235 === (6))){
var state_19234__$1 = state_19234;
var statearr_19242_19269 = state_19234__$1;
(statearr_19242_19269[(2)] = null);

(statearr_19242_19269[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19235 === (3))){
var inst_19232 = (state_19234[(2)]);
var state_19234__$1 = state_19234;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19234__$1,inst_19232);
} else {
if((state_val_19235 === (12))){
var inst_19220 = (state_19234[(8)]);
var inst_19220__$1 = (state_19234[(2)]);
var inst_19221 = cljs.core.some(cljs.core.nil_QMARK_,inst_19220__$1);
var state_19234__$1 = (function (){var statearr_19243 = state_19234;
(statearr_19243[(8)] = inst_19220__$1);

return statearr_19243;
})();
if(cljs.core.truth_(inst_19221)){
var statearr_19244_19270 = state_19234__$1;
(statearr_19244_19270[(1)] = (13));

} else {
var statearr_19245_19271 = state_19234__$1;
(statearr_19245_19271[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19235 === (2))){
var inst_19197 = cljs.core.reset_BANG_(dctr,cnt);
var inst_19198 = (0);
var state_19234__$1 = (function (){var statearr_19246 = state_19234;
(statearr_19246[(9)] = inst_19197);

(statearr_19246[(7)] = inst_19198);

return statearr_19246;
})();
var statearr_19247_19272 = state_19234__$1;
(statearr_19247_19272[(2)] = null);

(statearr_19247_19272[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19235 === (11))){
var inst_19198 = (state_19234[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_19234,(10),Object,null,(9));
var inst_19207 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_19198) : chs__$1.call(null,inst_19198));
var inst_19208 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_19198) : done.call(null,inst_19198));
var inst_19209 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_19207,inst_19208);
var state_19234__$1 = state_19234;
var statearr_19248_19273 = state_19234__$1;
(statearr_19248_19273[(2)] = inst_19209);


cljs.core.async.impl.ioc_helpers.process_exception(state_19234__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_19235 === (9))){
var inst_19198 = (state_19234[(7)]);
var inst_19211 = (state_19234[(2)]);
var inst_19212 = (inst_19198 + (1));
var inst_19198__$1 = inst_19212;
var state_19234__$1 = (function (){var statearr_19249 = state_19234;
(statearr_19249[(7)] = inst_19198__$1);

(statearr_19249[(10)] = inst_19211);

return statearr_19249;
})();
var statearr_19250_19274 = state_19234__$1;
(statearr_19250_19274[(2)] = null);

(statearr_19250_19274[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19235 === (5))){
var inst_19218 = (state_19234[(2)]);
var state_19234__$1 = (function (){var statearr_19251 = state_19234;
(statearr_19251[(11)] = inst_19218);

return statearr_19251;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19234__$1,(12),dchan);
} else {
if((state_val_19235 === (14))){
var inst_19220 = (state_19234[(8)]);
var inst_19225 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_19220);
var state_19234__$1 = state_19234;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19234__$1,(16),out,inst_19225);
} else {
if((state_val_19235 === (16))){
var inst_19227 = (state_19234[(2)]);
var state_19234__$1 = (function (){var statearr_19252 = state_19234;
(statearr_19252[(12)] = inst_19227);

return statearr_19252;
})();
var statearr_19253_19275 = state_19234__$1;
(statearr_19253_19275[(2)] = null);

(statearr_19253_19275[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19235 === (10))){
var inst_19202 = (state_19234[(2)]);
var inst_19203 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_19234__$1 = (function (){var statearr_19254 = state_19234;
(statearr_19254[(13)] = inst_19202);

return statearr_19254;
})();
var statearr_19255_19276 = state_19234__$1;
(statearr_19255_19276[(2)] = inst_19203);


cljs.core.async.impl.ioc_helpers.process_exception(state_19234__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_19235 === (8))){
var inst_19216 = (state_19234[(2)]);
var state_19234__$1 = state_19234;
var statearr_19256_19277 = state_19234__$1;
(statearr_19256_19277[(2)] = inst_19216);

(statearr_19256_19277[(1)] = (5));


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
});})(c__17921__auto___19262,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__17819__auto__,c__17921__auto___19262,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__17820__auto__ = null;
var cljs$core$async$state_machine__17820__auto____0 = (function (){
var statearr_19257 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19257[(0)] = cljs$core$async$state_machine__17820__auto__);

(statearr_19257[(1)] = (1));

return statearr_19257;
});
var cljs$core$async$state_machine__17820__auto____1 = (function (state_19234){
while(true){
var ret_value__17821__auto__ = (function (){try{while(true){
var result__17822__auto__ = switch__17819__auto__(state_19234);
if(cljs.core.keyword_identical_QMARK_(result__17822__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17822__auto__;
}
break;
}
}catch (e19258){if((e19258 instanceof Object)){
var ex__17823__auto__ = e19258;
var statearr_19259_19278 = state_19234;
(statearr_19259_19278[(5)] = ex__17823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19234);

return cljs.core.cst$kw$recur;
} else {
throw e19258;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17821__auto__,cljs.core.cst$kw$recur)){
var G__19279 = state_19234;
state_19234 = G__19279;
continue;
} else {
return ret_value__17821__auto__;
}
break;
}
});
cljs$core$async$state_machine__17820__auto__ = function(state_19234){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17820__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17820__auto____1.call(this,state_19234);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17820__auto____0;
cljs$core$async$state_machine__17820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17820__auto____1;
return cljs$core$async$state_machine__17820__auto__;
})()
;})(switch__17819__auto__,c__17921__auto___19262,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__17923__auto__ = (function (){var statearr_19260 = (f__17922__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17922__auto__.cljs$core$IFn$_invoke$arity$0() : f__17922__auto__.call(null));
(statearr_19260[(6)] = c__17921__auto___19262);

return statearr_19260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17923__auto__);
});})(c__17921__auto___19262,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__19282 = arguments.length;
switch (G__19282) {
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
var c__17921__auto___19336 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17921__auto___19336,out){
return (function (){
var f__17922__auto__ = (function (){var switch__17819__auto__ = ((function (c__17921__auto___19336,out){
return (function (state_19314){
var state_val_19315 = (state_19314[(1)]);
if((state_val_19315 === (7))){
var inst_19293 = (state_19314[(7)]);
var inst_19294 = (state_19314[(8)]);
var inst_19293__$1 = (state_19314[(2)]);
var inst_19294__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19293__$1,(0),null);
var inst_19295 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19293__$1,(1),null);
var inst_19296 = (inst_19294__$1 == null);
var state_19314__$1 = (function (){var statearr_19316 = state_19314;
(statearr_19316[(9)] = inst_19295);

(statearr_19316[(7)] = inst_19293__$1);

(statearr_19316[(8)] = inst_19294__$1);

return statearr_19316;
})();
if(cljs.core.truth_(inst_19296)){
var statearr_19317_19337 = state_19314__$1;
(statearr_19317_19337[(1)] = (8));

} else {
var statearr_19318_19338 = state_19314__$1;
(statearr_19318_19338[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19315 === (1))){
var inst_19283 = cljs.core.vec(chs);
var inst_19284 = inst_19283;
var state_19314__$1 = (function (){var statearr_19319 = state_19314;
(statearr_19319[(10)] = inst_19284);

return statearr_19319;
})();
var statearr_19320_19339 = state_19314__$1;
(statearr_19320_19339[(2)] = null);

(statearr_19320_19339[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19315 === (4))){
var inst_19284 = (state_19314[(10)]);
var state_19314__$1 = state_19314;
return cljs.core.async.ioc_alts_BANG_(state_19314__$1,(7),inst_19284);
} else {
if((state_val_19315 === (6))){
var inst_19310 = (state_19314[(2)]);
var state_19314__$1 = state_19314;
var statearr_19321_19340 = state_19314__$1;
(statearr_19321_19340[(2)] = inst_19310);

(statearr_19321_19340[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19315 === (3))){
var inst_19312 = (state_19314[(2)]);
var state_19314__$1 = state_19314;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19314__$1,inst_19312);
} else {
if((state_val_19315 === (2))){
var inst_19284 = (state_19314[(10)]);
var inst_19286 = cljs.core.count(inst_19284);
var inst_19287 = (inst_19286 > (0));
var state_19314__$1 = state_19314;
if(cljs.core.truth_(inst_19287)){
var statearr_19323_19341 = state_19314__$1;
(statearr_19323_19341[(1)] = (4));

} else {
var statearr_19324_19342 = state_19314__$1;
(statearr_19324_19342[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19315 === (11))){
var inst_19284 = (state_19314[(10)]);
var inst_19303 = (state_19314[(2)]);
var tmp19322 = inst_19284;
var inst_19284__$1 = tmp19322;
var state_19314__$1 = (function (){var statearr_19325 = state_19314;
(statearr_19325[(11)] = inst_19303);

(statearr_19325[(10)] = inst_19284__$1);

return statearr_19325;
})();
var statearr_19326_19343 = state_19314__$1;
(statearr_19326_19343[(2)] = null);

(statearr_19326_19343[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19315 === (9))){
var inst_19294 = (state_19314[(8)]);
var state_19314__$1 = state_19314;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19314__$1,(11),out,inst_19294);
} else {
if((state_val_19315 === (5))){
var inst_19308 = cljs.core.async.close_BANG_(out);
var state_19314__$1 = state_19314;
var statearr_19327_19344 = state_19314__$1;
(statearr_19327_19344[(2)] = inst_19308);

(statearr_19327_19344[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19315 === (10))){
var inst_19306 = (state_19314[(2)]);
var state_19314__$1 = state_19314;
var statearr_19328_19345 = state_19314__$1;
(statearr_19328_19345[(2)] = inst_19306);

(statearr_19328_19345[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19315 === (8))){
var inst_19295 = (state_19314[(9)]);
var inst_19293 = (state_19314[(7)]);
var inst_19294 = (state_19314[(8)]);
var inst_19284 = (state_19314[(10)]);
var inst_19298 = (function (){var cs = inst_19284;
var vec__19289 = inst_19293;
var v = inst_19294;
var c = inst_19295;
return ((function (cs,vec__19289,v,c,inst_19295,inst_19293,inst_19294,inst_19284,state_val_19315,c__17921__auto___19336,out){
return (function (p1__19280_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__19280_SHARP_);
});
;})(cs,vec__19289,v,c,inst_19295,inst_19293,inst_19294,inst_19284,state_val_19315,c__17921__auto___19336,out))
})();
var inst_19299 = cljs.core.filterv(inst_19298,inst_19284);
var inst_19284__$1 = inst_19299;
var state_19314__$1 = (function (){var statearr_19329 = state_19314;
(statearr_19329[(10)] = inst_19284__$1);

return statearr_19329;
})();
var statearr_19330_19346 = state_19314__$1;
(statearr_19330_19346[(2)] = null);

(statearr_19330_19346[(1)] = (2));


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
});})(c__17921__auto___19336,out))
;
return ((function (switch__17819__auto__,c__17921__auto___19336,out){
return (function() {
var cljs$core$async$state_machine__17820__auto__ = null;
var cljs$core$async$state_machine__17820__auto____0 = (function (){
var statearr_19331 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19331[(0)] = cljs$core$async$state_machine__17820__auto__);

(statearr_19331[(1)] = (1));

return statearr_19331;
});
var cljs$core$async$state_machine__17820__auto____1 = (function (state_19314){
while(true){
var ret_value__17821__auto__ = (function (){try{while(true){
var result__17822__auto__ = switch__17819__auto__(state_19314);
if(cljs.core.keyword_identical_QMARK_(result__17822__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17822__auto__;
}
break;
}
}catch (e19332){if((e19332 instanceof Object)){
var ex__17823__auto__ = e19332;
var statearr_19333_19347 = state_19314;
(statearr_19333_19347[(5)] = ex__17823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19314);

return cljs.core.cst$kw$recur;
} else {
throw e19332;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17821__auto__,cljs.core.cst$kw$recur)){
var G__19348 = state_19314;
state_19314 = G__19348;
continue;
} else {
return ret_value__17821__auto__;
}
break;
}
});
cljs$core$async$state_machine__17820__auto__ = function(state_19314){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17820__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17820__auto____1.call(this,state_19314);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17820__auto____0;
cljs$core$async$state_machine__17820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17820__auto____1;
return cljs$core$async$state_machine__17820__auto__;
})()
;})(switch__17819__auto__,c__17921__auto___19336,out))
})();
var state__17923__auto__ = (function (){var statearr_19334 = (f__17922__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17922__auto__.cljs$core$IFn$_invoke$arity$0() : f__17922__auto__.call(null));
(statearr_19334[(6)] = c__17921__auto___19336);

return statearr_19334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17923__auto__);
});})(c__17921__auto___19336,out))
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
var G__19350 = arguments.length;
switch (G__19350) {
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
var c__17921__auto___19395 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17921__auto___19395,out){
return (function (){
var f__17922__auto__ = (function (){var switch__17819__auto__ = ((function (c__17921__auto___19395,out){
return (function (state_19374){
var state_val_19375 = (state_19374[(1)]);
if((state_val_19375 === (7))){
var inst_19356 = (state_19374[(7)]);
var inst_19356__$1 = (state_19374[(2)]);
var inst_19357 = (inst_19356__$1 == null);
var inst_19358 = cljs.core.not(inst_19357);
var state_19374__$1 = (function (){var statearr_19376 = state_19374;
(statearr_19376[(7)] = inst_19356__$1);

return statearr_19376;
})();
if(inst_19358){
var statearr_19377_19396 = state_19374__$1;
(statearr_19377_19396[(1)] = (8));

} else {
var statearr_19378_19397 = state_19374__$1;
(statearr_19378_19397[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19375 === (1))){
var inst_19351 = (0);
var state_19374__$1 = (function (){var statearr_19379 = state_19374;
(statearr_19379[(8)] = inst_19351);

return statearr_19379;
})();
var statearr_19380_19398 = state_19374__$1;
(statearr_19380_19398[(2)] = null);

(statearr_19380_19398[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19375 === (4))){
var state_19374__$1 = state_19374;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19374__$1,(7),ch);
} else {
if((state_val_19375 === (6))){
var inst_19369 = (state_19374[(2)]);
var state_19374__$1 = state_19374;
var statearr_19381_19399 = state_19374__$1;
(statearr_19381_19399[(2)] = inst_19369);

(statearr_19381_19399[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19375 === (3))){
var inst_19371 = (state_19374[(2)]);
var inst_19372 = cljs.core.async.close_BANG_(out);
var state_19374__$1 = (function (){var statearr_19382 = state_19374;
(statearr_19382[(9)] = inst_19371);

return statearr_19382;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19374__$1,inst_19372);
} else {
if((state_val_19375 === (2))){
var inst_19351 = (state_19374[(8)]);
var inst_19353 = (inst_19351 < n);
var state_19374__$1 = state_19374;
if(cljs.core.truth_(inst_19353)){
var statearr_19383_19400 = state_19374__$1;
(statearr_19383_19400[(1)] = (4));

} else {
var statearr_19384_19401 = state_19374__$1;
(statearr_19384_19401[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19375 === (11))){
var inst_19351 = (state_19374[(8)]);
var inst_19361 = (state_19374[(2)]);
var inst_19362 = (inst_19351 + (1));
var inst_19351__$1 = inst_19362;
var state_19374__$1 = (function (){var statearr_19385 = state_19374;
(statearr_19385[(10)] = inst_19361);

(statearr_19385[(8)] = inst_19351__$1);

return statearr_19385;
})();
var statearr_19386_19402 = state_19374__$1;
(statearr_19386_19402[(2)] = null);

(statearr_19386_19402[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19375 === (9))){
var state_19374__$1 = state_19374;
var statearr_19387_19403 = state_19374__$1;
(statearr_19387_19403[(2)] = null);

(statearr_19387_19403[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19375 === (5))){
var state_19374__$1 = state_19374;
var statearr_19388_19404 = state_19374__$1;
(statearr_19388_19404[(2)] = null);

(statearr_19388_19404[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19375 === (10))){
var inst_19366 = (state_19374[(2)]);
var state_19374__$1 = state_19374;
var statearr_19389_19405 = state_19374__$1;
(statearr_19389_19405[(2)] = inst_19366);

(statearr_19389_19405[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19375 === (8))){
var inst_19356 = (state_19374[(7)]);
var state_19374__$1 = state_19374;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19374__$1,(11),out,inst_19356);
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
});})(c__17921__auto___19395,out))
;
return ((function (switch__17819__auto__,c__17921__auto___19395,out){
return (function() {
var cljs$core$async$state_machine__17820__auto__ = null;
var cljs$core$async$state_machine__17820__auto____0 = (function (){
var statearr_19390 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19390[(0)] = cljs$core$async$state_machine__17820__auto__);

(statearr_19390[(1)] = (1));

return statearr_19390;
});
var cljs$core$async$state_machine__17820__auto____1 = (function (state_19374){
while(true){
var ret_value__17821__auto__ = (function (){try{while(true){
var result__17822__auto__ = switch__17819__auto__(state_19374);
if(cljs.core.keyword_identical_QMARK_(result__17822__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17822__auto__;
}
break;
}
}catch (e19391){if((e19391 instanceof Object)){
var ex__17823__auto__ = e19391;
var statearr_19392_19406 = state_19374;
(statearr_19392_19406[(5)] = ex__17823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19374);

return cljs.core.cst$kw$recur;
} else {
throw e19391;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17821__auto__,cljs.core.cst$kw$recur)){
var G__19407 = state_19374;
state_19374 = G__19407;
continue;
} else {
return ret_value__17821__auto__;
}
break;
}
});
cljs$core$async$state_machine__17820__auto__ = function(state_19374){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17820__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17820__auto____1.call(this,state_19374);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17820__auto____0;
cljs$core$async$state_machine__17820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17820__auto____1;
return cljs$core$async$state_machine__17820__auto__;
})()
;})(switch__17819__auto__,c__17921__auto___19395,out))
})();
var state__17923__auto__ = (function (){var statearr_19393 = (f__17922__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17922__auto__.cljs$core$IFn$_invoke$arity$0() : f__17922__auto__.call(null));
(statearr_19393[(6)] = c__17921__auto___19395);

return statearr_19393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17923__auto__);
});})(c__17921__auto___19395,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19409 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19409 = (function (f,ch,meta19410){
this.f = f;
this.ch = ch;
this.meta19410 = meta19410;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19409.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19411,meta19410__$1){
var self__ = this;
var _19411__$1 = this;
return (new cljs.core.async.t_cljs$core$async19409(self__.f,self__.ch,meta19410__$1));
});

cljs.core.async.t_cljs$core$async19409.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19411){
var self__ = this;
var _19411__$1 = this;
return self__.meta19410;
});

cljs.core.async.t_cljs$core$async19409.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19409.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async19409.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async19409.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19409.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async19412 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19412 = (function (f,ch,meta19410,_,fn1,meta19413){
this.f = f;
this.ch = ch;
this.meta19410 = meta19410;
this._ = _;
this.fn1 = fn1;
this.meta19413 = meta19413;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19414,meta19413__$1){
var self__ = this;
var _19414__$1 = this;
return (new cljs.core.async.t_cljs$core$async19412(self__.f,self__.ch,self__.meta19410,self__._,self__.fn1,meta19413__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async19412.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19414){
var self__ = this;
var _19414__$1 = this;
return self__.meta19413;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19412.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19412.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19412.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async19412.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19408_SHARP_){
var G__19415 = (((p1__19408_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__19408_SHARP_) : self__.f.call(null,p1__19408_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__19415) : f1.call(null,G__19415));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async19412.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19410,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async19409], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta19413], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async19412.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19412.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19412";

cljs.core.async.t_cljs$core$async19412.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__9537__auto__,writer__9538__auto__,opt__9539__auto__){
return cljs.core._write(writer__9538__auto__,"cljs.core.async/t_cljs$core$async19412");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async19412 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19412(f__$1,ch__$1,meta19410__$1,___$2,fn1__$1,meta19413){
return (new cljs.core.async.t_cljs$core$async19412(f__$1,ch__$1,meta19410__$1,___$2,fn1__$1,meta19413));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async19412(self__.f,self__.ch,self__.meta19410,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__8854__auto__ = ret;
if(cljs.core.truth_(and__8854__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__8854__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__19416 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__19416) : self__.f.call(null,G__19416));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async19409.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19409.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async19409.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19410], null);
});

cljs.core.async.t_cljs$core$async19409.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19409.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19409";

cljs.core.async.t_cljs$core$async19409.cljs$lang$ctorPrWriter = (function (this__9537__auto__,writer__9538__auto__,opt__9539__auto__){
return cljs.core._write(writer__9538__auto__,"cljs.core.async/t_cljs$core$async19409");
});

cljs.core.async.__GT_t_cljs$core$async19409 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19409(f__$1,ch__$1,meta19410){
return (new cljs.core.async.t_cljs$core$async19409(f__$1,ch__$1,meta19410));
});

}

return (new cljs.core.async.t_cljs$core$async19409(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async19417 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19417 = (function (f,ch,meta19418){
this.f = f;
this.ch = ch;
this.meta19418 = meta19418;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19417.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19419,meta19418__$1){
var self__ = this;
var _19419__$1 = this;
return (new cljs.core.async.t_cljs$core$async19417(self__.f,self__.ch,meta19418__$1));
});

cljs.core.async.t_cljs$core$async19417.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19419){
var self__ = this;
var _19419__$1 = this;
return self__.meta19418;
});

cljs.core.async.t_cljs$core$async19417.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19417.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async19417.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19417.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19417.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19417.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async19417.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19418], null);
});

cljs.core.async.t_cljs$core$async19417.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19417.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19417";

cljs.core.async.t_cljs$core$async19417.cljs$lang$ctorPrWriter = (function (this__9537__auto__,writer__9538__auto__,opt__9539__auto__){
return cljs.core._write(writer__9538__auto__,"cljs.core.async/t_cljs$core$async19417");
});

cljs.core.async.__GT_t_cljs$core$async19417 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19417(f__$1,ch__$1,meta19418){
return (new cljs.core.async.t_cljs$core$async19417(f__$1,ch__$1,meta19418));
});

}

return (new cljs.core.async.t_cljs$core$async19417(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async19420 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19420 = (function (p,ch,meta19421){
this.p = p;
this.ch = ch;
this.meta19421 = meta19421;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19420.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19422,meta19421__$1){
var self__ = this;
var _19422__$1 = this;
return (new cljs.core.async.t_cljs$core$async19420(self__.p,self__.ch,meta19421__$1));
});

cljs.core.async.t_cljs$core$async19420.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19422){
var self__ = this;
var _19422__$1 = this;
return self__.meta19421;
});

cljs.core.async.t_cljs$core$async19420.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19420.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async19420.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async19420.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19420.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19420.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19420.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async19420.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19421], null);
});

cljs.core.async.t_cljs$core$async19420.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19420.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19420";

cljs.core.async.t_cljs$core$async19420.cljs$lang$ctorPrWriter = (function (this__9537__auto__,writer__9538__auto__,opt__9539__auto__){
return cljs.core._write(writer__9538__auto__,"cljs.core.async/t_cljs$core$async19420");
});

cljs.core.async.__GT_t_cljs$core$async19420 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19420(p__$1,ch__$1,meta19421){
return (new cljs.core.async.t_cljs$core$async19420(p__$1,ch__$1,meta19421));
});

}

return (new cljs.core.async.t_cljs$core$async19420(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__19424 = arguments.length;
switch (G__19424) {
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
var c__17921__auto___19464 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17921__auto___19464,out){
return (function (){
var f__17922__auto__ = (function (){var switch__17819__auto__ = ((function (c__17921__auto___19464,out){
return (function (state_19445){
var state_val_19446 = (state_19445[(1)]);
if((state_val_19446 === (7))){
var inst_19441 = (state_19445[(2)]);
var state_19445__$1 = state_19445;
var statearr_19447_19465 = state_19445__$1;
(statearr_19447_19465[(2)] = inst_19441);

(statearr_19447_19465[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19446 === (1))){
var state_19445__$1 = state_19445;
var statearr_19448_19466 = state_19445__$1;
(statearr_19448_19466[(2)] = null);

(statearr_19448_19466[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19446 === (4))){
var inst_19427 = (state_19445[(7)]);
var inst_19427__$1 = (state_19445[(2)]);
var inst_19428 = (inst_19427__$1 == null);
var state_19445__$1 = (function (){var statearr_19449 = state_19445;
(statearr_19449[(7)] = inst_19427__$1);

return statearr_19449;
})();
if(cljs.core.truth_(inst_19428)){
var statearr_19450_19467 = state_19445__$1;
(statearr_19450_19467[(1)] = (5));

} else {
var statearr_19451_19468 = state_19445__$1;
(statearr_19451_19468[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19446 === (6))){
var inst_19427 = (state_19445[(7)]);
var inst_19432 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_19427) : p.call(null,inst_19427));
var state_19445__$1 = state_19445;
if(cljs.core.truth_(inst_19432)){
var statearr_19452_19469 = state_19445__$1;
(statearr_19452_19469[(1)] = (8));

} else {
var statearr_19453_19470 = state_19445__$1;
(statearr_19453_19470[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19446 === (3))){
var inst_19443 = (state_19445[(2)]);
var state_19445__$1 = state_19445;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19445__$1,inst_19443);
} else {
if((state_val_19446 === (2))){
var state_19445__$1 = state_19445;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19445__$1,(4),ch);
} else {
if((state_val_19446 === (11))){
var inst_19435 = (state_19445[(2)]);
var state_19445__$1 = state_19445;
var statearr_19454_19471 = state_19445__$1;
(statearr_19454_19471[(2)] = inst_19435);

(statearr_19454_19471[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19446 === (9))){
var state_19445__$1 = state_19445;
var statearr_19455_19472 = state_19445__$1;
(statearr_19455_19472[(2)] = null);

(statearr_19455_19472[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19446 === (5))){
var inst_19430 = cljs.core.async.close_BANG_(out);
var state_19445__$1 = state_19445;
var statearr_19456_19473 = state_19445__$1;
(statearr_19456_19473[(2)] = inst_19430);

(statearr_19456_19473[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19446 === (10))){
var inst_19438 = (state_19445[(2)]);
var state_19445__$1 = (function (){var statearr_19457 = state_19445;
(statearr_19457[(8)] = inst_19438);

return statearr_19457;
})();
var statearr_19458_19474 = state_19445__$1;
(statearr_19458_19474[(2)] = null);

(statearr_19458_19474[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19446 === (8))){
var inst_19427 = (state_19445[(7)]);
var state_19445__$1 = state_19445;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19445__$1,(11),out,inst_19427);
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
});})(c__17921__auto___19464,out))
;
return ((function (switch__17819__auto__,c__17921__auto___19464,out){
return (function() {
var cljs$core$async$state_machine__17820__auto__ = null;
var cljs$core$async$state_machine__17820__auto____0 = (function (){
var statearr_19459 = [null,null,null,null,null,null,null,null,null];
(statearr_19459[(0)] = cljs$core$async$state_machine__17820__auto__);

(statearr_19459[(1)] = (1));

return statearr_19459;
});
var cljs$core$async$state_machine__17820__auto____1 = (function (state_19445){
while(true){
var ret_value__17821__auto__ = (function (){try{while(true){
var result__17822__auto__ = switch__17819__auto__(state_19445);
if(cljs.core.keyword_identical_QMARK_(result__17822__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17822__auto__;
}
break;
}
}catch (e19460){if((e19460 instanceof Object)){
var ex__17823__auto__ = e19460;
var statearr_19461_19475 = state_19445;
(statearr_19461_19475[(5)] = ex__17823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19445);

return cljs.core.cst$kw$recur;
} else {
throw e19460;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17821__auto__,cljs.core.cst$kw$recur)){
var G__19476 = state_19445;
state_19445 = G__19476;
continue;
} else {
return ret_value__17821__auto__;
}
break;
}
});
cljs$core$async$state_machine__17820__auto__ = function(state_19445){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17820__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17820__auto____1.call(this,state_19445);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17820__auto____0;
cljs$core$async$state_machine__17820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17820__auto____1;
return cljs$core$async$state_machine__17820__auto__;
})()
;})(switch__17819__auto__,c__17921__auto___19464,out))
})();
var state__17923__auto__ = (function (){var statearr_19462 = (f__17922__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17922__auto__.cljs$core$IFn$_invoke$arity$0() : f__17922__auto__.call(null));
(statearr_19462[(6)] = c__17921__auto___19464);

return statearr_19462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17923__auto__);
});})(c__17921__auto___19464,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__19478 = arguments.length;
switch (G__19478) {
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
var c__17921__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17921__auto__){
return (function (){
var f__17922__auto__ = (function (){var switch__17819__auto__ = ((function (c__17921__auto__){
return (function (state_19541){
var state_val_19542 = (state_19541[(1)]);
if((state_val_19542 === (7))){
var inst_19537 = (state_19541[(2)]);
var state_19541__$1 = state_19541;
var statearr_19543_19581 = state_19541__$1;
(statearr_19543_19581[(2)] = inst_19537);

(statearr_19543_19581[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19542 === (20))){
var inst_19507 = (state_19541[(7)]);
var inst_19518 = (state_19541[(2)]);
var inst_19519 = cljs.core.next(inst_19507);
var inst_19493 = inst_19519;
var inst_19494 = null;
var inst_19495 = (0);
var inst_19496 = (0);
var state_19541__$1 = (function (){var statearr_19544 = state_19541;
(statearr_19544[(8)] = inst_19496);

(statearr_19544[(9)] = inst_19495);

(statearr_19544[(10)] = inst_19493);

(statearr_19544[(11)] = inst_19494);

(statearr_19544[(12)] = inst_19518);

return statearr_19544;
})();
var statearr_19545_19582 = state_19541__$1;
(statearr_19545_19582[(2)] = null);

(statearr_19545_19582[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19542 === (1))){
var state_19541__$1 = state_19541;
var statearr_19546_19583 = state_19541__$1;
(statearr_19546_19583[(2)] = null);

(statearr_19546_19583[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19542 === (4))){
var inst_19482 = (state_19541[(13)]);
var inst_19482__$1 = (state_19541[(2)]);
var inst_19483 = (inst_19482__$1 == null);
var state_19541__$1 = (function (){var statearr_19547 = state_19541;
(statearr_19547[(13)] = inst_19482__$1);

return statearr_19547;
})();
if(cljs.core.truth_(inst_19483)){
var statearr_19548_19584 = state_19541__$1;
(statearr_19548_19584[(1)] = (5));

} else {
var statearr_19549_19585 = state_19541__$1;
(statearr_19549_19585[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19542 === (15))){
var state_19541__$1 = state_19541;
var statearr_19553_19586 = state_19541__$1;
(statearr_19553_19586[(2)] = null);

(statearr_19553_19586[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19542 === (21))){
var state_19541__$1 = state_19541;
var statearr_19554_19587 = state_19541__$1;
(statearr_19554_19587[(2)] = null);

(statearr_19554_19587[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19542 === (13))){
var inst_19496 = (state_19541[(8)]);
var inst_19495 = (state_19541[(9)]);
var inst_19493 = (state_19541[(10)]);
var inst_19494 = (state_19541[(11)]);
var inst_19503 = (state_19541[(2)]);
var inst_19504 = (inst_19496 + (1));
var tmp19550 = inst_19495;
var tmp19551 = inst_19493;
var tmp19552 = inst_19494;
var inst_19493__$1 = tmp19551;
var inst_19494__$1 = tmp19552;
var inst_19495__$1 = tmp19550;
var inst_19496__$1 = inst_19504;
var state_19541__$1 = (function (){var statearr_19555 = state_19541;
(statearr_19555[(8)] = inst_19496__$1);

(statearr_19555[(9)] = inst_19495__$1);

(statearr_19555[(10)] = inst_19493__$1);

(statearr_19555[(11)] = inst_19494__$1);

(statearr_19555[(14)] = inst_19503);

return statearr_19555;
})();
var statearr_19556_19588 = state_19541__$1;
(statearr_19556_19588[(2)] = null);

(statearr_19556_19588[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19542 === (22))){
var state_19541__$1 = state_19541;
var statearr_19557_19589 = state_19541__$1;
(statearr_19557_19589[(2)] = null);

(statearr_19557_19589[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19542 === (6))){
var inst_19482 = (state_19541[(13)]);
var inst_19491 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19482) : f.call(null,inst_19482));
var inst_19492 = cljs.core.seq(inst_19491);
var inst_19493 = inst_19492;
var inst_19494 = null;
var inst_19495 = (0);
var inst_19496 = (0);
var state_19541__$1 = (function (){var statearr_19558 = state_19541;
(statearr_19558[(8)] = inst_19496);

(statearr_19558[(9)] = inst_19495);

(statearr_19558[(10)] = inst_19493);

(statearr_19558[(11)] = inst_19494);

return statearr_19558;
})();
var statearr_19559_19590 = state_19541__$1;
(statearr_19559_19590[(2)] = null);

(statearr_19559_19590[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19542 === (17))){
var inst_19507 = (state_19541[(7)]);
var inst_19511 = cljs.core.chunk_first(inst_19507);
var inst_19512 = cljs.core.chunk_rest(inst_19507);
var inst_19513 = cljs.core.count(inst_19511);
var inst_19493 = inst_19512;
var inst_19494 = inst_19511;
var inst_19495 = inst_19513;
var inst_19496 = (0);
var state_19541__$1 = (function (){var statearr_19560 = state_19541;
(statearr_19560[(8)] = inst_19496);

(statearr_19560[(9)] = inst_19495);

(statearr_19560[(10)] = inst_19493);

(statearr_19560[(11)] = inst_19494);

return statearr_19560;
})();
var statearr_19561_19591 = state_19541__$1;
(statearr_19561_19591[(2)] = null);

(statearr_19561_19591[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19542 === (3))){
var inst_19539 = (state_19541[(2)]);
var state_19541__$1 = state_19541;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19541__$1,inst_19539);
} else {
if((state_val_19542 === (12))){
var inst_19527 = (state_19541[(2)]);
var state_19541__$1 = state_19541;
var statearr_19562_19592 = state_19541__$1;
(statearr_19562_19592[(2)] = inst_19527);

(statearr_19562_19592[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19542 === (2))){
var state_19541__$1 = state_19541;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19541__$1,(4),in$);
} else {
if((state_val_19542 === (23))){
var inst_19535 = (state_19541[(2)]);
var state_19541__$1 = state_19541;
var statearr_19563_19593 = state_19541__$1;
(statearr_19563_19593[(2)] = inst_19535);

(statearr_19563_19593[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19542 === (19))){
var inst_19522 = (state_19541[(2)]);
var state_19541__$1 = state_19541;
var statearr_19564_19594 = state_19541__$1;
(statearr_19564_19594[(2)] = inst_19522);

(statearr_19564_19594[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19542 === (11))){
var inst_19493 = (state_19541[(10)]);
var inst_19507 = (state_19541[(7)]);
var inst_19507__$1 = cljs.core.seq(inst_19493);
var state_19541__$1 = (function (){var statearr_19565 = state_19541;
(statearr_19565[(7)] = inst_19507__$1);

return statearr_19565;
})();
if(inst_19507__$1){
var statearr_19566_19595 = state_19541__$1;
(statearr_19566_19595[(1)] = (14));

} else {
var statearr_19567_19596 = state_19541__$1;
(statearr_19567_19596[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19542 === (9))){
var inst_19529 = (state_19541[(2)]);
var inst_19530 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_19541__$1 = (function (){var statearr_19568 = state_19541;
(statearr_19568[(15)] = inst_19529);

return statearr_19568;
})();
if(cljs.core.truth_(inst_19530)){
var statearr_19569_19597 = state_19541__$1;
(statearr_19569_19597[(1)] = (21));

} else {
var statearr_19570_19598 = state_19541__$1;
(statearr_19570_19598[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19542 === (5))){
var inst_19485 = cljs.core.async.close_BANG_(out);
var state_19541__$1 = state_19541;
var statearr_19571_19599 = state_19541__$1;
(statearr_19571_19599[(2)] = inst_19485);

(statearr_19571_19599[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19542 === (14))){
var inst_19507 = (state_19541[(7)]);
var inst_19509 = cljs.core.chunked_seq_QMARK_(inst_19507);
var state_19541__$1 = state_19541;
if(inst_19509){
var statearr_19572_19600 = state_19541__$1;
(statearr_19572_19600[(1)] = (17));

} else {
var statearr_19573_19601 = state_19541__$1;
(statearr_19573_19601[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19542 === (16))){
var inst_19525 = (state_19541[(2)]);
var state_19541__$1 = state_19541;
var statearr_19574_19602 = state_19541__$1;
(statearr_19574_19602[(2)] = inst_19525);

(statearr_19574_19602[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19542 === (10))){
var inst_19496 = (state_19541[(8)]);
var inst_19494 = (state_19541[(11)]);
var inst_19501 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_19494,inst_19496);
var state_19541__$1 = state_19541;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19541__$1,(13),out,inst_19501);
} else {
if((state_val_19542 === (18))){
var inst_19507 = (state_19541[(7)]);
var inst_19516 = cljs.core.first(inst_19507);
var state_19541__$1 = state_19541;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19541__$1,(20),out,inst_19516);
} else {
if((state_val_19542 === (8))){
var inst_19496 = (state_19541[(8)]);
var inst_19495 = (state_19541[(9)]);
var inst_19498 = (inst_19496 < inst_19495);
var inst_19499 = inst_19498;
var state_19541__$1 = state_19541;
if(cljs.core.truth_(inst_19499)){
var statearr_19575_19603 = state_19541__$1;
(statearr_19575_19603[(1)] = (10));

} else {
var statearr_19576_19604 = state_19541__$1;
(statearr_19576_19604[(1)] = (11));

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
});})(c__17921__auto__))
;
return ((function (switch__17819__auto__,c__17921__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__17820__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__17820__auto____0 = (function (){
var statearr_19577 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19577[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__17820__auto__);

(statearr_19577[(1)] = (1));

return statearr_19577;
});
var cljs$core$async$mapcat_STAR__$_state_machine__17820__auto____1 = (function (state_19541){
while(true){
var ret_value__17821__auto__ = (function (){try{while(true){
var result__17822__auto__ = switch__17819__auto__(state_19541);
if(cljs.core.keyword_identical_QMARK_(result__17822__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17822__auto__;
}
break;
}
}catch (e19578){if((e19578 instanceof Object)){
var ex__17823__auto__ = e19578;
var statearr_19579_19605 = state_19541;
(statearr_19579_19605[(5)] = ex__17823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19541);

return cljs.core.cst$kw$recur;
} else {
throw e19578;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17821__auto__,cljs.core.cst$kw$recur)){
var G__19606 = state_19541;
state_19541 = G__19606;
continue;
} else {
return ret_value__17821__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__17820__auto__ = function(state_19541){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__17820__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__17820__auto____1.call(this,state_19541);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__17820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__17820__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__17820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__17820__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__17820__auto__;
})()
;})(switch__17819__auto__,c__17921__auto__))
})();
var state__17923__auto__ = (function (){var statearr_19580 = (f__17922__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17922__auto__.cljs$core$IFn$_invoke$arity$0() : f__17922__auto__.call(null));
(statearr_19580[(6)] = c__17921__auto__);

return statearr_19580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17923__auto__);
});})(c__17921__auto__))
);

return c__17921__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__19608 = arguments.length;
switch (G__19608) {
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
var G__19611 = arguments.length;
switch (G__19611) {
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
var G__19614 = arguments.length;
switch (G__19614) {
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
var c__17921__auto___19661 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17921__auto___19661,out){
return (function (){
var f__17922__auto__ = (function (){var switch__17819__auto__ = ((function (c__17921__auto___19661,out){
return (function (state_19638){
var state_val_19639 = (state_19638[(1)]);
if((state_val_19639 === (7))){
var inst_19633 = (state_19638[(2)]);
var state_19638__$1 = state_19638;
var statearr_19640_19662 = state_19638__$1;
(statearr_19640_19662[(2)] = inst_19633);

(statearr_19640_19662[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19639 === (1))){
var inst_19615 = null;
var state_19638__$1 = (function (){var statearr_19641 = state_19638;
(statearr_19641[(7)] = inst_19615);

return statearr_19641;
})();
var statearr_19642_19663 = state_19638__$1;
(statearr_19642_19663[(2)] = null);

(statearr_19642_19663[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19639 === (4))){
var inst_19618 = (state_19638[(8)]);
var inst_19618__$1 = (state_19638[(2)]);
var inst_19619 = (inst_19618__$1 == null);
var inst_19620 = cljs.core.not(inst_19619);
var state_19638__$1 = (function (){var statearr_19643 = state_19638;
(statearr_19643[(8)] = inst_19618__$1);

return statearr_19643;
})();
if(inst_19620){
var statearr_19644_19664 = state_19638__$1;
(statearr_19644_19664[(1)] = (5));

} else {
var statearr_19645_19665 = state_19638__$1;
(statearr_19645_19665[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19639 === (6))){
var state_19638__$1 = state_19638;
var statearr_19646_19666 = state_19638__$1;
(statearr_19646_19666[(2)] = null);

(statearr_19646_19666[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19639 === (3))){
var inst_19635 = (state_19638[(2)]);
var inst_19636 = cljs.core.async.close_BANG_(out);
var state_19638__$1 = (function (){var statearr_19647 = state_19638;
(statearr_19647[(9)] = inst_19635);

return statearr_19647;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19638__$1,inst_19636);
} else {
if((state_val_19639 === (2))){
var state_19638__$1 = state_19638;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19638__$1,(4),ch);
} else {
if((state_val_19639 === (11))){
var inst_19618 = (state_19638[(8)]);
var inst_19627 = (state_19638[(2)]);
var inst_19615 = inst_19618;
var state_19638__$1 = (function (){var statearr_19648 = state_19638;
(statearr_19648[(7)] = inst_19615);

(statearr_19648[(10)] = inst_19627);

return statearr_19648;
})();
var statearr_19649_19667 = state_19638__$1;
(statearr_19649_19667[(2)] = null);

(statearr_19649_19667[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19639 === (9))){
var inst_19618 = (state_19638[(8)]);
var state_19638__$1 = state_19638;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19638__$1,(11),out,inst_19618);
} else {
if((state_val_19639 === (5))){
var inst_19615 = (state_19638[(7)]);
var inst_19618 = (state_19638[(8)]);
var inst_19622 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19618,inst_19615);
var state_19638__$1 = state_19638;
if(inst_19622){
var statearr_19651_19668 = state_19638__$1;
(statearr_19651_19668[(1)] = (8));

} else {
var statearr_19652_19669 = state_19638__$1;
(statearr_19652_19669[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19639 === (10))){
var inst_19630 = (state_19638[(2)]);
var state_19638__$1 = state_19638;
var statearr_19653_19670 = state_19638__$1;
(statearr_19653_19670[(2)] = inst_19630);

(statearr_19653_19670[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19639 === (8))){
var inst_19615 = (state_19638[(7)]);
var tmp19650 = inst_19615;
var inst_19615__$1 = tmp19650;
var state_19638__$1 = (function (){var statearr_19654 = state_19638;
(statearr_19654[(7)] = inst_19615__$1);

return statearr_19654;
})();
var statearr_19655_19671 = state_19638__$1;
(statearr_19655_19671[(2)] = null);

(statearr_19655_19671[(1)] = (2));


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
});})(c__17921__auto___19661,out))
;
return ((function (switch__17819__auto__,c__17921__auto___19661,out){
return (function() {
var cljs$core$async$state_machine__17820__auto__ = null;
var cljs$core$async$state_machine__17820__auto____0 = (function (){
var statearr_19656 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19656[(0)] = cljs$core$async$state_machine__17820__auto__);

(statearr_19656[(1)] = (1));

return statearr_19656;
});
var cljs$core$async$state_machine__17820__auto____1 = (function (state_19638){
while(true){
var ret_value__17821__auto__ = (function (){try{while(true){
var result__17822__auto__ = switch__17819__auto__(state_19638);
if(cljs.core.keyword_identical_QMARK_(result__17822__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17822__auto__;
}
break;
}
}catch (e19657){if((e19657 instanceof Object)){
var ex__17823__auto__ = e19657;
var statearr_19658_19672 = state_19638;
(statearr_19658_19672[(5)] = ex__17823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19638);

return cljs.core.cst$kw$recur;
} else {
throw e19657;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17821__auto__,cljs.core.cst$kw$recur)){
var G__19673 = state_19638;
state_19638 = G__19673;
continue;
} else {
return ret_value__17821__auto__;
}
break;
}
});
cljs$core$async$state_machine__17820__auto__ = function(state_19638){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17820__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17820__auto____1.call(this,state_19638);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17820__auto____0;
cljs$core$async$state_machine__17820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17820__auto____1;
return cljs$core$async$state_machine__17820__auto__;
})()
;})(switch__17819__auto__,c__17921__auto___19661,out))
})();
var state__17923__auto__ = (function (){var statearr_19659 = (f__17922__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17922__auto__.cljs$core$IFn$_invoke$arity$0() : f__17922__auto__.call(null));
(statearr_19659[(6)] = c__17921__auto___19661);

return statearr_19659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17923__auto__);
});})(c__17921__auto___19661,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__19675 = arguments.length;
switch (G__19675) {
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
var c__17921__auto___19741 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17921__auto___19741,out){
return (function (){
var f__17922__auto__ = (function (){var switch__17819__auto__ = ((function (c__17921__auto___19741,out){
return (function (state_19713){
var state_val_19714 = (state_19713[(1)]);
if((state_val_19714 === (7))){
var inst_19709 = (state_19713[(2)]);
var state_19713__$1 = state_19713;
var statearr_19715_19742 = state_19713__$1;
(statearr_19715_19742[(2)] = inst_19709);

(statearr_19715_19742[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19714 === (1))){
var inst_19676 = (new Array(n));
var inst_19677 = inst_19676;
var inst_19678 = (0);
var state_19713__$1 = (function (){var statearr_19716 = state_19713;
(statearr_19716[(7)] = inst_19678);

(statearr_19716[(8)] = inst_19677);

return statearr_19716;
})();
var statearr_19717_19743 = state_19713__$1;
(statearr_19717_19743[(2)] = null);

(statearr_19717_19743[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19714 === (4))){
var inst_19681 = (state_19713[(9)]);
var inst_19681__$1 = (state_19713[(2)]);
var inst_19682 = (inst_19681__$1 == null);
var inst_19683 = cljs.core.not(inst_19682);
var state_19713__$1 = (function (){var statearr_19718 = state_19713;
(statearr_19718[(9)] = inst_19681__$1);

return statearr_19718;
})();
if(inst_19683){
var statearr_19719_19744 = state_19713__$1;
(statearr_19719_19744[(1)] = (5));

} else {
var statearr_19720_19745 = state_19713__$1;
(statearr_19720_19745[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19714 === (15))){
var inst_19703 = (state_19713[(2)]);
var state_19713__$1 = state_19713;
var statearr_19721_19746 = state_19713__$1;
(statearr_19721_19746[(2)] = inst_19703);

(statearr_19721_19746[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19714 === (13))){
var state_19713__$1 = state_19713;
var statearr_19722_19747 = state_19713__$1;
(statearr_19722_19747[(2)] = null);

(statearr_19722_19747[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19714 === (6))){
var inst_19678 = (state_19713[(7)]);
var inst_19699 = (inst_19678 > (0));
var state_19713__$1 = state_19713;
if(cljs.core.truth_(inst_19699)){
var statearr_19723_19748 = state_19713__$1;
(statearr_19723_19748[(1)] = (12));

} else {
var statearr_19724_19749 = state_19713__$1;
(statearr_19724_19749[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19714 === (3))){
var inst_19711 = (state_19713[(2)]);
var state_19713__$1 = state_19713;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19713__$1,inst_19711);
} else {
if((state_val_19714 === (12))){
var inst_19677 = (state_19713[(8)]);
var inst_19701 = cljs.core.vec(inst_19677);
var state_19713__$1 = state_19713;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19713__$1,(15),out,inst_19701);
} else {
if((state_val_19714 === (2))){
var state_19713__$1 = state_19713;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19713__$1,(4),ch);
} else {
if((state_val_19714 === (11))){
var inst_19693 = (state_19713[(2)]);
var inst_19694 = (new Array(n));
var inst_19677 = inst_19694;
var inst_19678 = (0);
var state_19713__$1 = (function (){var statearr_19725 = state_19713;
(statearr_19725[(7)] = inst_19678);

(statearr_19725[(10)] = inst_19693);

(statearr_19725[(8)] = inst_19677);

return statearr_19725;
})();
var statearr_19726_19750 = state_19713__$1;
(statearr_19726_19750[(2)] = null);

(statearr_19726_19750[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19714 === (9))){
var inst_19677 = (state_19713[(8)]);
var inst_19691 = cljs.core.vec(inst_19677);
var state_19713__$1 = state_19713;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19713__$1,(11),out,inst_19691);
} else {
if((state_val_19714 === (5))){
var inst_19678 = (state_19713[(7)]);
var inst_19686 = (state_19713[(11)]);
var inst_19681 = (state_19713[(9)]);
var inst_19677 = (state_19713[(8)]);
var inst_19685 = (inst_19677[inst_19678] = inst_19681);
var inst_19686__$1 = (inst_19678 + (1));
var inst_19687 = (inst_19686__$1 < n);
var state_19713__$1 = (function (){var statearr_19727 = state_19713;
(statearr_19727[(12)] = inst_19685);

(statearr_19727[(11)] = inst_19686__$1);

return statearr_19727;
})();
if(cljs.core.truth_(inst_19687)){
var statearr_19728_19751 = state_19713__$1;
(statearr_19728_19751[(1)] = (8));

} else {
var statearr_19729_19752 = state_19713__$1;
(statearr_19729_19752[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19714 === (14))){
var inst_19706 = (state_19713[(2)]);
var inst_19707 = cljs.core.async.close_BANG_(out);
var state_19713__$1 = (function (){var statearr_19731 = state_19713;
(statearr_19731[(13)] = inst_19706);

return statearr_19731;
})();
var statearr_19732_19753 = state_19713__$1;
(statearr_19732_19753[(2)] = inst_19707);

(statearr_19732_19753[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19714 === (10))){
var inst_19697 = (state_19713[(2)]);
var state_19713__$1 = state_19713;
var statearr_19733_19754 = state_19713__$1;
(statearr_19733_19754[(2)] = inst_19697);

(statearr_19733_19754[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19714 === (8))){
var inst_19686 = (state_19713[(11)]);
var inst_19677 = (state_19713[(8)]);
var tmp19730 = inst_19677;
var inst_19677__$1 = tmp19730;
var inst_19678 = inst_19686;
var state_19713__$1 = (function (){var statearr_19734 = state_19713;
(statearr_19734[(7)] = inst_19678);

(statearr_19734[(8)] = inst_19677__$1);

return statearr_19734;
})();
var statearr_19735_19755 = state_19713__$1;
(statearr_19735_19755[(2)] = null);

(statearr_19735_19755[(1)] = (2));


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
});})(c__17921__auto___19741,out))
;
return ((function (switch__17819__auto__,c__17921__auto___19741,out){
return (function() {
var cljs$core$async$state_machine__17820__auto__ = null;
var cljs$core$async$state_machine__17820__auto____0 = (function (){
var statearr_19736 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19736[(0)] = cljs$core$async$state_machine__17820__auto__);

(statearr_19736[(1)] = (1));

return statearr_19736;
});
var cljs$core$async$state_machine__17820__auto____1 = (function (state_19713){
while(true){
var ret_value__17821__auto__ = (function (){try{while(true){
var result__17822__auto__ = switch__17819__auto__(state_19713);
if(cljs.core.keyword_identical_QMARK_(result__17822__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17822__auto__;
}
break;
}
}catch (e19737){if((e19737 instanceof Object)){
var ex__17823__auto__ = e19737;
var statearr_19738_19756 = state_19713;
(statearr_19738_19756[(5)] = ex__17823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19713);

return cljs.core.cst$kw$recur;
} else {
throw e19737;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17821__auto__,cljs.core.cst$kw$recur)){
var G__19757 = state_19713;
state_19713 = G__19757;
continue;
} else {
return ret_value__17821__auto__;
}
break;
}
});
cljs$core$async$state_machine__17820__auto__ = function(state_19713){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17820__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17820__auto____1.call(this,state_19713);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17820__auto____0;
cljs$core$async$state_machine__17820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17820__auto____1;
return cljs$core$async$state_machine__17820__auto__;
})()
;})(switch__17819__auto__,c__17921__auto___19741,out))
})();
var state__17923__auto__ = (function (){var statearr_19739 = (f__17922__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17922__auto__.cljs$core$IFn$_invoke$arity$0() : f__17922__auto__.call(null));
(statearr_19739[(6)] = c__17921__auto___19741);

return statearr_19739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17923__auto__);
});})(c__17921__auto___19741,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19759 = arguments.length;
switch (G__19759) {
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
var c__17921__auto___19829 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17921__auto___19829,out){
return (function (){
var f__17922__auto__ = (function (){var switch__17819__auto__ = ((function (c__17921__auto___19829,out){
return (function (state_19801){
var state_val_19802 = (state_19801[(1)]);
if((state_val_19802 === (7))){
var inst_19797 = (state_19801[(2)]);
var state_19801__$1 = state_19801;
var statearr_19803_19830 = state_19801__$1;
(statearr_19803_19830[(2)] = inst_19797);

(statearr_19803_19830[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19802 === (1))){
var inst_19760 = [];
var inst_19761 = inst_19760;
var inst_19762 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_19801__$1 = (function (){var statearr_19804 = state_19801;
(statearr_19804[(7)] = inst_19761);

(statearr_19804[(8)] = inst_19762);

return statearr_19804;
})();
var statearr_19805_19831 = state_19801__$1;
(statearr_19805_19831[(2)] = null);

(statearr_19805_19831[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19802 === (4))){
var inst_19765 = (state_19801[(9)]);
var inst_19765__$1 = (state_19801[(2)]);
var inst_19766 = (inst_19765__$1 == null);
var inst_19767 = cljs.core.not(inst_19766);
var state_19801__$1 = (function (){var statearr_19806 = state_19801;
(statearr_19806[(9)] = inst_19765__$1);

return statearr_19806;
})();
if(inst_19767){
var statearr_19807_19832 = state_19801__$1;
(statearr_19807_19832[(1)] = (5));

} else {
var statearr_19808_19833 = state_19801__$1;
(statearr_19808_19833[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19802 === (15))){
var inst_19791 = (state_19801[(2)]);
var state_19801__$1 = state_19801;
var statearr_19809_19834 = state_19801__$1;
(statearr_19809_19834[(2)] = inst_19791);

(statearr_19809_19834[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19802 === (13))){
var state_19801__$1 = state_19801;
var statearr_19810_19835 = state_19801__$1;
(statearr_19810_19835[(2)] = null);

(statearr_19810_19835[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19802 === (6))){
var inst_19761 = (state_19801[(7)]);
var inst_19786 = inst_19761.length;
var inst_19787 = (inst_19786 > (0));
var state_19801__$1 = state_19801;
if(cljs.core.truth_(inst_19787)){
var statearr_19811_19836 = state_19801__$1;
(statearr_19811_19836[(1)] = (12));

} else {
var statearr_19812_19837 = state_19801__$1;
(statearr_19812_19837[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19802 === (3))){
var inst_19799 = (state_19801[(2)]);
var state_19801__$1 = state_19801;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19801__$1,inst_19799);
} else {
if((state_val_19802 === (12))){
var inst_19761 = (state_19801[(7)]);
var inst_19789 = cljs.core.vec(inst_19761);
var state_19801__$1 = state_19801;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19801__$1,(15),out,inst_19789);
} else {
if((state_val_19802 === (2))){
var state_19801__$1 = state_19801;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19801__$1,(4),ch);
} else {
if((state_val_19802 === (11))){
var inst_19765 = (state_19801[(9)]);
var inst_19769 = (state_19801[(10)]);
var inst_19779 = (state_19801[(2)]);
var inst_19780 = [];
var inst_19781 = inst_19780.push(inst_19765);
var inst_19761 = inst_19780;
var inst_19762 = inst_19769;
var state_19801__$1 = (function (){var statearr_19813 = state_19801;
(statearr_19813[(11)] = inst_19779);

(statearr_19813[(7)] = inst_19761);

(statearr_19813[(8)] = inst_19762);

(statearr_19813[(12)] = inst_19781);

return statearr_19813;
})();
var statearr_19814_19838 = state_19801__$1;
(statearr_19814_19838[(2)] = null);

(statearr_19814_19838[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19802 === (9))){
var inst_19761 = (state_19801[(7)]);
var inst_19777 = cljs.core.vec(inst_19761);
var state_19801__$1 = state_19801;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19801__$1,(11),out,inst_19777);
} else {
if((state_val_19802 === (5))){
var inst_19765 = (state_19801[(9)]);
var inst_19762 = (state_19801[(8)]);
var inst_19769 = (state_19801[(10)]);
var inst_19769__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19765) : f.call(null,inst_19765));
var inst_19770 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19769__$1,inst_19762);
var inst_19771 = cljs.core.keyword_identical_QMARK_(inst_19762,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_19772 = (inst_19770) || (inst_19771);
var state_19801__$1 = (function (){var statearr_19815 = state_19801;
(statearr_19815[(10)] = inst_19769__$1);

return statearr_19815;
})();
if(cljs.core.truth_(inst_19772)){
var statearr_19816_19839 = state_19801__$1;
(statearr_19816_19839[(1)] = (8));

} else {
var statearr_19817_19840 = state_19801__$1;
(statearr_19817_19840[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19802 === (14))){
var inst_19794 = (state_19801[(2)]);
var inst_19795 = cljs.core.async.close_BANG_(out);
var state_19801__$1 = (function (){var statearr_19819 = state_19801;
(statearr_19819[(13)] = inst_19794);

return statearr_19819;
})();
var statearr_19820_19841 = state_19801__$1;
(statearr_19820_19841[(2)] = inst_19795);

(statearr_19820_19841[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19802 === (10))){
var inst_19784 = (state_19801[(2)]);
var state_19801__$1 = state_19801;
var statearr_19821_19842 = state_19801__$1;
(statearr_19821_19842[(2)] = inst_19784);

(statearr_19821_19842[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19802 === (8))){
var inst_19761 = (state_19801[(7)]);
var inst_19765 = (state_19801[(9)]);
var inst_19769 = (state_19801[(10)]);
var inst_19774 = inst_19761.push(inst_19765);
var tmp19818 = inst_19761;
var inst_19761__$1 = tmp19818;
var inst_19762 = inst_19769;
var state_19801__$1 = (function (){var statearr_19822 = state_19801;
(statearr_19822[(7)] = inst_19761__$1);

(statearr_19822[(8)] = inst_19762);

(statearr_19822[(14)] = inst_19774);

return statearr_19822;
})();
var statearr_19823_19843 = state_19801__$1;
(statearr_19823_19843[(2)] = null);

(statearr_19823_19843[(1)] = (2));


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
});})(c__17921__auto___19829,out))
;
return ((function (switch__17819__auto__,c__17921__auto___19829,out){
return (function() {
var cljs$core$async$state_machine__17820__auto__ = null;
var cljs$core$async$state_machine__17820__auto____0 = (function (){
var statearr_19824 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19824[(0)] = cljs$core$async$state_machine__17820__auto__);

(statearr_19824[(1)] = (1));

return statearr_19824;
});
var cljs$core$async$state_machine__17820__auto____1 = (function (state_19801){
while(true){
var ret_value__17821__auto__ = (function (){try{while(true){
var result__17822__auto__ = switch__17819__auto__(state_19801);
if(cljs.core.keyword_identical_QMARK_(result__17822__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17822__auto__;
}
break;
}
}catch (e19825){if((e19825 instanceof Object)){
var ex__17823__auto__ = e19825;
var statearr_19826_19844 = state_19801;
(statearr_19826_19844[(5)] = ex__17823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19801);

return cljs.core.cst$kw$recur;
} else {
throw e19825;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17821__auto__,cljs.core.cst$kw$recur)){
var G__19845 = state_19801;
state_19801 = G__19845;
continue;
} else {
return ret_value__17821__auto__;
}
break;
}
});
cljs$core$async$state_machine__17820__auto__ = function(state_19801){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17820__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17820__auto____1.call(this,state_19801);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17820__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17820__auto____0;
cljs$core$async$state_machine__17820__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17820__auto____1;
return cljs$core$async$state_machine__17820__auto__;
})()
;})(switch__17819__auto__,c__17921__auto___19829,out))
})();
var state__17923__auto__ = (function (){var statearr_19827 = (f__17922__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17922__auto__.cljs$core$IFn$_invoke$arity$0() : f__17922__auto__.call(null));
(statearr_19827[(6)] = c__17921__auto___19829);

return statearr_19827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17923__auto__);
});})(c__17921__auto___19829,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

