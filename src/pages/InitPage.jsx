import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const InitPage = () => {
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/popular",
      params: { language: "en-US", page: "1" },
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    };
    axios
      .request(options)
      .then((response) => {
        setMovies(response.data.results);
        //console.log(response.data.results);
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
      <h2 className="text-[2rem] font-[700]">Filmes e séries populares</h2>
      {movies.map((movie) => {
        let posterPath = "";
        const imgOptions = {
          method: "GET",
          url: `https://api.themoviedb.org/3/movie/${movie.id}/images`,
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDQ1YWE3Y2RmNDUwOWEwYTZmOGFkOGM5MzI0OGU3YiIsIm5iZiI6MTc0NDEwNTI3MS43OTUsInN1YiI6IjY3ZjRlZjM3N2I0M2JkY2UyMGFkNzhmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xagzj_3zSaW3kPFmOTb3lCTj9LE932yYEJ7PIsGY73Q",
          },
        };
        axios.request(imgOptions).then((response) => {
          posterPath = response.data;
          console.log(posterPath);
        });
        return (
          <div
            key={movie.id}
            className="movie-card w-full max-h-fit p-7 bg-gray-800 rounded-[5px]"
          >
            <h3>{movie.title}</h3>
            <h4>{movie.release_date}</h4>
            <h4>{movie.vote_average}</h4>
            <p className="line-clamp-3">{movie.overview}</p>
            <div className={`text-center`}>
              <img className="w-full" src={posterPath} alt="" />
            </div>
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
