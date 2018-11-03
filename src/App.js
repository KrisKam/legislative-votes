import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.css";
import Header from "../src/components/Header";
import Home from "../src/components/Home";
import Bills from "../src/components/Bills";
import Bill from "../src/components/Bill";
import Legislators from "../src/components/Legislators";
import Legislator from "../src/components/Legislator";
import Party from "../src/components/Party";
import Footer from "../src/components/Footer";


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
            <Route exact path="/legislators/party" component={Party} />
            <Route path="/bills/:bill" component={Bill} />
            <Route path="/legislators/:post_id" component={Legislator} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
