import { useState, useEffect } from "react";
import { getCredits } from "../../services/api";
import foto from "../../no_foto.jpg";
import { useParams } from "react-router-dom";

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getCredits(movieId).then((data) => setCast(data));
    console.log(cast);
  }, []);
  console.log(cast);
  return (
    <ul>
      Cast
      {cast.map((actor) => {
        actor = {
          ...actor,
          profile_path: actor.profile_path
            ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
            : foto,
        };
        return (
          <li key={actor.id}>
            <img src={actor.profile_path} alt={actor.name} />
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        );
      })}
    </ul>
  );
}
