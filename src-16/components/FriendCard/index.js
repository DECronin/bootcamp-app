import React from "react";
import "./style.css";

function FriendCard(props) {
  let x = props.friend;
  return (
    <li key={x.id}>
      <div className="card">
        <div className="img-container">
          <img alt={x.name} src={x.image} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Name:</strong> {x.name}
            </li>
            <li>
              <strong>Occupation:</strong> {x.occupation}
            </li>
            <li>
              <strong>Address:</strong> {x.location}
            </li>
          </ul>
        </div>
        <span className="remove" onClick={() => props.handleFriendship(x.id)}>𝘅</span>
      </div>
    </li>
  )
}

export default FriendCard;
