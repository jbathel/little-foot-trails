import React, { useContext } from "react";
import logo from "../images/wordmark.png";
import { Link } from "react-router-dom";

import { Context } from "../Context";

export let Navbar = () => {
  const {
    auth: [loggedIn, setLoggedIn]
  } = useContext(Context);

  function clearToken() {
    localStorage.removeItem("access");
    setLoggedIn(false);
  }

  const loginOrGuest = loggedIn => {
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
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div className="container">
        <Link className="navbar-brand js-scroll-trigger" to="/">
          <img src={logo} alt="wordmark" style={{ height: "25px" }} />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
          </button>
        <div className="navbar navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item js-scroll-trigger">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item js-scroll-trigger">
              <Link className="nav-link" to="/">
                Search
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            {loginOrGuest(loggedIn)}
          </form>
        </div>
      </div>
    </nav>
  );
};
