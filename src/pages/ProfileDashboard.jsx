import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "./Header";
import "../scss/components/dashboard.scss";
import { fetchAllProfiles, setAdults } from "../redux/actions/profiles.js";
import { setGetUsers } from "../redux/actions/user";

function ProfileDashboard() {
  const dispatch = useDispatch();
  const profiles = useSelector((store) => store.profilesReducer.profiles);
  const users = useSelector((store) => store.user.users);
  const adults = useSelector((store) => store.profilesReducer.adults);

  useEffect(() => {
    dispatch(fetchAllProfiles());
    dispatch(setGetUsers());
    dispatch(setAdults());
  }, []);

  return (
    <div className="app">
      <Header />
      <h1>Dashboard:</h1>
      <div className="dashboard">
        <div className="dashboard_blocks">Users: {users.length}</div>
        <div className="dashboard_blocks">Profiles: {profiles.length}</div>
        <div className="dashboard_blocks">
          Profiles over 18 years old: {adults && adults.length}
        </div>
      </div>
    </div>
  );
}

export default ProfileDashboard;
