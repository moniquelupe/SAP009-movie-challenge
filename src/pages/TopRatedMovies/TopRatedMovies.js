import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { APIKey } from '../../config/key';
import { MovieList, Movie } from './TopRatedMovies.styles';
import { Container } from '../PopularMovies/PopularMovies.styles';

function TopRatedMovies() {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const image_path = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKey}&language=us-US&page=1`)
      .then(response => response.json())
      .then(data => setTopRatedMovies(data.results));
  }, []);

  return (
    <Container>
      <MovieList>
        {topRatedMovies.map(movie => (
          <Movie key={movie.id}>
            <Link to={`/details/${movie.id}`}>
              <img src={`${image_path}${movie.poster_path}`} alt={movie.title} />
            </Link>
            <span>{movie.title}</span>
          </Movie>
        ))}
      </MovieList>
    </Container>
        );
}

        export default TopRatedMovies;