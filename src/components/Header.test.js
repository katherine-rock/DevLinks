import React from 'react';
import { unmountComponentAtNode } from "react-dom";
import { render, screen } from '@testing-library/react';
import Header from './Header';
import { StaticRouter as Router } from 'react-router-dom'; 

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

describe('Header', () => {
  it('should show the app name', () => {
      render(<Router><Header /></Router>);
      const text = screen.getByText(/Dev Links/i);
      expect(text).toBeInTheDocument();
  })

  it('should show the app description', () => {
      render(<Router><Header /></Router>);
      const text = screen.getByText(/Helpful links for budding software developers/i);
      expect(text).toBeInTheDocument();
  })

  it('should show the header icon', () => {
      render(<Router><Header /></Router>);
      const icon = screen.getByAltText(/Neon computer screen with html tags/i);
      expect(icon).toBeInTheDocument();
  })

  it('header text Dev Links should link to home page', () => {
    render(
        <Router><Header/></Router>
    );
    const linkElement = screen.getByText(/Dev Links/);
    expect(linkElement).toBeInTheDocument();
  });

  it('should link the header icon to the home page', () => {
    render(
      <Router><Header/></Router>
    );
    const linkElement = screen.getByAltText(/Neon computer screen with html tags/i);
    expect(linkElement).toBeInTheDocument();
  });
});