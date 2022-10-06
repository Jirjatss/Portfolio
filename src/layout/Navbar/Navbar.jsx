import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Navbar.css";

function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const changeBg = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeBg);
  }, []);

  return (
    <>
      <header id="jumbotron" className="jumbotron jumbotron-fluid">
        <nav className={navbar ? "navbar active container-fluid navbar-expand-lg fixed-top" : "navbar container-fluid navbar-expand-lg fixed-top"}>
          <div className="container">
            <Link className="navbar-brand" to="/">
              <div className="jirjatss mt-2">Jirjatss</div>
            </Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" style={{ color: "black" }}></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <HashLink className="nav-link" to="#home">
                  Home
                </HashLink>
                <HashLink className="nav-link" to="#about">
                  About
                </HashLink>

                <HashLink className="nav-link" to="#education">
                  Education
                </HashLink>
                <HashLink className="nav-link" to="#skills">
                  Skills
                </HashLink>
                <HashLink className="nav-link" to="#contact">
                  Contact
                </HashLink>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
