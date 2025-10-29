import { useState } from "react";
import Display from "./components/Display/Display";
import ButtonGrid from "./components/ButtonGrid/ButtonGrid";
import History from "./components/History/History";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);

  function handleClick(value) {
    const operators = ["+", "-", "/", "*", "."];
    if (operators.includes(value) && operators.includes(input.slice(-1)))
      return;
    setInput(input + value);
  }

  function handleCalculate() {
    try {
      const result = eval(input);
      setHistory((prev) => {
        const newHistory = [`${input} = ${result}`, ...prev];
        return newHistory.slice(0, 20);
      });
      setInput(result.toString());
    } catch {
      setInput(input);
    }
  }

  function handleClear() {
    setInput("");
  }

  function handleBackSpace() {
    setInput((prev) => prev.slice(0, -1));
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
      <div className="calculator">
        <Display
          value={input}
          onChange={handleChange}
          handleKeyDown={handleKeyDown}
        />
        <ButtonGrid
          onClick={handleClick}
          handleCalculate={handleCalculate}
          handleClear={handleClear}
          handleBackSpace={handleBackSpace}
        />
      </div>
      <History history={history} />
    </div>
  );
}

export default App;
