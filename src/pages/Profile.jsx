import React from "react";

export const Profile = ({ name, gender, birthdate, city }) => {
  return (
    <div className="profiles_block">
      <span>{name}</span>
      <span>{gender}</span>
      <span>{birthdate}</span>
      <span>{city}</span>
    </div>
  );
};

export default Profile;
