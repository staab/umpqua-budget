goog.provide('wedge.client.actions');
goog.require('cljs.core');
goog.require('wedge.client.state');
goog.require('wedge.client.ws');
wedge.client.actions.load_transactions_BANG_ = (function wedge$client$actions$load_transactions_BANG_(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(wedge.client.state.transactions,cljs.core.assoc,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),(new Date()).valueOf());

return wedge.client.ws.send_BANG_(new cljs.core.Keyword(null,"load-transactions","load-transactions",-948535521),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"session-id","session-id",-1147060351),cljs.core.deref(wedge.client.state.session_id)], null));
});
wedge.client.actions.create_session_BANG_ = (function wedge$client$actions$create_session_BANG_(v){
return wedge.client.ws.send_BANG_(new cljs.core.Keyword(null,"create-session","create-session",162667467),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"public-token","public-token",-1760437177),v], null));
});
wedge.client.actions.link_account_BANG_ = (function wedge$client$actions$link_account_BANG_(){
return wedge.client.actions.plaid_handler.open();
});
wedge.client.ws.handle_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"session-created","session-created",-959598484),(function (p__10782){
var map__10783 = p__10782;
var map__10783__$1 = ((((!((map__10783 == null)))?(((((map__10783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10783):map__10783);
var payload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10783__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(wedge.client.state.state,cljs.core.merge,payload);

return wedge.client.state.save_state_BANG_();
}));
wedge.client.ws.handle_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"transactions-loaded","transactions-loaded",744186968),(function (p__10785){
var map__10786 = p__10785;
var map__10786__$1 = ((((!((map__10786 == null)))?(((((map__10786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10786):map__10786);
var payload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10786__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(wedge.client.state.transactions,cljs.core.merge,payload);
}));
wedge.client.actions.plaid_config = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"clientName","clientName",1574989727),"Budgie",new cljs.core.Keyword(null,"env","env",-1815813235),"sandbox",new cljs.core.Keyword(null,"key","key",-1516042587),"10e3761c1655ff33ff9c5f410122ba",new cljs.core.Keyword(null,"product","product",1363474257),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["transactions"], null),new cljs.core.Keyword(null,"webhook","webhook",-860093016),"https://wedge.herokuapp.com",new cljs.core.Keyword(null,"onSuccess","onSuccess",-1405872369),wedge.client.actions.create_session_BANG_], null);
wedge.client.actions.plaid_handler = window.Plaid.create(cljs.core.clj__GT_js(wedge.client.actions.plaid_config));

//# sourceMappingURL=wedge.client.actions.js.map
