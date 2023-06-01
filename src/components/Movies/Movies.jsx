// import { useState, useEffect } from 'react';
// import { toast } from 'react-toastify';
// import { SearchMoviesFetch } from '../../services/apiMovie';
// import { Link, useLocation, useSearchParams } from 'react-router-dom';
// import css from './Movies.module.css';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export default function Movies() {
//   const location = useLocation();
//   const [name, setName] = useState('');
//   const [movies, setMovies] = useState([]);
//   const [searchParams, setSearchParams] = useSearchParams();
//   const query = searchParams.get('query');

//   const handleInputChange = event => {
//     setName(event.currentTarget.value.toLowerCase());
//   };

//   const handelSubmit = event => {
//     event.preventDefault();

//     if (name.trim() === '') {
//       toast('Enter something');
//       return;
//     }

//     setSearchParams(query !== '' ? { query: name } : {});

//     event.target.reset();
//   };

//   useEffect(() => {
//     if (query) {
//       SearchMoviesFetch(query).then(setMovies);
//     }
//   }, [query]);

//   return (
//     <>
//       <ToastContainer autoClose={3000} />
//       <form className={css.container} onSubmit={handelSubmit}>
//         <input
//           className={css.input}
//           type="text"
//           autoComplete="off"
//           autoFocus
//           onChange={handleInputChange}
//           placeholder="Search movie"
//           name="query"
//         />
//         <button className={css.button} type="submit">
//           Search
//         </button>
//       </form>
//       <ul>
//         {movies &&
//           movies.map(({ title, id }) => (
//             <li key={id}>
//               <Link to={`${id}`} state={{ from: location }}>
//                 {title}
//               </Link>
//             </li>
//           ))}
//       </ul>
//     </>
//   );
// }
