import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import Header from "./Header";
import Users from "./UserBlock";
import { fetchAllProfiles } from "../redux/actions/profiles.js";
import { setGetUsers } from "../redux/actions/user";

function ProfileUsers() {
  const dispatch = useDispatch();
  const profiles = useSelector((store) => store.profilesReducer.profiles);
  const users = useSelector((store) => store.user);
  const user = useSelector(({ user }) => user.user);

  useEffect(() => {
    dispatch(fetchAllProfiles());
    dispatch(setGetUsers());
  }, []);

  if (user && user.roles && user.roles !== "ADMIN") {
    return <Redirect to="/profiles"></Redirect>;
  }

  if (!localStorage.getItem("token")) {
    return <Redirect to="/registration"></Redirect>;
  }

  return (
    <div className="app">
      <Header />
      <h1>Users</h1>

      <div className="users">
        {users &&
          users.users.map((user, index) => {
            return (
              <Users profiles={profiles} user={user} key={`profile_${index}`} />
            );
          })}
      </div>
    </div>
  );
}

export default ProfileUsers;
