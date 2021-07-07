import React from "react";
import { Form, Field } from "react-final-form";
const onSubmit = (e) => {
  debugger;
};
const validate = (e) => {
  const errors = {};

  if (e.username && e.username.length < 6) {
    errors.username = "Enter at least 6 letters!";
  }

  if (e.email && !e.email.includes("@")) {
    errors.email = "Email is incorrect.";
  }

  if (e.password && e.password.length < 6) {
    errors.password = "Too short and week!";
  }

  return errors;
};

function Registration() {
  return (
    <div className="registration">
      <Form
        onSubmit={(obj) => {
          console.log(obj);
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
                <span className="field">Is admin?</span>
                <br />
              </div>
              <button type="submit">Submit</button>
            </div>
          </form>
        )}
      />
    </div>
  );
}
export default Registration;
