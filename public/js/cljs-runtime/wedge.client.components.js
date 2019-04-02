goog.provide('wedge.client.components');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('camel_snake_kebab.core');
goog.require('wedge.client.state');
goog.require('wedge.client.actions');
wedge.client.components.nbsp = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),"&nbsp;"], null)], null);
wedge.client.components.now = (function wedge$client$components$now(){
return (new Date()).valueOf();
});
wedge.client.components.pct = (function wedge$client$components$pct(n,d){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),d)){
return (0);
} else {
return ((100) * (n / d));
}
});
wedge.client.components.polar__GT_cartesian = (function wedge$client$components$polar__GT_cartesian(cx,cy,r,deg){
var rad = (((deg - (90)) * Math.PI) / 180.0);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(cx + (r * Math.cos(rad))),new cljs.core.Keyword(null,"y","y",-1757859776),(cy + (r * Math.sin(rad)))], null);
});
wedge.client.components.describe_arc = (function wedge$client$components$describe_arc(x,y,r,start,end){
var map__26311 = wedge.client.components.polar__GT_cartesian(x,y,r,end);
var map__26311__$1 = (((((!((map__26311 == null))))?(((((map__26311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26311.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26311):map__26311);
var start_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26311__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var start_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26311__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__26312 = wedge.client.components.polar__GT_cartesian(x,y,r,start);
var map__26312__$1 = (((((!((map__26312 == null))))?(((((map__26312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26312.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26312):map__26312);
var end_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26312__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var end_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26312__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var large_arc_flag = ((((end - start) <= 180.0))?(0):(1));
var m = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M",start_x,start_y], null));
var a = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A",r,r,(0),large_arc_flag,(0),end_x,end_y], null));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)].join('');
});
wedge.client.components.dashboard_circle = (function wedge$client$components$dashboard_circle(stroke){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"stroke","stroke",1741823555),stroke,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(20),new cljs.core.Keyword(null,"d","d",1972142424),wedge.client.components.describe_arc((50),(50),(100),(0),(180))], null)], null)], null);
});
wedge.client.components.dashboard_budget = (function wedge$client$components$dashboard_budget(title,total,budgeted){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dashboard-budget","div.dashboard-budget",636733119),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),title], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dashboard-budget-bar","div.dashboard-budget-bar",1226488010)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dashboard-budget-settings","div.dashboard-budget-settings",-1154838955)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(total),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(budgeted)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wedge.client.components.pct(total,budgeted)),"%"].join('')], null)], null);
});
wedge.client.components.dashboard_budget_empty = (function wedge$client$components$dashboard_budget_empty(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dashboard-budget","div.dashboard-budget",636733119),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),wedge.client.components.nbsp], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dashboard-budget-bar","div.dashboard-budget-bar",1226488010)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dashboard-budget-settings","div.dashboard-budget-settings",-1154838955)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),wedge.client.components.nbsp], null)], null);
});
wedge.client.components.dashboard_loading = (function wedge$client$components$dashboard_loading(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dashboard-loading","div.dashboard-loading",-1467147616),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sub-header","div.sub-header",-529463114),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),"&nbsp;"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [wedge.client.components.dashboard_circle,"#EDF5FF"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wedge.client.components.dashboard_budget_empty], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wedge.client.components.dashboard_budget_empty], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wedge.client.components.dashboard_budget_empty], null)], null);
});
wedge.client.components.dashboard_value = (function wedge$client$components$dashboard_value(p__26315){
var map__26316 = p__26315;
var map__26316__$1 = (((((!((map__26316 == null))))?(((((map__26316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26316):map__26316);
var balance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26316__$1,new cljs.core.Keyword(null,"balance","balance",418967409));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sub-header","div.sub-header",-529463114),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-info-circle","i.fa.fa-info-circle",924035035)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Your account has $",cljs.core.str.cljs$core$IFn$_invoke$arity$1(balance.toFixed((2)))," in it"].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [wedge.client.components.dashboard_circle,"#EDF5FF"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),wedge.client.actions.initialize_BANG_], null),"reload"], null)], null);
});
wedge.client.components.dashboard = (function wedge$client$components$dashboard(){
var map__26318 = cljs.core.deref(wedge.client.state.db);
var map__26318__$1 = (((((!((map__26318 == null))))?(((((map__26318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26318):map__26318);
var last_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26318__$1,new cljs.core.Keyword(null,"last-load","last-load",-702317722));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26318__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_(value)){
} else {
wedge.client.actions.initialize_BANG_();
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page.dashboard","div.page.dashboard",-808444784),(cljs.core.truth_((function (){var or__4131__auto__ = last_load;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not(value);
}
})())?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wedge.client.components.dashboard_loading], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [wedge.client.components.dashboard_value,value], null))], null);
});
wedge.client.components.add_button = (function wedge$client$components$add_button(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.add-button","div.add-button",-1060801397),"add-button"], null);
});
wedge.client.components.sidebar = (function wedge$client$components$sidebar(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sidebar","div.sidebar",1454675964),"sidebar"], null);
});
wedge.client.components.header = (function wedge$client$components$header(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.header","div.header",1964513620),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-menu","i.fa.fa-menu",849531410),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),wedge.client.actions.toggle_sidebar_BANG_], null)], null),clojure.string.replace(camel_snake_kebab.core.__GT_Camel_Snake_Case(cljs.core.name(cljs.core.deref(wedge.client.state.page))),/_/," "),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-calendar","i.fa.fa-calendar",-1592114297),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),wedge.client.actions.toggle_picker_BANG_], null)], null)], null);
});
wedge.client.components.footer = (function wedge$client$components$footer(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.footer","div.footer",1103856744),"footer"], null);
});
wedge.client.components.app = (function wedge$client$components$app(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wedge.client.components.dashboard], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wedge.client.components.footer], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wedge.client.components.add_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wedge.client.components.sidebar], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wedge.client.components.header], null)], null);
});
wedge.client.components.login_page = (function wedge$client$components$login_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),wedge.client.actions.link_account_BANG_], null),"link account"], null);
});
wedge.client.components.root = (function wedge$client$components$root(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(cljs.core.deref(wedge.client.state.session_id))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wedge.client.components.app], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wedge.client.components.login_page], null))], null);
});

//# sourceMappingURL=wedge.client.components.js.map
