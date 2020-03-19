import React, { useState, useEffect, useContext } from "react";
import Cards from "./CardUI";

import { Context } from "../Context";

export const Results = () => {
  const [trails, setTrails] = useState([]);
  const {
    tags: [trailTags]
  } = useContext(Context);

  function makeQuery(array, param) {
    let jsonObject = Object.assign({}, array);
    var queryString = Object.keys(jsonObject)
      .map(key => param + "=" + jsonObject[key])
      .join("&");
    return queryString;
  }

  useEffect(() => {
    async function fetchTrails() {
      let query = makeQuery(trailTags, "tags");
      const results = await fetch("https://little-foot-trails.herokuapp.com/api/trails/?" + query);
      const trails = await results.json();
      setTrails(trails);
    }
    fetchTrails();
  }, [trailTags]);

  return (
    <div className="container mb-5">
            <h2 className="section-heading text-uppercase mt-5">Results</h2>
      {trails.length > 0 && (
        <div className="row">
          {trails.map((trail, index) => (
            <Cards key={index} trailInstance={trail} />
          ))}
        </div>
      )}
    </div>
  );
};
