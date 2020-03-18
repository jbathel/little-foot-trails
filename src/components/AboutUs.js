import React from "react";
import ryu from "../images/ryu.png";
import jess from "../images/jess.png";
import banu from "../images/banu.png";

export const AboutUs = () => {
  return (
    <div id="aboutus">  
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase text-center pt-4">Our Adventurous Team</h2>
            <h6 className="section-subheading text-muted mb-4 ml-5 mr-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              provident ipsam nisi odio autem nihil pariatur hic aperiam
              voluptates voluptas modi exercitationem magni culpa, natus quis
              fugit laboriosam! Velit, expedita!
            </h6>
          </div>
        </div>
        <div className="row pb-4">
          <div className="col-sm-4 text-center">
            <h3 className="title">Front/Back-End</h3>
            <img className="img-thumbnail" src={ryu} alt="Ryuichi's headshot" />
            <h4>Ryuichi Miyazaki</h4>
            <a
              href="https://github.com/banuaksom"
              target="blank"
              className="btn btn-lg btn-info"
            >
              GitHub
            </a>
            <p className="text-justify m-3">
            Ryuichi is a former Talent/HR professional transitioning into Software Engineering. Having been a technical recruiter for Software Engineering in Tokyo as well at FastSpring, a SaaS Company in Santa Barbara, he has been surrounded by people who code his whole career! He likes building web applications using Django and other frontend frameworks and is passionate about using technology to make work better.
            </p>
          </div>
          <div className="col-sm-4 text-center">
            <h3>Back-End/Dev-Ops</h3>
            <img className="img-thumbnail" src={banu} alt="Banu's headshot" />
            <h4>Banu Sapakova</h4>
            <a
              href="https://github.com/banuaksom"
              target="blank"
              className="btn btn-lg btn-info"
            >
              GitHub
            </a>
            <p className="text-justify m-3">
            Before moving to the US five years ago Banu was a technical translator/interpreter in Oil and Gas Sphere. Doing the Software Engineering program at Holberton School is helping Banu to pursue a long time dream of becoming an engineer. As of now Banu enjoys building backend systems and is passionate about solving challenging problems in the future.
            </p>
          </div>
          <div className="col-sm-4 text-center">
            <h3>Front-End/UI/UX</h3>
            <img
              className="img-thumbnail"
              src={jess}
              alt="Jessica's headshot"
            />
            <h4>Jessica Bathel</h4>
            <a
              href="https://github.com/jbathel/"
              target="blank"
              className="btn btn-lg btn-info"
            >
              GitHub
            </a>
            <p className="text-justify m-3">
              Jessica was a Registered Veterinary Technician in a former life. Now a mother to two adoable girls she has decided to change careers to enable herself more quality time with her family. She loves art and design and is passionate about making things products that are beautiful, simple, and easy to use, especially for other parents and caregivers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
