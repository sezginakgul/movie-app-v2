import React, { useEffect } from "react";
import useMovieCalls from "../hooks/useMovieCalls";

const CastList = ({ id }) => {
  const { getMovieCasts, movieCasts } = useMovieCalls();
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w185";

  useEffect(() => {
    getMovieCasts(id);
  }, [id]);

  return (
    <div>
      <div className="d-flex flex-wrap">
        {movieCasts?.slice(0, 5).map((cast) => (
          <div className="py-1" style={{ minWidth: "95px" }} key={cast?.id}>
            <div className="d-flex flex-column align-items-center">
              <div>
                {cast?.profile_path ? (
                  <img
                    src={`${IMAGE_PATH}${cast?.profile_path}`}
                    width={"70px"}
                    alt=""
                    className="mx-auto"
                  />
                ) : (
                  <div className="movie-placeholder-side">No Images Found</div>
                )}
              </div>
              <div className="cast-name" style={{ width: "70px" }}>
                {cast?.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CastList;
