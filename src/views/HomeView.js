import { getTrendingMovies } from "../services/api";
import { useState, useEffect } from "react";

export default function HomeView() {
  const [trendingMoviesList, setTrendingMoviesList] = useState([]);
  useEffect(() => {
    const movies = getTrendingMovies().then(({ results }) =>
      setTrendingMoviesList(results)
    );
  }, []);

  //   console.log(movies);

  return (
    <ul>
      {trendingMoviesList.map(({ id, title }) => {
        return <li key={id}>{title}</li>;
      })}
      <p>Trending today</p>
    </ul>
  );
}
