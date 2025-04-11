import MoviesList from "../components/MoviesList";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const query = params.get("query");

  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/search/movie?query=${query}`,
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

export default SearchResults;
