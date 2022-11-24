import React from "react";
import "./Subtract.css";

function Subtract({ items, setFunc }) {
  return (
    <button
    className="add"
    type="button"
    onClick={() => {
      setFunc([...items, items.slice(items.length)]);
    }}
  >
    -
  </button>
  )
}

export default Subtract;
