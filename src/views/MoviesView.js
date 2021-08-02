import React, { useState, useEffect } from "react";
import SearchBar from "../Components/SearchBar/SearchBar";
import { ToastContainer, toast } from "react-toastify";
import { getMoviesByQuery } from "../services/api";
import { Link, useRouteMatch } from "react-router-dom";
import ListMovies from "../Components/ListMovies";

export default function MoviesView() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    searchQuery && getMovies();
  }, [searchQuery]);

  const onSubmit = (searchQuery) => {
    setMovies([]);
    setSearchQuery(searchQuery);
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
