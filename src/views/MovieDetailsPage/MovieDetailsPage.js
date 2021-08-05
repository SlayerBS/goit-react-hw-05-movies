import { useState, useEffect, lazy, Suspense } from "react";
import {
  Switch,
  Route,
  useRouteMatch,
  useParams,
  NavLink,
  useHistory,
  useLocation,
} from "react-router-dom";
import { toast } from "react-toastify";
import * as api from "../../services/api";
import LoaderSpiner from "../../Components/Loader";

import poster from "../../no-poster.jpg";

import styles from "./MovieDetailsPage.module.css";

const Cast = lazy(() => import("../Cast" /* webpackChunkName:"cast"*/));
const Reviews = lazy(() =>
  import("../Reviews" /* webpackChunkName:"reviews"*/)
);

export default function MovieDetailsPage() {
  const history = useHistory();
  const location = useLocation();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const { url, path } = useRouteMatch();

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
          : poster,
        vote_average: data.vote_average * 10,
      }))
      .then(setMovie);
  }, [movieId]);

  const onGoBack = () => {
    history.push(location?.state?.from ?? "/");
    return;
  };
  return (
    <>
      {movie && (
        <>
          <button type="button" onClick={onGoBack} class={styles.btn}>
            Go back
          </button>
          <div className={styles["movie-card"]}>
            <div>
              <img src={movie.poster_path} alt={movie.title} />
            </div>
            <div className={styles.info}>
              <h2>
                {movie.title} ({movie.release_date})
              </h2>
              <p>User Score: {movie.vote_average}%</p>
              <h3>Overview</h3>
              {movie.overview && <p>{movie.overview}</p>}
              <h3>Genres</h3>
              <ul className={styles.genres}>
                {movie.genres.map(({ id, name }) => (
                  <li key={id} className={styles.genre}>
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h4>Additional information</h4>
            <NavLink
              to={{
                pathname: `${url}/cast`,
                state: { from: location?.state?.from ?? "/" },
              }}
              className={styles.link}
              activeClassName={styles.active}
            >
              Cast
            </NavLink>
            <NavLink
              to={{
                pathname: `${url}/reviews`,
                state: { from: location?.state?.from ?? "/" },
              }}
              className={styles.link}
              activeClassName={styles.active}
            >
              Reviews
            </NavLink>
          </div>

          <Suspense fallback={<LoaderSpiner />}>
            <Switch>
              <Route path={`${path}/cast`}>
                <Cast />
              </Route>
              <Route path={`${path}/reviews`}>
                <Reviews />
              </Route>
            </Switch>
          </Suspense>
        </>
      )}
    </>
  );
}
