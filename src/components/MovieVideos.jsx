import React, { useEffect, useRef, useState } from "react";
import useMovieCalls from "../hooks/useMovieCalls";

const MovieVideos = ({ id }) => {
  const { getMovieVideos, movieVideos } = useMovieCalls();
  const [trailer, setTrailer] = useState([]);

  useEffect(() => {
    getMovieVideos(id);
    const height = (iframeRef.current.offsetWidth * 9) / 16 + "px";
    iframeRef.current.setAttribute("height", height);
  }, []);

  useEffect(() => {
    setTrailer(
      movieVideos.find((vid) => vid.name === "Official Trailer") ||
        movieVideos[0]
    );
  }, [movieVideos]);

  const iframeRef = useRef(null);
  return (
    <>
      {movieVideos && (
        <div>
          <div className="py-2 fs-4 fw-bolder">Trailer</div>
          <iframe
            src={`https://www.youtube.com/embed/${trailer?.key}`}
            ref={iframeRef}
            width="100%"
            height="100%"
            title="video"
          ></iframe>
        </div>
      )}
    </>
  );
};

export default MovieVideos;
