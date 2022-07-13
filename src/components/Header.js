import React from "react";
import { Link } from "react-router-dom";
import "./css/Header.css";
import { SideNav } from ".";

const Header = () => {
  const handleStopPropOnSidenavDiv = (e) => {
    e.stopPropagation();
  };

  const closeNav = (e) => {
    e.stopPropagation();
    const sideNav = document.querySelector(".sidenav");
    if (sideNav) {
      sideNav.style.width = "0px";
    }
  };
  const openNav = (e) => {
    e.stopPropagation();
    const sideNav = document.querySelector(".sidenav");
    if (sideNav) {
      sideNav.style.width = "250px";
    }
  };

  return (
    <header
      style={{
        maxHeight: "50px",
        marginTop: "10px",
      }}
    >
      <nav id="nav-button" className="znav" onClick={openNav}>
        <div className="one-bar"></div>
        <div className="two-bar"></div>
        <div className="three-bar"></div>
      </nav>
      <Link to="/" style={{ textDecoration: "none" }} className="nav-link">
        <p className="home-logo">Home</p>
      </Link>
      <ul className="navigation">
        <li>
          <Link
            to="/about"
            style={{ textDecoration: "none" }}
            className="nav-link"
          >
            <p>About Me</p>
          </Link>
        </li>
        <li>
          <Link
            to="/my-work"
            style={{ textDecoration: "none" }}
            className="nav-link"
          >
            <p>My Work</p>
          </Link>
        </li>
        <li>
          <Link
            to="/contact-me"
            style={{ textDecoration: "none" }}
            className="nav-link"
          >
            <p>Contact Me</p>
          </Link>
        </li>
        <li>
          <Link
            to="/feedback"
            style={{ textDecoration: "none" }}
            className="nav-link"
          >
            <p>Feedback</p>
          </Link>
        </li>
      </ul>
      <SideNav
        handleStopPropOnSidenavDiv={handleStopPropOnSidenavDiv}
        closeNav={closeNav}
      />
    </header>
  );
};

export default Header;
