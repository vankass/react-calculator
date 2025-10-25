import { useState } from "react";
import Display from "./components/Display/Display";
import ButtonGrid from "./components/ButtonGrid/ButtonGrid";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  function handleClick(value) {
    const operators = ["+", "-", "/", "*"];
    if (operators.includes(value) && operators.includes(input.slice(-1))) return;
    setInput(input + value);
  }

  function handleCalculate() {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput(input)
    }
  }

  function handleClear() {
    setInput("");
  }

  return (
    <div className="app">
      <Display value={input}/>
      <ButtonGrid onClick={handleClick} handleCalculate={handleCalculate} handleClear={handleClear}/>
    </div>
  );
}

export default App;
