import React from 'react';
import { Link } from 'react-router';

const App = ({ children }) => (
  <div>
    <header>
      <h1>Drone Strikes</h1>
      <Link to='/drones'>Strikes</Link>
      <Link to='/about'>About</Link>
    </header>
    <section>
      {children}
    </section>
  </div>
);

App.propTypes = { children: React.PropTypes.object };

export default App;
