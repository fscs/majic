// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
cljs.core.async.impl.channels.box = (function cljs$core$async$impl$channels$box(val){
if(typeof cljs.core.async.impl.channels.t_cljs$core$async$impl$channels16148 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels16148 = (function (val,meta16149){
this.val = val;
this.meta16149 = meta16149;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels16148.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16150,meta16149__$1){
var self__ = this;
var _16150__$1 = this;
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels16148(self__.val,meta16149__$1));
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels16148.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16150){
var self__ = this;
var _16150__$1 = this;
return self__.meta16149;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels16148.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels16148.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$val,cljs.core.cst$sym$meta16149], null);
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels16148.cljs$lang$type = true;

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels16148.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t_cljs$core$async$impl$channels16148";

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels16148.cljs$lang$ctorPrWriter = (function (this__9537__auto__,writer__9538__auto__,opt__9539__auto__){
return cljs.core._write(writer__9538__auto__,"cljs.core.async.impl.channels/t_cljs$core$async$impl$channels16148");
});

cljs.core.async.impl.channels.__GT_t_cljs$core$async$impl$channels16148 = (function cljs$core$async$impl$channels$box_$___GT_t_cljs$core$async$impl$channels16148(val__$1,meta16149){
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels16148(val__$1,meta16149));
});

}

return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels16148(val,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
});

cljs.core.async.impl.channels.PutBox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$handler,cljs.core.cst$sym$val], null);
});

cljs.core.async.impl.channels.PutBox.cljs$lang$type = true;

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox";

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__9537__auto__,writer__9538__auto__,opt__9539__auto__){
return cljs.core._write(writer__9538__auto__,"cljs.core.async.impl.channels/PutBox");
});

cljs.core.async.impl.channels.__GT_PutBox = (function cljs$core$async$impl$channels$__GT_PutBox(handler,val){
return (new cljs.core.async.impl.channels.PutBox(handler,val));
});

cljs.core.async.impl.channels.put_active_QMARK_ = (function cljs$core$async$impl$channels$put_active_QMARK_(box){
return cljs.core.async.impl.protocols.active_QMARK_(box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);

/**
 * @interface
 */
cljs.core.async.impl.channels.MMC = function(){};

cljs.core.async.impl.channels.abort = (function cljs$core$async$impl$channels$abort(this$){
if((!((this$ == null))) && (!((this$.cljs$core$async$impl$channels$MMC$abort$arity$1 == null)))){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else {
var x__9599__auto__ = (((this$ == null))?null:this$);
var m__9600__auto__ = (cljs.core.async.impl.channels.abort[goog.typeOf(x__9599__auto__)]);
if(!((m__9600__auto__ == null))){
return (m__9600__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9600__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__9600__auto__.call(null,this$));
} else {
var m__9600__auto____$1 = (cljs.core.async.impl.channels.abort["_"]);
if(!((m__9600__auto____$1 == null))){
return (m__9600__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9600__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__9600__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("MMC.abort",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.async.impl.channels.MMC}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
var putter_16162 = self__.puts.pop();
if((putter_16162 == null)){
} else {
var put_handler_16163 = putter_16162.handler;
var val_16164 = putter_16162.val;
if(put_handler_16163.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var put_cb_16165 = put_handler_16163.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
cljs.core.async.impl.dispatch.run(((function (put_cb_16165,put_handler_16163,val_16164,putter_16162,this$__$1){
return (function (){
return (put_cb_16165.cljs$core$IFn$_invoke$arity$1 ? put_cb_16165.cljs$core$IFn$_invoke$arity$1(true) : put_cb_16165.call(null,true));
});})(put_cb_16165,put_handler_16163,val_16164,putter_16162,this$__$1))
);
} else {
continue;
}
}
break;
}

self__.puts.cleanup(cljs.core.constantly(false));

return this$__$1.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
var this$__$1 = this;
if(!((val == null))){
} else {
throw (new Error(["Assert failed: ","Can't put nil in on a channel","\n","(not (nil? val))"].join('')));
}

var closed__$1 = self__.closed;
if((closed__$1) || (!(handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)))){
return cljs.core.async.impl.channels.box(!(closed__$1));
} else {
if(cljs.core.truth_((function (){var and__8854__auto__ = self__.buf;
if(cljs.core.truth_(and__8854__auto__)){
return cljs.core.not(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null));
} else {
return and__8854__auto__;
}
})())){
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

var done_QMARK_ = cljs.core.reduced_QMARK_((self__.add_BANG_.cljs$core$IFn$_invoke$arity$2 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$2(self__.buf,val) : self__.add_BANG_.call(null,self__.buf,val)));
var take_cbs = (function (){var takers = cljs.core.PersistentVector.EMPTY;
while(true){
if(((self__.takes.length > (0))) && ((cljs.core.count(self__.buf) > (0)))){
var taker = self__.takes.pop();
if(taker.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var ret = taker.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
var val__$1 = self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null);
var G__16166 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(takers,((function (takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1){
return (function (){
return (ret.cljs$core$IFn$_invoke$arity$1 ? ret.cljs$core$IFn$_invoke$arity$1(val__$1) : ret.call(null,val__$1));
});})(takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1))
);
takers = G__16166;
continue;
} else {
var G__16167 = takers;
takers = G__16167;
continue;
}
} else {
return takers;
}
break;
}
})();
if(done_QMARK_){
this$__$1.cljs$core$async$impl$channels$MMC$abort$arity$1(null);
} else {
}

if(cljs.core.seq(take_cbs)){
var seq__16151_16168 = cljs.core.seq(take_cbs);
var chunk__16152_16169 = null;
var count__16153_16170 = (0);
var i__16154_16171 = (0);
while(true){
if((i__16154_16171 < count__16153_16170)){
var f_16172 = chunk__16152_16169.cljs$core$IIndexed$_nth$arity$2(null,i__16154_16171);
cljs.core.async.impl.dispatch.run(f_16172);

var G__16173 = seq__16151_16168;
var G__16174 = chunk__16152_16169;
var G__16175 = count__16153_16170;
var G__16176 = (i__16154_16171 + (1));
seq__16151_16168 = G__16173;
chunk__16152_16169 = G__16174;
count__16153_16170 = G__16175;
i__16154_16171 = G__16176;
continue;
} else {
var temp__5457__auto___16177 = cljs.core.seq(seq__16151_16168);
if(temp__5457__auto___16177){
var seq__16151_16178__$1 = temp__5457__auto___16177;
if(cljs.core.chunked_seq_QMARK_(seq__16151_16178__$1)){
var c__9797__auto___16179 = cljs.core.chunk_first(seq__16151_16178__$1);
var G__16180 = cljs.core.chunk_rest(seq__16151_16178__$1);
var G__16181 = c__9797__auto___16179;
var G__16182 = cljs.core.count(c__9797__auto___16179);
var G__16183 = (0);
seq__16151_16168 = G__16180;
chunk__16152_16169 = G__16181;
count__16153_16170 = G__16182;
i__16154_16171 = G__16183;
continue;
} else {
var f_16184 = cljs.core.first(seq__16151_16178__$1);
cljs.core.async.impl.dispatch.run(f_16184);

var G__16185 = cljs.core.next(seq__16151_16178__$1);
var G__16186 = null;
var G__16187 = (0);
var G__16188 = (0);
seq__16151_16168 = G__16185;
chunk__16152_16169 = G__16186;
count__16153_16170 = G__16187;
i__16154_16171 = G__16188;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.core.async.impl.channels.box(true);
} else {
var taker = (function (){while(true){
var taker = self__.takes.pop();
if(cljs.core.truth_(taker)){
if(cljs.core.truth_(taker.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null))){
return taker;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(taker)){
var take_cb = cljs.core.async.impl.protocols.commit(taker);
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

cljs.core.async.impl.dispatch.run(((function (take_cb,taker,closed__$1,this$__$1){
return (function (){
return (take_cb.cljs$core$IFn$_invoke$arity$1 ? take_cb.cljs$core$IFn$_invoke$arity$1(val) : take_cb.call(null,val));
});})(take_cb,taker,closed__$1,this$__$1))
);

return cljs.core.async.impl.channels.box(true);
} else {
if((self__.dirty_puts > (64))){
self__.dirty_puts = (0);

self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else {
self__.dirty_puts = (self__.dirty_puts + (1));
}

if(cljs.core.truth_(handler.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1(null))){
if((self__.puts.length < (1024))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending puts are allowed on a single channel."," Consider using a windowed buffer."].join('')),"\n","(< (.-length puts) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
} else {
}

return null;
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
if(!(handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null))){
return null;
} else {
if((!((self__.buf == null))) && ((cljs.core.count(self__.buf) > (0)))){
var temp__5455__auto__ = handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
if(cljs.core.truth_(temp__5455__auto__)){
var take_cb = temp__5455__auto__;
var val = self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null);
var vec__16155 = (((self__.puts.length > (0)))?(function (){var cbs = cljs.core.PersistentVector.EMPTY;
while(true){
var putter = self__.puts.pop();
var put_handler = putter.handler;
var val__$1 = putter.val;
var cb = (function (){var and__8854__auto__ = put_handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(and__8854__auto__){
return put_handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__8854__auto__;
}
})();
var cbs__$1 = (cljs.core.truth_(cb)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cbs,cb):cbs);
var done_QMARK_ = (cljs.core.truth_(cb)?cljs.core.reduced_QMARK_((self__.add_BANG_.cljs$core$IFn$_invoke$arity$2 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$2(self__.buf,val__$1) : self__.add_BANG_.call(null,self__.buf,val__$1))):null);
if((cljs.core.not(done_QMARK_)) && (cljs.core.not(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null))) && ((self__.puts.length > (0)))){
var G__16189 = cbs__$1;
cbs = G__16189;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [done_QMARK_,cbs__$1], null);
}
break;
}
})():null);
var done_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16155,(0),null);
var cbs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16155,(1),null);
if(cljs.core.truth_(done_QMARK_)){
this$__$1.cljs$core$async$impl$channels$MMC$abort$arity$1(null);
} else {
}

var seq__16158_16190 = cljs.core.seq(cbs);
var chunk__16159_16191 = null;
var count__16160_16192 = (0);
var i__16161_16193 = (0);
while(true){
if((i__16161_16193 < count__16160_16192)){
var cb_16194 = chunk__16159_16191.cljs$core$IIndexed$_nth$arity$2(null,i__16161_16193);
cljs.core.async.impl.dispatch.run(((function (seq__16158_16190,chunk__16159_16191,count__16160_16192,i__16161_16193,cb_16194,val,vec__16155,done_QMARK_,cbs,take_cb,temp__5455__auto__,this$__$1){
return (function (){
return (cb_16194.cljs$core$IFn$_invoke$arity$1 ? cb_16194.cljs$core$IFn$_invoke$arity$1(true) : cb_16194.call(null,true));
});})(seq__16158_16190,chunk__16159_16191,count__16160_16192,i__16161_16193,cb_16194,val,vec__16155,done_QMARK_,cbs,take_cb,temp__5455__auto__,this$__$1))
);

var G__16195 = seq__16158_16190;
var G__16196 = chunk__16159_16191;
var G__16197 = count__16160_16192;
var G__16198 = (i__16161_16193 + (1));
seq__16158_16190 = G__16195;
chunk__16159_16191 = G__16196;
count__16160_16192 = G__16197;
i__16161_16193 = G__16198;
continue;
} else {
var temp__5457__auto___16199 = cljs.core.seq(seq__16158_16190);
if(temp__5457__auto___16199){
var seq__16158_16200__$1 = temp__5457__auto___16199;
if(cljs.core.chunked_seq_QMARK_(seq__16158_16200__$1)){
var c__9797__auto___16201 = cljs.core.chunk_first(seq__16158_16200__$1);
var G__16202 = cljs.core.chunk_rest(seq__16158_16200__$1);
var G__16203 = c__9797__auto___16201;
var G__16204 = cljs.core.count(c__9797__auto___16201);
var G__16205 = (0);
seq__16158_16190 = G__16202;
chunk__16159_16191 = G__16203;
count__16160_16192 = G__16204;
i__16161_16193 = G__16205;
continue;
} else {
var cb_16206 = cljs.core.first(seq__16158_16200__$1);
cljs.core.async.impl.dispatch.run(((function (seq__16158_16190,chunk__16159_16191,count__16160_16192,i__16161_16193,cb_16206,seq__16158_16200__$1,temp__5457__auto___16199,val,vec__16155,done_QMARK_,cbs,take_cb,temp__5455__auto__,this$__$1){
return (function (){
return (cb_16206.cljs$core$IFn$_invoke$arity$1 ? cb_16206.cljs$core$IFn$_invoke$arity$1(true) : cb_16206.call(null,true));
});})(seq__16158_16190,chunk__16159_16191,count__16160_16192,i__16161_16193,cb_16206,seq__16158_16200__$1,temp__5457__auto___16199,val,vec__16155,done_QMARK_,cbs,take_cb,temp__5455__auto__,this$__$1))
);

var G__16207 = cljs.core.next(seq__16158_16200__$1);
var G__16208 = null;
var G__16209 = (0);
var G__16210 = (0);
seq__16158_16190 = G__16207;
chunk__16159_16191 = G__16208;
count__16160_16192 = G__16209;
i__16161_16193 = G__16210;
continue;
}
} else {
}
}
break;
}

return cljs.core.async.impl.channels.box(val);
} else {
return null;
}
} else {
var putter = (function (){while(true){
var putter = self__.puts.pop();
if(cljs.core.truth_(putter)){
if(cljs.core.async.impl.protocols.active_QMARK_(putter.handler)){
return putter;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(putter)){
var put_cb = cljs.core.async.impl.protocols.commit(putter.handler);
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

cljs.core.async.impl.dispatch.run(((function (put_cb,putter,this$__$1){
return (function (){
return (put_cb.cljs$core$IFn$_invoke$arity$1 ? put_cb.cljs$core$IFn$_invoke$arity$1(true) : put_cb.call(null,true));
});})(put_cb,putter,this$__$1))
);

return cljs.core.async.impl.channels.box(putter.val);
} else {
if(cljs.core.truth_(self__.closed)){
if(cljs.core.truth_(self__.buf)){
(self__.add_BANG_.cljs$core$IFn$_invoke$arity$1 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$1(self__.buf) : self__.add_BANG_.call(null,self__.buf));
} else {
}

if(cljs.core.truth_((function (){var and__8854__auto__ = handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__8854__auto__)){
return handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__8854__auto__;
}
})())){
var has_val = (function (){var and__8854__auto__ = self__.buf;
if(cljs.core.truth_(and__8854__auto__)){
return (cljs.core.count(self__.buf) > (0));
} else {
return and__8854__auto__;
}
})();
var val = (cljs.core.truth_(has_val)?self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null):null);
return cljs.core.async.impl.channels.box(val);
} else {
return null;
}
} else {
if((self__.dirty_takes > (64))){
self__.dirty_takes = (0);

self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else {
self__.dirty_takes = (self__.dirty_takes + (1));
}

if(cljs.core.truth_(handler.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1(null))){
if((self__.takes.length < (1024))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending takes are allowed on a single channel."].join('')),"\n","(< (.-length takes) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.takes.unbounded_unshift(handler);
} else {
}

return null;
}
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.closed;
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.closed){
return null;
} else {
self__.closed = true;

if(cljs.core.truth_((function (){var and__8854__auto__ = self__.buf;
if(cljs.core.truth_(and__8854__auto__)){
return (self__.puts.length === (0));
} else {
return and__8854__auto__;
}
})())){
(self__.add_BANG_.cljs$core$IFn$_invoke$arity$1 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$1(self__.buf) : self__.add_BANG_.call(null,self__.buf));
} else {
}

while(true){
var taker_16211 = self__.takes.pop();
if((taker_16211 == null)){
} else {
if(taker_16211.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var take_cb_16212 = taker_16211.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
var val_16213 = (cljs.core.truth_((function (){var and__8854__auto__ = self__.buf;
if(cljs.core.truth_(and__8854__auto__)){
return (cljs.core.count(self__.buf) > (0));
} else {
return and__8854__auto__;
}
})())?self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null):null);
cljs.core.async.impl.dispatch.run(((function (take_cb_16212,val_16213,taker_16211,this$__$1){
return (function (){
return (take_cb_16212.cljs$core$IFn$_invoke$arity$1 ? take_cb_16212.cljs$core$IFn$_invoke$arity$1(val_16213) : take_cb_16212.call(null,val_16213));
});})(take_cb_16212,val_16213,taker_16211,this$__$1))
);
} else {
}

continue;
}
break;
}

if(cljs.core.truth_(self__.buf)){
self__.buf.cljs$core$async$impl$protocols$Buffer$close_buf_BANG_$arity$1(null);
} else {
}

return null;
}
});

cljs.core.async.impl.channels.ManyToManyChannel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$takes,cljs.core.with_meta(cljs.core.cst$sym$dirty_DASH_takes,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.cst$sym$puts,cljs.core.with_meta(cljs.core.cst$sym$dirty_DASH_puts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.with_meta(cljs.core.cst$sym$buf,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$not_DASH_native], null)),cljs.core.with_meta(cljs.core.cst$sym$closed,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.cst$sym$add_BANG_], null);
});

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true;

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel";

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__9537__auto__,writer__9538__auto__,opt__9539__auto__){
return cljs.core._write(writer__9538__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
});

cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function cljs$core$async$impl$channels$__GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});

cljs.core.async.impl.channels.ex_handler = (function cljs$core$async$impl$channels$ex_handler(ex){
console.log(ex);

return null;
});
cljs.core.async.impl.channels.handle = (function cljs$core$async$impl$channels$handle(buf,exh,t){
var else$ = (function (){var fexpr__16214 = (function (){var or__8866__auto__ = exh;
if(cljs.core.truth_(or__8866__auto__)){
return or__8866__auto__;
} else {
return cljs.core.async.impl.channels.ex_handler;
}
})();
return (fexpr__16214.cljs$core$IFn$_invoke$arity$1 ? fexpr__16214.cljs$core$IFn$_invoke$arity$1(t) : fexpr__16214.call(null,t));
})();
if((else$ == null)){
return buf;
} else {
return cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$2(buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function cljs$core$async$impl$channels$chan(var_args){
var G__16216 = arguments.length;
switch (G__16216) {
case 1:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf){
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2(buf,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf,xform){
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(buf,xform,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf,xform,exh){
return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer((32)),(0),cljs.core.async.impl.buffers.ring_buffer((32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?(xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(cljs.core.async.impl.protocols.add_BANG_) : xform.call(null,cljs.core.async.impl.protocols.add_BANG_)):cljs.core.async.impl.protocols.add_BANG_);
return ((function (add_BANG_){
return (function() {
var G__16220 = null;
var G__16220__1 = (function (buf__$1){
try{return (add_BANG_.cljs$core$IFn$_invoke$arity$1 ? add_BANG_.cljs$core$IFn$_invoke$arity$1(buf__$1) : add_BANG_.call(null,buf__$1));
}catch (e16217){var t = e16217;
return cljs.core.async.impl.channels.handle(buf__$1,exh,t);
}});
var G__16220__2 = (function (buf__$1,val){
try{return (add_BANG_.cljs$core$IFn$_invoke$arity$2 ? add_BANG_.cljs$core$IFn$_invoke$arity$2(buf__$1,val) : add_BANG_.call(null,buf__$1,val));
}catch (e16218){var t = e16218;
return cljs.core.async.impl.channels.handle(buf__$1,exh,t);
}});
G__16220 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__16220__1.call(this,buf__$1);
case 2:
return G__16220__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__16220.cljs$core$IFn$_invoke$arity$1 = G__16220__1;
G__16220.cljs$core$IFn$_invoke$arity$2 = G__16220__2;
return G__16220;
})()
;})(add_BANG_))
})()));
});

cljs.core.async.impl.channels.chan.cljs$lang$maxFixedArity = 3;

