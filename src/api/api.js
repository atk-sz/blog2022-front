import axios from "axios";

export const wakeUpCall = async () => {
  return await axios.get(`${process.env.REACT_APP_BACKEND_API}/wake-up-call`);
};

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

export const countMail = async () => {
  return await axios.post(`${process.env.REACT_APP_BACKEND_API}/countmail`);
};
