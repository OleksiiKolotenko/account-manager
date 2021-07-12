import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Me } from "../api/api";
import { connect, useDispatch, useSelector } from "react-redux";
import adminPhoto from "../assets/img/avatarAdmin.svg";
import userPhoto from "../assets/img/avatarUser.svg";
import profileIcon from "../assets/img/profileIcon.svg";
import dashboardIcon from "../assets/img/dashboardIcon.svg";
import usersIcon from "../assets/img/usersIcon.svg";
import { getData } from "../redux/reducers/authReducer";

function Header() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);

  const user = useSelector(({ user }) => user.user);

  if (!user) {
    return <span>Loading....</span>;
  }

  console.log("User: ", user);

  return (
    <div className="header">
      {user && user.username && user.roles != "ADMIN" ? (
        <>
          <img src={userPhoto} alt="avatar" />
          <span className="username">{user.username}</span>
          <div className="header_options">
            <Link to="/sign-in">
              {
                <>
                  <button
                    onClick={() => {
                      localStorage.setItem("token", "");
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
              <img src={profileIcon} alt="" />
            </Link>
            <Link to="/profiles/dashboard">
              <button>Dashboard</button>
              <img src={dashboardIcon} alt="" />
            </Link>
            <Link to="/profiles/users">
              <button>Users</button>
              <img src={usersIcon} alt="" />
              {console.log(localStorage)}
            </Link>
            <Link to="/sign-in">
              {
                <>
                  <button
                    onClick={() => {
                      localStorage.setItem("token", "");
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
