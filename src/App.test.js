import React from 'react';
import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from "react-dom";
import App from './App';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('App', () => {
it('should show gym name', () => {
    render(<App/>);
    const text = screen.getByText(/Dev Links/i);
    expect(text).toBeInTheDocument();
})});


// This was the inital template test:
// test('renders basic empty template', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/basic empty template/i);
//   expect(linkElement).toBeInTheDocument();
// });

