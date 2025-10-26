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

  function handleChange(e) {
    const value = e.target.value;
    if (/^[0-9+\-*/.]*$/.test(value)) setInput(value);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") handleCalculate();
    if (e.key === "Delete") handleClear();
  }
  return (
    <div className="app">
      <Display value={input} onChange={handleChange} handleKeyDown={handleKeyDown}/>
      <ButtonGrid onClick={handleClick} handleCalculate={handleCalculate} handleClear={handleClear}/>
    </div>
  );
}

export default App;
