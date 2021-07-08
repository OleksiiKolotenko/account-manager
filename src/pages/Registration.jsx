import React from "react";
import { Form, Field } from "react-final-form";
import { Profiles } from "../api/api";
import { Link } from "react-router-dom";
const onSubmit = (e) => {
  debugger;
};
const validate = (e) => {
  const errors = {};

  if (e.username && e.username.length < 6) {
    errors.username = "Name is too short (<6)";
  }

  if (e.username && e.username.length > 16) {
    errors.username = "Name is too long (>16)";
  }

  if (e.email && !e.email.includes("@")) {
    errors.email = "Email is incorrect.";
  }

  if (e.email && !e.email.includes(".")) {
    errors.email = "Email is incorrect.";
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
  return (
    <div className="registration">
      <Form
        onSubmit={(obj) => {
          console.log("Sended form", obj);
          Profiles.register(obj);
        }}
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
