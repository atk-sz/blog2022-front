import React, { useEffect, useState } from "react";
import "./css/About.css";
import { Header } from "../components";
import AboutLogo from "../assests/svgs/about.svg";
import { countMail } from "../api/api";

const About = () => {
  const [age, setAge] = useState(0);

  useEffect(() => {
    ageCal();
    async function sendCountMail() {
      await countMail();
    }
    sendCountMail();
  }, []);

  const ageCal = () => {
    var dob = new Date("10/22/1998");
    var month_diff = new Date() - dob.getTime();
    var age_dt = new Date(month_diff);
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);
    setAge(age);
  };

  return (
    <div id="about">
      <Header />
      <div className="about-body">
        <div className="about-img-div">
          <img className="about-img" src={AboutLogo} alt="About Logo" />
        </div>
        <div className="about-content">
          <p>
            Hello to all my readers, I am from Bangalore, {age} years old,
            Software Engineer, Poet, Social Worker, Counselor, and a{" "}
            <em className="friends-em">
              F<span style={{ color: "red" }}>.</span>R
              <span style={{ color: "blue" }}>.</span>I
              <span style={{ color: "yellow" }}>.</span>E
              <span style={{ color: "red" }}>.</span>N
              <span style={{ color: "yellow" }}>.</span>D
              <span style={{ color: "blue" }}>.</span>S
            </em>{" "}
            freak.
          </p>
          <p>
            Fooo!! So basically, I am a developer by passion, I write poetry
            when I am gloomy, I am a part-time social worker and I like to help
            people with their psychological issues and last but not least I am a
            crazy-ass fan of The Show FRIENDS
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
