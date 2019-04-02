goog.provide('wedge.client.core');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('wedge.client.ws');
goog.require('wedge.client.state');
goog.require('wedge.client.actions');
goog.require('wedge.client.components');
goog.require('goog.History');
goog.require('goog.history.EventType');
cljs.core.enable_console_print_BANG_();
var action__25414__auto___26059 = (function (params__25415__auto__){
if(cljs.core.map_QMARK_(params__25415__auto__)){
var map__26049 = params__25415__auto__;
var map__26049__$1 = (((((!((map__26049 == null))))?(((((map__26049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26049):map__26049);
return wedge.client.actions.set_page_BANG_(new cljs.core.Keyword(null,"dashboard","dashboard",-631747508));
} else {
if(cljs.core.vector_QMARK_(params__25415__auto__)){
var vec__26051 = params__25415__auto__;
return wedge.client.actions.set_page_BANG_(new cljs.core.Keyword(null,"dashboard","dashboard",-631747508));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__25414__auto___26059);

wedge.client.core.start = (function wedge$client$core$start(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wedge.client.components.root], null),document.getElementById("app"));
});
wedge.client.core.init = (function wedge$client$core$init(){
var G__26055_26060 = (new goog.History());
var G__26056_26061 = G__26055_26060;
var G__26057_26062 = goog.history.EventType.NAVIGATE;
var G__26058_26063 = ((function (G__26056_26061,G__26057_26062,G__26055_26060){
return (function (p1__26054_SHARP_){
return secretary.core.dispatch_BANG_(p1__26054_SHARP_.token);
});})(G__26056_26061,G__26057_26062,G__26055_26060))
;
goog.events.listen(G__26056_26061,G__26057_26062,G__26058_26063);

G__26055_26060.setEnabled(true);


return wedge.client.ws.start_ws_BANG_((function (){
wedge.client.state.load_state_BANG_();

return wedge.client.core.start();
}));
});
goog.exportSymbol('wedge.client.core.init', wedge.client.core.init);
wedge.client.core.stop = (function wedge$client$core$stop(){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["stop"], 0));
});

//# sourceMappingURL=wedge.client.core.js.map
