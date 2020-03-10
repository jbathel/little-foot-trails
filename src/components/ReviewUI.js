import React from "react";
import profilePic from "../images/default.png";

export default function ReviewUI({review}) {
  return (
    <div>
      <div className="card">
        {/* <div className="card-header">Quote</div> */}
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <div className="row justify-content-left">
              <div className="col-auto">
                <img
                  className="img-thumbnail m-0"
                  style={{ width: "5rem" }}
                  src={profilePic}
                  alt="default profile pic"
                />
              </div>
              <div className="col-7 m-0">
                <p>{review.name}</p>
                <p className="text-muted">{review.created_at}</p>
              </div>
              <div className="w-100">
              </div>
              <div className="col-auto">
                  <p>{review.review}</p>
              </div>
            </div>
          </blockquote>
        </div>
      </div>
    </div>
  );
};
