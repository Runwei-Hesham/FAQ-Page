import "../css/Navbar.css";
import newLogo from "../Gallery/TrustFundRegistryImages/Trustfundregistery-01.png";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  

  return (
    <div className="navbar">
      <div className="logo-container">
        <img src={newLogo} alt="TrustFundRegistry" className="logo" />
        <div className="logo-text">
          TrustFundRegistry
          <sup className="tm">TM</sup>
        </div>
      </div>
      <button className="menu-button">
        <div className="menu-icon"></div>
        <div className="menu-icon"></div>
        <div className="menu-icon"></div>
      </button>
      <nav className="nav-links">
        <span>About Us</span>
        <span>Gifting</span>
        <span>Learn</span>
        <span>Help</span>
      </nav>
      <div className="">
        <span className="login-button">Login</span>
        <span className="create-account-button">Create an Account</span>
      </div>
    </div>
  );
};

export default Navbar;
