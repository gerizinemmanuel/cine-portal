import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const MoviesList = ({ options }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    options.headers.Authorization = `Bearer ${apiKey}`;
    axios
      .request(options)
      .then((response) => {
        setMovies(response.data.results);
        console.log(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <>A carregar...</>;
  }
  return (
    <>
      {movies.map((movie) => {
        const img_url = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
        return (
          <div
            key={movie.id}
            className="movie-card w-full max-h-fit rounded-[5px]"
          >
            <div className={`card-img text-center`}>
              <img className="w-full rounded-[5px]" src={img_url} alt="" />
            </div>
            <h3>{movie.title ? movie.title : movie.name}</h3>
            <h4>{movie.release_date}</h4>
            <h4>{movie.vote_average}</h4>
            {/* {<p className="line-clamp-3">{movie.overview}</p>} */}

            <Link to="#" className="text-xs">
              Género
            </Link>
            <Link to="#" className="block text-xs">
              Ver detalhes
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default MoviesList;
