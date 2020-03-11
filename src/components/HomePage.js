import React from "react";
import logo from "../images/lockup.png";
import { Featured } from "./Featured";
import { Search } from "./Search";

export const HomePage = ({getTrail}) => {

    function getCardTrail(trailObject) {
        getTrail(trailObject)
    }

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
            <div className="col-md-10 col-md-10 col-md-10 mx-auto">
              <Search />
              <h1 className="mt-1">Parenting Is An Adventure</h1>
            </div>
          </div>
        </div>
      </header>
      <div>
        <Featured onClickFeatured={getCardTrail}/>
      </div>
    </div>
  );
};
