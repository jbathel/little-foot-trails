import React from "react";
import ryu from "../images/ryu.png";
import banu from "../images/default.png";
import jess from "../images/jess.png";

export const AboutUs = () => {
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 text-center">
            <h2>Our Awesome Team</h2>
            <h6 class="section-subheading text-muted mb-4 ml-5 mr-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo provident ipsam nisi odio autem nihil pariatur hic aperiam voluptates voluptas modi exercitationem magni culpa, natus quis fugit laboriosam! Velit, expedita!</h6>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4 text-center">
            <h3 className="title">Project Manager/Back-End</h3>
            <img className="img-thumbnail" src={ryu} alt="Ryuichi's headshot" />
            <h4>Ryuichi Miyazaki</h4>
            <p className="m-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              earum excepturi illum odio atque cumque, neque, assumenda vero,
              est sed officia. Maxime est eveniet dolore magni sed mollitia.
            </p>
            <a href="https://github.com/rmiyazaki6499" className="btn btn-lg btn-info" target="blank">
              GitHub
            </a>
          </div>
          <div className="col-sm-4 text-center">
            <h3>Back-End/Dev-Ops</h3>
            <img className="img-thumbnail" src={banu} alt="Banu's headshot" />
            <h4>Banu Sapakova</h4>
            <p className="m-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
              dicta est, ducimus ratione corporis, veritatis quasi commodi
              quaerat natus magni minima unde vero voluptas expedita tenetur.
              Sapiente amet aperiam eligendi.
            </p>
            <a href="https://github.com/banuaksom" target="blank" className="btn btn-lg btn-info mb-5">
              GitHub
            </a>
          </div>
          <div className="col-sm-4 text-center">
            <h3>Front-End/UI/UX</h3>
            <img
              className="img-thumbnail"
              src={jess}
              alt="Jessica's headshot"
            />
            <h4>Jessica Bathel</h4>
            <p className="m-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              illum earum ad libero! Enim expedita hic in cupiditate sequi nisi,
              architecto animi, sed sunt harum praesentium explicabo assumenda
              ullam sint.
            </p>
            <a href="https://github.com/jbathel/" target="blank" className="btn btn-lg btn-info">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
