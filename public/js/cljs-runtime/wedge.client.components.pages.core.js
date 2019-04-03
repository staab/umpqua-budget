goog.provide('wedge.client.components.pages.core');
goog.require('cljs.core');
goog.require('wedge.client.state');
goog.require('wedge.client.components.pages.dashboard');
goog.require('wedge.client.components.pages.add_budget');
wedge.client.components.pages.core.page = (function wedge$client$components$pages$core$page(){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(wedge.client.state.page)], 0));

var G__25898 = cljs.core.deref(wedge.client.state.page);
var G__25898__$1 = (((G__25898 instanceof cljs.core.Keyword))?G__25898.fqn:null);
switch (G__25898__$1) {
case "budgets/new":
return wedge.client.components.pages.add_budget.add_budget();

break;
default:
return wedge.client.components.pages.dashboard.dashboard();

}
});

//# sourceMappingURL=wedge.client.components.pages.core.js.map
