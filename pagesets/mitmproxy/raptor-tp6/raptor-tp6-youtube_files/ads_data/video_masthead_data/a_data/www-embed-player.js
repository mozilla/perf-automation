(function(){var k,aa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ba;
if("function"==typeof Object.setPrototypeOf)ba=Object.setPrototypeOf;else{var da;a:{var fa={wa:!0},ha={};try{ha.__proto__=fa;da=ha.wa;break a}catch(a){}da=!1}ba=da?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ia=ba;
function n(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(ia)ia(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.w=b.prototype}
var ja="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ka="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function la(){la=function(){};
ka.Symbol||(ka.Symbol=ma)}
var ma=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
function na(){la();var a=ka.Symbol.iterator;a||(a=ka.Symbol.iterator=ka.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&ja(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return oa(this)}});
na=function(){}}
function oa(a){var b=0;return pa(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}
function pa(a){na();a={next:a};a[ka.Symbol.iterator]=function(){return this};
return a}
function qa(a){na();var b=a[Symbol.iterator];return b?b.call(a):oa(a)}
function ra(a,b){if(b){for(var c=ka,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ja(c,d,{configurable:!0,writable:!0,value:f})}}
function sa(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ta="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)sa(d,e)&&(a[e]=d[e])}return a};
ra("Object.assign",function(a){return a||ta});
ra("WeakMap",function(a){function b(a){this.b=(f+=Math.random()+1).toString();if(a){la();na();a=qa(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}}
function c(a){sa(a,e)||ja(a,e,{value:{}})}
function d(a){var b=Object[a];b&&(Object[a]=function(a){c(a);return b(a)})}
if(function(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),c=Object.seal({}),d=new a([[b,2],[c,3]]);if(2!=d.get(b)||3!=d.get(c))return!1;d["delete"](b);d.set(c,4);return!d.has(b)&&4==d.get(c)}catch(m){return!1}}())return a;
var e="$jscomp_hidden_"+Math.random();d("freeze");d("preventExtensions");d("seal");var f=0;b.prototype.set=function(a,b){c(a);if(!sa(a,e))throw Error("WeakMap key fail: "+a);a[e][this.b]=b;return this};
b.prototype.get=function(a){return sa(a,e)?a[e][this.b]:void 0};
b.prototype.has=function(a){return sa(a,e)&&sa(a[e],this.b)};
b.prototype["delete"]=function(a){return sa(a,e)&&sa(a[e],this.b)?delete a[e][this.b]:!1};
return b});
ra("Map",function(a){function b(){var a={};return a.previous=a.next=a.head=a}
function c(a,b){var c=a.b;return pa(function(){if(c){for(;c.head!=a.b;)c=c.previous;for(;c.next!=c.head;)return c=c.next,{done:!1,value:b(c)};c=null}return{done:!0,value:void 0}})}
function d(a,b){var c=b&&typeof b;"object"==c||"function"==c?f.has(b)?c=f.get(b):(c=""+ ++g,f.set(b,c)):c="p_"+b;var d=a.f[c];if(d&&sa(a.f,c))for(var e=0;e<d.length;e++){var h=d[e];if(b!==b&&h.key!==h.key||b===h.key)return{id:c,list:d,index:e,o:h}}return{id:c,list:d,index:-1,o:void 0}}
function e(a){this.f={};this.b=b();this.size=0;if(a){a=qa(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a(qa([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var d=c.entries(),e=d.next();if(e.done||e.value[0]!=b||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||"t"!=e.value[1]||!d.next().done?!1:!0}catch(ca){return!1}}())return a;
la();na();var f=new WeakMap;e.prototype.set=function(a,b){a=0===a?0:a;var c=d(this,a);c.list||(c.list=this.f[c.id]=[]);c.o?c.o.value=b:(c.o={next:this.b,previous:this.b.previous,head:this.b,key:a,value:b},c.list.push(c.o),this.b.previous.next=c.o,this.b.previous=c.o,this.size++);return this};
e.prototype["delete"]=function(a){a=d(this,a);return a.o&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.f[a.id],a.o.previous.next=a.o.next,a.o.next.previous=a.o.previous,a.o.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.f={};this.b=this.b.previous=b();this.size=0};
e.prototype.has=function(a){return!!d(this,a).o};
e.prototype.get=function(a){return(a=d(this,a).o)&&a.value};
e.prototype.entries=function(){return c(this,function(a){return[a.key,a.value]})};
e.prototype.keys=function(){return c(this,function(a){return a.key})};
e.prototype.values=function(){return c(this,function(a){return a.value})};
e.prototype.forEach=function(a,b){for(var c=this.entries(),d;!(d=c.next()).done;)d=d.value,a.call(b,d[1],d[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
ra("Set",function(a){function b(a){this.b=new Map;if(a){a=qa(a);for(var b;!(b=a.next()).done;)this.add(b.value)}this.size=this.b.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),d=new a(qa([b]));if(!d.has(b)||1!=d.size||d.add(b)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=b||f.value[1]!=b)return!1;f=e.next();return f.done||f.value[0]==b||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
la();na();b.prototype.add=function(a){a=0===a?0:a;this.b.set(a,a);this.size=this.b.size;return this};
b.prototype["delete"]=function(a){a=this.b["delete"](a);this.size=this.b.size;return a};
b.prototype.clear=function(){this.b.clear();this.size=0};
b.prototype.has=function(a){return this.b.has(a)};
b.prototype.entries=function(){return this.b.entries()};
b.prototype.values=function(){return this.b.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(a,b){var c=this;this.b.forEach(function(d){return a.call(b,d,d,c)})};
return b});
ra("Object.is",function(a){return a?a:function(a,c){return a===c?0!==a||1/a===1/c:a!==a&&c!==c}});
ra("String.prototype.includes",function(a){return a?a:function(a,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(a instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return-1!==(this+"").indexOf(a,c||0)}});
(function(){function a(){function a(){}
Reflect.construct(a,[],function(){});
return new a instanceof a}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(a,d,e){a=b(a,d);e&&Reflect.setPrototypeOf(a,e.prototype);return a}}return function(a,b,e){void 0===e&&(e=a);
e=aa(e.prototype||Object.prototype);return Function.prototype.apply.call(a,e,b)||e}})();
var p=this;function q(a){return void 0!==a}
function r(a){return"string"==typeof a}
function ua(a){return"boolean"==typeof a}
function va(a){return"number"==typeof a}
function u(a,b,c){a=a.split(".");c=c||p;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&q(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}}
function wa(){if(null===xa){a:{var a=p.document;if((a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&ya.test(a))break a;a=null}xa=a||""}return xa}
var ya=/^[\w+/_-]+[=]{0,2}$/,xa=null;function v(a,b){for(var c=a.split("."),d=b||p,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function za(){}
function Aa(a){a.ga=void 0;a.getInstance=function(){return a.ga?a.ga:a.ga=new a}}
function Ba(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function w(a){return"array"==Ba(a)}
function Ca(a){var b=Ba(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Da(a){return"function"==Ba(a)}
function Ea(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
var Fa="closure_uid_"+(1E9*Math.random()>>>0),Ga=0;function Ha(a,b,c){return a.call.apply(a.bind,arguments)}
function Ia(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function x(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?x=Ha:x=Ia;return x.apply(null,arguments)}
function y(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var z=Date.now||function(){return+new Date};
function Ka(a,b){u(a,b,void 0)}
function A(a,b){function c(){}
c.prototype=b.prototype;a.w=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.qb=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;var La=document,B=window;function C(a){if(Error.captureStackTrace)Error.captureStackTrace(this,C);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
A(C,Error);C.prototype.name="CustomError";var Na=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(r(a))return r(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},D=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=r(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Oa=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=r(a)?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Pa=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=r(a)?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Qa=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
D(a,function(c,f){d=b.call(void 0,d,c,f,a)});
return d};
function Ra(a,b){a:{var c=a.length;for(var d=r(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:r(a)?a.charAt(c):a[c]}
function Sa(a,b){var c=Na(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
function Ta(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Ua(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ca(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;var Va=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Wa(a){if(!Xa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(Ya,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(Za,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace($a,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(ab,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(bb,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(cb,"&#0;"));return a}
var Ya=/&/g,Za=/</g,$a=/>/g,ab=/"/g,bb=/'/g,cb=/\x00/g,Xa=/[\x00&<>"']/;function db(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var fb;a:{var gb=p.navigator;if(gb){var hb=gb.userAgent;if(hb){fb=hb;break a}}fb=""}function E(a){return-1!=fb.indexOf(a)}
;function ib(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function jb(a,b){var c=Ca(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a}
function kb(a){var b=lb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function mb(a){for(var b in a)return!1;return!0}
function nb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function ob(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(c in b)if(!(c in a))return!1;return!0}
function pb(a){var b={},c;for(c in a)b[c]=a[c];return b}
var qb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function rb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<qb.length;f++)c=qb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function sb(a){sb[" "](a);return a}
sb[" "]=za;var tb=E("Opera"),ub=E("Trident")||E("MSIE"),vb=E("Edge"),wb=E("Gecko")&&!(-1!=fb.toLowerCase().indexOf("webkit")&&!E("Edge"))&&!(E("Trident")||E("MSIE"))&&!E("Edge"),xb=-1!=fb.toLowerCase().indexOf("webkit")&&!E("Edge");function yb(){var a=p.document;return a?a.documentMode:void 0}
var zb;a:{var Ab="",Bb=function(){var a=fb;if(wb)return/rv:([^\);]+)(\)|;)/.exec(a);if(vb)return/Edge\/([\d\.]+)/.exec(a);if(ub)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(xb)return/WebKit\/(\S+)/.exec(a);if(tb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Bb&&(Ab=Bb?Bb[1]:"");if(ub){var Cb=yb();if(null!=Cb&&Cb>parseFloat(Ab)){zb=String(Cb);break a}}zb=Ab}var Db=zb,Eb;var Fb=p.document;Eb=Fb&&ub?yb()||("CSS1Compat"==Fb.compatMode?parseInt(Db,10):5):void 0;var Gb=null,Hb=null;function Ib(a){this.b=a||{cookie:""}}
k=Ib.prototype;k.isEnabled=function(){return navigator.cookieEnabled};
k.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');q(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(z()+1E3*c)).toUTCString();this.b.cookie=a+"="+b+e+d+c+f};
k.get=function(a,b){for(var c=a+"=",d=(this.b.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Va(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
k.remove=function(a,b,c){var d=q(this.get(a));this.set(a,"",0,b,c);return d};
k.isEmpty=function(){return!this.b.cookie};
k.clear=function(){for(var a=(this.b.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=Va(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Jb=new Ib("undefined"==typeof document?null:document);Jb.f=3950;function Kb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var Lb=!ub||9<=Number(Eb);function Mb(){this.b="";this.f=Nb}
Mb.prototype.J=!0;Mb.prototype.I=function(){return this.b};
Mb.prototype.fa=!0;Mb.prototype.ba=function(){return 1};
function Ob(a){return a instanceof Mb&&a.constructor===Mb&&a.f===Nb?a.b:"type_error:TrustedResourceUrl"}
var Nb={};function F(){this.b="";this.f=Pb}
F.prototype.J=!0;F.prototype.I=function(){return this.b};
F.prototype.fa=!0;F.prototype.ba=function(){return 1};
function Qb(a){return a instanceof F&&a.constructor===F&&a.f===Pb?a.b:"type_error:SafeUrl"}
var Rb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Sb(a){if(a instanceof F)return a;a=a.J?a.I():String(a);Rb.test(a)||(a="about:invalid#zClosurez");return Tb(a)}
var Pb={};function Tb(a){var b=new F;b.b=a;return b}
Tb("about:blank");function Ub(){this.b="";this.g=Vb;this.f=null}
Ub.prototype.fa=!0;Ub.prototype.ba=function(){return this.f};
Ub.prototype.J=!0;Ub.prototype.I=function(){return this.b};
var Vb={};function Wb(a,b){var c=new Ub;c.b=a;c.f=b;return c}
Wb("<!DOCTYPE html>",0);Wb("",0);Wb("<br>",0);function Xb(a,b){var c=b instanceof F?b:Sb(b);a.href=Qb(c)}
function Yb(a,b,c){a.rel=c;a.href=-1!=c.toLowerCase().indexOf("stylesheet")?Ob(b):b instanceof Mb?Ob(b):b instanceof F?Qb(b):Sb(b).I()}
function Zb(a,b){a.src=Ob(b);var c=wa();c&&a.setAttribute("nonce",c)}
;function $b(a,b){this.x=q(a)?a:0;this.y=q(b)?b:0}
k=$b.prototype;k.clone=function(){return new $b(this.x,this.y)};
k.equals=function(a){return a instanceof $b&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
k.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
k.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
k.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function ac(a,b){this.width=a;this.height=b}
k=ac.prototype;k.clone=function(){return new ac(this.width,this.height)};
k.aspectRatio=function(){return this.width/this.height};
k.isEmpty=function(){return!(this.width*this.height)};
k.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
k.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
k.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function bc(a){var b=document;return r(a)?b.getElementById(a):a}
function cc(a,b){ib(b,function(b,d){b&&b.J&&(b=b.I());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:dc.hasOwnProperty(d)?a.setAttribute(dc[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}
var dc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function ec(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!Lb&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Wa(g.name),'"');if(g.type){f.push(' type="',Wa(g.type),'"');var h={};rb(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=e.createElement(f);g&&(r(g)?f.className=g:w(g)?f.className=g.join(" "):cc(f,g));2<d.length&&fc(e,f,d);return f}
function fc(a,b,c){function d(c){c&&b.appendChild(r(c)?a.createTextNode(c):c)}
for(var e=2;e<c.length;e++){var f=c[e];if(!Ca(f)||Ea(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(Ea(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if(Da(f)){g="function"==typeof f.item;break a}}g=!1}D(g?Ta(f):f,d)}}}
function gc(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function hc(a){ic();var b=new Mb;b.b=a;return b}
var ic=za;function jc(){var a=kc;try{var b;if(b=!!a&&null!=a.location.href)a:{try{sb(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}}
function lc(a){var b=mc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function nc(){var a=[];lc(function(b){a.push(b)});
return a}
var mc={eb:"allow-forms",fb:"allow-modals",gb:"allow-orientation-lock",hb:"allow-pointer-lock",ib:"allow-popups",jb:"allow-popups-to-escape-sandbox",kb:"allow-presentation",lb:"allow-same-origin",mb:"allow-scripts",nb:"allow-top-navigation",ob:"allow-top-navigation-by-user-activation"},oc=Kb(function(){return nc()});
function pc(){var a=document.createElement("IFRAME").sandbox,b=a&&a.supports;if(!b)return{};var c={};D(oc(),function(d){b.call(a,d)&&(c[d]=!0)});
return c}
;function qc(a,b,c){a.addEventListener&&a.addEventListener(b,c,void 0)}
;function rc(a){var b=!1,c=!1;c=void 0===c?!1:c;b=void 0===b?!1:b;p.google_image_requests||(p.google_image_requests=[]);var d=p.document.createElement("img");if(b){var e=function(){b&&Sa(p.google_image_requests,d);d.removeEventListener&&d.removeEventListener("load",e,void 0);d.removeEventListener&&d.removeEventListener("error",e,void 0)};
qc(d,"load",e);qc(d,"error",e)}c&&(d.referrerPolicy="no-referrer");d.src=a;p.google_image_requests.push(d)}
;function sc(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var tc=!!window.google_async_iframe_id,kc=tc&&window.parent||window;var uc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function G(a){return a.match(uc)}
function vc(a){return a?decodeURI(a):a}
function wc(a,b,c){if(w(b))for(var d=0;d<b.length;d++)wc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function xc(a){var b=[],c;for(c in a)wc(c,a[c],b);return b.join("&")}
function yc(a,b){var c=xc(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
;var zc=null;function Ac(){var a=p.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):z()}
function Bc(){var a=void 0===a?p:a;return(a=a.performance)&&a.now?a.now():null}
;function Cc(a,b,c){this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=this.label+"_"+this.type+"_"+Math.random();this.slotId=void 0}
;var H=p.performance,Dc=!!(H&&H.mark&&H.measure&&H.clearMarks),Ec=Kb(function(){var a;if(a=Dc){var b;if(null===zc){zc="";try{a="";try{a=p.top.location.hash}catch(c){a=p.location.hash}a&&(zc=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=zc;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});
function Fc(){var a=Gc;this.events=[];this.f=a||p;var b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.events=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.b=Ec()||(null!=b?b:1>Math.random())}
Fc.prototype.disable=function(){this.b=!1;this.events!=this.f.google_js_reporting_queue&&(Ec()&&D(this.events,Hc),this.events.length=0)};
function Hc(a){a&&H&&Ec()&&(H.clearMarks("goog_"+a.uniqueId+"_start"),H.clearMarks("goog_"+a.uniqueId+"_end"))}
Fc.prototype.start=function(a,b){if(!this.b)return null;var c=Bc()||Ac();c=new Cc(a,b,c);var d="goog_"+c.uniqueId+"_start";H&&Ec()&&H.mark(d);return c};
Fc.prototype.end=function(a){if(this.b&&va(a.value)){var b=Bc()||Ac();a.duration=b-a.value;b="goog_"+a.uniqueId+"_end";H&&Ec()&&H.mark(b);this.b&&this.events.push(a)}};if(tc&&!jc()){var Ic="."+La.domain;try{for(;2<Ic.split(".").length&&!jc();)La.domain=Ic=Ic.substr(Ic.indexOf(".")+1),kc=window.parent}catch(a){}jc()||(kc=window)}var Gc=kc,Jc=new Fc;"complete"==Gc.document.readyState?Gc.google_measure_js_timing||Jc.disable():Jc.b&&qc(Gc,"load",function(){Gc.google_measure_js_timing||Jc.disable()});var Kc=(new Date).getTime();function Lc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function Mc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;t=m=0}
function b(a){for(var b=g,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];var d=e[1],f=e[2],h=e[3],l=e[4];for(c=0;80>c;c++){if(40>c)if(20>c){var m=h^d&(f^h);var t=1518500249}else m=d^f^h,t=1859775393;else 60>c?(m=d&f|h&(d|f),t=2400959708):(m=d^f^h,t=3395469782);m=((a<<5|a>>>27)&4294967295)+m+l+t+b[c]&4294967295;l=h;h=f;f=(d<<30|d>>>2)&4294967295;d=a;a=m}e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=
e[2]+f&4294967295;e[3]=e[3]+h&4294967295;e[4]=e[4]+l&4294967295}
function c(a,c){if("string"===typeof a){a=unescape(encodeURIComponent(a));for(var d=[],e=0,g=a.length;e<g;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==m)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,t+=64;for(;d<c;)if(f[m++]=a[d++],t++,64==m)for(m=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,t+=64}
function d(){var a=[],d=8*t;56>m?c(h,56-m):c(h,64-(m-56));for(var g=63;56<=g;g--)f[g]=d&255,d>>>=8;b(f);for(g=d=0;5>g;g++)for(var l=24;0<=l;l-=8)a[d++]=e[g]>>l&255;return a}
for(var e=[],f=[],g=[],h=[128],l=1;64>l;++l)h[l]=0;var m,t;a();return{reset:a,update:c,digest:d,ya:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}}
;function Nc(a,b,c){var d=[],e=[];if(1==(w(c)?2:1))return e=[b,a],D(d,function(a){e.push(a)}),Oc(e.join(" "));
var f=[],g=[];D(c,function(a){g.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];D(d,function(a){e.push(a)});
a=Oc(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Oc(a){var b=Mc();b.update(a);return b.ya().toLowerCase()}
;function Pc(a){var b=Lc(String(p.location.href)),c=p.__OVERRIDE_SID;null==c&&(c=(new Ib(document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?p.__SAPISID:p.__APISID,null==b&&(b=(new Ib(document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(p.location.href);return d&&b&&c?[c,Nc(Lc(d),b,a||null)].join(" "):null}return null}
;function Qc(a,b){this.g=a;this.h=b;this.f=0;this.b=null}
Qc.prototype.get=function(){if(0<this.f){this.f--;var a=this.b;this.b=a.next;a.next=null}else a=this.g();return a};
function Rc(a,b){a.h(b);100>a.f&&(a.f++,b.next=a.b,a.b=b)}
;function Sc(a){p.setTimeout(function(){throw a;},0)}
var Tc;
function Uc(){var a=p.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!E("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=x(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!E("Trident")&&!E("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(q(c.next)){c=c.next;var a=c.ma;c.ma=null;a()}};
return function(a){d.next={ma:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){p.setTimeout(a,0)}}
;function Vc(){this.f=this.b=null}
var Xc=new Qc(function(){return new Wc},function(a){a.reset()});
Vc.prototype.add=function(a,b){var c=Xc.get();c.set(a,b);this.f?this.f.next=c:this.b=c;this.f=c};
Vc.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function Wc(){this.next=this.scope=this.b=null}
Wc.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
Wc.prototype.reset=function(){this.next=this.scope=this.b=null};function Yc(a,b){Zc||$c();ad||(Zc(),ad=!0);bd.add(a,b)}
var Zc;function $c(){if(p.Promise&&p.Promise.resolve){var a=p.Promise.resolve(void 0);Zc=function(){a.then(cd)}}else Zc=function(){var a=cd;
!Da(p.setImmediate)||p.Window&&p.Window.prototype&&!E("Edge")&&p.Window.prototype.setImmediate==p.setImmediate?(Tc||(Tc=Uc()),Tc(a)):p.setImmediate(a)}}
var ad=!1,bd=new Vc;function cd(){for(var a;a=bd.remove();){try{a.b.call(a.scope)}catch(b){Sc(b)}Rc(Xc,a)}ad=!1}
;function dd(){this.f=-1}
;function ed(){this.f=64;this.b=[];this.j=[];this.l=[];this.h=[];this.h[0]=128;for(var a=1;a<this.f;++a)this.h[a]=0;this.i=this.g=0;this.reset()}
A(ed,dd);ed.prototype.reset=function(){this.b[0]=1732584193;this.b[1]=4023233417;this.b[2]=2562383102;this.b[3]=271733878;this.b[4]=3285377520;this.i=this.g=0};
function fd(a,b,c){c||(c=0);var d=a.l;if(r(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.b[0];c=a.b[1];var g=a.b[2],h=a.b[3],l=a.b[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var m=1518500249}else f=c^g^h,m=1859775393;else 60>e?(f=c&g|h&(c|g),m=2400959708):(f=c^g^h,m=
3395469782);f=(b<<5|b>>>27)+f+l+m+d[e]&4294967295;l=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.b[0]=a.b[0]+b&4294967295;a.b[1]=a.b[1]+c&4294967295;a.b[2]=a.b[2]+g&4294967295;a.b[3]=a.b[3]+h&4294967295;a.b[4]=a.b[4]+l&4294967295}
ed.prototype.update=function(a,b){if(null!=a){q(b)||(b=a.length);for(var c=b-this.f,d=0,e=this.j,f=this.g;d<b;){if(0==f)for(;d<=c;)fd(this,a,d),d+=this.f;if(r(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.f){fd(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.f){fd(this,e);f=0;break}}this.g=f;this.i+=b}};
ed.prototype.digest=function(){var a=[],b=8*this.i;56>this.g?this.update(this.h,56-this.g):this.update(this.h,this.f-(this.g-56));for(var c=this.f-1;56<=c;c--)this.j[c]=b&255,b/=256;fd(this,this.j);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.b[c]>>d&255,++b;return a};function I(){this.g=this.g;this.C=this.C}
I.prototype.g=!1;I.prototype.dispose=function(){this.g||(this.g=!0,this.m())};
function gd(a,b){a.g?q(void 0)?b.call(void 0):b():(a.C||(a.C=[]),a.C.push(q(void 0)?x(b,void 0):b))}
I.prototype.m=function(){if(this.C)for(;this.C.length;)this.C.shift()()};
function hd(a){a&&"function"==typeof a.dispose&&a.dispose()}
function id(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Ca(d)?id.apply(null,d):hd(d)}}
;function jd(a){if(a.classList)return a.classList;a=a.className;return r(a)&&a.match(/\S+/g)||[]}
function kd(a,b){if(a.classList)var c=a.classList.contains(b);else c=jd(a),c=0<=Na(c,b);return c}
function ld(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):kd(a,"inverted-hdpi")&&(a.className=Oa(jd(a),function(a){return"inverted-hdpi"!=a}).join(" "))}
;var md="StopIteration"in p?p.StopIteration:{message:"StopIteration",stack:""};function nd(){}
nd.prototype.next=function(){throw md;};
nd.prototype.F=function(){return this};
function od(a){if(a instanceof nd)return a;if("function"==typeof a.F)return a.F(!1);if(Ca(a)){var b=0,c=new nd;c.next=function(){for(;;){if(b>=a.length)throw md;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function pd(a,b){if(Ca(a))try{D(a,b,void 0)}catch(c){if(c!==md)throw c;}else{a=od(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==md)throw c;}}}
function qd(a){if(Ca(a))return Ta(a);a=od(a);var b=[];pd(a,function(a){b.push(a)});
return b}
;function rd(a,b){this.g={};this.b=[];this.h=this.f=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof rd)for(c=sd(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function sd(a){td(a);return a.b.concat()}
k=rd.prototype;k.equals=function(a,b){if(this===a)return!0;if(this.f!=a.f)return!1;var c=b||ud;td(this);for(var d,e=0;d=this.b[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function ud(a,b){return a===b}
k.isEmpty=function(){return 0==this.f};
k.clear=function(){this.g={};this.h=this.f=this.b.length=0};
k.remove=function(a){return Object.prototype.hasOwnProperty.call(this.g,a)?(delete this.g[a],this.f--,this.h++,this.b.length>2*this.f&&td(this),!0):!1};
function td(a){if(a.f!=a.b.length){for(var b=0,c=0;b<a.b.length;){var d=a.b[b];Object.prototype.hasOwnProperty.call(a.g,d)&&(a.b[c++]=d);b++}a.b.length=c}if(a.f!=a.b.length){var e={};for(c=b=0;b<a.b.length;)d=a.b[b],Object.prototype.hasOwnProperty.call(e,d)||(a.b[c++]=d,e[d]=1),b++;a.b.length=c}}
k.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.g,a)?this.g[a]:b};
k.set=function(a,b){Object.prototype.hasOwnProperty.call(this.g,a)||(this.f++,this.b.push(a),this.h++);this.g[a]=b};
k.forEach=function(a,b){for(var c=sd(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
k.clone=function(){return new rd(this)};
k.F=function(a){td(this);var b=0,c=this.h,d=this,e=new nd;e.next=function(){if(c!=d.h)throw Error("The map has changed since the iterator was created");if(b>=d.b.length)throw md;var e=d.b[b++];return a?e:d.g[e]};
return e};function vd(a){var b=[];wd(new xd,a,b);return b.join("")}
function xd(){}
function wd(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(w(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),wd(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),yd(d,c),c.push(":"),wd(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":yd(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var zd={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Ad=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function yd(a,b){b.push('"',a.replace(Ad,function(a){var b=zd[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),zd[a]=b);return b}),'"')}
;function Bd(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0}
function Cd(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function J(a,b){this.b=0;this.l=void 0;this.h=this.f=this.g=null;this.i=this.j=!1;if(a!=za)try{var c=this;a.call(b,function(a){Dd(c,2,a)},function(a){Dd(c,3,a)})}catch(d){Dd(this,3,d)}}
function Ed(){this.next=this.context=this.onRejected=this.g=this.b=null;this.f=!1}
Ed.prototype.reset=function(){this.context=this.onRejected=this.g=this.b=null;this.f=!1};
var Fd=new Qc(function(){return new Ed},function(a){a.reset()});
function Gd(a,b,c){var d=Fd.get();d.g=a;d.onRejected=b;d.context=c;return d}
function Hd(a){return new J(function(b,c){c(a)})}
function Id(a,b,c){Jd(a,b,c,null)||Yc(y(b,a))}
function Kd(a){return new J(function(b,c){a.length||b(void 0);for(var d=0,e;d<a.length;d++)e=a[d],Id(e,b,c)})}
function Ld(a){return new J(function(b){var c=a.length,d=[];if(c)for(var e=function(a,e,f){c--;d[a]=e?{aa:!0,value:f}:{aa:!1,reason:f};0==c&&b(d)},f=0,g;f<a.length;f++)g=a[f],Id(g,y(e,f,!0),y(e,f,!1));
else b(d)})}
J.prototype.then=function(a,b,c){return Md(this,Da(a)?a:null,Da(b)?b:null,c)};
Bd(J);function Nd(a,b){var c=Gd(b,b,void 0);c.f=!0;Od(a,c);return a}
function Pd(a,b){return Md(a,null,b,void 0)}
J.prototype.cancel=function(a){0==this.b&&Yc(function(){var b=new Qd(a);Rd(this,b)},this)};
function Rd(a,b){if(0==a.b)if(a.g){var c=a.g;if(c.f){for(var d=0,e=null,f=null,g=c.f;g&&(g.f||(d++,g.b==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.b&&1==d?Rd(c,b):(f?(d=f,d.next==c.h&&(c.h=d),d.next=d.next.next):Sd(c),Td(c,e,3,b)))}a.g=null}else Dd(a,3,b)}
function Od(a,b){a.f||2!=a.b&&3!=a.b||Ud(a);a.h?a.h.next=b:a.f=b;a.h=b}
function Md(a,b,c,d){var e=Gd(null,null,null);e.b=new J(function(a,g){e.g=b?function(c){try{var e=b.call(d,c);a(e)}catch(m){g(m)}}:a;
e.onRejected=c?function(b){try{var e=c.call(d,b);!q(e)&&b instanceof Qd?g(b):a(e)}catch(m){g(m)}}:g});
e.b.g=a;Od(a,e);return e.b}
J.prototype.u=function(a){this.b=0;Dd(this,2,a)};
J.prototype.A=function(a){this.b=0;Dd(this,3,a)};
function Dd(a,b,c){0==a.b&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.b=1,Jd(c,a.u,a.A,a)||(a.l=c,a.b=b,a.g=null,Ud(a),3!=b||c instanceof Qd||Vd(a,c)))}
function Jd(a,b,c,d){if(a instanceof J)return Od(a,Gd(b||za,c||null,d)),!0;if(Cd(a))return a.then(b,c,d),!0;if(Ea(a))try{var e=a.then;if(Da(e))return Wd(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1}
function Wd(a,b,c,d,e){function f(a){h||(h=!0,d.call(e,a))}
function g(a){h||(h=!0,c.call(e,a))}
var h=!1;try{b.call(a,g,f)}catch(l){f(l)}}
function Ud(a){a.j||(a.j=!0,Yc(a.C,a))}
function Sd(a){var b=null;a.f&&(b=a.f,a.f=b.next,b.next=null);a.f||(a.h=null);return b}
J.prototype.C=function(){for(var a;a=Sd(this);)Td(this,a,this.b,this.l);this.j=!1};
function Td(a,b,c,d){if(3==c&&b.onRejected&&!b.f)for(;a&&a.i;a=a.g)a.i=!1;if(b.b)b.b.g=null,Xd(b,c,d);else try{b.f?b.g.call(b.context):Xd(b,c,d)}catch(e){Yd.call(null,e)}Rc(Fd,b)}
function Xd(a,b,c){2==b?a.g.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Vd(a,b){a.i=!0;Yc(function(){a.i&&Yd.call(null,b)})}
var Yd=Sc;function Qd(a){C.call(this,a)}
A(Qd,C);Qd.prototype.name="cancel";function K(a){I.call(this);this.j=1;this.h=[];this.i=0;this.b=[];this.f={};this.l=!!a}
A(K,I);k=K.prototype;k.subscribe=function(a,b,c){var d=this.f[a];d||(d=this.f[a]=[]);var e=this.j;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.j=e+3;d.push(e);return e};
function Zd(a,b,c,d){if(b=a.f[b]){var e=a.b;(b=Ra(b,function(a){return e[a+1]==c&&e[a+2]==d}))&&a.L(b)}}
k.L=function(a){var b=this.b[a];if(b){var c=this.f[b];0!=this.i?(this.h.push(a),this.b[a+1]=za):(c&&Sa(c,a),delete this.b[a],delete this.b[a+1],delete this.b[a+2])}return!!b};
k.K=function(a,b){var c=this.f[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.l)for(e=0;e<c.length;e++){var g=c[e];$d(this.b[g+1],this.b[g+2],d)}else{this.i++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.i--,0<this.h.length&&0==this.i)for(;c=this.h.pop();)this.L(c)}}return 0!=e}return!1};
function $d(a,b,c){Yc(function(){a.apply(b,c)})}
k.clear=function(a){if(a){var b=this.f[a];b&&(D(b,this.L,this),delete this.f[a])}else this.b.length=0,this.f={}};
k.m=function(){K.w.m.call(this);this.clear();this.h.length=0};function ae(a){this.b=a}
ae.prototype.set=function(a,b){q(b)?this.b.set(a,vd(b)):this.b.remove(a)};
ae.prototype.get=function(a){try{var b=this.b.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
ae.prototype.remove=function(a){this.b.remove(a)};function be(a){this.b=a}
A(be,ae);function ce(a){this.data=a}
function de(a){return!q(a)||a instanceof ce?a:new ce(a)}
be.prototype.set=function(a,b){be.w.set.call(this,a,de(b))};
be.prototype.f=function(a){a=be.w.get.call(this,a);if(!q(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
be.prototype.get=function(a){if(a=this.f(a)){if(a=a.data,!q(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function ee(a){this.b=a}
A(ee,be);ee.prototype.set=function(a,b,c){if(b=de(b)){if(c){if(c<z()){ee.prototype.remove.call(this,a);return}b.expiration=c}b.creation=z()}ee.w.set.call(this,a,b)};
ee.prototype.f=function(a){var b=ee.w.f.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<z()||c&&c>z())ee.prototype.remove.call(this,a);else return b}};function fe(a){this.b=a}
A(fe,ee);function ge(){}
;function he(){}
A(he,ge);he.prototype.clear=function(){var a=qd(this.F(!0)),b=this;D(a,function(a){b.remove(a)})};function ie(a){this.b=a}
A(ie,he);k=ie.prototype;k.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
k.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
k.get=function(a){a=this.b.getItem(a);if(!r(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
k.remove=function(a){this.b.removeItem(a)};
k.F=function(a){var b=0,c=this.b,d=new nd;d.next=function(){if(b>=c.length)throw md;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!r(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
k.clear=function(){this.b.clear()};
k.key=function(a){return this.b.key(a)};function je(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
A(je,ie);function ke(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.b=a}
A(ke,ie);function le(a,b){this.f=a;this.b=null;if(ub&&!(9<=Number(Eb))){me||(me=new rd);this.b=me.get(a);this.b||(b?this.b=document.getElementById(b):(this.b=document.createElement("userdata"),this.b.addBehavior("#default#userData"),document.body.appendChild(this.b)),me.set(a,this.b));try{this.b.load(this.f)}catch(c){this.b=null}}}
A(le,he);var ne={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},me=null;function oe(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(a){return ne[a]})}
k=le.prototype;k.isAvailable=function(){return!!this.b};
k.set=function(a,b){this.b.setAttribute(oe(a),b);pe(this)};
k.get=function(a){a=this.b.getAttribute(oe(a));if(!r(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
k.remove=function(a){this.b.removeAttribute(oe(a));pe(this)};
k.F=function(a){var b=0,c=this.b.XMLDocument.documentElement.attributes,d=new nd;d.next=function(){if(b>=c.length)throw md;var d=c[b++];if(a)return decodeURIComponent(d.nodeName.replace(/\./g,"%")).substr(1);d=d.nodeValue;if(!r(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
k.clear=function(){for(var a=this.b.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);pe(this)};
function pe(a){try{a.b.save(a.f)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function qe(a,b){this.f=a;this.b=b+"::"}
A(qe,he);qe.prototype.set=function(a,b){this.f.set(this.b+a,b)};
qe.prototype.get=function(a){return this.f.get(this.b+a)};
qe.prototype.remove=function(a){this.f.remove(this.b+a)};
qe.prototype.F=function(a){var b=this.f.F(!0),c=this,d=new nd;d.next=function(){for(var d=b.next();d.substr(0,c.b.length)!=c.b;)d=b.next();return a?d.substr(c.b.length):c.f.get(d)};
return d};function re(a){if(!Da(a))if(a&&"function"==typeof a.handleEvent)a=x(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(5E3)?-1:p.setTimeout(a,5E3)}
function te(){var a=null;return Pd(new J(function(b,c){a=re(function(){b(void 0)});
-1==a&&c(Error("Failed to schedule timer."))}),function(b){p.clearTimeout(a);
throw b;})}
;function ue(){this.f=[];this.b=-1}
ue.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.f[a]!=b&&(this.f[a]=b,this.b=-1)};
ue.prototype.get=function(a){return!!this.f[a]};
function ve(a){-1==a.b&&(a.b=Qa(a.f,function(a,c,d){return c?a+Math.pow(2,d):a},0));
return a.b}
;function we(a,b,c){var d="script";d=void 0===d?"":d;var e=a.createElement("link");try{Yb(e,b,"preload")}catch(f){return}d&&(e.as=d);c&&(e.nonce=c);if(a=a.getElementsByTagName("head")[0])try{a.appendChild(e)}catch(f){}}
;var xe=/^\.google\.(com?\.)?[a-z]{2,3}$/,ye=/\.(cn|com\.bi|do|sl|ba|by|ma|am)$/;function ze(a){return xe.test(a)&&!ye.test(a)}
var Ae=p;function Be(a){a="https://"+("adservice"+a+"/adsid/integrator.js");var b=["domain="+encodeURIComponent(p.location.hostname)];L[3]>=z()&&b.push("adsid="+encodeURIComponent(L[1]));return a+"?"+b.join("&")}
var L,M;function Ce(){Ae=p;L=Ae.googleToken=Ae.googleToken||{};var a=z();L[1]&&L[3]>a&&0<L[2]||(L[1]="",L[2]=-1,L[3]=-1,L[4]="",L[6]="");M=Ae.googleIMState=Ae.googleIMState||{};ze(M[1])||(M[1]=".google.com");w(M[5])||(M[5]=[]);ua(M[6])||(M[6]=!1);w(M[7])||(M[7]=[]);va(M[8])||(M[8]=0)}
function De(){Ce();return L[1]}
var N={ea:function(){return 0<M[8]},
Qa:function(){M[8]++},
Ra:function(){0<M[8]&&M[8]--},
Sa:function(){M[8]=0},
shouldRetry:function(){return!1},
na:function(){return M[5]},
la:function(a){try{a()}catch(b){p.setTimeout(function(){throw b;},0)}},
ja:function(){if(!N.ea()){var a=p.document,b=function(b){b=Be(b);a:{try{var c=wa();break a}catch(h){}c=void 0}var d=c;we(a,b,d);c=a.createElement("script");c.type="text/javascript";d&&(c.nonce=d);c.onerror=function(){return p.processGoogleToken({},2)};
b=hc(b);Zb(c,b);try{(a.head||a.body||a.documentElement).appendChild(c),N.Qa()}catch(h){}},c=M[1];
b(c);".google.com"!=c&&b(".google.com");b={};var d=(b.newToken="FBT",b);p.setTimeout(function(){return p.processGoogleToken(d,1)},1E3)}}};
function Ee(a){Ce();var b=Ae.googleToken[5]||0;a&&(0!=b||L[3]>=z()?N.la(a):(N.na().push(a),N.ja()));L[3]>=z()&&L[2]>=z()||N.ja()}
function Fe(a){p.processGoogleToken=p.processGoogleToken||function(a,c){var b=a,e=c;b=void 0===b?{}:b;e=void 0===e?0:e;var f=b.newToken||"",g="NT"==f,h=parseInt(b.freshLifetimeSecs||"",10),l=parseInt(b.validLifetimeSecs||"",10),m=b["1p_jar"]||"";b=b.pucrd||"";Ce();1==e?N.Sa():N.Ra();if(!f&&N.shouldRetry())ze(".google.com")&&(M[1]=".google.com"),N.ja();else{var t=Ae.googleToken=Ae.googleToken||{},ca=0==e&&f&&r(f)&&!g&&va(h)&&0<h&&va(l)&&0<l&&r(m);g=g&&!N.ea()&&(!(L[3]>=z())||"NT"==L[1]);var Ja=!(L[3]>=
z())&&0!=e;if(ca||g||Ja)g=z(),h=g+1E3*h,l=g+1E3*l,1E-5>Math.random()&&rc("https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err="+e),t[5]=e,t[1]=f,t[2]=h,t[3]=l,t[4]=m,t[6]=b,Ce();if(ca||!N.ea()){e=N.na();for(f=0;f<e.length;f++)N.la(e[f]);e.length=0}}};
Ee(a)}
;function Ge(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}}
var O=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};var He=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};u("yt.config_",He,void 0);function P(a){Ge(He,arguments)}
function Q(a,b){return a in He?He[a]:b}
function R(a){return Q(a,void 0)}
function Ie(){return Q("PLAYER_CONFIG",{})}
;z();function Je(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){S(b)}}:a}
function S(a,b,c,d,e){var f=v("yt.logging.errors.log");f?f(a,b,c,d,e):(f=Q("ERRORS",[]),f.push([a,b,c,d,e]),P("ERRORS",f))}
function Ke(a){S(a,"WARNING",void 0,void 0,void 0)}
;var Le=q(XMLHttpRequest)?function(){return new XMLHttpRequest}:q(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function Me(){if(!Le)return null;var a=Le();return"open"in a?a:null}
function Ne(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function T(a,b){Da(a)&&(a=Je(a));return window.setTimeout(a,b)}
function Oe(a){window.clearTimeout(a)}
;function Pe(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," "));e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?w(b[f])?Ua(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
;var Qe={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Re=!1;
function Se(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=G(a)[1]||null,e=vc(G(a)[3]||null);d&&e?(d=c,c=G(a),d=G(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?vc(G(c)[3]||null)==e&&(Number(G(c)[4]||null)||null)==(Number(G(a)[4]||null)||null):!0;for(var f in Qe)(d=Q(Qe[f]))&&(c||Te(a,f))&&(b[f]=d);if(c||Te(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=-(new Date).getTimezoneOffset();return b}
function Te(a,b){var c=Q("CORS_HEADER_WHITELIST")||{},d=vc(G(a)[3]||null);return d?(c=c[d])?0<=Na(c,b):!1:!0}
function Ue(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Ve(a,b);var d=We(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(a){if(!e){e=!0;f&&Oe(f);var c=a.ok,d=function(d){d=d||{};var e=b.context||p;c?b.onSuccess&&b.onSuccess.call(e,d,a):b.onError&&b.onError.call(e,d,a);b.ia&&b.ia.call(e,d,a)};
"JSON"==(b.format||"JSON")&&(c||400<=a.status&&500>a.status)?a.json().then(d,function(){d(null)}):d(null)}});
b.pa&&0<b.timeout&&(f=T(function(){e||(e=!0,Oe(f),b.pa.call(b.context||p))},b.timeout))}else Xe(a,b)}
function Xe(a,b){var c=b.format||"JSON";a=Ve(a,b);var d=We(a,b),e=!1,f,g=Ye(a,function(a){if(!e){e=!0;f&&Oe(f);var d=Ne(a),g=null;if(d||400<=a.status&&500>a.status)g=Ze(c,a,b.sb);if(d)a:if(a&&204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(g&&g.return_code,10);break a;case "RAW":d=!0;break a}d=!!g}g=g||{};var h=b.context||p;d?b.onSuccess&&b.onSuccess.call(h,a,g):b.onError&&b.onError.call(h,a,g);b.ia&&b.ia.call(h,a,g)}},b.method,d,b.headers,b.responseType,b.withCredentials);
b.M&&0<b.timeout&&(f=T(function(){e||(e=!0,g.abort(),Oe(f),b.M.call(b.context||p,g))},b.timeout));
return g}
function Ve(a,b){b.Da&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=Q("XSRF_FIELD_NAME",void 0),d=b.cb;if(d){d[c]&&delete d[c];d=d||{};var e=a.split("#",2);c=e[0];e=1<e.length?"#"+e[1]:"";var f=c.split("?",2);c=f[0];f=Pe(f[1]||"");for(var g in d)f[g]=d[g];a=yc(c,f)+e}return a}
function We(a,b){var c=Q("XSRF_FIELD_NAME",void 0),d=Q("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.B,g=R("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.tb||vc(G(a)[3]||null)&&!b.withCredentials&&vc(G(a)[3]||null)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.B&&b.B[g]||(f||(f={}),f[c]=d);f&&r(e)&&(e=Pe(e),rb(e,f),e=b.qa&&"JSON"==b.qa?JSON.stringify(e):xc(e));f=e||f&&!mb(f);!Re&&f&&"POST"!=b.method&&(Re=!0,S(Error("AJAX request with postData should use POST")));
return e}
function Ze(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?$e(b):null)d={},D(b.getElementsByTagName("*"),function(a){d[a.tagName]=af(a)})}c&&bf(d);
return d}
function bf(a){if(Ea(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Wb(a[b],null);a[c]=d}else bf(a[b])}}
function $e(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function af(a){var b="";D(a.childNodes,function(a){b+=a.nodeValue});
return b}
function cf(a,b){b.method="POST";b.B||(b.B={});Xe(a,b)}
function Ye(a,b,c,d,e,f,g){function h(){4==(l&&"readyState"in l?l.readyState:0)&&b&&Je(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var l=Me();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",h,!1):l.onreadystatechange=h;l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Se(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");l.send(d);return l}
;var df={},ef=0;
function ff(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=fb,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a instanceof F||(a=a.J?a.I():String(a),Rb.test(a)||(a="about:invalid#zClosurez"),a=Tb(a)),b=Qb(a),"about:invalid#zClosurez"===b?a="":(b instanceof Ub?a=b:(a=null,b.fa&&(a=b.ba()),b=Wa(b.J?b.I():String(b)),a=Wb(b,a)),a=encodeURIComponent(String(vd(a instanceof Ub&&a.constructor===Ub&&a.g===Vb?a.b:"type_error:SafeHtml")))),/^[\s\xa0]*$/.test(a)||(a=ec("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+
'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a))):e?Ye(a,b,"POST",e,d):Q("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?Ye(a,b,"GET","",d):gf(a,b))}
function gf(a,b){var c=new Image,d=""+ef++;df[d]=c;c.onload=c.onerror=function(){b&&df[d]&&b();delete df[d]};
c.src=a}
;var hf={},jf=0;
function kf(a,b,c,d,e,f){f=f||{};f.name=c||Q("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||Q("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);b=void 0===b?"ERROR":b;e=void 0===e?!1:e;b=void 0===b?"ERROR":b;e=window&&window.yterr||(void 0===e?!1:e)||!1;if(a&&e&&!(5<=jf)){e=a.stacktrace;c=a.columnNumber;a.hasOwnProperty("params")&&(f.params=JSON.stringify(a.params).substr(0,500));d=v("window.location.href");if(r(a))a={message:a,name:"Unknown error",lineNumber:"Not available",fileName:d,stack:"Not available"};else{var g=
!1;try{var h=a.lineNumber||a.line||"Not available"}catch(ca){h="Not available",g=!0}try{var l=a.fileName||a.filename||a.sourceURL||p.$googDebugFname||d}catch(ca){l="Not available",g=!0}a=!g&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:h,fileName:l,stack:a.stack||"Not available"}}e=e||a.stack;h=a.lineNumber.toString();isNaN(h)||isNaN(c)||(h=h+":"+c);if(!(hf[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js"))){l=
e;h={cb:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),line:h,level:b,"client.name":f.name},B:{url:Q("PAGE_NAME",window.location.href),file:a.fileName},method:"POST"};f.version&&(h["client.version"]=f.version);l&&(h.B.stack=l);for(var m in f)h.B["client."+m]=f[m];if(m=Q("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var t in m)h.B[t]=m[t];Xe(Q("ECATCHER_REPORT_HOST","")+"/error_204",h);hf[a.message]=!0;jf++}}}
;var lf=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};u("yt.msgs_",lf,void 0);function mf(a){Ge(lf,arguments)}
;function nf(a){a&&(a.dataset?a.dataset[of("loaded")]="true":a.setAttribute("data-loaded","true"))}
function pf(a,b){return a?a.dataset?a.dataset[of(b)]:a.getAttribute("data-"+b):null}
var qf={};function of(a){return qf[a]||(qf[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;var rf=v("ytPubsubPubsubInstance")||new K;K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.L;K.prototype.publish=K.prototype.K;K.prototype.clear=K.prototype.clear;u("ytPubsubPubsubInstance",rf,void 0);var sf=v("ytPubsubPubsubSubscribedKeys")||{};u("ytPubsubPubsubSubscribedKeys",sf,void 0);var tf=v("ytPubsubPubsubTopicToKeys")||{};u("ytPubsubPubsubTopicToKeys",tf,void 0);var uf=v("ytPubsubPubsubIsSynchronous")||{};u("ytPubsubPubsubIsSynchronous",uf,void 0);
function vf(a,b){var c=wf();if(c){var d=c.subscribe(a,function(){var c=arguments;var f=function(){sf[d]&&b.apply(window,c)};
try{uf[a]?f():T(f,0)}catch(g){S(g)}},void 0);
sf[d]=!0;tf[a]||(tf[a]=[]);tf[a].push(d);return d}return 0}
function xf(a){var b=wf();b&&(va(a)?a=[a]:r(a)&&(a=[parseInt(a,10)]),D(a,function(a){b.unsubscribeByKey(a);delete sf[a]}))}
function yf(a,b){var c=wf();c&&c.publish.apply(c,arguments)}
function zf(a){var b=wf();if(b)if(b.clear(a),a)Af(a);else for(var c in tf)Af(c)}
function wf(){return v("ytPubsubPubsubInstance")}
function Af(a){tf[a]&&(a=tf[a],D(a,function(a){sf[a]&&delete sf[a]}),a.length=0)}
;var Bf=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Cf=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Df(a,b){if(window.spf){var c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Bf,""),c=c.replace(Cf,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Ef(a,b)}
function Ef(a,b){var c=Ff(a),d=document.getElementById(c),e=d&&pf(d,"loaded"),f=d&&!e;if(e)b&&b();else{if(b){e=vf(c,b);var g=""+(b[Fa]||(b[Fa]=++Ga));Gf[g]=e}f||(d=Hf(a,c,function(){pf(d,"loaded")||(nf(d),yf(c),T(y(zf,c),0))}))}}
function Hf(a,b,c){var d=document.createElement("SCRIPT");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
Zb(d,hc(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(d,a.firstChild);return d}
function If(a){a=Ff(a);var b=document.getElementById(a);b&&(zf(a),b.parentNode.removeChild(b))}
function Jf(a,b){if(a&&b){var c=""+(b[Fa]||(b[Fa]=++Ga));(c=Gf[c])&&xf(c)}}
function Ff(a){var b=document.createElement("a");Xb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+db(a)}
var Gf={};function Kf(){}
function Lf(a,b){return Mf(a,1,b)}
;function Nf(){}
n(Nf,Kf);function Mf(a,b,c){isNaN(c)&&(c=void 0);var d=v("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):T(a,c||0)}
function Of(a){if(!isNaN(a)){var b=v("yt.scheduler.instance.cancelJob");b?b(a):Oe(a)}}
Nf.prototype.start=function(){var a=v("yt.scheduler.instance.start");a&&a()};
Nf.prototype.pause=function(){var a=v("yt.scheduler.instance.pause");a&&a()};
Aa(Nf);Nf.getInstance();var Pf=[],Qf=!1;function Rf(){if("1"!=jb(Ie(),"args","privembed")){var a=function(){Qf=!0;"google_ad_status"in window?P("DCLKSTAT",1):P("DCLKSTAT",2)};
Df("//static.doubleclick.net/instream/ad_status.js",a);Pf.push(Lf(function(){Qf||"google_ad_status"in window||(Jf("//static.doubleclick.net/instream/ad_status.js",a),P("DCLKSTAT",3))},5E3))}}
function Sf(){return parseInt(Q("DCLKSTAT",0),10)}
;function Tf(){this.f=!1;this.b=null}
Tf.prototype.initialize=function(a,b,c,d){b?(this.f=!0,Df(b,function(){this.f=!1;window.botguard?Uf(this,c,d):(If(b),S(Error("Unable to load Botguard from "+b),"WARNING"))}.bind(this))):a&&(eval(a),window.botguard?Uf(this,c,d):S(Error("Unable to load Botguard from JS"),"WARNING"))};
function Uf(a,b,c){try{a.b=new window.botguard.bg(b)}catch(d){Ke(d)}c&&c(b)}
Tf.prototype.invoke=function(){return this.b?this.b.invoke():null};
Tf.prototype.dispose=function(){this.b=null};function V(a){return Q("EXPERIMENT_FLAGS",{})[a]}
;var Vf=new Tf,Wf=!1,Xf=0,Yf="";function Zf(a){V("botguard_periodic_refresh")?Xf=O():V("botguard_always_refresh")&&(Yf=a)}
function $f(a){if(a){if(Vf.f)return!1;if(V("botguard_periodic_refresh"))return 72E5<O()-Xf;if(V("botguard_always_refresh"))return Yf!=a}else return!1;return!Wf}
function ag(){return null!==Vf.b}
function bg(){return Vf.invoke()}
;var cg=0;u("ytDomDomGetNextId",v("ytDomDomGetNextId")||function(){return++cg},void 0);var dg={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function eg(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in dg||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?
b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.b=a.pageX;this.f=a.pageY}}
function fg(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.b=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.f=a.clientY+b}}
eg.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
eg.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
eg.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var lb=v("ytEventsEventsListeners")||{};u("ytEventsEventsListeners",lb,void 0);var gg=v("ytEventsEventsCounter")||{count:0};u("ytEventsEventsCounter",gg,void 0);
function hg(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return kb(function(e){var f=ua(e[4])&&e[4]==!!d,g=Ea(e[4])&&Ea(d)&&ob(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var ig=Kb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function W(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=hg(a,b,c,d);if(e)return e;e=++gg.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(d){d=new eg(d);if(!gc(d.relatedTarget,function(b){return b==a}))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new eg(b);
b.currentTarget=a;return c.call(a,b)};
g=Je(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),ig()||ua(d)?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);lb[e]=[a,b,c,g,d];return e}
function jg(a){a&&("string"==typeof a&&(a=[a]),D(a,function(a){if(a in lb){var b=lb[a],d=b[0],e=b[1],f=b[3];b=b[4];d.removeEventListener?ig()||ua(b)?d.removeEventListener(e,f,b):d.removeEventListener(e,f,!!b.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete lb[a]}}))}
;function kg(a){this.u=a;this.b=null;this.i=0;this.l=null;this.j=0;this.f=[];for(a=0;4>a;a++)this.f.push(0);this.h=0;this.D=W(window,"mousemove",x(this.G,this));a=x(this.A,this);Da(a)&&(a=Je(a));this.H=window.setInterval(a,25)}
A(kg,I);kg.prototype.G=function(a){q(a.b)||fg(a);var b=a.b;q(a.f)||fg(a);this.b=new $b(b,a.f)};
kg.prototype.A=function(){if(this.b){var a=O();if(0!=this.i){var b=this.l,c=this.b,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.i);this.f[this.h]=.5<Math.abs((d-this.j)/this.j)?1:0;for(c=b=0;4>c;c++)b+=this.f[c]||0;3<=b&&this.u();this.j=d}this.i=a;this.l=this.b;this.h=(this.h+1)%4}};
kg.prototype.m=function(){window.clearInterval(this.H);jg(this.D)};var lg={};
function mg(a){var b=void 0===a?{}:a;a=void 0===b.Ea?!0:b.Ea;b=void 0===b.Oa?!1:b.Oa;if(null==v("_lact",window)){var c=parseInt(Q("LACT"),10);c=isFinite(c)?z()-Math.max(c,0):-1;u("_lact",c,window);u("_fact",c,window);-1==c&&ng();W(document,"keydown",ng);W(document,"keyup",ng);W(document,"mousedown",ng);W(document,"mouseup",ng);a&&(b?W(window,"touchmove",function(){og("touchmove",200)},{passive:!0}):(W(window,"resize",function(){og("resize",200)}),W(window,"scroll",function(){og("scroll",200)})));
new kg(function(){og("mouse",100)});
W(document,"touchstart",ng,{passive:!0});W(document,"touchend",ng,{passive:!0})}}
function og(a,b){lg[a]||(lg[a]=!0,Lf(function(){ng();lg[a]=!1},b))}
function ng(){null==v("_lact",window)&&mg();var a=z();u("_lact",a,window);-1==v("_fact",window)&&u("_fact",a,window);(a=v("ytglobal.ytUtilActivityCallback_"))&&a()}
function pg(){var a=v("_lact",window);return null==a?-1:Math.max(z()-a,0)}
;var qg=Math.pow(2,16)-1,rg=null,sg=0,tg={log_event:"events",log_interaction:"interactions"},ug=Object.create(null);ug.log_event="GENERIC_EVENT_LOGGING";ug.log_interaction="INTERACTION_LOGGING";var vg=new Set(["log_event"]),wg={},xg=0,X=v("ytLoggingTransportLogPayloadsQueue_")||{};u("ytLoggingTransportLogPayloadsQueue_",X,void 0);var yg=v("ytLoggingTransportTokensToCttTargetIds_")||{};u("ytLoggingTransportTokensToCttTargetIds_",yg,void 0);var zg=v("ytLoggingTransportDispatchedStats_")||{};
u("ytLoggingTransportDispatchedStats_",zg,void 0);u("ytytLoggingTransportCapturedTime_",v("ytLoggingTransportCapturedTime_")||{},void 0);function Ag(a,b){if(a.X){var c=a.X;var d={};c.videoId?d.videoId=c.videoId:c.playlistId&&(d.playlistId=c.playlistId);yg[a.X.token]=d;c=Bg(a.endpoint,a.X.token)}else c=Bg(a.endpoint);c.push(a.payload);wg[a.endpoint]=new b;c.length>=(Number(V("web_logging_max_batch")||0)||20)?Cg():Dg()}
function Cg(){Oe(xg);if(!mb(X)){for(var a in X){var b=wg[a];b&&(Eg(a,b),delete X[a])}mb(X)||Dg()}}
function Dg(){Oe(xg);xg=T(Cg,Q("LOGGING_BATCH_TIMEOUT",1E4))}
function Bg(a,b){b=void 0===b?"":b;X[a]=X[a]||{};X[a][b]=X[a][b]||[];return X[a][b]}
function Eg(a,b){var c=tg[a],d=zg[a]||{};zg[a]=d;var e=Math.round(O());for(m in X[a]){var f=b.b;f={client:{hl:f.Ha,gl:f.Ga,clientName:f.Fa,clientVersion:f.innertubeContextClientVersion}};var g=window.devicePixelRatio;g&&1!=g&&(f.client.screenDensityFloat=String(g));Q("DELEGATED_SESSION_ID")&&(f.user={onBehalfOfUser:Q("DELEGATED_SESSION_ID")});f={context:f};f[c]=Bg(a,m);d.dispatchedEventCount=d.dispatchedEventCount||0;d.dispatchedEventCount+=f[c].length;if(g=yg[m])a:{var h=m;if(g.videoId)var l="VIDEO";
else if(g.playlistId)l="PLAYLIST";else break a;f.credentialTransferTokenTargetId=g;f.context=f.context||{};f.context.user=f.context.user||{};f.context.user.credentialTransferTokens=[{token:h,scope:l}]}delete yg[m];f.requestTimeMs=e;if(g=R("EVENT_ID"))l=(Q("BATCH_CLIENT_COUNTER",void 0)||0)+1,l>qg&&(l=1),P("BATCH_CLIENT_COUNTER",l),g={serializedEventId:g,clientCounter:l},f.serializedClientEventId=g,rg&&sg&&V("log_gel_rtt_web")&&(f.previousBatchInfo={serializedClientEventId:rg,roundtripMs:sg}),rg=g,
sg=0;Fg(b,a,f,{retry:vg.has(a),onSuccess:Gg.bind(this,O())})}if(d.previousDispatchMs){c=e-d.previousDispatchMs;var m=d.diffCount||0;d.averageTimeBetweenDispatchesMs=m?(d.averageTimeBetweenDispatchesMs*m+c)/(m+1):c;d.diffCount=m+1}d.previousDispatchMs=e}
function Gg(a){sg=Math.round(O()-a)}
;function Hg(a,b,c,d){var e=Ig,f={};f.eventTimeMs=Math.round(c||O());f[a]=b;f.context={lastActivityMs:String(c?-1:pg())};Ag({endpoint:"log_event",payload:f,X:d},e)}
;function Jg(a,b){var c={"X-Goog-Visitor-Id":Q("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return c;var d;a?d="Bearer "+v("gapi.auth.getToken")().pb:d=Pc([]);d&&(c.Authorization=d,c["X-Goog-AuthUser"]=Q("SESSION_INDEX",0));return c}
function Kg(a){a=Object.assign({},a);delete a.Authorization;var b=Pc();if(b){var c=new ed;c.update(Q("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();if(!Gb)for(Gb={},Hb={},c=0;65>c;c++)Gb[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c),Hb[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(c);c=Hb;for(var d=[],e=0;e<b.length;e+=3){var f=b[e],g=e+1<b.length,h=g?b[e+1]:0,l=e+2<b.length,m=l?b[e+2]:0,t=f>>2;f=(f&3)<<4|h>>4;h=(h&15)<<2|m>>
6;m&=63;l||(m=64,g||(h=64));d.push(c[t],c[f],c[h],c[m])}a.hash=d.join("")}return a}
;function Lg(a,b,c,d){Jb.set(""+a,b,c,"/",void 0===d?"youtube.com":d,!1)}
;function Mg(){var a=new je;(a=a.isAvailable()?new qe(a,"yt.innertube"):null)||(a=new le("yt.innertube"),a=a.isAvailable()?a:null);this.b=a?new ee(a):null;this.f=document.domain||window.location.hostname}
Mg.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.b)try{this.b.set(a,b,z()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(vd(b))}catch(f){return}else e=escape(b);Lg(a,e,c,this.f)};
Mg.prototype.get=function(a,b){var c=void 0,d=!this.b;if(!d)try{c=this.b.get(a)}catch(e){d=!0}if(d&&(c=Jb.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Mg.prototype.remove=function(a){this.b&&this.b.remove(a);var b=this.f;Jb.remove(""+a,"/",void 0===b?"youtube.com":b)};var Ng=new Mg;function Og(a,b,c,d){if(d)return null;d=Ng.get("nextId",!0)||1;var e=Ng.get("requests",!0)||{};e[d]={method:a,request:b,authState:Kg(c),requestTime:Math.round(O())};Ng.set("nextId",d+1,86400,!0);Ng.set("requests",e,86400,!0);return d}
function Pg(a){var b=Ng.get("requests",!0)||{};delete b[a];Ng.set("requests",b,86400,!0)}
function Qg(a){var b=Ng.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(O())-d.requestTime)){var e=d.authState,f=Kg(Jg(!1));ob(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(O())),Fg(a,d.method,e,{}));delete b[c]}}Ng.set("requests",b,86400,!0)}}
;function Ig(a){var b=this;this.b=a||{innertubeApiKey:R("INNERTUBE_API_KEY"),innertubeApiVersion:R("INNERTUBE_API_VERSION"),Fa:Q("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:R("INNERTUBE_CONTEXT_CLIENT_VERSION"),Ha:R("INNERTUBE_CONTEXT_HL"),Ga:R("INNERTUBE_CONTEXT_GL"),Ia:R("INNERTUBE_HOST_OVERRIDE")||"",Ja:!!Q("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)};Mf(function(){Qg(b)},0,5E3)}
function Fg(a,b,c,d){!Q("VISITOR_DATA")&&.01>Math.random()&&S(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json"},method:"POST",B:c,qa:"JSON",M:function(){d.M()},
pa:d.M,onSuccess:function(a,b){if(d.onSuccess)d.onSuccess(b)},
oa:function(a){if(d.onSuccess)d.onSuccess(a)},
onError:function(a,b){if(d.onError)d.onError(b)},
ub:function(a){if(d.onError)d.onError(a)},
timeout:d.timeout,withCredentials:!0},f="",g=a.b.Ia;g&&(f=g);g=a.b.Ja||!1;var h=Jg(g,f);Object.assign(e.headers,h);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var l=""+f+("/youtubei/"+a.b.innertubeApiVersion+"/"+b)+"?alt=json&key="+a.b.innertubeApiKey,m;if(d.retry&&V("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(m=Og(b,c,h,g))){var t=e.onSuccess,ca=e.oa;e.onSuccess=function(a,b){Pg(m);t(a,b)};
c.oa=function(a,b){Pg(m);ca(a,b)}}try{V("use_fetch_for_op_xhr")?Ue(l,e):cf(l,e)}catch(Ja){if("InvalidAccessError"==Ja)m&&(Pg(m),m=0),S(Error("An extension is blocking network request."),"WARNING");
else throw Ja;}m&&Mf(function(){Qg(a)},0,5E3)}
;var Rg=z().toString();
function Sg(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=z();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Rg)for(a=1,b=0;b<Rg.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Rg.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Tg=Sg();function Ug(a){this.b=a}
function Vg(a){var b={};void 0!==a.b.trackingParams?b.trackingParams=a.b.trackingParams:(b.veType=a.b.veType,null!=a.b.veCounter&&(b.veCounter=a.b.veCounter),null!=a.b.elementIndex&&(b.elementIndex=a.b.elementIndex));void 0!==a.b.dataElement&&(b.dataElement=Vg(a.b.dataElement));void 0!==a.b.youtubeData&&(b.youtubeData=a.b.youtubeData);return b}
var Wg=1;function Xg(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function Yg(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Zg(a){return Q(Yg(void 0===a?0:a),void 0)}
u("yt.logging.screen.getRootVeType",Zg,void 0);function $g(){var a=Zg(0),b;a?b=new Ug({veType:a,youtubeData:void 0}):b=null;return b}
function ah(a){a=void 0===a?0:a;var b=Q(Xg(a));b||0!=a||(b=Q("EVENT_ID"));return b?b:null}
u("yt.logging.screen.getCurrentCsn",ah,void 0);function bh(a,b){var c=void 0===c?0:c;P(Xg(c),a);P(Yg(c),b);0==c&&(c=function(){setTimeout(function(){a&&Hg("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Tg,clientScreenNonce:a})},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(c):c())}
;function ch(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=Q("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=Q("VALID_SESSION_TEMPDATA_DOMAINS",[]),f=vc(G(window.location.href)[3]||null);f&&e.push(f);f=vc(G(d)[3]||null);if(0<=Na(e,f)||!f&&0==d.lastIndexOf("/",0))if(V("autoescape_tempdata_url")&&(e=document.createElement("a"),Xb(e,d),d=e.href),d){f=G(d);d=f[5];e=f[6];f=f[7];var g="";d&&(g+=d);e&&(g+="?"+e);f&&(g+="#"+f);d=g;e=d.indexOf("#");if(d=0>e?d:d.substr(0,e)){if(b.itct||b.ved)b.csn=b.csn||
ah();if(h){var h=parseInt(h,10);isFinite(h)&&0<h&&(d="ST-"+db(d).toString(36),b=b?xc(b):"",Lg(d,b,h||5))}else h="ST-"+db(d).toString(36),b=b?xc(b):"",Lg(h,b,5)}}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var m=void 0===m?"":m;var t=void 0===t?window:t;c=t.location;a=yc(a,l)+m;a=a instanceof F?a:Sb(a);c.href=Qb(a)}return!0}
;function dh(a,b,c){a={attachChild:{csn:a,parentVisualElement:Vg(b),visualElements:[Vg(c)]}};a.eventTimeMs=Math.round(O());a.lactMs=pg();Ag({endpoint:"log_interaction",payload:a},Ig)}
;function eh(a){a=a||{};this.url=a.url||"";this.args=a.args||pb(fh);this.assets=a.assets||{};this.attrs=a.attrs||pb(gh);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
var fh={enablejsapi:1},gh={};eh.prototype.clone=function(){var a=new eh,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];a[b]="object"==Ba(c)?pb(c):c}return a};function hh(){I.call(this);this.b=[]}
n(hh,I);hh.prototype.m=function(){for(;this.b.length;){var a=this.b.pop();a.target.removeEventListener(a.name,a.rb)}I.prototype.m.call(this)};var ih=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function jh(a){a=a||"";if(window.spf){var b=a.match(ih);spf.style.load(a,b?b[1]:"",void 0)}else kh(a)}
function kh(a){var b=lh(a),c=document.getElementById(b),d=c&&pf(c,"loaded");d||c&&!d||(c=mh(a,b,function(){pf(c,"loaded")||(nf(c),yf(b),T(y(zf,b),0))}))}
function mh(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=hc(a);Yb(d,a,"stylesheet");(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function lh(a){var b=document.createElement("A");a=Tb(a);Xb(b,a);b=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+db(b)}
;var nh=v("ytLoggingLatencyUsageStats_")||{};u("ytLoggingLatencyUsageStats_",nh,void 0);var oh=0;function ph(a){nh[a]=nh[a]||{count:0};var b=nh[a];b.count++;b.time=O();oh||(oh=Mf(qh,0,5E3));return 10<b.count?(11==b.count&&kf(Error("CSI data exceeded logging limit with key: "+a),0==a.indexOf("info")?"WARNING":"ERROR"),!0):!1}
function qh(){var a=O(),b;for(b in nh)6E4<a-nh[b].time&&delete nh[b];oh=0}
;function rh(a,b){this.version=a;this.args=b}
;function sh(a){this.topic=a}
sh.prototype.toString=function(){return this.topic};var th=v("ytPubsub2Pubsub2Instance")||new K;K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.L;K.prototype.publish=K.prototype.K;K.prototype.clear=K.prototype.clear;u("ytPubsub2Pubsub2Instance",th,void 0);u("ytPubsub2Pubsub2SubscribedKeys",v("ytPubsub2Pubsub2SubscribedKeys")||{},void 0);u("ytPubsub2Pubsub2TopicToKeys",v("ytPubsub2Pubsub2TopicToKeys")||{},void 0);u("ytPubsub2Pubsub2IsAsync",v("ytPubsub2Pubsub2IsAsync")||{},void 0);
u("ytPubsub2Pubsub2SkipSubKey",null,void 0);function uh(a,b){var c=v("ytPubsub2Pubsub2Instance");c&&c.publish.call(c,a.toString(),a,b)}
;var vh=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};function wh(){var a=Q("TIMING_TICK_EXPIRATION");a||(a={},P("TIMING_TICK_EXPIRATION",a));return a}
function xh(){var a=wh(),b;for(b in a)Of(a[b]);P("TIMING_TICK_EXPIRATION",{})}
;function yh(a,b){rh.call(this,1,arguments)}
n(yh,rh);function zh(a,b){rh.call(this,1,arguments)}
n(zh,rh);var Ah=new sh("aft-recorded"),Bh=new sh("timing-sent");var Ch={vc:!0},Y={},Fh=(Y.ad_allowed="adTypesAllowed",Y.ad_at="adType",Y.ad_cpn="adClientPlaybackNonce",Y.ad_docid="adVideoId",Y.yt_ad_an="adNetworks",Y.p="httpProtocol",Y.t="transportProtocol",Y.cpn="clientPlaybackNonce",Y.csn="clientScreenNonce",Y.docid="videoId",Y.is_nav="isNavigation",Y.yt_lt="loadType",Y.yt_ad="isMonetized",Y.nr="webInfo.navigationReason",Y.ncnp="webInfo.nonPreloadedNodeCount",Y.paused="playerInfo.isPausedOnLoad",Y.fmt="playerInfo.itag",Y.yt_pl="watchInfo.isPlaylist",Y.yt_ad_pr=
"prerollAllowed",Y.yt_red="isRedSubscriber",Y.st="serverTimeMs",Y.vph="viewportHeight",Y.vpw="viewportWidth",Y.yt_vis="isVisible",Y),Gh="ap c cver ei srt yt_fss yt_li plid vpil vpni vpst yt_eil vpni2 vpil2 icrc icrt pa GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid cmt d_vpct d_vpnfi d_vpni pc pfa pfeh pftr prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" "),Hh="isNavigation isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber isVisible watchInfo.isPlaylist".split(" "),
Ih=!1;function Jh(){var a=Kh().info.yt_lt="hot_bg";Lh().info_yt_lt=a;if(Mh())if("yt_lt"in Fh){var b=Fh.yt_lt;0<=Na(Hh,b)&&(a=!!a);var c=a;if(Mh()){a={};b=b.split(".");for(var d=a,e=0;e<b.length-1;e++)d[b[e]]=d[b[e]]||{},d=d[b[e]];d[b[b.length-1]]=c;c=Nh();b=Object.keys(a).join("");ph("info_"+b+"_"+c)||(a.clientActionNonce=c,Hg("latencyActionInfo",a,void 0,void 0))}}else 0<=Na(Gh,"yt_lt")||S(Error("Unknown label yt_lt logged with GEL CSI."))}
function Oh(){var a=Ph();if(a.aft)return a.aft;for(var b=Q("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
var Qh=x(vh.clearResourceTimings||vh.webkitClearResourceTimings||vh.mozClearResourceTimings||vh.msClearResourceTimings||vh.oClearResourceTimings||za,vh);function Nh(){var a=Kh().nonce;a||(a=Sg(),Kh().nonce=a);return a}
function Ph(){return Kh().tick}
function Lh(){var a=Kh();"gel"in a||(a.gel={});return a.gel}
function Kh(){return v("ytcsi.data_")||Rh()}
function Rh(){var a={tick:{},info:{}};u("ytcsi.data_",a,void 0);return a}
function Sh(a,b){u("yt.timing."+(b||"")+"pingSent_",a,void 0)}
function Th(){var a=Ph(),b=a.pbr,c=a.vc;a=a.pbs;return b&&c&&a&&b<c&&c<a&&1==Kh().info.yt_pvis}
function Mh(){return!!V("csi_on_gel")||!!Kh().useGel}
function Uh(){xh();if(!Mh()){var a=Ph(),b=Kh().info,c=a._start;for(f in a)if(0==f.lastIndexOf("_",0)&&w(a[f])){var d=f.slice(1);if(d in Ch){var e=Pa(a[f],function(a){return Math.round(a-c)});
b["all_"+d]=e.join()}delete a[f]}var f=!!b.ap;if(d=v("ytglobal.timingReportbuilder_")){if(a=d(a,b,void 0))Vh(a,f),Rh(),Qh(),Sh(!1,void 0),Q("TIMING_ACTION")&&P("PREVIOUS_ACTION",Q("TIMING_ACTION")),P("TIMING_ACTION","")}else{var g=Q("CSI_SERVICE_NAME","youtube");d={v:2,s:g,action:Q("TIMING_ACTION",void 0)};e=Jh.srt;void 0!==a.srt&&delete b.srt;if(b.h5jse){var h=window.location.protocol+v("ytplayer.config.assets.js");(h=vh.getEntriesByName?vh.getEntriesByName(h)[0]:null)?b.h5jse=Math.round(b.h5jse-
h.responseEnd):delete b.h5jse}a.aft=Oh();Th()&&"youtube"==g&&(Jh(),g=a.vc,h=a.pbs,delete a.aft,b.aft=Math.round(h-g));for(var l in b)"_"!=l.charAt(0)&&(d[l]=b[l]);a.ps=O();b={};l=[];for(var m in a)"_"!=m.charAt(0)&&(g=Math.round(a[m]-c),b[m]=g,l.push(m+"."+g));d.rt=l.join(",");(a=v("ytdebug.logTiming"))&&a(d,b);Vh(d,f,void 0);uh(Bh,new zh(b.aft+(e||0),void 0))}}}
function Vh(a,b,c){if(V("debug_csi_data")){var d=v("yt.timing.csiData");d||(d=[],u("yt.timing.csiData",d,void 0));d.push({page:location.href,time:new Date,args:a})}d="";for(var e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var f=void 0===f?"":f;try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,f)||ff(a,void 0,void 0,void 0,f)}catch(g){ff(a,void 0,void 0,void 0,f)}}else ff(a);Sh(!0,c)}
function Wh(a){if("_"!=a[0]){var b=a;vh.mark&&(0==b.lastIndexOf("mark_",0)||(b="mark_"+b),vh.mark(b))}b=Ph();var c=O();b[a]&&(b["_"+a]=b["_"+a]||[b[a]],b["_"+a].push(c));b[a]=c;b=wh();if(c=b[a])Of(c),b[a]=0;Lh()["tick_"+a]=void 0;O();Mh()?(b=Nh(),"_start"==a?ph("baseline_"+b)||Hg("latencyActionBaselined",{clientActionNonce:b},void 0,void 0):ph("tick_"+a+"_"+b)||Hg("latencyActionTicked",{tickName:a,clientActionNonce:b},void 0,void 0),a=!0):a=!1;if(a=!a)a=!v("yt.timing.pingSent_");if(a&&(b=R("TIMING_ACTION"),
a=Ph(),v("ytglobal.timingready_")&&b&&a._start&&(b=Oh()))){Ih||(uh(Ah,new yh(Math.round(b-a._start),void 0)),Ih=!0);b=!0;c=Q("TIMING_WAIT",[]);if(c.length)for(var d=0,e=c.length;d<e;++d)if(!(c[d]in a)){b=!1;break}b&&Uh()}}
;function Xh(a,b){I.call(this);this.l=this.U=a;this.G=b;this.u=!1;this.f={};this.R=this.D=null;this.H=new K;gd(this,y(hd,this.H));this.i={};this.O=this.T=this.h=this.Z=this.b=null;this.N=!1;this.j=this.A=null;this.V={};this.ua=["onReady"];this.Y=null;this.ka=NaN;this.P={};Yh(this);this.W("WATCH_LATER_VIDEO_ADDED",this.La.bind(this));this.W("WATCH_LATER_VIDEO_REMOVED",this.Ma.bind(this));this.W("onAdAnnounce",this.xa.bind(this));this.va=new hh(this);gd(this,y(hd,this.va))}
n(Xh,I);k=Xh.prototype;
k.ha=function(a){if(!this.g){a instanceof eh||(a=new eh(a));this.Z=a;this.b=a.clone();this.h=this.b.attrs.id||this.h;"video-player"==this.h&&(this.h=this.G,this.b.attrs.id=this.G);this.l.id==this.h&&(this.h+="-player",this.b.attrs.id=this.h);this.b.args.enablejsapi="1";this.b.args.playerapiid=this.G;this.T||(this.T=Zh(this,this.b.args.jsapicallback||"onYouTubePlayerReady"));this.b.args.jsapicallback=null;if(a=this.b.attrs.width)this.l.style.width=sc(Number(a)||a);if(a=this.b.attrs.height)this.l.style.height=sc(Number(a)||
a);$h(this);this.u&&ai(this)}};
k.Aa=function(){return this.Z};
function ai(a){a.b.loaded||(a.b.loaded=!0,"0"!=a.b.args.autoplay?a.f.loadVideoByPlayerVars(a.b.args):a.f.cueVideoByPlayerVars(a.b.args))}
function bi(a){var b=!0,c=ci(a);c&&a.b&&(a=a.b,b=pf(c,"version")==a.assets.js);return b&&!!v("yt.player.Application.create")}
function $h(a){if(!a.g&&!a.N){var b=bi(a);if(b&&"html5"==(ci(a)?"html5":null))a.O="html5",a.u||di(a);else if(ei(a),a.O="html5",b&&a.j)a.U.appendChild(a.j),di(a);else{a.b.loaded=!0;var c=!1;a.A=function(){c=!0;var b=a.b.clone();v("yt.player.Application.create")(a.U,b);di(a)};
a.N=!0;b?a.A():(Df(a.b.assets.js,a.A),jh(a.b.assets.css),fi(a)&&!c&&u("yt.player.Application.create",null,void 0))}}}
function ci(a){var b=bc(a.h);!b&&a.l&&a.l.querySelector&&(b=a.l.querySelector("#"+a.h));return b}
function di(a){if(!a.g){var b=ci(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.N=!1,b.isNotServable&&b.isNotServable(a.b.args.video_id)||gi(a)):a.ka=T(function(){di(a)},50)}}
function gi(a){Yh(a);a.u=!0;var b=ci(a);b.addEventListener&&(a.D=hi(a,b,"addEventListener"));b.removeEventListener&&(a.R=hi(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.f[e]||(a.f[e]=hi(a,b,e))}for(var f in a.i)a.D(f,a.i[f]);ai(a);a.T&&a.T(a.f);a.H.K("onReady",a.f)}
function hi(a,b,c){var d=b[c];return function(){try{return a.Y=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.Y=e,Ke(e))}}}
function Yh(a){a.u=!1;if(a.R)for(var b in a.i)a.R(b,a.i[b]);for(var c in a.P)Oe(parseInt(c,10));a.P={};a.D=null;a.R=null;for(var d in a.f)a.f[d]=null;a.f.addEventListener=a.W.bind(a);a.f.removeEventListener=a.Ta.bind(a);a.f.destroy=a.dispose.bind(a);a.f.getLastError=a.Ba.bind(a);a.f.getPlayerType=a.Ca.bind(a);a.f.getCurrentVideoConfig=a.Aa.bind(a);a.f.loadNewVideoConfig=a.ha.bind(a);a.f.isReady=a.Ka.bind(a)}
k.Ka=function(){return this.u};
k.W=function(a,b){var c=this,d=Zh(this,b);if(d){if(!(0<=Na(this.ua,a)||this.i[a])){var e=ii(this,a);this.D&&this.D(a,e)}this.H.subscribe(a,d);"onReady"==a&&this.u&&T(function(){d(c.f)},0)}};
k.Ta=function(a,b){if(!this.g){var c=Zh(this,b);c&&Zd(this.H,a,c)}};
function Zh(a,b){var c=b;if("string"==typeof b){if(a.V[b])return a.V[b];c=function(){var a=v(b);a&&a.apply(p,arguments)};
a.V[b]=c}return c?c:null}
function ii(a,b){var c="ytPlayer"+b+a.G;a.i[b]=c;p[c]=function(c){var d=T(function(){if(!a.g){a.H.K(b,c);var e=a.P,g=String(d);g in e&&delete e[g]}},0);
nb(a.P,String(d))};
return c}
k.xa=function(a){yf("a11y-announce",a)};
k.La=function(a){yf("WATCH_LATER_VIDEO_ADDED",a)};
k.Ma=function(a){yf("WATCH_LATER_VIDEO_REMOVED",a)};
k.Ca=function(){return this.O||(ci(this)?"html5":null)};
k.Ba=function(){return this.Y};
function ei(a){Wh("dcp");a.cancel();Yh(a);a.O=null;a.b&&(a.b.loaded=!1);var b=ci(a);b&&(bi(a)||!fi(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));for(a=a.U;b=a.firstChild;)a.removeChild(b)}
k.cancel=function(){this.A&&Jf(this.b.assets.js,this.A);Oe(this.ka);this.N=!1};
k.m=function(){ei(this);if(this.j&&this.b&&this.j.destroy)try{this.j.destroy()}catch(b){S(b)}this.V=null;for(var a in this.i)p[this.i[a]]=null;this.Z=this.b=this.f=null;delete this.U;delete this.l;I.prototype.m.call(this)};
function fi(a){return a.b&&a.b.args&&a.b.args.fflags?-1!=a.b.args.fflags.indexOf("player_destroy_old_version=true"):!1}
;var ji={},ki="player_uid_"+(1E9*Math.random()>>>0);function li(a){var b="player";b=r(b)?bc(b):b;var c=ki+"_"+(b[Fa]||(b[Fa]=++Ga)),d=ji[c];if(d)return d.ha(a),d.f;d=new Xh(b,c);ji[c]=d;yf("player-added",d.f);gd(d,y(mi,d));T(function(){d.ha(a)},0);
return d.f}
function mi(a){delete ji[a.G]}
;function ni(){var a=oi(),b=pi();if(!a&&!b||!window.JSON)return null;try{var c=a.get("yt-player-two-stage-token")}catch(d){}if(!r(c))try{c=b.get("yt-player-two-stage-token")}catch(d){}if(!r(c))return null;try{c=JSON.parse(c,void 0)}catch(d){}return c}
var pi=Kb(function(){var a=new je;return a.isAvailable()?new fe(a):null}),oi=Kb(function(){var a=new ke;
return a.isAvailable()?new fe(a):null});function qi(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function ri(a,b,c){r(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);a.videoId=b&&b[2]?b[2]:null;return si(a)}
function si(a,b,c){if(Ea(a)){b="endSeconds startSeconds mediaContentUrl suggestedQuality videoId two_stage_token".split(" ");c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function ti(a,b,c,d){if(Ea(a)&&!w(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};r(a)&&16==a.length?b.list="PL"+a:b.playlist=a;return b}
function ui(a){var b=a.video_id||a.videoId;if(r(b)){var c=ni()||{},d=ni()||{};q(void 0)?d[b]=void 0:delete d[b];var e=z()+3E5,f=pi();if(f&&window.JSON){r(d)||(d=JSON.stringify(d,void 0));try{f.set("yt-player-two-stage-token",d,e)}catch(g){f.remove("yt-player-two-stage-token")}}(b=c[b])&&(a.two_stage_token=b)}}
;function vi(a){I.call(this);this.b=a;this.b.subscribe("command",this.ra,this);this.f={};this.i=!1}
A(vi,I);k=vi.prototype;k.start=function(){this.i||this.g||(this.i=!0,wi(this.b,"RECEIVING"))};
k.ra=function(a,b,c){if(this.i&&!this.g){var d=b||{};switch(a){case "addEventListener":r(d.event)&&(a=d.event,a in this.f||(c=x(this.Va,this,a),this.f[a]=c,this.addEventListener(a,c)));break;case "removeEventListener":r(d.event)&&xi(this,d.event);break;default:this.h.isReady()&&this.h[a]&&(b=yi(a,b||{}),c=this.h.handleExternalCall(a,b,c||null),(c=zi(a,c))&&this.i&&!this.g&&wi(this.b,a,c))}}};
k.Va=function(a,b){this.i&&!this.g&&wi(this.b,a,this.ca(a,b))};
k.ca=function(a,b){if(null!=b)return{value:b}};
function xi(a,b){b in a.f&&(a.removeEventListener(b,a.f[b]),delete a.f[b])}
k.m=function(){var a=this.b;a.g||Zd(a.b,"command",this.ra,this);this.b=null;for(var b in this.f)xi(this,b);vi.w.m.call(this)};function Ai(a,b){vi.call(this,b);this.h=a;this.start()}
A(Ai,vi);Ai.prototype.addEventListener=function(a,b){this.h.addEventListener(a,b)};
Ai.prototype.removeEventListener=function(a,b){this.h.removeEventListener(a,b)};
function yi(a,b){switch(a){case "loadVideoById":return b=si(b),ui(b),[b];case "cueVideoById":return b=si(b),ui(b),[b];case "loadVideoByPlayerVars":return ui(b),[b];case "cueVideoByPlayerVars":return ui(b),[b];case "loadPlaylist":return b=ti(b),ui(b),[b];case "cuePlaylist":return b=ti(b),ui(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];
case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey]}return[]}
function zi(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Ai.prototype.ca=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Ai.w.ca.call(this,a,b)};
Ai.prototype.m=function(){Ai.w.m.call(this);delete this.h};function Bi(a,b,c,d){I.call(this);this.f=b||null;this.u="*";this.h=c||null;this.sessionId=null;this.channel=d||null;this.D=!!a;this.l=x(this.A,this);window.addEventListener("message",this.l)}
n(Bi,I);Bi.prototype.A=function(a){if(!("*"!=this.h&&a.origin!=this.h||this.f&&a.source!=this.f)&&r(a.data)){try{var b=JSON.parse(a.data)}catch(c){return}if(!(null==b||this.D&&(this.sessionId&&this.sessionId!=b.id||this.channel&&this.channel!=b.channel))&&b)switch(b.event){case "listening":"null"!=a.origin&&(this.h=this.u=a.origin);this.f=a.source;this.sessionId=b.id;this.b&&(this.b(),this.b=null);break;case "command":this.i&&(!this.j||0<=Na(this.j,b.func))&&this.i(b.func,b.args,a.origin)}}};
Bi.prototype.sendMessage=function(a,b){var c=b||this.f;if(c){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var d=vd(a);c.postMessage(d,this.u)}catch(e){S(e,"WARNING")}}};
Bi.prototype.m=function(){window.removeEventListener("message",this.l);I.prototype.m.call(this)};function Ci(a,b,c){Bi.call(this,a,b,c||Q("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname,"widget");this.j=this.b=this.i=null}
n(Ci,Bi);function Di(){var a=this.f=new Ci(!!Q("WIDGET_ID_ENFORCE")),b=x(this.Pa,this);a.i=b;a.j=null;this.f.channel="widget";if(a=Q("WIDGET_ID"))this.f.sessionId=a;this.h=[];this.j=!1;this.i={}}
k=Di.prototype;k.Pa=function(a,b,c){"addEventListener"==a&&b?(a=b[0],this.i[a]||"onReady"==a||(this.addEventListener(a,Ei(this,a)),this.i[a]=!0)):this.ta(a,b,c)};
k.ta=function(){};
function Ei(a,b){return x(function(a){this.sendMessage(b,a)},a)}
k.addEventListener=function(){};
k.za=function(){this.j=!0;this.sendMessage("initialDelivery",this.da());this.sendMessage("onReady");D(this.h,this.sa,this);this.h=[]};
k.da=function(){return null};
function Fi(a,b){a.sendMessage("infoDelivery",b)}
k.sa=function(a){this.j?this.f.sendMessage(a):this.h.push(a)};
k.sendMessage=function(a,b){this.sa({event:a,info:void 0==b?null:b})};
k.dispose=function(){this.f=null};function Gi(a){Di.call(this);this.b=a;this.g=[];this.addEventListener("onReady",x(this.Na,this));this.addEventListener("onVideoProgress",x(this.Za,this));this.addEventListener("onVolumeChange",x(this.ab,this));this.addEventListener("onApiChange",x(this.Ua,this));this.addEventListener("onPlaybackQualityChange",x(this.Wa,this));this.addEventListener("onPlaybackRateChange",x(this.Xa,this));this.addEventListener("onStateChange",x(this.Ya,this));this.addEventListener("onWebglSettingsChanged",x(this.bb,
this))}
A(Gi,Di);k=Gi.prototype;k.ta=function(a,b,c){if(this.b[a]){b=b||[];if(0<b.length&&qi(a)){var d=b;if(Ea(d[0])&&!w(d[0]))d=d[0];else{var e={};switch(a){case "loadVideoById":case "cueVideoById":e=si.apply(window,d);break;case "loadVideoByUrl":case "cueVideoByUrl":e=ri.apply(window,d);break;case "loadPlaylist":case "cuePlaylist":e=ti.apply(window,d)}d=e}ui(d);b.length=1;b[0]=d}this.b.handleExternalCall(a,b,c);qi(a)&&Fi(this,this.da())}};
k.Na=function(){var a=x(this.za,this);this.f.b=a};
k.addEventListener=function(a,b){this.g.push({eventType:a,listener:b});this.b.addEventListener(a,b)};
k.da=function(){if(!this.b)return null;var a=this.b.getApiInterface();Sa(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c],f=e;if(0==f.search("get")||0==f.search("is")){f=e;var g=0;0==f.search("get")?g=3:0==f.search("is")&&(g=2);f=f.charAt(g).toLowerCase()+f.substr(g+1);try{var h=this.b[e]();b[f]=h}catch(l){}}}b.videoData=this.b.getVideoData();b.currentTimeLastUpdated_=z()/1E3;return b};
k.Ya=function(a){a={playerState:a,currentTime:this.b.getCurrentTime(),duration:this.b.getDuration(),videoData:this.b.getVideoData(),videoStartBytes:0,videoBytesTotal:this.b.getVideoBytesTotal(),videoLoadedFraction:this.b.getVideoLoadedFraction(),playbackQuality:this.b.getPlaybackQuality(),availableQualityLevels:this.b.getAvailableQualityLevels(),videoUrl:this.b.getVideoUrl(),playlist:this.b.getPlaylist(),playlistIndex:this.b.getPlaylistIndex(),currentTimeLastUpdated_:z()/1E3,playbackRate:this.b.getPlaybackRate(),
mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getVideoContentRect&&(a.videoContentRect=this.b.getVideoContentRect());this.b.getProgressState&&(a.progressState=this.b.getProgressState());this.b.getStoryboardFormat&&(a.storyboardFormat=this.b.getStoryboardFormat());Fi(this,a)};
k.Wa=function(a){Fi(this,{playbackQuality:a})};
k.Xa=function(a){Fi(this,{playbackRate:a})};
k.Ua=function(){for(var a=this.b.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.b.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var l=f[g],m=this.b.getOption(e,l);b[e][l]=m}}this.sendMessage("apiInfoDelivery",b)};
k.ab=function(){Fi(this,{muted:this.b.isMuted(),volume:this.b.getVolume()})};
k.Za=function(a){a={currentTime:a,videoBytesLoaded:this.b.getVideoBytesLoaded(),videoLoadedFraction:this.b.getVideoLoadedFraction(),currentTimeLastUpdated_:z()/1E3,playbackRate:this.b.getPlaybackRate(),mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());Fi(this,a)};
k.bb=function(){if(this.b.getSphericalProperties){var a={sphericalProperties:this.b.getSphericalProperties()};Fi(this,a)}};
k.dispose=function(){Gi.w.dispose.call(this);for(var a=0;a<this.g.length;a++){var b=this.g[a];this.b.removeEventListener(b.eventType,b.listener)}this.g=[]};function Hi(a){a=void 0===a?!1:a;I.call(this);this.b=new K(a);gd(this,y(hd,this.b))}
A(Hi,I);Hi.prototype.subscribe=function(a,b,c){return this.g?0:this.b.subscribe(a,b,c)};
Hi.prototype.i=function(a,b){this.g||this.b.K.apply(this.b,arguments)};function Ii(a,b,c){Hi.call(this);this.f=a;this.h=b;this.j=c}
A(Ii,Hi);function wi(a,b,c){if(!a.g){var d=a.f;d.g||a.h!=d.b||(a={id:a.j,command:b},c&&(a.data=c),d.b.postMessage(vd(a),d.h))}}
Ii.prototype.m=function(){this.h=this.f=null;Ii.w.m.call(this)};function Ji(a,b,c){I.call(this);this.b=a;this.h=c;this.i=W(window,"message",x(this.j,this));this.f=new Ii(this,a,b);gd(this,y(hd,this.f))}
A(Ji,I);Ji.prototype.j=function(a){var b;if(b=!this.g)if(b=a.origin==this.h)a:{b=this.b;do{b:{var c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,r(b))){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.f,c.g||c.i("command",b.command,b.data,a.origin))}};
Ji.prototype.m=function(){jg(this.i);this.b=null;Ji.w.m.call(this)};function Ki(){var a=pb(Li),b;return Pd(new J(function(c,d){a.onSuccess=function(a){Ne(a)?c(a):d(new Mi("Request failed, status="+a.status,"net.badstatus",a))};
a.onError=function(a){d(new Mi("Unknown request error","net.unknown",a))};
a.M=function(a){d(new Mi("Request timed out","net.timeout",a))};
b=Xe("//googleads.g.doubleclick.net/pagead/id",a)}),function(a){a instanceof Qd&&b.abort();
return Hd(a)})}
function Mi(a,b){C.call(this,a+", errorCode="+b);this.errorCode=b;this.name="PromiseAjaxError"}
n(Mi,C);function Ni(a){this.g=void 0===a?null:a;this.f=0;this.b=null}
Ni.prototype.then=function(a,b,c){return this.g?this.g.then(a,b,c):1===this.f&&a?(a=a.call(c,this.b),Cd(a)?a:Oi(a)):2===this.f&&b?(a=b.call(c,this.b),Cd(a)?a:Pi(a)):this};
Ni.prototype.getValue=function(){return this.b};
Bd(Ni);function Pi(a){var b=new Ni;a=void 0===a?null:a;b.f=2;b.b=void 0===a?null:a;return b}
function Oi(a){var b=new Ni;a=void 0===a?null:a;b.f=1;b.b=void 0===a?null:a;return b}
;function Qi(a){C.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Ri;this.isTimeout=a instanceof Mi&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Qd}
n(Qi,C);Qi.prototype.name="BiscottiError";function Ri(){C.call(this,"Biscotti ID is missing from server")}
n(Ri,C);Ri.prototype.name="BiscottiMissingError";var Li={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Si=null;function Ti(){if("1"===jb(Ie(),"args","privembed"))return Hd(Error("Biscotti ID is not available in private embed mode"));Si||(Si=Pd(Ki().then(Ui),function(a){return Vi(2,a)}));
return Si}
function Ui(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Ri;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Ri;a=a.id;Wi(a);Si=Oi(a);Xi(18E5,2);return a}
function Vi(a,b){var c=new Qi(b);Wi("");Si=Pi(c);0<a&&Xi(12E4,a-1);throw c;}
function Xi(a,b){T(function(){Pd(Ki().then(Ui,function(a){return Vi(b,a)}),za)},a)}
function Wi(a){u("yt.ads.biscotti.lastId_",a,void 0)}
function Yi(){try{var a=v("yt.ads.biscotti.getId_");return a?a():Ti()}catch(b){return Hd(b)}}
;function Zi(a){C.apply(this,arguments)}
n(Zi,C);Zi.prototype.name="YuzuError";function $i(){var a=new Zi("ID is missing"),b=new Zi("Timeout"),c=null,d=!1;Fe(function(){c=De();d=!0});
if(d)return c?Oi(c):Pi(a);var e=new J(function(b,c){Fe(function(){var d=De();d?b(d):c(a)})}),f=te().then(function(){return Hd(b)});
return Nd(Kd([e,f]),function(){return f.cancel()})}
;function aj(a){if("1"!==jb(Ie(),"args","privembed")){a&&(v("yt.ads.biscotti.getId_")||Ka("yt.ads.biscotti.getId_",Ti));try{var b=Yi();if(V("enable_yuzu")){v("yt.ads.yuzu.getId_")||u("yt.ads.yuzu.getId_",$i,void 0);try{var c=v("yt.ads.yuzu.getId_")()}catch(d){c=Hd(d)}}else c=Hd(new Zi("unimplemented"));Ld([b,c]).then(function(a){var b=a[0];a=a[1];if(b.aa||a.aa){b=b.value;a=a.value;var c={};c.dt=Kc;c.flash="0";a:{try{var d=window.top.location.href}catch(eb){d=2;break a}d=null!=d?d==window.document.location.href?
0:1:2}d=(c.frm=d,c);d.u_tz=-(new Date).getTimezoneOffset();var h=void 0===h?B:h;try{var l=h.history.length}catch(eb){l=0}d.u_his=l;d.u_java=!!B.navigator&&"unknown"!==typeof B.navigator.javaEnabled&&!!B.navigator.javaEnabled&&B.navigator.javaEnabled();B.screen&&(d.u_h=B.screen.height,d.u_w=B.screen.width,d.u_ah=B.screen.availHeight,d.u_aw=B.screen.availWidth,d.u_cd=B.screen.colorDepth);B.navigator&&B.navigator.plugins&&(d.u_nplug=B.navigator.plugins.length);B.navigator&&B.navigator.mimeTypes&&(d.u_nmime=
B.navigator.mimeTypes.length);d.ca_type="image";if(V("enable_server_side_search_pyv")||V("enable_server_side_mweb_search_pyv")){l=window;try{var m=l.screenX;var t=l.screenY}catch(eb){}try{var ca=l.outerWidth;var Ja=l.outerHeight}catch(eb){}try{var Dh=l.innerWidth;var Eh=l.innerHeight}catch(eb){}m=[l.screenLeft,l.screenTop,m,t,l.screen?l.screen.availWidth:void 0,l.screen?l.screen.availTop:void 0,ca,Ja,Dh,Eh];t=window.top;try{var U=(t||window).document,ea="CSS1Compat"==U.compatMode?U.documentElement:
U.body;var Ma=(new ac(ea.clientWidth,ea.clientHeight)).round()}catch(eb){Ma=new ac(-12245933,-12245933)}U={};ea=new ue;p.SVGElement&&p.document.createElementNS&&ea.set(0);t=pc();t["allow-top-navigation-by-user-activation"]&&ea.set(1);t["allow-popups-to-escape-sandbox"]&&ea.set(2);ea=ve(ea);U.bc=ea;U.bih=Ma.height;U.biw=Ma.width;U.brdim=m.join();Ma=(U.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[La.visibilityState||La.webkitVisibilityState||La.mozVisibilityState||""]||0,U.wgl=!!B.WebGLRenderingContext,
U);for(var se in Ma)d[se]=Ma[se]}void 0!==b&&(d.bid=b);void 0!==a&&(d.anid=a);d.bsq=bj++;cf("//www.youtube.com/ad_data_204",{Da:!1,B:d,withCredentials:!0})}});
T(aj,18E5)}catch(d){S(d)}}}
var bj=0;var Z=v("ytglobal.prefsUserPrefsPrefs_")||{};u("ytglobal.prefsUserPrefsPrefs_",Z,void 0);function cj(){this.b=Q("ALT_PREF_COOKIE_NAME","PREF");var a=Jb.get(""+this.b,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Z[d]=c.toString())}}}
k=cj.prototype;k.get=function(a,b){dj(a);ej(a);var c=void 0!==Z[a]?Z[a].toString():null;return null!=c?c:b?b:""};
k.set=function(a,b){dj(a);ej(a);if(null==b)throw Error("ExpectedNotNull");Z[a]=b.toString()};
k.remove=function(a){dj(a);ej(a);delete Z[a]};
k.save=function(){Lg(this.b,this.dump(),63072E3)};
k.clear=function(){for(var a in Z)delete Z[a]};
k.dump=function(){var a=[],b;for(b in Z)a.push(b+"="+encodeURIComponent(String(Z[b])));return a.join("&")};
function ej(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function dj(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function fj(a){a=void 0!==Z[a]?Z[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Aa(cj);var gj=null,hj=null,ij=null,jj={};function kj(a){Hg(a.payload_name,a.payload,void 0,void 0)}
function lj(a){var b=a.id;a=a.ve_type;var c=Wg++;a=new Ug({veType:a,veCounter:c,elementIndex:void 0,dataElement:void 0,youtubeData:void 0});jj[b]=a;b=ah();c=$g();b&&c&&dh(b,c,a)}
function mj(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(bh(b,a),a=$g()))for(var c in jj){var d=jj[c];d&&dh(b,a,d)}}
function nj(a){jj[a.id]=new Ug({trackingParams:a.tracking_params})}
function oj(a){var b=ah();a=jj[a.id];b&&a&&Hg("visualElementGestured",{csn:b,ve:Vg(a),gestureType:"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"})}
function pj(a){a=a.ids;var b=ah();if(b)for(var c=0;c<a.length;c++){var d=jj[a[c]];d&&Hg("visualElementShown",{csn:b,ve:Vg(d),eventType:1})}}
function qj(){var a=gj;a&&a.startInteractionLogging&&a.startInteractionLogging()}
;u("yt.setConfig",P,void 0);u("yt.config.set",P,void 0);u("yt.setMsg",mf,void 0);u("yt.msgs.set",mf,void 0);u("yt.logging.errors.log",kf,void 0);
u("writeEmbed",function(){var a=Q("PLAYER_CONFIG",void 0);aj(!0);"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");var b=document.referrer,c=Q("POST_MESSAGE_ORIGIN");window!=window.top&&b&&b!=document.URL&&(a.args.loaderUrl=b);Q("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");a.args.autoplay&&ui(a.args);gj=a=li(a);a.addEventListener("onScreenChanged",mj);a.addEventListener("onLogClientVeCreated",lj);a.addEventListener("onLogServerVeCreated",nj);a.addEventListener("onLogToGel",kj);
a.addEventListener("onLogVeClicked",oj);a.addEventListener("onLogVesShown",pj);a.addEventListener("onReady",qj);b=Q("POST_MESSAGE_ID","player");Q("ENABLE_JS_API")?ij=new Gi(a):Q("ENABLE_POST_API")&&r(b)&&r(c)&&(hj=new Ji(window.parent,b,c),ij=new Ai(a,hj.f));c=R("BG_P");$f(c)&&(Q("BG_I")||Q("BG_IU"))&&(Wf=!0,Vf.initialize(Q("BG_I",null),Q("BG_IU",null),c,Zf));Rf()},void 0);
u("yt.www.watch.ads.restrictioncookie.spr",function(a){ff(a+"mac_204?action_fcts=1");return!0},void 0);
var rj=Je(function(){Wh("ol");var a=cj.getInstance(),b=!!((fj("f"+(Math.floor(119/31)+1))||0)&67108864),c=1<window.devicePixelRatio;if(document.body&&kd(document.body,"exp-invert-logo"))if(c&&!kd(document.body,"inverted-hdpi")){var d=document.body;d.classList?d.classList.add("inverted-hdpi"):kd(d,"inverted-hdpi")||(d.className+=0<d.className.length?" inverted-hdpi":"inverted-hdpi")}else!c&&kd(document.body,"inverted-hdpi")&&ld();b!=c&&(b="f"+(Math.floor(119/31)+1),d=fj(b)||0,d=c?d|67108864:d&-67108865,
0==d?delete Z[b]:Z[b]=d.toString(16).toString(),a.save())}),sj=Je(function(){var a=gj;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();Q("PL_ATT")&&Vf.dispose();a=0;for(var b=Pf.length;a<b;a++)Of(Pf[a]);Pf.length=0;If("//static.doubleclick.net/instream/ad_status.js");Qf=!1;P("DCLKSTAT",0);id(ij,hj);if(a=gj)a.removeEventListener("onScreenChanged",mj),a.removeEventListener("onLogClientVeCreated",lj),a.removeEventListener("onLogServerVeCreated",nj),a.removeEventListener("onLogToGel",kj),a.removeEventListener("onLogVeClicked",oj),a.removeEventListener("onLogVesShown",pj),a.removeEventListener("onReady",
qj),a.destroy();jj={}});
window.addEventListener?(window.addEventListener("load",rj),window.addEventListener("unload",sj)):window.attachEvent&&(window.attachEvent("onload",rj),window.attachEvent("onunload",sj));Ka("yt.abuse.player.botguardInitialized",v("yt.abuse.player.botguardInitialized")||ag);Ka("yt.abuse.player.invokeBotguard",v("yt.abuse.player.invokeBotguard")||bg);Ka("yt.abuse.dclkstatus.checkDclkStatus",v("yt.abuse.dclkstatus.checkDclkStatus")||Sf);
Ka("yt.player.exports.navigate",v("yt.player.exports.navigate")||ch);Ka("yt.util.activity.init",v("yt.util.activity.init")||mg);Ka("yt.util.activity.getTimeSinceActive",v("yt.util.activity.getTimeSinceActive")||pg);Ka("yt.util.activity.setTimestamp",v("yt.util.activity.setTimestamp")||ng);}).call(this);
