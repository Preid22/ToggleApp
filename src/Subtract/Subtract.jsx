import React from "react";
import "./Subtract.css";

function Subtract({ items, setFunc }) {
  return (
    <button
    className="add"
    type="button"
    onClick={() => {
      setFunc([...items.slice(0, items.length-1) ]);
    }}
  >
    -
  </button>
  )
}

export default Subtract;
