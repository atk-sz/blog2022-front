import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./css/ThankYou.css";

const ThankYou = () => {
  const [secs, setSecs] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    let i = secs;
    setInterval(() => {
      if (i > 0) {
        i--;
        setSecs(i);
      }
    }, [1000]);
  }, [secs]);

  useEffect(() => {
    if (secs <= 0) navigate("/");
  });

  return (
    <div className="payment-success">
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
    </div>
  );
};

export default ThankYou;
