import { render, screen } from '@testing-library/react';
import Home from './Home.js';

// testa se a tag h2 com o título "Popular Movies" aparece na home
test('renders learn react link', () => {
  render(<Home />);
  const PopularMovies = screen.getByText(/popular movies/i); // o i ignora maiúsculas e e minúsculas
  expect(PopularMovies).toBeInTheDocument();

// testa se a tag h2 com o título "Top Rated Movies" aparece na home
  const TopRatedMovies = screen.getByText(/top rated movies/i); // o i ignora maiúsculas e e minúsculas
  expect(TopRatedMovies).toBeInTheDocument();
});

