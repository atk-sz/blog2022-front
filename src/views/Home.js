import React from "react";
import { Header } from "../components";
import "./css/Home.css";

const Home = () => {
  return (
    <div>
      <Header />
      <section className="home" id="home">
        <div class="content">
          <div class="name-tag">
            <h1 class="name">SYED ZAID</h1>
          </div>
          <div class="bio-tag">
            <h5 class="bio">Engineer / Counsler / Poet</h5>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
