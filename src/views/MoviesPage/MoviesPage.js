import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import SearchBar from "../../Components/SearchBar/SearchBar";
import { toast } from "react-toastify";
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
    searchQuery && getMovies();
  }, [searchQuery]);

  const onSubmit = (searchQuery) => {
    setMovies([]);

    setSearchQuery(searchQuery);
    history.push({ ...location, search: `query=${searchQuery}` });
  };

  const getMovies = () => {
    getMoviesByQuery(searchQuery).then(({ results }) => {
      if (results.length === 0) {
        toast.error("No movies");
        return;
      }
      setMovies(results);
    });
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      <ListMovies data={movies} />
    </>
  );
}
