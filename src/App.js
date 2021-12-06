import "./App.css";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import Homepage from "./components/Homepage";
import Workex from "./components/Workex";
import Skills from "./components/Skills";
import Awards from "./components/Awards";
import Education from "./components/Education";
import Volunteer from "./components/Volunteer";
function App() {
  return (
    <Router>
      <div className="container">
        <nav className="nav">
          <div className="navbar-container">
            <div className="name-tag">
              <span className="lessThan">&lt;</span>
              <span className="nameInNav">Rajeh Kumar</span>
              <span className="grtThan">/&gt;</span>
            </div>
            <div className="navbar">
              <ul className="navLinks">
                <li>
                  <NavLink
                    to="/"
                    exact="true"
                    activeClassName="active"
                    className="nav-link-items"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/workex"
                    activeClassName="active"
                    className="nav-link-items"
                  >
                    Work-Ex
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/awards"
                    activeClassName="active"
                    className="nav-link-items"
                  >
                    Awards
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/skills"
                    activeClassName="active"
                    className="nav-link-items"
                  >
                    Skills
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/education"
                    activeClassName="active"
                    className="nav-link-items"
                  >
                    Education
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/volunteer"
                    activeClassName="active"
                    className="nav-link-items"
                  >
                    Volunteerships
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Homepage />
        <Workex />
        <Skills />
        <Awards />
        <Education />
        <Volunteer />
      </div>
    </Router>
  );
}

export default App;
