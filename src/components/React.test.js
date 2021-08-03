import React from 'react';
import { unmountComponentAtNode } from "react-dom";
import { render, screen } from '@testing-library/react';
import ReactLinks from './React';

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

describe('ReactLinks', () => {
    xit('should show the sub-heading ', () => {
        render(<ReactLinks />);
        const text = screen.getByRole('heading', {level: 2});
        expect(text).toBeInTheDocument();
    })

    // Reactjs.org
    it('should show the title for Reactjs.org', () => {
        render(<ReactLinks />);
        const text = screen.getByText('React - Main Concepts', {exact: true});
        expect(text).toBeInTheDocument();
    })

    it('should show the description for Reactjs.org', () => {
        render(<ReactLinks />);
        const text = screen.getByText(/Great introduction to the main concepts of React/i);
        expect(text).toBeInTheDocument();
    })

    it('should show the URL for Reactjs.org', () => {
        render(<ReactLinks />);
        const text = screen.getByText(/reactjs.org/i);
        expect(text).toBeInTheDocument();
    })

    // Jest testing framework
    it('should show the title for Jest testing framework', () => {
        render(<ReactLinks />);
        const text = screen.getByText(/Jest Testing Framework/i );
        expect(text).toBeInTheDocument();
    })

    it('should show the description for Jest testing framework', () => {
        render(<ReactLinks />);
        const text = screen.getByText(/Unit tests for React apps/i);
        expect(text).toBeInTheDocument();
    })

    it('should show the URL for Jest testing framework', () => {
        render(<ReactLinks />);
        const text = screen.getByText(/jestjs.io/i);
        expect(text).toBeInTheDocument();
    })

    // React Testing Library
    it('should show the title for React Testing Library', () => {
        render(<ReactLinks />);
        const text = screen.getByText(/React Testing Library/i);
        expect(text).toBeInTheDocument();
    })

    it('should show the description for React Testing Library', () => {
        render(<ReactLinks />);
        const text = screen.getByText(/Explanation and cheatsheet of React tests/i);
        expect(text).toBeInTheDocument();
    })

    it('should show the URL for React Testing Library', () => {
        render(<ReactLinks />);
        const text = screen.getByText(/testing-library.com/i);
        expect(text).toBeInTheDocument();
    })

    // Cypress
    it('should show the title for Cypress', () => {
        render(<ReactLinks />);
        const text = screen.getByText('Cypress', {exact: true});
        expect(text).toBeInTheDocument();
    })

    it('should show the description for Cypress', () => {
        render(<ReactLinks />);
        const text = screen.getByText(/React testing framework for unit and integration tests/i);
        expect(text).toBeInTheDocument();
    })

    it('should show the URL for Cypress', () => {
        render(<ReactLinks />);
        const text = screen.getByText(/docs.cypress.io/i);
        expect(text).toBeInTheDocument();
    })
});

