import React from "react";
import "./UserOutput.css";

const userOutput = props => {
  return (
    <div className="MyOutput">
      <p onClick={props.click}>{props.username}</p>
      <p>{props.username}</p>
    </div>
  );
};

export default userOutput;
