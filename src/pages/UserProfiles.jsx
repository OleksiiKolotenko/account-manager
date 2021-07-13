import React from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import Modal from "../Modal/Modal";
import { Form, Field } from "react-final-form";
import add from "../assets/img/add.svg";
import submit from "../assets/img/submit.svg";
import cancel from "../assets/img/cancel.svg";
import { profileCreate } from "../api/api";

const onSubmit = (e) => {
  debugger;
};

const validate = (e) => {
  const errors = {};

  if (e.name && e.name.length > 20) {
    errors.name = "Name is too long.";
  }
  if (!e.name) {
    errors.name = "Name can't be empty.";
  }
  if (!e.city) {
    errors.city = "Please type in your city.";
  }
  if (e.birthdate && e.birthdate.length > 10) {
    errors.birthdate = "Impossible date.";
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
        onSubmit={async (obj) => {
          const profile = await profileCreate(obj);
          if (profile.name) {
            setModalActive(false);
          }
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
                                <span>
                                  {" "}
                                  <br />
                                  {meta.error}
                                </span>
                              )}
                              <br />
                              <br />
                            </div>
                          )}
                        />
                        <span className="field">Gender:</span>
                        <div className="div">
                          <Field
                            name="gender"
                            type="radio"
                            value="male"
                            component="input"
                          />
                          Male
                          <Field
                            name="gender"
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
                                type="date"
                                placeholder="MM/DD/YYYY"
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
                              <br />
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
