import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Component
import SignIn from './components/SignIn';
import GettingStarted from './components/GettingStarted';
import Home from './components/Home';
import Course from './components/Course';

function App() {
  return (
    <Fragment>
      <Router>
        <Route path="/" exact component={SignIn} />
        <Route path="/home" exact component={Home} />
        <Route path="/gettingstarted" exact component={GettingStarted} />
        <Route path="/course" exact component={Course} />
      </Router>
    </Fragment>
  );
}

export default App;
