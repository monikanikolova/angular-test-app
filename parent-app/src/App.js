import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Angular from './components/AngularApp';
import AngularTwo from './components/AngularAppTwo';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/angular" component={Angular} />
          <Route exact path="/angular" component={AngularTwo} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
