import React, { useEffect } from "react";
import { Header, Main } from "../components";
import { wakeUpCall } from "../api/api";

const Home = () => {
  useEffect(() => {
    (async () => {
      await wakeUpCall();
    })();
  }, []);

  return (
    <div>
      <Header />
      <Main />
    </div>
  );
};

export default Home;
