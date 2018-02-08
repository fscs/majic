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
/**
 * Returns the current time in milliseconds since epoch.
 */
majic.core.now = (function majic$core$now(){
return Date.now();
});
/**
 * Converts minutes to milliseconds
 */
majic.core.minutes__GT_ms = (function majic$core$minutes__GT_ms(minutes){
return (((60) * (1000)) * minutes);
});
/**
 * Converts milliseconds to (floored) seconds
 */
majic.core.ms__GT_seconds = (function majic$core$ms__GT_seconds(ms){
return cljs.core.quot(ms,(1000));
});
/**
 * Convert a timespan to a string in MM:SS format
 */
majic.core.timespan__GT_str = (function majic$core$timespan__GT_str(seconds){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.quot(seconds,(60))),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__20129 = "%02d";
var G__20130 = cljs.core.mod(seconds,(60));
return goog.string.format(G__20129,G__20130);
})())].join('');
});
majic.core.reset_countdown = (function majic$core$reset_countdown(data,minutes){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,cljs.core.cst$kw$countdown_DASH_end,(majic.core.now() + majic.core.minutes__GT_ms(minutes)));
});
majic.core.scoring_item = (function majic$core$scoring_item(name,points){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(points)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,name], null));
});
majic.core.scoring = (function majic$core$scoring(participants){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol$scoring,(function (){var iter__9748__auto__ = (function majic$core$scoring_$_iter__20131(s__20132){
return (new cljs.core.LazySeq(null,(function (){
var s__20132__$1 = s__20132;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__20132__$1);
if(temp__5457__auto__){
var s__20132__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20132__$2)){
var c__9746__auto__ = cljs.core.chunk_first(s__20132__$2);
var size__9747__auto__ = cljs.core.count(c__9746__auto__);
var b__20134 = cljs.core.chunk_buffer(size__9747__auto__);
if((function (){var i__20133 = (0);
while(true){
if((i__20133 < size__9747__auto__)){
var participant = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9746__auto__,i__20133);
cljs.core.chunk_append(b__20134,majic.core.scoring_item(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(participant),cljs.core.cst$kw$points.cljs$core$IFn$_invoke$arity$1(participant)));

var G__20135 = (i__20133 + (1));
i__20133 = G__20135;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20134),majic$core$scoring_$_iter__20131(cljs.core.chunk_rest(s__20132__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20134),null);
}
} else {
var participant = cljs.core.first(s__20132__$2);
return cljs.core.cons(majic.core.scoring_item(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(participant),cljs.core.cst$kw$points.cljs$core$IFn$_invoke$arity$1(participant)),majic$core$scoring_$_iter__20131(cljs.core.rest(s__20132__$2)));
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
majic.core.add_participant_view = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$text,cljs.core.cst$kw$id,cljs.core.cst$kw$new_DASH_name_DASH_input], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_default,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
var name_input = domina.core.by_id(cljs.core.cst$kw$new_DASH_name_DASH_input);
var name = domina.core.value(name_input);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(majic.core.data,majic.util.add_participant,name);

name_input.value = "";

return name_input.focus();
})], null),"Add"], null)], null);
majic.core.participants_manager = (function majic$core$participants_manager(participants){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section$participantsContainer,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"Participants"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,majic.core.scoring(participants)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,majic.core.add_participant_view], null)], null);
});
majic.core.result_BANG_ = (function majic$core$result_BANG_(data,result,player1,player2){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(data,majic.util.add_result,result,player1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([player2], 0));
});
majic.core.result_buttons = (function majic$core$result_buttons(player1,player2){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$result,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return majic.core.result_BANG_(majic.core.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(0)], null),player1,player2);
})], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(player1)," won"].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$win1], null)),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$result,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return majic.core.result_BANG_(majic.core.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),player1,player2);
})], null),"draw"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$draw], null)),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$result,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return majic.core.result_BANG_(majic.core.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null),player1,player2);
})], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(player2)," won"].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$win2], null))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,player1], null));
});
majic.core.result_view = (function majic$core$result_view(p__20136,player1,player2){
var vec__20137 = p__20136;
var points1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20137,(0),null);
var points2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20137,(1),null);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table$pairings,(function (){var iter__9748__auto__ = (function majic$core$pairings_table_$_iter__20140(s__20141){
return (new cljs.core.LazySeq(null,(function (){
var s__20141__$1 = s__20141;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__20141__$1);
if(temp__5457__auto__){
var s__20141__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20141__$2)){
var c__9746__auto__ = cljs.core.chunk_first(s__20141__$2);
var size__9747__auto__ = cljs.core.count(c__9746__auto__);
var b__20143 = cljs.core.chunk_buffer(size__9747__auto__);
if((function (){var i__20142 = (0);
while(true){
if((i__20142 < size__9747__auto__)){
var map__20144 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9746__auto__,i__20142);
var map__20144__$1 = ((((!((map__20144 == null)))?((((map__20144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20144.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20144):map__20144);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20144__$1,cljs.core.cst$kw$player1);
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20144__$1,cljs.core.cst$kw$player2);
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20144__$1,cljs.core.cst$kw$result);
cljs.core.chunk_append(b__20143,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$p1,p1], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$player1], null)),cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$p2,p2], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$player2], null)),cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,(((result == null))?majic.core.result_buttons(p1,p2):majic.core.result_view(result,p1,p2))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$result], null))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,p1], null)));

var G__20148 = (i__20142 + (1));
i__20142 = G__20148;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20143),majic$core$pairings_table_$_iter__20140(cljs.core.chunk_rest(s__20141__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20143),null);
}
} else {
var map__20146 = cljs.core.first(s__20141__$2);
var map__20146__$1 = ((((!((map__20146 == null)))?((((map__20146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20146.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20146):map__20146);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20146__$1,cljs.core.cst$kw$player1);
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20146__$1,cljs.core.cst$kw$player2);
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20146__$1,cljs.core.cst$kw$result);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$p1,p1], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$player1], null)),cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$p2,p2], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$player2], null)),cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,(((result == null))?majic.core.result_buttons(p1,p2):majic.core.result_view(result,p1,p2))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$result], null))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,p1], null)),majic$core$pairings_table_$_iter__20140(cljs.core.rest(s__20141__$2)));
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
var temp__5455__auto__ = (function (){var G__20150 = domina.core.by_id(cljs.core.cst$kw$round_DASH_limit).value;
return parseInt(G__20150);
})();
if(cljs.core.truth_(temp__5455__auto__)){
var round_limit = temp__5455__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(majic.core.data,((function (round_limit,temp__5455__auto__){
return (function (p1__20149_SHARP_){
var _LT__GT_ = p1__20149_SHARP_;
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
var G__20151 = majic.core.random_participants(cljs.core.deref(majic.core.data));
return alert(G__20151);
})], null),"Random Participants"], null)], null);
majic.core.countdown_view = (function majic$core$countdown_view(countdown_end){
if((!((countdown_end == null))) && ((majic.core.now() <= countdown_end))){
var seconds_left = majic.core.ms__GT_seconds((countdown_end - majic.core.now()));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_countdown,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["countdown",(((seconds_left <= (0)))?"zero":null),(((seconds_left < ((60) * (5))))?"low":null)], null)], null),majic.core.timespan__GT_str(seconds_left)], null);
} else {
return null;
}
});
majic.core.countdown_redrawer_BANG_ = (function majic$core$countdown_redrawer_BANG_(){
var c__17921__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17921__auto__){
return (function (){
var f__17922__auto__ = (function (){var switch__17819__auto__ = ((function (c__17921__auto__){
return (function (state_20161){
var state_val_20162 = (state_20161[(1)]);
if((state_val_20162 === (1))){
var state_20161__$1 = state_20161;
var statearr_20163_20170 = state_20161__$1;
(statearr_20163_20170[(2)] = null);

(statearr_20163_20170[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20162 === (2))){
var inst_20153 = cljs.core.async.timeout((1000));
var state_20161__$1 = state_20161;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20161__$1,(4),inst_20153);
} else {
if((state_val_20162 === (3))){
var inst_20159 = (state_20161[(2)]);
var state_20161__$1 = state_20161;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20161__$1,inst_20159);
} else {
if((state_val_20162 === (4))){
var inst_20155 = (state_20161[(2)]);
var inst_20156 = reagent.core.force_update_all();
var state_20161__$1 = (function (){var statearr_20164 = state_20161;
(statearr_20164[(7)] = inst_20156);

(statearr_20164[(8)] = inst_20155);

return statearr_20164;
})();
var statearr_20165_20171 = state_20161__$1;
(statearr_20165_20171[(2)] = null);

(statearr_20165_20171[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
});})(c__17921__auto__))
;
return ((function (switch__17819__auto__,c__17921__auto__){
return (function() {
var majic$core$countdown_redrawer_BANG__$_state_machine__17820__auto__ = null;
var majic$core$countdown_redrawer_BANG__$_state_machine__17820__auto____0 = (function (){
var statearr_20166 = [null,null,null,null,null,null,null,null,null];
(statearr_20166[(0)] = majic$core$countdown_redrawer_BANG__$_state_machine__17820__auto__);

(statearr_20166[(1)] = (1));

return statearr_20166;
});
var majic$core$countdown_redrawer_BANG__$_state_machine__17820__auto____1 = (function (state_20161){
while(true){
var ret_value__17821__auto__ = (function (){try{while(true){
var result__17822__auto__ = switch__17819__auto__(state_20161);
if(cljs.core.keyword_identical_QMARK_(result__17822__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__17822__auto__;
}
break;
}
}catch (e20167){if((e20167 instanceof Object)){
var ex__17823__auto__ = e20167;
var statearr_20168_20172 = state_20161;
(statearr_20168_20172[(5)] = ex__17823__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20161);

return cljs.core.cst$kw$recur;
} else {
throw e20167;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17821__auto__,cljs.core.cst$kw$recur)){
var G__20173 = state_20161;
state_20161 = G__20173;
continue;
} else {
return ret_value__17821__auto__;
}
break;
}
});
majic$core$countdown_redrawer_BANG__$_state_machine__17820__auto__ = function(state_20161){
switch(arguments.length){
case 0:
return majic$core$countdown_redrawer_BANG__$_state_machine__17820__auto____0.call(this);
case 1:
return majic$core$countdown_redrawer_BANG__$_state_machine__17820__auto____1.call(this,state_20161);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
majic$core$countdown_redrawer_BANG__$_state_machine__17820__auto__.cljs$core$IFn$_invoke$arity$0 = majic$core$countdown_redrawer_BANG__$_state_machine__17820__auto____0;
majic$core$countdown_redrawer_BANG__$_state_machine__17820__auto__.cljs$core$IFn$_invoke$arity$1 = majic$core$countdown_redrawer_BANG__$_state_machine__17820__auto____1;
return majic$core$countdown_redrawer_BANG__$_state_machine__17820__auto__;
})()
;})(switch__17819__auto__,c__17921__auto__))
})();
var state__17923__auto__ = (function (){var statearr_20169 = (f__17922__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17922__auto__.cljs$core$IFn$_invoke$arity$0() : f__17922__auto__.call(null));
(statearr_20169[(6)] = c__17921__auto__);

return statearr_20169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17923__auto__);
});})(c__17921__auto__))
);

return c__17921__auto__;
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
