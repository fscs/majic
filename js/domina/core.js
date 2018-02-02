// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('domina.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.dom');
goog.require('goog.dom.xml');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.events');
goog.require('goog.style');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('domina.support');
domina.core.re_html = /<|&#?\w+;/;
domina.core.re_leading_whitespace = /^\s+/;
domina.core.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.core.re_tag_name = /<([\w:]+)/;
domina.core.re_no_inner_html = /<(?:script|style)/i;
domina.core.re_tbody = /<tbody/i;
var opt_wrapper_14626 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_14627 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_14628 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.core.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",cljs.core.cst$kw$default,"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_14628,opt_wrapper_14626,table_section_wrapper_14627,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_14626,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_14627,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_14627,cell_wrapper_14628,table_section_wrapper_14627,table_section_wrapper_14627]);
domina.core.remove_extraneous_tbody_BANG_ = (function domina$core$remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.core.re_tbody,html));
var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__8854__auto__ = div.firstChild;
if(cljs.core.truth_(and__8854__auto__)){
return div.firstChild.childNodes;
} else {
return and__8854__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__14629 = cljs.core.seq(tbody);
var chunk__14630 = null;
var count__14631 = (0);
var i__14632 = (0);
while(true){
if((i__14632 < count__14631)){
var child = chunk__14630.cljs$core$IIndexed$_nth$arity$2(null,i__14632);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__14633 = seq__14629;
var G__14634 = chunk__14630;
var G__14635 = count__14631;
var G__14636 = (i__14632 + (1));
seq__14629 = G__14633;
chunk__14630 = G__14634;
count__14631 = G__14635;
i__14632 = G__14636;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__14629);
if(temp__5457__auto__){
var seq__14629__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14629__$1)){
var c__9797__auto__ = cljs.core.chunk_first(seq__14629__$1);
var G__14637 = cljs.core.chunk_rest(seq__14629__$1);
var G__14638 = c__9797__auto__;
var G__14639 = cljs.core.count(c__9797__auto__);
var G__14640 = (0);
seq__14629 = G__14637;
chunk__14630 = G__14638;
count__14631 = G__14639;
i__14632 = G__14640;
continue;
} else {
var child = cljs.core.first(seq__14629__$1);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__14641 = cljs.core.next(seq__14629__$1);
var G__14642 = null;
var G__14643 = (0);
var G__14644 = (0);
seq__14629 = G__14641;
chunk__14630 = G__14642;
count__14631 = G__14643;
i__14632 = G__14644;
continue;
}
} else {
return null;
}
}
break;
}
});
domina.core.restore_leading_whitespace_BANG_ = (function domina$core$restore_leading_whitespace_BANG_(div,html){
return div.insertBefore(document.createTextNode(cljs.core.first(cljs.core.re_find(domina.core.re_leading_whitespace,html))),div.firstChild);
});
/**
 * takes an string of html and returns a NodeList of dom fragments
 */
domina.core.html_to_dom = (function domina$core$html_to_dom(html){
var html__$1 = clojure.string.replace(html,domina.core.re_xhtml_tag,"<$1></$2>");
var tag_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.re_find(domina.core.re_tag_name,html__$1)))].join('').toLowerCase();
var vec__14645 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.core.wrap_map,tag_name,cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(domina.core.wrap_map));
var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14645,(0),null);
var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14645,(1),null);
var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14645,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap),cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__14648 = wrapper.lastChild;
var G__14649 = (level - (1));
wrapper = G__14648;
level = G__14649;
continue;
} else {
return wrapper;
}
break;
}
})();
if(domina.support.extraneous_tbody_QMARK_){
domina.core.remove_extraneous_tbody_BANG_(div,html__$1,tag_name,start_wrap);
} else {
}

if(cljs.core.truth_((function (){var and__8854__auto__ = !(domina.support.leading_whitespace_QMARK_);
if(and__8854__auto__){
return cljs.core.re_find(domina.core.re_leading_whitespace,html__$1);
} else {
return and__8854__auto__;
}
})())){
domina.core.restore_leading_whitespace_BANG_(div,html__$1);
} else {
}

return div.childNodes;
});
domina.core.string_to_dom = (function domina$core$string_to_dom(s){
if(cljs.core.truth_(cljs.core.re_find(domina.core.re_html,s))){
return domina.core.html_to_dom(s);
} else {
return document.createTextNode(s);
}
});

/**
 * @interface
 */
domina.core.DomContent = function(){};

/**
 * Returns the content as a sequence of nodes.
 */
domina.core.nodes = (function domina$core$nodes(content){
if((!((content == null))) && (!((content.domina$core$DomContent$nodes$arity$1 == null)))){
return content.domina$core$DomContent$nodes$arity$1(content);
} else {
var x__9599__auto__ = (((content == null))?null:content);
var m__9600__auto__ = (domina.core.nodes[goog.typeOf(x__9599__auto__)]);
if(!((m__9600__auto__ == null))){
return (m__9600__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9600__auto__.cljs$core$IFn$_invoke$arity$1(content) : m__9600__auto__.call(null,content));
} else {
var m__9600__auto____$1 = (domina.core.nodes["_"]);
if(!((m__9600__auto____$1 == null))){
return (m__9600__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9600__auto____$1.cljs$core$IFn$_invoke$arity$1(content) : m__9600__auto____$1.call(null,content));
} else {
throw cljs.core.missing_protocol("DomContent.nodes",content);
}
}
}
});

/**
 * Returns the content as a single node (the first node, if the content contains more than one
 */
domina.core.single_node = (function domina$core$single_node(nodeseq){
if((!((nodeseq == null))) && (!((nodeseq.domina$core$DomContent$single_node$arity$1 == null)))){
return nodeseq.domina$core$DomContent$single_node$arity$1(nodeseq);
} else {
var x__9599__auto__ = (((nodeseq == null))?null:nodeseq);
var m__9600__auto__ = (domina.core.single_node[goog.typeOf(x__9599__auto__)]);
if(!((m__9600__auto__ == null))){
return (m__9600__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9600__auto__.cljs$core$IFn$_invoke$arity$1(nodeseq) : m__9600__auto__.call(null,nodeseq));
} else {
var m__9600__auto____$1 = (domina.core.single_node["_"]);
if(!((m__9600__auto____$1 == null))){
return (m__9600__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9600__auto____$1.cljs$core$IFn$_invoke$arity$1(nodeseq) : m__9600__auto____$1.call(null,nodeseq));
} else {
throw cljs.core.missing_protocol("DomContent.single-node",nodeseq);
}
}
}
});

domina.core._STAR_debug_STAR_ = true;
domina.core.log_debug = (function domina$core$log_debug(var_args){
var args__10152__auto__ = [];
var len__10145__auto___14651 = arguments.length;
var i__10146__auto___14652 = (0);
while(true){
if((i__10146__auto___14652 < len__10145__auto___14651)){
args__10152__auto__.push((arguments[i__10146__auto___14652]));

var G__14653 = (i__10146__auto___14652 + (1));
i__10146__auto___14652 = G__14653;
continue;
} else {
}
break;
}

var argseq__10153__auto__ = ((((0) < args__10152__auto__.length))?(new cljs.core.IndexedSeq(args__10152__auto__.slice((0)),(0),null)):null);
return domina.core.log_debug.cljs$core$IFn$_invoke$arity$variadic(argseq__10153__auto__);
});

domina.core.log_debug.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if((domina.core._STAR_debug_STAR_) && (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(window.console,undefined)))){
return console.log(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,mesg));
} else {
return null;
}
});

domina.core.log_debug.cljs$lang$maxFixedArity = (0);

domina.core.log_debug.cljs$lang$applyTo = (function (seq14650){
return domina.core.log_debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14650));
});

domina.core.log = (function domina$core$log(var_args){
var args__10152__auto__ = [];
var len__10145__auto___14655 = arguments.length;
var i__10146__auto___14656 = (0);
while(true){
if((i__10146__auto___14656 < len__10145__auto___14655)){
args__10152__auto__.push((arguments[i__10146__auto___14656]));

var G__14657 = (i__10146__auto___14656 + (1));
i__10146__auto___14656 = G__14657;
continue;
} else {
}
break;
}

var argseq__10153__auto__ = ((((0) < args__10152__auto__.length))?(new cljs.core.IndexedSeq(args__10152__auto__.slice((0)),(0),null)):null);
return domina.core.log.cljs$core$IFn$_invoke$arity$variadic(argseq__10153__auto__);
});

domina.core.log.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if(cljs.core.truth_(window.console)){
return console.log(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,mesg));
} else {
return null;
}
});

domina.core.log.cljs$lang$maxFixedArity = (0);

domina.core.log.cljs$lang$applyTo = (function (seq14654){
return domina.core.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14654));
});

/**
 * Returns content containing a single node by looking up the given ID
 */
domina.core.by_id = (function domina$core$by_id(id){
var G__14658 = cljs.core.name(id);
return goog.dom.getElement(G__14658);
});
/**
 * Returns content containing nodes which have the specified CSS class.
 */
domina.core.by_class = (function domina$core$by_class(class_name){
var G__14659 = (function (){var G__14660 = cljs.core.name(class_name);
return goog.dom.getElementsByClass(G__14660);
})();
return (domina.core.normalize_seq.cljs$core$IFn$_invoke$arity$1 ? domina.core.normalize_seq.cljs$core$IFn$_invoke$arity$1(G__14659) : domina.core.normalize_seq.call(null,G__14659));
});
/**
 * Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
 */
domina.core.children = (function domina$core$children(content){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(goog.dom.getChildren,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([domina.core.nodes(content)], 0)));
});
/**
 * Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
 */
domina.core.common_ancestor = (function domina$core$common_ancestor(var_args){
var args__10152__auto__ = [];
var len__10145__auto___14662 = arguments.length;
var i__10146__auto___14663 = (0);
while(true){
if((i__10146__auto___14663 < len__10145__auto___14662)){
args__10152__auto__.push((arguments[i__10146__auto___14663]));

var G__14664 = (i__10146__auto___14663 + (1));
i__10146__auto___14663 = G__14664;
continue;
} else {
}
break;
}

var argseq__10153__auto__ = ((((0) < args__10152__auto__.length))?(new cljs.core.IndexedSeq(args__10152__auto__.slice((0)),(0),null)):null);
return domina.core.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(argseq__10153__auto__);
});

domina.core.common_ancestor.cljs$core$IFn$_invoke$arity$variadic = (function (contents){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(goog.dom.findCommonAncestor,cljs.core.map.cljs$core$IFn$_invoke$arity$2(domina.core.single_node,contents));
});

domina.core.common_ancestor.cljs$lang$maxFixedArity = (0);

domina.core.common_ancestor.cljs$lang$applyTo = (function (seq14661){
return domina.core.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14661));
});

/**
 * Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
 */
domina.core.ancestor_QMARK_ = (function domina$core$ancestor_QMARK_(ancestor_content,descendant_content){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(domina.core.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ancestor_content,descendant_content], 0)),domina.core.single_node(ancestor_content));
});
/**
 * Returns a deep clone of content.
 */
domina.core.clone = (function domina$core$clone(content){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14665_SHARP_){
return p1__14665_SHARP_.cloneNode(true);
}),domina.core.nodes(content));
});
/**
 * Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.core.append_BANG_ = (function domina$core$append_BANG_(parent_content,child_content){
(domina.core.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.core.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(goog.dom.appendChild,parent_content,child_content) : domina.core.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content));

return parent_content;
});
/**
 * Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.core.insert_BANG_ = (function domina$core$insert_BANG_(parent_content,child_content,idx){
var G__14668_14671 = (function (p1__14666_SHARP_,p2__14667_SHARP_){
return goog.dom.insertChildAt(p1__14666_SHARP_,p2__14667_SHARP_,idx);
});
var G__14669_14672 = parent_content;
var G__14670_14673 = child_content;
(domina.core.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.core.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(G__14668_14671,G__14669_14672,G__14670_14673) : domina.core.apply_with_cloning.call(null,G__14668_14671,G__14669_14672,G__14670_14673));

return parent_content;
});
/**
 * Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.core.prepend_BANG_ = (function domina$core$prepend_BANG_(parent_content,child_content){
domina.core.insert_BANG_(parent_content,child_content,(0));

return parent_content;
});
/**
 * Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.core.insert_before_BANG_ = (function domina$core$insert_before_BANG_(content,new_content){
var G__14676_14679 = (function (p1__14675_SHARP_,p2__14674_SHARP_){
return goog.dom.insertSiblingBefore(p2__14674_SHARP_,p1__14675_SHARP_);
});
var G__14677_14680 = content;
var G__14678_14681 = new_content;
(domina.core.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.core.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(G__14676_14679,G__14677_14680,G__14678_14681) : domina.core.apply_with_cloning.call(null,G__14676_14679,G__14677_14680,G__14678_14681));

return content;
});
/**
 * Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.core.insert_after_BANG_ = (function domina$core$insert_after_BANG_(content,new_content){
var G__14684_14687 = (function (p1__14683_SHARP_,p2__14682_SHARP_){
return goog.dom.insertSiblingAfter(p2__14682_SHARP_,p1__14683_SHARP_);
});
var G__14685_14688 = content;
var G__14686_14689 = new_content;
(domina.core.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.core.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(G__14684_14687,G__14685_14688,G__14686_14689) : domina.core.apply_with_cloning.call(null,G__14684_14687,G__14685_14688,G__14686_14689));

return content;
});
/**
 * Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
 */
domina.core.swap_content_BANG_ = (function domina$core$swap_content_BANG_(old_content,new_content){
var G__14692_14695 = (function (p1__14691_SHARP_,p2__14690_SHARP_){
return goog.dom.replaceNode(p2__14690_SHARP_,p1__14691_SHARP_);
});
var G__14693_14696 = old_content;
var G__14694_14697 = new_content;
(domina.core.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.core.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(G__14692_14695,G__14693_14696,G__14694_14697) : domina.core.apply_with_cloning.call(null,G__14692_14695,G__14693_14696,G__14694_14697));

return old_content;
});
/**
 * Removes all the nodes in a content from the DOM and returns them.
 */
domina.core.detach_BANG_ = (function domina$core$detach_BANG_(content){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeNode,domina.core.nodes(content)));
});
/**
 * Removes all the nodes in a content from the DOM. Returns nil.
 */
domina.core.destroy_BANG_ = (function domina$core$destroy_BANG_(content){
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeNode,domina.core.nodes(content)));
});
/**
 * Removes all the child nodes in a content from the DOM. Returns the original content.
 */
domina.core.destroy_children_BANG_ = (function domina$core$destroy_children_BANG_(content){
cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeChildren,domina.core.nodes(content)));

return content;
});
/**
 * Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
 */
domina.core.style = (function domina$core$style(content,name){
var s = (function (){var G__14698 = domina.core.single_node(content);
var G__14699 = cljs.core.name(name);
return goog.style.getStyle(G__14698,G__14699);
})();
if(clojure.string.blank_QMARK_(s)){
return null;
} else {
return s;
}
});
/**
 * Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
 */
domina.core.attr = (function domina$core$attr(content,name){
return domina.core.single_node(content).getAttribute(cljs.core.name(name));
});
/**
 * Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.core.set_style_BANG_ = (function domina$core$set_style_BANG_(var_args){
var args__10152__auto__ = [];
var len__10145__auto___14713 = arguments.length;
var i__10146__auto___14714 = (0);
while(true){
if((i__10146__auto___14714 < len__10145__auto___14713)){
args__10152__auto__.push((arguments[i__10146__auto___14714]));

var G__14715 = (i__10146__auto___14714 + (1));
i__10146__auto___14714 = G__14715;
continue;
} else {
}
break;
}

var argseq__10153__auto__ = ((((2) < args__10152__auto__.length))?(new cljs.core.IndexedSeq(args__10152__auto__.slice((2)),(0),null)):null);
return domina.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10153__auto__);
});

domina.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__14703_14716 = cljs.core.seq(domina.core.nodes(content));
var chunk__14704_14717 = null;
var count__14705_14718 = (0);
var i__14706_14719 = (0);
while(true){
if((i__14706_14719 < count__14705_14718)){
var n_14720 = chunk__14704_14717.cljs$core$IIndexed$_nth$arity$2(null,i__14706_14719);
var G__14707_14721 = n_14720;
var G__14708_14722 = cljs.core.name(name);
var G__14709_14723 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value);
goog.style.setStyle(G__14707_14721,G__14708_14722,G__14709_14723);

var G__14724 = seq__14703_14716;
var G__14725 = chunk__14704_14717;
var G__14726 = count__14705_14718;
var G__14727 = (i__14706_14719 + (1));
seq__14703_14716 = G__14724;
chunk__14704_14717 = G__14725;
count__14705_14718 = G__14726;
i__14706_14719 = G__14727;
continue;
} else {
var temp__5457__auto___14728 = cljs.core.seq(seq__14703_14716);
if(temp__5457__auto___14728){
var seq__14703_14729__$1 = temp__5457__auto___14728;
if(cljs.core.chunked_seq_QMARK_(seq__14703_14729__$1)){
var c__9797__auto___14730 = cljs.core.chunk_first(seq__14703_14729__$1);
var G__14731 = cljs.core.chunk_rest(seq__14703_14729__$1);
var G__14732 = c__9797__auto___14730;
var G__14733 = cljs.core.count(c__9797__auto___14730);
var G__14734 = (0);
seq__14703_14716 = G__14731;
chunk__14704_14717 = G__14732;
count__14705_14718 = G__14733;
i__14706_14719 = G__14734;
continue;
} else {
var n_14735 = cljs.core.first(seq__14703_14729__$1);
var G__14710_14736 = n_14735;
var G__14711_14737 = cljs.core.name(name);
var G__14712_14738 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value);
goog.style.setStyle(G__14710_14736,G__14711_14737,G__14712_14738);

var G__14739 = cljs.core.next(seq__14703_14729__$1);
var G__14740 = null;
var G__14741 = (0);
var G__14742 = (0);
seq__14703_14716 = G__14739;
chunk__14704_14717 = G__14740;
count__14705_14718 = G__14741;
i__14706_14719 = G__14742;
continue;
}
} else {
}
}
break;
}

return content;
});

domina.core.set_style_BANG_.cljs$lang$maxFixedArity = (2);

domina.core.set_style_BANG_.cljs$lang$applyTo = (function (seq14700){
var G__14701 = cljs.core.first(seq14700);
var seq14700__$1 = cljs.core.next(seq14700);
var G__14702 = cljs.core.first(seq14700__$1);
var seq14700__$2 = cljs.core.next(seq14700__$1);
return domina.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14701,G__14702,seq14700__$2);
});

/**
 * Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.core.set_attr_BANG_ = (function domina$core$set_attr_BANG_(var_args){
var args__10152__auto__ = [];
var len__10145__auto___14750 = arguments.length;
var i__10146__auto___14751 = (0);
while(true){
if((i__10146__auto___14751 < len__10145__auto___14750)){
args__10152__auto__.push((arguments[i__10146__auto___14751]));

var G__14752 = (i__10146__auto___14751 + (1));
i__10146__auto___14751 = G__14752;
continue;
} else {
}
break;
}

var argseq__10153__auto__ = ((((2) < args__10152__auto__.length))?(new cljs.core.IndexedSeq(args__10152__auto__.slice((2)),(0),null)):null);
return domina.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10153__auto__);
});

domina.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__14746_14753 = cljs.core.seq(domina.core.nodes(content));
var chunk__14747_14754 = null;
var count__14748_14755 = (0);
var i__14749_14756 = (0);
while(true){
if((i__14749_14756 < count__14748_14755)){
var n_14757 = chunk__14747_14754.cljs$core$IIndexed$_nth$arity$2(null,i__14749_14756);
n_14757.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));

var G__14758 = seq__14746_14753;
var G__14759 = chunk__14747_14754;
var G__14760 = count__14748_14755;
var G__14761 = (i__14749_14756 + (1));
seq__14746_14753 = G__14758;
chunk__14747_14754 = G__14759;
count__14748_14755 = G__14760;
i__14749_14756 = G__14761;
continue;
} else {
var temp__5457__auto___14762 = cljs.core.seq(seq__14746_14753);
if(temp__5457__auto___14762){
var seq__14746_14763__$1 = temp__5457__auto___14762;
if(cljs.core.chunked_seq_QMARK_(seq__14746_14763__$1)){
var c__9797__auto___14764 = cljs.core.chunk_first(seq__14746_14763__$1);
var G__14765 = cljs.core.chunk_rest(seq__14746_14763__$1);
var G__14766 = c__9797__auto___14764;
var G__14767 = cljs.core.count(c__9797__auto___14764);
var G__14768 = (0);
seq__14746_14753 = G__14765;
chunk__14747_14754 = G__14766;
count__14748_14755 = G__14767;
i__14749_14756 = G__14768;
continue;
} else {
var n_14769 = cljs.core.first(seq__14746_14763__$1);
n_14769.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));

var G__14770 = cljs.core.next(seq__14746_14763__$1);
var G__14771 = null;
var G__14772 = (0);
var G__14773 = (0);
seq__14746_14753 = G__14770;
chunk__14747_14754 = G__14771;
count__14748_14755 = G__14772;
i__14749_14756 = G__14773;
continue;
}
} else {
}
}
break;
}

return content;
});

domina.core.set_attr_BANG_.cljs$lang$maxFixedArity = (2);

domina.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq14743){
var G__14744 = cljs.core.first(seq14743);
var seq14743__$1 = cljs.core.next(seq14743);
var G__14745 = cljs.core.first(seq14743__$1);
var seq14743__$2 = cljs.core.next(seq14743__$1);
return domina.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14744,G__14745,seq14743__$2);
});

/**
 * Removes the specified HTML property for each node in the content. Name may be a string or keyword.
 */
domina.core.remove_attr_BANG_ = (function domina$core$remove_attr_BANG_(content,name){
var seq__14774_14778 = cljs.core.seq(domina.core.nodes(content));
var chunk__14775_14779 = null;
var count__14776_14780 = (0);
var i__14777_14781 = (0);
while(true){
if((i__14777_14781 < count__14776_14780)){
var n_14782 = chunk__14775_14779.cljs$core$IIndexed$_nth$arity$2(null,i__14777_14781);
n_14782.removeAttribute(cljs.core.name(name));

var G__14783 = seq__14774_14778;
var G__14784 = chunk__14775_14779;
var G__14785 = count__14776_14780;
var G__14786 = (i__14777_14781 + (1));
seq__14774_14778 = G__14783;
chunk__14775_14779 = G__14784;
count__14776_14780 = G__14785;
i__14777_14781 = G__14786;
continue;
} else {
var temp__5457__auto___14787 = cljs.core.seq(seq__14774_14778);
if(temp__5457__auto___14787){
var seq__14774_14788__$1 = temp__5457__auto___14787;
if(cljs.core.chunked_seq_QMARK_(seq__14774_14788__$1)){
var c__9797__auto___14789 = cljs.core.chunk_first(seq__14774_14788__$1);
var G__14790 = cljs.core.chunk_rest(seq__14774_14788__$1);
var G__14791 = c__9797__auto___14789;
var G__14792 = cljs.core.count(c__9797__auto___14789);
var G__14793 = (0);
seq__14774_14778 = G__14790;
chunk__14775_14779 = G__14791;
count__14776_14780 = G__14792;
i__14777_14781 = G__14793;
continue;
} else {
var n_14794 = cljs.core.first(seq__14774_14788__$1);
n_14794.removeAttribute(cljs.core.name(name));

var G__14795 = cljs.core.next(seq__14774_14788__$1);
var G__14796 = null;
var G__14797 = (0);
var G__14798 = (0);
seq__14774_14778 = G__14795;
chunk__14775_14779 = G__14796;
count__14776_14780 = G__14797;
i__14777_14781 = G__14798;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Parses a CSS style string and returns the properties as a map.
 */
domina.core.parse_style_attributes = (function domina$core$parse_style_attributes(style){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){
var vec__14799 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14799,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14799,(1),null);
if(cljs.core.truth_((function (){var and__8854__auto__ = k;
if(cljs.core.truth_(and__8854__auto__)){
return v;
} else {
return and__8854__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k.toLowerCase()),v);
} else {
return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
 * Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
 */
domina.core.styles = (function domina$core$styles(content){
var style = domina.core.attr(content,"style");
if(typeof style === 'string'){
return domina.core.parse_style_attributes(style);
} else {
if((style == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.truth_(style.cssText)){
return domina.core.parse_style_attributes(style.cssText);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
/**
 * Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
 */
domina.core.attrs = (function domina$core$attrs(content){
var node = domina.core.single_node(content);
var attrs = node.attributes;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (node,attrs){
return (function (p1__14802_SHARP_){
var attr = attrs.item(p1__14802_SHARP_);
var value = attr.nodeValue;
if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue]);
} else {
return null;
}
});})(node,attrs))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs.length))));
});
/**
 * Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
 */
domina.core.set_styles_BANG_ = (function domina$core$set_styles_BANG_(content,styles){
var seq__14803_14813 = cljs.core.seq(styles);
var chunk__14804_14814 = null;
var count__14805_14815 = (0);
var i__14806_14816 = (0);
while(true){
if((i__14806_14816 < count__14805_14815)){
var vec__14807_14817 = chunk__14804_14814.cljs$core$IIndexed$_nth$arity$2(null,i__14806_14816);
var name_14818 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14807_14817,(0),null);
var value_14819 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14807_14817,(1),null);
domina.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_14818,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value_14819], 0));

var G__14820 = seq__14803_14813;
var G__14821 = chunk__14804_14814;
var G__14822 = count__14805_14815;
var G__14823 = (i__14806_14816 + (1));
seq__14803_14813 = G__14820;
chunk__14804_14814 = G__14821;
count__14805_14815 = G__14822;
i__14806_14816 = G__14823;
continue;
} else {
var temp__5457__auto___14824 = cljs.core.seq(seq__14803_14813);
if(temp__5457__auto___14824){
var seq__14803_14825__$1 = temp__5457__auto___14824;
if(cljs.core.chunked_seq_QMARK_(seq__14803_14825__$1)){
var c__9797__auto___14826 = cljs.core.chunk_first(seq__14803_14825__$1);
var G__14827 = cljs.core.chunk_rest(seq__14803_14825__$1);
var G__14828 = c__9797__auto___14826;
var G__14829 = cljs.core.count(c__9797__auto___14826);
var G__14830 = (0);
seq__14803_14813 = G__14827;
chunk__14804_14814 = G__14828;
count__14805_14815 = G__14829;
i__14806_14816 = G__14830;
continue;
} else {
var vec__14810_14831 = cljs.core.first(seq__14803_14825__$1);
var name_14832 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14810_14831,(0),null);
var value_14833 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14810_14831,(1),null);
domina.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_14832,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value_14833], 0));

var G__14834 = cljs.core.next(seq__14803_14825__$1);
var G__14835 = null;
var G__14836 = (0);
var G__14837 = (0);
seq__14803_14813 = G__14834;
chunk__14804_14814 = G__14835;
count__14805_14815 = G__14836;
i__14806_14816 = G__14837;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
 */
domina.core.set_attrs_BANG_ = (function domina$core$set_attrs_BANG_(content,attrs){
var seq__14838_14848 = cljs.core.seq(attrs);
var chunk__14839_14849 = null;
var count__14840_14850 = (0);
var i__14841_14851 = (0);
while(true){
if((i__14841_14851 < count__14840_14850)){
var vec__14842_14852 = chunk__14839_14849.cljs$core$IIndexed$_nth$arity$2(null,i__14841_14851);
var name_14853 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14842_14852,(0),null);
var value_14854 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14842_14852,(1),null);
domina.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_14853,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value_14854], 0));

var G__14855 = seq__14838_14848;
var G__14856 = chunk__14839_14849;
var G__14857 = count__14840_14850;
var G__14858 = (i__14841_14851 + (1));
seq__14838_14848 = G__14855;
chunk__14839_14849 = G__14856;
count__14840_14850 = G__14857;
i__14841_14851 = G__14858;
continue;
} else {
var temp__5457__auto___14859 = cljs.core.seq(seq__14838_14848);
if(temp__5457__auto___14859){
var seq__14838_14860__$1 = temp__5457__auto___14859;
if(cljs.core.chunked_seq_QMARK_(seq__14838_14860__$1)){
var c__9797__auto___14861 = cljs.core.chunk_first(seq__14838_14860__$1);
var G__14862 = cljs.core.chunk_rest(seq__14838_14860__$1);
var G__14863 = c__9797__auto___14861;
var G__14864 = cljs.core.count(c__9797__auto___14861);
var G__14865 = (0);
seq__14838_14848 = G__14862;
chunk__14839_14849 = G__14863;
count__14840_14850 = G__14864;
i__14841_14851 = G__14865;
continue;
} else {
var vec__14845_14866 = cljs.core.first(seq__14838_14860__$1);
var name_14867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14845_14866,(0),null);
var value_14868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14845_14866,(1),null);
domina.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_14867,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value_14868], 0));

var G__14869 = cljs.core.next(seq__14838_14860__$1);
var G__14870 = null;
var G__14871 = (0);
var G__14872 = (0);
seq__14838_14848 = G__14869;
chunk__14839_14849 = G__14870;
count__14840_14850 = G__14871;
i__14841_14851 = G__14872;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns true if the node has the specified CSS class. Assumes content is a single node.
 */
domina.core.has_class_QMARK_ = (function domina$core$has_class_QMARK_(content,class$){
var G__14873 = domina.core.single_node(content);
var G__14874 = class$;
return goog.dom.classes.has(G__14873,G__14874);
});
/**
 * Adds the specified CSS class to each node in the content.
 */
domina.core.add_class_BANG_ = (function domina$core$add_class_BANG_(content,class$){
var seq__14875_14879 = cljs.core.seq(domina.core.nodes(content));
var chunk__14876_14880 = null;
var count__14877_14881 = (0);
var i__14878_14882 = (0);
while(true){
if((i__14878_14882 < count__14877_14881)){
var node_14883 = chunk__14876_14880.cljs$core$IIndexed$_nth$arity$2(null,i__14878_14882);
goog.dom.classes.add(node_14883,class$);

var G__14884 = seq__14875_14879;
var G__14885 = chunk__14876_14880;
var G__14886 = count__14877_14881;
var G__14887 = (i__14878_14882 + (1));
seq__14875_14879 = G__14884;
chunk__14876_14880 = G__14885;
count__14877_14881 = G__14886;
i__14878_14882 = G__14887;
continue;
} else {
var temp__5457__auto___14888 = cljs.core.seq(seq__14875_14879);
if(temp__5457__auto___14888){
var seq__14875_14889__$1 = temp__5457__auto___14888;
if(cljs.core.chunked_seq_QMARK_(seq__14875_14889__$1)){
var c__9797__auto___14890 = cljs.core.chunk_first(seq__14875_14889__$1);
var G__14891 = cljs.core.chunk_rest(seq__14875_14889__$1);
var G__14892 = c__9797__auto___14890;
var G__14893 = cljs.core.count(c__9797__auto___14890);
var G__14894 = (0);
seq__14875_14879 = G__14891;
chunk__14876_14880 = G__14892;
count__14877_14881 = G__14893;
i__14878_14882 = G__14894;
continue;
} else {
var node_14895 = cljs.core.first(seq__14875_14889__$1);
goog.dom.classes.add(node_14895,class$);

var G__14896 = cljs.core.next(seq__14875_14889__$1);
var G__14897 = null;
var G__14898 = (0);
var G__14899 = (0);
seq__14875_14879 = G__14896;
chunk__14876_14880 = G__14897;
count__14877_14881 = G__14898;
i__14878_14882 = G__14899;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Removes the specified CSS class from each node in the content.
 */
domina.core.remove_class_BANG_ = (function domina$core$remove_class_BANG_(content,class$){
var seq__14900_14904 = cljs.core.seq(domina.core.nodes(content));
var chunk__14901_14905 = null;
var count__14902_14906 = (0);
var i__14903_14907 = (0);
while(true){
if((i__14903_14907 < count__14902_14906)){
var node_14908 = chunk__14901_14905.cljs$core$IIndexed$_nth$arity$2(null,i__14903_14907);
goog.dom.classes.remove(node_14908,class$);

var G__14909 = seq__14900_14904;
var G__14910 = chunk__14901_14905;
var G__14911 = count__14902_14906;
var G__14912 = (i__14903_14907 + (1));
seq__14900_14904 = G__14909;
chunk__14901_14905 = G__14910;
count__14902_14906 = G__14911;
i__14903_14907 = G__14912;
continue;
} else {
var temp__5457__auto___14913 = cljs.core.seq(seq__14900_14904);
if(temp__5457__auto___14913){
var seq__14900_14914__$1 = temp__5457__auto___14913;
if(cljs.core.chunked_seq_QMARK_(seq__14900_14914__$1)){
var c__9797__auto___14915 = cljs.core.chunk_first(seq__14900_14914__$1);
var G__14916 = cljs.core.chunk_rest(seq__14900_14914__$1);
var G__14917 = c__9797__auto___14915;
var G__14918 = cljs.core.count(c__9797__auto___14915);
var G__14919 = (0);
seq__14900_14904 = G__14916;
chunk__14901_14905 = G__14917;
count__14902_14906 = G__14918;
i__14903_14907 = G__14919;
continue;
} else {
var node_14920 = cljs.core.first(seq__14900_14914__$1);
goog.dom.classes.remove(node_14920,class$);

var G__14921 = cljs.core.next(seq__14900_14914__$1);
var G__14922 = null;
var G__14923 = (0);
var G__14924 = (0);
seq__14900_14904 = G__14921;
chunk__14901_14905 = G__14922;
count__14902_14906 = G__14923;
i__14903_14907 = G__14924;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Toggles the specified CSS class from each node in the content.
 */
domina.core.toggle_class_BANG_ = (function domina$core$toggle_class_BANG_(content,class$){
var seq__14925_14929 = cljs.core.seq(domina.core.nodes(content));
var chunk__14926_14930 = null;
var count__14927_14931 = (0);
var i__14928_14932 = (0);
while(true){
if((i__14928_14932 < count__14927_14931)){
var node_14933 = chunk__14926_14930.cljs$core$IIndexed$_nth$arity$2(null,i__14928_14932);
goog.dom.classes.toggle(node_14933,class$);

var G__14934 = seq__14925_14929;
var G__14935 = chunk__14926_14930;
var G__14936 = count__14927_14931;
var G__14937 = (i__14928_14932 + (1));
seq__14925_14929 = G__14934;
chunk__14926_14930 = G__14935;
count__14927_14931 = G__14936;
i__14928_14932 = G__14937;
continue;
} else {
var temp__5457__auto___14938 = cljs.core.seq(seq__14925_14929);
if(temp__5457__auto___14938){
var seq__14925_14939__$1 = temp__5457__auto___14938;
if(cljs.core.chunked_seq_QMARK_(seq__14925_14939__$1)){
var c__9797__auto___14940 = cljs.core.chunk_first(seq__14925_14939__$1);
var G__14941 = cljs.core.chunk_rest(seq__14925_14939__$1);
var G__14942 = c__9797__auto___14940;
var G__14943 = cljs.core.count(c__9797__auto___14940);
var G__14944 = (0);
seq__14925_14929 = G__14941;
chunk__14926_14930 = G__14942;
count__14927_14931 = G__14943;
i__14928_14932 = G__14944;
continue;
} else {
var node_14945 = cljs.core.first(seq__14925_14939__$1);
goog.dom.classes.toggle(node_14945,class$);

var G__14946 = cljs.core.next(seq__14925_14939__$1);
var G__14947 = null;
var G__14948 = (0);
var G__14949 = (0);
seq__14925_14929 = G__14946;
chunk__14926_14930 = G__14947;
count__14927_14931 = G__14948;
i__14928_14932 = G__14949;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
 */
domina.core.classes = (function domina$core$classes(content){
return cljs.core.seq((function (){var G__14950 = domina.core.single_node(content);
return goog.dom.classes.get(G__14950);
})());
});
/**
 * Sets the class attribute of the content nodes to classes, which can
 *   be either a class attribute string or a seq of classname strings.
 */
domina.core.set_classes_BANG_ = (function domina$core$set_classes_BANG_(content,classes){
var classes_14955__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);
var seq__14951_14956 = cljs.core.seq(domina.core.nodes(content));
var chunk__14952_14957 = null;
var count__14953_14958 = (0);
var i__14954_14959 = (0);
while(true){
if((i__14954_14959 < count__14953_14958)){
var node_14960 = chunk__14952_14957.cljs$core$IIndexed$_nth$arity$2(null,i__14954_14959);
goog.dom.classes.set(node_14960,classes_14955__$1);

var G__14961 = seq__14951_14956;
var G__14962 = chunk__14952_14957;
var G__14963 = count__14953_14958;
var G__14964 = (i__14954_14959 + (1));
seq__14951_14956 = G__14961;
chunk__14952_14957 = G__14962;
count__14953_14958 = G__14963;
i__14954_14959 = G__14964;
continue;
} else {
var temp__5457__auto___14965 = cljs.core.seq(seq__14951_14956);
if(temp__5457__auto___14965){
var seq__14951_14966__$1 = temp__5457__auto___14965;
if(cljs.core.chunked_seq_QMARK_(seq__14951_14966__$1)){
var c__9797__auto___14967 = cljs.core.chunk_first(seq__14951_14966__$1);
var G__14968 = cljs.core.chunk_rest(seq__14951_14966__$1);
var G__14969 = c__9797__auto___14967;
var G__14970 = cljs.core.count(c__9797__auto___14967);
var G__14971 = (0);
seq__14951_14956 = G__14968;
chunk__14952_14957 = G__14969;
count__14953_14958 = G__14970;
i__14954_14959 = G__14971;
continue;
} else {
var node_14972 = cljs.core.first(seq__14951_14966__$1);
goog.dom.classes.set(node_14972,classes_14955__$1);

var G__14973 = cljs.core.next(seq__14951_14966__$1);
var G__14974 = null;
var G__14975 = (0);
var G__14976 = (0);
seq__14951_14956 = G__14973;
chunk__14952_14957 = G__14974;
count__14953_14958 = G__14975;
i__14954_14959 = G__14976;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
 */
domina.core.text = (function domina$core$text(content){
var G__14977 = (function (){var G__14978 = domina.core.single_node(content);
return goog.dom.getTextContent(G__14978);
})();
return goog.string.trim(G__14977);
});
/**
 * Sets the text value of all the nodes in the given content.
 */
domina.core.set_text_BANG_ = (function domina$core$set_text_BANG_(content,value){
var seq__14979_14983 = cljs.core.seq(domina.core.nodes(content));
var chunk__14980_14984 = null;
var count__14981_14985 = (0);
var i__14982_14986 = (0);
while(true){
if((i__14982_14986 < count__14981_14985)){
var node_14987 = chunk__14980_14984.cljs$core$IIndexed$_nth$arity$2(null,i__14982_14986);
goog.dom.setTextContent(node_14987,value);

var G__14988 = seq__14979_14983;
var G__14989 = chunk__14980_14984;
var G__14990 = count__14981_14985;
var G__14991 = (i__14982_14986 + (1));
seq__14979_14983 = G__14988;
chunk__14980_14984 = G__14989;
count__14981_14985 = G__14990;
i__14982_14986 = G__14991;
continue;
} else {
var temp__5457__auto___14992 = cljs.core.seq(seq__14979_14983);
if(temp__5457__auto___14992){
var seq__14979_14993__$1 = temp__5457__auto___14992;
if(cljs.core.chunked_seq_QMARK_(seq__14979_14993__$1)){
var c__9797__auto___14994 = cljs.core.chunk_first(seq__14979_14993__$1);
var G__14995 = cljs.core.chunk_rest(seq__14979_14993__$1);
var G__14996 = c__9797__auto___14994;
var G__14997 = cljs.core.count(c__9797__auto___14994);
var G__14998 = (0);
seq__14979_14983 = G__14995;
chunk__14980_14984 = G__14996;
count__14981_14985 = G__14997;
i__14982_14986 = G__14998;
continue;
} else {
var node_14999 = cljs.core.first(seq__14979_14993__$1);
goog.dom.setTextContent(node_14999,value);

var G__15000 = cljs.core.next(seq__14979_14993__$1);
var G__15001 = null;
var G__15002 = (0);
var G__15003 = (0);
seq__14979_14983 = G__15000;
chunk__14980_14984 = G__15001;
count__14981_14985 = G__15002;
i__14982_14986 = G__15003;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the value of a node (presumably a form field). Assumes content is a single node.
 */
domina.core.value = (function domina$core$value(content){
var G__15004 = domina.core.single_node(content);
return goog.dom.forms.getValue(G__15004);
});
/**
 * Sets the value of all the nodes (presumably form fields) in the given content.
 */
domina.core.set_value_BANG_ = (function domina$core$set_value_BANG_(content,value){
var seq__15005_15009 = cljs.core.seq(domina.core.nodes(content));
var chunk__15006_15010 = null;
var count__15007_15011 = (0);
var i__15008_15012 = (0);
while(true){
if((i__15008_15012 < count__15007_15011)){
var node_15013 = chunk__15006_15010.cljs$core$IIndexed$_nth$arity$2(null,i__15008_15012);
goog.dom.forms.setValue(node_15013,value);

var G__15014 = seq__15005_15009;
var G__15015 = chunk__15006_15010;
var G__15016 = count__15007_15011;
var G__15017 = (i__15008_15012 + (1));
seq__15005_15009 = G__15014;
chunk__15006_15010 = G__15015;
count__15007_15011 = G__15016;
i__15008_15012 = G__15017;
continue;
} else {
var temp__5457__auto___15018 = cljs.core.seq(seq__15005_15009);
if(temp__5457__auto___15018){
var seq__15005_15019__$1 = temp__5457__auto___15018;
if(cljs.core.chunked_seq_QMARK_(seq__15005_15019__$1)){
var c__9797__auto___15020 = cljs.core.chunk_first(seq__15005_15019__$1);
var G__15021 = cljs.core.chunk_rest(seq__15005_15019__$1);
var G__15022 = c__9797__auto___15020;
var G__15023 = cljs.core.count(c__9797__auto___15020);
var G__15024 = (0);
seq__15005_15009 = G__15021;
chunk__15006_15010 = G__15022;
count__15007_15011 = G__15023;
i__15008_15012 = G__15024;
continue;
} else {
var node_15025 = cljs.core.first(seq__15005_15019__$1);
goog.dom.forms.setValue(node_15025,value);

var G__15026 = cljs.core.next(seq__15005_15019__$1);
var G__15027 = null;
var G__15028 = (0);
var G__15029 = (0);
seq__15005_15009 = G__15026;
chunk__15006_15010 = G__15027;
count__15007_15011 = G__15028;
i__15008_15012 = G__15029;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the innerHTML of a node. Assumes content is a single node.
 */
domina.core.html = (function domina$core$html(content){
return domina.core.single_node(content).innerHTML;
});
domina.core.replace_children_BANG_ = (function domina$core$replace_children_BANG_(content,inner_content){
return domina.core.append_BANG_(domina.core.destroy_children_BANG_(content),inner_content);
});
domina.core.set_inner_html_BANG_ = (function domina$core$set_inner_html_BANG_(content,html_string){
var allows_inner_html_QMARK_ = cljs.core.not(cljs.core.re_find(domina.core.re_no_inner_html,html_string));
var leading_whitespace_QMARK_ = cljs.core.re_find(domina.core.re_leading_whitespace,html_string);
var tag_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.re_find(domina.core.re_tag_name,html_string)))].join('').toLowerCase();
var special_tag_QMARK_ = cljs.core.contains_QMARK_(domina.core.wrap_map,tag_name);
if((allows_inner_html_QMARK_) && ((domina.support.leading_whitespace_QMARK_) || (cljs.core.not(leading_whitespace_QMARK_))) && (!(special_tag_QMARK_))){
var value_15035 = clojure.string.replace(html_string,domina.core.re_xhtml_tag,"<$1></$2>");
try{var seq__15031_15036 = cljs.core.seq(domina.core.nodes(content));
var chunk__15032_15037 = null;
var count__15033_15038 = (0);
var i__15034_15039 = (0);
while(true){
if((i__15034_15039 < count__15033_15038)){
var node_15040 = chunk__15032_15037.cljs$core$IIndexed$_nth$arity$2(null,i__15034_15039);
node_15040.innerHTML = value_15035;

var G__15041 = seq__15031_15036;
var G__15042 = chunk__15032_15037;
var G__15043 = count__15033_15038;
var G__15044 = (i__15034_15039 + (1));
seq__15031_15036 = G__15041;
chunk__15032_15037 = G__15042;
count__15033_15038 = G__15043;
i__15034_15039 = G__15044;
continue;
} else {
var temp__5457__auto___15045 = cljs.core.seq(seq__15031_15036);
if(temp__5457__auto___15045){
var seq__15031_15046__$1 = temp__5457__auto___15045;
if(cljs.core.chunked_seq_QMARK_(seq__15031_15046__$1)){
var c__9797__auto___15047 = cljs.core.chunk_first(seq__15031_15046__$1);
var G__15048 = cljs.core.chunk_rest(seq__15031_15046__$1);
var G__15049 = c__9797__auto___15047;
var G__15050 = cljs.core.count(c__9797__auto___15047);
var G__15051 = (0);
seq__15031_15036 = G__15048;
chunk__15032_15037 = G__15049;
count__15033_15038 = G__15050;
i__15034_15039 = G__15051;
continue;
} else {
var node_15052 = cljs.core.first(seq__15031_15046__$1);
node_15052.innerHTML = value_15035;

var G__15053 = cljs.core.next(seq__15031_15046__$1);
var G__15054 = null;
var G__15055 = (0);
var G__15056 = (0);
seq__15031_15036 = G__15053;
chunk__15032_15037 = G__15054;
count__15033_15038 = G__15055;
i__15034_15039 = G__15056;
continue;
}
} else {
}
}
break;
}
}catch (e15030){if((e15030 instanceof Error)){
var e_15057 = e15030;
domina.core.replace_children_BANG_(content,value_15035);
} else {
throw e15030;

}
}} else {
domina.core.replace_children_BANG_(content,html_string);
}

return content;
});
/**
 * Sets the innerHTML value for all the nodes in the given content.
 */
domina.core.set_html_BANG_ = (function domina$core$set_html_BANG_(content,inner_content){
if(typeof inner_content === 'string'){
return domina.core.set_inner_html_BANG_(content,inner_content);
} else {
return domina.core.replace_children_BANG_(content,inner_content);
}
});
/**
 * Returns data associated with a node for a given key. Assumes
 *   content is a single node. If the bubble parameter is set to true,
 *   will search parent nodes if the key is not found.
 */
domina.core.get_data = (function domina$core$get_data(var_args){
var G__15059 = arguments.length;
switch (G__15059) {
case 2:
return domina.core.get_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.core.get_data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

domina.core.get_data.cljs$core$IFn$_invoke$arity$2 = (function (node,key){
return domina.core.get_data.cljs$core$IFn$_invoke$arity$3(node,key,false);
});

domina.core.get_data.cljs$core$IFn$_invoke$arity$3 = (function (node,key,bubble){
var m = domina.core.single_node(node).__domina_data;
var value = (cljs.core.truth_(m)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key):null);
if(cljs.core.truth_((function (){var and__8854__auto__ = bubble;
if(cljs.core.truth_(and__8854__auto__)){
return (value == null);
} else {
return and__8854__auto__;
}
})())){
var temp__5457__auto__ = domina.core.single_node(node).parentNode;
if(cljs.core.truth_(temp__5457__auto__)){
var parent = temp__5457__auto__;
return domina.core.get_data.cljs$core$IFn$_invoke$arity$3(parent,key,true);
} else {
return null;
}
} else {
return value;
}
});

domina.core.get_data.cljs$lang$maxFixedArity = 3;

/**
 * Sets a data on the node for a given key. Assumes content is a
 *   single node. Data should be ClojureScript values and data structures
 *   only; using other objects as data may result in memory leaks on some
 *   browsers.
 */
domina.core.set_data_BANG_ = (function domina$core$set_data_BANG_(node,key,value){
var m = (function (){var or__8866__auto__ = domina.core.single_node(node).__domina_data;
if(cljs.core.truth_(or__8866__auto__)){
return or__8866__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return domina.core.single_node(node).__domina_data = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,key,value);
});
/**
 * Takes a two-arg function, a reference DomContent and new
 *   DomContent. Applies the function for each reference / content
 *   combination. Uses clones of the new content for each additional
 *   parent after the first.
 */
domina.core.apply_with_cloning = (function domina$core$apply_with_cloning(f,parent_content,child_content){
var parents = domina.core.nodes(parent_content);
var children = domina.core.nodes(child_content);
var first_child = (function (){var frag = document.createDocumentFragment();
var seq__15063_15069 = cljs.core.seq(children);
var chunk__15064_15070 = null;
var count__15065_15071 = (0);
var i__15066_15072 = (0);
while(true){
if((i__15066_15072 < count__15065_15071)){
var child_15073 = chunk__15064_15070.cljs$core$IIndexed$_nth$arity$2(null,i__15066_15072);
frag.appendChild(child_15073);

var G__15074 = seq__15063_15069;
var G__15075 = chunk__15064_15070;
var G__15076 = count__15065_15071;
var G__15077 = (i__15066_15072 + (1));
seq__15063_15069 = G__15074;
chunk__15064_15070 = G__15075;
count__15065_15071 = G__15076;
i__15066_15072 = G__15077;
continue;
} else {
var temp__5457__auto___15078 = cljs.core.seq(seq__15063_15069);
if(temp__5457__auto___15078){
var seq__15063_15079__$1 = temp__5457__auto___15078;
if(cljs.core.chunked_seq_QMARK_(seq__15063_15079__$1)){
var c__9797__auto___15080 = cljs.core.chunk_first(seq__15063_15079__$1);
var G__15081 = cljs.core.chunk_rest(seq__15063_15079__$1);
var G__15082 = c__9797__auto___15080;
var G__15083 = cljs.core.count(c__9797__auto___15080);
var G__15084 = (0);
seq__15063_15069 = G__15081;
chunk__15064_15070 = G__15082;
count__15065_15071 = G__15083;
i__15066_15072 = G__15084;
continue;
} else {
var child_15085 = cljs.core.first(seq__15063_15079__$1);
frag.appendChild(child_15085);

var G__15086 = cljs.core.next(seq__15063_15079__$1);
var G__15087 = null;
var G__15088 = (0);
var G__15089 = (0);
seq__15063_15069 = G__15086;
chunk__15064_15070 = G__15087;
count__15065_15071 = G__15088;
i__15066_15072 = G__15089;
continue;
}
} else {
}
}
break;
}

return frag;
})();
var other_children = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((cljs.core.count(parents) - (1)),((function (parents,children,first_child){
return (function (){
return first_child.cloneNode(true);
});})(parents,children,first_child))
));
if(cljs.core.seq(parents)){
var G__15067_15090 = cljs.core.first(parents);
var G__15068_15091 = first_child;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15067_15090,G__15068_15091) : f.call(null,G__15067_15090,G__15068_15091));

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (parents,children,first_child,other_children){
return (function (p1__15061_SHARP_,p2__15062_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__15061_SHARP_,p2__15062_SHARP_) : f.call(null,p1__15061_SHARP_,p2__15062_SHARP_));
});})(parents,children,first_child,other_children))
,cljs.core.rest(parents),other_children));
} else {
return null;
}
});
domina.core.lazy_nl_via_item = (function domina$core$lazy_nl_via_item(var_args){
var G__15093 = arguments.length;
switch (G__15093) {
case 1:
return domina.core.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.core.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

domina.core.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = (function (nl){
return domina.core.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2(nl,(0));
});

domina.core.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons(nl.item(n),domina.core.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2(nl,(n + (1))));
}),null,null));
} else {
return null;
}
});

domina.core.lazy_nl_via_item.cljs$lang$maxFixedArity = 2;

domina.core.lazy_nl_via_array_ref = (function domina$core$lazy_nl_via_array_ref(var_args){
var G__15096 = arguments.length;
switch (G__15096) {
case 1:
return domina.core.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.core.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

domina.core.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = (function (nl){
return domina.core.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2(nl,(0));
});

domina.core.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((nl[n]),domina.core.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2(nl,(n + (1))));
}),null,null));
} else {
return null;
}
});

domina.core.lazy_nl_via_array_ref.cljs$lang$maxFixedArity = 2;

/**
 * A lazy seq view of a js/NodeList, or other array-like javascript things
 */
domina.core.lazy_nodelist = (function domina$core$lazy_nodelist(nl){
if(cljs.core.truth_(nl.item)){
return domina.core.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1(nl);
} else {
return domina.core.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1(nl);
}
});
domina.core.array_like_QMARK_ = (function domina$core$array_like_QMARK_(obj){
var and__8854__auto__ = obj;
if(cljs.core.truth_(and__8854__auto__)){
var and__8854__auto____$1 = cljs.core.not(obj.nodeName);
if(and__8854__auto____$1){
return obj.length;
} else {
return and__8854__auto____$1;
}
} else {
return and__8854__auto__;
}
});
/**
 * Some versions of IE have things that are like arrays in that they
 *   respond to .length, but are not arrays nor NodeSets. This returns a
 *   real sequence view of such objects. If passed an object that is not
 *   a logical sequence at all, returns a single-item seq containing the
 *   object.
 */
domina.core.normalize_seq = (function domina$core$normalize_seq(list_thing){
if((list_thing == null)){
return cljs.core.List.EMPTY;
} else {
if(((!((list_thing == null)))?((((list_thing.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === list_thing.cljs$core$ISeqable$)))?true:(((!list_thing.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,list_thing):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,list_thing))){
return cljs.core.seq(list_thing);
} else {
if(cljs.core.truth_(domina.core.array_like_QMARK_(list_thing))){
return domina.core.lazy_nodelist(list_thing);
} else {
return cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
goog.object.set(domina.core.DomContent,"string",true);

var G__15099_15113 = domina.core.nodes;
var G__15100_15114 = "string";
var G__15101_15115 = ((function (G__15099_15113,G__15100_15114){
return (function (s){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(domina.core.nodes(domina.core.string_to_dom(s)));
});})(G__15099_15113,G__15100_15114))
;
goog.object.set(G__15099_15113,G__15100_15114,G__15101_15115);

var G__15102_15116 = domina.core.single_node;
var G__15103_15117 = "string";
var G__15104_15118 = ((function (G__15102_15116,G__15103_15117){
return (function (s){
return domina.core.single_node(domina.core.string_to_dom(s));
});})(G__15102_15116,G__15103_15117))
;
goog.object.set(G__15102_15116,G__15103_15117,G__15104_15118);

goog.object.set(domina.core.DomContent,"_",true);

var G__15105_15119 = domina.core.nodes;
var G__15106_15120 = "_";
var G__15107_15121 = ((function (G__15105_15119,G__15106_15120){
return (function (content){
if((content == null)){
return cljs.core.List.EMPTY;
} else {
if(((!((content == null)))?((((content.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === content.cljs$core$ISeqable$)))?true:(((!content.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,content):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,content))){
return cljs.core.seq(content);
} else {
if(cljs.core.truth_(domina.core.array_like_QMARK_(content))){
return domina.core.lazy_nodelist(content);
} else {
return cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
});})(G__15105_15119,G__15106_15120))
;
goog.object.set(G__15105_15119,G__15106_15120,G__15107_15121);

var G__15109_15122 = domina.core.single_node;
var G__15110_15123 = "_";
var G__15111_15124 = ((function (G__15109_15122,G__15110_15123){
return (function (content){
if((content == null)){
return null;
} else {
if(((!((content == null)))?((((content.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === content.cljs$core$ISeqable$)))?true:(((!content.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,content):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,content))){
return cljs.core.first(content);
} else {
if(cljs.core.truth_(domina.core.array_like_QMARK_(content))){
return content.item((0));
} else {
return content;

}
}
}
});})(G__15109_15122,G__15110_15123))
;
goog.object.set(G__15109_15122,G__15110_15123,G__15111_15124);
if(cljs.core.truth_((typeof NodeList != 'undefined'))){
NodeList.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL;

NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return nodelist__$1.length;
});

NodeList.prototype.cljs$core$IIndexed$ = cljs.core.PROTOCOL_SENTINEL;

NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
var nodelist__$1 = this;
return nodelist__$1.item(n);
});

NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
var nodelist__$1 = this;
if((nodelist__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nodelist__$1,n);
}
});

NodeList.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL;

NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.core.lazy_nodelist(nodelist__$1);
});
} else {
}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined'))){
StaticNodeList.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL;

StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return nodelist__$1.length;
});

StaticNodeList.prototype.cljs$core$IIndexed$ = cljs.core.PROTOCOL_SENTINEL;

StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
var nodelist__$1 = this;
return nodelist__$1.item(n);
});

StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
var nodelist__$1 = this;
if((nodelist__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nodelist__$1,n);
}
});

StaticNodeList.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL;

StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.core.lazy_nodelist(nodelist__$1);
});
} else {
}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined'))){
HTMLCollection.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL;

HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var coll__$1 = this;
return coll__$1.length;
});

HTMLCollection.prototype.cljs$core$IIndexed$ = cljs.core.PROTOCOL_SENTINEL;

HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var coll__$1 = this;
return coll__$1.item(n);
});

HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var coll__$1 = this;
if((coll__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll__$1,n);
}
});

HTMLCollection.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL;

HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var coll__$1 = this;
return domina.core.lazy_nodelist(coll__$1);
});
} else {
}
