//import React and React components
import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//import pages for routes
import About from './components/pages/About';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';

//import components
import Navbar from './components/layout/Navbar';
import User from './components/users/User';
import Alert from './components/layout/Alert';

//import State
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

//import styles
import "./App.css";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/user/:login' component={User} />
                <Route exact path='/about' component={About} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
}

export default App;