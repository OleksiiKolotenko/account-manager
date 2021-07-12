import React from "react";
import {
  Registration,
  Sign,
  UserProfiles,
  ProfileDashboad,
  ProfileUsers,
} from "./pages";
import { Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Route exact path="/">
        <Redirect to="/registration" />
      </Route>
      <Route path="/registration" component={Registration} exact />
      <Route path="/sign-in" component={Sign} exact />
      <Route path="/profiles" component={UserProfiles} exact />
      <Route path="/profiles/dashboard" component={ProfileDashboad} exact />
      <Route path="/profiles/users" component={ProfileUsers} exact />
    </div>
  );
}

export default App;
