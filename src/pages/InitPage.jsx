import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const InitPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiKey = import.meta.env.VITE_TMDB_APY_KEY;

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/popular",
      params: { language: "en-US", page: "1" },
      headers: {
        accept: "application/json",
        Authorization: `Baerer ${apiKey}`,
      },
    };
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
        return (
          <div
            key={movie.id}
            className="movie-card w-full max-h-fit p-1 bg-gray-800 rounded-[5px]"
          >
            <h3>{movie.title}</h3>
            <h4>{movie.release_date}</h4>
            <h4>{movie.vote_average}</h4>
            <p className="line-clamp-3">{movie.overview}</p>
            <div
              className={`h-25 bg-gray-500 text-center bg-[url(https://api.themoviedb.org/3/movie/${movie.poster_path}/images)] bg-cover`}
            ></div>
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

export default InitPage;
