import Button from "../Button/Button";
import "./ButtonGrid.css";

export default function ButtonGrid({ onClick, handleCalculate, handleClear }) {
  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    ".", "0", "=", "+",
  ];

  return (
    <div>
      <div className="button-reset">
        <Button value="RESET" onClick={handleClear} type="operator"/>
      </div>

      <div className="button-grid">
        {buttons.map((btn) => {
          if (btn === "=") return <Button key={btn} value={btn} onClick={handleCalculate}/>;
          if ("+-/*".includes(btn)) return <Button key={btn} value={btn} onClick={onClick} type="operator"/>;
          return <Button key={btn} value={btn} onClick={onClick} />;
        })}
      </div>
    </div>
  );
}
