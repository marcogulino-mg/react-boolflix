export default function Media(props) {
  // Languages list
  const flags = {
    cn: "https://flagcdn.com/w40/cn.png",
    zh: "https://flagcdn.com/w40/cn.png",
    es: "https://flagcdn.com/w40/es.png",
    en: "https://flagcdn.com/w40/gb.png",
    hi: "https://flagcdn.com/w40/in.png",
    pt: "https://flagcdn.com/w40/pt.png",
    bn: "https://flagcdn.com/w40/bd.png",
    ru: "https://flagcdn.com/w40/ru.png",
    ja: "https://flagcdn.com/w40/jp.png",
    yue: "https://flagcdn.com/w40/hk.png",
    vi: "https://flagcdn.com/w40/vn.png",
    it: "https://flagcdn.com/w40/it.png",
    de: "https://flagcdn.com/w40/de.png",
    fr: "https://flagcdn.com/w40/fr.png",
    pl: "https://flagcdn.com/w40/pl.png",
    ar: "https://flagcdn.com/w40/sa.png",
    sw: "https://flagcdn.com/w40/ke.png",
    mr: "https://flagcdn.com/w40/in.png",
    ta: "https://flagcdn.com/w40/in.png",
    tr: "https://flagcdn.com/w40/tr.png",
    sh: "https://flagcdn.com/w40/rs.png",
    sv: "https://flagcdn.com/w40/se.png",
    el: "https://flagcdn.com/w40/gr.png",
    xx: "missing",
  };

  // Function
  const convertVote = (vote) => {
    let newVote = Math.ceil(vote / 2);
    let imgHTML = [];
    let index = 0;
    do {
      imgHTML.push(
        newVote !== 0 ? (
          <img key={index} src="./img/star-solid.svg" alt="vote star" />
        ) : (
          "Nessun Voto"
        )
      );
      index++;
    } while (index < newVote);

    return imgHTML;
  };

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
            <span>
              {
                <img
                  src={flags[props.media.original_language]}
                  alt={
                    props.media.original_language !== "xx"
                      ? props.media.original_language
                      : "Lingua non riconosciuta"
                  }
                />
              }
            </span>
            <span>Voto: {convertVote(props.media.vote_average)}</span>
          </div>
        </div>
      </div>
    </>
  );
}
