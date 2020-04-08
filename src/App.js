import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";
import Landing from './routes/landing/landing'
import Nav from './nav/nav'
import { RegisterPage } from './routes/register/RegisterPage'
import { LoginPage } from './routes/login/LoginPage';
import { ProgramsPage } from './routes/programs/ProgramsPage';
import { GlobalProvider } from './context/GlobalContext'

function App() {
  return (
    <Router>
    <GlobalProvider className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/programs">
          <ProgramsPage />
        </Route>
      </Switch>
    </GlobalProvider>
    </Router>
  );
}

export default App;
