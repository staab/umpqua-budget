goog.provide('budgie.actions');
goog.require('cljs.core');
goog.require('budgie.state');
goog.require('budgie.ws');
budgie.actions.load_transactions_BANG_ = (function budgie$actions$load_transactions_BANG_(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(budgie.state.transactions,cljs.core.assoc,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),(new Date()).valueOf());

return budgie.ws.send_BANG_(new cljs.core.Keyword(null,"load-transactions","load-transactions",-948535521),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"session-id","session-id",-1147060351),cljs.core.deref(budgie.state.session_id)], null));
});
budgie.actions.create_session_BANG_ = (function budgie$actions$create_session_BANG_(v){
return budgie.ws.send_BANG_(new cljs.core.Keyword(null,"create-session","create-session",162667467),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"public-token","public-token",-1760437177),v], null));
});
budgie.actions.link_account_BANG_ = (function budgie$actions$link_account_BANG_(){
return budgie.actions.plaid_handler.open();
});
budgie.ws.handle_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"session-created","session-created",-959598484),(function (p__11008){
var map__11009 = p__11008;
var map__11009__$1 = ((((!((map__11009 == null)))?(((((map__11009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11009.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11009):map__11009);
var payload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11009__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(budgie.state.state,cljs.core.merge,payload);

return budgie.state.save_state_BANG_();
}));
budgie.ws.handle_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"transactions-loaded","transactions-loaded",744186968),(function (p__11011){
var map__11012 = p__11011;
var map__11012__$1 = ((((!((map__11012 == null)))?(((((map__11012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11012.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11012):map__11012);
var payload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11012__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(budgie.state.transactions,cljs.core.merge,payload);
}));
budgie.actions.plaid_config = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"clientName","clientName",1574989727),"Budgie",new cljs.core.Keyword(null,"env","env",-1815813235),"sandbox",new cljs.core.Keyword(null,"key","key",-1516042587),"10e3761c1655ff33ff9c5f410122ba",new cljs.core.Keyword(null,"product","product",1363474257),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["transactions"], null),new cljs.core.Keyword(null,"webhook","webhook",-860093016),"https://budgie.herokuapp.com",new cljs.core.Keyword(null,"onSuccess","onSuccess",-1405872369),budgie.actions.create_session_BANG_], null);
budgie.actions.plaid_handler = window.Plaid.create(cljs.core.clj__GT_js(budgie.actions.plaid_config));

//# sourceMappingURL=budgie.actions.js.map
