export default function Button({onClick, value}) {
  return(
    <button onClick={() => onClick(value)}>{value}</button>
  )
}