import React, { useState, useEffect } from "react";
import { Search } from "./Search";
import { ReviewUI } from "./ReviewUI";

export const Detail = ({trail}) => {
    // const [trailObject, setTrail] = useState({});

 useEffect(() => {
     console.log("DETAIL")
     console.log(trail)
  }, []);

  return (
    <div>
      {trail &&
    <div>
      <h2>{trail.name}</h2>
      <div className="row justify-content-center">
        <div className="col-7">{trail.description}</div>
        <div className="col-auto">IMAGE</div>
        <div className="w-100"></div>
        <div className="col-7">AMENITIES</div>
        <div className="col-auto">MAP</div>
      </div>
      </div>
      }
      <div className="container">
        <hr />
        <h2>REVIEWS</h2>
        <ReviewUI />
        <hr />
      </div>
      <div className="container mb-5">
        <Search />
      </div>
    </div>
  );
};
