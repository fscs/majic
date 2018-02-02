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
var G__15632__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__15632 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15633__i = 0, G__15633__a = new Array(arguments.length -  0);
while (G__15633__i < G__15633__a.length) {G__15633__a[G__15633__i] = arguments[G__15633__i + 0]; ++G__15633__i;}
  args = new cljs.core.IndexedSeq(G__15633__a,0,null);
} 
return G__15632__delegate.call(this,args);};
G__15632.cljs$lang$maxFixedArity = 0;
G__15632.cljs$lang$applyTo = (function (arglist__15634){
var args = cljs.core.seq(arglist__15634);
return G__15632__delegate(args);
});
G__15632.cljs$core$IFn$_invoke$arity$variadic = G__15632__delegate;
return G__15632;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__15635__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__15635 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15636__i = 0, G__15636__a = new Array(arguments.length -  0);
while (G__15636__i < G__15636__a.length) {G__15636__a[G__15636__i] = arguments[G__15636__i + 0]; ++G__15636__i;}
  args = new cljs.core.IndexedSeq(G__15636__a,0,null);
} 
return G__15635__delegate.call(this,args);};
G__15635.cljs$lang$maxFixedArity = 0;
G__15635.cljs$lang$applyTo = (function (arglist__15637){
var args = cljs.core.seq(arglist__15637);
return G__15635__delegate(args);
});
G__15635.cljs$core$IFn$_invoke$arity$variadic = G__15635__delegate;
return G__15635;
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
