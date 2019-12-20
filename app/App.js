import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import CommonLayout from "./components/Layout/CommonLayout/CommonLayout";
import Home from "./container/pages/Home/Home";
import About from "./container/pages/About/About";

import "./App.scss";

const App = () => (
  <Router>
    <CommonLayout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Redirect path="*" to="/"/>
      </Switch>
    </CommonLayout>
  </Router>
);

export default App;
