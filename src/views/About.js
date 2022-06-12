import React from "react";
import "./css/About.css";
import { Header } from "../components";
// import ReactLogo from './logo.svg';
import AboutLogo from "../assests/svgs/about.svg";

const About = () => {
  return (
    <div id="about">
      <Header />
      <img src={AboutLogo} alt="About Logo" />
      <h1>Aboz</h1>
    </div>
  );
};

export default About;
