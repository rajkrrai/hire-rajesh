import React from "react";
const skills = [
  "ReactJS",
  "ElectronJS",
  "NodeJS with ExpressJS",
  "MongoDB",
  "Javascript",
  "HTML5",
  "CSS3",
  "VB.NET",
  "Oracle Pl/Sql",
  "IBM Clear Case",
  "IBM Clear Quest",
  "GIT",
  "GTIHUB",
  "JIRA",
  "JFM",
  "Confluence",
  "SASS",
];
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
        {skills.map((skill, idx) => {
          return (
            <div key={idx}>
              <i className="techIcon"></i>
              {skill}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
