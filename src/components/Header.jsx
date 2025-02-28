import { useState, useContext } from "react";
import axios from "axios";
// IMPORT Contexts
import MediaContext from "../contexts/MediaContext";

export default function Header() {
  // List of Medias (TV Series, Movies)
  const { medias, setMedias } = useContext(MediaContext);

  // Container Value of search
  const [searchMedia, setSearchMedia] = useState([]);

  // Functions
  function searchMedias() {
    const apiKey = "6c2e46075c8f0aaae13ed6e7b661b248";
    let querySearch = searchMedia;
    let numPage = 1;
    axios
      .get(
        `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${querySearch}&include_adult=true&language=en-US&page=${numPage}`
      )
      .then((res) => setMedias(res.data))
      .catch((err) => console.error(err));
  }

  function print() {
    console.log(medias);
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
            onChange={(e) => setSearchMedia(e.target.value)}
          />
          <button onClick={searchMedias}>Search</button>
          <button onClick={print}>DEBUG</button>
        </div>
      </div>
    </header>
  );
}
