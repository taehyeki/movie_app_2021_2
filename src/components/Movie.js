import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Movie = ({ id, title, summary, coverImg }) => {
  return (
    <div>
      <h3>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h3>
      <img src={coverImg} alt={id}></img>
      <p>{summary ? summary : "Not summary"}</p>
    </div>
  );
};
Movie.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
};
export default Movie;
