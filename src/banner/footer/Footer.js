import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitterSquare,
  FaYoutube,
} from "react-icons/fa";

//style
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="icons-footer">
        <FaFacebookF style={{ marginRight: "10px", fontSize: "23px" }} />
        <FaInstagram style={{ marginRight: "10px", fontSize: "23px" }} />
        <FaTwitterSquare style={{ marginRight: "10px", fontSize: "23px" }} />
        <FaYoutube style={{ marginRight: "10px", fontSize: "23px" }} />
      </div>
      <div className="left">
        <p>Audio and Subtitles</p>
        <p>Media Center</p>
        <p>Privacy</p>
        <p>Contact Us</p>
      </div>
      <div className="middle-left">
        <p>Audio Description</p>
        <p>Investor Relations</p>
        <p>Legal Provisions</p>
      </div>
      <div className="middle-right">
        <p>Audio Description</p>
        <p>Investor Relations</p>
        <p>Legal Provisions</p>
      </div>
      <div className="right">
        <p>Gift Cards</p>
        <p>Terms of Use</p>
        <p>Corporate Information</p>
      </div>
    </div>
  );
}
