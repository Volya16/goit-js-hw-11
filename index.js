import{i as l,S as u}from"./assets/vendor-B07T6_gy.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const m=o=>{const{webformatURL:r,largeImageURL:t,tags:i,likes:e,views:s,comments:a,downloads:p}=o;return`<li class="gallery-card">
            <a href=${t} class="gallery-link">
              <img class="gallery-img" src=${r} alt='s${i}'>
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
              <p class="descriotion-text">Downloads<span class="descriotion-span">${p}</</span></p>
            </li>
          </ul>
          </li>`},f=o=>{const r=new URLSearchParams({key:"48274046-7613a5ba2ef136dbd50664a67",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:12});return fetch(`https://pixabay.com/api/?${r}`).then(t=>(t.ok||trow(new Error(t.status)),t.json()))};console.log(l);const c=document.querySelector(".js-seach-form"),d=document.querySelector(".js-gallery"),n=document.querySelector(".loader-container"),h=new u(".js-gallery a",{captionsData:"alt",captionDelay:250,animationSpeed:400}),g=o=>{o.preventDefault();const r=o.currentTarget.elements.user_query.value.trim();if(r===""){l.error({message:"Please feel this field!",position:"topRight"});return}n.classList.remove("is-hidden"),f(r).then(t=>{if(t.total===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",theme:"dark",backgroundColor:"#ef4040"}),d.innerHTML="",c.reset();return}const i=t.hits.map(e=>m(e)).join("");n.classList.remove("is-hidden"),d.innerHTML=i,h.refresh()}).catch(t=>{console.log(t)}).finally(()=>{n.classList.add("is-hidden"),c.reset()})};c.addEventListener("submit",g);
//# sourceMappingURL=index.js.map
