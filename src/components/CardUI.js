import React from "react";
import { Link } from "react-router-dom";

export default function Cards({ trail, onCardClick }) {
  function cardClick(trailObject) {
    onCardClick(trail);
  }
  return (
    <div>
      <div class="card m-3" style={{ width: "20rem" }}>
        <img className="card-img-top" src={trail.picture} alt="trail" />
        <div className="card-body">
          <h4 className="card-title">{trail.name}</h4>
          <p className="card-text text-muted">{trail.description}</p>
          <Link to="/detail" className="btn btn-info" onClick={cardClick}>
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
}
