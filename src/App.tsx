import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './components/common/Header';
import Home from "./components/pages/Home";
import CreateChallenge from "./components/pages/CreateChallenge";
import Welcome from "./components/pages/Welcome";
import Login from "./components/pages/Login";
import Registration from "./components/pages/Registration";
import Challenge from "./components/pages/Challenge";
import Profile from "./components/pages/Profile";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main">
          <Switch>
            <Route exact path="/" component={Welcome}/>
            <Route exact path="/home" component={Home} />
            <Route exact path="/create-challenge" component={CreateChallenge} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/registration" component={Registration} />
            <Route exact path="/challenge/:id" component={Challenge} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
