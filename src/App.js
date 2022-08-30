import React, { Suspense } from 'react';

import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';

import Heading from './Heading';

// Her trenger du ikke å foreta deg noe. Du får en ferdig lagd liten app for teste ditt oppsett.
const App = () => {
  let history = useHistory();

  function handleClick() {
    history.push('/home');
  }

  return (
    <Router>
      <div>
        <div
          style={{
            margin: '10px',
            padding: '10px',
            textAlign: 'center',
            backgroundColor: 'greenyellow',
          }}
        >
          <h1>DUMMY</h1>
          DUMMY APPLIKASJONEN
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/button">Button</Link>
            </li>
            <li>
              <Link to="/heading">Heading</Link>
            </li>
          </ul>
        </nav>
        <Suspense fallback={'loading...'}>
          <Switch>
            <Route path="/button">
              <button onClick={handleClick}>GO HOME</button>
            </Route>
            <Route path="/heading">
              <Heading />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
