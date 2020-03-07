import React from "react";
import image from "../images/Img_01.jpg";
import { Link } from "react-router-dom";


export default function Cards({trail, onCardClick}) {
    function cardClick(trailId) {
        onCardClick(trail.id)
    }
  return (
    <div>
      <div class="card m-3" style={{ width: "20rem" }} onClick={cardClick}>
        <img className="card-img-top" src={image} alt="trail" />
        <div className="card-body">
          <h4 className="card-title">{trail.name}</h4>
          <p className="card-text text-muted">
      {trail.description}
        </p>
          <Link href="#" className="btn btn-info">
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
}
