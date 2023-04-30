import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useMovieCalls from "../hooks/useMovieCalls";

const SimilarMovieList = ({ id }) => {
  const { getSimilarMovies, similarMovies } = useMovieCalls();
  const navigate = useNavigate();
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w300";

  useEffect(() => {
    getSimilarMovies(id);
  }, []);

  const clickFunc = async (i) => {
    await navigate("/");
    await navigate(`/movies/${i.id}`, { state: i.id });
  };

  return (
    <>
      {similarMovies?.length !== 0 && (
        <div>
          <div className="py-2 fs-4 fw-bolder">Similar Movies</div>

          <div className="d-flex flex-wrap">
            {similarMovies.map((sim) => (
              <div
                className="py-1 side-line"
                style={{ minWidth: "95px" }}
                onClick={() => clickFunc(sim)}
                key={sim?.id}
              >
                <div className="d-flex flex-column align-items-center">
                  <div>
                    {sim?.poster_path ? (
                      <img
                        src={`${IMAGE_PATH}${sim?.poster_path}`}
                        width={"70px"}
                        alt=""
                        className="mx-auto"
                      />
                    ) : (
                      <div className="movie-placeholder-side">
                        No Images Found
                      </div>
                    )}
                  </div>
                  <div className="cast-name" style={{ width: "70px" }}>
                    {sim?.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default SimilarMovieList;
