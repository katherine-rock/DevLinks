import React from 'react';
import { unmountComponentAtNode } from "react-dom";
import { render, screen } from '@testing-library/react';
import Ruby from './Ruby';

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

describe('Ruby', () => {
    xit('should show the sub-heading ', () => {
        render(<Ruby />);
        const text = screen.getByRole('heading', {level: 2});
        expect(text).toBeInTheDocument();
    })

    // Ruby-doc.org 
    it('should show the title for Ruby-Doc', () => {
        render(<Ruby />);
        const text = screen.getByText('Ruby-Doc.org', {exact: true});
        expect(text).toBeInTheDocument();
    })

    it('should show the description for Ruby-doc', () => {
        render(<Ruby />);
        const text = screen.getByText(/Official Ruby Documentation/i);
        expect(text).toBeInTheDocument();
    })

    // This will update later anyway once I add Link 
    xit('should show the URL for Ruby-doc', () => {
        render(<Ruby />);
        const text = screen.getByText('ruby-doc.org', {exact: true});
        expect(text).toBeInTheDocument();
    })

    // Ruby-lang.org 
    xit('should show the title for Ruby-lang.org', () => {
        render(<Ruby />);
        const text = screen.getAllByText(/Ruby/i);
        expect(text).toBeInTheDocument();
    })

    it('should show the description for Ruby-lang.org', () => {
        render(<Ruby />);
        const text = screen.getByText(/Community supported documentation/i);
        expect(text).toBeInTheDocument();
    })

    it('should show the URL for Ruby-lang.org', () => {
        render(<Ruby />);
        const text = screen.getByText(/ruby-lang.org/i);
        expect(text).toBeInTheDocument();
    })

    // Tutorials Point
    it('should show the title for Tutorials Point', () => {
        render(<Ruby />);
        const text = screen.getByText(/Tutorials Point/i);
        expect(text).toBeInTheDocument();
    })

    it('should show the description for Tutorials Point', () => {
        render(<Ruby />);
        const text = screen.getByText(/Tutorials for Ruby beginners/i);
        expect(text).toBeInTheDocument();
    })

    it('should show the URL for Tutorials Point', () => {
        render(<Ruby />);
        const text = screen.getByText(/tutorialspoint.com/i);
        expect(text).toBeInTheDocument();
    })
});

