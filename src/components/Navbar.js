import React, { useContext } from "react";
import logo from "../images/wordmark.png";
import { Link } from "react-router-dom";

import { Context } from "../Context";

export let Navbar = () => {
  const {
    auth: [loggedIn, setLoggedIn],
    aboutRef: aboutRef,
    featuresRef: featuresRef,
    scroll: handleScroll,
    focus: onButtonClick
  } = useContext(Context);

  function clearToken() {
    localStorage.removeItem("access");
    setLoggedIn(false);
  }

  function aboutScroll(e) {
    e.preventDefault();
    const main = aboutRef.current;
    window.scrollTo({
      top: main.offsetTop,
      left: 0,
      behavior: "instant"
    });
  };

  function featuresScroll(e) {
    e.preventDefault();
    const main = featuresRef.current;
    window.scrollTo({
      top: main.offsetTop,
      left: 0,
      behavior: "instant"
    });
  };



  const authenticated = loggedIn => {
    return !loggedIn ? (
      <div>
        <Link
          className="btn btn-info my-2 m-1 my-sm-0"
          type="submit"
          to="/login"
        >
          Login
        </Link>
        <Link
          className="btn btn-info my-2 m-1 my-sm-0"
          type="submit"
          to="/register"
        >
          Sign Up
        </Link>
      </div>
    ) : (
      <div>
        <Link
          className="btn btn-info my-2 m-1 my-sm-0"
          type="submit"
          to="/login"
          onClick={clearToken}
        >
          Log Out
        </Link>
      </div>
    );
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="wordmark" style={{ height: "25px" }} />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggler"
        aria-controls="navbarToggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarToggler">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" onClick={aboutScroll} to="/about">
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" onClick={featuresScroll} to="/features">
              Features
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Search
            </Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          {authenticated(loggedIn)}
        </form>
      </div>
    </nav>
  );
};
