import { Link } from 'react-router-dom';

export const MoviesList = ({ movies, location }) => (
  <ol>
    {movies.map(movie => {
      const { id, title } = movie;
      return (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </Link>
        </li>
      );
    })}
  </ol>
);
