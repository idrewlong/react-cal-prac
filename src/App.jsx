import React from "react";
import { useState } from "react";

const App = () => {
  // Initialize state using the useState Hook:
  const [result, setResult] = useState("");
  // This line initializes a state variable result and a function setResult to manage and update the value of result. Initially, result is set to an empty string.
  const handleClick = (e) => setResult(result.concat(e.target.id));
  // This function is called when a button in the calculator is clicked. It takes the ID of the clicked button from the event (e) and appends it to the current value stored in the result state variable.
  const clear = () => setResult("");
  // This function is called when the "Clear" button is clicked. It sets the result state to an empty string, effectively clearing the calculator display.
  const deleteEl = () => setResult(result.slice(0, -1));
  // This function is called when the "Delete" button is clicked. It removes the last character from the result state by slicing the string.
  const calculate = () => {
    try {
      setResult(eval(result.toString()));
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={result} disabled />
      <div className="buttons">
        <button className="operator" onClick={clear}>
          AC
        </button>

        <button className="operator" onClick={deleteEl}>
          DE
        </button>

        <button id="." className="operator" onClick={handleClick}>
          .
        </button>
        <button id="/" className="operator" onClick={handleClick}>
          /
        </button>

        {/* Numbers */}
        <button id="7" className="number" onClick={handleClick}>
          7
        </button>
        <button id="8" className="number" onClick={handleClick}>
          8
        </button>
        <button id="9" className="number" onClick={handleClick}>
          9
        </button>

        <button id="*" className="operator" onClick={handleClick}>
          *
        </button>

        <button id="4" className="number" onClick={handleClick}>
          4
        </button>
        <button id="5" className="number" onClick={handleClick}>
          5
        </button>
        <button id="6" className="number" onClick={handleClick}>
          6
        </button>

        <button id="-" className="operator" onClick={handleClick}>
          -
        </button>

        <button id="1" className="number" onClick={handleClick}>
          1
        </button>
        <button id="2" className="number" onClick={handleClick}>
          2
        </button>
        <button id="3" className="number" onClick={handleClick}>
          3
        </button>

        <button id="+" className="operator" onClick={handleClick}>
          +
        </button>

        <button id="00" className="number" onClick={handleClick}>
          00
        </button>
        <button id="0" className="number" onClick={handleClick}>
          0
        </button>

        <button id="=" className="operator col-span-2" onClick={calculate}>
          =
        </button>
      </div>
    </div>
  );
};

export default App;
