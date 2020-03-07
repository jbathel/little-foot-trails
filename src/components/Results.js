import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cards from "./CardUI";

export const Results = () => {
  const [trails, setTrails] = useState([]);

  async function fetchTrails() {
    const results = await fetch("http://localhost:8000/api/trails/");
    const trails = await results.json();
    console.log(trails);
    setTrails(trails);
  }

  useEffect(() => {
    fetchTrails();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {trails.map((trail, index) => (
            <Cards key={index} trail={trail}/>
        ))}
      </div>
    </div>
  );
};
