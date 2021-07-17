import React from "react";
import "../../../scss/components/users.scss";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import {
  fetchOtherProfiles,
  fetchProfiles,
} from "../../../redux/actions/profiles";

export const Users = ({ profiles, user }) => {
  const history = useHistory();

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fetchOtherProfiles(user._id));
    history.push(`/profiles/${user._id}`);
  };
  const profileFilter = () =>
    profiles.filter((x) => x.user_id === user._id).length;

  return (
    <div className="users_block" onClick={handleClick}>
      <span>{user.username}</span>
      <span>{user.email}</span>
      <span>{profileFilter()} profiles</span>
    </div>
  );
};

export default Users;
