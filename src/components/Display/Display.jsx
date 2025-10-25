import "./Display.css";
export default function Display({value}) {
  return (
      <input type="text" value={value} className="display" readOnly />
  )
}