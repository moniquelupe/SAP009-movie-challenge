import React from 'react';
import { render, screen } from '@testing-library/react';
import Details from './Details';
import { MemoryRouter } from 'react-router-dom';

test('renders Container component correctly', () => {
  render(
    <MemoryRouter>
      <Details />
    </MemoryRouter>
  );

  // Checa se o CSS do Container foi aplicado corretamente
  const containerElement = screen.getByTestId('container');
  expect(containerElement).toHaveStyle('padding: 4rem 0;');

  // Checa se os elementos foram renderizados corretamente
  expect(screen.getByText(/Overview/i)).toBeInTheDocument();
  expect(screen.getByText(/Go back/i)).toBeInTheDocument();
  expect(screen.getByText(/Release date/i)).toBeInTheDocument();
});
