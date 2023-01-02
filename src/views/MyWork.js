import React, { useState } from "react";
import { Header } from "../components";
import WorkLogo from "../assests/svgs/feeling_proud.svg";
import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";
import "./css/MyWork.css";
import { useEffect } from "react";

const WebCannonZExp = ({ setPeriod }) => {
  useEffect(() => {
    setPeriod("Mar2021 - Nov2021");
  }, []);
  return (
    <p>
      Worked as a <span className="role-bold">Full Stack Developer</span> at a
      start-up{" "}
      <a
        className="job-link"
        href="https://webcannonz.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        WebCannon-Z
      </a>
      . Mostly used <span className="work-highlight">MERN Stack</span>{" "}
      technology to work on real-time web applications and{" "}
      <span className="work-highlight">react native & expo</span> to work on
      native applications. Applications such as eCommerce sites and simple ERP
      apps.
    </p>
  );
};

const HitachiExp = ({ setPeriod }) => {
  useEffect(() => {
    setPeriod("Dec2021 - July2022");
  }, []);
  return (
    <p>
      Worked as a <span className="role-bold">Big Data Engineer</span> at{" "}
      <a
        className="job-link"
        href="https://www.hitachi.co.in/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Hitachi India Pvt Ltd
      </a>
      . Here I was a part of{" "}
      <span className="work-highlight">FinTech Project</span> that helps in
      detecting fraud transactions over POS machines. Worked on technologies
      like HDFS, Ambari Cluster, Spark, Scala, Hive & much more.
    </p>
  );
};

const CurrentExp = ({ setPeriod }) => {
  useEffect(() => {
    setPeriod("Aug2022 - Current");
  }, []);
  return (
    <p>
      Working as a <span className="role-bold">Software Engineer</span> at{" "}
      <a
        className="job-link"
        href="https://kerv.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Kerv Digital
      </a>
      . Here I am a <span className="work-highlight">product developer</span>,
      working with dotnet(C#) in back-end & React in front-end. Kerv Digital
      (former CloudThing India) is a multi-national software development company
      that majorly works on CRM projects for other MNC's. Here i got a good
      exposure to microsoft power plateform with which one can create & maintain
      low-code applications that are mainly used by companies for thier back-end
      processes.
    </p>
  );
};

const MyWork = () => {
  const [period, setPeriod] = useState("Aug 2022 - Current");
  const [dispCount, setDispCount] = useState(0);
  const [timeouts, setTimeouts] = useState([]);

  useEffect(() => {
    if (dispCount < 2) timeouts.push(setTimeout(increamentCounter, 7000));
    else timeouts.push(setTimeout(reinitializeCounter, 7000));
  }, [dispCount]);

  const clearTimeOuts = () => {
    for (var i = 0; i < timeouts.length; i++) clearTimeout(timeouts[i]);
    setTimeouts([]);
  };

  const increamentCounter = () => {
    setDispCount((dispCount) => dispCount + 1);
    clearTimeOuts();
  };

  const deccreamentCounter = () => {
    setDispCount((dispCount) => dispCount - 1);
    clearTimeOuts();
  };

  const reinitializeCounter = () => {
    setDispCount(0);
    clearTimeOuts();
  };

  const nextExp = () => {
    if (dispCount < 2) increamentCounter();
    else reinitializeCounter();
  };

  const prevExp = () => {
    if (dispCount > 0) deccreamentCounter();
    else setDispCount(2);
    clearTimeOuts();
  };

  if (dispCount < 0 || dispCount > 2) setDispCount(0);

  // console.log("timeouts");
  // console.log(timeouts);

  return (
    <div className="my-work">
      <Header />
      <div className="work-body">
        <div className="work-boby-top">
          <div className="work-content">
            <h2>Professional Experience</h2>
            <div className="experience-bottom">
              <div className="experience-bottom-left">
                <BiRightArrowAlt
                  onClick={nextExp}
                  className="exp-arrow exp-right-arrow"
                />
                <BiLeftArrowAlt
                  onClick={prevExp}
                  className="exp-arrow exp-left-arrow"
                />
              </div>
              <div className="experience-bottom-right">
                <div className="exp-year">{period}</div>
              </div>
            </div>
            <hr style={{ marginBottom: "20px" }} />
            {
              {
                0: <CurrentExp setPeriod={setPeriod} />,
                1: <HitachiExp setPeriod={setPeriod} />,
                2: <WebCannonZExp setPeriod={setPeriod} />,
              }[dispCount]
            }
          </div>
          <div className="work-img-div">
            <img className="work-img" src={WorkLogo} alt="Work Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWork;
