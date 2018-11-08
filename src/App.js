import React, { Component } from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
