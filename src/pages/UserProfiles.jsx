import React from "react";
import Header from "./Header";
import add from "../assets/img/add.svg";

function Profiles() {
  return (
    <div className="app">
      <Header />
      <h1>Profiles:</h1>
      <div className="profiles">
        <div className="profiles_block">
          <img src={add} alt="addProfiles" />
          <button className="create">Create new profile</button>
          {console.log()}
        </div>
      </div>
    </div>
  );
}

export default Profiles;
