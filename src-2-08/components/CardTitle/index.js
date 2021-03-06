import React from "react";
import CardTitleText from "../CardTitleText";
import "./style.css";


function CardTitle({ title }) {
  return (
    <div className="blue text-center">
      <CardTitleText title={title}/>
    </div>
  );
}

export default CardTitle;
