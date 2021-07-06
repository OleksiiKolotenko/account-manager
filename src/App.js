import React from "react";
import { Registration, Sign } from "./pages";
import { Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Route exact path="/">
        <Redirect to="/registration" />
      </Route>
      <Route path="/registration" component={Registration} exact />
      <Route path="/sign-in" component={Sign} exact />
    </div>
  );
}

export default App;
