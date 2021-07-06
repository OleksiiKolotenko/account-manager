import React from "react";
import { Form, Field } from "react-final-form";
const onSubmit = (e) => {
  debugger;
};
const validate = (e) => {
  const errors = {};
};

function Registration() {
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
              <Field name="username" component="input" placeholder="Username" />
              <span className="field">Email</span>
              <Field name="email" component="input" placeholder="Email" />
              <span className="field">Password</span>
              <Field name="password" component="input" placeholder="Password" />
              <div className="admin">
                <input type="checkbox" name="a" value="Admin"></input>
                <span className="field">Is admin</span>
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
