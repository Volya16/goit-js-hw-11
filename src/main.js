import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { createGalleryCardTemplate } from "./js/render-functions";
import { fetchPhotosByQuery } from './js/pixabay-api';


const seachFormEl = document.querySelector('.js-seach-form');
const galleryEl = document.querySelector('.js-gallery');


const onSeachFormSubmit = evt => {
  evt.preventDefault();

  const searchQuary = evt.currentTarget.elements.user_query.value.trim();

  if (searchQuary === "") {
    alert ('Please feel this field!');
    return;
  }

  fetchPhotosByQuery(searchQuary)
    .then(data => {
      console.log(data);
      if (data.total === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        galleryEl.innerHTML = '';
        seachFormEl.reset();
        return;
      }
      const galleryTemplate = data.hits
        .map(el => createGalleryCardTemplate(el))
        .join('');
      galleryEl.innerHTML = galleryTemplate;
    })
    .catch(err => {
      console.log(err);
    });
  seachFormEl.reset();
};




seachFormEl.addEventListener('submit', onSeachFormSubmit);
