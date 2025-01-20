export const fetchPhotosByQuery = searchQuary => {
  return fetch(
    `https://pixabay.com/api/?key=48274046-7613a5ba2ef136dbd50664a67&q=${searchQuary}&image_type=photo&orientation=horisontal&safesearch=true&per_page=12`
  ).then(response => {
    if (!response.ok) {
      trow(new Error(response.status));
    }
      return response.json();
  });
};