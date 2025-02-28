import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
// Import Contexts
import MediaContext from "./contexts/MediaContext";
// Import Layouts
import Defaultlayout from "./layouts/DefaultLayout";
// Import Pages
import Homepage from "./pages/HomePage";
import Mediapage from "./pages/MediaPage";
// import "./App.css";

function App() {
  // State Vars
  const [medias, setMedias] = useState([]);

  return (
    <>
      <MediaContext.Provider value={{ medias }}>
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
