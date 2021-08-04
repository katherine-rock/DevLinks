import React from 'react';
import Header from './components/Header'
import Ruby from './components/Ruby'
import Rails from './components/Rails'
import Javascript from './components/Javascript'
import ReactLinks from './components/React'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
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
        {/* <NavBar /> */}
      
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
