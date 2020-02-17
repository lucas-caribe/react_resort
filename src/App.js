import React from 'react';
import './App.css';

import NavBar from './components/NavBar'

import Home from './pages/Home'
import SingleRoom from './pages/SingleRoom'
import Error from './pages/Error'
import Rooms from './pages/Rooms'

import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/rooms/" component={ Rooms } />
        <Route exact path="/rooms/:id" component={ SingleRoom } />
        <Route component={ Error } />
      </Switch>
    </>
  );
}

export default App;
