import React, { useEffect, useState } from "react";
import "./App.css";
import "./Media.css";
// import { BrowserRouter as Router } from "react-router-dom";

import Homepage from "./components/Homepage";
import Workex from "./components/Workex";
import Skills from "./components/Skills";
import Awards from "./components/Awards";
import Education from "./components/Education";
import Volunteer from "./components/Volunteer";
import Footer from "./components/Footer";
// import Projects from "./components/Projects";
const App = () => {
  // const [navabr, setScroll] = useState(false);

  useEffect(() => {
    const toggleButton = document.getElementById("toggle-button");
    toggleButton.addEventListener("click", (e) => {
      onLinkClick();
    });
  });

  const onLinkClick = (e) => {
    const navbarLinks = document.getElementById("navbar-links");
    navbarLinks.classList.toggle("active");
  };

  window.addEventListener("scroll", (e) => {
    // console.log("scroll event", window.scrollY);
    var nav = document.querySelector("nav");

    if (window.scrollY > 22) {
      // setScroll(true);
      nav.classList.add("sticky");
    } else {
      //setScroll(false);
      nav.classList.remove("sticky");
    }
  });

  return (
    <div>
      <nav className="navbar">
        <div className="brand-title">
          <span className="lessThan">&lt;</span>
          <span className="nameInNav">Rajeh Kumar</span>
          <span className="grtThan">/&gt;</span>
        </div>
        <a href="#!" className="toggle-button" id="toggle-button">
          <i className="fas fa-bars menubar"></i>
        </a>
        <div className="navbar-links" id="navbar-links">
          <ul>
            <li>
              <a
                href="/"
                exact="true"
                className="nav-link-items"
                onClick={onLinkClick}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#workex"
                className="nav-link-items"
                onClick={onLinkClick}
              >
                Work
              </a>
            </li>
            <li>
              <a
                href="#awards"
                className="nav-link-items"
                onClick={onLinkClick}
              >
                Awards
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="nav-link-items"
                onClick={onLinkClick}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#education"
                className="nav-link-items"
                onClick={onLinkClick}
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#volunteer"
                className="nav-link-items"
                onClick={onLinkClick}
              >
                Volunteerships
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <Homepage />
      <Workex />

      <Skills />
      <Awards />
      <Education />
      <Volunteer />
      <Footer />
    </div>
  );
};

export default App;
