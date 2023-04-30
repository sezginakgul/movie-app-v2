import axios from "axios";
import { useMovieContext } from "../context/MovieContextProvider";
import { useState } from "react";
const BASE_URL = "https://api.themoviedb.org/3/";

const useMovieCalls = () => {
  const { apiKey } = useMovieContext();
  const [movies, setMovies] = useState([]);
  const [movieDetails, setMovieDetails] = useState([]);
  const [searchMovie, setSearchMovie] = useState([]);
  const [movieCasts, setMovieCasts] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [movieVideos, setMovieVideos] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [topRated, setTopRated] = useState([]);

  //!------------- GET CALLS ----------------
  const getMovies = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/discover/movie`, {
        params: {
          api_key: apiKey,
        },
      });
      setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const getMovieDetails = async (movieId) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/movie/${movieId}`, {
        params: {
          api_key: apiKey,
        },
      });
      setMovieDetails(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getSearchMovie = async (searchKey) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/search/movie`, {
        params: {
          api_key: apiKey,
          query: searchKey,
        },
      });
      setSearchMovie(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getMovieCasts = async (movie_id) => {
    try {
      const { data } = await axios.get(`${BASE_URL}movie/${movie_id}/credits`, {
        params: {
          api_key: apiKey,
        },
      });
      setMovieCasts(data.cast);
    } catch (error) {
      console.log(error);
    }
  };

  const getSimilarMovies = async (movie_id) => {
    try {
      const { data } = await axios.get(`${BASE_URL}movie/${movie_id}/similar`, {
        params: {
          api_key: apiKey,
        },
      });
      setSimilarMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const getMovieVideos = async (movie_id) => {
    try {
      const { data } = await axios.get(`${BASE_URL}movie/${movie_id}/videos`, {
        params: {
          api_key: apiKey,
          language: "en-US",
        },
      });
      setMovieVideos(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const getUpcomingMovies = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}movie/upcoming`, {
        params: {
          api_key: apiKey,
          language: "en-US",
        },
      });
      setUpcomingMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const getTopRatedMovies = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}movie/top_rated`, {
        params: {
          api_key: apiKey,
          language: "en-US",
        },
      });
      setTopRated(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getMovies,
    movies,
    getMovieDetails,
    movieDetails,
    getSearchMovie,
    searchMovie,
    getMovieCasts,
    movieCasts,
    getSimilarMovies,
    similarMovies,
    getMovieVideos,
    movieVideos,
    getUpcomingMovies,
    upcomingMovies,
    getTopRatedMovies,
    topRated,
  };
};

export default useMovieCalls;
