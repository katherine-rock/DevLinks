import React from 'react';
import Header from './components/Header'
import Ruby from './components/Ruby'
import Rails from './components/Rails'
import Javascript from './components/Javascript'
import ReactLinks from './components/React'
import Footer from './components/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <div>
        <button className="border-4 rounded-md border-devlightblue bg-devdarkblue text-devyellow p-4">
          <Link to="/">Home</Link>
        </button>

        <button className="border-4 rounded-md border-devlightblue bg-devdarkblue text-devyellow p-4">
          <Link to="/ruby">Ruby</Link>
        </button>

        <button className="border-4 rounded-md border-devlightblue bg-devdarkblue text-devyellow p-4">
          <Link to="/rails">Rails</Link>
        </button>

        <button className="border-4 rounded-md border-devlightblue bg-devdarkblue text-devyellow p-4">
          <Link to="/javascript">JavaScript</Link>
        </button>

        <button className="border-4 rounded-md border-devlightblue bg-devdarkblue text-devyellow p-4">
          <Link to="/react">React</Link>
        </button>

        <Switch>
          <Route path="/ruby">
            <Ruby />
          </Route>

          <Route path="/rails">
            <Rails />
          </Route>

          <Route path="/javascript">
            <Javascript />
          </Route>

          <Route path="/react">
            <ReactLinks />
          </Route>

          <Route path="/">
            <Ruby />
            <Rails />
            <Javascript />
            <ReactLinks />
          </Route>
        </Switch>
      </div>
      <Footer/>
    </Router>
  )
}

export default App
