import MoviesList from "../components/MoviesList";

const InitPage = () => {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/trending/all/week",
    params: { language: "pt-PT" },
    headers: {
      accept: "application/json",
    },
  };
  return (
    <>
      <MoviesList options={options} />
    </>
  );
};

export default InitPage;
