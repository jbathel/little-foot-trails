import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";

export const Results = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const [nasaData, setData] = useState({});

  async function fetchData () {
      const data = await fetch(
          "http://localhost:8000/api/trails/"
          );

          const nasaData = await data.json();
          console.log(nasaData);
          setData(nasaData);
      };


  return (
    <div>
      <h2 id="daily-pic-title">{nasaData.name}</h2>
      <Image id="jumbo-photo" src={nasaData.picture} />
      <h4 id="daily-pic-info">{nasaData.location}</h4>
    </div>
  );
};
