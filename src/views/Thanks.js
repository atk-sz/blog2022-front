import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThanksYou } from "../components";

const Thanks = () => {
  const [secs, setSecs] = useState(10);
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
      <ThanksYou secs={secs} />
    </div>
  );
};

export default Thanks;
