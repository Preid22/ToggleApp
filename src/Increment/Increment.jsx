import React from "react";
import "./Increment.css";

function AddClick({ updateincrement, count }) {
  return (
    <div className="increment" onClick={updateincrement}>
      {count}
    </div>
  );
}

export default Increment;
