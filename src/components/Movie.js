import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";
const Movie = ({ id, title, summary, year, coverImg }) => {
  return (
    <div className={styles.movie}>
      <img src={coverImg} alt={title} className={styles.movie__img} />
      <div>
        <h2 className={styles.movie__title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <h3 className={styles.movie__year}>{year}</h3>
        <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
      </div>
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
