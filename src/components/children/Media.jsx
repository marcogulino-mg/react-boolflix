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
        {/* <h3>{props.media.title ? props.media.title : props.media.name}</h3> */}
      </div>
    </>
  );
}
