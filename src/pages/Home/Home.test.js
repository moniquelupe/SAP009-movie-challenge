import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders learn react link', () => {
  render(<Home />);
  const linkElement = screen.getByText(/movies library!/i); // o i ignora maiúsculas e e minúsculas
  expect(linkElement).toBeInTheDocument();
});
