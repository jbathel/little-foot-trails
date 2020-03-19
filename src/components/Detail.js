import React, {useState, useEffect, useContext} from "react";
import {Search} from "./Search";
import {ReviewUI} from "./ReviewUI";
import {ReviewForm} from "./ReviewForm";
import "./../marker.css";
import Button from "@material-ui/core/Button";
import GoogleMapReact from "google-map-react";

import {Context} from "../Context";

/**
 * Component for showing details of a Trail
 */
export const Detail = () => {
    const [reviews,
        setReviews] = useState([]);
    const [addReview,
        setAddReview] = useState(false)
    const {trail: [trail], reviews: [checkReviews], auth: [loggedIn]} = useContext(Context)

  useEffect(() => {
    async function fetchReviews() {
      const results = await fetch(
        "https://little-foot-trails.herokuapp.com/api/reviews/?trail=" + trail.id
      );
      const reviews = await results.json();
      setReviews(reviews);
    }
    fetchReviews();
  }, [trail.id, checkReviews]);

    /**
     * flips the value of addReview
     * util function to switch Review button
     */
    function openForm() {
        let bool = addReview
        bool = !bool
        setAddReview(bool)
    }
    /**
     * Shows the Add Review button if the user is authenticated
     * @param  {bool} addReview Boolean check if user is authenticated
     */
    const authenticated = (addReview) => {
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

    /**
     * returns Marker for Google Maps API
     */
    const MyMarker = () => {
        return (
      <>
        <div className="pin"></div>
        <div className = "pulse"></div>
      </>
    );
  };

  const amenities = trail.tags.map((item, i) => (
    <li className="list-group-item" key={item + i}>{item}</li >));

        return (
            <div className="container">
                <h2 className="section-heading text-uppercase mt-5">{trail.name}</h2>
                <div className="row justify-content-center">
                    <div className="col-6">{trail.description}</div>
                    <div className="col-6">
                        <img className="img-fluid rounded float-right" src={trail.picture} alt="trail"/>
                    </div>
                    <div className="w-100"></div>
                    <div className="col-6 list-group list-group-flush">
                        <h3 className="section-heading ml-4">Amenities</h3>
                        <ul>{amenities}</ul>
                    </div>
                    <div
                        className="col-6 mt-5"
                        style={{
                        height: "50vh",
                        width: "50%"
                    }}>
                        <GoogleMapReact
                            bootstrapURLKeys={{
                            key: "AIzaSyA8es01yV0Zj8KiWKqnUeTljFGlrkT71Gs"
                        }}
                            defaultCenter={center}
                            defaultZoom={12}>
                            <MyMarker lat={center.lat} lng={center.lng}/>
                        </GoogleMapReact>
                    </div>
                </div>
                <div className="container">
                    <hr/>
                    <h3 className="section-heading text-uppercase">Reviews</h3>
                    {loggedIn === true && <div>
                        {authenticated(addReview)}
                        {addReview === true && <ReviewForm/>
}
                    </div>
}
                    {reviews.length > 0 && (
                        <div>
                            {reviews
                                .slice(0)
                                .reverse()
                                .map((review, index) => (<ReviewUI key={index} review={review}/>))}
                            <hr/>
                        </div>
                    )}
                </div>
                <div className="container mb-5">
                    <Search/>
                </div>
            </div>
        );
    };
