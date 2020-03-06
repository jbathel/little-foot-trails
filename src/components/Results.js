import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

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
        {trails.map(trail => (
          <div className="col d-flex align-content-start flex-wrap">
            <div className="card m-3" style={{ width: "20rem" }}>
              <div className="card-body">
                <Image
                  className="card-img-top"
                  src={trail.picture}
                  alt="trail"
                />
                <h4 className="card-title">{trail.name}</h4>
                <p className="card-text text-muted">{trail.description}</p>
                <Link href="#" className="btn btn-info">
                  Explore
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
