import React from "react";
import "./About.css";

function About() {
  const cv = () => {
    // using Java Script method to get PDF file
    fetch("sajad.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "CV.pdf";
        alink.click();
      });
    });
  };
  const Sertifikat = () => {
    // using Java Script method to get PDF file
    fetch("Sertifikat.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Sertifikat.pdf";
        alink.click();
      });
    });
  };
  return (
    <>
      <div className="container" id="about">
        <div className="row subheading">
          <h1 className="text-center head">
            ABO<span style={{ color: "blue" }}>UT</span>
          </h1>
        </div>
        <div className="row ">
          <div className="container sub">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-6 col-sm-12 text-center saik">
                <img className="imgabout" src={require("../../assets/fotoabout.png")} style={{ width: "40%" }} alt="" />
              </div>
              <div className="col-lg-6 col-sm-12 text-justify textabout">
                <p>
                  I prioritized the tech part, created applications and websites. Certainly with mastery of HTML, CSS, javascript, navigational js is my superior. I'm a quick member of the team to learn and apply new technologies to the
                  age. I'm also a ticktock content, containing game content topics
                </p>
                <button className="btn-about me-2" onClick={cv}>
                  Download CV
                </button>
                <button className="btn-about" onClick={Sertifikat}>
                  Download Sertifikat
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
