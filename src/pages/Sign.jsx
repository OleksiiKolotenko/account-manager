import React from "react";
import { Form, Field } from "react-final-form";
const onSubmit = (e) => {
  debugger;
};
const validate = (e) => {
  const errors = {};
};

function SignIn() {
  return (
    <div className="registration">
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="wrapper">
              <span className="title">Sign In</span>
              <span className="field">Email</span>
              <Field name="email" component="input" placeholder="Email" />
              <span className="field">Password</span>
              <Field name="password" component="input" placeholder="Password" />
              <button type="submit">Sign In</button>
            </div>
          </form>
        )}
      />
    </div>
  );
}
export default SignIn;
