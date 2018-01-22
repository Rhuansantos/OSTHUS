import React, { Component } from 'react';
import Home from './components/home';
import EditUser from './components/editUser';
import { Nav } from './components/common';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

const App = () => ({
  render() {
    return (
      <main>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/user/:id' render={(props) => <EditUser {...props} />} />
        </Switch>
      </main>
    );
  }
});

export default App;
