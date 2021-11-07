import { useEffect, useState } from "react";
import Movie from "../components/Movie";

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
    <div>
      <h1>Movies</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        movies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            summary={movie.summary}
            coverImg={movie.medium_cover_image}
            title={movie.title}
          />
        ))
      )}
    </div>
  );
};
export default Home;
