// IMPORT Media.jsx
import Media from "./children/Media";
// IMPORT Contexts
import { useContext } from "react";
import PostContext from "../contexts/MediaContext";

export default function Medialist() {
  const { medias } = useContext(PostContext);

  return (
    <>
      <h2>MediaList</h2>
      <Media />
    </>
  );
}
