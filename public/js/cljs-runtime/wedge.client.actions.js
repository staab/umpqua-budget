goog.provide('wedge.client.actions');
goog.require('cljs.core');
goog.require('wedge.client.state');
goog.require('wedge.client.ws');
wedge.client.actions.now = (function wedge$client$actions$now(){
return (new Date()).valueOf();
});
wedge.client.actions.start_BANG_ = (function wedge$client$actions$start_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11329 = arguments.length;
var i__4532__auto___11330 = (0);
while(true){
if((i__4532__auto___11330 < len__4531__auto___11329)){
args__4534__auto__.push((arguments[i__4532__auto___11330]));

var G__11331 = (i__4532__auto___11330 + (1));
i__4532__auto___11330 = G__11331;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return wedge.client.actions.start_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

wedge.client.actions.start_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cur,args){
var map__11327 = cljs.core.deref(cur);
var map__11327__$1 = ((((!((map__11327 == null)))?(((((map__11327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11327):map__11327);
var last_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11327__$1,new cljs.core.Keyword(null,"last-load","last-load",-702317722));
if(((function (){var or__3949__auto__ = last_load;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (0);
}
})() < (wedge.client.actions.now() - (5000)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cur,cljs.core.assoc,new cljs.core.Keyword(null,"last-load","last-load",-702317722),wedge.client.actions.now());

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wedge.client.ws.send_BANG_,args);
} else {
return null;
}
});

wedge.client.actions.start_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
wedge.client.actions.start_BANG_.cljs$lang$applyTo = (function (seq11325){
var G__11326 = cljs.core.first(seq11325);
var seq11325__$1 = cljs.core.next(seq11325);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11326,seq11325__$1);
});

wedge.client.actions.resolve_BANG_ = (function wedge$client$actions$resolve_BANG_(cur,value){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cur,cljs.core.assoc,new cljs.core.Keyword(null,"last-load","last-load",-702317722),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"error","error",-978969032),null], 0));
});
wedge.client.actions.reject_BANG_ = (function wedge$client$actions$reject_BANG_(cur,error){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cur,cljs.core.assoc,new cljs.core.Keyword(null,"last-load","last-load",-702317722),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"error","error",-978969032),error], 0));
});
wedge.client.actions.load_transactions_BANG_ = (function wedge$client$actions$load_transactions_BANG_(){
return wedge.client.actions.start_BANG_.cljs$core$IFn$_invoke$arity$variadic(wedge.client.state.transactions,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"load-transactions","load-transactions",-948535521),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"session-id","session-id",-1147060351),cljs.core.deref(wedge.client.state.session_id)], null)], 0));
});
wedge.client.actions.create_session_BANG_ = (function wedge$client$actions$create_session_BANG_(v){
return wedge.client.ws.send_BANG_(new cljs.core.Keyword(null,"create-session","create-session",162667467),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"public-token","public-token",-1760437177),v], null));
});
wedge.client.actions.link_account_BANG_ = (function wedge$client$actions$link_account_BANG_(){
return wedge.client.actions.plaid_handler.open();
});
wedge.client.ws.handle_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"session-created","session-created",-959598484),(function (p__11332){
var map__11333 = p__11332;
var map__11333__$1 = ((((!((map__11333 == null)))?(((((map__11333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11333):map__11333);
var payload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11333__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(wedge.client.state.state,cljs.core.merge,payload);

return wedge.client.state.save_state_BANG_();
}));
wedge.client.ws.handle_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"transactions-loaded","transactions-loaded",744186968),(function (p__11335){
var map__11336 = p__11335;
var map__11336__$1 = ((((!((map__11336 == null)))?(((((map__11336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11336):map__11336);
var payload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11336__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(wedge.client.state.transactions,cljs.core.assoc,new cljs.core.Keyword(null,"value","value",305978217),payload,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"last-load","last-load",-702317722),null], 0));
}));
wedge.client.actions.plaid_config = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"clientName","clientName",1574989727),"Budgie",new cljs.core.Keyword(null,"env","env",-1815813235),"sandbox",new cljs.core.Keyword(null,"key","key",-1516042587),"10e3761c1655ff33ff9c5f410122ba",new cljs.core.Keyword(null,"product","product",1363474257),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["transactions"], null),new cljs.core.Keyword(null,"webhook","webhook",-860093016),"https://wedge.herokuapp.com",new cljs.core.Keyword(null,"onSuccess","onSuccess",-1405872369),wedge.client.actions.create_session_BANG_], null);
wedge.client.actions.plaid_handler = window.Plaid.create(cljs.core.clj__GT_js(wedge.client.actions.plaid_config));

//# sourceMappingURL=wedge.client.actions.js.map
