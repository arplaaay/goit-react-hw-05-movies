import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { searchMoviesByQuery } from 'services/api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { toast } from 'react-toastify';

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (!searchParams.get('query')) {
      return;
    }
    (async function fetchMovies() {
      try {
        const response = await searchMoviesByQuery(searchParams);
        setMovies(response);
        if (!response.length) {
          toast.warn('There are no movies for your request', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, [searchParams]);

  const handlChange = e => {
    setQuery(e.currentTarget.value);
  };

  const handlSubmit = e => {
    e.preventDefault();
    const currentQuery = query.trim();
    if (!currentQuery) {
      return toast.warn('Please, enter something to find!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
    setSearchParams({ query: currentQuery });
    setQuery('');
  };

  return (
    <>
      <form onSubmit={handlSubmit}>
        <input type="text" value={query} onChange={handlChange}></input>
        <button type="submit">Search</button>
      </form>
      {movies && <MoviesList movies={movies} url={' '} location={location} />}
    </>
  );
};

export default MoviesPage;
