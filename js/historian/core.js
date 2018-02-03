// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('historian.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
/**
 * The great library... store your stuff here.
 */
historian.core.alexandria = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY));
historian.core.get_library_atom = (function historian$core$get_library_atom(){
return cljs.core.deref(historian.core.alexandria);
});
/**
 * What will happen in the future...
 */
historian.core.nostradamus = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY));
historian.core.get_prophecy_atom = (function historian$core$get_prophecy_atom(){
return cljs.core.deref(historian.core.nostradamus);
});
/**
 * Who should we record?
 */
historian.core.overseer = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
historian.core.register_atom_BANG_ = (function historian$core$register_atom_BANG_(var_args){
var G__20368 = arguments.length;
switch (G__20368) {
case 2:
return historian.core.register_atom_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return historian.core.register_atom_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

historian.core.register_atom_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (atom,k){
return historian.core.register_atom_BANG_.cljs$core$IFn$_invoke$arity$3(atom,k,null);
});

historian.core.register_atom_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom,k,passive_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(historian.core.overseer,cljs.core.assoc,k,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$atom,atom,cljs.core.cst$kw$passive_QMARK_,passive_QMARK_], null));
});

historian.core.register_atom_BANG_.cljs$lang$maxFixedArity = 3;

historian.core.de_register_atom_BANG_ = (function historian$core$de_register_atom_BANG_(k){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(historian.core.overseer,cljs.core.dissoc,k);
});
historian.core.snapshot = (function historian$core$snapshot(k){
var map__20370 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(historian.core.overseer),k);
var map__20370__$1 = ((((!((map__20370 == null)))?((((map__20370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20370.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20370):map__20370);
var atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20370__$1,cljs.core.cst$kw$atom);
var passive_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20370__$1,cljs.core.cst$kw$passive_QMARK_);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$value,cljs.core.deref(atom),cljs.core.cst$kw$passive_QMARK_,passive_QMARK_,cljs.core.cst$kw$key,k,cljs.core.cst$kw$timestamp,goog.now()], null);
});
historian.core.take_snapshots = (function historian$core$take_snapshots(){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(historian.core.snapshot,cljs.core.keys(cljs.core.deref(historian.core.overseer)));
});
/**
 * Check if any non-passive snapshot is different.
 */
historian.core.different_from_QMARK_ = (function historian$core$different_from_QMARK_(new$,old){
var clean_maps = (function (p1__20372_SHARP_){
if(cljs.core.truth_(cljs.core.cst$kw$passive_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__20372_SHARP_))){
return null;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20372_SHARP_,cljs.core.cst$kw$timestamp);
}
});
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clean_maps,old),cljs.core.map.cljs$core$IFn$_invoke$arity$2(clean_maps,new$));
});
historian.core.different_from_last_QMARK_ = (function historian$core$different_from_last_QMARK_(new$){
return historian.core.different_from_QMARK_(new$,cljs.core.peek(cljs.core.deref(historian.core.get_library_atom())));
});
historian.core.save_snapshots_BANG_ = (function historian$core$save_snapshots_BANG_(snaps){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(historian.core.get_library_atom(),cljs.core.conj,snaps);
});
historian.core.save_if_different_BANG_ = (function historian$core$save_if_different_BANG_(snaps){
if(cljs.core.truth_(historian.core.different_from_last_QMARK_(snaps))){
historian.core.save_snapshots_BANG_(snaps);

return cljs.core.reset_BANG_(historian.core.get_prophecy_atom(),cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
});
historian.core.save_prophecies_BANG_ = (function historian$core$save_prophecies_BANG_(snaps){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(historian.core.get_prophecy_atom(),cljs.core.conj,snaps);
});
historian.core._STAR_record_active_STAR_ = true;
/**
 * Restore all the atoms being watched to a previous/different state.
 */
historian.core.restore_BANG_ = (function historian$core$restore_BANG_(snaps){
var _STAR_record_active_STAR_20373 = historian.core._STAR_record_active_STAR_;
historian.core._STAR_record_active_STAR_ = false;

try{var seq__20374 = cljs.core.seq(snaps);
var chunk__20375 = null;
var count__20376 = (0);
var i__20377 = (0);
while(true){
if((i__20377 < count__20376)){
var s = chunk__20375.cljs$core$IIndexed$_nth$arity$2(null,i__20377);
cljs.core.reset_BANG_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(historian.core.overseer),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(s),cljs.core.cst$kw$atom], null)),cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(s));

var G__20378 = seq__20374;
var G__20379 = chunk__20375;
var G__20380 = count__20376;
var G__20381 = (i__20377 + (1));
seq__20374 = G__20378;
chunk__20375 = G__20379;
count__20376 = G__20380;
i__20377 = G__20381;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__20374);
if(temp__5457__auto__){
var seq__20374__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20374__$1)){
var c__9797__auto__ = cljs.core.chunk_first(seq__20374__$1);
var G__20382 = cljs.core.chunk_rest(seq__20374__$1);
var G__20383 = c__9797__auto__;
var G__20384 = cljs.core.count(c__9797__auto__);
var G__20385 = (0);
seq__20374 = G__20382;
chunk__20375 = G__20383;
count__20376 = G__20384;
i__20377 = G__20385;
continue;
} else {
var s = cljs.core.first(seq__20374__$1);
cljs.core.reset_BANG_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(historian.core.overseer),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(s),cljs.core.cst$kw$atom], null)),cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(s));

var G__20386 = cljs.core.next(seq__20374__$1);
var G__20387 = null;
var G__20388 = (0);
var G__20389 = (0);
seq__20374 = G__20386;
chunk__20375 = G__20387;
count__20376 = G__20388;
i__20377 = G__20389;
continue;
}
} else {
return null;
}
}
break;
}
}finally {historian.core._STAR_record_active_STAR_ = _STAR_record_active_STAR_20373;
}});
historian.core.watch_BANG_ = (function historian$core$watch_BANG_(atm){
return cljs.core.add_watch(atm,cljs.core.cst$kw$historian$core_SLASH_historian_DASH_watch,(function (k,_,old_value,new_value){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_value,new_value)){
if(historian.core._STAR_record_active_STAR_){
return historian.core.save_if_different_BANG_(historian.core.take_snapshots());
} else {
return null;
}
} else {
return null;
}
}));
});
historian.core.remove_watch_BANG_ = (function historian$core$remove_watch_BANG_(a){
return cljs.core.remove_watch(a,cljs.core.cst$kw$historian$core_SLASH_historian_DASH_watch);
});
historian.core.can_undo_QMARK__STAR_ = (function historian$core$can_undo_QMARK__STAR_(records){
if(cljs.core.next(records)){
return true;
} else {
return null;
}
});
historian.core.can_redo_QMARK__STAR_ = (function historian$core$can_redo_QMARK__STAR_(records){
if(cljs.core.truth_(cljs.core.first(records))){
return true;
} else {
return null;
}
});
/**
 * Trigger a record to history. The current state of at least one atom
 *   must be different from the previous one for the record to be
 *   included into history.
 */
historian.core.trigger_record_BANG_ = (function historian$core$trigger_record_BANG_(){
if(historian.core._STAR_record_active_STAR_){
return historian.core.save_if_different_BANG_(historian.core.take_snapshots());
} else {
return null;
}
});
/**
 * Overwrite the last historic entry with a new one.
 */
historian.core.overwrite_record_BANG_ = (function historian$core$overwrite_record_BANG_(var_args){
var G__20391 = arguments.length;
switch (G__20391) {
case 0:
return historian.core.overwrite_record_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return historian.core.overwrite_record_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

historian.core.overwrite_record_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return historian.core.overwrite_record_BANG_.cljs$core$IFn$_invoke$arity$1(historian.core.take_snapshots());
});

historian.core.overwrite_record_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (snaps){
if(historian.core._STAR_record_active_STAR_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(historian.core.get_library_atom(),cljs.core.pop);

return historian.core.save_snapshots_BANG_(snaps);
} else {
return null;
}
});

historian.core.overwrite_record_BANG_.cljs$lang$maxFixedArity = 1;

/**
 * The library atom (where all records are kept to enable 'undo') will
 *   be replaced by the new-atom. Useful if you've already done some
 *   modifications to the new-atom (like added some watchers). Depending
 *   on where you use this function, you might want to fire a
 *   `trigger-record!' just after.
 *   
 *   Usually, one would also want to use `replace-prophecy!' in order to
 *   replace the 'redo' atom.
 */
historian.core.replace_library_BANG_ = (function historian$core$replace_library_BANG_(new_atom){
return cljs.core.reset_BANG_(historian.core.alexandria,new_atom);
});
/**
 * The prophecy atom (where all records are kept to enable 'redo')
 *   will be replaced by the new-atom. Useful if you've already done some
 *   modifications to the new-atom (like added some watchers).
 * 
 *   Usually used with `replace-library'.
 */
historian.core.replace_prophecy_BANG_ = (function historian$core$replace_prophecy_BANG_(new_atom){
return cljs.core.reset_BANG_(historian.core.nostradamus,new_atom);
});
/**
 * Add the atom to the overseer watch. When any of the atom under its
 *   watch is modified, it triggers a save of every atom to history (if
 *   any of the atom is different form the last historic state). Return
 *   the atom.
 *   
 *   If `passive?' is true, the atom will NOT trigger any new save and
 *   will only be saved when another atom under watch is modified.
 */
historian.core.record_BANG_ = (function historian$core$record_BANG_(var_args){
var G__20394 = arguments.length;
switch (G__20394) {
case 2:
return historian.core.record_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return historian.core.record_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

historian.core.record_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (atm,k){
return historian.core.record_BANG_.cljs$core$IFn$_invoke$arity$3(atm,k,null);
});

historian.core.record_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atm,k,passive_QMARK_){
historian.core.register_atom_BANG_.cljs$core$IFn$_invoke$arity$3(atm,k,passive_QMARK_);

if(cljs.core.truth_(passive_QMARK_)){
} else {
historian.core.watch_BANG_(atm);
}

historian.core.trigger_record_BANG_();

return atm;
});

historian.core.record_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Remove the atom associated to this key from the overseer watch.
 *   This atom will no longer be watched, nor its state saved to
 *   history.
 */
historian.core.stop_record_BANG_ = (function historian$core$stop_record_BANG_(k){
historian.core.remove_watch_BANG_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(historian.core.overseer),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.cst$kw$atom], null)));

return historian.core.de_register_atom_BANG_(k);
});
/**
 * Remove all the atoms from the overseer watch. The atoms will no
 *   longer be watched, nor any of their state saved to history.
 */
historian.core.stop_all_records_BANG_ = (function historian$core$stop_all_records_BANG_(){
var ks = cljs.core.keys(cljs.core.deref(historian.core.overseer));
var seq__20396 = cljs.core.seq(ks);
var chunk__20397 = null;
var count__20398 = (0);
var i__20399 = (0);
while(true){
if((i__20399 < count__20398)){
var k = chunk__20397.cljs$core$IIndexed$_nth$arity$2(null,i__20399);
historian.core.stop_record_BANG_(k);

var G__20400 = seq__20396;
var G__20401 = chunk__20397;
var G__20402 = count__20398;
var G__20403 = (i__20399 + (1));
seq__20396 = G__20400;
chunk__20397 = G__20401;
count__20398 = G__20402;
i__20399 = G__20403;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__20396);
if(temp__5457__auto__){
var seq__20396__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20396__$1)){
var c__9797__auto__ = cljs.core.chunk_first(seq__20396__$1);
var G__20404 = cljs.core.chunk_rest(seq__20396__$1);
var G__20405 = c__9797__auto__;
var G__20406 = cljs.core.count(c__9797__auto__);
var G__20407 = (0);
seq__20396 = G__20404;
chunk__20397 = G__20405;
count__20398 = G__20406;
i__20399 = G__20407;
continue;
} else {
var k = cljs.core.first(seq__20396__$1);
historian.core.stop_record_BANG_(k);

var G__20408 = cljs.core.next(seq__20396__$1);
var G__20409 = null;
var G__20410 = (0);
var G__20411 = (0);
seq__20396 = G__20408;
chunk__20397 = G__20409;
count__20398 = G__20410;
i__20399 = G__20411;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Do we have enough history to undo?
 */
historian.core.can_undo_QMARK_ = (function historian$core$can_undo_QMARK_(){
return historian.core.can_undo_QMARK__STAR_(cljs.core.deref(historian.core.get_library_atom()));
});
/**
 * Can we redo?
 */
historian.core.can_redo_QMARK_ = (function historian$core$can_redo_QMARK_(){
return historian.core.can_redo_QMARK__STAR_(cljs.core.deref(historian.core.get_prophecy_atom()));
});
historian.core.undo_BANG_ = (function historian$core$undo_BANG_(){
var alex = cljs.core.deref(historian.core.get_library_atom());
if(cljs.core.truth_(historian.core.can_undo_QMARK__STAR_(alex))){
historian.core.save_prophecies_BANG_(cljs.core.peek(alex));

return historian.core.restore_BANG_(cljs.core.peek(cljs.core.reset_BANG_(historian.core.get_library_atom(),cljs.core.pop(alex))));
} else {
return null;
}
});
historian.core.redo_BANG_ = (function historian$core$redo_BANG_(){
var nos = cljs.core.deref(historian.core.get_prophecy_atom());
if(cljs.core.truth_(historian.core.can_redo_QMARK__STAR_(nos))){
historian.core.save_snapshots_BANG_(cljs.core.peek(nos));

cljs.core.reset_BANG_(historian.core.get_prophecy_atom(),cljs.core.pop(nos));

return historian.core.restore_BANG_(cljs.core.peek(nos));
} else {
return null;
}
});
historian.core.clear_history_BANG_ = (function historian$core$clear_history_BANG_(){
cljs.core.reset_BANG_(historian.core.get_library_atom(),cljs.core.PersistentVector.EMPTY);

return cljs.core.reset_BANG_(historian.core.get_prophecy_atom(),cljs.core.PersistentVector.EMPTY);
});
cljs.core.cst$kw$clj.cljs$core$IFn$_invoke$arity$1((function (){var ret__10191__auto__ = (function (){
/**
 * Deactivate the watches write to history and execute the body. If
 *   any non-passive atom is modified, replace the last history with a
 *   snapshot taken just before executing the body and then take another
 *   snapshot.
 */
historian.core.with_single_before_and_after = (function historian$core$with_single_before_and_after(var_args){
var args__10152__auto__ = [];
var len__10145__auto___20417 = arguments.length;
var i__10146__auto___20418 = (0);
while(true){
if((i__10146__auto___20418 < len__10145__auto___20417)){
args__10152__auto__.push((arguments[i__10146__auto___20418]));

var G__20419 = (i__10146__auto___20418 + (1));
i__10146__auto___20418 = G__20419;
continue;
} else {
}
break;
}

var argseq__10153__auto__ = ((((2) < args__10152__auto__.length))?(new cljs.core.IndexedSeq(args__10152__auto__.slice((2)),(0),null)):null);
return historian.core.with_single_before_and_after.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10153__auto__);
});

historian.core.with_single_before_and_after.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,content){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__9820__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$before_DASH_snaps__20412__auto__),(function (){var x__9820__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$historian$core_SLASH_take_DASH_snapshots))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9820__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9820__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9820__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$historian$core_SLASH_off_DASH_the_DASH_record),content)));
return cljs.core._conj(cljs.core.List.EMPTY,x__9820__auto__);
})(),(function (){var x__9820__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__9820__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$after_DASH_snaps__20413__auto__),(function (){var x__9820__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$historian$core_SLASH_take_DASH_snapshots))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9820__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9820__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9820__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when),(function (){var x__9820__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$historian$core_SLASH_different_DASH_from_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$after_DASH_snaps__20413__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$before_DASH_snaps__20412__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9820__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9820__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$historian$core_SLASH_overwrite_DASH_record_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$before_DASH_snaps__20412__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9820__auto__);
})(),(function (){var x__9820__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$historian$core_SLASH_trigger_DASH_record_BANG_))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9820__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9820__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9820__auto__);
})()], 0))));
});

historian.core.with_single_before_and_after.cljs$lang$maxFixedArity = (2);

historian.core.with_single_before_and_after.cljs$lang$applyTo = (function (seq20414){
var G__20415 = cljs.core.first(seq20414);
var seq20414__$1 = cljs.core.next(seq20414);
var G__20416 = cljs.core.first(seq20414__$1);
var seq20414__$2 = cljs.core.next(seq20414__$1);
return historian.core.with_single_before_and_after.cljs$core$IFn$_invoke$arity$variadic(G__20415,G__20416,seq20414__$2);
});

return null;
})()
;
historian.core.with_single_before_and_after.cljs$lang$macro = true;

return ret__10191__auto__;
})());
