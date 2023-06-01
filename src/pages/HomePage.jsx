import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { TrendMoviesFetch } from '../services/apiMovie';
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    TrendMoviesFetch()
      .then(({ results }) => {
        setMovies(prevResults => [...prevResults, ...results]);
      })
      .catch(error => toast.error(error.message, 'Something went wrong!'))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div style={{ marginLeft: 'auto', marginRight: 'auto', padding: '30px' }}>
      <h1
        style={{
          marginLeft: '100px',
          textTransform: 'uppercase',
          fontWeight: '500',
          fontSize: '30px',
          color: 'rgb(64, 63, 153)',
        }}
      >
        Trending today
      </h1>
      {movies && <MoviesList movies={movies} />}
      {isLoading && <Loader />}
    </div>
  );
};

export default Home;
