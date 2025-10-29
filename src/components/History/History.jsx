import "./History.css";
export default function History({history}) {
  return (
    <ul className="history">
      {history.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  )
}