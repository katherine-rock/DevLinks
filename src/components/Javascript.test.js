import React from 'react';
import { unmountComponentAtNode } from "react-dom";
import { render, screen } from '@testing-library/react';
import Javascript from './Javascript';

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

describe('Javascript', () => {
    xit('should show the sub-heading ', () => {
        render(<Javascript />);
        const text = screen.getByRole('heading', {level: 2});
        expect(text).toBeInTheDocument();
    })

    // JavaScript.info
    it('should show the title for JavaScript.info', () => {
        render(<Javascript />);
        const text = screen.getByText('Modern JavaScript Tutorial', {exact: true});
        expect(text).toBeInTheDocument();
    })

    it('should show the description for JavaScript.info', () => {
        render(<Javascript />);
        const text = screen.getByText(/Great introduction to JavaScript with helpful examples/i);
        expect(text).toBeInTheDocument();
    })

    it('should show the URL for JavaScript.info', () => {
        render(<Javascript />);
        const text = screen.getByText(/javascript.info/i);
        expect(text).toBeInTheDocument();
    })

    // MDN Web Docs 
    it('should show the title for MDN Web Docs', () => {
        render(<Javascript />);
        const text = screen.getByText(/MDN Web Docs/i );
        expect(text).toBeInTheDocument();
    })

    it('should show the description for MDN Web Docs', () => {
        render(<Javascript />);
        const text = screen.getByText(/Background and tutorials on JavaScript/i);
        expect(text).toBeInTheDocument();
    })

    it('should show the URL for MDN Web Docs', () => {
        render(<Javascript />);
        const text = screen.getByText(/developer.mozilla.org/i);
        expect(text).toBeInTheDocument();
    })

    // W3 Schools
    it('should show the title for W3 Schools', () => {
        render(<Javascript />);
        const text = screen.getByText(/W3 Schools/i);
        expect(text).toBeInTheDocument();
    })

    it('should show the description for W3 Schools', () => {
        render(<Javascript />);
        const text = screen.getByText(/Tutorials and references with lots of examples/i);
        expect(text).toBeInTheDocument();
    })

    it('should show the URL for W3 Schools', () => {
        render(<Javascript />);
        const text = screen.getByText(/www.w3schools.com/i);
        expect(text).toBeInTheDocument();
    })
});

