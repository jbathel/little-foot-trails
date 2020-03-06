import React from "react";
import { Link } from "react-router-dom";

export const Search = () => {
  return (
    <div>
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
              <Link
                type="submit"
                className="btn btn-block btn-lg btn-info"
                to="/results"
              >
                Search
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
