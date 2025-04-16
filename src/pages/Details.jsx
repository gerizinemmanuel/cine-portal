import { useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../components/Header";

const Details = () => {
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  const [movieDetails, setMovieDetails] = useState({});
  const [genresList, setGenresList] = useState([]);

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const movieID = params.get("movieID");
  const mediaType = params.get("mediaType");
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/${mediaType}/${movieID}`,
    params: { language: "pt-PT" },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  };

  useEffect(() => {
    axios.request(options).then((response) => {
      setMovieDetails(response.data);
      console.log(response.data);
    });
  }, []);
  useEffect(() => {
    setGenresList(movieDetails.genres);
  }, [movieDetails]);

  return (
    <>
      <Header className="header-bg-2" />
      <div
        id="box-details"
        className="flex justify-center gap-[2%] px-[5%] py-10"
      >
        <div className="text max-w-100 flex flex-col gap-5">
          <h2 className="text-[3.5rem] font-bold">
            {movieDetails.title || movieDetails.name}
          </h2>
          {movieDetails.release_date && (
            <h4>Data de lançamento: {movieDetails.release_date}</h4>
          )}
          {movieDetails.first_air_date && (
            <h4>Primeira exibição: {movieDetails.first_air_date}</h4>
          )}
          {movieDetails.last_air_date && (
            <h4>Última exibição: {movieDetails.last_air_date}</h4>
          )}
          <h3>Sinopse</h3>
          <p className="text-justify">{movieDetails.overview}</p>
          {movieDetails.number_of_seasons && (
            <p>Número de temporadas: {movieDetails.number_of_seasons}</p>
          )}
          {movieDetails.number_of_episodes && (
            <p>Número de episódios: {movieDetails.number_of_episodes}</p>
          )}
          <p>
            Géneros:{" "}
            {genresList &&
              genresList.map((genre) => {
                const isLast = genre == genresList[genresList.length - 1];
                return (
                  <>
                    {genre.name}
                    {isLast ? "." : ", "}
                  </>
                );
              })}
          </p>
          {/* Géneros*/}

          <p>Idioma original: {movieDetails.original_language}</p>
          <p>Popularidade: {movieDetails.popularity}</p>
          <p>Número de votos: {movieDetails.vote_count}</p>
          <p>Média de votos: {movieDetails.vote_average}</p>
        </div>
        <div className="box-img max-w-100">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
            alt=""
            className=""
          />
        </div>
      </div>
    </>
  );
};

export default Details;
