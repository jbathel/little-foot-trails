import React, { useState, useEffect } from "react";
import { Search } from "./Search";
import ReviewUI from "./ReviewUI";

export const Detail = ({trail}) => {
    const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
    const results = await fetch("http://localhost:8000/api/reviews/?trail=" + trail.id);
    const reviews = await results.json();
    setReviews(reviews);
    };
    fetchReviews();
  }, []);


  return (
    <div>
      <h2>{trail.name}</h2>
      <div className="row justify-content-center">
  <div className="col-7">{trail.description}</div>
        <div className="col-auto">IMAGE</div>
        <div className="w-100"></div>
        <div className="col-7">AMENITIES</div>
        <div className="col-auto">MAP</div>
      </div>
      { reviews.length > 0 &&
      <div className="container">
        <hr />
        <h2>REVIEWS</h2>
          {reviews.map((review, index) => (
              <ReviewUI key={index} review={review}/>
          ))}
        <hr />
      </div>
    }
      <div className="container mb-5">
        <Search />
      </div>
    </div>
  );
};
