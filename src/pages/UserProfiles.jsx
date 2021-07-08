import React from "react";
import adminPhoto from "../assets/img/avatarAdmin.svg";
import userPhoto from "../assets/img/avatarUser.svg";
import profileIcon from "../assets/img/profileIcon.svg";
import dashboardIcon from "../assets/img/dashboardIcon.svg";
import usersIcon from "../assets/img/usersIcon.svg";
import { Link } from "react-router-dom";
function Profiles() {
  return (
    <div className="app">
      <div className="header">
        <img src={userPhoto} alt="avatar" />
        <span className="username">Username</span>
        <div className="header_options">
          <button>Profiles</button>
          <img src={profileIcon} alt="" />
          <Link to="/profiles/dashboard">
            <button>Dashboard</button>
            <img src={dashboardIcon} alt="" />
          </Link>
          <button>Users</button>
          <img src={usersIcon} alt="" />
          <button>Log out</button>
        </div>
      </div>
      <h1>Profiles:</h1>
      <div className="profiles">
        <div className="profiles_block">
          <span className="name">Name</span>
          <span className="gender">Gender</span>
          <span className="birthDate">Birth</span>
          <span className="city">Kyiv</span>
        </div>
      </div>
    </div>
  );
}

export default Profiles;
