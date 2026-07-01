import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function getMovie() {
      const res = await fetch(
        `http://www.omdbapi.com/?&apikey=f4010404&i=${id}`,
      );

      const data = await res.json();
      setMovie(data);
    }
    getMovie()  
  },[id]);

  if(!movie) return <p>Loading...</p>


  return (
    <div className="movie-detail">
      <h2> { movie.Title} </h2>
      <img
        alt={movie.Title}
        src={movie.Poster} />
      <p> <strong>Genre:</strong> {movie.Genre} </p>
      <p> <strong>Released:</strong> {movie.Released} </p>
      <p> <strong>Plot:</strong> {movie.Plot} </p>
    </div>
  );
}

export default MovieDetail;
