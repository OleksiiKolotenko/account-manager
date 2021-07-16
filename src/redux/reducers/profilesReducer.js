const initialState = {
  profiles: [],
};

const profiles = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PROFILES":
      return {
        ...state,
        profiles: action.payload,
      };
    case "SET_OTHER_PROFILES":
      return {
        ...state,
        profiles: action.payload,
      };
    case "EDIT_PROFILES":
      return {
        ...state,
        updatedProfile: action.payload,
      };
    case "SET_ADULT":
      return {
        ...state,
        adults: action.payload,
      };
    case "DELETE_PROFILE":
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default profiles;
