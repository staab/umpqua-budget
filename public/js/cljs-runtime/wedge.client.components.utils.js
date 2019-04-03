goog.provide('wedge.client.components.utils');
goog.require('cljs.core');
goog.require('clojure.string');
var module$node_modules$history$index=shadow.js.require("module$node_modules$history$index", {});
wedge.client.components.utils.PRIMARY = "#479AFF";
wedge.client.components.utils.PRIMARY_LIGHT = "#EDF5FF";
wedge.client.components.utils.SUCCESS = "#6DFF6A";
wedge.client.components.utils.DANGER = "#FF7373";
wedge.client.components.utils.nbsp = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),"&nbsp;"], null)], null);
wedge.client.components.utils.pct = (function wedge$client$components$utils$pct(n,d){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),d)){
return (0);
} else {
return ((100) * (n / d));
}
});
wedge.client.components.utils.polar__GT_cartesian = (function wedge$client$components$utils$polar__GT_cartesian(cx,cy,r,deg){
var rad = (((deg - (90)) * Math.PI) / 180.0);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(cx + (r * Math.cos(rad))),new cljs.core.Keyword(null,"y","y",-1757859776),(cy + (r * Math.sin(rad)))], null);
});
wedge.client.components.utils.describe_arc = (function wedge$client$components$utils$describe_arc(x,y,r,start,end){
var map__25644 = wedge.client.components.utils.polar__GT_cartesian(x,y,r,end);
var map__25644__$1 = (((((!((map__25644 == null))))?(((((map__25644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25644.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25644):map__25644);
var start_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25644__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var start_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25644__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__25645 = wedge.client.components.utils.polar__GT_cartesian(x,y,r,start);
var map__25645__$1 = (((((!((map__25645 == null))))?(((((map__25645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25645):map__25645);
var end_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25645__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var end_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25645__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var large_arc_flag = ((((end - start) <= 180.0))?(0):(1));
var m = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M",start_x,start_y], null));
var a = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A",r,r,(0),large_arc_flag,(0),end_x,end_y], null));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)].join('');
});
wedge.client.components.utils.history = module$node_modules$history$index.createBrowserHistory();
wedge.client.components.utils.link = (function wedge$client$components$utils$link(var_args){
var G__25649 = arguments.length;
switch (G__25649) {
case 2:
return wedge.client.components.utils.link.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return wedge.client.components.utils.link.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

wedge.client.components.utils.link.cljs$core$IFn$_invoke$arity$2 = (function (to,children){
return wedge.client.components.utils.link.cljs$core$IFn$_invoke$arity$3(to,cljs.core.PersistentArrayMap.EMPTY,children);
});

wedge.client.components.utils.link.cljs$core$IFn$_invoke$arity$3 = (function (to,attrs,children){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return wedge.client.components.utils.history.push(["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(to),(1)))].join(''));
})),children], null);
});

wedge.client.components.utils.link.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=wedge.client.components.utils.js.map
