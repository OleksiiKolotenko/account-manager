import { Me } from "../../api/api";
import { setUser } from "../actions/user";

export const getData = () => async (dispatch) => {
  const user = await Me();
  console.log("User: ", user);
  dispatch(setUser(user));
};

export default getData;
