import React from "react";

const NavBar = ({ numCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <span className="badge badge-pill badge-secondary">{numCounters}</span>
      </a>
    </nav>
  );
};

export default NavBar;
