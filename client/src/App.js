import React, { Component } from 'react';
import Home from './components/home';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

const Test = () => (
  <div>
    <h2>Test</h2>
  </div>
)

const App = () => ({
  render() {
    return (
      <div>
      <Link to='/test'>Test</Link>
      
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/test' render={(props) => <Test/>} />
      </Switch>
      </div>
    );
  }
});

export default App;
