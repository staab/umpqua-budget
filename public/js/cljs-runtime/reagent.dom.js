goog.provide('reagent.dom');
goog.require('cljs.core');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.imported !== 'undefined')){
} else {
reagent.dom.imported = null;
}
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__35947 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__35948 = true;
reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__35948;

try{var G__35949 = (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
var G__35950 = container;
var G__35951 = ((function (G__35949,G__35950,_STAR_always_update_STAR__orig_val__35947,_STAR_always_update_STAR__temp_val__35948){
return (function (){
var _STAR_always_update_STAR__orig_val__35952 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__35953 = false;
reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__35953;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__35952;
}});})(G__35949,G__35950,_STAR_always_update_STAR__orig_val__35947,_STAR_always_update_STAR__temp_val__35948))
;
return module$node_modules$react_dom$index.render(G__35949,G__35950,G__35951);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__35947;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__35958 = arguments.length;
switch (G__35958) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_();

var f = (function (){
return reagent.impl.template.as_element(((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__35959_35964 = cljs.core.seq(cljs.core.vals(cljs.core.deref(reagent.dom.roots)));
var chunk__35960_35965 = null;
var count__35961_35966 = (0);
var i__35962_35967 = (0);
while(true){
if((i__35962_35967 < count__35961_35966)){
var v_35968 = chunk__35960_35965.cljs$core$IIndexed$_nth$arity$2(null,i__35962_35967);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_35968);


var G__35969 = seq__35959_35964;
var G__35970 = chunk__35960_35965;
var G__35971 = count__35961_35966;
var G__35972 = (i__35962_35967 + (1));
seq__35959_35964 = G__35969;
chunk__35960_35965 = G__35970;
count__35961_35966 = G__35971;
i__35962_35967 = G__35972;
continue;
} else {
var temp__5720__auto___35973 = cljs.core.seq(seq__35959_35964);
if(temp__5720__auto___35973){
var seq__35959_35974__$1 = temp__5720__auto___35973;
if(cljs.core.chunked_seq_QMARK_(seq__35959_35974__$1)){
var c__4550__auto___35975 = cljs.core.chunk_first(seq__35959_35974__$1);
var G__35976 = cljs.core.chunk_rest(seq__35959_35974__$1);
var G__35977 = c__4550__auto___35975;
var G__35978 = cljs.core.count(c__4550__auto___35975);
var G__35979 = (0);
seq__35959_35964 = G__35976;
chunk__35960_35965 = G__35977;
count__35961_35966 = G__35978;
i__35962_35967 = G__35979;
continue;
} else {
var v_35980 = cljs.core.first(seq__35959_35974__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_35980);


var G__35981 = cljs.core.next(seq__35959_35974__$1);
var G__35982 = null;
var G__35983 = (0);
var G__35984 = (0);
seq__35959_35964 = G__35981;
chunk__35960_35965 = G__35982;
count__35961_35966 = G__35983;
i__35962_35967 = G__35984;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=reagent.dom.js.map
