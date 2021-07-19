import axios from "axios";

const initial = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:5000/auth/",
});

// baseURL: "http://localhost:5000/auth/",

export const Profiles = {
  register(obj) {
    return initial
      .post("registration", obj)
      .then((response) => ({ articleId: response.data }))
      .catch((response) => {
        return { error: response.response.data };
      });
  },
};

export const Sign = {
  login(obj) {
    return initial
      .post("login", obj)
      .then((response) => {
        return { data: response.data };
      })
      .catch((response) => {
        return { data: response.data };
      });
  },
};

export const Me = () => {
  return initial
    .get("/me", {
      headers: {
        token: localStorage.getItem("token"),
      },
    })
    .then((data) => {
      return data.data;
    });
};

export const profileCreate = (data) => {
  return initial
    .post("/profileLoad", data, {
      headers: {
        token: localStorage.getItem("token"),
      },
    })
    .then((data) => {
      return data.data;
    });
};

export const profileAdminCreate = (data, userId) => {
  return initial.post(`/profileAdminLoad/${userId}`, data).then((data) => {
    return data.data;
  });
};
