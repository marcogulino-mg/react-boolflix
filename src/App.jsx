import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
// Import Contexts
import MediaContext from "./contexts/MediaContext";
// Import Pages
import Homepage from "./pages/HomePage";
import Mediapage from "./pages/MediaPage";
// import "./App.css";

function App() {
  // State Vars
  const [medias, setMedias] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index Component={Homepage} />
          <Route path="search" Component={Mediapage} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
