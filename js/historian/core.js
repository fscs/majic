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
var G__20075 = arguments.length;
switch (G__20075) {
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
var map__20077 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(historian.core.overseer),k);
var map__20077__$1 = ((((!((map__20077 == null)))?((((map__20077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20077.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20077):map__20077);
var atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20077__$1,cljs.core.cst$kw$atom);
var passive_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20077__$1,cljs.core.cst$kw$passive_QMARK_);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$value,cljs.core.deref(atom),cljs.core.cst$kw$passive_QMARK_,passive_QMARK_,cljs.core.cst$kw$key,k,cljs.core.cst$kw$timestamp,goog.now()], null);
});
historian.core.take_snapshots = (function historian$core$take_snapshots(){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(historian.core.snapshot,cljs.core.keys(cljs.core.deref(historian.core.overseer)));
});
/**
 * Check if any non-passive snapshot is different.
 */
historian.core.different_from_QMARK_ = (function historian$core$different_from_QMARK_(new$,old){
var clean_maps = (function (p1__20079_SHARP_){
if(cljs.core.truth_(cljs.core.cst$kw$passive_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__20079_SHARP_))){
return null;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20079_SHARP_,cljs.core.cst$kw$timestamp);
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
var _STAR_record_active_STAR_20080 = historian.core._STAR_record_active_STAR_;
historian.core._STAR_record_active_STAR_ = false;

try{var seq__20081 = cljs.core.seq(snaps);
var chunk__20082 = null;
var count__20083 = (0);
var i__20084 = (0);
while(true){
if((i__20084 < count__20083)){
var s = chunk__20082.cljs$core$IIndexed$_nth$arity$2(null,i__20084);
cljs.core.reset_BANG_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(historian.core.overseer),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(s),cljs.core.cst$kw$atom], null)),cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(s));

var G__20085 = seq__20081;
var G__20086 = chunk__20082;
var G__20087 = count__20083;
var G__20088 = (i__20084 + (1));
seq__20081 = G__20085;
chunk__20082 = G__20086;
count__20083 = G__20087;
i__20084 = G__20088;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__20081);
if(temp__5457__auto__){
var seq__20081__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20081__$1)){
var c__9797__auto__ = cljs.core.chunk_first(seq__20081__$1);
var G__20089 = cljs.core.chunk_rest(seq__20081__$1);
var G__20090 = c__9797__auto__;
var G__20091 = cljs.core.count(c__9797__auto__);
var G__20092 = (0);
seq__20081 = G__20089;
chunk__20082 = G__20090;
count__20083 = G__20091;
i__20084 = G__20092;
continue;
} else {
var s = cljs.core.first(seq__20081__$1);
cljs.core.reset_BANG_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(historian.core.overseer),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(s),cljs.core.cst$kw$atom], null)),cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(s));

var G__20093 = cljs.core.next(seq__20081__$1);
var G__20094 = null;
var G__20095 = (0);
var G__20096 = (0);
seq__20081 = G__20093;
chunk__20082 = G__20094;
count__20083 = G__20095;
i__20084 = G__20096;
continue;
}
} else {
return null;
}
}
break;
}
}finally {historian.core._STAR_record_active_STAR_ = _STAR_record_active_STAR_20080;
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
var G__20098 = arguments.length;
switch (G__20098) {
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
var G__20101 = arguments.length;
switch (G__20101) {
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
var seq__20103 = cljs.core.seq(ks);
var chunk__20104 = null;
var count__20105 = (0);
var i__20106 = (0);
while(true){
if((i__20106 < count__20105)){
var k = chunk__20104.cljs$core$IIndexed$_nth$arity$2(null,i__20106);
historian.core.stop_record_BANG_(k);

var G__20107 = seq__20103;
var G__20108 = chunk__20104;
var G__20109 = count__20105;
var G__20110 = (i__20106 + (1));
seq__20103 = G__20107;
chunk__20104 = G__20108;
count__20105 = G__20109;
i__20106 = G__20110;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__20103);
if(temp__5457__auto__){
var seq__20103__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20103__$1)){
var c__9797__auto__ = cljs.core.chunk_first(seq__20103__$1);
var G__20111 = cljs.core.chunk_rest(seq__20103__$1);
var G__20112 = c__9797__auto__;
var G__20113 = cljs.core.count(c__9797__auto__);
var G__20114 = (0);
seq__20103 = G__20111;
chunk__20104 = G__20112;
count__20105 = G__20113;
i__20106 = G__20114;
continue;
} else {
var k = cljs.core.first(seq__20103__$1);
historian.core.stop_record_BANG_(k);

var G__20115 = cljs.core.next(seq__20103__$1);
var G__20116 = null;
var G__20117 = (0);
var G__20118 = (0);
seq__20103 = G__20115;
chunk__20104 = G__20116;
count__20105 = G__20117;
i__20106 = G__20118;
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
var len__10145__auto___20124 = arguments.length;
var i__10146__auto___20125 = (0);
while(true){
if((i__10146__auto___20125 < len__10145__auto___20124)){
args__10152__auto__.push((arguments[i__10146__auto___20125]));

var G__20126 = (i__10146__auto___20125 + (1));
i__10146__auto___20125 = G__20126;
continue;
} else {
}
break;
}

var argseq__10153__auto__ = ((((2) < args__10152__auto__.length))?(new cljs.core.IndexedSeq(args__10152__auto__.slice((2)),(0),null)):null);
return historian.core.with_single_before_and_after.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10153__auto__);
});

historian.core.with_single_before_and_after.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,content){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__9820__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$before_DASH_snaps__20119__auto__),(function (){var x__9820__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$historian$core_SLASH_take_DASH_snapshots))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9820__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9820__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9820__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$historian$core_SLASH_off_DASH_the_DASH_record),content)));
return cljs.core._conj(cljs.core.List.EMPTY,x__9820__auto__);
})(),(function (){var x__9820__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__9820__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$after_DASH_snaps__20120__auto__),(function (){var x__9820__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$historian$core_SLASH_take_DASH_snapshots))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9820__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9820__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9820__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when),(function (){var x__9820__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$historian$core_SLASH_different_DASH_from_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$after_DASH_snaps__20120__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$before_DASH_snaps__20119__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9820__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9820__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$historian$core_SLASH_overwrite_DASH_record_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$before_DASH_snaps__20119__auto__))));
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

historian.core.with_single_before_and_after.cljs$lang$applyTo = (function (seq20121){
var G__20122 = cljs.core.first(seq20121);
var seq20121__$1 = cljs.core.next(seq20121);
var G__20123 = cljs.core.first(seq20121__$1);
var seq20121__$2 = cljs.core.next(seq20121__$1);
return historian.core.with_single_before_and_after.cljs$core$IFn$_invoke$arity$variadic(G__20122,G__20123,seq20121__$2);
});

return null;
})()
;
historian.core.with_single_before_and_after.cljs$lang$macro = true;

return ret__10191__auto__;
})());
