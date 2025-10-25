import Button from "../Button/Button";

export default function ButtonGrid({onClick, handleCalculate, handleClear}) {
  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "C", "0", "=", "+"
  ]

  return (
    <div className="button-grid">
      {buttons.map((btn) => {
        if (btn === "=") return <Button key={btn} value={btn} onClick={handleCalculate}/>
        if (btn === "C") return <Button key={btn} value={btn} onClick={handleClear}/>
        return <Button key={btn} value={btn} onClick={onClick}/>
      })}
    </div>
  )
}