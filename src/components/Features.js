import React from "react";

export const Features = () => {
  return (
    <div>
      <section className="page-section" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
                {/* <hr /> */}
              <h2 className="section-heading text-uppercase">About</h2>
              <h3 className="section-subheading text-muted">
                Little Foots Trails is about helping families find more ways to be adventerous and outside. We strive to promote a sense of community, bringing parents and caregivers together with a common goal.
              </h3>
              {/* <hr /> */}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul className="timeline">
                <li>
                  <div className="timeline-image">
                    <img
                      className="rounded-circle img-fluid"
                      src="img/about/1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                        <br />
                      <h4 className="subheading">Featured Trails</h4>
                    </div>
                    <div className="timeline-body">
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
                      src="img/about/2.jpg"
                      alt=""
                    />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                        <br />
                      <h4 className="subheading">Filtered Search Bar</h4>
                    </div>
                    <div className="timeline-body">
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
                      src="img/about/3.jpg"
                      alt=""
                    />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                        <br />
                      <h4 className="subheading">Detailed View</h4>
                    </div>
                    <div className="timeline-body">
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
                      src="img/about/4.jpg"
                      alt=""
                    />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                        <br />
                      <h4 className="subheading">Maps</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">
                        On the detail page we provide an interactive map to the start of the trail.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
