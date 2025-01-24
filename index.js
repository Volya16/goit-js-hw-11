import{i as d,S as f}from"./assets/vendor-B07T6_gy.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const y=r=>{const{webformatURL:i,largeImageURL:t,tags:o,likes:e,views:s,comments:a,downloads:m}=r;return`<li class="gallery-card">
            <a href=${t} class="gallery-link">
              <img class="gallery-img" src=${i} alt='s${o}'>
            </a>

          <ul class="description">
            <li class="description-item">
              <p class="descriotion-text">Likes<span class="descriotion-span">${e}</span></p>
            </li>
            <li class="description-item">
              <p class="descriotion-text">Views<span class="descriotion-span">${s}</span></p>
            </li>
            <li class="description-item">
              <p class="descriotion-text">Comments<span class="descriotion-span">${a}</span></p>
            </li>
            <li class="description-item">
              <p class="descriotion-text">Downloads<span class="descriotion-span">${m}</</span></p>
            </li>
          </ul>
          </li>`},h=r=>{const i=new URLSearchParams({key:"48274046-7613a5ba2ef136dbd50664a67",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:12});return fetch(`https://pixabay.com/api/?${i}`).then(t=>(t.ok||trow(new Error(t.status)),t.json()))},l=document.querySelector(".js-seach-form"),c=document.querySelector(".js-gallery"),p=document.querySelector(".loader-container");d.settings({position:"topRight",theme:"dark",backgroundColor:"#ef4040",timeout:2e3});const g=new f(".js-gallery a",{captionsData:"alt",captionDelay:250,animationSpeed:400}),L=r=>{r.preventDefault();const i=r.currentTarget.elements.user_query.value.trim();if(i===""){n(!1),setTimeout(()=>{d.error({message:"Please feel this field!"})},500),l.reset(),n(!0);return}u(!0),n(!1),h(i).then(t=>{if(t.total===0){d.error({message:"Sorry, there are no images matching your search query. Please try again!"}),c.innerHTML="",l.reset();return}const o=t.hits.map(e=>y(e)).join("");c.innerHTML=o,g.refresh(),u(!0)}).catch(t=>{console.log(t)}).finally(()=>{l.reset(),n(!0)}),u(!1)};l.addEventListener("submit",L);function n(r){r?setTimeout(()=>{p.classList.add("is-hidden")},500):p.classList.remove("is-hidden")}function u(r){r?c.classList.remove("is-visibly"):c.classList.add("is-visibly")}
//# sourceMappingURL=index.js.map
