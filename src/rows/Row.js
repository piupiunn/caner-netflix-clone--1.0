import React, { useState, useEffect } from "react";
//api
import axios from "../axios";

//icons
import { AiFillStar } from "react-icons/ai";

//img
import failedPoster from "../imgs/not-found.png";

//style
import "./Row.css";

function Row({ title, fetchUrl, topFlex }) {
  const [movies, setMovies] = useState([]);

  const photo_base_URL = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      console.log(request.data.results);
    };
    fetchData();
  }, [fetchUrl]);

  return (
    <div className={`movies-flex-parent ${topFlex && "top-flex"}`}>
      <h2 className="list-title">{title}</h2>

      <div className={"movie-flex "}>
        {movies?.map((movie) => (
          <div className="movie-parent">
            <div key={movie.id} className="movie-top">
              <img
                className={"poster "}
                src={
                  movie.backdrop_path === null
                    ? failedPoster
                    : `${photo_base_URL}${movie.backdrop_path}`
                }
                alt={movie.name}
              />
            </div>
            <div className="movie-infos">
              <div className="movie-infos-top">
                <div className="rate">
                  <AiFillStar className="rate-star" />{" "}
                  {movie.vote_average.toString().length > 3
                    ? movie.vote_average.toString().substring(0, 3)
                    : movie.vote_average}
                </div>
                <div className="dates">
                  <div className="match-new-date">
                    <h5>{movie.release_date || movie.first_air_date}</h5>
                    {/**date calculation for "new" text */}

                    {movie.release_date?.split("-").reduce((a, b) => a + b) >
                    20220801
                      ? "New"
                      : ""}

                    {movie.first_air_date?.split("-").reduce((a, b) => a + b) >
                    20220801
                      ? "New"
                      : ""}
                  </div>
                </div>
              </div>

              <div className="title-info-and-dates">
                <div className="title-and-info">
                  <h5 className="movie-title">{movie.title || movie.name}</h5>
                  <p>
                    {movie.overview.length > 150
                      ? movie.overview.substring(0, 150) + "..."
                      : movie.overview}
                  </p>
                </div>
              </div>

              <div className="genre">
                {movie.genre_ids?.map((genre_id) => (
                  <p>
                    {genre_id === 28
                      ? "-Action"
                      : genre_id === 12
                      ? "-Adventure"
                      : genre_id === 16
                      ? "-Animation"
                      : genre_id === 35
                      ? "-Comedy"
                      : genre_id === 80
                      ? "-Crime"
                      : genre_id === 99
                      ? "-Documentary"
                      : genre_id === 18
                      ? "-Drama"
                      : genre_id === 10751
                      ? "-Family"
                      : genre_id === 14
                      ? "-Fantasy"
                      : genre_id === 36
                      ? "-History"
                      : ""}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Row;
