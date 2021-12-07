import "./App.css";
import "./Media.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import Homepage from "./components/Homepage";
import Workex from "./components/Workex";
import Skills from "./components/Skills";
import Awards from "./components/Awards";
import Education from "./components/Education";
import Volunteer from "./components/Volunteer";
function App() {
  return (
    <Router>
      <nav className="nav1">
        <div className="navbar-container">
          <div className="name-tag">
            <span className="lessThan">&lt;</span>
            <span className="nameInNav">Rajeh Kumar</span>
            <span className="grtThan">/&gt;</span>
          </div>
          <div className="navbar">
            <i className="fas fa-bars menubar"></i>
            <ul className="navLinks">
              <li>
                <a href="/" exact="true" className="nav-link-items">
                  Home
                </a>
              </li>
              <li>
                <a href="#workex" className="nav-link-items">
                  Work-Ex
                </a>
              </li>
              <li>
                <a href="#awards" className="nav-link-items">
                  Awards
                </a>
              </li>
              <li>
                <a href="#skills" className="nav-link-items">
                  Skills
                </a>
              </li>
              <li>
                <a href="#education" className="nav-link-items">
                  Education
                </a>
              </li>
              <li>
                <a href="#volunteer" className="nav-link-items">
                  Volunteerships
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <Routes>
          <Route path="/" element={Homepage}></Route>
          <Route path="/workex" element={Workex}></Route>
        </Routes> */}
      <Homepage />
      <Workex />
      <Skills />
      <Awards />
      <Education />
      <Volunteer />
    </Router>
  );
}

export default App;
