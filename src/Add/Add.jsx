import React from "react";
import "./Add.css";

function Add({ updateincrement, count }) {
  return (
    <div className="add" onClick={updateincrement}>
      {count}
    </div>
  );
}

export default Add;
