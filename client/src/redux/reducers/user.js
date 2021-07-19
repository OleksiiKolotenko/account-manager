const initialState = {
  user: null,
  loggedIn: false,
  users: [],
  chosenUser: null,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "OUT_USER":
      return {
        ...state,
        user: [],
      };
    case "EDIT_USER":
      return {
        ...state,
        updatedProfile: action.payload,
      };
    case "DELETE_USER":
      return {
        ...state,
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
    case "GET_CHOSEN_USERS":
      return {
        ...state,
        chosenUser: action.payload,
      };
    default:
      return state;
  }
};

export default user;
