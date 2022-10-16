import { Routes, Route } from 'react-router-dom';
import { AppGlobalStyles } from './App.styled';
import { lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { Cast } from 'pages/Cast';
import { Reviews } from 'pages/Reviews';
import { Loader } from './Loader/Loader';

const AppBar = lazy(() => import('./AppBar'));
const Homepage = lazy(() => import('../pages/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const MoviesDetailsPage = lazy(() => import('../pages/MovieDetailsPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

// import { AppBar } from './AppBar/AppBar';
// import { Homepage } from 'pages/HomePage';
// import { MoviesPage } from '../pages/MoviesPage';
// import { MoviesDetailsPage } from 'pages/MovieDetailsPage';
// import { NotFoundPage } from 'pages/NotFoundPage';

export const App = () => {
  return (
    <>
      <AppGlobalStyles />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<AppBar />}>
            <Route index element={<Homepage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="movies/:movieId" element={<MoviesDetailsPage />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>

      <ToastContainer />
    </>
  );
};
