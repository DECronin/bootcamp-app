import React from "react";

function List(props) {
const groceries = props.groceries;
// const listItems = groceries.map(x => 
// <li className="list-group-item" key={x.id}> {x.purchased ? x.name : <strike>{x.name}</strike>}</li>
// )

const listItems = groceries.filter(x => x.purchased).map(x => 
  <li className="list-group-item" key={x.id}>{x.id}: {x.name}</li>
)

return (
    <ul className="list-group">
      {listItems}
    </ul>
  );
}

export default List;
