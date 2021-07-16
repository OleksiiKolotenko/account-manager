import React from "react";
import { Route, Redirect } from "react-router-dom";
import {
  Registration,
  Sign,
  ClientDashboard,
  ClientProfile,
  ClientUsers,
} from "./pages";

function App() {
  return (
    <div className="app">
      <Route exact path="/">
        <Redirect to="/registration" />
      </Route>
      <Route path="/registration" component={Registration} exact />
      <Route path="/sign-in" component={Sign} exact />
      <Route path="/profiles" component={ClientProfile} exact />
      <Route path="/profiles/:id" component={ClientProfile} />
      <Route path="/dashboard" component={ClientDashboard} exact />
      <Route path="/users" component={ClientUsers} exact />
    </div>
  );
}

export default App;
