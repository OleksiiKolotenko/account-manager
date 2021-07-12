const initialState = {
  user: null,
  isLoaded: false,
  routeUser: null,
  loggedIn: false,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
        isLoaded: false,
      };
    case "SET_USER_LOADED":
      return {
        ...state,
        isLoaded: action.payload,
      };
    case "SET_ROTE_USER":
      return {
        ...state,
        routeUser: action.payload,
        isLoaded: false,
      };
    case "SET_LOGGED_IN":
      return {
        ...state,
        loggedIn: action.payload,
      };
    default:
      return state;
  }
};

export default user;
