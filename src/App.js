import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.css";
import Header from "../src/components/Header";
import Home from "../src/components/Home";
import Bills from "../src/components/Bills";
import Bill from "../src/components/Bill";
import Legislators from "../src/components/Legislators";


class App extends Component {
  render() {
    return (
      <Router>
        <div id="App-background">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/bills" component={Bills} /> 
            <Route exact path="/legislators" component={Legislators} />
            <Route path="/bills/:post_id" component={Bill} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
