import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ mov, getVoteClass }) => {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";
  const navigate = useNavigate();

  return (
    <div className="row mx-auto">
      <div className="col px-0">
        <div
          className="movie-card "
          style={{ width: "250px" }}
          onClick={() => navigate(`movies/${mov.id}`, { state: mov.id })}
        >
          {mov.poster_path ? (
            <img
              className="movie-img w-100  "
              src={`${IMAGE_PATH}${mov.poster_path}`}
            />
          ) : (
            <div className="movie-placeholder">No Images Found</div>
          )}
          <div className="d-flex justify-content-between align-items-center pt-1 pb-3">
            <h5 className="movie-title  mb-0">{mov.title}</h5>
            <span className={`tag ${getVoteClass(mov.vote_average)}`}>
              {mov.vote_average.toFixed(1)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
