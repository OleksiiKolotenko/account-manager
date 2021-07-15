import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getData } from "../redux/reducers/authReducer";
import { setLoggedIn, logOutUser } from "../redux/actions/user";

import adminPhoto from "../assets/img/avatarAdmin.svg";
import userPhoto from "../assets/img/avatarUser.svg";
import profileIcon from "../assets/img/profileIcon.svg";
import dashboardIcon from "../assets/img/dashboardIcon.svg";
import usersIcon from "../assets/img/usersIcon.svg";

function Header() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);

  const user = useSelector(({ user }) => user.user);
  const { loggedIn } = useSelector(({ user }) => user);

  if (!user) {
    return <span>Loading....</span>;
  }

  return (
    <div className="header">
      {user && user.username && user.roles !== "ADMIN" ? (
        <>
          <img src={userPhoto} alt="avatar" />
          <span className="username">{user.username}</span>
          <div className="header_options">
            <Link to="/sign-in">
              {
                <>
                  <button
                    onClick={() => {
                      dispatch(setLoggedIn(false));
                      localStorage.setItem("token", "");
                      dispatch(logOutUser());
                    }}
                  >
                    Log out
                  </button>
                </>
              }
            </Link>
          </div>
        </>
      ) : (
        <>
          <img src={adminPhoto} alt="avatar" />
          <span className="username">{user.username}</span>
          <div className="header_options">
            <Link to="/profiles">
              <button>Profiles</button>
            </Link>
            <img src={profileIcon} alt="" />
            <Link to="/dashboard">
              <button>Dashboard</button>
            </Link>
            <img src={dashboardIcon} alt="" />
            <Link to="/users">
              <button>Users</button>
            </Link>
            <img src={usersIcon} alt="" />
            <Link to="/sign-in">
              {
                <>
                  <button
                    onClick={() => {
                      dispatch(setLoggedIn(false));
                      localStorage.setItem("token", "");
                      dispatch(logOutUser());
                    }}
                  >
                    Log out
                  </button>
                </>
              }
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Header;
