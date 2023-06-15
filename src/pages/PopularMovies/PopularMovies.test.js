import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import PopularMovies from './PopularMovies';

test('renders popular movies correctly', async () => {
  render(
    <Router>
      <PopularMovies />
    </Router>
  );

  // Mock API response
  const mockMovies = [
    {
      id: 1,
      title: 'Movie 1',
      poster_path: '/path-to-poster-1.jpg',
    },
    {
      id: 2,
      title: 'Movie 2',
      poster_path: '/path-to-poster-2.jpg',
    },
  ];

  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue({
      results: mockMovies,
    }),
  });

  // Wait for movies to be fetched and rendered
  await waitFor(() => {
    expect(screen.getByText('John Wick: Chapter 4')).toBeInTheDocument();
    expect(screen.getByText('The Super Mario Bros. Movie')).toBeInTheDocument();
  });

  // Check if movie posters are displayed correctly
  expect(screen.getByAltText('John Wick: Chapter 4')).toHaveAttribute(
    'src',
    'https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg'
  );
  expect(screen.getByAltText('The Super Mario Bros. Movie')).toHaveAttribute(
    'src',
    'https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg'
  );

  // Restore the original fetch implementation
  global.fetch.mockRestore();
});
