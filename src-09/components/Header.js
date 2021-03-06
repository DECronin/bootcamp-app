import React from "react";
import "../styles/Header.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads
const style = {
  fontSize: "100px",
  background: "red"
}

function Header() {
  return (
    <header className="header" style={style}>
      <h1 style={style}>Welcome</h1>
    </header>
  );
}

export default Header;
