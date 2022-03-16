import React from "react";
//comps
import Row from "./rows/Row";
import requests from "./requests";
import Banner from "./banner/Banner";
import Navbar from "./navbar/Navbar";
import Footer from "./banner/footer/Footer";
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
      <Row title="Bilim Kurgu" fetchUrl={requests.fetchScienceFiction} />
      <div className="numbers">
        <img src="./img/1.png" alt="*" />
        <img src="./img/2.png" alt="*" />
        <img src="./img/3.png" alt="*" />
        <img src="./img/4.png" alt="*" />
        <img src="./img/5.png" alt="*" />
      </div>
      <Row
        title="Bugünün En Çok İzlenenleri"
        fetchUrl={requests.fetchTrending}
        isLargeRow
      />
      <Row title="Korku Filmleri" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Komediler" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Aksiyon Filmleri" fetchUrl={requests.fetchActionMovies} />
      <Row title="Suç Konulu Filmler" fetchUrl={requests.fetchCrimeMovies} />
      <Row title="Belgeseller" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Romantik" fetchUrl={requests.fetchRomanceMovies} />
      <Footer />
    </div>
  );
}

export default App;
