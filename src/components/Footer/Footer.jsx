import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="wrapper">
      <div id="footer">
        <div className="row">
          <div className="subscribeCard">
            <div className="subTitle">Subscribe to our news letter</div>
            <div className="subContent">
              I've been using LegacyLine for several years now, and I couldn't
              be happier with their services. The mobile banking app they
              provide.
            </div>
            <div
              className="row"
              style={{ gap: "33px", justifyContent: "space-between" }}
            >
              <input type="text" placeholder="Enter your email..." />
              <button>Subscribe</button>
            </div>
          </div>
          <div className="menu">
            <ul style={{ listStyle: "none" }}>
              <li style={{ fontWeight: "bold", color: "black" }}>Menu</li>
              <li>Home</li>
              <li>Services</li>
              <li>Open Bank Account</li>
            </ul>
          </div>
          <div className="menu">
            <ul style={{ listStyle: "none" }}>
              <li style={{ fontWeight: "bold", color: "black" }}>Help</li>
              <li>About us</li>
              <li>Contact</li>
              <li>Support</li>
            </ul>
          </div>
        </div>
        <div
          className="row"
          style={{
            innerWidth: "fit-content",
            gap: "450px",
            borderTop: "1px solid #E5E5E5",
            paddingTop: "30px",
            paddingBottom: "30px",
          }}
        >
          <div className="rights">2023. All Rights Reserved</div>
          <div className="privacy">Privacy & Policy</div>
          <div className="iconList">ig fb tt</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
