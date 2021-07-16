import React from "react";
import "../scss/components/users.scss";
import { useSelector, useDispatch } from "react-redux";
import { fetchOtherProfiles, fetchProfiles } from "../redux/actions/profiles";
import { Redirect, useHistory } from "react-router-dom";
export const Users = ({ profiles, user }) => {
  const history = useHistory();

  const handleRoute = () => {
    history.push("/profiles");
  };
  const dispatch = useDispatch();
  const profileFilter = () =>
    profiles.filter((x) => x.user_id === user.user_id).length;

  return (
    <div
      className="users_block"
      onClick={() => {
        dispatch(fetchOtherProfiles(user.user_id));
        handleRoute();
        dispatch(fetchProfiles(user.user_id));
      }}
    >
      <span>{user.username}</span>
      <span>{user.email}</span>
      <span>{profileFilter()} profiles</span>
    </div>
  );
};

export default Users;
