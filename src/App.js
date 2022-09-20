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
        topFlex
      />
      <Row title="Science Fiction" fetchUrl={requests.fetchScienceFiction} />

      <Row title="Today's Most Viewed" fetchUrl={requests.fetchTrending} />
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
