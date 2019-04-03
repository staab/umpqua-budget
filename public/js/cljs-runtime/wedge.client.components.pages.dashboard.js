goog.provide('wedge.client.components.pages.dashboard');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('wedge.client.state');
goog.require('wedge.client.actions');
goog.require('wedge.client.components.utils');
wedge.client.components.pages.dashboard.dashboard_circle = (function wedge$client$components$pages$dashboard$dashboard_circle(degrees,stroke,delay_by){
var deg = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var start_time = (cljs.core.deref(wedge.client.state.now) + delay_by);
var attrs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"stroke","stroke",1741823555),stroke,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"3%"], null);
return ((function (deg,start_time,attrs){
return (function (){
if((start_time > cljs.core.deref(wedge.client.state.now))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg.dashboard-circle","svg.dashboard-circle",-535598071),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"view-box","view-box",-1792199155),"0 0 100 100"], null),(((degrees > cljs.core.deref(deg)))?(function (){
requestAnimationFrame(((function (deg,start_time,attrs){
return (function (){
return cljs.core.reset_BANG_(deg,Math.min(degrees,((360) * ((cljs.core.deref(wedge.client.state.now) - start_time) / (400)))));
});})(deg,start_time,attrs))
);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs,new cljs.core.Keyword(null,"d","d",1972142424),wedge.client.components.utils.describe_arc((50),(50),(35),(0),cljs.core.deref(deg)))], null);
})()
:(((degrees < (360)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs,new cljs.core.Keyword(null,"d","d",1972142424),wedge.client.components.utils.describe_arc((50),(50),(35),(0),cljs.core.deref(deg)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(attrs,new cljs.core.Keyword(null,"cx","cx",1272694324),(50),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"cy","cy",755331060),(50),new cljs.core.Keyword(null,"r","r",-471384190),(35)], 0))], null)
))], null);
}
});
;})(deg,start_time,attrs))
});
wedge.client.components.pages.dashboard.dashboard_budget = (function wedge$client$components$pages$dashboard$dashboard_budget(title,total,budgeted){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dashboard-budget","div.dashboard-budget",636733119),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),title], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dashboard-budget-bar","div.dashboard-budget-bar",1226488010)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dashboard-budget-settings","div.dashboard-budget-settings",-1154838955)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(total),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(budgeted)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wedge.client.components.utils.pct(total,budgeted)),"%"].join('')], null)], null);
});
wedge.client.components.pages.dashboard.dashboard_budget_empty = (function wedge$client$components$pages$dashboard$dashboard_budget_empty(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dashboard-budget","div.dashboard-budget",636733119),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),wedge.client.components.utils.nbsp], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dashboard-budget-bar","div.dashboard-budget-bar",1226488010)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dashboard-budget-settings","div.dashboard-budget-settings",-1154838955)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),wedge.client.components.utils.nbsp], null)], null);
});
wedge.client.components.pages.dashboard.dashboard_loading = (function wedge$client$components$pages$dashboard$dashboard_loading(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dashboard-loading","div.dashboard-loading",-1467147616),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sub-header","div.sub-header",-529463114),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),"&nbsp;"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dashboard-circles","div.dashboard-circles",1693466142),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [wedge.client.components.pages.dashboard.dashboard_circle,(360),wedge.client.components.utils.PRIMARY_LIGHT,(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wedge.client.components.pages.dashboard.dashboard_budget_empty], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wedge.client.components.pages.dashboard.dashboard_budget_empty], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wedge.client.components.pages.dashboard.dashboard_budget_empty], null)], null);
});
wedge.client.components.pages.dashboard.dashboard_value = (function wedge$client$components$pages$dashboard$dashboard_value(p__25891){
var map__25892 = p__25891;
var map__25892__$1 = (((((!((map__25892 == null))))?(((((map__25892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25892.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25892):map__25892);
var data = map__25892__$1;
var balance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25892__$1,new cljs.core.Keyword(null,"balance","balance",418967409));
var budgets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25892__$1,new cljs.core.Keyword(null,"budgets","budgets",463539840));
var spent = (1989);
var budget = (1490);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sub-header","div.sub-header",-529463114),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-info-circle","i.fa.fa-info-circle",924035035)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Your account has $",cljs.core.str.cljs$core$IFn$_invoke$arity$1(balance.toFixed((2)))," in it"].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dashboard-content","div.dashboard-content",-1042357329),(((spent > budget))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dashboard-circles","div.dashboard-circles",1693466142),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [wedge.client.components.pages.dashboard.dashboard_circle,(360),wedge.client.components.utils.PRIMARY,(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [wedge.client.components.pages.dashboard.dashboard_circle,(((spent / budget) * (360)) - (360)),wedge.client.components.utils.DANGER,(400)], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dashboard-circles","div.dashboard-circles",1693466142),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [wedge.client.components.pages.dashboard.dashboard_circle,(360),wedge.client.components.utils.SUCCESS,(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [wedge.client.components.pages.dashboard.dashboard_circle,((spent / budget) * (360)),wedge.client.components.utils.PRIMARY,(0)], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dashboard-budgets.section","div.dashboard-budgets.section",2023396533),((cljs.core.empty_QMARK_(budgets))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"No budgets yet! Click ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [wedge.client.components.utils.link,new cljs.core.Keyword("budgets","new","budgets/new",-1761670986),"here"], null)," to add one."], null):"hi")], null)], null)], null);
});
wedge.client.components.pages.dashboard.dashboard = (function wedge$client$components$pages$dashboard$dashboard(){
var map__25894 = cljs.core.deref(wedge.client.state.db);
var map__25894__$1 = (((((!((map__25894 == null))))?(((((map__25894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25894):map__25894);
var last_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25894__$1,new cljs.core.Keyword(null,"last-load","last-load",-702317722));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25894__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_(value)){
} else {
wedge.client.actions.initialize_BANG_();
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page.dashboard","div.page.dashboard",-808444784),(cljs.core.truth_(value)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [wedge.client.components.pages.dashboard.dashboard_value,value], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wedge.client.components.pages.dashboard.dashboard_loading], null))], null);
});

//# sourceMappingURL=wedge.client.components.pages.dashboard.js.map
