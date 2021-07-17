import axios from "axios";

export const setUser = (user) => ({
  type: "SET_USER",
  payload: user,
});

export const logOutUser = () => ({
  type: "OUT_USER",
});

export const setGetUsers = () => (dispatch) => {
  axios.get("http://localhost:5000/auth/getUsers").then((users) => {
    const action = { type: "GET_USERS", payload: users.data };
    dispatch(action);
  });
};

export const getChosenUser = (id) => (dispatch) => {
  axios
    .get(`http://localhost:5000/auth/getChosenUser/${id}`)
    .then((chosenUser) => {
      const action = {
        type: "GET_CHOSEN_USERS",
        payload: chosenUser.data,
      };
      dispatch(action);
    });
};

export const setLoggedIn = (loggedIn) => ({
  type: "SET_LOGGED_IN",
  payload: loggedIn,
});

export const fetchUser = () => (dispatch) => {
  axios.get("/users/me").then((user) => {
    dispatch(setUser(user.data));
  });
};

export const updateUser = (id, user) => (dispatch) => {
  axios.patch(`/users/${id}`, user).then(() => {
    dispatch(fetchUser());
  });
};

export const deleteUser = (userId) => {
  axios.delete(`/users/${userId}`);
};

export const register = (user) => {
  axios.post("/auth/register", user).then(() => {});
};
