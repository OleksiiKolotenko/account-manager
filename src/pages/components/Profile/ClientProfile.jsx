import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../Header/Header";
import Modal from "../Modal/Modal";
import { fetchProfiles } from "../../../redux/actions/profiles.js";
import ProfileBlock from "./ProfileBlock";
import add from "../../../assets/img/add.svg";

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
            return <ProfileBlock profile={profile} key={`profile_${index}`} />;
          })}
      </div>
    </div>
  );
}

export default Profiles;