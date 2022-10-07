import React from "react";
import "./Documentation.css";

export const Documentation = () => {
  return (
    <>
      <div className="container doc" id="doc">
        <div className="row">
          <div className="row subheading">
            <h1 className="text-center">
              DOCUMEN<span style={{ color: "red" }}>TATIONS</span>
            </h1>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-lg-4 col-sm-12 text-center konten m-5" data-aos="flip-right" data-aos-duration="3000">
            <div className="video">
              <video width="750" height="500" controls poster={require("../../assets/v1.PNG")}>
                <source src={require("../../assets/1.mp4")} type="video/mp4" />
              </video>
            </div>
            <div>
              <h3 className="mt-3">
                <b>Baby Care</b>
              </h3>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 text-center konten m-5" data-aos="flip-right" data-aos-duration="3000">
            <div className="video">
              <video width="750" height="500" controls poster={require("../../assets/v2.PNG")}>
                <source src={require("../../assets/2.mp4")} type="video/mp4" />
              </video>
            </div>
            <div>
              <h3 className="mt-3">
                <b>Green Store</b>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
