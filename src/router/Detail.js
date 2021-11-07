import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Detail.css";
const Detail = () => {
  const [movie, setMovie] = useState("");
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const getDetail = async () => {
    const detail = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(detail.data.movie);
    console.log(movie);
    setLoading(false);
  };
  useEffect(() => {
    getDetail();
  }, []);
  var sectionStyle = {
    height: "100vh",
    backgroundPosition: "50%",
    backgroundImage: "url(" + movie.background_image_original + ")",
    backgroundSize: "cover",
  };
  return (
    <div>
      {loading ? (
        "Loading...."
      ) : (
        <div style={sectionStyle}>
          <img src={movie.medium_cover_image} alt={movie.id}></img>
        </div>
      )}
    </div>
  );
};
export default Detail;
