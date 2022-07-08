import React, { useEffect, useState } from "react";
import "./css/About.css";
import { Header } from "../components";
import "../assests/svgs/about.svg";
import AboutLogo from "../assests/svgs/about.svg";
// import AboutSVG from "../assests/svgs/AboutSVG";

const About = () => {
  let [age, setAge] = useState(0);

  useEffect(() => {
    ageCal();
  }, []);

  const ageCal = () => {
    var dob = new Date("10/22/1998");
    //calculate month difference from current date in time
    // var month_diff = Date.now("10/22/2024") - dob.getTime();
    var month_diff = new Date("10/21/2022") - dob.getTime();

    //convert the calculated difference in date format
    var age_dt = new Date(month_diff);

    //extract year from date
    var year = age_dt.getUTCFullYear();

    //now calculate the age of the user
    var age = Math.abs(year - 1970);

    //display the calculated age
    setAge(age);
  };

  return (
    <div id="about">
      <Header />
      <div className="about-body">
        <div className="about-content">
          {/* Hello to all my readers, iam a 23 year old software engineer from Bangalore.  */}
          <p>
            Hello to all my readers, I am from Bangalore, {age} years old,
            Software Engineer, Poet, Social Worker, Counselor and a{" "}
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
            Fooo!! So, basically iam a developer by passion, i write poetry when
            iam gloomy, iam a part time social worker and i like to help people
            with thier psychological issues and last but not the least iam a
            crazy ass fan of The Show FRIENDS
          </p>
        </div>
        <div className="about-img-div">
          <img className="about-img" src={AboutLogo} alt="About Logo" />
        </div>
      </div>
    </div>
  );
};

export default About;
