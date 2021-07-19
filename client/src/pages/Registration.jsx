import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { Profiles, Sign } from "../api/api";
import "../scss/components/login.scss";
import { setLoggedIn } from "../redux/actions/user";
import { useDispatch } from "react-redux";

const validate = (e) => {
  const errors = {};
  let regexName = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
  if (e.username && e.username.length < 6) {
    errors.username = "Name is too short (<6)";
  }

  if (!e.username) {
    errors.username = "Name can't be empty.";
  }

  if (e.username && e.username.match(regexName)) {
    errors.username = "Special symbols are forbiden.";
  }

  if (e.username && e.username.length < 1) {
    errors.username = "Name can't be empty";
  }

  if (e.username && e.username.length > 16) {
    errors.username = "Name is too long (>16)";
  }

  if (e.email && !e.email.includes("@")) {
    errors.email = "Email is incorrect.";
  }

  if (!e.email) {
    errors.email = "Email can't be empty";
  }
  if (e.email && !e.email.includes(".")) {
    errors.email = "Email is incorrect.";
  }

  if (!e.password) {
    errors.password = "Password can't be empty.";
  }
  if (e.password && e.password.length < 6) {
    errors.password = "Pass is too short (<6)";
  }

  if (e.password && e.password.length > 18) {
    errors.password = "Pass is too long (>18)";
  }

  return errors;
};

function Registration() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [mistake, setMistake] = React.useState(false);
  const [exists, setExists] = React.useState(false);
  const onSubmit = async (obj) => {
    const profile = await Profiles.register(obj);
    const check = await Sign.login(obj);
    if (profile?.error?.message === "User with such name already exists") {
      setExists(true);
    } else if (check?.data?.message) {
      setMistake(true);
      setExists(false);
    } else if (check?.data?.token) {
      setMistake(false);
      setExists(false);
      localStorage.setItem("token", check.data.token);
      dispatch(setLoggedIn(true));
      history.push("/profiles");
    }
  };
  return (
    <div className="registration">
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="wrapper">
              <span className="title">Create your account</span>
              <span className="field">Username</span>
              <Field
                name="username"
                render={({ input, meta }) => (
                  <div>
                    <input {...input} placeholder="Username" />
                    <br />
                    {exists && <span>User with such name already exists!</span>}
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </div>
                )}
              />
              <span className="field">Email</span>
              <Field
                name="email"
                render={({ input, meta }) => (
                  <div>
                    <input {...input} placeholder="Email" />
                    <br />
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </div>
                )}
              />
              <span className="field">Password</span>
              <Field
                name="password"
                render={({ input, meta }) => (
                  <div>
                    <input {...input} placeholder="Password" type="password" />
                    <br />
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </div>
                )}
              />
              <div className="admin">
                <Field
                  name="isAdmin"
                  type="checkbox"
                  render={({ input }) => (
                    <div>
                      <input {...input} type="checkbox" value="false" />
                      <span className="field">Is admin?</span>
                      <br />
                    </div>
                  )}
                />
              </div>
              <button type="submit" className="submit">
                Submit
              </button>
              <Link to="/sign-in">
                <button type="button">Already got an account?</button>
              </Link>
            </div>
          </form>
        )}
      />
    </div>
  );
}
export default Registration;
