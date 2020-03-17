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
      <h2 className="section-heading text-uppercase text-center pt-4">Featured Trails</h2>
      <div className="container pb-4">
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
