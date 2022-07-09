import React from "react";
import { Header } from "../components";
import ContactLogo from "../assests/dp.png";
import "./css/ContactMe.css";
// import {  } from "react-icons/gr";
import { FiFacebook } from "react-icons/fi";
import { SiWhatsapp } from "react-icons/si";
import { RiLinkedinFill } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";
import {
  AiFillGoogleCircle,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

const ContactMe = () => {
  return (
    <div>
      <Header />
      <div className="contact-body">
        <div className="contact-boby-top">
          <div className="contact-img-div">
            <img className="contact-img" src={ContactLogo} alt="Contact Logo" />
          </div>
          <div className="contact-content">
            {/* <h1>Connect me on:</h1> */}
            <div className="social_media">
              <span className="social-media-icon">
                <AiFillGoogleCircle id="gmail-icon" />
              </span>
              <span className="social-media-icon">
                {/* <a href="//api.whatsapp.com/send?phone=918660240484"> */}
                <SiWhatsapp id="whatsapp-icon" />
                {/* </a> */}
              </span>
              <span className="social-media-icon">
                <AiOutlineInstagram id="insta-icon" />
              </span>
              <span className="social-media-icon">
                <FiFacebook id="fb-icon" />
              </span>
              <span className="social-media-icon">
                <BsGithub id="gt-icon" />
              </span>
              <span className="social-media-icon">
                <RiLinkedinFill id="in-icon" />
              </span>
              <span className="social-media-icon">
                <AiOutlineTwitter id="tw-icon" />
              </span>
            </div>
            <button id="resume-btn">See my resume</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
