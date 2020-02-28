import React from "react";
import logoComp from "../images/LogoComp.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer" style={{ height: "auto" }}>
      <div className="container">
        <div className="row">
          <div class="form-group col-12">
            <hr />
          </div>
          <div className="col-4 mt-1">
            <img
              src={logoComp}
              alt="Logo with mountains and family"
              style={{ height: "160px" }}
            />
          </div>
          <div className="col-2 mt-1">
            <ul>
              <h6 className="fa fa-sitemap" aria-hidden="true">
                Sitemap
              </h6>
              <hr className="hr-primary" />
              <Link to="/">
                <li className="list-group-item">Home</li>
              </Link>
              <Link to="#">
                <li className="list-group-item">Login</li>
              </Link>
              <Link to="/about">
                <li className="list-group-item">About Us</li>
              </Link>
            </ul>
          </div>
          <div className="col-2 mt-1">
            <ul>
              <h6 className="fa fa-sitemap" aria-hidden="true">
                Discover
              </h6>
              <hr className="hr-primary" />
              <Link>
                <li className="list-group-item">Trails</li>
              </Link>
              <Link>
                <li className="list-group-item">Search</li>
              </Link>
              <Link>
                <li className="list-group-item">Sign Up</li>
              </Link>
            </ul>
          </div>
          <div className="form-group col-12">
            <hr />
          </div>
        </div>
      </div>
    </footer>
  );
};
