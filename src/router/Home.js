import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";
const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=10&sort_by=year"
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className={styles.container}>
      {loading ? (
        "Loading..."
      ) : (
        <div className={styles.movies}>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default Home;
