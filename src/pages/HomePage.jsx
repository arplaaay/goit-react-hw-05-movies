import { MoviesList } from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getFilms } from 'services/api';

const Homepage = () => {
  const [movies, setMovies] = useState(null);
  const location = useLocation();

  useEffect(() => {
    async function getMovies() {
      try {
        const data = await getFilms();
        setMovies(data);
      } catch (error) {
        console.error(error);
      }
    }
    getMovies();
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      {movies && <MoviesList movies={movies} location={location} />}
    </>
  );
};

export default Homepage;
