!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var r=o("bOlkj"),c=document.querySelector(".breed-select"),i=document.querySelector(".loader"),d=document.querySelector(".error"),l=document.querySelector(".cat-info");function a(){c.style.display="none",i.style.display="block"}function s(){i.style.display="none",c.style.display="block"}function u(){d.style.display="block"}function f(){d.style.display="none"}c.addEventListener("change",(function(){var e=c.value;a(),f(),(0,r.fetchCatByBreed)(e).then((function(e){!function(e){l.innerHTML='\n    <img src="'.concat(e.url,'" alt="').concat(e.breeds[0].name,'" />\n    <p><strong>Breed:</strong> ').concat(e.breeds[0].name,"</p>\n    <p><strong>Description:</strong> ").concat(e.breeds[0].description,"</p>\n    <p><strong>Temperament:</strong> ").concat(e.breeds[0].temperament,"</p>\n  "),l.style.display="block"}(e),s()})).catch((function(){u(),s()}))})),document.addEventListener("DOMContentLoaded",(function(){a(),f(),(0,r.fetchBreeds)().then((function(e){!function(e){e.forEach((function(e){var n=document.createElement("option");n.value=e.id,n.text=e.name,c.appendChild(n)}))}(e),s()})).catch((function(){u(),s()}))}))}();
//# sourceMappingURL=index.9c72aba0.js.map
