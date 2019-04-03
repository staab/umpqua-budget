goog.provide('camel_snake_kebab.internals.misc');
goog.require('cljs.core');
goog.require('camel_snake_kebab.internals.string_separator');
goog.require('clojure.string');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36094 = arguments.length;
var i__4731__auto___36095 = (0);
while(true){
if((i__4731__auto___36095 < len__4730__auto___36094)){
args__4736__auto__.push((arguments[i__4731__auto___36095]));

var G__36096 = (i__4731__auto___36095 + (1));
i__4731__auto___36095 = G__36096;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((4) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4737__auto__);
});

camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__36086){
var map__36087 = p__36086;
var map__36087__$1 = (((((!((map__36087 == null))))?(((((map__36087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36087):map__36087);
var separator = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36087__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),camel_snake_kebab.internals.string_separator.generic_separator);
var vec__36089 = camel_snake_kebab.internals.string_separator.split(separator,s);
var seq__36090 = cljs.core.seq(vec__36089);
var first__36091 = cljs.core.first(seq__36090);
var seq__36090__$1 = cljs.core.next(seq__36090);
var first = first__36091;
var rest = seq__36090__$1;
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(sep,cljs.core.cons((first_fn.cljs$core$IFn$_invoke$arity$1 ? first_fn.cljs$core$IFn$_invoke$arity$1(first) : first_fn.call(null,first)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(rest_fn,rest)));
});

camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq36081){
var G__36082 = cljs.core.first(seq36081);
var seq36081__$1 = cljs.core.next(seq36081);
var G__36083 = cljs.core.first(seq36081__$1);
var seq36081__$2 = cljs.core.next(seq36081__$1);
var G__36084 = cljs.core.first(seq36081__$2);
var seq36081__$3 = cljs.core.next(seq36081__$2);
var G__36085 = cljs.core.first(seq36081__$3);
var seq36081__$4 = cljs.core.next(seq36081__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36082,G__36083,G__36084,G__36085,seq36081__$4);
});

camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function camel_snake_kebab$internals$misc$capitalize_http_header(s){
var or__4131__auto__ = (function (){var G__36093 = clojure.string.upper_case(s);
return (camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1 ? camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1(G__36093) : camel_snake_kebab.internals.misc.upper_case_http_headers.call(null,G__36093));
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return clojure.string.capitalize(s);
}
});

//# sourceMappingURL=camel_snake_kebab.internals.misc.js.map
