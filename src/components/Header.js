import React from "react";
import { Link } from "react-router-dom";
import "./css/Header.css";

const Header = () => {
  return (
    <header
      style={{
        maxHeight: "50px",
      }}
    >
      <nav
        id="nav-button"
        className="znav"
        onClick={() => {
          console.log("clicked");
        }}
      >
        <div className="one-bar"></div>
        <div className="two-bar"></div>
        <div className="three-bar"></div>
      </nav>
      <Link to="/" style={{ textDecoration: "none" }} className="nav-link">
        <p href="#home" className="home-logo">
          Home
        </p>
      </Link>
      <ul className="navigation">
        <li>
          <Link
            to="/about"
            style={{ textDecoration: "none" }}
            className="nav-link"
          >
            <p>About me</p>
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
            to="/social-media"
            style={{ textDecoration: "none" }}
            className="nav-link"
          >
            <p>Social Media</p>
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
      <div id="mySidenav" className="sidenav">
        <p
          className="closebtn"
          onClick={() => {
            console.log("closed");
          }}
        >
          &times;
        </p>
        <p className="to-close-nav home-logo" href="#home">
          Home
        </p>
        <p className="to-close-nav" href="#about">
          About me
        </p>
        <p className="to-close-nav" href="#mywork">
          My Work
        </p>
        <p className="to-close-nav" href="#media">
          Social Media
        </p>
        <p className="to-close-nav" href="#feedback">
          Feedback
        </p>
      </div>
    </header>
  );
};

export default Header;
