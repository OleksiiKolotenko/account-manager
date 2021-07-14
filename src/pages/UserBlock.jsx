import React from "react";
import "../scss/components/users.scss";
export const Users = ({ profile, user }) => {
  return (
    <div className="users_block">
      <span>{user.username}</span>
      <span>{user.email}</span>
    </div>
  );
};

export default Users;
