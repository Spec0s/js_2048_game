parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e,r=document.querySelector("tbody"),t=document.querySelector(".game-score"),n=document.querySelector(".button"),o=document.querySelector(".message-lose"),a=document.querySelector(".message-win"),c=document.querySelector(".message-start"),i=document.querySelector(".arrow-1"),s=document.querySelector(".arrow-2"),u=document.querySelector(".arrow-3"),d=document.querySelector(".arrow-4"),f=4,l=0,v=!1;function m(){v=!0,e=Array.from({length:f},function(){return Array(f).fill(0)}),l=0,t.innerText=l,h(),h()}function h(){if(L()){var r,t;do{r=Math.floor(Math.random()*f),t=Math.floor(Math.random()*f)}while(0!==e[r][t]);e[r][t]=Math.random()<.9?2:4,y()}}function L(){return e.some(function(e){return e.includes(0)})}function w(e){return e.filter(function(e){return 0!==e})}function y(){for(var t=0;t<f;t++)for(var c=0;c<f;c++){var i=r.rows[t].cells[c],s=e[t][c];i.innerText="",i.classList.value="",i.classList.add("field-cell"),s>0&&(i.innerText=s,i.classList.add("field-cell--".concat(s))),2048===s&&(a.classList.remove("hidden"),n.classList.replace("restart","start"))}k()&&o.classList.remove("hidden")}function k(){if(L())return!1;for(var r=0;r<f;r++)for(var t=0;t<f;t++)if(e[r][t]===e[r][t+1])return!1;for(var n=0;n<f-1;n++)for(var o=0;o<f;o++)if(e[n][o]===e[n+1][o])return!1;return v=!1,!0}function q(e){for(var r=L(),n=!1,o=0;o<e.length-1;o++)if(e[o]===e[o+1]){n=!0;break}if(!r&&!n)return e;for(var a=w(e),c=0;c<a.length-1;c++)a[c]===a[c+1]&&(a[c]*=2,a[c+1]=0,l+=a[c],t.innerText=l);for(a=w(a);a.length<f;)a.push(0);return a}function S(){for(var r=0;r<f;r++){var t=e[r];t=q(t),e[r]=t}}function g(){for(var r=0;r<f;r++){var t=e[r].reverse();t=q(t).reverse(),e[r]=t}}function b(){for(var r=0;r<f;r++){var t=[e[0][r],e[1][r],e[2][r],e[3][r]];t=q(t);for(var n=0;n<f;n++)e[n][r]=t[n]}}function A(){for(var r=0;r<f;r++){var t=[e[0][r],e[1][r],e[2][r],e[3][r]].reverse();t=q(t).reverse();for(var n=0;n<f;n++)e[n][r]=t[n]}}n.addEventListener("click",function(){n.classList.replace("start","restart"),n.innerText="Restart",c.classList.add("hidden"),o.classList.add("hidden"),a.classList.add("hidden"),m()}),document.addEventListener("keydown",function(e){if(e.preventDefault(),v){switch(e.code){case"ArrowLeft":S(),h();break;case"ArrowRight":g(),h();break;case"ArrowUp":b(),h();break;case"ArrowDown":A(),h()}y()}}),u.addEventListener("click",function(e){v&&(A(),h())}),d.addEventListener("click",function(e){v&&(S(),h())}),s.addEventListener("click",function(e){v&&(g(),h())}),i.addEventListener("click",function(e){v&&(b(),h())});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.e2753cb9.js.map