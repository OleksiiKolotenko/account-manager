import React from "react";
import { useDispatch } from "react-redux";
import Modal from "../Modal/Modal";
import { deleteProfiles } from "../../../redux/actions/profiles";
export const Profile = ({ profile }) => {
  const dispatch = useDispatch();
  const [modalActive, setModalActive] = React.useState(false);
  const toggleModal = () => setModalActive((store) => !store);

  return (
    <>
      {profile && (
        <div className="profiles_block">
          {console.log(profile)}
          <span>{profile.name}</span>
          <span>{profile.gender}</span>
          <span>{profile.birthdate.slice(0, 10)}</span>
          <span>{profile.city}</span>
          <div className="buttons">
            <button onClick={toggleModal}>Edit</button>
            <button
              onClick={() => {
                dispatch(deleteProfiles(profile.user_id, profile._id));
              }}
            >
              Delete
            </button>
          </div>
        </div>
      )}
      {modalActive && (
        <Modal
          status="EDIT"
          profileId={profile._id}
          active={modalActive}
          setModalActive={setModalActive}
          toggleModal={toggleModal}
        ></Modal>
      )}
    </>
  );
};

export default Profile;
