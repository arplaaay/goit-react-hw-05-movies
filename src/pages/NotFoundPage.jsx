import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <>
      <h1>404</h1>
      <h2>Page was not found</h2>
      <h3>
        <Link to="/">Back to Homepage</Link>
      </h3>
    </>
  );
};

export default NotFoundPage;
