import React from "react";
import image from "../images/Img_01.jpg";
import { Link } from "react-router-dom";


export default function Cards() {
  return (
    <div>
      <div class="card m-3" style={{ width: "20rem" }}>
        <img className="card-img-top" src={image} alt="trail" />
        <div className="card-body">
          <h4 className="card-title">Woodland Trail</h4>
          <p className="card-text text-muted">
            Some short description of the trail can go here.
          </p>
          <Link href="#" className="btn btn-info">
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
}
