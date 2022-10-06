import React from "react";
import "./Masthead.css";
import { Github, Instagram, Linkedin } from "react-bootstrap-icons";
import { HashLink } from "react-router-hash-link";

function Masthead() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <>
      <div className="container-fluid halaman" id="home">
        <div className="container" style={{ borderRadius: "10px", padding: "3rem" }}>
          <div className="flex justify-content items-center">
            <div className="mast">
              <h1 className="masthead">I'm Muhammad Hijir Sajad</h1>
              <h4 className="masthead">Front End Developer</h4>
              <ul className="social mb-0 list-inline mt-3">
                <li className="list-inline-item">
                  <button onClick={() => openInNewTab("https://www.instagram.com/Jirjatss/")} className="social-link">
                    <Instagram color="whitesmoke" size={25} />
                  </button>
                </li>
                <li className="list-inline-item">
                  <button onClick={() => openInNewTab("https://github.com/Jirjatss")} className="social-link">
                    <Github color="whitesmoke" size={25} background="transparent" />
                  </button>
                </li>
                <li className="list-inline-item">
                  <button onClick={() => openInNewTab()} className="social-link">
                    <Linkedin color="whitesmoke" size={25} />
                  </button>
                </li>
              </ul>
              <HashLink className="nav-link" to="#projects">
                <button className="projects">Projects</button>
              </HashLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Masthead;
