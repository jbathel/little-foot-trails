import React, { useContext }from "react";
import map_feature from "../images/map_feature.png";
import search_feature from "../images/search_feature.png";
import details_feature from "../images/details_feature.png";
import featured_feature from "../images/featured_feature.png";

import { Context } from "../Context";

export const Features = () => {
  const {
    featuresRef: featuresRef,
  } = useContext(Context);

  return (
    <div ref={featuresRef}>
      <section className="page-section" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
                <br />
              <h2 className="section-heading text-uppercase">About</h2>
              <h3 className="section-subheading text-muted">
                Little Foots Trails is about helping families find more ways to be adventerous and outside. We strive to promote a sense of community, bringing parents and caregivers together with a common goal.
              </h3>
              <br />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul className="timeline">
                <li>
                  <div className="timeline-image">
                    <img
                      className="rounded-circle img-fluid"
                      src={featured_feature}
                      alt=""
                    />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading mr-5">
                        <br />
                      <h4 className="subheading">Featured Trails</h4>
                    </div>
                    <div className="timeline-body mr-5">
                      <p className="text-muted">
                        Our homepage displays trails that meet certain standards put forth by our founders. These trails offer the best combinations of amenities.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <img
                      className="rounded-circle img-fluid"
                      src={search_feature}
                      alt=""
                    />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading ml-5">
                        <br />
                      <h4 className="subheading">Filtered Search Bar</h4>
                    </div>
                    <div className="timeline-body ml-5">
                      <p className="text-muted">
                        Looking for something in particular? Try our easy to use search bar. Click on the items that matter to you the most and then 'Find Your Trail.'
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-image">
                    <img
                      className="rounded-circle img-fluid"
                      src={details_feature}
                      alt=""
                    />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading mr-5">
                        <br />
                      <h4 className="subheading">Detailed View</h4>
                    </div>
                    <div className="timeline-body mr-5">
                      <p className="text-muted">
                        Once you see a trail that you like, click on 'Exploe' to find out more details about that particular trail.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <img
                      className="rounded-circle img-fluid"
                      src={map_feature}
                      alt=""
                    />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading ml-5">
                        <br />
                      <h4 className="subheading">Maps</h4>
                    </div>
                    <div className="timeline-body ml-5">
                      <p className="text-muted">
                        On the detail page we provide an interactive map to the start of the trail.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
              <br />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
