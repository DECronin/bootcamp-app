import React from "react";
import Jumbo from "./jumbotron";

function HelloBootstrap() {
  return (
    <div className="container">
      <div className="jumbotron">
        <Jumbo />
      </div>
      <div className="card mb-4">
        <div className="card-header">
          <h3>Card 1</h3>
        </div>
        <div className="card-body">
          <p className="card-text">HELLO</p>
        </div>
      </div>
      <div className="card mb-4">
        <div className="card-header">
          <h3>Card 2</h3>
        </div>
        <div className="card-body">
          <p className="card-text">WORLD</p>
        </div>
      </div>
    </div>
  );
}

export default HelloBootstrap;
