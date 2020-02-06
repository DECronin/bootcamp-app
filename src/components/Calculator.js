import React from "react";

// Create a new component named "Math"
// Render one Math component in the place of each "?" mark
// Math should accept 3 props
// num1, operator, and num2
// Math should return a span tag displaying the result e.g.  19 + 341 = 360
function Calculator() {
  return (
    <div>
      <Math num1={19} operator={"+"} num2={341} />
      <Math num1={42} operator={"-"} num2={17} />
      <Math num1={100} operator={"*"} num2={3} />
      <Math num1={96} operator={"/"} num2={4} />
    </div>
  );
}

function Math(props) {
  // return `<p> ${props.num1} ${props.operator} ${props.num2} = ${answer} </p>`
  switch(props.operator){
    case "+":
      return <p>{`${props.num1} + ${props.num2} = ${props.num1 + props.num2}`}</p>;
    case "-":
      return <p>{`${props.num1} - ${props.num2} = ${props.num1 - props.num2}`}</p>;
    case "*" :
      return <p>{`${props.num1} * ${props.num2} = ${props.num1 * props.num2}`}</p>;
    case "/": 
      return <p>{`${props.num1} / ${props.num2} = ${props.num1 / props.num2}`}</p>;
    default:
      return "error"
  }
}

export default Calculator;
