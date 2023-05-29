import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendMovies } from '../../services/apiMovie';
import PageHeading from 'components/PageHeading/PageHeading';

export default function HomePage() {
  const [movie, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendMovies().then(({ results }) => setMovies(results));
  }, []);

  return (
    <>
      <PageHeading>Trending today</PageHeading>
      {movie && (
        <ul>
          {movie.map(m => (
            <li key={movie.id}>
              <Link to={`movies/${movie.id}`}> {movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
