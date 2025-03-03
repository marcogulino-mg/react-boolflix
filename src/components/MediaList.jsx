// IMPORT Media.jsx
import Media from "./children/Media";
// IMPORT Contexts
import { useContext, useState, useEffect } from "react";
import MediaContext from "../contexts/MediaContext";

export default function Medialist() {
  // List of Medias (TV Series, Movies)
  const { movies, tvSeries, scrollMedia, searchMedia } =
    useContext(MediaContext);

  const [counterMovies, setCounterMovies] = useState(1);
  const [counterTvSeries, setCounterTvSeries] = useState(1);

  useEffect(
    () => scrollMedia(counterMovies, true, searchMedia, "movie"),
    [counterMovies]
  );

  useEffect(
    () => scrollMedia(counterTvSeries, false, searchMedia, "tv"),
    [counterTvSeries]
  );

  return (
    <>
      <h2>MOVIES</h2>
      <div className="container-media">
        {movies.results !== undefined && movies.results.length > 0 ? (
          movies.results.map((media) => <Media key={media.id} media={media} />)
        ) : (
          <h2>Nessun Film Trovato</h2>
        )}
      </div>
      <ul className="direction-sel">
        <li>
          <img
            onClick={() => {
              if (counterMovies > 1)
                setCounterMovies((currMovie) => currMovie - 1);
            }}
            src="./img/backward-solid.svg"
            alt="backward arrow"
            className="arrow"
          />
        </li>
        <li>
          <img
            onClick={() => {
              if (counterMovies < movies.total_pages)
                setCounterMovies((currMovie) => currMovie + 1);
            }}
            src="./img/forward-solid.svg"
            alt="forward arrow"
            className="arrow"
          />
        </li>
      </ul>

      <h2>TV SERIES</h2>
      <div className="container-media">
        {tvSeries.results !== undefined && tvSeries.results.length > 0 ? (
          tvSeries.results.map((media) => (
            <Media key={media.id} media={media} />
          ))
        ) : (
          <h2>Nessuna Serie TV Trovata</h2>
        )}
      </div>
      <ul className="direction-sel">
        <li>
          <img
            onClick={() => {
              if (counterMovies < 0)
                setCounterTvSeries((currTvSerie) => currTvSerie - 1);
            }}
            src="./img/backward-solid.svg"
            alt="backward arrow"
            className="arrow"
          />
        </li>
        <li>
          <img
            onClick={() => {
              if (counterMovies < tvSeries.total_pages)
                setCounterTvSeries((currCounter) => currCounter + 1);
            }}
            src="./img/forward-solid.svg"
            alt="forward arrow"
            className="arrow"
          />
        </li>
      </ul>
    </>
  );
}
