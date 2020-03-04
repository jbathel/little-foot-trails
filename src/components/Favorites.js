import React, { useState } from "react";
import Card from "./CardUI";

function Trails({ trail, index }) {
    return(
        <div className="trail">
            {trail.name}
        </div>
    )

}

export default function Favorites() {
    const [trails, setTrails] = useState([
        {
            id: 1,
            name: "Lake Chabot",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos tenetur eveniet, maxime corrupti vero amet quasi eum sint officia."
        },
        {
            id: 2,
            name: "Coyote Hills",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos tenetur eveniet, maxime corrupti vero amet quasi eum sint officia."
        },
        {
            id: 3,
            name: "Muir Woods",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos tenetur eveniet, maxime corrupti vero amet quasi eum sint officia."
        }
    ]);


  return (
    <div>
      <h2>Favorite Trails</h2>
      {trails.map((trail, index) => (
          <Trails key={index} index={index} trail={trail} />
      ))}
      <Card />
    </div>
  );
}