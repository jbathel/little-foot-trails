import React, { useContext, Component } from "react";
import logo from "../images/wordmark.png";
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        this.props.nav_bar_holder.nav_bar_component = this;
        console.log("FOOO this:", this);
        const logged_in_nav = (
            <div>
            <Link
              className="btn btn-info my-2 m-1 my-sm-0"
              type="submit"
              to="/home"
              onClick={e => {
                this.props.clearToken();
                this.forceUpdate();
              }}
            >
              Log Out
            </Link>
          </div>
        );
        const logged_out_nav = (
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
        );

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
                    <Link className="nav-link" to="/about">
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/results">
                      Search
                    </Link>
                  </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                  {this.props.auth_state.loggedIn ? logged_in_nav : logged_out_nav }
                </form>
              </div>
            </nav>
          );
    }
}

export default Navbar;