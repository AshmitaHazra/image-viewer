import './App.css';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './screens/home/home';
import Profile from './screens/profile/profile';
import Login from './screens/login/login';

class App extends Component {

  constructor(props) {
    super(props)

    this.baseUrl = 'https://graph.instagram.com'
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route
              exact
              path='/'
              render={
                (props) => <Login {...props} baseUrl={this.baseUrl} />}
            />           {/* Route to login Page */}
            <Route
              exact
              path='/home'
              render={(props) => <Home {...props} baseUrl={this.baseUrl} />}
            />            {/* Route to home Page */}
            <Route
              exact
              path='/profile'
              render={(props) => <Profile {...props} baseUrl={this.baseUrl} />}
            />       {/* Route to profile Page */}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
