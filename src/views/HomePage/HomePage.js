import { getTrendingMovies } from "../../services/api";
import { useState, useEffect } from "react";
import ListMovies from "../../Components/ListMovies";

export default function HomeView() {
  // const { url } = useRouteMatch();
  const [trendingMoviesList, setTrendingMoviesList] = useState([]);
  useEffect(() => {
    getTrendingMovies().then(({ results }) => setTrendingMoviesList(results));
  }, []);
  return (
    <>
      <p>Trending today</p>
      <ListMovies data={trendingMoviesList} />
    </>
  );
}
