/*
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Container } from './Container';
import PopularMovies from '../PopularMovies/PopularMovies';
import TopRatedMovies from '../TopRatedMovies/TopRatedMovies';

test('renders Container component correctly', () => {
  render(
    <Container>
      <h1>Popular Movies</h1>
      <PopularMovies/>
      <h2>Top Rated Movies</h2>
      <TopRatedMovies/>
    </Container>
  );

  // Checa se o CSS do Container foi aplicado corretamente
  const containerElement = screen.getByTestId('container');
  expect(containerElement).toHaveStyle('padding: 4rem 0;');

  // Checa se os elementos foram renderizados corretamente
  expect(screen.getByText(/Popular Movies/i)).toBeInTheDocument();
  expect(screen.getByAltText(/Spider-Man: Across the Spider-Vers/i)).toBeInTheDocument();
  expect(screen.getByText(/Nuovo Cinema Paradiso/i)).toBeInTheDocument();
  expect(screen.getByText(/2023-05-17/i)).toBeInTheDocument();
  expect(screen.getByText(/Go back/i)).toBeInTheDocument();
});
*/
