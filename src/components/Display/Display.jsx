import "./Display.css";
export default function Display({value, onChange, handleKeyDown}) {
  return (
      <input type="text" value={value} className="display" onChange={onChange} onKeyDown={handleKeyDown}/>
  )
}