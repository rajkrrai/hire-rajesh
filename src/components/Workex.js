import React from "react";
import techmImg from "../assets/img/techm.png";
import tefo2 from "../assets/img/tefo2.png";
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
              <li className="workListItems">
                <i className="far fa-check-circle listLi"></i>{" "}
                <p>
                  Used Agile-Scrum methodology, participated in Daily Scrum,
                  Sprint Planning, Sprint Review and Sprint Retro meetings and
                  developed each sprint deliverable.
                </p>
              </li>
              <li className="workListItems">
                <i className="far fa-check-circle listLi"></i>{" "}
                <p>
                  Planned, developed, tested, deployed, and maintained web
                  applications.
                </p>
              </li>
              <li className="workListItems">
                <i className="far fa-check-circle listLi"></i>{" "}
                <p>
                  Provided effective troubleshooting and remediation for web
                  applications.
                </p>
              </li>
              <li className="workListItems">
                <i className="far fa-check-circle listLi"></i>{" "}
                <p>Worked well independently and within a team setting.</p>
              </li>
              <li className="workListItems">
                <i className="far fa-check-circle listLi"></i>{" "}
                <p>
                  Effectively translated client requirements into application
                  designs and systems requirements.
                </p>
              </li>
              <li className="workListItems">
                <i className="far fa-check-circle listLi"></i>{" "}
                <p>
                  Followed policies and procedures related to application
                  methods and quality standards at all times.
                </p>
              </li>
              <li className="workListItems">
                <i className="far fa-check-circle listLi"></i>
                {/* <p>Providing guided training to new joineers</p> */}
                Created a custom desktop in ElectronJS and web application for
                the project in React and NodeJS from scratch.
              </li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-title">Junior Developer</div>
          <div className="card-body">
            <ul className="workList">
              <li className="workListItems">
                <i className="far fa-check-circle listLi"></i>{" "}
                <p>
                  Participated in User Stories walk through,understood business
                  requirement, performed technical analysis and decided design
                  approach in a agile team
                </p>
              </li>
              <li className="workListItems">
                <i className="far fa-check-circle listLi"></i>{" "}
                <p>
                  Enhancing features of CRM in VB.Net and building back end
                  business logic oracle Pl/Sql
                </p>
              </li>
              <li className="workListItems">
                <i className="far fa-check-circle listLi"></i>{" "}
                <p>
                  Extensive usage of SVN for documents and IBM clear-case for
                  code repository
                </p>
              </li>
              <li className="workListItems">
                <i className="far fa-check-circle listLi"></i>{" "}
                <p>
                  Ensured code quality through SONAR at early phase of testing
                  and fix them
                </p>
              </li>
              <li className="workListItems">
                <i className="far fa-check-circle listLi"></i>{" "}
                <p>
                  Maintaining and enhancing "Knowledge management" in Confluence
                </p>
              </li>
              <li className="workListItems">
                <i className="far fa-check-circle listLi"></i>{" "}
                <p>Providing guided training to new joiners</p>
              </li>
              <li className="workListItems">
                <i className="far fa-check-circle listLi"></i>{" "}
                <p>Presented report to client in face-to-face meeting</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workex;
