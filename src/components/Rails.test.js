import React from 'react';
import { unmountComponentAtNode } from "react-dom";
import { render, screen } from '@testing-library/react';
import Rails from './Rails';

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

describe('Rails', () => {
    xit('should show the sub-heading ', () => {
        render(<Rails />);
        const text = screen.getByRole('heading', {level: 2});
        expect(text).toBeInTheDocument();
    })

    // Ruby on Rails Guides
    it('should show the title for Ruby on Rails Guides', () => {
        render(<Rails />);
        const text = screen.getByText('Ruby on Rails Guides', {exact: true});
        expect(text).toBeInTheDocument();
    })

    it('should show the description for Ruby on Rails Guides', () => {
        render(<Rails />);
        const text = screen.getByText(/Comprehensive user-friendly guides for Rails/i);
        expect(text).toBeInTheDocument();
    })

    xit('should show the URL for Ruby on Rails Guides', () => {
        render(<Rails />);
        const text = screen.getByText('guides.rubyonrails.org', {exact: true});
        expect(text).toBeInTheDocument();
    })

    // Rails RSpec
    xit('should show the title for Rails RSpec', () => {
        render(<Rails />);
        const text = screen.getAllByText('Rails RSpec', {exact: true} );
        expect(text).toBeInTheDocument();
    })

    it('should show the description for Rails RSpec', () => {
        render(<Rails />);
        const text = screen.getByText(/General documentation on RSpec testing framework for Rails/i);
        expect(text).toBeInTheDocument();
    })

    it('should show the URL for Rails RSpec', () => {
        render(<Rails />);
        const text = screen.getByText(/rspec-rails/i);
        expect(text).toBeInTheDocument();
    })

    // RSpec expectations
    it('should show the title for RSpec Expectations', () => {
        render(<Rails />);
        const text = screen.getByText(/RSpec Expectations/i);
        expect(text).toBeInTheDocument();
    })

    it('should show the description for RSpec Expectations', () => {
        render(<Rails />);
        const text = screen.getByText(/Example RSpec tests for Rails/i);
        expect(text).toBeInTheDocument();
    })

    it('should show the URL for RSpec Expectations', () => {
        render(<Rails />);
        const text = screen.getByText(/rspec-expectations/i);
        expect(text).toBeInTheDocument();
    })
});

