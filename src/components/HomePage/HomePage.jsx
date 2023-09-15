import React from "react";
import "./HomePage.css";
import phoneImage from "../../assets/img/phone.png";
import bodyInternalImage from "../../assets/img/internal.png";

const HomePage = () => {
  return (
    <div className="wrapper">
      <div id="home">
        <div className="mainContainer">
          <div className="title">
            Discover Financial Freedom with LegacyLine
          </div>
          <div className="description">
            Welcome to our bank's website, where we provide secure financial
            solutions tailored to meet your unique needs.
          </div>
          <div className="buttonList">
            <button className="openBtn">Open Bank Account</button>
            <button className="learnBtn">Learn More</button>
          </div>
          <div className="statsList">
            <div className="statItem">
              <div className="statNumber">0.1%</div>
              <div className="statArea">Transaction Fees</div>
            </div>
            <div className="statItem">
              <div className="statNumber">+14%</div>
              <div className="statArea">Savings Percentage</div>
            </div>
            <div className="statItem">
              <div className="statNumber">+2.9M</div>
              <div className="statArea">Buisness Owner</div>
            </div>
          </div>
        </div>
        <div className="imageContainer">
          <div className="phoneImage">
            <img src={bodyInternalImage} className="internalImg"></img>
            <img src={phoneImage} className="phoneImage"></img>
          </div>
          <div className="card">
            <div className="cardLogo">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
              >
                <g clip-path="url(#clip0_0_144)">
                  <circle
                    cx="15.3243"
                    cy="24.4588"
                    r="15.3243"
                    fill="#EB001B"
                  />
                  <circle
                    cx="33.7135"
                    cy="24.4588"
                    r="15.3243"
                    fill="#F79E1B"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24.5189 36.7182C28.7492 34.2711 31.5953 29.6973 31.5953 24.4588C31.5953 19.2202 28.7492 14.6464 24.5189 12.1993C20.2886 14.6464 17.4425 19.2202 17.4425 24.4588C17.4425 29.6973 20.2886 34.2711 24.5189 36.7182Z"
                    fill="#FF5F00"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_0_144">
                    <rect width="49.0378" height="49.0378" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="cardNumber">**** **** **** ****</div>
            <div className="cardDetails">
              <div className="cardLimit">$1000 000 Limit</div>
              <div className="cardValid">Valid Till </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
