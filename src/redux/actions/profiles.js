import axios from "axios";

export const fetchProfiles = (userId) => (dispatch) => {
  axios
    .get(`http://localhost:5000/auth/getProfiles/${userId}`)
    .then((profiles) => {
      const action = { type: "SET_PROFILES", payload: profiles.data };
      dispatch(action);
    });
};

export const fetchAllProfiles = () => (dispatch) => {
  axios.get(`http://localhost:5000/auth/getAllProfiles`).then((profiles) => {
    const action = { type: "SET_PROFILES", payload: profiles.data };
    dispatch(action);
  });
};

export const setAdults = () => (dispatch) => {
  axios.get(`http://localhost:5000/auth/adult`).then((adults) => {
    const action = { type: "SET_ADULT", payload: adults.data };
    dispatch(action);
  });
};
