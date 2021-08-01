import { Switch, Route } from "react-router-dom";
import Container from "./Components/Container/Container";
import AppBar from "./Components/AppBar/AppBar";
import HomeView from "./views/HomeView";
import MoviesView from "./views/MoviesView";

function App() {
  return (
    <Container>
      <AppBar />
      <Route path="/" exact>
        <HomeView />
      </Route>
      <Route path="/movies">
        <MoviesView />
      </Route>
    </Container>
  );
}

export default App;
