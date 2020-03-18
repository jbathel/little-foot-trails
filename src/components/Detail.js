import React, { useState, useEffect, useContext } from "react";
import { Search } from "./Search";
import { ReviewUI } from "./ReviewUI";
import { ReviewForm } from "./ReviewForm";
import "./../marker.css";
import Button from "@material-ui/core/Button";
import GoogleMapReact from "google-map-react";
// import default_trail from "../images/trail_images/default.png";

import { Context } from "../Context";

export const Detail = () => {
  const [reviews, setReviews] = useState([]);
  const [addReview, setAddReview] = useState(false)
  const {
      trail: [trail],
      reviews:[checkReviews],
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
  }, [trail.id, checkReviews]);

    function openForm() {
        let bool = addReview
        bool = !bool
        setAddReview(bool)
    }

    const authenticated = addReview => {
        return (
            <Button className="btn btn-info mb-5" onClick={openForm}>
            Add Revew
            </Button>

        )
    }

  const center = {
    lat: parseFloat(trail.latitude),
    lng: parseFloat(trail.longitude)
  };

  const MyMarker = () => {
    return (
      <>
        <div className="pin"></div>
        <div className="pulse"></div>
      </>
    );
  };

  const myArrCreatedFromMap = trail.tags.map((item, i) => (
    <li className="list-group-item" key={item + i}>{item}</li>
  ));

  return (
    <div className="container">
      <h2 className="section-heading text-uppercase mt-5">{trail.name}</h2>
      <div className="row justify-content-center">
        <div className="col-6">{trail.description}</div>
        <div className="col-6">
          <img className="img-fluid rounded float-right" src={trail.picture} alt="trail" />
        </div>
        <div className="w-100"></div>
        <div className="col-6 list-group list-group-flush">
          <h3 className="section-heading ml-4">Amenities</h3>
        <ul>{myArrCreatedFromMap}</ul>
        </div>
        <div className="col-6 mt-5" style={{ height: "50vh", width: "50%" }}>
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
        <div className="container">
          <hr />
          <h3 className="section-heading text-uppercase">Reviews</h3>
          { loggedIn === true &&
          <div>
          {authenticated(addReview)}
          { addReview === true &&
          <ReviewForm />
          }
          </div>
          }
        {reviews.length > 0 && (
         <div>
          {reviews.map((review, index) => (
            <ReviewUI key={index} review={review} />
          ))}
          <hr />
          </div>
        )}
        </div>
      <div className="container mb-5">
        <Search />
      </div>
    </div>
  );
};
