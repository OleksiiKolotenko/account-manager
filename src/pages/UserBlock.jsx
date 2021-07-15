import React from "react";
import "../scss/components/users.scss";
export const Users = ({ profiles, user }) => {
  const profileFilter = () => {
    return profiles.filter((x) => x.user_id === user._id).length;
  };
  return (
    <div className="users_block">
      <span>{user.username}</span>
      <span>{user.email}</span>
      <span>{profileFilter()} Profiles</span>
    </div>
  );
};

export default Users;
