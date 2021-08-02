import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {
  api_key: "e0f5a2b3f12c3f7ea9352edce7e33432",

  page: 1,
};

async function getTrendingMovies() {
  const { data } = await axios
    .get("/trending/movie/day")
    .then((data) => data)
    .catch(function (error) {
      toast.error(error);
    });
  return data;
}

async function getMovieById(movieId) {
  console.log(movieId);
  const { data } = await axios
    .get(
      `/movie/${movieId}`
      // {
      // params: { movie_id: movieId },
      // }
    )
    .then((data) => data)
    .catch(function (error) {
      toast.error(error);
    });
  return data;
}

async function getMoviesByQuery(searchQuery) {
  const { data } = await axios
    .get("/search/movie?", {
      params: { query: searchQuery },
    })
    .then((data) => data)
    .catch(function (error) {
      toast.error(error);
    });
  return data;
}

export { getTrendingMovies, getMovieById, getMoviesByQuery };
