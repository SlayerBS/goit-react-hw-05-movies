import { Switch, Route } from "react-router-dom";
import Container from "./Components/Container/Container";
import AppBar from "./Components/AppBar/AppBar";
import HomeView from "./views/HomeView";
import MoviesView from "./views/MoviesView";
import NotFoundView from "./views/NotFoundView";
import MovieDetailView from "./views/MovieDetailView";

function App() {
  return (
    <Container>
      <AppBar />
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
    </Container>
  );
}

export default App;
