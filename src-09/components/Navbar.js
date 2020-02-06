import React from "react";
import "../styles/Navbar.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads
const styling = {
  background: "#007700",
  justifyContent: "flex-end"
}

function Navbar() {
  return (
    <nav className="navbar" style={styling}>
      <a href="/">Welcome</a>
    </nav>
  );
}

export default Navbar;
