import React, { useState, useEffect } from "react";
import Cards from "./CardUI";

export const Results = (props) => {
  const [trails, setTrails] = useState([]);

  async function fetchTrails() {
    const results = await fetch("http://localhost:8000/api/trails/");
    const trails = await results.json();
    setTrails(trails);
  }

  useEffect(() => {
    fetchTrails();
  }, []);

    function getTrailId(trailId) {
        console.log(trailId)
        props.setTrailId(trailId);
    }

  return (
    <div className="container">
      {trails.length > 0 &&
      <div className="row">
        {trails.map((trail, index) => (
            <Cards key={index} trail={trail} onCardClick={getTrailId}/>
       ))}
      </div>
      }
    </div>
  );
};
