parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"d6sW":[function(require,module,exports) {
var n;function e(n){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function i(n,e,i){return(e=t(e))in n?Object.defineProperty(n,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[e]=i,n}function t(n){var i=r(n,"string");return"symbol"===e(i)?i:String(i)}function r(n,i){if("object"!==e(n)||null===n)return n;var t=n[Symbol.toPrimitive];if(void 0!==t){var r=t.call(n,i||"default");if("object"!==e(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===i?String:Number)(n)}var a=document.querySelector(".lnb_menu_wrap"),o=document.querySelector(".gnb ul"),l=document.querySelector(".lnb_menu_wrap .gnb"),s=document.querySelectorAll(".lnb_menu_wrap .gnb ul li"),c=Array.from(document.querySelectorAll(".lnb_menu")),g=Array.from(document.querySelectorAll(".lnb_list"));function p(n){g.forEach(function(e,i){e.style.display=n==i?"block":"none"})}o.addEventListener("mouseover",function(){a.style.display="block",a.style.backdropFilter="blur(2px)",c[0].style.display="block"}),c.forEach(function(n,e){n.addEventListener("mouseleave",function(){a.style.backdropFilter="none",a.style.display="none",n.style.display="none"})}),s.forEach(function(n,e){(n.classList.contains("women")||n.classList.contains("men")||n.classList.contains("kids")||n.classList.contains("brand"))&&n.addEventListener("mouseover",function(){p(e)})});var u=new Swiper(".swiper_main",{loop:!0,effect:"fade",autoplay:{delay:3e3},pagination:{el:".swiper-pagination",type:"progressbar",clickable:!0}}),b=$(".swiper_ranking .swiper_tap ul li"),_=["#신발","#의류","#악세사리","#KIDS"],m=[["01 휠라 스캔라인","02 휠라 스피드서브T9","03 휠라 레인저22","04 휠라 디스럽터2 1998","05 휠라 RGB 플로트 2.0","06 휠라 트라조러스 N3"],["01 휠라 쿨링 트레이닝 팬츠","02 베이직 리니어 반팔티","03 휠라 티핑 퍼포먼스 티셔츠","04 클로벌 파리바오픈 티셔츠","05 휠라 빅로고 반팔티셔츠","06 휠라 트라조러스 크롭티셔츠"],["01 F로고 코트캡","02 테니스 타월","03 테니스 심플 썬캡","04 테니스 소프트 볼캡","05 HERITAGE 헤어밴드","06 휠라 베이직 월렛"],["01 마린 크래픽 셋업","02 휠라X수수진 플레이풀 셔츠","03 물놀이 긴팔 셋업","04 아쿠아 래쉬가드 셋업","05 물놀이 여아 셋업","06 스몰로고 기능성 티셔츠"]],d=[["./img/ranking_tab01_01.jpg","./img/ranking_tab01_02.jpg","./img/ranking_tab01_03.jpg","./img/ranking_tab01_04.jpg","./img/ranking_tab01_05.jpg","./img/ranking_tab01_06.jpg"],["./img/ranking_tab02_01.jpg","./img/ranking_tab02_02.jpg","./img/ranking_tab02_03.jpg","./img/ranking_tab02_04.jpg","./img/ranking_tab02_05.jpg","./img/ranking_tab02_06.jpg"],["./img/ranking_tab03_01.jpg","./img/ranking_tab03_02.jpg","./img/ranking_tab03_03.jpg","./img/ranking_tab03_04.jpg","./img/ranking_tab03_05.jpg","./img/ranking_tab03_06.jpg"],["./img/ranking_tab04_01.jpg","./img/ranking_tab04_02.jpg","./img/ranking_tab04_03.jpg","./img/ranking_tab04_04.jpg","./img/ranking_tab04_05.jpg","./img/ranking_tab04_06.jpg"]],y=0;b.each(function(n){$(this).click(function(){b.removeClass("on"),$(this).addClass("on"),$(".swiper_title").text(_[n]),y=(y+1)%m.length,f.pagination.render(),$(".swiper_ranking .swiper-slide").each(function(e){$(this).find("img").attr("src",d[n][e])})})});var f=new Swiper(".swiper_ranking",{observer:!0,observerParents:!0,centeredSlides:!0,slidesPerView:3,loop:!0,autoplay:{delay:2e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(n,e){return'<div class="'+e+'"><span>'+m[y][n]+"</span></div>"}}}),v=new IntersectionObserver(function(n,e){n.forEach(function(n){n.isIntersecting?n.target.classList.add("visible"):n.target.classList.remove("visible")})});document.querySelectorAll(".word_box").forEach(function(n){return v.observe(n)});var k=$(".new_arrival ul li"),w=$(".new_arrival .tab_content");k.each(function(n,e){$(e).on("click",function(){k.removeClass("on"),w.removeClass("active"),$(e).addClass("on"),w.eq(n).addClass("active")})});var j=new Swiper(".swiper_new_arrival",(i(n={observer:!0,observeParents:!0,centeredSlides:!0,slidesPerView:3,spaceBetween:10,loop:!0,autoplay:{delay:1e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0}},"observer",!0),i(n,"observerParents",!0),n)),S=document.querySelectorAll(".magazine_list li"),h=!1;S.forEach(function(n){gsap.set(n,{y:50})}),window.addEventListener("scroll",function(){window.scrollY>4e3&&!h&&(h=!0,gsap.to(S[0],1,{opacity:1,y:0,delay:.5}),gsap.to(S[1],1,{opacity:1,y:0,delay:1}),gsap.to(S[2],1,{opacity:1,y:0,delay:1.5}))});var E=document.querySelectorAll(".outfit_btn"),q=document.querySelectorAll(".outfit_info");E.forEach(function(n,e){var i=!1;n.addEventListener("click",function(){0==i?(q[e].style.display="block",i=!0,setTimeout(function(){q[e].style.display="none",i=!1},2e3)):(q[e].style.display="none",i=!1)})});
},{}]},{},["d6sW"], null)
//# sourceMappingURL=/main.1ede6306.js.map