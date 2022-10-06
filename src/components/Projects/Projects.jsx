import React from "react";
import "./Project.css";

const Projects = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <>
      <div class="container containerprojects" id="projects">
        <div className="row">
          <div className="row subheading">
            <h1 className="text-center">
              PROJ<span style={{ color: "red" }}>ECTS</span>
            </h1>
          </div>
        </div>
        <div data-aos="fade-right" data-aos-duration="3000">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-4 col-sm-12 text-center">
              <div class="card">
                <div class="face face1 babycare"></div>
                <div class="face face2">
                  <div class="content">
                    <h3>
                      <b>Baby Care</b>
                    </h3>
                    <p>Baby health website that helps mothers</p>
                    <button className="project" onClick={() => openInNewTab("https://babycarelove.netlify.app/")}>
                      Visit
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12">
              <div class="card">
                <div class="face face1 greenstore"></div>
                <div class="face face2">
                  <div class="content">
                    <h3>
                      <b>Green Store</b>
                    </h3>
                    <p>website to buy various kinds of fruits and vegetables</p>
                    <button className="project" onClick={() => openInNewTab("https://scintillating-mermaid-05a0ff.netlify.app/")}>
                      Visit
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12">
              <div class="card">
                <div class="face face1 movie"></div>
                <div class="face face2">
                  <div class="content">
                    <h3>
                      <b>Jirjatss Movie</b>
                    </h3>
                    <p>website to view movie list</p>
                    <button className="project" onClick={() => openInNewTab("https://keen-travesseiro-fdac30.netlify.app/")}>
                      Visit
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12">
              <div class="card">
                <div class="face face1 BMI"></div>
                <div class="face face2">
                  <div class="content">
                    <h3>
                      <b>BMI Calculator</b>
                    </h3>
                    <p>Body Mass Index is a simple calculation using a person’s height and weight. </p>
                    <button className="project" onClick={() => openInNewTab("https://clinquant-moxie-74d72e.netlify.app/")}>
                      Visit
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12">
              <div class="card">
                <div class="face face1 port"></div>
                <div class="face face2">
                  <div class="content">
                    <h3>
                      <b>Web Portofolio</b>
                    </h3>
                    <p>An online portfolio (may also be called a digital portfolio or e-portfolio)</p>
                    <button className="project" onClick={() => openInNewTab("https://jirjatss.netlify.app/")}>
                      Visit
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12">
              <div class="card">
                <div class="face face1 todo"></div>
                <div class="face face2">
                  <div class="content">
                    <h3>
                      <b>Add Todo List</b>
                    </h3>
                    <p>When your ADHD brain is swirling with deadlines, ideas, and tasks, logging them in a to-do list often feels cathartic</p>
                    <button className="project" onClick={() => openInNewTab("https://reliable-lebkuchen-6853f3.netlify.app/")}>
                      Visit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
