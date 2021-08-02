import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as api from "../services/api";

export default function MovieDetailView() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  console.log(movieId);

  useEffect(() => {
    api.getMovieById(movieId).then(setMovie);
  }, [movieId]);

  console.log(movie);
  //   const { title, genres, poster_path } = movie;

  return (
    movie && (
      <div>
        <div></div>
        <div>
          <h2>{movie.title}</h2>
        </div>
      </div>
    )
  );
}
