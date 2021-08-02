import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as api from "../services/api";

export default function MovieDetailView() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  console.log(movieId);

  useEffect(() => {
    api
      .getMovieById(movieId)
      .then((data) => ({
        ...data,
        release_date: data.release_date
          ? data.release_date.slice(0, 4)
          : "No Date",
        poster_path: data.poster_path
          ? `https://image.tmdb.org/t/p/w300${data.poster_path}`
          : "../no-poster.jpg",
        vote_average: data.vote_average * 10,
      }))
      .then(setMovie);
  }, [movieId]);

  console.log(movie);
  //   const { title, genres, poster_path } = movie;

  return (
    <>
      {movie && (
        <div>
          <div>
            <img src={movie.poster_path} alt={movie.title} />
          </div>
          <div>
            <h2>{movie.title}</h2>
            <p>User Score: {movie.vote_average}%</p>
            <h3>Overview</h3>
            {movie.overview && <p>{movie.overview}</p>}
            <h4>Genres</h4>
            <ul>
              {movie.genres.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
