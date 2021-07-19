import React, { useRef } from "react";
import { Form, Field } from "react-final-form";
import { useParams } from "react-router-dom";
import "../Modal/modal.scss";
import { profileCreate, profileAdminCreate } from "../../../api/api";
import { editProfiles, fetchProfiles } from "../../../redux/actions/profiles";
import { useDispatch, useSelector } from "react-redux";
import submit from "../../../assets/img/submit.svg";
import cancel from "../../../assets/img/cancel.svg";

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

  if (e.birthdate && e.birthdate.length > new Date()) {
    errors.birthdate = "Impossible date.";
  }

  return errors;
};

export const Modal = ({
  active,
  setModalActive,
  toggleModal,
  status = "CREATE",
  profileId,
}) => {
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
    if (status === "CREATE") {
      let profile = null;
      if (id) {
        profile = await profileAdminCreate(obj, id);
      } else {
        profile = await profileCreate(obj);
      }
      if (profile.name) {
        setModalActive(false);
        dispatch(fetchProfiles(activeUserId));
      }
    } else if (status === "EDIT_USER") {
    } else {
      dispatch(editProfiles(activeUserId, obj, profileId));
      setModalActive(false);
    }
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
                            min="1910-01-01"
                            max="2021-07-14"
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

export default Modal;
