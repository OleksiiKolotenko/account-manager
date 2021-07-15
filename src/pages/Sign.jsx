import React from "react";
import { Form, Field } from "react-final-form";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedIn } from "../redux/actions/user";
import { Sign } from "../api/api";

const validate = (e) => {
  const errors = {};

  if (e.email && !e.email.includes("@")) {
    errors.email = "Email is incorrect.";
  }

  if (!e.email) {
    errors.email = "Email can't be empty.";
  }
  if (e.email && !e.email.includes(".")) {
    errors.email = "Email is incorrect.";
  }

  if (e.password && e.password.length < 6) {
    errors.password = "Password is incorrect.";
  }
  if (!e.password) {
    errors.password = "Password can't be empty.";
  }
  if (e.password && e.password.length > 18) {
    errors.password = "Password is incorrect.";
  }

  return errors;
};

function SignIn() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [mistake, setMistake] = React.useState(false);
  const { loggedIn } = useSelector(({ user }) => user);
  const onSubmit = async (obj) => {
    const check = await Sign.login(obj);
    if (check?.data?.message) {
      setMistake(true);
    } else if (check?.data?.token) {
      setMistake(false);
      localStorage.setItem("token", check.data.token);
      history.push("/profiles");
      dispatch(setLoggedIn(true));
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
              <span className="title">Sign in</span>
              <span className="field">Email</span>
              <Field
                name="email"
                render={({ input, meta }) => (
                  <div>
                    <input {...input} placeholder="email@gmail.com" />
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
              {mistake && (
                <span className="field">
                  Wrong email or password. <br /> Please check the accuracy
                </span>
              )}
              <button type="submit" className="submit">
                Sign in
              </button>
              <Link to="/registration">
                <button type="button">Create new account</button>
              </Link>
            </div>
          </form>
        )}
      />
    </div>
  );
}
export default SignIn;
