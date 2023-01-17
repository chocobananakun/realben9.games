(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function t(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
t("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.i=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.i};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function fa(a){if(!(a instanceof Array)){a=u(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ha(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ia="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ha(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||ia});
var ja="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ka;
if("function"==typeof Object.setPrototypeOf)ka=Object.setPrototypeOf;else{var la;a:{var ma={a:!0},na={};try{na.__proto__=ma;la=na.a;break a}catch(a){}la=!1}ka=la?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var oa=ka;
function v(a,b){a.prototype=ja(b.prototype);a.prototype.constructor=a;if(oa)oa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.ma=b.prototype}
function pa(){this.C=!1;this.o=null;this.m=void 0;this.i=1;this.s=this.u=0;this.F=this.l=null}
function qa(a){if(a.C)throw new TypeError("Generator is already running");a.C=!0}
pa.prototype.D=function(a){this.m=a};
function ra(a,b){a.l={Fc:b,Uc:!0};a.i=a.u||a.s}
pa.prototype.return=function(a){this.l={return:a};this.i=this.s};
function w(a,b,c){a.i=c;return{value:b}}
pa.prototype.M=function(a){this.i=a};
function sa(a,b,c){a.u=b;void 0!=c&&(a.s=c)}
function ta(a,b){a.i=b;a.u=0}
function ua(a){a.u=0;var b=a.l.Fc;a.l=null;return b}
function va(a){a.F=[a.l];a.u=0;a.s=0}
function wa(a){var b=a.F.splice(0)[0];(b=a.l=a.l||b)?b.Uc?a.i=a.u||a.s:void 0!=b.M&&a.s<b.M?(a.i=b.M,a.l=null):a.i=a.s:a.i=0}
function xa(a){this.i=new pa;this.m=a}
function ya(a,b){qa(a.i);var c=a.i.o;if(c)return za(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.i.return);
a.i.return(b);return Aa(a)}
function za(a,b,c,d){try{var e=b.call(a.i.o,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.i.C=!1,e;var f=e.value}catch(g){return a.i.o=null,ra(a.i,g),Aa(a)}a.i.o=null;d.call(a.i,f);return Aa(a)}
function Aa(a){for(;a.i.i;)try{var b=a.m(a.i);if(b)return a.i.C=!1,{value:b.value,done:!1}}catch(c){a.i.m=void 0,ra(a.i,c)}a.i.C=!1;if(a.i.l){b=a.i.l;a.i.l=null;if(b.Uc)throw b.Fc;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ba(a){this.next=function(b){qa(a.i);a.i.o?b=za(a,a.i.o.next,b,a.i.D):(a.i.D(b),b=Aa(a));return b};
this.throw=function(b){qa(a.i);a.i.o?b=za(a,a.i.o["throw"],b,a.i.D):(ra(a.i,b),b=Aa(a));return b};
this.return=function(b){return ya(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ca(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function y(a){return Ca(new Ba(new xa(a)))}
function Da(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
t("Reflect.setPrototypeOf",function(a){return a?a:oa?function(b,c){try{return oa(b,c),!0}catch(d){return!1}}:null});
t("Promise",function(a){function b(g){this.i=0;this.l=void 0;this.m=[];this.C=!1;var h=this.o();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.i=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.m=function(g){if(null==this.i){this.i=[];var h=this;this.l(function(){h.s()})}this.i.push(g)};
var e=da.setTimeout;c.prototype.l=function(g){e(g,0)};
c.prototype.s=function(){for(;this.i&&this.i.length;){var g=this.i;this.i=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.o(l)}}}this.i=null};
c.prototype.o=function(g){this.l(function(){throw g;})};
b.prototype.o=function(){function g(l){return function(n){k||(k=!0,l.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.J),reject:g(this.s)}};
b.prototype.J=function(g){if(g===this)this.s(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.L(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.H(g):this.u(g)}};
b.prototype.H=function(g){var h=void 0;try{h=g.then}catch(k){this.s(k);return}"function"==typeof h?this.R(h,g):this.u(g)};
b.prototype.s=function(g){this.D(2,g)};
b.prototype.u=function(g){this.D(1,g)};
b.prototype.D=function(g,h){if(0!=this.i)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.i);this.i=g;this.l=h;2===this.i&&this.K();this.F()};
b.prototype.K=function(){var g=this;e(function(){if(g.G()){var h=da.console;"undefined"!==typeof h&&h.error(g.l)}},1)};
b.prototype.G=function(){if(this.C)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.l;return k(g)};
b.prototype.F=function(){if(null!=this.m){for(var g=0;g<this.m.length;++g)f.m(this.m[g]);this.m=null}};
var f=new c;b.prototype.L=function(g){var h=this.o();g.kb(h.resolve,h.reject)};
b.prototype.R=function(g,h){var k=this.o();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,q){return"function"==typeof r?function(x){try{l(r(x))}catch(z){n(z)}}:q}
var l,n,p=new b(function(r,q){l=r;n=q});
this.kb(k(g,l),k(h,n));return p};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.kb=function(g,h){function k(){switch(l.i){case 1:g(l.l);break;case 2:h(l.l);break;default:throw Error("Unexpected state: "+l.i);}}
var l=this;null==this.m?f.m(k):this.m.push(k);this.C=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),n=l.next();!n.done;n=l.next())d(n.value).kb(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,n){function p(x){return function(z){r[x]=z;q--;0==q&&l(r)}}
var r=[],q=0;do r.push(void 0),q++,d(k.value).kb(p(r.length-1),n),k=h.next();while(!k.done)})};
return b});
t("WeakMap",function(a){function b(k){this.i=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!ha(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(2!=n.get(k)||3!=n.get(l))return!1;n.delete(k);n.set(l,4);return!n.has(k)&&4==n.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ha(k,g))throw Error("WeakMap key fail: "+k);k[g][this.i]=l;return this};
b.prototype.get=function(k){return d(k)&&ha(k,g)?k[g][this.i]:void 0};
b.prototype.has=function(k){return d(k)&&ha(k,g)&&ha(k[g],this.i)};
b.prototype.delete=function(k){return d(k)&&ha(k,g)&&ha(k[g],this.i)?delete k[g][this.i]:!1};
return b});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.i;return ea(function(){if(l){for(;l.head!=h.i;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h.data_[l];if(n&&ha(h.data_,l))for(h=0;h<n.length;h++){var p=n[h];if(k!==k&&p.key!==p.key||k===p.key)return{id:l,list:n,index:h,entry:p}}return{id:l,list:n,index:-1,entry:void 0}}
function e(h){this.data_={};this.i=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.data_[l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this.i,previous:this.i.previous,head:this.i,key:h,value:k},l.list.push(l.entry),this.i.previous.next=l.entry,this.i.previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.i=this.i.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ea(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ea(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
t("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ea(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
t("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
t("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
t("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
function Ha(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
t("Array.prototype.entries",function(a){return a?a:function(){return Ha(this,function(b,c){return[b,c]})}});
t("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
t("Object.setPrototypeOf",function(a){return a||oa});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ha(b,d)&&c.push([d,b[d]]);return c}});
t("Array.prototype.keys",function(a){return a?a:function(){return Ha(this,function(b){return b})}});
t("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ea(this,b,"includes").indexOf(b,c||0)}});
var A=this||self;function B(a,b){a=a.split(".");b=b||A;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Ia(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Ja(a){var b=Ia(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ka(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function La(a,b,c){return a.call.apply(a.bind,arguments)}
function Ma(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function C(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?C=La:C=Ma;return C.apply(null,arguments)}
function Na(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function D(){return Date.now()}
function E(a,b){a=a.split(".");var c=A;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function G(a,b){function c(){}
c.prototype=b.prototype;a.ma=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ff=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Oa(a){return a}
;function Ra(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Ra);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
G(Ra,Error);Ra.prototype.name="CustomError";function Sa(a,b){a=a.split("%s");for(var c="",d=a.length-1,e=0;e<d;e++)c+=a[e]+(e<b.length?b[e]:"%s");Ra.call(this,c+a[d])}
G(Sa,Ra);Sa.prototype.name="AssertionError";function Ta(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.l=!b&&/[?&]ae=1(&|$)/.test(a);this.o=!b&&/[?&]ae=2(&|$)/.test(a);if((this.i=/[?&]adurl=([^&]*)/.exec(a))&&this.i[1]){try{var c=decodeURIComponent(this.i[1])}catch(d){c=null}this.m=c}}
;function Ua(){return null}
function Va(){}
function Wa(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var Xa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Ya=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Za=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g="string"===typeof a?a.split(""):a,h=0;h<d;h++)if(h in g){var k=g[h];
b.call(c,k,h,a)&&(e[f++]=k)}return e},$a=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},ab=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
Ya(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function bb(a,b){b=Xa(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function cb(a){return Array.prototype.concat.apply([],arguments)}
function db(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function eb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ja(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function fb(a,b){return cb.apply([],$a(a,b))}
;function gb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function hb(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}
function ib(a){var b={},c;for(c in a)b[c]=a[c];return b}
function jb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=jb(a[c]);return b}
var kb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function lb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<kb.length;f++)c=kb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
function mb(a){var b=arguments.length;if(1==b&&Array.isArray(arguments[0]))return mb.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c}
;var nb;function ob(){if(void 0===nb){var a=null,b=A.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Oa,createScript:Oa,createScriptURL:Oa})}catch(c){A.console&&A.console.error(c.message)}nb=a}else nb=a}return nb}
;function pb(a,b){this.i=a===qb&&b||"";this.m=rb}
pb.prototype.ya=!0;pb.prototype.ra=function(){return this.i};
function sb(a){return a instanceof pb&&a.constructor===pb&&a.m===rb?a.i:"type_error:Const"}
var rb={},qb={};function tb(a,b){this.i=b===ub?a:""}
m=tb.prototype;m.toString=function(){return this.i+""};
m.ya=!0;m.ra=function(){return this.i.toString()};
m.Ub=!0;m.qb=function(){return 1};
var ub={};var vb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},wb=/&/g,xb=/</g,yb=/>/g,zb=/"/g,Ab=/'/g,Bb=/\x00/g,Cb=/[\x00&<>"']/;
function Db(){return-1!=Eb().toLowerCase().indexOf("webkit")}
function Fb(a,b){var c=0;a=vb(String(a)).split(".");b=vb(String(b)).split(".");for(var d=Math.max(a.length,b.length),e=0;0==c&&e<d;e++){var f=a[e]||"",g=b[e]||"";do{f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];if(0==f[0].length&&0==g[0].length)break;c=Gb(0==f[1].length?0:parseInt(f[1],10),0==g[1].length?0:parseInt(g[1],10))||Gb(0==f[2].length,0==g[2].length)||Gb(f[2],g[2]);f=f[3];g=g[3]}while(0==c)}return c}
function Gb(a,b){return a<b?-1:a>b?1:0}
;function Hb(a,b){this.i=b===Ib?a:""}
m=Hb.prototype;m.toString=function(){return this.i.toString()};
m.ya=!0;m.ra=function(){return this.i.toString()};
m.Ub=!0;m.qb=function(){return 1};
function Jb(a){if(a instanceof Hb&&a.constructor===Hb)return a.i;Ia(a);return"type_error:SafeUrl"}
var Kb=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,Lb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Mb(a){a instanceof Hb||(a="object"==typeof a&&a.ya?a.ra():String(a),Lb.test(a)?a=Nb(a):(a=String(a),a=a.replace(/(%0A|%0D)/g,""),a=a.match(Kb)?Nb(a):null));return a||Ob}
var Ib={};function Nb(a){return new Hb(a,Ib)}
var Ob=Nb("about:invalid#zClosurez");var Pb={};function Qb(a,b){this.i=b===Pb?a:"";this.ya=!0}
Qb.prototype.ra=function(){return this.i};
Qb.prototype.toString=function(){return this.i.toString()};
var Rb=new Qb("",Pb);function Sb(a){if(a instanceof Hb)return'url("'+Jb(a).replace(/</g,"%3c").replace(/[\\"]/g,"\\$&")+'")';if(a instanceof pb)a=sb(a);else{a=String(a);var b=a.replace(Tb,"$1").replace(Tb,"$1").replace(Ub,"url");if(Vb.test(b)){if(b=!Wb.test(a)){for(var c=b=!0,d=0;d<a.length;d++){var e=a.charAt(d);"'"==e&&c?b=!b:'"'==e&&b&&(c=!c)}b=b&&c&&Xb(a)}a=b?Yb(a):"zClosurez"}else a="zClosurez"}if(/[{;}]/.test(a))throw new Sa("Value does not allow [{;}], got: %s.",[a]);return a}
function Xb(a){for(var b=!0,c=/^[-_a-zA-Z0-9]$/,d=0;d<a.length;d++){var e=a.charAt(d);if("]"==e){if(b)return!1;b=!0}else if("["==e){if(!b)return!1;b=!1}else if(!b&&!c.test(e))return!1}return b}
var Vb=RegExp("^[-,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$"),Ub=RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))","g"),Tb=RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)","g"),Wb=/\/\*/;function Yb(a){return a.replace(Ub,function(b,c,d,e){var f="";d=d.replace(/^(['"])(.*)\1$/,function(g,h,k){f=h;return k});
b=Mb(d).ra();return c+f+b+f+e})}
;var Zb={};function $b(a,b){this.i=b===Zb?a:"";this.ya=!0}
$b.prototype.toString=function(){return this.i.toString()};
function ac(a){function b(d){Array.isArray(d)?d.forEach(b):c+=bc(d)}
var c="";Array.prototype.forEach.call(arguments,b);return new $b(c,Zb)}
$b.prototype.ra=function(){return this.i};
function bc(a){if(a instanceof $b&&a.constructor===$b)return a.i;Ia(a);return"type_error:SafeStyleSheet"}
var cc=new $b("",Zb);function Eb(){var a=A.navigator;return a&&(a=a.userAgent)?a:""}
function H(a){return-1!=Eb().indexOf(a)}
;function dc(){return H("Opera")}
function ec(){return H("Trident")||H("MSIE")}
function fc(){return H("Safari")&&!(gc()||H("Coast")||dc()||H("Edge")||H("Edg/")||H("OPR")||H("Firefox")||H("FxiOS")||H("Silk")||H("Android"))}
function gc(){return(H("Chrome")||H("CriOS"))&&!H("Edge")||H("Silk")}
function hc(a){var b={};a.forEach(function(c){b[c[0]]=c[1]});
return function(c){return b[c.find(function(d){return d in b})]||""}}
function ic(){var a=Eb();if(ec()){var b=/rv: *([\d\.]*)/.exec(a);if(b&&b[1])a=b[1];else{b="";var c=/MSIE +([\d\.]+)/.exec(a);if(c&&c[1])if(a=/Trident\/(\d.\d)/.exec(a),"7.0"==c[1])if(a&&a[1])switch(a[1]){case "4.0":b="8.0";break;case "5.0":b="9.0";break;case "6.0":b="10.0";break;case "7.0":b="11.0"}else b="7.0";else b=c[1];a=b}return a}c=RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?","g");b=[];for(var d;d=c.exec(a);)b.push([d[1],d[2],d[3]||void 0]);a=hc(b);return dc()?a(["Version","Opera"]):
H("Edge")?a(["Edge"]):H("Edg/")?a(["Edg"]):H("Silk")?a(["Silk"]):gc()?a(["Chrome","CriOS","HeadlessChrome"]):(a=b[2])&&a[1]||""}
;var jc={};function kc(a,b,c){this.i=c===jc?a:"";this.m=b;this.ya=this.Ub=!0}
kc.prototype.qb=function(){return this.m};
kc.prototype.ra=function(){return this.i.toString()};
kc.prototype.toString=function(){return this.i.toString()};
function lc(a){if(a instanceof kc&&a.constructor===kc)return a.i;Ia(a);return"type_error:SafeHtml"}
function mc(a,b){var c=ob();a=c?c.createHTML(a):a;return new kc(a,b,jc)}
var oc=new kc(A.trustedTypes&&A.trustedTypes.emptyHTML||"",0,jc);var pc=Wa(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);b=a.firstChild.firstChild;a.innerHTML=lc(oc);return!b.parentElement});
function qc(a,b){if(pc())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=lc(b)}
function rc(a,b){qc(a,b)}
function sc(a){var b=mc(sb(new pb(qb,'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.16667 14.1667H7.50001V6.66667H9.16667V14.1667ZM12.5 6.66667H10.8333V14.1667H12.5V6.66667ZM15.8333 3.33333V4.16667H15V17.5H5.00001V4.16667H4.16667V3.33333H7.50001V2.5H12.5V3.33333H15.8333ZM14.1667 4.16667H5.83334V16.6667H14.1667V4.16667Z" fill="#030303"/></svg>')),null);qc(a,b)}
function tc(a,b){b instanceof Hb||b instanceof Hb||(b="object"==typeof b&&b.ya?b.ra():String(b),Lb.test(b)||(b="about:invalid#zClosurez"),b=Nb(b));a.href=Jb(b)}
;function uc(a){return decodeURIComponent(a.replace(/\+/g," "))}
;var vc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function wc(a){return a?decodeURI(a):a}
function xc(a){return wc(a.match(vc)[3]||null)}
function yc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)yc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function zc(a){var b=[],c;for(c in a)yc(c,a[c],b);return b.join("&")}
function Ac(a,b){b=zc(b);if(b){var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
var Bc=/#|$/;var Cc={};function Dc(a){if(a!==Cc)throw Error("requires a valid immutable API token");}
;function Ec(){return H("iPhone")&&!H("iPod")&&!H("iPad")}
;function Fc(){return H("Gecko")&&!(Db()&&!H("Edge"))&&!(H("Trident")||H("MSIE"))&&!H("Edge")}
;function Gc(a){Gc[" "](a);return a}
Gc[" "]=function(){};
function Hc(a,b){var c=Ic;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;var Jc=dc(),Kc=ec(),Lc=H("Edge"),Mc=Fc(),Nc=Db()&&!H("Edge"),Oc=H("Android");function Pc(){var a=A.document;return a?a.documentMode:void 0}
var Qc;a:{var Rc="",Sc=function(){var a=Eb();if(Mc)return/rv:([^\);]+)(\)|;)/.exec(a);if(Lc)return/Edge\/([\d\.]+)/.exec(a);if(Kc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Nc)return/WebKit\/(\S+)/.exec(a);if(Jc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Sc&&(Rc=Sc?Sc[1]:"");if(Kc){var Tc=Pc();if(null!=Tc&&Tc>parseFloat(Rc)){Qc=String(Tc);break a}}Qc=Rc}var Uc=Qc,Ic={};function Vc(a){return Hc(a,function(){return 0<=Fb(Uc,a)})}
var Wc;if(A.document&&Kc){var Xc=Pc();Wc=Xc?Xc:parseInt(Uc,10)||void 0}else Wc=void 0;var Yc=Wc;var Zc=Ec()||H("iPod"),$c=H("iPad");!H("Android")||gc();gc();var ad=fc()&&!(Ec()||H("iPad")||H("iPod"));var bd={},cd=null;
function dd(a,b){Ja(a);void 0===b&&(b=0);if(!cd){cd={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));bd[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===cd[h]&&(cd[h]=g)}}}b=bd[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],l=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|l>>4];l=b[(l&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+l+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var ed="undefined"!==typeof Uint8Array,fd={};var gd;function hd(a){if(fd!==fd)throw Error("illegal external caller");this.tc=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}
hd.prototype.isEmpty=function(){return null==this.tc};var id="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol(void 0):void 0;function jd(a,b){Object.isFrozen(a)||(id?a[id]|=b:void 0!==a.Ea?a.Ea|=b:Object.defineProperties(a,{Ea:{value:b,configurable:!0,writable:!0,enumerable:!1}}))}
function kd(a){var b;id?b=a[id]:b=a.Ea;return null==b?0:b}
function ld(a){return Array.isArray(a)?!!(kd(a)&1):!1}
function md(a){jd(a,1);return a}
function nd(a){return Array.isArray(a)?!!(kd(a)&2):!1}
function od(a){if(!Array.isArray(a))throw Error("cannot mark non-array as immutable");jd(a,2)}
function qd(a,b){if(!Array.isArray(a))throw Error("cannot mark non-array as mutable");b?jd(a,8):Object.isFrozen(a)||(id?a[id]&=-9:void 0!==a.Ea&&(a.Ea&=-9))}
;function rd(a){return nd(a.Z)}
function sd(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var td,ud=Object.freeze(md([]));function vd(a){if(rd(a))throw Error("Cannot mutate an immutable Message");}
var wd="undefined"!=typeof Symbol&&"undefined"!=typeof Symbol.hasInstance;function xd(a){return{value:a,configurable:!1,writable:!1,enumerable:!1}}
;function yd(a){A.setTimeout(function(){throw a;},0)}
;function zd(a){return a.displayName||a.name||"unknown type name"}
function Ad(a,b){a instanceof b||yd(Error("Expected instanceof "+zd(b)+" but got "+(a&&zd(a.constructor))));return a}
function Bd(a,b,c){c=void 0===c?!1:c;if(Array.isArray(a))return new b(a);if(c)return new b}
;function Cd(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a&&!Array.isArray(a)){if(ed&&null!=a&&a instanceof Uint8Array)return dd(a);if(a instanceof hd){var b=a.tc;null!=b&&"string"!==typeof b&&(ed&&b instanceof Uint8Array?b=dd(b):(Ia(b),b=null));return null==b?"":a.tc=b}}}return a}
;function Dd(a,b){b=void 0===b?Ed:b;return Fd(a,b)}
function Gd(a,b){if(null!=a){if(Array.isArray(a))a=Fd(a,b);else if(sd(a)){var c={},d;for(d in a)c[d]=Gd(a[d],b);a=c}else a=b(a);return a}}
function Fd(a,b){for(var c=a.slice(),d=0;d<c.length;d++)c[d]=Gd(c[d],b);ld(a)&&md(c);return c}
function Hd(a){if(a&&"object"==typeof a&&a.toJSON)return a.toJSON();a=Cd(a);return Array.isArray(a)?Dd(a,Hd):a}
function Ed(a){return ed&&null!=a&&a instanceof Uint8Array?new Uint8Array(a):a}
;function Id(a){return a.m||(a.m=a.Z[a.o+a.Ba]={})}
function Jd(a,b,c){return-1===b?null:b>=a.o?a.m?a.m[b]:void 0:(void 0===c?0:c)&&a.m&&(c=a.m[b],null!=c)?c:a.Z[b+a.Ba]}
function I(a,b,c,d,e){d=void 0===d?!1:d;(void 0===e?0:e)||vd(a);b<a.o&&!d?a.Z[b+a.Ba]=c:Id(a)[b]=c;return a}
function Kd(a,b,c,d){c=void 0===c?!0:c;var e=Jd(a,b,d);Array.isArray(e)||(e=ud);if(rd(a))c&&(od(e),Object.freeze(e));else if(e===ud||nd(e))e=md(e.slice()),I(a,b,e,d);return e}
function Ld(a,b,c,d){vd(a);(c=Md(a,c))&&c!==b&&null!=d&&(a.i&&c in a.i&&(a.i[c]=void 0),I(a,c));return I(a,b,d)}
function Md(a,b){for(var c=0,d=0;d<b.length;d++){var e=b[d];null!=Jd(a,e)&&(0!==c&&I(a,c,void 0,!1,!0),c=e)}return c}
function Nd(a,b,c,d,e){e=void 0===e?!1:e;var f=e;if(-1===c)d=null;else{a.i||(a.i={});var g=a.i[c];if(g)d=g;else{var h=Jd(a,c,f);b=Bd(h,b,d);void 0==b?d=g:(d&&b.Z!==h&&I(a,c,b.Z,f,!0),a.i[c]=b,rd(a)&&od(b.Z),d=b)}}if(null==d)return d;rd(d)&&!rd(a)&&(d=d.qc(Cc),I(a,c,d.Z,e),a.i[c]=d);return d}
function Od(a,b,c,d){a.i||(a.i={});var e=rd(a),f=a.i[c];if(!f){d=Kd(a,c,!0,d);f=[];var g=e||nd(d);e=e||g;for(var h=0;h<d.length;h++){var k=d[h];e=e||nd(k);k=Bd(k,b);void 0!==k&&(f.push(k),g&&od(k.Z))}g&&(od(f),Object.freeze(f));a.i[c]=f;qd(d,!e)}return f}
function Pd(a,b,c,d){vd(a);a.i||(a.i={});b=null!=d?Ad(d,b).Z:d;a.i[c]=d;return I(a,c,b)}
function Qd(a,b,c,d){vd(a);var e=Od(a,c,b);c=null!=d?Ad(d,c):new c;a=Kd(a,b);e.push(c);a.push(c.Z);Dc(Cc);rd(c)&&qd(a,!1)}
;function Rd(a,b,c){a||(a=Sd);Sd=null;var d=this.constructor.m;a||(a=d?[d]:[]);this.Ba=(d?0:-1)-(this.constructor.i||0);this.i=void 0;this.Z=a;a:{d=this.Z.length;a=d-1;if(d&&(d=this.Z[a],sd(d))){this.o=a-this.Ba;this.m=d;break a}void 0!==b&&-1<b?(this.o=Math.max(b,a+1-this.Ba),this.m=void 0):this.o=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)if(a=c[b],a<this.o)a+=this.Ba,(d=this.Z[a])?Array.isArray(d)&&md(d):this.Z[a]=ud;else{d=Id(this);var e=d[a];e?Array.isArray(e)&&md(e):d[a]=ud}}
Rd.prototype.toJSON=function(){var a=this.Z;return td?a:Dd(a,Hd)};
Rd.prototype.clone=function(){var a=Dd(this.Z);Sd=a;a=new this.constructor(a);Sd=null;Td(a,this);return a};
Rd.prototype.isMutable=function(a){Dc(a);return!rd(this)};
Rd.prototype.toString=function(){return this.Z.toString()};
function Ud(a,b){return Cd(b)}
function Td(a,b){b.Za&&(a.Za=b.Za.slice());var c=b.i;if(c){b=b.m;for(var d in c){var e=c[d];if(e){var f=!(!b||!b[d]),g=+d;if(Array.isArray(e)){if(e.length){var h=a,k=f;k=void 0===k?!1:k;f=Od(h,e[0].constructor,g,k);var l=rd(h);if(h=g=Kd(h,g,k)){h=g;if(!Array.isArray(h))throw Error("cannot check mutability state of non-array");h=!(kd(h)&8)}if(h){for(h=0;h<f.length;h++)(k=f[h])&&rd(k)&&!l&&(f[h]=f[h].qc(Cc),g[h]=f[h].Z);qd(g,!0)}for(l=0;l<Math.min(f.length,e.length);l++)Td(f[l],e[l])}}else(f=Nd(a,e.constructor,
g,void 0,f))&&Td(f,e)}}}}
var Sd;function Vd(){Rd.apply(this,arguments)}
v(Vd,Rd);Vd.prototype.qc=function(){return this};
if(wd){var Wd={};Object.defineProperties(Vd,(Wd[Symbol.hasInstance]=xd(function(){throw Error("Cannot perform instanceof checks for MutableMessage");}),Wd))};function Xd(a,b,c,d,e,f){if(a=a.i&&a.i[c])if(Array.isArray(a)){e=f.Gb?md(a.slice()):a;f=0<e.length?e[0].constructor:void 0;vd(b);if(null!=e){d=md([]);a=!1;for(var g=0;g<e.length;g++)d[g]=Ad(e[g],f).Z,a=a||nd(d[g]);b.i||(b.i={});b.i[c]=e;qd(d,!a)}else b.i&&(b.i[c]=void 0),d=ud;I(b,c,d)}else Pd(b,a.constructor,c,a);else ed&&d instanceof Uint8Array?e=d.length?new hd(new Uint8Array(d)):gd||(gd=new hd(null)):(Array.isArray(d)&&(e?od(d):ld(d)&&f.Gb&&(d=d.slice())),e=d),I(b,c,e)}
;function J(){Vd.apply(this,arguments)}
v(J,Vd);J.prototype.qc=function(a){Dc(a);if(rd(this)){a={Gb:!0};var b=rd(this);if(b&&!a.Gb)throw Error("copyRepeatedFields must be true for frozen messages");var c=new this.constructor;this.Za&&(c.Za=this.Za.slice());for(var d=this.Z,e=0;e<d.length;e++){var f=d[e];if(e===d.length-1&&sd(f))for(h in f){var g=+h;Number.isNaN(g)?Id(c)[h]=f[h]:Xd(this,c,g,f[h],b,a)}else Xd(this,c,e-this.Ba,f,b,a)}var h=c}else h=this;return h};
if(wd){var Yd={};Object.defineProperties(J,(Yd[Symbol.hasInstance]=xd(Object[Symbol.hasInstance]),Yd))};var Zd=window;/*

 SPDX-License-Identifier: Apache-2.0
*/
function $d(a){this.isValid=a}
function ae(a){return new $d(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var be=[ae("data"),ae("http"),ae("https"),ae("mailto"),ae("ftp"),new $d(function(a){return/^[^:]*([/?#]|$)/.test(a)})];function ce(a,b){if(void 0!==a.tagName){if("script"===a.tagName.toLowerCase())throw Error("Use setTextContent with a SafeScript.");if("style"===a.tagName.toLowerCase())throw Error("Use setTextContent with a SafeStyleSheet.");}a.innerHTML=lc(b)}
;function de(a,b){this.width=a;this.height=b}
m=de.prototype;m.clone=function(){return new de(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.isEmpty=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function ee(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
function fe(a){return a&&a.parentNode?a.parentNode.removeChild(a):null}
;function ge(){return!(H("iPad")||H("Android")&&!H("Mobile")||H("Silk"))&&(H("iPod")||H("iPhone")||H("Android")||H("IEMobile"))}
;function he(a){var b=ie;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function je(){var a=[];he(function(b){a.push(b)});
return a}
var ie={mf:"allow-forms",nf:"allow-modals",pf:"allow-orientation-lock",qf:"allow-pointer-lock",rf:"allow-popups",sf:"allow-popups-to-escape-sandbox",tf:"allow-presentation",uf:"allow-same-origin",vf:"allow-scripts",wf:"allow-top-navigation",xf:"allow-top-navigation-by-user-activation"},ke=Wa(function(){return je()});
function le(){var a=me(),b={};Ya(ke(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function me(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function ne(){var a=document.body||document.documentElement;a:{var b=9==a.nodeType?a:a.ownerDocument||a.document;if(b.defaultView&&b.defaultView.getComputedStyle&&(b=b.defaultView.getComputedStyle(a,null))){b=b.direction||b.getPropertyValue("direction")||"";break a}b=""}return b||(a.currentStyle?a.currentStyle.direction:null)||a.style&&a.style.direction}
;var oe=(new Date).getTime();function pe(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==
c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;var qe="client_dev_mss_url client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");fa(qe);function re(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(p){for(var r=g,q=0;64>q;q+=4)r[q/4]=p[q]<<24|p[q+1]<<16|p[q+2]<<8|p[q+3];for(q=16;80>q;q++)p=r[q-3]^r[q-8]^r[q-14]^r[q-16],r[q]=(p<<1|p>>>31)&4294967295;p=e[0];var x=e[1],z=e[2],F=e[3],M=e[4];for(q=0;80>q;q++){if(40>q)if(20>q){var N=F^x&(z^F);var V=1518500249}else N=x^z^F,V=1859775393;else 60>q?(N=x&z|F&(x|z),V=2400959708):(N=x^z^F,V=3395469782);N=((p<<5|p>>>27)&4294967295)+N+M+V+r[q]&4294967295;M=F;F=z;z=(x<<30|x>>>2)&4294967295;x=p;p=N}e[0]=e[0]+p&4294967295;e[1]=e[1]+x&4294967295;e[2]=
e[2]+z&4294967295;e[3]=e[3]+F&4294967295;e[4]=e[4]+M&4294967295}
function c(p,r){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var q=[],x=0,z=p.length;x<z;++x)q.push(p.charCodeAt(x));p=q}r||(r=p.length);q=0;if(0==l)for(;q+64<r;)b(p.slice(q,q+64)),q+=64,n+=64;for(;q<r;)if(f[l++]=p[q++],n++,64==l)for(l=0,b(f);q+64<r;)b(p.slice(q,q+64)),q+=64,n+=64}
function d(){var p=[],r=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var q=63;56<=q;q--)f[q]=r&255,r>>>=8;b(f);for(q=r=0;5>q;q++)for(var x=24;0<=x;x-=8)p[r++]=e[q]>>x&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,Gd:function(){for(var p=d(),r="",q=0;q<p.length;q++)r+="0123456789ABCDEF".charAt(Math.floor(p[q]/16))+"0123456789ABCDEF".charAt(p[q]%16);return r}}}
;function se(a,b,c){var d=String(A.location.href);return d&&a&&b?[b,te(pe(d),a,c||null)].join(" "):null}
function te(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],Ya(d,function(h){e.push(h)}),ue(e.join(" "));
var f=[],g=[];Ya(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];Ya(d,function(h){e.push(h)});
a=ue(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function ue(a){var b=re();b.update(a);return b.Gd().toLowerCase()}
;var ve={};function we(a){this.i=a||{cookie:""}}
m=we.prototype;m.isEnabled=function(){if(!A.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{Zb:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.bg;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Zb}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.i.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
m.get=function(a,b){for(var c=a+"=",d=(this.i.cookie||"").split(";"),e=0,f;e<d.length;e++){f=vb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Zb:0,path:b,domain:c});return d};
m.isEmpty=function(){return!this.i.cookie};
m.clear=function(){for(var a=(this.i.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=vb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var xe=new we("undefined"==typeof document?null:document);function ye(a){return!!ve.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function ze(a){a=void 0===a?!1:a;var b=A.__SAPISID||A.__APISID||A.__3PSAPISID||A.__OVERRIDE_SID;ye(a)&&(b=b||A.__1PSAPISID);if(b)return!0;var c=new we(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID");ye(a)&&(b=b||c.get("__Secure-1PAPISID"));return!!b}
function Ae(a,b,c,d){(a=A[a])||(a=(new we(document)).get(b));return a?se(a,c,d):null}
function Be(a){var b=void 0===b?!1:b;var c=pe(String(A.location.href)),d=[];if(ze(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?A.__SAPISID:A.__APISID;e||(e=new we(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?se(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&ye(b)&&((b=Ae("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=Ae("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a))}return 0==
d.length?null:d.join(" ")}
;function Ce(){this.o=this.o;this.u=this.u}
Ce.prototype.o=!1;Ce.prototype.dispose=function(){this.o||(this.o=!0,this.Da())};
Ce.prototype.Da=function(){if(this.u)for(;this.u.length;)this.u.shift()()};function De(a,b){this.type=a;this.i=this.target=b;this.defaultPrevented=this.l=!1}
De.prototype.stopPropagation=function(){this.l=!0};
De.prototype.preventDefault=function(){this.defaultPrevented=!0};var Ee=function(){if(!A.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{A.addEventListener("test",function(){},b),A.removeEventListener("test",function(){},b)}catch(c){}return a}();function Fe(a,b){De.call(this,a?a.type:"");this.relatedTarget=this.i=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.m=null;a&&this.init(a,b)}
G(Fe,De);var Ge={2:"touch",3:"pen",4:"mouse"};
Fe.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.i=b;if(b=a.relatedTarget){if(Mc){a:{try{Gc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Ge[a.pointerType]||"";this.state=a.state;this.m=a;a.defaultPrevented&&Fe.ma.preventDefault.call(this)};
Fe.prototype.stopPropagation=function(){Fe.ma.stopPropagation.call(this);this.m.stopPropagation?this.m.stopPropagation():this.m.cancelBubble=!0};
Fe.prototype.preventDefault=function(){Fe.ma.preventDefault.call(this);var a=this.m;a.preventDefault?a.preventDefault():a.returnValue=!1};var He="closure_listenable_"+(1E6*Math.random()|0);var Ie=0;function Je(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.sb=e;this.key=++Ie;this.bb=this.jb=!1}
function Ke(a){a.bb=!0;a.listener=null;a.proxy=null;a.src=null;a.sb=null}
;function Le(a){this.src=a;this.listeners={};this.i=0}
Le.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.i++);var g=Me(a,b,d,e);-1<g?(b=a[g],c||(b.jb=!1)):(b=new Je(b,this.src,f,!!d,e),b.jb=c,a.push(b));return b};
Le.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Me(e,b,c,d);return-1<b?(Ke(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.i--),!0):!1};
function Ne(a,b){var c=b.type;c in a.listeners&&bb(a.listeners[c],b)&&(Ke(b),0==a.listeners[c].length&&(delete a.listeners[c],a.i--))}
function Me(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.bb&&f.listener==b&&f.capture==!!c&&f.sb==d)return e}return-1}
;var Oe="closure_lm_"+(1E6*Math.random()|0),Pe={},Qe=0;function Re(a,b,c,d,e){if(d&&d.once)Se(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Re(a,b[f],c,d,e);else c=Te(c),a&&a[He]?a.fa(b,c,Ka(d)?!!d.capture:!!d,e):Ue(a,b,c,!1,d,e)}
function Ue(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ka(e)?!!e.capture:!!e,h=Ve(a);h||(a[Oe]=h=new Le(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=We();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Ee||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Xe(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Qe++}}
function We(){function a(c){return b.call(a.src,a.listener,c)}
var b=Ye;return a}
function Se(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Se(a,b[f],c,d,e);else c=Te(c),a&&a[He]?a.l.add(String(b),c,!0,Ka(d)?!!d.capture:!!d,e):Ue(a,b,c,!0,d,e)}
function Ze(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Ze(a,b[f],c,d,e);else(d=Ka(d)?!!d.capture:!!d,c=Te(c),a&&a[He])?a.l.remove(String(b),c,d,e):a&&(a=Ve(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Me(b,c,d,e)),(c=-1<a?b[a]:null)&&$e(c))}
function $e(a){if("number"!==typeof a&&a&&!a.bb){var b=a.src;if(b&&b[He])Ne(b.l,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Xe(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Qe--;(c=Ve(b))?(Ne(c,a),0==c.i&&(c.src=null,b[Oe]=null)):Ke(a)}}}
function Xe(a){return a in Pe?Pe[a]:Pe[a]="on"+a}
function Ye(a,b){if(a.bb)a=!0;else{b=new Fe(b,this);var c=a.listener,d=a.sb||a.src;a.jb&&$e(a);a=c.call(d,b)}return a}
function Ve(a){a=a[Oe];return a instanceof Le?a:null}
var af="__closure_events_fn_"+(1E9*Math.random()>>>0);function Te(a){if("function"===typeof a)return a;a[af]||(a[af]=function(b){return a.handleEvent(b)});
return a[af]}
;function K(){Ce.call(this);this.l=new Le(this);this.J=this;this.F=null}
G(K,Ce);K.prototype[He]=!0;K.prototype.addEventListener=function(a,b,c,d){Re(this,a,b,c,d)};
K.prototype.removeEventListener=function(a,b,c,d){Ze(this,a,b,c,d)};
function bf(a,b){var c=a.F;if(c){var d=[];for(var e=1;c;c=c.F)d.push(c),++e}a=a.J;c=b.type||b;"string"===typeof b?b=new De(b,a):b instanceof De?b.target=b.target||a:(e=b,b=new De(c,a),lb(b,e));e=!0;if(d)for(var f=d.length-1;!b.l&&0<=f;f--){var g=b.i=d[f];e=cf(g,c,!0,b)&&e}b.l||(g=b.i=a,e=cf(g,c,!0,b)&&e,b.l||(e=cf(g,c,!1,b)&&e));if(d)for(f=0;!b.l&&f<d.length;f++)g=b.i=d[f],e=cf(g,c,!1,b)&&e}
K.prototype.Da=function(){K.ma.Da.call(this);if(this.l){var a=this.l,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,Ke(d[e]);delete a.listeners[c];a.i--}}this.F=null};
K.prototype.fa=function(a,b,c,d){return this.l.add(String(a),b,!1,c,d)};
function cf(a,b,c,d){b=a.l.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.bb&&g.capture==c){var h=g.listener,k=g.sb||g.src;g.jb&&Ne(a.l,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function df(a){K.call(this);var b=this;this.D=this.m=0;this.la=null!=a?a:{ka:function(e,f){return setTimeout(e,f)},
Ca:function(e){clearTimeout(e)}};
var c,d;this.i=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.s=function(){return y(function(e){return w(e,ef(b),0)})};
window.addEventListener("offline",this.s);window.addEventListener("online",this.s);this.D||ff(this)}
v(df,K);function gf(){var a=hf;df.i||(df.i=new df(a));return df.i}
df.prototype.dispose=function(){window.removeEventListener("offline",this.s);window.removeEventListener("online",this.s);this.la.Ca(this.D);delete df.i};
df.prototype.da=function(){return this.i};
function ff(a){a.D=a.la.ka(function(){var b;return y(function(c){if(1==c.i)return a.i?(null==(b=window.navigator)?0:b.onLine)?c.M(3):w(c,ef(a),3):w(c,ef(a),3);ff(a);c.i=0})},3E4)}
function ef(a,b){return a.C?a.C:a.C=new Promise(function(c){var d,e,f,g;return y(function(h){switch(h.i){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,sa(h,2,3),d&&(a.m=a.la.ka(function(){d.abort()},b||2E4)),w(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:va(h);a.C=void 0;a.m&&(a.la.Ca(a.m),a.m=0);g!==a.i&&(a.i=g,a.i?bf(a,"networkstatus-online"):bf(a,"networkstatus-offline"));c(g);wa(h);break;case 2:ua(h),g=!1,h.M(3)}})})}
;function jf(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function kf(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function lf(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:jf(a).match(/\S+/g)||[],b=0<=Xa(a,b));return b}
function mf(a,b){if(a.classList)a.classList.add(b);else if(!lf(a,b)){var c=jf(a);kf(a,c+(0<c.length?" "+b:b))}}
function nf(a,b){a.classList?a.classList.remove(b):lf(a,b)&&kf(a,Array.prototype.filter.call(a.classList?a.classList:jf(a).match(/\S+/g)||[],function(c){return c!=b}).join(" "))}
;function of(){}
of.prototype.next=function(){return pf};
var pf={done:!0,value:void 0};function qf(a){return{value:a,done:!1}}
of.prototype.na=function(){return this};var rf={};
function sf(a){if(Kc&&!Vc(9))return[0,0,0,0];var b=rf.hasOwnProperty(a)?rf[a]:null;if(b)return b;65536<Object.keys(rf).length&&(rf={});var c=[0,0,0,0],d=RegExp("\\\\[0-9A-Fa-f]{1,5}\\s","g");b=tf(a,RegExp("\\\\[0-9A-Fa-f]{6}\\s?","g"));b=tf(b,d);b=tf(b,/\\./g);b=b.replace(RegExp(":not\\(([^\\)]*)\\)","g"),"     $1 ");b=b.replace(RegExp("{[^]*","gm"),"");b=uf(b,c,RegExp("(\\[[^\\]]+\\])","g"),2);b=uf(b,c,RegExp("(#[^\\#\\s\\+>~\\.\\[:]+)","g"),1);b=uf(b,c,RegExp("(\\.[^\\s\\+>~\\.\\[:]+)","g"),2);
b=uf(b,c,/(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi,3);b=uf(b,c,/(:[\w-]+\([^\)]*\))/gi,2);b=uf(b,c,/(:[^\s\+>~\.\[:]+)/g,2);b=b.replace(/[\*\s\+>~]/g," ");b=b.replace(/[#\.]/g," ");uf(b,c,/([^\s\+>~\.\[:]+)/g,3);b=c;return rf[a]=b}
function uf(a,b,c,d){return a.replace(c,function(e){b[d]+=1;return Array(e.length+1).join(" ")})}
function tf(a,b){return a.replace(b,function(c){return Array(c.length+1).join("A")})}
;var vf={rgb:!0,rgba:!0,alpha:!0,rect:!0,image:!0,"linear-gradient":!0,"radial-gradient":!0,"repeating-linear-gradient":!0,"repeating-radial-gradient":!0,"cubic-bezier":!0,matrix:!0,perspective:!0,rotate:!0,rotate3d:!0,rotatex:!0,rotatey:!0,steps:!0,rotatez:!0,scale:!0,scale3d:!0,scalex:!0,scaley:!0,scalez:!0,skew:!0,skewx:!0,skewy:!0,translate:!0,translate3d:!0,translatex:!0,translatey:!0,translatez:!0},wf=/[\n\f\r"'()*<>]/g,xf={"\n":"%0a","\f":"%0c","\r":"%0d",'"':"%22","'":"%27","(":"%28",")":"%29",
"*":"%2a","<":"%3c",">":"%3e"};function yf(a){return xf[a]}
function zf(a,b,c){b=vb(b);if(""==b)return null;var d=String(b.slice(0,4)).toLowerCase();if(0==("url("<d?-1:"url("==d?0:1)){if(!b.endsWith(")")||1<(b?b.split("(").length-1:0)||1<(b?b.split(")").length-1:0)||!c)a=null;else{a:for(b=b.substring(4,b.length-1),d=0;2>d;d++){var e="\"'".charAt(d);if(b.charAt(0)==e&&b.charAt(b.length-1)==e){b=b.substring(1,b.length-1);break a}}a=c?(a=c(b,a))&&"about:invalid#zClosurez"!=Jb(a)?'url("'+Jb(a).replace(wf,yf)+'")':null:null}return a}if(0<b.indexOf("(")){if(/"|'/.test(b))return null;
for(a=/([\-\w]+)\(/g;c=a.exec(b);)if(!(c[1].toLowerCase()in vf))return null}return b}
;function Af(a,b){a=A[a];return a&&a.prototype?(b=Object.getOwnPropertyDescriptor(a.prototype,b))&&b.get||null:null}
function Bf(a,b){return(a=A[a])&&a.prototype&&a.prototype[b]||null}
var Cf=Af("Element","attributes")||Af("Node","attributes"),Df=Bf("Element","hasAttribute"),Ef=Bf("Element","getAttribute"),Ff=Bf("Element","setAttribute"),Gf=Bf("Element","removeAttribute");Af("Element","innerHTML")||Af("HTMLElement","innerHTML");var Hf=Bf("Element","getElementsByTagName"),If=Bf("Element","matches")||Bf("Element","msMatchesSelector"),Jf=Af("Node","nodeName"),Kf=Af("Node","nodeType"),Lf=Af("Node","parentNode");Af("Node","childNodes");
var Mf=Af("HTMLElement","style")||Af("Element","style"),Nf=Af("HTMLStyleElement","sheet"),Of=Bf("CSSStyleDeclaration","getPropertyValue"),Pf=Bf("CSSStyleDeclaration","setProperty"),Qf=Af("Element","namespaceURI")||Af("Node","namespaceURI");function Rf(a,b,c,d){if(a)return a.apply(b);a=b[c];if(!d(a))throw Error("Clobbering detected");return a}
function Sf(a,b,c,d){if(a)return a.apply(b,d);if(Kc&&10>document.documentMode){if(!b[c].call)throw Error("IE Clobbering detected");}else if("function"!=typeof b[c])throw Error("Clobbering detected");return b[c].apply(b,d)}
function Tf(a){return Rf(Cf,a,"attributes",function(b){return b instanceof NamedNodeMap})}
function Uf(a,b,c){try{Sf(Ff,a,"setAttribute",[b,c])}catch(d){if(-1==d.message.indexOf("A security problem occurred"))throw d;}}
function Vf(a){return Rf(Mf,a,"style",function(b){return b instanceof CSSStyleDeclaration})}
function Wf(a){return Rf(Nf,a,"sheet",function(b){return b instanceof CSSStyleSheet})}
function Xf(a){return Rf(Jf,a,"nodeName",function(b){return"string"==typeof b})}
function Yf(a){return Rf(Kf,a,"nodeType",function(b){return"number"==typeof b})}
function Zf(a){return Rf(Lf,a,"parentNode",function(b){return!(b&&"string"==typeof b.name&&b.name&&"parentnode"==b.name.toLowerCase())})}
function $f(a,b){return Sf(Of,a,a.getPropertyValue?"getPropertyValue":"getAttribute",[b])||""}
function ag(a,b,c){Sf(Pf,a,a.setProperty?"setProperty":"setAttribute",[b,c])}
function bg(a){return Rf(Qf,a,"namespaceURI",function(b){return"string"==typeof b})}
;var cg=Kc&&10>document.documentMode?null:RegExp("\\s*([^\\s'\",]+[^'\",]*(('([^'\\r\\n\\f\\\\]|\\\\[^])*')|(\"([^\"\\r\\n\\f\\\\]|\\\\[^])*\")|[^'\",])*)","g"),dg={"-webkit-border-horizontal-spacing":!0,"-webkit-border-vertical-spacing":!0};
function eg(a,b,c){var d=[];fg(db(a.cssRules)).forEach(function(e){if(b&&!/[a-zA-Z][\w-:\.]*/.test(b))throw Error("Invalid container id");if(!(b&&Kc&&10==document.documentMode&&/\\['"]/.test(e.selectorText))){var f=b?e.selectorText.replace(cg,"#"+b+" $1"):e.selectorText,g=d.push;e=gg(e.style,c);if(-1!=f.indexOf("<"))throw Error("Selector does not allow '<', got: "+f);var h=f.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g,"");if(!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(h))throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: "+
f);a:{for(var k={"(":")","[":"]"},l=[],n=0;n<h.length;n++){var p=h[n];if(k[p])l.push(k[p]);else{b:{var r=void 0;for(r in k)if(k[r]==p){r=!0;break b}r=!1}if(r&&l.pop()!=p){h=!1;break a}}}h=0==l.length}if(!h)throw Error("() and [] in selector must be balanced, got: "+f);if(!(e instanceof Qb)){h="";for(var q in e)if(Object.prototype.hasOwnProperty.call(e,q)){if(!/^[-_a-zA-Z0-9]+$/.test(q))throw Error("Name allows only [-_a-zA-Z0-9], got: "+q);k=e[q];null!=k&&(k=Array.isArray(k)?k.map(Sb).join(" "):Sb(k),
h+=q+":"+k+";")}e=h?new Qb(h,Pb):Rb}e instanceof Qb&&e.constructor===Qb?q=e.i:(Ia(e),q="type_error:SafeStyle");f=f+"{"+q.replace(/</g,"\\3C ")+"}";g.call(d,new $b(f,Zb))}});
return ac(d)}
function fg(a){return a.filter(function(b){return b instanceof CSSStyleRule||b.type==CSSRule.STYLE_RULE})}
function hg(a,b,c){a=ig("<style>"+a+"</style>");return null==a||null==a.sheet?cc:eg(a.sheet,void 0!=b?b:null,c)}
function ig(a){if(Kc&&!Vc(10)||"function"!=typeof A.DOMParser)return null;a=mc("<html><head></head><body>"+a+"</body></html>",null);return(new DOMParser).parseFromString(lc(a),"text/html").body.children[0]}
function gg(a,b){if(!a)return Rb;var c=document.createElement("div").style;jg(a).forEach(function(d){var e=Nc&&d in dg?d:d.replace(/^-(?:apple|css|epub|khtml|moz|mso?|o|rim|wap|webkit|xv)-(?=[a-z])/i,"");0!=e.lastIndexOf("--",0)&&0!=e.lastIndexOf("var",0)&&(d=$f(a,d),d=zf(e,d,b),null!=d&&ag(c,e,d))});
return new Qb(c.cssText||"",Pb)}
function kg(a){var b=Array.from(Sf(Hf,a,"getElementsByTagName",["STYLE"])),c=fb(b,function(g){return db(Wf(g).cssRules)});
c=fg(c);for(var d=[],e=0;e<c.length;e++)d[e]={index:e,kc:c[e]};d.sort(function(g,h){var k=sf(g.kc.selectorText),l=sf(h.kc.selectorText);a:{for(var n=Math.min(k.length,l.length),p=0;p<n;p++){var r=k[p],q=l[p];r=r>q?1:r<q?-1:0;if(0!=r){l=r;break a}}k=k.length;l=l.length;l=k>l?1:k<l?-1:0}return l||g.index-h.index});
for(e=0;e<d.length;e++)c[e]=d[e].kc;c.reverse();a=document.createTreeWalker(a,NodeFilter.SHOW_ELEMENT,null,!1);for(var f;f=a.nextNode();)c.forEach(function(g){Sf(If,f,f.matches?"matches":"msMatchesSelector",[g.selectorText])&&g.style&&lg(f,g.style)});
b.forEach(fe)}
function lg(a,b){var c=jg(a.style);jg(b).forEach(function(d){if(!(0<=c.indexOf(d))){var e=$f(b,d);ag(a.style,d,e)}})}
function jg(a){Ja(a)?a=db(a):(a=hb(a),bb(a,"cssText"));return a}
;ee("DIV");var mg={"* ARIA-CHECKED":!0,"* ARIA-COLCOUNT":!0,"* ARIA-COLINDEX":!0,"* ARIA-CONTROLS":!0,"* ARIA-DESCRIBEDBY":!0,"* ARIA-DISABLED":!0,"* ARIA-EXPANDED":!0,"* ARIA-GOOG-EDITABLE":!0,"* ARIA-HASPOPUP":!0,"* ARIA-HIDDEN":!0,"* ARIA-LABEL":!0,"* ARIA-LABELLEDBY":!0,"* ARIA-MULTILINE":!0,"* ARIA-MULTISELECTABLE":!0,"* ARIA-ORIENTATION":!0,"* ARIA-PLACEHOLDER":!0,"* ARIA-READONLY":!0,"* ARIA-REQUIRED":!0,"* ARIA-ROLEDESCRIPTION":!0,"* ARIA-ROWCOUNT":!0,"* ARIA-ROWINDEX":!0,"* ARIA-SELECTED":!0,"* ABBR":!0,
"* ACCEPT":!0,"* ACCESSKEY":!0,"* ALIGN":!0,"* ALT":!0,"* AUTOCOMPLETE":!0,"* AXIS":!0,"* BGCOLOR":!0,"* BORDER":!0,"* CELLPADDING":!0,"* CELLSPACING":!0,"* CHAROFF":!0,"* CHAR":!0,"* CHECKED":!0,"* CLEAR":!0,"* COLOR":!0,"* COLSPAN":!0,"* COLS":!0,"* COMPACT":!0,"* COORDS":!0,"* DATETIME":!0,"* DIR":!0,"* DISABLED":!0,"* ENCTYPE":!0,"* FACE":!0,"* FRAME":!0,"* HEIGHT":!0,"* HREFLANG":!0,"* HSPACE":!0,"* ISMAP":!0,"* LABEL":!0,"* LANG":!0,"* MAX":!0,"* MAXLENGTH":!0,"* METHOD":!0,"* MULTIPLE":!0,
"* NOHREF":!0,"* NOSHADE":!0,"* NOWRAP":!0,"* OPEN":!0,"* READONLY":!0,"* REQUIRED":!0,"* REL":!0,"* REV":!0,"* ROLE":!0,"* ROWSPAN":!0,"* ROWS":!0,"* RULES":!0,"* SCOPE":!0,"* SELECTED":!0,"* SHAPE":!0,"* SIZE":!0,"* SPAN":!0,"* START":!0,"* SUMMARY":!0,"* TABINDEX":!0,"* TITLE":!0,"* TYPE":!0,"* VALIGN":!0,"* VALUE":!0,"* VSPACE":!0,"* WIDTH":!0},ng={"* USEMAP":!0,"* ACTION":!0,"* CITE":!0,"* HREF":!0,"* LONGDESC":!0,"* SRC":!0,"LINK HREF":!0,"* FOR":!0,"* HEADERS":!0,"* NAME":!0,"A TARGET":!0,
"* CLASS":!0,"* ID":!0,"* STYLE":!0};var og="undefined"!=typeof WeakMap&&-1!=WeakMap.toString().indexOf("[native code]"),pg=0;function qg(){this.l=[];this.m=[];this.i="data-elementweakmap-index-"+pg++}
qg.prototype.set=function(a,b){if(Sf(Df,a,"hasAttribute",[this.i])){var c=parseInt(Sf(Ef,a,"getAttribute",[this.i])||null,10);this.m[c]=b}else c=this.m.push(b)-1,Uf(a,this.i,c.toString()),this.l.push(a);return this};
qg.prototype.get=function(a){if(Sf(Df,a,"hasAttribute",[this.i]))return a=parseInt(Sf(Ef,a,"getAttribute",[this.i])||null,10),this.m[a]};
qg.prototype.clear=function(){this.l.forEach(function(a){Sf(Gf,a,"removeAttribute",[this.i])},this);
this.l=[];this.m=[]};var rg=!Kc||10<=Number(Yc),sg=!Kc||null==document.documentMode;function tg(){}
;var ug={APPLET:!0,AUDIO:!0,BASE:!0,BGSOUND:!0,EMBED:!0,FORM:!0,IFRAME:!0,ISINDEX:!0,KEYGEN:!0,LAYER:!0,LINK:!0,META:!0,OBJECT:!0,SCRIPT:!0,SVG:!0,STYLE:!0,TEMPLATE:!0,VIDEO:!0};var vg={A:!0,ABBR:!0,ACRONYM:!0,ADDRESS:!0,AREA:!0,ARTICLE:!0,ASIDE:!0,B:!0,BDI:!0,BDO:!0,BIG:!0,BLOCKQUOTE:!0,BR:!0,BUTTON:!0,CAPTION:!0,CENTER:!0,CITE:!0,CODE:!0,COL:!0,COLGROUP:!0,DATA:!0,DATALIST:!0,DD:!0,DEL:!0,DETAILS:!0,DFN:!0,DIALOG:!0,DIR:!0,DIV:!0,DL:!0,DT:!0,EM:!0,FIELDSET:!0,FIGCAPTION:!0,FIGURE:!0,FONT:!0,FOOTER:!0,FORM:!0,H1:!0,H2:!0,H3:!0,H4:!0,H5:!0,H6:!0,HEADER:!0,HGROUP:!0,HR:!0,I:!0,IMG:!0,INPUT:!0,INS:!0,KBD:!0,LABEL:!0,LEGEND:!0,LI:!0,MAIN:!0,MAP:!0,MARK:!0,MENU:!0,METER:!0,NAV:!0,
NOSCRIPT:!0,OL:!0,OPTGROUP:!0,OPTION:!0,OUTPUT:!0,P:!0,PRE:!0,PROGRESS:!0,Q:!0,S:!0,SAMP:!0,SECTION:!0,SELECT:!0,SMALL:!0,SOURCE:!0,SPAN:!0,STRIKE:!0,STRONG:!0,STYLE:!0,SUB:!0,SUMMARY:!0,SUP:!0,TABLE:!0,TBODY:!0,TD:!0,TEXTAREA:!0,TFOOT:!0,TH:!0,THEAD:!0,TIME:!0,TR:!0,TT:!0,U:!0,UL:!0,VAR:!0,WBR:!0};var wg={"ANNOTATION-XML":!0,"COLOR-PROFILE":!0,"FONT-FACE":!0,"FONT-FACE-SRC":!0,"FONT-FACE-URI":!0,"FONT-FACE-FORMAT":!0,"FONT-FACE-NAME":!0,"MISSING-GLYPH":!0};
function xg(a){a=a||new yg;zg(a);this.i=ib(a.i);this.s=ib(a.F);this.m=ib(a.G);this.D=a.C;a.J.forEach(function(b){if(0!=b.lastIndexOf("data-",0))throw new Sa('Only "data-" attributes allowed, got: %s.',[b]);if(0==b.lastIndexOf("data-sanitizer-",0))throw new Sa('Attributes with "%s" prefix are not allowed, got: %s.',["data-sanitizer-",b]);this.i["* "+b.toUpperCase()]=Ag},this);
a.H.forEach(function(b){b=b.toUpperCase();if(-1==b.indexOf("-")||wg[b])throw new Sa("Only valid custom element tag names allowed, got: %s.",[b]);this.m[b]=!0},this);
this.C=a.l;this.o=a.D;this.l=null;this.u=a.u}
G(xg,tg);function Bg(a){return function(b,c){return(b=a(vb(b),c))&&"about:invalid#zClosurez"!=Jb(b)?Jb(b):null}}
function yg(){this.i={};Ya([mg,ng],function(a){hb(a).forEach(function(b){this.i[b]=Ag},this)},this);
this.m={};this.J=[];this.H=[];this.F=ib(ug);this.G=ib(vg);this.C=!1;this.R=Mb;this.L=this.s=this.K=this.l=Ua;this.D=null;this.o=this.u=!1}
function Cg(a,b){return function(c,d,e,f){c=a(c,d,e,f);return null==c?null:b(c,d,e,f)}}
function Dg(a,b,c,d){a[c]&&!b[c]&&(a[c]=Cg(a[c],d))}
function zg(a){if(a.o)throw Error("HtmlSanitizer.Builder.build() can only be used once.");Dg(a.i,a.m,"* USEMAP",Eg);var b=Bg(a.R);["* ACTION","* CITE","* HREF"].forEach(function(d){Dg(this.i,this.m,d,b)},a);
var c=Bg(a.l);["* LONGDESC","* SRC","LINK HREF"].forEach(function(d){Dg(this.i,this.m,d,c)},a);
["* FOR","* HEADERS","* NAME"].forEach(function(d){Dg(this.i,this.m,d,Na(Fg,this.K))},a);
Dg(a.i,a.m,"A TARGET",Na(Gg,["_blank","_self"]));Dg(a.i,a.m,"* CLASS",Na(Hg,a.s));Dg(a.i,a.m,"* ID",Na(Ig,a.s));Dg(a.i,a.m,"* STYLE",Na(a.L,c));a.o=!0}
function Jg(a,b){a||(a="*");return(a+" "+b).toUpperCase()}
function Ag(a){return vb(a)}
function Gg(a,b){b=vb(b);return 0<=Xa(a,b.toLowerCase())?b:null}
function Eg(a){return(a=vb(a))&&"#"==a.charAt(0)?a:null}
function Fg(a,b,c){return a(vb(b),c)}
function Hg(a,b,c){b=b.split(/(?:\s+)/);for(var d=[],e=0;e<b.length;e++){var f=a(b[e],c);f&&d.push(f)}return 0==d.length?null:d.join(" ")}
function Ig(a,b,c){return a(vb(b),c)}
function Kg(a,b){var c=!("STYLE"in a.s)&&"STYLE"in a.m;c="*"==a.o&&c?"sanitizer-"+(Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^D()).toString(36)):a.o;a.l=c;if(rg){c=b;if(rg){b=ee("SPAN");a.l&&"*"==a.o&&(b.id=a.l);a.u&&(c=ig("<div>"+c+"</div>"),kg(c),c=c.innerHTML);c=mc(c,null);var d=document.createElement("template");if(sg&&"content"in d)qc(d,c),d=d.content;else{var e=document.implementation.createHTMLDocument("x");d=e.body;qc(e.body,c)}c=document.createTreeWalker(d,
NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT,null,!1);for(d=og?new WeakMap:new qg;e=c.nextNode();){c:{var f=a;var g=e;switch(Yf(g)){case 3:f=Lg(f,g);break c;case 1:if("TEMPLATE"==Xf(g).toUpperCase())f=null;else{var h=Xf(g).toUpperCase();if(h in f.s||"http://www.w3.org/1999/xhtml"!=bg(g))var k=null;else f.m[h]?k=document.createElement(h):(k=ee("SPAN"),f.D&&Uf(k,"data-sanitizer-original-tag",h.toLowerCase()));if(k){var l=k,n=Tf(g);if(null!=n)for(var p=0;h=n[p];p++)if(h.specified){var r=f;var q=g,x=
h,z=x.name;if(0==z.lastIndexOf("data-sanitizer-",0))r=null;else{var F=Xf(q);x=x.value;var M={tagName:vb(F).toLowerCase(),attributeName:vb(z).toLowerCase()},N={Fd:void 0};"style"==M.attributeName&&(N.Fd=Vf(q));q=Jg(F,z);q in r.i?(r=r.i[q],r=r(x,M,N)):(z=Jg(null,z),z in r.i?(r=r.i[z],r=r(x,M,N)):r=null)}null!==r&&Uf(l,h.name,r)}f=k}else f=null}break c;default:f=null}}if(f){if(1==Yf(f)&&d.set(e,f),e=Zf(e),g=!1,e)h=Yf(e),k=Xf(e).toLowerCase(),l=Zf(e),11!=h||l?"body"==k&&l&&(h=Zf(l))&&!Zf(h)&&(g=!0):g=
!0,h=null,g||!e?h=b:1==Yf(e)&&(h=d.get(e)),h.content&&(h=h.content),h.appendChild(f)}else for(f=e;e=f.firstChild;)f.removeChild(e)}d.clear&&d.clear();a=b}else a=ee("SPAN");0<Tf(a).length&&(b=ee("SPAN"),b.appendChild(a),a=b);a=(new XMLSerializer).serializeToString(a);a=a.slice(a.indexOf(">")+1,a.lastIndexOf("</"))}else a="";return mc(a,null)}
function Lg(a,b){var c=b.data;(b=Zf(b))&&"style"==Xf(b).toLowerCase()&&!("STYLE"in a.s)&&"STYLE"in a.m&&(c=bc(hg(c,a.l,C(function(d,e){return this.C(d,{Jf:e})},a))));
return document.createTextNode(c)}
;function Mg(a){var b=new yg;b=new xg(b);return Kg(b,a)}
;var Ng=/^[6-9]$/,Og=/<\/?(?:b|em)>/gi;function Pg(a){this.i=a}
var Qg=new Pg({});function Rg(a,b,c,d,e,f){this.D=a instanceof kc?a:mc(a,null);this.i=b;this.C=c;this.u=d;this.m=e;this.o=f||Qg;this.s=!1;switch(this.u){case 0:case 32:case 38:case 400:case 407:case 35:case 33:case 41:case 34:case 44:case 45:case 40:case 46:case 56:case 30:case 94:case 92:case 93:case 411:case 410:case 71:this.s=!0}}
Rg.prototype.getHtml=function(){return lc(this.D).toString()};
Rg.prototype.l=function(){return this.C};
Rg.prototype.getType=function(){return this.u};var Sg=/^\s/,Tg=/\s+/,Ug=/\s+/g,Vg=/^\s+|\s+$/g,Wg=/^\s+$/,Xg=/<[^>]*>/g,Yg=/&nbsp;/g,Zg=/&#x3000;/g,$g=[/&/g,/&amp;/g,/</g,/&lt;/g,/>/g,/&gt;/g,/"/g,/&quot;/g,/'/g,/&#39;/g,/{/g,/&#123;/g],ah=document.getElementsByTagName("head")[0],bh=0,ch=1;function dh(a){var b={};if(a)for(var c=0;c<a.length;++c)b[a[c]]=!0;return b}
function eh(a,b){function c(){return b}
void 0===b&&(b=a);return{Xa:c,Nc:function(){return a},
Xd:c,Sf:function(){return a<b},
equals:function(d){return d&&a==d.Nc()&&b==d.Xd()}}}
function L(a,b,c,d){if(null==b||""===b){if(!d)return;b=""}c.push(a+"="+encodeURIComponent(String(b)))}
function fh(a,b){var c=[],d;for(d in a)L(d,a[d],c,b);return c.join("&")}
function gh(a){var b={},c=Math.max(a.indexOf("?"),a.indexOf("#"));a=a.substr(c+1);if(0<=c&&a){c=a.split("&");a=0;for(var d;a<c.length;++a)if(d=c[a])d=d.split("="),b[d[0]]=d[1]||""}return b}
function hh(a){return!!a&&!Wg.test(a)}
function ih(a){for(var b=$g.length,c=0;c<b;c+=2)a=a.replace($g[c],$g[c+1].source);return a}
function jh(a){for(var b=$g.length,c=0;c<b;c+=2)a=a.replace($g[c+1],$g[c].source);a=a.replace(Yg," ");return a.replace(Zg,"\u3000")}
function kh(a,b){return a&&(-1<a.indexOf(" ")||Tg.test(a))?(a=a.replace(Ug," "),a.replace(b?Vg:Sg,"")):a}
function lh(a,b,c){c&&(a=a.toLowerCase(),b=b.toLowerCase());return b.length<=a.length&&a.substring(0,b.length)==b}
function mh(){}
function nh(a){var b=oh;if(b.indexOf)return b.indexOf(a);for(var c=0,d=b.length;c<d;++c)if(b[c]===a)return c;return-1}
function ph(){return 0}
function qh(a){var b={},c;for(c in a)b[c]=a[c];return b}
function rh(a,b){a+="";b.length&&(a+="i"+b.join("i"),a+="k"+(-1!=Xa(b,173)?14:1));return a}
;function sh(a,b,c){this.i=a;this.L=b;this.G=c||"";this.C=(bh++).toString(36);this.F=this.i.toLowerCase();this.m=kh(this.F);this.H={};this.D={};this.s=this.K=this.o=!1;this.J=1}
sh.prototype.getId=function(){return this.C};
function th(a){a=parseInt(a.C,36);return isNaN(a)?-1:a}
function uh(a,b,c,d){a.o||(a.H[b]=c,d&&(a.D[b]=c))}
;function vh(a,b,c,d,e,f){this.m=a;this.i=b;this.l=c;this.s=d;this.o=e;this.C=f;this.u=!0;this.i?this.i.length&&33==this.i[0].getType()&&(this.o=this.u=!1):this.i=[];this.l||(this.l=Qg)}
vh.prototype.getType=function(){return this.u};function wh(){}
wh.prototype.search=function(){};
wh.prototype.redirect=function(){};
wh.prototype.uc=function(){return""};
wh.prototype.Xc=function(){};function xh(){this.m={};this.i={}}
xh.prototype.set=function(a,b){this.m[a]=b};
xh.prototype.has=function(a){return!!this.m[a]};
function yh(a,b,c){b in a.i||(a.i[b]=[]);a.i[b].push(c)}
;function zh(a,b,c,d,e,f){this.u=a;this.D=b;this.F=c;this.s=d;this.l=e;this.config_=f;this.C={};this.o={};this.i=[];this.m=!1;a=this.D;d=a.m;for(var g in d)if(b=g,c=d[b])this.C[b]=c,this.i.push(c);a=a.i;for(g in a){b=g;d=c=a[b];e=this.o[b]||[];for(f=0;f<d.length;++f)if(c=d[f])e.push(c),this.i.push(c);this.o[b]=e}this.i.sort(Ah);for(g=0;a=this.i[g++];)a.ha(this.F,this.s);this.u.Xc(this.s);this.s.Cd();for(g=0;a=this.i[g++];)a.N(this);for(g=0;a=this.i[g++];)a.setup(this.config_);for(g=0;a=this.i[g++];)a.Ha(this.config_);
for(g=0;a=this.i[g++];)a.O(this.config_);this.m=!0}
zh.prototype.deactivate=function(){if(this.m){for(var a=0,b;b=this.i[a++];)b.deactivate();this.m=!1}};
zh.prototype.isActive=function(){return this.m};
zh.prototype.get=function(a){return this.C[a]};
function Bh(a,b){return a.o[b]||[]}
function Ah(a,b){a=nh(a.getType());b=nh(b.getType());return 0>a?1:0>b?-1:a-b}
var oh=[127,551,149,134,494,123,121,126,553,118,115,128,160,173,119,116,152,153,129,120,374,124,158,155,131,130,147,570,141,143,138,144,139,140,135,136];function O(a){this.m=a}
m=O.prototype;m.ha=function(){};
m.N=function(){};
m.setup=function(){};
m.Ha=function(){};
m.O=function(){};
m.getType=function(){return this.m};
m.deactivate=function(){};function Ch(){}
Ch.prototype.i=null;Ch.prototype.getOptions=function(){var a;(a=this.i)||(a={},Dh(this)&&(a[0]=!0,a[1]=!0),a=this.i=a);return a};var Eh;function Fh(){}
G(Fh,Ch);function Gh(){var a=Dh(Eh);return a?new ActiveXObject(a):new XMLHttpRequest}
function Dh(a){if(!a.m&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.m=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.m}
Eh=new Fh;function Hh(){this.m=149;this.i={};this.l=0}
v(Hh,O);m=Hh.prototype;m.N=function(a){this.D=a.get(127)};
m.O=function(a){if(a.connectionType==this.Ka()){this.config_=a;var b=this.D.l,c="https:"==document.location.protocol;this.u=b.protocol||"http"+(c?"s":"")+"://";this.s=b.host||"clients1."+a.mb;this.C=b.yb;this.o=b.rd}};
m.deactivate=function(){Ih(this);this.l=0};
m.pd=function(a,b,c){Jh(this,a.getId(),a.i,b,c);return!0};
m.Ka=function(){return 1};
m.Pb=function(){return this.l};
m.Jb=function(a){var b=this.i[a];b&&(Kh(b),delete this.i[a])};
function Jh(a,b,c,d,e){a.config_.Dc||Ih(a);var f=Gh();f&&(c=a.u+a.s+a.C+"?"+(a.o?a.o+"&":"")+(d?d+"&":"")+"q="+encodeURIComponent(c)+"&xhr=t&xssi=t",f.open("GET",c,!0),f.withCredentials=!0,a.config_.visitorData&&f.setRequestHeader("X-Goog-Visitor-Id",a.config_.visitorData),f.onreadystatechange=function(){if(4==f.readyState){switch(f.status){case 403:a.l=1E3;break;case 302:case 500:case 502:case 503:++a.l;break;case 200:var g=f.responseText;0==g.lastIndexOf(")]}'\n",0)&&(g=g.substring(5));e(JSON.parse(g));
default:a.l=0}a.Jb(b)}},a.i[b]=f,f.send(null))}
function Ih(a){for(var b in a.i)Kh(a.i[b]);a.i={}}
function Kh(a){a.onreadystatechange=mh;var b=a.readyState;0!=b&&4!=b&&a.abort()}
;var Lh;function Nh(){this.m=153}
v(Nh,O);function Oh(a,b){a.length&&b.push({getType:function(){return 507},
position:2})}
;function Ph(a){this.s=a}
Ph.prototype.getType=function(){return this.s};
Ph.prototype.isSelectable=function(){return!0};function Qh(a){this.m=152;this.G=a}
G(Qh,O);Qh.prototype.Ma=mh;var Rh=ec(),Sh=Rh&&0<=Fb(ic(),10),Th=Fc();Th&&ic();var Uh=dc(),Vh=Db()&&!H("Edge");fc();var Wh=gc(),Xh=ge()&&fc(),Yh=H("Android"),Zh=H("Macintosh"),$h=ge();var ai;mb("A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(" "));function bi(a,b){b?a.setAttribute("role",b):a.removeAttribute("role")}
function ci(a,b,c){Array.isArray(c)&&(c=c.join(" "));var d="aria-"+b;""===c||void 0==c?(ai||(c={},ai=(c.atomic=!1,c.autocomplete="none",c.dropeffect="none",c.haspopup=!1,c.live="off",c.multiline=!1,c.multiselectable=!1,c.orientation="vertical",c.readonly=!1,c.relevant="additions text",c.required=!1,c.sort="none",c.busy=!1,c.disabled=!1,c.hidden=!1,c.invalid="false",c)),c=ai,b in c?a.setAttribute(d,c[b]):a.removeAttribute(d)):a.setAttribute(d,c)}
function di(a){var b=a.getAttribute("aria-activedescendant");return(9==a.nodeType?a:a.ownerDocument||a.document).getElementById(null==b||void 0==b?"":String(b))}
function ei(a,b){var c="";b&&(c=b.id);ci(a,"activedescendant",c)}
;var fi=void 0!=document.documentElement.style.opacity,gi={rtl:"right",ltr:"left"};function hi(a,b){try{if(a.setSelectionRange)a.setSelectionRange(b,b);else if(a.createTextRange){var c=a.createTextRange();c.collapse(!0);c.moveStart("character",b);c.select()}}catch(d){}}
function ii(a){for(var b=0,c=0;a;){b+=a.offsetTop;c+=a.offsetLeft;try{a=a.offsetParent}catch(d){a=null}}return{Bb:b,za:c}}
function ji(a){try{return ki(a).activeElement==a}catch(b){}return!1}
function P(a,b){a=document.createElement(a);b&&(a.className=b);return a}
function Q(a){return P("div",a)}
function li(a,b){a.innerHTML!=b&&(b=mc(b,null),qc(a,b))}
function mi(a,b){a.dir!=b&&(a.dir=b,a.style.textAlign=gi[b])}
function ni(a){a&&(a.preventDefault&&a.preventDefault(),a.returnValue=!1);return!1}
function oi(a){if(a=a||window.event)a.stopPropagation&&a.stopPropagation(),a.cancelBubble=a.cancel=!0;return ni(a)}
function pi(a){var b=P("a");tc(b,"#ifl");b.className="sbsb_i sbqs_b";a.appendChild(b);return b}
function qi(a){var b=a||window;a=b.document;var c=b.innerWidth;b=b.innerHeight;if(!c){var d=a.documentElement;d&&(c=d.clientWidth,b=d.clientHeight);c||(c=a.body.clientWidth,b=a.body.clientHeight)}return{xd:c,Qc:b}}
function ki(a){return a?a.ownerDocument||a.document:window.document}
function ri(a){return a?(a=ki(a),a.defaultView||a.parentWindow):window}
function si(){return fi?"opacity":"filter"}
function ti(a){return fi?a+"":"alpha(opacity="+Math.floor(100*a)+")"}
;function ui(){this.s=507;vi(this)}
v(ui,Ph);ui.prototype.i=function(){return this.l};
function wi(a,b,c,d){vi(a,c,d);ce(a.m,Mg(b))}
function vi(a,b,c){a.l=Q("sbfl_a");a.m=Q("sbfl_b");a.m.onclick=function(){c&&c.openReportForm&&c.openReportForm(b)};
a.l.appendChild(a.m)}
;var xi=[30,35,33,41],yi=[39,10,21];function zi(a,b){Qh.call(this,507);this.o=a;this.i=b}
v(zi,Qh);zi.prototype.N=function(a){this.l=a.get(128)};
zi.prototype.ha=function(a,b){b.addRule(".sbfl_a","font-size:12px;font-style:italic;color:#777;margin:-5px -18px -5px 0");b.addRule(".sbsb_c[dir=ltr] .sbfl_a","text-align:right");b.addRule(".sbsb_c[dir=rtl] .sbfl_a","text-align:left");b.addRule(".sbfl_a:hover","color:#333;cursor:pointer");b.addRule(".sbfl_b","background:rgba(255,255,255,.9)")};
zi.prototype.Sa=function(){return new ui};
function Ai(a){return a.map(function(b){return{label:b.i}})}
zi.prototype.Na=function(a,b){a=Za(this.l.o,function(c){a:if(0<=xi.indexOf(c.getType()))c=!1;else{c=c.m||[];for(var d=u(yi),e=d.next();!e.done;e=d.next())if(0<=c.indexOf(e.value)){c=!1;break a}c=!0}return c},this);
0<a.length?(wi(b,this.o,Ai(a),this.i),b.i().style.display=""):b.i().style.display="none"};function Bi(a,b,c,d,e,f,g){this.s=35;this.T=b;this.R=c;this.H=d;this.F=e;this.K=f;this.W=g;this.D=!0;this.C=!1;this.m=Q("sbpqs_d");this.u=Q();this.L=P("span","sbpqs_a");this.K&&(this.o=P("a"),this.o.href=Jb(Nb(sb(new pb(qb,"#ps")))),this.o.className="sbsb_i",this.J=Q("fr sbpqs_b"),this.u.appendChild(this.J),this.J.appendChild(this.o),this.l=Q("sbpqs_c"),ce(this.l,Mg(this.W)),bi(this.l,"alert"));this.u.appendChild(this.L);this.m.appendChild(this.u);this.l&&this.m.appendChild(this.l)}
v(Bi,Ph);Bi.prototype.i=function(){return this.m};
Bi.prototype.isSelectable=function(){return this.D};
function Ci(a,b,c,d,e){a.C=!1;a.D=!0;a.X=c;a.G=d;a.u.style.display="";ce(a.L,Mg(b));a.K&&(a.l.style.display="none",sc(a.o),a.o.onclick=function(f){Di(a,f)},a.o.title=e)}
function Di(a,b){a.C=!0;Ei(a.T,a.X,function(){a.C&&(Fi(a.R),a.m.onmouseover=a.m.onmouseout=a.m.onclick=null,a.u.style.display="none",a.l.style.display="",a.F.l==a.G&&Gi(a.H),a.F.i==a.G&&(Hi(a.F),Ii(a.H)),a.D=!1)});
oi(b)}
;function Ji(){Qh.call(this,35)}
v(Ji,Qh);m=Ji.prototype;m.ha=function(a,b){b.addRule(".sbpqs_a","color:#52188c");b.addRule(".sbdd_a[dir=ltr] .sbpqs_a","padding-right:8px");b.addRule(".sbdd_a[dir=rtl] .sbpqs_a","padding-left:8px");b.addRule(".sbpqs_c","color:#666;line-height:22px")};
m.N=function(a){this.i=a.get(123);this.l=a.get(118);this.o=a.get(189);this.C=a.get(127);this.F=a.get(128)};
m.setup=function(a){this.O(a)};
m.O=function(a){this.D=a.oc;this.u=a.hc;this.s=a.fc};
m.Sa=function(){return new Bi(this.C,this.o,this.i,this.l,this.F,this.D,this.s)};
m.Na=function(a,b){Ci(b,a.getHtml(),a.i,a.l(),this.u)};
m.Ma=function(a,b,c){c.search(b.i,1)};function Ki(a,b,c,d,e,f,g,h){this.s=35;this.T=b;this.R=c;this.H=d;this.F=e;this.K=g;this.W=h;this.D=!0;this.C=!1;this.m=Q("sbpqs_d");this.o=Q();this.L=P("span","sbpqs_a");this.K&&(this.u=P("a"),tc(this.u,"#ps"),this.u.className="sbsb_i",this.J=Q("fr sbpqs_b"),this.o.appendChild(this.J),this.J.appendChild(this.u),this.l=Q("sbpqs_c"),a=Mg(this.W),qc(this.l,a),bi(this.l,"alert"));this.o.appendChild(this.L);this.m.appendChild(this.o);this.l&&this.m.appendChild(this.l)}
v(Ki,Ph);Ki.prototype.i=function(){return this.m};
Ki.prototype.isSelectable=function(){return this.D};
Ki.prototype.ba=function(a){this.C=!0;Ei(this.T,this.X,C(this.ca,this));return oi(a)};
Ki.prototype.ca=function(){this.C&&(Fi(this.R),this.m.onmouseover=this.m.onmouseout=this.m.onclick=null,this.o.style.display="none",this.l.style.display="",this.F.l==this.G&&Gi(this.H),this.F.i==this.G&&(Hi(this.F),Ii(this.H)),this.D=!1)};function Li(){Qh.call(this,35)}
v(Li,Qh);m=Li.prototype;m.ha=function(a,b){b.addRule(".sbpqs_a","color:#52188c");b.addRule(".sbdd_a[dir=ltr] .sbpqs_a","padding-right:8px");b.addRule(".sbdd_a[dir=rtl] .sbpqs_a","padding-left:8px");b.addRule(".sbdd_a[dir=ltr] .sbpqs_b","padding-right:3px");b.addRule(".sbdd_a[dir=rtl] .sbpqs_b","padding-left:3px");b.addRule(".sbpqs_c","color:#666;line-height:22px")};
m.N=function(a){this.i=a.get(123);this.l=a.get(118);this.o=a.get(189);this.C=a.get(127);this.F=a.get(128)};
m.setup=function(a){this.O(a)};
m.O=function(a){this.D=a.oc;this.u=a.hc;this.s=a.fc};
m.Sa=function(a){return new Ki(this.C,this.o,this.i,this.l,this.F,a,this.D,this.s)};
m.Na=function(a,b){var c=a.getHtml(),d=a.i,e=a.l();a=this.u;b.C=!1;b.D=!0;b.X=d;b.G=e;b.o.style.display="";c=Mg(c);qc(b.L,c);b.K&&(b.l.style.display="none",c=Mg(a),qc(b.u,c),b.u.onclick=C(b.ba,b))};
m.Ma=function(a,b,c){c.search(b.i,1)};function Mi(){this.m=134;this.l={}}
v(Mi,O);m=Mi.prototype;m.N=function(a){this.o=a.l.getId()};
m.setup=function(){"google"in window||(window.google={});"sbox"in window.google||(window.google.sbox={});window.google.sbox["d"+this.o]=C(this.Ad,this)};
m.O=function(a){this.D="//"+(a.ic||"clients1."+a.mb)+"/complete/deleteitems?";this.u=a.sc;this.s=a.authuser;this.C=a.clientName};
m.deactivate=function(){Ni(this)};
function Ni(a){a.i&&(Oi.removeChild(a.i),a.i=null)}
m.Ad=function(a){Ni(this);a=a[0];var b=this.l[a];b&&(delete this.l[a],b())};
var Oi=ah;function Pi(){this.m=189}
v(Pi,O);Pi.prototype.N=function(a){this.i=a.get(134);this.l=a.get(123);this.u=a.get(118);this.D=a.get(553)};
Pi.prototype.setup=function(a){this.s=a.Sd};
Pi.prototype.O=function(a){this.o=a.sc;this.C=!(!this.i||!this.o);this.s&&(a=this.u.i?3E3:0,window.setTimeout(C(this.F,this),a),this.s=!1)};
function Ei(a,b,c){a=a.i;a.l[b]=c;c=[];"1"===gh(window.location.search).ssl_dbg&&L("ssl_dbg","1",c);L("delq",b,c);L("client",a.C,c);L("callback","google.sbox.d"+a.o,c);b=a.D;L("tok",a.u,c);a.s&&L("authuser",a.s,c);a.i=P("script");a.i.src=b+c.join("&");Oi.appendChild(a.i)}
Pi.prototype.F=function(){var a=Qi(this.D,"",void 0,void 0,!0);Ri(this.l,a);a=this.l;a.s=a.o};function Si(){this.m=156}
v(Si,O);Si.prototype.N=function(a){this.o=a.get(189)};
Si.prototype.l=function(a){var b=this.o,c={};b.C&&(c.tok=b.o);"1"===gh(window.location.search).ssl_dbg&&(c.ssl_dbg="1");for(var d in c)uh(a,d,c[d]);return 1};
Si.prototype.i=function(){return 12};function Ti(a){this.m=156;this.s=a;this.o=null}
G(Ti,O);Ti.prototype.l=function(a){var b=1,c=a.G;a=hh(a.i);var d="focus"==c||"input"==c;c=this.s.SEARCHBOX_INPUT_AUTOFOCUS&&"mousedown"==c&&this.o&&!this.o.isVisible();a||!d&&!c||(b=2);return b};
Ti.prototype.i=function(){return 2};
Ti.prototype.N=function(a){this.o=a.get(128)};function Ui(){this.m=157}
v(Ui,O);function Vi(){this.m=156}
v(Vi,O);Vi.prototype.l=function(a){var b=gh(uc(window.location.href));b.v&&uh(a,"video_id",b.v,!0);return 1};
Vi.prototype.i=function(){return 24};function Wi(a,b,c){this.m=598;this.K=b;this.D=c;this.u="";this.l=a;this.C=!1}
v(Wi,O);Wi.prototype.N=function(a){this.H=a.get(553);this.i=a.get(128);this.G=a.get(118);this.F=a.get(150)};
Wi.prototype.setup=function(a){this.o=a.previousQuery;this.J=a.Rd};
function Xi(a,b){a.u=b;a.H.mc(a.u)}
function Yi(a){if(!a.K||a.i.isVisible())return!1;var b=a.G.i;if(!b||0==b.length)return!1;if(b!=a.o)return"always"==a.D&&a.i&&a.i.o&&0<a.i.o.length&&a.i.show(),!1;if(a.l&&a.l.getRefinementsTuple){var c=a.l.getRefinementsTuple();if(c){var d=c[0];"ClearBySearchbox"==d?a.s=[]:"FromSearchResponse"==d&&a.C&&(a.s=c[1],a.C=!1)}}if(!a.s||0>=a.s.length)return a.i&&a.i.o&&0<a.i.o.length?(a.i.show(),!1):"always"==a.D||"fallback"==a.D;c=[];for(var e=d=0;e<a.s.length&&!(c.length>=a.J);++e){var f=a.s[e];f&&0<f.length&&
c.push(new Rg(a.F.bold(b,f),f,d++,0,[71],null))}0<c.length&&Zi(a.i,c,!1);return!1}
;function $i(){this.m=156}
v($i,O);$i.prototype.N=function(a){this.o=a.get(598)};
$i.prototype.l=function(a){var b=this.o,c;a:{if(b.l&&b.l.getPreviousQuery&&(c=b.l.getPreviousQuery()))break a;c=null}var d;d=(d=gh(uc(window.location.href)))?(d=d.search_query||d.q)&&d==b.o:!1;c&&c!=b.o?(b.C=!0,b.o=c,Xi(b,c)):d||""==b.u?d&&""==b.u&&Xi(b,b.o):Xi(b,"");return"mousedown"!=a.G&&"focus"!=a.G||!Yi(this.o)?1:2};
$i.prototype.i=function(){return 46};function aj(){this.m=149;this.l=ah;this.i={}}
v(aj,O);m=aj.prototype;m.N=function(a){this.G=a.get(127);this.C=a.l.getId()};
m.setup=function(){"google"in window||(window.google={});"sbox"in window.google||(window.google.sbox={})};
m.O=function(a){this.config_=a;a.connectionType==this.Ka()&&(a=this.G.l,this.u=a.protocol,this.s=a.host,this.F=a.yb,this.D=a.rd,this.H="https:"==document.location.protocol,bj(this,C(this.Bd,this)),(new Image).src=this.u+this.s+"/generate_204")};
m.deactivate=function(){bj(this,null);cj(this)};
m.pd=function(a,b,c,d){c=a.getId();var e=a.i;this.config_.Dc||cj(this);a=this.u+this.s+this.F+"?"+(this.D?this.D+"&":"")+(b?b+"&":"");var f=[];L("q",e,f,!0);this.config_.wd||L("callback","google.sbox.p"+this.C,f);if(this.H){b="";e=4+Math.floor(32*Math.random());for(var g=0,h;g<e;++g)h=.3>Math.random()?48+Math.floor(10*Math.random()):(.5<Math.random()?65:97)+Math.floor(26*Math.random()),b+=String.fromCharCode(h);L("gs_gbg",b,f)}b=P("script");this.config_.Ke&&b.setAttribute("nonce",this.config_.Ke);
a+=f.join("&");a=(f=ob())?f.createScriptURL(a):a;a=new tb(a,ub);a instanceof tb&&a.constructor===tb?a=a.i:(Ia(a),a="type_error:TrustedResourceUrl");b.src=a;var k,l;(k=(a=null==(l=(k=(b.ownerDocument&&b.ownerDocument.defaultView||window).document).querySelector)?void 0:l.call(k,"script[nonce]"))?a.nonce||a.getAttribute("nonce")||"":"")&&b.setAttribute("nonce",k);b.charset="utf-8";this.i[c]=b;this.o=d;this.l.appendChild(b);return!0};
m.Ka=function(){return 0};
m.Pb=function(){return 0};
m.Jb=function(a){var b=this.i[a];b&&(this.l.removeChild(b),delete this.i[a])};
function cj(a){for(var b in a.i)a.l.removeChild(a.i[b]);a.i={};a.o=null}
m.Bd=function(a){this.o&&this.o(a)};
function bj(a,b){b||(b=mh);var c=window.google;a.config_.wd?c.ac.h=b:c.sbox["p"+a.C]=b}
;function dj(){this.m=115;this.s={}}
v(dj,O);m=dj.prototype;m.N=function(a){this.o=a.get(116);if(a=Bh(a,154))for(var b=0,c;c=a[b++];)this.s[ej]=c};
m.O=function(){this.i=!1};
m.deactivate=function(){this.hide()};
m.isVisible=function(){return this.i};
m.getHeight=function(){return this.i?this.o.getHeight():0};
m.show=function(){if(!this.i){var a=this.o,b=a.show,c=qh(fj);if(this.l){var d=this.l.l;c.Ja=d.F;c.marginWidth=d.K;var e=d.config_.ef;e||(e="rtl"==d.F?"right":"left");c.horizontalAlignment=e}b.call(a,c);this.i=!0}};
m.hide=function(){this.i&&(this.o.hide(),this.i=!1)};
var fj={horizontalAlignment:"left",He:!0,Ja:null,marginWidth:0};function gj(){this.m=118}
v(gj,O);m=gj.prototype;m.N=function(a){this.o=a.get(119);this.D=a.get(130);this.W=a.get(145);this.u=a.get(117);this.J=a.get(123);this.F=a.get(374);this.T=a.get(121);this.X=a.get(553);this.l=a.get(128);this.K=a.get(139);this.ba=a.get(173);this.ca=Bh(a,160)};
m.setup=function(a){this.config_=a;this.i=this.s=this.o.i.value||""};
m.O=function(a){this.config_=a;this.G=this.L=!1;hj(this)};
function ij(a){var b={};jj(a.u,11,b);!b.cancel&&a.config_.se&&kj(function(){a.l.dismiss()})}
function lj(a,b){if(0==a.config_.Ab||2==a.config_.Ab||3==a.config_.Ab&&!a.s&&!b)return!1;a:{if(mj(a.l)&&(null!=a.l.l?b=nj(a.l):(b=a.l,b=mj(b)?b.o[0]:null),b.s))break a;b=null}var c;if(c=b){if(c=b=b.i)c=a.s,c=!(c||b?c&&b&&c.toLowerCase()==b.toLowerCase():1);c?(a.s=a.i,lh(b,a.i,!0)&&(b=a.i+b.substr(a.i.length)),oj(a,b,eh(b.length),"",!0),pj(a,b,!0),c=!0):c=!1}return c?(a.F.add(8),!0):!1}
function oj(a,b,c,d,e){a.config_.Jd&&!a.l.isVisible()&&"mousedown"==d&&qj(a.l,c,d);var f=!1,g=!1;if(b!=a.i||"onremovechip"==d)lh(d,"key")?a.F.add(1):"paste"==d&&a.F.add(2),f=!0,rj(a,b),jj(a.u,1,{gb:d,Ja:a.C}),g=D(),a.H||(a.H=g),a.R=g,hh(b)&&(e=!0),g=!0;b=Qi(a.X,b,c,d);switch(b.J){case 3:b.s=!0;case 2:e=!0;break;case 4:e=!1}e?(f&&(f=a.l,f.u&&!f.D&&(f.D=window.setTimeout(C(f.clear,f),f.config_.te))),a.L&&uh(b,"gs_is",1),Ri(a.J,b)):g&&(a.l.clear(),f=a.J,f.s=f.o);jj(a.u,2,{gb:d})}
function Ii(a){a=a.o;if(!a.C)try{a.i.focus(),a.C=!0,sj(a)}catch(b){}}
function tj(a,b){rj(a,b);a.o.refresh();jj(a.u,4,{Ja:a.C,input:b})}
function Gi(a){a.i!=a.s&&rj(a,a.s);jj(a.u,5,{input:a.s,suggestions:a.l.o,Ja:a.C});a.o.refresh()}
m.getHeight=function(){return this.o.getHeight()};
function uj(a){if(a.ba){if(a.config_.Tb)return!0;for(var b=0,c;c=a.ca[b++];)if(c.isEnabled())return!0}return!1}
m.search=function(a){this.T.search(this.i,a)};
m.clear=function(){this.i&&(rj(this,""),this.o.clear(),jj(this.u,1),jj(this.u,16),this.l.clear())};
function vj(a,b){var c=a.o.u.Xa();a.C==b?mj(a.l)&&c==a.i.length&&(null!=a.l.l?a.config_.pb&&!a.config_.sa&&a.T.search(nj(a.l).i,6):a.config_.Wc&&lj(a,!0)):a.D&&0==c&&a.D.i()}
function wj(a){var b=a.o.u.Xa();return a.config_.sa&&mj(a.l)&&null!=a.l.l&&b===a.i.length}
function pj(a,b,c){a.i=b||"";hj(a);a.o.refresh();c||jj(a.u,4,{Ja:a.C,input:a.i})}
function hj(a){var b=xj(a.W,a.i);if(b!=a.C){var c=a.o;c.s&&(c.s.dir=b);c.i.dir=b;c.F&&(c.F.dir=b);if(c.Oa){c=c.i;var d=0,e=c.style;"INPUT"!=c.nodeName&&(d+=1);e.left=e.right="";e["rtl"==b?"right":"left"]=d+"px"}a.C=b}}
function rj(a,b){a.i=a.s=b||"";hj(a)}
;function yj(){this.m=128}
v(yj,O);m=yj.prototype;m.N=function(a){this.s=a.get(129);this.L=a.get(145);this.J=a.get(115);this.R=a.get(123);this.C=a.get(118);this.ba=a.get(147);this.T=Bh(a,153);this.X=a.get(553);this.H=a.get(184);this.ca=a.get(157)};
m.setup=function(){this.T.sort(ph)};
m.O=function(a){this.config_=a;this.l=this.i=null;this.u=this.G=!1;this.W=!0;this.F="";this.K=0};
m.deactivate=function(){this.D&&(window.clearTimeout(this.D),this.D=null);this.o=null;this.hide()};
function Zi(a,b,c){var d=a.H&&a.H.l(b);a.clear();a.o=b;var e=mj(a)?b[0].i:a.C.s;a:{var f=e;if(a.L.i){for(var g=!1,h=!1,k=0,l;k<f.length;++k)if(l=f.charAt(k),!zj.test(l)&&(Aj.test(l)?h=!0:g=!0,h&&g)){f=!0;break a}f=!1}else f=!0}f&&(e=a.C.s);a.F=xj(a.L,e);if(a.config_.Se&&mj(a)&&c&&!$h){a.G=!0;c=a.s;if(c.s){c.H=a.F;Bj(c);e=!1;for(f=0;g=b[f++];)Cj(c,g)&&(e=!0);c=e}else c=!1;e=b[0].o.i.a||"";e=jh(e);b=a.ba;f=0;e&&(b.i||Dj(b),Ej(b),e in b.o?f=b.o[e]:(li(b.i,ih(e)),b.o[e]=f=b.i.offsetWidth,li(b.i,"")));
a.K=f}else{a.G=!1;b=a.s;if(a.G||!a.config_.af&&!mj(a))c=[];else{c=[];e=[];for(f=0;a.T[f++]&&!Oh(a.o,e););(f=e?e.length:0)&&(f-=Fj(e,c,0));for(g=0;g<a.o.length;++g)c.push(a.o[g]);f&&(f-=Fj(e,c,1));a.config_.pe&&c.push(1);f&&(f-=Fj(e,c,2));f&&Fj(e,c,3);a.config_.Pc&&c.push(2);a.ca&&1<c.length&&5==c[0].getType()&&c.splice(1,0,3)}if(b.s){b.H=a.F;Bj(b);e=!1;for(f=0;g=c[f++];)if(1==g)g=b,g.F?g.F.style.display="":(h=P("li"),k=h.style,k.position="relative",k.textAlign="center",k.whiteSpace="nowrap",h.dir=
g.J,g.l=Q(),g.l.className="sbsb_g",g.config_.Pc&&(g.l.style.paddingBottom="1px"),Gj(g,g.config_.searchText,g.l,13),g.config_.oe?Gj(g,g.config_.Hc,g.l,8):g.config_.qe&&Gj(g,g.config_.Ye,g.l,14),h.appendChild(g.l),h.onmousedown=C(g.ec,g),h.className=g.config_.zb,g.F=h),g.i.appendChild(g.F);else if(2==g)if(g=b,g.D)g.D.style.display="";else{h=Q("sbsb_j "+g.config_.zb);k=P("a");k.id="sbsb_f";tc(k,"http://www.google.com/support/websearch/bin/answer.py?hl="+g.config_.Xb+"&answer=106230");var n=g.config_.learnMoreText;
if(n instanceof kc)l=n;else{if(n instanceof kc)l=n;else{var p="object"==typeof n;l=null;p&&n.Ub&&(l=n.qb());n=p&&n.ya?n.ra():String(n);Cb.test(n)&&(-1!=n.indexOf("&")&&(n=n.replace(wb,"&amp;")),-1!=n.indexOf("<")&&(n=n.replace(xb,"&lt;")),-1!=n.indexOf(">")&&(n=n.replace(yb,"&gt;")),-1!=n.indexOf('"')&&(n=n.replace(zb,"&quot;")),-1!=n.indexOf("'")&&(n=n.replace(Ab,"&#39;")),-1!=n.indexOf("\x00")&&(n=n.replace(Bb,"&#0;")));l=mc(n,l)}l=mc(lc(l).toString().replace(/(\r\n|\r|\n)/g,"<br>"),l.qb())}qc(k,
l);h.appendChild(k);h.onmousedown=C(g.ec,g);g.D=h;g.s.appendChild(g.D)}else 3==g?(g=b,h=g.ba.pop(),h||(h=P("li"),ci(h,"hidden",!0),h.i=!0,k=P("div","sbsb_e"),h.appendChild(k)),g.i.appendChild(h)):Cj(b,g)&&(e=!0);c=e}else c=!1;a.K=0}d&&(a.l=a.H.m(),Hj(a,a.H.i()));c?a.show():a.clear()}
function Hj(a,b){if(a.i!=b){var c=a.i;a.i=b;Ij(a,c)}}
m.nd=function(){if(mj(this))if(this.u){var a=this.i;this.i==this.o.length-1?this.l=this.i=null:null==this.i?this.i=0:++this.i;this.l=this.i;Jj(this,a,C(this.nd,this))}else this.show()};
m.od=function(){if(mj(this))if(this.u){var a=this.i;this.o&&0!=this.i?null==this.i?this.i=this.o.length-1:--this.i:this.l=this.i=null;this.l=this.i;Jj(this,a,C(this.od,this))}else this.show()};
m.isVisible=function(){return this.u};
m.isEnabled=function(){return this.W};
function nj(a){return null!=a.l?a.o[a.l]:null}
function mj(a){return!(!a.o||!a.o.length)}
m.show=function(){if(!this.u){a:{var a=this.J,b=ej;if(b in a.s){if(a.l){if(b==ej)break a;a.hide();a.l.l.u=!1}a.l=a.s[b];b=a.o;a=a.l;a!=b.C&&(b.C=a,a=a.i.s,b.K?a!=b.K&&b.u.replaceChild(a,b.K):b.u.appendChild(a),b.K=a)}}this.J.show();this.u=!0}};
m.hide=function(){this.u&&(this.D&&(window.clearTimeout(this.D),this.D=null),this.J.hide(),this.u=!1)};
m.clear=function(){this.hide();this.o=null;this.G=!1;null!=this.i&&Kj(this.s,this.i);this.l=this.i=null;this.s.clear()};
m.dismiss=function(){var a=this.R;a.s=a.o;this.hide()};
function Hi(a){null!=a.i&&Kj(a.s,a.i);a.l=a.i=null}
function qj(a,b,c){if(mj(a))a.show();else{var d=a.C.s;d&&(b=Qi(a.X,d,b||a.C.o.u,c),Ri(a.R,b))}}
function Fj(a,b,c){for(var d=0,e=0,f;e<a.length;++e)(f=a[e])&&f.position==c&&(3==c?f.Ee&&f.Ee(b)&&++d:(b.push(f),++d));return d}
function Jj(a,b,c){null==a.i||a.s.isSelectable(a.i)?(Ij(a,b),b=a.s,c=a.i,c=void 0===c?null:c,null===c?b.C.removeAttribute("aria-activedescendant"):(c=b.o[c])&&c.isSelectable()&&(c=c.i(),b.config_.sa&&(c=c.querySelector('[role="gridcell"]')),c&&ei(b.C,c)),null==a.i?Gi(a.C):(b=a.o[a.i],b.getType(),pj(a.C,b.i))):(Kj(a.s,b),c())}
function Ij(a,b){null!=b&&Kj(a.s,b);null!=a.i&&a.s.highlight(a.i)}
var ej=ch++;function Lj(){this.m=154}
v(Lj,O);Lj.prototype.N=function(a){this.l=a.get(128);this.i=a.get(129)};function Mj(){this.m=145;this.i=Aj.test("x")}
v(Mj,O);Mj.prototype.ha=function(a){this.l=a.rb()};
function xj(a,b){var c=a.l;a.i&&(Aj.test(b)?c="ltr":zj.test(b)||(c="rtl"));return c}
var zj=RegExp("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$"),Aj=RegExp("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*(?:\\d[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$|[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufdfe-\ufe6f\ufefd-\uffff])");function kj(a){"function"!==typeof A.setImmediate||A.Window&&A.Window.prototype&&!H("Edge")&&A.Window.prototype.setImmediate==A.setImmediate?(Nj||(Nj=Oj()),Nj(a)):A.setImmediate(a)}
var Nj;function Oj(){var a=A.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!H("Presto")&&(a=function(){var e=ee("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=C(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!ec()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Ac;c.Ac=null;e()}};
return function(e){d.next={Ac:e};d=d.next;b.port2.postMessage(0)}}return function(e){A.setTimeout(e,0)}}
;function Pj(){this.m=117;this.l=[];this.i={zd:1}}
v(Pj,O);function R(a,b,c,d,e,f){var g=Qj(a,b);g||(g={},a.l.push({element:b,ke:g}));var h=g[c];h||(h=g[c]=[],a=Rj(a,c,b.zd?window:ri(b),h),"string"!==typeof c?b[c]=a:b.addEventListener?b.addEventListener(c,a,!1):b["on"+c]=a);h.push({Ge:!!f,Yb:!1,priority:e||0,process:d});h.sort(Sj);d.Qd=c}
function Tj(a,b,c){if(a=Qj(a,b))if(a=a[c.Qd]){b=0;for(var d;d=a[b++];)if(d.process==c){d.Yb=!0;break}}}
function jj(a,b,c){c=c||{};(a=a.i[b])&&a(c,c.gb)}
Pj.prototype.fa=function(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent("on"+b,c)};
function Rj(a,b,c,d){return C(function(e,f){if(d.length){if(!e){e={};var g=c.event;g&&(g.keyCode&&(e.keyCode=g.keyCode),e.Fe=!0)}e.gb=f||b;f=e;var h,k;g=0;for(var l;l=d[g++];)l.Yb?k=!0:h||(l.Ge?Uj(l,f):h=l.process(f));if(k)for(g=0;l=d[g];)l.Yb?d.splice(g,1):++g;if(e.ub)return delete e.ub,e.Fe&&(e=c.event||e),oi(e),e.returnValue=!1}},a)}
function Qj(a,b){for(var c=0,d;c<a.l.length;++c)if(d=a.l[c],d.element==b)return d.ke;return null}
function Uj(a,b){kj(function(){a.process(b)})}
function Sj(a,b){return b.priority-a.priority}
;function Vj(){this.m=494;this.i={};this.s=this.C=0;this.l=-1;this.o=0;this.u={}}
v(Vj,O);Vj.prototype.O=function(){this.reset()};
Vj.prototype.reset=function(){this.i={};this.s=this.C=0;this.l=-1;this.o=0;this.u={}};function Wj(){this.m=374}
v(Wj,O);Wj.prototype.O=function(){this.reset()};
Wj.prototype.add=function(a){this.i||(this.i={});this.i[a]=!0};
Wj.prototype.reset=function(){this.i={}};function Xj(){this.m=120;this.G=-1}
v(Xj,O);m=Xj.prototype;m.N=function(a){this.J=a.get(191);this.i=a.get(123);this.o=a.get(118);this.D=a.get(374);this.l=a.get(494);this.F=a.get(126);this.s=a.get(128);this.H=Bh(a,311)};
m.setup=function(a){this.C=a.Me};
m.O=function(a){this.config_=a;this.reset()};
function Yj(a,b){var c=a.o.s;var d=[];d[27]=64;d[0]=Zj(a.config_.clientName);d[28]=Zj(a.config_.requestIdentifier);d[1]=void 0==b?"":b+"";b=a.D;var e=[];for(f in b.i)e.push(parseInt(f,10));d[26]=e.join("j");var f="";null!=a.s.l?f=a.s.l+"":(b=a.F.l,(10<=b.D||3<=b.F.Pb())&&(f="o"));d[2]=f;f="";if(b=a.s.o){for(var g=e=0,h;h=b[g++];){h=rh(h.getType(),h.m||[]);if(h!=k){1<e&&(f+="l"+e);f+=(k?"j":"")+h;e=0;var k=h}++e}1<e&&(f+="l"+e)}d[3]=f;k="";f=a.s.o;b=a.l.u;if(f)for(e=0;g=f[e++];){var l=rh(g.getType(),
g.m||[]);l in b&&delete b[l]}if(b)for(l in b)k+=(k?"j":"")+l;d[35]=k;l=a.l.l;d[33]=-1<l?String(l):"";d[4]=Math.max(a.o.H-a.u,0);d[5]=Math.max(a.o.R-a.u,0);d[6]=a.G;d[7]=D()-a.u;d[18]=Math.max(a.o.ja-a.u,0);d[8]=a.i.Pa;k=a.i;k=(l=k.l)?k.i.o:0;d[25]=l?"1"+(a.config_.Ld?"a":"")+(a.config_.Bc?"c":""):"";d[10]=k;l=a.i;d[11]=l.l?l.i.s:0;d[12]=a.i.Aa;f=a.i;l=f.ca;k=f.ba;f=f.ja;d[9]=l;d[22]=k;d[17]=f;d[13]=a.i.Oa;d[14]=a.i.K;d[15]=a.i.R;l=a.i;k=[];for(b=e=0;b<=ak;++b)f=l.L[b],0==f?e++:(e=1==e?"0j":1<e?b+
"-":"",k.push(e+f),e=0);d[16]=k.join("j");d[36]=a.i.T;l=0;for(var n in a.l.i)l++;d[30]=l;d[31]=a.l.C;d[32]=a.l.s;d[19]=Zj(a.config_.pc);n=a.l;k=a.F.i;l=!1;k&&(l=k.l.i.e||"");k=0;l?(k|=1,1<n.o&&(k|=2)):0<n.o&&(k|=2);n=k;d[20]=0==n?"":n+"";for(n=0;l=a.H[n++];)k=l.l(),bk[k]&&(d[k]=void 0==d[k]?Zj(l.xa()):"");d=d.join(".").replace(ck,"");if(a.J&&a.C){n=c+d;b:{l=a.C;k=[];if(l)for(e=b=f=0;e<l.length;++e){g=l.charCodeAt(e);if(32>g||127<g||!dk[g-32]){l=[];break b}f<<=6;f|=dk[g-32]-1;b+=6;8<=b&&(k.push(f>>
b-8&255),b-=8)}l=k}f=l;l={};l.ea=Array(4);l.buffer=Array(4);l.lf=Array(4);l.padding=Array(64);l.padding[0]=128;for(k=1;64>k;++k)l.padding[k]=0;ek(l);k=Array(64);64<f.length&&(ek(l),fk(l,f),f=gk(l));for(b=0;b<f.length;++b)k[b]=f[b]^92;for(b=f.length;64>b;++b)k[b]=92;ek(l);for(b=0;64>b;++b)l.buffer[b]=k[b]^106;hk(l,l.buffer);l.total=64;fk(l,ik(n));n=gk(l);ek(l);hk(l,k);l.total=64;fk(l,n);n=gk(l);n=n.slice(0,8);"string"===typeof n&&(n=ik(n));l="";if(n){k=n.length;for(e=b=f=0;k--;)for(b<<=8,b|=n[e++],
f+=8;6<=f;)l+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b>>f-6&63),f-=6;f&&(l+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b<<8>>f+8-6&63))}n=l}else n="";c={oq:c,gs_l:d+"."+n};a.config_.Ie&&(c.q=a.o.i);return c}
m.reset=function(){this.u=D();++this.G;var a=this.o;a.H=0;a.R=0;a.ja=0;this.D.reset();a=this.i;if(a.l){var b=a.i;b.o=0;b.s=0}a.Pa=0;a.D=0;a.Aa=0;a.ca=0;a.ba=0;a.ja=0;a.Oa=0;a.K=0;a.R=0;a.T=0;a.L=[];for(b=0;b<=ak;++b)a.L[b]=0;for(a=0;b=this.H[a++];)b.reset();this.l.reset()};
m.setToken=function(a){this.C=a};
function Zj(a){return a?a.replace(jk,"-"):""}
var ck=/\.+$/,jk=/\./g,bk=dh([23]);function kk(){this.m=121}
v(kk,O);m=kk.prototype;m.ha=function(a){this.o=a.Kc()};
m.N=function(a){this.i=a.get(347);this.u=a.get(130);this.H=a.get(117);this.D=a.get(123);this.s=a.get(118);this.J=a.get(120);this.K=a.get(128);this.F=a.get(139);this.C=a.u;this.G=Bh(a,294)};
m.O=function(a){this.config_=a};
m.search=function(a,b){if(this.G){for(var c=!1,d=0,e;e=this.G[d++];)2==e.i(a,b)&&(c=!0);if(c)return}if(hh(a)||this.config_.Ga||this.u&&this.u.Ga()){if(Ng.test(b)){if(this.o&&!this.l){c=this.o;b:{if(d=c.getElementsByTagName("input")){e=0;for(var f;f=d[e++];)if("btnI"==f.name&&"submit"!=f.type.toLowerCase()){d=f;break b}}d=null}d?c=null:(d=P("input"),d.type="hidden",d.name="btnI",d.value="1",c.appendChild(d),c=d);this.l=c}}else this.l&&(this.o.removeChild(this.l),this.l=null);this.i&&this.config_.Lb&&
lk(this.i,b);this.C.search(a,b);mk(this);jj(this.H,12,{query:a})}};
m.redirect=function(a){this.i&&this.config_.Lb&&lk(this.i);this.C.redirect(a);mk(this)};
function mk(a){var b=a.D;b.s=b.o;a.D.C=null;a.J.reset();a.K.clear();a.s.s!=a.s.i&&(b=a.s,b.s=b.i);a.F&&a.F.clear()}
;function nk(){this.m=553}
v(nk,O);nk.prototype.N=function(a){this.i=Bh(a,156);a.get(126)};
nk.prototype.setup=function(){this.i.sort(ok)};
nk.prototype.O=function(a){this.config_=a;this.l=a.previousQuery};
nk.prototype.mc=function(a){this.l=a};
function Qi(a,b,c,d,e){b=new sh(b,c||eh(b.length),d||"");c=1;if(a.i){d=0;for(var f;f=a.i[d++];)f=f.l(b),f>c&&(c=f)}b.J=c;null!=a.config_.Ib&&uh(b,"ds",a.config_.Ib,!0);null!=a.config_.qd&&uh(b,"swl",a.config_.qd,!0);uh(b,"pq",a.l,!0);e&&!b.o&&(b.K=!0);b.o||(b.u=D(),"cp"in b.D||(a=b.L.Xa(),uh(b,"cp",a,!0)),uh(b,"gs_id",b.C),b.l=fh(b.D)+":"+b.F,b.o=!0);return b}
function ok(a,b){return a.i()-b.i()}
;function pk(){this.m=123;this.G=!1;this.o=-1}
v(pk,O);m=pk.prototype;m.N=function(a){this.i=a.get(133);this.W=a.get(130);this.Hb=a.get(118);this.Kb=a.get(120);this.X=a.get(494);this.we=a.get(124);this.Qa=a.get(125);this.Ra=a.get(230);this.Mb=a.get(127)};
m.O=function(a){this.F=this.Mb.i;this.config_=a;this.G=!0;this.u={};this.J=0;this.Vd=a.Td;this.Zd=a.xe;this.s=-1;this.l=this.config_.enableCaching&&!!this.i};
m.deactivate=function(){this.G=!1;qk(this);this.u=this.C=null;this.s=this.o};
function Ri(a,b){if(!(!a.G||a.Zd||a.W&&a.W.m())){var c=!0,d=th(b);d>a.o&&(a.o=d);++a.Pa;a.X.i[b.getId()]=!0;hh(a.Hb.i)||hh(b.i)||(d=a.X,d.l=Math.max(d.l,0));d=D();for(var e in a.u)2500<d-a.u[e].u&&rk(a,e);a.l&&(e=a.i.get(b))&&((c=a.Vd||b.K)&&a.config_.ye&&(b.s=!0),a.Qa.process(e),e.s&&++a.Aa,a.C=null);c&&(a.C=b,a.H||a.dd())}}
function Fi(a){if(a.l){a=a.i;for(var b in a.l)for(var c=a.l[b].i,d=0,e;e=c[d++];)if(35==e.getType()){delete a.l[b];break}for(b=0;b<a.i.length;++b)a.i[b].reset()}}
function sk(a,b){return C(function(c){this.vc(c,b)},a)}
m.dd=function(){qk(this);if(!(2<this.F.Pb())){var a=this.C;this.C=null;if(a){var b=[],c=a.H;if(c)for(var d in c)L(d,c[d],b);b=this.F.pd(a,b.join("&"),sk(this,a),C(this.vc,this));a.s||(++this.ca,b?(this.u[a.getId()]=a,++this.D):++this.ba);a=100;b=(this.D-2)/2;for(c=1;c++<=b;)a*=2;a<this.J&&(a=this.J);this.H=window.setTimeout(C(this.dd,this),a)}}};
function qk(a){null!=a.H&&(window.clearTimeout(a.H),a.H=null)}
function rk(a,b){a.F.Jb(b);delete a.u[b];a.D&&--a.D}
m.vc=function(a,b){if(this.G){if(!b&&(b=this.u[(a[2]||{}).j],!b))return;if(!b.s){var c=this.we;var d=b,e=a[0],f=a[1],g={};if(a=a[2])for(var h in a){var k=a[h];h in c.i&&(k=c.i[h].parse(k));g[h]=k}var l=k=!1;h=!1;a=0;for(var n;n=f[a++];)if(33==(n[1]||0)?l=!0:k=!0,l&&k){h=!0;break}k=0;l=[];for(a=0;n=f[a++];){var p=n[1]||0;if(!h||33!=p){var r=n[0];c.o&&(r=c.l.bold(e.toLowerCase(),jh(r).replace(Xg,"")));var q=r;r=l;var x=r.push,z=q;q=jh(q).replace(Xg,"");var F=k++,M=n[3];x.call(r,new Rg(z,q,F,p,n[2]||
[],M?new Pg(M):Qg))}}c=new vh(d,l,new Pg(g),!1,!0,!1);this.Ra&&(c=Kg(this.Ra,c));if(this.l)for(d=this.i,e=c,(e.i&&e.i[0]||""!=e.m.i)&&e&&e.o&&(d.l[e.m.l]=e),f=0;f<d.i.length;++f)d.i[f].update(e);th(b)<=this.s?!b||b.i||c.s||(this.T=D()-b.u):(++this.ja,this.Qa.process(c)||++this.Oa,this.J=c.l.i.d||0,b&&(rk(this,b.getId()),d=b.u,d=D()-d,b.i?(this.R+=d,this.K=Math.max(d,this.K),++this.L[d>tk?ak:uk[Math.floor(d/100)]]):this.T=d));c&&(b=c.l.i.q||"")&&this.Kb.setToken(b)}}};
var uk=[0,1,2,3,4,5,5,6,6,6,7,7,7,7,7,8,8,8,8,8],ak=uk[uk.length-1]+1,tk=100*uk.length-1;function vk(){this.m=124;this.i={}}
v(vk,O);vk.prototype.N=function(a){this.l=a.get(150);if(a=Bh(a,158))for(var b=0,c;c=a[b++];)this.i[c.Pf()]=c};
vk.prototype.O=function(a){this.o=a.Sb};function wk(){this.m=125}
v(wk,O);wk.prototype.N=function(a){this.s=a.get(117);this.C=a.get(118);this.u=a.get(494);this.i=Bh(a,122);this.l=a.get(126);this.o=a.get(128);this.i.sort(xk)};
wk.prototype.process=function(a){var b=a,c=this.C.i.toLowerCase(),d=this.l.i;c=kh(c);var e=b.m;b=e?e.m:kh(b.m.i.toLowerCase());var f=(d=d?d.m:null)?d.m:"";e=1==(0==c.indexOf(b)?0==c.indexOf(f)?d&&d.getId()==e.getId()?0:b.length>=f.length?1:-1:1:-1);c=-1!=e;if(e){if(this.i)for(e=0;b=this.i[e++];)a=b.edit(a);d=this.l.i=a;a=d.m.i;e=d.i;this.o.isEnabled()&&(b=0==d.getType(),Zi(this.o,e,b));b=this.u;var g=d.m;f=g.getId();if(f in b.i){var h=d.i.length;0<h&&(hh(g.i)||(b.l=h),g=g.u,g=D()-g,b.s+=g,++b.C);
d.l.i.e&&++b.o;delete b.i[f]}d=d.i;for(f=0;g=d[f++];)h=g.getType(),b.u[rh(h,g.m||[])]=!0;jj(this.s,3,{input:a,suggestions:e})}return c};
function xk(a,b){return a.i()-b.i()}
;function yk(){this.m=126}
v(yk,O);yk.prototype.N=function(a){this.l=a.get(123)};
yk.prototype.O=function(){this.i=null};var zk=["expflags","plugin"];function Ak(){this.m=127;this.o={}}
v(Ak,O);Ak.prototype.N=function(a){a=Bh(a,149);for(var b=0,c;c=a[b++];)this.o[c.Ka()]=c};
Ak.prototype.O=function(a){var b="https:"==document.location.protocol,c=[];L("client",a.clientName,c);L("hl",a.Xb,c);L("gl",a.sd,c);L("sugexp",a.pc,c);L("gs_rn",64,c);L("gs_ri",a.requestIdentifier,c);var d=gh(a.url||A.location.href);zk.filter(function(e){return d.hasOwnProperty(e)}).forEach(function(e){return c.push(e+"="+d[e])});
a.authuser&&L("authuser",a.authuser,c);this.l={protocol:"http"+(b?"s":"")+"://",host:a.ic||"clients1."+a.mb,yb:a.yb||"/complete/search",rd:c.length?c.join("&"):""};this.i&&this.i.Ka()==a.connectionType||(this.i=this.o[a.connectionType])};function Bk(){this.m=191}
v(Bk,O);function ik(a){for(var b=[],c=0,d=0;d<a.length;++d){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b}
function ek(a){a.ea[0]=1732584193;a.ea[1]=4023233417;a.ea[2]=2562383102;a.ea[3]=271733878;a.hb=a.total=0}
function hk(a,b){for(var c=a.lf,d=0;64>d;d+=4)c[d/4]=b[d]|b[d+1]<<8|b[d+2]<<16|b[d+3]<<24;var e=a.ea[0];b=a.ea[1];d=a.ea[2];for(var f=a.ea[3],g,h,k,l=0;64>l;++l)16>l?(g=f^b&(d^f),h=l):32>l?(g=d^f&(b^d),h=5*l+1&15):48>l?(g=b^d^f,h=3*l+5&15):(g=d^(b|~f),h=7*l&15),k=f,f=d,d=b,e=e+g+Ck[l]+c[h]&4294967295,g=Dk[l],b=b+((e<<g|e>>>32-g)&4294967295)&4294967295,e=k;a.ea[0]=a.ea[0]+e&4294967295;a.ea[1]=a.ea[1]+b&4294967295;a.ea[2]=a.ea[2]+d&4294967295;a.ea[3]=a.ea[3]+f&4294967295}
function fk(a,b,c){c||(c=b.length);a.total+=c;for(var d=0;d<c;++d)a.buffer[a.hb++]=b[d],64==a.hb&&(hk(a,a.buffer),a.hb=0)}
function gk(a){var b=Array(16),c=8*a.total,d=a.hb;fk(a,a.padding,56>d?56-d:64-(d-56));for(var e=56;64>e;++e)a.buffer[e]=c&255,c>>>=8;hk(a,a.buffer);for(e=d=0;4>e;++e)for(c=0;32>c;c+=8)b[d++]=a.ea[e]>>c&255;return b}
var dk=[0,0,0,0,0,0,0,0,0,0,0,0,0,63,0,0,53,54,55,56,57,58,59,60,61,62,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,0,0,0,0,64,0,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,0,0,0,0,0],Dk=[7,12,17,22,7,12,17,22,7,12,17,22,7,12,17,22,5,9,14,20,5,9,14,20,5,9,14,20,5,9,14,20,4,11,16,23,4,11,16,23,4,11,16,23,4,11,16,23,6,10,15,21,6,10,15,21,6,10,15,21,6,10,15,21],Ck=[3614090360,3905402710,606105819,3250441966,4118548399,1200080426,
2821735955,4249261313,1770035416,2336552879,4294925233,2304563134,1804603682,4254626195,2792965006,1236535329,4129170786,3225465664,643717713,3921069994,3593408605,38016083,3634488961,3889429448,568446438,3275163606,4107603335,1163531501,2850285829,4243563512,1735328473,2368359562,4294588738,2272392833,1839030562,4259657740,2763975236,1272893353,4139469664,3200236656,681279174,3936430074,3572445317,76029189,3654602809,3873151461,530742520,3299628645,4096336452,1126891415,2878612391,4237533241,1700485571,
2399980690,4293915773,2240044497,1873313359,4264355552,2734768916,1309151649,4149444226,3174756917,718787259,3951481745];function Ek(){this.m=150}
G(Ek,O);
Ek.prototype.bold=function(a,b){b=ih(b.replace(Og,""));a=ih(kh(a,!0));if(lh(b,a))return a+"<b>"+b.substr(a.length)+"</b>";for(var c="",d=[],e=b.length-1,f=0,g=-1,h;h=b.charAt(f);++f)" "==h||"\t"==h?c.length&&(d.push({t:c,cb:g,e:f+1}),c="",g=-1):(c+=h,-1==g?g=f:f==e&&d.push({t:c,cb:g,e:f+1}));a=a.split(/\s+/);f={};for(c=0;e=a[c++];)f[e]=1;g=-1;a=[];h=d.length-1;for(c=0;e=d[c];++c)f[e.t]?(e=-1==g,c==h?a.push({cb:e?c:g,e:c}):e&&(g=c)):-1<g&&(a.push({cb:g,e:c-1}),g=-1);if(!a.length)return"<b>"+b+"</b>";
c="";for(f=e=0;g=a[f];++f)(h=d[g.cb].cb)&&(c+="<b>"+b.substring(e,h-1)+"</b> "),e=d[g.e].e,c+=b.substring(h,e);e<b.length&&(c+="<b>"+b.substring(e)+"</b> ");return c};function Fk(){this.m=146}
G(Fk,O);function Gk(a){JSON.parse('"\\u30'+a.split(",").join("\\u30")+'"')}
Gk("02,0C,0D,01,FB,F2,A1,A3,A5,A7,A9,E3,E5,E7,C3,FC,A2,A4,A6,A8,AA,AB,AD,AF,B1,B3,B5,B7,B9,BB,BD,BF,C1,C4,C6,C8,CA,CB,CC,CD,CE,CF,D2,D5,D8,DB,DE,DF,E0,E1,E2,E4,E6,E8,E9,EA,EB,EC,ED,EF,F3,9B,9C");Gk("F4__,AC,AE,B0,B2,B4,B6,B8,BA,BC,BE,C0,C2,C5,C7,C9_____,D0,D3,D6,D9,DC");Gk("D1,D4,D7,DA,DD");Gk("F4____,AC_,AE_,B0_,B2_,B4_,B6_,B8_,BA_,BC_,BE_,C0_,C2__,C5_,C7_,C9______,D0__,D3__,D6__,D9__,DC");Gk("D1__,D4__,D7__,DA__,DD");Gk("A6,AB,AD,AF,B1,B3,B5,B7,B9,BB,BD,BF,C1,C4,C6,C8,CF,D2,D5,D8,DB");Gk("CF,D2,D5,D8,DB");function Hk(){this.m=116;this.ca=!0}
v(Hk,O);m=Hk.prototype;
m.ha=function(a,b){this.T=a.rb();b.addRule(".sbdd_a",($h?"margin-top:-1px;":"")+"z-index:989");b.addRule(".sbdd_a[dir=ltr] .fl, .sbdd_a[dir=rtl] .fr","float:left");b.addRule(".sbdd_a[dir=ltr] .fr, .sbdd_a[dir=rtl] .fl","float:right");$h?b.addRule(".sbdd_b","background:#fff;border:1px solid #ccc;border-top-color:#d9d9d9;"+b.prefix("border-radius:0 0 3px 3px;")+"cursor:default"):b.addRule(".sbdd_b","background:#fff;border:1px solid #ccc;border-top-color:#d9d9d9;"+b.prefix("box-shadow:0 2px 4px rgba(0,0,0,0.2);")+"cursor:default");
b.addRule(".sbdd_c","border:0;display:block;position:absolute;top:0;z-index:988")};
m.N=function(a){this.L=a.get(130);a.get(115);this.s=a.get(118);this.H=a.get(117);this.X=a.l.getId()};
m.setup=function(a){this.config_=a};
m.Ha=function(a){this.i=Q();this.i.className="gstl_"+this.X+" sbdd_a";Ik(this.i,!1);this.R=this.i;this.J=Q("fl");this.i.appendChild(this.J);this.D=Q();this.i.appendChild(this.D);this.u=Q("sbdd_b");this.D.appendChild(this.u);this.ja=Q();this.D.appendChild(this.ja);this.config_.Oc&&(this.l=P("iframe","gstl_"+this.X+" sbdd_c"),Ik(this.l,!1),(this.config_.oa||document.body).appendChild(this.l));if(this.o=this.config_.Kd)"number"===typeof this.o&&(this.o+=this.config_.nb[2],this.o-=Jk(this)),Kk(this,this.i,
this.o);Lk(this);(a.oa||document.body).appendChild(this.i);a=this.H;var b=C(this.wc,this);R(a,a.i,8,b)};
m.O=function(a){this.config_=a;this.i.style.position=a.Va};
m.getHeight=function(){this.F||(this.F=this.u?Math.max(this.u.offsetHeight,0):0);return this.F};
m.show=function(a){Mk(this,a.Ja||this.T);var b=a.marginWidth;if(this.W!=b){var c=this.J.style;b?(c.width=b+"px",c.height="1px"):c.height="";this.W=b}this.ca=a.He;this.ba=a.horizontalAlignment;Nk(this.s.o,!0);Ik(this.R,!0);Ik(this.l,!0);jj(this.H,14);this.wc()};
m.hide=function(){this.F=0;Nk(this.s.o,!1);Ik(this.R,!1);Ik(this.l,!1);Mk(this,this.T);jj(this.H,9)};
m.wc=function(){this.F=0;Lk(this);if(this.l){var a=this.config_.yc[0],b=this.l.style;"relative"!=this.config_.Va&&(b.top=this.i.style.top,b.left=this.i.offsetLeft+this.J.offsetWidth+"px");a=this.getHeight()+a;this.l.style.height=Math.max(a,0)+"px";Kk(this,this.l,this.u.offsetWidth)}this.C&&Bj(this.C.i)};
function Lk(a){var b,c;if(c=a.C)c=a.C.i,c=c.config_.ne||c.J==c.H?c.Aa:null;var d=(b=c)?b.offsetWidth:Ok(a.s.o);var e=a.o;c=Jk(a);e?"string"===typeof e&&(e=null):a.W||!a.ca?a.D.style.display="inline-block":(a.D.style.display="",e=d+a.config_.nb[2]-c,Kk(a,a.i,e));if("relative"!=a.config_.Va){var f="rtl"==ne()!=("rtl"==a.G),g=a.config_.oa;var h={za:0,Bb:0};if(f||!g||g==document.body||a.config_.Ic)h=ii(a.s.o.H),b&&(h.za=ii(b).za);b=h;h=e;e=a.config_.nb;g=e[1];e=e[0];e=b.Bb+a.s.getHeight()+e;if("right"==
a.ba){h="rtl"==ne()!=("rtl"==a.G);var k=a.config_.oa;g=-g;if(h||!k||k==document.body)g+=(ri(a.i)||window).document.documentElement.clientWidth-d-b.za;d=g;h=e;b=void 0}else b=b.za+g,"center"==a.ba&&h&&(b+=(d-h)/2),h=e,d=void 0;e={za:0,Bb:0};"absolute"==a.config_.Va&&a.config_.oa&&a.config_.oa!=document.body&&(f||a.config_.Ic)&&(e=ii(a.config_.oa));g=a.i.style;g.top=h-e.Bb+"px";g.left=g.right="";void 0!=b?g.left=b+c-e.za+"px":(b=0,a.config_.oa&&f&&(b=document.body.clientWidth-(e.za+a.config_.oa.offsetWidth)),
g.right=d+c-b+"px")}}
function Kk(a,b,c){"number"===typeof c?0<c&&(a.config_.kf?b.style.width=c+"px":b.style.minWidth=c+"px"):b.style.width=c}
function Ik(a,b){a&&(a.style.display=b?"":"none")}
function Mk(a,b){if(a.G!=b){a.G=b;var c=a.config_.oa;c&&c!=document.body&&(c.style.textAlign="rtl"==b?"right":"left");mi(a.i,b)}}
function Jk(a){return a.L&&a.L.l()&&(a=a.s.o.F.offsetWidth,"number"===typeof a)?a:0}
;function Pk(a,b){this.l=a;this.o=b;this.m=0;this.i=null}
Pk.prototype.get=function(){if(0<this.m){this.m--;var a=this.i;this.i=a.next;a.next=null}else a=this.l();return a};
function Qk(a,b){a.o(b);100>a.m&&(a.m++,b.next=a.i,a.i=b)}
;function Rk(){this.m=this.i=null}
Rk.prototype.add=function(a,b){var c=Sk.get();c.set(a,b);this.m?this.m.next=c:this.i=c;this.m=c};
Rk.prototype.remove=function(){var a=null;this.i&&(a=this.i,this.i=this.i.next,this.i||(this.m=null),a.next=null);return a};
var Sk=new Pk(function(){return new Tk},function(a){return a.reset()});
function Tk(){this.next=this.scope=this.i=null}
Tk.prototype.set=function(a,b){this.i=a;this.scope=b;this.next=null};
Tk.prototype.reset=function(){this.next=this.scope=this.i=null};var Uk,Vk=!1,Wk=new Rk;function Xk(a,b){Uk||Yk();Vk||(Uk(),Vk=!0);Wk.add(a,b)}
function Yk(){if(A.Promise&&A.Promise.resolve){var a=A.Promise.resolve(void 0);Uk=function(){a.then(Zk)}}else Uk=function(){kj(Zk)}}
function Zk(){for(var a;a=Wk.remove();){try{a.i.call(a.scope)}catch(b){yd(b)}Qk(Sk,a)}Vk=!1}
;function $k(a){this.i=0;this.C=void 0;this.o=this.m=this.l=null;this.s=this.u=!1;if(a!=Va)try{var b=this;a.call(void 0,function(c){al(b,2,c)},function(c){al(b,3,c)})}catch(c){al(this,3,c)}}
function bl(){this.next=this.context=this.onRejected=this.m=this.i=null;this.l=!1}
bl.prototype.reset=function(){this.context=this.onRejected=this.m=this.i=null;this.l=!1};
var cl=new Pk(function(){return new bl},function(a){a.reset()});
function dl(a,b,c){var d=cl.get();d.m=a;d.onRejected=b;d.context=c;return d}
$k.prototype.then=function(a,b,c){return el(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
$k.prototype.$goog_Thenable=!0;$k.prototype.cancel=function(a){if(0==this.i){var b=new fl(a);Xk(function(){gl(this,b)},this)}};
function gl(a,b){if(0==a.i)if(a.l){var c=a.l;if(c.m){for(var d=0,e=null,f=null,g=c.m;g&&(g.l||(d++,g.i==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.i&&1==d?gl(c,b):(f?(d=f,d.next==c.o&&(c.o=d),d.next=d.next.next):hl(c),il(c,e,3,b)))}a.l=null}else al(a,3,b)}
function jl(a,b){a.m||2!=a.i&&3!=a.i||kl(a);a.o?a.o.next=b:a.m=b;a.o=b}
function el(a,b,c,d){var e=dl(null,null,null);e.i=new $k(function(f,g){e.m=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof fl?g(h):f(k)}catch(l){g(l)}}:g});
e.i.l=a;jl(a,e);return e.i}
$k.prototype.F=function(a){this.i=0;al(this,2,a)};
$k.prototype.G=function(a){this.i=0;al(this,3,a)};
function al(a,b,c){if(0==a.i){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.i=1;a:{var d=c,e=a.F,f=a.G;if(d instanceof $k){jl(d,dl(e||Va,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Ka(d))try{var k=d.then;if("function"===typeof k){ll(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.C=c,a.i=b,a.l=null,kl(a),3!=b||c instanceof fl||ml(a,c))}}
function ll(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function kl(a){a.u||(a.u=!0,Xk(a.D,a))}
function hl(a){var b=null;a.m&&(b=a.m,a.m=b.next,b.next=null);a.m||(a.o=null);return b}
$k.prototype.D=function(){for(var a;a=hl(this);)il(this,a,this.i,this.C);this.u=!1};
function il(a,b,c,d){if(3==c&&b.onRejected&&!b.l)for(;a&&a.s;a=a.l)a.s=!1;if(b.i)b.i.l=null,nl(b,c,d);else try{b.l?b.m.call(b.context):nl(b,c,d)}catch(e){ol.call(null,e)}Qk(cl,b)}
function nl(a,b,c){2==b?a.m.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function ml(a,b){a.s=!0;Xk(function(){a.s&&ol.call(null,b)})}
var ol=yd;function fl(a){Ra.call(this,a)}
G(fl,Ra);fl.prototype.name="cancel";function pl(a,b){K.call(this);this.m=a||1;this.i=b||A;this.s=C(this.hf,this);this.C=D()}
G(pl,K);m=pl.prototype;m.enabled=!1;m.pa=null;m.hf=function(){if(this.enabled){var a=D()-this.C;0<a&&a<.8*this.m?this.pa=this.i.setTimeout(this.s,this.m-a):(this.pa&&(this.i.clearTimeout(this.pa),this.pa=null),bf(this,"tick"),this.enabled&&(ql(this),this.start()))}};
m.start=function(){this.enabled=!0;this.pa||(this.pa=this.i.setTimeout(this.s,this.m),this.C=D())};
function ql(a){a.enabled=!1;a.pa&&(a.i.clearTimeout(a.pa),a.pa=null)}
m.Da=function(){pl.ma.Da.call(this);ql(this);delete this.i};function rl(){this.m=119;this.T=!1;this.u=eh(0);this.ba=-1;this.ca=!1}
v(rl,O);m=rl.prototype;
m.ha=function(a,b){this.G=a;this.i=a.Qb();bi(this.i,"combobox");ci(this.i,"haspopup",!1);ci(this.i,"autocomplete","list");this.Hb=a.rb();a.Fb()||(b.addRule(".sbib_a","background:#fff;"+b.prefix("box-sizing:border-box;")),a=Zh&&Vh||Rh?6:5,b.addRule(".sbib_b",b.prefix("box-sizing:border-box;")+"height:100%;overflow:hidden;padding:"+a+"px 9px 0"),b.addRule(".sbib_c[dir=ltr]","float:right"),b.addRule(".sbib_c[dir=rtl]","float:left"),b.addRule(".sbib_d",b.prefix("box-sizing:border-box;")+"height:100%;unicode-bidi:embed;white-space:nowrap"),
b.addRule(".sbib_d[dir=ltr]","float:left"),b.addRule(".sbib_d[dir=rtl]","float:right"),Sh&&b.addRule(".sbib_a input::-ms-clear","display: none"),b.addRule(".sbib_a,.sbib_c","vertical-align:top"))};
m.N=function(a){this.l=a.get(118);this.o=a.get(117);this.W=a.get(128);this.K=a.get(173);this.Oa=!!a.get(136);this.Kb=a.l.getId()};
m.setup=function(a){this.config_=a;this.L=a.Ya;this.R=a.De;this.Mb=a.Cc;this.C=ji(this.i);this.Db();var b=this;Rh&&R(this.o,this.i,"beforedeactivate",function(c){b.ca&&(b.ca=!1,c.ub=!0)},10);
a=(Ec()||H("iPad")||H("iPod"))&&Wh;Th&&sl(this);(Xh||a)&&tl(this);this.H=this.i};
m.Ha=function(a){var b=!!a.Od[130];if(this.Oa||uj(this.l)||b||a.Ud)(this.D=this.G.get("gs_id"))?(b&&(this.F=this.G.get("sb_chc")),this.s=this.G.get("sb_ifc")):(this.D=Q("gstl_"+this.Kb+" sbib_a"),a=this.D.style,this.R&&(a.width=this.R+"px"),this.L&&(a.height=this.L+"px"),a=this.i.style,a.border="none",a.padding=Uh||Rh?"0 1px":"0",a.margin="0",a.height="auto",a.width="100%",this.i.className=this.config_.Wb,b&&(this.F=Q("sbib_d"),this.F.id=this.G.getId("sb_chc"),this.D.appendChild(this.F)),uj(this.l)&&
this.K&&(this.K.i.className+=" sbib_c",b=this.K,a=this.Hb,b.u!=a&&(b.i.dir=b.u=a),this.D.appendChild(this.K.i)),this.s=Q("sbib_b"),this.s.id=this.G.getId("sb_ifc"),this.D.appendChild(this.s),ul(this,this.D,this.s)),this.config_.lc&&this.i&&this.s&&(this.i.removeAttribute("role"),bi(this.s,"combobox"),this.i.removeAttribute("aria-haspopup"),ci(this.s,"haspopup",!0)),this.config_.sa&&this.i&&(b=this.G.getId("sbsg"),ci(this.i,"controls",b),this.config_.lc&&this.s?(ci(this.s,"haspopup","grid"),ci(this.s,
"owns",b)):ci(this.i,"haspopup","grid")),this.config_.bf||this.config_.Hd||vl(this,this.D),this.H=this.D;this.Mb&&(b=C(this.cd,this),R(this.o,this.i,"blur",b,10),b=C(this.kd,this),R(this.o,this.i,"focus",b,10),this.Ra=!0);b=this.o;a=C(this.je,this);R(b,b.i,8,a);wl(this)};
m.O=function(a){this.config_=a;this.i.setAttribute("autocomplete","off");this.i.setAttribute("spellcheck",!1);this.i.style.outline=a.Yc?"":"none";this.Pa=this.i.value;this.Ra&&this.kd();xl(this)};
m.deactivate=function(){this.Ra&&this.cd();yl(this)};
function ul(a,b,c){yl(a);c||(c=b);a.i.parentNode.replaceChild(b,a.i);c.appendChild(a.i);a.C&&a.config_.Te&&(Rh||Th?kj(function(){a.i.focus();hi(a.i,a.u.Xa())}):a.i.focus());
xl(a)}
m.getHeight=function(){var a=this.H?this.H.offsetHeight:0;this.L>a&&(a=this.L);return a};
function Ok(a){return a.R?a.R:a.H?a.H.offsetWidth:0}
m.select=function(){this.i.select();this.Db()};
m.refresh=function(){Yh&&(this.i.value="");this.i.value=this.l.i;Yh&&(this.i.value=this.i.value);sj(this)};
function zl(a){a.C&&(a.i.blur(),a.C=!1)}
m.isFocused=function(){return this.C};
m.clear=function(){this.i.value=""};
function sj(a){if(a.C){var b=a.i.value.length;a.u=eh(b);hi(a.i,b)}}
function vl(a,b){R(a.o,b,"mouseup",function(){a.i.focus()})}
function wl(a){function b(e){R(a.o,a.i,e,C(a.hd,a),10,c)}
R(a.o,a.i,"keydown",C(a.he,a));(Uh||a.config_.Dd)&&R(a.o,a.i,"keypress",C(a.ie,a));R(a.o,a.i,"select",C(a.Db,a),10);var c=!1;b("mousedown");b("keyup");b("keypress");c=!0;b("mouseup");b("keydown");b("focus");b("blur");b("cut");b("paste");b("input");var d=C(a.ee,a);R(a.o,a.i,"compositionstart",d);R(a.o,a.i,"compositionend",d)}
m.ee=function(a){a=a.type;"compositionstart"==a?(a=this.l,1!=a.G&&(a.G=!0)):"compositionend"==a&&(a=this.l,0!=a.G&&(a.G=!1))};
m.he=function(a){var b=a.keyCode;this.ba=b;var c=(Vh||Th)&&(38==b||40==b)&&mj(this.W),d=13==b,e=27==b;this.X=!1;9!=b||a.shiftKey||(this.X=lj(this.l));if(d){(b=nj(this.W))&&b.getType();var f=this;kj(function(){var g=f.W,h=a.shiftKey?4:3;null!=g.l&&nj(g).getType();g.C.search(h)})}if(c||d||e||this.X)a.ub=!0};
m.ie=function(a){var b=a.keyCode,c=9==b&&this.X;if(13==b||27==b||c)a.ub=!0};
m.hd=function(a){if(!this.Qa){var b=a.gb;if(!(b.indexOf("key")||a.ctrlKey||a.altKey||a.shiftKey||a.metaKey))a:if(a=a.keyCode,"keypress"!=b){var c=38==a||40==a;if("keydown"==b){var d=this.l;var e=229==a;(d.L=e)&&d.F.add(4);if(c)break a}else if(d=a!=this.ba,this.ba=-1,!c||d)break a;switch(a){case 27:a=this.l;a.config_.Xe?a.search(5):(a.l.isVisible()?a.l.dismiss():zl(a.o),Gi(a));break;case 37:a=this.l;vj(a,"rtl");if(wj(a)&&(c=a.l,null!==c.l&&(a=c.s,(c=Al(a,c.l))&&!(1>=c.length))))for(d=di(a.C),e=1;e<
c.length;e++)c[e].id===d.id&&ei(a.C,c[e-1]);break;case 39:a=this.l;vj(a,"ltr");if(wj(a)&&(c=a.l,null!==c.l&&(a=c.s,c=Al(a,c.l))))for(d=di(a.C),e=0;e<c.length-1;e++)c[e].id===d.id&&ei(a.C,c[e+1]);break;case 38:this.l.l.od();break;case 40:a=this.l;c=this.u;mj(a.l)?a.l.nd():qj(a.l,c);break;case 46:a=this.l;a.i&&this.u.Nc()==a.i.length&&(a.K&&a.K.clear(),a.config_.We&&a.search(2));break;case 8:a=this.l,a.D&&0==this.u.Xa()&&a.D.i()}}this.Db();oj(this.l,this.i.value,this.u,b)}};
m.de=function(){this.C=!0;jj(this.l.u,10)};
m.be=function(){this.C=!1;ij(this.l)};
function xl(a){a.T||(a.T=!0,a.Aa=C(a.de,a),R(a.o,a.i,"focus",a.Aa,99),a.ja=C(a.be,a),R(a.o,a.i,"blur",a.ja,99))}
function yl(a){a.T&&(a.T=!1,Tj(a.o,a.i,a.Aa),Tj(a.o,a.i,a.ja))}
m.kd=function(){this.J||(this.J=new pl(this.config_.pollingInterval||50),this.J.fa("tick",this.Re,void 0,this),this.J.start())};
m.cd=function(){this.J&&(ql(this.J),this.J=null)};
m.Re=function(){this.hd({gb:"polling"})};
m.je=function(){if(Th){var a=this.i,b=document.createEvent("KeyboardEvent");b.initKeyEvent&&(b.initKeyEvent("keypress",!0,!0,null,!1,!1,!0,!1,27,0),a.dispatchEvent(b))}};
m.Db=function(){if(this.C){a:{var a=this.i;try{if("selectionStart"in a){var b=a.selectionStart;var c=a.selectionEnd}else{var d=a.createTextRange(),e=ki(a).selection.createRange();d.inRange(e)&&(d.setEndPoint("EndToStart",e),b=d.text.length,d.setEndPoint("EndToEnd",e),c=d.text.length)}if(void 0!==b){var f=eh(b,c);break a}}catch(g){}f=null}f&&(this.u=f)}};
function sl(a){var b;a.o.fa(window,"pagehide",function(){a.Qa=!0;b=a.i.value});
a.o.fa(window,"pageshow",function(c){a.Qa=!1;(c.persisted||void 0!==b)&&tj(a.l,b)})}
function tl(a){a.o.fa(window,"pageshow",function(b){b.persisted&&a.Pa&&tj(a.l,a.Pa)})}
function Nk(a,b){a.config_.lc&&a.s?ci(a.s,"expanded",b):ci(a.i,"haspopup",b);b||a.i.removeAttribute("aria-activedescendant")}
;function Bl(){this.m=129;this.L={};this.T=[];this.X=[];this.ba=[];this.o=[];this.ca=0}
v(Bl,O);m=Bl.prototype;
m.ha=function(a,b){this.R=a;this.C=a.Qb();this.J=a.rb();$h||b.addRule(".sbsb_a","background:#fff");b.addRule(".sbsb_b","list-style-type:none;margin:0;padding:0");$h||b.addRule(".sbsb_c","line-height:22px;overflow:hidden;padding:0 10px");b.addRule(".sbsb_d","background:#eee");b.addRule(".sbsb_e","height:1px;background-color:#e5e5e5");b.addRule("#sbsb_f","font-size:11px;color:#36c;text-decoration:none");b.addRule("#sbsb_f:hover","font-size:11px;color:#36c;text-decoration:underline");b.addRule(".sbsb_g",
"text-align:center;padding:8px 0 7px;position:relative");b.addRule(".sbsb_h","font-size:15px;height:28px;margin:0.2em"+(Vh?";-webkit-appearance:button":""));b.addRule(".sbsb_i","font-size:13px;color:#36c;text-decoration:none;line-height:100%");b.addRule(".sbsb_i:hover","text-decoration:underline");b.addRule(".sbsb_j","padding-top:1px 0 2px 0;font-size:11px");b.addRule(".sbdd_a[dir=ltr] .sbsb_j","padding-right:4px;text-align:right");b.addRule(".sbdd_a[dir=rtl] .sbsb_j","padding-left:4px;text-align:left");
$h&&(b.addRule(".sbsb_c[dir=ltr] .sbsb_k","padding:10px 3px 11px 8px"),b.addRule(".sbsb_c[dir=rtl] .sbsb_k","padding:10px 8px 11px 3px"))};
m.N=function(a){this.G=a.get(128);this.u=a.get(118);this.K=a.get(121);a=Bh(a,152);var b={};if(a)for(var c=0,d;d=a[c++];)b[d.G]=d;this.ja=b};
m.setup=function(a){this.config_=a};
m.Ha=function(a){this.s=Q();a.sa?(this.i=Q("sbsb_b"),bi(this.i,"grid"),this.i.id=this.R.getId("sbsg")):(this.i=P("ul","sbsb_b"),bi(this.i,"listbox"));this.s.appendChild(this.i)};
m.O=function(a){this.config_=a;var b=a.gd;b&&(this.Aa=this.R.Jc(b));this.s.className=a.ff||"sbsb_a";this.W=a.df||"sbsb_d"};
function Al(a,b){if(a.config_.sa&&(a=a.o[b]))return a.i().parentNode.querySelectorAll("[role=gridcell]")}
m.highlight=function(a){(a=this.o[a])&&a.isSelectable()&&mf(a.i().parentNode,this.W)};
function Kj(a,b){(b=a.o[b])&&nf(b.i().parentNode,a.W)}
m.clear=function(){for(var a,b,c;c=this.T.pop();)a=c.getType(),(b=this.L[a])||(b=this.L[a]=[]),b.push(c),a=c.i(),a.parentNode.removeChild(a);for(;a=this.i.firstChild;)a=this.i.removeChild(a),a.i?this.ba.push(a):a!=this.F&&a!=this.D&&this.X.push(a);this.F&&(this.F.style.display="none");this.D&&(this.D.style.display="none");this.o=[]};
m.isSelectable=function(a){return(a=this.o[a])?a.isSelectable():!1};
function Cj(a,b){var c=b.getType(),d=a.ja[c];if(!d)return!1;(c=(c=a.L[c])&&c.pop())||(c=Cl(a,d));d.Na(b,c);a.T.push(c);var e=c.i();if(a.config_.sa)for(var f=e.querySelectorAll('[role="gridcell"]'),g=0;g<f.length;g++)f[g].id=e.id+("x"+g);f=Dl(a);f.appendChild(e);if(void 0!==b.l){a.o.push(c);g=a.H;var h=b.l();a.config_.ue&&(e.onmouseover=function(){Hj(a.G,h)},e.onmouseout=function(){Hi(a.G)});
var k=c.i();k.onclick=function(l){zl(a.u.o);b.s&&pj(a.u,b.i);Hi(a.G);var n=a.G;n.l=n.i=h;l=l||ri(k).event;d.Ma(l,b,a.K)}}else g=a.J;
mi(f,g);return!0}
function Cl(a,b){b=b.Sa(a.K);var c=b.i();mf(c,"sbse");c.id="sbse"+a.ca;(c=b.i())&&!a.config_.sa&&bi(c,"option");a.ca++;return b}
function Gj(a,b,c,d){var e=P("input");e.type="button";e.value=jh(b);e.onclick=function(){a.K.search(a.u.i,d)};
if(a.config_.me){b="lsb";var f=P("span");var g=P("span");f.className="ds";g.className="lsbb";f.appendChild(g);g.appendChild(e)}else b="sbsb_h",f=e;e.className=b;c.appendChild(f)}
function Dl(a){var b=a.X.pop();if(b)return a.i.appendChild(b),b;a.config_.sa?(b=Q(),bi(b,"row")):(b=P("li"),bi(b,"presentation"));b.className="sbsb_c "+a.config_.zb;b.onmousedown=C(a.ec,a);a.i.appendChild(b);return b}
m.ec=function(a){a=a||ri(this.s).event;a.stopPropagation?(a.stopPropagation(),window.Polymer&&window.Polymer.Element&&a.preventDefault()):Rh&&!Uh&&(this.u.o.ca=!0);return!1};
function Bj(a){if(a.l){var b=0,c=a.u.o.F;c&&(b=c.offsetWidth);b=Ok(a.u.o)-b-3;0<b&&(a.l.style.width=b+"px")}}
;function El(){this.m=147}
G(El,O);El.prototype.ha=function(a){this.C=a.Kc()||document.body};
El.prototype.setup=function(a){this.config_=a};
El.prototype.getHeight=function(){this.i||Dj(this);Ej(this);this.l||(li(this.i,"|"),this.l=this.i.offsetHeight);return this.l};
function Dj(a){var b=Q(a.config_.Wb),c=b.style;c.background="transparent";c.color="#000";c.padding=0;c.position="absolute";c.whiteSpace="pre";a.i=b;a.i.style.visibility="hidden";a.C.appendChild(a.i)}
function Ej(a){var b=D();if(!a.s||a.s+3E3<b){a.s=b;b=a.i;var c=ri(b);b=(b=c.getComputedStyle?c.getComputedStyle(b,""):b.currentStyle)?b.fontSize:null;a.u&&b==a.u||(a.o={},a.l=null,a.u=b)}}
;function Fl(){xh.call(this);this.set(191,new Bk);this.set(150,new Ek);this.set(146,new Fk);this.set(147,new El);yh(this,149,new aj);this.set(145,new Mj);this.set(117,new Pj);this.set(494,new Vj);this.set(374,new Wj);this.set(120,new Xj);this.set(121,new kk);this.set(553,new nk);this.set(124,new vk);this.set(125,new wk);this.set(123,new pk);this.set(126,new yk);this.set(127,new Ak);this.set(115,new dj);this.set(118,new gj);this.set(128,new yj);yh(this,154,new Lj);this.set(116,new Hk);this.set(119,
new rl);this.set(129,new Bl)}
v(Fl,xh);function Gl(){this.m=347;this.l=[];this.o=0}
v(Gl,O);Gl.prototype.N=function(a){this.s=a.get(120)};
Gl.prototype.O=function(a){this.u="//"+(a.Le||"www."+a.mb)+"/gen_204?";this.i=a.cf||{}};
function lk(a,b){b=Yj(a.s,b);for(var c in a.i)c in b||(b[c]=a.i[c]);c=fh(b,!0);Hl(a,a.u+c)}
function Hl(a,b){var c=new Image,d=a.o,e=a.l;c.onerror=c.onload=c.onabort=function(){try{delete e[d]}catch(f){}};
a.l[a.o++]=c;c.src=b}
;function Il(){this.m=151;this.i=!0;this.l={}}
v(Il,O);m=Il.prototype;m.N=function(a){this.o=a.get(150)};
m.setup=function(){this.u=dh([0])};
m.O=function(a){this.s=a.Sb;this.i=a.Bc};
m.deactivate=function(){this.i=!1};
m.update=function(a){if(this.i){var b=a.i;if(b.length){var c=a.m.m;a:{var d=Number.MAX_VALUE;for(var e,f=0;e=b[f++];){if(!this.u[e.getType()]){d=-1;break a}e=e.i;d=Math.min(e.length,d)}}if(-1!=d){var g=b[0].i;if(lh(g,c,!0))for(f=c.length+1;f<=d;){c=null;for(e=0;g=b[e++];){g=g.i;if(f>g.length)return;g=g.substr(0,f);if(!c)c=g;else if(c!=g)return}this.l[c]=a;++f}}}}};
m.get=function(a){if(this.i){var b=this.l[a.m];if(b){for(var c=a.F,d=a.m,e=b.l,f=this.s||!e.i.k,g=[],h,k,l=b.i,n=0,p;p=l[n++];)k=p.i,h=f?this.o.bold(c,k):ih(k),g.push(new Rg(h,k,p.l(),p.getType(),p.m||[],p.o));delete this.l[d];return new vh(a,g,e,!0,b.o,!1)}}return null};
m.reset=function(){this.l={}};function Jl(){this.m=133;this.l={};this.i=[];this.s=this.o=0}
v(Jl,O);Jl.prototype.N=function(a){this.i=Bh(a,151);this.i.sort(Kl)};
Jl.prototype.O=function(){this.s=this.o=0};
Jl.prototype.get=function(a){var b=this.l[a.l];if(b)++this.o;else if(this.i)for(var c=0;c<this.i.length;++c)if(b=this.i[c].get(a)){b&&b.o&&(this.l[b.m.l]=b);++this.s;break}return b?new vh(a,b.i,b.l,b.s,b.o,b.C):null};
Jl.prototype.has=function(a){return!!this.l[a.l]};
function Kl(){return 0}
;function Ll(a){this.m=a;this.i=new RegExp("(?:^|\\s+)"+a+"(?:$|\\s+)")}
function Ml(a,b){b&&!a.i.test(b.className)&&(b.className+=" "+a.m)}
function Nl(a,b){b&&(b.className=b.className.replace(a.i," "))}
;function Ol(){this.m=570;this.o=!1}
G(Ol,O);m=Ol.prototype;m.ha=function(a){this.C=a};
m.N=function(a){this.u=a.get(117);this.D=a.get(118)};
m.setup=function(a){var b=a.Wa;if(this.i=b?this.C.Jc(b):null){b=this.u;var c=C(this.ce,this);R(b,b.i,10,c);b=this.u;c=C(this.ae,this);R(b,b.i,11,c);R(this.u,this.i,"mouseover",C(this.ge,this));R(this.u,this.i,"mouseout",C(this.fe,this));a.Ob&&(this.s=new Ll(a.Ob));a.Nb&&(this.l=new Ll(a.Nb))}};
m.O=function(){this.o=!0;this.i&&this.D.o.isFocused()&&this.l&&Ml(this.l,this.i)};
m.deactivate=function(){this.o=!1;this.i&&(this.s&&Nl(this.s,this.i),this.l&&Nl(this.l,this.i))};
m.ge=function(){this.o&&this.s&&Ml(this.s,this.i)};
m.fe=function(){this.o&&this.s&&Nl(this.s,this.i)};
m.ce=function(){this.o&&this.l&&Ml(this.l,this.i)};
m.ae=function(){this.o&&this.l&&Nl(this.l,this.i)};function Pl(){this.m=160}
G(Pl,O);m=Pl.prototype;m.ha=function(a,b){this.o=a;a.Fb()||(b.addRule(".gsok_a","background:url(data:image/gif;base64,R0lGODlhEwALAKECAAAAABISEv///////yH5BAEKAAIALAAAAAATAAsAAAIdDI6pZ+suQJyy0ocV3bbm33EcCArmiUYk1qxAUAAAOw==) no-repeat center;display:inline-block;height:11px;line-height:0;width:19px"),b.addRule(".gsok_a img","border:none;visibility:hidden"))};
m.N=function(a){this.u=a.get(374);this.C=a.get(128)};
m.setup=function(a){this.s=!!a.tb;this.F=a.ad;this.H=a.vb;this.D=a.Qe;this.J=a.Pe};
m.Ha=function(){(this.l=this.o.get("gs_ok"))?this.i=this.l.firstChild:(this.i=P("img"),this.i.src=this.F+"/tia.png",this.l=P("span","gsok_a gsst_e"),this.l.id=this.o.getId("gs_ok"),this.l.appendChild(this.i));this.i.ds=C(this.Id,this);this.i.setAttribute("tia_field_name",this.o.Qb().name);this.i.setAttribute("tia_disable_swap",!0)};
m.O=function(a){a.Tb&&(this.s=!!a.tb);this.i.setAttribute("tia_property",a.bd)};
m.isEnabled=function(){return this.s};
m.Mc=function(){return{tooltip:this.J}};
m.xc=function(a){if(!this.G)a=document.createElement("script"),a.src="//www.google.com/textinputassistant/"+this.D+"/"+this.H+"_tia.js",document.body.appendChild(a),this.G=!0,this.u.add(3);else if(this.i.onclick)this.i.onclick(a)};
m.Id=function(){this.C.dismiss()};
var Ql=ch++;function Rl(){this.m=173;this.o={}}
v(Rl,O);m=Rl.prototype;
m.ha=function(a,b){this.s=a;a.Fb()||(b.addRule(".gsst_a","display:inline-block"),b.addRule(".gsst_a","cursor:pointer;padding:0 4px"),b.addRule(".gsst_a:hover","text-decoration:none!important"),b.addRule(".gsst_b","font-size:16px;padding:0 2px;position:relative;"+b.prefix("user-select:none;")+"white-space:nowrap"),b.addRule(".gsst_e","vertical-align:middle;"+(si()+":"+ti(.6)+";")),b.addRule(".gsst_a:hover .gsst_e,.gsst_a:focus .gsst_e",si()+":"+ti(.8)+";"),b.addRule(".gsst_a:active .gsst_e",si()+":"+
ti(1)+";"))};
m.N=function(a){this.C=a.get(118);this.l=Bh(a,160)};
m.setup=function(a){this.D=a.Tb;this.l.sort(Sl)};
m.Ha=function(a){this.i=this.s.get("gs_st");if(!this.i){this.i=Q("gsst_b");this.i.id=this.s.getId("gs_st");if(a=a.Ya)this.i.style.lineHeight=a+"px";Tl(this)}Ul(this)};
m.O=function(){if(this.D)for(var a=0,b;b=this.l[a++];){var c=!!this.o[Ql];if(b.isEnabled()!=c){for(;this.i.hasChildNodes();)this.i.removeChild(this.i.lastChild);Tl(this);Ul(this);break}}};
function Sl(){return 0}
function Tl(a){for(var b,c=0,d;d=a.l[c++];)if(d.isEnabled()){b=!0;var e=P("a","gsst_a");Vl(a,e,d);e.appendChild(d.l);a.i.appendChild(e)}a.i.style.display=b?"":"none"}
function Ul(a){a.o={};for(var b=0,c;c=a.l[b++];)if(c.isEnabled()){var d=Ql,e=c.l.parentNode;e.onclick=C(c.xc,c);a.o[d]=e;c.Mc&&(c=c.Mc(),c.Uf&&(d=a.o[d])&&d.style&&(d.style.visibility="hidden"),d=c.tooltip)&&(e.title=d)}}
function Vl(a,b,c){tc(b,Nb(sb(new pb(qb,"javascript:void(0)"))));Uh&&(b.tabIndex=0);b.onkeydown=function(d){d=d||window.event;var e=d.keyCode;if(13==e||32==e)c.xc(d),Ii(a.C),oi(d)}}
ch++;function Wl(){this.s=33;this.m=Q();this.m.className="gspr_a"}
G(Wl,Ph);Wl.prototype.i=function(){return this.m};function Xl(){Qh.call(this,33)}
v(Xl,Qh);Xl.prototype.ha=function(a,b){b.addRule(".gspr_a","padding-right:1px")};
Xl.prototype.Sa=function(){return new Wl};
Xl.prototype.Na=function(a,b){a=Mg(a.o.i.b||"");qc(b.m,a)};
Xl.prototype.Ma=function(a,b,c){c.search(b.i,1)};function Yl(a,b){this.s=0;this.u=a;this.F=b;this.o=Q();this.m=Q("sbqs_a");this.o.appendChild(this.m);this.D=Q("sbqs_c");this.o.appendChild(this.D)}
v(Yl,Ph);Yl.prototype.i=function(){return this.o};
function Zl(a,b,c,d){rc(a.D,mc(b,null));a.C=c;d&&!a.l&&(a.l=pi(a.m),a.l.onclick=C(function(e){zl(this.u.o);pj(this.u,this.C);this.F.search(this.C,9);return oi(e)},a));
d?(rc(a.l,mc(d+" &raquo;",null)),a.m.style.display="",ci(a.m,"hidden",!0)):a.l&&(a.m.style.display="none")}
;function $l(){Qh.call(this,0)}
G($l,Qh);m=$l.prototype;m.ha=function(a,b){b.addRule(".sbsb_c[dir=ltr] .sbqs_a","float:right");b.addRule(".sbsb_c[dir=rtl] .sbqs_a","float:left");b.addRule(".sbqs_b","visibility:hidden");b.addRule(".sbsb_d .sbqs_b","visibility:visible");b.addRule(".sbsb_c[dir=ltr] .sbqs_b","padding-left:5px;");b.addRule(".sbsb_c[dir=rtl] .sbqs_b","padding-right:5px;");b.addRule(".sbqs_c","word-wrap:break-word")};
m.N=function(a){this.i=a.get(118)};
m.O=function(a){this.l=a.Gc?a.Hc:""};
m.Sa=function(a){return new Yl(this.i,a)};
m.Na=function(a,b){Zl(b,a.getHtml(),a.i,this.l)};
m.Ma=function(a,b,c){c.search(b.i,1)};function am(a){Fl.call(this);yh(this,149,new Hh);this.set(347,new Gl);this.set(133,new Jl);yh(this,151,new Il);this.set(570,new Ol);this.set(134,new Mi);this.set(189,new Pi);yh(this,156,new Si);a.ENABLE_DELETE_ICON?yh(this,152,new Ji):yh(this,152,new Li);yh(this,152,new Xl);yh(this,152,new $l);this.set(173,new Rl);yh(this,160,new Pl);this.set(157,new Ui);yh(this,156,new Vi);"zero-prefix"==a.SEARCHBOX_BEHAVIOR_EXPERIMENT&&yh(this,156,new Ti(a));var b=a.SBOX_STRINGS||{};a.SEARCHBOX_REPORTING&&a.SEARCHBOX_COMPONENT&&
b.SBOX_REPORT_SUGGESTIONS&&(yh(this,153,new Nh),yh(this,152,new zi(b.SBOX_REPORT_SUGGESTIONS,a.SEARCHBOX_COMPONENT)));a.SEARCHBOX_COMPONENT&&(this.set(598,new Wi(a.SEARCHBOX_COMPONENT,a.SEARCHBOX_ENABLE_REFINEMENT_SUGGEST,a.SEARCHBOX_ZERO_TYPING_SUGGEST_USE_REGULAR_SUGGEST)),yh(this,156,new $i))}
v(am,Fl);function bm(){return{Wd:function(){return{clientName:"hp",requestIdentifier:"hp",mb:"google.com",sd:"",Xb:"en",Ib:"",previousQuery:"",videoId:"",sc:"",authuser:0,Me:"",hg:"",qd:null,pc:"",Dc:!1,ic:"",yb:"",connectionType:0,transport:null,wd:!1,ag:!1,xe:!1,enableCaching:!0,Rd:10,Of:10,Ld:!0,Bc:!0,Lf:!1,Td:!1,Ie:!1,Je:!1,Wf:!1,se:!0,Jd:!1,te:500,Tb:!1,le:!0,Tf:!0,dg:!1,tb:!1,vb:"",ad:"//www.google.com/textinputassistant",bd:"",Qe:7,Qf:!1,Rf:!1,pe:!1,oe:!0,qe:!1,Pc:!1,sa:!1,Xe:!1,We:!1,Ab:1,Wc:!0,pb:!1,
Gc:!1,Cc:!1,pollingInterval:10,Sb:!1,Te:!0,oa:document.body,re:!0,td:null,Od:{},Nf:{},Zf:0,Ud:!1,ye:!0,Ga:!1,Sd:!1,af:!1,eg:null,Md:!1,Le:null,cf:null,Lb:!1,ue:!0,lc:!1,Dd:!1,gg:1,Yc:!1,searchText:"Search",Hc:"I'm  Feeling Lucky",Ye:"",learnMoreText:"Learn more",hc:"Remove",fc:"This search was removed from your Web History",hintText:"",Kf:"Did you mean:",Pe:"",cg:"",kg:"Search by voice",jg:'Listening for "Ok Google"',ig:'Say "Ok Google"',If:"Clear Search",Ya:0,De:0,Wb:"",zb:"",isRtl:!1,Va:"absolute",
me:!1,Oc:!1,gd:null,ne:!0,nb:[0,0,0],Kd:null,ef:null,yc:[0],oc:!0,vd:"",ff:"",df:"",Wa:null,Ob:"",Nb:"",Hf:1,kf:!1,Ic:!1,Xf:0,bf:!1,Hd:!1,Mf:!1,Se:!0}}}}
;function cm(a,b,c,d,e){var f=Th?"-moz-":Rh?"-ms-":Uh?"-o-":Vh?"-webkit-":"",g=".gstl_"+d,h=new RegExp("(\\.("+e.join("|")+")\\b)"),k=[];return{addRule:function(l,n){if(b){if(c){l=l.split(",");for(var p=[],r=0,q;q=l[r++];)q=h.test(q)?q.replace(h,g+"$1"):g+" "+q,p.push(q);l=p.join(",")}k.push(l,"{",n,"}")}},
Cd:function(){if(b&&k.length){b=!1;var l=P("style");l.setAttribute("type","text/css");(a||ah).appendChild(l);var n=k.join("");k=null;l.styleSheet?l.styleSheet.cssText=n:l.appendChild(document.createTextNode(n))}},
prefix:function(l,n){var p=l+(n||"");f&&(p+=n?l+f+n:f+l);return p}}}
;function dm(a,b,c,d){this.l=a;this.R=b;this.K=c;this.L=d;this.m=-1;this.J=!1}
m=dm.prototype;m.install=function(a){if(!this.J){a=em(a);0>this.m&&(this.m=fm(a));var b=ki(this.l),c=gm(this),d=!!b.getElementById("gs_id"+this.m),e=this,f=["gssb_c","gssb_k","sbdd_a","sbdd_c","sbib_a"];a.vd&&f.push(a.vd);f=cm(a.td,a.re,a.Md,this.m,f);this.F=a.Ga;this.i=new zh(this.K,this.L,{Fb:function(){return d},
get:function(g){return b.getElementById(g+e.m)},
Jc:function(g){return b.getElementById(g)},
Kc:function(){return e.R},
rb:function(){return c},
getId:function(g){return g+e.m},
Qb:function(){return e.l}},f,this,a);
this.i.get(347);this.C=this.i.get(130);this.i.get(115);this.o=this.i.get(117);this.i.get(123);this.i.get(135);this.T=this.i.get(118);this.H=this.i.get(119);this.W=this.i.get(374);this.s=this.i.get(120);this.i.get(189);this.X=this.i.get(553);this.i.get(419);this.i.get(126);this.i.get(128);this.i.get(139);this.D=this.i.get(121);a=ri(this.l);this.u=qi(a);this.G=C(this.Ve,this);this.o.fa(a,"resize",this.G);this.J=!0}};
m.deactivate=function(){var a=ri(this.l),b=this.G;a.removeEventListener?a.removeEventListener("resize",b,!1):a.detachEvent("onresize",b);this.i.deactivate()};
m.isActive=function(){return!!this.i&&this.i.isActive()};
function hm(a,b){function c(d){a.D.search(a.T.i,12);return ni(d)}
a.o.fa(b,"keyup",function(d){13!=d.keyCode&&32!=d.keyCode||c(d)});
a.o.fa(b,"click",c)}
m.isFocused=function(){return this.H.isFocused()};
m.getId=function(){return this.m};
m.search=function(a,b){this.D.search(a,b)};
m.Ga=function(){return this.F||!!this.C&&this.C.Ga()};
m.mc=function(a){this.X.mc(a)};
function fm(a){a=ri(a.td||ah);void 0==a.nextSearchboxId&&(a.nextSearchboxId=50);return a.nextSearchboxId++}
function gm(a){if(a.l)for(a=a.l;a=a.parentNode;){var b=a.dir;if(b)return b}return"ltr"}
function em(a){a=qh(a);var b=a.vb;b?a.vb=b.toLowerCase():a.tb=!1;a.pb&&!a.Gc&&(a.pb=!1);Wh||(a.Je=!1);return a}
m.Ve=function(){var a=qi(ri(this.l));if(a.xd!=this.u.xd||a.Qc!=this.u.Qc)this.u=a,jj(this.o,8)};function im(){this.G="sbhcn";this.F="sbfcn";this.H="gsfi";this.o="gsfs";this.D=function(){return!0};
E("ytvoicesearchloggingparams",C(this.Yd,this))}
v(im,wh);m=im.prototype;m.Yd=function(){this.i.W.add(6);return Yj(this.i.s,15)};
m.search=function(a,b){zl(this.i.H);this.D(Yj(this.i.s,b))&&this.l.submit()};
m.redirect=function(a){this.K(this.uc(a))};
m.uc=function(a){var b=0<=a.indexOf("?")?"&":"?",c;(c=Yj(this.i.s))||(c=Yj(this.i.s));c=fh(c);return a+b+c};
m.Xc=function(a){if(this.u||this.s){if(22<this.C){var b=(this.C-22)/2;a.addRule(".sbsb_c","padding:"+b+"px 24px "+b+"px 10px")}else a.addRule(".sbsb_c","padding:4px 24px 4px 10px");this.L?a.addRule(".sbsb_a","padding: 16px 0 0"):a.addRule(".sbsb_a","padding: 16px 0");a.addRule(".sbdd_b","border-top: 0");a.addRule(".sbib_a","background:transparent");a.addRule(".sbib_b","padding: 0")}b='background: no-repeat url("data:image/svg+xml;base64, '+window.btoa('<svg fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.475 14.1253L8.3333 11.5587V5.83366H9.99997V10.6337L13.3583 12.7087L12.475 14.1253ZM18.3333 10.0003C18.3333 14.592 14.5916 18.3337 9.99997 18.3337C5.4083 18.3337 1.66663 14.592 1.66663 10.0003H2.49997C2.49997 14.1337 5.86663 17.5003 9.99997 17.5003C14.1333 17.5003 17.5 14.1337 17.5 10.0003C17.5 5.86699 14.1333 2.50033 9.99997 2.50033C7.34163 2.50033 4.9333 3.86699 3.56663 6.15033C3.47497 6.30033 3.3833 6.45866 3.3083 6.61699C3.29997 6.63366 3.29163 6.65033 3.2833 6.66699H6.66663V7.50033H1.6333V2.50033H2.46663V6.45033C2.49997 6.37533 2.52497 6.30866 2.5583 6.24199C2.64997 6.05866 2.74997 5.89199 2.84997 5.71699C4.34997 3.21699 7.09163 1.66699 9.99997 1.66699C14.5916 1.66699 18.3333 5.40866 18.3333 10.0003Z" fill="#030303"/></svg>')+
'");';a.addRule(".sbpqs_a","display: flex; align-items:center; white-space: pre;");a.addRule(".sbpqs_a:before",b);b='background: no-repeat url("data:image/svg+xml;base64,'+window.btoa('<svg fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.3917 16.8083L12.7333 12.15C13.625 11.125 14.1667 9.79167 14.1667 8.33333C14.1667 5.10833 11.5583 2.5 8.33333 2.5C5.10833 2.5 2.5 5.10833 2.5 8.33333C2.5 11.5583 5.10833 14.1667 8.33333 14.1667C9.79167 14.1667 11.125 13.625 12.15 12.7417L16.8083 17.4L17.3917 16.8083ZM8.33333 13.3333C5.575 13.3333 3.33333 11.0917 3.33333 8.33333C3.33333 5.575 5.575 3.33333 8.33333 3.33333C11.0917 3.33333 13.3333 5.575 13.3333 8.33333C13.3333 11.0917 11.0917 13.3333 8.33333 13.3333Z" fill="#030303"/></svg>')+
'");';a.addRule(".sbqs_c","display: flex; align-items:center; white-space: pre;");a.addRule(".sbqs_c:before",b);a.addRule(".sbpqs_a:before",'height: 20px; width: 20px; content: " "; margin-right: 10px;');a.addRule(".sbqs_c:before",'height: 20px; width: 20px; content: " "; margin-right: 10px;');a.addRule(".sbpqs_c","display: flex; align-items:center; margin-left: 30px;");a.addRule(".sbsb_c","padding:0px 24px 0px 10px");this.J&&(a.addRule(".sbsb_c","padding:0px 8px 0px 10px"),a.addRule(".sbpqs_b","display: flex; align-items: center; height: 32px;"));
a.addRule(".sbsb_c","line-height: 32px;");a.addRule(".sbpqs_c","line-height: 32px;");a.addRule(".sbsb_a","padding: 16px 0 8px");a.addRule(".sbfl_a","margin:-5px -18px -9px 0");a.addRule("."+this.o,"font-size:1.6rem;color:#222");a.addRule(".sbqs_c b","font-weight:500");a.addRule(".sbdd_c","z-index:2010");a.addRule(".sbdd_a","z-index:2021");a.addRule(".sbib_a","background:transparent; width: 100%; flex: 1;");a.addRule("ytd-masthead[dark] .gsst_e","filter: invert(100%)");a.addRule(".sbpqs_a","color: #030303");
"ptext_weight_500"===this.R&&a.addRule(".sbpqs_a b","font-weight: 500");this.m&&"default"!==this.m&&(a.addRule("html[dark] .sbsb_a","background: var(--yt-spec-general-background-b)"),a.addRule("html[dark] .sbdd_b","border: 1px solid rgba(255, 255, 255, 0.2); border-top: 0; background: none;"),a.addRule("html[dark] .sbsb_i","color: var(--yt-spec-call-to-action)"),a.addRule(".sbsb_d","background: var(--yt-spec-10-percent-layer)"),a.addRule(".sbfl_b","background: none"),a.addRule("html[dark] .sbfl_a:hover",
"color: var(--yt-spec-text-primary)"),"dark_mode_single_row_remove"===this.m?(a.addRule(".sbsb_c","line-height: 30px; padding: 0 24px 0 10px"),a.addRule(".sbpqs_b","display: none"),a.addRule(".sbsb_d .sbpqs_b","display: block"),a.addRule("html[dark] .sbpqs_a","color: #B47BFF"),a.addRule("html[dark] .sbqs_c","color: var(--yt-spec-text-primary)")):"dark_mode_ptext_primary"===this.m?(a.addRule("html[dark] .sbpqs_a","color: var(--yt-spec-text-primary)"),a.addRule("html[dark] .sbqs_c","color: var(--yt-spec-text-primary)")):
"dark_mode_ptext_secondary"===this.m?(a.addRule("html[dark] .sbpqs_a","color: var(--yt-spec-text-secondary)"),a.addRule("html[dark] .sbqs_c","color: var(--yt-spec-text-primary)")):"dark_mode_ptext_purple"===this.m&&(a.addRule("html[dark] .sbpqs_a","color: #B47BFF"),a.addRule("html[dark] .sbqs_c","color: var(--yt-spec-text-primary)")))};
m.install=function(a,b,c,d,e,f,g){this.l=a;this.K=f;g&&(this.D=g);f=bm().Wd();f.clientName="youtube";f.requestIdentifier="youtube";f.Ib="yt";f.Xb=d.REQUEST_LANGUAGE;f.sd=d.REQUEST_DOMAIN;f.le=!1;f.Ab=0;f.Wc=!1;f.pb=!1;f.Yc=!1;f.Sb=!0;f.Wb=this.H;f.zb=this.o;f.Ob=this.G;f.Nb=this.F;f.Vf=!0;f.tb=d.HAS_ON_SCREEN_KEYBOARD;f.vb=d.REQUEST_LANGUAGE;f.ad="//www.gstatic.com/inputtools/images";f.bd="youtube";f.Lb=!0;f.Va="fixed";this.u=d.IS_POLYMER;this.s=d.IS_FUSION;this.L=d.SEARCHBOX_REPORTING;this.C=d.SEARCHBOX_TAP_TARGET_EXPERIMENT;
this.m=d.SUGGESTION_BOX_STYLE;this.R=d.SUGGESTION_BOX_ICON;this.J=d.ENABLE_DELETE_ICON;f.ic="suggestqueries-clients6.youtube.com";d.PQ&&(f.previousQuery=d.PQ);f.sc=d.PSUGGEST_TOKEN;f.authuser=d.SESSION_INDEX;f.fc=e.SUGGESTION_DISMISSED_LABEL;f.hc=e.SUGGESTION_DISMISS_LABEL;f.oc=!d.HIDE_REMOVE_LINK;f.fg=dh([0,33,35]);this.u?(f.Wa="search-container",f.Ya=24):this.s?(f.Wa="masthead-search",f.Ya=24):(f.Wa="masthead-search-terms",f.Ya=30);dc()||(f.Oc=!0);f.gd=f.Wa;e=this.l.offsetHeight;f.nb=[e+(56-e)/
2-40,0,0];e=[0];ec()&&"8.0"==ic()&&(e[0]=-1);f.yc=e;(e=d.REQUEST_LANGUAGE)?(e=e.toLowerCase(),e="zh-tw"==e||"zh-cn"==e||"ja"==e||"ko"==e):e=!1;e&&(f.Cc=!0);if(e=d.SUGG_EXP_ID)f.pc=e;d.SEND_VISITOR_DATA&&(f.connectionType=1);d.SEND_VISITOR_DATA&&"VISITOR_DATA"in d&&(f.visitorData=d.VISITOR_DATA);if(this.i){a=this.i;b=f;a.deactivate();b=em(b);a.F=b.Ga;a=a.i;a.deactivate();for(c=0;d=a.i[c++];)d.O(b);a.m=!0}else d=new am(d),this.i=new dm(b,a,this,d),this.i.install(f),c&&(hm(this.i,c),c.onclick=null)};function jm(){this.data_=[];this.i=-1}
jm.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data_[a]!==b&&(this.data_[a]=b,this.i=-1)};
jm.prototype.get=function(a){return!!this.data_[a]};
function km(a){-1===a.i&&(a.i=ab(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.i}
;function lm(a,b){this.i=a[A.Symbol.iterator]();this.m=b}
lm.prototype[Symbol.iterator]=function(){return this};
lm.prototype.next=function(){var a=this.i.next();return{value:a.done?void 0:this.m.call(void 0,a.value),done:a.done}};
function mm(a,b){return new lm(a,b)}
;function nm(){this.blockSize=-1}
;function om(){this.blockSize=-1;this.blockSize=64;this.i=[];this.s=[];this.u=[];this.l=[];this.l[0]=128;for(var a=1;a<this.blockSize;++a)this.l[a]=0;this.o=this.m=0;this.reset()}
G(om,nm);om.prototype.reset=function(){this.i[0]=1732584193;this.i[1]=4023233417;this.i[2]=2562383102;this.i[3]=271733878;this.i[4]=3285377520;this.o=this.m=0};
function pm(a,b,c){c||(c=0);var d=a.u;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.i[0];c=a.i[1];var g=a.i[2],h=a.i[3],k=a.i[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.i[0]=a.i[0]+b&4294967295;a.i[1]=a.i[1]+c&4294967295;a.i[2]=a.i[2]+g&4294967295;a.i[3]=a.i[3]+h&4294967295;a.i[4]=a.i[4]+k&4294967295}
om.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.s,f=this.m;d<b;){if(0==f)for(;d<=c;)pm(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){pm(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){pm(this,e);f=0;break}}this.m=f;this.o+=b}};
om.prototype.digest=function(){var a=[],b=8*this.o;56>this.m?this.update(this.l,56-this.m):this.update(this.l,this.blockSize-(this.m-56));for(var c=this.blockSize-1;56<=c;c--)this.s[c]=b&255,b/=256;pm(this,this.s);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.i[c]>>d&255,++b;return a};function qm(a){if(a instanceof rm||a instanceof sm||a instanceof tm)return a;if("function"==typeof a.next)return new rm(function(){return a});
if("function"==typeof a[Symbol.iterator])return new rm(function(){return a[Symbol.iterator]()});
if("function"==typeof a.na)return new rm(function(){return a.na()});
throw Error("Not an iterator or iterable.");}
function rm(a){this.m=a}
rm.prototype.na=function(){return new sm(this.m())};
rm.prototype[Symbol.iterator]=function(){return new tm(this.m())};
rm.prototype.i=function(){return new tm(this.m())};
function sm(a){this.m=a}
v(sm,of);sm.prototype.next=function(){return this.m.next()};
sm.prototype[Symbol.iterator]=function(){return new tm(this.m)};
sm.prototype.i=function(){return new tm(this.m)};
function tm(a){rm.call(this,function(){return a});
this.l=a}
v(tm,rm);tm.prototype.next=function(){return this.l.next()};function um(a,b){this.m={};this.i=[];this.l=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof um)for(c=vm(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function vm(a){wm(a);return a.i.concat()}
m=um.prototype;m.has=function(a){return xm(this.m,a)};
m.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||ym;wm(this);for(var c,d=0;c=this.i[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function ym(a,b){return a===b}
m.isEmpty=function(){return 0==this.size};
m.clear=function(){this.m={};this.l=this.size=this.i.length=0};
m.remove=function(a){return this.delete(a)};
m.delete=function(a){return xm(this.m,a)?(delete this.m[a],--this.size,this.l++,this.i.length>2*this.size&&wm(this),!0):!1};
function wm(a){if(a.size!=a.i.length){for(var b=0,c=0;b<a.i.length;){var d=a.i[b];xm(a.m,d)&&(a.i[c++]=d);b++}a.i.length=c}if(a.size!=a.i.length){var e={};for(c=b=0;b<a.i.length;)d=a.i[b],xm(e,d)||(a.i[c++]=d,e[d]=1),b++;a.i.length=c}}
m.get=function(a,b){return xm(this.m,a)?this.m[a]:b};
m.set=function(a,b){xm(this.m,a)||(this.size+=1,this.i.push(a),this.l++);this.m[a]=b};
m.forEach=function(a,b){for(var c=vm(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new um(this)};
m.keys=function(){return qm(this.na(!0)).i()};
m.values=function(){return qm(this.na(!1)).i()};
m.entries=function(){var a=this;return mm(this.keys(),function(b){return[b,a.get(b)]})};
m.na=function(a){wm(this);var b=0,c=this.l,d=this,e=new of;e.next=function(){if(c!=d.l)throw Error("The map has changed since the iterator was created");if(b>=d.i.length)return pf;var f=d.i[b++];return qf(a?f:d.m[f])};
return e};
function xm(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function zm(a,b,c){a.push(encodeURIComponent(b)+"="+encodeURIComponent(c))}
function Am(a){var b=a.type;if("string"===typeof b)switch(b.toLowerCase()){case "checkbox":case "radio":return a.checked?a.value:null;case "select-one":return b=a.selectedIndex,0<=b?a.options[b].value:null;case "select-multiple":b=[];for(var c,d=0;c=a.options[d];d++)c.selected&&b.push(c.value);return b.length?b:null}return null!=a.value?a.value:null}
;function Bm(a){var b=[];Cm(new Dm,a,b);return b.join("")}
function Dm(){}
function Cm(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Cm(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Em(d,c),c.push(":"),Cm(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Em(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Fm={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Gm=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Em(a,b){b.push('"',a.replace(Gm,function(c){var d=Fm[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),Fm[c]=d);return d}),'"')}
;function Hm(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function S(a){Ce.call(this);this.C=1;this.l=[];this.s=0;this.i=[];this.m={};this.D=!!a}
G(S,Ce);m=S.prototype;m.subscribe=function(a,b,c){var d=this.m[a];d||(d=this.m[a]=[]);var e=this.C;this.i[e]=a;this.i[e+1]=b;this.i[e+2]=c;this.C=e+3;d.push(e);return e};
m.Cb=function(a){var b=this.i[a];if(b){var c=this.m[b];0!=this.s?(this.l.push(a),this.i[a+1]=function(){}):(c&&bb(c,a),delete this.i[a],delete this.i[a+1],delete this.i[a+2])}return!!b};
m.ed=function(a,b){var c=this.m[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.D)for(e=0;e<c.length;e++){var g=c[e];Im(this.i[g+1],this.i[g+2],d)}else{this.s++;try{for(e=0,f=c.length;e<f&&!this.o;e++)g=c[e],this.i[g+1].apply(this.i[g+2],d)}finally{if(this.s--,0<this.l.length&&0==this.s)for(;c=this.l.pop();)this.Cb(c)}}return 0!=e}return!1};
function Im(a,b,c){Xk(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.m[a];b&&(b.forEach(this.Cb,this),delete this.m[a])}else this.i.length=0,this.m={}};
m.Da=function(){S.ma.Da.call(this);this.clear();this.l.length=0};function Jm(a){this.i=a}
Jm.prototype.set=function(a,b){void 0===b?this.i.remove(a):this.i.set(a,Bm(b))};
Jm.prototype.get=function(a){try{var b=this.i.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Jm.prototype.remove=function(a){this.i.remove(a)};function Km(a){this.i=a}
G(Km,Jm);function Lm(a){this.data=a}
function Mm(a){return void 0===a||a instanceof Lm?a:new Lm(a)}
Km.prototype.set=function(a,b){Km.ma.set.call(this,a,Mm(b))};
Km.prototype.m=function(a){a=Km.ma.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Km.prototype.get=function(a){if(a=this.m(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Nm(a){this.i=a}
G(Nm,Km);Nm.prototype.set=function(a,b,c){if(b=Mm(b)){if(c){if(c<D()){Nm.prototype.remove.call(this,a);return}b.expiration=c}b.creation=D()}Nm.ma.set.call(this,a,b)};
Nm.prototype.m=function(a){var b=Nm.ma.m.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<D()||c&&c>D())Nm.prototype.remove.call(this,a);else return b}};function Om(){}
;function Pm(){}
G(Pm,Om);Pm.prototype[Symbol.iterator]=function(){return qm(this.na(!0)).i()};
Pm.prototype.clear=function(){var a=Array.from(this);a=u(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Qm(a){this.i=a}
G(Qm,Pm);m=Qm.prototype;m.isAvailable=function(){if(!this.i)return!1;try{return this.i.setItem("__sak","1"),this.i.removeItem("__sak"),!0}catch(a){return!1}};
m.set=function(a,b){try{this.i.setItem(a,b)}catch(c){if(0==this.i.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){a=this.i.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.i.removeItem(a)};
m.na=function(a){var b=0,c=this.i,d=new of;d.next=function(){if(b>=c.length)return pf;var e=c.key(b++);if(a)return qf(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return qf(e)};
return d};
m.clear=function(){this.i.clear()};
m.key=function(a){return this.i.key(a)};function Rm(){var a=null;try{a=window.localStorage||null}catch(b){}this.i=a}
G(Rm,Qm);function Sm(a,b){this.m=a;this.i=null;if(Kc&&!(9<=Number(Yc))){Tm||(Tm=new um);this.i=Tm.get(a);this.i||(b?this.i=document.getElementById(b):(this.i=document.createElement("userdata"),this.i.addBehavior("#default#userData"),document.body.appendChild(this.i)),Tm.set(a,this.i));try{this.i.load(this.m)}catch(c){this.i=null}}}
G(Sm,Pm);var Um={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Tm=null;function Vm(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Um[b]})}
m=Sm.prototype;m.isAvailable=function(){return!!this.i};
m.set=function(a,b){this.i.setAttribute(Vm(a),b);Wm(this)};
m.get=function(a){a=this.i.getAttribute(Vm(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.i.removeAttribute(Vm(a));Wm(this)};
m.na=function(a){var b=0,c=this.i.XMLDocument.documentElement.attributes,d=new of;d.next=function(){if(b>=c.length)return pf;var e=c[b++];if(a)return qf(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return qf(e)};
return d};
m.clear=function(){for(var a=this.i.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Wm(this)};
function Wm(a){try{a.i.save(a.m)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Xm(a,b){this.m=a;this.i=b+"::"}
G(Xm,Pm);Xm.prototype.set=function(a,b){this.m.set(this.i+a,b)};
Xm.prototype.get=function(a){return this.m.get(this.i+a)};
Xm.prototype.remove=function(a){this.m.remove(this.i+a)};
Xm.prototype.na=function(a){var b=this.m[Symbol.iterator](),c=this,d=new of;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.i.length)!=c.i;){e=b.next();if(e.done)return e;e=e.value}return qf(a?e.slice(c.i.length):c.m.get(e))};
return d};function Ym(a){J.call(this,a)}
v(Ym,J);Ym.prototype.getKey=function(){return Jd(this,1)};
Ym.prototype.xa=function(){return Jd(this,2===Md(this,Zm)?2:-1)};
Ym.prototype.setValue=function(a){return Ld(this,2,Zm,a)};
var Zm=[2,3,4,5,6];function $m(a){J.call(this,a)}
v($m,J);function an(a){J.call(this,a)}
v(an,J);function bn(a){J.call(this,a,-1,cn)}
v(bn,J);var cn=[2];function dn(a){J.call(this,a,-1,en)}
v(dn,J);dn.prototype.Ka=function(){return Jd(this,61)};
dn.prototype.getPlayerType=function(){return Jd(this,36)};
dn.prototype.setHomeGroupInfo=function(a){return Pd(this,bn,81,a)};
var en=[9,66,24,32,86,100,101];function fn(a){J.call(this,a,-1,gn)}
v(fn,J);var gn=[15,26,28];function hn(a){J.call(this,a)}
v(hn,J);hn.prototype.setToken=function(a){return I(this,2,a)};function jn(a){J.call(this,a,-1,kn)}
v(jn,J);jn.prototype.setSafetyMode=function(a){return I(this,5,a)};
var kn=[12];function ln(a){J.call(this,a,-1,mn)}
v(ln,J);var mn=[12];function nn(a){J.call(this,a)}
v(nn,J);function on(a){J.call(this,a)}
v(on,J);on.prototype.l=function(){var a=Jd(this,2);return null==a?0:a};function pn(a){J.call(this,a)}
v(pn,J);function qn(a){J.call(this,a,432)}
v(qn,J);
var rn=[23,24,11,6,7,5,2,3,20,21,28,32,37,229,241,45,59,225,288,72,73,78,208,156,202,215,74,76,79,80,111,85,91,97,100,102,105,119,126,127,136,146,148,157,158,159,163,164,168,176,222,383,177,178,179,411,184,188,189,190,191,193,194,195,196,198,199,200,201,203,204,205,206,258,259,260,261,209,226,227,232,233,234,240,247,248,251,254,255,270,278,291,293,300,304,308,309,310,311,313,314,319,321,323,324,328,330,331,332,334,337,338,340,344,348,350,351,352,353,354,355,356,357,358,361,363,364,368,369,370,373,
374,375,378,380,381,388,389,403,412,429,413,414,415,416,417,418,430,423,424,425,426,427,431,117];function sn(a){J.call(this,a)}
v(sn,J);function tn(a){J.call(this,a)}
v(tn,J);tn.prototype.setVideoId=function(a){return Ld(this,1,un,a)};
tn.prototype.getPlaylistId=function(){return Jd(this,2===Md(this,un)?2:-1)};
var un=[1,2];function vn(a){J.call(this,a,-1,wn)}
v(vn,J);var wn=[3];var xn=A.window,yn,zn,An=(null==xn?void 0:null==(yn=xn.yt)?void 0:yn.config_)||(null==xn?void 0:null==(zn=xn.ytcfg)?void 0:zn.data_)||{};E("yt.config_",An);function Bn(){var a=arguments;1<a.length?An[a[0]]=a[1]:1===a.length&&Object.assign(An,a[0])}
function T(a,b){return a in An?An[a]:b}
;var Cn={};function Dn(){return Cn.clicktracking||(Cn.clicktracking="clicktracking".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;var En=[];function Fn(a){En.forEach(function(b){return b(a)})}
function Gn(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Hn(b)}}:a}
function Hn(a,b,c,d){var e=B("yt.logging.errors.log");e?e(a,"ERROR",b,c,d):(e=T("ERRORS",[]),e.push([a,"ERROR",b,c,d]),Bn("ERRORS",e));Fn(a)}
function In(a,b,c,d){var e=B("yt.logging.errors.log");e?e(a,"WARNING",b,c,d):(e=T("ERRORS",[]),e.push([a,"WARNING",b,c,d]),Bn("ERRORS",e))}
;function Jn(a,b){"function"===typeof a&&(a=Gn(a));return window.setTimeout(a,b)}
;function Kn(){}
function Ln(a,b){return Mn(a,0,b)}
Kn.prototype.ka=function(a,b){return Mn(a,1,b)};
function Nn(a,b){Mn(a,2,b)}
;function On(){Kn.apply(this,arguments)}
v(On,Kn);function Pn(){On.i||(On.i=new On);return On.i}
function Mn(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=B("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Jn(a,c||0)}
On.prototype.Ca=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=B("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
On.prototype.start=function(){var a=B("yt.scheduler.instance.start");a&&a()};var hf=Pn();function U(a){a=Qn(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Rn(a,b){a=Qn(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function Qn(a){var b=T("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:T("EXPERIMENT_FLAGS",{})[a]}
function Sn(){var a=[],b=T("EXPERIMENTS_FORCED_FLAGS",{});for(c in b)a.push({key:c,value:String(b[c])});var c=T("EXPERIMENT_FLAGS",{});for(var d in c)d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;function Tn(a,b,c,d){xe.set(""+a,b,{Zb:c,path:"/",domain:void 0===d?"youtube.com":d,secure:!1})}
;var Un=/^[\w.]*$/,Vn={q:!0,search_query:!0};function Wn(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=Xn(f[0]||""),h=Xn(f[1]||"");g in c?Array.isArray(c[g])?eb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(p){var k=p,l=f[0],n=String(Wn);k.args=[{key:l,value:f[1],query:a,method:Yn==n?"unchanged":n}];Vn.hasOwnProperty(l)||In(k)}}return c}
var Yn=String(Wn);function Zn(a){var b=[];gb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];Ya(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function $n(a){"?"==a.charAt(0)&&(a=a.substr(1));return Wn(a,"&")}
function ao(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=$n(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return Ac(a,e)+d}
function bo(a){if(!b)var b=window.location.href;var c=a.match(vc)[1]||null,d=xc(a);c&&d?(a=a.match(vc),b=b.match(vc),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?xc(b)==d&&(Number(b.match(vc)[4]||null)||null)==(Number(a.match(vc)[4]||null)||null):!0;return a}
function Xn(a){return a&&a.match(Un)?a:uc(a)}
;var co=Zc||$c;function eo(a){var b=Eb();return b?0<=b.toLowerCase().indexOf(a):!1}
;function fo(){if(ze()||co&&eo("applewebkit")&&!eo("version")&&(!eo("safari")||eo("gsa/"))||Oc&&eo("version/"))return!0;if(U("enable_web_eom_visitor_data"))return T("EOM_VISITOR_DATA")?!1:!0;var a=T("INNERTUBE_CLIENT_NAME");return!a||"WEB"!==a&&"MWEB"!==a?!0:(a=xe.get("CONSENT",void 0))?a.startsWith("YES+"):!0}
;function go(a){var b=ho;a=void 0===a?B("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=oe;e.flash="0";a:{try{var f=b.i.top.location.href}catch(Pa){f=2;break a}f=f?f===b.m.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?Zd:g;try{var h=g.history.length}catch(Pa){h=0}e.u_his=h;var k;e.u_h=null==(k=Zd.screen)?void 0:k.height;var l;e.u_w=null==(l=Zd.screen)?void 0:l.width;var n;e.u_ah=null==(n=Zd.screen)?void 0:n.availHeight;var p;e.u_aw=
null==(p=Zd.screen)?void 0:p.availWidth;var r;e.u_cd=null==(r=Zd.screen)?void 0:r.colorDepth}catch(Pa){}h=b.i;try{var q=h.screenX;var x=h.screenY}catch(Pa){}try{var z=h.outerWidth;var F=h.outerHeight}catch(Pa){}try{var M=h.innerWidth;var N=h.innerHeight}catch(Pa){}try{var V=h.screenLeft;var pd=h.screenTop}catch(Pa){}try{M=h.innerWidth,N=h.innerHeight}catch(Pa){}try{var Mh=h.screen.availWidth;var Dr=h.screen.availTop}catch(Pa){}q=[V,pd,q,x,Mh,Dr,z,F,M,N];x=b.i.top;try{var nc=(x||window).document,Qa=
"CSS1Compat"==nc.compatMode?nc.documentElement:nc.body;var Fa=(new de(Qa.clientWidth,Qa.clientHeight)).round()}catch(Pa){Fa=new de(-12245933,-12245933)}nc=Fa;Fa={};var Ga=void 0===Ga?A:Ga;Qa=new jm;Ga.SVGElement&&Ga.document.createElementNS&&Qa.set(0);x=le();x["allow-top-navigation-by-user-activation"]&&Qa.set(1);x["allow-popups-to-escape-sandbox"]&&Qa.set(2);Ga.crypto&&Ga.crypto.subtle&&Qa.set(3);Ga.TextDecoder&&Ga.TextEncoder&&Qa.set(4);Ga=km(Qa);Fa.bc=Ga;Fa.bih=nc.height;Fa.biw=nc.width;Fa.brdim=
q.join();b=b.m;b=(Fa.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,Fa.wgl=!!Zd.WebGLRenderingContext,Fa);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var ho=new function(){var a=window.document;this.i=window;this.m=a};
E("yt.ads_.signals_.getAdSignalsString",function(a){return Zn(go(a))});D();var io="XMLHttpRequest"in A?function(){return new XMLHttpRequest}:null;
function jo(){if(!io)return null;var a=io();return"open"in a?a:null}
;var ko={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},lo="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(fa(qe)),mo=!1;
function no(a,b){b=void 0===b?{}:b;var c=bo(a),d=U("web_ajax_ignore_global_headers_if_set"),e;for(e in ko){var f=T(ko[e]);U("enable_visitor_header_for_vss")&&"X-Goog-Visitor-Id"===e&&!f&&(f=T("VISITOR_DATA"));!f||!c&&xc(a)||d&&void 0!==b[e]||!U("enable_web_eom_visitor_data")&&"X-Goog-EOM-Visitor-Id"===e||(b[e]=f)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!xc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!xc(a)){try{var g=
(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}if(c||!xc(a))b["X-YouTube-Ad-Signals"]=Zn(go());return b}
function oo(a){var b=window.location.search,c=xc(a);U("debug_handle_relative_url_for_query_forward_killswitch")||c||!bo(a)||(c=document.location.hostname);var d=wc(a.match(vc)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=$n(b),f={};Ya(lo,function(g){e[g]&&(f[g]=e[g])});
return ao(a,f||{},!1)}
function po(a,b){var c=b.format||"JSON";a=qo(a,b);var d=ro(a,b),e=!1,f=so(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var n=null,p=400<=k.status&&500>k.status,r=500<=k.status&&600>k.status;if(l||p||r)n=to(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(n&&n.return_code,10);break a;case "RAW":l=!0;break a}l=
!!n}n=n||{};p=b.context||A;l?b.onSuccess&&b.onSuccess.call(p,k,n):b.onError&&b.onError.call(p,k,n);b.onFinish&&b.onFinish.call(p,k,n)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=Jn(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||A,f))},d)}}
function qo(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=T("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=ao(a,b||{},!0);return a}
function ro(a,b){var c=T("XSRF_FIELD_NAME"),d=T("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams;var g=T("XSRF_FIELD_NAME");var h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||xc(a)&&!b.withCredentials&&xc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=$n(e),lb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):zc(e));if(!(a=e)&&(a=f)){a:{for(var k in f){f=
!1;break a}f=!0}a=!f}!mo&&a&&"POST"!=b.method&&(mo=!0,Hn(Error("AJAX request with postData should use POST")));return e}
function to(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,In(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?uo(a):null)e={},Ya(a.getElementsByTagName("*"),function(g){e[g.tagName]=vo(g)})}d&&wo(e);
return e}
function wo(a){if(Ka(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);c?a[b]=mc(a[b],null):wo(a[b])}}
function uo(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function vo(a){var b="";Ya(a.childNodes,function(c){b+=c.nodeValue});
return b}
function so(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Gn(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=jo();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;U("debug_forward_web_query_parameters")&&(a=oo(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=no(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var xo={Cf:"WEB_DISPLAY_MODE_UNKNOWN",yf:"WEB_DISPLAY_MODE_BROWSER",Af:"WEB_DISPLAY_MODE_MINIMAL_UI",Bf:"WEB_DISPLAY_MODE_STANDALONE",zf:"WEB_DISPLAY_MODE_FULLSCREEN"};function yo(){if(!A.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return A.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":A.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":A.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":A.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;E("ytglobal.prefsUserPrefsPrefs_",B("ytglobal.prefsUserPrefsPrefs_")||{});var zo={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Ao={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_INVALID:31},Bo={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},Co={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function Do(){var a=A.navigator;return a?a.connection:void 0}
;function Eo(){return"INNERTUBE_API_KEY"in An&&"INNERTUBE_API_VERSION"in An}
function Fo(){return{innertubeApiKey:T("INNERTUBE_API_KEY"),innertubeApiVersion:T("INNERTUBE_API_VERSION"),Vb:T("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Rc:T("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),ze:T("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:T("INNERTUBE_CONTEXT_CLIENT_VERSION"),Tc:T("INNERTUBE_CONTEXT_HL"),Sc:T("INNERTUBE_CONTEXT_GL"),Ae:T("INNERTUBE_HOST_OVERRIDE")||"",Ce:!!T("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Be:!!T("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:T("SERIALIZED_CLIENT_CONFIG_DATA")}}
function Go(a){var b={client:{hl:a.Tc,gl:a.Sc,clientName:a.Rc,clientVersion:a.innertubeContextClientVersion,configInfo:a.Vb}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=A.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=T("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=Sn();0<c.length&&(b.request={internalExperimentFlags:c});Ho(a,void 0,b);Io(void 0,b);Jo(a,void 0,b);Ko(void 0,b);T("DELEGATED_SESSION_ID")&&!U("pageid_as_header_web")&&
(b.user={onBehalfOfUser:T("DELEGATED_SESSION_ID")});a=Object;c=a.assign;for(var d=b.client,e={},f=u(Object.entries($n(T("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=u(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function Lo(a){var b=new ln,c=new dn;I(c,1,a.Tc);I(c,2,a.Sc);I(c,16,a.ze);I(c,17,a.innertubeContextClientVersion);if(a.Vb){var d=a.Vb,e=new $m;d.coldConfigData&&I(e,1,d.coldConfigData);d.appInstallData&&I(e,6,d.appInstallData);d.coldHashData&&I(e,3,d.coldHashData);d.hotHashData&&I(e,5,d.hotHashData);Pd(c,$m,62,e)}(d=A.devicePixelRatio)&&1!=d&&I(c,65,d);d=T("EXPERIMENTS_TOKEN","");""!==d&&I(c,54,d);d=Sn();if(0<d.length){e=new fn;for(var f=0;f<d.length;f++){var g=new Ym;I(g,1,d[f].key);g.setValue(d[f].value);
Qd(e,15,Ym,g)}Pd(b,fn,5,e)}Ho(a,c);Io(c);Jo(a,c);Ko(c);T("DELEGATED_SESSION_ID")&&!U("pageid_as_header_web")&&(a=new jn,I(a,3,T("DELEGATED_SESSION_ID")));a=u(Object.entries($n(T("DEVICE",""))));for(d=a.next();!d.done;d=a.next())e=u(d.value),d=e.next().value,e=e.next().value,"cbrand"===d?I(c,12,e):"cmodel"===d?I(c,13,e):"cbr"===d?I(c,87,e):"cbrver"===d?I(c,88,e):"cos"===d?I(c,18,e):"cosver"===d?I(c,19,e):"cplatform"===d&&I(c,42,e);Pd(b,dn,1,c);return b}
function Ho(a,b,c){a=a.Rc;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=Nd(b,an,96)||new an;var d=yo();d=Object.keys(xo).indexOf(d);d=-1===d?null:d;null!==d&&I(c,3,d);Pd(b,an,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=yo())}
function Io(a,b){var c;if(U("web_log_memory_total_kbytes")&&(null==(c=A.navigator)?0:c.deviceMemory)){var d;c=null==(d=A.navigator)?void 0:d.deviceMemory;a?I(a,95,1E6*c):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function Jo(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=Nd(b,$m,62))?d:new $m;I(c,6,a.appInstallData);Pd(b,$m,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function Ko(a,b){a:{var c=Do();if(c){var d=zo[c.type||"unknown"]||"CONN_UNKNOWN";c=zo[c.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===d&&"CONN_UNKNOWN"!==c&&(d=c);if("CONN_UNKNOWN"!==d)break a;if("CONN_UNKNOWN"!==c){d=c;break a}}d=void 0}d&&(a?I(a,61,Ao[d]):b&&(b.client.connectionType=d));U("web_log_effective_connection_type")&&(d=Do(),d=null!=d&&d.effectiveType?Co.hasOwnProperty(d.effectiveType)?Co[d.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,d&&(a?I(a,94,Bo[d]):
b&&(b.client.effectiveConnectionType=d)))}
function Mo(a,b,c){c=void 0===c?{}:c;var d={};U("enable_web_eom_visitor_data")&&T("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":T("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||T("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Ef||T("AUTHORIZATION"))||(a?b="Bearer "+B("gapi.auth.getToken")().Df:b=Be([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=T("SESSION_INDEX",0),U("pageid_as_header_web")&&(d["X-Goog-PageId"]=T("DELEGATED_SESSION_ID")));return d}
;function No(a){a=Object.assign({},a);delete a.Authorization;var b=Be();if(b){var c=new om;c.update(T("INNERTUBE_API_KEY"));c.update(b);a.hash=dd(c.digest(),3)}return a}
;function Oo(a){var b=new Rm;(b=b.isAvailable()?a?new Xm(b,a):b:null)||(a=new Sm(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.i=(a=b)?new Nm(a):null;this.m=document.domain||window.location.hostname}
Oo.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.i)try{this.i.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Bm(b))}catch(f){return}else e=escape(b);Tn(a,e,c,this.m)};
Oo.prototype.get=function(a,b){var c=void 0,d=!this.i;if(!d)try{c=this.i.get(a)}catch(e){d=!0}if(d&&(c=xe.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Oo.prototype.remove=function(a){this.i&&this.i.remove(a);var b=this.m;xe.remove(""+a,"/",void 0===b?"youtube.com":b)};var Po=window,W=Po.ytcsi&&Po.ytcsi.now?Po.ytcsi.now:Po.performance&&Po.performance.timing&&Po.performance.now&&Po.performance.timing.navigationStart?function(){return Po.performance.timing.navigationStart+Po.performance.now()}:function(){return(new Date).getTime()};var Qo;function Ro(){Qo||(Qo=new Oo("yt.innertube"));return Qo}
function So(a,b,c,d){if(d)return null;d=Ro().get("nextId",!0)||1;var e=Ro().get("requests",!0)||{};e[d]={method:a,request:b,authState:No(c),requestTime:Math.round(W())};Ro().set("nextId",d+1,86400,!0);Ro().set("requests",e,86400,!0);return d}
function To(a){var b=Ro().get("requests",!0)||{};delete b[a];Ro().set("requests",b,86400,!0)}
function Uo(a){var b=Ro().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(W())-d.requestTime)){var e=d.authState;var f=No(Mo(!1));a:{var g=void 0,h=void 0;for(h in e)if(!(h in f)||e[h]!==f[h]){e=!1;break a}for(g in f)if(!(g in e)){e=!1;break a}e=!0}e&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(W())),Vo(a,d.method,e,{}));delete b[c]}}Ro().set("requests",b,86400,!0)}}
;var Wo=function(){var a;return function(){a||(a=new Oo("ytidb"));return a}}();
function Xo(){var a;return null==(a=Wo())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var Yo=[],Zo=!1;function $o(a){Zo||(Yo.push({type:"ERROR",payload:a}),10<Yo.length&&Yo.shift())}
function ap(a,b){Zo||(Yo.push({type:"EVENT",eventType:a,payload:b}),10<Yo.length&&Yo.shift())}
;function bp(a){var b=Da.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(fa(b))}
v(bp,Error);function cp(){try{return dp(),!0}catch(a){return!1}}
function dp(){if(void 0!==T("DATASYNC_ID"))return T("DATASYNC_ID");throw new bp("Datasync ID not set","unknown");}
;function ep(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function fp(a){return a.substr(0,a.indexOf(":"))||a}
;var gp={},hp=(gp.AUTH_INVALID="No user identifier specified.",gp.EXPLICIT_ABORT="Transaction was explicitly aborted.",gp.IDB_NOT_SUPPORTED="IndexedDB is not supported.",gp.MISSING_INDEX="Index not created.",gp.MISSING_OBJECT_STORES="Object stores not created.",gp.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",gp.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",gp.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
gp.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",gp.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",gp.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",gp.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",gp),ip={},jp=(ip.AUTH_INVALID="ERROR",ip.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",ip.EXPLICIT_ABORT="IGNORED",ip.IDB_NOT_SUPPORTED="ERROR",ip.MISSING_INDEX=
"WARNING",ip.MISSING_OBJECT_STORES="ERROR",ip.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",ip.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",ip.QUOTA_EXCEEDED="WARNING",ip.QUOTA_MAYBE_EXCEEDED="WARNING",ip.UNKNOWN_ABORT="WARNING",ip.INCOMPATIBLE_DB_VERSION="WARNING",ip),kp={},lp=(kp.AUTH_INVALID=!1,kp.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,kp.EXPLICIT_ABORT=!1,kp.IDB_NOT_SUPPORTED=!1,kp.MISSING_INDEX=!1,kp.MISSING_OBJECT_STORES=!1,kp.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,kp.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,kp.QUOTA_EXCEEDED=!1,kp.QUOTA_MAYBE_EXCEEDED=!0,kp.UNKNOWN_ABORT=!0,kp.INCOMPATIBLE_DB_VERSION=!1,kp);function X(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?hp[a]:c;d=void 0===d?jp[a]:d;e=void 0===e?lp[a]:e;bp.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.i=e;Object.setPrototypeOf(this,X.prototype)}
v(X,bp);function mp(a,b){X.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},hp.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,mp.prototype)}
v(mp,X);function np(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,np.prototype)}
v(np,Error);var op=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function pp(a,b,c,d){b=fp(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof X)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new X("QUOTA_EXCEEDED",a);if(ad&&"UnknownError"===e.name)return new X("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof np)return new X("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&op.some(function(f){return e.message.includes(f)}))return new X("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new X("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",Yf:e.name})];e.level="WARNING";return e}
function qp(a,b,c){var d=Xo();return new X("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function rp(a){if(!a)throw Error();throw a;}
function sp(a){return a}
function tp(a){this.i=a}
function Y(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=u(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=u(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.i=[];this.onRejected=[];a=a.i;try{a(c,b)}catch(e){b(e)}}
Y.all=function(a){return new Y(new tp(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={Fa:0};f.Fa<a.length;f={Fa:f.Fa},++f.Fa)up(Y.resolve(a[f.Fa]).then(function(g){return function(h){d[g.Fa]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})}))};
Y.resolve=function(a){return new Y(new tp(function(b,c){a instanceof Y?a.then(b,c):b(a)}))};
Y.reject=function(a){return new Y(new tp(function(b,c){c(a)}))};
Y.prototype.then=function(a,b){var c=this,d=null!=a?a:sp,e=null!=b?b:rp;return new Y(new tp(function(f,g){"PENDING"===c.state.status?(c.i.push(function(){vp(c,c,d,f,g)}),c.onRejected.push(function(){wp(c,c,e,f,g)})):"FULFILLED"===c.state.status?vp(c,c,d,f,g):"REJECTED"===c.state.status&&wp(c,c,e,f,g)}))};
function up(a,b){a.then(void 0,b)}
function vp(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Y?xp(a,b,f,d,e):d(f)}catch(g){e(g)}}
function wp(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Y?xp(a,b,f,d,e):d(f)}catch(g){e(g)}}
function xp(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Y?xp(a,b,f,d,e):d(f)},function(f){e(f)})}
;function yp(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function zp(a){return new Promise(function(b,c){yp(a,b,c)})}
function Ap(a){return new Y(new tp(function(b,c){yp(a,b,c)}))}
;function Bp(a,b){return new Y(new tp(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;function Cp(a,b){this.i=a;this.options=b;this.transactionCount=0;this.l=Math.round(W());this.m=!1}
m=Cp.prototype;m.add=function(a,b,c){return Dp(this,[a],{mode:"readwrite",ia:!0},function(d){return d.objectStore(a).add(b,c)})};
m.clear=function(a){return Dp(this,[a],{mode:"readwrite",ia:!0},function(b){return b.objectStore(a).clear()})};
m.close=function(){this.i.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
m.count=function(a,b){return Dp(this,[a],{mode:"readonly",ia:!0},function(c){return c.objectStore(a).count(b)})};
function Ep(a,b,c){a=a.i.createObjectStore(b,c);return new Fp(a)}
m.delete=function(a,b){return Dp(this,[a],{mode:"readwrite",ia:!0},function(c){return c.objectStore(a).delete(b)})};
m.get=function(a,b){return Dp(this,[a],{mode:"readonly",ia:!0},function(c){return c.objectStore(a).get(b)})};
function Gp(a,b){return Dp(a,["LogsRequestsStore"],{mode:"readwrite",ia:!0},function(c){c=c.objectStore("LogsRequestsStore");return Ap(c.i.put(b,void 0))})}
m.objectStoreNames=function(){return Array.from(this.i.objectStoreNames)};
function Dp(a,b,c,d){var e,f,g,h,k,l,n,p,r,q,x,z;return y(function(F){switch(F.i){case 1:var M={mode:"readonly",ia:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?M.mode=c:Object.assign(M,c);e=M;a.transactionCount++;f=e.ia?3:1;g=0;case 2:if(h){F.M(3);break}g++;k=Math.round(W());sa(F,4);l=a.i.transaction(b,e.mode);M=new Hp(l);M=Ip(M,d);return w(F,M,6);case 6:return n=F.m,p=Math.round(W()),Jp(a,k,p,g,void 0,b.join(),e),F.return(n);case 4:r=ua(F);q=Math.round(W());x=pp(r,a.i.name,b.join(),
a.i.version);if((z=x instanceof X&&!x.i)||g>=f)Jp(a,k,q,g,x,b.join(),e),h=x;F.M(2);break;case 3:return F.return(Promise.reject(h))}})}
function Jp(a,b,c,d,e,f,g){b=c-b;e?(e instanceof X&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&ap("QUOTA_EXCEEDED",{dbName:fp(a.i.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof X&&"UNKNOWN_ABORT"===e.type&&(c-=a.l,0>c&&c>=Math.pow(2,31)&&(c=0),ap("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.m=!0),Kp(a,!1,d,f,b,g.tag),$o(e)):Kp(a,!0,d,f,b,g.tag)}
function Kp(a,b,c,d,e,f){ap("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.m,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
m.getName=function(){return this.i.name};
function Fp(a){this.i=a}
m=Fp.prototype;m.add=function(a,b){return Ap(this.i.add(a,b))};
m.autoIncrement=function(){return this.i.autoIncrement};
m.clear=function(){return Ap(this.i.clear()).then(function(){})};
m.count=function(a){return Ap(this.i.count(a))};
function Lp(a,b){return Mp(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
m.delete=function(a){return a instanceof IDBKeyRange?Lp(this,a):Ap(this.i.delete(a))};
m.get=function(a){return Ap(this.i.get(a))};
m.index=function(a){try{return new Np(this.i.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new np(a,this.i.name);throw b;}};
m.getName=function(){return this.i.name};
m.keyPath=function(){return this.i.keyPath};
function Mp(a,b,c){a=a.i.openCursor(b.query,b.direction);return Op(a).then(function(d){return Bp(d,c)})}
function Hp(a){var b=this;this.i=a;this.l=new Map;this.m=!1;this.done=new Promise(function(c,d){b.i.addEventListener("complete",function(){c()});
b.i.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.i.error)});
b.i.addEventListener("abort",function(){var e=b.i.error;if(e)d(e);else if(!b.m){e=X;for(var f=b.i.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.i.db.name,mode:b.i.mode});d(e)}})})}
function Ip(a,b){var c=new Promise(function(d,e){try{up(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return u(d).next().value})}
Hp.prototype.abort=function(){this.i.abort();this.m=!0;throw new X("EXPLICIT_ABORT");};
Hp.prototype.objectStore=function(a){a=this.i.objectStore(a);var b=this.l.get(a);b||(b=new Fp(a),this.l.set(a,b));return b};
function Np(a){this.i=a}
m=Np.prototype;m.count=function(a){return Ap(this.i.count(a))};
m.delete=function(a){return Pp(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
m.get=function(a){return Ap(this.i.get(a))};
m.getKey=function(a){return Ap(this.i.getKey(a))};
m.keyPath=function(){return this.i.keyPath};
m.unique=function(){return this.i.unique};
function Pp(a,b,c){a=a.i.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return Op(a).then(function(d){return Bp(d,c)})}
function Qp(a,b){this.request=a;this.cursor=b}
function Op(a){return Ap(a).then(function(b){return b?new Qp(a,b):null})}
m=Qp.prototype;m.advance=function(a){this.cursor.advance(a);return Op(this.request)};
m.continue=function(a){this.cursor.continue(a);return Op(this.request)};
m.delete=function(){return Ap(this.cursor.delete()).then(function(){})};
m.getKey=function(){return this.cursor.key};
m.xa=function(){return this.cursor.value};
m.update=function(a){return Ap(this.cursor.update(a))};function Rp(a,b,c){return new Promise(function(d,e){function f(){r||(r=new Cp(g.result,{closed:p}));return r}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.blocked,k=c.blocking,l=c.gf,n=c.upgrade,p=c.closed,r;g.addEventListener("upgradeneeded",function(q){try{if(null===q.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");q.dataLoss&&"none"!==q.dataLoss&&ap("IDB_DATA_CORRUPTED",{reason:q.dataLossMessage||"unknown reason",dbName:fp(a)});var x=f(),z=new Hp(g.transaction);
n&&n(x,function(F){return q.oldVersion<F&&q.newVersion>=F},z);
z.done.catch(function(F){e(F)})}catch(F){e(F)}});
g.addEventListener("success",function(){var q=g.result;k&&q.addEventListener("versionchange",function(){k(f())});
q.addEventListener("close",function(){ap("IDB_UNEXPECTEDLY_CLOSED",{dbName:fp(a),dbVersion:q.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function Sp(a,b,c){c=void 0===c?{}:c;return Rp(a,b,c)}
function Tp(a,b){b=void 0===b?{}:b;var c,d,e,f;return y(function(g){if(1==g.i)return sa(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.blocked)&&c.addEventListener("blocked",function(){e()}),w(g,zp(c),4);
if(2!=g.i)return ta(g,0);f=ua(g);throw pp(f,a,"",-1);})}
;function Up(a){return new Promise(function(b){Nn(function(){b()},a)})}
function Vp(a,b){this.name=a;this.options=b;this.o=!0;this.u=this.s=0;this.m=500}
Vp.prototype.l=function(a,b,c){c=void 0===c?{}:c;return Sp(a,b,c)};
Vp.prototype.delete=function(a){a=void 0===a?{}:a;return Tp(this.name,a)};
function Wp(a,b){return new X("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function Xp(a,b){if(!b)throw qp("openWithToken",fp(a.name));return Yp(a)}
function Yp(a){function b(){var f,g,h,k,l,n,p,r,q,x;return y(function(z){switch(z.i){case 1:return g=null!=(f=Error().stack)?f:"",sa(z,2),w(z,a.l(a.name,a.options.version,d),4);case 4:h=z.m;for(var F=a.options,M=[],N=u(Object.keys(F.ab)),V=N.next();!V.done;V=N.next()){V=V.value;var pd=F.ab[V],Mh=void 0===pd.Ue?Number.MAX_VALUE:pd.Ue;!(h.i.version>=pd.Eb)||h.i.version>=Mh||h.i.objectStoreNames.contains(V)||M.push(V)}k=M;if(0===k.length){z.M(5);break}l=Object.keys(a.options.ab);n=h.objectStoreNames();
if(a.u<Rn("ytidb_reopen_db_retries",0))return a.u++,h.close(),$o(new X("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:n})),z.return(b());if(!(a.s<Rn("ytidb_remake_db_retries",1))){z.M(6);break}a.s++;if(!U("ytidb_remake_db_enable_backoff_delay")){z.M(7);break}return w(z,Up(a.m),8);case 8:a.m*=2;case 7:return w(z,a.delete(),9);case 9:return $o(new X("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:n})),z.return(b());
case 6:throw new mp(n,l);case 5:return z.return(h);case 2:p=ua(z);if(p instanceof DOMException?"VersionError"!==p.name:"DOMError"in self&&p instanceof DOMError?"VersionError"!==p.name:!(p instanceof Object&&"message"in p)||"An attempt was made to open a database using a lower version than the existing version."!==p.message){z.M(10);break}return w(z,a.l(a.name,void 0,Object.assign({},d,{upgrade:void 0})),11);case 11:r=z.m;q=r.i.version;if(void 0!==a.options.version&&q>a.options.version+1)throw r.close(),
a.o=!1,Wp(a,q);return z.return(r);case 10:throw c(),p instanceof Error&&!U("ytidb_async_stack_killswitch")&&(p.stack=p.stack+"\n"+g.substring(g.indexOf("\n")+1)),pp(p,a.name,"",null!=(x=a.options.version)?x:-1);}})}
function c(){a.i===e&&(a.i=void 0)}
if(!a.o)throw Wp(a);if(a.i)return a.i;var d={blocking:function(f){f.close()},
closed:c,gf:c,upgrade:a.options.upgrade};var e=b();a.i=e;return a.i}
;var Zp=new Vp("YtIdbMeta",{ab:{databases:{Eb:1}},upgrade:function(a,b){b(1)&&Ep(a,"databases",{keyPath:"actualName"})}});
function $p(a,b){var c;return y(function(d){if(1==d.i)return w(d,Xp(Zp,b),2);c=d.m;return d.return(Dp(c,["databases"],{ia:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Ap(f.i.put(a,void 0)).then(function(){})})}))})}
function aq(a,b){var c;return y(function(d){if(1==d.i)return a?w(d,Xp(Zp,b),2):d.return();c=d.m;return d.return(c.delete("databases",a))})}
function bq(a,b){var c,d;return y(function(e){return 1==e.i?(c=[],w(e,Xp(Zp,b),2)):3!=e.i?(d=e.m,w(e,Dp(d,["databases"],{ia:!0,mode:"readonly"},function(f){c.length=0;return Mp(f.objectStore("databases"),{},function(g){a(g.xa())&&c.push(g.xa());return g.continue()})}),3)):e.return(c)})}
function cq(a){return bq(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
;var dq,eq=new function(){}(new function(){});
function fq(){var a,b,c,d;return y(function(e){switch(e.i){case 1:a=Xo();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=co)f=/WebKit\/([0-9]+)/.exec(Eb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Eb()),f=!(f&&602<=parseInt(f[1],10)));if(f||Lc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
sa(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return w(e,$p(d,eq),4);case 4:return w(e,aq("yt-idb-test-do-not-use",eq),5);case 5:return e.return(!0);case 2:return ua(e),e.return(!1)}})}
function gq(){if(void 0!==dq)return dq;Zo=!0;return dq=fq().then(function(a){Zo=!1;var b;if(null!=(b=Wo())&&b.i){var c;b={hasSucceededOnce:(null==(c=Xo())?void 0:c.hasSucceededOnce)||a};var d;null==(d=Wo())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function hq(){return B("ytglobal.idbToken_")||void 0}
function iq(){var a=hq();return a?Promise.resolve(a):gq().then(function(b){(b=b?eq:void 0)&&E("ytglobal.idbToken_",b);return b})}
;new Hm;function jq(a){if(!cp())throw a=new X("AUTH_INVALID",{dbName:a}),$o(a),a;var b=dp();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function kq(a,b,c,d){var e,f,g,h,k,l;return y(function(n){switch(n.i){case 1:return f=null!=(e=Error().stack)?e:"",w(n,iq(),2);case 2:g=n.m;if(!g)throw h=qp("openDbImpl",a,b),U("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),$o(h),h;ep(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:jq(a);sa(n,3);return w(n,$p(k,g),5);case 5:return w(n,Sp(k.actualName,b,d),6);case 6:return n.return(n.m);case 3:return l=ua(n),sa(n,7),w(n,aq(k.actualName,g),9);case 9:ta(n,
8);break;case 7:ua(n);case 8:throw l;}})}
function lq(a,b,c){c=void 0===c?{}:c;return kq(a,b,!1,c)}
function mq(a,b,c){c=void 0===c?{}:c;return kq(a,b,!0,c)}
function nq(a,b){b=void 0===b?{}:b;var c,d;return y(function(e){if(1==e.i)return w(e,iq(),2);if(3!=e.i){c=e.m;if(!c)return e.return();ep(a);d=jq(a);return w(e,Tp(d.actualName,b),3)}return w(e,aq(d.actualName,c),0)})}
function oq(a,b,c){a=a.map(function(d){return y(function(e){return 1==e.i?w(e,Tp(d.actualName,b),2):w(e,aq(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function pq(){var a=void 0===a?{}:a;var b,c;return y(function(d){if(1==d.i)return w(d,iq(),2);if(3!=d.i){b=d.m;if(!b)return d.return();ep("LogsDatabaseV2");return w(d,cq(b),3)}c=d.m;return w(d,oq(c,a,b),0)})}
function qq(a,b){b=void 0===b?{}:b;var c;return y(function(d){if(1==d.i)return w(d,iq(),2);if(3!=d.i){c=d.m;if(!c)return d.return();ep(a);return w(d,Tp(a,b),3)}return w(d,aq(a,c),0)})}
;function rq(a){this.ib=this.i=!1;this.potentialEsfErrorCounter=this.m=0;this.handleError=function(){};
this.La=function(){};
this.now=Date.now;this.Ua=!1;var b;this.ud=null!=(b=a.ud)?b:100;var c;this.md=null!=(c=a.md)?c:1;var d;this.jd=null!=(d=a.jd)?d:2592E6;var e;this.fd=null!=(e=a.fd)?e:12E4;var f;this.ld=null!=(f=a.ld)?f:5E3;var g;this.V=null!=(g=a.V)?g:void 0;this.ob=!!a.ob;var h;this.lb=null!=(h=a.lb)?h:.1;var k;this.wb=null!=(k=a.wb)?k:10;a.handleError&&(this.handleError=a.handleError);a.La&&(this.La=a.La);a.Ua&&(this.Ua=a.Ua);a.ib&&(this.ib=a.ib);this.Y=a.Y;this.la=a.la;this.aa=a.aa;this.ga=a.ga;this.va=a.va;this.dc=
a.dc;this.cc=a.cc;sq(this)&&(!this.Y||this.Y("networkless_logging"))&&tq(this)}
function tq(a){sq(a)&&!a.Ua&&(a.i=!0,a.ob&&Math.random()<=a.lb&&a.aa.Ed(a.V),uq(a),a.ga.da()&&a.fb(),a.ga.fa(a.dc,a.fb.bind(a)),a.ga.fa(a.cc,a.zc.bind(a)))}
m=rq.prototype;m.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(sq(this)&&this.i){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.aa.set(d,this.V).then(function(e){d.id=e;c.ga.da()&&vq(c,d)}).catch(function(e){vq(c,d);
wq(c,e)})}else this.va(a,b)};
m.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(sq(this)&&this.i){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.Y&&this.Y("nwl_skip_retry")&&(e.skipRetry=c);if(this.ga.da()||this.Y&&this.Y("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return y(function(k){if(1==k.i)return w(k,d.aa.set(e,d.V).catch(function(l){wq(d,l)}),2);
f(g,h);k.i=0})}}this.va(a,b,e.skipRetry)}else this.aa.set(e,this.V).catch(function(g){d.va(a,b,e.skipRetry);
wq(d,g)})}else this.va(a,b,this.Y&&this.Y("nwl_skip_retry")&&c)};
m.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(sq(this)&&this.i){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.aa.Ia(d.id,c.V):e=!0;c.ga.ta&&c.Y&&c.Y("vss_network_hint")&&c.ga.ta(!0);f(g,h)};
this.va(d.url,d.options);this.aa.set(d,this.V).then(function(g){d.id=g;e&&c.aa.Ia(d.id,c.V)}).catch(function(g){wq(c,g)})}else this.va(a,b)};
m.fb=function(){var a=this;if(!sq(this))throw qp("throttleSend");this.m||(this.m=this.la.ka(function(){var b;return y(function(c){if(1==c.i)return w(c,a.aa.Lc("NEW",a.V),2);if(3!=c.i)return b=c.m,b?w(c,vq(a,b),3):(a.zc(),c.return());a.m&&(a.m=0,a.fb());c.i=0})},this.ud))};
m.zc=function(){this.la.Ca(this.m);this.m=0};
function vq(a,b){var c,d;return y(function(e){switch(e.i){case 1:if(!sq(a))throw c=qp("immediateSend"),c;if(void 0===b.id){e.M(2);break}return w(e,a.aa.Ne(b.id,a.V),3);case 3:(d=e.m)?b=d:a.La(Error("The request cannot be found in the database."));case 2:if(xq(a,b,a.jd)){e.M(4);break}a.La(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.M(5);break}return w(e,a.aa.Ia(b.id,a.V),5);case 5:return e.return();case 4:b.skipRetry||(b=yq(a,b));if(!b){e.M(0);break}if(!b.skipRetry||
void 0===b.id){e.M(8);break}return w(e,a.aa.Ia(b.id,a.V),8);case 8:a.va(b.url,b.options,!!b.skipRetry),e.i=0}})}
function yq(a,b){if(!sq(a))throw qp("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k;return y(function(l){switch(l.i){case 1:g=zq(f);if(!(a.Y&&a.Y("nwl_consider_error_code")&&g||a.Y&&!a.Y("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.wb)){l.M(2);break}if(!a.ga.wa){l.M(3);break}return w(l,a.ga.wa(),3);case 3:if(a.ga.da()){l.M(2);break}c(e,f);if(!a.Y||!a.Y("nwl_consider_error_code")||void 0===(null==(h=b)?void 0:h.id)){l.M(6);break}return w(l,a.aa.jc(b.id,a.V,!1),6);case 6:return l.return();case 2:if(a.Y&&a.Y("nwl_consider_error_code")&&
!g&&a.potentialEsfErrorCounter>a.wb)return l.return();a.potentialEsfErrorCounter++;if(void 0===(null==(k=b)?void 0:k.id)){l.M(8);break}return b.sendCount<a.md?w(l,a.aa.jc(b.id,a.V),12):w(l,a.aa.Ia(b.id,a.V),8);case 12:a.la.ka(function(){a.ga.da()&&a.fb()},a.ld);
case 8:c(e,f),l.i=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return y(function(h){if(1==h.i)return void 0===(null==(g=b)?void 0:g.id)?h.M(2):w(h,a.aa.Ia(b.id,a.V),2);a.ga.ta&&a.Y&&a.Y("vss_network_hint")&&a.ga.ta(!0);d(e,f);h.i=0})};
return b}
function xq(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function uq(a){if(!sq(a))throw qp("retryQueuedRequests");a.aa.Lc("QUEUED",a.V).then(function(b){b&&!xq(a,b,a.fd)?a.la.ka(function(){return y(function(c){if(1==c.i)return void 0===b.id?c.M(2):w(c,a.aa.jc(b.id,a.V),2);uq(a);c.i=0})}):a.ga.da()&&a.fb()})}
function wq(a,b){a.yd&&!a.ga.da()?a.yd(b):a.handleError(b)}
function sq(a){return!!a.V||a.ib}
function zq(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
;var Aq=B("ytPubsub2Pubsub2Instance")||new S;S.prototype.subscribe=S.prototype.subscribe;S.prototype.unsubscribeByKey=S.prototype.Cb;S.prototype.publish=S.prototype.ed;S.prototype.clear=S.prototype.clear;E("ytPubsub2Pubsub2Instance",Aq);E("ytPubsub2Pubsub2SubscribedKeys",B("ytPubsub2Pubsub2SubscribedKeys")||{});E("ytPubsub2Pubsub2TopicToKeys",B("ytPubsub2Pubsub2TopicToKeys")||{});E("ytPubsub2Pubsub2IsAsync",B("ytPubsub2Pubsub2IsAsync")||{});E("ytPubsub2Pubsub2SkipSubKey",null);function Bq(a,b){Vp.call(this,a,b);this.options=b;ep(a)}
v(Bq,Vp);function Cq(a,b){var c;return function(){c||(c=new Bq(a,b));return c}}
Bq.prototype.l=function(a,b,c){c=void 0===c?{}:c;return(this.options.nc?mq:lq)(a,b,Object.assign({},c))};
Bq.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.nc?qq:nq)(this.name,a)};
function Dq(a,b){return Cq(a,b)}
;var Eq;
function Fq(){if(Eq)return Eq();var a={};Eq=Dq("LogsDatabaseV2",{ab:(a.LogsRequestsStore={Eb:2},a),nc:!1,upgrade:function(b,c,d){c(2)&&Ep(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.i.indexNames.contains("newRequest")&&d.i.deleteIndex("newRequest"),d.i.createIndex("newRequestV2",["status","interface","timestamp"],{unique:!1}));c(7)&&b.i.objectStoreNames.contains("sapisid")&&b.i.deleteObjectStore("sapisid");c(9)&&b.i.objectStoreNames.contains("SWHealthLog")&&b.i.deleteObjectStore("SWHealthLog")},
version:9});return Eq()}
;function Gq(a){return Xp(Fq(),a)}
function Hq(a,b){var c,d,e,f;return y(function(g){if(1==g.i)return c={startTime:W(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},w(g,Gq(b),2);if(3!=g.i)return d=g.m,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:T("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),w(g,Gp(d,e),3);f=g.m;c.jf=W();Iq(c);return g.return(f)})}
function Jq(a,b){var c,d,e,f,g,h,k;return y(function(l){if(1==l.i)return c={startTime:W(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},w(l,Gq(b),2);if(3!=l.i)return d=l.m,e=T("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,W()],h=IDBKeyRange.bound(f,g),k=void 0,w(l,Dp(d,["LogsRequestsStore"],{mode:"readwrite",ia:!0},function(n){return Pp(n.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(p){p.xa()&&(k=p.xa(),"NEW"===a&&(k.status="QUEUED",p.update(k)))})}),
3);
c.jf=W();Iq(c);return l.return(k)})}
function Kq(a,b){var c;return y(function(d){if(1==d.i)return w(d,Gq(b),2);c=d.m;return d.return(Dp(c,["LogsRequestsStore"],{mode:"readwrite",ia:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Ap(f.i.put(g,void 0)).then(function(){return g})})}))})}
function Lq(a,b,c){c=void 0===c?!0:c;var d;return y(function(e){if(1==e.i)return w(e,Gq(b),2);d=e.m;return e.return(Dp(d,["LogsRequestsStore"],{mode:"readwrite",ia:!0},function(f){var g=f.objectStore("LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",c&&(h.sendCount+=1),Ap(g.i.put(h,void 0)).then(function(){return h})):Y.resolve(void 0)})}))})}
function Mq(a,b){var c;return y(function(d){if(1==d.i)return w(d,Gq(b),2);c=d.m;return d.return(c.delete("LogsRequestsStore",a))})}
function Nq(a){var b,c;return y(function(d){if(1==d.i)return w(d,Gq(a),2);b=d.m;c=W()-2592E6;return w(d,Dp(b,["LogsRequestsStore"],{mode:"readwrite",ia:!0},function(e){return Mp(e.objectStore("LogsRequestsStore"),{},function(f){if(f.xa().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Oq(){y(function(a){return w(a,pq(),0)})}
function Iq(a){if(!U("nwl_csi_killswitch")&&.01>=Math.random()){var b=B("ytPubsub2Pubsub2Instance");b&&b.publish.call(b,"nwl_transaction_latency_payload".toString(),"nwl_transaction_latency_payload",a)}}
;var Pq={},Qq=Dq("ServiceWorkerLogsDatabase",{ab:(Pq.SWHealthLog={Eb:1},Pq),nc:!0,upgrade:function(a,b){b(1)&&Ep(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).i.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:1});function Rq(a){return Xp(Qq(),a)}
function Sq(a){var b,c;y(function(d){if(1==d.i)return w(d,Rq(a),2);b=d.m;c=W()-2592E6;return w(d,Dp(b,["SWHealthLog"],{mode:"readwrite",ia:!0},function(e){return Mp(e.objectStore("SWHealthLog"),{},function(f){if(f.xa().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Tq(a){var b;return y(function(c){if(1==c.i)return w(c,Rq(a),2);b=c.m;return w(c,b.clear("SWHealthLog"),0)})}
;var Uq={},Vq=0;
function Wq(a){var b=void 0===b?"":b;var c=void 0===c?!1:c;if(a)if(b)so(a,void 0,"POST",b);else if(T("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))so(a,void 0,"GET","",void 0,void 0,c);else{b:{try{var d=new Ta({url:a});if(d.l&&d.m||d.o){var e=wc(a.match(vc)[5]||null),f;if(!(f=!e||!e.endsWith("/aclk"))){var g=a.search(Bc);d:{for(b=0;0<=(b=a.indexOf("ri",b))&&b<g;){var h=a.charCodeAt(b-1);if(38==h||63==h){var k=a.charCodeAt(b+2);if(!k||61==k||38==k||35==k){var l=b;break d}}b+=3}l=-1}if(0>l)var n=null;else{var p=
a.indexOf("&",l);if(0>p||p>g)p=g;n=uc(a.slice(l+3,-1!==p?p:0))}f="1"!==n}var r=!f;break b}}catch(x){}r=!1}if(r){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var q=!0;break b}}catch(x){}q=!1}r=q?!0:!1}else r=!1;r||Xq(a)}}
function Xq(a){var b=new Image,c=""+Vq++;Uq[c]=b;b.onload=b.onerror=function(){delete Uq[c]};
b.src=a}
;function Yq(){this.i=new Map;this.m=!1}
function Zq(){if(!Yq.i){var a=B("yt.networkRequestMonitor.instance")||new Yq;E("yt.networkRequestMonitor.instance",a);Yq.i=a}return Yq.i}
Yq.prototype.requestComplete=function(a,b){b&&(this.m=!0);a=this.removeParams(a);this.i.get(a)||this.i.set(a,b)};
Yq.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.i.get(a))?!1:!1===a&&this.m?!0:null};
Yq.prototype.removeParams=function(a){return a.split("?")[0]};
Yq.prototype.removeParams=Yq.prototype.removeParams;Yq.prototype.isEndpointCFR=Yq.prototype.isEndpointCFR;Yq.prototype.requestComplete=Yq.prototype.requestComplete;Yq.getInstance=Zq;var $q;function ar(){$q||($q=new Oo("yt.offline"));return $q}
function br(a){if(U("offline_error_handling")){var b=ar().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);ar().set("errors",b,2592E3,!0)}}
function cr(){if(U("offline_error_handling")){var a=ar().get("errors",!0);if(a){for(var b in a)if(a[b]){var c=new bp(b,"sent via offline_errors");c.name=a[b].name;c.stack=a[b].stack;c.level=a[b].level;Hn(c)}ar().set("errors",{},2592E3,!0)}}}
;var dr=Rn("network_polling_interval",3E4);function Z(){K.call(this);var a=this;this.H=0;this.D=this.s=!1;this.m=this.Rb();U("use_shared_nsm")?(this.i=gf(),U("use_shared_nsm_and_keep_yt_online_updated")&&(this.i.fa("networkstatus-online",function(){a.m=!0;a.D&&cr()}),this.i.fa("networkstatus-offline",function(){a.m=!1}))):(er(this),fr(this))}
v(Z,K);function gr(){if(!Z.i){var a=B("yt.networkStatusManager.instance")||new Z;E("yt.networkStatusManager.instance",a);Z.i=a}return Z.i}
m=Z.prototype;m.da=function(){if(U("use_shared_nsm")&&this.i){var a;return null==(a=this.i)?void 0:a.da()}return this.m};
m.ta=function(a){if(U("use_shared_nsm")&&this.i){var b;null!=(b=this.i)&&(b.i=a)}else a!==this.m&&(this.m=a)};
m.Oe=function(a){!U("use_shared_nsm")&&(this.s=!0,void 0===a?0:a)&&(this.H||hr(this))};
m.Rb=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
m.Nd=function(){this.D=!0};
m.fa=function(a,b){return U("use_shared_nsm")&&this.i?this.i.fa(a,b):K.prototype.fa.call(this,a,b)};
function fr(a){window.addEventListener("online",function(){return y(function(b){if(1==b.i)return w(b,a.wa(),2);a.D&&cr();b.i=0})})}
function er(a){window.addEventListener("offline",function(){return y(function(b){return w(b,a.wa(),0)})})}
function hr(a){a.H=Ln(function(){return y(function(b){if(1==b.i)return a.m?a.Rb()||!a.s?b.M(3):w(b,a.wa(),3):w(b,a.wa(),3);hr(a);b.i=0})},dr)}
m.wa=function(a){var b=this;if(U("use_shared_nsm")&&this.i){var c=ef(this.i,a);c.then(function(d){U("use_cfr_monitor")&&Zq().requestComplete("generate_204",d)});
return c}return this.C?this.C:this.C=new Promise(function(d){var e,f,g,h;return y(function(k){switch(k.i){case 1:return e=window.AbortController?new window.AbortController:void 0,g=null==(f=e)?void 0:f.signal,h=!1,sa(k,2,3),e&&(b.G=hf.ka(function(){e.abort()},a||2E4)),w(k,fetch("/generate_204",{method:"HEAD",
signal:g}),5);case 5:h=!0;case 3:va(k);U("use_cfr_monitor")&&Zq().requestComplete("generate_204",h);b.C=void 0;b.G&&hf.Ca(b.G);h!==b.m&&(b.m=h,b.m&&b.s?bf(b,"ytnetworkstatus-online"):b.s&&bf(b,"ytnetworkstatus-offline"));d(h);wa(k);break;case 2:ua(k),h=!1,k.M(3)}})})};
Z.prototype.sendNetworkCheckRequest=Z.prototype.wa;Z.prototype.listen=Z.prototype.fa;Z.prototype.enableErrorFlushing=Z.prototype.Nd;Z.prototype.getWindowStatus=Z.prototype.Rb;Z.prototype.monitorNetworkStatusChange=Z.prototype.Oe;Z.prototype.networkStatusHint=Z.prototype.ta;Z.prototype.isNetworkAvailable=Z.prototype.da;Z.getInstance=gr;function ir(a){a=void 0===a?{}:a;K.call(this);var b=this;this.m=this.G=0;this.s="ytnetworkstatus-offline";this.C="ytnetworkstatus-online";U("use_shared_nsm")&&(this.s="networkstatus-offline",this.C="networkstatus-online");this.i=gr();var c=B("yt.networkStatusManager.instance.monitorNetworkStatusChange").bind(this.i);c&&c(a.Ec);a.Vc&&(c=B("yt.networkStatusManager.instance.enableErrorFlushing").bind(this.i))&&c();if(c=B("yt.networkStatusManager.instance.listen").bind(this.i))a.xb?(this.xb=a.xb,c(this.C,
function(){jr(b,"publicytnetworkstatus-online")}),c(this.s,function(){jr(b,"publicytnetworkstatus-offline")})):(c(this.C,function(){bf(b,"publicytnetworkstatus-online")}),c(this.s,function(){bf(b,"publicytnetworkstatus-offline")}))}
v(ir,K);ir.prototype.da=function(){var a=B("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.i)():!0};
ir.prototype.ta=function(a){var b=B("yt.networkStatusManager.instance.networkStatusHint").bind(this.i);b&&b(a)};
ir.prototype.wa=function(a){var b=this,c;return y(function(d){c=B("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.i);return U("skip_network_check_if_cfr")&&Zq().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.ta((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.da())})):c?d.return(c(a)):d.return(!0)})};
function jr(a,b){a.xb?a.m?(hf.Ca(a.G),a.G=hf.ka(function(){a.D!==b&&(bf(a,b),a.D=b,a.m=W())},a.xb-(W()-a.m))):(bf(a,b),a.D=b,a.m=W()):bf(a,b)}
;var kr;function lr(){rq.call(this,{aa:{Ed:Nq,Ia:Mq,Lc:Jq,Ne:Kq,jc:Lq,set:Hq},ga:mr(),handleError:Hn,La:In,va:nr,now:W,yd:br,la:Pn(),dc:"publicytnetworkstatus-online",cc:"publicytnetworkstatus-offline",ob:!0,lb:.1,wb:Rn("potential_esf_error_limit",10),Y:U,Ua:!(cp()&&"www.youtube-nocookie.com"!==xc(document.location.toString()))});this.l=new Hm;U("networkless_immediately_drop_all_requests")&&Oq();qq("LogsDatabaseV2")}
v(lr,rq);function or(){var a=B("yt.networklessRequestController.instance");a||(a=new lr,E("yt.networklessRequestController.instance",a),U("networkless_logging")&&iq().then(function(b){a.V=b;tq(a);a.l.resolve();a.ob&&Math.random()<=a.lb&&a.V&&Sq(a.V);U("networkless_immediately_drop_sw_health_store")&&pr(a)}));
return a}
lr.prototype.writeThenSend=function(a,b){b||(b={});cp()||(this.i=!1);rq.prototype.writeThenSend.call(this,a,b)};
lr.prototype.sendThenWrite=function(a,b,c){b||(b={});cp()||(this.i=!1);rq.prototype.sendThenWrite.call(this,a,b,c)};
lr.prototype.sendAndWrite=function(a,b){b||(b={});cp()||(this.i=!1);rq.prototype.sendAndWrite.call(this,a,b)};
lr.prototype.awaitInitialization=function(){return this.l.promise};
function pr(a){var b;y(function(c){if(!a.V)throw b=qp("clearSWHealthLogsDb"),b;return c.return(Tq(a.V).catch(function(d){a.handleError(d)}))})}
function nr(a,b,c){U("use_cfr_monitor")&&qr(a,b);var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(W());c&&0===Object.keys(b).length?Wq(a):po(a,b)}
function mr(){kr||(kr=new ir({Vc:!0,Ec:!0}));return kr}
function qr(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Zq().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Zq().requestComplete(a,!0);d(e,f)}}
;var rr=0,sr=0,tr,ur=A.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1,potentialEsfErrorCounter:sr};E("ytNetworklessLoggingInitializationOptions",ur);function vr(a,b){function c(d){var e=wr().da();if(!xr()||!d||e&&U("vss_networkless_bypass_write"))yr(a,b);else{var f={url:a,options:b,timestamp:W(),status:"NEW",sendCount:0};Hq(f,d).then(function(g){f.id=g;wr().da()&&zr(f)}).catch(function(g){zr(f);
wr().da()?Hn(g):br(g)})}}
b=void 0===b?{}:b;U("skip_is_supported_killswitch")?iq().then(function(d){c(d)}):c(hq())}
function Ar(a,b){function c(d){if(xr()&&d){var e={url:a,options:b,timestamp:W(),status:"NEW",sendCount:0},f=!1,g=b.onSuccess?b.onSuccess:function(){};
e.options.onSuccess=function(k,l){U("use_cfr_monitor")&&Zq().requestComplete(e.url,!0);void 0!==e.id?Mq(e.id,d):f=!0;U("vss_network_hint")&&wr().ta(!0);g(k,l)};
if(U("use_cfr_monitor")){var h=b.onError?b.onError:function(){};
e.options.onError=function(k,l){Zq().requestComplete(e.url,!1);h(k,l)}}yr(e.url,e.options);
Hq(e,d).then(function(k){e.id=k;f&&Mq(e.id,d)}).catch(function(k){wr().da()?Hn(k):br(k)})}else yr(a,b)}
b=void 0===b?{}:b;U("skip_is_supported_killswitch")?iq().then(function(d){c(d)}):c(hq())}
function Br(){var a=hq();if(!a)throw qp("throttleSend");rr||(rr=hf.ka(function(){var b;return y(function(c){if(1==c.i)return w(c,Jq("NEW",a),2);if(3!=c.i)return b=c.m,b?w(c,zr(b),3):(hf.Ca(rr),rr=0,c.return());rr&&(rr=0,Br());c.i=0})},100))}
function zr(a){var b,c,d;return y(function(e){switch(e.i){case 1:b=hq();if(!b)throw c=qp("immediateSend"),c;if(void 0===a.id){e.M(2);break}return w(e,Kq(a.id,b),3);case 3:(d=e.m)?a=d:In(Error("The request cannot be found in the database."));case 2:var f=a.timestamp;if(!(2592E6<=W()-f)){e.M(4);break}In(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===a.id){e.M(5);break}return w(e,Mq(a.id,b),5);case 5:return e.return();case 4:a.skipRetry||(a=Cr(a));f=a;var g,h;if(null==
f?0:null==(g=f.options)?0:null==(h=g.postParams)?0:h.requestTimeMs)f.options.postParams.requestTimeMs=Math.round(W());a=f;if(!a){e.M(0);break}if(!a.skipRetry||void 0===a.id){e.M(8);break}return w(e,Mq(a.id,b),8);case 8:yr(a.url,a.options,!!a.skipRetry),e.i=0}})}
function Cr(a){var b=hq();if(!b)throw qp("updateRequestHandlers");var c=a.options.onError?a.options.onError:function(){};
a.options.onError=function(e,f){var g,h,k;return y(function(l){switch(l.i){case 1:U("use_cfr_monitor")&&Zq().requestComplete(a.url,!1);g=zq(f);if(!(U("nwl_consider_error_code")&&g||!U("nwl_consider_error_code")&&Er()<=Rn("potential_esf_error_limit",10))){l.M(2);break}if(U("skip_checking_network_on_cfr_failure")&&(!U("skip_checking_network_on_cfr_failure")||Zq().isEndpointCFR(a.url))){l.M(3);break}return w(l,wr().wa(),3);case 3:if(wr().da()){l.M(2);break}c(e,f);if(!U("nwl_consider_error_code")||void 0===
(null==(h=a)?void 0:h.id)){l.M(6);break}return w(l,Lq(a.id,b,!1),6);case 6:return l.return();case 2:if(U("nwl_consider_error_code")&&!g&&Er()>Rn("potential_esf_error_limit",10))return l.return();B("ytNetworklessLoggingInitializationOptions")&&ur.potentialEsfErrorCounter++;sr++;if(void 0===(null==(k=a)?void 0:k.id)){l.M(8);break}return 1>a.sendCount?w(l,Lq(a.id,b),12):w(l,Mq(a.id,b),8);case 12:hf.ka(function(){wr().da()&&Br()},5E3);
case 8:c(e,f),l.i=0}})};
var d=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(e,f){var g;return y(function(h){if(1==h.i)return U("use_cfr_monitor")&&Zq().requestComplete(a.url,!0),void 0===(null==(g=a)?void 0:g.id)?h.M(2):w(h,Mq(a.id,b),2);U("vss_network_hint")&&wr().ta(!0);d(e,f);h.i=0})};
return a}
function wr(){if(U("use_new_nwl"))return mr();tr||(tr=new ir({Vc:!0,Ec:!0}));return tr}
function yr(a,b,c){c&&0===Object.keys(b).length?Wq(a):po(a,b)}
function xr(){return B("ytNetworklessLoggingInitializationOptions")?ur.isNwlInitialized:!1}
function Er(){return B("ytNetworklessLoggingInitializationOptions")?ur.potentialEsfErrorCounter:sr}
;function Fr(a){var b=this;this.config_=null;a?this.config_=a:Eo()&&(this.config_=Fo());Ln(function(){Uo(b)},5E3)}
Fr.prototype.isReady=function(){!this.config_&&Eo()&&(this.config_=Fo());return!!this.config_};
function Vo(a,b,c,d){function e(x){x=void 0===x?!1:x;var z;if(d.retry&&"www.youtube-nocookie.com"!=h&&(x||U("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(z=So(b,c,l,k)),z)){var F=g.onSuccess,M=g.onFetchSuccess;g.onSuccess=function(N,V){To(z);F(N,V)};
c.onFetchSuccess=function(N,V){To(z);M(N,V)}}try{x&&d.retry&&!d.Zc.bypassNetworkless?(g.method="POST",d.Zc.writeThenSend?U("use_new_nwl_wts")?or().writeThenSend(q,g):vr(q,g):U("use_new_nwl_saw")?or().sendAndWrite(q,g):Ar(q,g)):(g.method="POST",g.postParams||(g.postParams={}),po(q,g))}catch(N){if("InvalidAccessError"==N.name)z&&(To(z),z=0),In(Error("An extension is blocking network request."));
else throw N;}z&&Ln(function(){Uo(a)},5E3)}
!T("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&In(new bp("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new bp("innertube xhrclient not ready",b,c,d);Hn(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(x,z){if(d.onSuccess)d.onSuccess(z)},
onFetchSuccess:function(x){if(d.onSuccess)d.onSuccess(x)},
onError:function(x,z){if(d.onError)d.onError(z)},
onFetchError:function(x){if(d.onError)d.onError(x)},
timeout:d.timeout,withCredentials:!0};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.Ae)&&(h=f);var k=a.config_.Ce||!1,l=Mo(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&(g.headers["x-origin"]=window.location.origin);var n="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,p={alt:"json"},r=a.config_.Be&&f;r=r&&f.startsWith("Bearer");r||(p.key=a.config_.innertubeApiKey);var q=ao(""+h+n,p||{},!0);U("use_new_nwl")&&or().i||!U("use_new_nwl")&&
xr()?gq().then(function(x){e(x)}):e(!1)}
;var Gr={appSettingsCaptured:!0,visualElementAttached:!0,visualElementGestured:!0,visualElementHidden:!0,visualElementShown:!0,flowEvent:!0,visualElementStateChanged:!0,playbackAssociated:!0,youThere:!0,accountStateChangeSignedIn:!0,accountStateChangeSignedOut:!0},Hr={latencyActionBaselined:!0,latencyActionInfo:!0,latencyActionTicked:!0,bedrockRepetitiveActionTimed:!0,adsClientStateChange:!0,streamzIncremented:!0,mdxDialAdditionalDataUpdateEvent:!0,tvhtml5WatchKeyEvent:!0,tvhtml5VideoSeek:!0,tokenRefreshEvent:!0,
adNotify:!0,adNotifyFilled:!0,tvhtml5LaunchUrlComponentChanged:!0,bedrockResourceConsumptionSnapshot:!0,deviceStartupMetrics:!0,mdxSignIn:!0,tvhtml5KeyboardLogging:!0,tvhtml5StartupSoundEvent:!0,tvhtml5LiveChatStatus:!0,tvhtml5DeviceStorageStatus:!0,tvhtml5LocalStorage:!0,directSignInEvent:!0,finalPayload:!0,tvhtml5SearchCompleted:!0,tvhtml5KeyboardPerformance:!0,adNotifyFailure:!0,latencyActionSpan:!0,tvhtml5AccountDialogOpened:!0,tvhtml5ApiTest:!0};var Ir=0;E("ytDomDomGetNextId",B("ytDomDomGetNextId")||function(){return++Ir});E("ytEventsEventsListeners",A.ytEventsEventsListeners||{});E("ytEventsEventsCounter",A.ytEventsEventsCounter||{count:0});function Jr(){var a=B("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var Kr=A.ytPubsubPubsubInstance||new S,Lr=A.ytPubsubPubsubSubscribedKeys||{},Mr=A.ytPubsubPubsubTopicToKeys||{},Nr=A.ytPubsubPubsubIsSynchronous||{};S.prototype.subscribe=S.prototype.subscribe;S.prototype.unsubscribeByKey=S.prototype.Cb;S.prototype.publish=S.prototype.ed;S.prototype.clear=S.prototype.clear;E("ytPubsubPubsubInstance",Kr);E("ytPubsubPubsubTopicToKeys",Mr);E("ytPubsubPubsubIsSynchronous",Nr);E("ytPubsubPubsubSubscribedKeys",Lr);var Or=A.window;Or.ytExports||(Or.ytExports={logging:{transport:{leaderQueueLength:0,leaderChosen:!1}}});var Pr=Rn("initial_gel_batch_timeout",2E3),Qr=Math.pow(2,16)-1,Rr=!1,Sr=void 0;function Tr(){this.l=this.i=this.m=0}
var Ur=new Tr,Vr=new Tr,Wr=!0,Xr=A.ytLoggingTransportGELQueue_||new Map;E("ytLoggingTransportGELQueue_",Xr);var Yr=new Map,Zr=A.ytLoggingTransportGELProtoQueue_||new Map;E("ytLoggingTransportGELProtoQueue_",Zr);var $r=A.ytLoggingTransportTokensToCttTargetIds_||{};E("ytLoggingTransportTokensToCttTargetIds_",$r);var as=A.ytLoggingTransportTokensToJspbCttTargetIds_||{};E("ytLoggingTransportTokensToJspbCttTargetIds_",as);
function bs(){U("jspb_with_transport_leader")&&!Or.ytExports.logging.transport.leaderChosen&&(Rr=Or.ytExports.logging.transport.leaderChosen=!0,document.addEventListener("FLUSH_REQUEST",function(){cs(void 0,void 0,!0)}))}
function ds(a,b){bs();if("log_event"===a.endpoint){var c=es(a),d=Xr.get(c)||[];Xr.set(c,d);d.push(a.payload);fs(b,d,c)}}
function gs(a,b){bs();if("log_event"===a.endpoint){var c=es(a,!0);if(U("jspb_with_transport_leader")&&Rr){var d=Yr.get(c)||[];Yr.set(c,d);Or.ytExports.logging.transport.leaderQueueLength++;d.push(a.payload);fs(b,d,c,!0)}else d=Zr.get(c)||[],Zr.set(c,d),a=a.payload.toJSON(),d.push(a),fs(b,d,c,!0)}}
function fs(a,b,c,d){d=void 0===d?!1:d;a&&(Sr=new a);a=Rn("tvhtml5_logging_max_batch")||Rn("web_logging_max_batch")||100;var e=W(),f=d?Vr.l:Ur.l,g=Zr.get(c)||[];U("jspb_with_transport_leader")&&(Rr&&b.length+g.length>=a||!Rr&&Or.ytExports.logging.transport.leaderQueueLength+b.length>=a)||b.length>=a?cs({writeThenSend:!0},U("flush_only_full_queue")?c:void 0,d):10<=e-f&&(hs(d),d?Vr.l=e:Ur.l=e)}
function is(a,b){bs();if("log_event"===a.endpoint){var c=es(a),d=new Map;d.set(c,[a.payload]);b&&(Sr=new b);return new $k(function(e,f){Sr&&Sr.isReady()?js(d,e,f,{bypassNetworkless:!0},!0):e()})}}
function ks(a,b){bs();if("log_event"===a.endpoint){var c=es(a,!0),d=new Map,e=new Map;U("jspb_with_transport_leader")&&Rr?e.set(c,[a.payload]):d.set(c,[a.payload.toJSON()]);b&&(Sr=new b);return new $k(function(f){Sr&&Sr.isReady()?ls(d,e,f,{bypassNetworkless:!0},!0):f()})}}
function es(a,b){var c="";if(a.Ta)c="visitorOnlyApprovedKey";else if(a.qa){if(void 0===b?0:b){b=a.qa.token;c=a.qa;var d=new tn;c.videoId?d.setVideoId(c.videoId):c.playlistId&&Ld(d,2,un,c.playlistId);as[b]=d}else b=a.qa,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),$r[a.qa.token]=c;c=a.qa.token}return c}
function cs(a,b,c){a=void 0===a?{}:a;c=void 0===c?!1:c;new $k(function(d,e){c?(window.clearTimeout(Vr.m),window.clearTimeout(Vr.i),Vr.i=0):(window.clearTimeout(Ur.m),window.clearTimeout(Ur.i),Ur.i=0);if(U("jspb_with_transport_leader")&&!Rr)document.dispatchEvent(new CustomEvent("FLUSH_REQUEST")),d();else if(Sr&&Sr.isReady())if(void 0!==b)if(c){e=new Map;var f=new Map,g=Zr.get(b)||[];e.set(b,g);U("jspb_with_transport_leader")&&(g=Yr.get(b)||[],f.set(b,g));ls(e,f,d,a);U("jspb_with_transport_leader")&&
Yr.delete(b);Zr.delete(b)}else f=new Map,g=Xr.get(b)||[],f.set(b,g),js(f,d,e,a),Xr.delete(b);else c?(ls(Zr,Yr,d,a),Zr.clear()):(js(Xr,d,e,a),Xr.clear());else hs(c),d()})}
function hs(a){a=void 0===a?!1:a;if(U("web_gel_timeout_cap")&&(!a&&!Ur.i||a&&!Vr.i)){var b=Jn(function(){cs({writeThenSend:!0},void 0,a)},6E4);
a?Vr.i=b:Ur.i=b}window.clearTimeout(a?Vr.m:Ur.m);b=T("LOGGING_BATCH_TIMEOUT",Rn("web_gel_debounce_ms",1E4));U("shorten_initial_gel_batch_timeout")&&Wr&&(b=Pr);b=Jn(function(){cs({writeThenSend:!0},void 0,a)},b);
a?Vr.m=b:Ur.m=b}
function js(a,b,c,d,e){var f=Sr;d=void 0===d?{}:d;var g=Math.round(W()),h=a.size;a=u(a);for(var k=a.next();!k.done;k=a.next()){var l=u(k.value);k=l.next().value;var n=l.next().value;l=k;k=jb({context:Go(f.config_||Fo())});k.events=n;(n=$r[l])&&ms(k,l,n);delete $r[l];l="visitorOnlyApprovedKey"===l;ns(k,g,l);os(d);n=function(){h--;h||b()};
var p=function(){h--;h||b()};
try{Vo(f,"log_event",k,ps(d,l,n,p,e)),Wr=!1}catch(r){Hn(r),c()}}}
function ls(a,b,c,d,e){var f=Sr;d=void 0===d?{}:d;var g=Math.round(W()),h=a.size+b.size,k=new Map([].concat(fa(a),fa(b)));k=u(k);for(var l=k.next();!l.done;l=k.next()){var n=u(l.value).next().value,p=a.get(n),r=b.get(n)||[];l=new vn;var q=Lo(f.config_||Fo());Pd(l,ln,1,q);p=p?qs(p):[];p=u(p);for(q=p.next();!q.done;q=p.next())Qd(l,3,qn,q.value);r=u(r);for(p=r.next();!p.done;p=r.next())Qd(l,3,qn,p.value);(r=as[n])&&rs(l,n,r);delete as[n];n="visitorOnlyApprovedKey"===n;ss(l,g,n);os(d);a:{td=!0;try{var x=
JSON.stringify(l.toJSON(),Ud);break a}finally{td=!1}x=void 0}l=x;n=ps(d,n,function(){Or.ytExports.logging.transport.leaderQueueLength=0;h--;h||c()},function(){Or.ytExports.logging.transport.leaderQueueLength=0;
h--;h||c()},e);
n.headers={"Content-Type":"application/json+protobuf"};n.postBodyFormat="JSPB";n.postBody=l;Vo(f,"log_event","",n);Wr=!1}}
function os(a){U("always_send_and_write")&&(a.writeThenSend=!1)}
function ps(a,b,c,d,e){return{retry:!0,onSuccess:c,onError:d,Zc:a,Ta:b,Gf:!!e,headers:{},postBodyFormat:"",postBody:""}}
function ns(a,b,c){a.requestTimeMs=String(b);U("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=T("EVENT_ID"))&&(c=ts(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function ss(a,b,c){I(a,2,b);if(!c&&(b=T("EVENT_ID"))){c=ts();var d=new sn;I(d,1,b);I(d,2,c);Pd(a,sn,5,d)}}
function ts(){var a=T("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*Qr/2));a++;a>Qr&&(a=1);Bn("BATCH_CLIENT_COUNTER",a);return a}
function ms(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function rs(a,b,c){if(Jd(c,1===Md(c,un)?1:-1))var d=1;else if(c.getPlaylistId())d=2;else return;Pd(a,tn,4,c);a=Nd(a,ln,1)||new ln;c=Nd(a,jn,3)||new jn;var e=new hn;e.setToken(b);I(e,1,d);Qd(c,12,hn,e);Pd(a,jn,3,c)}
function qs(a){for(var b=[],c=0;c<a.length;c++)try{b.push(new qn(a[c]))}catch(d){Hn(new bp("Transport failed to deserialize "+String(a[c])))}return b}
;var us=A.ytLoggingGelSequenceIdObj_||{};E("ytLoggingGelSequenceIdObj_",us);
function vs(a,b,c){c=void 0===c?{}:c;if(U("lr_drop_other_and_business_payloads")){if(Hr.foregroundHeartbeatScreenAssociated||Gr.foregroundHeartbeatScreenAssociated)return}else if(U("lr_drop_other_payloads")&&Hr.foregroundHeartbeatScreenAssociated)return;var d={},e=Math.round(c.timestamp||W());d.eventTimeMs=e<Number.MAX_SAFE_INTEGER?e:0;d.foregroundHeartbeatScreenAssociated=a;a=Jr();d.context={lastActivityMs:String(c.timestamp||!isFinite(a)?-1:a)};U("log_sequence_info_on_gel_web")&&c.eb&&(a=d.context,
e=c.eb,e={index:ws(e),groupKey:e},a.sequence=e,c.Pd&&delete us[c.eb]);(c.Ze?is:ds)({endpoint:"log_event",payload:d,qa:c.qa,Ta:c.Ta},b)}
function ws(a){us[a]=a in us?us[a]+1:0;return us[a]}
;var xs=Date.now().toString();var ys=A.ytLoggingGelSequenceIdObj_||{};E("ytLoggingGelSequenceIdObj_",ys);function zs(a,b,c){c=void 0===c?{}:c;var d=Math.round(c.timestamp||W());I(a,1,d<Number.MAX_SAFE_INTEGER?d:0);var e=Jr();d=new pn;I(d,1,c.timestamp||!isFinite(e)?-1:e);if(U("log_sequence_info_on_gel_web")&&c.eb){e=c.eb;var f=ws(e),g=new on;I(g,2,f);I(g,1,e);Pd(d,on,3,g);c.Pd&&delete ys[c.eb]}Pd(a,pn,33,d);(c.Ze?ks:gs)({endpoint:"log_event",payload:a,qa:c.qa,Ta:c.Ta},b)}
;function As(a,b,c){var d=new qn;vd(d);d.i||(d.i={});var e=null!=a?Ad(a,nn).Z:a;d.i[111]=a;Ld(d,111,rn,e);c?zs(d,c,b):(a=b,a=void 0===a?{}:a,b=!1,T("ytLoggingEventsDefaultDisabled",!1)&&Fr===Fr&&(b=!0),zs(d,b?null:Fr,a))}
;var Bs=A.ytLoggingDocDocumentNonce_;
if(!Bs){var Cs;a:{if(window.crypto&&window.crypto.getRandomValues)try{var Ds=Array(16),Es=new Uint8Array(16);window.crypto.getRandomValues(Es);for(var Fs=0;Fs<Ds.length;Fs++)Ds[Fs]=Es[Fs];Cs=Ds;break a}catch(a){}for(var Gs=Array(16),Hs=0;16>Hs;Hs++){for(var Is=Date.now(),Js=0;Js<Is%23;Js++)Gs[Hs]=Math.random();Gs[Hs]=Math.floor(256*Math.random())}if(xs)for(var Ks=1,Ls=0;Ls<xs.length;Ls++)Gs[Ks%16]=Gs[Ks%16]^Gs[(Ks-1)%16]/4^xs.charCodeAt(Ls),Ks++;Cs=Gs}for(var Ms=Cs,Ns=[],Os=0;Os<Ms.length;Os++)Ns.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(Ms[Os]&
63));Bs=Ns.join("");E("ytLoggingDocDocumentNonce_",Bs)}var Ps=Bs;function Qs(a){a=void 0===a?0:a;return 0===a?"client-screen-nonce":"client-screen-nonce."+a}
function Rs(a){a=void 0===a?0:a;return 0===a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
E("yt_logging_screen.getRootVeType",function(a){return T(Rs(void 0===a?0:a))});
function Ss(){var a=T("csn-to-ctt-auth-info");a||(a={},Bn("csn-to-ctt-auth-info",a));return a}
function Ts(a){a=T(Qs(void 0===a?0:a));if(!a&&!T("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
E("yt_logging_screen.getCurrentCsn",Ts);function Us(a,b,c){var d=Ss();(c=Ts(c))&&delete d[c];b&&(d[a]=b)}
E("yt_logging_screen.getCttAuthInfo",function(a){return Ss()[a]});
E("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=void 0===c?0:c;if(a!==T(Qs(c))||b!==T(Rs(c)))Us(a,d,c),Bn(Qs(c),a),Bn(Rs(c),b),b=function(){setTimeout(function(){if(a)if(U("web_time_via_jspb")){var e=new nn;I(e,1,Ps);I(e,2,a);U("use_default_heartbeat_client")?As(e):As(e,void 0,Fr)}else if(e={clientDocumentNonce:Ps,clientScreenNonce:a},U("use_default_heartbeat_client")){var f=void 0===f?{}:f;var g=Fr;T("ytLoggingEventsDefaultDisabled",!1)&&Fr==Fr&&(g=null);vs(e,g,f)}else vs(e,Fr)},0)},"requestAnimationFrame"in
window?window.requestAnimationFrame(b):b()});function Vs(a,b,c){for(var d=0,e=0;e<a.length;++e)d=31*d+a.charCodeAt(e)>>>0;a="ST-"+d.toString(36);b=b?zc(b):"";c=c||5;fo()&&Tn(a,b,c)}
;function Ws(a,b,c,d,e){if(a&&e){var f=T("SBOX_SETTINGS"),g=T("SBOX_LABELS");f&&g&&(a=B("searchbox.yt.install")(a,b,c,f,g,Xs,d))&&e(a,100)}}
function Ys(a,b){var c=T("EVENT_ID");if(c){b.ei=c;c=(c=document.getElementById("masthead-search"))?c.dataset?c.dataset[Dn()]:c.getAttribute("data-clicktracking"):null;b.ved=c||"";var d=void 0===d?!0:d;c=T("VALID_SESSION_TEMPDATA_DOMAINS",[]);var e=xc(window.location.href);e&&c.push(e);e=xc(a);if(0<=Xa(c,e)||!e&&0==a.lastIndexOf("/",0))if(U("autoescape_tempdata_url")&&(c=document.createElement("a"),tc(c,a),a=c.href),a){e=a.match(vc);a=e[5];c=e[6];e=e[7];var f="";a&&(f+=a);c&&(f+="?"+c);e&&(f+="#"+
e);a=f;c=a.indexOf("#");if(a=0>c?a:a.slice(0,c))if(d&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:Ts()},b)),g){var g=parseInt(g,10);isFinite(g)&&0<g&&Vs(a,b,g)}else Vs(a,b)}}}
function Xs(a,b){Ys(a,b?{feature:b}:{});b=B("yt.window.navigate");try{b(a)}catch(g){var c=void 0===c?{}:c;var d=void 0===d?"":d;var e=void 0===e?window:e;e=e.location;a=Ac(a,c)+d;var f=void 0===f?be:f;a:{f=void 0===f?be:f;for(c=0;c<f.length;++c)if(d=f[c],d instanceof $d&&d.isValid(a)){f=Nb(a);break a}f=void 0}e.href=Jb(f||Ob)}}
function Zs(a){for(var b=document.getElementById("masthead-search"),c=[],d=b.elements,e,f=0;e=d.item(f);f++)if(e.form==b&&!e.disabled&&"FIELDSET"!=e.tagName){var g=e.name;switch(e.type.toLowerCase()){case "file":case "submit":case "reset":case "button":break;case "select-multiple":e=Am(e);if(null!=e)for(var h,k=0;h=e[k];k++)zm(c,g,h);break;default:h=Am(e),null!=h&&zm(c,g,h)}}d=b.getElementsByTagName("INPUT");for(f=0;e=d[f];f++)e.form==b&&"image"==e.type.toLowerCase()&&(g=e.name,zm(c,g,e.value),zm(c,
g+".x","0"),zm(c,g+".y","0"));c=c.join("&").replace(/%20/g,"+");b=b.action+"?"+c;Ys(b,a);a=!!T("SPF_SEARCH_BOX");if(!B("ytspf.enabled")||!a)return!0;a=B("yt.window.navigate");try{a(b)}catch(l){return!0}return!1}
;E("searchbox.yt.install",function(a,b,c,d,e,f,g){Lh||(Lh=new im);Lh.install(a,b,c,d,e,f,g)});
E("yt.www.masthead.searchbox.init",function(){var a=document.getElementById("masthead-search"),b=a.search_query,c=document.getElementById("search-btn");Ws(a,b,c,Zs,window.setTimeout)});
E("yt.www.masthead.searchbox.initPolymer",function(a,b,c,d){Ws(a,b,c,d,hf.ka)});}).call(this);