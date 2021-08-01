import { getTrendingMovies } from "../services/api";
import { useEffect } from "react";
export default function HomeView() {
  useEffect(() => {
    getTrendingMovies().then(({ results }) => console.log(results));
  }, []);

  //   console.log(movies);

  return (
    <>
      <p>Trending today</p>
    </>
  );
}
