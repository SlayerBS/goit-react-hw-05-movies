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
      <h3>Trending today</h3>
      <ListMovies data={trendingMoviesList} />
    </>
  );
}
