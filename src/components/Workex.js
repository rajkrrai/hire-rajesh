import React from "react";
import techmImg from "../assets/img/techm.png";
import tefo2 from "../assets/img/tefo2.png";
const LeadWorkex = [
  "Over 3+ years of professional exposure in JavaScript technology such as React JS,Node JS, Express JS, Electron JS and MongoDB.",
  "Building high-quality, scalable and reusable components in React with HTML5, CSS3, SASS, Reactstrap, Bootstrap to provide the Front-end solutions.",
  "The back-end use of Node JS, Express JS, MongoDB and Mongoose, the complete MERN Stack to provide Restful API.",
  "Expertise in creating the user validation forms and using the RESTful services for sending the data to the server.",
  "Good experience on working with CSS Background, padding, table, Animations, Pseudo classes and Layouts, positioning, border, margin, Pseudo elements and CSS behaviors including the Box model, flex box and grid model.",
  "Strong experience with the version controls GIT, GITHUB, SVN and Node Package manager - NPM.",
  "Very proficient knowledge of JIRA to track issues and communicate with other teams at various environments.",
  "Involved in daily SCRUM meetings to keep track of the project status.",
  "Involved in all the stages of Software Development Life Cycle like Application Design, Development, Debugging and Testing all applications.",
  "Created a custom desktop in ElectronJS and a web application for the project in React and NodeJS from scratch.",
  "A result-oriented professional with good communication, leadership, team management, analytical and co-ordination skills.",
];

const JrWorex = [
  "Participated in User Stories walk through,understood business requirement, performed technical analysis and decided design approach in a agile team.",
  "Enhancing features of CRM in VB.Net and building back end business logic oracle Pl/Sql.",
  "Extensive usage of SVN for documents and IBM clear-case for code repository.",
  "Ensured code quality through SONAR at early phase of testing and fix them.",
  'Maintaining and enhancing "Knowledge management" in Confluence.',
  "Providing guided training to new joiners.",
  "Presented report to client in face-to-face meeting.",
];
export const Workex = () => {
  return (
    <section className="sec-section work-section" id="workex">
      <h4 className="section-heading">
        <i className="fas fa-briefcase heading-icon"></i>
        Work Experience
      </h4>
      <blockquote>
        "All things are difficult before they are easy." &mdash;
        <cite>Thomas fuller</cite>
      </blockquote>
      {/* col 1 */}
      <div className="company-wrapper">
        <img src={techmImg} alt="tech mahindra logo" className="techmlogo" />
        <img src={tefo2} alt="telefonica o2 logo" className="teflogo" />
      </div>

      {/* col 2 */}
      <div className="work-wrapper">
        <div className="work-time">
          <div>
            <p className="title">Tech Mahindra GmbH</p>
            <p className="sub-title">Software Engineer</p>
          </div>
          <div>
            <p className="yearsOfEx">2015 &mdash; Present</p>
          </div>
        </div>

        <div className="work-desc">
          <p className="intro-text">
            Having 6+ years of rich work experience in Agile Methodology at
            various roles of IT software development in BSS stack (CRM) of
            Telefonica o2 Germany. Worked and led highly motivated and
            productive team with Agile-Scrum methodology, participated in Daily
            Scrum, Sprint Planning, Sprint Review, Sprint Retro meetings and
            developed each sprint deliverables.
          </p>
        </div>
      </div>

      <div className="exp-card">
        <div className="card">
          <div className="card-title">Lead Developer</div>
          <div className="card-body">
            <ul className="workList">
              {LeadWorkex.map((item) => {
                return (
                  <li className="workListItems">
                    <i className="far fa-check-circle listLi"></i> <p>{item}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-title">Junior Developer</div>
          <div className="card-body">
            <ul className="workList">
              {JrWorex.map((item) => {
                return (
                  <li className="workListItems">
                    <i className="far fa-check-circle listLi"></i> <p>{item}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workex;
