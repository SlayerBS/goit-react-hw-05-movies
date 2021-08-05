import { getTrendingMovies } from "../../services/api";
import { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import ListMovies from "../../Components/ListMovies";

export default function HomeView() {
  // const { url } = useRouteMatch();
  const [trendingMoviesList, setTrendingMoviesList] = useState([]);
  useEffect(() => {
    const movies = getTrendingMovies().then(({ results }) =>
      setTrendingMoviesList(results)
    );
  }, []);
  return (
    <>
      <p>Trending today</p>
      <ListMovies data={trendingMoviesList} />
    </>
  );
}
