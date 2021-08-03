import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Container from "./Components/Container/Container";
import AppBar from "./Components/AppBar/AppBar";
import LoaderSpiner from "./Components/Loader/";

const MoviesView = lazy(() =>
  import("./views/MoviesView" /* webpackChunkName:"movies-view"*/)
);
const NotFoundView = lazy(() =>
  import("./views/NotFoundView" /* webpackChunkName:"notFound-view"*/)
);
const MovieDetailView = lazy(() =>
  import("./views/MovieDetailView" /* webpackChunkName:"moviesDetail-view"*/)
);

const HomeView = lazy(() =>
  import("./views/HomeView" /* webpackChunkName:"home-view"*/)
);

function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<LoaderSpiner />}>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>

          <Route path="/movies" exact>
            <MoviesView />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailView />
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
