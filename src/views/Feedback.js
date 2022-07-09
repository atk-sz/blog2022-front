import React from "react";
import { useState } from "react";
import { sendMail } from "../api/api";
import { Header } from "../components";
import "./css/Feedback.css";

const Feedback = () => {
  const initialValues = { name: "", email: "", message: "" };
  const [values, setValues] = useState(initialValues);
  const [mailSuccess, setMailSuccess] = useState(false);
  const [mailFail, setMailFail] = useState(false);
  const [mailDisable, setMailDisable] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSendMail = (e) => {
    e.preventDefault();
    setMailDisable(true);
    sendMail(values)
      .then((res) => {
        setValues(initialValues);
        setMailDisable(false);
        setMailFail(false);
        setMailSuccess(true);
        setTimeout(() => {
          setMailSuccess(false);
        }, 2000);
      })
      .catch((err) => {
        console.log("err");
        console.log(err);
        setMailDisable(false);
        setMailSuccess(false);
        setMailFail(true);
        setTimeout(() => {
          setMailFail(false);
        }, 2000);
      });
  };

  return (
    <div className="feedback">
      <Header />
      <div className="feedback-body">
        <h1>Feedback...</h1>
        <div className="feed">
          <div className="feed-form">
            <form onSubmit={handleSendMail} className="form-email">
              <input
                id="user-name"
                name="name"
                value={values.name}
                onChange={handleChange}
                type="text"
                placeholder="YOUR NAME"
                disabled={mailDisable}
                required
              />
              <input
                id="user-email"
                value={values.email}
                type="email"
                name="email"
                placeholder="EMAIL ADDRESS"
                onChange={handleChange}
                disabled={mailDisable}
                required
              />
              <textarea
                id="user-text"
                name="message"
                value={values.message}
                cols="10"
                rows="5"
                placeholder="MESSAGE"
                onChange={handleChange}
                disabled={mailDisable}
                required
              ></textarea>
              <button id="submit" type="submit" disabled={mailDisable}>
                SEND MESSAGE
              </button>
              <div className="onsubmit">
                {mailSuccess && <h4 id="email-success">Email Sent.</h4>}
                {mailFail && <h4 id="email-fail">Please try again.</h4>}
              </div>
            </form>
          </div>
        </div>
        <h1>UnderContruction</h1>
      </div>
    </div>
  );
};

export default Feedback;
