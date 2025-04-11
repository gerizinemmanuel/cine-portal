import MoviesList from "../components/MoviesList";

const InitPage = () => {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/popular",
    params: { language: "pt-BR", page: "1" },
    headers: {
      accept: "application/json",
    },
  };
  return <MoviesList options={options} />;
};

export default InitPage;
