// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('majic.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('accountant.core');
goog.require('historian.core');
goog.require('domina.core');
goog.require('majic.util');
goog.require('cljs_time.core');
goog.require('cljs.core.async');
goog.require('cljs.tools.reader.edn');
goog.require('goog.string');
goog.require('goog.string.format');
if(typeof majic.core.data !== 'undefined'){
} else {
majic.core.data = (function (){
historian.core.replace_library_BANG_(reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY));

historian.core.replace_prophecy_BANG_(reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY));

return reagent.core.atom.cljs$core$IFn$_invoke$arity$1(majic.util.new_game_state);
})()
;
}
historian.core.record_BANG_.cljs$core$IFn$_invoke$arity$2(majic.core.data,cljs.core.cst$kw$data);
majic.core.reset_countdown = (function majic$core$reset_countdown(data,m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,cljs.core.cst$kw$countdown_DASH_end,cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(cljs_time.core.now(),cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$1(m)));
});
majic.core.scoring_item = (function majic$core$scoring_item(name,points){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(points)].join('')], null);
});
majic.core.scoring = (function majic$core$scoring(participants){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol$scoring,(function (){var iter__9748__auto__ = (function majic$core$scoring_$_iter__20402(s__20403){
return (new cljs.core.LazySeq(null,(function (){
var s__20403__$1 = s__20403;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__20403__$1);
if(temp__5457__auto__){
var s__20403__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20403__$2)){
var c__9746__auto__ = cljs.core.chunk_first(s__20403__$2);
var size__9747__auto__ = cljs.core.count(c__9746__auto__);
var b__20405 = cljs.core.chunk_buffer(size__9747__auto__);
if((function (){var i__20404 = (0);
while(true){
if((i__20404 < size__9747__auto__)){
var participant = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9746__auto__,i__20404);
cljs.core.chunk_append(b__20405,majic.core.scoring_item(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(participant),cljs.core.cst$kw$points.cljs$core$IFn$_invoke$arity$1(participant)));

var G__20406 = (i__20404 + (1));
i__20404 = G__20406;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20405),majic$core$scoring_$_iter__20402(cljs.core.chunk_rest(s__20403__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20405),null);
}
} else {
var participant = cljs.core.first(s__20403__$2);
return cljs.core.cons(majic.core.scoring_item(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(participant),cljs.core.cst$kw$points.cljs$core$IFn$_invoke$arity$1(participant)),majic$core$scoring_$_iter__20402(cljs.core.rest(s__20403__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9748__auto__(cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$points,participants)));
})()], null);
});
majic.core.add_participant_view = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$field,cljs.core.cst$kw$text,cljs.core.cst$kw$id,cljs.core.cst$kw$new_DASH_name_DASH_input], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_default,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
var name_input = domina.core.by_id(cljs.core.cst$kw$new_DASH_name_DASH_input);
var name = domina.core.value(name_input);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(majic.core.data,majic.util.add_participant,name);

name_input.value = "";

return name_input.focus();
})], null),"Add"], null)], null);
majic.core.participants_manager = (function majic$core$participants_manager(participants){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section$participantsContainer,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"Participants"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,majic.core.scoring(participants)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,majic.core.add_participant_view], null)], null);
});
majic.core.result_BANG_ = (function majic$core$result_BANG_(data,result,player1,player2){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(data,majic.util.add_result,result,player1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([player2], 0));
});
majic.core.result_buttons = (function majic$core$result_buttons(player1,player2){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$result,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return majic.core.result_BANG_(majic.core.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(0)], null),player1,player2);
})], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(player1)," won"].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$result,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return majic.core.result_BANG_(majic.core.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),player1,player2);
})], null),"draw"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$result,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return majic.core.result_BANG_(majic.core.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null),player1,player2);
})], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(player2)," won"].join('')], null)], null);
});
majic.core.result_view = (function majic$core$result_view(p__20407,player1,player2){
var vec__20408 = p__20407;
var points1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20408,(0),null);
var points2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20408,(1),null);
if((points1 === points2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,"draw"], null);
} else {
if((points1 > points2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(player1)," won"].join('')], null);
} else {
if((points1 < points2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(player2)," won"].join('')], null);
} else {
return null;
}
}
}
});
majic.core.pairings_table = (function majic$core$pairings_table(pairings){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table$pairings,(function (){var iter__9748__auto__ = (function majic$core$pairings_table_$_iter__20411(s__20412){
return (new cljs.core.LazySeq(null,(function (){
var s__20412__$1 = s__20412;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__20412__$1);
if(temp__5457__auto__){
var s__20412__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20412__$2)){
var c__9746__auto__ = cljs.core.chunk_first(s__20412__$2);
var size__9747__auto__ = cljs.core.count(c__9746__auto__);
var b__20414 = cljs.core.chunk_buffer(size__9747__auto__);
if((function (){var i__20413 = (0);
while(true){
if((i__20413 < size__9747__auto__)){
var map__20415 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9746__auto__,i__20413);
var map__20415__$1 = ((((!((map__20415 == null)))?((((map__20415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20415.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20415):map__20415);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20415__$1,cljs.core.cst$kw$player1);
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20415__$1,cljs.core.cst$kw$player2);
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20415__$1,cljs.core.cst$kw$result);
cljs.core.chunk_append(b__20414,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$p1,p1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$p2,p2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,(((result == null))?majic.core.result_buttons(p1,p2):majic.core.result_view(result,p1,p2))], null)], null));

var G__20419 = (i__20413 + (1));
i__20413 = G__20419;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20414),majic$core$pairings_table_$_iter__20411(cljs.core.chunk_rest(s__20412__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20414),null);
}
} else {
var map__20417 = cljs.core.first(s__20412__$2);
var map__20417__$1 = ((((!((map__20417 == null)))?((((map__20417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20417.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20417):map__20417);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20417__$1,cljs.core.cst$kw$player1);
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20417__$1,cljs.core.cst$kw$player2);
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20417__$1,cljs.core.cst$kw$result);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$p1,p1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$p2,p2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,(((result == null))?majic.core.result_buttons(p1,p2):majic.core.result_view(result,p1,p2))], null)], null),majic$core$pairings_table_$_iter__20411(cljs.core.rest(s__20412__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9748__auto__(pairings);
})()], null);
});
majic.core.new_pairings_BANG_ = (function majic$core$new_pairings_BANG_(){
var temp__5455__auto__ = (function (){var G__20421 = domina.core.by_id(cljs.core.cst$kw$round_DASH_limit).value;
return parseInt(G__20421);
})();
if(cljs.core.truth_(temp__5455__auto__)){
var round_limit = temp__5455__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(majic.core.data,((function (round_limit,temp__5455__auto__){
return (function (p1__20420_SHARP_){
var _LT__GT_ = p1__20420_SHARP_;
var _LT__GT___$1 = majic.util.new_round(_LT__GT_);
return majic.core.reset_countdown(_LT__GT___$1,round_limit);
});})(round_limit,temp__5455__auto__))
);
} else {
return null;
}
});
majic.core.pairings_view = (function majic$core$pairings_view(round,pairings){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section$pairingsContainer,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,["Pairings for round ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(round)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return majic.core.new_pairings_BANG_();
})], null),"New pairings"], null),majic.core.pairings_table(pairings)], null);
});
/**
 * Displays an input dialog with the current game state and the option to load
 *   an older game state.
 */
majic.core.save_load_BANG_ = (function majic$core$save_load_BANG_(){
var temp__5455__auto__ = window.prompt("Copy the following text to save the current tournament state. Insert a copied state and click on OK to continue a saved tournament.",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(majic.core.data)], 0)));
if(cljs.core.truth_(temp__5455__auto__)){
var saved_state = temp__5455__auto__;
return cljs.core.reset_BANG_(majic.core.data,cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$1(saved_state));
} else {
return null;
}
});
majic.core.state_management_buttons = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$stateManagement,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,historian.core.undo_BANG_], null),"undo"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,historian.core.redo_BANG_], null),"redo"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,majic.core.save_load_BANG_], null),"save/restore"], null)], null);
majic.core.random_participants = (function majic$core$random_participants(data){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,cljs.core.shuffle(cljs.core.cst$kw$participants.cljs$core$IFn$_invoke$arity$1(data))));
});
majic.core.tools_buttons = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$tools,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,cljs.core.cst$kw$number,cljs.core.cst$kw$id,cljs.core.cst$kw$round_DASH_limit,cljs.core.cst$kw$defaultValue,(55),cljs.core.cst$kw$title,"Round Limit",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, ["width","40px"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
var G__20422 = majic.core.random_participants(cljs.core.deref(majic.core.data));
return alert(G__20422);
})], null),"Random Participants"], null)], null);
majic.core.countdown_view = (function majic$core$countdown_view(countdown_end){
if(cljs.core.truth_((function (){var and__8854__auto__ = !((countdown_end == null));
if(and__8854__auto__){
return cljs_time.core.before_QMARK_(cljs_time.core.now(),countdown_end);
} else {
return and__8854__auto__;
}
})())){
var seconds_left = cljs_time.core.in_seconds(cljs_time.core.interval(cljs_time.core.now(),countdown_end));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_countdown,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["countdown",(((seconds_left <= (0)))?"zero":null),(((seconds_left < ((60) * (5))))?"low":null)], null)], null),cljs.core.quot(seconds_left,(60)),":",(function (){var G__20423 = "%02d";
var G__20424 = cljs.core.mod(seconds_left,(60));
return goog.string.format(G__20423,G__20424);
})()], null);
} else {
return null;
}
});
majic.core.countdown_redrawer_BANG_ = (function majic$core$countdown_redrawer_BANG_(){
var c__17906__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17906__auto__){
return (function (){
var f__17907__auto__ = (function (){var switch__17804__auto__ = ((function (c__17906__auto__){
return (function (state_20434){
var state_val_20435 = (state_20434[(1)]);
if((state_val_20435 === (1))){
var state_20434__$1 = state_20434;
var statearr_20436_20443 = state_20434__$1;
(statearr_20436_20443[(2)] = null);

(statearr_20436_20443[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20435 === (2))){
var inst_20426 = cljs.core.async.timeout((1000));
var state_20434__$1 = state_20434;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20434__$1,(4),inst_20426);
} else {
if((state_val_20435 === (3))){
var inst_20432 = (state_20434[(2)]);
var state_20434__$1 = state_20434;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20434__$1,inst_20432);
} else {
if((state_val_20435 === (4))){
var inst_20428 = (state_20434[(2)]);
var inst_20429 = reagent.core.force_update_all();
var state_20434__$1 = (function (){var statearr_20437 = state_20434;
(statearr_20437[(7)] = inst_20429);

(statearr_20437[(8)] = inst_20428);

return statearr_20437;
})();
var statearr_20438_20444 = state_20434__$1;
(statearr_20438_20444[(2)] = null);

(statearr_20438_20444[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
});})(c__17906__auto__))
;
return ((function (switch__17804__auto__,c__17906__auto__){
return (function() {
var majic$core$countdown_redrawer_BANG__$_state_machine__17805__auto__ = null;
var majic$core$countdown_redrawer_BANG__$_state_machine__17805__auto____0 = (function (){
var statearr_20439 = [null,null,null,null,null,null,null,null,null];
(statearr_20439[(0)] = majic$core$countdown_redrawer_BANG__$_state_machine__17805__auto__);

(statearr_20439[(1)] = (1));

return statearr_20439;
});
var majic$core$countdown_redrawer_BANG__$_state_machine__17805__auto____1 = (function (state_20434){
while(true){
var ret_value__17806__auto__ = (function (){try{while(true){
var result__17807__auto__ = switch__17804__auto__(state_20434);
if(cljs.core.keyword_identical_QMARK_(result__17807__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17807__auto__;
}
break;
}
}catch (e20440){if((e20440 instanceof Object)){
var ex__17808__auto__ = e20440;
var statearr_20441_20445 = state_20434;
(statearr_20441_20445[(5)] = ex__17808__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20434);

return cljs.core.cst$kw$recur;
} else {
throw e20440;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17806__auto__,cljs.core.cst$kw$recur)){
var G__20446 = state_20434;
state_20434 = G__20446;
continue;
} else {
return ret_value__17806__auto__;
}
break;
}
});
majic$core$countdown_redrawer_BANG__$_state_machine__17805__auto__ = function(state_20434){
switch(arguments.length){
case 0:
return majic$core$countdown_redrawer_BANG__$_state_machine__17805__auto____0.call(this);
case 1:
return majic$core$countdown_redrawer_BANG__$_state_machine__17805__auto____1.call(this,state_20434);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
majic$core$countdown_redrawer_BANG__$_state_machine__17805__auto__.cljs$core$IFn$_invoke$arity$0 = majic$core$countdown_redrawer_BANG__$_state_machine__17805__auto____0;
majic$core$countdown_redrawer_BANG__$_state_machine__17805__auto__.cljs$core$IFn$_invoke$arity$1 = majic$core$countdown_redrawer_BANG__$_state_machine__17805__auto____1;
return majic$core$countdown_redrawer_BANG__$_state_machine__17805__auto__;
})()
;})(switch__17804__auto__,c__17906__auto__))
})();
var state__17908__auto__ = (function (){var statearr_20442 = (f__17907__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17907__auto__.cljs$core$IFn$_invoke$arity$0() : f__17907__auto__.call(null));
(statearr_20442[(6)] = c__17906__auto__);

return statearr_20442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17908__auto__);
});})(c__17906__auto__))
);

return c__17906__auto__;
});
majic.core.contents = (function majic$core$contents(data){
var d = cljs.core.deref(data);
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"Majic"], null),majic.core.countdown_view(cljs.core.cst$kw$countdown_DASH_end.cljs$core$IFn$_invoke$arity$1(d)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Tournament manager powered by ClojureScript and Reagent"], null),majic.core.participants_manager(cljs.core.cst$kw$participants.cljs$core$IFn$_invoke$arity$1(d)),majic.core.pairings_view(cljs.core.cst$kw$current_DASH_round.cljs$core$IFn$_invoke$arity$1(d),cljs.core.cst$kw$current_DASH_pairings.cljs$core$IFn$_invoke$arity$1(d)),majic.core.state_management_buttons,majic.core.tools_buttons,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$copyright,"\u00A9 2018 Markus Brenneis \u2014 This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version."], null)], null);
});
majic.core.mount_root = (function majic$core$mount_root(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [majic.core.contents,majic.core.data], null),domina.core.by_id("app"));
});
majic.core.init_BANG_ = (function majic$core$init_BANG_(){
accountant.core.configure_navigation_BANG_(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$nav_DASH_handler,(function (path){
return secretary.core.dispatch_BANG_(path);
}),cljs.core.cst$kw$path_DASH_exists_QMARK_,(function (path){
return secretary.core.locate_route(path);
})], null));

accountant.core.dispatch_current_BANG_();

majic.core.mount_root();

return majic.core.countdown_redrawer_BANG_();
});
