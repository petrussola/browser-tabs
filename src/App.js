import React from 'react';
import './App.css';
import Tab from './Tab';
import About from './About';
import Features from './Features';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="browser">
          <div className="tabs">
            <Tab>
              <NavLink to="/" activeClassName="is-active" exact>
                Home{' '}
              </NavLink>
            </Tab>
            <Tab>
              <NavLink to="/about" activeClassName="is-active">
                About
              </NavLink>
            </Tab>
            <Tab>
              <NavLink to="/features" activeClassName="is-active">
                Features
              </NavLink>
            </Tab>
          </div>
          <div className="viewport">
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/features">
                <Features />
              </Route>
              <Route path="/" exact>
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
