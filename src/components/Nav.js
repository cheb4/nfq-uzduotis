import React from "react";
import { Link } from "react-router-dom";
function Nav() {
  const navStyle = {
    color: "white"
  };
  return (
    <nav>
      <Link style={navStyle} to="/">
        <h3>Pagrindinis</h3>
      </Link>
      <ul className="nav-links">
        <Link style={navStyle} to="/components/Svieslente">
          <li>Svieslente</li>
        </Link>
        <Link style={navStyle} to="/components/Administracija">
          <li>Administracija</li>
        </Link>
        <Link style={navStyle} to="/components/Specialistas">
          <li>Specialistas</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
