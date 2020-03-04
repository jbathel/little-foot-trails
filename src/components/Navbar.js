import React from "react";
import logo from '../images/wordmark.png';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark justify-content-end sticky-top">
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="wordmark" style={{ height: '25px'}} />
      </Link>
      <button className="btn btn-info ml-auto mr-1" onClick={() => props.display_form('login')}>Login</button>
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
            <Link className="nav-link" onClick={() => props.display_form('signup')}>
              Sign Up
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" onClick={props.handle_logout}>
            Log Out
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
