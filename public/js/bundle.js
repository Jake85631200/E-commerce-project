parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"VDCA":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.showAlert=exports.hideAlert=void 0;var e=exports.hideAlert=function(){var e=document.querySelector(".alert");e&&e.parentElement.removeChild(e)},r=exports.showAlert=function(r,l){var t,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1.5;e(),t="error"===r?'<div class="alert alert-danger d-flex" role="alert">\n    <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Success:">\n      <use href="#check-circle-fill"></use>\n    </svg>\n    <div>'.concat(l,"</div>\n  </div>"):'<div class="alert alert-'.concat(r,' d-flex" role="alert">\n      <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Success:">\n        <use href="#check-circle-fill"></use>\n      </svg>\n      <div>').concat(l,"</div>\n    </div>"),document.querySelector("body").insertAdjacentHTML("afterbegin",t),window.setTimeout(e,1e3*s)};
},{}],"nb4k":[function(require,module,exports) {
"use strict";function e(e,t){return function(){return e.apply(t,arguments)}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"rH1J":[function(require,module,exports) {

var t,e,n=module.exports={};function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===r||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}function u(t){if(e===clearTimeout)return clearTimeout(t);if((e===o||!e)&&clearTimeout)return e=clearTimeout,clearTimeout(t);try{return e(t)}catch(n){try{return e.call(null,t)}catch(n){return e.call(this,t)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:r}catch(n){t=r}try{e="function"==typeof clearTimeout?clearTimeout:o}catch(n){e=o}}();var c,s=[],l=!1,a=-1;function f(){l&&c&&(l=!1,c.length?s=c.concat(s):a=-1,s.length&&h())}function h(){if(!l){var t=i(f);l=!0;for(var e=s.length;e;){for(c=s,s=[];++a<e;)c&&c[a].run();a=-1,e=s.length}c=null,l=!1,u(t)}}function m(t,e){this.fun=t,this.array=e}function p(){}n.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];s.push(new m(t,e)),1!==s.length||l||i(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.env={},n.argv=[],n.version="",n.versions={},n.on=p,n.addListener=p,n.once=p,n.off=p,n.removeListener=p,n.removeAllListeners=p,n.emit=p,n.prependListener=p,n.prependOnceListener=p,n.listeners=function(t){return[]},n.binding=function(t){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(t){throw new Error("process.chdir is not supported")},n.umask=function(){return 0};
},{}],"zIVT":[function(require,module,exports) {
var global = arguments[3];
var define;
var process = require("process");
var e,t=arguments[3],r=require("process");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n=o(require("./helpers/bind.js"));function o(e){return e&&e.__esModule?e:{default:e}}const{toString:s}=Object.prototype,{getPrototypeOf:i}=Object,a=(e=>t=>{const r=s.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),l=e=>(e=e.toLowerCase(),t=>a(t)===e),c=e=>t=>typeof t===e,{isArray:u}=Array,f=c("undefined");function p(e){return null!==e&&!f(e)&&null!==e.constructor&&!f(e.constructor)&&m(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const d=l("ArrayBuffer");function y(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&d(e.buffer)}const b=c("string"),m=c("function"),g=c("number"),h=e=>null!==e&&"object"==typeof e,O=e=>!0===e||!1===e,w=e=>{if("object"!==a(e))return!1;const t=i(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},j=l("Date"),A=l("File"),F=l("Blob"),S=l("FileList"),P=e=>h(e)&&m(e.pipe),x=e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||m(e.append)&&("formdata"===(t=a(e))||"object"===t&&m(e.toString)&&"[object FormData]"===e.toString()))},L=l("URLSearchParams"),[T,B,C,D]=["ReadableStream","Request","Response","Headers"].map(l),v=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function E(e,t,{allOwnKeys:r=!1}={}){if(null==e)return;let n,o;if("object"!=typeof e&&(e=[e]),u(e))for(n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else{const o=r?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let i;for(n=0;n<s;n++)i=o[n],t.call(null,e[i],i,e)}}function M(e,t){t=t.toLowerCase();const r=Object.keys(e);let n,o=r.length;for(;o-- >0;)if(t===(n=r[o]).toLowerCase())return n;return null}const R=(()=>"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:t)(),I=e=>!f(e)&&e!==R;function k(){const{caseless:e}=I(this)&&this||{},t={},r=(r,n)=>{const o=e&&M(t,n)||n;w(t[o])&&w(r)?t[o]=k(t[o],r):w(r)?t[o]=k({},r):u(r)?t[o]=r.slice():t[o]=r};for(let n=0,o=arguments.length;n<o;n++)arguments[n]&&E(arguments[n],r);return t}const H=(e,t,r,{allOwnKeys:o}={})=>(E(t,(t,o)=>{r&&m(t)?e[o]=(0,n.default)(t,r):e[o]=t},{allOwnKeys:o}),e),q=e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),N=(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},U=(e,t,r,n)=>{let o,s,a;const l={};if(t=t||{},null==e)return t;do{for(s=(o=Object.getOwnPropertyNames(e)).length;s-- >0;)a=o[s],n&&!n(a,e,t)||l[a]||(t[a]=e[a],l[a]=!0);e=!1!==r&&i(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},_=(e,t,r)=>{e=String(e),(void 0===r||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return-1!==n&&n===r},K=e=>{if(!e)return null;if(u(e))return e;let t=e.length;if(!g(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},z=(e=>t=>e&&t instanceof e)("undefined"!=typeof Uint8Array&&i(Uint8Array)),G=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let n;for(;(n=r.next())&&!n.done;){const r=n.value;t.call(e,r[0],r[1])}},V=(e,t)=>{let r;const n=[];for(;null!==(r=e.exec(t));)n.push(r);return n},J=l("HTMLFormElement"),$=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,t,r){return t.toUpperCase()+r}),W=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),Q=l("RegExp"),X=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};E(r,(r,o)=>{let s;!1!==(s=t(r,o,e))&&(n[o]=s||r)}),Object.defineProperties(e,n)},Y=e=>{X(e,(t,r)=>{if(m(e)&&-1!==["arguments","caller","callee"].indexOf(r))return!1;const n=e[r];m(n)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=(()=>{throw Error("Can not rewrite read-only method '"+r+"'")})))})},Z=(e,t)=>{const r={},n=e=>{e.forEach(e=>{r[e]=!0})};return u(e)?n(e):n(String(e).split(t)),r},ee=()=>{},te=(e,t)=>null!=e&&Number.isFinite(e=+e)?e:t,re="abcdefghijklmnopqrstuvwxyz",ne="0123456789",oe={DIGIT:ne,ALPHA:re,ALPHA_DIGIT:re+re.toUpperCase()+ne},se=(e=16,t=oe.ALPHA_DIGIT)=>{let r="";const{length:n}=t;for(;e--;)r+=t[Math.random()*n|0];return r};function ie(e){return!!(e&&m(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])}const ae=e=>{const t=new Array(10),r=(e,n)=>{if(h(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[n]=e;const o=u(e)?[]:{};return E(e,(e,t)=>{const s=r(e,n+1);!f(s)&&(o[t]=s)}),t[n]=void 0,o}}return e};return r(e,0)},le=l("AsyncFunction"),ce=e=>e&&(h(e)||m(e))&&m(e.then)&&m(e.catch),ue=((e,t)=>e?setImmediate:t?((e,t)=>(R.addEventListener("message",({source:r,data:n})=>{r===R&&n===e&&t.length&&t.shift()()},!1),r=>{t.push(r),R.postMessage(e,"*")}))(`axios@${Math.random()}`,[]):e=>setTimeout(e))("function"==typeof setImmediate,m(R.postMessage)),fe="undefined"!=typeof queueMicrotask?queueMicrotask.bind(R):void 0!==r&&r.nextTick||ue;var pe=exports.default={isArray:u,isArrayBuffer:d,isBuffer:p,isFormData:x,isArrayBufferView:y,isString:b,isNumber:g,isBoolean:O,isObject:h,isPlainObject:w,isReadableStream:T,isRequest:B,isResponse:C,isHeaders:D,isUndefined:f,isDate:j,isFile:A,isBlob:F,isRegExp:Q,isFunction:m,isStream:P,isURLSearchParams:L,isTypedArray:z,isFileList:S,forEach:E,merge:k,extend:H,trim:v,stripBOM:q,inherits:N,toFlatObject:U,kindOf:a,kindOfTest:l,endsWith:_,toArray:K,forEachEntry:G,matchAll:V,isHTMLForm:J,hasOwnProperty:W,hasOwnProp:W,reduceDescriptors:X,freezeMethods:Y,toObjectSet:Z,toCamelCase:$,noop:ee,toFiniteNumber:te,findKey:M,global:R,isContextDefined:I,ALPHABET:oe,generateString:se,isSpecCompliantForm:ie,toJSONObject:ae,isAsyncFn:le,isThenable:ce,setImmediate:ue,asap:fe};
},{"./helpers/bind.js":"nb4k","process":"rH1J"}],"W9kj":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e(require("../utils.js"));function e(t){return t&&t.__esModule?t:{default:t}}function r(t,e,r,s,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=t,this.name="AxiosError",e&&(this.code=e),r&&(this.config=r),s&&(this.request=s),i&&(this.response=i,this.status=i.status?i.status:null)}t.default.inherits(r,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:t.default.toJSONObject(this.config),code:this.code,status:this.status}}});const s=r.prototype,i={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{i[t]={value:t}}),Object.defineProperties(r,i),Object.defineProperty(s,"isAxiosError",{value:!0}),r.from=((e,i,o,a,c,u)=>{const n=Object.create(s);return t.default.toFlatObject(e,n,function(t){return t!==Error.prototype},t=>"isAxiosError"!==t),r.call(n,e.message,i,o,a,c),n.cause=e,n.name=e.name,u&&Object.assign(n,u),n});var o=exports.default=r;
},{"../utils.js":"zIVT"}],"e98R":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=exports.default=null;
},{}],"QAnv":[function(require,module,exports) {
"use strict";exports.byteLength=u,exports.toByteArray=i,exports.fromByteArray=d;for(var r=[],t=[],e="undefined"!=typeof Uint8Array?Uint8Array:Array,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",o=0,a=n.length;o<a;++o)r[o]=n[o],t[n.charCodeAt(o)]=o;function h(r){var t=r.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var e=r.indexOf("=");return-1===e&&(e=t),[e,e===t?0:4-e%4]}function u(r){var t=h(r),e=t[0],n=t[1];return 3*(e+n)/4-n}function c(r,t,e){return 3*(t+e)/4-e}function i(r){var n,o,a=h(r),u=a[0],i=a[1],f=new e(c(r,u,i)),A=0,d=i>0?u-4:u;for(o=0;o<d;o+=4)n=t[r.charCodeAt(o)]<<18|t[r.charCodeAt(o+1)]<<12|t[r.charCodeAt(o+2)]<<6|t[r.charCodeAt(o+3)],f[A++]=n>>16&255,f[A++]=n>>8&255,f[A++]=255&n;return 2===i&&(n=t[r.charCodeAt(o)]<<2|t[r.charCodeAt(o+1)]>>4,f[A++]=255&n),1===i&&(n=t[r.charCodeAt(o)]<<10|t[r.charCodeAt(o+1)]<<4|t[r.charCodeAt(o+2)]>>2,f[A++]=n>>8&255,f[A++]=255&n),f}function f(t){return r[t>>18&63]+r[t>>12&63]+r[t>>6&63]+r[63&t]}function A(r,t,e){for(var n,o=[],a=t;a<e;a+=3)n=(r[a]<<16&16711680)+(r[a+1]<<8&65280)+(255&r[a+2]),o.push(f(n));return o.join("")}function d(t){for(var e,n=t.length,o=n%3,a=[],h=0,u=n-o;h<u;h+=16383)a.push(A(t,h,h+16383>u?u:h+16383));return 1===o?(e=t[n-1],a.push(r[e>>2]+r[e<<4&63]+"==")):2===o&&(e=(t[n-2]<<8)+t[n-1],a.push(r[e>>10]+r[e>>4&63]+r[e<<2&63]+"=")),a.join("")}t["-".charCodeAt(0)]=62,t["_".charCodeAt(0)]=63;
},{}],"O1Qa":[function(require,module,exports) {
exports.read=function(a,o,t,r,h){var M,p,w=8*h-r-1,f=(1<<w)-1,e=f>>1,i=-7,N=t?h-1:0,n=t?-1:1,s=a[o+N];for(N+=n,M=s&(1<<-i)-1,s>>=-i,i+=w;i>0;M=256*M+a[o+N],N+=n,i-=8);for(p=M&(1<<-i)-1,M>>=-i,i+=r;i>0;p=256*p+a[o+N],N+=n,i-=8);if(0===M)M=1-e;else{if(M===f)return p?NaN:1/0*(s?-1:1);p+=Math.pow(2,r),M-=e}return(s?-1:1)*p*Math.pow(2,M-r)},exports.write=function(a,o,t,r,h,M){var p,w,f,e=8*M-h-1,i=(1<<e)-1,N=i>>1,n=23===h?Math.pow(2,-24)-Math.pow(2,-77):0,s=r?0:M-1,u=r?1:-1,l=o<0||0===o&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(w=isNaN(o)?1:0,p=i):(p=Math.floor(Math.log(o)/Math.LN2),o*(f=Math.pow(2,-p))<1&&(p--,f*=2),(o+=p+N>=1?n/f:n*Math.pow(2,1-N))*f>=2&&(p++,f/=2),p+N>=i?(w=0,p=i):p+N>=1?(w=(o*f-1)*Math.pow(2,h),p+=N):(w=o*Math.pow(2,N-1)*Math.pow(2,h),p=0));h>=8;a[t+s]=255&w,s+=u,w/=256,h-=8);for(p=p<<h|w,e+=h;e>0;a[t+s]=255&p,s+=u,p/=256,e-=8);a[t+s-u]|=128*l};
},{}],"ZCp3":[function(require,module,exports) {
var r={}.toString;module.exports=Array.isArray||function(t){return"[object Array]"==r.call(t)};
},{}],"fe91":[function(require,module,exports) {

var global = arguments[3];
var t=arguments[3],r=require("base64-js"),e=require("ieee754"),n=require("isarray");function i(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(r){return!1}}function o(){return f.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function u(t,r){if(o()<r)throw new RangeError("Invalid typed array length");return f.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(r)).__proto__=f.prototype:(null===t&&(t=new f(r)),t.length=r),t}function f(t,r,e){if(!(f.TYPED_ARRAY_SUPPORT||this instanceof f))return new f(t,r,e);if("number"==typeof t){if("string"==typeof r)throw new Error("If encoding is specified then the first argument must be a string");return c(this,t)}return s(this,t,r,e)}function s(t,r,e,n){if("number"==typeof r)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&r instanceof ArrayBuffer?g(t,r,e,n):"string"==typeof r?l(t,r,e):y(t,r)}function h(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function a(t,r,e,n){return h(r),r<=0?u(t,r):void 0!==e?"string"==typeof n?u(t,r).fill(e,n):u(t,r).fill(e):u(t,r)}function c(t,r){if(h(r),t=u(t,r<0?0:0|w(r)),!f.TYPED_ARRAY_SUPPORT)for(var e=0;e<r;++e)t[e]=0;return t}function l(t,r,e){if("string"==typeof e&&""!==e||(e="utf8"),!f.isEncoding(e))throw new TypeError('"encoding" must be a valid string encoding');var n=0|v(r,e),i=(t=u(t,n)).write(r,e);return i!==n&&(t=t.slice(0,i)),t}function p(t,r){var e=r.length<0?0:0|w(r.length);t=u(t,e);for(var n=0;n<e;n+=1)t[n]=255&r[n];return t}function g(t,r,e,n){if(r.byteLength,e<0||r.byteLength<e)throw new RangeError("'offset' is out of bounds");if(r.byteLength<e+(n||0))throw new RangeError("'length' is out of bounds");return r=void 0===e&&void 0===n?new Uint8Array(r):void 0===n?new Uint8Array(r,e):new Uint8Array(r,e,n),f.TYPED_ARRAY_SUPPORT?(t=r).__proto__=f.prototype:t=p(t,r),t}function y(t,r){if(f.isBuffer(r)){var e=0|w(r.length);return 0===(t=u(t,e)).length?t:(r.copy(t,0,0,e),t)}if(r){if("undefined"!=typeof ArrayBuffer&&r.buffer instanceof ArrayBuffer||"length"in r)return"number"!=typeof r.length||W(r.length)?u(t,0):p(t,r);if("Buffer"===r.type&&n(r.data))return p(t,r.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function w(t){if(t>=o())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+o().toString(16)+" bytes");return 0|t}function d(t){return+t!=t&&(t=0),f.alloc(+t)}function v(t,r){if(f.isBuffer(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var e=t.length;if(0===e)return 0;for(var n=!1;;)switch(r){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":case void 0:return $(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*e;case"hex":return e>>>1;case"base64":return K(t).length;default:if(n)return $(t).length;r=(""+r).toLowerCase(),n=!0}}function E(t,r,e){var n=!1;if((void 0===r||r<0)&&(r=0),r>this.length)return"";if((void 0===e||e>this.length)&&(e=this.length),e<=0)return"";if((e>>>=0)<=(r>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return x(this,r,e);case"utf8":case"utf-8":return Y(this,r,e);case"ascii":return L(this,r,e);case"latin1":case"binary":return D(this,r,e);case"base64":return S(this,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return C(this,r,e);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function b(t,r,e){var n=t[r];t[r]=t[e],t[e]=n}function R(t,r,e,n,i){if(0===t.length)return-1;if("string"==typeof e?(n=e,e=0):e>2147483647?e=2147483647:e<-2147483648&&(e=-2147483648),e=+e,isNaN(e)&&(e=i?0:t.length-1),e<0&&(e=t.length+e),e>=t.length){if(i)return-1;e=t.length-1}else if(e<0){if(!i)return-1;e=0}if("string"==typeof r&&(r=f.from(r,n)),f.isBuffer(r))return 0===r.length?-1:_(t,r,e,n,i);if("number"==typeof r)return r&=255,f.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,r,e):Uint8Array.prototype.lastIndexOf.call(t,r,e):_(t,[r],e,n,i);throw new TypeError("val must be string, number or Buffer")}function _(t,r,e,n,i){var o,u=1,f=t.length,s=r.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||r.length<2)return-1;u=2,f/=2,s/=2,e/=2}function h(t,r){return 1===u?t[r]:t.readUInt16BE(r*u)}if(i){var a=-1;for(o=e;o<f;o++)if(h(t,o)===h(r,-1===a?0:o-a)){if(-1===a&&(a=o),o-a+1===s)return a*u}else-1!==a&&(o-=o-a),a=-1}else for(e+s>f&&(e=f-s),o=e;o>=0;o--){for(var c=!0,l=0;l<s;l++)if(h(t,o+l)!==h(r,l)){c=!1;break}if(c)return o}return-1}function A(t,r,e,n){e=Number(e)||0;var i=t.length-e;n?(n=Number(n))>i&&(n=i):n=i;var o=r.length;if(o%2!=0)throw new TypeError("Invalid hex string");n>o/2&&(n=o/2);for(var u=0;u<n;++u){var f=parseInt(r.substr(2*u,2),16);if(isNaN(f))return u;t[e+u]=f}return u}function m(t,r,e,n){return Q($(r,t.length-e),t,e,n)}function P(t,r,e,n){return Q(G(r),t,e,n)}function T(t,r,e,n){return P(t,r,e,n)}function B(t,r,e,n){return Q(K(r),t,e,n)}function U(t,r,e,n){return Q(H(r,t.length-e),t,e,n)}function S(t,e,n){return 0===e&&n===t.length?r.fromByteArray(t):r.fromByteArray(t.slice(e,n))}function Y(t,r,e){e=Math.min(t.length,e);for(var n=[],i=r;i<e;){var o,u,f,s,h=t[i],a=null,c=h>239?4:h>223?3:h>191?2:1;if(i+c<=e)switch(c){case 1:h<128&&(a=h);break;case 2:128==(192&(o=t[i+1]))&&(s=(31&h)<<6|63&o)>127&&(a=s);break;case 3:o=t[i+1],u=t[i+2],128==(192&o)&&128==(192&u)&&(s=(15&h)<<12|(63&o)<<6|63&u)>2047&&(s<55296||s>57343)&&(a=s);break;case 4:o=t[i+1],u=t[i+2],f=t[i+3],128==(192&o)&&128==(192&u)&&128==(192&f)&&(s=(15&h)<<18|(63&o)<<12|(63&u)<<6|63&f)>65535&&s<1114112&&(a=s)}null===a?(a=65533,c=1):a>65535&&(a-=65536,n.push(a>>>10&1023|55296),a=56320|1023&a),n.push(a),i+=c}return O(n)}exports.Buffer=f,exports.SlowBuffer=d,exports.INSPECT_MAX_BYTES=50,f.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:i(),exports.kMaxLength=o(),f.poolSize=8192,f._augment=function(t){return t.__proto__=f.prototype,t},f.from=function(t,r,e){return s(null,t,r,e)},f.TYPED_ARRAY_SUPPORT&&(f.prototype.__proto__=Uint8Array.prototype,f.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&f[Symbol.species]===f&&Object.defineProperty(f,Symbol.species,{value:null,configurable:!0})),f.alloc=function(t,r,e){return a(null,t,r,e)},f.allocUnsafe=function(t){return c(null,t)},f.allocUnsafeSlow=function(t){return c(null,t)},f.isBuffer=function(t){return!(null==t||!t._isBuffer)},f.compare=function(t,r){if(!f.isBuffer(t)||!f.isBuffer(r))throw new TypeError("Arguments must be Buffers");if(t===r)return 0;for(var e=t.length,n=r.length,i=0,o=Math.min(e,n);i<o;++i)if(t[i]!==r[i]){e=t[i],n=r[i];break}return e<n?-1:n<e?1:0},f.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},f.concat=function(t,r){if(!n(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return f.alloc(0);var e;if(void 0===r)for(r=0,e=0;e<t.length;++e)r+=t[e].length;var i=f.allocUnsafe(r),o=0;for(e=0;e<t.length;++e){var u=t[e];if(!f.isBuffer(u))throw new TypeError('"list" argument must be an Array of Buffers');u.copy(i,o),o+=u.length}return i},f.byteLength=v,f.prototype._isBuffer=!0,f.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<t;r+=2)b(this,r,r+1);return this},f.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<t;r+=4)b(this,r,r+3),b(this,r+1,r+2);return this},f.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<t;r+=8)b(this,r,r+7),b(this,r+1,r+6),b(this,r+2,r+5),b(this,r+3,r+4);return this},f.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?Y(this,0,t):E.apply(this,arguments)},f.prototype.equals=function(t){if(!f.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===f.compare(this,t)},f.prototype.inspect=function(){var t="",r=exports.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,r).match(/.{2}/g).join(" "),this.length>r&&(t+=" ... ")),"<Buffer "+t+">"},f.prototype.compare=function(t,r,e,n,i){if(!f.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===r&&(r=0),void 0===e&&(e=t?t.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),r<0||e>t.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&r>=e)return 0;if(n>=i)return-1;if(r>=e)return 1;if(this===t)return 0;for(var o=(i>>>=0)-(n>>>=0),u=(e>>>=0)-(r>>>=0),s=Math.min(o,u),h=this.slice(n,i),a=t.slice(r,e),c=0;c<s;++c)if(h[c]!==a[c]){o=h[c],u=a[c];break}return o<u?-1:u<o?1:0},f.prototype.includes=function(t,r,e){return-1!==this.indexOf(t,r,e)},f.prototype.indexOf=function(t,r,e){return R(this,t,r,e,!0)},f.prototype.lastIndexOf=function(t,r,e){return R(this,t,r,e,!1)},f.prototype.write=function(t,r,e,n){if(void 0===r)n="utf8",e=this.length,r=0;else if(void 0===e&&"string"==typeof r)n=r,e=this.length,r=0;else{if(!isFinite(r))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");r|=0,isFinite(e)?(e|=0,void 0===n&&(n="utf8")):(n=e,e=void 0)}var i=this.length-r;if((void 0===e||e>i)&&(e=i),t.length>0&&(e<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var o=!1;;)switch(n){case"hex":return A(this,t,r,e);case"utf8":case"utf-8":return m(this,t,r,e);case"ascii":return P(this,t,r,e);case"latin1":case"binary":return T(this,t,r,e);case"base64":return B(this,t,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return U(this,t,r,e);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},f.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var I=4096;function O(t){var r=t.length;if(r<=I)return String.fromCharCode.apply(String,t);for(var e="",n=0;n<r;)e+=String.fromCharCode.apply(String,t.slice(n,n+=I));return e}function L(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;i<e;++i)n+=String.fromCharCode(127&t[i]);return n}function D(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;i<e;++i)n+=String.fromCharCode(t[i]);return n}function x(t,r,e){var n=t.length;(!r||r<0)&&(r=0),(!e||e<0||e>n)&&(e=n);for(var i="",o=r;o<e;++o)i+=Z(t[o]);return i}function C(t,r,e){for(var n=t.slice(r,e),i="",o=0;o<n.length;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}function M(t,r,e){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+r>e)throw new RangeError("Trying to access beyond buffer length")}function k(t,r,e,n,i,o){if(!f.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>i||r<o)throw new RangeError('"value" argument is out of bounds');if(e+n>t.length)throw new RangeError("Index out of range")}function N(t,r,e,n){r<0&&(r=65535+r+1);for(var i=0,o=Math.min(t.length-e,2);i<o;++i)t[e+i]=(r&255<<8*(n?i:1-i))>>>8*(n?i:1-i)}function z(t,r,e,n){r<0&&(r=4294967295+r+1);for(var i=0,o=Math.min(t.length-e,4);i<o;++i)t[e+i]=r>>>8*(n?i:3-i)&255}function F(t,r,e,n,i,o){if(e+n>t.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function j(t,r,n,i,o){return o||F(t,r,n,4,3.4028234663852886e38,-3.4028234663852886e38),e.write(t,r,n,i,23,4),n+4}function q(t,r,n,i,o){return o||F(t,r,n,8,1.7976931348623157e308,-1.7976931348623157e308),e.write(t,r,n,i,52,8),n+8}f.prototype.slice=function(t,r){var e,n=this.length;if((t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(r=void 0===r?n:~~r)<0?(r+=n)<0&&(r=0):r>n&&(r=n),r<t&&(r=t),f.TYPED_ARRAY_SUPPORT)(e=this.subarray(t,r)).__proto__=f.prototype;else{var i=r-t;e=new f(i,void 0);for(var o=0;o<i;++o)e[o]=this[o+t]}return e},f.prototype.readUIntLE=function(t,r,e){t|=0,r|=0,e||M(t,r,this.length);for(var n=this[t],i=1,o=0;++o<r&&(i*=256);)n+=this[t+o]*i;return n},f.prototype.readUIntBE=function(t,r,e){t|=0,r|=0,e||M(t,r,this.length);for(var n=this[t+--r],i=1;r>0&&(i*=256);)n+=this[t+--r]*i;return n},f.prototype.readUInt8=function(t,r){return r||M(t,1,this.length),this[t]},f.prototype.readUInt16LE=function(t,r){return r||M(t,2,this.length),this[t]|this[t+1]<<8},f.prototype.readUInt16BE=function(t,r){return r||M(t,2,this.length),this[t]<<8|this[t+1]},f.prototype.readUInt32LE=function(t,r){return r||M(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},f.prototype.readUInt32BE=function(t,r){return r||M(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},f.prototype.readIntLE=function(t,r,e){t|=0,r|=0,e||M(t,r,this.length);for(var n=this[t],i=1,o=0;++o<r&&(i*=256);)n+=this[t+o]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*r)),n},f.prototype.readIntBE=function(t,r,e){t|=0,r|=0,e||M(t,r,this.length);for(var n=r,i=1,o=this[t+--n];n>0&&(i*=256);)o+=this[t+--n]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*r)),o},f.prototype.readInt8=function(t,r){return r||M(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},f.prototype.readInt16LE=function(t,r){r||M(t,2,this.length);var e=this[t]|this[t+1]<<8;return 32768&e?4294901760|e:e},f.prototype.readInt16BE=function(t,r){r||M(t,2,this.length);var e=this[t+1]|this[t]<<8;return 32768&e?4294901760|e:e},f.prototype.readInt32LE=function(t,r){return r||M(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},f.prototype.readInt32BE=function(t,r){return r||M(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},f.prototype.readFloatLE=function(t,r){return r||M(t,4,this.length),e.read(this,t,!0,23,4)},f.prototype.readFloatBE=function(t,r){return r||M(t,4,this.length),e.read(this,t,!1,23,4)},f.prototype.readDoubleLE=function(t,r){return r||M(t,8,this.length),e.read(this,t,!0,52,8)},f.prototype.readDoubleBE=function(t,r){return r||M(t,8,this.length),e.read(this,t,!1,52,8)},f.prototype.writeUIntLE=function(t,r,e,n){(t=+t,r|=0,e|=0,n)||k(this,t,r,e,Math.pow(2,8*e)-1,0);var i=1,o=0;for(this[r]=255&t;++o<e&&(i*=256);)this[r+o]=t/i&255;return r+e},f.prototype.writeUIntBE=function(t,r,e,n){(t=+t,r|=0,e|=0,n)||k(this,t,r,e,Math.pow(2,8*e)-1,0);var i=e-1,o=1;for(this[r+i]=255&t;--i>=0&&(o*=256);)this[r+i]=t/o&255;return r+e},f.prototype.writeUInt8=function(t,r,e){return t=+t,r|=0,e||k(this,t,r,1,255,0),f.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[r]=255&t,r+1},f.prototype.writeUInt16LE=function(t,r,e){return t=+t,r|=0,e||k(this,t,r,2,65535,0),f.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):N(this,t,r,!0),r+2},f.prototype.writeUInt16BE=function(t,r,e){return t=+t,r|=0,e||k(this,t,r,2,65535,0),f.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):N(this,t,r,!1),r+2},f.prototype.writeUInt32LE=function(t,r,e){return t=+t,r|=0,e||k(this,t,r,4,4294967295,0),f.TYPED_ARRAY_SUPPORT?(this[r+3]=t>>>24,this[r+2]=t>>>16,this[r+1]=t>>>8,this[r]=255&t):z(this,t,r,!0),r+4},f.prototype.writeUInt32BE=function(t,r,e){return t=+t,r|=0,e||k(this,t,r,4,4294967295,0),f.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):z(this,t,r,!1),r+4},f.prototype.writeIntLE=function(t,r,e,n){if(t=+t,r|=0,!n){var i=Math.pow(2,8*e-1);k(this,t,r,e,i-1,-i)}var o=0,u=1,f=0;for(this[r]=255&t;++o<e&&(u*=256);)t<0&&0===f&&0!==this[r+o-1]&&(f=1),this[r+o]=(t/u>>0)-f&255;return r+e},f.prototype.writeIntBE=function(t,r,e,n){if(t=+t,r|=0,!n){var i=Math.pow(2,8*e-1);k(this,t,r,e,i-1,-i)}var o=e-1,u=1,f=0;for(this[r+o]=255&t;--o>=0&&(u*=256);)t<0&&0===f&&0!==this[r+o+1]&&(f=1),this[r+o]=(t/u>>0)-f&255;return r+e},f.prototype.writeInt8=function(t,r,e){return t=+t,r|=0,e||k(this,t,r,1,127,-128),f.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[r]=255&t,r+1},f.prototype.writeInt16LE=function(t,r,e){return t=+t,r|=0,e||k(this,t,r,2,32767,-32768),f.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):N(this,t,r,!0),r+2},f.prototype.writeInt16BE=function(t,r,e){return t=+t,r|=0,e||k(this,t,r,2,32767,-32768),f.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):N(this,t,r,!1),r+2},f.prototype.writeInt32LE=function(t,r,e){return t=+t,r|=0,e||k(this,t,r,4,2147483647,-2147483648),f.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8,this[r+2]=t>>>16,this[r+3]=t>>>24):z(this,t,r,!0),r+4},f.prototype.writeInt32BE=function(t,r,e){return t=+t,r|=0,e||k(this,t,r,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),f.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):z(this,t,r,!1),r+4},f.prototype.writeFloatLE=function(t,r,e){return j(this,t,r,!0,e)},f.prototype.writeFloatBE=function(t,r,e){return j(this,t,r,!1,e)},f.prototype.writeDoubleLE=function(t,r,e){return q(this,t,r,!0,e)},f.prototype.writeDoubleBE=function(t,r,e){return q(this,t,r,!1,e)},f.prototype.copy=function(t,r,e,n){if(e||(e=0),n||0===n||(n=this.length),r>=t.length&&(r=t.length),r||(r=0),n>0&&n<e&&(n=e),n===e)return 0;if(0===t.length||0===this.length)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(e<0||e>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-r<n-e&&(n=t.length-r+e);var i,o=n-e;if(this===t&&e<r&&r<n)for(i=o-1;i>=0;--i)t[i+r]=this[i+e];else if(o<1e3||!f.TYPED_ARRAY_SUPPORT)for(i=0;i<o;++i)t[i+r]=this[i+e];else Uint8Array.prototype.set.call(t,this.subarray(e,e+o),r);return o},f.prototype.fill=function(t,r,e,n){if("string"==typeof t){if("string"==typeof r?(n=r,r=0,e=this.length):"string"==typeof e&&(n=e,e=this.length),1===t.length){var i=t.charCodeAt(0);i<256&&(t=i)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!f.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof t&&(t&=255);if(r<0||this.length<r||this.length<e)throw new RangeError("Out of range index");if(e<=r)return this;var o;if(r>>>=0,e=void 0===e?this.length:e>>>0,t||(t=0),"number"==typeof t)for(o=r;o<e;++o)this[o]=t;else{var u=f.isBuffer(t)?t:$(new f(t,n).toString()),s=u.length;for(o=0;o<e-r;++o)this[o+r]=u[o%s]}return this};var V=/[^+\/0-9A-Za-z-_]/g;function X(t){if((t=J(t).replace(V,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}function J(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function Z(t){return t<16?"0"+t.toString(16):t.toString(16)}function $(t,r){var e;r=r||1/0;for(var n=t.length,i=null,o=[],u=0;u<n;++u){if((e=t.charCodeAt(u))>55295&&e<57344){if(!i){if(e>56319){(r-=3)>-1&&o.push(239,191,189);continue}if(u+1===n){(r-=3)>-1&&o.push(239,191,189);continue}i=e;continue}if(e<56320){(r-=3)>-1&&o.push(239,191,189),i=e;continue}e=65536+(i-55296<<10|e-56320)}else i&&(r-=3)>-1&&o.push(239,191,189);if(i=null,e<128){if((r-=1)<0)break;o.push(e)}else if(e<2048){if((r-=2)<0)break;o.push(e>>6|192,63&e|128)}else if(e<65536){if((r-=3)<0)break;o.push(e>>12|224,e>>6&63|128,63&e|128)}else{if(!(e<1114112))throw new Error("Invalid code point");if((r-=4)<0)break;o.push(e>>18|240,e>>12&63|128,e>>6&63|128,63&e|128)}}return o}function G(t){for(var r=[],e=0;e<t.length;++e)r.push(255&t.charCodeAt(e));return r}function H(t,r){for(var e,n,i,o=[],u=0;u<t.length&&!((r-=2)<0);++u)n=(e=t.charCodeAt(u))>>8,i=e%256,o.push(i),o.push(n);return o}function K(t){return r.toByteArray(X(t))}function Q(t,r,e,n){for(var i=0;i<n&&!(i+e>=r.length||i>=t.length);++i)r[i+e]=t[i];return i}function W(t){return t!=t}
},{"base64-js":"QAnv","ieee754":"O1Qa","isarray":"ZCp3","buffer":"fe91"}],"q82J":[function(require,module,exports) {
var Buffer = require("buffer").Buffer;
<<<<<<< HEAD
var e=require("buffer").Buffer;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=i(require("../utils.js")),r=i(require("../core/AxiosError.js")),n=i(require("../platform/node/classes/FormData.js"));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){return t.default.isPlainObject(e)||t.default.isArray(e)}function f(e){return t.default.endsWith(e,"[]")?e.slice(0,-2):e}function o(e,t,r){return e?e.concat(t).map(function(e,t){return e=f(e),!r&&t?"["+e+"]":e}).join(r?".":""):t}function a(e){return t.default.isArray(e)&&!e.some(u)}const l=t.default.toFlatObject(t.default,{},null,function(e){return/^is[A-Z]/.test(e)});function s(i,s,d){if(!t.default.isObject(i))throw new TypeError("target must be an object");s=s||new(n.default||FormData);const c=(d=t.default.toFlatObject(d,{metaTokens:!0,dots:!1,indexes:!1},!1,function(e,r){return!t.default.isUndefined(r[e])})).metaTokens,p=d.visitor||h,b=d.dots,j=d.indexes,y=(d.Blob||"undefined"!=typeof Blob&&Blob)&&t.default.isSpecCompliantForm(s);if(!t.default.isFunction(p))throw new TypeError("visitor must be a function");function m(n){if(null===n)return"";if(t.default.isDate(n))return n.toISOString();if(!y&&t.default.isBlob(n))throw new r.default("Blob is not supported. Use a Buffer instead.");return t.default.isArrayBuffer(n)||t.default.isTypedArray(n)?y&&"function"==typeof Blob?new Blob([n]):e.from(n):n}function h(e,r,n){let i=e;if(e&&!n&&"object"==typeof e)if(t.default.endsWith(r,"{}"))r=c?r:r.slice(0,-2),e=JSON.stringify(e);else if(t.default.isArray(e)&&a(e)||(t.default.isFileList(e)||t.default.endsWith(r,"[]"))&&(i=t.default.toArray(e)))return r=f(r),i.forEach(function(e,n){!t.default.isUndefined(e)&&null!==e&&s.append(!0===j?o([r],n,b):null===j?r:r+"[]",m(e))}),!1;return!!u(e)||(s.append(o(n,r,b),m(e)),!1)}const w=[],B=Object.assign(l,{defaultVisitor:h,convertValue:m,isVisitable:u});if(!t.default.isObject(i))throw new TypeError("data must be an object");return function e(r,n){if(!t.default.isUndefined(r)){if(-1!==w.indexOf(r))throw Error("Circular reference detected in "+n.join("."));w.push(r),t.default.forEach(r,function(r,i){!0===(!(t.default.isUndefined(r)||null===r)&&p.call(s,r,t.default.isString(i)?i.trim():i,n,B))&&e(r,n?n.concat(i):[i])}),w.pop()}}(i),s}var d=exports.default=s;
},{"../utils.js":"zIVT","../core/AxiosError.js":"W9kj","../platform/node/classes/FormData.js":"e98R","buffer":"fe91"}],"BoJJ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e(require("./toFormData.js"));function e(t){return t&&t.__esModule?t:{default:t}}function n(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(t){return e[t]})}function r(e,n){this._pairs=[],e&&(0,t.default)(e,this,n)}const o=r.prototype;o.append=function(t,e){this._pairs.push([t,e])},o.toString=function(t){const e=t?function(e){return t.call(this,e,n)}:n;return this._pairs.map(function(t){return e(t[0])+"="+e(t[1])},"").join("&")};var u=exports.default=r;
},{"./toFormData.js":"q82J"}],"RS1v":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=n;var e=t(require("../utils.js")),r=t(require("../helpers/AxiosURLSearchParams.js"));function t(e){return e&&e.__esModule?e:{default:e}}function i(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function n(t,n,a){if(!n)return t;const s=a&&a.encode||i;e.default.isFunction(a)&&(a={serialize:a});const c=a&&a.serialize;let l;if(l=c?c(n,a):e.default.isURLSearchParams(n)?n.toString():new r.default(n,a).toString(s)){const e=t.indexOf("#");-1!==e&&(t=t.slice(0,e)),t+=(-1===t.indexOf("?")?"?":"&")+l}return t}
},{"../utils.js":"zIVT","../helpers/AxiosURLSearchParams.js":"BoJJ"}],"GGkJ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=s(require("./../utils.js"));function s(e){return e&&e.__esModule?e:{default:e}}class r{constructor(){this.handlers=[]}use(e,s,r){return this.handlers.push({fulfilled:e,rejected:s,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(s){e.default.forEach(this.handlers,function(e){null!==e&&s(e)})}}var t=exports.default=r;
},{"./../utils.js":"zIVT"}],"XK0E":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=exports.default={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1};
},{}],"os5V":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=r(require("../../../helpers/AxiosURLSearchParams.js"));function r(e){return e&&e.__esModule?e:{default:e}}var a=exports.default="undefined"!=typeof URLSearchParams?URLSearchParams:e.default;
},{"../../../helpers/AxiosURLSearchParams.js":"BoJJ"}],"bazs":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=exports.default="undefined"!=typeof FormData?FormData:null;
},{}],"mHaB":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=exports.default="undefined"!=typeof Blob?Blob:null;
},{}],"idoZ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=a(require("./classes/URLSearchParams.js")),s=a(require("./classes/FormData.js")),r=a(require("./classes/Blob.js"));function a(e){return e&&e.__esModule?e:{default:e}}var t=exports.default={isBrowser:!0,classes:{URLSearchParams:e.default,FormData:s.default,Blob:r.default},protocols:["http","https","file","blob","url","data"]};
},{"./classes/URLSearchParams.js":"os5V","./classes/FormData.js":"bazs","./classes/Blob.js":"mHaB"}],"cy0q":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.origin=exports.navigator=exports.hasStandardBrowserWebWorkerEnv=exports.hasStandardBrowserEnv=exports.hasBrowserEnv=void 0;const e=exports.hasBrowserEnv="undefined"!=typeof window&&"undefined"!=typeof document,o=exports.navigator="object"==typeof navigator&&navigator||void 0,r=exports.hasStandardBrowserEnv=e&&(!o||["ReactNative","NativeScript","NS"].indexOf(o.product)<0),t=exports.hasStandardBrowserWebWorkerEnv=(()=>"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts)(),n=exports.origin=e&&window.location.href||"http://localhost";
},{}],"muVt":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=u(require("./node/index.js")),t=n(require("./common/utils.js"));function r(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(r=function(e){return e?n:t})(e)}function n(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=r(t);if(n&&n.has(e))return n.get(e);var u={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in e)if("default"!==f&&{}.hasOwnProperty.call(e,f)){var a=o?Object.getOwnPropertyDescriptor(e,f):null;a&&(a.get||a.set)?Object.defineProperty(u,f,a):u[f]=e[f]}return u.default=e,n&&n.set(e,u),u}function u(e){return e&&e.__esModule?e:{default:e}}var o=exports.default={...t,...e.default};
},{"./node/index.js":"idoZ","./common/utils.js":"cy0q"}],"OIpk":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=u;var e=s(require("../utils.js")),t=s(require("./toFormData.js")),r=s(require("../platform/index.js"));function s(e){return e&&e.__esModule?e:{default:e}}function u(s,u){return(0,t.default)(s,new r.default.classes.URLSearchParams,Object.assign({visitor:function(t,s,u,a){return r.default.isNode&&e.default.isBuffer(t)?(this.append(s,t.toString("base64")),!1):a.defaultVisitor.apply(this,arguments)}},u))}
},{"../utils.js":"zIVT","./toFormData.js":"q82J","../platform/index.js":"muVt"}],"K5Tr":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e(require("../utils.js"));function e(t){return t&&t.__esModule?t:{default:t}}function r(e){return t.default.matchAll(/\w+|\[(\w*)]/g,e).map(t=>"[]"===t[0]?"":t[1]||t[0])}function n(t){const e={},r=Object.keys(t);let n;const u=r.length;let l;for(n=0;n<u;n++)e[l=r[n]]=t[l];return e}function u(e){if(t.default.isFormData(e)&&t.default.isFunction(e.entries)){const u={};return t.default.forEachEntry(e,(e,l)=>{!function e(r,u,l,o){let a=r[o++];if("__proto__"===a)return!0;const i=Number.isFinite(+a),s=o>=r.length;return a=!a&&t.default.isArray(l)?l.length:a,s?(t.default.hasOwnProp(l,a)?l[a]=[l[a],u]:l[a]=u,!i):(l[a]&&t.default.isObject(l[a])||(l[a]=[]),e(r,u,l[a],o)&&t.default.isArray(l[a])&&(l[a]=n(l[a])),!i)}(r(e),l,u,0)}),u}return null}var l=exports.default=u;
},{"../utils.js":"zIVT"}],"M0sG":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=o(require("../utils.js")),t=o(require("../core/AxiosError.js")),r=o(require("./transitional.js")),a=o(require("../helpers/toFormData.js")),i=o(require("../helpers/toURLEncodedForm.js")),s=o(require("../platform/index.js")),n=o(require("../helpers/formDataToJSON.js"));function o(e){return e&&e.__esModule?e:{default:e}}function f(t,r,a){if(e.default.isString(t))try{return(r||JSON.parse)(t),e.default.trim(t)}catch(i){if("SyntaxError"!==i.name)throw i}return(a||JSON.stringify)(t)}const u={transitional:r.default,adapter:["xhr","http","fetch"],transformRequest:[function(t,r){const s=r.getContentType()||"",o=s.indexOf("application/json")>-1,u=e.default.isObject(t);if(u&&e.default.isHTMLForm(t)&&(t=new FormData(t)),e.default.isFormData(t))return o?JSON.stringify((0,n.default)(t)):t;if(e.default.isArrayBuffer(t)||e.default.isBuffer(t)||e.default.isStream(t)||e.default.isFile(t)||e.default.isBlob(t)||e.default.isReadableStream(t))return t;if(e.default.isArrayBufferView(t))return t.buffer;if(e.default.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(u){if(s.indexOf("application/x-www-form-urlencoded")>-1)return(0,i.default)(t,this.formSerializer).toString();if((l=e.default.isFileList(t))||s.indexOf("multipart/form-data")>-1){const e=this.env&&this.env.FormData;return(0,a.default)(l?{"files[]":t}:t,e&&new e,this.formSerializer)}}return u||o?(r.setContentType("application/json",!1),f(t)):t}],transformResponse:[function(r){const a=this.transitional||u.transitional,i=a&&a.forcedJSONParsing,s="json"===this.responseType;if(e.default.isResponse(r)||e.default.isReadableStream(r))return r;if(r&&e.default.isString(r)&&(i&&!this.responseType||s)){const e=!(a&&a.silentJSONParsing)&&s;try{return JSON.parse(r)}catch(n){if(e){if("SyntaxError"===n.name)throw t.default.from(n,t.default.ERR_BAD_RESPONSE,this,null,this.response);throw n}}}return r}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:s.default.classes.FormData,Blob:s.default.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};e.default.forEach(["delete","get","head","post","put","patch"],e=>{u.headers[e]={}});var l=exports.default=u;
},{"../utils.js":"zIVT","../core/AxiosError.js":"W9kj","./transitional.js":"XK0E","../helpers/toFormData.js":"q82J","../helpers/toURLEncodedForm.js":"OIpk","../platform/index.js":"muVt","../helpers/formDataToJSON.js":"K5Tr"}],"T8HP":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./../utils.js"));function t(e){return e&&e.__esModule?e:{default:e}}const r=e.default.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var o=e=>{const t={};let o,i,s;return e&&e.split("\n").forEach(function(e){s=e.indexOf(":"),o=e.substring(0,s).trim().toLowerCase(),i=e.substring(s+1).trim(),!o||t[o]&&r[o]||("set-cookie"===o?t[o]?t[o].push(i):t[o]=[i]:t[o]=t[o]?t[o]+", "+i:i)}),t};exports.default=o;
},{"./../utils.js":"zIVT"}],"O9LF":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=r(require("../utils.js")),e=r(require("../helpers/parseHeaders.js"));function r(t){return t&&t.__esModule?t:{default:t}}const s=Symbol("internals");function n(t){return t&&String(t).trim().toLowerCase()}function i(e){return!1===e||null==e?e:t.default.isArray(e)?e.map(i):String(e)}function o(t){const e=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let s;for(;s=r.exec(t);)e[s[1]]=s[2];return e}const c=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function a(e,r,s,n,i){return t.default.isFunction(n)?n.call(this,r,s):(i&&(r=s),t.default.isString(r)?t.default.isString(n)?-1!==r.indexOf(n):t.default.isRegExp(n)?n.test(r):void 0:void 0)}function u(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,e,r)=>e.toUpperCase()+r)}function l(e,r){const s=t.default.toCamelCase(" "+r);["get","set","has"].forEach(t=>{Object.defineProperty(e,t+s,{value:function(e,s,n){return this[t].call(this,r,e,s,n)},configurable:!0})})}class f{constructor(t){t&&this.set(t)}set(r,s,o){const a=this;function u(e,r,s){const o=n(r);if(!o)throw new Error("header name must be a non-empty string");const c=t.default.findKey(a,o);(!c||void 0===a[c]||!0===s||void 0===s&&!1!==a[c])&&(a[c||r]=i(e))}const l=(e,r)=>t.default.forEach(e,(t,e)=>u(t,e,r));if(t.default.isPlainObject(r)||r instanceof this.constructor)l(r,s);else if(t.default.isString(r)&&(r=r.trim())&&!c(r))l((0,e.default)(r),s);else if(t.default.isHeaders(r))for(const[t,e]of r.entries())u(e,t,o);else null!=r&&u(s,r,o);return this}get(e,r){if(e=n(e)){const s=t.default.findKey(this,e);if(s){const e=this[s];if(!r)return e;if(!0===r)return o(e);if(t.default.isFunction(r))return r.call(this,e,s);if(t.default.isRegExp(r))return r.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,r){if(e=n(e)){const s=t.default.findKey(this,e);return!(!s||void 0===this[s]||r&&!a(this,this[s],s,r))}return!1}delete(e,r){const s=this;let i=!1;function o(e){if(e=n(e)){const n=t.default.findKey(s,e);!n||r&&!a(s,s[n],n,r)||(delete s[n],i=!0)}}return t.default.isArray(e)?e.forEach(o):o(e),i}clear(t){const e=Object.keys(this);let r=e.length,s=!1;for(;r--;){const n=e[r];t&&!a(this,this[n],n,t,!0)||(delete this[n],s=!0)}return s}normalize(e){const r=this,s={};return t.default.forEach(this,(n,o)=>{const c=t.default.findKey(s,o);if(c)return r[c]=i(n),void delete r[o];const a=e?u(o):String(o).trim();a!==o&&delete r[o],r[a]=i(n),s[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(e){const r=Object.create(null);return t.default.forEach(this,(s,n)=>{null!=s&&!1!==s&&(r[n]=e&&t.default.isArray(s)?s.join(", "):s)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,e])=>t+": "+e).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...e){const r=new this(t);return e.forEach(t=>r.set(t)),r}static accessor(e){const r=(this[s]=this[s]={accessors:{}}).accessors,i=this.prototype;function o(t){const e=n(t);r[e]||(l(i,t),r[e]=!0)}return t.default.isArray(e)?e.forEach(o):o(e),this}}f.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),t.default.reduceDescriptors(f.prototype,({value:t},e)=>{let r=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(t){this[r]=t}}}),t.default.freezeMethods(f);var d=exports.default=f;
},{"../utils.js":"zIVT","../helpers/parseHeaders.js":"T8HP"}],"i7gz":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=s;var e=u(require("./../utils.js")),t=u(require("../defaults/index.js")),r=u(require("../core/AxiosHeaders.js"));function u(e){return e&&e.__esModule?e:{default:e}}function s(u,s){const a=this||t.default,o=s||a,i=r.default.from(o.headers);let l=o.data;return e.default.forEach(u,function(e){l=e.call(a,l,i.normalize(),s?s.status:void 0)}),i.normalize(),l}
},{"./../utils.js":"zIVT","../defaults/index.js":"M0sG","../core/AxiosHeaders.js":"O9LF"}],"C9l1":[function(require,module,exports) {
"use strict";function e(e){return!(!e||!e.__CANCEL__)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"VMCI":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("../core/AxiosError.js")),r=t(require("../utils.js"));function t(e){return e&&e.__esModule?e:{default:e}}function u(r,t,u){e.default.call(this,null==r?"canceled":r,e.default.ERR_CANCELED,t,u),this.name="CanceledError"}r.default.inherits(u,e.default,{__CANCEL__:!0});var l=exports.default=u;
},{"../core/AxiosError.js":"W9kj","../utils.js":"zIVT"}],"wZW9":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=s;var t=e(require("./AxiosError.js"));function e(t){return t&&t.__esModule?t:{default:t}}function s(e,s,u){const a=u.config.validateStatus;u.status&&a&&!a(u.status)?s(new t.default("Request failed with status code "+u.status,[t.default.ERR_BAD_REQUEST,t.default.ERR_BAD_RESPONSE][Math.floor(u.status/100)-4],u.config,u.request,u)):e(u)}
},{"./AxiosError.js":"W9kj"}],"nS4h":[function(require,module,exports) {
"use strict";function e(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"ITnl":[function(require,module,exports) {
"use strict";function e(e,t){e=e||10;const r=new Array(e),o=new Array(e);let n,u=0,s=0;return t=void 0!==t?t:1e3,function(a){const d=Date.now(),i=o[s];n||(n=d),r[u]=a,o[u]=d;let c=s,f=0;for(;c!==u;)f+=r[c++],c%=e;if((u=(u+1)%e)===s&&(s=(s+1)%e),d-n<t)return;const l=i&&d-i;return l?Math.round(1e3*f/l):void 0}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=exports.default=e;
},{}],"HV2q":[function(require,module,exports) {
"use strict";function e(e,t){let l,o,u=0,n=1e3/t;const r=(t,n=Date.now())=>{u=n,l=null,o&&(clearTimeout(o),o=null),e.apply(null,t)};return[(...e)=>{const t=Date.now(),s=t-u;s>=n?r(e,t):(l=e,o||(o=setTimeout(()=>{o=null,r(l)},n-s)))},()=>l&&r(l)]}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=exports.default=e;
},{}],"BAMY":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.progressEventReducer=exports.progressEventDecorator=exports.asyncDecorator=void 0;var e=r(require("./speedometer.js")),t=r(require("./throttle.js")),o=r(require("../utils.js"));function r(e){return e&&e.__esModule?e:{default:e}}const s=(o,r,s=3)=>{let l=0;const a=(0,e.default)(50,250);return(0,t.default)(e=>{const t=e.loaded,s=e.lengthComputable?e.total:void 0,d=t-l,n=a(d);l=t,o({loaded:t,total:s,progress:s?t/s:void 0,bytes:d,rate:n||void 0,estimated:n&&s&&t<=s?(s-t)/n:void 0,event:e,lengthComputable:null!=s,[r?"download":"upload"]:!0})},s)};exports.progressEventReducer=s;const l=(e,t)=>{const o=null!=e;return[r=>t[0]({lengthComputable:o,total:e,loaded:r}),t[1]]};exports.progressEventDecorator=l;const a=e=>(...t)=>o.default.asap(()=>e(...t));exports.asyncDecorator=a;
},{"./speedometer.js":"ITnl","./throttle.js":"HV2q","../utils.js":"zIVT"}],"DmB6":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("../platform/index.js"));function t(e){return e&&e.__esModule?e:{default:e}}var r=exports.default=e.default.hasStandardBrowserEnv?((t,r)=>o=>(o=new URL(o,e.default.origin),t.protocol===o.protocol&&t.host===o.host&&(r||t.port===o.port)))(new URL(e.default.origin),e.default.navigator&&/(msie|trident)/i.test(e.default.navigator.userAgent)):()=>!0;
},{"../platform/index.js":"muVt"}],"OhlP":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=r(require("./../utils.js")),t=r(require("../platform/index.js"));function r(e){return e&&e.__esModule?e:{default:e}}var o=exports.default=t.default.hasStandardBrowserEnv?{write(t,r,o,n,u,s){const i=[t+"="+encodeURIComponent(r)];e.default.isNumber(o)&&i.push("expires="+new Date(o).toGMTString()),e.default.isString(n)&&i.push("path="+n),e.default.isString(u)&&i.push("domain="+u),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}};
},{"./../utils.js":"zIVT","../platform/index.js":"muVt"}],"ExB0":[function(require,module,exports) {
"use strict";function e(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"BTlr":[function(require,module,exports) {
"use strict";function e(e,r){return r?e.replace(/\/?\/$/,"")+"/"+r.replace(/^\/+/,""):e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"d0lp":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=u;var e=t(require("../helpers/isAbsoluteURL.js")),r=t(require("../helpers/combineURLs.js"));function t(e){return e&&e.__esModule?e:{default:e}}function u(t,u){return t&&!(0,e.default)(u)?(0,r.default)(t,u):u}
},{"../helpers/isAbsoluteURL.js":"ExB0","../helpers/combineURLs.js":"BTlr"}],"Qj6T":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=i;var e=n(require("../utils.js")),t=n(require("./AxiosHeaders.js"));function n(e){return e&&e.__esModule?e:{default:e}}const s=e=>e instanceof t.default?{...e}:e;function i(t,n){n=n||{};const i={};function r(t,n,s,i){return e.default.isPlainObject(t)&&e.default.isPlainObject(n)?e.default.merge.call({caseless:i},t,n):e.default.isPlainObject(n)?e.default.merge({},n):e.default.isArray(n)?n.slice():n}function a(t,n,s,i){return e.default.isUndefined(n)?e.default.isUndefined(t)?void 0:r(void 0,t,0,i):r(t,n,0,i)}function o(t,n){if(!e.default.isUndefined(n))return r(void 0,n)}function d(t,n){return e.default.isUndefined(n)?e.default.isUndefined(t)?void 0:r(void 0,t):r(void 0,n)}function u(e,s,i){return i in n?r(e,s):i in t?r(void 0,e):void 0}const f={url:o,method:o,data:o,baseURL:d,transformRequest:d,transformResponse:d,paramsSerializer:d,timeout:d,timeoutMessage:d,withCredentials:d,withXSRFToken:d,adapter:d,responseType:d,xsrfCookieName:d,xsrfHeaderName:d,onUploadProgress:d,onDownloadProgress:d,decompress:d,maxContentLength:d,maxBodyLength:d,beforeRedirect:d,transport:d,httpAgent:d,httpsAgent:d,cancelToken:d,socketPath:d,responseEncoding:d,validateStatus:u,headers:(e,t,n)=>a(s(e),s(t),0,!0)};return e.default.forEach(Object.keys(Object.assign({},t,n)),function(s){const r=f[s]||a,o=r(t[s],n[s],s);e.default.isUndefined(o)&&r!==u||(i[s]=o)}),i}
},{"../utils.js":"zIVT","./AxiosHeaders.js":"O9LF"}],"PJ3B":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=d(require("../platform/index.js")),r=d(require("../utils.js")),t=d(require("./isURLSameOrigin.js")),a=d(require("./cookies.js")),s=d(require("../core/buildFullPath.js")),o=d(require("../core/mergeConfig.js")),i=d(require("../core/AxiosHeaders.js")),u=d(require("./buildURL.js"));function d(e){return e&&e.__esModule?e:{default:e}}var n=d=>{const n=(0,o.default)({},d);let l,{data:f,withXSRFToken:p,xsrfHeaderName:m,xsrfCookieName:c,headers:j,auth:h}=n;if(n.headers=j=i.default.from(j),n.url=(0,u.default)((0,s.default)(n.baseURL,n.url),d.params,d.paramsSerializer),h&&j.set("Authorization","Basic "+btoa((h.username||"")+":"+(h.password?unescape(encodeURIComponent(h.password)):""))),r.default.isFormData(f))if(e.default.hasStandardBrowserEnv||e.default.hasStandardBrowserWebWorkerEnv)j.setContentType(void 0);else if(!1!==(l=j.getContentType())){const[e,...r]=l?l.split(";").map(e=>e.trim()).filter(Boolean):[];j.setContentType([e||"multipart/form-data",...r].join("; "))}if(e.default.hasStandardBrowserEnv&&(p&&r.default.isFunction(p)&&(p=p(n)),p||!1!==p&&(0,t.default)(n.url))){const e=m&&c&&a.default.read(c);e&&j.set(m,e)}return n};exports.default=n;
},{"../platform/index.js":"muVt","../utils.js":"zIVT","./isURLSameOrigin.js":"DmB6","./cookies.js":"OhlP","../core/buildFullPath.js":"d0lp","../core/mergeConfig.js":"Qj6T","../core/AxiosHeaders.js":"O9LF","./buildURL.js":"RS1v"}],"LYEs":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=i(require("./../utils.js")),t=i(require("./../core/settle.js")),r=i(require("../defaults/transitional.js")),n=i(require("../core/AxiosError.js")),o=i(require("../cancel/CanceledError.js")),s=i(require("../helpers/parseProtocol.js")),u=i(require("../platform/index.js")),a=i(require("../core/AxiosHeaders.js")),l=require("../helpers/progressEventReducer.js"),d=i(require("../helpers/resolveConfig.js"));function i(e){return e&&e.__esModule?e:{default:e}}const f="undefined"!=typeof XMLHttpRequest;var c=exports.default=f&&function(i){return new Promise(function(f,c){const p=(0,d.default)(i);let E=p.data;const g=a.default.from(p.headers).normalize();let R,T,m,q,v,{responseType:x,onUploadProgress:j,onDownloadProgress:w}=p;function b(){q&&q(),v&&v(),p.cancelToken&&p.cancelToken.unsubscribe(R),p.signal&&p.signal.removeEventListener("abort",R)}let h=new XMLHttpRequest;function y(){if(!h)return;const e=a.default.from("getAllResponseHeaders"in h&&h.getAllResponseHeaders()),r={data:x&&"text"!==x&&"json"!==x?h.response:h.responseText,status:h.status,statusText:h.statusText,headers:e,config:i,request:h};(0,t.default)(function(e){f(e),b()},function(e){c(e),b()},r),h=null}h.open(p.method.toUpperCase(),p.url,!0),h.timeout=p.timeout,"onloadend"in h?h.onloadend=y:h.onreadystatechange=function(){h&&4===h.readyState&&(0!==h.status||h.responseURL&&0===h.responseURL.indexOf("file:"))&&setTimeout(y)},h.onabort=function(){h&&(c(new n.default("Request aborted",n.default.ECONNABORTED,i,h)),h=null)},h.onerror=function(){c(new n.default("Network Error",n.default.ERR_NETWORK,i,h)),h=null},h.ontimeout=function(){let e=p.timeout?"timeout of "+p.timeout+"ms exceeded":"timeout exceeded";const t=p.transitional||r.default;p.timeoutErrorMessage&&(e=p.timeoutErrorMessage),c(new n.default(e,t.clarifyTimeoutError?n.default.ETIMEDOUT:n.default.ECONNABORTED,i,h)),h=null},void 0===E&&g.setContentType(null),"setRequestHeader"in h&&e.default.forEach(g.toJSON(),function(e,t){h.setRequestHeader(t,e)}),e.default.isUndefined(p.withCredentials)||(h.withCredentials=!!p.withCredentials),x&&"json"!==x&&(h.responseType=p.responseType),w&&([m,v]=(0,l.progressEventReducer)(w,!0),h.addEventListener("progress",m)),j&&h.upload&&([T,q]=(0,l.progressEventReducer)(j),h.upload.addEventListener("progress",T),h.upload.addEventListener("loadend",q)),(p.cancelToken||p.signal)&&(R=(e=>{h&&(c(!e||e.type?new o.default(null,i,h):e),h.abort(),h=null)}),p.cancelToken&&p.cancelToken.subscribe(R),p.signal&&(p.signal.aborted?R():p.signal.addEventListener("abort",R)));const O=(0,s.default)(p.url);O&&-1===u.default.protocols.indexOf(O)?c(new n.default("Unsupported protocol "+O+":",n.default.ERR_BAD_REQUEST,i)):h.send(E||null)})};
},{"./../utils.js":"zIVT","./../core/settle.js":"wZW9","../defaults/transitional.js":"XK0E","../core/AxiosError.js":"W9kj","../cancel/CanceledError.js":"VMCI","../helpers/parseProtocol.js":"nS4h","../platform/index.js":"muVt","../core/AxiosHeaders.js":"O9LF","../helpers/progressEventReducer.js":"BAMY","../helpers/resolveConfig.js":"PJ3B"}],"bqAq":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=o(require("../cancel/CanceledError.js")),r=o(require("../core/AxiosError.js")),t=o(require("../utils.js"));function o(e){return e&&e.__esModule?e:{default:e}}const n=(o,n)=>{const{length:s}=o=o?o.filter(Boolean):[];if(n||s){let s,u=new AbortController;const a=function(t){if(!s){s=!0,i();const o=t instanceof Error?t:this.reason;u.abort(o instanceof r.default?o:new e.default(o instanceof Error?o.message:o))}};let l=n&&setTimeout(()=>{l=null,a(new r.default(`timeout ${n} of ms exceeded`,r.default.ETIMEDOUT))},n);const i=()=>{o&&(l&&clearTimeout(l),l=null,o.forEach(e=>{e.unsubscribe?e.unsubscribe(a):e.removeEventListener("abort",a)}),o=null)};o.forEach(e=>e.addEventListener("abort",a));const{signal:c}=u;return c.unsubscribe=(()=>t.default.asap(i)),c}};var s=exports.default=n;
},{"../cancel/CanceledError.js":"VMCI","../core/AxiosError.js":"W9kj","../utils.js":"zIVT"}],"A7wW":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.trackStream=exports.streamChunk=exports.readBytes=void 0;const e=function*(e,t){let r=e.byteLength;if(!t||r<t)return void(yield e);let n,a=0;for(;a<r;)n=a+t,yield e.slice(a,n),a=n};exports.streamChunk=e;const t=async function*(t,n){for await(const a of r(t))yield*e(a,n)};exports.readBytes=t;const r=async function*(e){if(e[Symbol.asyncIterator])return void(yield*e);const t=e.getReader();try{for(;;){const{done:e,value:r}=await t.read();if(e)break;yield r}}finally{await t.cancel()}},n=(e,r,n,a)=>{const o=t(e,r);let s,c=0,i=e=>{s||(s=!0,a&&a(e))};return new ReadableStream({async pull(e){try{const{done:r,value:a}=await o.next();if(r)return i(),void e.close();let s=a.byteLength;if(n){let e=c+=s;n(e)}e.enqueue(new Uint8Array(a))}catch(t){throw i(t),t}},cancel:e=>(i(e),o.return())},{highWaterMark:2})};exports.trackStream=n;
},{}],"aQzR":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=d(require("../platform/index.js")),t=d(require("../utils.js")),r=d(require("../core/AxiosError.js")),s=d(require("../helpers/composeSignals.js")),a=require("../helpers/trackStream.js"),o=d(require("../core/AxiosHeaders.js")),n=require("../helpers/progressEventReducer.js"),u=d(require("../helpers/resolveConfig.js")),i=d(require("../core/settle.js"));function d(e){return e&&e.__esModule?e:{default:e}}const l="function"==typeof fetch&&"function"==typeof Request&&"function"==typeof Response,f=l&&"function"==typeof ReadableStream,c=l&&("function"==typeof TextEncoder?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),p=(e,...t)=>{try{return!!e(...t)}catch(r){return!1}},h=f&&p(()=>{let t=!1;const r=new Request(e.default.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!r}),y=65536,m=f&&p(()=>t.default.isReadableStream(new Response("").body)),g={stream:m&&(e=>e.body)};l&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(s=>{!g[s]&&(g[s]=t.default.isFunction(e[s])?e=>e[s]():(e,t)=>{throw new r.default(`Response type '${s}' is not supported`,r.default.ERR_NOT_SUPPORT,t)})})})(new Response);const w=async r=>{if(null==r)return 0;if(t.default.isBlob(r))return r.size;if(t.default.isSpecCompliantForm(r)){const t=new Request(e.default.origin,{method:"POST",body:r});return(await t.arrayBuffer()).byteLength}return t.default.isArrayBufferView(r)||t.default.isArrayBuffer(r)?r.byteLength:(t.default.isURLSearchParams(r)&&(r+=""),t.default.isString(r)?(await c(r)).byteLength:void 0)},b=async(e,r)=>{const s=t.default.toFiniteNumber(e.getContentLength());return null==s?w(r):s};var R=exports.default=l&&(async e=>{let{url:d,method:l,data:f,signal:c,cancelToken:p,timeout:y,onDownloadProgress:w,onUploadProgress:R,responseType:x,headers:S,withCredentials:q="same-origin",fetchOptions:T}=(0,u.default)(e);x=x?(x+"").toLowerCase():"text";let E,v=(0,s.default)([c,p&&p.toAbortSignal()],y);const j=v&&v.unsubscribe&&(()=>{v.unsubscribe()});let O;try{if(R&&h&&"get"!==l&&"head"!==l&&0!==(O=await b(S,f))){let e,r=new Request(d,{method:"POST",body:f,duplex:"half"});if(t.default.isFormData(f)&&(e=r.headers.get("content-type"))&&S.setContentType(e),r.body){const[e,t]=(0,n.progressEventDecorator)(O,(0,n.progressEventReducer)((0,n.asyncDecorator)(R)));f=(0,a.trackStream)(r.body,65536,e,t)}}t.default.isString(q)||(q=q?"include":"omit");const s="credentials"in Request.prototype;E=new Request(d,{...T,signal:v,method:l.toUpperCase(),headers:S.normalize().toJSON(),body:f,duplex:"half",credentials:s?q:void 0});let u=await fetch(E);const c=m&&("stream"===x||"response"===x);if(m&&(w||c&&j)){const e={};["status","statusText","headers"].forEach(t=>{e[t]=u[t]});const r=t.default.toFiniteNumber(u.headers.get("content-length")),[s,o]=w&&(0,n.progressEventDecorator)(r,(0,n.progressEventReducer)((0,n.asyncDecorator)(w),!0))||[];u=new Response((0,a.trackStream)(u.body,65536,s,()=>{o&&o(),j&&j()}),e)}x=x||"text";let p=await g[t.default.findKey(g,x)||"text"](u,e);return!c&&j&&j(),await new Promise((t,r)=>{(0,i.default)(t,r,{data:p,headers:o.default.from(u.headers),status:u.status,statusText:u.statusText,config:e,request:E})})}catch(P){if(j&&j(),P&&"TypeError"===P.name&&/fetch/i.test(P.message))throw Object.assign(new r.default("Network Error",r.default.ERR_NETWORK,e,E),{cause:P.cause||P});throw r.default.from(P,P&&P.code,e,E)}});
},{"../platform/index.js":"muVt","../utils.js":"zIVT","../core/AxiosError.js":"W9kj","../helpers/composeSignals.js":"bqAq","../helpers/trackStream.js":"A7wW","../core/AxiosHeaders.js":"O9LF","../helpers/progressEventReducer.js":"BAMY","../helpers/resolveConfig.js":"PJ3B","../core/settle.js":"wZW9"}],"ZE6v":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=i(require("../utils.js")),t=i(require("./http.js")),r=i(require("./xhr.js")),a=i(require("./fetch.js")),n=i(require("../core/AxiosError.js"));function i(e){return e&&e.__esModule?e:{default:e}}const o={http:t.default,xhr:r.default,fetch:a.default};e.default.forEach(o,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(r){}Object.defineProperty(e,"adapterName",{value:t})}});const s=e=>`- ${e}`,u=t=>e.default.isFunction(t)||null===t||!1===t;var d=exports.default={getAdapter:t=>{t=e.default.isArray(t)?t:[t];const{length:r}=t;let a,i;const d={};for(let e=0;e<r;e++){let r;if(i=a=t[e],!u(a)&&void 0===(i=o[(r=String(a)).toLowerCase()]))throw new n.default(`Unknown adapter '${r}'`);if(i)break;d[r||"#"+e]=i}if(!i){const e=Object.entries(d).map(([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build"));let t=r?e.length>1?"since :\n"+e.map(s).join("\n"):" "+s(e[0]):"as no adapter specified";throw new n.default("There is no suitable adapter to dispatch the request "+t,"ERR_NOT_SUPPORT")}return i},adapters:o};
},{"../utils.js":"zIVT","./http.js":"e98R","./xhr.js":"LYEs","./fetch.js":"aQzR","../core/AxiosError.js":"W9kj"}],"U2VI":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=u;var e=d(require("./transformData.js")),r=d(require("../cancel/isCancel.js")),a=d(require("../defaults/index.js")),t=d(require("../cancel/CanceledError.js")),s=d(require("../core/AxiosHeaders.js")),n=d(require("../adapters/adapters.js"));function d(e){return e&&e.__esModule?e:{default:e}}function o(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new t.default(null,e)}function u(t){return o(t),t.headers=s.default.from(t.headers),t.data=e.default.call(t,t.transformRequest),-1!==["post","put","patch"].indexOf(t.method)&&t.headers.setContentType("application/x-www-form-urlencoded",!1),n.default.getAdapter(t.adapter||a.default.adapter)(t).then(function(r){return o(t),r.data=e.default.call(t,t.transformResponse,r),r.headers=s.default.from(r.headers),r},function(a){return(0,r.default)(a)||(o(t),a&&a.response&&(a.response.data=e.default.call(t,t.transformResponse,a.response),a.response.headers=s.default.from(a.response.headers))),Promise.reject(a)})}
},{"./transformData.js":"i7gz","../cancel/isCancel.js":"C9l1","../defaults/index.js":"M0sG","../cancel/CanceledError.js":"VMCI","../core/AxiosHeaders.js":"O9LF","../adapters/adapters.js":"ZE6v"}],"omJA":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.VERSION=void 0;const e=exports.VERSION="1.7.8";
},{}],"lMdc":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("../env/data.js"),t=n(require("../core/AxiosError.js"));function n(e){return e&&e.__esModule?e:{default:e}}const o={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{o[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});const r={};function i(e,n,o){if("object"!=typeof e)throw new t.default("options must be an object",t.default.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const s=r[i],a=n[s];if(a){const n=e[s],o=void 0===n||a(n,s,e);if(!0!==o)throw new t.default("option "+s+" must be "+o,t.default.ERR_BAD_OPTION_VALUE)}else if(!0!==o)throw new t.default("Unknown option "+s,t.default.ERR_BAD_OPTION)}}o.transitional=function(n,o,i){function s(t,n){return"[Axios v"+e.VERSION+"] Transitional option '"+t+"'"+n+(i?". "+i:"")}return(e,i,a)=>{if(!1===n)throw new t.default(s(i," has been removed"+(o?" in "+o:"")),t.default.ERR_DEPRECATED);return o&&!r[i]&&(r[i]=!0,console.warn(s(i," has been deprecated since v"+o+" and will be removed in the near future"))),!n||n(e,i,a)}},o.spelling=function(e){return(t,n)=>(console.warn(`${n} is likely a misspelling of ${e}`),!0)};var s=exports.default={assertOptions:i,validators:o};
},{"../env/data.js":"omJA","../core/AxiosError.js":"W9kj"}],"RB6n":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=l(require("./../utils.js")),t=l(require("../helpers/buildURL.js")),r=l(require("./InterceptorManager.js")),a=l(require("./dispatchRequest.js")),s=l(require("./mergeConfig.js")),n=l(require("./buildFullPath.js")),o=l(require("../helpers/validator.js")),i=l(require("./AxiosHeaders.js"));function l(e){return e&&e.__esModule?e:{default:e}}const u=o.default.validators;class c{constructor(e){this.defaults=e,this.interceptors={request:new r.default,response:new r.default}}async request(e,t){try{return await this._request(e,t)}catch(r){if(r instanceof Error){let e={};Error.captureStackTrace?Error.captureStackTrace(e):e=new Error;const t=e.stack?e.stack.replace(/^.+\n/,""):"";try{r.stack?t&&!String(r.stack).endsWith(t.replace(/^.+\n.+\n/,""))&&(r.stack+="\n"+t):r.stack=t}catch(a){}}throw r}}_request(t,r){"string"==typeof t?(r=r||{}).url=t:r=t||{},r=(0,s.default)(this.defaults,r);const{transitional:n,paramsSerializer:l,headers:c}=r;void 0!==n&&o.default.assertOptions(n,{silentJSONParsing:u.transitional(u.boolean),forcedJSONParsing:u.transitional(u.boolean),clarifyTimeoutError:u.transitional(u.boolean)},!1),null!=l&&(e.default.isFunction(l)?r.paramsSerializer={serialize:l}:o.default.assertOptions(l,{encode:u.function,serialize:u.function},!0)),o.default.assertOptions(r,{baseUrl:u.spelling("baseURL"),withXsrfToken:u.spelling("withXSRFToken")},!0),r.method=(r.method||this.defaults.method||"get").toLowerCase();let d=c&&e.default.merge(c.common,c[r.method]);c&&e.default.forEach(["delete","get","head","post","put","patch","common"],e=>{delete c[e]}),r.headers=i.default.concat(d,c);const f=[];let h=!0;this.interceptors.request.forEach(function(e){"function"==typeof e.runWhen&&!1===e.runWhen(r)||(h=h&&e.synchronous,f.unshift(e.fulfilled,e.rejected))});const p=[];let m;this.interceptors.response.forEach(function(e){p.push(e.fulfilled,e.rejected)});let g,q=0;if(!h){const e=[a.default.bind(this),void 0];for(e.unshift.apply(e,f),e.push.apply(e,p),g=e.length,m=Promise.resolve(r);q<g;)m=m.then(e[q++],e[q++]);return m}g=f.length;let y=r;for(q=0;q<g;){const e=f[q++],t=f[q++];try{y=e(y)}catch(j){t.call(this,j);break}}try{m=a.default.call(this,y)}catch(j){return Promise.reject(j)}for(q=0,g=p.length;q<g;)m=m.then(p[q++],p[q++]);return m}getUri(e){e=(0,s.default)(this.defaults,e);const r=(0,n.default)(e.baseURL,e.url);return(0,t.default)(r,e.params,e.paramsSerializer)}}e.default.forEach(["delete","get","head","options"],function(e){c.prototype[e]=function(t,r){return this.request((0,s.default)(r||{},{method:e,url:t,data:(r||{}).data}))}}),e.default.forEach(["post","put","patch"],function(e){function t(t){return function(r,a,n){return this.request((0,s.default)(n||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:r,data:a}))}}c.prototype[e]=t(),c.prototype[e+"Form"]=t(!0)});var d=exports.default=c;
},{"./../utils.js":"zIVT","../helpers/buildURL.js":"RS1v","./InterceptorManager.js":"GGkJ","./dispatchRequest.js":"U2VI","./mergeConfig.js":"Qj6T","./buildFullPath.js":"d0lp","../helpers/validator.js":"lMdc","./AxiosHeaders.js":"O9LF"}],"VWBb":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=s(require("./CanceledError.js"));function s(e){return e&&e.__esModule?e:{default:e}}class t{constructor(s){if("function"!=typeof s)throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(e){t=e});const r=this;this.promise.then(e=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](e);r._listeners=null}),this.promise.then=(e=>{let s;const t=new Promise(e=>{r.subscribe(e),s=e}).then(e);return t.cancel=function(){r.unsubscribe(s)},t}),s(function(s,n,i){r.reason||(r.reason=new e.default(s,n,i),t(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const s=this._listeners.indexOf(e);-1!==s&&this._listeners.splice(s,1)}toAbortSignal(){const e=new AbortController,s=s=>{e.abort(s)};return this.subscribe(s),e.signal.unsubscribe=(()=>this.unsubscribe(s)),e.signal}static source(){let e;return{token:new t(function(s){e=s}),cancel:e}}}var r=exports.default=t;
},{"./CanceledError.js":"VMCI"}],"Kbjq":[function(require,module,exports) {
"use strict";function e(e){return function(t){return e.apply(null,t)}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"NLsH":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=t;var e=r(require("./../utils.js"));function r(e){return e&&e.__esModule?e:{default:e}}function t(r){return e.default.isObject(r)&&!0===r.isAxiosError}
},{"./../utils.js":"zIVT"}],"qGQC":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;const e={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(e).forEach(([t,o])=>{e[o]=t});var t=exports.default=e;
},{}],"HXpE":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=C(require("./utils.js")),r=C(require("./helpers/bind.js")),t=C(require("./core/Axios.js")),a=C(require("./core/mergeConfig.js")),u=C(require("./defaults/index.js")),s=C(require("./helpers/formDataToJSON.js")),l=C(require("./cancel/CanceledError.js")),o=C(require("./cancel/CancelToken.js")),d=C(require("./cancel/isCancel.js")),i=require("./env/data.js"),n=C(require("./helpers/toFormData.js")),f=C(require("./core/AxiosError.js")),c=C(require("./helpers/spread.js")),p=C(require("./helpers/isAxiosError.js")),j=C(require("./core/AxiosHeaders.js")),q=C(require("./adapters/adapters.js")),x=C(require("./helpers/HttpStatusCode.js"));function C(e){return e&&e.__esModule?e:{default:e}}function A(u){const s=new t.default(u),l=(0,r.default)(t.default.prototype.request,s);return e.default.extend(l,t.default.prototype,s,{allOwnKeys:!0}),e.default.extend(l,s,null,{allOwnKeys:!0}),l.create=function(e){return A((0,a.default)(u,e))},l}const m=A(u.default);m.Axios=t.default,m.CanceledError=l.default,m.CancelToken=o.default,m.isCancel=d.default,m.VERSION=i.VERSION,m.toFormData=n.default,m.AxiosError=f.default,m.Cancel=m.CanceledError,m.all=function(e){return Promise.all(e)},m.spread=c.default,m.isAxiosError=p.default,m.mergeConfig=a.default,m.AxiosHeaders=j.default,m.formToJSON=(r=>(0,s.default)(e.default.isHTMLForm(r)?new FormData(r):r)),m.getAdapter=q.default.getAdapter,m.HttpStatusCode=x.default,m.default=m;var E=exports.default=m;
},{"./utils.js":"zIVT","./helpers/bind.js":"nb4k","./core/Axios.js":"RB6n","./core/mergeConfig.js":"Qj6T","./defaults/index.js":"M0sG","./helpers/formDataToJSON.js":"K5Tr","./cancel/CanceledError.js":"VMCI","./cancel/CancelToken.js":"VWBb","./cancel/isCancel.js":"C9l1","./env/data.js":"omJA","./helpers/toFormData.js":"q82J","./core/AxiosError.js":"W9kj","./helpers/spread.js":"Kbjq","./helpers/isAxiosError.js":"NLsH","./core/AxiosHeaders.js":"O9LF","./adapters/adapters.js":"ZE6v","./helpers/HttpStatusCode.js":"qGQC"}],"uj17":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.all=exports.VERSION=exports.HttpStatusCode=exports.CanceledError=exports.CancelToken=exports.Cancel=exports.AxiosHeaders=exports.AxiosError=exports.Axios=void 0,Object.defineProperty(exports,"default",{enumerable:!0,get:function(){return e.default}}),exports.toFormData=exports.spread=exports.mergeConfig=exports.isCancel=exports.isAxiosError=exports.getAdapter=exports.formToJSON=void 0;var e=r(require("./lib/axios.js"));function r(e){return e&&e.__esModule?e:{default:e}}const{Axios:o,AxiosError:t,CanceledError:s,isCancel:x,CancelToken:p,VERSION:a,all:i,Cancel:n,isAxiosError:l,spread:d,toFormData:c,AxiosHeaders:C,HttpStatusCode:u,formToJSON:A,getAdapter:f,mergeConfig:E}=e.default;exports.mergeConfig=E,exports.getAdapter=f,exports.formToJSON=A,exports.HttpStatusCode=u,exports.AxiosHeaders=C,exports.toFormData=c,exports.spread=d,exports.isAxiosError=l,exports.Cancel=n,exports.all=i,exports.VERSION=a,exports.CancelToken=p,exports.isCancel=x,exports.CanceledError=s,exports.AxiosError=t,exports.Axios=o;
},{"./lib/axios.js":"HXpE"}],"HFuV":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.initLoginOut=void 0;var t=r(require("axios")),e=require("../utils/alerts");function r(t){return t&&t.__esModule?t:{default:t}}function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(){o=function(){return e};var t,e={},r=Object.prototype,i=r.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof w?e:w,i=Object.create(o.prototype),c=new N(n||[]);return a(i,"_invoke",{value:k(t,r,c)}),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var y="suspendedStart",v="suspendedYield",d="executing",g="completed",m={};function w(){}function b(){}function x(){}var L={};f(L,u,function(){return this});var E=Object.getPrototypeOf,_=E&&E(E(A([])));_&&_!==r&&i.call(_,u)&&(L=_);var O=x.prototype=w.prototype=Object.create(L);function j(t){["next","throw","return"].forEach(function(e){f(t,e,function(t){return this._invoke(e,t)})})}function S(t,e){function r(o,a,c,u){var s=p(t[o],t,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==n(f)&&i.call(f,"__await")?e.resolve(f.__await).then(function(t){r("next",t,c,u)},function(t){r("throw",t,c,u)}):e.resolve(f).then(function(t){l.value=t,c(l)},function(t){return r("throw",t,c,u)})}u(s.arg)}var o;a(this,"_invoke",{value:function(t,n){function i(){return new e(function(e,o){r(t,n,e,o)})}return o=o?o.then(i,i):i()}})}function k(e,r,n){var o=y;return function(i,a){if(o===d)throw Error("Generator is already running");if(o===g){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=P(c,n);if(u){if(u===m)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===y)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var s=p(e,r,n);if("normal"===s.type){if(o=n.done?g:v,s.arg===m)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=g,n.method="throw",n.arg=s.arg)}}}function P(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,P(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var i=p(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,m;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function G(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function A(e){if(e||""===e){var r=e[u];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(i.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(n(e)+" is not iterable")}return b.prototype=x,a(O,"constructor",{value:x,configurable:!0}),a(x,"constructor",{value:b,configurable:!0}),b.displayName=f(x,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,f(t,l,"GeneratorFunction")),t.prototype=Object.create(O),t},e.awrap=function(t){return{__await:t}},j(S.prototype),f(S.prototype,s,function(){return this}),e.AsyncIterator=S,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new S(h(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then(function(t){return t.done?t.value:a.next()})},j(O),f(O,l,"Generator"),f(O,u,function(){return this}),f(O,"toString",function(){return"[object Generator]"}),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=A,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(G),!e)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),s=i.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),G(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;G(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:A(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},e}function i(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function a(t){return function(){var e=this,r=arguments;return new Promise(function(n,o){var a=t.apply(e,r);function c(t){i(a,n,o,c,u,"next",t)}function u(t){i(a,n,o,c,u,"throw",t)}c(void 0)})}}var c=function(){var r=a(o().mark(function r(n,i){return o().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,t.default)({method:"POST",url:"/api/v1/users/login",data:{email:n,password:i}});case 3:"success"===r.sent.data.status&&((0,e.showAlert)("success","Logged in successfully!"),window.setTimeout(function(){location.assign("/")},1500)),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),(0,e.showAlert)("error","".concat("".concat(r.t0.response.data.message)));case 10:case"end":return r.stop()}},r,null,[[0,7]])}));return function(t,e){return r.apply(this,arguments)}}(),u=function(){var r=a(o().mark(function r(){return o().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,t.default)({method:"GET",url:"/api/v1/users/logout"});case 3:(r.sent.data.status="success")&&location.assign("/"),r.next=11;break;case 7:r.prev=7,r.t0=r.catch(0),console.log(r.t0.response),(0,e.showAlert)("error","Error logging out! Try again.");case 11:case"end":return r.stop()}},r,null,[[0,7]])}));return function(){return r.apply(this,arguments)}}(),s=exports.initLoginOut=function(){var t=document.querySelector(".login-form"),e=document.querySelector(".nav-logout-btn");t&&t.addEventListener("submit",function(t){t.preventDefault();var e=document.getElementById("email").value,r=document.getElementById("password").value;c(e,r)}),e&&e.addEventListener("click",function(t){console.log("1"),u()})};
},{"axios":"uj17","../utils/alerts":"VDCA"}],"wYjI":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.initSignup=void 0;var t=r(require("axios")),e=require("../utils/alerts");function r(t){return t&&t.__esModule?t:{default:t}}function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(){o=function(){return e};var t,e={},r=Object.prototype,i=r.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},u="function"==typeof Symbol?Symbol:{},c=u.iterator||"@@iterator",s=u.asyncIterator||"@@asyncIterator",l=u.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof w?e:w,i=Object.create(o.prototype),u=new N(n||[]);return a(i,"_invoke",{value:k(t,r,u)}),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var y="suspendedStart",v="suspendedYield",d="executing",m="completed",g={};function w(){}function b(){}function x(){}var E={};f(E,c,function(){return this});var L=Object.getPrototypeOf,_=L&&L(L(T([])));_&&_!==r&&i.call(_,c)&&(E=_);var S=x.prototype=w.prototype=Object.create(E);function O(t){["next","throw","return"].forEach(function(e){f(t,e,function(t){return this._invoke(e,t)})})}function j(t,e){function r(o,a,u,c){var s=p(t[o],t,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==n(f)&&i.call(f,"__await")?e.resolve(f.__await).then(function(t){r("next",t,u,c)},function(t){r("throw",t,u,c)}):e.resolve(f).then(function(t){l.value=t,u(l)},function(t){return r("throw",t,u,c)})}c(s.arg)}var o;a(this,"_invoke",{value:function(t,n){function i(){return new e(function(e,o){r(t,n,e,o)})}return o=o?o.then(i,i):i()}})}function k(e,r,n){var o=y;return function(i,a){if(o===d)throw Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var u=n.delegate;if(u){var c=P(u,n);if(c){if(c===g)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===y)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var s=p(e,r,n);if("normal"===s.type){if(o=n.done?m:v,s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=m,n.method="throw",n.arg=s.arg)}}}function P(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,P(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=p(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function I(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function G(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function T(e){if(e||""===e){var r=e[c];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(i.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(n(e)+" is not iterable")}return b.prototype=x,a(S,"constructor",{value:x,configurable:!0}),a(x,"constructor",{value:b,configurable:!0}),b.displayName=f(x,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,f(t,l,"GeneratorFunction")),t.prototype=Object.create(S),t},e.awrap=function(t){return{__await:t}},O(j.prototype),f(j.prototype,s,function(){return this}),e.AsyncIterator=j,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new j(h(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then(function(t){return t.done?t.value:a.next()})},O(S),f(S,l,"Generator"),f(S,c,function(){return this}),f(S,"toString",function(){return"[object Generator]"}),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=T,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(G),!e)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,o){return u.type="throw",u.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],u=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=i.call(a,"catchLoc"),s=i.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),G(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;G(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function i(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}function a(t){return function(){var e=this,r=arguments;return new Promise(function(n,o){var a=t.apply(e,r);function u(t){i(a,n,o,u,c,"next",t)}function c(t){i(a,n,o,u,c,"throw",t)}u(void 0)})}}var u=function(){var r=a(o().mark(function r(n){return o().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,t.default)({method:"POST",url:"/api/v1/users/signUp",data:n});case 3:"success"===r.sent.data.status&&((0,e.showAlert)("success","You've successfully signed up!"),window.setTimeout(function(){location.assign("/")},1500)),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),(0,e.showAlert)("error","".concat(r.t0.response.data.message));case 10:case"end":return r.stop()}},r,null,[[0,7]])}));return function(t){return r.apply(this,arguments)}}(),c=exports.initSignup=function(){var t=document.querySelector(".user-signup-form");t&&t.addEventListener("submit",function(t){console.log("Signing up..."),t.preventDefault();var e,r=document.querySelector('input[name="gender"]:checked');r&&(e=r.value);var n={name:document.getElementById("name").value,email:document.getElementById("email").value,phone_number:document.getElementById("phone_number").value,address:document.getElementById("address").value,password:document.getElementById("password").value,passwordConfirm:document.getElementById("password-confirm").value,gender:e};u(n)})};
},{"axios":"uj17","../utils/alerts":"VDCA"}],"WReK":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.updateButtonText=void 0;var t=exports.updateButtonText=function(t,e){document.querySelector(t).textContent=e};
},{}],"aulk":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.initForgetPassword=void 0;var t=n(require("axios")),e=require("../utils/alerts"),r=require("../utils/updateButtonText");function n(t){return t&&t.__esModule?t:{default:t}}function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(){a=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},u="function"==typeof Symbol?Symbol:{},c=u.iterator||"@@iterator",s=u.asyncIterator||"@@asyncIterator",l=u.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof w?e:w,a=Object.create(o.prototype),u=new I(n||[]);return i(a,"_invoke",{value:B(t,r,u)}),a}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var d="suspendedStart",v="suspendedYield",y="executing",m="completed",g={};function w(){}function x(){}function b(){}var E={};f(E,c,function(){return this});var L=Object.getPrototypeOf,_=L&&L(L(A([])));_&&_!==r&&n.call(_,c)&&(E=_);var P=b.prototype=w.prototype=Object.create(E);function S(t){["next","throw","return"].forEach(function(e){f(t,e,function(t){return this._invoke(e,t)})})}function O(t,e){function r(a,i,u,c){var s=p(t[a],t,i);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==o(f)&&n.call(f,"__await")?e.resolve(f.__await).then(function(t){r("next",t,u,c)},function(t){r("throw",t,u,c)}):e.resolve(f).then(function(t){l.value=t,u(l)},function(t){return r("throw",t,u,c)})}c(s.arg)}var a;i(this,"_invoke",{value:function(t,n){function o(){return new e(function(e,o){r(t,n,e,o)})}return a=a?a.then(o,o):o()}})}function B(e,r,n){var o=d;return function(a,i){if(o===y)throw Error("Generator is already running");if(o===m){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var u=n.delegate;if(u){var c=T(u,n);if(c){if(c===g)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var s=p(e,r,n);if("normal"===s.type){if(o=n.done?m:v,s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=m,n.method="throw",n.arg=s.arg)}}}function T(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,T(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var a=p(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,g;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function A(e){if(e||""===e){var r=e[c];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,i=function r(){for(;++a<e.length;)if(n.call(e,a))return r.value=e[a],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(o(e)+" is not iterable")}return x.prototype=b,i(P,"constructor",{value:b,configurable:!0}),i(b,"constructor",{value:x,configurable:!0}),x.displayName=f(b,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,f(t,l,"GeneratorFunction")),t.prototype=Object.create(P),t},e.awrap=function(t){return{__await:t}},S(O.prototype),f(O.prototype,s,function(){return this}),e.AsyncIterator=O,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new O(h(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},S(P),f(P,l,"Generator"),f(P,c,function(){return this}),f(P,"toString",function(){return"[object Generator]"}),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=A,I.prototype={constructor:I,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(k),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return u.type="throw",u.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],u=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:A(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function i(t,e,r,n,o,a,i){try{var u=t[a](i),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}function u(t){return function(){var e=this,r=arguments;return new Promise(function(n,o){var a=t.apply(e,r);function u(t){i(a,n,o,u,c,"next",t)}function c(t){i(a,n,o,u,c,"throw",t)}u(void 0)})}}var c=function(){var r=u(a().mark(function r(n){var o;return a().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,t.default)({method:"POST",url:"/api/v1/users/twoFactor",data:{email:n}});case 3:return"success"===(o=r.sent).data.status&&(0,e.showAlert)("success",o.data.message,3),r.abrupt("return",o.data.status);case 8:r.prev=8,r.t0=r.catch(0),(0,e.showAlert)("error","".concat(r.t0.response.data.message));case 11:case"end":return r.stop()}},r,null,[[0,8]])}));return function(t){return r.apply(this,arguments)}}(),s=function(){var r=u(a().mark(function r(n,o){var i;return a().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,t.default)({method:"POST",url:"/api/v1/users/verifyFACode",data:{email:n,verifyCode:o}});case 3:return i=r.sent,r.abrupt("return",i.data.status);case 7:r.prev=7,r.t0=r.catch(0),(0,e.showAlert)("error","".concat(r.t0.response.data.message));case 10:case"end":return r.stop()}},r,null,[[0,7]])}));return function(t,e){return r.apply(this,arguments)}}(),l=function(){var r=u(a().mark(function r(n,o,i){var u;return a().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,t.default)({method:"PATCH",url:"/api/v1/users/resetPassword",data:{email:n,newPassword:o,passwordConfirm:i}});case 3:return"success"===(u=r.sent).data.status&&((0,e.showAlert)("success","Password reset successful! Redirecting..."),window.setTimeout(function(){location.assign("/")},1500)),r.abrupt("return",u.data.status);case 8:r.prev=8,r.t0=r.catch(0),(0,e.showAlert)("error","".concat(r.t0.response.data.message));case 11:case"end":return r.stop()}},r,null,[[0,8]])}));return function(t,e,n){return r.apply(this,arguments)}}(),f=exports.initForgetPassword=function(){var t=document.querySelector(".send-email-form"),e=document.querySelector(".send-verify-form"),n=document.querySelector(".reset-password-form");t&&t.addEventListener("submit",function(){var t=u(a().mark(function t(e){var n;return a().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),(0,r.updateButtonText)(".send-verification","Sending..."),n=document.getElementById("email").value.toLowerCase(),t.next=5,c(n);case 5:if(t.t0=t.sent,"success"!==t.t0){t.next=9;break}document.getElementById("send-verify").style.display="none",document.getElementById("verify-email").style.display="";case 9:(0,r.updateButtonText)(".send-verification","Send verification code");case 10:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()),e&&e.addEventListener("submit",function(){var t=u(a().mark(function t(e){var n,o;return a().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),(0,r.updateButtonText)(".code-verifying","Verifying..."),n=document.getElementById("email").value.toLowerCase(),o=document.getElementById("verify-code").value,t.next=6,s(n,o);case 6:"success"===t.sent&&(document.getElementById("verify-email").style.display="none",document.getElementById("reset-password").style.display=""),(0,r.updateButtonText)(".code-verifying","Verify");case 9:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()),n&&n.addEventListener("submit",function(t){t.preventDefault();var e=document.getElementById("email").value,r=document.getElementById("new-password").value,n=document.getElementById("password-confirm").value;l(e,r,n)})};
},{"axios":"uj17","../utils/alerts":"VDCA","../utils/updateButtonText":"WReK"}],"rQig":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.initSearch=void 0;var t=e(require("axios")),r=require("../utils/alerts");function e(t){return t&&t.__esModule?t:{default:t}}function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(){o=function(){return r};var t,r={},e=Object.prototype,i=e.hasOwnProperty,a=Object.defineProperty||function(t,r,e){t[r]=e.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",f=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function s(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(t){s=function(t,r,e){return t[r]=e}}function h(t,r,e,n){var o=r&&r.prototype instanceof w?r:w,i=Object.create(o.prototype),c=new T(n||[]);return a(i,"_invoke",{value:k(t,e,c)}),i}function p(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=h;var y="suspendedStart",v="suspendedYield",d="executing",m="completed",g={};function w(){}function b(){}function x(){}var L={};s(L,u,function(){return this});var E=Object.getPrototypeOf,_=E&&E(E(F([])));_&&_!==e&&i.call(_,u)&&(L=_);var O=x.prototype=w.prototype=Object.create(L);function S(t){["next","throw","return"].forEach(function(r){s(t,r,function(t){return this._invoke(r,t)})})}function j(t,r){function e(o,a,c,u){var f=p(t[o],t,a);if("throw"!==f.type){var l=f.arg,s=l.value;return s&&"object"==n(s)&&i.call(s,"__await")?r.resolve(s.__await).then(function(t){e("next",t,c,u)},function(t){e("throw",t,c,u)}):r.resolve(s).then(function(t){l.value=t,c(l)},function(t){return e("throw",t,c,u)})}u(f.arg)}var o;a(this,"_invoke",{value:function(t,n){function i(){return new r(function(r,o){e(t,n,r,o)})}return o=o?o.then(i,i):i()}})}function k(r,e,n){var o=y;return function(i,a){if(o===d)throw Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=P(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===y)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var f=p(r,e,n);if("normal"===f.type){if(o=n.done?m:v,f.arg===g)continue;return{value:f.arg,done:n.done}}"throw"===f.type&&(o=m,n.method="throw",n.arg=f.arg)}}}function P(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,P(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=p(o,r.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,g;var a=i.arg;return a?a.done?(e[r.resultName]=a.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,g):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function G(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function N(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(G,this),this.reset(!0)}function F(r){if(r||""===r){var e=r[u];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,a=function e(){for(;++o<r.length;)if(i.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return a.next=a}}throw new TypeError(n(r)+" is not iterable")}return b.prototype=x,a(O,"constructor",{value:x,configurable:!0}),a(x,"constructor",{value:b,configurable:!0}),b.displayName=s(x,l,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===b||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,s(t,l,"GeneratorFunction")),t.prototype=Object.create(O),t},r.awrap=function(t){return{__await:t}},S(j.prototype),s(j.prototype,f,function(){return this}),r.AsyncIterator=j,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new j(h(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},S(O),s(O,l,"Generator"),s(O,u,function(){return this}),s(O,"toString",function(){return"[object Generator]"}),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=F,T.prototype={constructor:T,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(N),!r)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function n(n,o){return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),f=i.call(a,"finallyLoc");if(u&&f){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!f)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=r,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),g},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),N(e),g}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;N(e)}return o}}throw Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:F(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),g}},r}function i(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void e(t)}c.done?r(u):Promise.resolve(u).then(n,o)}function a(t){return function(){var r=this,e=arguments;return new Promise(function(n,o){var a=t.apply(r,e);function c(t){i(a,n,o,c,u,"next",t)}function u(t){i(a,n,o,c,u,"throw",t)}c(void 0)})}}var c=function(){var t=a(o().mark(function t(r){var e;return o().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e="/search?keyword=".concat(r),window.location.href=e;case 2:case"end":return t.stop()}},t)}));return function(r){return t.apply(this,arguments)}}(),u=exports.initSearch=function(){var t=document.querySelector(".search-bar-form"),r=document.querySelector(".form-input");t&&t.addEventListener("submit",function(){var t=a(o().mark(function t(e){return o().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.preventDefault(),c(r.value);case 2:case"end":return t.stop()}},t)}));return function(r){return t.apply(this,arguments)}}())};
},{"axios":"uj17","../utils/alerts":"VDCA"}],"LqgB":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.initUpdateSetting=void 0;var t=n(require("axios")),e=require("../utils/alerts"),r=require("../utils/updateButtonText");function n(t){return t&&t.__esModule?t:{default:t}}function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(){a=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},u="function"==typeof Symbol?Symbol:{},c=u.iterator||"@@iterator",s=u.asyncIterator||"@@asyncIterator",l=u.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function p(t,e,r,n){var o=e&&e.prototype instanceof w?e:w,a=Object.create(o.prototype),u=new T(n||[]);return i(a,"_invoke",{value:O(t,r,u)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=p;var d="suspendedStart",v="suspendedYield",y="executing",m="completed",g={};function w(){}function b(){}function x(){}var E={};f(E,c,function(){return this});var L=Object.getPrototypeOf,_=L&&L(L(G([])));_&&_!==r&&n.call(_,c)&&(E=_);var S=x.prototype=w.prototype=Object.create(E);function B(t){["next","throw","return"].forEach(function(e){f(t,e,function(t){return this._invoke(e,t)})})}function I(t,e){function r(a,i,u,c){var s=h(t[a],t,i);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==o(f)&&n.call(f,"__await")?e.resolve(f.__await).then(function(t){r("next",t,u,c)},function(t){r("throw",t,u,c)}):e.resolve(f).then(function(t){l.value=t,u(l)},function(t){return r("throw",t,u,c)})}c(s.arg)}var a;i(this,"_invoke",{value:function(t,n){function o(){return new e(function(e,o){r(t,n,e,o)})}return a=a?a.then(o,o):o()}})}function O(e,r,n){var o=d;return function(a,i){if(o===y)throw Error("Generator is already running");if(o===m){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var u=n.delegate;if(u){var c=j(u,n);if(c){if(c===g)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var s=h(e,r,n);if("normal"===s.type){if(o=n.done?m:v,s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=m,n.method="throw",n.arg=s.arg)}}}function j(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,j(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var a=h(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,g;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function G(e){if(e||""===e){var r=e[c];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,i=function r(){for(;++a<e.length;)if(n.call(e,a))return r.value=e[a],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(o(e)+" is not iterable")}return b.prototype=x,i(S,"constructor",{value:x,configurable:!0}),i(x,"constructor",{value:b,configurable:!0}),b.displayName=f(x,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,f(t,l,"GeneratorFunction")),t.prototype=Object.create(S),t},e.awrap=function(t){return{__await:t}},B(I.prototype),f(I.prototype,s,function(){return this}),e.AsyncIterator=I,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new I(p(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},B(S),f(S,l,"Generator"),f(S,c,function(){return this}),f(S,"toString",function(){return"[object Generator]"}),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=G,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return u.type="throw",u.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],u=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:G(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function i(t,e,r,n,o,a,i){try{var u=t[a](i),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}function u(t){return function(){var e=this,r=arguments;return new Promise(function(n,o){var a=t.apply(e,r);function u(t){i(a,n,o,u,c,"next",t)}function c(t){i(a,n,o,u,c,"throw",t)}u(void 0)})}}var c=function(){var r=u(a().mark(function r(n,o){var i;return a().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,i="password"===o?"/api/v1/users/updatePassword":"/api/v1/users/updateMe",r.next=4,(0,t.default)({method:"PATCH",url:i,data:n});case 4:"success"===r.sent.data.status&&((0,e.showAlert)("success","".concat(o.toUpperCase()," updated successfully!")),window.setTimeout(function(){window.location.reload()},1500)),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),(0,e.showAlert)("error","".concat(r.t0.response.data.message));case 11:case"end":return r.stop()}},r,null,[[0,8]])}));return function(t,e){return r.apply(this,arguments)}}(),s=exports.initUpdateSetting=function(){var t=document.querySelector(".user-info-form"),e=document.querySelector(".user-password-form");t&&t.addEventListener("submit",function(t){t.preventDefault();var e=new FormData;e.append("name",document.getElementById("name").value),e.append("email",document.getElementById("email").value),e.append("phone_number",document.getElementById("phone_number").value),e.append("address",document.getElementById("address").value);var r=document.querySelector('input[name="gender"]:checked');r&&e.append("gender",r.value),document.getElementById("image").files[0]&&e.append("image",document.getElementById("image").files[0]),c(e,"data")}),e&&e.addEventListener("submit",function(){var t=u(a().mark(function t(e){var n,o,i;return a().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),(0,r.updateButtonText)(".save-password","Updating..."),n=document.getElementById("password-current").value,o=document.getElementById("password").value,i=document.getElementById("password-confirm").value,t.next=7,c({passwordCurrent:n,password:o,passwordConfirm:i},"password");case 7:(0,r.updateButtonText)(".save-password","Save password"),document.getElementById("password-current").value="",document.getElementById("password").value="",document.getElementById("password-confirm").value="";case 11:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}())};
},{"axios":"uj17","../utils/alerts":"VDCA","../utils/updateButtonText":"WReK"}],"vua8":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.updateAllCheckbox=exports.setQuantity=exports.getCheckedItem=exports.deleteItem=exports.calCheckout=exports.addToCartRequest=void 0;var t=r(require("axios")),e=require("../utils/alerts");function r(t){return t&&t.__esModule?t:{default:t}}function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(){o=function(){return e};var t,e={},r=Object.prototype,a=r.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof x?e:x,a=Object.create(o.prototype),c=new C(n||[]);return i(a,"_invoke",{value:q(t,r,c)}),a}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var y="suspendedStart",d="suspendedYield",v="executing",m="completed",g={};function x(){}function w(){}function b(){}var L={};f(L,u,function(){return this});var E=Object.getPrototypeOf,k=E&&E(E(I([])));k&&k!==r&&a.call(k,u)&&(L=k);var S=b.prototype=x.prototype=Object.create(L);function _(t){["next","throw","return"].forEach(function(e){f(t,e,function(t){return this._invoke(e,t)})})}function O(t,e){function r(o,i,c,u){var s=p(t[o],t,i);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==n(f)&&a.call(f,"__await")?e.resolve(f.__await).then(function(t){r("next",t,c,u)},function(t){r("throw",t,c,u)}):e.resolve(f).then(function(t){l.value=t,c(l)},function(t){return r("throw",t,c,u)})}u(s.arg)}var o;i(this,"_invoke",{value:function(t,n){function a(){return new e(function(e,o){r(t,n,e,o)})}return o=o?o.then(a,a):a()}})}function q(e,r,n){var o=y;return function(a,i){if(o===v)throw Error("Generator is already running");if(o===m){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=j(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===y)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=p(e,r,n);if("normal"===s.type){if(o=n.done?m:d,s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=m,n.method="throw",n.arg=s.arg)}}}function j(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,j(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var a=p(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,g;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function I(e){if(e||""===e){var r=e[u];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(a.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(n(e)+" is not iterable")}return w.prototype=b,i(S,"constructor",{value:b,configurable:!0}),i(b,"constructor",{value:w,configurable:!0}),w.displayName=f(b,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,f(t,l,"GeneratorFunction")),t.prototype=Object.create(S),t},e.awrap=function(t){return{__await:t}},_(O.prototype),f(O.prototype,s,function(){return this}),e.AsyncIterator=O,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new O(h(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},_(S),f(S,l,"Generator"),f(S,u,function(){return this}),f(S,"toString",function(){return"[object Generator]"}),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=I,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(A),!e)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=a.call(i,"catchLoc"),s=a.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),A(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;A(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:I(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function a(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function i(t){return function(){var e=this,r=arguments;return new Promise(function(n,o){var i=t.apply(e,r);function c(t){a(i,n,o,c,u,"next",t)}function u(t){a(i,n,o,c,u,"throw",t)}c(void 0)})}}var c=exports.addToCartRequest=function(){var r=i(o().mark(function r(n){var a;return o().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,t.default)({method:"POST",url:"/api/v1/carts/".concat(n)});case 3:"success"===(a=r.sent).data.status&&(0,e.showAlert)("success",a.data.message),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),(0,e.showAlert)("error","".concat(r.t0.response.data.message));case 10:case"end":return r.stop()}},r,null,[[0,7]])}));return function(t){return r.apply(this,arguments)}}(),u=exports.deleteItem=function(){var r=i(o().mark(function r(n){return o().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,t.default)({method:"DELETE",url:"/api/v1/carts",data:{productId:n}});case 3:"success"===r.sent.data.status&&(0,e.showAlert)("success",response.data.message),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),(0,e.showAlert)("error","".concat(r.t0.response.data.message));case 10:case"end":return r.stop()}},r,null,[[0,7]])}));return function(t){return r.apply(this,arguments)}}(),s=exports.setQuantity=function(t,e){var r=t.closest(".item-quantity").querySelector(".qt-input"),n=parseInt(r.value)||1,o=Math.max(1,n+e);r.value=o;var a=new Event("input",{bubbles:!0});r.dispatchEvent(a),console.log(r.value),l(r),t.closest(".item").querySelector(".item-checkbox").checked&&f()},l=function(t){var e=parseInt(t.value)||0,r=parseFloat(t.closest(".item-group-2").querySelector(".item-price").textContent)*e;t.closest(".item-group-2").querySelector(".item-total").textContent=r.toFixed(2)},f=exports.calCheckout=function(){var t=document.querySelectorAll(".item-checkbox"),e=document.querySelector(".selected-item"),r=document.querySelector(".price-total"),n=0,o=0;t.forEach(function(t){var e=parseFloat(t.closest(".item").querySelector(".item-total").textContent.trim());t.checked&&(n+=1,o+=e)}),e.innerText="Total price (".concat(n," item) :"),r.innerText="$".concat(o.toFixed(2))},h=exports.updateAllCheckbox=function(){var t=document.querySelectorAll(".item-checkbox"),e=document.querySelector(".all-checkbox"),r=Array.from(t).every(function(t){return t.checked});e.checked=r,e.classList.toggle("checked",r)},p=exports.getCheckedItem=function(t,e){var r=e.closest(".item").dataset.productId;if(e.classList.contains("checked"))t.push(r);else{var n=t.indexOf(r);t.splice(n,1)}};
},{"axios":"uj17","../utils/alerts":"VDCA"}],"Uj2q":[function(require,module,exports) {
var define;
var t;Object.defineProperty(exports,"__esModule",{value:!0}),exports.orderProducts=void 0;var r=require("./utils/alerts"),e=n(require("axios"));function n(t){return t&&t.__esModule?t:{default:t}}function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(){"use strict";i=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,a=Object.defineProperty||function(t,r,e){t[r]=e.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",f=c.toStringTag||"@@toStringTag";function l(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{l({},"")}catch(t){l=function(t,r,e){return t[r]=e}}function h(t,r,e,n){var o=r&&r.prototype instanceof w?r:w,i=Object.create(o.prototype),c=new T(n||[]);return a(i,"_invoke",{value:S(t,e,c)}),i}function p(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=h;var y="suspendedStart",v="suspendedYield",d="executing",g="completed",m={};function w(){}function b(){}function x(){}var L={};l(L,u,function(){return this});var E=Object.getPrototypeOf,_=E&&E(E(F([])));_&&_!==e&&n.call(_,u)&&(L=_);var O=x.prototype=w.prototype=Object.create(L);function j(t){["next","throw","return"].forEach(function(r){l(t,r,function(t){return this._invoke(r,t)})})}function P(t,r){function e(i,a,c,u){var s=p(t[i],t,a);if("throw"!==s.type){var f=s.arg,l=f.value;return l&&"object"==o(l)&&n.call(l,"__await")?r.resolve(l.__await).then(function(t){e("next",t,c,u)},function(t){e("throw",t,c,u)}):r.resolve(l).then(function(t){f.value=t,c(f)},function(t){return e("throw",t,c,u)})}u(s.arg)}var i;a(this,"_invoke",{value:function(t,n){function o(){return new r(function(r,o){e(t,n,r,o)})}return i=i?i.then(o,o):o()}})}function S(r,e,n){var o=y;return function(i,a){if(o===d)throw Error("Generator is already running");if(o===g){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=k(c,n);if(u){if(u===m)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===y)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var s=p(r,e,n);if("normal"===s.type){if(o=n.done?g:v,s.arg===m)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=g,n.method="throw",n.arg=s.arg)}}}function k(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,k(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var i=p(o,r.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,m;var a=i.arg;return a?a.done?(e[r.resultName]=a.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,m):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function G(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function N(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(G,this),this.reset(!0)}function F(r){if(r||""===r){var e=r[u];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var i=-1,a=function e(){for(;++i<r.length;)if(n.call(r,i))return e.value=r[i],e.done=!1,e;return e.value=t,e.done=!0,e};return a.next=a}}throw new TypeError(o(r)+" is not iterable")}return b.prototype=x,a(O,"constructor",{value:x,configurable:!0}),a(x,"constructor",{value:b,configurable:!0}),b.displayName=l(x,f,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===b||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,l(t,f,"GeneratorFunction")),t.prototype=Object.create(O),t},r.awrap=function(t){return{__await:t}},j(P.prototype),l(P.prototype,s,function(){return this}),r.AsyncIterator=P,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new P(h(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},j(O),l(O,f,"Generator"),l(O,u,function(){return this}),l(O,"toString",function(){return"[object Generator]"}),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=F,T.prototype={constructor:T,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(N),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function o(n,o){return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),m},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),N(e),m}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;N(e)}return o}}throw Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:F(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),m}},r}function a(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void e(t)}c.done?r(u):Promise.resolve(u).then(n,o)}function c(t){return function(){var r=this,e=arguments;return new Promise(function(n,o){var i=t.apply(r,e);function c(t){a(i,n,o,c,u,"next",t)}function u(t){a(i,n,o,c,u,"throw",t)}c(void 0)})}}var u=Stripe("".concat(void 0)),s=exports.orderProducts=function(){var t=c(i().mark(function t(n,o){var a;return i().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,e.default)({method:"POST",url:"/api/v1/orders/checkout-session",data:{productsId:n,productsQty:o}});case 3:return a=t.sent,(0,r.showAlert)("success","Directing to payment..."),t.next=7,u.redirectToCheckout({sessionId:a.data.session.id});case 7:t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),(0,r.showAlert)("error","".concat(t.t0.response.data.message));case 12:case"end":return t.stop()}},t,null,[[0,9]])}));return function(r,e){return t.apply(this,arguments)}}();
},{"./utils/alerts":"VDCA","axios":"uj17"}],"ZnF3":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.initCart=void 0;var e=require("../utils/alerts"),t=require("../user-cart/cartFunction"),c=require("../stripe"),r=exports.initCart=function(){var r=document.querySelector(".add-to-cart-btn"),n=document.querySelectorAll(".item-checkbox"),o=document.querySelector(".all-checkbox"),a=document.querySelectorAll(".decrease-btn"),l=document.querySelectorAll(".increase-btn"),i=document.querySelectorAll(".item-delete"),u=document.querySelector(".checkout-btn"),s=[],d=[];r&&r.addEventListener("click",function(e){e.preventDefault();var c=window.location.pathname.split("/").pop();(0,t.addToCartRequest)(c)}),n&&n.forEach(function(e){e.addEventListener("change",function(){e.classList.toggle("checked",e.checked),(0,t.calCheckout)(),(0,t.updateAllCheckbox)(),(0,t.getCheckedItem)(s,e)})}),o&&o.addEventListener("change",function(){var e=o.checked;o.classList.toggle("checked",e),s=[],d=[],n.forEach(function(c){c.checked=e,c.classList.toggle("checked",e),(0,t.getCheckedItem)(s,c)}),(0,t.calCheckout)()}),a&&l&&document.querySelectorAll(".decrease-btn, .increase-btn").forEach(function(e){var c=e.classList.contains("decrease-btn")?-1:1;e.addEventListener("click",function(r){(0,t.setQuantity)(e,c)})}),i&&i.forEach(function(e){e.addEventListener("click",function(e){if(e.target.matches(".item-delete")){var c=e.target.closest(".item");c.remove();var r=c.dataset.productId;(0,t.deleteItem)(r),(0,t.calCheckout)(),(0,t.updateAllCheckbox)()}})}),u&&u.addEventListener("click",function(t){t.preventDefault(),d=[],document.querySelectorAll(".qt-input").forEach(function(e){e.closest(".item").querySelector(".item-checkbox").classList.contains("checked")&&d.push(parseInt(e.value))}),0!==s.length&&0!==d.length?(0,c.orderProducts)(s,d):(0,e.showAlert)("error","Please select an item to checkout!")})};
},{"../utils/alerts":"VDCA","../user-cart/cartFunction":"vua8","../stripe":"Uj2q"}],"ckVp":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.reviewToggleAndRatingStars=void 0;var e=exports.reviewToggleAndRatingStars=function(){function e(e,t,a){(Array.isArray(e)?e:[e]).forEach(function(e){var r=parseFloat(e.getAttribute("data-value"));r<=a?(e.classList.add("fa-solid"),e.classList.remove("fa-regular",t)):r-.5===a?(e.classList.add("fa-solid",t),e.classList.remove("fa-regular")):(e.classList.remove("fa-solid",t),e.classList.add("fa-regular"))})}document.querySelectorAll(".review").forEach(function(e){var t=e.querySelector(".user-review"),a=e.querySelector(".toggle-button");t.scrollHeight>t.clientHeight?a.style.display="block":a.style.display="none"}),document.querySelectorAll(".toggle-button").forEach(function(e){e.addEventListener("click",function(){var t,a;(a=(t=e).parentElement.previousElementSibling).classList.contains("expanded")?(a.classList.remove("expanded"),t.textContent="Expand foldedView"):(a.classList.add("expanded"),t.textContent="(Fold)")})}),function(e,t){for(var a=1;a<=t;a++){var r=document.createElement("div");r.classList.add("leave-star-rating","star","fa-regular","fa-star","fa-2xl","m-2"),r.setAttribute("style","color: #FFD43B;"),r.setAttribute("data-value",a);var n=document.createElement("span");n.classList.add("span-box");var l=document.createElement("span");l.classList.add("span-left");var s=document.createElement("span");s.classList.add("span-right"),n.appendChild(l),n.appendChild(s),r.appendChild(n),e.appendChild(r)}}(document.querySelector(".star-rating"),5);var t=Array.from(document.querySelectorAll(".leave-star-rating")),a=document.getElementById("rating"),r=document.querySelector(".rating-value");t.forEach(function(n){var l=n.querySelector(".span-left"),s=n.querySelector(".span-right");l.addEventListener("mouseover",function(){var l=parseFloat(n.getAttribute("data-value"))-.5;a.value=l,r.textContent="(".concat(l," / 5)"),e(t,"fa-star-half-stroke",l)}),s.addEventListener("mouseover",function(){var l=parseFloat(n.getAttribute("data-value"));a.value=l,r.textContent="(".concat(l," / 5)"),e(t,"fa-star-half-stroke",l)})}),document.querySelectorAll(".review-rating-star").forEach(function(e){!function(e,t){for(var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"regular",r=1;r<=t;r++){var n=document.createElement("div");n.className="star-in-rating star fa-".concat(a," fa-star fa-sm m-2"),n.setAttribute("data-value",r),e.appendChild(n)}}(e,5,"regular")}),document.querySelectorAll(".star-in-rating").forEach(function(t){var a=t.closest(".rating").querySelector(".rating-in-review");e(t,"fa-star-half-stroke",parseFloat(a.textContent.replace(/[()]/g,"").split("/")[0]))})};
},{}],"D0HJ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.initReview=void 0;var t=n(require("axios")),e=require("../utils/alerts"),r=require("./review-render");function n(t){return t&&t.__esModule?t:{default:t}}function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(){i=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof w?e:w,i=Object.create(o.prototype),c=new N(n||[]);return a(i,"_invoke",{value:k(t,r,c)}),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var v="suspendedStart",y="suspendedYield",d="executing",g="completed",m={};function w(){}function b(){}function x(){}var L={};f(L,u,function(){return this});var E=Object.getPrototypeOf,_=E&&E(E(A([])));_&&_!==r&&n.call(_,u)&&(L=_);var O=x.prototype=w.prototype=Object.create(L);function S(t){["next","throw","return"].forEach(function(e){f(t,e,function(t){return this._invoke(e,t)})})}function j(t,e){function r(i,a,c,u){var s=p(t[i],t,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==o(f)&&n.call(f,"__await")?e.resolve(f.__await).then(function(t){r("next",t,c,u)},function(t){r("throw",t,c,u)}):e.resolve(f).then(function(t){l.value=t,c(l)},function(t){return r("throw",t,c,u)})}u(s.arg)}var i;a(this,"_invoke",{value:function(t,n){function o(){return new e(function(e,o){r(t,n,e,o)})}return i=i?i.then(o,o):o()}})}function k(e,r,n){var o=v;return function(i,a){if(o===d)throw Error("Generator is already running");if(o===g){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=P(c,n);if(u){if(u===m)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===v)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var s=p(e,r,n);if("normal"===s.type){if(o=n.done?g:y,s.arg===m)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=g,n.method="throw",n.arg=s.arg)}}}function P(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,P(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var i=p(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,m;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function G(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function A(e){if(e||""===e){var r=e[u];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(o(e)+" is not iterable")}return b.prototype=x,a(O,"constructor",{value:x,configurable:!0}),a(x,"constructor",{value:b,configurable:!0}),b.displayName=f(x,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,f(t,l,"GeneratorFunction")),t.prototype=Object.create(O),t},e.awrap=function(t){return{__await:t}},S(j.prototype),f(j.prototype,s,function(){return this}),e.AsyncIterator=j,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new j(h(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then(function(t){return t.done?t.value:a.next()})},S(O),f(O,l,"Generator"),f(O,u,function(){return this}),f(O,"toString",function(){return"[object Generator]"}),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=A,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(G),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),G(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;G(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:A(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},e}function a(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function c(t){return function(){var e=this,r=arguments;return new Promise(function(n,o){var i=t.apply(e,r);function c(t){a(i,n,o,c,u,"next",t)}function u(t){a(i,n,o,c,u,"throw",t)}c(void 0)})}}var u=function(){var r=c(i().mark(function r(n,o,a){var c;return i().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,t.default)({method:"POST",url:"/api/v1/reviews/".concat(n),data:{review:o,rating:a}});case 3:"success"===(c=r.sent).data.status&&((0,e.showAlert)("success",c.data.message),window.setTimeout(function(){window.location.reload()},1500)),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),(0,e.showAlert)("error","".concat("".concat(r.t0.response.data.message)),4);case 10:case"end":return r.stop()}},r,null,[[0,7]])}));return function(t,e,n){return r.apply(this,arguments)}}(),s=exports.initReview=function(){var t=c(i().mark(function t(){var n;return i().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:document.querySelector(".reviews")&&(0,r.reviewToggleAndRatingStars)(),(n=document.getElementById("review-submit"))&&n.addEventListener("click",function(t){t.preventDefault();var r=document.getElementById("review-textarea").value,n=document.querySelector(".rating-value").textContent;if(!r)return(0,e.showAlert)("error","Please leave your review!",4);var o=window.location.pathname.split("/").pop(),i=n.replace(/[()]/g,"").split(" / ")[0];console.log(i),u(o,r,i)});case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}();
},{"axios":"uj17","../utils/alerts":"VDCA","./review-render":"ckVp"}],"Focm":[function(require,module,exports) {
"use strict";var e=require("./utils/alerts"),r=require("./user-auth/login"),t=require("./user-auth/signup"),i=require("./user-auth/twoFactorVerify"),u=require("./search-item/search"),a=require("./user-account/updateSettings"),n=require("./user-cart/cart"),s=require("./product-review/review");document.addEventListener("DOMContentLoaded",function(){(0,r.initLoginOut)(),(0,t.initSignup)(),(0,i.initForgetPassword)(),(0,u.initSearch)(),(0,a.initUpdateSetting)(),(0,n.initCart)(),(0,s.initReview)()});var c=document.querySelector("body").dataset.alert;c&&(0,e.showAlert)("success",c,20);
},{"./utils/alerts":"VDCA","./user-auth/login":"HFuV","./user-auth/signup":"wYjI","./user-auth/twoFactorVerify":"aulk","./search-item/search":"rQig","./user-account/updateSettings":"LqgB","./user-cart/cart":"ZnF3","./product-review/review":"D0HJ"}]},{},["Focm"], null)
=======
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _utils = _interopRequireDefault(require("../utils.js"));
var _AxiosError = _interopRequireDefault(require("../core/AxiosError.js"));
var _FormData = _interopRequireDefault(require("../platform/node/classes/FormData.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// temporary hotfix to avoid circular references until AxiosURLSearchParams is refactored

/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */
function isVisitable(thing) {
  return _utils.default.isPlainObject(thing) || _utils.default.isArray(thing);
}

/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */
function removeBrackets(key) {
  return _utils.default.endsWith(key, '[]') ? key.slice(0, -2) : key;
}

/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */
function renderKey(path, key, dots) {
  if (!path) return key;
  return path.concat(key).map(function each(token, i) {
    // eslint-disable-next-line no-param-reassign
    token = removeBrackets(token);
    return !dots && i ? '[' + token + ']' : token;
  }).join(dots ? '.' : '');
}

/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */
function isFlatArray(arr) {
  return _utils.default.isArray(arr) && !arr.some(isVisitable);
}
const predicates = _utils.default.toFlatObject(_utils.default, {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});

/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/

/**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */
function toFormData(obj, formData, options) {
  if (!_utils.default.isObject(obj)) {
    throw new TypeError('target must be an object');
  }

  // eslint-disable-next-line no-param-reassign
  formData = formData || new (_FormData.default || FormData)();

  // eslint-disable-next-line no-param-reassign
  options = _utils.default.toFlatObject(options, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    return !_utils.default.isUndefined(source[option]);
  });
  const metaTokens = options.metaTokens;
  // eslint-disable-next-line no-use-before-define
  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;
  const _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;
  const useBlob = _Blob && _utils.default.isSpecCompliantForm(formData);
  if (!_utils.default.isFunction(visitor)) {
    throw new TypeError('visitor must be a function');
  }
  function convertValue(value) {
    if (value === null) return '';
    if (_utils.default.isDate(value)) {
      return value.toISOString();
    }
    if (!useBlob && _utils.default.isBlob(value)) {
      throw new _AxiosError.default('Blob is not supported. Use a Buffer instead.');
    }
    if (_utils.default.isArrayBuffer(value) || _utils.default.isTypedArray(value)) {
      return useBlob && typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
    }
    return value;
  }

  /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */
  function defaultVisitor(value, key, path) {
    let arr = value;
    if (value && !path && typeof value === 'object') {
      if (_utils.default.endsWith(key, '{}')) {
        // eslint-disable-next-line no-param-reassign
        key = metaTokens ? key : key.slice(0, -2);
        // eslint-disable-next-line no-param-reassign
        value = JSON.stringify(value);
      } else if (_utils.default.isArray(value) && isFlatArray(value) || (_utils.default.isFileList(value) || _utils.default.endsWith(key, '[]')) && (arr = _utils.default.toArray(value))) {
        // eslint-disable-next-line no-param-reassign
        key = removeBrackets(key);
        arr.forEach(function each(el, index) {
          !(_utils.default.isUndefined(el) || el === null) && formData.append(
          // eslint-disable-next-line no-nested-ternary
          indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + '[]', convertValue(el));
        });
        return false;
      }
    }
    if (isVisitable(value)) {
      return true;
    }
    formData.append(renderKey(path, key, dots), convertValue(value));
    return false;
  }
  const stack = [];
  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });
  function build(value, path) {
    if (_utils.default.isUndefined(value)) return;
    if (stack.indexOf(value) !== -1) {
      throw Error('Circular reference detected in ' + path.join('.'));
    }
    stack.push(value);
    _utils.default.forEach(value, function each(el, key) {
      const result = !(_utils.default.isUndefined(el) || el === null) && visitor.call(formData, el, _utils.default.isString(key) ? key.trim() : key, path, exposedHelpers);
      if (result === true) {
        build(el, path ? path.concat(key) : [key]);
      }
    });
    stack.pop();
  }
  if (!_utils.default.isObject(obj)) {
    throw new TypeError('data must be an object');
  }
  build(obj);
  return formData;
}
var _default = exports.default = toFormData;
},{"../utils.js":"../../node_modules/axios/lib/utils.js","../core/AxiosError.js":"../../node_modules/axios/lib/core/AxiosError.js","../platform/node/classes/FormData.js":"../../node_modules/axios/lib/helpers/null.js","buffer":"../../node_modules/buffer/index.js"}],"../../node_modules/axios/lib/helpers/AxiosURLSearchParams.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _toFormData = _interopRequireDefault(require("./toFormData.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */
function encode(str) {
  const charMap = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\x00'
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
    return charMap[match];
  });
}

/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */
function AxiosURLSearchParams(params, options) {
  this._pairs = [];
  params && (0, _toFormData.default)(params, this, options);
}
const prototype = AxiosURLSearchParams.prototype;
prototype.append = function append(name, value) {
  this._pairs.push([name, value]);
};
prototype.toString = function toString(encoder) {
  const _encode = encoder ? function (value) {
    return encoder.call(this, value, encode);
  } : encode;
  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + '=' + _encode(pair[1]);
  }, '').join('&');
};
var _default = exports.default = AxiosURLSearchParams;
},{"./toFormData.js":"../../node_modules/axios/lib/helpers/toFormData.js"}],"../../node_modules/axios/lib/helpers/buildURL.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buildURL;
var _utils = _interopRequireDefault(require("../utils.js"));
var _AxiosURLSearchParams = _interopRequireDefault(require("../helpers/AxiosURLSearchParams.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */
function encode(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @param {?(object|Function)} options
 *
 * @returns {string} The formatted url
 */
function buildURL(url, params, options) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }
  const _encode = options && options.encode || encode;
  if (_utils.default.isFunction(options)) {
    options = {
      serialize: options
    };
  }
  const serializeFn = options && options.serialize;
  let serializedParams;
  if (serializeFn) {
    serializedParams = serializeFn(params, options);
  } else {
    serializedParams = _utils.default.isURLSearchParams(params) ? params.toString() : new _AxiosURLSearchParams.default(params, options).toString(_encode);
  }
  if (serializedParams) {
    const hashmarkIndex = url.indexOf("#");
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }
  return url;
}
},{"../utils.js":"../../node_modules/axios/lib/utils.js","../helpers/AxiosURLSearchParams.js":"../../node_modules/axios/lib/helpers/AxiosURLSearchParams.js"}],"../../node_modules/axios/lib/core/InterceptorManager.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _utils = _interopRequireDefault(require("./../utils.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
class InterceptorManager {
  constructor() {
    this.handlers = [];
  }

  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  }

  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }

  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }

  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(fn) {
    _utils.default.forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  }
}
var _default = exports.default = InterceptorManager;
},{"./../utils.js":"../../node_modules/axios/lib/utils.js"}],"../../node_modules/axios/lib/defaults/transitional.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = exports.default = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};
},{}],"../../node_modules/axios/lib/platform/browser/classes/URLSearchParams.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _AxiosURLSearchParams = _interopRequireDefault(require("../../../helpers/AxiosURLSearchParams.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var _default = exports.default = typeof URLSearchParams !== 'undefined' ? URLSearchParams : _AxiosURLSearchParams.default;
},{"../../../helpers/AxiosURLSearchParams.js":"../../node_modules/axios/lib/helpers/AxiosURLSearchParams.js"}],"../../node_modules/axios/lib/platform/browser/classes/FormData.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = exports.default = typeof FormData !== 'undefined' ? FormData : null;
},{}],"../../node_modules/axios/lib/platform/browser/classes/Blob.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = exports.default = typeof Blob !== 'undefined' ? Blob : null;
},{}],"../../node_modules/axios/lib/platform/browser/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _URLSearchParams = _interopRequireDefault(require("./classes/URLSearchParams.js"));
var _FormData = _interopRequireDefault(require("./classes/FormData.js"));
var _Blob = _interopRequireDefault(require("./classes/Blob.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var _default = exports.default = {
  isBrowser: true,
  classes: {
    URLSearchParams: _URLSearchParams.default,
    FormData: _FormData.default,
    Blob: _Blob.default
  },
  protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
};
},{"./classes/URLSearchParams.js":"../../node_modules/axios/lib/platform/browser/classes/URLSearchParams.js","./classes/FormData.js":"../../node_modules/axios/lib/platform/browser/classes/FormData.js","./classes/Blob.js":"../../node_modules/axios/lib/platform/browser/classes/Blob.js"}],"../../node_modules/axios/lib/platform/common/utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.origin = exports.navigator = exports.hasStandardBrowserWebWorkerEnv = exports.hasStandardBrowserEnv = exports.hasBrowserEnv = void 0;
const hasBrowserEnv = exports.hasBrowserEnv = typeof window !== 'undefined' && typeof document !== 'undefined';
const _navigator = exports.navigator = typeof navigator === 'object' && navigator || undefined;

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */
const hasStandardBrowserEnv = exports.hasStandardBrowserEnv = hasBrowserEnv && (!_navigator || ['ReactNative', 'NativeScript', 'NS'].indexOf(_navigator.product) < 0);

/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */
const hasStandardBrowserWebWorkerEnv = exports.hasStandardBrowserWebWorkerEnv = (() => {
  return typeof WorkerGlobalScope !== 'undefined' &&
  // eslint-disable-next-line no-undef
  self instanceof WorkerGlobalScope && typeof self.importScripts === 'function';
})();
const origin = exports.origin = hasBrowserEnv && window.location.href || 'http://localhost';
},{}],"../../node_modules/axios/lib/platform/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(require("./node/index.js"));
var utils = _interopRequireWildcard(require("./common/utils.js"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var _default = exports.default = {
  ...utils,
  ..._index.default
};
},{"./node/index.js":"../../node_modules/axios/lib/platform/browser/index.js","./common/utils.js":"../../node_modules/axios/lib/platform/common/utils.js"}],"../../node_modules/axios/lib/helpers/toURLEncodedForm.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toURLEncodedForm;
var _utils = _interopRequireDefault(require("../utils.js"));
var _toFormData = _interopRequireDefault(require("./toFormData.js"));
var _index = _interopRequireDefault(require("../platform/index.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function toURLEncodedForm(data, options) {
  return (0, _toFormData.default)(data, new _index.default.classes.URLSearchParams(), Object.assign({
    visitor: function (value, key, path, helpers) {
      if (_index.default.isNode && _utils.default.isBuffer(value)) {
        this.append(key, value.toString('base64'));
        return false;
      }
      return helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
}
},{"../utils.js":"../../node_modules/axios/lib/utils.js","./toFormData.js":"../../node_modules/axios/lib/helpers/toFormData.js","../platform/index.js":"../../node_modules/axios/lib/platform/index.js"}],"../../node_modules/axios/lib/helpers/formDataToJSON.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _utils = _interopRequireDefault(require("../utils.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */
function parsePropPath(name) {
  // foo[x][y][z]
  // foo.x.y.z
  // foo-x-y-z
  // foo x y z
  return _utils.default.matchAll(/\w+|\[(\w*)]/g, name).map(match => {
    return match[0] === '[]' ? '' : match[1] || match[0];
  });
}

/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */
function arrayToObject(arr) {
  const obj = {};
  const keys = Object.keys(arr);
  let i;
  const len = keys.length;
  let key;
  for (i = 0; i < len; i++) {
    key = keys[i];
    obj[key] = arr[key];
  }
  return obj;
}

/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    let name = path[index++];
    if (name === '__proto__') return true;
    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && _utils.default.isArray(target) ? target.length : name;
    if (isLast) {
      if (_utils.default.hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }
      return !isNumericKey;
    }
    if (!target[name] || !_utils.default.isObject(target[name])) {
      target[name] = [];
    }
    const result = buildPath(path, value, target[name], index);
    if (result && _utils.default.isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }
    return !isNumericKey;
  }
  if (_utils.default.isFormData(formData) && _utils.default.isFunction(formData.entries)) {
    const obj = {};
    _utils.default.forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });
    return obj;
  }
  return null;
}
var _default = exports.default = formDataToJSON;
},{"../utils.js":"../../node_modules/axios/lib/utils.js"}],"../../node_modules/axios/lib/defaults/index.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _utils = _interopRequireDefault(require("../utils.js"));
var _AxiosError = _interopRequireDefault(require("../core/AxiosError.js"));
var _transitional = _interopRequireDefault(require("./transitional.js"));
var _toFormData = _interopRequireDefault(require("../helpers/toFormData.js"));
var _toURLEncodedForm = _interopRequireDefault(require("../helpers/toURLEncodedForm.js"));
var _index = _interopRequireDefault(require("../platform/index.js"));
var _formDataToJSON = _interopRequireDefault(require("../helpers/formDataToJSON.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */
function stringifySafely(rawValue, parser, encoder) {
  if (_utils.default.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return _utils.default.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }
  return (encoder || JSON.stringify)(rawValue);
}
const defaults = {
  transitional: _transitional.default,
  adapter: ['xhr', 'http', 'fetch'],
  transformRequest: [function transformRequest(data, headers) {
    const contentType = headers.getContentType() || '';
    const hasJSONContentType = contentType.indexOf('application/json') > -1;
    const isObjectPayload = _utils.default.isObject(data);
    if (isObjectPayload && _utils.default.isHTMLForm(data)) {
      data = new FormData(data);
    }
    const isFormData = _utils.default.isFormData(data);
    if (isFormData) {
      return hasJSONContentType ? JSON.stringify((0, _formDataToJSON.default)(data)) : data;
    }
    if (_utils.default.isArrayBuffer(data) || _utils.default.isBuffer(data) || _utils.default.isStream(data) || _utils.default.isFile(data) || _utils.default.isBlob(data) || _utils.default.isReadableStream(data)) {
      return data;
    }
    if (_utils.default.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (_utils.default.isURLSearchParams(data)) {
      headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
      return data.toString();
    }
    let isFileList;
    if (isObjectPayload) {
      if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
        return (0, _toURLEncodedForm.default)(data, this.formSerializer).toString();
      }
      if ((isFileList = _utils.default.isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
        const _FormData = this.env && this.env.FormData;
        return (0, _toFormData.default)(isFileList ? {
          'files[]': data
        } : data, _FormData && new _FormData(), this.formSerializer);
      }
    }
    if (isObjectPayload || hasJSONContentType) {
      headers.setContentType('application/json', false);
      return stringifySafely(data);
    }
    return data;
  }],
  transformResponse: [function transformResponse(data) {
    const transitional = this.transitional || defaults.transitional;
    const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    const JSONRequested = this.responseType === 'json';
    if (_utils.default.isResponse(data) || _utils.default.isReadableStream(data)) {
      return data;
    }
    if (data && _utils.default.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
      const silentJSONParsing = transitional && transitional.silentJSONParsing;
      const strictJSONParsing = !silentJSONParsing && JSONRequested;
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw _AxiosError.default.from(e, _AxiosError.default.ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }
    return data;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: _index.default.classes.FormData,
    Blob: _index.default.classes.Blob
  },
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },
  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': undefined
    }
  }
};
_utils.default.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], method => {
  defaults.headers[method] = {};
});
var _default = exports.default = defaults;
},{"../utils.js":"../../node_modules/axios/lib/utils.js","../core/AxiosError.js":"../../node_modules/axios/lib/core/AxiosError.js","./transitional.js":"../../node_modules/axios/lib/defaults/transitional.js","../helpers/toFormData.js":"../../node_modules/axios/lib/helpers/toFormData.js","../helpers/toURLEncodedForm.js":"../../node_modules/axios/lib/helpers/toURLEncodedForm.js","../platform/index.js":"../../node_modules/axios/lib/platform/index.js","../helpers/formDataToJSON.js":"../../node_modules/axios/lib/helpers/formDataToJSON.js"}],"../../node_modules/axios/lib/helpers/parseHeaders.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _utils = _interopRequireDefault(require("./../utils.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const ignoreDuplicateOf = _utils.default.toObjectSet(['age', 'authorization', 'content-length', 'content-type', 'etag', 'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since', 'last-modified', 'location', 'max-forwards', 'proxy-authorization', 'referer', 'retry-after', 'user-agent']);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */
var _default = rawHeaders => {
  const parsed = {};
  let key;
  let val;
  let i;
  rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
    i = line.indexOf(':');
    key = line.substring(0, i).trim().toLowerCase();
    val = line.substring(i + 1).trim();
    if (!key || parsed[key] && ignoreDuplicateOf[key]) {
      return;
    }
    if (key === 'set-cookie') {
      if (parsed[key]) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });
  return parsed;
};
exports.default = _default;
},{"./../utils.js":"../../node_modules/axios/lib/utils.js"}],"../../node_modules/axios/lib/core/AxiosHeaders.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _utils = _interopRequireDefault(require("../utils.js"));
var _parseHeaders = _interopRequireDefault(require("../helpers/parseHeaders.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const $internals = Symbol('internals');
function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}
function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }
  return _utils.default.isArray(value) ? value.map(normalizeValue) : String(value);
}
function parseTokens(str) {
  const tokens = Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;
  while (match = tokensRE.exec(str)) {
    tokens[match[1]] = match[2];
  }
  return tokens;
}
const isValidHeaderName = str => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
  if (_utils.default.isFunction(filter)) {
    return filter.call(this, value, header);
  }
  if (isHeaderNameFilter) {
    value = header;
  }
  if (!_utils.default.isString(value)) return;
  if (_utils.default.isString(filter)) {
    return value.indexOf(filter) !== -1;
  }
  if (_utils.default.isRegExp(filter)) {
    return filter.test(value);
  }
}
function formatHeader(header) {
  return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
    return char.toUpperCase() + str;
  });
}
function buildAccessors(obj, header) {
  const accessorName = _utils.default.toCamelCase(' ' + header);
  ['get', 'set', 'has'].forEach(methodName => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function (arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}
class AxiosHeaders {
  constructor(headers) {
    headers && this.set(headers);
  }
  set(header, valueOrRewrite, rewrite) {
    const self = this;
    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);
      if (!lHeader) {
        throw new Error('header name must be a non-empty string');
      }
      const key = _utils.default.findKey(self, lHeader);
      if (!key || self[key] === undefined || _rewrite === true || _rewrite === undefined && self[key] !== false) {
        self[key || _header] = normalizeValue(_value);
      }
    }
    const setHeaders = (headers, _rewrite) => _utils.default.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
    if (_utils.default.isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite);
    } else if (_utils.default.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders((0, _parseHeaders.default)(header), valueOrRewrite);
    } else if (_utils.default.isHeaders(header)) {
      for (const [key, value] of header.entries()) {
        setHeader(value, key, rewrite);
      }
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }
    return this;
  }
  get(header, parser) {
    header = normalizeHeader(header);
    if (header) {
      const key = _utils.default.findKey(this, header);
      if (key) {
        const value = this[key];
        if (!parser) {
          return value;
        }
        if (parser === true) {
          return parseTokens(value);
        }
        if (_utils.default.isFunction(parser)) {
          return parser.call(this, value, key);
        }
        if (_utils.default.isRegExp(parser)) {
          return parser.exec(value);
        }
        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }
  has(header, matcher) {
    header = normalizeHeader(header);
    if (header) {
      const key = _utils.default.findKey(this, header);
      return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }
    return false;
  }
  delete(header, matcher) {
    const self = this;
    let deleted = false;
    function deleteHeader(_header) {
      _header = normalizeHeader(_header);
      if (_header) {
        const key = _utils.default.findKey(self, _header);
        if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
          delete self[key];
          deleted = true;
        }
      }
    }
    if (_utils.default.isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }
    return deleted;
  }
  clear(matcher) {
    const keys = Object.keys(this);
    let i = keys.length;
    let deleted = false;
    while (i--) {
      const key = keys[i];
      if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
        delete this[key];
        deleted = true;
      }
    }
    return deleted;
  }
  normalize(format) {
    const self = this;
    const headers = {};
    _utils.default.forEach(this, (value, header) => {
      const key = _utils.default.findKey(headers, header);
      if (key) {
        self[key] = normalizeValue(value);
        delete self[header];
        return;
      }
      const normalized = format ? formatHeader(header) : String(header).trim();
      if (normalized !== header) {
        delete self[header];
      }
      self[normalized] = normalizeValue(value);
      headers[normalized] = true;
    });
    return this;
  }
  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }
  toJSON(asStrings) {
    const obj = Object.create(null);
    _utils.default.forEach(this, (value, header) => {
      value != null && value !== false && (obj[header] = asStrings && _utils.default.isArray(value) ? value.join(', ') : value);
    });
    return obj;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ': ' + value).join('\n');
  }
  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }
  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }
  static concat(first, ...targets) {
    const computed = new this(first);
    targets.forEach(target => computed.set(target));
    return computed;
  }
  static accessor(header) {
    const internals = this[$internals] = this[$internals] = {
      accessors: {}
    };
    const accessors = internals.accessors;
    const prototype = this.prototype;
    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);
      if (!accessors[lHeader]) {
        buildAccessors(prototype, _header);
        accessors[lHeader] = true;
      }
    }
    _utils.default.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
    return this;
  }
}
AxiosHeaders.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);

// reserved names hotfix
_utils.default.reduceDescriptors(AxiosHeaders.prototype, ({
  value
}, key) => {
  let mapped = key[0].toUpperCase() + key.slice(1); // map `set` => `Set`
  return {
    get: () => value,
    set(headerValue) {
      this[mapped] = headerValue;
    }
  };
});
_utils.default.freezeMethods(AxiosHeaders);
var _default = exports.default = AxiosHeaders;
},{"../utils.js":"../../node_modules/axios/lib/utils.js","../helpers/parseHeaders.js":"../../node_modules/axios/lib/helpers/parseHeaders.js"}],"../../node_modules/axios/lib/core/transformData.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transformData;
var _utils = _interopRequireDefault(require("./../utils.js"));
var _index = _interopRequireDefault(require("../defaults/index.js"));
var _AxiosHeaders = _interopRequireDefault(require("../core/AxiosHeaders.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * Transform the data for a request or a response
 *
 * @param {Array|Function} fns A single function or Array of functions
 * @param {?Object} response The response object
 *
 * @returns {*} The resulting transformed data
 */
function transformData(fns, response) {
  const config = this || _index.default;
  const context = response || config;
  const headers = _AxiosHeaders.default.from(context.headers);
  let data = context.data;
  _utils.default.forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
  });
  headers.normalize();
  return data;
}
},{"./../utils.js":"../../node_modules/axios/lib/utils.js","../defaults/index.js":"../../node_modules/axios/lib/defaults/index.js","../core/AxiosHeaders.js":"../../node_modules/axios/lib/core/AxiosHeaders.js"}],"../../node_modules/axios/lib/cancel/isCancel.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isCancel;
function isCancel(value) {
  return !!(value && value.__CANCEL__);
}
},{}],"../../node_modules/axios/lib/cancel/CanceledError.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _AxiosError = _interopRequireDefault(require("../core/AxiosError.js"));
var _utils = _interopRequireDefault(require("../utils.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */
function CanceledError(message, config, request) {
  // eslint-disable-next-line no-eq-null,eqeqeq
  _AxiosError.default.call(this, message == null ? 'canceled' : message, _AxiosError.default.ERR_CANCELED, config, request);
  this.name = 'CanceledError';
}
_utils.default.inherits(CanceledError, _AxiosError.default, {
  __CANCEL__: true
});
var _default = exports.default = CanceledError;
},{"../core/AxiosError.js":"../../node_modules/axios/lib/core/AxiosError.js","../utils.js":"../../node_modules/axios/lib/utils.js"}],"../../node_modules/axios/lib/core/settle.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = settle;
var _AxiosError = _interopRequireDefault(require("./AxiosError.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 *
 * @returns {object} The response.
 */
function settle(resolve, reject, response) {
  const validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(new _AxiosError.default('Request failed with status code ' + response.status, [_AxiosError.default.ERR_BAD_REQUEST, _AxiosError.default.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4], response.config, response.request, response));
  }
}
},{"./AxiosError.js":"../../node_modules/axios/lib/core/AxiosError.js"}],"../../node_modules/axios/lib/helpers/parseProtocol.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parseProtocol;
function parseProtocol(url) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || '';
}
},{}],"../../node_modules/axios/lib/helpers/speedometer.js":[function(require,module,exports) {
'use strict';

/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;
  min = min !== undefined ? min : 1000;
  return function push(chunkLength) {
    const now = Date.now();
    const startedAt = timestamps[tail];
    if (!firstSampleTS) {
      firstSampleTS = now;
    }
    bytes[head] = chunkLength;
    timestamps[head] = now;
    let i = tail;
    let bytesCount = 0;
    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }
    head = (head + 1) % samplesCount;
    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }
    if (now - firstSampleTS < min) {
      return;
    }
    const passed = startedAt && now - startedAt;
    return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
  };
}
var _default = exports.default = speedometer;
},{}],"../../node_modules/axios/lib/helpers/throttle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * Throttle decorator
 * @param {Function} fn
 * @param {Number} freq
 * @return {Function}
 */
function throttle(fn, freq) {
  let timestamp = 0;
  let threshold = 1000 / freq;
  let lastArgs;
  let timer;
  const invoke = (args, now = Date.now()) => {
    timestamp = now;
    lastArgs = null;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    fn.apply(null, args);
  };
  const throttled = (...args) => {
    const now = Date.now();
    const passed = now - timestamp;
    if (passed >= threshold) {
      invoke(args, now);
    } else {
      lastArgs = args;
      if (!timer) {
        timer = setTimeout(() => {
          timer = null;
          invoke(lastArgs);
        }, threshold - passed);
      }
    }
  };
  const flush = () => lastArgs && invoke(lastArgs);
  return [throttled, flush];
}
var _default = exports.default = throttle;
},{}],"../../node_modules/axios/lib/helpers/progressEventReducer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.progressEventReducer = exports.progressEventDecorator = exports.asyncDecorator = void 0;
var _speedometer2 = _interopRequireDefault(require("./speedometer.js"));
var _throttle = _interopRequireDefault(require("./throttle.js"));
var _utils = _interopRequireDefault(require("../utils.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const progressEventReducer = (listener, isDownloadStream, freq = 3) => {
  let bytesNotified = 0;
  const _speedometer = (0, _speedometer2.default)(50, 250);
  return (0, _throttle.default)(e => {
    const loaded = e.loaded;
    const total = e.lengthComputable ? e.total : undefined;
    const progressBytes = loaded - bytesNotified;
    const rate = _speedometer(progressBytes);
    const inRange = loaded <= total;
    bytesNotified = loaded;
    const data = {
      loaded,
      total,
      progress: total ? loaded / total : undefined,
      bytes: progressBytes,
      rate: rate ? rate : undefined,
      estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
      event: e,
      lengthComputable: total != null,
      [isDownloadStream ? 'download' : 'upload']: true
    };
    listener(data);
  }, freq);
};
exports.progressEventReducer = progressEventReducer;
const progressEventDecorator = (total, throttled) => {
  const lengthComputable = total != null;
  return [loaded => throttled[0]({
    lengthComputable,
    total,
    loaded
  }), throttled[1]];
};
exports.progressEventDecorator = progressEventDecorator;
const asyncDecorator = fn => (...args) => _utils.default.asap(() => fn(...args));
exports.asyncDecorator = asyncDecorator;
},{"./speedometer.js":"../../node_modules/axios/lib/helpers/speedometer.js","./throttle.js":"../../node_modules/axios/lib/helpers/throttle.js","../utils.js":"../../node_modules/axios/lib/utils.js"}],"../../node_modules/axios/lib/helpers/isURLSameOrigin.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(require("../platform/index.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var _default = exports.default = _index.default.hasStandardBrowserEnv ? ((origin, isMSIE) => url => {
  url = new URL(url, _index.default.origin);
  return origin.protocol === url.protocol && origin.host === url.host && (isMSIE || origin.port === url.port);
})(new URL(_index.default.origin), _index.default.navigator && /(msie|trident)/i.test(_index.default.navigator.userAgent)) : () => true;
},{"../platform/index.js":"../../node_modules/axios/lib/platform/index.js"}],"../../node_modules/axios/lib/helpers/cookies.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _utils = _interopRequireDefault(require("./../utils.js"));
var _index = _interopRequireDefault(require("../platform/index.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var _default = exports.default = _index.default.hasStandardBrowserEnv ?
// Standard browser envs support document.cookie
{
  write(name, value, expires, path, domain, secure) {
    const cookie = [name + '=' + encodeURIComponent(value)];
    _utils.default.isNumber(expires) && cookie.push('expires=' + new Date(expires).toGMTString());
    _utils.default.isString(path) && cookie.push('path=' + path);
    _utils.default.isString(domain) && cookie.push('domain=' + domain);
    secure === true && cookie.push('secure');
    document.cookie = cookie.join('; ');
  },
  read(name) {
    const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
    return match ? decodeURIComponent(match[3]) : null;
  },
  remove(name) {
    this.write(name, '', Date.now() - 86400000);
  }
} :
// Non-standard browser env (web workers, react-native) lack needed support.
{
  write() {},
  read() {
    return null;
  },
  remove() {}
};
},{"./../utils.js":"../../node_modules/axios/lib/utils.js","../platform/index.js":"../../node_modules/axios/lib/platform/index.js"}],"../../node_modules/axios/lib/helpers/isAbsoluteURL.js":[function(require,module,exports) {
'use strict';

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 *
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAbsoluteURL;
function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}
},{}],"../../node_modules/axios/lib/helpers/combineURLs.js":[function(require,module,exports) {
'use strict';

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 *
 * @returns {string} The combined URL
 */
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = combineURLs;
function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/?\/$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
}
},{}],"../../node_modules/axios/lib/core/buildFullPath.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buildFullPath;
var _isAbsoluteURL = _interopRequireDefault(require("../helpers/isAbsoluteURL.js"));
var _combineURLs = _interopRequireDefault(require("../helpers/combineURLs.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 *
 * @returns {string} The combined full path
 */
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !(0, _isAbsoluteURL.default)(requestedURL)) {
    return (0, _combineURLs.default)(baseURL, requestedURL);
  }
  return requestedURL;
}
},{"../helpers/isAbsoluteURL.js":"../../node_modules/axios/lib/helpers/isAbsoluteURL.js","../helpers/combineURLs.js":"../../node_modules/axios/lib/helpers/combineURLs.js"}],"../../node_modules/axios/lib/core/mergeConfig.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mergeConfig;
var _utils = _interopRequireDefault(require("../utils.js"));
var _AxiosHeaders = _interopRequireDefault(require("./AxiosHeaders.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const headersToObject = thing => thing instanceof _AxiosHeaders.default ? {
  ...thing
} : thing;

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 *
 * @returns {Object} New object resulting from merging config2 to config1
 */
function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  const config = {};
  function getMergedValue(target, source, prop, caseless) {
    if (_utils.default.isPlainObject(target) && _utils.default.isPlainObject(source)) {
      return _utils.default.merge.call({
        caseless
      }, target, source);
    } else if (_utils.default.isPlainObject(source)) {
      return _utils.default.merge({}, source);
    } else if (_utils.default.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(a, b, prop, caseless) {
    if (!_utils.default.isUndefined(b)) {
      return getMergedValue(a, b, prop, caseless);
    } else if (!_utils.default.isUndefined(a)) {
      return getMergedValue(undefined, a, prop, caseless);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(a, b) {
    if (!_utils.default.isUndefined(b)) {
      return getMergedValue(undefined, b);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(a, b) {
    if (!_utils.default.isUndefined(b)) {
      return getMergedValue(undefined, b);
    } else if (!_utils.default.isUndefined(a)) {
      return getMergedValue(undefined, a);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(a, b, prop) {
    if (prop in config2) {
      return getMergedValue(a, b);
    } else if (prop in config1) {
      return getMergedValue(undefined, a);
    }
  }
  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    withXSRFToken: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b, prop) => mergeDeepProperties(headersToObject(a), headersToObject(b), prop, true)
  };
  _utils.default.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
    const merge = mergeMap[prop] || mergeDeepProperties;
    const configValue = merge(config1[prop], config2[prop], prop);
    _utils.default.isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
  });
  return config;
}
},{"../utils.js":"../../node_modules/axios/lib/utils.js","./AxiosHeaders.js":"../../node_modules/axios/lib/core/AxiosHeaders.js"}],"../../node_modules/axios/lib/helpers/resolveConfig.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(require("../platform/index.js"));
var _utils = _interopRequireDefault(require("../utils.js"));
var _isURLSameOrigin = _interopRequireDefault(require("./isURLSameOrigin.js"));
var _cookies = _interopRequireDefault(require("./cookies.js"));
var _buildFullPath = _interopRequireDefault(require("../core/buildFullPath.js"));
var _mergeConfig = _interopRequireDefault(require("../core/mergeConfig.js"));
var _AxiosHeaders = _interopRequireDefault(require("../core/AxiosHeaders.js"));
var _buildURL = _interopRequireDefault(require("./buildURL.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var _default = config => {
  const newConfig = (0, _mergeConfig.default)({}, config);
  let {
    data,
    withXSRFToken,
    xsrfHeaderName,
    xsrfCookieName,
    headers,
    auth
  } = newConfig;
  newConfig.headers = headers = _AxiosHeaders.default.from(headers);
  newConfig.url = (0, _buildURL.default)((0, _buildFullPath.default)(newConfig.baseURL, newConfig.url), config.params, config.paramsSerializer);

  // HTTP basic authentication
  if (auth) {
    headers.set('Authorization', 'Basic ' + btoa((auth.username || '') + ':' + (auth.password ? unescape(encodeURIComponent(auth.password)) : '')));
  }
  let contentType;
  if (_utils.default.isFormData(data)) {
    if (_index.default.hasStandardBrowserEnv || _index.default.hasStandardBrowserWebWorkerEnv) {
      headers.setContentType(undefined); // Let the browser set it
    } else if ((contentType = headers.getContentType()) !== false) {
      // fix semicolon duplication issue for ReactNative FormData implementation
      const [type, ...tokens] = contentType ? contentType.split(';').map(token => token.trim()).filter(Boolean) : [];
      headers.setContentType([type || 'multipart/form-data', ...tokens].join('; '));
    }
  }

  // Add xsrf header
  // This is only done if running in a standard browser environment.
  // Specifically not if we're in a web worker, or react-native.

  if (_index.default.hasStandardBrowserEnv) {
    withXSRFToken && _utils.default.isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(newConfig));
    if (withXSRFToken || withXSRFToken !== false && (0, _isURLSameOrigin.default)(newConfig.url)) {
      // Add xsrf header
      const xsrfValue = xsrfHeaderName && xsrfCookieName && _cookies.default.read(xsrfCookieName);
      if (xsrfValue) {
        headers.set(xsrfHeaderName, xsrfValue);
      }
    }
  }
  return newConfig;
};
exports.default = _default;
},{"../platform/index.js":"../../node_modules/axios/lib/platform/index.js","../utils.js":"../../node_modules/axios/lib/utils.js","./isURLSameOrigin.js":"../../node_modules/axios/lib/helpers/isURLSameOrigin.js","./cookies.js":"../../node_modules/axios/lib/helpers/cookies.js","../core/buildFullPath.js":"../../node_modules/axios/lib/core/buildFullPath.js","../core/mergeConfig.js":"../../node_modules/axios/lib/core/mergeConfig.js","../core/AxiosHeaders.js":"../../node_modules/axios/lib/core/AxiosHeaders.js","./buildURL.js":"../../node_modules/axios/lib/helpers/buildURL.js"}],"../../node_modules/axios/lib/adapters/xhr.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _utils = _interopRequireDefault(require("./../utils.js"));
var _settle = _interopRequireDefault(require("./../core/settle.js"));
var _transitional = _interopRequireDefault(require("../defaults/transitional.js"));
var _AxiosError = _interopRequireDefault(require("../core/AxiosError.js"));
var _CanceledError = _interopRequireDefault(require("../cancel/CanceledError.js"));
var _parseProtocol = _interopRequireDefault(require("../helpers/parseProtocol.js"));
var _index = _interopRequireDefault(require("../platform/index.js"));
var _AxiosHeaders = _interopRequireDefault(require("../core/AxiosHeaders.js"));
var _progressEventReducer = require("../helpers/progressEventReducer.js");
var _resolveConfig = _interopRequireDefault(require("../helpers/resolveConfig.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';
var _default = exports.default = isXHRAdapterSupported && function (config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    const _config = (0, _resolveConfig.default)(config);
    let requestData = _config.data;
    const requestHeaders = _AxiosHeaders.default.from(_config.headers).normalize();
    let {
      responseType,
      onUploadProgress,
      onDownloadProgress
    } = _config;
    let onCanceled;
    let uploadThrottled, downloadThrottled;
    let flushUpload, flushDownload;
    function done() {
      flushUpload && flushUpload(); // flush events
      flushDownload && flushDownload(); // flush events

      _config.cancelToken && _config.cancelToken.unsubscribe(onCanceled);
      _config.signal && _config.signal.removeEventListener('abort', onCanceled);
    }
    let request = new XMLHttpRequest();
    request.open(_config.method.toUpperCase(), _config.url, true);

    // Set the request timeout in MS
    request.timeout = _config.timeout;
    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      const responseHeaders = _AxiosHeaders.default.from('getAllResponseHeaders' in request && request.getAllResponseHeaders());
      const responseData = !responseType || responseType === 'text' || responseType === 'json' ? request.responseText : request.response;
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };
      (0, _settle.default)(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }
    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }
      reject(new _AxiosError.default('Request aborted', _AxiosError.default.ECONNABORTED, config, request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(new _AxiosError.default('Network Error', _AxiosError.default.ERR_NETWORK, config, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = _config.timeout ? 'timeout of ' + _config.timeout + 'ms exceeded' : 'timeout exceeded';
      const transitional = _config.transitional || _transitional.default;
      if (_config.timeoutErrorMessage) {
        timeoutErrorMessage = _config.timeoutErrorMessage;
      }
      reject(new _AxiosError.default(timeoutErrorMessage, transitional.clarifyTimeoutError ? _AxiosError.default.ETIMEDOUT : _AxiosError.default.ECONNABORTED, config, request));

      // Clean up request
      request = null;
    };

    // Remove Content-Type if data is undefined
    requestData === undefined && requestHeaders.setContentType(null);

    // Add headers to the request
    if ('setRequestHeader' in request) {
      _utils.default.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    }

    // Add withCredentials to request if needed
    if (!_utils.default.isUndefined(_config.withCredentials)) {
      request.withCredentials = !!_config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = _config.responseType;
    }

    // Handle progress if needed
    if (onDownloadProgress) {
      [downloadThrottled, flushDownload] = (0, _progressEventReducer.progressEventReducer)(onDownloadProgress, true);
      request.addEventListener('progress', downloadThrottled);
    }

    // Not all browsers support upload events
    if (onUploadProgress && request.upload) {
      [uploadThrottled, flushUpload] = (0, _progressEventReducer.progressEventReducer)(onUploadProgress);
      request.upload.addEventListener('progress', uploadThrottled);
      request.upload.addEventListener('loadend', flushUpload);
    }
    if (_config.cancelToken || _config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = cancel => {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new _CanceledError.default(null, config, request) : cancel);
        request.abort();
        request = null;
      };
      _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
      if (_config.signal) {
        _config.signal.aborted ? onCanceled() : _config.signal.addEventListener('abort', onCanceled);
      }
    }
    const protocol = (0, _parseProtocol.default)(_config.url);
    if (protocol && _index.default.protocols.indexOf(protocol) === -1) {
      reject(new _AxiosError.default('Unsupported protocol ' + protocol + ':', _AxiosError.default.ERR_BAD_REQUEST, config));
      return;
    }

    // Send the request
    request.send(requestData || null);
  });
};
},{"./../utils.js":"../../node_modules/axios/lib/utils.js","./../core/settle.js":"../../node_modules/axios/lib/core/settle.js","../defaults/transitional.js":"../../node_modules/axios/lib/defaults/transitional.js","../core/AxiosError.js":"../../node_modules/axios/lib/core/AxiosError.js","../cancel/CanceledError.js":"../../node_modules/axios/lib/cancel/CanceledError.js","../helpers/parseProtocol.js":"../../node_modules/axios/lib/helpers/parseProtocol.js","../platform/index.js":"../../node_modules/axios/lib/platform/index.js","../core/AxiosHeaders.js":"../../node_modules/axios/lib/core/AxiosHeaders.js","../helpers/progressEventReducer.js":"../../node_modules/axios/lib/helpers/progressEventReducer.js","../helpers/resolveConfig.js":"../../node_modules/axios/lib/helpers/resolveConfig.js"}],"../../node_modules/axios/lib/helpers/composeSignals.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _CanceledError = _interopRequireDefault(require("../cancel/CanceledError.js"));
var _AxiosError = _interopRequireDefault(require("../core/AxiosError.js"));
var _utils = _interopRequireDefault(require("../utils.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const composeSignals = (signals, timeout) => {
  const {
    length
  } = signals = signals ? signals.filter(Boolean) : [];
  if (timeout || length) {
    let controller = new AbortController();
    let aborted;
    const onabort = function (reason) {
      if (!aborted) {
        aborted = true;
        unsubscribe();
        const err = reason instanceof Error ? reason : this.reason;
        controller.abort(err instanceof _AxiosError.default ? err : new _CanceledError.default(err instanceof Error ? err.message : err));
      }
    };
    let timer = timeout && setTimeout(() => {
      timer = null;
      onabort(new _AxiosError.default(`timeout ${timeout} of ms exceeded`, _AxiosError.default.ETIMEDOUT));
    }, timeout);
    const unsubscribe = () => {
      if (signals) {
        timer && clearTimeout(timer);
        timer = null;
        signals.forEach(signal => {
          signal.unsubscribe ? signal.unsubscribe(onabort) : signal.removeEventListener('abort', onabort);
        });
        signals = null;
      }
    };
    signals.forEach(signal => signal.addEventListener('abort', onabort));
    const {
      signal
    } = controller;
    signal.unsubscribe = () => _utils.default.asap(unsubscribe);
    return signal;
  }
};
var _default = exports.default = composeSignals;
},{"../cancel/CanceledError.js":"../../node_modules/axios/lib/cancel/CanceledError.js","../core/AxiosError.js":"../../node_modules/axios/lib/core/AxiosError.js","../utils.js":"../../node_modules/axios/lib/utils.js"}],"../../node_modules/axios/lib/helpers/trackStream.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trackStream = exports.streamChunk = exports.readBytes = void 0;
const streamChunk = function* (chunk, chunkSize) {
  let len = chunk.byteLength;
  if (!chunkSize || len < chunkSize) {
    yield chunk;
    return;
  }
  let pos = 0;
  let end;
  while (pos < len) {
    end = pos + chunkSize;
    yield chunk.slice(pos, end);
    pos = end;
  }
};
exports.streamChunk = streamChunk;
const readBytes = async function* (iterable, chunkSize) {
  for await (const chunk of readStream(iterable)) {
    yield* streamChunk(chunk, chunkSize);
  }
};
exports.readBytes = readBytes;
const readStream = async function* (stream) {
  if (stream[Symbol.asyncIterator]) {
    yield* stream;
    return;
  }
  const reader = stream.getReader();
  try {
    for (;;) {
      const {
        done,
        value
      } = await reader.read();
      if (done) {
        break;
      }
      yield value;
    }
  } finally {
    await reader.cancel();
  }
};
const trackStream = (stream, chunkSize, onProgress, onFinish) => {
  const iterator = readBytes(stream, chunkSize);
  let bytes = 0;
  let done;
  let _onFinish = e => {
    if (!done) {
      done = true;
      onFinish && onFinish(e);
    }
  };
  return new ReadableStream({
    async pull(controller) {
      try {
        const {
          done,
          value
        } = await iterator.next();
        if (done) {
          _onFinish();
          controller.close();
          return;
        }
        let len = value.byteLength;
        if (onProgress) {
          let loadedBytes = bytes += len;
          onProgress(loadedBytes);
        }
        controller.enqueue(new Uint8Array(value));
      } catch (err) {
        _onFinish(err);
        throw err;
      }
    },
    cancel(reason) {
      _onFinish(reason);
      return iterator.return();
    }
  }, {
    highWaterMark: 2
  });
};
exports.trackStream = trackStream;
},{}],"../../node_modules/axios/lib/adapters/fetch.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(require("../platform/index.js"));
var _utils = _interopRequireDefault(require("../utils.js"));
var _AxiosError = _interopRequireDefault(require("../core/AxiosError.js"));
var _composeSignals = _interopRequireDefault(require("../helpers/composeSignals.js"));
var _trackStream = require("../helpers/trackStream.js");
var _AxiosHeaders = _interopRequireDefault(require("../core/AxiosHeaders.js"));
var _progressEventReducer = require("../helpers/progressEventReducer.js");
var _resolveConfig = _interopRequireDefault(require("../helpers/resolveConfig.js"));
var _settle = _interopRequireDefault(require("../core/settle.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const isFetchSupported = typeof fetch === 'function' && typeof Request === 'function' && typeof Response === 'function';
const isReadableStreamSupported = isFetchSupported && typeof ReadableStream === 'function';

// used only inside the fetch adapter
const encodeText = isFetchSupported && (typeof TextEncoder === 'function' ? (encoder => str => encoder.encode(str))(new TextEncoder()) : async str => new Uint8Array(await new Response(str).arrayBuffer()));
const test = (fn, ...args) => {
  try {
    return !!fn(...args);
  } catch (e) {
    return false;
  }
};
const supportsRequestStream = isReadableStreamSupported && test(() => {
  let duplexAccessed = false;
  const hasContentType = new Request(_index.default.origin, {
    body: new ReadableStream(),
    method: 'POST',
    get duplex() {
      duplexAccessed = true;
      return 'half';
    }
  }).headers.has('Content-Type');
  return duplexAccessed && !hasContentType;
});
const DEFAULT_CHUNK_SIZE = 64 * 1024;
const supportsResponseStream = isReadableStreamSupported && test(() => _utils.default.isReadableStream(new Response('').body));
const resolvers = {
  stream: supportsResponseStream && (res => res.body)
};
isFetchSupported && (res => {
  ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach(type => {
    !resolvers[type] && (resolvers[type] = _utils.default.isFunction(res[type]) ? res => res[type]() : (_, config) => {
      throw new _AxiosError.default(`Response type '${type}' is not supported`, _AxiosError.default.ERR_NOT_SUPPORT, config);
    });
  });
})(new Response());
const getBodyLength = async body => {
  if (body == null) {
    return 0;
  }
  if (_utils.default.isBlob(body)) {
    return body.size;
  }
  if (_utils.default.isSpecCompliantForm(body)) {
    const _request = new Request(_index.default.origin, {
      method: 'POST',
      body
    });
    return (await _request.arrayBuffer()).byteLength;
  }
  if (_utils.default.isArrayBufferView(body) || _utils.default.isArrayBuffer(body)) {
    return body.byteLength;
  }
  if (_utils.default.isURLSearchParams(body)) {
    body = body + '';
  }
  if (_utils.default.isString(body)) {
    return (await encodeText(body)).byteLength;
  }
};
const resolveBodyLength = async (headers, body) => {
  const length = _utils.default.toFiniteNumber(headers.getContentLength());
  return length == null ? getBodyLength(body) : length;
};
var _default = exports.default = isFetchSupported && (async config => {
  let {
    url,
    method,
    data,
    signal,
    cancelToken,
    timeout,
    onDownloadProgress,
    onUploadProgress,
    responseType,
    headers,
    withCredentials = 'same-origin',
    fetchOptions
  } = (0, _resolveConfig.default)(config);
  responseType = responseType ? (responseType + '').toLowerCase() : 'text';
  let composedSignal = (0, _composeSignals.default)([signal, cancelToken && cancelToken.toAbortSignal()], timeout);
  let request;
  const unsubscribe = composedSignal && composedSignal.unsubscribe && (() => {
    composedSignal.unsubscribe();
  });
  let requestContentLength;
  try {
    if (onUploadProgress && supportsRequestStream && method !== 'get' && method !== 'head' && (requestContentLength = await resolveBodyLength(headers, data)) !== 0) {
      let _request = new Request(url, {
        method: 'POST',
        body: data,
        duplex: "half"
      });
      let contentTypeHeader;
      if (_utils.default.isFormData(data) && (contentTypeHeader = _request.headers.get('content-type'))) {
        headers.setContentType(contentTypeHeader);
      }
      if (_request.body) {
        const [onProgress, flush] = (0, _progressEventReducer.progressEventDecorator)(requestContentLength, (0, _progressEventReducer.progressEventReducer)((0, _progressEventReducer.asyncDecorator)(onUploadProgress)));
        data = (0, _trackStream.trackStream)(_request.body, DEFAULT_CHUNK_SIZE, onProgress, flush);
      }
    }
    if (!_utils.default.isString(withCredentials)) {
      withCredentials = withCredentials ? 'include' : 'omit';
    }

    // Cloudflare Workers throws when credentials are defined
    // see https://github.com/cloudflare/workerd/issues/902
    const isCredentialsSupported = "credentials" in Request.prototype;
    request = new Request(url, {
      ...fetchOptions,
      signal: composedSignal,
      method: method.toUpperCase(),
      headers: headers.normalize().toJSON(),
      body: data,
      duplex: "half",
      credentials: isCredentialsSupported ? withCredentials : undefined
    });
    let response = await fetch(request);
    const isStreamResponse = supportsResponseStream && (responseType === 'stream' || responseType === 'response');
    if (supportsResponseStream && (onDownloadProgress || isStreamResponse && unsubscribe)) {
      const options = {};
      ['status', 'statusText', 'headers'].forEach(prop => {
        options[prop] = response[prop];
      });
      const responseContentLength = _utils.default.toFiniteNumber(response.headers.get('content-length'));
      const [onProgress, flush] = onDownloadProgress && (0, _progressEventReducer.progressEventDecorator)(responseContentLength, (0, _progressEventReducer.progressEventReducer)((0, _progressEventReducer.asyncDecorator)(onDownloadProgress), true)) || [];
      response = new Response((0, _trackStream.trackStream)(response.body, DEFAULT_CHUNK_SIZE, onProgress, () => {
        flush && flush();
        unsubscribe && unsubscribe();
      }), options);
    }
    responseType = responseType || 'text';
    let responseData = await resolvers[_utils.default.findKey(resolvers, responseType) || 'text'](response, config);
    !isStreamResponse && unsubscribe && unsubscribe();
    return await new Promise((resolve, reject) => {
      (0, _settle.default)(resolve, reject, {
        data: responseData,
        headers: _AxiosHeaders.default.from(response.headers),
        status: response.status,
        statusText: response.statusText,
        config,
        request
      });
    });
  } catch (err) {
    unsubscribe && unsubscribe();
    if (err && err.name === 'TypeError' && /fetch/i.test(err.message)) {
      throw Object.assign(new _AxiosError.default('Network Error', _AxiosError.default.ERR_NETWORK, config, request), {
        cause: err.cause || err
      });
    }
    throw _AxiosError.default.from(err, err && err.code, config, request);
  }
});
},{"../platform/index.js":"../../node_modules/axios/lib/platform/index.js","../utils.js":"../../node_modules/axios/lib/utils.js","../core/AxiosError.js":"../../node_modules/axios/lib/core/AxiosError.js","../helpers/composeSignals.js":"../../node_modules/axios/lib/helpers/composeSignals.js","../helpers/trackStream.js":"../../node_modules/axios/lib/helpers/trackStream.js","../core/AxiosHeaders.js":"../../node_modules/axios/lib/core/AxiosHeaders.js","../helpers/progressEventReducer.js":"../../node_modules/axios/lib/helpers/progressEventReducer.js","../helpers/resolveConfig.js":"../../node_modules/axios/lib/helpers/resolveConfig.js","../core/settle.js":"../../node_modules/axios/lib/core/settle.js"}],"../../node_modules/axios/lib/adapters/adapters.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _utils = _interopRequireDefault(require("../utils.js"));
var _http = _interopRequireDefault(require("./http.js"));
var _xhr = _interopRequireDefault(require("./xhr.js"));
var _fetch = _interopRequireDefault(require("./fetch.js"));
var _AxiosError = _interopRequireDefault(require("../core/AxiosError.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const knownAdapters = {
  http: _http.default,
  xhr: _xhr.default,
  fetch: _fetch.default
};
_utils.default.forEach(knownAdapters, (fn, value) => {
  if (fn) {
    try {
      Object.defineProperty(fn, 'name', {
        value
      });
    } catch (e) {
      // eslint-disable-next-line no-empty
    }
    Object.defineProperty(fn, 'adapterName', {
      value
    });
  }
});
const renderReason = reason => `- ${reason}`;
const isResolvedHandle = adapter => _utils.default.isFunction(adapter) || adapter === null || adapter === false;
var _default = exports.default = {
  getAdapter: adapters => {
    adapters = _utils.default.isArray(adapters) ? adapters : [adapters];
    const {
      length
    } = adapters;
    let nameOrAdapter;
    let adapter;
    const rejectedReasons = {};
    for (let i = 0; i < length; i++) {
      nameOrAdapter = adapters[i];
      let id;
      adapter = nameOrAdapter;
      if (!isResolvedHandle(nameOrAdapter)) {
        adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
        if (adapter === undefined) {
          throw new _AxiosError.default(`Unknown adapter '${id}'`);
        }
      }
      if (adapter) {
        break;
      }
      rejectedReasons[id || '#' + i] = adapter;
    }
    if (!adapter) {
      const reasons = Object.entries(rejectedReasons).map(([id, state]) => `adapter ${id} ` + (state === false ? 'is not supported by the environment' : 'is not available in the build'));
      let s = length ? reasons.length > 1 ? 'since :\n' + reasons.map(renderReason).join('\n') : ' ' + renderReason(reasons[0]) : 'as no adapter specified';
      throw new _AxiosError.default(`There is no suitable adapter to dispatch the request ` + s, 'ERR_NOT_SUPPORT');
    }
    return adapter;
  },
  adapters: knownAdapters
};
},{"../utils.js":"../../node_modules/axios/lib/utils.js","./http.js":"../../node_modules/axios/lib/helpers/null.js","./xhr.js":"../../node_modules/axios/lib/adapters/xhr.js","./fetch.js":"../../node_modules/axios/lib/adapters/fetch.js","../core/AxiosError.js":"../../node_modules/axios/lib/core/AxiosError.js"}],"../../node_modules/axios/lib/core/dispatchRequest.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = dispatchRequest;
var _transformData = _interopRequireDefault(require("./transformData.js"));
var _isCancel = _interopRequireDefault(require("../cancel/isCancel.js"));
var _index = _interopRequireDefault(require("../defaults/index.js"));
var _CanceledError = _interopRequireDefault(require("../cancel/CanceledError.js"));
var _AxiosHeaders = _interopRequireDefault(require("../core/AxiosHeaders.js"));
var _adapters = _interopRequireDefault(require("../adapters/adapters.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
  if (config.signal && config.signal.aborted) {
    throw new _CanceledError.default(null, config);
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 *
 * @returns {Promise} The Promise to be fulfilled
 */
function dispatchRequest(config) {
  throwIfCancellationRequested(config);
  config.headers = _AxiosHeaders.default.from(config.headers);

  // Transform request data
  config.data = _transformData.default.call(config, config.transformRequest);
  if (['post', 'put', 'patch'].indexOf(config.method) !== -1) {
    config.headers.setContentType('application/x-www-form-urlencoded', false);
  }
  const adapter = _adapters.default.getAdapter(config.adapter || _index.default.adapter);
  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = _transformData.default.call(config, config.transformResponse, response);
    response.headers = _AxiosHeaders.default.from(response.headers);
    return response;
  }, function onAdapterRejection(reason) {
    if (!(0, _isCancel.default)(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = _transformData.default.call(config, config.transformResponse, reason.response);
        reason.response.headers = _AxiosHeaders.default.from(reason.response.headers);
      }
    }
    return Promise.reject(reason);
  });
}
},{"./transformData.js":"../../node_modules/axios/lib/core/transformData.js","../cancel/isCancel.js":"../../node_modules/axios/lib/cancel/isCancel.js","../defaults/index.js":"../../node_modules/axios/lib/defaults/index.js","../cancel/CanceledError.js":"../../node_modules/axios/lib/cancel/CanceledError.js","../core/AxiosHeaders.js":"../../node_modules/axios/lib/core/AxiosHeaders.js","../adapters/adapters.js":"../../node_modules/axios/lib/adapters/adapters.js"}],"../../node_modules/axios/lib/env/data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VERSION = void 0;
const VERSION = exports.VERSION = "1.7.8";
},{}],"../../node_modules/axios/lib/helpers/validator.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _data = require("../env/data.js");
var _AxiosError = _interopRequireDefault(require("../core/AxiosError.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const validators = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((type, i) => {
  validators[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});
const deprecatedWarnings = {};

/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */
validators.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + _data.VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return (value, opt, opts) => {
    if (validator === false) {
      throw new _AxiosError.default(formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')), _AxiosError.default.ERR_DEPRECATED);
    }
    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(formatMessage(opt, ' has been deprecated since v' + version + ' and will be removed in the near future'));
    }
    return validator ? validator(value, opt, opts) : true;
  };
};
validators.spelling = function spelling(correctSpelling) {
  return (value, opt) => {
    // eslint-disable-next-line no-console
    console.warn(`${opt} is likely a misspelling of ${correctSpelling}`);
    return true;
  };
};

/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new _AxiosError.default('options must be an object', _AxiosError.default.ERR_BAD_OPTION_VALUE);
  }
  const keys = Object.keys(options);
  let i = keys.length;
  while (i-- > 0) {
    const opt = keys[i];
    const validator = schema[opt];
    if (validator) {
      const value = options[opt];
      const result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new _AxiosError.default('option ' + opt + ' must be ' + result, _AxiosError.default.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new _AxiosError.default('Unknown option ' + opt, _AxiosError.default.ERR_BAD_OPTION);
    }
  }
}
var _default = exports.default = {
  assertOptions,
  validators
};
},{"../env/data.js":"../../node_modules/axios/lib/env/data.js","../core/AxiosError.js":"../../node_modules/axios/lib/core/AxiosError.js"}],"../../node_modules/axios/lib/core/Axios.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _utils = _interopRequireDefault(require("./../utils.js"));
var _buildURL = _interopRequireDefault(require("../helpers/buildURL.js"));
var _InterceptorManager = _interopRequireDefault(require("./InterceptorManager.js"));
var _dispatchRequest = _interopRequireDefault(require("./dispatchRequest.js"));
var _mergeConfig = _interopRequireDefault(require("./mergeConfig.js"));
var _buildFullPath = _interopRequireDefault(require("./buildFullPath.js"));
var _validator = _interopRequireDefault(require("../helpers/validator.js"));
var _AxiosHeaders = _interopRequireDefault(require("./AxiosHeaders.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const validators = _validator.default.validators;

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */
class Axios {
  constructor(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new _InterceptorManager.default(),
      response: new _InterceptorManager.default()
    };
  }

  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(configOrUrl, config) {
    try {
      return await this._request(configOrUrl, config);
    } catch (err) {
      if (err instanceof Error) {
        let dummy = {};
        Error.captureStackTrace ? Error.captureStackTrace(dummy) : dummy = new Error();

        // slice off the Error: ... line
        const stack = dummy.stack ? dummy.stack.replace(/^.+\n/, '') : '';
        try {
          if (!err.stack) {
            err.stack = stack;
            // match without the 2 top stack lines
          } else if (stack && !String(err.stack).endsWith(stack.replace(/^.+\n.+\n/, ''))) {
            err.stack += '\n' + stack;
          }
        } catch (e) {
          // ignore the case where "stack" is an un-writable property
        }
      }
      throw err;
    }
  }
  _request(configOrUrl, config) {
    /*eslint no-param-reassign:0*/
    // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof configOrUrl === 'string') {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }
    config = (0, _mergeConfig.default)(this.defaults, config);
    const {
      transitional,
      paramsSerializer,
      headers
    } = config;
    if (transitional !== undefined) {
      _validator.default.assertOptions(transitional, {
        silentJSONParsing: validators.transitional(validators.boolean),
        forcedJSONParsing: validators.transitional(validators.boolean),
        clarifyTimeoutError: validators.transitional(validators.boolean)
      }, false);
    }
    if (paramsSerializer != null) {
      if (_utils.default.isFunction(paramsSerializer)) {
        config.paramsSerializer = {
          serialize: paramsSerializer
        };
      } else {
        _validator.default.assertOptions(paramsSerializer, {
          encode: validators.function,
          serialize: validators.function
        }, true);
      }
    }
    _validator.default.assertOptions(config, {
      baseUrl: validators.spelling('baseURL'),
      withXsrfToken: validators.spelling('withXSRFToken')
    }, true);

    // Set config.method
    config.method = (config.method || this.defaults.method || 'get').toLowerCase();

    // Flatten headers
    let contextHeaders = headers && _utils.default.merge(headers.common, headers[config.method]);
    headers && _utils.default.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], method => {
      delete headers[method];
    });
    config.headers = _AxiosHeaders.default.concat(contextHeaders, headers);

    // filter out skipped interceptors
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
        return;
      }
      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });
    let promise;
    let i = 0;
    let len;
    if (!synchronousRequestInterceptors) {
      const chain = [_dispatchRequest.default.bind(this), undefined];
      chain.unshift.apply(chain, requestInterceptorChain);
      chain.push.apply(chain, responseInterceptorChain);
      len = chain.length;
      promise = Promise.resolve(config);
      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }
      return promise;
    }
    len = requestInterceptorChain.length;
    let newConfig = config;
    i = 0;
    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }
    try {
      promise = _dispatchRequest.default.call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }
    i = 0;
    len = responseInterceptorChain.length;
    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    }
    return promise;
  }
  getUri(config) {
    config = (0, _mergeConfig.default)(this.defaults, config);
    const fullPath = (0, _buildFullPath.default)(config.baseURL, config.url);
    return (0, _buildURL.default)(fullPath, config.params, config.paramsSerializer);
  }
}

// Provide aliases for supported request methods
_utils.default.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, config) {
    return this.request((0, _mergeConfig.default)(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});
_utils.default.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/

  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request((0, _mergeConfig.default)(config || {}, {
        method,
        headers: isForm ? {
          'Content-Type': 'multipart/form-data'
        } : {},
        url,
        data
      }));
    };
  }
  Axios.prototype[method] = generateHTTPMethod();
  Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
});
var _default = exports.default = Axios;
},{"./../utils.js":"../../node_modules/axios/lib/utils.js","../helpers/buildURL.js":"../../node_modules/axios/lib/helpers/buildURL.js","./InterceptorManager.js":"../../node_modules/axios/lib/core/InterceptorManager.js","./dispatchRequest.js":"../../node_modules/axios/lib/core/dispatchRequest.js","./mergeConfig.js":"../../node_modules/axios/lib/core/mergeConfig.js","./buildFullPath.js":"../../node_modules/axios/lib/core/buildFullPath.js","../helpers/validator.js":"../../node_modules/axios/lib/helpers/validator.js","./AxiosHeaders.js":"../../node_modules/axios/lib/core/AxiosHeaders.js"}],"../../node_modules/axios/lib/cancel/CancelToken.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _CanceledError = _interopRequireDefault(require("./CanceledError.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */
class CancelToken {
  constructor(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }
    let resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });
    const token = this;

    // eslint-disable-next-line func-names
    this.promise.then(cancel => {
      if (!token._listeners) return;
      let i = token._listeners.length;
      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });

    // eslint-disable-next-line func-names
    this.promise.then = onfulfilled => {
      let _resolve;
      // eslint-disable-next-line func-names
      const promise = new Promise(resolve => {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);
      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };
      return promise;
    };
    executor(function cancel(message, config, request) {
      if (token.reason) {
        // Cancellation has already been requested
        return;
      }
      token.reason = new _CanceledError.default(message, config, request);
      resolvePromise(token.reason);
    });
  }

  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }

  /**
   * Subscribe to the cancel signal
   */

  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }
    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }

  /**
   * Unsubscribe from the cancel signal
   */

  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }
  toAbortSignal() {
    const controller = new AbortController();
    const abort = err => {
      controller.abort(err);
    };
    this.subscribe(abort);
    controller.signal.unsubscribe = () => this.unsubscribe(abort);
    return controller.signal;
  }

  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    const token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel
    };
  }
}
var _default = exports.default = CancelToken;
},{"./CanceledError.js":"../../node_modules/axios/lib/cancel/CanceledError.js"}],"../../node_modules/axios/lib/helpers/spread.js":[function(require,module,exports) {
'use strict';

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 *
 * @returns {Function}
 */
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = spread;
function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}
},{}],"../../node_modules/axios/lib/helpers/isAxiosError.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAxiosError;
var _utils = _interopRequireDefault(require("./../utils.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 *
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
function isAxiosError(payload) {
  return _utils.default.isObject(payload) && payload.isAxiosError === true;
}
},{"./../utils.js":"../../node_modules/axios/lib/utils.js"}],"../../node_modules/axios/lib/helpers/HttpStatusCode.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(HttpStatusCode).forEach(([key, value]) => {
  HttpStatusCode[value] = key;
});
var _default = exports.default = HttpStatusCode;
},{}],"../../node_modules/axios/lib/axios.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _utils = _interopRequireDefault(require("./utils.js"));
var _bind = _interopRequireDefault(require("./helpers/bind.js"));
var _Axios = _interopRequireDefault(require("./core/Axios.js"));
var _mergeConfig = _interopRequireDefault(require("./core/mergeConfig.js"));
var _index = _interopRequireDefault(require("./defaults/index.js"));
var _formDataToJSON = _interopRequireDefault(require("./helpers/formDataToJSON.js"));
var _CanceledError = _interopRequireDefault(require("./cancel/CanceledError.js"));
var _CancelToken = _interopRequireDefault(require("./cancel/CancelToken.js"));
var _isCancel = _interopRequireDefault(require("./cancel/isCancel.js"));
var _data = require("./env/data.js");
var _toFormData = _interopRequireDefault(require("./helpers/toFormData.js"));
var _AxiosError = _interopRequireDefault(require("./core/AxiosError.js"));
var _spread = _interopRequireDefault(require("./helpers/spread.js"));
var _isAxiosError = _interopRequireDefault(require("./helpers/isAxiosError.js"));
var _AxiosHeaders = _interopRequireDefault(require("./core/AxiosHeaders.js"));
var _adapters = _interopRequireDefault(require("./adapters/adapters.js"));
var _HttpStatusCode = _interopRequireDefault(require("./helpers/HttpStatusCode.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  const context = new _Axios.default(defaultConfig);
  const instance = (0, _bind.default)(_Axios.default.prototype.request, context);

  // Copy axios.prototype to instance
  _utils.default.extend(instance, _Axios.default.prototype, context, {
    allOwnKeys: true
  });

  // Copy context to instance
  _utils.default.extend(instance, context, null, {
    allOwnKeys: true
  });

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance((0, _mergeConfig.default)(defaultConfig, instanceConfig));
  };
  return instance;
}

// Create the default instance to be exported
const axios = createInstance(_index.default);

// Expose Axios class to allow class inheritance
axios.Axios = _Axios.default;

// Expose Cancel & CancelToken
axios.CanceledError = _CanceledError.default;
axios.CancelToken = _CancelToken.default;
axios.isCancel = _isCancel.default;
axios.VERSION = _data.VERSION;
axios.toFormData = _toFormData.default;

// Expose AxiosError class
axios.AxiosError = _AxiosError.default;

// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = _spread.default;

// Expose isAxiosError
axios.isAxiosError = _isAxiosError.default;

// Expose mergeConfig
axios.mergeConfig = _mergeConfig.default;
axios.AxiosHeaders = _AxiosHeaders.default;
axios.formToJSON = thing => (0, _formDataToJSON.default)(_utils.default.isHTMLForm(thing) ? new FormData(thing) : thing);
axios.getAdapter = _adapters.default.getAdapter;
axios.HttpStatusCode = _HttpStatusCode.default;
axios.default = axios;

// this module should only have a default export
var _default = exports.default = axios;
},{"./utils.js":"../../node_modules/axios/lib/utils.js","./helpers/bind.js":"../../node_modules/axios/lib/helpers/bind.js","./core/Axios.js":"../../node_modules/axios/lib/core/Axios.js","./core/mergeConfig.js":"../../node_modules/axios/lib/core/mergeConfig.js","./defaults/index.js":"../../node_modules/axios/lib/defaults/index.js","./helpers/formDataToJSON.js":"../../node_modules/axios/lib/helpers/formDataToJSON.js","./cancel/CanceledError.js":"../../node_modules/axios/lib/cancel/CanceledError.js","./cancel/CancelToken.js":"../../node_modules/axios/lib/cancel/CancelToken.js","./cancel/isCancel.js":"../../node_modules/axios/lib/cancel/isCancel.js","./env/data.js":"../../node_modules/axios/lib/env/data.js","./helpers/toFormData.js":"../../node_modules/axios/lib/helpers/toFormData.js","./core/AxiosError.js":"../../node_modules/axios/lib/core/AxiosError.js","./helpers/spread.js":"../../node_modules/axios/lib/helpers/spread.js","./helpers/isAxiosError.js":"../../node_modules/axios/lib/helpers/isAxiosError.js","./core/AxiosHeaders.js":"../../node_modules/axios/lib/core/AxiosHeaders.js","./adapters/adapters.js":"../../node_modules/axios/lib/adapters/adapters.js","./helpers/HttpStatusCode.js":"../../node_modules/axios/lib/helpers/HttpStatusCode.js"}],"../../node_modules/axios/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.all = exports.VERSION = exports.HttpStatusCode = exports.CanceledError = exports.CancelToken = exports.Cancel = exports.AxiosHeaders = exports.AxiosError = exports.Axios = void 0;
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _axios.default;
  }
});
exports.toFormData = exports.spread = exports.mergeConfig = exports.isCancel = exports.isAxiosError = exports.getAdapter = exports.formToJSON = void 0;
var _axios = _interopRequireDefault(require("./lib/axios.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// This module is intended to unwrap Axios default export as named.
// Keep top-level export same with static properties
// so that it can keep same with es module or cjs
const {
  Axios,
  AxiosError,
  CanceledError,
  isCancel,
  CancelToken,
  VERSION,
  all,
  Cancel,
  isAxiosError,
  spread,
  toFormData,
  AxiosHeaders,
  HttpStatusCode,
  formToJSON,
  getAdapter,
  mergeConfig
} = _axios.default;
exports.mergeConfig = mergeConfig;
exports.getAdapter = getAdapter;
exports.formToJSON = formToJSON;
exports.HttpStatusCode = HttpStatusCode;
exports.AxiosHeaders = AxiosHeaders;
exports.toFormData = toFormData;
exports.spread = spread;
exports.isAxiosError = isAxiosError;
exports.Cancel = Cancel;
exports.all = all;
exports.VERSION = VERSION;
exports.CancelToken = CancelToken;
exports.isCancel = isCancel;
exports.CanceledError = CanceledError;
exports.AxiosError = AxiosError;
exports.Axios = Axios;
},{"./lib/axios.js":"../../node_modules/axios/lib/axios.js"}],"user-auth/login.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initLoginOut = void 0;
var _axios = _interopRequireDefault(require("axios"));
var _alerts = require("../utils/alerts");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// ES6 modules export
var login = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(email, password) {
    var res;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _axios.default)({
            method: "POST",
            url: "/api/v1/users/login",
            data: {
              // form req.body
              email: email,
              password: password
            }
          });
        case 3:
          res = _context.sent;
          if (res.data.status === "success") {
            (0, _alerts.showAlert)("success", "Logged in successfully!");
            // Redirect to homepage in 1.5s
            window.setTimeout(function () {
              location.assign("/");
            }, 1500);
          }
          _context.next = 10;
          break;
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          (0, _alerts.showAlert)("error", "".concat("".concat(_context.t0.response.data.message)));
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function login(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var logout = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var res;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return (0, _axios.default)({
            method: "GET",
            url: "/api/v1/users/logout"
          });
        case 3:
          res = _context2.sent;
          if (res.data.status = "success") {
            location.assign("/");
          }
          _context2.next = 11;
          break;
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0.response);
          (0, _alerts.showAlert)("error", "Error logging out! Try again.");
        case 11:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return function logout() {
    return _ref2.apply(this, arguments);
  };
}();
var initLoginOut = exports.initLoginOut = function initLoginOut() {
  var loginForm = document.querySelector(".login-form");
  var logOutBtn = document.querySelector(".nav-logout-btn");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;
      login(email, password);
    });
  }
  if (logOutBtn) {
    logOutBtn.addEventListener("click", function (e) {
      console.log("1");
      logout();
    });
  }
};
},{"axios":"../../node_modules/axios/index.js","../utils/alerts":"utils/alerts.js"}],"user-auth/signup.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initSignup = void 0;
var _axios = _interopRequireDefault(require("axios"));
var _alerts = require("../utils/alerts");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// type is either 'password' or 'data'
var signup = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(data) {
    var res;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _axios.default)({
            method: "POST",
            url: "/api/v1/users/signUp",
            data: data
          });
        case 3:
          res = _context.sent;
          if (res.data.status === "success") {
            (0, _alerts.showAlert)("success", "You've successfully signed up!");
            window.setTimeout(function () {
              location.assign("/");
            }, 1500);
          }
          _context.next = 10;
          break;
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          (0, _alerts.showAlert)("error", "".concat(_context.t0.response.data.message));
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function signup(_x) {
    return _ref.apply(this, arguments);
  };
}();
var initSignup = exports.initSignup = function initSignup() {
  var userSignupForm = document.querySelector(".user-signup-form");
  if (userSignupForm) {
    userSignupForm.addEventListener("submit", function (e) {
      console.log("Signing up...");
      e.preventDefault();
      var selectedGender = document.querySelector('input[name="gender"]:checked');
      var gender;
      if (selectedGender) {
        gender = selectedGender.value;
      }
      var form = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone_number: document.getElementById("phone_number").value,
        address: document.getElementById("address").value,
        password: document.getElementById("password").value,
        passwordConfirm: document.getElementById("password-confirm").value,
        gender: gender
      };
      signup(form);
    });
  }
};
},{"axios":"../../node_modules/axios/index.js","../utils/alerts":"utils/alerts.js"}],"user-auth/twoFactorVerify.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initForgetPassword = void 0;
var _axios = _interopRequireDefault(require("axios"));
var _alerts = require("../utils/alerts");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var send2FACode = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(email) {
    var res;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _axios.default)({
            method: "POST",
            url: "/api/v1/users/twoFactor",
            data: {
              email: email
            }
          });
        case 3:
          res = _context.sent;
          if (res.data.status === "success") {
            (0, _alerts.showAlert)("success", res.data.message, 3);
          }
          return _context.abrupt("return", res.data.status);
        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          (0, _alerts.showAlert)("error", "".concat(_context.t0.response.data.message));
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 8]]);
  }));
  return function send2FACode(_x) {
    return _ref.apply(this, arguments);
  };
}();
var check2FACode = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(email, verifyCode) {
    var res;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return (0, _axios.default)({
            method: "POST",
            url: "/api/v1/users/verify2FACode",
            data: {
              email: email,
              verifyCode: verifyCode
            }
          });
        case 3:
          res = _context2.sent;
          return _context2.abrupt("return", res.data.status);
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          (0, _alerts.showAlert)("error", "".concat(_context2.t0.response.data.message));
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return function check2FACode(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();
var resetPassword = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(email, newPassword, passwordConfirm) {
    var res;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return (0, _axios.default)({
            method: "PATCH",
            url: "/api/v1/users/resetPassword",
            data: {
              email: email,
              newPassword: newPassword,
              passwordConfirm: passwordConfirm
            }
          });
        case 3:
          res = _context3.sent;
          if (res.data.status === "success") {
            (0, _alerts.showAlert)("success", "Password reset successful! Redirecting...");
            window.setTimeout(function () {
              location.assign("/");
            }, 1500);
          }
          return _context3.abrupt("return", res.data.status);
        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          (0, _alerts.showAlert)("error", "".concat(_context3.t0.response.data.message));
        case 11:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 8]]);
  }));
  return function resetPassword(_x4, _x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var initForgetPassword = exports.initForgetPassword = function initForgetPassword() {
  var sendEmailForm = document.querySelector(".send-email-form");
  var sendVerifyForm = document.querySelector(".send-verify-form");
  var resetPasswordForm = document.querySelector(".reset-password-form");

  // Send verification code to email
  if (sendEmailForm) {
    sendEmailForm.addEventListener("submit", /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(e) {
        var email;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              e.preventDefault();
              document.querySelector(".send-verification").textContent = "Sending...";
              email = document.getElementById("email").value.toLowerCase();
              _context4.next = 5;
              return send2FACode(email);
            case 5:
              _context4.t0 = _context4.sent;
              if (!(_context4.t0 === "success")) {
                _context4.next = 9;
                break;
              }
              document.getElementById("send-verify").style.display = "none";
              document.getElementById("verify-email").style.display = "";
            case 9:
              document.querySelector(".send-verification").textContent = "Send verification code";
            case 10:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      return function (_x7) {
        return _ref4.apply(this, arguments);
      };
    }());
  }

  // Confirm code form email
  if (sendVerifyForm) {
    sendVerifyForm.addEventListener("submit", /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(e) {
        var email, verifyCode, result;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              e.preventDefault();
              document.querySelector(".code-verifying").textContent = "Verifying...";
              email = document.getElementById("email").value.toLowerCase();
              verifyCode = document.getElementById("verify-code").value;
              _context5.next = 6;
              return check2FACode(email, verifyCode);
            case 6:
              result = _context5.sent;
              // If verification successful
              if (result === "success") {
                document.getElementById("verify-email").style.display = "none";
                document.getElementById("reset-password").style.display = "";
              }
              document.querySelector(".code-verifying").textContent = "Verify";
            case 9:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      return function (_x8) {
        return _ref5.apply(this, arguments);
      };
    }());
  }

  // Reset password
  if (resetPasswordForm) {
    resetPasswordForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var email = document.getElementById("email").value;
      var newPassword = document.getElementById("new-password").value;
      var passwordConfirm = document.getElementById("password-confirm").value;
      resetPassword(email, newPassword, passwordConfirm);
    });
  }
};
},{"axios":"../../node_modules/axios/index.js","../utils/alerts":"utils/alerts.js"}],"search-item/search.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initSearch = void 0;
var _axios = _interopRequireDefault(require("axios"));
var _alerts = require("../utils/alerts");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var searchItem = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(query) {
    var url;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          url = "/search?keyword=".concat(query);
          window.location.href = url;
        case 2:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function searchItem(_x) {
    return _ref.apply(this, arguments);
  };
}();
var initSearch = exports.initSearch = function initSearch() {
  var searchBarForm = document.querySelector(".search-bar-form");
  var searchInput = document.querySelector(".form-input");
  if (searchBarForm) {
    searchBarForm.addEventListener("submit", /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              e.preventDefault();
              searchItem(searchInput.value);
            case 2:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());
  }
};
},{"axios":"../../node_modules/axios/index.js","../utils/alerts":"utils/alerts.js"}],"user-account/updateSettings.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initUpdateSetting = void 0;
var _axios = _interopRequireDefault(require("axios"));
var _alerts = require("../utils/alerts");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// type is either 'password' or 'data'
var updateSettings = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(data, type) {
    var url, res;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          url = type === "password" ? "/api/v1/users/updatePassword" : "/api/v1/users/updateMe";
          _context.next = 4;
          return (0, _axios.default)({
            method: "PATCH",
            url: url,
            data: data
          });
        case 4:
          res = _context.sent;
          if (res.data.status === "success") {
            (0, _alerts.showAlert)("success", "".concat(type.toUpperCase(), " updated successfully!"));
            window.setTimeout(function () {
              window.location.reload();
            }, 1500);
          }
          _context.next = 11;
          break;
        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          (0, _alerts.showAlert)("error", "".concat(_context.t0.response.data.message));
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 8]]);
  }));
  return function updateSettings(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var initUpdateSetting = exports.initUpdateSetting = function initUpdateSetting() {
  var userDataForm = document.querySelector(".user-info-form");
  var userPasswordForm = document.querySelector(".user-password-form");
  if (userDataForm) {
    userDataForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var form = new FormData();
      form.append("name", document.getElementById("name").value);
      form.append("email", document.getElementById("email").value);
      form.append("phone_number", document.getElementById("phone_number").value);
      form.append("address", document.getElementById("address").value);
      var selectedGender = document.querySelector('input[name="gender"]:checked');
      if (selectedGender) {
        form.append("gender", selectedGender.value);
      }
      var selectedImage = document.getElementById("image").files[0];
      if (selectedImage) {
        form.append("image", document.getElementById("image").files[0]);
      }
      updateSettings(form, "data");
    });
  }
  if (userPasswordForm) {
    userPasswordForm.addEventListener("submit", /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e) {
        var passwordCurrent, password, passwordConfirm;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              e.preventDefault();
              document.querySelector(".save-password").textContent = "Updating...";
              passwordCurrent = document.getElementById("password-current").value;
              password = document.getElementById("password").value;
              passwordConfirm = document.getElementById("password-confirm").value;
              _context2.next = 7;
              return updateSettings({
                passwordCurrent: passwordCurrent,
                password: password,
                passwordConfirm: passwordConfirm
              }, "password");
            case 7:
              document.querySelector(".save-password").textContent = "Save password";
              document.getElementById("password-current").value = "";
              document.getElementById("password").value = "";
              document.getElementById("password-confirm").value = "";
            case 11:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      return function (_x3) {
        return _ref2.apply(this, arguments);
      };
    }());
  }
};
},{"axios":"../../node_modules/axios/index.js","../utils/alerts":"utils/alerts.js"}],"user-cart/cartFunction.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateAllCheckbox = exports.setQuantity = exports.getCheckedItem = exports.deleteItem = exports.calCheckout = exports.addToCartRequest = void 0;
var _axios = _interopRequireDefault(require("axios"));
var _alerts = require("../utils/alerts");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var addToCartRequest = exports.addToCartRequest = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(productId) {
    var res;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _axios.default)({
            method: "POST",
            url: "/api/v1/carts/".concat(productId)
          });
        case 3:
          res = _context.sent;
          if (res.data.status === "success") {
            (0, _alerts.showAlert)("success", res.data.message);
          }
          _context.next = 10;
          break;
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          (0, _alerts.showAlert)("error", "".concat(_context.t0.response.data.message));
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function addToCartRequest(_x) {
    return _ref.apply(this, arguments);
  };
}();
var deleteItem = exports.deleteItem = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(productId) {
    var res;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return (0, _axios.default)({
            method: "DELETE",
            url: "/api/v1/carts",
            data: {
              productId: productId
            }
          });
        case 3:
          res = _context2.sent;
          if (res.data.status === "success") {
            (0, _alerts.showAlert)("success", response.data.message);
          }
          _context2.next = 10;
          break;
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          (0, _alerts.showAlert)("error", "".concat(_context2.t0.response.data.message));
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return function deleteItem(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

// SET ITEM QUANTITY AND UPDATE TOTAL PRICE
var setQuantity = exports.setQuantity = function setQuantity(buttonElement, increment) {
  // closest input
  var input = buttonElement.closest(".item-quantity").querySelector(".qt-input");
  var currentValue = parseInt(input.value) || 1;
  var quantity = Math.max(1, currentValue + increment);
  input.value = quantity;
  var event = new Event("input", {
    bubbles: true
  }); // 加上 bubbles 使事件能冒泡
  input.dispatchEvent(event); // 手動觸發 input 事件

  console.log(input.value);
  updateTotal(input);
  if (buttonElement.closest(".item").querySelector(".item-checkbox").checked) {
    calCheckout();
  }
};

// UPDATE SINGLE ITEM PRICE TOTAL
var updateTotal = function updateTotal(inputElement) {
  var quantity = parseInt(inputElement.value) || 0;
  // closest price element
  var price = parseFloat(inputElement.closest(".item-group-2").querySelector(".item-price").textContent);
  var total = price * quantity;
  var itemTotalElement = inputElement.closest(".item-group-2").querySelector(".item-total");
  itemTotalElement.textContent = total.toFixed(2);
};

// UPDATE CHECKOUT TOTAL
var calCheckout = exports.calCheckout = function calCheckout() {
  var itemCheckbox = document.querySelectorAll(".item-checkbox");
  var selectedItems = document.querySelector(".selected-item");
  var priceTotal = document.querySelector(".price-total");
  var selected = 0; // Qty of selected item
  var total = 0; // total price of all selected item

  itemCheckbox.forEach(function (item) {
    // closest item-total element
    var itemTotal = parseFloat(item.closest(".item").querySelector(".item-total").textContent.trim());
    if (item.checked) {
      selected += 1;
      total += itemTotal;
    }
  });
  // update checkout area
  selectedItems.innerText = "Total price (".concat(selected, " item) :");
  priceTotal.innerText = "$".concat(total.toFixed(2));
};

// UPDATE ALL CHECKBOX
var updateAllCheckbox = exports.updateAllCheckbox = function updateAllCheckbox() {
  var itemCheckbox = document.querySelectorAll(".item-checkbox");
  var allCheckbox = document.querySelector(".all-checkbox");

  //- .every(fn) return true or false
  //- if all item-checkbox checked, set all-checkbox to checked
  var allChecked = Array.from(itemCheckbox).every(function (checkbox) {
    return checkbox.checked;
  });
  allCheckbox.checked = allChecked;
  allCheckbox.classList.toggle("checked", allChecked);
};

// 將 .checked 的 item 加入 checkedItemArray，取消 .checked 則移除
var getCheckedItem = exports.getCheckedItem = function getCheckedItem(checkedItems, checkedItem) {
  var productId = checkedItem.closest(".item").dataset.productId;
  if (checkedItem.classList.contains("checked")) {
    checkedItems.push(productId);
  } else {
    var productIndex = checkedItems.indexOf(productId);
    checkedItems.splice(productIndex, 1);
  }
};
},{"axios":"../../node_modules/axios/index.js","../utils/alerts":"utils/alerts.js"}],"stripe.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.orderProducts = void 0;
var _alerts = require("./utils/alerts");
var _axios = _interopRequireDefault(require("axios"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var stripe = Stripe("pk_test_51QLQ4AI3a5BAumhdTw8QzW29h7wbMei3VthvME7cNwYM5FmPB5brLtQRuPP1G836Pqj7M0ryKIc265qIN7vHmWSc00tf1qzk09");
var orderProducts = exports.orderProducts = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(productsId, productsQty) {
    var session;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _axios.default)({
            method: "POST",
            url: "/api/v1/orders/checkout-session",
            data: {
              productsId: productsId,
              productsQty: productsQty
            }
          });
        case 3:
          session = _context.sent;
          (0, _alerts.showAlert)("success", "Directing to payment...");
          // 導向 Stripe checkout
          _context.next = 7;
          return stripe.redirectToCheckout({
            sessionId: session.data.session.id
          });
        case 7:
          _context.next = 12;
          break;
        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          (0, _alerts.showAlert)("error", "".concat(_context.t0.response.data.message));
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 9]]);
  }));
  return function orderProducts(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
},{"./utils/alerts":"utils/alerts.js","axios":"../../node_modules/axios/index.js"}],"user-cart/cart.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initCart = void 0;
var _alerts = require("../utils/alerts");
var _cartFunction = require("../user-cart/cartFunction");
var _stripe = require("../stripe");
var initCart = exports.initCart = function initCart() {
  var addToCart = document.querySelector(".add-to-cart-btn");
  var itemCheckbox = document.querySelectorAll(".item-checkbox");
  var allCheckbox = document.querySelector(".all-checkbox");
  var decreaseBtns = document.querySelectorAll(".decrease-btn");
  var increaseBtns = document.querySelectorAll(".increase-btn");
  var deleteItemBtn = document.querySelectorAll(".item-delete");
  var checkoutBtn = document.querySelector(".checkout-btn");
  var checkedItems = [];
  var checkedQty = [];
  if (addToCart) {
    addToCart.addEventListener("click", function (e) {
      e.preventDefault();
      var path = window.location.pathname;
      var productId = path.split("/").pop();
      (0, _cartFunction.addToCartRequest)(productId);
    });
  }

  // TOGGLE .checked WHILE CHECKBOX BEEN CLICKED
  if (itemCheckbox) {
    itemCheckbox.forEach(function (item) {
      item.addEventListener("change", function () {
        item.classList.toggle("checked", item.checked);

        //- update checkout area and all-checkbox statement
        (0, _cartFunction.calCheckout)();
        (0, _cartFunction.updateAllCheckbox)();
        (0, _cartFunction.getCheckedItem)(checkedItems, item);
      });
    });
  }

  // TOGGLE .checked WHILE ALL-CHECKBOX BEEN CLICKED
  if (allCheckbox) {
    allCheckbox.addEventListener("change", function () {
      //- classList.toggle("addedClass", Boolean)
      var isChecked = allCheckbox.checked;
      allCheckbox.classList.toggle("checked", isChecked);

      // 清空，改以 allCheckbox .checked 為準
      checkedItems = [];
      checkedQty = [];
      itemCheckbox.forEach(function (item) {
        item.checked = isChecked;
        item.classList.toggle("checked", isChecked);
        (0, _cartFunction.getCheckedItem)(checkedItems, item);
      });
      (0, _cartFunction.calCheckout)();
    });
  }
  if (decreaseBtns && increaseBtns) {
    document.querySelectorAll(".decrease-btn, .increase-btn").forEach(function (button) {
      var increment = button.classList.contains("decrease-btn") ? -1 : 1;
      button.addEventListener("click", function (e) {
        (0, _cartFunction.setQuantity)(button, increment);
      });
    });
  }
  if (deleteItemBtn) {
    deleteItemBtn.forEach(function (deleteButton) {
      deleteButton.addEventListener("click", function (e) {
        if (e.target.matches(".item-delete")) {
          var itemElement = e.target.closest(".item");
          itemElement.remove(); // remove item
          var productId = itemElement.dataset.productId;
          (0, _cartFunction.deleteItem)(productId);
          (0, _cartFunction.calCheckout)();
          (0, _cartFunction.updateAllCheckbox)();
        }
      });
    });
  }
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", function (e) {
      e.preventDefault();
      checkedQty = [];
      var productQty = document.querySelectorAll(".qt-input");
      productQty.forEach(function (quantity) {
        var checkboxNearest = quantity.closest(".item").querySelector(".item-checkbox");
        if (checkboxNearest.classList.contains("checked")) {
          checkedQty.push(parseInt(quantity.value));
        }
      });
      if (checkedItems.length !== 0 && checkedQty.length !== 0) {
        (0, _stripe.orderProducts)(checkedItems, checkedQty);
      } else {
        (0, _alerts.showAlert)("error", "Please select an item to checkout!");
      }
    });
  }
};
},{"../utils/alerts":"utils/alerts.js","../user-cart/cartFunction":"user-cart/cartFunction.js","../stripe":"stripe.js"}],"product-review/review-render.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reviewToggleAndRatingStars = void 0;
var reviewToggleAndRatingStars = exports.reviewToggleAndRatingStars = function reviewToggleAndRatingStars() {
  // Expand/Fold review text
  // 1) Show expand button when review is overflowed

  // select all "review"
  var reviews = document.querySelectorAll(".review");
  reviews.forEach(function (review) {
    // select "user-review" and "toggle-button" in each review
    var userReview = review.querySelector(".user-review");
    var button = review.querySelector(".toggle-button");
    // check if review is overflowed
    if (userReview.scrollHeight > userReview.clientHeight) {
      // if overflowed, show expand button
      button.style.display = "block";
    } else {
      // if not overflowed, hide expand button
      button.style.display = "none";
    }
  });

  // 2)Toggle review text (expand/fold)
  function toggleText(button) {
    // select button's previous sibling (review)
    var foldedView = button.parentElement.previousElementSibling;
    // check if foldedView is expanded
    if (foldedView.classList.contains("expanded")) {
      // if expanded, fold foldedView and change button text
      foldedView.classList.remove("expanded");
      button.textContent = "Expand foldedView";
    } else {
      // if not expanded, expand foldedView and change button text
      foldedView.classList.add("expanded");
      button.textContent = "(Fold)";
    }
  }
  var toggleReviewButtons = document.querySelectorAll(".toggle-button");
  toggleReviewButtons.forEach(function (toggleButton) {
    toggleButton.addEventListener("click", function () {
      toggleText(toggleButton);
    });
  });

  //Leave rating stars
  // update leaveStarRating display
  function updateRatingStars(elements, typeOfStar, selectedValue) {
    // turn elements into array if it's not
    var stars = Array.isArray(elements) ? elements : [elements];
    stars.forEach(function (star) {
      var value = parseFloat(star.getAttribute("data-value"));
      // if star value <= selected rating value, display as solid
      if (value <= selectedValue) {
        star.classList.add("fa-solid");
        star.classList.remove("fa-regular", typeOfStar);
      }
      // if star value - 0.5 = selected rating value, display as half star
      else if (value - 0.5 === selectedValue) {
        star.classList.add("fa-solid", typeOfStar);
        star.classList.remove("fa-regular");
      }
      // display as empty
      else {
        star.classList.remove("fa-solid", typeOfStar);
        star.classList.add("fa-regular");
      }
    });
  }
  function renderLeaveReviewStars(container, maxStars) {
    for (var i = 1; i <= maxStars; i++) {
      var star = document.createElement("div");
      star.classList.add("leave-star-rating", "star", "fa-regular", "fa-star", "fa-2xl", "m-2");
      star.setAttribute("style", "color: #FFD43B;");
      star.setAttribute("data-value", i);
      var spanBox = document.createElement("span");
      spanBox.classList.add("span-box");
      var spanLeft = document.createElement("span");
      spanLeft.classList.add("span-left");
      var spanRight = document.createElement("span");
      spanRight.classList.add("span-right");

      // 將 span 內元素加到 spanBox 中
      spanBox.appendChild(spanLeft);
      spanBox.appendChild(spanRight);

      // 將 spanBox 加到 star 中
      star.appendChild(spanBox);

      // 最後將 star 加到 .star-rating 中
      container.appendChild(star);
    }
  }
  function renderStars(container, maxStars) {
    var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "regular";
    for (var i = 1; i <= maxStars; i++) {
      var star = document.createElement("div");
      star.className = "star-in-rating star fa-".concat(type, " fa-star fa-sm m-2");
      star.setAttribute("data-value", i);
      container.appendChild(star);
    }
  }
  var starRatingContainer = document.querySelector(".star-rating");
  renderLeaveReviewStars(starRatingContainer, 5);

  // 1) select all stars, rating input, rating value
  var leaveStarRating = Array.from(document.querySelectorAll(".leave-star-rating"));
  var ratingInput = document.getElementById("rating");
  var ratingValue = document.querySelector(".rating-value");
  // 2) add listener to each star
  leaveStarRating.forEach(function (star) {
    // select star left and right half
    var spanLeft = star.querySelector(".span-left");
    var spanRight = star.querySelector(".span-right");
    // 3) set value when left and  half mouseover
    // a) when left half mouseover
    spanLeft.addEventListener("mouseover", function () {
      // rating value = data-value - 0.5 (ex: 4.5 - 0.5 = 4)
      var value = parseFloat(star.getAttribute("data-value")) - 0.5;
      // update rating input value
      ratingInput.value = value;
      ratingValue.textContent = "(".concat(value, " / 5)");
      // update leaveStarRating display
      updateRatingStars(leaveStarRating, "fa-star-half-stroke", value);
    });
    // b) when right half mouseover
    spanRight.addEventListener("mouseover", function () {
      // rating value = data-value
      var value = parseFloat(star.getAttribute("data-value"));
      // update rating input
      ratingInput.value = value;
      ratingValue.textContent = "(".concat(value, " / 5)");
      // update leaveStarRating display
      updateRatingStars(leaveStarRating, "fa-star-half-stroke", value);
    });
  });

  // Star rating in review
  // 1) select all reviewRatingStars
  var reviewRatingStars = document.querySelectorAll(".review-rating-star");
  reviewRatingStars.forEach(function (el) {
    renderStars(el, 5, "regular");
    //
  });
  var starInRating = document.querySelectorAll(".star-in-rating");
  starInRating.forEach(function (star) {
    var ratingValue = star.closest(".rating").querySelector(".rating-in-review");
    var ratingInReview = parseFloat(ratingValue.textContent.replace(/[()]/g, "").split("/")[0]);
    updateRatingStars(star, "fa-star-half-stroke", ratingInReview);
  });
};
},{}],"product-review/review.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initReview = void 0;
var _axios = _interopRequireDefault(require("axios"));
var _alerts = require("../utils/alerts");
var _reviewRender = require("./review-render");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var leaveReview = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(productId, review, rating) {
    var res;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _axios.default)({
            method: "POST",
            url: "/api/v1/reviews/".concat(productId),
            data: {
              review: review,
              rating: rating
            }
          });
        case 3:
          res = _context.sent;
          if (res.data.status === "success") {
            (0, _alerts.showAlert)("success", res.data.message);
            window.setTimeout(function () {
              window.location.reload();
            }, 1500);
          }
          _context.next = 10;
          break;
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          (0, _alerts.showAlert)("error", "".concat("".concat(_context.t0.response.data.message)), 4);
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function leaveReview(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
var initReview = exports.initReview = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var productReview, reviewBtn;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          productReview = document.querySelector(".reviews");
          if (productReview) {
            (0, _reviewRender.reviewToggleAndRatingStars)();
          }
          reviewBtn = document.getElementById("review-submit");
          if (reviewBtn) {
            reviewBtn.addEventListener("click", function (e) {
              e.preventDefault();
              var newReview = document.getElementById("review-textarea").value;
              var ratingValue = document.querySelector(".rating-value").textContent;
              if (!newReview) return (0, _alerts.showAlert)("error", "Please leave your review!", 4);
              var path = window.location.pathname;
              var productId = path.split("/").pop();
              var rating = ratingValue.replace(/[()]/g, "").split(" / ")[0];
              console.log(rating);
              leaveReview(productId, newReview, rating);
            });
          }
        case 4:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function initReview() {
    return _ref2.apply(this, arguments);
  };
}();
},{"axios":"../../node_modules/axios/index.js","../utils/alerts":"utils/alerts.js","./review-render":"product-review/review-render.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _alerts = require("./utils/alerts");
var _login = require("./user-auth/login");
var _signup = require("./user-auth/signup");
var _twoFactorVerify = require("./user-auth/twoFactorVerify");
var _search = require("./search-item/search");
var _updateSettings = require("./user-account/updateSettings");
var _cart = require("./user-cart/cart");
var _review = require("./product-review/review");
// IMPORT FUNCTIONS

document.addEventListener("DOMContentLoaded", function () {
  (0, _login.initLoginOut)();
  (0, _signup.initSignup)();
  (0, _twoFactorVerify.initForgetPassword)();
  (0, _search.initSearch)();
  (0, _updateSettings.initUpdateSetting)();
  (0, _cart.initCart)();
  (0, _review.initReview)();
});

// IF dateset-alert = alert, showAlert
var alertMsg = document.querySelector("body").dataset.alert;
if (alertMsg) (0, _alerts.showAlert)("success", alertMsg, 20);
},{"./utils/alerts":"utils/alerts.js","./user-auth/login":"user-auth/login.js","./user-auth/signup":"user-auth/signup.js","./user-auth/twoFactorVerify":"user-auth/twoFactorVerify.js","./search-item/search":"search-item/search.js","./user-account/updateSettings":"user-account/updateSettings.js","./user-cart/cart":"user-cart/cart.js","./product-review/review":"product-review/review.js"}],"../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62621" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
>>>>>>> main
//# sourceMappingURL=bundle.js.map