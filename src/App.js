import React, { useEffect } from "react";
import "./App.css";
import "./Media.css";
import { BrowserRouter as Router } from "react-router-dom";

import Homepage from "./components/Homepage";
import Workex from "./components/Workex";
import Skills from "./components/Skills";
import Awards from "./components/Awards";
import Education from "./components/Education";
import Volunteer from "./components/Volunteer";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
function App() {
  useEffect(() => {
    const toggleButton = document.getElementsByClassName("toggle-button")[0];
    const navbarLinks = document.getElementsByClassName("navbar-links")[0];

    toggleButton.addEventListener("click", () => {
      navbarLinks.classList.toggle("active");
    });
  });
  return (
    <Router>
      <nav class="navbar container">
        <div class="brand-title">
          <span className="lessThan">&lt;</span>
          <span className="nameInNav">Rajeh Kumar</span>
          <span className="grtThan">/&gt;</span>
        </div>
        <a href="#!" class="toggle-button">
          <i className="fas fa-bars menubar"></i>
        </a>
        <div class="navbar-links">
          <ul>
            <li>
              <a href="/" exact="true" className="nav-link-items">
                Home
              </a>
            </li>
            <li>
              <a href="#workex" className="nav-link-items">
                Work
              </a>
            </li>
            <li>
              <a href="#awards" className="nav-link-items">
                Awards
              </a>
            </li>
            <li>
              <a href="#skills" className="nav-link-items">
                Skills
              </a>
            </li>
            <li>
              <a href="#education" className="nav-link-items">
                Education
              </a>
            </li>
            <li>
              <a href="#volunteer" className="nav-link-items">
                Volunteerships
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <Homepage />
      <Workex />
      {/* <Projects /> */}
      <Skills />
      <Awards />
      <Education />
      <Volunteer />
      <Footer />
    </Router>
  );
}

export default App;
