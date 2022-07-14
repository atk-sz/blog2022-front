import axios from "axios";

export const sendMail = async (values) => {
  return await axios.post(`${process.env.REACT_APP_BACKEND_API}/sendmail`, {
    values,
  });
};

export const paymentIntent = async (values) => {
  return await axios.post(
    `${process.env.REACT_APP_BACKEND_API}/create-payment-intent`,
    {
      values,
    }
  );
};