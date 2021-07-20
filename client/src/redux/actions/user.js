import axios from "axios";

export const register = (user) => {
  axios.post("/auth/register", user).then(() => {});
};

export const setUser = (user) => ({
  type: "SET_USER",
  payload: user,
});

export const logOutUser = () => ({
  type: "OUT_USER",
});

export const setGetUsers = () => (dispatch) => {
  axios
    .get("https://arcane-falls-56185.herokuapp.com/auth/getUsers")
    .then((users) => {
      const action = { type: "GET_USERS", payload: users.data };
      dispatch(action);
    });
};

export const getChosenUser = (id) => (dispatch) => {
  axios
    .get(`https://arcane-falls-56185.herokuapp.com/auth/getChosenUser/${id}`)
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

export const editUser = (id, obj) => (dispatch) => {
  axios
    .patch(`https://arcane-falls-56185.herokuapp.com/auth/editUser/${id}`, obj)
    .then((updatedUser) => {
      const action = { type: "EDIT_PROFILES", payload: updatedUser };
      dispatch(getChosenUser(id));
    });
};

export const deleteUser = (userId) => (dispatch) => {
  axios
    .delete(
      `https://arcane-falls-56185.herokuapp.com/auth/deleteUser/${userId}`
    )
    .then(() => {
      dispatch(setGetUsers());
    });
};
