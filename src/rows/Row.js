import React, { useState, useEffect } from "react";
//api
import axios from "../axios";
//icons
import {
  FaRegPlayCircle,
  FaRegThumbsUp,
  FaRegThumbsDown,
  FaRegCheckCircle,
  FaAngleDown,
  FaDotCircle,
} from "react-icons/fa";
//style
import "./Row.css";

function Row({ title, fetchUrl, isLargeRow, netflixOriginals }) {
  const [movies, setMovies] = useState([]);
  const [dates, setDates] = useState([]);

  const photo_base_URL = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      console.log(request);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className={`row ${netflixOriginals && "netflix-originals"}`}>
      <h2 className="list-title">{title}</h2>

      <div className={`row-posters ${isLargeRow && "trend"}`}>
        {movies?.map((movie) => (
          <div key={movie.id} className="all-hover">
            <img
              className={`row-poster ${isLargeRow && "row-poster-large"}`}
              src={`${photo_base_URL}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />

            <div className="icons">
              <FaRegPlayCircle
                style={{
                  marginLeft: "20px",
                  marginRight: "3px",
                  fontSize: "23px",
                }}
              />
              <FaRegCheckCircle
                style={{ marginRight: "3px", fontSize: "23px" }}
              />
              <FaRegThumbsUp style={{ marginRight: "3px", fontSize: "23px" }} />
              <FaRegThumbsDown
                style={{
                  marginRight: "3px",
                  fontSize: "23px",
                  paddingTop: "1px",
                }}
              />
              <FaAngleDown
                style={{
                  marginLeft: "150px",
                  right: "20px",
                  marginBottom: "10px",
                }}
              />
              <br></br>
              <p className="match">
                {/**date calculation for "new" text */}
                {movie.release_date?.split("-").reduce((a, b) => a + b) >
                20220101
                  ? "New"
                  : ""}
              </p>
              <p className="age">16+</p>
              <p className="hour">1sa. 47dk.</p>
              <ul className="genre">
                Komik
                <FaDotCircle className="dot" />
                Eğlenceli
                <FaDotCircle className="dot" /> Heyecanlı
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Row;
