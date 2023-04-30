import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useMovieCalls from "../hooks/useMovieCalls";
import CastList from "../components/CastList";
import MovieVideos from "../components/MovieVideos";
import SimilarMovieList from "../components/SimilarMovieList";

const Details = () => {
  const { state } = useLocation();
  const { getMovieDetails, movieDetails } = useMovieCalls();

  const navigate = useNavigate();
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280";

  useEffect(() => {
    getMovieDetails(state);
  }, []);

  const getVoteClass = (vote) => {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 6) {
      return "orange";
    } else {
      return "red";
    }
  };
  return (
    <div className="details">
      <header className="header">
        <h1 onClick={() => navigate("/")}>Movies</h1>

        <div></div>
      </header>

      <div className="d-flex align-items-center justify-content-center">
        <div className="row container d-flex  justify-content-center align-items-center ">
          <div
            className="col-md-3 mb-3 mb-md-0  poster"
            style={{
              backgroundImage: `url(${IMAGE_PATH}${movieDetails?.backdrop_path})`,
            }}
          ></div>
          <div className="col col-md-7 ms-0 ms-md-4">
            <div className="d-flex justify-content-between align-items-center">
              <div className="title fw-bold display-3 ">
                {movieDetails?.original_title || movieDetails?.name}
              </div>
              <div className="fw-bold display-6">
                <span
                  className={`tag ${getVoteClass(movieDetails?.vote_average)}`}
                >
                  {movieDetails?.vote_average?.toFixed(1)}
                </span>
              </div>
            </div>
            <div className=" fs-6 py-4">
              {movieDetails?.genres?.slice(0, 5).map((genre) => (
                <span
                  className="genres border p-2 me-3 rounded-1"
                  key={genre.id}
                >
                  {genre.name}
                </span>
              ))}
            </div>
            <div className="overview fs-6">{movieDetails?.overview}</div>
            <div className="cast fw-bold py-3 fs-3">Casts</div>
            {movieDetails?.id && <CastList id={movieDetails.id} />}
          </div>
          <div className="row py-4">
            {movieDetails?.id && <MovieVideos id={movieDetails.id} />}
          </div>
          <div className="row pb-4">
            {movieDetails?.id && <SimilarMovieList id={movieDetails.id} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
