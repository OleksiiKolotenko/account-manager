import React from "react";

export const Profile = ({ profile }) => {
  return (
    <div className="profiles_block">
      <span>{profile.name}</span>
      <span>{profile.gender}</span>
      <span>{profile.birthdate.slice(0, 10)}</span>
      <span>{profile.city}</span>
    </div>
  );
};

export default Profile;
