import { useState } from "react";
import "./Display.css";
export default function Display({value, onChange, handleKeyDown}) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    if(!value) return;

    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch (err) {
      console.error("Error", err);
    }
  }

  return (
    <div className="display-wrapper">
      <input type="text" value={value} className="display" onChange={onChange} onKeyDown={handleKeyDown} onClick={handleCopy} readOnly/>
      {copied && <span className="copied">Copied!</span>}
    </div>
  )
}