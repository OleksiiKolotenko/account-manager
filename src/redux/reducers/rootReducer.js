import { combineReducers } from "redux";
import user from "./user";
import authReducer from "./authReducer";
import profilesReducer from "./profilesReducer";

const rootReducer = combineReducers({
  user,
  authReducer,
  profilesReducer,
});

export default rootReducer;
