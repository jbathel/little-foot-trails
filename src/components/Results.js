import React, { useState, useEffect, useContext } from "react";
import Cards from "./CardUI";

import { SearchContext } from "../contexts/SearchContext";

export const Results = ({getTrail}) => {
  const [trails, setTrails] = useState([]);
  const [trailTags] = useContext(SearchContext)

    function makeQuery(array, param) {
        let jsonObject = Object.assign({}, array)
        var queryString = Object.keys(jsonObject).map(key => param + '=' + jsonObject[key]).join('&');
        return queryString
    }

  async function fetchTrails() {
    let query = makeQuery(trailTags, 'tags')
    const results = await fetch("http://localhost:8000/api/trails/?" + query);
    const trails = await results.json();
    setTrails(trails);
  }

  useEffect(() => {
    fetchTrails();
  }, []);

    function getCardTrail(trailObject) {
        getTrail(trailObject);
    }

  return (
    <div className="container">
      {trails.length > 0 &&
      <div className="row">
        {trails.map((trail, index) => (
            <Cards key={index} trail={trail} onCardClick={getCardTrail}/>
       ))}
      </div>
      }
    </div>
  );
};
