goog.provide('camel_snake_kebab.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('camel_snake_kebab.internals.misc');
goog.require('camel_snake_kebab.internals.alter_name');
/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36549 = arguments.length;
var i__4731__auto___36550 = (0);
while(true){
if((i__4731__auto___36550 < len__4730__auto___36549)){
args__4736__auto__.push((arguments[i__4731__auto___36550]));

var G__36551 = (i__4731__auto___36550 + (1));
i__4731__auto___36550 = G__36551;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((4) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4737__auto__);
});

camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,first_fn,rest_fn,sep,s,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest], 0));
});

camel_snake_kebab.core.convert_case.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq36473){
var G__36474 = cljs.core.first(seq36473);
var seq36473__$1 = cljs.core.next(seq36473);
var G__36475 = cljs.core.first(seq36473__$1);
var seq36473__$2 = cljs.core.next(seq36473__$1);
var G__36476 = cljs.core.first(seq36473__$2);
var seq36473__$3 = cljs.core.next(seq36473__$2);
var G__36477 = cljs.core.first(seq36473__$3);
var seq36473__$4 = cljs.core.next(seq36473__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36474,G__36475,G__36476,G__36477,seq36473__$4);
});

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36552 = arguments.length;
var i__4731__auto___36553 = (0);
while(true){
if((i__4731__auto___36553 < len__4730__auto___36552)){
args__4736__auto__.push((arguments[i__4731__auto___36553]));

var G__36554 = (i__4731__auto___36553 + (1));
i__4731__auto___36553 = G__36554;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__36285__auto__,rest__36286__auto__){
var convert_case__36287__auto__ = (function (p1__36284__36288__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__36284__36288__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__36286__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__36285__auto__,convert_case__36287__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq36478){
var G__36479 = cljs.core.first(seq36478);
var seq36478__$1 = cljs.core.next(seq36478);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36479,seq36478__$1);
});


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36555 = arguments.length;
var i__4731__auto___36556 = (0);
while(true){
if((i__4731__auto___36556 < len__4730__auto___36555)){
args__4736__auto__.push((arguments[i__4731__auto___36556]));

var G__36557 = (i__4731__auto___36556 + (1));
i__4731__auto___36556 = G__36557;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__36290__auto__,rest__36291__auto__){
if((!((s__36290__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__36290__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__36290__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__36291__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq36480){
var G__36481 = cljs.core.first(seq36480);
var seq36480__$1 = cljs.core.next(seq36480);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36481,seq36480__$1);
});


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36558 = arguments.length;
var i__4731__auto___36559 = (0);
while(true){
if((i__4731__auto___36559 < len__4730__auto___36558)){
args__4736__auto__.push((arguments[i__4731__auto___36559]));

var G__36560 = (i__4731__auto___36559 + (1));
i__4731__auto___36559 = G__36560;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__36290__auto__,rest__36291__auto__){
if((!((s__36290__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__36290__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__36290__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__36291__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq36482){
var G__36483 = cljs.core.first(seq36482);
var seq36482__$1 = cljs.core.next(seq36482);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36483,seq36482__$1);
});


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36561 = arguments.length;
var i__4731__auto___36562 = (0);
while(true){
if((i__4731__auto___36562 < len__4730__auto___36561)){
args__4736__auto__.push((arguments[i__4731__auto___36562]));

var G__36563 = (i__4731__auto___36562 + (1));
i__4731__auto___36562 = G__36563;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__36290__auto__,rest__36291__auto__){
if((!((s__36290__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__36290__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__36290__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__36291__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq36484){
var G__36485 = cljs.core.first(seq36484);
var seq36484__$1 = cljs.core.next(seq36484);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36485,seq36484__$1);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36564 = arguments.length;
var i__4731__auto___36565 = (0);
while(true){
if((i__4731__auto___36565 < len__4730__auto___36564)){
args__4736__auto__.push((arguments[i__4731__auto___36565]));

var G__36566 = (i__4731__auto___36565 + (1));
i__4731__auto___36565 = G__36566;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__36285__auto__,rest__36286__auto__){
var convert_case__36287__auto__ = (function (p1__36284__36288__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__36284__36288__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__36286__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__36285__auto__,convert_case__36287__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq36486){
var G__36487 = cljs.core.first(seq36486);
var seq36486__$1 = cljs.core.next(seq36486);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36487,seq36486__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36567 = arguments.length;
var i__4731__auto___36568 = (0);
while(true){
if((i__4731__auto___36568 < len__4730__auto___36567)){
args__4736__auto__.push((arguments[i__4731__auto___36568]));

var G__36569 = (i__4731__auto___36568 + (1));
i__4731__auto___36568 = G__36569;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__36290__auto__,rest__36291__auto__){
if((!((s__36290__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__36290__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__36290__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__36291__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq36488){
var G__36489 = cljs.core.first(seq36488);
var seq36488__$1 = cljs.core.next(seq36488);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36489,seq36488__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36570 = arguments.length;
var i__4731__auto___36571 = (0);
while(true){
if((i__4731__auto___36571 < len__4730__auto___36570)){
args__4736__auto__.push((arguments[i__4731__auto___36571]));

var G__36572 = (i__4731__auto___36571 + (1));
i__4731__auto___36571 = G__36572;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__36290__auto__,rest__36291__auto__){
if((!((s__36290__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__36290__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__36290__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__36291__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq36490){
var G__36491 = cljs.core.first(seq36490);
var seq36490__$1 = cljs.core.next(seq36490);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36491,seq36490__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36573 = arguments.length;
var i__4731__auto___36574 = (0);
while(true){
if((i__4731__auto___36574 < len__4730__auto___36573)){
args__4736__auto__.push((arguments[i__4731__auto___36574]));

var G__36575 = (i__4731__auto___36574 + (1));
i__4731__auto___36574 = G__36575;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__36290__auto__,rest__36291__auto__){
if((!((s__36290__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__36290__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__36290__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__36291__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq36496){
var G__36497 = cljs.core.first(seq36496);
var seq36496__$1 = cljs.core.next(seq36496);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36497,seq36496__$1);
});

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36576 = arguments.length;
var i__4731__auto___36577 = (0);
while(true){
if((i__4731__auto___36577 < len__4730__auto___36576)){
args__4736__auto__.push((arguments[i__4731__auto___36577]));

var G__36578 = (i__4731__auto___36577 + (1));
i__4731__auto___36577 = G__36578;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__36285__auto__,rest__36286__auto__){
var convert_case__36287__auto__ = (function (p1__36284__36288__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__36284__36288__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__36286__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__36285__auto__,convert_case__36287__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq36506){
var G__36510 = cljs.core.first(seq36506);
var seq36506__$1 = cljs.core.next(seq36506);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36510,seq36506__$1);
});


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36579 = arguments.length;
var i__4731__auto___36580 = (0);
while(true){
if((i__4731__auto___36580 < len__4730__auto___36579)){
args__4736__auto__.push((arguments[i__4731__auto___36580]));

var G__36581 = (i__4731__auto___36580 + (1));
i__4731__auto___36580 = G__36581;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__36290__auto__,rest__36291__auto__){
if((!((s__36290__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__36290__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__36290__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__36291__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq36511){
var G__36512 = cljs.core.first(seq36511);
var seq36511__$1 = cljs.core.next(seq36511);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36512,seq36511__$1);
});


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36582 = arguments.length;
var i__4731__auto___36583 = (0);
while(true){
if((i__4731__auto___36583 < len__4730__auto___36582)){
args__4736__auto__.push((arguments[i__4731__auto___36583]));

var G__36584 = (i__4731__auto___36583 + (1));
i__4731__auto___36583 = G__36584;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__36290__auto__,rest__36291__auto__){
if((!((s__36290__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__36290__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__36290__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__36291__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq36513){
var G__36514 = cljs.core.first(seq36513);
var seq36513__$1 = cljs.core.next(seq36513);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36514,seq36513__$1);
});


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36585 = arguments.length;
var i__4731__auto___36586 = (0);
while(true){
if((i__4731__auto___36586 < len__4730__auto___36585)){
args__4736__auto__.push((arguments[i__4731__auto___36586]));

var G__36587 = (i__4731__auto___36586 + (1));
i__4731__auto___36586 = G__36587;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__36290__auto__,rest__36291__auto__){
if((!((s__36290__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__36290__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__36290__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__36291__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq36515){
var G__36516 = cljs.core.first(seq36515);
var seq36515__$1 = cljs.core.next(seq36515);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36516,seq36515__$1);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36588 = arguments.length;
var i__4731__auto___36589 = (0);
while(true){
if((i__4731__auto___36589 < len__4730__auto___36588)){
args__4736__auto__.push((arguments[i__4731__auto___36589]));

var G__36590 = (i__4731__auto___36589 + (1));
i__4731__auto___36589 = G__36590;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__36285__auto__,rest__36286__auto__){
var convert_case__36287__auto__ = (function (p1__36284__36288__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__36284__36288__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__36286__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__36285__auto__,convert_case__36287__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq36517){
var G__36518 = cljs.core.first(seq36517);
var seq36517__$1 = cljs.core.next(seq36517);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36518,seq36517__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36591 = arguments.length;
var i__4731__auto___36592 = (0);
while(true){
if((i__4731__auto___36592 < len__4730__auto___36591)){
args__4736__auto__.push((arguments[i__4731__auto___36592]));

var G__36593 = (i__4731__auto___36592 + (1));
i__4731__auto___36592 = G__36593;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__36290__auto__,rest__36291__auto__){
if((!((s__36290__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__36290__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__36290__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__36291__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq36519){
var G__36520 = cljs.core.first(seq36519);
var seq36519__$1 = cljs.core.next(seq36519);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36520,seq36519__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36594 = arguments.length;
var i__4731__auto___36595 = (0);
while(true){
if((i__4731__auto___36595 < len__4730__auto___36594)){
args__4736__auto__.push((arguments[i__4731__auto___36595]));

var G__36596 = (i__4731__auto___36595 + (1));
i__4731__auto___36595 = G__36596;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__36290__auto__,rest__36291__auto__){
if((!((s__36290__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__36290__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__36290__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__36291__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq36521){
var G__36522 = cljs.core.first(seq36521);
var seq36521__$1 = cljs.core.next(seq36521);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36522,seq36521__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36597 = arguments.length;
var i__4731__auto___36598 = (0);
while(true){
if((i__4731__auto___36598 < len__4730__auto___36597)){
args__4736__auto__.push((arguments[i__4731__auto___36598]));

var G__36599 = (i__4731__auto___36598 + (1));
i__4731__auto___36598 = G__36599;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__36290__auto__,rest__36291__auto__){
if((!((s__36290__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__36290__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__36290__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__36291__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq36523){
var G__36524 = cljs.core.first(seq36523);
var seq36523__$1 = cljs.core.next(seq36523);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36524,seq36523__$1);
});

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36600 = arguments.length;
var i__4731__auto___36601 = (0);
while(true){
if((i__4731__auto___36601 < len__4730__auto___36600)){
args__4736__auto__.push((arguments[i__4731__auto___36601]));

var G__36602 = (i__4731__auto___36601 + (1));
i__4731__auto___36601 = G__36602;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__36285__auto__,rest__36286__auto__){
var convert_case__36287__auto__ = (function (p1__36284__36288__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__36284__36288__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__36286__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__36285__auto__,convert_case__36287__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq36525){
var G__36526 = cljs.core.first(seq36525);
var seq36525__$1 = cljs.core.next(seq36525);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36526,seq36525__$1);
});


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36603 = arguments.length;
var i__4731__auto___36604 = (0);
while(true){
if((i__4731__auto___36604 < len__4730__auto___36603)){
args__4736__auto__.push((arguments[i__4731__auto___36604]));

var G__36605 = (i__4731__auto___36604 + (1));
i__4731__auto___36604 = G__36605;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__36290__auto__,rest__36291__auto__){
if((!((s__36290__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__36290__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__36290__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__36291__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq36527){
var G__36528 = cljs.core.first(seq36527);
var seq36527__$1 = cljs.core.next(seq36527);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36528,seq36527__$1);
});


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36606 = arguments.length;
var i__4731__auto___36607 = (0);
while(true){
if((i__4731__auto___36607 < len__4730__auto___36606)){
args__4736__auto__.push((arguments[i__4731__auto___36607]));

var G__36608 = (i__4731__auto___36607 + (1));
i__4731__auto___36607 = G__36608;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__36290__auto__,rest__36291__auto__){
if((!((s__36290__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__36290__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__36290__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__36291__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq36529){
var G__36530 = cljs.core.first(seq36529);
var seq36529__$1 = cljs.core.next(seq36529);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36530,seq36529__$1);
});


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36609 = arguments.length;
var i__4731__auto___36610 = (0);
while(true){
if((i__4731__auto___36610 < len__4730__auto___36609)){
args__4736__auto__.push((arguments[i__4731__auto___36610]));

var G__36611 = (i__4731__auto___36610 + (1));
i__4731__auto___36610 = G__36611;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__36290__auto__,rest__36291__auto__){
if((!((s__36290__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__36290__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__36290__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__36291__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq36531){
var G__36532 = cljs.core.first(seq36531);
var seq36531__$1 = cljs.core.next(seq36531);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36532,seq36531__$1);
});

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36612 = arguments.length;
var i__4731__auto___36613 = (0);
while(true){
if((i__4731__auto___36613 < len__4730__auto___36612)){
args__4736__auto__.push((arguments[i__4731__auto___36613]));

var G__36614 = (i__4731__auto___36613 + (1));
i__4731__auto___36613 = G__36614;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__36285__auto__,rest__36286__auto__){
var convert_case__36287__auto__ = (function (p1__36284__36288__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__36284__36288__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__36286__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__36285__auto__,convert_case__36287__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq36533){
var G__36534 = cljs.core.first(seq36533);
var seq36533__$1 = cljs.core.next(seq36533);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36534,seq36533__$1);
});


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36615 = arguments.length;
var i__4731__auto___36616 = (0);
while(true){
if((i__4731__auto___36616 < len__4730__auto___36615)){
args__4736__auto__.push((arguments[i__4731__auto___36616]));

var G__36617 = (i__4731__auto___36616 + (1));
i__4731__auto___36616 = G__36617;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__36290__auto__,rest__36291__auto__){
if((!((s__36290__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__36290__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__36290__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__36291__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq36535){
var G__36536 = cljs.core.first(seq36535);
var seq36535__$1 = cljs.core.next(seq36535);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36536,seq36535__$1);
});


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36618 = arguments.length;
var i__4731__auto___36619 = (0);
while(true){
if((i__4731__auto___36619 < len__4730__auto___36618)){
args__4736__auto__.push((arguments[i__4731__auto___36619]));

var G__36620 = (i__4731__auto___36619 + (1));
i__4731__auto___36619 = G__36620;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__36290__auto__,rest__36291__auto__){
if((!((s__36290__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__36290__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__36290__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__36291__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq36537){
var G__36538 = cljs.core.first(seq36537);
var seq36537__$1 = cljs.core.next(seq36537);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36538,seq36537__$1);
});


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36621 = arguments.length;
var i__4731__auto___36622 = (0);
while(true){
if((i__4731__auto___36622 < len__4730__auto___36621)){
args__4736__auto__.push((arguments[i__4731__auto___36622]));

var G__36623 = (i__4731__auto___36622 + (1));
i__4731__auto___36622 = G__36623;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__36290__auto__,rest__36291__auto__){
if((!((s__36290__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__36290__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__36290__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__36291__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq36539){
var G__36540 = cljs.core.first(seq36539);
var seq36539__$1 = cljs.core.next(seq36539);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36540,seq36539__$1);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36624 = arguments.length;
var i__4731__auto___36625 = (0);
while(true){
if((i__4731__auto___36625 < len__4730__auto___36624)){
args__4736__auto__.push((arguments[i__4731__auto___36625]));

var G__36626 = (i__4731__auto___36625 + (1));
i__4731__auto___36625 = G__36626;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__36285__auto__,rest__36286__auto__){
var convert_case__36287__auto__ = (function (p1__36284__36288__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__36284__36288__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__36286__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__36285__auto__,convert_case__36287__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq36541){
var G__36542 = cljs.core.first(seq36541);
var seq36541__$1 = cljs.core.next(seq36541);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36542,seq36541__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36627 = arguments.length;
var i__4731__auto___36628 = (0);
while(true){
if((i__4731__auto___36628 < len__4730__auto___36627)){
args__4736__auto__.push((arguments[i__4731__auto___36628]));

var G__36629 = (i__4731__auto___36628 + (1));
i__4731__auto___36628 = G__36629;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__36290__auto__,rest__36291__auto__){
if((!((s__36290__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__36290__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__36290__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__36291__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq36543){
var G__36544 = cljs.core.first(seq36543);
var seq36543__$1 = cljs.core.next(seq36543);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36544,seq36543__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36630 = arguments.length;
var i__4731__auto___36631 = (0);
while(true){
if((i__4731__auto___36631 < len__4730__auto___36630)){
args__4736__auto__.push((arguments[i__4731__auto___36631]));

var G__36632 = (i__4731__auto___36631 + (1));
i__4731__auto___36631 = G__36632;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__36290__auto__,rest__36291__auto__){
if((!((s__36290__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__36290__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__36290__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__36291__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq36545){
var G__36546 = cljs.core.first(seq36545);
var seq36545__$1 = cljs.core.next(seq36545);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36546,seq36545__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36633 = arguments.length;
var i__4731__auto___36634 = (0);
while(true){
if((i__4731__auto___36634 < len__4730__auto___36633)){
args__4736__auto__.push((arguments[i__4731__auto___36634]));

var G__36635 = (i__4731__auto___36634 + (1));
i__4731__auto___36634 = G__36635;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__36290__auto__,rest__36291__auto__){
if((!((s__36290__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__36290__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__36290__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__36291__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq36547){
var G__36548 = cljs.core.first(seq36547);
var seq36547__$1 = cljs.core.next(seq36547);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36548,seq36547__$1);
});


//# sourceMappingURL=camel_snake_kebab.core.js.map
