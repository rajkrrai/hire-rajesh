import React from "react";
// import { BrowserRouter as Router, NavLink } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="name-tag">
          <span>&lt;</span>
          <span className="nameInNav">Rajeh Kumar</span>
          <span>/&gt;</span>
        </div>
        <div className="navbar nav"></div>
      </div>
    </nav>
  );
};

export default Navbar;
