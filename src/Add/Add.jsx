import React from "react";
import "./Add.css";

function Add({ items, setFunc }) {
  return (
    <button
      className="add"
      type="button"
      onClick={() => {
        setFunc([...items, 0]);
      }}
    >
      +
    </button>
  );
}

export default Add;
