import React from "react";

function CardBody({ language }) {
  return (
    <div>
      <h4>Favorite language: {language}</h4>
    </div>
  );
}

export default CardBody;


// * The card on the gallery page should contain an image of the user, their programming language, 
// and arrow buttons that allow for navigation through different users.