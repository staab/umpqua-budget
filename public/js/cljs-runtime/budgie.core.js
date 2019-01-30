goog.provide('budgie.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('budgie.ws');
goog.require('budgie.state');
goog.require('budgie.components');
cljs.core.enable_console_print_BANG_();
budgie.core.start = (function budgie$core$start(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [budgie.components.root], null),document.getElementById("app"));
});
budgie.core.init = (function budgie$core$init(){
budgie.ws.start_ws_BANG_();

budgie.state.load_state_BANG_();

return budgie.core.start();
});
goog.exportSymbol('budgie.core.init', budgie.core.init);
budgie.core.stop = (function budgie$core$stop(){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["stop"], 0));
});

//# sourceMappingURL=budgie.core.js.map
