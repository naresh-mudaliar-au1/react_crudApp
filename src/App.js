import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import {
  SignupComponent,
  LoginComponent,
  UserDetailComponent,
  ListComponent,
} from "./component";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signup" component={SignupComponent}></Route>
        <Route path="/login" component={LoginComponent}></Route>
        <Route path="/detail" component={UserDetailComponent}></Route>
        <Route path="/" component={ListComponent}></Route>
      </Switch>
    </Router>
  );
}

export default App;
