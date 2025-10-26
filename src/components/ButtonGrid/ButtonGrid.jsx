import { useEffect } from "react";
import Button from "../Button/Button";
import "./ButtonGrid.css";

export default function ButtonGrid({ onClick, handleCalculate, handleClear, handleBackSpace }) {
  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    ".",
    "0",
    "=",
    "+",
  ];

  useEffect(() => {
    function handleKeyDown(e) {
      e.preventDefault()

      let key = e.key;
      
      if (key === "Enter") {
        handleCalculate();
        key = "=";
      } else if (key === "Delete") {
        handleClear();
        key = "DELETE";
      } else if (key === "Backspace") {
        handleBackSpace();
        key = "<==";
      } else if (/^[0-9+\-*/.]*$/.test(key)) {
        onClick(key);
      } else {
        return;
      }
      
      const button = document.querySelector(`[data-value="${key.toUpperCase()}"]`);
      if (button) {
        button.classList.add("active");
        setTimeout(() => button.classList.remove("active"), 100);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClick, handleClear, handleCalculate, handleBackSpace]);

  return (
    <div>
      <div className="button-reset">
        <Button value="DELETE" onClick={handleClear} type="operator" />
        <Button value="<==" onClick={handleBackSpace} type="operator" />
      </div>

      <div className="button-grid">
        {buttons.map((btn) => {
          if (btn === "=")
            return <Button key={btn} value={btn} onClick={handleCalculate} />;
          if ("+-/*".includes(btn))
            return (
              <Button key={btn} value={btn} onClick={onClick} type="operator" />
            );
          return <Button key={btn} value={btn} onClick={onClick} />;
        })}
      </div>
    </div>
  );
}
