// IMPORT Media.jsx
import Media from "./children/Media";
// IMPORT Contexts
import { useContext } from "react";
import MediaContext from "../contexts/MediaContext";

export default function Medialist() {
  // List of Medias (TV Series, Movies)
  const { movies, tvSeries } = useContext(MediaContext);

  return (
    <>
      <h2>MOVIES</h2>
      <div className="container-media">
        {movies.results !== undefined ? (
          movies.results.map((media) => <Media key={media.id} media={media} />)
        ) : (
          <h2>Nessun Film Trovato</h2>
        )}
      </div>
      <h2>TV SERIES</h2>
      <div className="container-media">
        {movies.results !== undefined ? (
          tvSeries.results.map((media) => (
            <Media key={media.id} media={media} />
          ))
        ) : (
          <h2>Nessuna Serie TV Trovata</h2>
        )}
      </div>
    </>
  );
}
