import React from "react";
import logo from '../images/wordmark.png';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark justify-content-end sticky-top">
      <a className="navbar-brand" href="#">
        <img src={logo} alt="wordmark" style={{ height: '25px'}} />
      </a>
      <button className="btn btn-info ml-auto mr-1">Login</button>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse flex-grow-0"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav text-right">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Sign Up
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
