import React from "react";
//comps
import Row from "./rows/Row";
import requests from "./requests";
import Banner from "./banner/Banner";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
//style
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        netflixOriginals
      />
      <Row title="Science Fiction" fetchUrl={requests.fetchScienceFiction} />
      <div className="numbers">
        <img src="./img/1.png" alt="*" />
        <img src="./img/2.png" alt="*" />
        <img src="./img/3.png" alt="*" />
        <img src="./img/4.png" alt="*" />
        <img src="./img/5.png" alt="*" />
      </div>
      <Row
        title="Today's Most Viewed"
        fetchUrl={requests.fetchTrending}
        isLargeRow
      />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Comedies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Crime Movies" fetchUrl={requests.fetchCrimeMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Romantic" fetchUrl={requests.fetchRomanceMovies} />
      <Footer />
    </div>
  );
}

export default App;
