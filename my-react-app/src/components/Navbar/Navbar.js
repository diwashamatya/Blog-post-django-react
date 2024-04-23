import React from "react";

import vegeta from "../../assets/vegeta.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo-container">
        <img src={vegeta} className="logo" alt="Neutroline Logo" />
      </div>
      <div className="right-content">
        <h3 className="user-name">Diwash Amatya</h3>
      </div>
    </div>
  );
};

export default Navbar;
