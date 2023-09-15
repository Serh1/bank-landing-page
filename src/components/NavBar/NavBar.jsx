import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">LegacyLine.</div>
      <div className="navbarItems">
        <a to="/" className="navbarItem">
          Home
        </a>
        <a to="/" className="navbarItem">
          Services
        </a>
        <a to="/" className="navbarItem">
          Contact
        </a>
        <a to="/#contact" className="navbarItem">
          About Us
        </a>
        <button className="signupBtn">Sign Up</button>
      </div>
    </div>
  );
};

export default NavBar;