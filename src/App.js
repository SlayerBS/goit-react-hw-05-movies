import { lazy, Suspense } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Container from "./Components/Container/Container";
import AppBar from "./Components/AppBar/AppBar";
import LoaderSpiner from "./Components/Loader/";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MoviesPage = lazy(() =>
  import("./views/MoviesPage" /* webpackChunkName:"movies-view"*/)
);
const NotFoundView = lazy(() =>
  import("./views/NotFoundView" /* webpackChunkName:"notFound-view"*/)
);
const MovieDetailsPage = lazy(() =>
  import("./views/MovieDetailsPage" /* webpackChunkName:"moviesDetail-view"*/)
);

const HomePage = lazy(() =>
  import("./views/HomePage" /* webpackChunkName:"home-view"*/)
);

function App() {
  const history = useHistory();
  return (
    <Container>
      <AppBar />
      <ToastContainer autoClose={3000} />
      <Suspense fallback={<LoaderSpiner />}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
