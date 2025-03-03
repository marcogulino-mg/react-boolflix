import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
// IMPORT Contexts
import MediaContext from "./contexts/MediaContext";
// IMPORT Layouts
import Defaultlayout from "./layouts/DefaultLayout";
// IMPORT Pages
import Homepage from "./pages/HomePage";
import Mediapage from "./pages/MediaPage";
// IMPORT "./App.css";

function App() {
  // State Vars
  // Movies
  const [movies, setMovies] = useState([]);
  // TV Series
  const [tvSeries, setTvSeries] = useState([]);
  // Container Value of search
  const [searchMedia, setSearchMedia] = useState("");

  // Functions
  function scrollMedia(numPage, choice, searchMedia, typeMedia) {
    const apiKey = "6c2e46075c8f0aaae13ed6e7b661b248";

    axios
      .get(
        `https://api.themoviedb.org/3/search/${typeMedia}?api_key=${apiKey}&query=${searchMedia}&include_adult=true&language=en-US&page=${numPage}`
      )
      .then((res) => (choice ? setMovies(res.data) : setTvSeries(res.data)))
      .catch((err) => console.error(err));
  }

  return (
    <>
      <MediaContext.Provider
        value={{
          movies,
          setMovies,
          tvSeries,
          setTvSeries,
          scrollMedia,
          searchMedia,
          setSearchMedia,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route Component={Defaultlayout}>
              <Route index Component={Homepage} />
              <Route path="search" Component={Mediapage} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MediaContext.Provider>
    </>
  );
}

export default App;
