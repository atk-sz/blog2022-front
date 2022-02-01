import React from "react";
import { Header } from "../components";
import "./css/Home.css";

const Home = () => {
  return (
    <div>
      <Header />
      <section className="home" id="home">
        <div className="content">
          <div className="name-tag">
            <h1 className="name">SYED ZAID</h1>
          </div>
          <div className="bio-tag">
            <h5 className="bio">Engineer / Counsler / Poet</h5>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
