import React from "react";

export const Volunteer = () => {
  return (
    <section className="sec-section skill-section" id="volunteer">
      <h4 className="section-heading">
        <i className="fas fa-handshake heading-icon"></i>
        Social Contributions
      </h4>
      <blockquote>
        "Every good act is charity. A man's true wealth hereafter is the good
        that he does in this world to his fellows." &mdash;
        <cite>Moliere</cite>
      </blockquote>
      {/* col-1 */}
      <div className="exp-card">
        <div className="card">
          {/* <div className="card-title">Lead Developer</div> */}
          <div className="card-body">
            <ul className="workList">
              <li>
                <i className="far fa-check-circle listLi"></i> Donated to a old
                age home thorugh German Red Cross NGO
              </li>
              <li>
                <i className="far fa-check-circle listLi"></i> Donated to Berlin
                Flood Relief
              </li>
              <li>
                <i className="far fa-check-circle listLi"></i> Donated to
                Chennai Floof Relief
              </li>
              <li>
                <i className="far fa-check-circle listLi"></i> Donated to Covid
                Relief fund in India
              </li>
              <li>
                <i className="far fa-check-circle listLi"></i> Donated 2 day
                salary to @CRY
              </li>
              <li>
                <i className="far fa-check-circle listLi"></i> Active member of
                Oxfam India and Amnesty International NGOs
              </li>
              <li>
                <i className="far fa-check-circle listLi"></i> Taught students
                from standard 1 to 5 under the Corporate Social Responsibility
                program of the company
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Volunteer;
