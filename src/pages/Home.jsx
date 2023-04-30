import React, { useEffect, useState } from "react";
import useMovieCalls from "../hooks/useMovieCalls";
import { useNavigate } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const {
    getMovies,
    movies,
    getUpcomingMovies,
    upcomingMovies,
    getTopRatedMovies,
    topRated,
    getSearchMovie,
    searchMovie,
  } = useMovieCalls();
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";
  const [searchKey, setSearchKey] = useState("");
  const [flag, setFlag] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getMovies();
    getUpcomingMovies();
    getTopRatedMovies();
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

  const searchMovies = async (e) => {
    e.preventDefault();
    if (!searchKey) {
      return alert("Please enter a word.");
    }
    await getSearchMovie(searchKey);
    setFlag(true);
  };

  return (
    <div className="parent pb-3">
      <header className="header d-flex align-items-center">
        <h1 onClick={() => navigate("/")}>Movies</h1>

        <form action="" onSubmit={searchMovies} className="d-flex">
          <input
            className="bg-dark text-white ps-2 mx-2 rounded-2"
            type="text"
            placeholder="Search Movie"
            onChange={(e) => setSearchKey(e.target.value)}
            style={{
              outline: "none",
              border: "none",
              width: "150px",
            }}
          />
          <button className="btn btn-dark" type="submit">
            Search
          </button>
        </form>
      </header>

      <div className="container-fluid px-5">
        <div className="row ">
          <div className=" col-md-8 col-lg-9 col-xl-10  ">
            <div className="d-flex flex-wrap gap-1">
              {!flag
                ? movies?.map((mov) => (
                    <>
                      <MovieCard
                        key={mov.id}
                        mov={mov}
                        getVoteClass={getVoteClass}
                      />
                    </>
                  ))
                : searchMovie?.results?.map((mov) => (
                    <>
                      <MovieCard
                        key={mov.id}
                        mov={mov}
                        getVoteClass={getVoteClass}
                      />
                    </>
                  ))}
            </div>
          </div>

          <div className="col ">
            <div
              className="row rounded-2 overflow-hidden "
              style={{ backgroundColor: "#212125" }}
            >
              <div className="text-center fw-bold fs-5">Top Rated</div>
              {topRated?.slice(0, 5).map((rate, i) => (
                <div
                  key={i}
                  className="d-flex p-1 align-items-center side-line"
                  onClick={() =>
                    navigate(`movies/${rate.id}`, { state: rate.id })
                  }
                >
                  <div>{i + 1})</div>
                  <div className="px-1">
                    {rate.poster_path ? (
                      <img
                        className="rounded"
                        style={{ width: "70px" }}
                        src={`${IMAGE_PATH}${rate.poster_path}`}
                      />
                    ) : (
                      <div className="movie-placeholder-side">
                        No Images Found
                      </div>
                    )}
                  </div>
                  <div>
                    {rate.original_title}
                    <span className={`tag ${getVoteClass(rate.vote_average)}`}>
                      {rate.vote_average.toFixed(1)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div
              className="row mt-4 rounded-2 overflow-hidden"
              style={{ backgroundColor: "#212125" }}
            >
              <div className="text-center fw-bold fs-5">Coming Soon</div>
              {upcomingMovies?.slice(0, 5).map((come, i) => (
                <div
                  key={i}
                  className="d-flex p-1 align-items-center side-line"
                  onClick={() =>
                    navigate(`movies/${come.id}`, { state: come.id })
                  }
                >
                  <div>{i + 1})</div>
                  <div className="px-1">
                    {come.poster_path ? (
                      <img
                        className="rounded"
                        style={{ width: "70px" }}
                        src={`${IMAGE_PATH}${come.poster_path}`}
                      />
                    ) : (
                      <div className="movie-placeholder-side">
                        No Images Found
                      </div>
                    )}
                  </div>
                  <div>
                    {come.original_title}{" "}
                    <span className={`tag ${getVoteClass(come.vote_average)}`}>
                      {come.vote_average.toFixed(1)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
