import React, { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../requests";
import { FaPlay, FaInfo } from "react-icons/fa";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

//style
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
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

  const opts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 0,
      showinfo: 0,
      modestbranding: 1,
      fs: 0,
      rel: 0,
      iv_load_policy: 3,
    },
  };

  const handleEnter = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "", { tmdbId: movie.id })
        .then((response) => {
          const urlParams = new URLSearchParams(new URL(response).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div>
      {trailerUrl && (
        <div className="trailer-content">
          <Youtube
            className="trailer"
            videoId={trailerUrl}
            opts={opts}
          ></Youtube>
          <div className="trailer-contents">
            <h1 className="trailer-title">
              {movie?.title || movie?.name || movie?.original_name}
            </h1>

            <h1 className="trailer-description">
              {movie.overview?.substring(0, 150)}...
            </h1>
          </div>

          <div className="banner-fadeBottom-trailer" />
        </div>
      )}
      {!trailerUrl && (
        <>
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
                <button
                  onClick={() => handleEnter(movie)}
                  className="banner-button-play"
                >
                  <FaPlay /> Oynat
                </button>
                <button className="banner-button-moreinfo">
                  <FaInfo /> Daha fazla Bilgi
                </button>
              </div>
            </div>
            <div className="banner-fadeBottom" />
          </header>
        </>
      )}
    </div>
  );
}

export default Banner;
