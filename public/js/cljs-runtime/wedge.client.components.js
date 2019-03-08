goog.provide('wedge.client.components');
goog.require('cljs.core');
goog.require('wedge.client.state');
goog.require('wedge.client.actions');
wedge.client.components.now = (function wedge$client$components$now(){
return (new Date()).valueOf();
});
wedge.client.components.dashboard_loading = (function wedge$client$components$dashboard_loading(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dashboard-loading","div.dashboard-loading",-1467147616),"loading"], null);
});
wedge.client.components.dashboard_value = (function wedge$client$components$dashboard_value(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sub-header","div.sub-header",-529463114),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-info-circle","i.fa.fa-info-circle",924035035)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),wedge.client.actions.load_transactions_BANG_], null),"reload"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Your account has ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1))," in it"].join('')], null)], null)], null);
});
wedge.client.components.dashboard = (function wedge$client$components$dashboard(){
var map__11338 = cljs.core.deref(wedge.client.state.transactions);
var map__11338__$1 = ((((!((map__11338 == null)))?(((((map__11338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11338):map__11338);
var last_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11338__$1,new cljs.core.Keyword(null,"last-load","last-load",-702317722));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11338__$1,new cljs.core.Keyword(null,"value","value",305978217));
wedge.client.actions.load_transactions_BANG_();

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([last_load,value], 0));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page.dashboard","div.page.dashboard",-808444784),(cljs.core.truth_(last_load)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wedge.client.components.dashboard_loading], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [wedge.client.components.dashboard_value,value], null))], null);
});
wedge.client.components.add_button = (function wedge$client$components$add_button(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.add-button","div.add-button",-1060801397),"add-button"], null);
});
wedge.client.components.sidebar = (function wedge$client$components$sidebar(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sidebar","div.sidebar",1454675964),"sidebar"], null);
});
wedge.client.components.header = (function wedge$client$components$header(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.header","div.header",1964513620),"header"], null);
});
wedge.client.components.footer = (function wedge$client$components$footer(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.footer","div.footer",1103856744),"footer"], null);
});
wedge.client.components.app = (function wedge$client$components$app(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wedge.client.components.dashboard], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wedge.client.components.add_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wedge.client.components.sidebar], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wedge.client.components.header], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wedge.client.components.footer], null)], null);
});
wedge.client.components.login_page = (function wedge$client$components$login_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),wedge.client.actions.link_account_BANG_], null),"link account"], null);
});
wedge.client.components.root = (function wedge$client$components$root(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(cljs.core.deref(wedge.client.state.session_id))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wedge.client.components.app], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wedge.client.components.login_page], null))], null);
});

//# sourceMappingURL=wedge.client.components.js.map
