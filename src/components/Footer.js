import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="flexFooter container bg-section">
        <div className="contactBlock">
          <h4>Contact Me</h4>
          <ul className="contactList">
            <li className="contactListItems">
              <i className="fas fa-mobile-alt"></i>
              <p>
                <a href="tel:+4915163630173" className="footerAnchor">
                  +49 151 63630173
                </a>
              </p>
            </li>
            <li className="contactListItems">
              <i className="far fa-envelope"></i>
              <p>
                <a
                  href="mailto:rairajeshjee@gmail.com"
                  className="footerAnchor"
                >
                  rairajeshjee@gmail.com
                </a>
              </p>
            </li>
            <li className="contactListItems">
              <i className="fas fa-map-marker-alt"></i>
              <p>
                <a
                  href="https://www.google.com/maps/place/Munich/@48.1548256,11.4017527,11z/data=!3m1!4b1!4m5!3m4!1s0x479e75f9a38c5fd9:0x10cb84a7db1987d!8m2!3d48.1351253!4d11.5819805"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footerAnchor"
                >
                  Munich, Germany
                </a>
              </p>
            </li>
          </ul>
        </div>
        <div className="contactBlock">
          <h4 className="followHeading">Follow Me</h4>
          <ul className="followList">
            <li className="followListItems linkedIn">
              <a
                href="https://www.linkedin.com/in/rajesh-kumar-b63b759b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li className="followListItems twitter">
              <a
                href="https://twitter.com/rairajeshjee"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <i className="fab fa-twitter"></i>{" "}
              </a>
            </li>
            <li className="followListItems instagram">
              <a
                href="https://www.instagram.com/kumar.rajesh7/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <i className="fab fa-instagram"></i>{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footerSubtitle">
        Made with <i className="fas fa-heart"></i> and{" "}
        <i className="fas fa-mug-hot"></i> by Rajesh in Germany.
      </div>
    </footer>
  );
};

export default Footer;
