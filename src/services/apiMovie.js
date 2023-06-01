import axios from 'axios';

export async function TrendMoviesFetch() {
  const response = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day?api_key=3146c777d7ac16a246449915cf00b285'
  );

  return response.data;
}

export async function SearchMoviesFetch(query) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=3146c777d7ac16a246449915cf00b285&language=en-US&page=1&include_adult=false`
  );

  return response.data;
}

export async function MovieDetalisFetch(id) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=3146c777d7ac16a246449915cf00b285&language=en-US`
  );

  return response.data;
}

export async function MovieCreditsFetch(id) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=3146c777d7ac16a246449915cf00b285&language=en-US`
  );

  return response.data;
}

export async function MovieReviewsFetch(id) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=3146c777d7ac16a246449915cf00b285&language=en-US&page=1`
  );

  return response.data;
}
