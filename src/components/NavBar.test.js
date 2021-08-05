import React from 'react';
import { unmountComponentAtNode } from "react-dom";
import { render, screen } from '@testing-library/react';
import NavBar from './NavBar';
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

describe('NavBar', () => {
    it('should show the button for the home page', () => {
        render(<Router><NavBar /></Router>);
        const text = screen.getByText('< Home / >', {exact: true});
        expect(text).toBeInTheDocument();
    })

    it('should show the button for the Ruby page', () => {
        render(<Router><NavBar /></Router>);
        const text = screen.getByText('< Ruby / >', {exact: true});
        expect(text).toBeInTheDocument();
    })

    it('should show the button for the Rails page', () => {
        render(<Router><NavBar /></Router>);
        const text = screen.getByText('< Rails / >', {exact: true});
        expect(text).toBeInTheDocument();
    })

    it('should show the button for the JavaScript page', () => {
        render(<Router><NavBar /></Router>);
        const text = screen.getByText('< JavaScript / >', {exact: true});
        expect(text).toBeInTheDocument();
    })

    it('should show the button for the React page', () => {
        render(<Router><NavBar /></Router>);
        const text = screen.getByText('< React / >', {exact: true});
        expect(text).toBeInTheDocument();
    })
});