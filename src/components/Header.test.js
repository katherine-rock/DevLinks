import React from 'react';
import { unmountComponentAtNode } from "react-dom";
import { render, screen } from '@testing-library/react';
import Header from './Header';

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
        render(<Header />);
        const text = screen.getByText(/Dev Links/i);
        expect(text).toBeInTheDocument();
    })

    it('should show the app description', () => {
        render(<Header />);
        const text = screen.getByText(/Helpful links for budding software developers/i);
        expect(text).toBeInTheDocument();
    })

    it('should show the header icon', () => {
        render(<Header />);
        const icon = screen.getByAltText(/Neon computer screen with html tags/i);
        expect(icon).toBeInTheDocument();
    })
});