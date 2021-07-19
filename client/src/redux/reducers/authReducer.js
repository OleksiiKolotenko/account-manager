import { Me } from "../../api/api";
import { setUser } from "../actions/user";
import { setLoggedIn } from "../actions/user";

export const getData = () => async (dispatch) => {
  const user = await Me();
  dispatch(setUser(user));
  dispatch(setLoggedIn(true));
};

export default getData;
