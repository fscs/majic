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
var opt_wrapper_14641 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_14642 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_14643 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.core.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",cljs.core.cst$kw$default,"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_14643,opt_wrapper_14641,table_section_wrapper_14642,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_14641,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_14642,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_14642,cell_wrapper_14643,table_section_wrapper_14642,table_section_wrapper_14642]);
domina.core.remove_extraneous_tbody_BANG_ = (function domina$core$remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.core.re_tbody,html));
var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__8854__auto__ = div.firstChild;
if(cljs.core.truth_(and__8854__auto__)){
return div.firstChild.childNodes;
} else {
return and__8854__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__14644 = cljs.core.seq(tbody);
var chunk__14645 = null;
var count__14646 = (0);
var i__14647 = (0);
while(true){
if((i__14647 < count__14646)){
var child = chunk__14645.cljs$core$IIndexed$_nth$arity$2(null,i__14647);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__14648 = seq__14644;
var G__14649 = chunk__14645;
var G__14650 = count__14646;
var G__14651 = (i__14647 + (1));
seq__14644 = G__14648;
chunk__14645 = G__14649;
count__14646 = G__14650;
i__14647 = G__14651;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__14644);
if(temp__5457__auto__){
var seq__14644__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14644__$1)){
var c__9797__auto__ = cljs.core.chunk_first(seq__14644__$1);
var G__14652 = cljs.core.chunk_rest(seq__14644__$1);
var G__14653 = c__9797__auto__;
var G__14654 = cljs.core.count(c__9797__auto__);
var G__14655 = (0);
seq__14644 = G__14652;
chunk__14645 = G__14653;
count__14646 = G__14654;
i__14647 = G__14655;
continue;
} else {
var child = cljs.core.first(seq__14644__$1);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__14656 = cljs.core.next(seq__14644__$1);
var G__14657 = null;
var G__14658 = (0);
var G__14659 = (0);
seq__14644 = G__14656;
chunk__14645 = G__14657;
count__14646 = G__14658;
i__14647 = G__14659;
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
var vec__14660 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.core.wrap_map,tag_name,cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(domina.core.wrap_map));
var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14660,(0),null);
var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14660,(1),null);
var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14660,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap),cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__14663 = wrapper.lastChild;
var G__14664 = (level - (1));
wrapper = G__14663;
level = G__14664;
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
var len__10145__auto___14666 = arguments.length;
var i__10146__auto___14667 = (0);
while(true){
if((i__10146__auto___14667 < len__10145__auto___14666)){
args__10152__auto__.push((arguments[i__10146__auto___14667]));

var G__14668 = (i__10146__auto___14667 + (1));
i__10146__auto___14667 = G__14668;
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

domina.core.log_debug.cljs$lang$applyTo = (function (seq14665){
return domina.core.log_debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14665));
});

domina.core.log = (function domina$core$log(var_args){
var args__10152__auto__ = [];
var len__10145__auto___14670 = arguments.length;
var i__10146__auto___14671 = (0);
while(true){
if((i__10146__auto___14671 < len__10145__auto___14670)){
args__10152__auto__.push((arguments[i__10146__auto___14671]));

var G__14672 = (i__10146__auto___14671 + (1));
i__10146__auto___14671 = G__14672;
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

domina.core.log.cljs$lang$applyTo = (function (seq14669){
return domina.core.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14669));
});

/**
 * Returns content containing a single node by looking up the given ID
 */
domina.core.by_id = (function domina$core$by_id(id){
var G__14673 = cljs.core.name(id);
return goog.dom.getElement(G__14673);
});
/**
 * Returns content containing nodes which have the specified CSS class.
 */
domina.core.by_class = (function domina$core$by_class(class_name){
var G__14674 = (function (){var G__14675 = cljs.core.name(class_name);
return goog.dom.getElementsByClass(G__14675);
})();
return (domina.core.normalize_seq.cljs$core$IFn$_invoke$arity$1 ? domina.core.normalize_seq.cljs$core$IFn$_invoke$arity$1(G__14674) : domina.core.normalize_seq.call(null,G__14674));
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
var len__10145__auto___14677 = arguments.length;
var i__10146__auto___14678 = (0);
while(true){
if((i__10146__auto___14678 < len__10145__auto___14677)){
args__10152__auto__.push((arguments[i__10146__auto___14678]));

var G__14679 = (i__10146__auto___14678 + (1));
i__10146__auto___14678 = G__14679;
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

domina.core.common_ancestor.cljs$lang$applyTo = (function (seq14676){
return domina.core.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14676));
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14680_SHARP_){
return p1__14680_SHARP_.cloneNode(true);
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
var G__14683_14686 = (function (p1__14681_SHARP_,p2__14682_SHARP_){
return goog.dom.insertChildAt(p1__14681_SHARP_,p2__14682_SHARP_,idx);
});
var G__14684_14687 = parent_content;
var G__14685_14688 = child_content;
(domina.core.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.core.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(G__14683_14686,G__14684_14687,G__14685_14688) : domina.core.apply_with_cloning.call(null,G__14683_14686,G__14684_14687,G__14685_14688));

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
var G__14691_14694 = (function (p1__14690_SHARP_,p2__14689_SHARP_){
return goog.dom.insertSiblingBefore(p2__14689_SHARP_,p1__14690_SHARP_);
});
var G__14692_14695 = content;
var G__14693_14696 = new_content;
(domina.core.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.core.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(G__14691_14694,G__14692_14695,G__14693_14696) : domina.core.apply_with_cloning.call(null,G__14691_14694,G__14692_14695,G__14693_14696));

return content;
});
/**
 * Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.core.insert_after_BANG_ = (function domina$core$insert_after_BANG_(content,new_content){
var G__14699_14702 = (function (p1__14698_SHARP_,p2__14697_SHARP_){
return goog.dom.insertSiblingAfter(p2__14697_SHARP_,p1__14698_SHARP_);
});
var G__14700_14703 = content;
var G__14701_14704 = new_content;
(domina.core.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.core.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(G__14699_14702,G__14700_14703,G__14701_14704) : domina.core.apply_with_cloning.call(null,G__14699_14702,G__14700_14703,G__14701_14704));

return content;
});
/**
 * Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
 */
domina.core.swap_content_BANG_ = (function domina$core$swap_content_BANG_(old_content,new_content){
var G__14707_14710 = (function (p1__14706_SHARP_,p2__14705_SHARP_){
return goog.dom.replaceNode(p2__14705_SHARP_,p1__14706_SHARP_);
});
var G__14708_14711 = old_content;
var G__14709_14712 = new_content;
(domina.core.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.core.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(G__14707_14710,G__14708_14711,G__14709_14712) : domina.core.apply_with_cloning.call(null,G__14707_14710,G__14708_14711,G__14709_14712));

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
var s = (function (){var G__14713 = domina.core.single_node(content);
var G__14714 = cljs.core.name(name);
return goog.style.getStyle(G__14713,G__14714);
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
var len__10145__auto___14728 = arguments.length;
var i__10146__auto___14729 = (0);
while(true){
if((i__10146__auto___14729 < len__10145__auto___14728)){
args__10152__auto__.push((arguments[i__10146__auto___14729]));

var G__14730 = (i__10146__auto___14729 + (1));
i__10146__auto___14729 = G__14730;
continue;
} else {
}
break;
}

var argseq__10153__auto__ = ((((2) < args__10152__auto__.length))?(new cljs.core.IndexedSeq(args__10152__auto__.slice((2)),(0),null)):null);
return domina.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10153__auto__);
});

domina.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__14718_14731 = cljs.core.seq(domina.core.nodes(content));
var chunk__14719_14732 = null;
var count__14720_14733 = (0);
var i__14721_14734 = (0);
while(true){
if((i__14721_14734 < count__14720_14733)){
var n_14735 = chunk__14719_14732.cljs$core$IIndexed$_nth$arity$2(null,i__14721_14734);
var G__14722_14736 = n_14735;
var G__14723_14737 = cljs.core.name(name);
var G__14724_14738 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value);
goog.style.setStyle(G__14722_14736,G__14723_14737,G__14724_14738);

var G__14739 = seq__14718_14731;
var G__14740 = chunk__14719_14732;
var G__14741 = count__14720_14733;
var G__14742 = (i__14721_14734 + (1));
seq__14718_14731 = G__14739;
chunk__14719_14732 = G__14740;
count__14720_14733 = G__14741;
i__14721_14734 = G__14742;
continue;
} else {
var temp__5457__auto___14743 = cljs.core.seq(seq__14718_14731);
if(temp__5457__auto___14743){
var seq__14718_14744__$1 = temp__5457__auto___14743;
if(cljs.core.chunked_seq_QMARK_(seq__14718_14744__$1)){
var c__9797__auto___14745 = cljs.core.chunk_first(seq__14718_14744__$1);
var G__14746 = cljs.core.chunk_rest(seq__14718_14744__$1);
var G__14747 = c__9797__auto___14745;
var G__14748 = cljs.core.count(c__9797__auto___14745);
var G__14749 = (0);
seq__14718_14731 = G__14746;
chunk__14719_14732 = G__14747;
count__14720_14733 = G__14748;
i__14721_14734 = G__14749;
continue;
} else {
var n_14750 = cljs.core.first(seq__14718_14744__$1);
var G__14725_14751 = n_14750;
var G__14726_14752 = cljs.core.name(name);
var G__14727_14753 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value);
goog.style.setStyle(G__14725_14751,G__14726_14752,G__14727_14753);

var G__14754 = cljs.core.next(seq__14718_14744__$1);
var G__14755 = null;
var G__14756 = (0);
var G__14757 = (0);
seq__14718_14731 = G__14754;
chunk__14719_14732 = G__14755;
count__14720_14733 = G__14756;
i__14721_14734 = G__14757;
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

domina.core.set_style_BANG_.cljs$lang$applyTo = (function (seq14715){
var G__14716 = cljs.core.first(seq14715);
var seq14715__$1 = cljs.core.next(seq14715);
var G__14717 = cljs.core.first(seq14715__$1);
var seq14715__$2 = cljs.core.next(seq14715__$1);
return domina.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14716,G__14717,seq14715__$2);
});

/**
 * Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.core.set_attr_BANG_ = (function domina$core$set_attr_BANG_(var_args){
var args__10152__auto__ = [];
var len__10145__auto___14765 = arguments.length;
var i__10146__auto___14766 = (0);
while(true){
if((i__10146__auto___14766 < len__10145__auto___14765)){
args__10152__auto__.push((arguments[i__10146__auto___14766]));

var G__14767 = (i__10146__auto___14766 + (1));
i__10146__auto___14766 = G__14767;
continue;
} else {
}
break;
}

var argseq__10153__auto__ = ((((2) < args__10152__auto__.length))?(new cljs.core.IndexedSeq(args__10152__auto__.slice((2)),(0),null)):null);
return domina.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10153__auto__);
});

domina.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__14761_14768 = cljs.core.seq(domina.core.nodes(content));
var chunk__14762_14769 = null;
var count__14763_14770 = (0);
var i__14764_14771 = (0);
while(true){
if((i__14764_14771 < count__14763_14770)){
var n_14772 = chunk__14762_14769.cljs$core$IIndexed$_nth$arity$2(null,i__14764_14771);
n_14772.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));

var G__14773 = seq__14761_14768;
var G__14774 = chunk__14762_14769;
var G__14775 = count__14763_14770;
var G__14776 = (i__14764_14771 + (1));
seq__14761_14768 = G__14773;
chunk__14762_14769 = G__14774;
count__14763_14770 = G__14775;
i__14764_14771 = G__14776;
continue;
} else {
var temp__5457__auto___14777 = cljs.core.seq(seq__14761_14768);
if(temp__5457__auto___14777){
var seq__14761_14778__$1 = temp__5457__auto___14777;
if(cljs.core.chunked_seq_QMARK_(seq__14761_14778__$1)){
var c__9797__auto___14779 = cljs.core.chunk_first(seq__14761_14778__$1);
var G__14780 = cljs.core.chunk_rest(seq__14761_14778__$1);
var G__14781 = c__9797__auto___14779;
var G__14782 = cljs.core.count(c__9797__auto___14779);
var G__14783 = (0);
seq__14761_14768 = G__14780;
chunk__14762_14769 = G__14781;
count__14763_14770 = G__14782;
i__14764_14771 = G__14783;
continue;
} else {
var n_14784 = cljs.core.first(seq__14761_14778__$1);
n_14784.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));

var G__14785 = cljs.core.next(seq__14761_14778__$1);
var G__14786 = null;
var G__14787 = (0);
var G__14788 = (0);
seq__14761_14768 = G__14785;
chunk__14762_14769 = G__14786;
count__14763_14770 = G__14787;
i__14764_14771 = G__14788;
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

domina.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq14758){
var G__14759 = cljs.core.first(seq14758);
var seq14758__$1 = cljs.core.next(seq14758);
var G__14760 = cljs.core.first(seq14758__$1);
var seq14758__$2 = cljs.core.next(seq14758__$1);
return domina.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14759,G__14760,seq14758__$2);
});

/**
 * Removes the specified HTML property for each node in the content. Name may be a string or keyword.
 */
domina.core.remove_attr_BANG_ = (function domina$core$remove_attr_BANG_(content,name){
var seq__14789_14793 = cljs.core.seq(domina.core.nodes(content));
var chunk__14790_14794 = null;
var count__14791_14795 = (0);
var i__14792_14796 = (0);
while(true){
if((i__14792_14796 < count__14791_14795)){
var n_14797 = chunk__14790_14794.cljs$core$IIndexed$_nth$arity$2(null,i__14792_14796);
n_14797.removeAttribute(cljs.core.name(name));

var G__14798 = seq__14789_14793;
var G__14799 = chunk__14790_14794;
var G__14800 = count__14791_14795;
var G__14801 = (i__14792_14796 + (1));
seq__14789_14793 = G__14798;
chunk__14790_14794 = G__14799;
count__14791_14795 = G__14800;
i__14792_14796 = G__14801;
continue;
} else {
var temp__5457__auto___14802 = cljs.core.seq(seq__14789_14793);
if(temp__5457__auto___14802){
var seq__14789_14803__$1 = temp__5457__auto___14802;
if(cljs.core.chunked_seq_QMARK_(seq__14789_14803__$1)){
var c__9797__auto___14804 = cljs.core.chunk_first(seq__14789_14803__$1);
var G__14805 = cljs.core.chunk_rest(seq__14789_14803__$1);
var G__14806 = c__9797__auto___14804;
var G__14807 = cljs.core.count(c__9797__auto___14804);
var G__14808 = (0);
seq__14789_14793 = G__14805;
chunk__14790_14794 = G__14806;
count__14791_14795 = G__14807;
i__14792_14796 = G__14808;
continue;
} else {
var n_14809 = cljs.core.first(seq__14789_14803__$1);
n_14809.removeAttribute(cljs.core.name(name));

var G__14810 = cljs.core.next(seq__14789_14803__$1);
var G__14811 = null;
var G__14812 = (0);
var G__14813 = (0);
seq__14789_14793 = G__14810;
chunk__14790_14794 = G__14811;
count__14791_14795 = G__14812;
i__14792_14796 = G__14813;
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
var vec__14814 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14814,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14814,(1),null);
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
return (function (p1__14817_SHARP_){
var attr = attrs.item(p1__14817_SHARP_);
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
var seq__14818_14828 = cljs.core.seq(styles);
var chunk__14819_14829 = null;
var count__14820_14830 = (0);
var i__14821_14831 = (0);
while(true){
if((i__14821_14831 < count__14820_14830)){
var vec__14822_14832 = chunk__14819_14829.cljs$core$IIndexed$_nth$arity$2(null,i__14821_14831);
var name_14833 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14822_14832,(0),null);
var value_14834 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14822_14832,(1),null);
domina.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_14833,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value_14834], 0));

var G__14835 = seq__14818_14828;
var G__14836 = chunk__14819_14829;
var G__14837 = count__14820_14830;
var G__14838 = (i__14821_14831 + (1));
seq__14818_14828 = G__14835;
chunk__14819_14829 = G__14836;
count__14820_14830 = G__14837;
i__14821_14831 = G__14838;
continue;
} else {
var temp__5457__auto___14839 = cljs.core.seq(seq__14818_14828);
if(temp__5457__auto___14839){
var seq__14818_14840__$1 = temp__5457__auto___14839;
if(cljs.core.chunked_seq_QMARK_(seq__14818_14840__$1)){
var c__9797__auto___14841 = cljs.core.chunk_first(seq__14818_14840__$1);
var G__14842 = cljs.core.chunk_rest(seq__14818_14840__$1);
var G__14843 = c__9797__auto___14841;
var G__14844 = cljs.core.count(c__9797__auto___14841);
var G__14845 = (0);
seq__14818_14828 = G__14842;
chunk__14819_14829 = G__14843;
count__14820_14830 = G__14844;
i__14821_14831 = G__14845;
continue;
} else {
var vec__14825_14846 = cljs.core.first(seq__14818_14840__$1);
var name_14847 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14825_14846,(0),null);
var value_14848 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14825_14846,(1),null);
domina.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_14847,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value_14848], 0));

var G__14849 = cljs.core.next(seq__14818_14840__$1);
var G__14850 = null;
var G__14851 = (0);
var G__14852 = (0);
seq__14818_14828 = G__14849;
chunk__14819_14829 = G__14850;
count__14820_14830 = G__14851;
i__14821_14831 = G__14852;
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
var seq__14853_14863 = cljs.core.seq(attrs);
var chunk__14854_14864 = null;
var count__14855_14865 = (0);
var i__14856_14866 = (0);
while(true){
if((i__14856_14866 < count__14855_14865)){
var vec__14857_14867 = chunk__14854_14864.cljs$core$IIndexed$_nth$arity$2(null,i__14856_14866);
var name_14868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14857_14867,(0),null);
var value_14869 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14857_14867,(1),null);
domina.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_14868,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value_14869], 0));

var G__14870 = seq__14853_14863;
var G__14871 = chunk__14854_14864;
var G__14872 = count__14855_14865;
var G__14873 = (i__14856_14866 + (1));
seq__14853_14863 = G__14870;
chunk__14854_14864 = G__14871;
count__14855_14865 = G__14872;
i__14856_14866 = G__14873;
continue;
} else {
var temp__5457__auto___14874 = cljs.core.seq(seq__14853_14863);
if(temp__5457__auto___14874){
var seq__14853_14875__$1 = temp__5457__auto___14874;
if(cljs.core.chunked_seq_QMARK_(seq__14853_14875__$1)){
var c__9797__auto___14876 = cljs.core.chunk_first(seq__14853_14875__$1);
var G__14877 = cljs.core.chunk_rest(seq__14853_14875__$1);
var G__14878 = c__9797__auto___14876;
var G__14879 = cljs.core.count(c__9797__auto___14876);
var G__14880 = (0);
seq__14853_14863 = G__14877;
chunk__14854_14864 = G__14878;
count__14855_14865 = G__14879;
i__14856_14866 = G__14880;
continue;
} else {
var vec__14860_14881 = cljs.core.first(seq__14853_14875__$1);
var name_14882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14860_14881,(0),null);
var value_14883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14860_14881,(1),null);
domina.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_14882,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value_14883], 0));

var G__14884 = cljs.core.next(seq__14853_14875__$1);
var G__14885 = null;
var G__14886 = (0);
var G__14887 = (0);
seq__14853_14863 = G__14884;
chunk__14854_14864 = G__14885;
count__14855_14865 = G__14886;
i__14856_14866 = G__14887;
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
var G__14888 = domina.core.single_node(content);
var G__14889 = class$;
return goog.dom.classes.has(G__14888,G__14889);
});
/**
 * Adds the specified CSS class to each node in the content.
 */
domina.core.add_class_BANG_ = (function domina$core$add_class_BANG_(content,class$){
var seq__14890_14894 = cljs.core.seq(domina.core.nodes(content));
var chunk__14891_14895 = null;
var count__14892_14896 = (0);
var i__14893_14897 = (0);
while(true){
if((i__14893_14897 < count__14892_14896)){
var node_14898 = chunk__14891_14895.cljs$core$IIndexed$_nth$arity$2(null,i__14893_14897);
goog.dom.classes.add(node_14898,class$);

var G__14899 = seq__14890_14894;
var G__14900 = chunk__14891_14895;
var G__14901 = count__14892_14896;
var G__14902 = (i__14893_14897 + (1));
seq__14890_14894 = G__14899;
chunk__14891_14895 = G__14900;
count__14892_14896 = G__14901;
i__14893_14897 = G__14902;
continue;
} else {
var temp__5457__auto___14903 = cljs.core.seq(seq__14890_14894);
if(temp__5457__auto___14903){
var seq__14890_14904__$1 = temp__5457__auto___14903;
if(cljs.core.chunked_seq_QMARK_(seq__14890_14904__$1)){
var c__9797__auto___14905 = cljs.core.chunk_first(seq__14890_14904__$1);
var G__14906 = cljs.core.chunk_rest(seq__14890_14904__$1);
var G__14907 = c__9797__auto___14905;
var G__14908 = cljs.core.count(c__9797__auto___14905);
var G__14909 = (0);
seq__14890_14894 = G__14906;
chunk__14891_14895 = G__14907;
count__14892_14896 = G__14908;
i__14893_14897 = G__14909;
continue;
} else {
var node_14910 = cljs.core.first(seq__14890_14904__$1);
goog.dom.classes.add(node_14910,class$);

var G__14911 = cljs.core.next(seq__14890_14904__$1);
var G__14912 = null;
var G__14913 = (0);
var G__14914 = (0);
seq__14890_14894 = G__14911;
chunk__14891_14895 = G__14912;
count__14892_14896 = G__14913;
i__14893_14897 = G__14914;
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
var seq__14915_14919 = cljs.core.seq(domina.core.nodes(content));
var chunk__14916_14920 = null;
var count__14917_14921 = (0);
var i__14918_14922 = (0);
while(true){
if((i__14918_14922 < count__14917_14921)){
var node_14923 = chunk__14916_14920.cljs$core$IIndexed$_nth$arity$2(null,i__14918_14922);
goog.dom.classes.remove(node_14923,class$);

var G__14924 = seq__14915_14919;
var G__14925 = chunk__14916_14920;
var G__14926 = count__14917_14921;
var G__14927 = (i__14918_14922 + (1));
seq__14915_14919 = G__14924;
chunk__14916_14920 = G__14925;
count__14917_14921 = G__14926;
i__14918_14922 = G__14927;
continue;
} else {
var temp__5457__auto___14928 = cljs.core.seq(seq__14915_14919);
if(temp__5457__auto___14928){
var seq__14915_14929__$1 = temp__5457__auto___14928;
if(cljs.core.chunked_seq_QMARK_(seq__14915_14929__$1)){
var c__9797__auto___14930 = cljs.core.chunk_first(seq__14915_14929__$1);
var G__14931 = cljs.core.chunk_rest(seq__14915_14929__$1);
var G__14932 = c__9797__auto___14930;
var G__14933 = cljs.core.count(c__9797__auto___14930);
var G__14934 = (0);
seq__14915_14919 = G__14931;
chunk__14916_14920 = G__14932;
count__14917_14921 = G__14933;
i__14918_14922 = G__14934;
continue;
} else {
var node_14935 = cljs.core.first(seq__14915_14929__$1);
goog.dom.classes.remove(node_14935,class$);

var G__14936 = cljs.core.next(seq__14915_14929__$1);
var G__14937 = null;
var G__14938 = (0);
var G__14939 = (0);
seq__14915_14919 = G__14936;
chunk__14916_14920 = G__14937;
count__14917_14921 = G__14938;
i__14918_14922 = G__14939;
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
var seq__14940_14944 = cljs.core.seq(domina.core.nodes(content));
var chunk__14941_14945 = null;
var count__14942_14946 = (0);
var i__14943_14947 = (0);
while(true){
if((i__14943_14947 < count__14942_14946)){
var node_14948 = chunk__14941_14945.cljs$core$IIndexed$_nth$arity$2(null,i__14943_14947);
goog.dom.classes.toggle(node_14948,class$);

var G__14949 = seq__14940_14944;
var G__14950 = chunk__14941_14945;
var G__14951 = count__14942_14946;
var G__14952 = (i__14943_14947 + (1));
seq__14940_14944 = G__14949;
chunk__14941_14945 = G__14950;
count__14942_14946 = G__14951;
i__14943_14947 = G__14952;
continue;
} else {
var temp__5457__auto___14953 = cljs.core.seq(seq__14940_14944);
if(temp__5457__auto___14953){
var seq__14940_14954__$1 = temp__5457__auto___14953;
if(cljs.core.chunked_seq_QMARK_(seq__14940_14954__$1)){
var c__9797__auto___14955 = cljs.core.chunk_first(seq__14940_14954__$1);
var G__14956 = cljs.core.chunk_rest(seq__14940_14954__$1);
var G__14957 = c__9797__auto___14955;
var G__14958 = cljs.core.count(c__9797__auto___14955);
var G__14959 = (0);
seq__14940_14944 = G__14956;
chunk__14941_14945 = G__14957;
count__14942_14946 = G__14958;
i__14943_14947 = G__14959;
continue;
} else {
var node_14960 = cljs.core.first(seq__14940_14954__$1);
goog.dom.classes.toggle(node_14960,class$);

var G__14961 = cljs.core.next(seq__14940_14954__$1);
var G__14962 = null;
var G__14963 = (0);
var G__14964 = (0);
seq__14940_14944 = G__14961;
chunk__14941_14945 = G__14962;
count__14942_14946 = G__14963;
i__14943_14947 = G__14964;
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
return cljs.core.seq((function (){var G__14965 = domina.core.single_node(content);
return goog.dom.classes.get(G__14965);
})());
});
/**
 * Sets the class attribute of the content nodes to classes, which can
 *   be either a class attribute string or a seq of classname strings.
 */
domina.core.set_classes_BANG_ = (function domina$core$set_classes_BANG_(content,classes){
var classes_14970__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);
var seq__14966_14971 = cljs.core.seq(domina.core.nodes(content));
var chunk__14967_14972 = null;
var count__14968_14973 = (0);
var i__14969_14974 = (0);
while(true){
if((i__14969_14974 < count__14968_14973)){
var node_14975 = chunk__14967_14972.cljs$core$IIndexed$_nth$arity$2(null,i__14969_14974);
goog.dom.classes.set(node_14975,classes_14970__$1);

var G__14976 = seq__14966_14971;
var G__14977 = chunk__14967_14972;
var G__14978 = count__14968_14973;
var G__14979 = (i__14969_14974 + (1));
seq__14966_14971 = G__14976;
chunk__14967_14972 = G__14977;
count__14968_14973 = G__14978;
i__14969_14974 = G__14979;
continue;
} else {
var temp__5457__auto___14980 = cljs.core.seq(seq__14966_14971);
if(temp__5457__auto___14980){
var seq__14966_14981__$1 = temp__5457__auto___14980;
if(cljs.core.chunked_seq_QMARK_(seq__14966_14981__$1)){
var c__9797__auto___14982 = cljs.core.chunk_first(seq__14966_14981__$1);
var G__14983 = cljs.core.chunk_rest(seq__14966_14981__$1);
var G__14984 = c__9797__auto___14982;
var G__14985 = cljs.core.count(c__9797__auto___14982);
var G__14986 = (0);
seq__14966_14971 = G__14983;
chunk__14967_14972 = G__14984;
count__14968_14973 = G__14985;
i__14969_14974 = G__14986;
continue;
} else {
var node_14987 = cljs.core.first(seq__14966_14981__$1);
goog.dom.classes.set(node_14987,classes_14970__$1);

var G__14988 = cljs.core.next(seq__14966_14981__$1);
var G__14989 = null;
var G__14990 = (0);
var G__14991 = (0);
seq__14966_14971 = G__14988;
chunk__14967_14972 = G__14989;
count__14968_14973 = G__14990;
i__14969_14974 = G__14991;
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
var G__14992 = (function (){var G__14993 = domina.core.single_node(content);
return goog.dom.getTextContent(G__14993);
})();
return goog.string.trim(G__14992);
});
/**
 * Sets the text value of all the nodes in the given content.
 */
domina.core.set_text_BANG_ = (function domina$core$set_text_BANG_(content,value){
var seq__14994_14998 = cljs.core.seq(domina.core.nodes(content));
var chunk__14995_14999 = null;
var count__14996_15000 = (0);
var i__14997_15001 = (0);
while(true){
if((i__14997_15001 < count__14996_15000)){
var node_15002 = chunk__14995_14999.cljs$core$IIndexed$_nth$arity$2(null,i__14997_15001);
goog.dom.setTextContent(node_15002,value);

var G__15003 = seq__14994_14998;
var G__15004 = chunk__14995_14999;
var G__15005 = count__14996_15000;
var G__15006 = (i__14997_15001 + (1));
seq__14994_14998 = G__15003;
chunk__14995_14999 = G__15004;
count__14996_15000 = G__15005;
i__14997_15001 = G__15006;
continue;
} else {
var temp__5457__auto___15007 = cljs.core.seq(seq__14994_14998);
if(temp__5457__auto___15007){
var seq__14994_15008__$1 = temp__5457__auto___15007;
if(cljs.core.chunked_seq_QMARK_(seq__14994_15008__$1)){
var c__9797__auto___15009 = cljs.core.chunk_first(seq__14994_15008__$1);
var G__15010 = cljs.core.chunk_rest(seq__14994_15008__$1);
var G__15011 = c__9797__auto___15009;
var G__15012 = cljs.core.count(c__9797__auto___15009);
var G__15013 = (0);
seq__14994_14998 = G__15010;
chunk__14995_14999 = G__15011;
count__14996_15000 = G__15012;
i__14997_15001 = G__15013;
continue;
} else {
var node_15014 = cljs.core.first(seq__14994_15008__$1);
goog.dom.setTextContent(node_15014,value);

var G__15015 = cljs.core.next(seq__14994_15008__$1);
var G__15016 = null;
var G__15017 = (0);
var G__15018 = (0);
seq__14994_14998 = G__15015;
chunk__14995_14999 = G__15016;
count__14996_15000 = G__15017;
i__14997_15001 = G__15018;
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
var G__15019 = domina.core.single_node(content);
return goog.dom.forms.getValue(G__15019);
});
/**
 * Sets the value of all the nodes (presumably form fields) in the given content.
 */
domina.core.set_value_BANG_ = (function domina$core$set_value_BANG_(content,value){
var seq__15020_15024 = cljs.core.seq(domina.core.nodes(content));
var chunk__15021_15025 = null;
var count__15022_15026 = (0);
var i__15023_15027 = (0);
while(true){
if((i__15023_15027 < count__15022_15026)){
var node_15028 = chunk__15021_15025.cljs$core$IIndexed$_nth$arity$2(null,i__15023_15027);
goog.dom.forms.setValue(node_15028,value);

var G__15029 = seq__15020_15024;
var G__15030 = chunk__15021_15025;
var G__15031 = count__15022_15026;
var G__15032 = (i__15023_15027 + (1));
seq__15020_15024 = G__15029;
chunk__15021_15025 = G__15030;
count__15022_15026 = G__15031;
i__15023_15027 = G__15032;
continue;
} else {
var temp__5457__auto___15033 = cljs.core.seq(seq__15020_15024);
if(temp__5457__auto___15033){
var seq__15020_15034__$1 = temp__5457__auto___15033;
if(cljs.core.chunked_seq_QMARK_(seq__15020_15034__$1)){
var c__9797__auto___15035 = cljs.core.chunk_first(seq__15020_15034__$1);
var G__15036 = cljs.core.chunk_rest(seq__15020_15034__$1);
var G__15037 = c__9797__auto___15035;
var G__15038 = cljs.core.count(c__9797__auto___15035);
var G__15039 = (0);
seq__15020_15024 = G__15036;
chunk__15021_15025 = G__15037;
count__15022_15026 = G__15038;
i__15023_15027 = G__15039;
continue;
} else {
var node_15040 = cljs.core.first(seq__15020_15034__$1);
goog.dom.forms.setValue(node_15040,value);

var G__15041 = cljs.core.next(seq__15020_15034__$1);
var G__15042 = null;
var G__15043 = (0);
var G__15044 = (0);
seq__15020_15024 = G__15041;
chunk__15021_15025 = G__15042;
count__15022_15026 = G__15043;
i__15023_15027 = G__15044;
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
var value_15050 = clojure.string.replace(html_string,domina.core.re_xhtml_tag,"<$1></$2>");
try{var seq__15046_15051 = cljs.core.seq(domina.core.nodes(content));
var chunk__15047_15052 = null;
var count__15048_15053 = (0);
var i__15049_15054 = (0);
while(true){
if((i__15049_15054 < count__15048_15053)){
var node_15055 = chunk__15047_15052.cljs$core$IIndexed$_nth$arity$2(null,i__15049_15054);
node_15055.innerHTML = value_15050;

var G__15056 = seq__15046_15051;
var G__15057 = chunk__15047_15052;
var G__15058 = count__15048_15053;
var G__15059 = (i__15049_15054 + (1));
seq__15046_15051 = G__15056;
chunk__15047_15052 = G__15057;
count__15048_15053 = G__15058;
i__15049_15054 = G__15059;
continue;
} else {
var temp__5457__auto___15060 = cljs.core.seq(seq__15046_15051);
if(temp__5457__auto___15060){
var seq__15046_15061__$1 = temp__5457__auto___15060;
if(cljs.core.chunked_seq_QMARK_(seq__15046_15061__$1)){
var c__9797__auto___15062 = cljs.core.chunk_first(seq__15046_15061__$1);
var G__15063 = cljs.core.chunk_rest(seq__15046_15061__$1);
var G__15064 = c__9797__auto___15062;
var G__15065 = cljs.core.count(c__9797__auto___15062);
var G__15066 = (0);
seq__15046_15051 = G__15063;
chunk__15047_15052 = G__15064;
count__15048_15053 = G__15065;
i__15049_15054 = G__15066;
continue;
} else {
var node_15067 = cljs.core.first(seq__15046_15061__$1);
node_15067.innerHTML = value_15050;

var G__15068 = cljs.core.next(seq__15046_15061__$1);
var G__15069 = null;
var G__15070 = (0);
var G__15071 = (0);
seq__15046_15051 = G__15068;
chunk__15047_15052 = G__15069;
count__15048_15053 = G__15070;
i__15049_15054 = G__15071;
continue;
}
} else {
}
}
break;
}
}catch (e15045){if((e15045 instanceof Error)){
var e_15072 = e15045;
domina.core.replace_children_BANG_(content,value_15050);
} else {
throw e15045;

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
var G__15074 = arguments.length;
switch (G__15074) {
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
var seq__15078_15084 = cljs.core.seq(children);
var chunk__15079_15085 = null;
var count__15080_15086 = (0);
var i__15081_15087 = (0);
while(true){
if((i__15081_15087 < count__15080_15086)){
var child_15088 = chunk__15079_15085.cljs$core$IIndexed$_nth$arity$2(null,i__15081_15087);
frag.appendChild(child_15088);

var G__15089 = seq__15078_15084;
var G__15090 = chunk__15079_15085;
var G__15091 = count__15080_15086;
var G__15092 = (i__15081_15087 + (1));
seq__15078_15084 = G__15089;
chunk__15079_15085 = G__15090;
count__15080_15086 = G__15091;
i__15081_15087 = G__15092;
continue;
} else {
var temp__5457__auto___15093 = cljs.core.seq(seq__15078_15084);
if(temp__5457__auto___15093){
var seq__15078_15094__$1 = temp__5457__auto___15093;
if(cljs.core.chunked_seq_QMARK_(seq__15078_15094__$1)){
var c__9797__auto___15095 = cljs.core.chunk_first(seq__15078_15094__$1);
var G__15096 = cljs.core.chunk_rest(seq__15078_15094__$1);
var G__15097 = c__9797__auto___15095;
var G__15098 = cljs.core.count(c__9797__auto___15095);
var G__15099 = (0);
seq__15078_15084 = G__15096;
chunk__15079_15085 = G__15097;
count__15080_15086 = G__15098;
i__15081_15087 = G__15099;
continue;
} else {
var child_15100 = cljs.core.first(seq__15078_15094__$1);
frag.appendChild(child_15100);

var G__15101 = cljs.core.next(seq__15078_15094__$1);
var G__15102 = null;
var G__15103 = (0);
var G__15104 = (0);
seq__15078_15084 = G__15101;
chunk__15079_15085 = G__15102;
count__15080_15086 = G__15103;
i__15081_15087 = G__15104;
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
var G__15082_15105 = cljs.core.first(parents);
var G__15083_15106 = first_child;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15082_15105,G__15083_15106) : f.call(null,G__15082_15105,G__15083_15106));

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (parents,children,first_child,other_children){
return (function (p1__15076_SHARP_,p2__15077_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__15076_SHARP_,p2__15077_SHARP_) : f.call(null,p1__15076_SHARP_,p2__15077_SHARP_));
});})(parents,children,first_child,other_children))
,cljs.core.rest(parents),other_children));
} else {
return null;
}
});
domina.core.lazy_nl_via_item = (function domina$core$lazy_nl_via_item(var_args){
var G__15108 = arguments.length;
switch (G__15108) {
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
var G__15111 = arguments.length;
switch (G__15111) {
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

var G__15114_15128 = domina.core.nodes;
var G__15115_15129 = "string";
var G__15116_15130 = ((function (G__15114_15128,G__15115_15129){
return (function (s){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(domina.core.nodes(domina.core.string_to_dom(s)));
});})(G__15114_15128,G__15115_15129))
;
goog.object.set(G__15114_15128,G__15115_15129,G__15116_15130);

var G__15117_15131 = domina.core.single_node;
var G__15118_15132 = "string";
var G__15119_15133 = ((function (G__15117_15131,G__15118_15132){
return (function (s){
return domina.core.single_node(domina.core.string_to_dom(s));
});})(G__15117_15131,G__15118_15132))
;
goog.object.set(G__15117_15131,G__15118_15132,G__15119_15133);

goog.object.set(domina.core.DomContent,"_",true);

var G__15120_15134 = domina.core.nodes;
var G__15121_15135 = "_";
var G__15122_15136 = ((function (G__15120_15134,G__15121_15135){
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
});})(G__15120_15134,G__15121_15135))
;
goog.object.set(G__15120_15134,G__15121_15135,G__15122_15136);

var G__15124_15137 = domina.core.single_node;
var G__15125_15138 = "_";
var G__15126_15139 = ((function (G__15124_15137,G__15125_15138){
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
});})(G__15124_15137,G__15125_15138))
;
goog.object.set(G__15124_15137,G__15125_15138,G__15126_15139);
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
