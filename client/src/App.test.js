import React from 'react';
import App from './App';
import { render } from '@testing-library/react';

test('App renders', () => {
  render(<App />);
});

test("players are rendered", () => {
  const {getByTestId} = render(<App />);
  getByTestId(/player-test/i);
})
