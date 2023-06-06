import React, { useEffect, useState } from "react";
//for api
import requests from "../requests";
import axios from "../axios";
//icons
import { FaPlay, FaInfo } from "react-icons/fa";
//libs
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
//style
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  //radndom poster img from trending list for banner

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

  //youtube
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

  //trailer search

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.original_name || "", {
        tmdbId: movie?.id,
      })
        .then((response) => {
          const urlParams = new URLSearchParams(new URL(response).search);
          console.log(urlParams.get("v"));
          setTrailerUrl(urlParams.get("v"));
          document.querySelector(".top-flex").style.marginTop = "-12%";
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div>
      {trailerUrl && (
        <div className="trailer-content">
          <Youtube className="trailer" videoId={trailerUrl} opts={opts} />
          <div className="trailer-contents">
            <h1 className="trailer-title">
              {movie?.title?.toUpperCase() ||
                movie?.name?.toUpperCase() ||
                movie?.original_name?.toUpperCase()}
            </h1>

            {movie.overview ? (
              <h1 className="trailer-description">
                {movie.overview.length > 150
                  ? movie.overview.substring(0, 150) + "..."
                  : movie.overview}
              </h1>
            ) : (
              "movie"
            )}
          </div>
          {/**to softly remove the bottom blackness of youtube api */}
          <div className="banner-fadeBottom-trailer" />
          <div className="banner-fadeBottom-trailer2" />
        </div>
      )}
      {!trailerUrl && (
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
              {movie?.title?.toUpperCase() ||
                movie?.name?.toUpperCase() ||
                movie?.original_name?.toUpperCase()}
            </h1>

            <h1 className="banner-description">
              {movie?.overview?.substring(0, 200)}...
            </h1>
            <div className="banner-buttons">
              <button
                onClick={() => handleClick(movie)}
                className="banner-button-play"
              >
                <FaPlay className="play-button-icon" /> Play
              </button>
              <button className="banner-button-moreinfo">
                <FaInfo className="info-button-icon" /> More Info
              </button>
            </div>
          </div>
          <div className="banner-fadeBottom" />
        </header>
      )}
    </div>
  );
}

export default Banner;
