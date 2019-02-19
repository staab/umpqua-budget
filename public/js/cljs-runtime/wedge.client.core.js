goog.provide('wedge.client.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('wedge.client.ws');
goog.require('wedge.client.state');
goog.require('wedge.client.components');
cljs.core.enable_console_print_BANG_();
wedge.client.core.start = (function wedge$client$core$start(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wedge.client.components.root], null),document.getElementById("app"));
});
wedge.client.core.init = (function wedge$client$core$init(){
wedge.client.ws.start_ws_BANG_();

wedge.client.state.load_state_BANG_();

return wedge.client.core.start();
});
goog.exportSymbol('wedge.client.core.init', wedge.client.core.init);
wedge.client.core.stop = (function wedge$client$core$stop(){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["stop"], 0));
});

//# sourceMappingURL=wedge.client.core.js.map
