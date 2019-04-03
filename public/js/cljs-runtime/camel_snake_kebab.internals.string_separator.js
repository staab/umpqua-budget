goog.provide('camel_snake_kebab.internals.string_separator');
goog.require('cljs.core');

/**
 * @interface
 */
camel_snake_kebab.internals.string_separator.StringSeparator = function(){};

/**
 * : StringSeparator -> String -> NonEmptySeq[String]
 */
camel_snake_kebab.internals.string_separator.split = (function camel_snake_kebab$internals$string_separator$split(this$,s){
if((((!((this$ == null)))) && ((!((this$.camel_snake_kebab$internals$string_separator$StringSeparator$split$arity$2 == null)))))){
return this$.camel_snake_kebab$internals$string_separator$StringSeparator$split$arity$2(this$,s);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (camel_snake_kebab.internals.string_separator.split[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(this$,s) : m__4434__auto__.call(null,this$,s));
} else {
var m__4431__auto__ = (camel_snake_kebab.internals.string_separator.split["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(this$,s) : m__4431__auto__.call(null,this$,s));
} else {
throw cljs.core.missing_protocol("StringSeparator.split",this$);
}
}
}
});

RegExp.prototype.camel_snake_kebab$internals$string_separator$StringSeparator$ = cljs.core.PROTOCOL_SENTINEL;

RegExp.prototype.camel_snake_kebab$internals$string_separator$StringSeparator$split$arity$2 = (function (this$,s){
var this$__$1 = this;
return cljs.core.seq(s.split(this$__$1));
});

goog.object.set(camel_snake_kebab.internals.string_separator.StringSeparator,"string",true);

var G__36038_36060 = camel_snake_kebab.internals.string_separator.split;
var G__36039_36061 = "string";
var G__36040_36062 = ((function (G__36038_36060,G__36039_36061){
return (function (this$,s){
return cljs.core.seq(s.split(this$));
});})(G__36038_36060,G__36039_36061))
;
goog.object.set(G__36038_36060,G__36039_36061,G__36040_36062);
camel_snake_kebab.internals.string_separator.classify_char = (function camel_snake_kebab$internals$string_separator$classify_char(c){
var G__36041 = c;
switch (G__36041) {
case "0":
case "1":
case "2":
case "3":
case "4":
case "5":
case "6":
case "7":
case "8":
case "9":
return new cljs.core.Keyword(null,"number","number",1570378438);

break;
case "-":
case "_":
case " ":
case "\t":
case "\n":
case "\u000B":
case "\f":
case "\r":
return new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483);

break;
case "a":
case "b":
case "c":
case "d":
case "e":
case "f":
case "g":
case "h":
case "i":
case "j":
case "k":
case "l":
case "m":
case "n":
case "o":
case "p":
case "q":
case "r":
case "s":
case "t":
case "u":
case "v":
case "w":
case "x":
case "y":
case "z":
return new cljs.core.Keyword(null,"lower","lower",1120320821);

break;
case "A":
case "B":
case "C":
case "D":
case "E":
case "F":
case "G":
case "H":
case "I":
case "J":
case "K":
case "L":
case "M":
case "N":
case "O":
case "P":
case "Q":
case "R":
case "S":
case "T":
case "U":
case "V":
case "W":
case "X":
case "Y":
case "Z":
return new cljs.core.Keyword(null,"upper","upper",246243906);

break;
default:
return new cljs.core.Keyword(null,"other","other",995793544);

}
});
camel_snake_kebab.internals.string_separator.generic_split = (function camel_snake_kebab$internals$string_separator$generic_split(ss){
var cs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(camel_snake_kebab.internals.string_separator.classify_char,ss);
var result = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var start = (0);
var current = (0);
while(true){
var next = (current + (1));
var result_PLUS_new = ((function (result,start,current,next,cs){
return (function (end){
if((end > start)){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(result,ss.substring(start,end));
} else {
return result;
}
});})(result,start,current,next,cs))
;
if((current >= cljs.core.count(ss))){
var or__4131__auto__ = cljs.core.seq(cljs.core.persistent_BANG_(result_PLUS_new(current)));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cs,current),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483))){
var G__36067 = result_PLUS_new(current);
var G__36068 = next;
var G__36069 = next;
result = G__36067;
start = G__36068;
current = G__36069;
continue;
} else {
if((function (){var vec__36046 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(cs,current);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36046,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36046,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36046,(2),null);
return ((((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(a,new cljs.core.Keyword(null,"upper","upper",246243906))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,new cljs.core.Keyword(null,"upper","upper",246243906))))) || (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(a,new cljs.core.Keyword(null,"number","number",1570378438))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,new cljs.core.Keyword(null,"number","number",1570378438))))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,new cljs.core.Keyword(null,"upper","upper",246243906))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,new cljs.core.Keyword(null,"upper","upper",246243906))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.Keyword(null,"lower","lower",1120320821))))));
})()){
var G__36070 = result_PLUS_new(next);
var G__36071 = next;
var G__36072 = next;
result = G__36070;
start = G__36071;
current = G__36072;
continue;
} else {
var G__36073 = result;
var G__36074 = start;
var G__36075 = next;
result = G__36073;
start = G__36074;
current = G__36075;
continue;

}
}
}
break;
}
});
camel_snake_kebab.internals.string_separator.generic_separator = (function (){
if((typeof camel_snake_kebab !== 'undefined') && (typeof camel_snake_kebab.internals !== 'undefined') && (typeof camel_snake_kebab.internals.string_separator !== 'undefined') && (typeof camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator36052 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {camel_snake_kebab.internals.string_separator.StringSeparator}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator36052 = (function (meta36053){
this.meta36053 = meta36053;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator36052.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36054,meta36053__$1){
var self__ = this;
var _36054__$1 = this;
return (new camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator36052(meta36053__$1));
});

camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator36052.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36054){
var self__ = this;
var _36054__$1 = this;
return self__.meta36053;
});

camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator36052.prototype.camel_snake_kebab$internals$string_separator$StringSeparator$ = cljs.core.PROTOCOL_SENTINEL;

camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator36052.prototype.camel_snake_kebab$internals$string_separator$StringSeparator$split$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return camel_snake_kebab.internals.string_separator.generic_split(s);
});

camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator36052.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta36053","meta36053",-2046822205,null)], null);
});

camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator36052.cljs$lang$type = true;

camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator36052.cljs$lang$ctorStr = "camel-snake-kebab.internals.string-separator/t_camel_snake_kebab$internals$string_separator36052";

camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator36052.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"camel-snake-kebab.internals.string-separator/t_camel_snake_kebab$internals$string_separator36052");
});

/**
 * Positional factory function for camel-snake-kebab.internals.string-separator/t_camel_snake_kebab$internals$string_separator36052.
 */
camel_snake_kebab.internals.string_separator.__GT_t_camel_snake_kebab$internals$string_separator36052 = (function camel_snake_kebab$internals$string_separator$__GT_t_camel_snake_kebab$internals$string_separator36052(meta36053){
return (new camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator36052(meta36053));
});

}

return (new camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator36052(cljs.core.PersistentArrayMap.EMPTY));
})()
;

//# sourceMappingURL=camel_snake_kebab.internals.string_separator.js.map
