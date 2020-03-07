import React from "react";
import image from "../images/Img_01.jpg";
import { Link } from "react-router-dom";


export default function Cards(props) {
  return (
    <div>
      <div class="card m-3" style={{ width: "20rem" }}>
        <img className="card-img-top" src={image} alt="trail" />
        <div className="card-body">
          <h4 className="card-title">{props.trail.name}</h4>
          <p className="card-text text-muted">
      {props.trail.description}
        </p>
          <Link href="#" className="btn btn-info">
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
}
