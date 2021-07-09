import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Me } from "../api/api";
import adminPhoto from "../assets/img/avatarAdmin.svg";
import userPhoto from "../assets/img/avatarUser.svg";
import profileIcon from "../assets/img/profileIcon.svg";
import dashboardIcon from "../assets/img/dashboardIcon.svg";
import usersIcon from "../assets/img/usersIcon.svg";

function Header() {
  useEffect(async () => {
    const user = await Me();
    console.log(user);
    setUser(user);
  }, []);

  const [user, setUser] = useState();

  if (!user) {
    return <span className="field">Loading...</span>;
  }

  return (
    <div className="header">
      {user.roles != "ADMIN" ? (
        <img src={userPhoto} alt="avatar" />
      ) : (
        <img src={adminPhoto} alt="avatar" />
      )}
      <span className="username">{user.username}</span>
      <div className="header_options">
        <Link to="/profiles/dashboard">
          <button>Profiles</button>
          <img src={profileIcon} alt="" />
        </Link>
        <Link to="/profiles/dashboard">
          <button>Dashboard</button>
          <img src={dashboardIcon} alt="" />
        </Link>
        <Link to="/profiles/dashboard">
          <button>Users</button>
          <img src={usersIcon} alt="" />
        </Link>
        <Link to="/profiles/dashboard">
          <button>Log out</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
