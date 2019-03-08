goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__26804){
var map__26807 = p__26804;
var map__26807__$1 = (((((!((map__26807 == null))))?(((((map__26807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26807.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26807):map__26807);
var m = map__26807__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26807__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26807__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26813_26978 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26814_26979 = null;
var count__26815_26980 = (0);
var i__26816_26981 = (0);
while(true){
if((i__26816_26981 < count__26815_26980)){
var f_26992 = chunk__26814_26979.cljs$core$IIndexed$_nth$arity$2(null,i__26816_26981);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_26992], 0));


var G__26995 = seq__26813_26978;
var G__26996 = chunk__26814_26979;
var G__26997 = count__26815_26980;
var G__26998 = (i__26816_26981 + (1));
seq__26813_26978 = G__26995;
chunk__26814_26979 = G__26996;
count__26815_26980 = G__26997;
i__26816_26981 = G__26998;
continue;
} else {
var temp__5720__auto___26999 = cljs.core.seq(seq__26813_26978);
if(temp__5720__auto___26999){
var seq__26813_27000__$1 = temp__5720__auto___26999;
if(cljs.core.chunked_seq_QMARK_(seq__26813_27000__$1)){
var c__4550__auto___27001 = cljs.core.chunk_first(seq__26813_27000__$1);
var G__27002 = cljs.core.chunk_rest(seq__26813_27000__$1);
var G__27003 = c__4550__auto___27001;
var G__27004 = cljs.core.count(c__4550__auto___27001);
var G__27005 = (0);
seq__26813_26978 = G__27002;
chunk__26814_26979 = G__27003;
count__26815_26980 = G__27004;
i__26816_26981 = G__27005;
continue;
} else {
var f_27006 = cljs.core.first(seq__26813_27000__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_27006], 0));


var G__27007 = cljs.core.next(seq__26813_27000__$1);
var G__27008 = null;
var G__27009 = (0);
var G__27010 = (0);
seq__26813_26978 = G__27007;
chunk__26814_26979 = G__27008;
count__26815_26980 = G__27009;
i__26816_26981 = G__27010;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27016 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_27016], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_27016)))?cljs.core.second(arglists_27016):arglists_27016)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26837_27020 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26838_27021 = null;
var count__26839_27022 = (0);
var i__26840_27023 = (0);
while(true){
if((i__26840_27023 < count__26839_27022)){
var vec__26855_27024 = chunk__26838_27021.cljs$core$IIndexed$_nth$arity$2(null,i__26840_27023);
var name_27025 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26855_27024,(0),null);
var map__26858_27026 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26855_27024,(1),null);
var map__26858_27027__$1 = (((((!((map__26858_27026 == null))))?(((((map__26858_27026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26858_27026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26858_27026):map__26858_27026);
var doc_27028 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26858_27027__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27029 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26858_27027__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_27025], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_27029], 0));

if(cljs.core.truth_(doc_27028)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_27028], 0));
} else {
}


var G__27030 = seq__26837_27020;
var G__27031 = chunk__26838_27021;
var G__27032 = count__26839_27022;
var G__27033 = (i__26840_27023 + (1));
seq__26837_27020 = G__27030;
chunk__26838_27021 = G__27031;
count__26839_27022 = G__27032;
i__26840_27023 = G__27033;
continue;
} else {
var temp__5720__auto___27034 = cljs.core.seq(seq__26837_27020);
if(temp__5720__auto___27034){
var seq__26837_27035__$1 = temp__5720__auto___27034;
if(cljs.core.chunked_seq_QMARK_(seq__26837_27035__$1)){
var c__4550__auto___27036 = cljs.core.chunk_first(seq__26837_27035__$1);
var G__27037 = cljs.core.chunk_rest(seq__26837_27035__$1);
var G__27038 = c__4550__auto___27036;
var G__27039 = cljs.core.count(c__4550__auto___27036);
var G__27040 = (0);
seq__26837_27020 = G__27037;
chunk__26838_27021 = G__27038;
count__26839_27022 = G__27039;
i__26840_27023 = G__27040;
continue;
} else {
var vec__26860_27041 = cljs.core.first(seq__26837_27035__$1);
var name_27042 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26860_27041,(0),null);
var map__26863_27043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26860_27041,(1),null);
var map__26863_27044__$1 = (((((!((map__26863_27043 == null))))?(((((map__26863_27043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26863_27043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26863_27043):map__26863_27043);
var doc_27045 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26863_27044__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27046 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26863_27044__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_27042], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_27046], 0));

if(cljs.core.truth_(doc_27045)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_27045], 0));
} else {
}


var G__27047 = cljs.core.next(seq__26837_27035__$1);
var G__27048 = null;
var G__27049 = (0);
var G__27050 = (0);
seq__26837_27020 = G__27047;
chunk__26838_27021 = G__27048;
count__26839_27022 = G__27049;
i__26840_27023 = G__27050;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__26868 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__26869 = null;
var count__26870 = (0);
var i__26871 = (0);
while(true){
if((i__26871 < count__26870)){
var role = chunk__26869.cljs$core$IIndexed$_nth$arity$2(null,i__26871);
var temp__5720__auto___27055__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___27055__$1)){
var spec_27056 = temp__5720__auto___27055__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_27056)], 0));
} else {
}


var G__27057 = seq__26868;
var G__27058 = chunk__26869;
var G__27059 = count__26870;
var G__27060 = (i__26871 + (1));
seq__26868 = G__27057;
chunk__26869 = G__27058;
count__26870 = G__27059;
i__26871 = G__27060;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__26868);
if(temp__5720__auto____$1){
var seq__26868__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__26868__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__26868__$1);
var G__27065 = cljs.core.chunk_rest(seq__26868__$1);
var G__27066 = c__4550__auto__;
var G__27067 = cljs.core.count(c__4550__auto__);
var G__27068 = (0);
seq__26868 = G__27065;
chunk__26869 = G__27066;
count__26870 = G__27067;
i__26871 = G__27068;
continue;
} else {
var role = cljs.core.first(seq__26868__$1);
var temp__5720__auto___27073__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___27073__$2)){
var spec_27074 = temp__5720__auto___27073__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_27074)], 0));
} else {
}


var G__27075 = cljs.core.next(seq__26868__$1);
var G__27076 = null;
var G__27077 = (0);
var G__27078 = (0);
seq__26868 = G__27075;
chunk__26869 = G__27076;
count__26870 = G__27077;
i__26871 = G__27078;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__27087 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__27088 = cljs.core.ex_cause(t);
via = G__27087;
t = G__27088;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__26908 = datafied_throwable;
var map__26908__$1 = (((((!((map__26908 == null))))?(((((map__26908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26908):map__26908);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26908__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26908__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26908__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__26909 = cljs.core.last(via);
var map__26909__$1 = (((((!((map__26909 == null))))?(((((map__26909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26909.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26909):map__26909);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26909__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26909__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26909__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__26910 = data;
var map__26910__$1 = (((((!((map__26910 == null))))?(((((map__26910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26910.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26910):map__26910);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26910__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26910__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26910__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__26911 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__26911__$1 = (((((!((map__26911 == null))))?(((((map__26911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26911.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26911):map__26911);
var top_data = map__26911__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26911__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__26918 = phase;
var G__26918__$1 = (((G__26918 instanceof cljs.core.Keyword))?G__26918.fqn:null);
switch (G__26918__$1) {
case "read-source":
var map__26919 = data;
var map__26919__$1 = (((((!((map__26919 == null))))?(((((map__26919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26919):map__26919);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26919__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26919__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__26921 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__26921__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26921,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__26921);
var G__26921__$2 = (cljs.core.truth_((function (){var fexpr__26922 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__26922.cljs$core$IFn$_invoke$arity$1 ? fexpr__26922.cljs$core$IFn$_invoke$arity$1(source) : fexpr__26922.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__26921__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__26921__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26921__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__26921__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__26923 = top_data;
var G__26923__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26923,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__26923);
var G__26923__$2 = (cljs.core.truth_((function (){var fexpr__26924 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__26924.cljs$core$IFn$_invoke$arity$1 ? fexpr__26924.cljs$core$IFn$_invoke$arity$1(source) : fexpr__26924.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__26923__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__26923__$1);
var G__26923__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26923__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__26923__$2);
var G__26923__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26923__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__26923__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26923__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__26923__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__26925 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26925,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26925,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26925,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26925,(3),null);
var G__26928 = top_data;
var G__26928__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26928,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__26928);
var G__26928__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26928__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__26928__$1);
var G__26928__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26928__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__26928__$2);
var G__26928__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26928__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__26928__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26928__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__26928__$4;
}

break;
case "execution":
var vec__26929 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26929,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26929,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26929,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26929,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__26929,source__$1,method,file,line,G__26918,G__26918__$1,map__26908,map__26908__$1,via,trace,phase,map__26909,map__26909__$1,type,message,data,map__26910,map__26910__$1,problems,fn,caller,map__26911,map__26911__$1,top_data,source){
return (function (p1__26907_SHARP_){
var or__4131__auto__ = (p1__26907_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__26933 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__26933.cljs$core$IFn$_invoke$arity$1 ? fexpr__26933.cljs$core$IFn$_invoke$arity$1(p1__26907_SHARP_) : fexpr__26933.call(null,p1__26907_SHARP_));
}
});})(vec__26929,source__$1,method,file,line,G__26918,G__26918__$1,map__26908,map__26908__$1,via,trace,phase,map__26909,map__26909__$1,type,message,data,map__26910,map__26910__$1,problems,fn,caller,map__26911,map__26911__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__26934 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__26934__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26934,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__26934);
var G__26934__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26934__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__26934__$1);
var G__26934__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26934__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__26934__$2);
var G__26934__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26934__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__26934__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26934__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__26934__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26918__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__26937){
var map__26938 = p__26937;
var map__26938__$1 = (((((!((map__26938 == null))))?(((((map__26938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26938.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26938):map__26938);
var triage_data = map__26938__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26938__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26938__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26938__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26938__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26938__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26938__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26938__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26938__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__26940 = phase;
var G__26940__$1 = (((G__26940 instanceof cljs.core.Keyword))?G__26940.fqn:null);
switch (G__26940__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__26941 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__26942 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__26943 = loc;
var G__26944 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__26945_27112 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__26946_27113 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__26947_27114 = true;
var _STAR_print_fn_STAR__temp_val__26948_27115 = ((function (_STAR_print_newline_STAR__orig_val__26945_27112,_STAR_print_fn_STAR__orig_val__26946_27113,_STAR_print_newline_STAR__temp_val__26947_27114,sb__4661__auto__,G__26941,G__26942,G__26943,G__26940,G__26940__$1,loc,class_name,simple_class,cause_type,format,map__26938,map__26938__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__26945_27112,_STAR_print_fn_STAR__orig_val__26946_27113,_STAR_print_newline_STAR__temp_val__26947_27114,sb__4661__auto__,G__26941,G__26942,G__26943,G__26940,G__26940__$1,loc,class_name,simple_class,cause_type,format,map__26938,map__26938__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__26947_27114;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__26948_27115;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__26945_27112,_STAR_print_fn_STAR__orig_val__26946_27113,_STAR_print_newline_STAR__temp_val__26947_27114,_STAR_print_fn_STAR__temp_val__26948_27115,sb__4661__auto__,G__26941,G__26942,G__26943,G__26940,G__26940__$1,loc,class_name,simple_class,cause_type,format,map__26938,map__26938__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__26945_27112,_STAR_print_fn_STAR__orig_val__26946_27113,_STAR_print_newline_STAR__temp_val__26947_27114,_STAR_print_fn_STAR__temp_val__26948_27115,sb__4661__auto__,G__26941,G__26942,G__26943,G__26940,G__26940__$1,loc,class_name,simple_class,cause_type,format,map__26938,map__26938__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__26935_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__26935_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__26945_27112,_STAR_print_fn_STAR__orig_val__26946_27113,_STAR_print_newline_STAR__temp_val__26947_27114,_STAR_print_fn_STAR__temp_val__26948_27115,sb__4661__auto__,G__26941,G__26942,G__26943,G__26940,G__26940__$1,loc,class_name,simple_class,cause_type,format,map__26938,map__26938__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__26945_27112,_STAR_print_fn_STAR__orig_val__26946_27113,_STAR_print_newline_STAR__temp_val__26947_27114,_STAR_print_fn_STAR__temp_val__26948_27115,sb__4661__auto__,G__26941,G__26942,G__26943,G__26940,G__26940__$1,loc,class_name,simple_class,cause_type,format,map__26938,map__26938__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__26946_27113;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__26945_27112;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__26941,G__26942,G__26943,G__26944) : format.call(null,G__26941,G__26942,G__26943,G__26944));

break;
case "macroexpansion":
var G__26949 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__26950 = cause_type;
var G__26951 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__26952 = loc;
var G__26953 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__26949,G__26950,G__26951,G__26952,G__26953) : format.call(null,G__26949,G__26950,G__26951,G__26952,G__26953));

break;
case "compile-syntax-check":
var G__26954 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__26955 = cause_type;
var G__26956 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__26957 = loc;
var G__26958 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__26954,G__26955,G__26956,G__26957,G__26958) : format.call(null,G__26954,G__26955,G__26956,G__26957,G__26958));

break;
case "compilation":
var G__26959 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__26960 = cause_type;
var G__26961 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__26962 = loc;
var G__26963 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__26959,G__26960,G__26961,G__26962,G__26963) : format.call(null,G__26959,G__26960,G__26961,G__26962,G__26963));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__26964 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__26965 = symbol;
var G__26966 = loc;
var G__26967 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__26968_27116 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__26969_27117 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__26970_27118 = true;
var _STAR_print_fn_STAR__temp_val__26971_27119 = ((function (_STAR_print_newline_STAR__orig_val__26968_27116,_STAR_print_fn_STAR__orig_val__26969_27117,_STAR_print_newline_STAR__temp_val__26970_27118,sb__4661__auto__,G__26964,G__26965,G__26966,G__26940,G__26940__$1,loc,class_name,simple_class,cause_type,format,map__26938,map__26938__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__26968_27116,_STAR_print_fn_STAR__orig_val__26969_27117,_STAR_print_newline_STAR__temp_val__26970_27118,sb__4661__auto__,G__26964,G__26965,G__26966,G__26940,G__26940__$1,loc,class_name,simple_class,cause_type,format,map__26938,map__26938__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__26970_27118;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__26971_27119;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__26968_27116,_STAR_print_fn_STAR__orig_val__26969_27117,_STAR_print_newline_STAR__temp_val__26970_27118,_STAR_print_fn_STAR__temp_val__26971_27119,sb__4661__auto__,G__26964,G__26965,G__26966,G__26940,G__26940__$1,loc,class_name,simple_class,cause_type,format,map__26938,map__26938__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__26968_27116,_STAR_print_fn_STAR__orig_val__26969_27117,_STAR_print_newline_STAR__temp_val__26970_27118,_STAR_print_fn_STAR__temp_val__26971_27119,sb__4661__auto__,G__26964,G__26965,G__26966,G__26940,G__26940__$1,loc,class_name,simple_class,cause_type,format,map__26938,map__26938__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__26936_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__26936_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__26968_27116,_STAR_print_fn_STAR__orig_val__26969_27117,_STAR_print_newline_STAR__temp_val__26970_27118,_STAR_print_fn_STAR__temp_val__26971_27119,sb__4661__auto__,G__26964,G__26965,G__26966,G__26940,G__26940__$1,loc,class_name,simple_class,cause_type,format,map__26938,map__26938__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__26968_27116,_STAR_print_fn_STAR__orig_val__26969_27117,_STAR_print_newline_STAR__temp_val__26970_27118,_STAR_print_fn_STAR__temp_val__26971_27119,sb__4661__auto__,G__26964,G__26965,G__26966,G__26940,G__26940__$1,loc,class_name,simple_class,cause_type,format,map__26938,map__26938__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__26969_27117;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__26968_27116;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__26964,G__26965,G__26966,G__26967) : format.call(null,G__26964,G__26965,G__26966,G__26967));
} else {
var G__26972 = "Execution error%s at %s(%s).\n%s\n";
var G__26973 = cause_type;
var G__26974 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__26975 = loc;
var G__26976 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__26972,G__26973,G__26974,G__26975,G__26976) : format.call(null,G__26972,G__26973,G__26974,G__26975,G__26976));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26940__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
