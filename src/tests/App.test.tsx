import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { prettyDOM, render, screen } from '@testing-library/react';
import App from '../App';


test('Render title', () => {
  const component = render(<App />);
  component.getByText('Tic Tac Toe with Typescript');
});

test('Render button', () => {
  render(<App />);
  const button = document.querySelector("button");
  expect(button).toBeInTheDocument();
});

// test('Render cells', () => {
//   const component = render(<App />);
// });
