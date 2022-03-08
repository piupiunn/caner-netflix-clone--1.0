import React, { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../requests";
import { FaPlay, FaInfo } from "react-icons/fa";

//style
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  console.log(movie);

  return (
    <div>
      <header
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(
              https://image.tmdb.org/t/p/original${movie?.backdrop_path}
              )`,
          backgroundPosition: "center center",
        }}
        className="banner"
      >
        <div className="banner-contents">
          <h1 className="banner-title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>

          <h1 className="banner-description">
            {movie.overview?.substring(0, 150)}...
          </h1>
          <div className="banner-buttons">
            <button className="banner-button-play">
              {" "}
              <FaPlay /> Oynat
            </button>
            <button className="banner-button-moreinfo">
              <FaInfo /> Daha fazla Bilgi
            </button>
          </div>
        </div>
        <div className="banner-fadeBottom" />
      </header>
    </div>
  );
}

export default Banner;
