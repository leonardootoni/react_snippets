import React from "react";
import Radium from "radium";
import "./Person.css";

const person = props => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        I am {props.name} and my age is {props.age}
      </p>
      <input type="text" onChange={props.changed} value={props.name} />
      <p>{props.children}</p>
    </div>
  );
};

export default Radium(person);
