goog.provide('wedge.client.state');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('reagent.core');
wedge.client.state.starting_state = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"session-id","session-id",-1147060351),null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"dashboard","dashboard",-631747508),new cljs.core.Keyword(null,"sidebar","sidebar",35784458),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null),new cljs.core.Keyword(null,"picker","picker",-659389603),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null),new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"last-load","last-load",-702317722),null,new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null)], null);
if((typeof wedge !== 'undefined') && (typeof wedge.client !== 'undefined') && (typeof wedge.client.state !== 'undefined') && (typeof wedge.client.state.state !== 'undefined')){
} else {
wedge.client.state.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(wedge.client.state.starting_state);
}
if((typeof wedge !== 'undefined') && (typeof wedge.client !== 'undefined') && (typeof wedge.client.state !== 'undefined') && (typeof wedge.client.state.session_id !== 'undefined')){
} else {
wedge.client.state.session_id = reagent.core.cursor(wedge.client.state.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session-id","session-id",-1147060351)], null));
}
if((typeof wedge !== 'undefined') && (typeof wedge.client !== 'undefined') && (typeof wedge.client.state !== 'undefined') && (typeof wedge.client.state.db !== 'undefined')){
} else {
wedge.client.state.db = reagent.core.cursor(wedge.client.state.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759)], null));
}
if((typeof wedge !== 'undefined') && (typeof wedge.client !== 'undefined') && (typeof wedge.client.state !== 'undefined') && (typeof wedge.client.state.page !== 'undefined')){
} else {
wedge.client.state.page = reagent.core.cursor(wedge.client.state.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397)], null));
}
if((typeof wedge !== 'undefined') && (typeof wedge.client !== 'undefined') && (typeof wedge.client.state !== 'undefined') && (typeof wedge.client.state.sidebar !== 'undefined')){
} else {
wedge.client.state.sidebar = reagent.core.cursor(wedge.client.state.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sidebar","sidebar",35784458)], null));
}
if((typeof wedge !== 'undefined') && (typeof wedge.client !== 'undefined') && (typeof wedge.client.state !== 'undefined') && (typeof wedge.client.state.picker !== 'undefined')){
} else {
wedge.client.state.picker = reagent.core.cursor(wedge.client.state.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"picker","picker",-659389603)], null));
}
wedge.client.state.load_state_BANG_ = (function wedge$client$state$load_state_BANG_(){
var temp__5718__auto__ = localStorage.getItem("wedge");
if(cljs.core.truth_(temp__5718__auto__)){
var v = temp__5718__auto__;
return cljs.core.reset_BANG_(wedge.client.state.state,cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(v));
} else {
return null;
}
});
wedge.client.state.save_state_BANG_ = (function wedge$client$state$save_state_BANG_(){
return localStorage.setItem("wedge",cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(wedge.client.state.state)], 0)));
});

//# sourceMappingURL=wedge.client.state.js.map
