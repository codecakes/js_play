!function n(r,t,e){function o(s,u){if(!t[s]){if(!r[s]){var f="function"==typeof require&&require;if(!u&&f)return f(s,!0);if(i)return i(s,!0);throw new Error("Cannot find module '"+s+"'")}var c=t[s]={exports:{}};r[s][0].call(c.exports,function(n){var t=r[s][1][n];return o(t||n)},c,c.exports,n,r,t,e)}return t[s].exports}for(var i="function"==typeof require&&require,s=0;s<e.length;s++)o(e[s]);return o}({1:[function(n,r,t){"use strict";let,fs=n("fs"),path=n("path"),fname=path.resolve("./config.json"),fJson=function(){return JSON.parse(fs.readFileSync(fname,{encoding:"utf-8"}))},t.fJson=fJson,console.log(fJson())},{fs:2,path:4}],2:[function(n,r,t){},{}],3:[function(n,r,t){function e(){}var o=r.exports={};o.nextTick=function(){var n="undefined"!=typeof window&&window.setImmediate,r="undefined"!=typeof window&&window.postMessage&&window.addEventListener;if(n)return function(n){return window.setImmediate(n)};if(r){var t=[];return window.addEventListener("message",function(n){var r=n.source;r!==window&&null!==r||"process-tick"!==n.data||(n.stopPropagation(),t.length>0&&t.shift()())},!0),function(n){t.push(n),window.postMessage("process-tick","*")}}return function(n){setTimeout(n,0)}}(),o.title="browser",o.browser=!0,o.env={},o.argv=[],o.on=e,o.addListener=e,o.once=e,o.off=e,o.removeListener=e,o.removeAllListeners=e,o.emit=e,o.binding=function(n){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(n){throw new Error("process.chdir is not supported")}},{}],4:[function(n,r,t){(function(n){function r(n,r){for(var t=0,e=n.length-1;e>=0;e--){var o=n[e];"."===o?n.splice(e,1):".."===o?(n.splice(e,1),t++):t&&(n.splice(e,1),t--)}if(r)for(;t--;t)n.unshift("..");return n}function e(n,r){if(n.filter)return n.filter(r);for(var t=[],e=0;e<n.length;e++)r(n[e],e,n)&&t.push(n[e]);return t}var o=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,i=function(n){return o.exec(n).slice(1)};t.resolve=function(){for(var t="",o=!1,i=arguments.length-1;i>=-1&&!o;i--){var s=i>=0?arguments[i]:n.cwd();if("string"!=typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(t=s+"/"+t,o="/"===s.charAt(0))}return t=r(e(t.split("/"),function(n){return!!n}),!o).join("/"),(o?"/":"")+t||"."},t.normalize=function(n){var o=t.isAbsolute(n),i="/"===s(n,-1);return(n=r(e(n.split("/"),function(n){return!!n}),!o).join("/"))||o||(n="."),n&&i&&(n+="/"),(o?"/":"")+n},t.isAbsolute=function(n){return"/"===n.charAt(0)},t.join=function(){var n=Array.prototype.slice.call(arguments,0);return t.normalize(e(n,function(n,r){if("string"!=typeof n)throw new TypeError("Arguments to path.join must be strings");return n}).join("/"))},t.relative=function(n,r){function e(n){for(var r=0;r<n.length&&""===n[r];r++);for(var t=n.length-1;t>=0&&""===n[t];t--);return r>t?[]:n.slice(r,t-r+1)}n=t.resolve(n).substr(1),r=t.resolve(r).substr(1);for(var o=e(n.split("/")),i=e(r.split("/")),s=Math.min(o.length,i.length),u=s,f=0;f<s;f++)if(o[f]!==i[f]){u=f;break}for(var c=[],f=u;f<o.length;f++)c.push("..");return(c=c.concat(i.slice(u))).join("/")},t.sep="/",t.delimiter=":",t.dirname=function(n){var r=i(n),t=r[0],e=r[1];return t||e?(e&&(e=e.substr(0,e.length-1)),t+e):"."},t.basename=function(n,r){var t=i(n)[2];return r&&t.substr(-1*r.length)===r&&(t=t.substr(0,t.length-r.length)),t},t.extname=function(n){return i(n)[3]};var s="b"==="ab".substr(-1)?function(n,r,t){return n.substr(r,t)}:function(n,r,t){return r<0&&(r=n.length+r),n.substr(r,t)}}).call(this,n("lYpoI2"))},{lYpoI2:3}]},{},[1]);