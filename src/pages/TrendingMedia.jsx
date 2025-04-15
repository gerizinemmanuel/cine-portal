import { useLocation } from "react-router-dom";
import MoviesList from "../components/MoviesList";

const TrendingMedia = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const mediaType = params.get("mediaType");

  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/trending/${mediaType}/week`,
    params: { language: "pt-PT" },
    headers: {
      accept: "application/json",
    },
  };
  return <MoviesList options={options} />;
};

export default TrendingMedia;
