import iziToast from 'izitoast';
import SimpleLightbox from "simplelightbox";

import { createGalleryCardTemplate } from './js/render-functions';
import { fetchPhotosByQuery } from './js/pixabay-api';


const seachFormEl = document.querySelector('.js-seach-form');
const galleryEl = document.querySelector('.js-gallery');
const loaderEl = document.querySelector('.loader-container');


const lightbox = new SimpleLightbox('.js-gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  animationSpeed: 400,
});


const onSeachFormSubmit = evt => {
  evt.preventDefault();

  const searchQuary = evt.currentTarget.elements.user_query.value.trim();

  if (searchQuary === '') {
    iziToast.error({
      message: 'Please feel this field!',
      position: 'topRight',
    });
    return
  }

loaderEl.classList.remove('is-hidden');


  fetchPhotosByQuery(searchQuary)
    .then(data => {
      if (data.total === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          theme: 'dark', 
          backgroundColor: '#ef4040',
        });
        galleryEl.innerHTML = '';
        seachFormEl.reset();
        return;
      }
      const galleryTemplate = data.hits
        .map(imgs => createGalleryCardTemplate(imgs))
        .join('');
      loaderEl.classList.remove('is-hidden');
      galleryEl.innerHTML = galleryTemplate;

      lightbox.refresh();
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      loaderEl.classList.add('is-hidden');
      seachFormEl.reset()
    }
  )
};




seachFormEl.addEventListener('submit', onSeachFormSubmit);
