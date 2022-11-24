import React from "react";
import "./Subtract.css";

function Subtract({ items, setFunc }) {
  return (
    <button
    className="add"
    type="button"
    onClick={() => {
      setFunc(items - 1);
    }}
  >
    -
  </button>
  )
}

export default Subtract;
