import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCredits } from "../../services/api";
import foto from "../../no_foto.jpg";
import { toast } from "react-toastify";

import styles from "./Cast.module.css";

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getCredits(movieId).then((data) => {
      if (data.length === 0) {
        toast.error("No cast");
        return;
      }
      setCast(data);
    });
  }, [movieId]);

  return (
    <ul className={styles.cast}>
      {cast.map((actor) => {
        actor = {
          ...actor,
          profile_path: actor.profile_path
            ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
            : foto,
        };
        return (
          <li key={actor.id} className={styles.item}>
            <img src={actor.profile_path} alt={actor.name} />
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        );
      })}
    </ul>
  );
}
