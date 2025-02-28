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

  return (
    <>
      <MediaContext.Provider
        value={{ movies, setMovies, tvSeries, setTvSeries }}
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
