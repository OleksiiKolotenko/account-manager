import axios from "axios";

export const fetchProfiles = (userId) => (dispatch) => {
  axios.get(`/getProfiles/${userId}`).then((profiles) => {
    console.log("Profiles:", profiles);
  });
};

export const fetchAllProfiles = () => (dispatch) => {
  console.log("Fetch start");
  axios.get(`http://localhost:5000/auth/getAllProfiles`).then((profiles) => {
    const action = { type: "SET_PROFILES", payload: profiles.data };
    dispatch(action);
  });
  console.log("fetch end");
};
