import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import "./css/ThanksYou.css";

const ThanksYou = ({ secs }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto mt-5">
          <div className="payment">
            <div className="payment_header">
              <div className="check">
                <i className="fa fa-check" aria-hidden="true">
                  {" "}
                  <FaCheckCircle color="green" />
                </i>
              </div>
            </div>
            <div className="content">
              <h1>Payment Success !</h1>
              <p>Thank you for your support😊. </p>
            </div>
            <h6>You'll be redirected to home within {secs} secs.</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThanksYou;
