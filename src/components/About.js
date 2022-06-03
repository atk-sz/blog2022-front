import React from "react";
import "./css/About.css";
import introPic from "../assests/College.jpg";
import { FaBirthdayCake } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <div className="about-left">
        <div className="about-left-bio">
          <h3>Hi! myself Syed Zaid, born & brought up in Bangalore and Iam 24 Years Old.</h3>
          <h3>I enjoy learning & playing with new technologies. Iam an Engineer graduated in 2020, have a lot of dreams to achieve but currently hustling through life to reach to my goals. Talking about goals, my goals are to serve my nation, my community, our earth & mostly my family</h3>
        </div>
      </div>
      <div className="about-right">
        <img src={introPic} alt="Logo" />
      </div>
    </section>
  );
};

export default About;
