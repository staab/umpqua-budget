goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__34188){
var vec__34189 = p__34188;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34189,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34189,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__34195 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34195,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34195,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34195,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__34199 = arguments.length;
switch (G__34199) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4219__auto__ = cljs.core.count(a);
var y__4220__auto__ = cljs.core.count(b);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4434__auto__.call(null,x));
} else {
var m__4431__auto__ = (clojure.data.equality_partition["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4431__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4433__auto__ = (((a == null))?null:a);
var m__4434__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4434__auto__.call(null,a,b));
} else {
var m__4431__auto__ = (clojure.data.diff_similar["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4431__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__34200_34249 = clojure.data.equality_partition;
var G__34201_34250 = "null";
var G__34202_34251 = ((function (G__34200_34249,G__34201_34250){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__34200_34249,G__34201_34250))
;
goog.object.set(G__34200_34249,G__34201_34250,G__34202_34251);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__34203_34252 = clojure.data.equality_partition;
var G__34204_34253 = "string";
var G__34205_34254 = ((function (G__34203_34252,G__34204_34253){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__34203_34252,G__34204_34253))
;
goog.object.set(G__34203_34252,G__34204_34253,G__34205_34254);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__34206_34255 = clojure.data.equality_partition;
var G__34207_34256 = "number";
var G__34208_34257 = ((function (G__34206_34255,G__34207_34256){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__34206_34255,G__34207_34256))
;
goog.object.set(G__34206_34255,G__34207_34256,G__34208_34257);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__34209_34258 = clojure.data.equality_partition;
var G__34210_34259 = "array";
var G__34211_34260 = ((function (G__34209_34258,G__34210_34259){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__34209_34258,G__34210_34259))
;
goog.object.set(G__34209_34258,G__34210_34259,G__34211_34260);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__34212_34261 = clojure.data.equality_partition;
var G__34213_34262 = "function";
var G__34214_34263 = ((function (G__34212_34261,G__34213_34262){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__34212_34261,G__34213_34262))
;
goog.object.set(G__34212_34261,G__34213_34262,G__34214_34263);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__34215_34264 = clojure.data.equality_partition;
var G__34216_34265 = "boolean";
var G__34217_34266 = ((function (G__34215_34264,G__34216_34265){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__34215_34264,G__34216_34265))
;
goog.object.set(G__34215_34264,G__34216_34265,G__34217_34266);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__34218_34267 = clojure.data.equality_partition;
var G__34219_34268 = "_";
var G__34220_34269 = ((function (G__34218_34267,G__34219_34268){
return (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});})(G__34218_34267,G__34219_34268))
;
goog.object.set(G__34218_34267,G__34219_34268,G__34220_34269);
goog.object.set(clojure.data.Diff,"null",true);

var G__34224_34270 = clojure.data.diff_similar;
var G__34225_34271 = "null";
var G__34226_34272 = ((function (G__34224_34270,G__34225_34271){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__34224_34270,G__34225_34271))
;
goog.object.set(G__34224_34270,G__34225_34271,G__34226_34272);

goog.object.set(clojure.data.Diff,"string",true);

var G__34227_34273 = clojure.data.diff_similar;
var G__34228_34274 = "string";
var G__34229_34275 = ((function (G__34227_34273,G__34228_34274){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__34227_34273,G__34228_34274))
;
goog.object.set(G__34227_34273,G__34228_34274,G__34229_34275);

goog.object.set(clojure.data.Diff,"number",true);

var G__34230_34276 = clojure.data.diff_similar;
var G__34231_34277 = "number";
var G__34232_34278 = ((function (G__34230_34276,G__34231_34277){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__34230_34276,G__34231_34277))
;
goog.object.set(G__34230_34276,G__34231_34277,G__34232_34278);

goog.object.set(clojure.data.Diff,"array",true);

var G__34233_34279 = clojure.data.diff_similar;
var G__34234_34280 = "array";
var G__34235_34281 = ((function (G__34233_34279,G__34234_34280){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__34233_34279,G__34234_34280))
;
goog.object.set(G__34233_34279,G__34234_34280,G__34235_34281);

goog.object.set(clojure.data.Diff,"function",true);

var G__34236_34282 = clojure.data.diff_similar;
var G__34237_34283 = "function";
var G__34238_34284 = ((function (G__34236_34282,G__34237_34283){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__34236_34282,G__34237_34283))
;
goog.object.set(G__34236_34282,G__34237_34283,G__34238_34284);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__34239_34285 = clojure.data.diff_similar;
var G__34240_34286 = "boolean";
var G__34241_34287 = ((function (G__34239_34285,G__34240_34286){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__34239_34285,G__34240_34286))
;
goog.object.set(G__34239_34285,G__34240_34286,G__34241_34287);

goog.object.set(clojure.data.Diff,"_",true);

var G__34242_34288 = clojure.data.diff_similar;
var G__34243_34289 = "_";
var G__34244_34290 = ((function (G__34242_34288,G__34243_34289){
return (function (a,b){
var fexpr__34246 = (function (){var G__34247 = clojure.data.equality_partition(a);
var G__34247__$1 = (((G__34247 instanceof cljs.core.Keyword))?G__34247.fqn:null);
switch (G__34247__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34247__$1)].join('')));

}
})();
return (fexpr__34246.cljs$core$IFn$_invoke$arity$2 ? fexpr__34246.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__34246.call(null,a,b));
});})(G__34242_34288,G__34243_34289))
;
goog.object.set(G__34242_34288,G__34243_34289,G__34244_34290);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

//# sourceMappingURL=clojure.data.js.map
