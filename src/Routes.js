import React from 'react';
import About from './Pages/About';
import Home from './Pages/Home';
import Features from './Pages/Features';
import { Switch, Route } from 'react-router-dom';

export default function Routes() {
  return (
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
  );
}
