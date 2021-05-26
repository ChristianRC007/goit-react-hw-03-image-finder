import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com';

const fetchImages = (searchQuery, currentPage = 1) => {
  return axios
    .get(
      `/api/?q=${searchQuery}&page=${currentPage}&image_type=photo&orientation=horizontal&per_page=15&key=21175244-7c66133e2371767f9955ec31b`,
    )
    .then(response => response.data);
};
export default fetchImages;
