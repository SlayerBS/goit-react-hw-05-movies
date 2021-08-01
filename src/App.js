import { Switch, Route } from "react-router-dom";
import Container from "./Components/Container/Container";
import AppBar from "./Components/AppBar/AppBar";
import HomeView from "./views/HomeView";
import MoviesView from "./views/MoviesView";
import NotFoundView from "./views/NotFoundView";

function App() {
  return (
    <Container>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <HomeView />
        </Route>
        <Route path="/movies">
          <MoviesView />
        </Route>
        <Route path="/movies/:moviesId">TEXT</Route>
        <Route>
          <NotFoundView />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
