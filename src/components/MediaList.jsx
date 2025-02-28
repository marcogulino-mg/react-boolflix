// IMPORT Media.jsx
import Media from "./children/Media";
// IMPORT Contexts
import { useContext } from "react";
import MediaContext from "../contexts/MediaContext";

export default function Medialist() {
  // List of Medias (TV Series, Movies)
  const { medias } = useContext(MediaContext);

  return (
    <>
      <h2>MediaList</h2>
      <div className="container-media">
        {medias.results !== undefined ? (
          medias.results.map((media) => <Media key={media.id} media={media} />)
        ) : (
          <h2>Campo di ricerca vuoto</h2>
        )}
      </div>
    </>
  );
}
