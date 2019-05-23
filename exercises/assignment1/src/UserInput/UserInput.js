import React from "react";
import "./UserInput.css";

const userInput = props => {
  return (
    <div>
      <input type="text" className="MyInput" onChange={props.changed} />
    </div>
  );
};

export default userInput;
