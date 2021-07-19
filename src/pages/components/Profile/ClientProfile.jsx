import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory, Redirect } from "react-router-dom";
import Header from "../Header/Header";
import Modal from "../Modal/Modal";
import {
  fetchProfiles,
  deleteAllProfiles,
} from "../../../redux/actions/profiles.js";
import { getChosenUser, deleteUser } from "../../../redux/actions/user.js";
import ProfileBlock from "./ProfileBlock";
import add from "../../../assets/img/add.svg";
import ModalUser from "../Modal/ModalUser";

function Profiles() {
  const { id } = useParams();
  const history = useHistory();

  const dispatch = useDispatch();
  const { loggedIn } = useSelector(({ user }) => user);
  const user = useSelector(({ user }) => user);
  const chosenUser = useSelector(({ user }) => user.chosenUser);
  const profiles = useSelector((profile) => profile.profilesReducer.profiles);
  const [modalActive, setModalActive] = React.useState(false);
  const [modalUserActive, setModalUserActive] = React.useState(false);

  useEffect(() => {
    if (!id && user.user) {
      dispatch(fetchProfiles(user.user.id));
    } else {
      dispatch(fetchProfiles(id));
    }
  }, [user.user]);

  const toggleModal = () => setModalActive((store) => !store);
  const toggleUserModal = () => setModalUserActive((store) => !store);

  useEffect(() => {}, [chosenUser]);

  useEffect(() => {
    if (id) dispatch(getChosenUser(id));
  }, [id]);

  const check = () => {
    if (id === user.user.id) {
      return <Redirect to="/profiles"></Redirect>;
    }
  };

  const handleChosenClick = () => {
    dispatch(deleteUser(id));
    dispatch(deleteAllProfiles(id));
    history.push(`/users/`);
  };

  const handleMyClick = () => {
    history.push(`/profiles`);
  };

  if (user && id) {
    if (id === user.user.id) {
      handleMyClick();
    }
  }

  return (
    <div className="app">
      <Header />
      {id && chosenUser ? (
        <div style={{ display: "flex" }}>
          <h1>User's profiles:</h1>
          <div className="users_delete">
            <span className="username">{chosenUser.username}</span>
            <span className="email">{chosenUser.email}</span>
            <span className="role">{chosenUser.roles}</span>
            <div className="buttons">
              <button onClick={toggleUserModal}>Edit</button>
              <button onClick={handleChosenClick}>Delete</button>
            </div>
          </div>
        </div>
      ) : (
        <h1>My profiles:</h1>
      )}
      {modalUserActive && (
        <ModalUser
          active={modalUserActive}
          setModalActive={setModalUserActive}
          toggleModal={toggleUserModal}
        ></ModalUser>
      )}
      {modalActive && (
        <Modal
          active={modalActive}
          setModalActive={setModalActive}
          toggleModal={toggleModal}
        ></Modal>
      )}
      <div className="profiles">
        <div className="profiles_creation_block" onClick={toggleModal}>
          <img src={add} alt="addProfiles" />
          <span className="create">Create new profile</span>
        </div>
        {profiles &&
          profiles.map((profile, index) => {
            return <ProfileBlock profile={profile} key={`profile_${index}`} />;
          })}
      </div>
    </div>
  );
}

export default Profiles;
