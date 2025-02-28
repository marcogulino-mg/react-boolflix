import { useState, useContext } from "react";
import axios from "axios";
// IMPORT Contexts
import MediaContext from "../contexts/MediaContext";

export default function Header() {
  // List of Medias (TV Series, Movies)
  const { movies, setMovies, tvSeries, setTvSeries } = useContext(MediaContext);

  // Container Value of search
  const [searchMedia, setSearchMedia] = useState([]);

  // Functions
  function searchMedias() {
    const apiKey = "6c2e46075c8f0aaae13ed6e7b661b248";
    let querySearch = searchMedia;

    // DEBUG
    let numPage = 1;
    let queryTarget;

    const endpoints = [
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${querySearch}&include_adult=true&language=en-US&page=${numPage}`,
      `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${querySearch}&include_adult=true&language=en-US&page=${numPage}`,
    ];

    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then(
        axios.spread(function (movie, tv) {
          setMovies(movie.data);
          setTvSeries(tv.data);
        })
      )
      .catch((err) => console.error(err));
  }

  function handleSearch(value) {
    setSearchMedia(value);
    searchMedias();
  }

  // DEBUG
  function print() {
    console.log(movies);
  }

  return (
    <header>
      <div>
        <h1>BoolFlix</h1>
        <div className="search">
          <input
            type="text"
            name="search"
            id="search"
            value={searchMedia}
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
          />
          {/* <button onClick={print}>DEBUG</button> */}
        </div>
      </div>
    </header>
  );
}
