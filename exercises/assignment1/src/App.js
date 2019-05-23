import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

function App() {
  const [userNameState, setUserName] = useState({
    people: [{ name: "Leonardo" }, { name: "Miriam" }]
  });

  const userNameChangeHandler = event => {
    setUserName({
      people: [{ name: event.target.value }, { name: "Miriam" }]
    });
  };

  const userNameChangeClickHandler = newName => {
    setUserName({
      people: [{ name: newName }, { name: "Miriam" }]
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <UserInput changed={userNameChangeHandler} />
      <UserOutput
        username={userNameState.people[0].name}
        click={userNameChangeClickHandler.bind(this, "Leo!!!")}
      />
      <UserOutput username={userNameState.people[1].name} />
    </div>
  );
}

export default App;
