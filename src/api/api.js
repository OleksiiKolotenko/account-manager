import axios from "axios";

const initial = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:5000/auth/",
});

export const Profiles = {
  register(obj) {
    return initial
      .post("registration", obj)
      .then((response) => ({ articleId: response.data }));
  },
};

export const Sign = {
  login(obj) {
    return initial
      .post("login", obj)
      .then((response) => ({ articleId: response.data }));
  },
};