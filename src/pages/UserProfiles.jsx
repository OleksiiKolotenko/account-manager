import React from "react";
import Header from "./Header";

function Profiles() {
  return (
    <div className="app">
      <Header></Header>
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
