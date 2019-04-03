goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__26757){
var map__26758 = p__26757;
var map__26758__$1 = (((((!((map__26758 == null))))?(((((map__26758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26758.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26758):map__26758);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26758__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26758__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26758__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26758__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4131__auto__ = child_of;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__26760_26798 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__26761_26799 = null;
var count__26762_26800 = (0);
var i__26763_26801 = (0);
while(true){
if((i__26763_26801 < count__26762_26800)){
var vec__26774_26805 = chunk__26761_26799.cljs$core$IIndexed$_nth$arity$2(null,i__26763_26801);
var k_26806 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26774_26805,(0),null);
var cb_26807 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26774_26805,(1),null);
try{var G__26778_26808 = cljs.core.deref(re_frame.trace.traces);
(cb_26807.cljs$core$IFn$_invoke$arity$1 ? cb_26807.cljs$core$IFn$_invoke$arity$1(G__26778_26808) : cb_26807.call(null,G__26778_26808));
}catch (e26777){var e_26809 = e26777;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_26806,"while storing",cljs.core.deref(re_frame.trace.traces),e_26809], 0));
}

var G__26810 = seq__26760_26798;
var G__26811 = chunk__26761_26799;
var G__26812 = count__26762_26800;
var G__26813 = (i__26763_26801 + (1));
seq__26760_26798 = G__26810;
chunk__26761_26799 = G__26811;
count__26762_26800 = G__26812;
i__26763_26801 = G__26813;
continue;
} else {
var temp__5720__auto___26817 = cljs.core.seq(seq__26760_26798);
if(temp__5720__auto___26817){
var seq__26760_26818__$1 = temp__5720__auto___26817;
if(cljs.core.chunked_seq_QMARK_(seq__26760_26818__$1)){
var c__4550__auto___26820 = cljs.core.chunk_first(seq__26760_26818__$1);
var G__26821 = cljs.core.chunk_rest(seq__26760_26818__$1);
var G__26822 = c__4550__auto___26820;
var G__26823 = cljs.core.count(c__4550__auto___26820);
var G__26824 = (0);
seq__26760_26798 = G__26821;
chunk__26761_26799 = G__26822;
count__26762_26800 = G__26823;
i__26763_26801 = G__26824;
continue;
} else {
var vec__26779_26826 = cljs.core.first(seq__26760_26818__$1);
var k_26827 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26779_26826,(0),null);
var cb_26828 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26779_26826,(1),null);
try{var G__26783_26832 = cljs.core.deref(re_frame.trace.traces);
(cb_26828.cljs$core$IFn$_invoke$arity$1 ? cb_26828.cljs$core$IFn$_invoke$arity$1(G__26783_26832) : cb_26828.call(null,G__26783_26832));
}catch (e26782){var e_26833 = e26782;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_26827,"while storing",cljs.core.deref(re_frame.trace.traces),e_26833], 0));
}

var G__26834 = cljs.core.next(seq__26760_26818__$1);
var G__26835 = null;
var G__26836 = (0);
var G__26837 = (0);
seq__26760_26798 = G__26834;
chunk__26761_26799 = G__26835;
count__26762_26800 = G__26836;
i__26763_26801 = G__26837;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
