import React from "react";

export const Awards = () => {
  return (
    <section className="sec-section awards-section" id="awards">
      <h4 className="section-heading">
        <i className="fas fa-medal heading-icon"></i>
        Achievements
      </h4>

      <blockquote>
        "Some people see things as they are, and say why. I dream of things that
        never were, and say why not." &mdash;
        <cite>Robert Kennedy</cite>
      </blockquote>
      <div className="exp-card">
        <div className="card">
          {/* <div className="card-title">Lead Developer</div> */}
          <div className="card-body">
            <ul className="workList">
              <li>
                <i className="far fa-check-circle listLi"></i> Recognized by
                BRAVO award in our project
              </li>
              <li>
                <i className="far fa-check-circle listLi"></i> Honoured by PAT
                ON THE BACK award for developing in-house desktop application
                for the project.
              </li>
              <li>
                <i className="far fa-check-circle listLi"></i> Recognized as
                BEST TEAM AWARD by the client
              </li>
              <li>
                <i className="far fa-check-circle listLi"></i> Bagged many
                customer appreciation for keeping the project KPI up-to the mark
              </li>
              <li>
                <i className="far fa-check-circle listLi"></i> Appreciated for
                leading and organizing many cultural and party events as active
                member of "JOSH" of the Organization at Munich Location
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
