import axios from "axios";

export const sendMail = async (values) => {
  return await axios.post(`${process.env.REACT_APP_BACKEND_API}/sendmail`, {
    values,
  });
};
