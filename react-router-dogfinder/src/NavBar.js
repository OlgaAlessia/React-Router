import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar({ dogs }) {
  const dogsLinks = dogs.map(dog => (
    <NavLink key={dog.name} to={`/dogs/${dog.name.toLowerCase()}`}>
      {dog.name}
    </NavLink>
  ));

  return (
    <nav className="NavBar">
      <NavLink to="/dogs">Home</NavLink>
      {dogsLinks}
    </nav>
  );
}


export default NavBar;
