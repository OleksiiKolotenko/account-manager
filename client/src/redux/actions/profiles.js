import axios from "axios";

export const fetchProfiles = (userId) => (dispatch) => {
  axios
    .get(`https://arcane-falls-56185.herokuapp.com/auth/getProfiles/${userId}`)
    .then((profiles) => {
      const action = { type: "SET_PROFILES", payload: profiles.data };
      dispatch(action);
    });
};

export const fetchOtherProfiles = (userId) => (dispatch) => {
  axios
    .get(
      `https://arcane-falls-56185.herokuapp.com/auth/getOtherProfiles/${userId}`
    )
    .then((profiles) => {
      const action = { type: "SET_OTHER_PROFILES", payload: profiles.data };
      dispatch(action);
    });
};

export const fetchAllProfiles = () => (dispatch) => {
  axios
    .get(`https://arcane-falls-56185.herokuapp.com/auth/getAllProfiles`)
    .then((profiles) => {
      const action = { type: "SET_PROFILES", payload: profiles.data };
      dispatch(action);
    });
};

export const setAdults = () => (dispatch) => {
  axios
    .get(`https://arcane-falls-56185.herokuapp.com/auth/adult`)
    .then((adults) => {
      const action = { type: "SET_ADULT", payload: adults.data };
      dispatch(action);
    });
};

export const editProfiles = (userId, profile, id) => (dispatch) => {
  axios
    .patch(
      `https://arcane-falls-56185.herokuapp.com/auth/editProfile/${id}`,
      profile
    )
    .then((updatedProfile) => {
      const action = { type: "EDIT_PROFILES", payload: updatedProfile };
      dispatch(fetchProfiles(userId));
    });
};

export const deleteProfiles = (userId, profileId) => (dispatch) => {
  axios
    .delete(
      `https://arcane-falls-56185.herokuapp.com/auth/deleteProfile/${profileId}`
    )
    .then(() => {
      const action = { type: "DELETE_PROFILE" };
      dispatch(fetchProfiles(userId));
    });
};

export const deleteAllProfiles = (userId) => (dispatch) => {
  axios
    .delete(
      `https://arcane-falls-56185.herokuapp.com/auth/deleteAllProfiles/${userId}`
    )
    .then(() => {
      dispatch(fetchProfiles(userId));
      dispatch(fetchAllProfiles());
    });
};
