import React from "react";
import { Header } from "../components";
import WorkLogo from "../assests/svgs/feeling_proud.svg";
import "./css/MyWork.css";

const MyWork = () => {
  return (
    <div className="my-work">
      <Header />
      <div className="work-body">
        <div className="work-boby-top">
          <div className="work-img-div">
            <img className="work-img" src={WorkLogo} alt="Work Logo" />
          </div>
          <div className="work-content">
            <h2>Professional Experience</h2>
            <p>
              I have worked as a{" "}
              <span className="role-bold">Full Stack Developer</span> at a
              start-up{" "}
              <a
                className="job-link"
                href="https://webcannonz.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                WebCannon-Z
              </a>{" "}
              for alomost a year. Mostly used{" "}
              <span className="work-highlight">MERN Stack</span> technology to
              work on real-time web applications and{" "}
              <span className="work-highlight">react native & expo</span> to
              work on native applications. Applications such as ecommerce sites
              and simple ERP apps.
            </p>
            <hr style={{ margin: "10px" }} />
            <p>
              Currently working as a{" "}
              <span className="role-bold">Big Data Engineer</span> at{" "}
              <a
                className="job-link"
                href="https://www.hitachi.co.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hitachi India
              </a>{" "}
              from Dec 2021. Here iam a part of{" "}
              <span className="work-highlight">FinTech Project</span> that helps
              in detecting fraud transactions over POS machines. Working with
              technologies such as HDFS, Ambari Cluster, Spark, Scala, Hive &
              much more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWork;
