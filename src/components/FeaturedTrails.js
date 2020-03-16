import React, { useState, useEffect } from "react";
import Cards from "./CardUI";

export const FeaturedTrails = () => {
  const [trails, setTrails] = useState([]);

  async function fetchTrails() {
    const results = await fetch(
      "http://localhost:8000/api/trails/?featured=true"
    );
    const trails = await results.json();
    setTrails(trails);
  }

  useEffect(() => {
    fetchTrails();
  }, []);

  return (
    <div id="cards">
      <h2>Featured Trails</h2>
      <hr />
      <div className="container">
        {trails.length > 0 && (
          <div className="row">
            {trails.map((trail, index) => (
              <Cards key={index} trailInstance={trail} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
