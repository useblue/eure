"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){var n;if(e)return"string"==typeof e?_arrayLikeToArray(e,t):"Map"===(n="Object"===(n=Object.prototype.toString.call(e).slice(8,-1))&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function getMoveDirection(e,t,n,a){if(isPhone)return n=n-e,e=a-t,Math.abs(n)<2&&Math.abs(e)<2?DIRECTIONS.UNDIRECTED:-135<=(a=180*Math.atan2(e,n)/Math.PI)&&a<=-45?DIRECTIONS.UP:45<a&&a<135?DIRECTIONS.DOWN:135<=a&&a<=180||-180<=a&&a<-135?DIRECTIONS.LEFT:-45<=a&&a<=45?DIRECTIONS.RIGHT:DIRECTIONS.UNDIRECTED}function loadIntro(){document[hiddenProperty]||loadIntro.loaded||(setTimeout(function(){$(".wrap").classList.add("in"),setTimeout(function(){$(".content-subtitle").innerHTML="<span>".concat(_toConsumableArray(subtitle).join("</span><span>"),"</span>")},270)},0),loadIntro.loaded=!0)}function switchPage(){var e;switchPage.switched||((e={intro:$(".content-intro"),path:$(".shape-wrap path"),shape:$("svg.shape")}).shape.style.transformOrigin="50% 0%",anime({targets:e.intro,duration:1100,easing:"easeInOutSine",translateY:"-200vh"}),anime({targets:e.shape,scaleY:[{value:[.8,1.8],duration:550,easing:"easeInQuad"},{value:1,duration:550,easing:"easeOutQuad"}]}),anime({targets:e.path,duration:1100,easing:"easeOutQuad",d:e.path.getAttribute("pathdata:id"),complete:function(e){canvas&&(cancelAnimationFrame(animationID),canvas.parentElement.removeChild(canvas),canvas=null)}}),switchPage.switched=!0)}function loadMain(){loadMain.loaded||(setTimeout(function(){$(".card-inner").classList.add("in")},400),loadMain.loaded=!0)}function loadAll(){loadAll.loaded||(switchPage(),loadMain(),loadAll.loaded=!0)}window.hiddenProperty="hidden"in document?"hidden":"webkitHidden"in document?"webkitHidden":"mozHidden"in document?"mozHidden":null,window.DIRECTIONS={UP:"UP",DOWN:"DOWN",LEFT:"LEFT",RIGHT:"RIGHT",UNDIRECTED:"UNDIRECTED"},window.isPhone=/Mobile|Android|iOS|iPhone|iPad|iPod|Windows Phone|KFAPWI/i.test(navigator.userAgent),window.visibilityChangeEvent=hiddenProperty.replace(/hidden/i,"visibilitychange"),window.addEventListener(visibilityChangeEvent,loadIntro),window.addEventListener("DOMContentLoaded",loadIntro);var enterEl=$(".enter");enterEl.addEventListener("click",loadAll),enterEl.addEventListener("touchenter",loadAll),document.body.addEventListener("mousewheel",loadAll,{passive:!0}),$(".arrow").addEventListener("mouseenter",loadAll),isPhone&&(document.addEventListener("touchstart",function(e){window.startx=e.touches[0].pageX,window.starty=e.touches[0].pageY},{passive:!0}),document.addEventListener("touchend",function(e){var t=e.changedTouches[0].pageX,e=e.changedTouches[0].pageY;getMoveDirection(startx,starty,t,e)===DIRECTIONS.UP&&loadAll()},{passive:!0}));