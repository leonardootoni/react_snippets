import React, { useState } from "react";
import Radium from "radium";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";

const App = props => {
  const [state, setState] = useState({
    people: [
      { id: "0", name: "Leo", age: 41 },
      { id: "1", name: "Miram", age: 46 }
    ],
    otherState: "Blablabla",
    showPeople: false
  });

  const nameChangeHandler = (event, personId) => {
    const personIndex = state.people.findIndex(element => {
      return element.id === personId;
    });

    const person = { ...state.people[personIndex] };
    person.name = event.target.value;

    const people = [...state.people];
    people[personIndex] = person;

    setState({ ...state, people });
  };

  const deletePersonHandler = index => {
    const updatedPeople = [...state.people];
    updatedPeople.splice(index, 1);
    setState({ ...state, people: updatedPeople });
  };

  const togglePeopleHandler = () => {
    setState({ ...state, showPeople: !state.showPeople });
  };

  //console.log(state.otherState);
  const style = {
    backgroundColor: "green",
    color: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer"
  };

  let people = null;
  if (state.showPeople) {
    people = (
      <div>
        {state.people.map((person, index) => {
          return (
            <Person
              key={person.id}
              name={person.name}
              age={person.age}
              changed={event => nameChangeHandler(event, person.id)}
              click={() => deletePersonHandler(index)}
            />
          );
        })}
      </div>
    );

    style.backgroundColor = "red";
  }

  let classes = [];
  if (state.people.length <= 1) {
    classes.push("red");
  }
  if (state.people.length > 1) {
    classes.push("bold");
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className={classes.join(" ")}>
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <button
        style={style}
        // onClick={switchNameHandler.bind(this, "From button.")}
        onClick={togglePeopleHandler}
      >
        Switch names
      </button>
      {people}
    </div>
  );
};

export default App;
