import React, { useState, useEffect } from "react";
import { Link, useRouteMatch, useHistory, useLocation } from "react-router-dom";
import SearchBar from "../../Components/SearchBar/SearchBar";
import { ToastContainer, toast } from "react-toastify";
import { getMoviesByQuery } from "../../services/api";
import ListMovies from "../../Components/ListMovies";

export default function MoviesView() {
  const history = useHistory();
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (location.search === "") {
      return;
    }
    const newSearch = new URLSearchParams(location.search).get("query");
    setSearchQuery(newSearch);
  }, [history, location]);

  useEffect(() => {
    console.log("location", location);
    searchQuery && getMovies();
  }, [searchQuery]);

  const onSubmit = (searchQuery) => {
    setMovies([]);
    setSearchQuery(searchQuery);
    history.push({ ...location, search: `query=${searchQuery}` });
  };

  const getMovies = () => {
    getMoviesByQuery(searchQuery).then(({ results }) => setMovies(results));
    console.log(movies);
  };

  return (
    <>
      <p>Movies</p>
      <SearchBar onSubmit={onSubmit} />
      <ListMovies data={movies} />
    </>
  );
}
