import axios from "axios";

export const setUser = (user) => ({
  type: "SET_USER",
  payload: user,
});

export const setUserLoaded = (isLoaded) => ({
  type: "SET_USER_LOADED",
  payload: isLoaded,
});

export const setRouteUser = (routeUser) => ({
  type: "SET_ROTE_USER",
  payload: routeUser,
});

export const setLoggedIn = (loggedIn) => ({
  type: "SET_LOGGED_IN",
  payload: loggedIn,
});

// export const login =
//   ({ username, password }) =>
//   (dispatch) => {
//     axios
//       .post("/auth/login", {
//         username,
//         password,
//       })
//       .then((req) => {
//         if (req.data) {
//           localStorage.setItem("token", req.data.token);
//           dispatch(setUser(req.data));
//           dispatch(setLoggedIn(true));
//         }
//       });
//   };

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
