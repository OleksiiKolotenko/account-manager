import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import Modal from "../Modal/Modal";
import { fetchProfiles } from "../../../redux/actions/profiles.js";
import { getChosenUser } from "../../../redux/actions/user.js";
import ProfileBlock from "./ProfileBlock";
import add from "../../../assets/img/add.svg";

function Profiles() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { loggedIn } = useSelector(({ user }) => user);
  const user = useSelector(({ user }) => user);
  const chosenUser = useSelector(({ user }) => user);
  const profiles = useSelector((profile) => profile.profilesReducer.profiles);
  const [modalActive, setModalActive] = React.useState(false);

  useEffect(() => {
    if (!id && user.user) {
      dispatch(fetchProfiles(user.user.id));
    } else {
      dispatch(fetchProfiles(id));
    }
  }, [user.user]);

  const toggleModal = () => setModalActive((store) => !store);

  return (
    <div className="app">
      <Header />

      {id ? (
        <div style={{ display: "flex" }}>
          {() => dispatch(getChosenUser(id))}
          {console.log(user.user)}
          <h1>User's profiles:</h1>
          <div className="users_delete">
            <span className="username">J</span>
            <span className="email">S</span>
            <span className="role">X</span>
            <div className="buttons">
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </div>
        </div>
      ) : (
        <h1>My profiles:</h1>
      )}
      {modalActive && (
        <Modal
          active={modalActive}
          setModalActive={setModalActive}
          toggleModal={toggleModal}
        ></Modal>
      )}
      <div className="profiles">
        <div
          className="profiles_creation_block"
          onClick={() => {
            toggleModal();
          }}
        >
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
