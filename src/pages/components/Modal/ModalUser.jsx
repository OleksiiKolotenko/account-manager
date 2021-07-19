import React, { useRef } from "react";
import { Form, Field } from "react-final-form";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../Modal/modal.scss";
import { editUser } from "../../../redux/actions/user";
import submit from "../../../assets/img/submit.svg";
import cancel from "../../../assets/img/cancel.svg";

const validate = (e) => {
  const errors = {};
  let regexName = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;

  if (e.username && e.username.match(regexName)) {
    errors.username = "Special symbols are forbiden";
  }
  if (e.username && e.username.length < 6) {
    errors.username = "Name is too short (<6)";
  }

  if (!e.username) {
    errors.username = "Name can't be empty";
  }

  if (e.username && e.username.length > 16) {
    errors.username = "Name is too long (>16)";
  }

  if (e.username && e.username.includes("@")) {
    errors.username = "Such symbols are forbiden.";
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

  return errors;
};

export const ModalUser = ({ active, setModalActive, toggleModal }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector(({ user }) => user);
  const activeUserId = id ? id : user.user.id;
  const bgRef = useRef();
  const outsideClick = (e) => {
    if (e.target === bgRef.current) {
      setModalActive(false);
    }
  };

  const onSubmit = async (obj) => {
    dispatch(editUser(id, obj));
    setModalActive(false);
  };

  const close = () => {
    setModalActive(false);
  };

  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={outsideClick}
      ref={bgRef}
    >
      <div className={active ? "modal_content active" : "modal_content"}>
        <Form
          onSubmit={onSubmit}
          validate={validate}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Field
                name="modal"
                render={({ input, meta }) => (
                  <div>
                    <span className="field">Username:</span>
                    <Field
                      name="username"
                      render={({ input, meta }) => (
                        <div>
                          <input {...input} placeholder="Username" />
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
                    <span className="field">Email:</span>
                    <Field
                      name="email"
                      render={({ input, meta }) => (
                        <div>
                          <input {...input} placeholder="email" />
                          <br />
                          <br />

                          {meta.touched && meta.error && (
                            <span>{meta.error}</span>
                          )}
                        </div>
                      )}
                    />
                    <span className="field">Roles:</span>
                    <div className="div">
                      <Field
                        name="roles"
                        type="radio"
                        value="USER"
                        component="input"
                      />
                      USER
                      <Field
                        name="roles"
                        type="radio"
                        value="ADMIN"
                        component="input"
                      />
                      ADMIN
                      <br />
                    </div>

                    <div className="modal_buttons">
                      <button type="submit" className="submit">
                        <img src={submit} alt="" />
                      </button>
                      <button onClick={close}>
                        <img src={cancel} alt="" />
                      </button>
                      <br />
                    </div>
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </div>
                )}
              ></Field>
            </form>
          )}
        />
      </div>
    </div>
  );
};

export default ModalUser;
