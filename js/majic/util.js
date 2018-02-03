// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('majic.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
majic.util.new_game_state = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$participants,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$current_DASH_round,(0),cljs.core.cst$kw$current_DASH_pairings,cljs.core.PersistentVector.EMPTY], null);
majic.util.new_participant = (function majic$util$new_participant(name){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,name,cljs.core.cst$kw$points,(0),cljs.core.cst$kw$played_DASH_against,cljs.core.PersistentHashSet.EMPTY], null);
});
majic.util.add_participant = (function majic$util$add_participant(data,name){
if(cljs.core.truth_(cljs.core.not_empty(name))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(data,cljs.core.cst$kw$participants,(function (p1__20318_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__20318_SHARP_,majic.util.new_participant(name));
}));
} else {
return data;
}
});
majic.util.remove_by_name = (function majic$util$remove_by_name(participants,name){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__20319_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(name,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__20319_SHARP_));
}),participants);
});
majic.util.add_bye = (function majic$util$add_bye(participants){
var opponents = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__20320_SHARP_){
return cljs.core.contains_QMARK_(cljs.core.cst$kw$played_DASH_against.cljs$core$IFn$_invoke$arity$1(p1__20320_SHARP_),cljs.core.cst$kw$bye);
}),participants));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(participants,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,cljs.core.cst$kw$bye,cljs.core.cst$kw$played_DASH_against,cljs.core.set(opponents),cljs.core.cst$kw$points,(0)], null));
});
/**
 * Return a 'random' permutation of coll in a deterministic way.
 */
majic.util.deterministic_shuffle = (function majic$util$deterministic_shuffle(coll){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__20321_SHARP_){
return cljs.core.hash(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coll,p1__20321_SHARP_], null));
}),coll);
});
majic.util.pair_even = (function majic$util$pair_even(participants){
var G__20325 = cljs.core.count(participants);
switch (G__20325) {
case (0):
return cljs.core.PersistentVector.EMPTY;

break;
default:
var vec__20326 = cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$points,majic.util.deterministic_shuffle(participants)));
var seq__20327 = cljs.core.seq(vec__20326);
var first__20328 = cljs.core.first(seq__20327);
var seq__20327__$1 = cljs.core.next(seq__20327);
var p = first__20328;
var ps = seq__20327__$1;
var possible_opponents = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__20326,seq__20327,first__20328,seq__20327__$1,p,ps,G__20325){
return (function (p1__20322_SHARP_){
return !(cljs.core.contains_QMARK_(cljs.core.cst$kw$played_DASH_against.cljs$core$IFn$_invoke$arity$1(p),p1__20322_SHARP_));
});})(vec__20326,seq__20327,first__20328,seq__20327__$1,p,ps,G__20325))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,ps));
var rest_pairings = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__20326,seq__20327,first__20328,seq__20327__$1,p,ps,possible_opponents,G__20325){
return (function (p1__20323_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p),p1__20323_SHARP_], null),(function (){var G__20332 = majic.util.remove_by_name(ps,p1__20323_SHARP_);
return (majic.util.pair_even.cljs$core$IFn$_invoke$arity$1 ? majic.util.pair_even.cljs$core$IFn$_invoke$arity$1(G__20332) : majic.util.pair_even.call(null,G__20332));
})()],null));
});})(vec__20326,seq__20327,first__20328,seq__20327__$1,p,ps,possible_opponents,G__20325))
,possible_opponents);
var vec__20329 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__20326,seq__20327,first__20328,seq__20327__$1,p,ps,possible_opponents,rest_pairings,G__20325){
return (function (p1__20324_SHARP_){
return !((cljs.core.second(p1__20324_SHARP_) == null));
});})(vec__20326,seq__20327,first__20328,seq__20327__$1,p,ps,possible_opponents,rest_pairings,G__20325))
,rest_pairings));
var pair = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20329,(0),null);
var pairings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20329,(1),null);
if(!((pairings == null))){
return cljs.core.cons(pair,pairings);
} else {
return null;
}

}
});
/**
 * Sorted by points
 */
majic.util.pair = (function majic$util$pair(participants){
if(cljs.core.odd_QMARK_(cljs.core.count(participants))){
return majic.util.pair_even(majic.util.add_bye(participants));
} else {
return majic.util.pair_even(participants);
}
});
majic.util.generate_pairings = (function majic$util$generate_pairings(participants){
var iter__9748__auto__ = (function majic$util$generate_pairings_$_iter__20334(s__20335){
return (new cljs.core.LazySeq(null,(function (){
var s__20335__$1 = s__20335;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__20335__$1);
if(temp__5457__auto__){
var s__20335__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20335__$2)){
var c__9746__auto__ = cljs.core.chunk_first(s__20335__$2);
var size__9747__auto__ = cljs.core.count(c__9746__auto__);
var b__20337 = cljs.core.chunk_buffer(size__9747__auto__);
if((function (){var i__20336 = (0);
while(true){
if((i__20336 < size__9747__auto__)){
var vec__20338 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9746__auto__,i__20336);
var p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20338,(0),null);
var p2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20338,(1),null);
cljs.core.chunk_append(b__20337,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$player1,p1,cljs.core.cst$kw$player2,p2,cljs.core.cst$kw$result,null], null));

var G__20344 = (i__20336 + (1));
i__20336 = G__20344;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20337),majic$util$generate_pairings_$_iter__20334(cljs.core.chunk_rest(s__20335__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20337),null);
}
} else {
var vec__20341 = cljs.core.first(s__20335__$2);
var p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20341,(0),null);
var p2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20341,(1),null);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$player1,p1,cljs.core.cst$kw$player2,p2,cljs.core.cst$kw$result,null], null),majic$util$generate_pairings_$_iter__20334(cljs.core.rest(s__20335__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9748__auto__(majic.util.pair(participants));
});
majic.util.add_result_to_pairings = (function majic$util$add_result_to_pairings(pairings,result,player1,player2){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20345_SHARP_){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(player1,cljs.core.cst$kw$player1.cljs$core$IFn$_invoke$arity$1(p1__20345_SHARP_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(player2,cljs.core.cst$kw$player2.cljs$core$IFn$_invoke$arity$1(p1__20345_SHARP_)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__20345_SHARP_,cljs.core.cst$kw$result,result);
} else {
return p1__20345_SHARP_;
}
}),pairings);
});
majic.util.add_result = (function majic$util$add_result(data,result,player1,player2){
return cljs.core.update.cljs$core$IFn$_invoke$arity$6(data,cljs.core.cst$kw$current_DASH_pairings,majic.util.add_result_to_pairings,result,player1,player2);
});
majic.util.points_from_pairings = (function majic$util$points_from_pairings(pairings){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20346_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$player1.cljs$core$IFn$_invoke$arity$1(p1__20346_SHARP_),cljs.core.cst$kw$player2.cljs$core$IFn$_invoke$arity$1(p1__20346_SHARP_)],[cljs.core.first(cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(p1__20346_SHARP_)),cljs.core.second(cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(p1__20346_SHARP_))]);
}),pairings));
});
majic.util.apply_results = (function majic$util$apply_results(participants,pairings){
var points = majic.util.points_from_pairings(pairings);
var iter__9748__auto__ = ((function (points){
return (function majic$util$apply_results_$_iter__20348(s__20349){
return (new cljs.core.LazySeq(null,((function (points){
return (function (){
var s__20349__$1 = s__20349;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__20349__$1);
if(temp__5457__auto__){
var s__20349__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20349__$2)){
var c__9746__auto__ = cljs.core.chunk_first(s__20349__$2);
var size__9747__auto__ = cljs.core.count(c__9746__auto__);
var b__20351 = cljs.core.chunk_buffer(size__9747__auto__);
if((function (){var i__20350 = (0);
while(true){
if((i__20350 < size__9747__auto__)){
var participant = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9746__auto__,i__20350);
cljs.core.chunk_append(b__20351,cljs.core.update.cljs$core$IFn$_invoke$arity$3(participant,cljs.core.cst$kw$points,((function (i__20350,participant,c__9746__auto__,size__9747__auto__,b__20351,s__20349__$2,temp__5457__auto__,points){
return (function (p1__20347_SHARP_){
return (p1__20347_SHARP_ + cljs.core.get.cljs$core$IFn$_invoke$arity$3(points,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(participant),(0)));
});})(i__20350,participant,c__9746__auto__,size__9747__auto__,b__20351,s__20349__$2,temp__5457__auto__,points))
));

var G__20352 = (i__20350 + (1));
i__20350 = G__20352;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20351),majic$util$apply_results_$_iter__20348(cljs.core.chunk_rest(s__20349__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20351),null);
}
} else {
var participant = cljs.core.first(s__20349__$2);
return cljs.core.cons(cljs.core.update.cljs$core$IFn$_invoke$arity$3(participant,cljs.core.cst$kw$points,((function (participant,s__20349__$2,temp__5457__auto__,points){
return (function (p1__20347_SHARP_){
return (p1__20347_SHARP_ + cljs.core.get.cljs$core$IFn$_invoke$arity$3(points,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(participant),(0)));
});})(participant,s__20349__$2,temp__5457__auto__,points))
),majic$util$apply_results_$_iter__20348(cljs.core.rest(s__20349__$2)));
}
} else {
return null;
}
break;
}
});})(points))
,null,null));
});})(points))
;
return iter__9748__auto__(participants);
});
majic.util.pairs_from_pairings = (function majic$util$pairs_from_pairings(pairings){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20353_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$player1.cljs$core$IFn$_invoke$arity$1(p1__20353_SHARP_),cljs.core.cst$kw$player2.cljs$core$IFn$_invoke$arity$1(p1__20353_SHARP_)],[cljs.core.cst$kw$player2.cljs$core$IFn$_invoke$arity$1(p1__20353_SHARP_),cljs.core.cst$kw$player1.cljs$core$IFn$_invoke$arity$1(p1__20353_SHARP_)]);
}),pairings));
});
majic.util.remember_opponents = (function majic$util$remember_opponents(participants,pairings){
var pairs = majic.util.pairs_from_pairings(pairings);
var iter__9748__auto__ = ((function (pairs){
return (function majic$util$remember_opponents_$_iter__20355(s__20356){
return (new cljs.core.LazySeq(null,((function (pairs){
return (function (){
var s__20356__$1 = s__20356;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__20356__$1);
if(temp__5457__auto__){
var s__20356__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20356__$2)){
var c__9746__auto__ = cljs.core.chunk_first(s__20356__$2);
var size__9747__auto__ = cljs.core.count(c__9746__auto__);
var b__20358 = cljs.core.chunk_buffer(size__9747__auto__);
if((function (){var i__20357 = (0);
while(true){
if((i__20357 < size__9747__auto__)){
var participant = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9746__auto__,i__20357);
cljs.core.chunk_append(b__20358,cljs.core.update.cljs$core$IFn$_invoke$arity$3(participant,cljs.core.cst$kw$played_DASH_against,((function (i__20357,participant,c__9746__auto__,size__9747__auto__,b__20358,s__20356__$2,temp__5457__auto__,pairs){
return (function (p1__20354_SHARP_){
if(cljs.core.contains_QMARK_(pairs,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(participant))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__20354_SHARP_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(pairs,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(participant)));
} else {
return p1__20354_SHARP_;
}
});})(i__20357,participant,c__9746__auto__,size__9747__auto__,b__20358,s__20356__$2,temp__5457__auto__,pairs))
));

var G__20359 = (i__20357 + (1));
i__20357 = G__20359;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20358),majic$util$remember_opponents_$_iter__20355(cljs.core.chunk_rest(s__20356__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20358),null);
}
} else {
var participant = cljs.core.first(s__20356__$2);
return cljs.core.cons(cljs.core.update.cljs$core$IFn$_invoke$arity$3(participant,cljs.core.cst$kw$played_DASH_against,((function (participant,s__20356__$2,temp__5457__auto__,pairs){
return (function (p1__20354_SHARP_){
if(cljs.core.contains_QMARK_(pairs,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(participant))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__20354_SHARP_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(pairs,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(participant)));
} else {
return p1__20354_SHARP_;
}
});})(participant,s__20356__$2,temp__5457__auto__,pairs))
),majic$util$remember_opponents_$_iter__20355(cljs.core.rest(s__20356__$2)));
}
} else {
return null;
}
break;
}
});})(pairs))
,null,null));
});})(pairs))
;
return iter__9748__auto__(participants);
});
majic.util.win_against_bye = (function majic$util$win_against_bye(pairings){
var iter__9748__auto__ = (function majic$util$win_against_bye_$_iter__20360(s__20361){
return (new cljs.core.LazySeq(null,(function (){
var s__20361__$1 = s__20361;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__20361__$1);
if(temp__5457__auto__){
var s__20361__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20361__$2)){
var c__9746__auto__ = cljs.core.chunk_first(s__20361__$2);
var size__9747__auto__ = cljs.core.count(c__9746__auto__);
var b__20363 = cljs.core.chunk_buffer(size__9747__auto__);
if((function (){var i__20362 = (0);
while(true){
if((i__20362 < size__9747__auto__)){
var pairing = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9746__auto__,i__20362);
cljs.core.chunk_append(b__20363,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$bye,cljs.core.cst$kw$player1.cljs$core$IFn$_invoke$arity$1(pairing)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pairing,cljs.core.cst$kw$result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$bye,cljs.core.cst$kw$player2.cljs$core$IFn$_invoke$arity$1(pairing)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pairing,cljs.core.cst$kw$result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(0)], null)):pairing
)));

var G__20364 = (i__20362 + (1));
i__20362 = G__20364;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20363),majic$util$win_against_bye_$_iter__20360(cljs.core.chunk_rest(s__20361__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20363),null);
}
} else {
var pairing = cljs.core.first(s__20361__$2);
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$bye,cljs.core.cst$kw$player1.cljs$core$IFn$_invoke$arity$1(pairing)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pairing,cljs.core.cst$kw$result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$bye,cljs.core.cst$kw$player2.cljs$core$IFn$_invoke$arity$1(pairing)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pairing,cljs.core.cst$kw$result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(0)], null)):pairing
)),majic$util$win_against_bye_$_iter__20360(cljs.core.rest(s__20361__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9748__auto__(pairings);
});
majic.util.new_round = (function majic$util$new_round(data){
var _LT__GT_ = data;
var _LT__GT___$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(_LT__GT_,cljs.core.cst$kw$participants,majic.util.apply_results,cljs.core.cst$kw$current_DASH_pairings.cljs$core$IFn$_invoke$arity$1(_LT__GT_));
var _LT__GT___$2 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(_LT__GT___$1,cljs.core.cst$kw$participants,majic.util.remember_opponents,cljs.core.cst$kw$current_DASH_pairings.cljs$core$IFn$_invoke$arity$1(_LT__GT___$1));
var _LT__GT___$3 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(_LT__GT___$2,cljs.core.cst$kw$current_DASH_pairings,majic.util.generate_pairings(cljs.core.cst$kw$participants.cljs$core$IFn$_invoke$arity$1(_LT__GT___$2)));
var _LT__GT___$4 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(_LT__GT___$3,cljs.core.cst$kw$current_DASH_pairings,majic.util.win_against_bye);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(_LT__GT___$4,cljs.core.cst$kw$current_DASH_round,cljs.core.inc);
});
