goog.provide('wedge.client.actions');
goog.require('cljs.core');
goog.require('wedge.client.state');
goog.require('wedge.client.ws');
wedge.client.actions.now = (function wedge$client$actions$now(){
return (new Date()).valueOf();
});
wedge.client.actions.start_BANG_ = (function wedge$client$actions$start_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36507 = arguments.length;
var i__4731__auto___36508 = (0);
while(true){
if((i__4731__auto___36508 < len__4730__auto___36507)){
args__4736__auto__.push((arguments[i__4731__auto___36508]));

var G__36509 = (i__4731__auto___36508 + (1));
i__4731__auto___36508 = G__36509;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return wedge.client.actions.start_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

wedge.client.actions.start_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cur,args){
var map__36494 = cljs.core.deref(cur);
var map__36494__$1 = (((((!((map__36494 == null))))?(((((map__36494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36494):map__36494);
var last_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36494__$1,new cljs.core.Keyword(null,"last-load","last-load",-702317722));
((function (){var or__4131__auto__ = last_load;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() < (wedge.client.actions.now() - (5000)));

if(((function (){var or__4131__auto__ = last_load;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
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
wedge.client.actions.start_BANG_.cljs$lang$applyTo = (function (seq36492){
var G__36493 = cljs.core.first(seq36492);
var seq36492__$1 = cljs.core.next(seq36492);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36493,seq36492__$1);
});

wedge.client.actions.resolve_BANG_ = (function wedge$client$actions$resolve_BANG_(cur,value){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cur,cljs.core.assoc,new cljs.core.Keyword(null,"last-load","last-load",-702317722),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"error","error",-978969032),null], 0));
});
wedge.client.actions.reject_BANG_ = (function wedge$client$actions$reject_BANG_(cur,error){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cur,cljs.core.assoc,new cljs.core.Keyword(null,"last-load","last-load",-702317722),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"error","error",-978969032),error], 0));
});
wedge.client.actions.toggle_sidebar_BANG_ = (function wedge$client$actions$toggle_sidebar_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(wedge.client.state.ui,cljs.core.update,new cljs.core.Keyword(null,"sidebar","sidebar",35784458),(function (p1__36498_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"open","open",-1763596448),p1__36498_SHARP_)){
return new cljs.core.Keyword(null,"closed","closed",-919675359);
} else {
return new cljs.core.Keyword(null,"open","open",-1763596448);
}
}));
});
wedge.client.actions.toggle_picker_BANG_ = (function wedge$client$actions$toggle_picker_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(wedge.client.state.ui,cljs.core.update,new cljs.core.Keyword(null,"picker","picker",-659389603),(function (p1__36499_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"open","open",-1763596448),p1__36499_SHARP_)){
return new cljs.core.Keyword(null,"closed","closed",-919675359);
} else {
return new cljs.core.Keyword(null,"open","open",-1763596448);
}
}));
});
wedge.client.actions.initialize_BANG_ = (function wedge$client$actions$initialize_BANG_(){
return wedge.client.actions.start_BANG_.cljs$core$IFn$_invoke$arity$variadic(wedge.client.state.db,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"initialize","initialize",609952913),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"session-id","session-id",-1147060351),cljs.core.deref(wedge.client.state.session_id)], null)], 0));
});
wedge.client.actions.create_session_BANG_ = (function wedge$client$actions$create_session_BANG_(v){
return wedge.client.ws.send_BANG_(new cljs.core.Keyword(null,"create-session","create-session",162667467),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"public-token","public-token",-1760437177),v], null));
});
wedge.client.actions.link_account_BANG_ = (function wedge$client$actions$link_account_BANG_(){
return wedge.client.actions.plaid_handler.open();
});
wedge.client.ws.handle_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"session-created","session-created",-959598484),(function (p__36500){
var map__36501 = p__36500;
var map__36501__$1 = (((((!((map__36501 == null))))?(((((map__36501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36501):map__36501);
var payload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36501__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(wedge.client.state.state,cljs.core.merge,payload);

return wedge.client.state.save_state_BANG_();
}));
wedge.client.ws.handle_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"initialized","initialized",-962017594),(function (p__36503){
var map__36504 = p__36503;
var map__36504__$1 = (((((!((map__36504 == null))))?(((((map__36504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36504):map__36504);
var payload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36504__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
return wedge.client.actions.resolve_BANG_(wedge.client.state.db,payload);
}));
wedge.client.actions.plaid_config = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"clientName","clientName",1574989727),"Budgie",new cljs.core.Keyword(null,"env","env",-1815813235),"sandbox",new cljs.core.Keyword(null,"key","key",-1516042587),"10e3761c1655ff33ff9c5f410122ba",new cljs.core.Keyword(null,"product","product",1363474257),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["transactions"], null),new cljs.core.Keyword(null,"webhook","webhook",-860093016),"https://wedge.herokuapp.com",new cljs.core.Keyword(null,"onSuccess","onSuccess",-1405872369),wedge.client.actions.create_session_BANG_], null);
wedge.client.actions.plaid_handler = window.Plaid.create(cljs.core.clj__GT_js(wedge.client.actions.plaid_config));

//# sourceMappingURL=wedge.client.actions.js.map
