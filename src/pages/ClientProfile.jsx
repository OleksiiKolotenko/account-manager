import React, { useEffect } from "react";
import Header from "./Header";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../Modal/Modal";
import { fetchProfiles } from "../redux/actions/profiles.js";
import Profile from "./ProfileBlock";
import add from "../assets/img/add.svg";
import submit from "../assets/img/submit.svg";
import cancel from "../assets/img/cancel.svg";

function Profiles() {
  const dispatch = useDispatch();
  const { loggedIn } = useSelector(({ user }) => user);
  const user = useSelector(({ user }) => user);
  const profiles = useSelector((profile) => profile.profilesReducer.profiles);
  const [modalActive, setModalActive] = React.useState(false);

  useEffect(() => {
    if (user.user) {
      dispatch(fetchProfiles(user.user.id));
    }
  }, [user.user]);

  const toggleModal = () => setModalActive((store) => !store);

  return (
    <div className="app">
      <Header />
      <h1>Profiles:</h1>
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
            return <Profile profile={profile} key={`profile_${index}`} />;
          })}
      </div>
    </div>
  );
}

export default Profiles;
