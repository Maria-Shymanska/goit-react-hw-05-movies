import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { lazy, Suspense } from 'react';
import HomePage from '../components/HomePage/HomePage';

const HomePage = lazy(() => import('../components/HomePage/HomePage'));
const SearchMovies = lazy(() =>
  import('../components/SearchMoviesForm/SearchMoviesForm')
);
const MovieDetailsPage = lazy(() =>
  import('../components/MovieDetailsElement/MovieDetailsElement')
);
const Cast = lazy(() => import('../views/Cast/Cast'));
const Reviews = lazy(() => import('../views/Reviews'));
const NotFoundView = lazy(() => import('../views/NotFoundView'));

export default function App() {
  return (
    <Suspense fallback={''}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<SearchMovies />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </Suspense>
  );
}
