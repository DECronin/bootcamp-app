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
          <h3>Card title</h3>
        </div>
        <div className="card-body">
          <p className="card-text">Card content</p>
        </div>
      </div>
      <div className="card mb-4">
        <div className="card-header">
          <h3>Card title</h3>
        </div>
        <div className="card-body">
          <p className="card-text">Card content</p>
        </div>
      </div>
    </div>
  );
}

export default HelloBootstrap;
