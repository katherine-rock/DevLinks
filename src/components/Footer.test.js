import React from 'react';
import { unmountComponentAtNode } from "react-dom";
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

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

describe('Footer', () => {
    it('should show the copyright term', () => {
        render(<Footer />);
        const text = screen.getByText(/copyright/i);
        expect(text).toBeInTheDocument();
    })

    it('should show the copyright year', () => {
        render(<Footer />);
        const text = screen.getByText(/2021/i);
        expect(text).toBeInTheDocument();
    })

    it('should show the copyright owner', () => {
        render(<Footer />);
        const text = screen.getByText(/Katherine Rock/i);
        expect(text).toBeInTheDocument();
    })
});