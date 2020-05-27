import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Landing from './routes/landing/landing'
import Nav from './nav/nav'
import { RegisterPage } from './routes/register/RegisterPage'
import { LoginPage } from './routes/login/LoginPage';
import { ProgramsPage } from './routes/programs/ProgramsPage';
import { GlobalProvider } from './context/GlobalContext'
import { HistoryPage } from './routes/history/HistoryPage';
import { LogPage } from './routes/logPage/logPage';
import { useAuth0 } from "./react-auth0-spa";


function App() {

  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

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
        <Route path="/history">
          <HistoryPage />
        </Route>
        <Route path="/log">
          <LogPage />
        </Route>
      </Switch>
    </GlobalProvider>
    </Router>
  );
}

export default App;
