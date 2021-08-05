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

import * as api from "../../services/api";
import poster from "../../no-poster.jpg";
import LoaderSpiner from "../../Components/Loader";

const Cast = lazy(() => import("../Cast"));
const Reviews = lazy(() => import("../Reviews"));

export default function MovieDetailView() {
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

  const handleGoBack = () => {
    return;
  };

  return (
    <>
      {movie && (
        <>
          <button type="button" onClick={handleGoBack}>
            Go back
          </button>
          <div>
            <div>
              <img src={movie.poster_path} alt={movie.title} />
            </div>
            <div>
              <h2>
                {movie.title} ({movie.release_date})
              </h2>
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
          <div>
            <h4>Additional information</h4>
            <NavLink
              to={{
                pathname: `${url}/cast`,
                state: { from: location?.state?.from ?? "/" },
              }}
            >
              Cast
            </NavLink>
            <NavLink
              to={{
                pathname: `${url}/reviews`,
                state: { from: location?.state?.from ?? "/" },
              }}
            >
              Reviews
            </NavLink>
          </div>

          <Suspense fallback={<LoaderSpiner />}>
            <Switch>
              <Route path={`${path}/cast`}>
                <Cast movieId={movieId} />
              </Route>
              <Route path={`${path}/reviews`}>
                <Reviews movieId={movieId} />
              </Route>
            </Switch>
          </Suspense>
        </>
      )}
    </>
  );
}