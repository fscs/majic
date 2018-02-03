// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__15647__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__15647 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15648__i = 0, G__15648__a = new Array(arguments.length -  0);
while (G__15648__i < G__15648__a.length) {G__15648__a[G__15648__i] = arguments[G__15648__i + 0]; ++G__15648__i;}
  args = new cljs.core.IndexedSeq(G__15648__a,0,null);
} 
return G__15647__delegate.call(this,args);};
G__15647.cljs$lang$maxFixedArity = 0;
G__15647.cljs$lang$applyTo = (function (arglist__15649){
var args = cljs.core.seq(arglist__15649);
return G__15647__delegate(args);
});
G__15647.cljs$core$IFn$_invoke$arity$variadic = G__15647__delegate;
return G__15647;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__15650__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__15650 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15651__i = 0, G__15651__a = new Array(arguments.length -  0);
while (G__15651__i < G__15651__a.length) {G__15651__a[G__15651__i] = arguments[G__15651__i + 0]; ++G__15651__i;}
  args = new cljs.core.IndexedSeq(G__15651__a,0,null);
} 
return G__15650__delegate.call(this,args);};
G__15650.cljs$lang$maxFixedArity = 0;
G__15650.cljs$lang$applyTo = (function (arglist__15652){
var args = cljs.core.seq(arglist__15652);
return G__15650__delegate(args);
});
G__15650.cljs$core$IFn$_invoke$arity$variadic = G__15650__delegate;
return G__15650;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
