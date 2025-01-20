export const createGalleryCardTemplate = el => {
  return `<li class="gallery-card">
            <a href=${el.largeImageURL} class="gallery-link">
              <img src=${el.webformatURL} alt=${el.tags}>
            </a>
          </li>`;
};
