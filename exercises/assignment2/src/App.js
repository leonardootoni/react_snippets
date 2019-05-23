import React, { useState } from "react";

import Validation from "./ValidationComponent/Validation";
import CharComponent from "./CharComponent/CharComponent";

import "./App.css";

function App() {
  const [state, setState] = useState({ text: "", myTextLength: 0 });

  const changeTextListener = event => {
    const text = event.target.value;
    const myTextLength = event.target.value.length;
    setState({ text, myTextLength });
  };

  const deleteCharacterHandler = index => {
    const updatedCharcters = [...state.text.split("")];
    updatedCharcters.splice(index, 1);
    setState({
      text: updatedCharcters.join(""),
      myTextLength: updatedCharcters.length
    });
  };

  let characters = null;
  if (state.myTextLength > 0) {
    characters = (
      <div>
        {state.text.split("").map((character, index) => {
          return (
            <CharComponent
              key={index}
              value={character}
              click={() => deleteCharacterHandler(index)}
            />
          );
        })}
      </div>
    );
  }

  return (
    <div className="App">
      <div>
        <input type="text" value={state.text} onChange={changeTextListener} />
        <p>Characters: {state.myTextLength}</p>
        <Validation length={state.myTextLength} />
      </div>
      {characters}
    </div>
  );
}

export default App;
