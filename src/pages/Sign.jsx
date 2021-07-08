import React from "react";
import { Sign } from "../api/api";
import { Form, Field } from "react-final-form";
import { Link } from "react-router-dom";
const onSubmit = (e) => {
  debugger;
};
const validate = (e) => {
  const errors = {};

  if (e.email && !e.email.includes("@")) {
    errors.email = "Email is incorrect.";
  }

  if (e.email && !e.email.includes(".")) {
    errors.email = "Email is incorrect.";
  }

  if (e.password && e.password.length < 6) {
    errors.password = "Password is incorrect.";
  }

  if (e.password && e.password.length > 18) {
    errors.password = "Password is incorrect.";
  }

  return errors;
};

function SignIn() {
  const [mistake, setMistake] = React.useState(false);

  return (
    <div className="registration">
      <Form
        onSubmit={async (obj) => {
          const Login = await Sign.login(obj);
          Login?.articleId?.message ? setMistake(true) : setMistake(false);
        }}
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
