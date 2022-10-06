import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <>
      <div className="container" id="skills">
        <div className="row">
          <div className="row subheading">
            <h1 className="text-center">
              SKI<span style={{ color: "blue" }}>LLS</span>
            </h1>
          </div>
        </div>
        <div className="container skills">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-3 col-sm-6 text-center" data-aos="zoom-in" data-aos-duration="3000">
              <div className="ui-widgets html">
                <div className="ui-values">
                  <img src={require("../../assets/html.png")} alt="" />
                </div>
                <div className="ui-labels">HTML</div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 text-center" data-aos="zoom-in" data-aos-duration="3000">
              <div className="ui-widgets css">
                <div className="ui-values">
                  <img src={require("../../assets/css.png")} alt="" />
                </div>
                <div className="ui-labels">CSS</div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 text-center" data-aos="zoom-in" data-aos-duration="3000">
              <div className="ui-widgets ui-widgetsjs">
                <div className="ui-values">
                  <img src={require("../../assets/js.png")} alt="" />
                </div>
                <div className="ui-labels">Javascript</div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 text-center" data-aos="zoom-in" data-aos-duration="3000">
              <div className="ui-widgets ui-widgetsreact">
                <div className="ui-values">
                  <img src={require("../../assets/react.png")} alt="" />
                </div>
                <div className="ui-labels">React.JS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
