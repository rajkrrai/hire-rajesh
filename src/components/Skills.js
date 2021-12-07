import React from "react";

export const Skills = () => {
  return (
    <section className="sec-section bg-section" id="skills">
      <h4 className="section-heading">
        <i className="fas fa-tools heading-icon"></i>
        Skills
      </h4>
      <blockquote>
        "Skill is the unified force of experience, intellect and passion in
        their operation." &mdash;
        <cite>John Ruskin</cite>
      </blockquote>
      {/* col-1 */}
      <div className="technology-wrapper">
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
        {/* below non technical skills */}
        <div>IBM Clear Case</div>
        <div>IBM Clear Quest</div>
        <div>
          <i className="fab fa-git-alt techIcon"></i>GIT
        </div>
        <div>
          <i className="fas fa-code-branch techIcon"></i>SVN
        </div>
        <div>
          <i className="fab fa-jira techIcon"></i>JIRA
        </div>
        <div>
          <i className="fab fa-jira techIcon"></i>JFM
        </div>
        <div>
          <i className="fab fa-jira techIcon"></i>Confluence
        </div>
        <div>SONAR</div>
      </div>
    </section>
  );
};

export default Skills;
