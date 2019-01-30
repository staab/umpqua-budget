goog.provide('budgie.components');
goog.require('cljs.core');
goog.require('budgie.state');
goog.require('budgie.actions');
budgie.components.now = (function budgie$components$now(){
return (new Date()).valueOf();
});
budgie.components.transaction_list = (function budgie$components$transaction_list(){
var map__11064 = cljs.core.deref(budgie.state.transactions);
var map__11064__$1 = ((((!((map__11064 == null)))?(((((map__11064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11064.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11064):map__11064);
var loaded = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11064__$1,new cljs.core.Keyword(null,"loaded","loaded",-1246482293));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11064__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11064__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(((cljs.core.not(loaded)) || ((loaded < (budgie.components.now() - (5000)))))){
budgie.actions.load_transactions_BANG_();
} else {
}

if(cljs.core.truth_(loaded)){
return "Loading...";
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0));

return "good!";
}
});
budgie.components.login_page = (function budgie$components$login_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),budgie.actions.link_account_BANG_], null),"link account"], null);
});
budgie.components.dashboard = (function budgie$components$dashboard(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [budgie.components.transaction_list], null);
});
budgie.components.root = (function budgie$components$root(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(cljs.core.deref(budgie.state.session_id))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [budgie.components.dashboard], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [budgie.components.login_page], null))], null);
});

//# sourceMappingURL=budgie.components.js.map
