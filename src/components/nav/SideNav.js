import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./css/SideNav.css";

const SideNav = ({ handleStopPropOnSidenavDiv, closeNav }) => {
  const [active, setAcitve] = useState(null);

  useEffect(() => {
    switch (window.location.pathname) {
      case "/home":
        setAcitve("home");
        break;
      case "/about":
        setAcitve("about");
        break;
      case "/my-work":
        setAcitve("work");
        break;
      case "/contact-me":
        setAcitve("contact");
        break;
      case "/feedback":
        setAcitve("feedback");
        break;
      case "/payment-success":
        setAcitve("home");
        break;
      default:
        setAcitve("home");
        break;
    }
  }, []);

  return (
    <div
      id="mySidenav"
      className="sidenav"
      onClick={handleStopPropOnSidenavDiv}
    >
      <p className="closebtn" onClick={closeNav}>
        &times;
      </p>
      <Link to="/" style={{ textDecoration: "none" }}>
        <p
          className={`to-close-nav home-logo ${
            active === "home" ? "active" : ""
          }`}
          style={{
            fontWeight: "bolder",
          }}
        >
          Home
        </p>
      </Link>
      <Link to="/about" style={{ textDecoration: "none" }}>
        <p className={`to-close-nav ${active === "about" ? "active" : ""}`}>
          About me
        </p>
      </Link>
      <Link to="/my-work" style={{ textDecoration: "none" }}>
        <p className={`to-close-nav ${active === "work" ? "active" : ""}`}>
          My Work
        </p>
      </Link>
      <Link to="/contact-me" style={{ textDecoration: "none" }}>
        <p className={`to-close-nav ${active === "contact" ? "active" : ""}`}>
          Social Media
        </p>
      </Link>
      <Link to="/feedback" style={{ textDecoration: "none" }}>
        <p className={`to-close-nav ${active === "feedback" ? "active" : ""}`}>
          Feedback
        </p>
      </Link>
    </div>
  );
};

export default SideNav;
