goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__26986 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__26987 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__26987;

try{try{var seq__26989 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__26990 = null;
var count__26991 = (0);
var i__26992 = (0);
while(true){
if((i__26992 < count__26991)){
var vec__27002 = chunk__26990.cljs$core$IIndexed$_nth$arity$2(null,i__26992);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27002,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27002,(1),null);
var temp__5718__auto___27060 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___27060)){
var effect_fn_27061 = temp__5718__auto___27060;
(effect_fn_27061.cljs$core$IFn$_invoke$arity$1 ? effect_fn_27061.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_27061.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__27062 = seq__26989;
var G__27063 = chunk__26990;
var G__27064 = count__26991;
var G__27065 = (i__26992 + (1));
seq__26989 = G__27062;
chunk__26990 = G__27063;
count__26991 = G__27064;
i__26992 = G__27065;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__26989);
if(temp__5720__auto__){
var seq__26989__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26989__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__26989__$1);
var G__27066 = cljs.core.chunk_rest(seq__26989__$1);
var G__27067 = c__4550__auto__;
var G__27068 = cljs.core.count(c__4550__auto__);
var G__27069 = (0);
seq__26989 = G__27066;
chunk__26990 = G__27067;
count__26991 = G__27068;
i__26992 = G__27069;
continue;
} else {
var vec__27005 = cljs.core.first(seq__26989__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27005,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27005,(1),null);
var temp__5718__auto___27070 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___27070)){
var effect_fn_27074 = temp__5718__auto___27070;
(effect_fn_27074.cljs$core$IFn$_invoke$arity$1 ? effect_fn_27074.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_27074.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__27075 = cljs.core.next(seq__26989__$1);
var G__27076 = null;
var G__27077 = (0);
var G__27078 = (0);
seq__26989 = G__27075;
chunk__26990 = G__27076;
count__26991 = G__27077;
i__26992 = G__27078;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__26737__auto___27079 = re_frame.interop.now();
var duration__26738__auto___27080 = (end__26737__auto___27079 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__26738__auto___27080,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__26737__auto___27079);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__26986;
}} else {
var seq__27010 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__27011 = null;
var count__27012 = (0);
var i__27013 = (0);
while(true){
if((i__27013 < count__27012)){
var vec__27022 = chunk__27011.cljs$core$IIndexed$_nth$arity$2(null,i__27013);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27022,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27022,(1),null);
var temp__5718__auto___27086 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___27086)){
var effect_fn_27087 = temp__5718__auto___27086;
(effect_fn_27087.cljs$core$IFn$_invoke$arity$1 ? effect_fn_27087.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_27087.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__27088 = seq__27010;
var G__27089 = chunk__27011;
var G__27090 = count__27012;
var G__27091 = (i__27013 + (1));
seq__27010 = G__27088;
chunk__27011 = G__27089;
count__27012 = G__27090;
i__27013 = G__27091;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__27010);
if(temp__5720__auto__){
var seq__27010__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27010__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__27010__$1);
var G__27092 = cljs.core.chunk_rest(seq__27010__$1);
var G__27093 = c__4550__auto__;
var G__27094 = cljs.core.count(c__4550__auto__);
var G__27095 = (0);
seq__27010 = G__27092;
chunk__27011 = G__27093;
count__27012 = G__27094;
i__27013 = G__27095;
continue;
} else {
var vec__27025 = cljs.core.first(seq__27010__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27025,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27025,(1),null);
var temp__5718__auto___27096 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___27096)){
var effect_fn_27097 = temp__5718__auto___27096;
(effect_fn_27097.cljs$core$IFn$_invoke$arity$1 ? effect_fn_27097.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_27097.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__27098 = cljs.core.next(seq__27010__$1);
var G__27099 = null;
var G__27100 = (0);
var G__27101 = (0);
seq__27010 = G__27098;
chunk__27011 = G__27099;
count__27012 = G__27100;
i__27013 = G__27101;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__27028 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__27029 = null;
var count__27030 = (0);
var i__27031 = (0);
while(true){
if((i__27031 < count__27030)){
var map__27040 = chunk__27029.cljs$core$IIndexed$_nth$arity$2(null,i__27031);
var map__27040__$1 = (((((!((map__27040 == null))))?(((((map__27040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27040.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27040):map__27040);
var effect = map__27040__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27040__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27040__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__27028,chunk__27029,count__27030,i__27031,map__27040,map__27040__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__27028,chunk__27029,count__27030,i__27031,map__27040,map__27040__$1,effect,ms,dispatch))
,ms);
}


var G__27102 = seq__27028;
var G__27103 = chunk__27029;
var G__27104 = count__27030;
var G__27105 = (i__27031 + (1));
seq__27028 = G__27102;
chunk__27029 = G__27103;
count__27030 = G__27104;
i__27031 = G__27105;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__27028);
if(temp__5720__auto__){
var seq__27028__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27028__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__27028__$1);
var G__27106 = cljs.core.chunk_rest(seq__27028__$1);
var G__27107 = c__4550__auto__;
var G__27108 = cljs.core.count(c__4550__auto__);
var G__27109 = (0);
seq__27028 = G__27106;
chunk__27029 = G__27107;
count__27030 = G__27108;
i__27031 = G__27109;
continue;
} else {
var map__27042 = cljs.core.first(seq__27028__$1);
var map__27042__$1 = (((((!((map__27042 == null))))?(((((map__27042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27042):map__27042);
var effect = map__27042__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27042__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27042__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__27028,chunk__27029,count__27030,i__27031,map__27042,map__27042__$1,effect,ms,dispatch,seq__27028__$1,temp__5720__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__27028,chunk__27029,count__27030,i__27031,map__27042,map__27042__$1,effect,ms,dispatch,seq__27028__$1,temp__5720__auto__))
,ms);
}


var G__27110 = cljs.core.next(seq__27028__$1);
var G__27111 = null;
var G__27112 = (0);
var G__27113 = (0);
seq__27028 = G__27110;
chunk__27029 = G__27111;
count__27030 = G__27112;
i__27031 = G__27113;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value], 0));
} else {
var seq__27046 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__27047 = null;
var count__27048 = (0);
var i__27049 = (0);
while(true){
if((i__27049 < count__27048)){
var event = chunk__27047.cljs$core$IIndexed$_nth$arity$2(null,i__27049);
re_frame.router.dispatch(event);


var G__27119 = seq__27046;
var G__27120 = chunk__27047;
var G__27121 = count__27048;
var G__27122 = (i__27049 + (1));
seq__27046 = G__27119;
chunk__27047 = G__27120;
count__27048 = G__27121;
i__27049 = G__27122;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__27046);
if(temp__5720__auto__){
var seq__27046__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27046__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__27046__$1);
var G__27123 = cljs.core.chunk_rest(seq__27046__$1);
var G__27124 = c__4550__auto__;
var G__27125 = cljs.core.count(c__4550__auto__);
var G__27126 = (0);
seq__27046 = G__27123;
chunk__27047 = G__27124;
count__27048 = G__27125;
i__27049 = G__27126;
continue;
} else {
var event = cljs.core.first(seq__27046__$1);
re_frame.router.dispatch(event);


var G__27127 = cljs.core.next(seq__27046__$1);
var G__27128 = null;
var G__27129 = (0);
var G__27130 = (0);
seq__27046 = G__27127;
chunk__27047 = G__27128;
count__27048 = G__27129;
i__27049 = G__27130;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__27053 = cljs.core.seq(value);
var chunk__27054 = null;
var count__27055 = (0);
var i__27056 = (0);
while(true){
if((i__27056 < count__27055)){
var event = chunk__27054.cljs$core$IIndexed$_nth$arity$2(null,i__27056);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__27131 = seq__27053;
var G__27132 = chunk__27054;
var G__27133 = count__27055;
var G__27134 = (i__27056 + (1));
seq__27053 = G__27131;
chunk__27054 = G__27132;
count__27055 = G__27133;
i__27056 = G__27134;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__27053);
if(temp__5720__auto__){
var seq__27053__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27053__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__27053__$1);
var G__27135 = cljs.core.chunk_rest(seq__27053__$1);
var G__27136 = c__4550__auto__;
var G__27137 = cljs.core.count(c__4550__auto__);
var G__27138 = (0);
seq__27053 = G__27135;
chunk__27054 = G__27136;
count__27055 = G__27137;
i__27056 = G__27138;
continue;
} else {
var event = cljs.core.first(seq__27053__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__27139 = cljs.core.next(seq__27053__$1);
var G__27140 = null;
var G__27141 = (0);
var G__27142 = (0);
seq__27053 = G__27139;
chunk__27054 = G__27140;
count__27055 = G__27141;
i__27056 = G__27142;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
