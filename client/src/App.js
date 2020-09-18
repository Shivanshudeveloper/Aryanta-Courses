import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
// Component
import SignIn from './components/SignIn';
import GettingStarted from './components/GettingStarted';
import Home from './components/Home';
import Course from './components/Course';
import Notification from './components/Notification';
import Search from './components/Search';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Fragment>
      <Router>
        <Route path="/" exact component={SignIn} />
        <Route path="/home" exact component={Home} />
        <Route path="/gettingstarted" exact component={GettingStarted} />
        <Route path="/course" exact component={Course} />
        <Route path="/notification" exact component={Notification} />
        <Route path="/search" exact component={Search} />
      </Router>
    </Fragment>
  );
}

export default App;
