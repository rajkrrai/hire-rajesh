import React from "react";
import schoolLogo from "../assets/img/dav_logo.png";
import nitskmlogo from "../assets/img/nitskm.svg";
export const Education = () => {
  return (
    <section className="sec-section bg-section">
      <h4 className="section-heading" id="education">
        <i className="fas fa-user-graduate heading-icon"></i>
        Education
      </h4>
      <blockquote>
        "Education is the most powerful weapon which you can use to change the
        world." &mdash;
        <cite>Nelson Mandela</cite>
      </blockquote>
      <div className="education-wrapper">
        {/* college input */}
        <div className="graduation-wrapper">
          <img src={nitskmlogo} alt="logo of nit sikkim" className="eduLogo" />
          <div className="grad-content">
            <div className="wrapper">
              <a
                href="https://nitsikkim.ac.in/"
                target="_blank"
                rel="noreferrer"
                className="instituteName"
              >
                National Institute of Technology, Sikkim
              </a>
              <p>&mdash; 2015</p>
            </div>

            <p className="sub-title branch">
              Electrical and electronics engineering <strong>(74.3 %)</strong>
            </p>
            <p className="grad-body">
              Persued Bachelors in Technology (B.tech) in Electrical and
              Electronics Engineering with additional Knowledge in the field of
              computer science from NIT Sikkim - An Institute of National
              Importance (Govt. of India).{" "}
            </p>
          </div>
        </div>

        {/* school input */}
        <div className="graduation-wrapper">
          <img
            src={schoolLogo}
            alt="logo of D.A.V Public school sikkim"
            className="eduLogo2"
          />
          <div className="grad-content">
            <div className="wrapper">
              <a
                href="http://davsikkim.org/"
                target="_blank"
                rel="noreferrer"
                className="instituteName"
              >
                D.A.V Public School, Sikkim
              </a>
              <p>&mdash; 2010</p>
            </div>

            <p className="sub-title branch">
              Science <strong>(85.6 %)</strong>
            </p>
            <p className="grad-body">
              Completed my high school education in a CBSE affiliated school.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
