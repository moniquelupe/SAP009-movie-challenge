import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders routes correctly', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  expect(screen.getByText('Popular Movies')).toBeInTheDocument();
  expect(screen.getByText('Top Rated Movies')).toBeInTheDocument();
});
