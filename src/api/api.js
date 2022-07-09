import axios from "axios";

export const sendMail = async (values) => {
  console.log("checking");
  console.log(process.env.REACT_APP_BACKEND_API);
  return await axios.post(`${process.env.REACT_APP_BACKEND_API}/sendmail`, {
    values,
  });
};
