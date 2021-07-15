import React from "react";
import { Route, Redirect } from "react-router-dom";
import {
  Registration,
  Sign,
  UserProfiles,
  ProfileDashboad,
  ProfileUsers,
} from "./pages";

function App() {
  return (
    <div className="app">
      <Route exact path="/">
        <Redirect to="/registration" />
      </Route>
      <Route path="/registration" component={Registration} exact />
      <Route path="/sign-in" component={Sign} exact />
      <Route path="/profiles" component={UserProfiles} exact />
      <Route path="/dashboard" component={ProfileDashboad} exact />
      <Route path="/users" component={ProfileUsers} exact />
    </div>
  );
}

export default App;
