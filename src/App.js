import Row from "./rows/Row";
import requests from "./requests";
import Banner from "./banner/Banner";

import "./App.css";
import Navbar from "./navbar/Navbar";

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
    </div>
  );
}

export default App;
