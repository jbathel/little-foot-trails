import React, { useState, useEffect, useContext } from "react";
import { Search } from "./Search";
import ReviewUI from "./ReviewUI";
import { Link } from "react-router-dom";
import "./../marker.css";
import GoogleMapReact from "google-map-react";

import { Context } from "../Context";

export const Detail = () => {
  const [reviews, setReviews] = useState([]);
    const {
        trail: [trail],
        auth: [loggedIn]
    } = useContext(Context)

  useEffect(() => {
    async function fetchReviews() {
      const results = await fetch(
        "http://localhost:8000/api/reviews/?trail=" + trail.id
      );
      const reviews = await results.json();
      setReviews(reviews);
    }
    fetchReviews();
  }, [trail.id]);

    async function createReview() {
        let token = localStorage.getItem('access');
        const settings = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
            }
        };
        try {
            const response = await fetch('http://localhost:8000/api/reviews/', settings);
            const data = await response.json();
            return data;
        } catch (error) {
            return error;
        }
    }

    const authenticated = loggedIn => {
        return (
          <Link to="/detail" className="btn btn-info" onClick={createReview}>
            Add Review
          </Link>
        )
    }

  const center = {
    lat: parseFloat(trail.latitude),
    lng: parseFloat(trail.longitude)
  };

  const MyMarker = props => {
    return (
      <>
        <div className="pin"></div>
        <div className="pulse"></div>
      </>
    );
  };

  const myArrCreatedFromMap = trail.tags.map((item, i) => (
    <li key={item + i}>{item}</li>
  ));

  return (
    <div>
      <h2>{trail.name}</h2>
      <div className="row justify-content-center">
        <div className="col-7">{trail.description}</div>
        <div className="col-auto">
          <img src={trail.picture} alt="trail" />
        </div>
        <div className="w-100"></div>
        <div className="col-7">
        <ul>{myArrCreatedFromMap}</ul>
        </div>
        <div style={{ height: "50vh", width: "50%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyA8es01yV0Zj8KiWKqnUeTljFGlrkT71Gs"
            }}
            defaultCenter={center}
            defaultZoom={12}
          >
            <MyMarker lat={center.lat} lng={center.lng} />
          </GoogleMapReact>
        </div>
      </div>
      {reviews.length > 0 && (
        <div className="container">
          <hr />
          <h2>REVIEWS</h2>
          { loggedIn === true &&
          <div>
          {authenticated(loggedIn)}
          </div>
          }
          {reviews.map((review, index) => (
            <ReviewUI key={index} review={review} />
          ))}
          <hr />
        </div>
      )}
      <div className="container mb-5">
        <Search />
      </div>
    </div>
  );
};
