goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35415 = arguments.length;
var i__4731__auto___35416 = (0);
while(true){
if((i__4731__auto___35416 < len__4730__auto___35415)){
args__4736__auto__.push((arguments[i__4731__auto___35416]));

var G__35419 = (i__4731__auto___35416 + (1));
i__4731__auto___35416 = G__35419;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35217){
var G__35218 = cljs.core.first(seq35217);
var seq35217__$1 = cljs.core.next(seq35217);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35218,seq35217__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5718__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5718__auto__)){
var s = temp__5718__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__35219){
var map__35220 = p__35219;
var map__35220__$1 = (((((!((map__35220 == null))))?(((((map__35220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35220):map__35220);
var src = map__35220__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35220__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35220__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35222 = cljs.core.seq(sources);
var chunk__35223 = null;
var count__35224 = (0);
var i__35225 = (0);
while(true){
if((i__35225 < count__35224)){
var map__35232 = chunk__35223.cljs$core$IIndexed$_nth$arity$2(null,i__35225);
var map__35232__$1 = (((((!((map__35232 == null))))?(((((map__35232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35232):map__35232);
var src = map__35232__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35232__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35232__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35232__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35232__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__35440 = seq__35222;
var G__35441 = chunk__35223;
var G__35442 = count__35224;
var G__35443 = (i__35225 + (1));
seq__35222 = G__35440;
chunk__35223 = G__35441;
count__35224 = G__35442;
i__35225 = G__35443;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35222);
if(temp__5720__auto__){
var seq__35222__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35222__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35222__$1);
var G__35445 = cljs.core.chunk_rest(seq__35222__$1);
var G__35446 = c__4550__auto__;
var G__35447 = cljs.core.count(c__4550__auto__);
var G__35448 = (0);
seq__35222 = G__35445;
chunk__35223 = G__35446;
count__35224 = G__35447;
i__35225 = G__35448;
continue;
} else {
var map__35235 = cljs.core.first(seq__35222__$1);
var map__35235__$1 = (((((!((map__35235 == null))))?(((((map__35235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35235):map__35235);
var src = map__35235__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35235__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35235__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35235__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35235__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__35453 = cljs.core.next(seq__35222__$1);
var G__35454 = null;
var G__35455 = (0);
var G__35456 = (0);
seq__35222 = G__35453;
chunk__35223 = G__35454;
count__35224 = G__35455;
i__35225 = G__35456;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__35240 = cljs.core.seq(js_requires);
var chunk__35241 = null;
var count__35242 = (0);
var i__35243 = (0);
while(true){
if((i__35243 < count__35242)){
var js_ns = chunk__35241.cljs$core$IIndexed$_nth$arity$2(null,i__35243);
var require_str_35462 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35462);


var G__35463 = seq__35240;
var G__35464 = chunk__35241;
var G__35465 = count__35242;
var G__35466 = (i__35243 + (1));
seq__35240 = G__35463;
chunk__35241 = G__35464;
count__35242 = G__35465;
i__35243 = G__35466;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35240);
if(temp__5720__auto__){
var seq__35240__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35240__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35240__$1);
var G__35468 = cljs.core.chunk_rest(seq__35240__$1);
var G__35469 = c__4550__auto__;
var G__35470 = cljs.core.count(c__4550__auto__);
var G__35471 = (0);
seq__35240 = G__35468;
chunk__35241 = G__35469;
count__35242 = G__35470;
i__35243 = G__35471;
continue;
} else {
var js_ns = cljs.core.first(seq__35240__$1);
var require_str_35472 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35472);


var G__35475 = cljs.core.next(seq__35240__$1);
var G__35476 = null;
var G__35477 = (0);
var G__35478 = (0);
seq__35240 = G__35475;
chunk__35241 = G__35476;
count__35242 = G__35477;
i__35243 = G__35478;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__35246 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__35246) : callback.call(null,G__35246));
} else {
var G__35247 = shadow.cljs.devtools.client.env.files_url();
var G__35248 = ((function (G__35247){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__35247))
;
var G__35249 = "POST";
var G__35250 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__35251 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__35247,G__35248,G__35249,G__35250,G__35251);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__35253){
var map__35254 = p__35253;
var map__35254__$1 = (((((!((map__35254 == null))))?(((((map__35254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35254.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35254):map__35254);
var msg = map__35254__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35254__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35254__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__35256 = info;
var map__35256__$1 = (((((!((map__35256 == null))))?(((((map__35256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35256):map__35256);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35256__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35256__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__35256,map__35256__$1,sources,compiled,map__35254,map__35254__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35258(s__35259){
return (new cljs.core.LazySeq(null,((function (map__35256,map__35256__$1,sources,compiled,map__35254,map__35254__$1,msg,info,reload_info){
return (function (){
var s__35259__$1 = s__35259;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__35259__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var map__35264 = cljs.core.first(xs__6277__auto__);
var map__35264__$1 = (((((!((map__35264 == null))))?(((((map__35264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35264.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35264):map__35264);
var src = map__35264__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35264__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35264__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__35259__$1,map__35264,map__35264__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__35256,map__35256__$1,sources,compiled,map__35254,map__35254__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35258_$_iter__35260(s__35261){
return (new cljs.core.LazySeq(null,((function (s__35259__$1,map__35264,map__35264__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__35256,map__35256__$1,sources,compiled,map__35254,map__35254__$1,msg,info,reload_info){
return (function (){
var s__35261__$1 = s__35261;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__35261__$1);
if(temp__5720__auto____$1){
var s__35261__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35261__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__35261__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__35263 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__35262 = (0);
while(true){
if((i__35262 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__35262);
cljs.core.chunk_append(b__35263,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__35505 = (i__35262 + (1));
i__35262 = G__35505;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35263),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35258_$_iter__35260(cljs.core.chunk_rest(s__35261__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35263),null);
}
} else {
var warning = cljs.core.first(s__35261__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35258_$_iter__35260(cljs.core.rest(s__35261__$2)));
}
} else {
return null;
}
break;
}
});})(s__35259__$1,map__35264,map__35264__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__35256,map__35256__$1,sources,compiled,map__35254,map__35254__$1,msg,info,reload_info))
,null,null));
});})(s__35259__$1,map__35264,map__35264__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__35256,map__35256__$1,sources,compiled,map__35254,map__35254__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35258(cljs.core.rest(s__35259__$1)));
} else {
var G__35507 = cljs.core.rest(s__35259__$1);
s__35259__$1 = G__35507;
continue;
}
} else {
var G__35508 = cljs.core.rest(s__35259__$1);
s__35259__$1 = G__35508;
continue;
}
} else {
return null;
}
break;
}
});})(map__35256,map__35256__$1,sources,compiled,map__35254,map__35254__$1,msg,info,reload_info))
,null,null));
});})(map__35256,map__35256__$1,sources,compiled,map__35254,map__35254__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__35275_35510 = cljs.core.seq(warnings);
var chunk__35276_35511 = null;
var count__35277_35512 = (0);
var i__35278_35513 = (0);
while(true){
if((i__35278_35513 < count__35277_35512)){
var map__35283_35514 = chunk__35276_35511.cljs$core$IIndexed$_nth$arity$2(null,i__35278_35513);
var map__35283_35515__$1 = (((((!((map__35283_35514 == null))))?(((((map__35283_35514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35283_35514.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35283_35514):map__35283_35514);
var w_35516 = map__35283_35515__$1;
var msg_35517__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35283_35515__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35518 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35283_35515__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35519 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35283_35515__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35520 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35283_35515__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35520)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35518),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35519),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35517__$1)].join(''));


var G__35524 = seq__35275_35510;
var G__35525 = chunk__35276_35511;
var G__35526 = count__35277_35512;
var G__35527 = (i__35278_35513 + (1));
seq__35275_35510 = G__35524;
chunk__35276_35511 = G__35525;
count__35277_35512 = G__35526;
i__35278_35513 = G__35527;
continue;
} else {
var temp__5720__auto___35529 = cljs.core.seq(seq__35275_35510);
if(temp__5720__auto___35529){
var seq__35275_35530__$1 = temp__5720__auto___35529;
if(cljs.core.chunked_seq_QMARK_(seq__35275_35530__$1)){
var c__4550__auto___35531 = cljs.core.chunk_first(seq__35275_35530__$1);
var G__35532 = cljs.core.chunk_rest(seq__35275_35530__$1);
var G__35533 = c__4550__auto___35531;
var G__35534 = cljs.core.count(c__4550__auto___35531);
var G__35535 = (0);
seq__35275_35510 = G__35532;
chunk__35276_35511 = G__35533;
count__35277_35512 = G__35534;
i__35278_35513 = G__35535;
continue;
} else {
var map__35287_35536 = cljs.core.first(seq__35275_35530__$1);
var map__35287_35537__$1 = (((((!((map__35287_35536 == null))))?(((((map__35287_35536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35287_35536.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35287_35536):map__35287_35536);
var w_35538 = map__35287_35537__$1;
var msg_35539__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35287_35537__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35540 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35287_35537__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35541 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35287_35537__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35542 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35287_35537__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35542)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35540),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35541),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35539__$1)].join(''));


var G__35546 = cljs.core.next(seq__35275_35530__$1);
var G__35547 = null;
var G__35548 = (0);
var G__35549 = (0);
seq__35275_35510 = G__35546;
chunk__35276_35511 = G__35547;
count__35277_35512 = G__35548;
i__35278_35513 = G__35549;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__35256,map__35256__$1,sources,compiled,warnings,map__35254,map__35254__$1,msg,info,reload_info){
return (function (p__35292){
var map__35293 = p__35292;
var map__35293__$1 = (((((!((map__35293 == null))))?(((((map__35293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35293.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35293):map__35293);
var src = map__35293__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35293__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35293__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__35256,map__35256__$1,sources,compiled,warnings,map__35254,map__35254__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__35256,map__35256__$1,sources,compiled,warnings,map__35254,map__35254__$1,msg,info,reload_info){
return (function (p__35296){
var map__35297 = p__35296;
var map__35297__$1 = (((((!((map__35297 == null))))?(((((map__35297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35297):map__35297);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35297__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__35256,map__35256__$1,sources,compiled,warnings,map__35254,map__35254__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__35256,map__35256__$1,sources,compiled,warnings,map__35254,map__35254__$1,msg,info,reload_info){
return (function (p__35299){
var map__35300 = p__35299;
var map__35300__$1 = (((((!((map__35300 == null))))?(((((map__35300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35300):map__35300);
var rc = map__35300__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35300__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__35256,map__35256__$1,sources,compiled,warnings,map__35254,map__35254__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__35256,map__35256__$1,sources,compiled,warnings,map__35254,map__35254__$1,msg,info,reload_info){
return (function (p1__35252_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35252_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__35256,map__35256__$1,sources,compiled,warnings,map__35254,map__35254__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new),"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4120__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4120__auto____$1){
return new$;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__35302){
var map__35303 = p__35302;
var map__35303__$1 = (((((!((map__35303 == null))))?(((((map__35303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35303):map__35303);
var msg = map__35303__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35303__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__35305 = cljs.core.seq(updates);
var chunk__35307 = null;
var count__35308 = (0);
var i__35309 = (0);
while(true){
if((i__35309 < count__35308)){
var path = chunk__35307.cljs$core$IIndexed$_nth$arity$2(null,i__35309);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35335_35569 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35338_35570 = null;
var count__35339_35571 = (0);
var i__35340_35572 = (0);
while(true){
if((i__35340_35572 < count__35339_35571)){
var node_35573 = chunk__35338_35570.cljs$core$IIndexed$_nth$arity$2(null,i__35340_35572);
var path_match_35574 = shadow.cljs.devtools.client.browser.match_paths(node_35573.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35574)){
var new_link_35575 = (function (){var G__35345 = node_35573.cloneNode(true);
G__35345.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35574),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35345;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35574], 0));

goog.dom.insertSiblingAfter(new_link_35575,node_35573);

goog.dom.removeNode(node_35573);


var G__35576 = seq__35335_35569;
var G__35577 = chunk__35338_35570;
var G__35578 = count__35339_35571;
var G__35579 = (i__35340_35572 + (1));
seq__35335_35569 = G__35576;
chunk__35338_35570 = G__35577;
count__35339_35571 = G__35578;
i__35340_35572 = G__35579;
continue;
} else {
var G__35580 = seq__35335_35569;
var G__35581 = chunk__35338_35570;
var G__35582 = count__35339_35571;
var G__35583 = (i__35340_35572 + (1));
seq__35335_35569 = G__35580;
chunk__35338_35570 = G__35581;
count__35339_35571 = G__35582;
i__35340_35572 = G__35583;
continue;
}
} else {
var temp__5720__auto___35584 = cljs.core.seq(seq__35335_35569);
if(temp__5720__auto___35584){
var seq__35335_35585__$1 = temp__5720__auto___35584;
if(cljs.core.chunked_seq_QMARK_(seq__35335_35585__$1)){
var c__4550__auto___35586 = cljs.core.chunk_first(seq__35335_35585__$1);
var G__35587 = cljs.core.chunk_rest(seq__35335_35585__$1);
var G__35588 = c__4550__auto___35586;
var G__35589 = cljs.core.count(c__4550__auto___35586);
var G__35590 = (0);
seq__35335_35569 = G__35587;
chunk__35338_35570 = G__35588;
count__35339_35571 = G__35589;
i__35340_35572 = G__35590;
continue;
} else {
var node_35591 = cljs.core.first(seq__35335_35585__$1);
var path_match_35592 = shadow.cljs.devtools.client.browser.match_paths(node_35591.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35592)){
var new_link_35593 = (function (){var G__35346 = node_35591.cloneNode(true);
G__35346.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35592),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35346;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35592], 0));

goog.dom.insertSiblingAfter(new_link_35593,node_35591);

goog.dom.removeNode(node_35591);


var G__35601 = cljs.core.next(seq__35335_35585__$1);
var G__35602 = null;
var G__35603 = (0);
var G__35604 = (0);
seq__35335_35569 = G__35601;
chunk__35338_35570 = G__35602;
count__35339_35571 = G__35603;
i__35340_35572 = G__35604;
continue;
} else {
var G__35605 = cljs.core.next(seq__35335_35585__$1);
var G__35606 = null;
var G__35607 = (0);
var G__35608 = (0);
seq__35335_35569 = G__35605;
chunk__35338_35570 = G__35606;
count__35339_35571 = G__35607;
i__35340_35572 = G__35608;
continue;
}
}
} else {
}
}
break;
}


var G__35610 = seq__35305;
var G__35611 = chunk__35307;
var G__35612 = count__35308;
var G__35613 = (i__35309 + (1));
seq__35305 = G__35610;
chunk__35307 = G__35611;
count__35308 = G__35612;
i__35309 = G__35613;
continue;
} else {
var G__35614 = seq__35305;
var G__35615 = chunk__35307;
var G__35616 = count__35308;
var G__35617 = (i__35309 + (1));
seq__35305 = G__35614;
chunk__35307 = G__35615;
count__35308 = G__35616;
i__35309 = G__35617;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35305);
if(temp__5720__auto__){
var seq__35305__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35305__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35305__$1);
var G__35618 = cljs.core.chunk_rest(seq__35305__$1);
var G__35619 = c__4550__auto__;
var G__35620 = cljs.core.count(c__4550__auto__);
var G__35621 = (0);
seq__35305 = G__35618;
chunk__35307 = G__35619;
count__35308 = G__35620;
i__35309 = G__35621;
continue;
} else {
var path = cljs.core.first(seq__35305__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35347_35622 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35350_35623 = null;
var count__35351_35624 = (0);
var i__35352_35625 = (0);
while(true){
if((i__35352_35625 < count__35351_35624)){
var node_35626 = chunk__35350_35623.cljs$core$IIndexed$_nth$arity$2(null,i__35352_35625);
var path_match_35627 = shadow.cljs.devtools.client.browser.match_paths(node_35626.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35627)){
var new_link_35628 = (function (){var G__35357 = node_35626.cloneNode(true);
G__35357.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35627),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35357;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35627], 0));

goog.dom.insertSiblingAfter(new_link_35628,node_35626);

goog.dom.removeNode(node_35626);


var G__35629 = seq__35347_35622;
var G__35630 = chunk__35350_35623;
var G__35631 = count__35351_35624;
var G__35632 = (i__35352_35625 + (1));
seq__35347_35622 = G__35629;
chunk__35350_35623 = G__35630;
count__35351_35624 = G__35631;
i__35352_35625 = G__35632;
continue;
} else {
var G__35633 = seq__35347_35622;
var G__35634 = chunk__35350_35623;
var G__35635 = count__35351_35624;
var G__35636 = (i__35352_35625 + (1));
seq__35347_35622 = G__35633;
chunk__35350_35623 = G__35634;
count__35351_35624 = G__35635;
i__35352_35625 = G__35636;
continue;
}
} else {
var temp__5720__auto___35637__$1 = cljs.core.seq(seq__35347_35622);
if(temp__5720__auto___35637__$1){
var seq__35347_35638__$1 = temp__5720__auto___35637__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35347_35638__$1)){
var c__4550__auto___35639 = cljs.core.chunk_first(seq__35347_35638__$1);
var G__35640 = cljs.core.chunk_rest(seq__35347_35638__$1);
var G__35641 = c__4550__auto___35639;
var G__35642 = cljs.core.count(c__4550__auto___35639);
var G__35643 = (0);
seq__35347_35622 = G__35640;
chunk__35350_35623 = G__35641;
count__35351_35624 = G__35642;
i__35352_35625 = G__35643;
continue;
} else {
var node_35644 = cljs.core.first(seq__35347_35638__$1);
var path_match_35645 = shadow.cljs.devtools.client.browser.match_paths(node_35644.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35645)){
var new_link_35646 = (function (){var G__35358 = node_35644.cloneNode(true);
G__35358.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35645),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35358;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35645], 0));

goog.dom.insertSiblingAfter(new_link_35646,node_35644);

goog.dom.removeNode(node_35644);


var G__35647 = cljs.core.next(seq__35347_35638__$1);
var G__35648 = null;
var G__35649 = (0);
var G__35650 = (0);
seq__35347_35622 = G__35647;
chunk__35350_35623 = G__35648;
count__35351_35624 = G__35649;
i__35352_35625 = G__35650;
continue;
} else {
var G__35651 = cljs.core.next(seq__35347_35638__$1);
var G__35652 = null;
var G__35653 = (0);
var G__35654 = (0);
seq__35347_35622 = G__35651;
chunk__35350_35623 = G__35652;
count__35351_35624 = G__35653;
i__35352_35625 = G__35654;
continue;
}
}
} else {
}
}
break;
}


var G__35655 = cljs.core.next(seq__35305__$1);
var G__35656 = null;
var G__35657 = (0);
var G__35658 = (0);
seq__35305 = G__35655;
chunk__35307 = G__35656;
count__35308 = G__35657;
i__35309 = G__35658;
continue;
} else {
var G__35659 = cljs.core.next(seq__35305__$1);
var G__35660 = null;
var G__35661 = (0);
var G__35662 = (0);
seq__35305 = G__35659;
chunk__35307 = G__35660;
count__35308 = G__35661;
i__35309 = G__35662;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__35374){
var map__35375 = p__35374;
var map__35375__$1 = (((((!((map__35375 == null))))?(((((map__35375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35375):map__35375);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35375__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35375__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__35375,map__35375__$1,id,js){
return (function (){
return eval(js);
});})(map__35375,map__35375__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__35382){
var map__35383 = p__35382;
var map__35383__$1 = (((((!((map__35383 == null))))?(((((map__35383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35383):map__35383);
var msg = map__35383__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35383__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35383__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35383__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35383__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__35383,map__35383__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__35385){
var map__35386 = p__35385;
var map__35386__$1 = (((((!((map__35386 == null))))?(((((map__35386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35386):map__35386);
var src = map__35386__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35386__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__35383,map__35383__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__35383,map__35383__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__35383,map__35383__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__35393){
var map__35394 = p__35393;
var map__35394__$1 = (((((!((map__35394 == null))))?(((((map__35394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35394):map__35394);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35394__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35394__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__35394,map__35394__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");
});})(map__35394,map__35394__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__35396){
var map__35397 = p__35396;
var map__35397__$1 = (((((!((map__35397 == null))))?(((((map__35397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35397.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35397):map__35397);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35397__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35397__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__35399){
var map__35400 = p__35399;
var map__35400__$1 = (((((!((map__35400 == null))))?(((((map__35400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35400.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35400):map__35400);
var msg = map__35400__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35400__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__35402 = type;
var G__35402__$1 = (((G__35402 instanceof cljs.core.Keyword))?G__35402.fqn:null);
switch (G__35402__$1) {
case "asset-watch":
return shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.browser.repl_require(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "repl/session-start":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

return shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
return shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

return shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":
return null;

break;
case "client/stale":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
return shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__35403 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__35404 = ((function (G__35403){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__35403))
;
var G__35405 = "POST";
var G__35406 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__35407 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__35403,G__35404,G__35405,G__35406,G__35407);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5720__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto__)){
var s = temp__5720__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4131__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
}catch (e35408){var e = e35408;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5720__auto___35664 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto___35664)){
var s_35665 = temp__5720__auto___35664;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_35665.onclose = ((function (s_35665,temp__5720__auto___35664){
return (function (e){
return null;
});})(s_35665,temp__5720__auto___35664))
;

s_35665.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5720__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto__)){
var s = temp__5720__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4120__auto__ = document;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4120__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
