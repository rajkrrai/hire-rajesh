import React, { useEffect } from "react";
import profilePic from "../assets/img/profpic2.JPG";
import resume from "../assets/cv/resume.pdf";
import Typed from "typed.js";

export const Homepage = () => {
  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    var animatedText = new Typed("#animatedText", {
      strings: [
        "Rajesh Kumar",
        "a Software Engineer",
        "a MERN full-stack developer",
      ],
      typeSpeed: 60,
      backSpeed: 60,
      fadeOut: true,
      loop: true,
      smartBackspace: true,
    });
  });
  return (
    <section className="intro-header">
      <div className="intro-parent">
        {" "}
        <div className="profileSkillCard">
          <img
            src={profilePic}
            alt="Profile pic of rajesh kumar"
            className="profilePic"
          />
          <div className="SkillsOverlay bg-section">
            <h5>Skills</h5>
            <div className="technology-wrapper-header" id="smallText">
              <div>
                <i className="fab fa-html5 techIcon"></i>HTML5
              </div>
              <div>
                <i className="fab fa-css3-alt techIcon"></i>CSS3
              </div>
              <div>
                <i className="fab fa-js-square techIcon"></i>Javascript
              </div>
              <div>
                <i className="fab fa-envira techIcon"></i>Mongo DB
              </div>
              <div>
                <i className="fab fa-node techIcon"></i> Node.js with Express.js
              </div>
              <div>
                <i className="fab fa-react techIcon"></i> React.js
              </div>
              <div>
                <i className="fas fa-atom techIcon"></i>Electron.js
              </div>
              <div>
                <i className="fas fa-code techIcon"></i>VB.Net
              </div>
              <div>
                <i className="fas fa-database techIcon"></i>Oracle Pl/Sql
              </div>
            </div>
          </div>
        </div>
        <div className="intro-content">
          <h4 className="hiText">Hi there,</h4>
          <h3>
            I am <span id="animatedText">Rajesh Kumar</span>
          </h3>
          <p className="intro-text">
            I aspire for a challenging position in a professional Organization
            where I can enhance my skills and strengthen them in conjunction
            with Organization’s goals. A self-motivated achiever with an ability
            to plan and execute. Delivered successful work with global teams in
            multicultural and international environment. My education and work
            exposure has given me the opportunity to learn the best practices of
            Asia as well as Europe.
          </p>
          <div className="downloadSection">
            <a
              href={resume}
              target="_blank"
              rel="noreferrer"
              className="btn btn-resume"
            >
              Resume <i className="fas fa-arrow-down"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="waves">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#051bbf"
            fillOpacity="0.8"
            d="M0,128L48,149.3C96,171,192,213,288,192C384,171,480,85,576,69.3C672,53,768,107,864,112C960,117,1056,75,1152,53.3C1248,32,1344,32,1392,32L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Homepage;
