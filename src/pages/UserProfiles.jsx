import React from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import Modal from "../Modal/Modal";
import { Form, Field } from "react-final-form";
import add from "../assets/img/add.svg";
import submit from "../assets/img/submit.svg";
import cancel from "../assets/img/cancel.svg";

const onSubmit = (e) => {
  debugger;
};

const validate = (e) => {
  const errors = {};

  if (e.password && e.password.length > 18) {
    errors.password = "Password is incorrect.";
  }
  return errors;
};

function Profiles() {
  const { loggedIn } = useSelector(({ user }) => user);
  const [modalActive, setModalActive] = React.useState(false);

  return (
    <div className="app">
      <Header />
      <Form
        onSubmit={(obj) => {
          console.log(obj);
        }}
        validate={validate}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <h1>Profiles:</h1>
            <div className="profiles">
              <div className="profiles_block">
                <img
                  src={add}
                  alt="addProfiles"
                  onClick={() => setModalActive(true)}
                />
                <button className="create" onClick={() => setModalActive(true)}>
                  Create new profile
                </button>
                <Field
                  name="modal"
                  render={({ input, meta }) => (
                    <div>
                      <Modal active={modalActive} setActive={setModalActive}>
                        <span className="field">Name:</span>
                        <Field
                          name="name"
                          render={({ input, meta }) => (
                            <div>
                              <input {...input} placeholder="Your name" />
                              {meta.touched && meta.error && (
                                <span>{meta.error}</span>
                              )}
                              <br />
                              <br />
                            </div>
                          )}
                        />
                        <span className="field">Gender:</span>
                        <div className="div">
                          <Field
                            name="sex"
                            type="radio"
                            value="male"
                            component="input"
                          />
                          Male
                          <Field
                            name="sex"
                            type="radio"
                            value="female"
                            component="input"
                          />
                          Female
                          <br />
                          <br />
                        </div>
                        <span className="field">Birthdate:</span>
                        <Field
                          name="birthdate"
                          render={({ input, meta }) => (
                            <div>
                              <input
                                {...input}
                                placeholder="MM/DD/YYYY"
                                onfocus="(this.type='date')"
                                onblur="(this.type='text')"
                              />
                              {meta.touched && meta.error && (
                                <span>{meta.error}</span>
                              )}
                              <br />
                              <br />
                            </div>
                          )}
                        />
                        <span className="field">City:</span>
                        <Field
                          name="city"
                          render={({ input, meta }) => (
                            <div>
                              <input {...input} placeholder="New York" />
                              {meta.touched && meta.error && (
                                <span>{meta.error}</span>
                              )}
                            </div>
                          )}
                        />
                        <div className="modal_buttons">
                          <button type="submit" className="submit">
                            <img src={submit} alt="" />
                          </button>
                          <br />
                          <button
                            onClick={() => {
                              setModalActive(false);
                            }}
                          >
                            <img src={cancel} alt="" />
                          </button>
                        </div>
                      </Modal>
                      {meta.touched && meta.error && <span>{meta.error}</span>}
                    </div>
                  )}
                ></Field>
              </div>
            </div>
          </form>
        )}
      />
    </div>
  );
}

export default Profiles;
