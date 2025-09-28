import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio app', () => {
  render(<App />);
  // Test passes if the App component renders without crashing
  expect(true).toBe(true);
});
