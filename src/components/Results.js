import React, { useState, useEffect } from "react";
import Cards from "./CardUI";

export const Results = () => {
  const [trails, setTrails] = useState([]);
  const [trailId, setTrailId] = useState('');

  async function fetchTrails() {
    const results = await fetch("http://localhost:8000/api/trails/");
    // Why is there an await here VVV?
    const trails = await results.json();
    setTrails(trails);
  }

  useEffect(() => {
    fetchTrails();
  }, []);

    function getTrailId(trailId) {
        setTrailId(trailId);
    }

  return (
    <div className="container">
      {trails.length > 0 &&
      <div className="row">
        {trails.map(trail => (
            <Cards trail={trail} onCardClick={getTrailId}/>
       ))}
      </div>
      }
    </div>
  );
};
