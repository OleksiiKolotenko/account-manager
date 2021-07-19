import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Redirect, Switch } from "react-router-dom";
import { setLoggedIn } from "./redux/actions/user";
import {
  Registration,
  Sign,
  ClientDashboard,
  ClientProfile,
  ClientUsers,
} from "./pages";

function App() {
  const dispatch = useDispatch();
  const { loggedIn } = useSelector(({ user }) => user);

  useEffect(() => {
    localStorage.token && dispatch(setLoggedIn(true));
  }, []);

  return (
    <div className="app">
      {!loggedIn ? (
        <Switch>
          <Route path="/registration" component={Registration} exact />
          <Route path="/sign-in" component={Sign} exact />
          <Redirect to="/registration"></Redirect>
        </Switch>
      ) : (
        <Switch>
          <Route path="/profiles" component={ClientProfile} exact />
          <Route path="/profiles/:id" component={ClientProfile} />
          <Route path="/dashboard" component={ClientDashboard} exact />
          <Route path="/users" component={ClientUsers} exact />
          <Redirect to="/profiles"></Redirect>
        </Switch>
      )}
    </div>
  );
}

export default App;
