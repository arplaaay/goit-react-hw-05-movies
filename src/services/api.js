import axios from 'axios';

const API_KEY = '5447769d2c5bc2a26606f393bbc9cf1e';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getFilms = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  const { results } = response.data;
  return results;
};

export const getDetailsOfFilm = async id => {
  const { data } = await axios.get(`/movie/${id}?api_key=${API_KEY}`);
  return data;
};

export const getActorsFromMovie = async id => {
  const response = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`);
  const { cast } = response.data;
  return cast;
};

export const getReviewsFromFilm = async id => {
  const response = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}`);
  const { results } = response.data;
  return results;
};

export const searchMoviesByQuery = async searchQuary => {
  const response = await axios.get(
    `/search/movie?api_key=${API_KEY}&${searchQuary}&page=1`
  );
  const { results } = response.data;
  return results;
};
