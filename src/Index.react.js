import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './components/App.react';
import DroneStrikes from './components/Drones/DroneStrikes.react';
import About from './components/About.react';

//window.React = React;

render(
  (<Router history={hashHistory}>
    <Route path='/' component={App}>
      <Route path='/drones' component={DroneStrikes} />
      <Route path='/about' component={About} />
    </Route>
  </Router>), document.getElementById('content')
);
