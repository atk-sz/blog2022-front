import React from "react";
import { useState } from "react";
import { sendMail } from "../api/api";
import { Header } from "../components";
import "./css/Feedback.css";

const Feedback = () => {
  const initialValues = { name: "", email: "", message: "" };
  const initialValues1 = { fname: "", lname: "", amount: "" };
  const [values, setValues] = useState(initialValues);
  const [values1, setValues1] = useState(initialValues1);
  const [mailSuccess, setMailSuccess] = useState(false);
  const [mailFail, setMailFail] = useState(false);
  const [mailDisable, setMailDisable] = useState(false);
  const [cardMode, setCardMode] = useState(false);

  // const ref = useRef(null);
  // const ref1 = useRef(null);

  // useEffect(() => {
  //   console.log("width", ref.current.offsetWidth);
  //   // 322;
  //   console.log("width", ref1.current.offsetHeight);
  //   // 430;
  // }, []);

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
        // console.log("err");
        console.log(err);
        setMailDisable(false);
        setMailSuccess(false);
        setMailFail(true);
        setTimeout(() => {
          setMailFail(false);
        }, 2000);
      });
  };

  const handleChange1 = (e) => {
    e.preventDefault();
    setValues1({ ...values1, [e.target.name]: e.target.value });
  };

  const handleAmountSub = (e) => {
    e.preventDefault();
    setCardMode(true);
    console.log("Amout");
  };

  return (
    <div className="feedback">
      <Header />
      <div className="feedback-body">
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
        <div className="thank-you-div">
          <h2>Thank You.</h2>
          <p>
            Your feedback is highly appreciated and will help me to improve. 😊
            You can always support me & my work by any means..
          </p>
          <p>
            For financial support you can use the following QR code to donate...
          </p>
          <img
            className="upi-img"
            src="https://res.cloudinary.com/zaid/image/upload/v1606458146/Myblog-1/QR_iicqlj.jpg"
            alt=""
          />
        </div>
        <div className="card-payment-div">
          {cardMode ? (
            <div className="card-payment-from-div">Payment</div>
          ) : (
            <>
              <h4>You can can also donate via card</h4>
              <form onSubmit={handleAmountSub}>
                <input
                  type="text"
                  name="fname"
                  placeholder="First Name (optional)"
                  value={values1.fname}
                  onChange={handleChange1}
                />
                <input
                  type="text"
                  name="lname"
                  placeholder="Last Name (optional)"
                  value={values1.lname}
                  onChange={handleChange1}
                />
                {/* <input type="number" name="phone" placeholder="Phone (optional)" /> */}
                <input
                  type="number"
                  name="amount"
                  id="amount"
                  placeholder="Rs."
                  value={values1.amount}
                  onChange={handleChange1}
                  required
                />
                <button className="card-next-btn">Pay using card</button>
                <div className="card-logo">
                  <img
                    alt="Credit Card Logos"
                    title="Credit Card Logos"
                    src="http://www.credit-card-logos.com/images/visa_credit-card-logos/visa_mastercard_1.gif"
                    width="60"
                    height="19"
                    border="0"
                  />
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
