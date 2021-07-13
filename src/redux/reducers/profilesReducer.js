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
    default:
      return state;
  }
};

export default profiles;
