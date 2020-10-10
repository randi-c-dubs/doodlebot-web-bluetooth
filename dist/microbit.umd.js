!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).microbit={})}(this,(function(e){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,n)};function n(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}function r(e,t,n,r){return new(n||(n=Promise))((function(i,a){function o(e){try{s(r.next(e))}catch(e){a(e)}}function u(e){try{s(r.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,u)}s((r=r.apply(e,t||[])).next())}))}function i(e,t){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}}var a,o=function(){function e(e){void 0===e&&(e=1),this.concurrent=e,this.queue=[],this.running=0}return e.prototype.pump=function(){return r(this,void 0,void 0,(function(){var e,t,n;return i(this,(function(r){switch(r.label){case 0:if(this.running>=this.concurrent)return[2];if(!(e=this.queue.shift()))return[2];this.running++,r.label=1;case 1:return r.trys.push([1,3,,4]),[4,e.fn()];case 2:return t=r.sent(),e.resolve(t),[3,4];case 3:return n=r.sent(),e.reject(n),[3,4];case 4:return this.running--,[2,this.pump()]}}))}))},e.prototype.add=function(e){var t=this;return new Promise((function(n,r){return t.queue.push({fn:e,resolve:n,reject:r}),t.pump()}))},e}(),u=function(){function e(e,t){this.service=e,this.emitter=t}return e.prototype.getCharacteristic=function(e){return r(this,void 0,void 0,(function(){var t;return i(this,(function(n){switch(n.label){case 0:return this.characteristics?[3,2]:(t=this,[4,this.service.getCharacteristics()]);case 1:t.characteristics=n.sent(),n.label=2;case 2:return[2,this.characteristics.find((function(t){return t.uuid===e}))]}}))}))},e.prototype.getCharacteristicValue=function(t){return r(this,void 0,void 0,(function(){var n,a=this;return i(this,(function(o){switch(o.label){case 0:return[4,this.getCharacteristic(t)];case 1:if(!(n=o.sent()))throw new Error("Unable to locate characteristic");return[4,e.queue.add((function(){return r(a,void 0,void 0,(function(){return i(this,(function(e){return[2,n.readValue()]}))}))}))];case 2:return[2,o.sent()]}}))}))},e.prototype.setCharacteristicValue=function(t,n){return r(this,void 0,void 0,(function(){var a,o=this;return i(this,(function(u){switch(u.label){case 0:return[4,this.getCharacteristic(t)];case 1:if(!(a=u.sent()))throw new Error("Unable to locate characteristic");return[4,e.queue.add((function(){return r(o,void 0,void 0,(function(){return i(this,(function(e){return[2,a.writeValue(n)]}))}))}))];case 2:return u.sent(),[2]}}))}))},e.prototype.handleListener=function(t,n,a){return r(this,void 0,void 0,(function(){var o,u=this;return i(this,(function(s){switch(s.label){case 0:return[4,this.getCharacteristic(n)];case 1:return(o=s.sent())?[4,e.queue.add((function(){return r(u,void 0,void 0,(function(){return i(this,(function(e){return[2,o.startNotifications()]}))}))}))]:[2];case 2:return s.sent(),this.emitter.on("newListener",(function(n){if(!(n!==t||u.emitter.listenerCount(t)>0))return e.queue.add((function(){return r(u,void 0,void 0,(function(){return i(this,(function(e){return[2,o.addEventListener("characteristicvaluechanged",a)]}))}))}))})),this.emitter.on("removeListener",(function(n){if(!(n!==t||u.emitter.listenerCount(t)>0))return e.queue.add((function(){return r(u,void 0,void 0,(function(){return i(this,(function(e){return[2,o.removeEventListener("characteristicvaluechanged",a)]}))}))}))})),[2]}}))}))},e.queue=new o,e}();!function(e){e.modelNumber="00002a24-0000-1000-8000-00805f9b34fb",e.serialNumber="00002a25-0000-1000-8000-00805f9b34fb",e.firmwareRevision="00002a26-0000-1000-8000-00805f9b34fb",e.hardwareRevision="00002a27-0000-1000-8000-00805f9b34fb",e.manufacturer="00002a29-0000-1000-8000-00805f9b34fb"}(a||(a={}));var s=function(){function e(e){this.helper=new u(e)}return e.create=function(t){return r(this,void 0,void 0,(function(){return i(this,(function(n){return[2,new e(t)]}))}))},e.prototype.readDeviceInformation=function(){return r(this,void 0,void 0,(function(){var e,t,n,r,o,u;return i(this,(function(i){switch(i.label){case 0:return e={},[4,this.readStringCharacteristic(a.modelNumber)];case 1:return(t=i.sent())&&(e.modelNumber=t),[4,this.readStringCharacteristic(a.serialNumber)];case 2:return(n=i.sent())&&(e.serialNumber=n),[4,this.readStringCharacteristic(a.firmwareRevision)];case 3:return(r=i.sent())&&(e.firmwareRevision=r),[4,this.readStringCharacteristic(a.hardwareRevision)];case 4:return(o=i.sent())&&(e.hardwareRevision=o),[4,this.readStringCharacteristic(a.manufacturer)];case 5:return(u=i.sent())&&(e.manufacturer=u),[2,e]}}))}))},e.prototype.readStringCharacteristic=function(e){return r(this,void 0,void 0,(function(){var t,n;return i(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,this.helper.getCharacteristicValue(e)];case 1:return t=r.sent(),n=t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength),[2,String.fromCharCode.apply(null,Array.from(new Uint8Array(n)))];case 2:return r.sent(),[2,void 0];case 3:return[2]}}))}))},e.uuid="0000180a-0000-1000-8000-00805f9b34fb",e}();function c(){}function h(){h.init.call(this)}function f(e){return void 0===e._maxListeners?h.defaultMaxListeners:e._maxListeners}function d(e,t,n){if(t)e.call(n);else for(var r=e.length,i=b(e,r),a=0;a<r;++a)i[a].call(n)}function l(e,t,n,r){if(t)e.call(n,r);else for(var i=e.length,a=b(e,i),o=0;o<i;++o)a[o].call(n,r)}function v(e,t,n,r,i){if(t)e.call(n,r,i);else for(var a=e.length,o=b(e,a),u=0;u<a;++u)o[u].call(n,r,i)}function p(e,t,n,r,i,a){if(t)e.call(n,r,i,a);else for(var o=e.length,u=b(e,o),s=0;s<o;++s)u[s].call(n,r,i,a)}function g(e,t,n,r){if(t)e.apply(n,r);else for(var i=e.length,a=b(e,i),o=0;o<i;++o)a[o].apply(n,r)}function m(e,t,n,r){var i,a,o,u;if("function"!=typeof n)throw new TypeError('"listener" argument must be a function');if((a=e._events)?(a.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),a=e._events),o=a[t]):(a=e._events=new c,e._eventsCount=0),o){if("function"==typeof o?o=a[t]=r?[n,o]:[o,n]:r?o.unshift(n):o.push(n),!o.warned&&(i=f(e))&&i>0&&o.length>i){o.warned=!0;var s=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+t+" listeners added. Use emitter.setMaxListeners() to increase limit");s.name="MaxListenersExceededWarning",s.emitter=e,s.type=t,s.count=o.length,u=s,"function"==typeof console.warn?console.warn(u):console.log(u)}}else o=a[t]=n,++e._eventsCount;return e}function y(e,t,n){var r=!1;function i(){e.removeListener(t,i),r||(r=!0,n.apply(e,arguments))}return i.listener=n,i}function w(e){var t=this._events;if(t){var n=t[e];if("function"==typeof n)return 1;if(n)return n.length}return 0}function b(e,t){for(var n=new Array(t);t--;)n[t]=e[t];return n}c.prototype=Object.create(null),h.EventEmitter=h,h.usingDomains=!1,h.prototype.domain=void 0,h.prototype._events=void 0,h.prototype._maxListeners=void 0,h.defaultMaxListeners=10,h.init=function(){this.domain=null,h.usingDomains&&undefined.active,this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=new c,this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},h.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||isNaN(e))throw new TypeError('"n" argument must be a positive number');return this._maxListeners=e,this},h.prototype.getMaxListeners=function(){return f(this)},h.prototype.emit=function(e){var t,n,r,i,a,o,u,s="error"===e;if(o=this._events)s=s&&null==o.error;else if(!s)return!1;if(u=this.domain,s){if(t=arguments[1],!u){if(t instanceof Error)throw t;var c=new Error('Uncaught, unspecified "error" event. ('+t+")");throw c.context=t,c}return t||(t=new Error('Uncaught, unspecified "error" event')),t.domainEmitter=this,t.domain=u,t.domainThrown=!1,u.emit("error",t),!1}if(!(n=o[e]))return!1;var h="function"==typeof n;switch(r=arguments.length){case 1:d(n,h,this);break;case 2:l(n,h,this,arguments[1]);break;case 3:v(n,h,this,arguments[1],arguments[2]);break;case 4:p(n,h,this,arguments[1],arguments[2],arguments[3]);break;default:for(i=new Array(r-1),a=1;a<r;a++)i[a-1]=arguments[a];g(n,h,this,i)}return!0},h.prototype.addListener=function(e,t){return m(this,e,t,!1)},h.prototype.on=h.prototype.addListener,h.prototype.prependListener=function(e,t){return m(this,e,t,!0)},h.prototype.once=function(e,t){if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');return this.on(e,y(this,e,t)),this},h.prototype.prependOnceListener=function(e,t){if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');return this.prependListener(e,y(this,e,t)),this},h.prototype.removeListener=function(e,t){var n,r,i,a,o;if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');if(!(r=this._events))return this;if(!(n=r[e]))return this;if(n===t||n.listener&&n.listener===t)0==--this._eventsCount?this._events=new c:(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(i=-1,a=n.length;a-- >0;)if(n[a]===t||n[a].listener&&n[a].listener===t){o=n[a].listener,i=a;break}if(i<0)return this;if(1===n.length){if(n[0]=void 0,0==--this._eventsCount)return this._events=new c,this;delete r[e]}else!function(e,t){for(var n=t,r=n+1,i=e.length;r<i;n+=1,r+=1)e[n]=e[r];e.pop()}(n,i);r.removeListener&&this.emit("removeListener",e,o||t)}return this},h.prototype.removeAllListeners=function(e){var t,n;if(!(n=this._events))return this;if(!n.removeListener)return 0===arguments.length?(this._events=new c,this._eventsCount=0):n[e]&&(0==--this._eventsCount?this._events=new c:delete n[e]),this;if(0===arguments.length){for(var r,i=Object.keys(n),a=0;a<i.length;++a)"removeListener"!==(r=i[a])&&this.removeAllListeners(r);return this.removeAllListeners("removeListener"),this._events=new c,this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(t)do{this.removeListener(e,t[t.length-1])}while(t[0]);return this},h.prototype.listeners=function(e){var t,n=this._events;return n&&(t=n[e])?"function"==typeof t?[t.listener||t]:function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(t):[]},h.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):w.call(e,t)},h.prototype.listenerCount=w,h.prototype.eventNames=function(){return this._eventsCount>0?Reflect.ownKeys(this._events):[]};var C,V,L=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.isEventListenerObject=function(e){return void 0!==e.handleEvent},t}return n(t,e),t.prototype.addEventListener=function(t,n){if(n){var r=this.isEventListenerObject(n)?n.handleEvent:n;e.prototype.addListener.call(this,t,r)}},t.prototype.removeEventListener=function(t,n){if(n){var r=this.isEventListenerObject(n)?n.handleEvent:n;e.prototype.removeListener.call(this,t,r)}},t.prototype.dispatchEvent=function(t,n){var r;return r="string"==typeof t?new CustomEvent(t,{detail:n}):t,e.prototype.emit.call(this,r.type,r)},t}(h);!function(e){e.buttonAState="e95dda90-251d-470a-a062-fa1922dfa9a8",e.buttonBState="e95dda91-251d-470a-a062-fa1922dfa9a8"}(C||(C={})),function(e){e[e.Release=0]="Release",e[e.ShortPress=1]="ShortPress",e[e.LongPress=2]="LongPress"}(V||(V={}));var D,S=function(e){function t(t){var n=e.call(this)||this;return n.helper=new u(t,n),n}return n(t,e),t.create=function(e){return r(this,void 0,void 0,(function(){var n;return i(this,(function(r){switch(r.label){case 0:return[4,(n=new t(e)).init()];case 1:return r.sent(),[2,n]}}))}))},t.prototype.init=function(){return r(this,void 0,void 0,(function(){return i(this,(function(e){switch(e.label){case 0:return[4,this.helper.handleListener("buttonastatechanged",C.buttonAState,this.buttonAStateChangedHandler.bind(this))];case 1:return e.sent(),[4,this.helper.handleListener("buttonbstatechanged",C.buttonBState,this.buttonBStateChangedHandler.bind(this))];case 2:return e.sent(),[2]}}))}))},t.prototype.readButtonAState=function(){return r(this,void 0,void 0,(function(){return i(this,(function(e){switch(e.label){case 0:return[4,this.helper.getCharacteristicValue(C.buttonAState)];case 1:return[2,e.sent().getUint8(0)]}}))}))},t.prototype.readButtonBState=function(){return r(this,void 0,void 0,(function(){return i(this,(function(e){switch(e.label){case 0:return[4,this.helper.getCharacteristicValue(C.buttonBState)];case 1:return[2,e.sent().getUint8(0)]}}))}))},t.prototype.buttonAStateChangedHandler=function(e){var t=e.target.value;this.dispatchEvent("buttonastatechanged",t.getUint8(0))},t.prototype.buttonBStateChangedHandler=function(e){var t=e.target.value;this.dispatchEvent("buttonbstatechanged",t.getUint8(0))},t.uuid="e95d9882-251d-470a-a062-fa1922dfa9a8",t}(L);!function(e){e.ledMatrixState="e95d7b77-251d-470a-a062-fa1922dfa9a8",e.ledText="e95d93ee-251d-470a-a062-fa1922dfa9a8",e.scrollingDelay="e95d0d2d-251d-470a-a062-fa1922dfa9a8"}(D||(D={}));var E,A=function(){function e(e){this.helper=new u(e)}return e.create=function(t){return r(this,void 0,void 0,(function(){return i(this,(function(n){return[2,new e(t)]}))}))},e.prototype.writeText=function(e){return r(this,void 0,void 0,(function(){var t;return i(this,(function(n){return t=this.encodeString(e),[2,this.helper.setCharacteristicValue(D.ledText,t)]}))}))},e.prototype.readMatrixState=function(){return r(this,void 0,void 0,(function(){var e;return i(this,(function(t){switch(t.label){case 0:return[4,this.helper.getCharacteristicValue(D.ledMatrixState)];case 1:return e=t.sent(),[2,this.viewToLedMatrix(e)]}}))}))},e.prototype.writeMatrixState=function(e){return r(this,void 0,void 0,(function(){var t;return i(this,(function(n){return t=this.ledMatrixToView(e),[2,this.helper.setCharacteristicValue(D.ledMatrixState,t)]}))}))},e.prototype.getScrollingDelay=function(){return r(this,void 0,void 0,(function(){return i(this,(function(e){switch(e.label){case 0:return[4,this.helper.getCharacteristicValue(D.scrollingDelay)];case 1:return[2,e.sent().getUint16(0,!0)]}}))}))},e.prototype.setScrollingDelay=function(e){return r(this,void 0,void 0,(function(){var t;return i(this,(function(n){return(t=new DataView(new ArrayBuffer(2))).setUint16(0,e,!0),[2,this.helper.setCharacteristicValue(D.scrollingDelay,t)]}))}))},e.prototype.encodeString=function(e){for(var t=new ArrayBuffer(e.length),n=new Uint8Array(t),r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return t},e.prototype.viewToLedMatrix=function(e){for(var t=[],n=0;n<5;n++)t[n]=this.byteToBoolArray(e.getUint8(n));return t},e.prototype.byteToBoolArray=function(e){for(var t=[!1,!1,!1,!1,!1],n=0;n<t.length;n++)t[n]=1==(1&e),e>>=1;return t.reverse()},e.prototype.ledMatrixToView=function(e){for(var t=new DataView(new ArrayBuffer(5)),n=0;n<5;n++)t.setUint8(n,this.boolArrayToByte(e[n]));return t},e.prototype.boolArrayToByte=function(e){return e.reduce((function(e,t){return e<<1|(t?1:0)}),0)},e.uuid="e95dd91d-251d-470a-a062-fa1922dfa9a8",e}();!function(e){e.temperature="e95d9250-251d-470a-a062-fa1922dfa9a8",e.temperaturePeriod="e95d1b25-251d-470a-a062-fa1922dfa9a8"}(E||(E={}));var T,x=function(e){function t(t){var n=e.call(this)||this;return n.helper=new u(t,n),n}return n(t,e),t.create=function(e){return r(this,void 0,void 0,(function(){var n;return i(this,(function(r){switch(r.label){case 0:return[4,(n=new t(e)).init()];case 1:return r.sent(),[2,n]}}))}))},t.prototype.init=function(){return r(this,void 0,void 0,(function(){return i(this,(function(e){switch(e.label){case 0:return[4,this.helper.handleListener("temperaturechanged",E.temperature,this.temperatureChangedHandler.bind(this))];case 1:return e.sent(),[2]}}))}))},t.prototype.readTemperature=function(){return r(this,void 0,void 0,(function(){return i(this,(function(e){switch(e.label){case 0:return[4,this.helper.getCharacteristicValue(E.temperature)];case 1:return[2,e.sent().getInt8(0)]}}))}))},t.prototype.getTemperaturePeriod=function(){return r(this,void 0,void 0,(function(){return i(this,(function(e){switch(e.label){case 0:return[4,this.helper.getCharacteristicValue(E.temperaturePeriod)];case 1:return[2,e.sent().getUint16(0,!0)]}}))}))},t.prototype.setTemperaturePeriod=function(e){return r(this,void 0,void 0,(function(){var t;return i(this,(function(n){switch(n.label){case 0:return(t=new DataView(new ArrayBuffer(2))).setUint16(0,e,!0),[4,this.helper.setCharacteristicValue(E.temperaturePeriod,t)];case 1:return[2,n.sent()]}}))}))},t.prototype.temperatureChangedHandler=function(e){var t=e.target.value;this.dispatchEvent("temperaturechanged",t.getInt8(0))},t.uuid="e95d6100-251d-470a-a062-fa1922dfa9a8",t}(L);!function(e){e.accelerometerData="e95dca4b-251d-470a-a062-fa1922dfa9a8",e.accelerometerPeriod="e95dfb24-251d-470a-a062-fa1922dfa9a8"}(T||(T={}));var U,_,B=function(e){function t(t){var n=e.call(this)||this;return n.helper=new u(t,n),n}return n(t,e),t.create=function(e){return r(this,void 0,void 0,(function(){var n;return i(this,(function(r){switch(r.label){case 0:return[4,(n=new t(e)).init()];case 1:return r.sent(),[2,n]}}))}))},t.prototype.init=function(){return r(this,void 0,void 0,(function(){return i(this,(function(e){switch(e.label){case 0:return[4,this.helper.handleListener("accelerometerdatachanged",T.accelerometerData,this.accelerometerDataChangedHandler.bind(this))];case 1:return e.sent(),[2]}}))}))},t.prototype.readAccelerometerData=function(){return r(this,void 0,void 0,(function(){var e;return i(this,(function(t){switch(t.label){case 0:return[4,this.helper.getCharacteristicValue(T.accelerometerData)];case 1:return e=t.sent(),[2,this.dataViewToAccelerometerData(e)]}}))}))},t.prototype.getAccelerometerPeriod=function(){return r(this,void 0,void 0,(function(){return i(this,(function(e){switch(e.label){case 0:return[4,this.helper.getCharacteristicValue(T.accelerometerPeriod)];case 1:return[2,e.sent().getUint16(0,!0)]}}))}))},t.prototype.setAccelerometerPeriod=function(e){return r(this,void 0,void 0,(function(){var t;return i(this,(function(n){return(t=new DataView(new ArrayBuffer(2))).setUint16(0,e,!0),[2,this.helper.setCharacteristicValue(T.accelerometerPeriod,t)]}))}))},t.prototype.accelerometerDataChangedHandler=function(e){var t=e.target.value,n=this.dataViewToAccelerometerData(t);this.dispatchEvent("accelerometerdatachanged",n)},t.prototype.dataViewToAccelerometerData=function(e){return{x:e.getInt16(0,!0)/1e3,y:e.getInt16(2,!0)/1e3,z:e.getInt16(4,!0)/1e3}},t.uuid="e95d0753-251d-470a-a062-fa1922dfa9a8",t}(L);!function(e){e.magnetometerData="e95dfb11-251d-470a-a062-fa1922dfa9a8",e.magnetometerPeriod="e95d386c-251d-470a-a062-fa1922dfa9a8",e.magnetometerBearing="e95d9715-251d-470a-a062-fa1922dfa9a8",e.magnetometerCalibration="e95db358-251d-470a-a062-fa1922dfa9a8"}(U||(U={})),function(e){e[e.unknown=0]="unknown",e[e.requested=1]="requested",e[e.completed=2]="completed",e[e.errored=3]="errored"}(_||(_={}));var P,M=function(e){function t(t){var n=e.call(this)||this;return n.helper=new u(t,n),n}return n(t,e),t.create=function(e){return r(this,void 0,void 0,(function(){var n;return i(this,(function(r){switch(r.label){case 0:return[4,(n=new t(e)).init()];case 1:return r.sent(),[2,n]}}))}))},t.prototype.init=function(){return r(this,void 0,void 0,(function(){return i(this,(function(e){switch(e.label){case 0:return[4,this.helper.handleListener("magnetometerdatachanged",U.magnetometerData,this.magnetometerDataChangedHandler.bind(this))];case 1:return e.sent(),[4,this.helper.handleListener("magnetometerbearingchanged",U.magnetometerBearing,this.magnetometerBearingChangedHandler.bind(this))];case 2:return e.sent(),[4,this.helper.handleListener("magnetometercalibrationchanged",U.magnetometerCalibration,this.magnetometerCalibrationChangedHandler.bind(this))];case 3:return e.sent(),[2]}}))}))},t.prototype.calibrate=function(){return r(this,void 0,void 0,(function(){return i(this,(function(e){return[2,this.helper.setCharacteristicValue(U.magnetometerCalibration,new Uint8Array([1]))]}))}))},t.prototype.readMagnetometerData=function(){return r(this,void 0,void 0,(function(){var e;return i(this,(function(t){switch(t.label){case 0:return[4,this.helper.getCharacteristicValue(U.magnetometerData)];case 1:return e=t.sent(),[2,this.dataViewToMagnetometerData(e)]}}))}))},t.prototype.readMagnetometerBearing=function(){return r(this,void 0,void 0,(function(){var e;return i(this,(function(t){switch(t.label){case 0:return[4,this.helper.getCharacteristicValue(U.magnetometerBearing)];case 1:return 2===(e=t.sent()).byteLength?[2,e.getUint16(0,!0)]:[2,void 0]}}))}))},t.prototype.getMagnetometerPeriod=function(){return r(this,void 0,void 0,(function(){return i(this,(function(e){switch(e.label){case 0:return[4,this.helper.getCharacteristicValue(U.magnetometerPeriod)];case 1:return[2,e.sent().getUint16(0,!0)]}}))}))},t.prototype.setMagnetometerPeriod=function(e){return r(this,void 0,void 0,(function(){var t;return i(this,(function(n){return(t=new DataView(new ArrayBuffer(2))).setUint16(0,e,!0),[2,this.helper.setCharacteristicValue(U.magnetometerPeriod,t)]}))}))},t.prototype.magnetometerDataChangedHandler=function(e){var t=e.target.value,n=this.dataViewToMagnetometerData(t);this.dispatchEvent("magnetometerdatachanged",n)},t.prototype.magnetometerBearingChangedHandler=function(e){var t=e.target.value;2===t.byteLength&&this.dispatchEvent("magnetometerbearingchanged",t.getUint16(0,!0))},t.prototype.magnetometerCalibrationChangedHandler=function(e){var t=e.target.value;1===t.byteLength&&this.dispatchEvent("magnetometercalibrationchanged",t.getUint8(0))},t.prototype.dataViewToMagnetometerData=function(e){return{x:e.getInt16(0,!0),y:e.getInt16(1,!0),z:e.getInt16(2,!0)}},t.uuid="e95df2d8-251d-470a-a062-fa1922dfa9a8",t}(L);!function(e){e.pinData="e95d8d00-251d-470a-a062-fa1922dfa9a8",e.pinAdConfiguration="e95d5899-251d-470a-a062-fa1922dfa9a8",e.pinIoConfiguration="e95db9fe-251d-470a-a062-fa1922dfa9a8",e.pwmControl="e95dd822-251d-470a-a062-fa1922dfa9a8"}(P||(P={}));var q,H,O=!0;!function(e){e[e.Digital=0]="Digital",e[e.Analogue=1]="Analogue"}(q||(q={})),function(e){e[e.Output=0]="Output",e[e.Input=1]="Input"}(H||(H={}));var R,I=function(e){function t(t){var n=e.call(this)||this;return n.helper=new u(t,n),n}return n(t,e),t.create=function(e){return r(this,void 0,void 0,(function(){var n;return i(this,(function(r){switch(r.label){case 0:return[4,(n=new t(e)).init()];case 1:return r.sent(),[2,n]}}))}))},t.prototype.init=function(){return r(this,void 0,void 0,(function(){return i(this,(function(e){switch(e.label){case 0:return[4,this.helper.handleListener("pindatachanged",P.pinData,this.pinDataChangedHandler.bind(this))];case 1:return e.sent(),[2]}}))}))},t.prototype.readPinData=function(){return r(this,void 0,void 0,(function(){var e;return i(this,(function(t){switch(t.label){case 0:return[4,this.helper.getCharacteristicValue(P.pinData)];case 1:return e=t.sent(),[2,this.dataViewToPinData(e)]}}))}))},t.prototype.writePinData=function(e){return r(this,void 0,void 0,(function(){var t;return i(this,(function(n){return t=this.pinDataToDataView(e),[2,this.helper.setCharacteristicValue(P.pinData,t)]}))}))},t.prototype.getAdConfiguration=function(){return r(this,void 0,void 0,(function(){var e;return i(this,(function(t){switch(t.label){case 0:return[4,this.helper.getCharacteristicValue(P.pinAdConfiguration)];case 1:return e=t.sent(),[2,this.dataViewToConfig(e)]}}))}))},t.prototype.setAdConfiguration=function(e){return r(this,void 0,void 0,(function(){var t;return i(this,(function(n){return t=this.configToDataView(e),[2,this.helper.setCharacteristicValue(P.pinAdConfiguration,t)]}))}))},t.prototype.getIoConfiguration=function(){return r(this,void 0,void 0,(function(){var e;return i(this,(function(t){switch(t.label){case 0:return[4,this.helper.getCharacteristicValue(P.pinIoConfiguration)];case 1:return e=t.sent(),[2,this.dataViewToConfig(e)]}}))}))},t.prototype.setIoConfiguration=function(e){return r(this,void 0,void 0,(function(){var t;return i(this,(function(n){return t=this.configToDataView(e),[2,this.helper.setCharacteristicValue(P.pinIoConfiguration,t)]}))}))},t.prototype.setPwmControl=function(e){return r(this,void 0,void 0,(function(){var t;return i(this,(function(n){return t=this.pwmControlDataToDataView(e),[2,this.helper.setCharacteristicValue(P.pwmControl,t)]}))}))},t.prototype.pinDataChangedHandler=function(e){var t=e.target.value,n=this.dataViewToPinData(t);this.dispatchEvent("pindatachanged",n)},t.prototype.dataViewToPinData=function(e){for(var t=[],n=0;n<e.byteLength;n+=2)t.push({pin:e.getUint8(n),value:e.getUint8(n+1)});return t},t.prototype.pinDataToDataView=function(e){var t=new DataView(new ArrayBuffer(2*e.length));return e.forEach((function(e,n){t.setUint8(2*n,e.pin),t.setUint8(2*n+1,e.value)})),t},t.prototype.dataViewToConfig=function(e){for(var t=[],n=(e.getUint16(0)<<8)+e.getUint8(2),r=0;r<24;r++)t.push(n>>r);return t},t.prototype.configToDataView=function(e){for(var t=new DataView(new ArrayBuffer(3)),n=0,r=0;r<e.length;r++)n&=1<<e[r];return t.setUint16(0,n>>8,O),t.setUint8(2,255&n),t},t.prototype.pwmControlDataToDataView=function(e){var t=new DataView(new ArrayBuffer(7));return t.setUint8(0,e.pin),t.setUint16(1,e.value,O),t.setUint32(3,e.period,O),t},t.uuid="e95d127b-251d-470a-a062-fa1922dfa9a8",t}(L);!function(e){e.tx="6e400002-b5a3-f393-e0a9-e50e24dcca9e",e.rx="6e400003-b5a3-f393-e0a9-e50e24dcca9e"}(R||(R={}));var j,k=function(e){function t(t){var n=e.call(this)||this;return n.helper=new u(t,n),n}return n(t,e),t.create=function(e){return r(this,void 0,void 0,(function(){var n;return i(this,(function(r){switch(r.label){case 0:return[4,(n=new t(e)).init()];case 1:return r.sent(),[2,n]}}))}))},t.prototype.init=function(){return r(this,void 0,void 0,(function(){return i(this,(function(e){switch(e.label){case 0:return[4,this.helper.handleListener("receive",R.tx,this.receiveHandler.bind(this))];case 1:return e.sent(),[4,this.helper.handleListener("receiveText",R.tx,this.receiveTextHandler.bind(this))];case 2:return e.sent(),[2]}}))}))},t.prototype.send=function(e){return r(this,void 0,void 0,(function(){return i(this,(function(t){return[2,this.helper.setCharacteristicValue(R.rx,e)]}))}))},t.prototype.sendText=function(e){return r(this,void 0,void 0,(function(){var t;return i(this,(function(n){return t=e.split("").map((function(e){return e.charCodeAt(0)})),[2,this.helper.setCharacteristicValue(R.rx,new Uint8Array(t).buffer)]}))}))},t.prototype.receiveHandler=function(e){var t=e.target.value,n=new Uint8Array(t.buffer);this.dispatchEvent("receive",n)},t.prototype.receiveTextHandler=function(e){var t=e.target.value,n=Array.prototype.slice.call(new Uint8Array(t.buffer)),r=String.fromCharCode.apply(null,n);this.dispatchEvent("receiveText",r)},t.uuid="6e400001-b5a3-f393-e0a9-e50e24dcca9e",t}(L);!function(e){e.microBitRequirements="e95db84c-251d-470a-a062-fa1922dfa9a8",e.microBitEvent="e95d9775-251d-470a-a062-fa1922dfa9a8",e.clientRequirements="e95d23c4-251d-470a-a062-fa1922dfa9a8",e.clientEvent="e95d5404-251d-470a-a062-fa1922dfa9a8"}(j||(j={}));var N,z=function(e){function t(t){var n=e.call(this)||this;return n.helper=new u(t,n),n}return n(t,e),t.create=function(e){return r(this,void 0,void 0,(function(){var n;return i(this,(function(r){switch(r.label){case 0:return[4,(n=new t(e)).init()];case 1:return r.sent(),[2,n]}}))}))},t.prototype.init=function(){return r(this,void 0,void 0,(function(){return i(this,(function(e){switch(e.label){case 0:return[4,this.helper.handleListener("microbitevent",j.microBitEvent,this.eventHandler.bind(this))];case 1:return e.sent(),[4,this.helper.handleListener("microbitrequirementschanged",j.microBitRequirements,this.microbitRequirementsChangedHandler.bind(this))];case 2:return e.sent(),[2]}}))}))},t.prototype.getMicrobitRequirements=function(){return r(this,void 0,void 0,(function(){var e;return i(this,(function(t){switch(t.label){case 0:return[4,this.helper.getCharacteristicValue(j.microBitRequirements)];case 1:return e=t.sent(),[2,this.viewToMicrobitEvent(e)]}}))}))},t.prototype.setClientRequirements=function(e,t){return r(this,void 0,void 0,(function(){var n;return i(this,(function(r){switch(r.label){case 0:return(n=new DataView(new ArrayBuffer(4))).setUint16(0,e,!0),n.setUint16(1,t,!0),[4,this.helper.setCharacteristicValue(j.clientRequirements,n)];case 1:return[2,r.sent()]}}))}))},t.prototype.readMicrobitEvent=function(){return r(this,void 0,void 0,(function(){var e;return i(this,(function(t){switch(t.label){case 0:return[4,this.helper.getCharacteristicValue(j.microBitEvent)];case 1:return e=t.sent(),[2,this.viewToMicrobitEvent(e)]}}))}))},t.prototype.writeClientEvent=function(e,t){return r(this,void 0,void 0,(function(){var n;return i(this,(function(r){switch(r.label){case 0:return(n=new DataView(new ArrayBuffer(4))).setUint16(0,e,!0),n.setUint16(1,t,!0),[4,this.helper.setCharacteristicValue(j.clientEvent,n)];case 1:return[2,r.sent()]}}))}))},t.prototype.microbitRequirementsChangedHandler=function(e){var t=e.target.value,n=this.viewToMicrobitEvent(t);this.dispatchEvent("microbitrequirementschanged",n)},t.prototype.eventHandler=function(e){var t=e.target.value,n=this.viewToMicrobitEvent(t);this.dispatchEvent("microbitevent",n)},t.prototype.viewToMicrobitEvent=function(e){return{type:e.getUint16(0,!0),value:e.getUint16(1,!0)}},t.uuid="e95d93af-251d-470a-a062-fa1922dfa9a8",t}(L);!function(e){e.dfuControl="e95d93b1-251d-470a-a062-fa1922dfa9a8"}(N||(N={}));var F=function(){function e(e){this.helper=new u(e)}return e.create=function(t){return r(this,void 0,void 0,(function(){return i(this,(function(n){return[2,new e(t)]}))}))},e.prototype.requestDfu=function(){return this.helper.setCharacteristicValue(N.dfuControl,new Uint8Array([1]))},e.prototype.requestFlashCode=function(){return this.helper.setCharacteristicValue(N.dfuControl,new Uint8Array([2]))},e.uuid="e95d93b0-251d-470a-a062-fa1922dfa9a8",e}(),G=function(){function e(e){this.services=e}return e.prototype.createService=function(e){return r(this,void 0,void 0,(function(){var t;return i(this,(function(n){switch(n.label){case 0:return(t=this.services.find((function(t){return t.uuid===e.uuid})))?[4,e.create(t)]:[2,void 0];case 1:return[2,n.sent()]}}))}))},e}();e.getServices=function(e){return r(void 0,void 0,void 0,(function(){var t,n,r,a,o,u,c,h,f,d,l,v;return i(this,(function(i){switch(i.label){case 0:return e&&e.gatt?e.gatt.connected?[3,2]:[4,e.gatt.connect()]:[2,{}];case 1:i.sent(),i.label=2;case 2:return[4,e.gatt.getPrimaryServices()];case 3:return t=i.sent(),[4,(n=new G(t)).createService(s)];case 4:return r=i.sent(),[4,n.createService(S)];case 5:return a=i.sent(),[4,n.createService(A)];case 6:return o=i.sent(),[4,n.createService(x)];case 7:return u=i.sent(),[4,n.createService(B)];case 8:return c=i.sent(),[4,n.createService(M)];case 9:return h=i.sent(),[4,n.createService(k)];case 10:return f=i.sent(),[4,n.createService(z)];case 11:return d=i.sent(),[4,n.createService(F)];case 12:return l=i.sent(),[4,n.createService(I)];case 13:return v=i.sent(),[2,{deviceInformationService:r,buttonService:a,ledService:o,temperatureService:u,accelerometerService:c,magnetometerService:h,uartService:f,eventService:d,dfuControlService:l,ioPinService:v}]}}))}))},e.requestMicrobit=function(e){return r(void 0,void 0,void 0,(function(){return i(this,(function(t){switch(t.label){case 0:return[4,e.requestDevice({filters:[{namePrefix:"BBC micro:bit"}],optionalServices:[s.uuid,S.uuid,A.uuid,x.uuid,B.uuid,M.uuid,I.uuid,k.uuid,z.uuid,F.uuid]})];case 1:return[2,t.sent()]}}))}))},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=microbit.umd.js.map
