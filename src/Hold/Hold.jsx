import React, { useState } from "react";
import "./Hold.css";

function Hold({ updatelock, color }) {
  if (color === "green") {
    return (
      <button
        className="hold"
        onClick={updatelock}
        style={{ backgroundColor: "LightGreen" }}
      ></button>
    );
  } else if (color === "pink") {
    return (
      <button
        className="hold"
        onClick={updatelock}
        style={{ backgroundColor: "#FDD7E4" }}
      ></button>
    );
  }
}

export default Hold;
