import React from "react";
import "./CharComponent.css";

const CharComponent = props => {
  return (
    <div onClick={props.click} className="CharComponent">
      {props.value}
    </div>
  );
};

export default CharComponent;
