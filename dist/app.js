!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e){e.exports=JSON.parse('{"d":[["Backquote","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Digit0","Minus","Equal","Backspace"],["Tab","KeyQ","KeyW","KeyE","KeyR","KeyT","KeyY","KeyU","KeyI","KeyO","KeyP","BracketLeft","BracketRight","Backslash","Delete"],["CapsLock","KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyK","KeyL","Semicolon","Quote","Enter"],["ShiftLeft","KeyZ","KeyX","KeyC","KeyV","KeyB","KeyN","KeyM","Comma","Period","Slash","ShiftRight"],["ControlLeft","MetaLeft","AltLeft","Space","AltRight","ControlRight","ArrowLeft","ArrowUp","ArrowDown","ArrowRight"]],"a":["Backspace","Delete","CapsLock","Tab","Enter","ShiftLeft","ShiftRight","ControlLeft","MetaLeft","AltLeft","Space","AltRight","ControlRight"],"c":{"Backquote":"Ё","Digit1":["1","!"],"Digit2":["2","\\""],"Digit3":["3","№"],"Digit4":["4",";"],"Digit5":["5","%"],"Digit6":["6",":"],"Digit7":["7","?"],"Digit8":["8","*"],"Digit9":["9","("],"Digit0":["0",")"],"Minus":["-","_"],"Equal":["=","+"],"Backspace":"Backspace","Tab":"Tab","KeyQ":"Й","KeyW":"Ц","KeyE":"У","KeyR":"К","KeyT":"Е","KeyY":"Н","KeyU":"Г","KeyI":"Ш","KeyO":"Щ","KeyP":"З","BracketLeft":"Х","BracketRight":"Ъ","Backslash":["\\\\","/"],"Delete":"Del","CapsLock":"Caps Lock","KeyA":"Ф","KeyS":"Ы","KeyD":"В","KeyF":"А","KeyG":"П","KeyH":"Р","KeyJ":"О","KeyK":"Л","KeyL":"Д","Semicolon":"Ж","Quote":"Э","Enter":"Enter","ShiftLeft":"Shift","KeyZ":"Я","KeyX":"Ч","KeyC":"С","KeyV":"М","KeyB":"И","KeyN":"Т","KeyM":"Ь","Comma":"Б","Period":"Ю","Slash":[".",":"],"ShiftRight":"Shift","ControlLeft":"Ctrl","MetaLeft":"Win","AltLeft":"Alt","Space":"Space","AltRight":"Alt","ControlRight":"Ctrl","ArrowLeft":"&#9668;","ArrowUp":"&#9650;","ArrowDown":"&#9660;","ArrowRight":"&#9658;"},"b":{"Backquote":["`","~"],"Digit1":["1","!"],"Digit2":["2","@"],"Digit3":["3","#"],"Digit4":["4","$"],"Digit5":["5","%"],"Digit6":["6","^"],"Digit7":["7","&"],"Digit8":["8","*"],"Digit9":["9","("],"Digit0":["0",")"],"Minus":["-","_"],"Equal":["=","+"],"Backspace":"Backspace","Tab":"Tab","KeyW":"W","KeyQ":"Q","KeyE":"E","KeyR":"R","KeyT":"T","KeyY":"Y","KeyU":"U","KeyI":"I","KeyO":"O","KeyP":"P","BracketLeft":["[","{"],"BracketRight":["]","}"],"Backslash":["\\\\","|"],"Delete":"Del","CapsLock":"Caps Lock","KeyA":"A","KeyS":"S","KeyD":"D","KeyF":"F","KeyG":"G","KeyH":"H","KeyJ":"J","KeyK":"K","KeyL":"L","Semicolon":[";",":"],"Quote":["\\"","\\""],"Enter":"Enter","ShiftLeft":"Shift","KeyZ":"Z","KeyX":"X","KeyC":"C","KeyV":"V","KeyB":"B","KeyN":"N","KeyM":"M","Comma":[":","<"],"Period":[".",">"],"Slash":["/","?"],"ShiftRight":"Shift","ControlLeft":"Ctrl","MetaLeft":"Win","AltLeft":"Alt","Space":"Space","AltRight":"Alt","ControlRight":"Ctrl","ArrowLeft":"&#9668;","ArrowUp":"&#9650;","ArrowDown":"&#9660;","ArrowRight":"&#9658;"}}')},function(e,t,n){var r=n(2),o=n(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},i=(r(o,a),o.locals?o.locals:{});e.exports=i},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function c(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],o=0;o<e.length;o++){var a=e[o],s=t.base?a[0]+t.base:a[0],u=n[s]||0,l="".concat(s," ").concat(u);n[s]=u+1;var d=c(l),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(i[d].references++,i[d].updater(p)):i.push({identifier:l,updater:g(p,t),references:1}),r.push(l)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var l,d=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function p(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function f(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var y=null,h=0;function g(e,t){var n,r,o;if(t.singleton){var a=h++;n=y||(y=u(t)),r=p.bind(null,n,a,!1),o=p.bind(null,n,a,!0)}else n=u(t),r=f.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=c(n[r]);i[o].references--}for(var a=s(e,t),u=0;u<n.length;u++){var l=c(n[u]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}n=a}}}},function(e,t,n){(t=n(4)(!1)).push([e.i,"body {\r\n    background-color: #004134;\r\n    font-family: 'Comic Neue';\r\n}\r\n\r\n.wrapper {\r\n    padding: 10px;\r\n    margin: 10vh auto;\r\n    width: 80%;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\ntextarea {\r\n    height: 250px;\r\n    width: 98.4%;\r\n    font-size: 22px;\r\n    margin: 17px auto;\r\n    border-radius: 5px;\r\n    box-shadow: 0 0 5px 6px #101010a6;\r\n}\r\n\r\n.keyboard {\r\n    height: 392px;\r\n}\r\n\r\n.line {\r\n    display: flex;\r\n}\r\n\r\n.key {\r\n    cursor: pointer;\r\n    width: 6%;\r\n    height: 55px;\r\n    line-height: 55px;\r\n    font-size: 22px;\r\n    box-shadow: 0 0 7px 4px #1b19195c;\r\n    color: #fff;\r\n    background: #41948373;\r\n    margin: 4px;\r\n    padding: 6px;\r\n    text-align: center;\r\n    border-radius: 5px;\r\n    transform: scale(1);\r\n    transition: transform .25s ease-in-out, background-color .25s ease-in-out;\r\n}\r\n\r\n.key:hover {\r\n    background-color: #1a695954;;\r\n    color: white;\r\n}\r\n\r\n.key span{\r\n    user-select: none;\r\n}\r\n\r\n.key sup {\r\n    margin-left: 5px;\r\n    vertical-align: super;\r\n    font-size: smaller;\r\n}\r\n\r\n.backspace {\r\n    width: 13%;\r\n}\r\n\r\n.tab {\r\n    width: 7%;\r\n}\r\n\r\n.del {\r\n    width: 4.8%;\r\n}\r\n\r\n.caps-lock {\r\n    width: 8%;\r\n}\r\n\r\n.enter {\r\n    width: 12.4%;\r\n}\r\n\r\n.shift {\r\n    width: 15.4%;\r\n}\r\n\r\n.space {\r\n    width: 44%;\r\n}\r\n\r\n.group-btn {\r\n    width: 8%;\r\n    height: 53px;\r\n}\r\n\r\n.arrow-up {\r\n    cursor: pointer;\r\n    height: 20px;\r\n    line-height: 21px;\r\n    font-size: 15px;\r\n    margin: 2px;\r\n    margin-top: 4px;\r\n    padding: 6px;\r\n    text-align: center;\r\n    border-radius: 5px;\r\n    width: 88%;\r\n}\r\n\r\n.arrow-down {\r\n    cursor: pointer;\r\n    height: 20px;\r\n    line-height: 21px;\r\n    font-size: 15px;\r\n    margin: 2px;\r\n    padding: 6px;\r\n    text-align: center;\r\n    border-radius: 5px;\r\n    width: 88%;\r\n}\r\n\r\n.arrow-up:hover {\r\n    background-color: #1a695954;;\r\n    color: white;\r\n}\r\n\r\n.arrow-down:hover {\r\n    background-color: #1a695954;;\r\n    color: white;\r\n}\r\n\r\n.sys{\r\n    font-size: 15px;\r\n    background: #3f635cb0;\r\n}\r\n\r\n.on-key-press {\r\n    background-color: #1a695954;\r\n    box-shadow: 0 0 11px 2px white;\r\n    color: #e4e0e0ed;\r\n    transform: scale(0.95) translateX(2px) translateY(2px);\r\n}\r\n\r\n.info {\r\n    color: #8a8a8a;\r\n    margin-left: 10px;\r\n    margin-top: 10px;\r\n}",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(i=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),a=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(a).concat([o]).join("\n")}var i,c,s;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},function(e,t,n){"use strict";n.r(t);var r="ru",o=n(0);function a(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(e,t,n,r){Array.isArray(t)?function(e,t,n){var r=n;r.innerHTML="Backquote"===e||"Minus"===e||"Equal"===e?"<span>".concat(t[0],'</span><span class="upper-value"><sup><sup>').concat(t[1],"</sup></sup></span>"):"<span>".concat(t[0],'</span><span class="upper-value"><sup>').concat(t[1],"</sup></span>")}(e,t,n):(n.innerHTML="<span>".concat(t,"</span>"),o.a.find((function(t){return t===e}))&&function(e,t,n){e.classList.add("sys",n.replace(/ /g,"-").toLowerCase())}(n,0,t),"ArrowUp"!==e&&"ArrowDown"!==e||function(e,t,n){var r,o="ArrowUp"===e?"key arrow-up":"key arrow-down";if((r=t.classList).add.apply(r,a(o.split(" "))),document.querySelector(".group-btn")){document.querySelector(".group-btn").appendChild(t)}else{var i=document.createElement("div");i.classList.add("group-btn"),i.appendChild(t),n.append(i)}}(e,n,r))}function s(e,t,n){o.d.forEach((function(n){var a=document.createElement("div");a.classList.add("line"),e.append(a),n.forEach((function(e){var n=t===r?o.c[e]:o.b[e],i=document.createElement("div");i.setAttribute("id",e),i.classList.add("key"),a.append(i),c(e,n,i,a)}))})),n&&n.forEach((function(e){var t=document.querySelector("#".concat(e.getAttribute("id")));null!==t&&t.classList.add("on-key-press")}))}var u=!1;function l(){return document.querySelector(".wrapper")}function d(){return document.querySelector("textarea")}function p(e){if(!/^(F[0-9])|(Escape)$/.test(e.code)){var t=l(),n=d(),a=e.code||e.currentTarget.getAttribute("id"),i=t.querySelector("#".concat(a));i&&!i.classList.contains("on-key-press")&&i.classList.add("on-key-press");var c=t.querySelector("#".concat(a," span")),f=t.querySelector("#".concat(a," .upper-value")),y=null!==c?c.innerText.toLowerCase():"",h=null!==f?f.innerText:y.toUpperCase();o.a.find((function(e){return e===a}))?(!function(e,t){if(e.altKey&&e.shiftKey){var n=(localStorage.getItem("currentLanguage")||r)===r?"en":r,o=document.querySelector(".keyboard"),a=document.querySelectorAll(".on-key-press");return o.innerHTML="",s(o,n,a),void localStorage.setItem("currentLanguage",n)}if("AltLeft"!==t&&"AltRight"!==t&&"ShiftLeft"!==t&&"ShiftRight"!==t&&"CtrlLeft"!==t&&"CtrlRight"!==t)if("CapsLock"!==t){var i=d(),c="";"Enter"===t&&(c+="\n"),"Tab"===t&&(c+="\t"),"Space"===t&&(c+=" ");var l=i.selectionEnd-i.selectionStart;"Backspace"===t&&0===l&&(i.selectionStart-=1),"Delete"===t&&0===l&&(i.selectionEnd+=1);var p=i.value.split(""),f=i.selectionStart;p.splice(i.selectionStart,i.selectionEnd-i.selectionStart,c),i.value=p.join(""),i.selectionStart="Delete"===t||"Backspace"===t?f:f+1,i.selectionEnd=i.selectionStart}else u=!u}(e,a),e.altKey&&e.shiftKey&&document.querySelectorAll(".key").forEach((function(e){return e.addEventListener("mousedown",p)}))):n.value+=e.shiftKey||u?h:y,e.preventDefault()}}function f(e){if(!/^(F[0-9])|(Escape)$/.test(e.code)){var t=l(),n=d();if(e.code){if("CapsLock"!==e.code||!u){var r=t.querySelector("#".concat(e.code));null!==r&&r.classList.remove("on-key-press")}}else document.body.querySelectorAll(".on-key-press").forEach((function(e){"CapsLock"===e.getAttribute("id")&&u||e.classList.remove("on-key-press")})),e.preventDefault(),n.focus()}}n(1);document.addEventListener("DOMContentLoaded",(function(){var e=localStorage.getItem("currentLanguage")||r,t=function(){var e=document.createElement("div"),t=document.createElement("textarea"),n=document.createElement("div"),r=document.createElement("p"),o=document.createElement("p");return e.classList.add("wrapper"),n.classList.add("keyboard"),r.classList.add("info"),o.classList.add("info"),r.innerText="Сделано в OS Windows 10",o.innerText="Комбинация клавиш Shift + Alt переключает язык",e.append(t,n),e.append(r),e.append(o),document.body.append(e),t.focus(),n}();s(t,e),document.body.addEventListener("keydown",p),document.body.addEventListener("keyup",f),t.querySelectorAll(".key").forEach((function(e){return e.addEventListener("mousedown",p)})),document.addEventListener("mouseup",f)}))}]);