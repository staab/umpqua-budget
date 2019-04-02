goog.provide('wedge.client.actions');
goog.require('cljs.core');
goog.require('wedge.client.state');
goog.require('wedge.client.ws');
wedge.client.actions.start_BANG_ = (function wedge$client$actions$start_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___28930 = arguments.length;
var i__4731__auto___28931 = (0);
while(true){
if((i__4731__auto___28931 < len__4730__auto___28930)){
args__4736__auto__.push((arguments[i__4731__auto___28931]));

var G__28932 = (i__4731__auto___28931 + (1));
i__4731__auto___28931 = G__28932;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return wedge.client.actions.start_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

wedge.client.actions.start_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cur,args){
var map__28922 = cljs.core.deref(cur);
var map__28922__$1 = (((((!((map__28922 == null))))?(((((map__28922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28922.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28922):map__28922);
var last_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28922__$1,new cljs.core.Keyword(null,"last-load","last-load",-702317722));
if(((function (){var or__4131__auto__ = last_load;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() < (cljs.core.deref(wedge.client.state.now) - (5000)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cur,cljs.core.assoc,new cljs.core.Keyword(null,"last-load","last-load",-702317722),cljs.core.deref(wedge.client.state.now));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wedge.client.ws.send_BANG_,args);
} else {
return null;
}
});

wedge.client.actions.start_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
wedge.client.actions.start_BANG_.cljs$lang$applyTo = (function (seq28920){
var G__28921 = cljs.core.first(seq28920);
var seq28920__$1 = cljs.core.next(seq28920);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28921,seq28920__$1);
});

wedge.client.actions.resolve_BANG_ = (function wedge$client$actions$resolve_BANG_(cur,value){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cur,cljs.core.assoc,new cljs.core.Keyword(null,"last-load","last-load",-702317722),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"error","error",-978969032),null], 0));
});
wedge.client.actions.reject_BANG_ = (function wedge$client$actions$reject_BANG_(cur,error){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cur,cljs.core.assoc,new cljs.core.Keyword(null,"last-load","last-load",-702317722),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"error","error",-978969032),error], 0));
});
wedge.client.actions.set_page_BANG_ = (function wedge$client$actions$set_page_BANG_(page){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(wedge.client.state.db,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),page);
});
wedge.client.actions.toggle_sidebar_BANG_ = (function wedge$client$actions$toggle_sidebar_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(wedge.client.state.db,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sidebar","sidebar",35784458),new cljs.core.Keyword(null,"open?","open?",1238443125)], null),cljs.core.not);
});
wedge.client.actions.toggle_picker_BANG_ = (function wedge$client$actions$toggle_picker_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(wedge.client.state.db,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"picker","picker",-659389603),new cljs.core.Keyword(null,"open?","open?",1238443125)], null),cljs.core.not);
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
wedge.client.ws.handle_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"session-created","session-created",-959598484),(function (p__28924){
var map__28925 = p__28924;
var map__28925__$1 = (((((!((map__28925 == null))))?(((((map__28925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28925):map__28925);
var payload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28925__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(wedge.client.state.state,cljs.core.merge,payload);

return wedge.client.state.save_state_BANG_();
}));
wedge.client.ws.handle_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"initialized","initialized",-962017594),(function (p__28927){
var map__28928 = p__28927;
var map__28928__$1 = (((((!((map__28928 == null))))?(((((map__28928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28928.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28928):map__28928);
var payload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28928__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
return wedge.client.actions.resolve_BANG_(wedge.client.state.db,payload);
}));
wedge.client.actions.plaid_config = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"clientName","clientName",1574989727),"Budgie",new cljs.core.Keyword(null,"env","env",-1815813235),"sandbox",new cljs.core.Keyword(null,"key","key",-1516042587),"10e3761c1655ff33ff9c5f410122ba",new cljs.core.Keyword(null,"product","product",1363474257),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["transactions"], null),new cljs.core.Keyword(null,"webhook","webhook",-860093016),"https://wedge.herokuapp.com",new cljs.core.Keyword(null,"onSuccess","onSuccess",-1405872369),wedge.client.actions.create_session_BANG_], null);
wedge.client.actions.plaid_handler = Plaid.create(cljs.core.clj__GT_js(wedge.client.actions.plaid_config));

//# sourceMappingURL=wedge.client.actions.js.map
