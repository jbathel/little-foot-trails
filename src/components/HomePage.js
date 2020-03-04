import React from "react";
import logo from "../images/lockup.png";
import Featured from "./Featured";

export const HomePage = () => {
  return (
    <div>
      <header className="masthead text-center">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-9 mx-auto mb-2">
              <img
                src={logo}
                alt="Company logo"
                style={{ width: "40rem"}}
              />
            </div>
            <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
              <form>
                <div className="form-row">
                  <div className="col-12 col-md-9 mb-2 mb-md-0">
                    <input
                      type="search"
                      className="form-control form-control-lg"
                      placeholder="Find your trail..."
                    />
                  </div>
                  <div className="col-12 col-md-3">
                    <button
                      type="submit"
                      className="btn btn-block btn-lg btn-info"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-10 col-md-10 col-md-10 mx-auto">
              <h1 className="mt-1">Parenting Is An Adventure</h1>
            </div>
          </div>
        </div>
      </header>
      <div>
        <Featured />
      </div>
    </div>
  );
};
