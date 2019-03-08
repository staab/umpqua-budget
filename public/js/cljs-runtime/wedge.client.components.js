goog.provide('wedge.client.components');
goog.require('cljs.core');
goog.require('wedge.client.state');
goog.require('wedge.client.actions');
wedge.client.components.now = (function wedge$client$components$now(){
return (new Date()).valueOf();
});
wedge.client.components.transaction_list = (function wedge$client$components$transaction_list(){
var map__11165 = cljs.core.deref(wedge.client.state.transactions);
var map__11165__$1 = ((((!((map__11165 == null)))?(((((map__11165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11165):map__11165);
var loaded = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11165__$1,new cljs.core.Keyword(null,"loaded","loaded",-1246482293));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11165__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11165__$1,new cljs.core.Keyword(null,"error","error",-978969032));
wedge.client.actions.load_transactions_BANG_();

if(cljs.core.truth_(loaded)){
return "Loading...";
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),wedge.client.actions.load_transactions_BANG_], null),"reload"], null);
}
});
wedge.client.components.dashboard = (function wedge$client$components$dashboard(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wedge.client.components.transaction_list], null);
});
wedge.client.components.sidebar = (function wedge$client$components$sidebar(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"sidebar"], null)], null);
});
wedge.client.components.header = (function wedge$client$components$header(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"header"], null)], null);
});
wedge.client.components.footer = (function wedge$client$components$footer(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"footer"], null)], null);
});
wedge.client.components.add_button = (function wedge$client$components$add_button(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"add-button"], null)], null);
});
wedge.client.components.app = (function wedge$client$components$app(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [wedge.client.components.dashboard,wedge.client.components.sidebar,wedge.client.components.header,wedge.client.components.footer,wedge.client.components.add_button], null);
});
wedge.client.components.login_page = (function wedge$client$components$login_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),wedge.client.actions.link_account_BANG_], null),"link account"], null);
});
wedge.client.components.root = (function wedge$client$components$root(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(cljs.core.deref(wedge.client.state.session_id))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wedge.client.components.app], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wedge.client.components.login_page], null))], null);
});

//# sourceMappingURL=wedge.client.components.js.map
