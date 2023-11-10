// HeaderComponent.js
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("login");
    navigate("/");
  };
  const handleInfo = () => {
    navigate("/info");
  };
  return (
    <div className="container">
      <nav className="navbar navbar-expand navbar-light bg-light">
        <a
          href="https://www.geeksynergy.com/"
          target="_blank"
          rel="noopener noreferrer">
          GEEKSYENERGY
        </a>

        <ul className="navbar-nav ml-auto ">
          <li className="nav-item">
            <button className="btn btn-outline-info mx-1" onClick={handleInfo}>
              Company Info
            </button>
          </li>
          <li className="nav-item">
            <button className="btn btn-outline-info" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
