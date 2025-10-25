import "./Button.css"
export default function Button({onClick, value, type}) {
  return(
    <button onClick={() => onClick(value)} className={`button ${type}`}>{value}</button>
  )
}