goog.provide('wedge.client.ws');
goog.require('cljs.core');
goog.require('cljs.reader');
wedge.client.ws.ws = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
wedge.client.ws.queue = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
wedge.client.ws.send_BANG_ = (function wedge$client$ws$send_BANG_(type,payload){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(wedge.client.ws.queue,(function (messages){
var all_messages = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(messages,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"payload","payload",-383036092),payload], null)], 0)));
if(cljs.core.truth_(cljs.core.deref(wedge.client.ws.ws))){
cljs.core.run_BANG_(((function (all_messages){
return (function (p1__10763_SHARP_){
return cljs.core.deref(wedge.client.ws.ws).send(p1__10763_SHARP_);
});})(all_messages))
,all_messages);

return cljs.core.PersistentVector.EMPTY;
} else {
return messages;
}
}));
});
if((typeof wedge !== 'undefined') && (typeof wedge.client !== 'undefined') && (typeof wedge.client.ws !== 'undefined') && (typeof wedge.client.ws.handle_message !== 'undefined')){
} else {
wedge.client.ws.handle_message = (function (){var method_table__4414__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("wedge.client.ws","handle-message"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
wedge.client.ws.on_message = (function wedge$client$ws$on_message(evt){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Handling message",evt.data], 0));

var G__10779 = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(evt.data);
return (wedge.client.ws.handle_message.cljs$core$IFn$_invoke$arity$1 ? wedge.client.ws.handle_message.cljs$core$IFn$_invoke$arity$1(G__10779) : wedge.client.ws.handle_message.call(null,G__10779));
});
wedge.client.ws.start_ws_BANG_ = (function wedge$client$ws$start_ws_BANG_(){
var temp__5457__auto___10780 = cljs.core.deref(wedge.client.ws.ws);
if(cljs.core.truth_(temp__5457__auto___10780)){
var old_ws_10781 = temp__5457__auto___10780;
old_ws_10781.close();
} else {
}

var socket = (new WebSocket("ws://localhost:5000"));
socket.addEventListener("open",((function (socket){
return (function (){
return cljs.core.reset_BANG_(wedge.client.ws.ws,socket);
});})(socket))
);

socket.addEventListener("message",wedge.client.ws.on_message);

return socket.addEventListener("close",((function (socket){
return (function (){
return cljs.core.reset_BANG_(wedge.client.ws.ws,null);
});})(socket))
);
});
setInterval((function (){
if((cljs.core.deref(wedge.client.ws.ws) == null)){
return wedge.client.ws.start_ws_BANG_();
} else {
return null;
}
}),(1000));

//# sourceMappingURL=wedge.client.ws.js.map
