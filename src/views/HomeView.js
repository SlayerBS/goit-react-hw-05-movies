import { getTrendingMovies } from "../services/api";
import { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";

export default function HomeView() {
  // const { url } = useRouteMatch();
  const [trendingMoviesList, setTrendingMoviesList] = useState([]);
  useEffect(() => {
    const movies = getTrendingMovies().then(({ results }) =>
      setTrendingMoviesList(results)
    );
  }, []);

  //   console.log(movies);
  console.log(trendingMoviesList);
  return (
    <>
      <p>Trending today</p>
      <ul>
        {trendingMoviesList.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
