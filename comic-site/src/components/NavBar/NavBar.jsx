import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <div class="topnav">
        <a class="active" href="#home">
          Home
        </a>
        <a href="#news">Comics</a>
        <a href="#contact">Characters</a>
      </div>
    </>
  );
};

export default NavBar;
