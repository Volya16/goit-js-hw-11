import{S as u,i as c}from"./assets/vendor-B07T6_gy.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const m=o=>{const{webformatURL:r,largeImageURL:s,tags:i,likes:e,views:t,comments:a,downloads:p}=o;return`<li class="gallery-card">
            <a href=${s} class="gallery-link">
              <img class="gallery-img" src=${r} alt='s${i}'>
            </a>

          <ul class="description">
            <li class="description-item">
              <p class="descriotion-text">Likes<span class="descriotion-span">${e}</span></p>
            </li>
            <li class="description-item">
              <p class="descriotion-text">Views<span class="descriotion-span">${t}</span></p>
            </li>
            <li class="description-item">
              <p class="descriotion-text">Comments<span class="descriotion-span">${a}</span></p>
            </li>
            <li class="description-item">
              <p class="descriotion-text">Downloads<span class="descriotion-span">${p}</</span></p>
            </li>
          </ul>
          </li>`},f=o=>{const r=new URLSearchParams({key:"48274046-7613a5ba2ef136dbd50664a67",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:12});return fetch(`https://pixabay.com/api/?${r}`).then(s=>(s.ok||trow(new Error(s.status)),s.json()))},l=document.querySelector(".js-seach-form"),d=document.querySelector(".js-gallery"),n=document.querySelector(".loader-container"),h=new u(".js-gallery a",{captionsData:"alt",captionDelay:250,animationSpeed:400}),g=o=>{o.preventDefault();const r=o.currentTarget.elements.user_query.value.trim();if(r===""){c.error({message:"Please feel this field!",position:"topRight"});return}n.classList.remove("is-hidden"),f(r).then(s=>{if(s.total===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",theme:"dark",backgroundColor:"#ef4040"}),d.innerHTML="",l.reset();return}const i=s.hits.map(e=>m(e)).join("");n.classList.remove("is-hidden"),d.innerHTML=i,h.refresh()}).catch(s=>{console.log(s)}).finally(()=>{n.classList.add("is-hidden"),l.reset()})};l.addEventListener("submit",g);
//# sourceMappingURL=index.js.map
