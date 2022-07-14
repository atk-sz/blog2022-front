import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { IoMdArrowRoundBack } from "react-icons/io";
import "./css/CheckoutForm.css";
import ThankYou from "./ThankYou";

const CheckoutForm = ({ clientSecret, goBack }) => {
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const stripe = useStripe();
  const elements = useElements();

  const handleChange = async (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setProcessing(true);
    setDisabled(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
      setDisabled(false);
    } else {
      console.log("Payment success");
      setError(null);
      setProcessing(false);
      setSucceeded(true);
    }
  };

  return (
    <div className="payment-fix-div">
      {succeeded && (
        <div className="payment-success-message">
          <ThankYou />
        </div>
      )}
      <div className="back-arrow-payment">
        <p onClick={goBack}>
          <IoMdArrowRoundBack id="back-payment" />
        </p>
      </div>
      <form className="payment-form" onSubmit={handleSubmit}>
        <CardElement id="card-element" onChange={handleChange} />
        <button
          disabled={processing || disabled || succeeded}
          id="payment-submit"
        >
          <span id="button-text">
            {processing ? (
              <div className="spinner" id="spinner"></div>
            ) : (
              "Pay now"
            )}
          </span>
        </button>
        {/* Show any error that happens when processing the payment */}
        {error && (
          <h5 className="card-error" role="alert">
            {error}
          </h5>
        )}
        {/* Show a success message upon completion */}
        {/* <p className={succeeded ? "result-message" : "result-message hidden"}>
              Payment succeeded, see the result in your
              <a
              href={`https://dashboard.stripe.com/test/payments`}
              >
              {" "}
              Stripe dashboard.
              </a> Refresh the page to pay again.
            </p> */}
      </form>
    </div>
  );
};

export default CheckoutForm;
