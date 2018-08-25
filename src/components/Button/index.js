import React from "react";

const buttonStyle = props => {
  let color = !!props.color ? props.color : "blue";
  let width = !!props.width ? `${props.width}px` : "45px";
  let height = !!props.height ? `${props.height}px` : "22px";
  return {
    width: width,
    backgroundColor: color,
    color: "white",
    height: height,
    border: "none"
  };
};

const Button = props => {
  return (
    <button
      onClick={props.onClick}
      style={buttonStyle(props)}
      className={props.className}
    >
      {props.text}
    </button>
  );
};

export default Button;
