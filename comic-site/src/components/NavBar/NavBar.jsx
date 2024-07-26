import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="topnav">
      <Link className="active" to="/">
        Home
      </Link>
      <Link to="/films">Films</Link>
      <Link to="/planets">Planets</Link>
    </div>
  );
};

export default NavBar;
