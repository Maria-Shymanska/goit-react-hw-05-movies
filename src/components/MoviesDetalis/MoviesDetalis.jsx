import { MovieDetalisFetch } from '../../services/apiMovie';
import {
  Outlet,
  useParams,
  Link,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import css from './MoviesDetalis.module.css';

// useParams возвращает {:-//-} для дИнамических параметоров

export default function MoviesDetalis() {
  const [movieInfo, setMovieInfo] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    MovieDetalisFetch(movieId).then(setMovieInfo);
  }, [movieId]);

  if (!movieInfo) {
    return null;
  }

  const { genres, overview, title, vote_average, release_date, poster_path } =
    movieInfo;

  return (
    <div className={css.container}>
      <button
        className={css.button}
        onClick={() => navigate(location?.state?.from ?? '/')}
      >
        Go back
      </button>
      {/* <Link
        className={css.button}
        to={location.state?.from ?? '/Home'}
      >
        Go back
      </Link> */}

      <div className={css.card}>
        <img
          width={200}
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt=""
        />
        <div className={css.right}>
          <h2>{title}</h2>
          <p>
            <b>Overview: </b> {overview}
          </p>
          <p>
            <b>User score:</b> {vote_average * 10}%
          </p>
          <p>
            <b>Release date:</b> {release_date}
          </p>

          {genres && (
            <div className={css.genres}>
              <b>Genres:</b>{' '}
              {genres.map(({ id, name }) => (
                <p className={css.text} key={id}>
                  {name}
                </p>
              ))}{' '}
            </div>
          )}
        </div>
      </div>

      <hr />
      <div>
        <ul>
          <li>
            <Link to="cast" state={{ from: location?.state?.from ?? '/' }}>
              Cast
            </Link>
          </li>

          <li>
            <Link to="reviews" state={{ from: location?.state?.from ?? '/' }}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <hr />
      <Outlet />
    </div>
  );
}
