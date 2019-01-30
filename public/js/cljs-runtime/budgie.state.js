goog.provide('budgie.state');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('reagent.core');
budgie.state.async_state = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),null,new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null);
budgie.state.starting_state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"session-id","session-id",-1147060351),null,new cljs.core.Keyword(null,"transactions","transactions",-1425846118),budgie.state.async_state], null);
if((typeof budgie !== 'undefined') && (typeof budgie.state !== 'undefined') && (typeof budgie.state.state !== 'undefined')){
} else {
budgie.state.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(budgie.state.starting_state);
}
if((typeof budgie !== 'undefined') && (typeof budgie.state !== 'undefined') && (typeof budgie.state.session_id !== 'undefined')){
} else {
budgie.state.session_id = reagent.core.cursor(budgie.state.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session-id","session-id",-1147060351)], null));
}
if((typeof budgie !== 'undefined') && (typeof budgie.state !== 'undefined') && (typeof budgie.state.transactions !== 'undefined')){
} else {
budgie.state.transactions = reagent.core.cursor(budgie.state.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transactions","transactions",-1425846118)], null));
}
budgie.state.load_state_BANG_ = (function budgie$state$load_state_BANG_(){
var temp__5455__auto__ = window.localStorage.getItem("budgie");
if(cljs.core.truth_(temp__5455__auto__)){
var v = temp__5455__auto__;
return cljs.core.reset_BANG_(budgie.state.state,cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(v));
} else {
return null;
}
});
budgie.state.save_state_BANG_ = (function budgie$state$save_state_BANG_(){
return window.localStorage.setItem("budgie",cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(budgie.state.state)], 0)));
});

//# sourceMappingURL=budgie.state.js.map
