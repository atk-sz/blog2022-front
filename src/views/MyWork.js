import React, { useState } from "react";
import { Header } from "../components";
import WorkLogo from "../assests/svgs/feeling_proud.svg";
import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";
import "./css/MyWork.css";
import { useEffect } from "react";

const WebCannonZExp = ({ setPeriod, dispCount }) => {
  useEffect(() => {
    setPeriod("Mar2021 - Nov2021");
  }, [setPeriod]);
  return (
    <p className={dispCount === 2 ? "fadeIn" : "fadeOut"}>
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
      {/* Also managed a team of interns & passed on technology knowledge
      through trainings */}
    </p>
  );
};

const HitachiExp = ({ setPeriod, dispCount }) => {
  useEffect(() => {
    setPeriod("Dec2021 - July2022");
  }, [setPeriod]);
  return (
    <p className={dispCount === 1 ? "fadeIn" : "fadeOut"}>
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

const CurrentExp = ({ setPeriod, dispCount }) => {
  useEffect(() => {
    setPeriod("Aug2022 - Current");
  }, [setPeriod]);
  return (
    <p className={dispCount === 0 ? "fadeIn" : "fadeOut"}>
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
      working with dotnet(C#) in back-end & React in front-end.
      {/* Kerv Digital
      (former CloudThing India) is a multi-national software development company
      that majorly works on CRM projects for other MNC's. */}{" "}
      Also i got a good exposure to microsoft power plateform(dynamics-365) with
      which one can create & maintain low-code applications.
      {/* that are mainly used by companies
      for thier back-end processes. */}
    </p>
  );
};

const MyWork = () => {
  const [period, setPeriod] = useState("Aug 2022 - Current");
  const [dispCount, setDispCount] = useState(0);
  const [timeouts, setTimeouts] = useState([]);

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

  // useEffect(() => {
  //   if (dispCount < 2) timeouts.push(setTimeout(increamentCounter, 10000));
  //   else timeouts.push(setTimeout(reinitializeCounter, 10000));
  // }, [dispCount, increamentCounter, reinitializeCounter]);

  const clearTimeOuts = () => {
    for (var i = 0; i < timeouts.length; i++) clearTimeout(timeouts[i]);
    setTimeouts([]);
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
                0: <CurrentExp setPeriod={setPeriod} dispCount={dispCount} />,
                1: <HitachiExp setPeriod={setPeriod} dispCount={dispCount} />,
                2: (
                  <WebCannonZExp setPeriod={setPeriod} dispCount={dispCount} />
                ),
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
