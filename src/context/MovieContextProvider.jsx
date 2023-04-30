import React, { createContext, useContext } from "react";

const MovieContext = createContext();

const MovieContextProvider = ({ children }) => {
  const apiKey = process.env.REACT_APP_MOVIE_API_KEY;

  return (
    <MovieContext.Provider value={{ apiKey }}>{children}</MovieContext.Provider>
  );
};

export default MovieContextProvider;

//! Custom Hook
export const useMovieContext = () => {
  return useContext(MovieContext);
};
