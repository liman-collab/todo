import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header/Header";
import Insert from "./components/Insert";
import View from "./components/View";
import Edit from "./components/Edit";

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route path="/insert" component={Insert} />
            <Route path="/edit/:id" component={Edit} />
            <Route path="/view" component={View} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
