import { useEffect } from "react";
import Button from "../Button/Button";
import "./ButtonGrid.css";
import tapSound from "../sounds/tap.mp3";
import delSound from "../sounds/del.mp3";
import enterSound from "../sounds/enter.mp3";

export default function ButtonGrid({
  onClick,
  handleCalculate,
  handleClear,
  handleBackSpace,
}) {
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

function playSound(type) {
  const audio = new Audio(type === "operator" ? delSound : type === "enter" ? enterSound : tapSound);
  audio.play();
}

  useEffect(() => {
    function handleKeyDown(e) {
      e.preventDefault();

      let key = e.key;

      if (key === "Enter") {
        playSound("enter");
        handleCalculate();
        key = "=";
      } else if (key === "Delete") {
        playSound("operator");
        handleClear();
        key = "DELETE";
      } else if (key === "Backspace") {
        playSound("operator");
        handleBackSpace();
        key = "<==";
      } else if (/^[0-9+\-*/.]$/.test(key)) {
        playSound();
        onClick(key);
      } else {
        return;
      }

      const button = document.querySelector(
        `[data-value="${key.toUpperCase()}"]`
      );
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
        <Button value="DELETE" onClick={() => {
              playSound("operator");
              handleClear();
            }} type="operator" />
        <Button value="<==" onClick={() => {
              playSound("operator");
              handleClear();
            }} type="operator" />
      </div>

      <div className="button-grid">
        {buttons.map((btn) => {
          if (btn === "=")
            return <Button key={btn} value={btn} onClick={() => {
              playSound("enter");
              handleCalculate();
            }} />;
          if ("+-/*".includes(btn))
            return (
              <Button key={btn} value={btn} onClick={() => {
              playSound();
              onClick(btn);
            }} type="operator" />
            );
          return <Button key={btn} value={btn} onClick={() => {
              playSound();
              onClick(btn);
            }} />;
        })}
      </div>
    </div>
  );
}
