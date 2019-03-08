goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__33030 = coll;
var G__33031 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__33030,G__33031) : shadow.dom.lazy_native_coll_seq.call(null,G__33030,G__33031));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4131__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__33034 = arguments.length;
switch (G__33034) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__33036 = arguments.length;
switch (G__33036) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__33040 = arguments.length;
switch (G__33040) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__33045 = arguments.length;
switch (G__33045) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__33049 = arguments.length;
switch (G__33049) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__33050 = document;
var G__33051 = shadow.dom.dom_node(el);
return goog.dom.contains(G__33050,G__33051);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__33052 = shadow.dom.dom_node(parent);
var G__33053 = shadow.dom.dom_node(el);
return goog.dom.contains(G__33052,G__33053);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__33055 = shadow.dom.dom_node(el);
var G__33056 = cls;
return goog.dom.classlist.add(G__33055,G__33056);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__33058 = shadow.dom.dom_node(el);
var G__33059 = cls;
return goog.dom.classlist.remove(G__33058,G__33059);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__33061 = arguments.length;
switch (G__33061) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__33062 = shadow.dom.dom_node(el);
var G__33063 = cls;
return goog.dom.classlist.toggle(G__33062,G__33063);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e33064){if((e33064 instanceof Object)){
var e = e33064;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33064;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__33065 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33066 = null;
var count__33067 = (0);
var i__33068 = (0);
while(true){
if((i__33068 < count__33067)){
var el = chunk__33066.cljs$core$IIndexed$_nth$arity$2(null,i__33068);
var handler_33637__$1 = ((function (seq__33065,chunk__33066,count__33067,i__33068,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33065,chunk__33066,count__33067,i__33068,el))
;
var G__33077_33638 = el;
var G__33078_33639 = cljs.core.name(ev);
var G__33079_33640 = handler_33637__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33077_33638,G__33078_33639,G__33079_33640) : shadow.dom.dom_listen.call(null,G__33077_33638,G__33078_33639,G__33079_33640));


var G__33641 = seq__33065;
var G__33642 = chunk__33066;
var G__33643 = count__33067;
var G__33644 = (i__33068 + (1));
seq__33065 = G__33641;
chunk__33066 = G__33642;
count__33067 = G__33643;
i__33068 = G__33644;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__33065);
if(temp__5720__auto__){
var seq__33065__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33065__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33065__$1);
var G__33645 = cljs.core.chunk_rest(seq__33065__$1);
var G__33646 = c__4550__auto__;
var G__33647 = cljs.core.count(c__4550__auto__);
var G__33648 = (0);
seq__33065 = G__33645;
chunk__33066 = G__33646;
count__33067 = G__33647;
i__33068 = G__33648;
continue;
} else {
var el = cljs.core.first(seq__33065__$1);
var handler_33649__$1 = ((function (seq__33065,chunk__33066,count__33067,i__33068,el,seq__33065__$1,temp__5720__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33065,chunk__33066,count__33067,i__33068,el,seq__33065__$1,temp__5720__auto__))
;
var G__33080_33650 = el;
var G__33081_33651 = cljs.core.name(ev);
var G__33082_33652 = handler_33649__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33080_33650,G__33081_33651,G__33082_33652) : shadow.dom.dom_listen.call(null,G__33080_33650,G__33081_33651,G__33082_33652));


var G__33653 = cljs.core.next(seq__33065__$1);
var G__33654 = null;
var G__33655 = (0);
var G__33656 = (0);
seq__33065 = G__33653;
chunk__33066 = G__33654;
count__33067 = G__33655;
i__33068 = G__33656;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__33090 = arguments.length;
switch (G__33090) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__33096 = shadow.dom.dom_node(el);
var G__33097 = cljs.core.name(ev);
var G__33098 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33096,G__33097,G__33098) : shadow.dom.dom_listen.call(null,G__33096,G__33097,G__33098));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__33099 = shadow.dom.dom_node(el);
var G__33100 = cljs.core.name(ev);
var G__33101 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__33099,G__33100,G__33101) : shadow.dom.dom_listen_remove.call(null,G__33099,G__33100,G__33101));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__33103 = cljs.core.seq(events);
var chunk__33104 = null;
var count__33105 = (0);
var i__33106 = (0);
while(true){
if((i__33106 < count__33105)){
var vec__33115 = chunk__33104.cljs$core$IIndexed$_nth$arity$2(null,i__33106);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33115,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33115,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33659 = seq__33103;
var G__33660 = chunk__33104;
var G__33661 = count__33105;
var G__33662 = (i__33106 + (1));
seq__33103 = G__33659;
chunk__33104 = G__33660;
count__33105 = G__33661;
i__33106 = G__33662;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__33103);
if(temp__5720__auto__){
var seq__33103__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33103__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33103__$1);
var G__33663 = cljs.core.chunk_rest(seq__33103__$1);
var G__33664 = c__4550__auto__;
var G__33665 = cljs.core.count(c__4550__auto__);
var G__33666 = (0);
seq__33103 = G__33663;
chunk__33104 = G__33664;
count__33105 = G__33665;
i__33106 = G__33666;
continue;
} else {
var vec__33119 = cljs.core.first(seq__33103__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33119,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33119,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33667 = cljs.core.next(seq__33103__$1);
var G__33668 = null;
var G__33669 = (0);
var G__33670 = (0);
seq__33103 = G__33667;
chunk__33104 = G__33668;
count__33105 = G__33669;
i__33106 = G__33670;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__33122 = cljs.core.seq(styles);
var chunk__33123 = null;
var count__33124 = (0);
var i__33125 = (0);
while(true){
if((i__33125 < count__33124)){
var vec__33142 = chunk__33123.cljs$core$IIndexed$_nth$arity$2(null,i__33125);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33142,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33142,(1),null);
var G__33145_33681 = dom;
var G__33146_33682 = cljs.core.name(k);
var G__33147_33683 = (((v == null))?"":v);
goog.style.setStyle(G__33145_33681,G__33146_33682,G__33147_33683);


var G__33684 = seq__33122;
var G__33685 = chunk__33123;
var G__33686 = count__33124;
var G__33687 = (i__33125 + (1));
seq__33122 = G__33684;
chunk__33123 = G__33685;
count__33124 = G__33686;
i__33125 = G__33687;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__33122);
if(temp__5720__auto__){
var seq__33122__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33122__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33122__$1);
var G__33689 = cljs.core.chunk_rest(seq__33122__$1);
var G__33690 = c__4550__auto__;
var G__33691 = cljs.core.count(c__4550__auto__);
var G__33692 = (0);
seq__33122 = G__33689;
chunk__33123 = G__33690;
count__33124 = G__33691;
i__33125 = G__33692;
continue;
} else {
var vec__33148 = cljs.core.first(seq__33122__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33148,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33148,(1),null);
var G__33151_33694 = dom;
var G__33152_33695 = cljs.core.name(k);
var G__33153_33696 = (((v == null))?"":v);
goog.style.setStyle(G__33151_33694,G__33152_33695,G__33153_33696);


var G__33697 = cljs.core.next(seq__33122__$1);
var G__33698 = null;
var G__33699 = (0);
var G__33700 = (0);
seq__33122 = G__33697;
chunk__33123 = G__33698;
count__33124 = G__33699;
i__33125 = G__33700;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__33158_33701 = key;
var G__33158_33702__$1 = (((G__33158_33701 instanceof cljs.core.Keyword))?G__33158_33701.fqn:null);
switch (G__33158_33702__$1) {
case "id":
el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "class":
el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_33707 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_33707,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_33707,"aria-");
}
})())){
el.setAttribute(ks_33707,value);
} else {
(el[ks_33707] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__33164 = shadow.dom.dom_node(el);
var G__33165 = cls;
return goog.dom.classlist.contains(G__33164,G__33165);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33170){
var map__33171 = p__33170;
var map__33171__$1 = (((((!((map__33171 == null))))?(((((map__33171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33171):map__33171);
var props = map__33171__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33171__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33173 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33173,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33173,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33173,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33177 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33177,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33177;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33181 = arguments.length;
switch (G__33181) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5720__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5720__auto__)){
var n = temp__5720__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5720__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5720__auto__)){
var n = temp__5720__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33188){
var vec__33189 = p__33188;
var seq__33190 = cljs.core.seq(vec__33189);
var first__33191 = cljs.core.first(seq__33190);
var seq__33190__$1 = cljs.core.next(seq__33190);
var nn = first__33191;
var first__33191__$1 = cljs.core.first(seq__33190__$1);
var seq__33190__$2 = cljs.core.next(seq__33190__$1);
var np = first__33191__$1;
var nc = seq__33190__$2;
var node = vec__33189;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33192 = nn;
var G__33193 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33192,G__33193) : create_fn.call(null,G__33192,G__33193));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33194 = nn;
var G__33195 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33194,G__33195) : create_fn.call(null,G__33194,G__33195));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33196 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33196,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33196,(1),null);
var seq__33199_33723 = cljs.core.seq(node_children);
var chunk__33200_33724 = null;
var count__33201_33725 = (0);
var i__33202_33726 = (0);
while(true){
if((i__33202_33726 < count__33201_33725)){
var child_struct_33728 = chunk__33200_33724.cljs$core$IIndexed$_nth$arity$2(null,i__33202_33726);
var children_33729 = shadow.dom.dom_node(child_struct_33728);
if(cljs.core.seq_QMARK_(children_33729)){
var seq__33230_33730 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33729));
var chunk__33232_33731 = null;
var count__33233_33732 = (0);
var i__33234_33733 = (0);
while(true){
if((i__33234_33733 < count__33233_33732)){
var child_33735 = chunk__33232_33731.cljs$core$IIndexed$_nth$arity$2(null,i__33234_33733);
if(cljs.core.truth_(child_33735)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33735);


var G__33737 = seq__33230_33730;
var G__33738 = chunk__33232_33731;
var G__33739 = count__33233_33732;
var G__33740 = (i__33234_33733 + (1));
seq__33230_33730 = G__33737;
chunk__33232_33731 = G__33738;
count__33233_33732 = G__33739;
i__33234_33733 = G__33740;
continue;
} else {
var G__33741 = seq__33230_33730;
var G__33742 = chunk__33232_33731;
var G__33743 = count__33233_33732;
var G__33744 = (i__33234_33733 + (1));
seq__33230_33730 = G__33741;
chunk__33232_33731 = G__33742;
count__33233_33732 = G__33743;
i__33234_33733 = G__33744;
continue;
}
} else {
var temp__5720__auto___33745 = cljs.core.seq(seq__33230_33730);
if(temp__5720__auto___33745){
var seq__33230_33746__$1 = temp__5720__auto___33745;
if(cljs.core.chunked_seq_QMARK_(seq__33230_33746__$1)){
var c__4550__auto___33747 = cljs.core.chunk_first(seq__33230_33746__$1);
var G__33748 = cljs.core.chunk_rest(seq__33230_33746__$1);
var G__33749 = c__4550__auto___33747;
var G__33750 = cljs.core.count(c__4550__auto___33747);
var G__33751 = (0);
seq__33230_33730 = G__33748;
chunk__33232_33731 = G__33749;
count__33233_33732 = G__33750;
i__33234_33733 = G__33751;
continue;
} else {
var child_33752 = cljs.core.first(seq__33230_33746__$1);
if(cljs.core.truth_(child_33752)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33752);


var G__33753 = cljs.core.next(seq__33230_33746__$1);
var G__33754 = null;
var G__33755 = (0);
var G__33756 = (0);
seq__33230_33730 = G__33753;
chunk__33232_33731 = G__33754;
count__33233_33732 = G__33755;
i__33234_33733 = G__33756;
continue;
} else {
var G__33757 = cljs.core.next(seq__33230_33746__$1);
var G__33758 = null;
var G__33759 = (0);
var G__33760 = (0);
seq__33230_33730 = G__33757;
chunk__33232_33731 = G__33758;
count__33233_33732 = G__33759;
i__33234_33733 = G__33760;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33729);
}


var G__33761 = seq__33199_33723;
var G__33762 = chunk__33200_33724;
var G__33763 = count__33201_33725;
var G__33764 = (i__33202_33726 + (1));
seq__33199_33723 = G__33761;
chunk__33200_33724 = G__33762;
count__33201_33725 = G__33763;
i__33202_33726 = G__33764;
continue;
} else {
var temp__5720__auto___33765 = cljs.core.seq(seq__33199_33723);
if(temp__5720__auto___33765){
var seq__33199_33766__$1 = temp__5720__auto___33765;
if(cljs.core.chunked_seq_QMARK_(seq__33199_33766__$1)){
var c__4550__auto___33767 = cljs.core.chunk_first(seq__33199_33766__$1);
var G__33768 = cljs.core.chunk_rest(seq__33199_33766__$1);
var G__33769 = c__4550__auto___33767;
var G__33770 = cljs.core.count(c__4550__auto___33767);
var G__33771 = (0);
seq__33199_33723 = G__33768;
chunk__33200_33724 = G__33769;
count__33201_33725 = G__33770;
i__33202_33726 = G__33771;
continue;
} else {
var child_struct_33774 = cljs.core.first(seq__33199_33766__$1);
var children_33775 = shadow.dom.dom_node(child_struct_33774);
if(cljs.core.seq_QMARK_(children_33775)){
var seq__33243_33776 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33775));
var chunk__33245_33777 = null;
var count__33246_33778 = (0);
var i__33247_33779 = (0);
while(true){
if((i__33247_33779 < count__33246_33778)){
var child_33780 = chunk__33245_33777.cljs$core$IIndexed$_nth$arity$2(null,i__33247_33779);
if(cljs.core.truth_(child_33780)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33780);


var G__33781 = seq__33243_33776;
var G__33782 = chunk__33245_33777;
var G__33783 = count__33246_33778;
var G__33784 = (i__33247_33779 + (1));
seq__33243_33776 = G__33781;
chunk__33245_33777 = G__33782;
count__33246_33778 = G__33783;
i__33247_33779 = G__33784;
continue;
} else {
var G__33785 = seq__33243_33776;
var G__33786 = chunk__33245_33777;
var G__33787 = count__33246_33778;
var G__33788 = (i__33247_33779 + (1));
seq__33243_33776 = G__33785;
chunk__33245_33777 = G__33786;
count__33246_33778 = G__33787;
i__33247_33779 = G__33788;
continue;
}
} else {
var temp__5720__auto___33789__$1 = cljs.core.seq(seq__33243_33776);
if(temp__5720__auto___33789__$1){
var seq__33243_33790__$1 = temp__5720__auto___33789__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33243_33790__$1)){
var c__4550__auto___33791 = cljs.core.chunk_first(seq__33243_33790__$1);
var G__33792 = cljs.core.chunk_rest(seq__33243_33790__$1);
var G__33793 = c__4550__auto___33791;
var G__33794 = cljs.core.count(c__4550__auto___33791);
var G__33795 = (0);
seq__33243_33776 = G__33792;
chunk__33245_33777 = G__33793;
count__33246_33778 = G__33794;
i__33247_33779 = G__33795;
continue;
} else {
var child_33796 = cljs.core.first(seq__33243_33790__$1);
if(cljs.core.truth_(child_33796)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33796);


var G__33797 = cljs.core.next(seq__33243_33790__$1);
var G__33798 = null;
var G__33799 = (0);
var G__33800 = (0);
seq__33243_33776 = G__33797;
chunk__33245_33777 = G__33798;
count__33246_33778 = G__33799;
i__33247_33779 = G__33800;
continue;
} else {
var G__33802 = cljs.core.next(seq__33243_33790__$1);
var G__33803 = null;
var G__33804 = (0);
var G__33805 = (0);
seq__33243_33776 = G__33802;
chunk__33245_33777 = G__33803;
count__33246_33778 = G__33804;
i__33247_33779 = G__33805;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33775);
}


var G__33806 = cljs.core.next(seq__33199_33766__$1);
var G__33807 = null;
var G__33808 = (0);
var G__33809 = (0);
seq__33199_33723 = G__33806;
chunk__33200_33724 = G__33807;
count__33201_33725 = G__33808;
i__33202_33726 = G__33809;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__33260 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__33260);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__33262 = cljs.core.seq(node);
var chunk__33263 = null;
var count__33264 = (0);
var i__33265 = (0);
while(true){
if((i__33265 < count__33264)){
var n = chunk__33263.cljs$core$IIndexed$_nth$arity$2(null,i__33265);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33811 = seq__33262;
var G__33812 = chunk__33263;
var G__33813 = count__33264;
var G__33814 = (i__33265 + (1));
seq__33262 = G__33811;
chunk__33263 = G__33812;
count__33264 = G__33813;
i__33265 = G__33814;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__33262);
if(temp__5720__auto__){
var seq__33262__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33262__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33262__$1);
var G__33815 = cljs.core.chunk_rest(seq__33262__$1);
var G__33816 = c__4550__auto__;
var G__33817 = cljs.core.count(c__4550__auto__);
var G__33818 = (0);
seq__33262 = G__33815;
chunk__33263 = G__33816;
count__33264 = G__33817;
i__33265 = G__33818;
continue;
} else {
var n = cljs.core.first(seq__33262__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33819 = cljs.core.next(seq__33262__$1);
var G__33820 = null;
var G__33821 = (0);
var G__33822 = (0);
seq__33262 = G__33819;
chunk__33263 = G__33820;
count__33264 = G__33821;
i__33265 = G__33822;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__33269 = shadow.dom.dom_node(new$);
var G__33270 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__33269,G__33270);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__33274 = arguments.length;
switch (G__33274) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__33279 = arguments.length;
switch (G__33279) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__33285 = arguments.length;
switch (G__33285) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4131__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___33835 = arguments.length;
var i__4731__auto___33836 = (0);
while(true){
if((i__4731__auto___33836 < len__4730__auto___33835)){
args__4736__auto__.push((arguments[i__4731__auto___33836]));

var G__33837 = (i__4731__auto___33836 + (1));
i__4731__auto___33836 = G__33837;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__33291_33838 = cljs.core.seq(nodes);
var chunk__33292_33839 = null;
var count__33293_33840 = (0);
var i__33294_33841 = (0);
while(true){
if((i__33294_33841 < count__33293_33840)){
var node_33842 = chunk__33292_33839.cljs$core$IIndexed$_nth$arity$2(null,i__33294_33841);
fragment.appendChild(shadow.dom._to_dom(node_33842));


var G__33843 = seq__33291_33838;
var G__33844 = chunk__33292_33839;
var G__33845 = count__33293_33840;
var G__33846 = (i__33294_33841 + (1));
seq__33291_33838 = G__33843;
chunk__33292_33839 = G__33844;
count__33293_33840 = G__33845;
i__33294_33841 = G__33846;
continue;
} else {
var temp__5720__auto___33847 = cljs.core.seq(seq__33291_33838);
if(temp__5720__auto___33847){
var seq__33291_33848__$1 = temp__5720__auto___33847;
if(cljs.core.chunked_seq_QMARK_(seq__33291_33848__$1)){
var c__4550__auto___33849 = cljs.core.chunk_first(seq__33291_33848__$1);
var G__33850 = cljs.core.chunk_rest(seq__33291_33848__$1);
var G__33851 = c__4550__auto___33849;
var G__33852 = cljs.core.count(c__4550__auto___33849);
var G__33853 = (0);
seq__33291_33838 = G__33850;
chunk__33292_33839 = G__33851;
count__33293_33840 = G__33852;
i__33294_33841 = G__33853;
continue;
} else {
var node_33854 = cljs.core.first(seq__33291_33848__$1);
fragment.appendChild(shadow.dom._to_dom(node_33854));


var G__33855 = cljs.core.next(seq__33291_33848__$1);
var G__33856 = null;
var G__33857 = (0);
var G__33858 = (0);
seq__33291_33838 = G__33855;
chunk__33292_33839 = G__33856;
count__33293_33840 = G__33857;
i__33294_33841 = G__33858;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq33288){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33288));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33309_33859 = cljs.core.seq(scripts);
var chunk__33310_33860 = null;
var count__33311_33861 = (0);
var i__33312_33862 = (0);
while(true){
if((i__33312_33862 < count__33311_33861)){
var vec__33320_33863 = chunk__33310_33860.cljs$core$IIndexed$_nth$arity$2(null,i__33312_33862);
var script_tag_33864 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33320_33863,(0),null);
var script_body_33865 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33320_33863,(1),null);
eval(script_body_33865);


var G__33866 = seq__33309_33859;
var G__33867 = chunk__33310_33860;
var G__33868 = count__33311_33861;
var G__33869 = (i__33312_33862 + (1));
seq__33309_33859 = G__33866;
chunk__33310_33860 = G__33867;
count__33311_33861 = G__33868;
i__33312_33862 = G__33869;
continue;
} else {
var temp__5720__auto___33870 = cljs.core.seq(seq__33309_33859);
if(temp__5720__auto___33870){
var seq__33309_33871__$1 = temp__5720__auto___33870;
if(cljs.core.chunked_seq_QMARK_(seq__33309_33871__$1)){
var c__4550__auto___33872 = cljs.core.chunk_first(seq__33309_33871__$1);
var G__33873 = cljs.core.chunk_rest(seq__33309_33871__$1);
var G__33874 = c__4550__auto___33872;
var G__33875 = cljs.core.count(c__4550__auto___33872);
var G__33876 = (0);
seq__33309_33859 = G__33873;
chunk__33310_33860 = G__33874;
count__33311_33861 = G__33875;
i__33312_33862 = G__33876;
continue;
} else {
var vec__33323_33877 = cljs.core.first(seq__33309_33871__$1);
var script_tag_33878 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33323_33877,(0),null);
var script_body_33879 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33323_33877,(1),null);
eval(script_body_33879);


var G__33880 = cljs.core.next(seq__33309_33871__$1);
var G__33881 = null;
var G__33882 = (0);
var G__33883 = (0);
seq__33309_33859 = G__33880;
chunk__33310_33860 = G__33881;
count__33311_33861 = G__33882;
i__33312_33862 = G__33883;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__33326){
var vec__33327 = p__33326;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33327,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33327,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__33330 = shadow.dom.dom_node(el);
var G__33331 = cls;
return goog.dom.getAncestorByClass(G__33330,G__33331);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__33333 = arguments.length;
switch (G__33333) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__33334 = shadow.dom.dom_node(el);
var G__33335 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__33334,G__33335);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__33336 = shadow.dom.dom_node(el);
var G__33337 = cljs.core.name(tag);
var G__33338 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__33336,G__33337,G__33338);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__33339 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__33339);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__33340 = shadow.dom.dom_node(dom);
var G__33341 = value;
return goog.dom.forms.setValue(G__33340,G__33341);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__33344 = cljs.core.seq(style_keys);
var chunk__33345 = null;
var count__33346 = (0);
var i__33347 = (0);
while(true){
if((i__33347 < count__33346)){
var it = chunk__33345.cljs$core$IIndexed$_nth$arity$2(null,i__33347);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33897 = seq__33344;
var G__33898 = chunk__33345;
var G__33899 = count__33346;
var G__33900 = (i__33347 + (1));
seq__33344 = G__33897;
chunk__33345 = G__33898;
count__33346 = G__33899;
i__33347 = G__33900;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__33344);
if(temp__5720__auto__){
var seq__33344__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33344__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33344__$1);
var G__33901 = cljs.core.chunk_rest(seq__33344__$1);
var G__33902 = c__4550__auto__;
var G__33903 = cljs.core.count(c__4550__auto__);
var G__33904 = (0);
seq__33344 = G__33901;
chunk__33345 = G__33902;
count__33346 = G__33903;
i__33347 = G__33904;
continue;
} else {
var it = cljs.core.first(seq__33344__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33905 = cljs.core.next(seq__33344__$1);
var G__33906 = null;
var G__33907 = (0);
var G__33908 = (0);
seq__33344 = G__33905;
chunk__33345 = G__33906;
count__33346 = G__33907;
i__33347 = G__33908;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k33354,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__33365 = k33354;
var G__33365__$1 = (((G__33365 instanceof cljs.core.Keyword))?G__33365.fqn:null);
switch (G__33365__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33354,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__33372){
var vec__33373 = p__33372;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33373,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33373,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33353){
var self__ = this;
var G__33353__$1 = this;
return (new cljs.core.RecordIter((0),G__33353__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__33397 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__33397(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33355,other33356){
var self__ = this;
var this33355__$1 = this;
return (((!((other33356 == null)))) && ((this33355__$1.constructor === other33356.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33355__$1.x,other33356.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33355__$1.y,other33356.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33355__$1.__extmap,other33356.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__33353){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__33399 = cljs.core.keyword_identical_QMARK_;
var expr__33400 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__33402 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__33403 = expr__33400;
return (pred__33399.cljs$core$IFn$_invoke$arity$2 ? pred__33399.cljs$core$IFn$_invoke$arity$2(G__33402,G__33403) : pred__33399.call(null,G__33402,G__33403));
})())){
return (new shadow.dom.Coordinate(G__33353,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33404 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__33405 = expr__33400;
return (pred__33399.cljs$core$IFn$_invoke$arity$2 ? pred__33399.cljs$core$IFn$_invoke$arity$2(G__33404,G__33405) : pred__33399.call(null,G__33404,G__33405));
})())){
return (new shadow.dom.Coordinate(self__.x,G__33353,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__33353),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__33353){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33353,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33362){
var extmap__4424__auto__ = (function (){var G__33413 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33362,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33362)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33413);
} else {
return G__33413;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33362),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33362),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__33416 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__33416);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__33417 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__33417);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__33418 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__33418);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k33420,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__33424 = k33420;
var G__33424__$1 = (((G__33424 instanceof cljs.core.Keyword))?G__33424.fqn:null);
switch (G__33424__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33420,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__33428){
var vec__33430 = p__33428;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33430,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33430,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Size{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33419){
var self__ = this;
var G__33419__$1 = this;
return (new cljs.core.RecordIter((0),G__33419__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__33436 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__33436(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33421,other33422){
var self__ = this;
var this33421__$1 = this;
return (((!((other33422 == null)))) && ((this33421__$1.constructor === other33422.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33421__$1.w,other33422.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33421__$1.h,other33422.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33421__$1.__extmap,other33422.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__33419){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__33437 = cljs.core.keyword_identical_QMARK_;
var expr__33438 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__33440 = new cljs.core.Keyword(null,"w","w",354169001);
var G__33441 = expr__33438;
return (pred__33437.cljs$core$IFn$_invoke$arity$2 ? pred__33437.cljs$core$IFn$_invoke$arity$2(G__33440,G__33441) : pred__33437.call(null,G__33440,G__33441));
})())){
return (new shadow.dom.Size(G__33419,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33442 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__33443 = expr__33438;
return (pred__33437.cljs$core$IFn$_invoke$arity$2 ? pred__33437.cljs$core$IFn$_invoke$arity$2(G__33442,G__33443) : pred__33437.call(null,G__33442,G__33443));
})())){
return (new shadow.dom.Size(self__.w,G__33419,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__33419),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__33419){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33419,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33423){
var extmap__4424__auto__ = (function (){var G__33449 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33423,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33423)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33449);
} else {
return G__33449;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33423),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33423),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__33451 = shadow.dom.dom_node(el);
return goog.style.getSize(G__33451);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4604__auto__ = opts;
var l__4605__auto__ = a__4604__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4605__auto__)){
var G__33982 = (i + (1));
var G__33983 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__33982;
ret = G__33983;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33456){
var vec__33457 = p__33456;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33457,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33457,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33461 = arguments.length;
switch (G__33461) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__33462_34001 = new_node;
var G__33463_34002 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__33462_34001,G__33463_34002);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__33465_34003 = new_node;
var G__33466_34004 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__33465_34003,G__33466_34004);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5718__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5718__auto__)){
var child = temp__5718__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__34005 = ps;
var G__34006 = (i + (1));
el__$1 = G__34005;
i = G__34006;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__33472 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__33472);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__33482 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__33482);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__33483 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__33483);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__33484 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33484,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33484,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33484,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33489_34007 = cljs.core.seq(props);
var chunk__33490_34008 = null;
var count__33491_34009 = (0);
var i__33492_34010 = (0);
while(true){
if((i__33492_34010 < count__33491_34009)){
var vec__33502_34011 = chunk__33490_34008.cljs$core$IIndexed$_nth$arity$2(null,i__33492_34010);
var k_34012 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33502_34011,(0),null);
var v_34013 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33502_34011,(1),null);
el.setAttributeNS((function (){var temp__5720__auto__ = cljs.core.namespace(k_34012);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34012),v_34013);


var G__34021 = seq__33489_34007;
var G__34022 = chunk__33490_34008;
var G__34023 = count__33491_34009;
var G__34024 = (i__33492_34010 + (1));
seq__33489_34007 = G__34021;
chunk__33490_34008 = G__34022;
count__33491_34009 = G__34023;
i__33492_34010 = G__34024;
continue;
} else {
var temp__5720__auto___34026 = cljs.core.seq(seq__33489_34007);
if(temp__5720__auto___34026){
var seq__33489_34027__$1 = temp__5720__auto___34026;
if(cljs.core.chunked_seq_QMARK_(seq__33489_34027__$1)){
var c__4550__auto___34029 = cljs.core.chunk_first(seq__33489_34027__$1);
var G__34030 = cljs.core.chunk_rest(seq__33489_34027__$1);
var G__34031 = c__4550__auto___34029;
var G__34032 = cljs.core.count(c__4550__auto___34029);
var G__34033 = (0);
seq__33489_34007 = G__34030;
chunk__33490_34008 = G__34031;
count__33491_34009 = G__34032;
i__33492_34010 = G__34033;
continue;
} else {
var vec__33507_34034 = cljs.core.first(seq__33489_34027__$1);
var k_34035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33507_34034,(0),null);
var v_34036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33507_34034,(1),null);
el.setAttributeNS((function (){var temp__5720__auto____$1 = cljs.core.namespace(k_34035);
if(cljs.core.truth_(temp__5720__auto____$1)){
var ns = temp__5720__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34035),v_34036);


var G__34037 = cljs.core.next(seq__33489_34027__$1);
var G__34038 = null;
var G__34039 = (0);
var G__34040 = (0);
seq__33489_34007 = G__34037;
chunk__33490_34008 = G__34038;
count__33491_34009 = G__34039;
i__33492_34010 = G__34040;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__33516 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33516,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33516,(1),null);
var seq__33519_34041 = cljs.core.seq(node_children);
var chunk__33521_34042 = null;
var count__33522_34043 = (0);
var i__33523_34044 = (0);
while(true){
if((i__33523_34044 < count__33522_34043)){
var child_struct_34045 = chunk__33521_34042.cljs$core$IIndexed$_nth$arity$2(null,i__33523_34044);
if((!((child_struct_34045 == null)))){
if(typeof child_struct_34045 === 'string'){
var text_34046 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34046),child_struct_34045].join(''));
} else {
var children_34047 = shadow.dom.svg_node(child_struct_34045);
if(cljs.core.seq_QMARK_(children_34047)){
var seq__33553_34048 = cljs.core.seq(children_34047);
var chunk__33555_34049 = null;
var count__33556_34050 = (0);
var i__33557_34051 = (0);
while(true){
if((i__33557_34051 < count__33556_34050)){
var child_34052 = chunk__33555_34049.cljs$core$IIndexed$_nth$arity$2(null,i__33557_34051);
if(cljs.core.truth_(child_34052)){
node.appendChild(child_34052);


var G__34053 = seq__33553_34048;
var G__34054 = chunk__33555_34049;
var G__34055 = count__33556_34050;
var G__34056 = (i__33557_34051 + (1));
seq__33553_34048 = G__34053;
chunk__33555_34049 = G__34054;
count__33556_34050 = G__34055;
i__33557_34051 = G__34056;
continue;
} else {
var G__34057 = seq__33553_34048;
var G__34058 = chunk__33555_34049;
var G__34059 = count__33556_34050;
var G__34060 = (i__33557_34051 + (1));
seq__33553_34048 = G__34057;
chunk__33555_34049 = G__34058;
count__33556_34050 = G__34059;
i__33557_34051 = G__34060;
continue;
}
} else {
var temp__5720__auto___34061 = cljs.core.seq(seq__33553_34048);
if(temp__5720__auto___34061){
var seq__33553_34062__$1 = temp__5720__auto___34061;
if(cljs.core.chunked_seq_QMARK_(seq__33553_34062__$1)){
var c__4550__auto___34063 = cljs.core.chunk_first(seq__33553_34062__$1);
var G__34064 = cljs.core.chunk_rest(seq__33553_34062__$1);
var G__34065 = c__4550__auto___34063;
var G__34066 = cljs.core.count(c__4550__auto___34063);
var G__34067 = (0);
seq__33553_34048 = G__34064;
chunk__33555_34049 = G__34065;
count__33556_34050 = G__34066;
i__33557_34051 = G__34067;
continue;
} else {
var child_34068 = cljs.core.first(seq__33553_34062__$1);
if(cljs.core.truth_(child_34068)){
node.appendChild(child_34068);


var G__34069 = cljs.core.next(seq__33553_34062__$1);
var G__34070 = null;
var G__34071 = (0);
var G__34072 = (0);
seq__33553_34048 = G__34069;
chunk__33555_34049 = G__34070;
count__33556_34050 = G__34071;
i__33557_34051 = G__34072;
continue;
} else {
var G__34073 = cljs.core.next(seq__33553_34062__$1);
var G__34074 = null;
var G__34075 = (0);
var G__34076 = (0);
seq__33553_34048 = G__34073;
chunk__33555_34049 = G__34074;
count__33556_34050 = G__34075;
i__33557_34051 = G__34076;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34047);
}
}


var G__34082 = seq__33519_34041;
var G__34083 = chunk__33521_34042;
var G__34084 = count__33522_34043;
var G__34085 = (i__33523_34044 + (1));
seq__33519_34041 = G__34082;
chunk__33521_34042 = G__34083;
count__33522_34043 = G__34084;
i__33523_34044 = G__34085;
continue;
} else {
var G__34086 = seq__33519_34041;
var G__34087 = chunk__33521_34042;
var G__34088 = count__33522_34043;
var G__34089 = (i__33523_34044 + (1));
seq__33519_34041 = G__34086;
chunk__33521_34042 = G__34087;
count__33522_34043 = G__34088;
i__33523_34044 = G__34089;
continue;
}
} else {
var temp__5720__auto___34090 = cljs.core.seq(seq__33519_34041);
if(temp__5720__auto___34090){
var seq__33519_34091__$1 = temp__5720__auto___34090;
if(cljs.core.chunked_seq_QMARK_(seq__33519_34091__$1)){
var c__4550__auto___34092 = cljs.core.chunk_first(seq__33519_34091__$1);
var G__34093 = cljs.core.chunk_rest(seq__33519_34091__$1);
var G__34094 = c__4550__auto___34092;
var G__34095 = cljs.core.count(c__4550__auto___34092);
var G__34096 = (0);
seq__33519_34041 = G__34093;
chunk__33521_34042 = G__34094;
count__33522_34043 = G__34095;
i__33523_34044 = G__34096;
continue;
} else {
var child_struct_34097 = cljs.core.first(seq__33519_34091__$1);
if((!((child_struct_34097 == null)))){
if(typeof child_struct_34097 === 'string'){
var text_34098 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34098),child_struct_34097].join(''));
} else {
var children_34099 = shadow.dom.svg_node(child_struct_34097);
if(cljs.core.seq_QMARK_(children_34099)){
var seq__33565_34100 = cljs.core.seq(children_34099);
var chunk__33567_34101 = null;
var count__33568_34102 = (0);
var i__33569_34103 = (0);
while(true){
if((i__33569_34103 < count__33568_34102)){
var child_34104 = chunk__33567_34101.cljs$core$IIndexed$_nth$arity$2(null,i__33569_34103);
if(cljs.core.truth_(child_34104)){
node.appendChild(child_34104);


var G__34105 = seq__33565_34100;
var G__34106 = chunk__33567_34101;
var G__34107 = count__33568_34102;
var G__34108 = (i__33569_34103 + (1));
seq__33565_34100 = G__34105;
chunk__33567_34101 = G__34106;
count__33568_34102 = G__34107;
i__33569_34103 = G__34108;
continue;
} else {
var G__34109 = seq__33565_34100;
var G__34110 = chunk__33567_34101;
var G__34111 = count__33568_34102;
var G__34112 = (i__33569_34103 + (1));
seq__33565_34100 = G__34109;
chunk__33567_34101 = G__34110;
count__33568_34102 = G__34111;
i__33569_34103 = G__34112;
continue;
}
} else {
var temp__5720__auto___34114__$1 = cljs.core.seq(seq__33565_34100);
if(temp__5720__auto___34114__$1){
var seq__33565_34115__$1 = temp__5720__auto___34114__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33565_34115__$1)){
var c__4550__auto___34116 = cljs.core.chunk_first(seq__33565_34115__$1);
var G__34118 = cljs.core.chunk_rest(seq__33565_34115__$1);
var G__34119 = c__4550__auto___34116;
var G__34120 = cljs.core.count(c__4550__auto___34116);
var G__34121 = (0);
seq__33565_34100 = G__34118;
chunk__33567_34101 = G__34119;
count__33568_34102 = G__34120;
i__33569_34103 = G__34121;
continue;
} else {
var child_34122 = cljs.core.first(seq__33565_34115__$1);
if(cljs.core.truth_(child_34122)){
node.appendChild(child_34122);


var G__34123 = cljs.core.next(seq__33565_34115__$1);
var G__34124 = null;
var G__34125 = (0);
var G__34126 = (0);
seq__33565_34100 = G__34123;
chunk__33567_34101 = G__34124;
count__33568_34102 = G__34125;
i__33569_34103 = G__34126;
continue;
} else {
var G__34127 = cljs.core.next(seq__33565_34115__$1);
var G__34128 = null;
var G__34129 = (0);
var G__34130 = (0);
seq__33565_34100 = G__34127;
chunk__33567_34101 = G__34128;
count__33568_34102 = G__34129;
i__33569_34103 = G__34130;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34099);
}
}


var G__34131 = cljs.core.next(seq__33519_34091__$1);
var G__34132 = null;
var G__34133 = (0);
var G__34134 = (0);
seq__33519_34041 = G__34131;
chunk__33521_34042 = G__34132;
count__33522_34043 = G__34133;
i__33523_34044 = G__34134;
continue;
} else {
var G__34135 = cljs.core.next(seq__33519_34091__$1);
var G__34136 = null;
var G__34137 = (0);
var G__34138 = (0);
seq__33519_34041 = G__34135;
chunk__33521_34042 = G__34136;
count__33522_34043 = G__34137;
i__33523_34044 = G__34138;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__33572_34139 = shadow.dom._to_svg;
var G__33573_34140 = "string";
var G__33574_34141 = ((function (G__33572_34139,G__33573_34140){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__33572_34139,G__33573_34140))
;
goog.object.set(G__33572_34139,G__33573_34140,G__33574_34141);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__33576_34152 = shadow.dom._to_svg;
var G__33577_34153 = "null";
var G__33578_34154 = ((function (G__33576_34152,G__33577_34153){
return (function (_){
return null;
});})(G__33576_34152,G__33577_34153))
;
goog.object.set(G__33576_34152,G__33577_34153,G__33578_34154);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34155 = arguments.length;
var i__4731__auto___34156 = (0);
while(true){
if((i__4731__auto___34156 < len__4730__auto___34155)){
args__4736__auto__.push((arguments[i__4731__auto___34156]));

var G__34157 = (i__4731__auto___34156 + (1));
i__4731__auto___34156 = G__34157;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq33579){
var G__33580 = cljs.core.first(seq33579);
var seq33579__$1 = cljs.core.next(seq33579);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33580,seq33579__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__33582 = arguments.length;
switch (G__33582) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__33586_34163 = shadow.dom.dom_node(el);
var G__33587_34164 = cljs.core.name(event);
var G__33588_34165 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33586_34163,G__33587_34164,G__33588_34165) : shadow.dom.dom_listen.call(null,G__33586_34163,G__33587_34164,G__33588_34165));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__30908__auto___34167 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30908__auto___34167,buf,chan,event_fn){
return (function (){
var f__30909__auto__ = (function (){var switch__30666__auto__ = ((function (c__30908__auto___34167,buf,chan,event_fn){
return (function (state_33594){
var state_val_33595 = (state_33594[(1)]);
if((state_val_33595 === (1))){
var state_33594__$1 = state_33594;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33594__$1,(2),once_or_cleanup);
} else {
if((state_val_33595 === (2))){
var inst_33591 = (state_33594[(2)]);
var inst_33592 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33594__$1 = (function (){var statearr_33600 = state_33594;
(statearr_33600[(7)] = inst_33591);

return statearr_33600;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33594__$1,inst_33592);
} else {
return null;
}
}
});})(c__30908__auto___34167,buf,chan,event_fn))
;
return ((function (switch__30666__auto__,c__30908__auto___34167,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__30667__auto__ = null;
var shadow$dom$state_machine__30667__auto____0 = (function (){
var statearr_33601 = [null,null,null,null,null,null,null,null];
(statearr_33601[(0)] = shadow$dom$state_machine__30667__auto__);

(statearr_33601[(1)] = (1));

return statearr_33601;
});
var shadow$dom$state_machine__30667__auto____1 = (function (state_33594){
while(true){
var ret_value__30668__auto__ = (function (){try{while(true){
var result__30669__auto__ = switch__30666__auto__(state_33594);
if(cljs.core.keyword_identical_QMARK_(result__30669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30669__auto__;
}
break;
}
}catch (e33603){if((e33603 instanceof Object)){
var ex__30670__auto__ = e33603;
var statearr_33604_34168 = state_33594;
(statearr_33604_34168[(5)] = ex__30670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33603;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34169 = state_33594;
state_33594 = G__34169;
continue;
} else {
return ret_value__30668__auto__;
}
break;
}
});
shadow$dom$state_machine__30667__auto__ = function(state_33594){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__30667__auto____0.call(this);
case 1:
return shadow$dom$state_machine__30667__auto____1.call(this,state_33594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__30667__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__30667__auto____0;
shadow$dom$state_machine__30667__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__30667__auto____1;
return shadow$dom$state_machine__30667__auto__;
})()
;})(switch__30666__auto__,c__30908__auto___34167,buf,chan,event_fn))
})();
var state__30910__auto__ = (function (){var statearr_33605 = (f__30909__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30909__auto__.cljs$core$IFn$_invoke$arity$0() : f__30909__auto__.call(null));
(statearr_33605[(6)] = c__30908__auto___34167);

return statearr_33605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30910__auto__);
});})(c__30908__auto___34167,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
