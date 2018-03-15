!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=8)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();var o=function(){function t(e){var n=e.selector,r=e.toggleClass,o=e.maxIndex,i=void 0===o?16:o;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.currentIndex=null,this.maxIndex=i,this.images=[],this.selector=n,this.toggleClass=r}return r(t,[{key:"toggle",value:function(){document.querySelector(this.selector).classList.toggle(this.toggleClass)}},{key:"next",value:function(){this.currentIndex===this.maxIndex?this.currentIndex=0:this.updateImage(this.currentIndex+1)}},{key:"previous",value:function(){0===this.currentIndex?this.currentIndex=this.maxIndex:this.updateImage(this.currentIndex-1)}},{key:"currentImage",value:function(){var t=this.images[this.currentIndex];return{src:t.url_l,height:t.height_l,width:t.width_l,title:t.title}}},{key:"updateImage",value:function(t){this.currentIndex=t;var e=this.currentImage(),n=document.querySelector(this.selector+" [data-role='image-title']"),r=document.querySelector(this.selector+" img");r.setAttribute("src",e.src),r.setAttribute("height",e.height),r.setAttribute("width",e.width),n.innerText=e.title}},{key:"attachListeners",value:function(){var t=this;document.querySelector(this.selector+" .lightbox--button__close").addEventListener("click",function(){t.toggle()}),document.querySelector(this.selector+" .lightbox--button__next").addEventListener("click",function(){t.next()}),document.querySelector(this.selector+" .lightbox--button__previous").addEventListener("click",function(){t.previous()})}}]),t}();e.default=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={method:"flickr.interestingness.getList",format:"json",api_key:"2f8a358584fb543dd1962f3998f64e0b",extras:"url_sq,url_l",per_page:"20",page:1,nojsoncallback:1};e.getPhotos=async function(){var t=Math.floor(10*Math.random()),e=Object.assign({},r,{page:t}),n="https://api.flickr.com/services/rest?"+(e=function(t){return Object.entries(t).reduce(function(t,e){var n=e.join("=");return t.concat("&",n)},"")}(e)),o=await fetch(n);return(await o.json()).photos.photo}},function(t,e,n){"use strict";var r,o=n(1),i=n(0);var a=new((r=i)&&r.__esModule?r:{default:r}).default({selector:".lightbox--container",toggleClass:"lightbox--container__active"}),s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];document.querySelectorAll(".thumbnail").forEach(function(e){var n=e.getAttribute("data-thumbnail")-1,r=t[n].url_sq;e.querySelector("img").setAttribute("src",r),e.addEventListener("click",function(){a.updateImage(n),a.toggle()})})};document.addEventListener("DOMContentLoaded",async function(){a.attachListeners(),function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];a.images=t,s(t)}(await(0,o.getPhotos)())})},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(t,e,n){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),c=null,u=0,l=[],f=n(3);function d(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(m(r.parts[a],e))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(m(r.parts[a],e));i[r.id]={id:r.id,refs:1,parts:s}}}}function h(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function p(t,e){var n=s(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=l[l.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),l.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,o)}}function g(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=l.indexOf(t);e>=0&&l.splice(e,1)}function v(t){var e=document.createElement("style");return t.attrs.type="text/css",b(e,t.attrs),p(t,e),e}function b(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function m(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var a=u++;n=c||(c=v(e)),r=w.bind(null,n,a,!1),o=w.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",b(e,t.attrs),p(t,e),e}(e),r=function(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=f(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,e),o=function(){g(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){g(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=h(t,e);return d(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var a=n[o];(s=i[a.id]).refs--,r.push(s)}t&&d(h(t,e),e);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var x,y=(x=[],function(t,e){return x[t]=e,x.filter(Boolean).join("\n")});function w(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=y(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){(t.exports=n(5)(!1)).push([t.i,'header {\n  grid-area: header; }\n\nmain {\n  grid-area: main;\n  width: 80%; }\n  main .row {\n    display: flex;\n    height: 160px;\n    justify-content: space-between; }\n  main .thumbnail img {\n    height: 100px;\n    width: 100px; }\n\nfooter {\n  align-self: flex-end;\n  grid-area: footer; }\n\n.container {\n  display: grid;\n  justify-items: center;\n  align-content: end;\n  grid-template-areas: "header header header header" "main main main main" "footer footer footer footer";\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-template-rows: 150px 1fr 100px; }\n\n.lightbox--container {\n  display: none;\n  background: rgba(0, 0, 0, 0.95);\n  color: white;\n  font-size: 24px;\n  height: 100%;\n  left: 0;\n  position: fixed;\n  text-align: center;\n  top: 0;\n  width: 100%;\n  z-index: 10; }\n  .lightbox--container__active {\n    display: flex;\n    align-items: center;\n    justify-content: space-between; }\n  .lightbox--container img {\n    box-sizing: border-box;\n    height: auto;\n    margin: 2%;\n    max-height: 88vh;\n    max-width: 100%;\n    width: auto; }\n\n.lightbox--image-container {\n  display: flex;\n  align-content: center;\n  flex-flow: column nowrap;\n  height: 100vh;\n  justify-content: center; }\n\n.lightbox--title {\n  max-height: 10vh; }\n\n.lightbox--button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  font-weight: 700;\n  height: 50px;\n  width: 50px; }\n  .lightbox--button:hover {\n    background: rgba(255, 255, 255, 0.15); }\n  .lightbox--button__close {\n    border-radius: 50%;\n    position: absolute;\n    top: 20px;\n    right: 20px; }\n',""])},function(t,e,n){var r=n(6);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){"use strict";r(n(7)),r(n(2));function r(t){return t&&t.__esModule?t:{default:t}}}]);