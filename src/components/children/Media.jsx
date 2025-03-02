export default function Media(props) {
  return (
    <>
      <div className="media-card">
        <img
          src={
            props.media.poster_path
              ? "https://image.tmdb.org/t/p/w342" + props.media.poster_path
              : props.media.profile_path
              ? "https://image.tmdb.org/t/p/w342" + props.media.profile_path
              : "https://ih1.redbubble.net/image.4905811357.8675/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
          }
          alt={props.media.title ? props.media.title : props.media.name}
        />
        <div className="hover-card">
          <div className="hover-content">
            <h2 className="title">Titolo:</h2>
            <h3 className="title-name">
              {props.media.title ? props.media.title : props.media.name}
            </h3>
            <h2 className="title">Titolo Originale:</h2>
            <h3 className="title-name">
              {props.media.original_title
                ? props.media.original_title
                : props.media.original_name}
            </h3>
            <span>{props.media.original_language}</span>
            <span>Voto: {props.media.vote_average}</span>
          </div>
        </div>
      </div>
    </>
  );
}
