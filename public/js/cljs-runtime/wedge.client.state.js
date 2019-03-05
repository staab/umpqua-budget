goog.provide('wedge.client.state');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('reagent.core');
wedge.client.state.async_state = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"last-load","last-load",-702317722),null,new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null);
wedge.client.state.starting_state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"session-id","session-id",-1147060351),null,new cljs.core.Keyword(null,"transactions","transactions",-1425846118),wedge.client.state.async_state], null);
if((typeof wedge !== 'undefined') && (typeof wedge.client !== 'undefined') && (typeof wedge.client.state !== 'undefined') && (typeof wedge.client.state.state !== 'undefined')){
} else {
wedge.client.state.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(wedge.client.state.starting_state);
}
if((typeof wedge !== 'undefined') && (typeof wedge.client !== 'undefined') && (typeof wedge.client.state !== 'undefined') && (typeof wedge.client.state.session_id !== 'undefined')){
} else {
wedge.client.state.session_id = reagent.core.cursor(wedge.client.state.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session-id","session-id",-1147060351)], null));
}
if((typeof wedge !== 'undefined') && (typeof wedge.client !== 'undefined') && (typeof wedge.client.state !== 'undefined') && (typeof wedge.client.state.transactions !== 'undefined')){
} else {
wedge.client.state.transactions = reagent.core.cursor(wedge.client.state.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transactions","transactions",-1425846118)], null));
}
wedge.client.state.load_state_BANG_ = (function wedge$client$state$load_state_BANG_(){
var temp__5455__auto__ = window.localStorage.getItem("wedge");
if(cljs.core.truth_(temp__5455__auto__)){
var v = temp__5455__auto__;
return cljs.core.reset_BANG_(wedge.client.state.state,cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(v));
} else {
return null;
}
});
wedge.client.state.save_state_BANG_ = (function wedge$client$state$save_state_BANG_(){
return localStorage.setItem("wedge",cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(wedge.client.state.state)], 0)));
});

//# sourceMappingURL=wedge.client.state.js.map
