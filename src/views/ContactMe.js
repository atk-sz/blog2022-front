import React from "react";
import { Header } from "../components";
import ContactLogo from "../assests/dp.png";
import { FiFacebook } from "react-icons/fi";
import { SiWhatsapp } from "react-icons/si";
import { RiLinkedinFill } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";
import "./css/ContactMe.css";

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
            <div className="social_media">
              <span
                className="social-media-icon"
                onClick={() =>
                  (window.location = "mailto:syed.zaid525@gmail.com")
                }
              >
                <AiFillGoogleCircle id="gmail-icon" />
              </span>
              <span className="social-media-icon">
                <a
                  href="//api.whatsapp.com/send?phone=918660240484"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <SiWhatsapp id="whatsapp-icon" />
                </a>
              </span>
              <span className="social-media-icon">
                <a
                  href="https://www.instagram.com/attitudeking.sz/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <AiOutlineInstagram id="insta-icon" />
                </a>
              </span>
              <span className="social-media-icon">
                <a
                  href="https://www.facebook.com/syedzaid135/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FiFacebook id="fb-icon" />
                </a>
              </span>
              <span className="social-media-icon">
                <a
                  href="https://github.com/atk-sz"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <BsGithub id="gt-icon" />
                </a>
              </span>
              <span className="social-media-icon">
                <a
                  href="https://www.linkedin.com/in/syed-zaid-06436a1b0/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <RiLinkedinFill id="in-icon" />
                </a>
              </span>
              <span className="social-media-icon">
                <a
                  href="https://twitter.com/syedzaid135"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <AiOutlineTwitter id="tw-icon" />
                </a>
              </span>
            </div>
            <a
              href="https://drive.google.com/file/d/1LDEJxnN6wsKZMRI3p4v944WYOLWBcoNR/view?usp=sharing"
              target="_blank"
              rel="noreferrer noopener"
            >
              <button className="btns-contact">See my resume</button>
            </a>
            <a
              href="https://my-zblog.herokuapp.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <button className="btns-contact">
                Checkout my old protfolio
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
