import React from "react";
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
      <p href="#home" className="home-logo">
        Home
      </p>
      <ul className="navigation">
        <li>
          <p href="#about">About me</p>
        </li>
        <li>
          <p href="#mywork">My Work</p>
        </li>
        <li>
          <p href="#media">Social Media</p>
        </li>
        <li>
          <p href="#feedback">Feedback</p>
        </li>
      </ul>
      <div id="mySidenav" className="sidenav">
        <p href="javascript:void(0)" className="closebtn" onclick="closeNav()">
          &times;
        </p>
        <p className="to-close-nav" href="#home" className="home-logo">
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
