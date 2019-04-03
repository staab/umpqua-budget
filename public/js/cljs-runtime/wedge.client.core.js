goog.provide('wedge.client.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('wedge.client.ws');
goog.require('wedge.client.state');
goog.require('wedge.client.actions');
goog.require('wedge.client.components.core');
goog.require('wedge.client.components.utils');
cljs.core.enable_console_print_BANG_();
wedge.client.core.set_page_from_location_BANG_ = (function wedge$client$core$set_page_from_location_BANG_(location){
return wedge.client.actions.set_page_BANG_(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(location.pathname,(1))));
});
wedge.client.core.start = (function wedge$client$core$start(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wedge.client.components.core.root], null),document.getElementById("app"));
});
wedge.client.core.init = (function wedge$client$core$init(){
return wedge.client.ws.start_ws_BANG_((function (){
wedge.client.state.load_state_BANG_();

wedge.client.core.set_page_from_location_BANG_(location);

wedge.client.components.utils.history.listen(wedge.client.core.set_page_from_location_BANG_);

return wedge.client.core.start();
}));
});
goog.exportSymbol('wedge.client.core.init', wedge.client.core.init);
wedge.client.core.stop = (function wedge$client$core$stop(){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["stop"], 0));
});

//# sourceMappingURL=wedge.client.core.js.map
