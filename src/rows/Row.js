import React, { useState, useEffect } from "react";
import axios from "../axios";
import {
  FaRegPlayCircle,
  FaRegThumbsUp,
  FaRegThumbsDown,
  FaRegCheckCircle,
  FaAngleDown,
} from "react-icons/fa";
//style
import "./Row.css";

function Row({ title, fetchUrl, isLargeRow, netflixOriginals }) {
  const [movies, setMovies] = useState([]);
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

      <div className="row-posters">
        {movies.map((movie) => (
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
                style={{ marginRight: "3px", fontSize: "30px" }}
              />
              <FaRegCheckCircle
                style={{ marginRight: "3px", fontSize: "30px" }}
              />
              <FaRegThumbsUp style={{ marginRight: "3px", fontSize: "30px" }} />
              <FaRegThumbsDown
                style={{
                  marginRight: "3px",
                  fontSize: "30px",
                  paddingTop: "1px",
                }}
              />
              <FaAngleDown style={{ position: "absolute", right: "20px" }} />
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              xyz
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Row;
