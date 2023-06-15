import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import TopRatedMovies from './TopRatedMovies';

test('renders top rated movies correctly', async () => {
  render(
    <Router>
      <TopRatedMovies />
    </Router>
  );

  // Criando Mock da API
  const mockMovies = [
    {
      id: 1,
      title: 'Spider-Man: Across the Spider-Vers',
      poster_path: 'https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
    },
    {
      id: 2,
      title: 'Nuovo Cinema Paradiso',
      poster_path: 'https://image.tmdb.org/t/p/w500/Q1t8Fg8xnRPMrPhm43IzZFX2lv.jpg',
    },
  ];

  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue({
      results: mockMovies,
    }),
  });

  // Wait for movies to be fetched and rendered
  await waitFor(() => {
    expect(screen.getByText(/Spider-Man: Across the Spider-Vers/i)).toBeInTheDocument();
    expect(screen.getByText(/Nuovo Cinema Paradiso/i)).toBeInTheDocument();
  });

  // Check if movie posters are displayed correctly
  expect(screen.getByAltText(/Spider-Man: Across the Spider-Vers/i)).toHaveAttribute(
    'src',
    'https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg'
  );
  expect(screen.getByAltText(/Nuovo Cinema Paradiso/i)).toHaveAttribute(
    'src',
    'https://image.tmdb.org/t/p/w500/Q1t8Fg8xnRPMrPhm43IzZFX2lv.jpg'
  );

  // Restore the original fetch implementation
  global.fetch.mockRestore();
});