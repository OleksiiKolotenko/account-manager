import React, { useEffect } from "react";
import Header from "./Header";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../Modal/Modal";
import { fetchProfiles, fetchAllProfiles } from "../redux/actions/profiles.js";
import Profile from "./Profile";
import add from "../assets/img/add.svg";
import submit from "../assets/img/submit.svg";
import cancel from "../assets/img/cancel.svg";

function Profiles() {
  const dispatch = useDispatch();
  const { loggedIn } = useSelector(({ user }) => user);
  const profiles = useSelector((state) => state.profilesReducer.profiles);
  const [modalActive, setModalActive] = React.useState(false);

  useEffect(() => {
    dispatch(fetchAllProfiles());
  }, []);

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
        {profiles.map((profiles) => {
          <Profile
            name={profiles.name}
            gender={profiles.gender}
            birthdate={profiles.birthdate}
            city={profiles.city}
          />;
        })}
      </div>
    </div>
  );
}

export default Profiles;
