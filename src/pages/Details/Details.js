import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container } from "./Details.styles";
import GetDetails from "../../API/Details";

function Details() {

  const { id } = useParams()
  
  const [movie, setMovie] = useState({})
  const image_path = 'https://image.tmdb.org/t/p/w500'
  
  useEffect(() => {
      GetDetails(id, image_path)
      .then((movie) => setMovie(movie))
  }, [id])

  return (
    <Container>
      <div className="movie">
        <img src={movie.image} alt={movie.sinopse}/>
        <div className="details">
          <h1>{movie.title}</h1>
          <span>Overview: {movie.overview}</span>
          <span className="release-date">Release date: {movie.releaseDate}</span>
          <Link to="/"><button>Go Back</button></Link>
        </div>
      </div>
    </Container>
  )
}

export default Details