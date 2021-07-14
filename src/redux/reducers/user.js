const initialState = {
  user: null,
  loggedIn: false,
  users: [],
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "SET_LOGGED_IN":
      return {
        ...state,
        loggedIn: action.payload,
      };
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export default user;
