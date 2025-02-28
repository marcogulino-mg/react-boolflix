import { useState } from "react";
import axios from "axios";

export default function Header() {
  // Container Value of search
  const [searchMedia, setSearchMedia] = useState("");

  // API Specs definition
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/search/movie?query=ritorno&include_adult=false&language=en-US&page=1",
    headers: {
      accept: "application/json",
      Authorization: "Bearer 6c2e46075c8f0aaae13ed6e7b661b248",
    },
  };

  // Functions
  function searchMedias() {
    axios
      .request(options)
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
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
        </div>
      </div>
    </header>
  );
}
