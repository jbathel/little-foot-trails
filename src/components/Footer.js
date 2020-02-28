import React from "react";
import logoComp from "../images/LogoComp.png";

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
              <hr />
              <li className="list-group-item">Home</li>
              <li className="list-group-item">Login</li>
              <li className="list-group-item">About Us</li>
            </ul>
          </div>
          <div className="col-2 mt-1">
            <ul>
              <h6 className="fa fa-sitemap" aria-hidden="true">
                Discover
                {/* <hr /> */}
              </h6>
              <hr />
              <li className="list-group-item">Trails</li>
              <li className="list-group-item">Search</li>
              <li className="list-group-item">Sign Up</li>
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
