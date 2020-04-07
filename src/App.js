import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";
import Landing from './routes/landing/landing'
import Nav from './nav/nav'
import RegisterPage from './routes/register/RegisterPage'

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
